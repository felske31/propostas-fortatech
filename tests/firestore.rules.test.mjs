import { readFile } from 'node:fs/promises';
import { after, before, beforeEach, test } from 'node:test';
import assert from 'node:assert/strict';
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, query, where, serverTimestamp, deleteField } from 'firebase/firestore';

let env;
const projectId = 'demo-fortatech-rules';
const email = uid => uid + '@fortatech.com.br';
const profile = (uid, areas = ['Inside Sales']) => ({
  id: uid, name: 'Consultor ' + uid, email: email(uid), phone: '11999999999',
  role: 'consultor', title: areas.join(' / '), areas, createdAt: '2026-10-01T12:00:00.000Z'
});
const proposal = (uid, id, areas = ['Inside Sales']) => ({
  id, userId: uid, userName: 'Consultor ' + uid, userEmail: email(uid), userPhone: '11999999999',
  userArea: areas.join(' / '), accessAreas: areas,
  clientName: 'Oficina', clientCity: 'Santo André', proposalNumber: 'FT-123',
  proposalDate: '2026-11-16', totalValue: 7000, status: 'sent',
  stateJson: '{"client":{},"catalog":[]}', createdAt: '2026-10-01T12:00:00.000Z',
  updatedAt: '2026-11-16T12:00:00.000Z', savedAt: serverTimestamp()
});
const db = (uid, options = {}) => env.authenticatedContext(uid, {
  email: email(uid), email_verified: true, auth_time: 100,
  firebase: { sign_in_provider: 'password' }, ...options
}).firestore();
const ref = (database, id = 'alice-proposal') => doc(database, 'fortatech_proposals', id);
before(async () => {
  env = await initializeTestEnvironment({
    projectId, firestore: { rules: await readFile('firestore.rules', 'utf8') }
  });
});
after(async () => { if (env) await env.cleanup(); });
beforeEach(async () => {
  await env.clearFirestore();
  await env.withSecurityRulesDisabled(async context => {
    const database = context.firestore();
    await Promise.all([
      setDoc(doc(database, 'fortatech_users', 'alice'), profile('alice')),
      setDoc(doc(database, 'fortatech_users', 'bob'), profile('bob', ['Projetos'])),
      setDoc(doc(database, 'fortatech_access', 'admin'), { role: 'admin', validAfter: 10 }),
      setDoc(doc(database, 'fortatech_access', 'manager'), { role: 'gestor', area: 'Inside Sales', validAfter: 10 }),
      setDoc(doc(database, 'fortatech_directory', 'alice'), { id: 'alice', name: 'Consultor alice', title: 'Inside Sales', areas: ['Inside Sales'] }),
      setDoc(doc(database, 'fortatech_directory', 'bob'), { id: 'bob', name: 'Consultor bob', title: 'Projetos', areas: ['Projetos'] }),
      setDoc(ref(database), proposal('alice', 'alice-proposal')),
      setDoc(ref(database, 'bob-proposal'), proposal('bob', 'bob-proposal', ['Projetos']))
    ]);
  });
});

test('unauthenticated clients cannot get, list, create, update or delete', async () => {
  const database = env.unauthenticatedContext().firestore();
  await assertFails(getDoc(ref(database)));
  await assertFails(getDocs(collection(database, 'fortatech_proposals')));
  await assertFails(setDoc(ref(database, 'new'), proposal('alice', 'new')));
  await assertFails(updateDoc(ref(database), { status: 'approved', savedAt: serverTimestamp() }));
  await assertFails(deleteDoc(ref(database)));
});
test('owner can read and query own proposals; unscoped query is denied', async () => {
  const database = db('alice');
  await assertSucceeds(getDoc(ref(database)));
  const result = await assertSucceeds(getDocs(query(collection(database, 'fortatech_proposals'), where('userId', '==', 'alice'))));
  assert.equal(result.size, 1);
  await assertFails(getDocs(collection(database, 'fortatech_proposals')));
  await assertFails(getDoc(ref(database, 'bob-proposal')));
  await assertFails(getDocs(query(collection(database, 'fortatech_proposals'), where('userId', '==', 'bob'))));
});
test('owner can create, edit, change status and delete valid own proposal', async () => {
  const database = db('alice');
  const target = ref(database, 'new');
  await assertSucceeds(setDoc(target, proposal('alice', 'new')));
  await assertSucceeds(updateDoc(target, { totalValue: 8000, savedAt: serverTimestamp() }));
  await assertSucceeds(updateDoc(target, { status: 'approved', savedAt: serverTimestamp() }));
  await assertSucceeds(deleteDoc(target));
});
test('another user cannot write or delete an existing proposal', async () => {
  const database = db('bob');
  await assertFails(updateDoc(ref(database), { status: 'approved', savedAt: serverTimestamp() }));
  await assertFails(deleteDoc(ref(database)));
});
test('owner identity, creation time and access areas cannot be changed', async () => {
  for (const change of [
    { userId: 'bob' }, { userEmail: email('bob') }, { userName: 'Outra pessoa' },
    { userPhone: '0' }, { userArea: 'Projetos' }, { accessAreas: ['Projetos'] },
    { id: 'other' }, { createdAt: '2026-11-01T12:00:00.000Z' }
  ]) await assertFails(updateDoc(ref(db('alice')), { ...change, savedAt: serverTimestamp() }));
});
test('create cannot impersonate another UID or author metadata', async () => {
  const database = db('alice');
  await assertFails(setDoc(ref(database, 'fake'), proposal('bob', 'fake', ['Projetos'])));
  await assertFails(setDoc(ref(database, 'fake'), { ...proposal('alice', 'fake'), userName: 'Impostor' }));
  await assertFails(setDoc(ref(database, 'fake'), { ...proposal('alice', 'fake'), accessAreas: ['Projetos'] }));
});
test('creates AND updates enforce schema, sizes, types, timestamps and states', async () => {
  for (const change of [
    { status: 'administrator' }, { totalValue: -1 }, { totalValue: 1e15 },
    { totalValue: '7000' }, { clientName: 'x'.repeat(301) }, { clientCity: 12 },
    { stateJson: 'x'.repeat(750001) }, { accessAreas: ['unknown'] },
    { accessAreas: [1] }, { accessAreas: ['Inside Sales', 'Inside Sales'] },
    { extraData: 'injected' }, { savedAt: new Date('2020-01-01') }
  ]) {
    await assertFails(setDoc(ref(db('alice'), 'invalid'), { ...proposal('alice', 'invalid'), ...change }));
    await assertFails(updateDoc(ref(db('alice')), { ...change, ...(change.savedAt ? {} : { savedAt: serverTimestamp() }) }));
  }
  await assertFails(updateDoc(ref(db('alice')), { clientName: deleteField(), savedAt: serverTimestamp() }));
  const missing = proposal('alice', 'missing');
  delete missing.stateJson;
  await assertFails(setDoc(ref(db('alice'), 'missing'), missing));
});
test('manager can query own area and own proposals but cannot list all or read another area', async () => {
  const database = db('manager');
  await assertSucceeds(getDoc(ref(database)));
  await assertSucceeds(getDocs(query(collection(database, 'fortatech_proposals'), where('accessAreas', 'array-contains', 'Inside Sales'))));
  await assertSucceeds(getDocs(query(collection(database, 'fortatech_proposals'), where('userId', '==', 'manager'))));
  await assertFails(getDocs(collection(database, 'fortatech_proposals')));
  await assertFails(getDoc(ref(database, 'bob-proposal')));
  await assertFails(updateDoc(ref(database, 'bob-proposal'), { status: 'approved', savedAt: serverTimestamp() }));
  await assertSucceeds(updateDoc(ref(database), { status: 'approved', savedAt: serverTimestamp() }));
  await assertFails(updateDoc(ref(database), { accessAreas: ['Projetos'], savedAt: serverTimestamp() }));
});
test('admin can query and manage all proposals, but cannot forge identity', async () => {
  const database = db('admin');
  assert.equal((await assertSucceeds(getDocs(collection(database, 'fortatech_proposals')))).size, 2);
  await assertSucceeds(updateDoc(ref(database), { status: 'rejected', savedAt: serverTimestamp() }));
  await assertFails(updateDoc(ref(database), { userId: 'admin', savedAt: serverTimestamp() }));
  await assertSucceeds(deleteDoc(ref(database, 'bob-proposal')));
});
test('unverified or revoked/stale staff sessions do not grant privileged access', async () => {
  await assertFails(getDoc(ref(db('admin', { email_verified: false }))));
  await assertFails(getDoc(ref(db('manager', { auth_time: 1 }))));
  await assertFails(getDocs(collection(db('admin', { auth_time: 1 }), 'fortatech_proposals')));
});
test('private profile is readable ONLY by its owner, including against admins', async () => {
  await assertSucceeds(getDoc(doc(db('alice'), 'fortatech_users', 'alice')));
  await assertFails(getDoc(doc(db('bob'), 'fortatech_users', 'alice')));
  await assertFails(getDoc(doc(db('admin'), 'fortatech_users', 'alice')));
  await assertFails(getDocs(collection(db('alice'), 'fortatech_users')));
});
test('profile data cannot escalate roles, and writes remain validated', async () => {
  const database = db('alice');
  const target = doc(database, 'fortatech_users', 'alice');
  await assertSucceeds(updateDoc(target, { name: 'Novo nome' }));
  await assertFails(updateDoc(target, { role: 'admin' }));
  await assertFails(updateDoc(target, { name: 123 }));
  await assertFails(updateDoc(target, { name: 'x'.repeat(201) }));
  await assertFails(updateDoc(target, { email: email('bob') }));
  await assertFails(updateDoc(target, { name: deleteField() }));
  await assertFails(updateDoc(target, { password: 'plaintext' }));
  await assertFails(updateDoc(target, { areas: [100] }));
  await assertFails(setDoc(doc(db('charlie'), 'fortatech_users', 'charlie'), { ...profile('charlie'), role: 'admin' }));
  await assertSucceeds(setDoc(doc(db('charlie'), 'fortatech_users', 'charlie'), profile('charlie')));
});
test('authorization records cannot be written even by a client admin', async () => {
  for (const uid of ['alice', 'admin']) {
    await assertFails(setDoc(doc(db(uid), 'fortatech_access', uid), { role: 'admin', validAfter: 0 }));
    await assertFails(deleteDoc(doc(db(uid), 'fortatech_access', 'admin')));
  }
  await assertFails(getDoc(doc(db('alice'), 'fortatech_access', 'admin')));
  await assertSucceeds(getDoc(doc(db('admin'), 'fortatech_access', 'admin')));
});
test('commercial directory preserves scoped seller lists without private fields', async () => {
  await assertSucceeds(getDocs(collection(db('admin'), 'fortatech_directory')));
  await assertSucceeds(getDocs(query(collection(db('manager'), 'fortatech_directory'), where('areas', 'array-contains', 'Inside Sales'))));
  await assertFails(getDocs(collection(db('manager'), 'fortatech_directory')));
  await assertFails(getDoc(doc(db('manager'), 'fortatech_directory', 'bob')));
  const target = doc(db('alice'), 'fortatech_directory', 'alice');
  const data = { id: 'alice', name: 'Consultor alice', title: 'Inside Sales', areas: ['Inside Sales'] };
  await assertSucceeds(setDoc(target, data));
  await assertFails(setDoc(target, { ...data, email: email('alice') }));
  await assertFails(updateDoc(target, { name: 'Impostor' }));
});
test('unknown collections and orphan subcollections are denied', async () => {
  await assertFails(setDoc(doc(db('alice'), 'unknown', 'alice'), { anything: true }));
  await assertFails(setDoc(doc(db('alice'), 'fortatech_users', 'alice', 'private', 'x'), { secret: 'x' }));
  await assertFails(getDoc(doc(db('admin'), 'unknown', 'alice')));
});
test('an anonymous Firebase identity cannot access data', async () => {
  await assertFails(getDoc(ref(db('alice', { firebase: { sign_in_provider: 'anonymous' } }))));
});
