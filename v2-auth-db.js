// ==========================================================================
// FORTA TECH - GERADOR V2: SISTEMA DE AUTENTICAÇÃO E BANCO DE DADOS
// Módulo Seguro de Contas de Vendedores e Histórico de Propostas
// ==========================================================================

const V2_STORAGE_KEYS = {
  USERS: 'fortatech_v2_users',
  SESSION: 'fortatech_v2_session',
  PROPOSALS: 'fortatech_v2_proposals'
};

// 1. INICIALIZAÇÃO DE BANCO DE DADOS LOCAL E SEED DO ADMIN
function initV2Database() {
  // Verifica se o usuário Administrador padrão já existe
  const users = getStoredUsers();
  const adminExists = users.some(u => u.role === 'admin' || u.email === 'admin@fortatech.com.br');

  if (!adminExists) {
    const defaultAdmin = {
      id: 'user_admin_forta_01',
      name: 'Administrador Forta Tech',
      email: 'admin@fortatech.com.br',
      password: 'admin', // Senha inicial do Admin
      phone: '+55 41 98508-1076',
      role: 'admin',
      title: 'Diretoria Comercial',
      createdAt: new Date().toISOString()
    };
    users.push(defaultAdmin);
    localStorage.setItem(V2_STORAGE_KEYS.USERS, JSON.stringify(users));
    console.log('[FortaTech V2] Usuário Admin inicial criado com sucesso: admin@fortatech.com.br / admin');
  }

  // Verifica propostas salvas
  if (!localStorage.getItem(V2_STORAGE_KEYS.PROPOSALS)) {
    localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify([]));
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

// 2. SERVIÇO DE AUTENTICAÇÃO
const V2Auth = {
  getCurrentUser() {
    try {
      const raw = localStorage.getItem(V2_STORAGE_KEYS.SESSION);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },

  login(email, password) {
    const cleanEmail = (email || '').trim().toLowerCase();
    const users = getStoredUsers();
    const user = users.find(u => u.email.toLowerCase() === cleanEmail && u.password === password);

    if (!user) {
      throw new Error('E-mail ou senha inválidos.');
    }

    const sessionData = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || '+55 41 98508-1076',
      role: user.role || 'consultor',
      title: user.title || 'Consultor Técnico Comercial'
    };

    localStorage.setItem(V2_STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
    return sessionData;
  },

  signUp(userData) {
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

    const users = getStoredUsers();
    if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
      throw new Error('Já existe uma conta cadastrada com este e-mail.');
    }

    const newUser = {
      id: 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      name: userData.name.trim(),
      email: cleanEmail,
      password: userData.password,
      phone: userData.phone || '',
      role: 'consultor', // Usuários criados são sempre consultores
      title: userData.title || 'Consultor Comercial Undercar',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem(V2_STORAGE_KEYS.USERS, JSON.stringify(users));

    // Faz login automático após cadastro
    const sessionData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      role: newUser.role,
      title: newUser.title
    };

    localStorage.setItem(V2_STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
    return sessionData;
  },

  logout() {
    localStorage.removeItem(V2_STORAGE_KEYS.SESSION);
  }
};

// 3. SERVIÇO DE BANCO DE DADOS DE PROPOSTAS
const V2DB = {
  // Salvar proposta (Criação ou Edição)
  saveProposal(proposalPayload) {
    const user = V2Auth.getCurrentUser();
    if (!user) {
      throw new Error('Você precisa estar logado para salvar propostas.');
    }

    const proposals = getStoredProposals();
    const now = new Date().toISOString();

    if (proposalPayload.id) {
      // Edição de proposta existente
      const index = proposals.findIndex(p => p.id === proposalPayload.id);
      if (index === -1) {
        throw new Error('Proposta não encontrada para atualização.');
      }

      // Validação de segurança: apenas o autor ou admin podem editar
      if (user.role !== 'admin' && proposals[index].userId !== user.id) {
        throw new Error('Você não tem permissão para editar propostas de outro vendedor.');
      }

      proposals[index] = {
        ...proposals[index],
        ...proposalPayload,
        updatedAt: now
      };

      localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify(proposals));
      return proposals[index];
    } else {
      // Nova Proposta
      const newProposal = {
        id: 'prop_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        userPhone: user.phone,
        clientName: proposalPayload.clientName || 'Cliente Sem Nome',
        clientCity: proposalPayload.clientCity || '',
        proposalNumber: proposalPayload.proposalNumber || ('PROP-' + new Date().getFullYear() + '/' + Math.floor(1000 + Math.random() * 9000)),
        proposalDate: proposalPayload.proposalDate || new Date().toISOString().split('T')[0],
        totalValue: proposalPayload.totalValue || 0,
        status: proposalPayload.status || 'sent', // draft, sent, approved, rejected
        stateData: proposalPayload.stateData, // Snapshot completo dos dados da proposta
        createdAt: now,
        updatedAt: now
      };

      proposals.unshift(newProposal);
      localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify(proposals));
      return newProposal;
    }
  },

  // Listar propostas com controle de acesso (Admin vê tudo, consultor vê as suas)
  getProposals(filters = {}) {
    const user = V2Auth.getCurrentUser();
    if (!user) return [];

    let list = getStoredProposals();

    // Filtro por Vendedor (se não for admin, força o próprio userId)
    if (user.role !== 'admin') {
      list = list.filter(p => p.userId === user.id);
    } else if (filters.sellerId && filters.sellerId !== 'all') {
      list = list.filter(p => p.userId === filters.sellerId);
    }

    // Filtro por Status
    if (filters.status && filters.status !== 'all') {
      list = list.filter(p => p.status === filters.status);
    }

    // Filtro de Busca por Cliente ou Número
    if (filters.query && filters.query.trim().length > 0) {
      const q = filters.query.trim().toLowerCase();
      list = list.filter(p => 
        (p.clientName && p.clientName.toLowerCase().includes(q)) ||
        (p.proposalNumber && p.proposalNumber.toLowerCase().includes(q)) ||
        (p.clientCity && p.clientCity.toLowerCase().includes(q))
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

    if (user.role !== 'admin' && target.userId !== user.id) {
      throw new Error('Você não tem permissão para excluir esta proposta.');
    }

    proposals = proposals.filter(p => p.id !== id);
    localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify(proposals));
  },

  updateStatus(id, newStatus) {
    const proposals = getStoredProposals();
    const item = proposals.find(p => p.id === id);
    if (item) {
      item.status = newStatus;
      item.updatedAt = new Date().toISOString();
      localStorage.setItem(V2_STORAGE_KEYS.PROPOSALS, JSON.stringify(proposals));
    }
  },

  // Duplicar proposta como nova
  duplicateProposal(id) {
    const original = this.getProposalById(id);
    if (!original) throw new Error('Proposta não encontrada.');

    const user = V2Auth.getCurrentUser();
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

  // Lista todos os vendedores (para filtro do Admin)
  getAllSellers() {
    const users = getStoredUsers();
    return users.filter(u => u.role !== 'admin');
  }
};

// Inicializa o banco de dados na carga do script
initV2Database();
