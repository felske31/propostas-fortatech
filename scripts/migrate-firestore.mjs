// Execute primeiro SEM --apply. Nenhuma gravação ocorre no modo de análise.
// Autenticação: ADC de uma conta administrativa; nunca inclua credenciais no Git.
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { randomBytes } from 'node:crypto';
import { writeFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const project = args[args.indexOf('--project') + 1];
if (!args.includes('--project') || project !== 'gerador-de-propostas-ft') {
  throw new Error('Informe explicitamente --project gerador-de-propostas-ft');
}
const apply = args.includes('--apply');
initializeApp({ credential: applicationDefault(), projectId: project });
const db = getFirestore();
const auth = getAuth();
const AREAS = ['Inside Sales', 'Key Account', 'Projetos', 'Outside Sales'];
const ADMIN_UID = 'rFmJHTB3olfvPNw5wDatB6pEfcM2';
const MANAGERS = {
  'priscila.badaro@fortatech.com.br': 'Inside Sales',
  'daniela.rocha@fortatech.com.br': 'Inside Sales',
  'rodrigo.galski@fortatech.com.br': 'Projetos',
  'ricardo.andrade@fortatech.com.br': 'Outside Sales',
  'silvio.nascimento@fortatech.com.br': 'Key Account',
  'thiago.selmann@fortatech.com.br': 'Key Account'
};
const users = [];
let nextPageToken;
do {
  const page = await auth.listUsers(1000, nextPageToken);
  users.push(...page.users);
  nextPageToken = page.pageToken;
} while (nextPageToken);
const byUid = new Map(users.map(user => [user.uid, user]));
const byEmail = new Map(users.filter(u => u.email).map(u => [u.email.toLowerCase(), u]));
const [profiles, proposals, access, directory] = await Promise.all([
  db.collection('fortatech_users').get(), db.collection('fortatech_proposals').get(),
  db.collection('fortatech_access').get(), db.collection('fortatech_directory').get()
]);
const issues = [];
const plans = [];
const profilesByUid = new Map();
const cleanAreas = profile => AREAS.filter(area =>
  (Array.isArray(profile.areas) && profile.areas.includes(area))
  || String(profile.title || '').includes(area)
  || profile.managedArea === area);
function string(value, maximum, label, minimum = 0) {
  if (typeof value !== 'string' || value.length < minimum || value.length > maximum) throw new Error(label);
  return value;
}
function iso(value, label) {
  const date = new Date(value);
  if (!value || Number.isNaN(date.getTime())) throw new Error(label);
  return date.toISOString();
}
for (const snapshot of profiles.docs) {
  const old = snapshot.data();
  const user = byUid.get(snapshot.id) || byEmail.get(String(old.email || '').toLowerCase());
  if (!user || !user.email || user.disabled) {
    issues.push('Perfil sem conta Auth ativa: ' + snapshot.id);
    continue;
  }
  if (profilesByUid.has(user.uid)) {
    issues.push('Perfis duplicados para UID: ' + user.uid);
    continue;
  }
  try {
    const cleaned = {
      id: user.uid,
      name: string(old.name, 200, 'nome', 2),
      email: string(user.email, 254, 'e-mail', 3),
      phone: string(old.phone || '', 80, 'telefone'),
      role: ['admin', 'gestor', 'consultor'].includes(old.role) ? old.role : 'consultor',
      title: string(old.title || 'Inside Sales', 400, 'área'),
      areas: cleanAreas(old),
      createdAt: iso(old.createdAt, 'data de cadastro')
    };
    if ('managedArea' in old) cleaned.managedArea = AREAS.includes(old.managedArea) ? old.managedArea : null;
    profilesByUid.set(user.uid, cleaned);
    plans.push({ collection: 'fortatech_users', id: user.uid, data: cleaned });
    if (user.uid !== ADMIN_UID) plans.push({
      collection: 'fortatech_directory', id: user.uid,
      data: { id: user.uid, name: cleaned.name, title: cleaned.title, areas: cleaned.areas }
    });
  } catch (error) { issues.push('Perfil ' + snapshot.id + ': campo inválido ' + error.message); }
}
for (const snapshot of proposals.docs) {
  const old = snapshot.data();
  const user = byUid.get(old.userId) || byEmail.get(String(old.userEmail || '').toLowerCase());
  const author = user && profilesByUid.get(user.uid);
  if (!author) { issues.push('Proposta sem proprietário validado: ' + snapshot.id); continue; }
  if (old.userEmail && user.email.toLowerCase() !== String(old.userEmail).toLowerCase()) {
    issues.push('Conflito entre UID e e-mail na proposta: ' + snapshot.id); continue;
  }
  try {
    const stateJson = typeof old.stateJson === 'string' ? old.stateJson : JSON.stringify(old.stateData);
    const state = JSON.parse(stateJson);
    if (!state || typeof state !== 'object' || Array.isArray(state)) throw new Error('estado da proposta');
    if (!Number.isFinite(old.totalValue) || old.totalValue < 0 || old.totalValue > 1000000000) throw new Error('valor total');
    if (!['draft', 'sent', 'approved', 'rejected'].includes(old.status)) throw new Error('status');
    const data = {
      id: string(snapshot.id, 150, 'ID', 1),
      userId: user.uid, userName: author.name, userEmail: author.email, userPhone: author.phone,
      userArea: author.title, accessAreas: author.areas,
      clientName: string(old.clientName, 300, 'cliente', 1),
      clientCity: string(old.clientCity || '', 200, 'cidade'),
      proposalNumber: string(old.proposalNumber, 150, 'número', 1),
      proposalDate: string(old.proposalDate, 10, 'data', 10),
      totalValue: old.totalValue, status: old.status,
      stateJson: string(stateJson, 750000, 'documento serializado', 2),
      createdAt: iso(old.createdAt, 'data de criação'),
      updatedAt: iso(old.updatedAt || old.createdAt, 'data de atualização'),
      savedAt: FieldValue.serverTimestamp()
    };
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.proposalDate)) throw new Error('data da proposta');
    plans.push({ collection: 'fortatech_proposals', id: snapshot.id, data });
  } catch (error) { issues.push('Proposta ' + snapshot.id + ': campo inválido ' + error.message); }
}
const admin = byUid.get(ADMIN_UID);
if (!admin || admin.email !== 'admin@fortatech.com.br' || admin.disabled) {
  issues.push('A conta administrativa esperada não foi confirmada no Firebase Auth.');
}
console.log(JSON.stringify({
  project, mode: apply ? 'APLICAR' : 'ANALISAR', profiles: profiles.size,
  proposals: proposals.size, plannedWrites: plans.length,
  trustedManagersFound: Object.keys(MANAGERS).filter(address => byEmail.has(address)),
  ownershipAssumption: 'UID Auth; somente se ausente, correspondência exata de e-mail Auth. Revise antes de aplicar.',
  issues
}, null, 2));
if (issues.length) throw new Error('Migração interrompida. Corrija TODOS os registros acima e repita a análise.');
if (!apply) {
  console.log('Nenhuma alteração feita. Revise o relatório antes de executar novamente com --apply.');
  process.exit(0);
}
const backupPath = 'firestore-backup-' + new Date().toISOString().replace(/[:.]/g, '-') + '.json';
await writeFile(backupPath, JSON.stringify({
  project, createdAt: new Date().toISOString(),
  authIdentities: users.map(({ uid, email, emailVerified, disabled }) => ({ uid, email, emailVerified, disabled })),
  profiles: profiles.docs.map(doc => ({ id: doc.id, data: doc.data() })),
  proposals: proposals.docs.map(doc => ({ id: doc.id, data: doc.data() })),
  access: access.docs.map(doc => ({ id: doc.id, data: doc.data() })),
  directory: directory.docs.map(doc => ({ id: doc.id, data: doc.data() }))
}, null, 2), { mode: 0o600, flag: 'wx' });
console.log('Backup privado criado em ' + backupPath + '. Mantenha fora do Git.');
const existingAccess = new Map(access.docs.map(doc => [doc.id, doc.data()]));
const roleWrites = [];
for (const user of users) {
  const role = user.uid === ADMIN_UID ? 'admin' : MANAGERS[user.email?.toLowerCase()] ? 'gestor' : null;
  if (!role) continue;
  let validAfter = Math.ceil(Date.now() / 1000);
  const existing = existingAccess.get(user.uid);
  if (existing?.migrationVersion === 1 && existing.role === role
      && existing.area === (role === 'gestor' ? MANAGERS[user.email.toLowerCase()] : null)) {
    validAfter = existing.validAfter;
  } else if (role === 'admin') {
    // Elimina a senha pública e invalida as sessões anteriores ANTES de autorizar o papel.
    await auth.updateUser(user.uid, { password: randomBytes(48).toString('base64url') });
    await auth.revokeRefreshTokens(user.uid);
    validAfter = Math.ceil(Date.now() / 1000);
    const resetLink = await auth.generatePasswordResetLink(user.email);
    console.log('LINK PRIVADO PARA O RESPONSÁVEL ADMINISTRATIVO (não publique):\n' + resetLink);
  }
  roleWrites.push({
    collection: 'fortatech_access', id: user.uid,
    data: { role, area: role === 'gestor' ? MANAGERS[user.email.toLowerCase()] : null,
      validAfter, migrationVersion: 1 }
  });
}
for (const batchPlans of [plans, roleWrites]) {
  // Papéis só são concedidos após os registros estarem migrados.
  for (let offset = 0; offset < batchPlans.length; offset += 400) {
    const batch = db.batch();
    for (const item of batchPlans.slice(offset, offset + 400)) {
      batch.set(db.collection(item.collection).doc(item.id), item.data);
    }
    await batch.commit();
  }
}
console.log('Migração concluída. Verifique e-mails dos gestores/admin e faça novo login.');
console.log('Agora publique o aplicativo atualizado e as regras, conforme FIRESTORE_MIGRATION.md.');
