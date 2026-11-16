const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function harness({ legacy = {}, failLogin = false, failCreate = false } = {}) {
  const storage = new Map(Object.entries(legacy));
  const listeners = [];
  const events = [];
  let authCallback, rejectWrites = false, pendingWrite = null, releaseWrite;
  const profiles = new Map();
  const access = new Map();
  const makeUser = id => ({
    uid: id, email: id + '@fortatech.com.br', emailVerified: true,
    getIdTokenResult: async () => ({ claims: { auth_time: 100 } }),
    sendEmailVerification: async () => {}
  });
  const auth = {
    currentUser: null,
    onAuthStateChanged: callback => { authCallback = callback; },
    signInWithEmailAndPassword: async email => {
      if (failLogin) throw Object.assign(new Error('Invalid'), { code: 'auth/invalid-credential' });
      auth.currentUser = makeUser(email.split('@')[0]);
      authCallback(auth.currentUser);
      return { user: auth.currentUser };
    },
    createUserWithEmailAndPassword: async email => {
      if (failCreate) throw Object.assign(new Error('Offline'), { code: 'auth/network-request-failed' });
      auth.currentUser = makeUser(email.split('@')[0]);
      authCallback(auth.currentUser);
      return { user: auth.currentUser };
    },
    signOut: async () => { auth.currentUser = null; authCallback(null); },
    sendPasswordResetEmail: async () => {}
  };
  function collection(path, clauses = []) {
    return {
      where: (...clause) => collection(path, [...clauses, clause]),
      doc: (id = 'generated-id') => ({
        id,
        get: async () => {
          const map = path === 'fortatech_users' ? profiles : access;
          const value = map.get(id);
          return { exists: !!value, data: () => value };
        },
        set: async value => {
          if (rejectWrites) throw new Error('permission-denied');
          if (pendingWrite) await pendingWrite;
          if (path === 'fortatech_users') profiles.set(id, value);
          events.push({ operation: 'set', path, id, value });
        },
        update: async value => {
          if (rejectWrites) throw new Error('permission-denied');
          events.push({ operation: 'update', path, id, value });
        },
        delete: async () => {
          if (rejectWrites) throw new Error('permission-denied');
          events.push({ operation: 'delete', path, id });
        }
      }),
      onSnapshot: (callback, onError) => {
        const entry = { path, clauses, callback, onError, stopped: false };
        listeners.push(entry);
        return () => { entry.stopped = true; };
      }
    };
  }
  const firestore = () => ({ collection });
  firestore.FieldValue = { serverTimestamp: () => 'SERVER_TIME' };
  const firebase = {
    apps: [], initializeApp: () => ({}), auth: () => auth, firestore
  };
  const context = vm.createContext({
    firebase, console: { log() {}, warn() {}, error() {} },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: key => storage.delete(key)
    },
    document: { readyState: 'loading', getElementById: () => null }
  });
  vm.runInContext(fs.readFileSync('v2-auth-db.js', 'utf8') + '\nthis.api = { V2Auth, V2DB };', context);
  const emit = (listener, records) => listener.callback({
    docs: records.map(record => ({ id: record.id, data: () => record }))
  });
  const proposal = (owner, id = 'p1') => ({
    id, userId: owner, userName: 'Pessoa ' + owner, userEmail: owner + '@fortatech.com.br',
    userPhone: '', userArea: 'Inside Sales', accessAreas: ['Inside Sales'],
    clientName: 'Oficina', clientCity: '', proposalNumber: id, proposalDate: '2026-11-16',
    totalValue: 100, status: 'sent', stateJson: '{"client":{}}',
    createdAt: '2026-11-01T00:00:00.000Z', updatedAt: '2026-11-01T00:00:00.000Z'
  });
  return {
    ...context.api, listeners, events, profiles, access, storage, emit, proposal, auth,
    reject: () => { rejectWrites = true; },
    defer: () => { pendingWrite = new Promise(resolve => { releaseWrite = resolve; }); },
    release: () => releaseWrite(),
    async signIn(id) {
      profiles.set(id, {
        id, name: 'Pessoa ' + id, email: id + '@fortatech.com.br', phone: '',
        role: 'consultor', title: 'Inside Sales', areas: ['Inside Sales']
      });
      return context.api.V2Auth.login(id + '@fortatech.com.br', 'strong-password');
    }
  };
}
const tick = () => new Promise(resolve => setImmediate(resolve));

test('does not query Firestore or create admin before authentication', () => {
  const h = harness();
  assert.equal(h.listeners.length, 0);
  assert.equal(h.events.length, 0);
  assert.equal(h.V2Auth.getCurrentUser(), null);
});
test('forged local session is ignored and unsynced proposals are archived without passwords', () => {
  const h = harness({ legacy: {
    fortatech_v2_users: JSON.stringify([{ id: 'fake', email: 'fake@x.com', password: 'secret' }]),
    fortatech_v2_session: JSON.stringify({ id: 'fake', role: 'admin' }),
    fortatech_v2_proposals: JSON.stringify([{ id: 'unsynced' }])
  } });
  assert.equal(h.V2Auth.getCurrentUser(), null);
  assert.equal(h.V2DB.getProposals().length, 0);
  const backup = JSON.parse(h.storage.get('fortatech_v2_legacy_backup'));
  assert.equal(backup.proposals[0].id, 'unsynced');
  assert.equal('password' in backup.users[0], false);
});
test('rejected Firebase login never falls back to a plaintext local password', async () => {
  const h = harness({ failLogin: true, legacy: {
    fortatech_v2_users: JSON.stringify([{ id: 'alice', email: 'alice@fortatech.com.br', password: 'password' }])
  } });
  await assert.rejects(h.V2Auth.login('alice@fortatech.com.br', 'password'));
  assert.equal(h.V2Auth.getCurrentUser(), null);
  assert.equal(h.listeners.length, 0);
});
test('consultant subscription is constrained by authenticated UID', async () => {
  const h = harness();
  await h.signIn('alice');
  const listener = h.listeners.find(item => item.path === 'fortatech_proposals');
  assert.equal(JSON.stringify(listener.clauses), JSON.stringify([['userId', '==', 'alice']]));
  assert.equal(h.listeners.some(item => item.path === 'fortatech_users'), false);
});
test('local profile role cannot produce administrative access', async () => {
  const h = harness();
  h.profiles.set('alice', { id: 'alice', email: 'alice@fortatech.com.br', name: 'Alice', role: 'admin' });
  const session = await h.V2Auth.login('alice@fortatech.com.br', 'strong-password');
  assert.equal(session.role, 'consultor');
  assert.equal(h.listeners.filter(item => item.path === 'fortatech_proposals').length, 1);
});
test('trusted verified manager subscribes to own proposals and exact area', async () => {
  const h = harness();
  h.access.set('manager', { role: 'gestor', area: 'Inside Sales', validAfter: 10 });
  await h.signIn('manager');
  const queries = h.listeners.filter(item => item.path === 'fortatech_proposals');
  assert.equal(queries.length, 2);
  assert.equal(JSON.stringify(queries[1].clauses), JSON.stringify([['accessAreas', 'array-contains', 'Inside Sales']]));
});
test('logout clears cache, unsubscribes and ignores late snapshots', async () => {
  const h = harness();
  await h.signIn('alice');
  const listener = h.listeners[0];
  h.emit(listener, [h.proposal('alice')]);
  assert.equal(h.V2DB.getProposals().length, 1);
  h.V2Auth.logout();
  h.emit(listener, [h.proposal('alice')]);
  assert.equal(listener.stopped, true);
  assert.equal(h.V2DB.getProposals().length, 0);
  assert.equal(h.V2Auth.getCurrentUser(), null);
});
test('account switch never exposes the previous account cache or late results', async () => {
  const h = harness();
  await h.signIn('alice');
  const old = h.listeners[0];
  h.emit(old, [h.proposal('alice')]);
  await h.signIn('bob');
  h.emit(old, [h.proposal('alice')]);
  assert.equal(h.V2Auth.getCurrentUser().id, 'bob');
  assert.equal(h.V2DB.getProposals().length, 0);
});
test('failed cloud save does not change the cache or report success', async () => {
  const h = harness();
  await h.signIn('alice');
  h.reject();
  await assert.rejects(h.V2DB.saveProposal({ stateData: { client: {} } }));
  assert.equal(h.V2DB.getProposals().length, 0);
});
test('save completes only after server acknowledgement', async () => {
  const h = harness();
  await h.signIn('alice');
  h.defer();
  let completed = false;
  const write = h.V2DB.saveProposal({ stateData: { client: {} } }).then(() => { completed = true; });
  await tick();
  assert.equal(completed, false);
  assert.equal(h.V2DB.getProposals().length, 0);
  h.release();
  await write;
  assert.equal(completed, true);
  assert.equal(h.V2DB.getProposals().length, 1);
  const saved = h.events.find(event => event.path === 'fortatech_proposals').value;
  assert.equal('stateData' in saved, false);
  assert.equal(typeof saved.stateJson, 'string');
});
test('rejected Auth signup does not create a phantom local account', async () => {
  const h = harness({ failCreate: true });
  await assert.rejects(h.V2Auth.signUp({
    name: 'Alice Silva', email: 'alice@fortatech.com.br', password: 'strong-password',
    areas: ['Inside Sales']
  }));
  assert.equal(h.V2Auth.getCurrentUser(), null);
  assert.equal(h.events.length, 0);
});
test('default administrator passwords are rejected before Firebase login', async () => {
  const h = harness();
  await assert.rejects(h.V2Auth.login('admin@fortatech.com.br', 'admin123'), /desativada/);
  assert.equal(h.auth.currentUser, null);
});
