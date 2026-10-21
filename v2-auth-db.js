// ==========================================================================
// FORTA TECH - GERADOR V2: SISTEMA DE AUTENTICAÇÃO E BANCO DE DADOS FIREBASE
// Conectado ao Google Firebase (Auth + Cloud Firestore) em Tempo Real
// ==========================================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCtqiBNp_LiBC_87XSYVwYhxsrt3O9KViU",
  authDomain: "gerador-de-propostas-ft.firebaseapp.com",
  projectId: "gerador-de-propostas-ft",
  storageBucket: "gerador-de-propostas-ft.firebasestorage.app",
  messagingSenderId: "86394446386",
  appId: "1:86394446386:web:97ff29f459daf46cb1122b"
};

const V2_STORAGE_KEYS = {
  USERS: 'fortatech_v2_users',
  SESSION: 'fortatech_v2_session',
  PROPOSALS: 'fortatech_v2_proposals'
};

// Mapeamento Oficial de Gestores por Área Comercial
const AREA_MANAGERS_MAP = {
  'priscila.badaro@fortatech.com.br': 'Inside Sales',
  'daniela.rocha@fortatech.com.br': 'Inside Sales',
  'rodrigo.galski@fortatech.com.br': 'Projetos',
  'ricardo.andrade@fortatech.com.br': 'Outside Sales',
  'silvio.nascimento@fortatech.com.br': 'Key Account',
  'thiago.selmann@fortatech.com.br': 'Key Account'
};

function getManagedAreaForEmail(email) {
  const clean = String(email || '').trim().toLowerCase();
  return AREA_MANAGERS_MAP[clean] || null;
}

function applyManagerRoleIfApplicable(userObj) {
  if (!userObj || !userObj.email) return userObj;
  const cleanEmail = String(userObj.email).trim().toLowerCase();
  if (cleanEmail === 'admin@fortatech.com.br') {
    userObj.role = 'admin';
    return userObj;
  }
  const managedArea = getManagedAreaForEmail(cleanEmail);
  if (managedArea) {
    userObj.role = 'gestor';
    userObj.managedArea = managedArea;
    if (!userObj.title || !userObj.title.toLowerCase().includes(managedArea.toLowerCase())) {
      userObj.title = managedArea;
    }
  }
  return userObj;
}

let fbApp = null;
let fbAuth = null;
let fbDb = null;
let isFirebaseConnected = false;

// Normaliza senha para o requisito mínimo de 6 caracteres do Firebase Auth
function normalizeFbPassword(pwd) {
  const p = String(pwd || '');
  if (p === 'admin') return 'admin123';
  if (p.length < 6) return p.padEnd(6, '0');
  return p;
}

// 1. INICIALIZAÇÃO DO FIREBASE + CACHE LOCAL SINCRONIZADO
function initV2Database() {
  // Garante usuário Admin no cache inicial
  const users = getStoredUsers();
  const adminExists = users.some(u => u.email.toLowerCase() === 'admin@fortatech.com.br');

  const defaultAdmin = {
    id: 'rFmJHTB3olfvPNw5wDatB6pEfcM2',
    name: 'Administrador Forta Tech',
    email: 'admin@fortatech.com.br',
    password: 'admin',
    phone: '+55 41 98508-1076',
    role: 'admin',
    title: 'Diretoria Comercial',
    createdAt: new Date().toISOString()
  };

  if (!adminExists) {
    users.push(defaultAdmin);
    localStorage.setItem(V2_STORAGE_KEYS.USERS, JSON.stringify(users));
  }

  if (!localStorage.getItem(V2_STORAGE_KEYS.PROPOSALS)) {
    localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify([]));
  }

  // Inicializa SDK do Firebase se carregado na página
  if (typeof firebase !== 'undefined' && FIREBASE_CONFIG.apiKey) {
    try {
      fbApp = !firebase.apps.length ? firebase.initializeApp(FIREBASE_CONFIG) : firebase.app();
      fbAuth = firebase.auth();
      fbDb = firebase.firestore();
      isFirebaseConnected = true;
      console.log('[FortaTech V2] Conectado ao Firebase Cloud (' + FIREBASE_CONFIG.projectId + ')');

      // Garante que o perfil do Admin esteja salvo na coleção fortatech_users do Firestore
      fbDb.collection('fortatech_users').doc(defaultAdmin.id).set({
        id: defaultAdmin.id,
        name: defaultAdmin.name,
        email: defaultAdmin.email,
        phone: defaultAdmin.phone,
        role: 'admin',
        title: defaultAdmin.title,
        createdAt: defaultAdmin.createdAt
      }, { merge: true }).catch(() => {});

      // Escuta em Tempo Real: Usuários Cadastrados na Nuvem
      fbDb.collection('fortatech_users').onSnapshot(snapshot => {
        const cloudUsers = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          const managedArea = getManagedAreaForEmail(data.email);
          if (managedArea && (data.role !== 'gestor' || data.managedArea !== managedArea)) {
            data.role = 'gestor';
            data.managedArea = managedArea;
            if (!data.title || !data.title.toLowerCase().includes(managedArea.toLowerCase())) {
              data.title = managedArea;
            }
            fbDb.collection('fortatech_users').doc(doc.id).set({
              role: 'gestor',
              managedArea: managedArea,
              title: data.title
            }, { merge: true }).catch(() => {});
          }
          cloudUsers.push(data);
        });
        if (cloudUsers.length > 0) {
          // Mescla com senhas locais para acesso offline se necessário
          const localUsers = getStoredUsers();
          const merged = cloudUsers.map(cu => {
            const loc = localUsers.find(lu => lu.email.toLowerCase() === (cu.email || '').toLowerCase());
            return applyManagerRoleIfApplicable({ ...loc, ...cu });
          });
          if (!merged.some(u => u.email.toLowerCase() === 'admin@fortatech.com.br')) {
            merged.push(defaultAdmin);
          }
          localStorage.setItem(V2_STORAGE_KEYS.USERS, JSON.stringify(merged));
        }
      }, err => {
        console.warn('[Firestore Users Sync] Aguardando ativação do banco Firestore no console:', err.message);
      });

      // Escuta em Tempo Real: Propostas Salvas na Nuvem
      fbDb.collection('fortatech_proposals').onSnapshot(snapshot => {
        const cloudProposals = [];
        snapshot.forEach(doc => {
          cloudProposals.push(doc.data());
        });
        // Ordena da mais recente para a mais antiga
        cloudProposals.sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
        localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify(cloudProposals));

        // Atualiza contadores e tela caso o modal esteja aberto
        if (typeof updateProposalsCountBadge === 'function') updateProposalsCountBadge();
        const modal = document.getElementById('proposals-modal-overlay');
        if (modal && modal.style.display === 'flex' && typeof renderProposalsGrid === 'function') {
          renderProposalsGrid();
        }
      }, err => {
        console.warn('[Firestore Proposals Sync] Aguardando ativação do banco Firestore no console:', err.message);
      });

    } catch (err) {
      console.warn('[FortaTech V2] Erro ao iniciar Firebase:', err);
    }
  }
}

function getStoredUsers() {
  try {
    const raw = localStorage.getItem(V2_STORAGE_KEYS.USERS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function getStoredProposals() {
  try {
    const raw = localStorage.getItem(V2_STORAGE_KEYS.PROPOSALS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// 2. SERVIÇO DE AUTENTICAÇÃO (FIREBASE AUTH + FIRESTORE PROFILE)
const V2Auth = {
  getCurrentUser() {
    try {
      const raw = localStorage.getItem(V2_STORAGE_KEYS.SESSION);
      if (!raw) return null;
      const user = JSON.parse(raw);
      return applyManagerRoleIfApplicable(user);
    } catch (e) {
      return null;
    }
  },

  async login(email, password) {
    const cleanEmail = (email || '').trim().toLowerCase();
    const isDefaultAdmin = (cleanEmail === 'admin@fortatech.com.br' && (password === 'admin' || password === 'admin123'));
    const managedArea = getManagedAreaForEmail(cleanEmail);

    // 1. Tenta autenticar no Firebase Authentication na nuvem
    if (isFirebaseConnected && fbAuth) {
      try {
        const fbPass = isDefaultAdmin ? 'admin123' : normalizeFbPassword(password);
        const cred = await fbAuth.signInWithEmailAndPassword(cleanEmail, fbPass);
        const uid = cred.user.uid;

        // Busca dados complementares do perfil no Firestore
        let profile = null;
        if (fbDb) {
          try {
            const doc = await fbDb.collection('fortatech_users').doc(uid).get();
            if (doc.exists) profile = doc.data();
          } catch (e) {}
        }

        const localMatch = getStoredUsers().find(u => u.email.toLowerCase() === cleanEmail);
        const sessionData = applyManagerRoleIfApplicable({
          id: uid,
          name: (profile && profile.name) || (localMatch && localMatch.name) || (isDefaultAdmin ? 'Administrador Forta Tech' : cleanEmail.split('@')[0]),
          email: cleanEmail,
          phone: (profile && profile.phone) || (localMatch && localMatch.phone) || '+55 41 98508-1076',
          role: isDefaultAdmin ? 'admin' : (managedArea ? 'gestor' : ((profile && profile.role) || (localMatch && localMatch.role) || 'consultor')),
          managedArea: managedArea || (profile && profile.managedArea) || null,
          title: (profile && profile.title) || (localMatch && localMatch.title) || managedArea || (isDefaultAdmin ? 'Diretoria Comercial' : 'Consultor Técnico Comercial')
        });

        localStorage.setItem(V2_STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
        return sessionData;
      } catch (fbErr) {
        // Se for erro de senha incorreta no Firebase e não bater no local, avisa o usuário
        const localUsers = getStoredUsers();
        const localUser = localUsers.find(u => u.email.toLowerCase() === cleanEmail && (u.password === password || (isDefaultAdmin && password === 'admin')));
        if (!localUser) {
          throw new Error('E-mail ou senha inválidos.');
        }
        const sessionData = applyManagerRoleIfApplicable({
          id: localUser.id,
          name: localUser.name,
          email: localUser.email,
          phone: localUser.phone || '+55 41 98508-1076',
          role: localUser.role || 'consultor',
          managedArea: localUser.managedArea || null,
          title: localUser.title || 'Consultor Técnico Comercial'
        });
        localStorage.setItem(V2_STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
        return sessionData;
      }
    }

    // Fallback local
    const users = getStoredUsers();
    const user = users.find(u => u.email.toLowerCase() === cleanEmail && u.password === password);
    if (!user) {
      throw new Error('E-mail ou senha inválidos.');
    }

    const sessionData = applyManagerRoleIfApplicable({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || '+55 41 98508-1076',
      role: user.role || 'consultor',
      managedArea: user.managedArea || null,
      title: user.title || 'Consultor Técnico Comercial'
    });

    localStorage.setItem(V2_STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
    return sessionData;
  },

  async signUp(userData) {
    const cleanEmail = (userData.email || '').trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      throw new Error('Informe um e-mail válido.');
    }
    if (!userData.password || userData.password.length < 4) {
      throw new Error('A senha deve ter no mínimo 4 caracteres.');
    }
    if (!userData.name || userData.name.trim().length < 2) {
      throw new Error('Informe o seu nome completo.');
    }

    let uid = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);

    // 1. Registra no Firebase Auth na nuvem
    if (isFirebaseConnected && fbAuth) {
      try {
        const fbPass = normalizeFbPassword(userData.password);
        const cred = await fbAuth.createUserWithEmailAndPassword(cleanEmail, fbPass);
        uid = cred.user.uid;
      } catch (fbErr) {
        if (fbErr.code === 'auth/email-already-in-use') {
          throw new Error('Já existe uma conta cadastrada com este e-mail.');
        }
        console.warn('[Firebase Auth SignUp]', fbErr.message);
      }
    } else {
      const users = getStoredUsers();
      if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
        throw new Error('Já existe uma conta cadastrada com este e-mail.');
      }
    }

    const managedArea = getManagedAreaForEmail(cleanEmail);
    const effectiveTitle = managedArea || userData.title || 'Inside Sales';
    const effectiveAreas = managedArea
      ? Array.from(new Set([managedArea, ...(userData.areas || [])]))
      : (userData.areas || [effectiveTitle]);

    const newUser = applyManagerRoleIfApplicable({
      id: uid,
      name: userData.name.trim(),
      email: cleanEmail,
      password: userData.password,
      phone: userData.phone || '',
      role: managedArea ? 'gestor' : 'consultor',
      managedArea: managedArea || null,
      title: effectiveTitle,
      areas: effectiveAreas,
      createdAt: new Date().toISOString()
    });

    // Salva localmente
    const users = getStoredUsers().filter(u => u.email.toLowerCase() !== cleanEmail);
    users.push(newUser);
    localStorage.setItem(V2_STORAGE_KEYS.USERS, JSON.stringify(users));

    // Salva no Cloud Firestore
    if (isFirebaseConnected && fbDb) {
      fbDb.collection('fortatech_users').doc(uid).set({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        managedArea: newUser.managedArea || null,
        title: newUser.title,
        areas: newUser.areas,
        createdAt: newUser.createdAt
      }).catch(e => console.warn('[Firestore Save User]', e.message));
    }

    const sessionData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      role: newUser.role,
      managedArea: newUser.managedArea || null,
      title: newUser.title,
      areas: newUser.areas
    };

    localStorage.setItem(V2_STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
    return sessionData;
  },

  logout() {
    if (isFirebaseConnected && fbAuth) {
      fbAuth.signOut().catch(() => {});
    }
    localStorage.removeItem(V2_STORAGE_KEYS.SESSION);
  }
};

// 3. SERVIÇO DE BANCO DE DADOS DE PROPOSTAS (CLOUD FIRESTORE + CACHE LOCAL)
const V2DB = {
  // Verifica se uma proposta pertence a determinada Área Comercial
  doesProposalBelongToArea(proposal, areaName) {
    if (!proposal || !areaName) return false;
    const targetArea = String(areaName).trim().toLowerCase();
    const propArea = String(proposal.userArea || '').toLowerCase();
    if (propArea.includes(targetArea)) return true;

    // Caso a proposta antiga não tenha userArea gravado, verifica o cadastro do vendedor
    const users = getStoredUsers();
    const author = users.find(u =>
      (proposal.userId && u.id === proposal.userId) ||
      (proposal.userEmail && u.email && u.email.toLowerCase() === proposal.userEmail.toLowerCase())
    );
    if (author) {
      const authorTitle = String(author.title || '').toLowerCase();
      const authorManaged = String(author.managedArea || '').toLowerCase();
      const authorAreas = Array.isArray(author.areas) ? author.areas.map(a => String(a).toLowerCase()) : [];
      if (authorTitle.includes(targetArea) || authorManaged === targetArea || authorAreas.some(a => a.includes(targetArea))) {
        return true;
      }
    }
    return false;
  },

  canUserManageProposal(user, proposal) {
    if (!user || !proposal) return false;
    if (user.role === 'admin') return true;
    if (proposal.userId === user.id || (proposal.userEmail && user.email && proposal.userEmail.toLowerCase() === user.email.toLowerCase())) {
      return true;
    }
    if (user.role === 'gestor' && user.managedArea) {
      return this.doesProposalBelongToArea(proposal, user.managedArea);
    }
    return false;
  },

  saveProposal(proposalPayload) {
    const user = V2Auth.getCurrentUser();
    if (!user) {
      throw new Error('Você precisa estar logado para salvar propostas.');
    }

    const proposals = getStoredProposals();
    const now = new Date().toISOString();
    let savedRecord = null;

    if (proposalPayload.id) {
      const index = proposals.findIndex(p => p.id === proposalPayload.id);
      if (index === -1) {
        throw new Error('Proposta não encontrada para atualização.');
      }

      if (!this.canUserManageProposal(user, proposals[index])) {
        throw new Error('Você não tem permissão para editar propostas de outro vendedor.');
      }

      proposals[index] = {
        ...proposals[index],
        ...proposalPayload,
        updatedAt: now
      };
      savedRecord = proposals[index];
    } else {
      savedRecord = {
        id: 'prop_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        userPhone: user.phone || '',
        userArea: user.managedArea || user.title || '',
        clientName: proposalPayload.clientName || 'Cliente Sem Nome',
        clientCity: proposalPayload.clientCity || '',
        proposalNumber: proposalPayload.proposalNumber || ('PROP-' + new Date().getFullYear() + '/' + Math.floor(1000 + Math.random() * 9000)),
        proposalDate: proposalPayload.proposalDate || new Date().toISOString().split('T')[0],
        totalValue: proposalPayload.totalValue || 0,
        status: proposalPayload.status || 'sent',
        stateData: proposalPayload.stateData,
        createdAt: now,
        updatedAt: now
      };
      proposals.unshift(savedRecord);
    }

    localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify(proposals));

    // Sincroniza imediatamente com o Cloud Firestore na nuvem
    if (isFirebaseConnected && fbDb && savedRecord) {
      fbDb.collection('fortatech_proposals').doc(savedRecord.id).set(savedRecord)
        .then(() => console.log('[Firestore] Proposta sincronizada na nuvem:', savedRecord.id))
        .catch(err => console.warn('[Firestore Save Proposal]', err.message));
    }

    return savedRecord;
  },

  getProposals(filters = {}) {
    const user = V2Auth.getCurrentUser();
    if (!user) return [];

    let list = getStoredProposals();

    if (user.role === 'admin') {
      if (filters.sellerId && filters.sellerId !== 'all') {
        list = list.filter(p => p.userId === filters.sellerId);
      }
      if (filters.area && filters.area !== 'all') {
        list = list.filter(p => this.doesProposalBelongToArea(p, filters.area));
      }
    } else if (user.role === 'gestor' && user.managedArea) {
      // Gestor de área vê todas as propostas da sua área (e as suas próprias)
      list = list.filter(p =>
        this.doesProposalBelongToArea(p, user.managedArea) ||
        p.userId === user.id ||
        (p.userEmail && user.email && p.userEmail.toLowerCase() === user.email.toLowerCase())
      );
      if (filters.sellerId && filters.sellerId !== 'all') {
        list = list.filter(p => p.userId === filters.sellerId);
      }
    } else {
      // Consultor vê apenas as suas próprias propostas
      list = list.filter(p => p.userId === user.id || (p.userEmail && user.email && p.userEmail.toLowerCase() === user.email.toLowerCase()));
    }

    if (filters.status && filters.status !== 'all') {
      list = list.filter(p => p.status === filters.status);
    }

    if (filters.query && filters.query.trim().length > 0) {
      const q = filters.query.trim().toLowerCase();
      list = list.filter(p =>
        (p.clientName && p.clientName.toLowerCase().includes(q)) ||
        (p.proposalNumber && p.proposalNumber.toLowerCase().includes(q)) ||
        (p.clientCity && p.clientCity.toLowerCase().includes(q)) ||
        (p.userName && p.userName.toLowerCase().includes(q))
      );
    }

    return list;
  },

  getProposalById(id) {
    const proposals = getStoredProposals();
    return proposals.find(p => p.id === id) || null;
  },

  deleteProposal(id) {
    const user = V2Auth.getCurrentUser();
    if (!user) throw new Error('Não autenticado.');

    let proposals = getStoredProposals();
    const target = proposals.find(p => p.id === id);
    if (!target) return;

    if (!this.canUserManageProposal(user, target)) {
      throw new Error('Você não tem permissão para excluir esta proposta.');
    }

    proposals = proposals.filter(p => p.id !== id);
    localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify(proposals));

    if (isFirebaseConnected && fbDb) {
      fbDb.collection('fortatech_proposals').doc(id).delete()
        .catch(err => console.warn('[Firestore Delete]', err.message));
    }
  },

  updateStatus(id, newStatus) {
    const proposals = getStoredProposals();
    const item = proposals.find(p => p.id === id);
    if (item) {
      item.status = newStatus;
      item.updatedAt = new Date().toISOString();
      localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify(proposals));

      if (isFirebaseConnected && fbDb) {
        fbDb.collection('fortatech_proposals').doc(id).update({
          status: newStatus,
          updatedAt: item.updatedAt
        }).catch(err => console.warn('[Firestore Status Update]', err.message));
      }
    }
  },

  duplicateProposal(id) {
    const original = this.getProposalById(id);
    if (!original) throw new Error('Proposta não encontrada.');

    const clone = JSON.parse(JSON.stringify(original));
    delete clone.id;
    clone.proposalNumber = clone.proposalNumber + ' (CÓPIA)';
    clone.status = 'draft';
    clone.clientName = clone.clientName + ' (Cópia)';
    if (clone.stateData && clone.stateData.proposal) {
      clone.stateData.proposal.number = clone.proposalNumber;
    }
    return this.saveProposal(clone);
  },

  getAllSellers(areaFilter = null) {
    const users = getStoredUsers().filter(u => u.role !== 'admin');
    if (!areaFilter) return users;
    const target = String(areaFilter).trim().toLowerCase();
    return users.filter(u => {
      const t = String(u.title || '').toLowerCase();
      const m = String(u.managedArea || '').toLowerCase();
      const arr = Array.isArray(u.areas) ? u.areas.map(a => String(a).toLowerCase()) : [];
      return t.includes(target) || m === target || arr.some(a => a.includes(target));
    });
  }
};

// Inicializa o banco de dados na carga do script
initV2Database();
