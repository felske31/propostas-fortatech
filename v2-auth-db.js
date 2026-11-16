// FORTA TECH — autenticação real, consultas autorizadas e confirmação das gravações.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCtqiBNp_LiBC_87XSYVwYhxsrt3O9KViU",
  authDomain: "gerador-de-propostas-ft.firebaseapp.com",
  projectId: "gerador-de-propostas-ft",
  storageBucket: "gerador-de-propostas-ft.firebasestorage.app",
  messagingSenderId: "86394446386",
  appId: "1:86394446386:web:97ff29f459daf46cb1122b"
};

const V2_STORAGE_KEYS = {
  USERS: 'fortatech_v2_users', SESSION: 'fortatech_v2_session',
  PROPOSALS: 'fortatech_v2_proposals'
};
const COMMERCIAL_AREAS = ['Inside Sales', 'Key Account', 'Projetos', 'Outside Sales'];
let fbApp = null, fbAuth = null, fbDb = null;
let activeSession = null, proposalCache = [], syncStops = [];
let authEpoch = 0, bootstrapUid = null, bootstrapPromise = null;

function normalizeFbPassword(password) {
  // Compatibilidade exclusiva com contas antigas de 4/5 caracteres.
  const value = String(password || '');
  return value.length < 6 ? value.padEnd(6, '0') : value;
}
function archiveLegacyCache() {
  const users = JSON.parse(localStorage.getItem(V2_STORAGE_KEYS.USERS) || '[]');
  const proposals = JSON.parse(localStorage.getItem(V2_STORAGE_KEYS.PROPOSALS) || '[]');
  if ((users.length || proposals.length) && !localStorage.getItem('fortatech_v2_legacy_backup')) {
    localStorage.setItem('fortatech_v2_legacy_backup', JSON.stringify({
      exportedAt: new Date().toISOString(),
      users: users.map(({ password, ...profile }) => profile),
      proposals
    }));
  }
  // O backup permanece no navegador para recuperar propostas que nunca sincronizaram.
  Object.values(V2_STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
}
function refreshAccountUI() {
  if (typeof renderUserBadge === 'function' && document.readyState !== 'loading') renderUserBadge();
  if (typeof updateProposalsCountBadge === 'function') updateProposalsCountBadge();
  const modal = document.getElementById('proposals-modal-overlay');
  if (modal && modal.style.display === 'flex' && typeof renderProposalsGrid === 'function') renderProposalsGrid();
}
function stopCloudSync() {
  syncStops.forEach(stop => stop());
  syncStops = [];
  proposalCache = [];
}
function reportCloudError(error) {
  console.error('[FortaTech sincronização]', error);
  if (typeof showV2Toast === 'function') {
    showV2Toast('Não foi possível sincronizar. Confira sua conexão e entre novamente.');
  }
}
function getStoredProposals() {
  return V2Auth.getCurrentUser() ? proposalCache.slice() : [];
}
function getStoredUsers() {
  const sellers = new Map();
  for (const proposal of getStoredProposals()) {
    sellers.set(proposal.userId, {
      id: proposal.userId, name: proposal.userName, title: proposal.userArea,
      areas: proposal.accessAreas || [], role: 'consultor'
    });
  }
  if (activeSession) sellers.set(activeSession.id, activeSession);
  return [...sellers.values()];
}
function decodeProposal(doc) {
  const value = doc.data();
  let stateData = value.stateData;
  if (typeof value.stateJson === 'string') {
    try { stateData = JSON.parse(value.stateJson); } catch (_) { stateData = null; }
  }
  return { ...value, id: doc.id, stateData };
}
function startCloudSync(session, epoch) {
  const collection = fbDb.collection('fortatech_proposals');
  const queries = session.role === 'admin' ? [collection] : [
    collection.where('userId', '==', session.id),
    ...(session.role === 'gestor'
      ? [collection.where('accessAreas', 'array-contains', session.managedArea)] : [])
  ];
  const results = queries.map(() => new Map());
  queries.forEach((query, index) => {
    syncStops.push(query.onSnapshot(snapshot => {
      if (epoch !== authEpoch || !activeSession || activeSession.id !== session.id) return;
      results[index] = new Map(snapshot.docs.map(doc => [doc.id, decodeProposal(doc)]));
      const combined = new Map();
      results.forEach(result => result.forEach((value, id) => combined.set(id, value)));
      proposalCache = [...combined.values()].sort((a, b) =>
        String(b.updatedAt || b.createdAt).localeCompare(String(a.updatedAt || a.createdAt)));
      refreshAccountUI();
    }, error => {
      if (epoch !== authEpoch) return;
      // Falha fechada: um listener revogado nunca deixa os seus dados visíveis.
      results[index].clear();
      const combined = new Map();
      results.forEach(result => result.forEach((value, id) => combined.set(id, value)));
      proposalCache = [...combined.values()];
      refreshAccountUI();
      reportCloudError(error);
    }));
  });
}
async function bootstrapSession(user) {
  if (bootstrapUid === user.uid && bootstrapPromise) return bootstrapPromise;
  bootstrapUid = user.uid;
  const epoch = ++authEpoch;
  stopCloudSync();
  activeSession = null;
  bootstrapPromise = (async () => {
    const [profileDoc, accessDoc, token] = await Promise.all([
      fbDb.collection('fortatech_users').doc(user.uid).get({ source: 'server' }),
      fbDb.collection('fortatech_access').doc(user.uid).get({ source: 'server' }),
      user.getIdTokenResult()
    ]);
    if (epoch !== authEpoch || !fbAuth.currentUser || fbAuth.currentUser.uid !== user.uid) return null;
    const profile = profileDoc.exists ? profileDoc.data() : {};
    const access = accessDoc.exists ? accessDoc.data() : {};
    const freshRole = user.emailVerified && Number(token.claims.auth_time) >= Number(access.validAfter)
      && ['admin', 'gestor'].includes(access.role);
    activeSession = {
      id: user.uid, email: user.email,
      name: profile.name || user.displayName || user.email.split('@')[0],
      phone: profile.phone || '', title: profile.title || 'Inside Sales',
      areas: Array.isArray(profile.areas) ? profile.areas : ['Inside Sales'],
      role: freshRole ? access.role : 'consultor',
      managedArea: freshRole && access.role === 'gestor' && COMMERCIAL_AREAS.includes(access.area)
        ? access.area : null
    };
    if (activeSession.role === 'gestor' && !activeSession.managedArea) activeSession.role = 'consultor';
    startCloudSync(activeSession, epoch);
    refreshAccountUI();
    return activeSession;
  })();
  try { return await bootstrapPromise; }
  catch (error) {
    if (epoch === authEpoch) {
      activeSession = null; bootstrapUid = null; bootstrapPromise = null;
      stopCloudSync(); refreshAccountUI();
    }
    throw error;
  }
}
function requireCloudUser() {
  const user = V2Auth.getCurrentUser();
  if (!fbDb || !user) throw new Error('Entre na sua conta para sincronizar com o Firebase.');
  return user;
}
function initV2Database() {
  try { archiveLegacyCache(); } catch (error) { console.warn('Cache legado preservado:', error); }
  if (typeof firebase === 'undefined') return;
  fbApp = firebase.apps.length ? firebase.app() : firebase.initializeApp(FIREBASE_CONFIG);
  fbAuth = firebase.auth();
  fbDb = firebase.firestore();
  fbAuth.onAuthStateChanged(user => {
    if (user) {
      bootstrapSession(user).catch(reportCloudError);
    } else {
      ++authEpoch; bootstrapUid = null; bootstrapPromise = null;
      activeSession = null; stopCloudSync(); refreshAccountUI();
    }
  });
}

const V2Auth = {
  getCurrentUser() {
    return fbAuth && fbAuth.currentUser && activeSession
      && fbAuth.currentUser.uid === activeSession.id ? activeSession : null;
  },
  async login(email, password) {
    if (!fbAuth) throw new Error('Firebase indisponível. Verifique sua conexão.');
    const cleanEmail = String(email || '').trim().toLowerCase();
    if (cleanEmail === 'admin@fortatech.com.br' && ['admin', 'admin123'].includes(password)) {
      throw new Error('A senha administrativa padrão foi desativada. Use “Redefinir senha”.');
    }
    try {
      const credential = await fbAuth.signInWithEmailAndPassword(cleanEmail, normalizeFbPassword(password));
      const session = await bootstrapSession(credential.user);
      if (!session) throw new Error('A sessão mudou. Entre novamente.');
      const profileRef = fbDb.collection('fortatech_users').doc(session.id);
      const profile = await profileRef.get({ source: 'server' });
      if (!profile.exists) {
        await profileRef.set({
          id: session.id, name: session.name, email: session.email, phone: session.phone,
          role: 'consultor', title: session.title, areas: session.areas,
          createdAt: new Date().toISOString()
        });
      }
      return session;
    } catch (error) {
      this.logout();
      if (String(error.code || '').startsWith('auth/')) {
        throw new Error('Não foi possível entrar. Confira e-mail, senha e conexão.');
      }
      throw error;
    }
  },
  async signUp(data) {
    if (!fbAuth) throw new Error('Firebase indisponível. Verifique sua conexão.');
    const email = String(data.email || '').trim().toLowerCase();
    const name = String(data.name || '').trim();
    const areas = COMMERCIAL_AREAS.filter(area => (data.areas || []).includes(area));
    if (!email.includes('@') || email.length > 254) throw new Error('Informe um e-mail válido.');
    if (name.length < 2 || name.length > 200) throw new Error('Informe seu nome, entre 2 e 200 caracteres.');
    if (String(data.password || '').length < 6) throw new Error('A senha deve ter no mínimo 6 caracteres.');
    if (!areas.length) throw new Error('Selecione ao menos uma área comercial.');
    if (String(data.phone || '').length > 80) throw new Error('Telefone muito longo.');
    try {
      const credential = await fbAuth.createUserWithEmailAndPassword(email, data.password);
      const profile = {
        id: credential.user.uid, name, email, phone: data.phone || '', role: 'consultor',
        title: areas.join(' / '), areas, createdAt: new Date().toISOString()
      };
      await fbDb.collection('fortatech_users').doc(profile.id).set(profile);
      // Descarta o bootstrap disparado pela criação e recarrega o perfil completo.
      ++authEpoch; bootstrapUid = null; bootstrapPromise = null;
      return await bootstrapSession(credential.user);
    } catch (error) {
      this.logout();
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('E-mail já cadastrado. Entre na conta ou use “Redefinir senha”.');
      }
      throw error;
    }
  },
  async resetPassword(email) {
    if (!fbAuth) throw new Error('Firebase indisponível.');
    const address = String(email || '').trim();
    if (!address.includes('@')) throw new Error('Preencha seu e-mail de acesso.');
    await fbAuth.sendPasswordResetEmail(address);
  },
  async verifyEmail(email, password) {
    if (!fbAuth) throw new Error('Firebase indisponível.');
    let user = fbAuth.currentUser;
    if (!user) {
      const credential = await fbAuth.signInWithEmailAndPassword(
        String(email || '').trim(), normalizeFbPassword(password));
      user = credential.user;
    }
    if (user.emailVerified) throw new Error('E-mail já verificado. Saia e entre novamente para atualizar seu acesso.');
    await user.sendEmailVerification();
    this.logout();
  },
  logout() {
    ++authEpoch; bootstrapUid = null; bootstrapPromise = null;
    activeSession = null; stopCloudSync();
    if (fbAuth) fbAuth.signOut().catch(reportCloudError);
    refreshAccountUI();
  }
};

const V2DB = {
  doesProposalBelongToArea(proposal, area) {
    return !!proposal && Array.isArray(proposal.accessAreas) && proposal.accessAreas.includes(area);
  },
  canUserManageProposal(user, proposal) {
    return !!user && !!proposal && (user.role === 'admin' || proposal.userId === user.id
      || (user.role === 'gestor' && this.doesProposalBelongToArea(proposal, user.managedArea)));
  },
  async saveProposal(payload) {
    const user = requireCloudUser();
    const previous = payload.id ? this.getProposalById(payload.id) : null;
    if (payload.id && !previous) throw new Error('Proposta não encontrada.');
    if (previous && !this.canUserManageProposal(user, previous)) throw new Error('Acesso negado.');
    const now = new Date().toISOString();
    const record = {
      ...(previous || {
        id: fbDb.collection('fortatech_proposals').doc().id,
        userId: user.id, userName: user.name, userEmail: user.email, userPhone: user.phone,
        userArea: user.title, accessAreas: user.areas, createdAt: now
      }),
      clientName: payload.clientName || 'Cliente Sem Nome', clientCity: payload.clientCity || '',
      proposalNumber: payload.proposalNumber || 'PROP-' + new Date().getFullYear(),
      proposalDate: payload.proposalDate || now.slice(0, 10),
      totalValue: payload.totalValue || 0, status: previous ? previous.status : (payload.status || 'sent'),
      stateJson: JSON.stringify(payload.stateData), updatedAt: now,
      savedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    delete record.stateData;
    if (!record.stateJson || record.stateJson.length > 750000) throw new Error('Proposta muito grande para salvar.');
    await fbDb.collection('fortatech_proposals').doc(record.id).set(record);
    if (V2Auth.getCurrentUser() !== user) throw new Error('A sessão mudou durante a gravação.');
    const localRecord = { ...record, stateData: payload.stateData };
    proposalCache = [localRecord, ...proposalCache.filter(item => item.id !== record.id)];
    refreshAccountUI();
    return localRecord;
  },
  getProposals(filters = {}) {
    const user = V2Auth.getCurrentUser();
    if (!user) return [];
    let list = getStoredProposals().filter(proposal => this.canUserManageProposal(user, proposal));
    if (filters.sellerId && filters.sellerId !== 'all') list = list.filter(p => p.userId === filters.sellerId);
    if (filters.area && filters.area !== 'all') list = list.filter(p => this.doesProposalBelongToArea(p, filters.area));
    if (filters.status && filters.status !== 'all') list = list.filter(p => p.status === filters.status);
    if (filters.query) {
      const search = filters.query.trim().toLowerCase();
      list = list.filter(p => [p.clientName, p.clientCity, p.proposalNumber, p.userName]
        .some(value => String(value || '').toLowerCase().includes(search)));
    }
    return list;
  },
  getProposalById(id) {
    return this.getProposals().find(p => p.id === id) || null;
  },
  async deleteProposal(id) {
    const user = requireCloudUser();
    const target = this.getProposalById(id);
    if (!this.canUserManageProposal(user, target)) throw new Error('Proposta não encontrada ou acesso negado.');
    await fbDb.collection('fortatech_proposals').doc(id).delete();
    if (V2Auth.getCurrentUser() === user) proposalCache = proposalCache.filter(p => p.id !== id);
    refreshAccountUI();
  },
  async updateStatus(id, status) {
    const user = requireCloudUser();
    const target = this.getProposalById(id);
    if (!this.canUserManageProposal(user, target)) throw new Error('Proposta não encontrada ou acesso negado.');
    if (!['draft', 'sent', 'approved', 'rejected'].includes(status)) throw new Error('Status inválido.');
    const updatedAt = new Date().toISOString();
    await fbDb.collection('fortatech_proposals').doc(id).update({
      status, updatedAt, savedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    if (V2Auth.getCurrentUser() === user) Object.assign(target, { status, updatedAt });
    refreshAccountUI();
  },
  async duplicateProposal(id) {
    const original = this.getProposalById(id);
    if (!original) throw new Error('Proposta não encontrada.');
    const clone = JSON.parse(JSON.stringify(original));
    delete clone.id;
    clone.status = 'draft';
    clone.clientName += ' (Cópia)';
    clone.proposalNumber += ' (CÓPIA)';
    if (clone.stateData && clone.stateData.proposal) clone.stateData.proposal.number = clone.proposalNumber;
    return this.saveProposal(clone);
  },
  getAllSellers(area = null) {
    return getStoredUsers().filter(user => user.role !== 'admin'
      && (!area || (user.areas || []).includes(area)));
  }
};
initV2Database();
