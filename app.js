// ==========================================================================
// FORTA TECH - GERADOR DE PROPOSTAS COMERCIAIS
// Aplicação Reativa de Criação e Renderização
// ==========================================================================

// Estado da Aplicação
let state = {
  client: JSON.parse(JSON.stringify(DEFAULT_CONFIG.client)),
  proposal: JSON.parse(JSON.stringify(DEFAULT_CONFIG.proposal)),
  terms: JSON.parse(JSON.stringify(DEFAULT_CONFIG.terms)),
  company: JSON.parse(JSON.stringify(DEFAULT_CONFIG.company)),
  catalog: DEFAULT_CATALOG.filter(p => p.selected).map(p => JSON.parse(JSON.stringify(p))),
  services: JSON.parse(JSON.stringify(DEFAULT_SERVICES))
};

// Formatação Monetária BRL
function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value || 0);
}

// Formatação de Data em Português Extenso
function formatDateExtenso(dateStr) {
  if (!dateStr) return '';
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Caso YYYY-MM-DD
  if (dateStr.includes('-')) {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const month = months[monthIdx] || parts[1];
      const day = parseInt(parts[2], 10);
      return `${day} de ${month} de ${year}`;
    }
  }

  // Caso DD/MM/YYYY
  if (dateStr.includes('/')) {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const monthIdx = parseInt(parts[1], 10) - 1;
      const month = months[monthIdx] || parts[1];
      const year = parts[2];
      return `${day} de ${month} de ${year}`;
    }
  }

  return dateStr;
}

// Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initFormBindings();
  renderProductsEditor();
  renderServicesEditor();
  renderProposalDocument();
  initGlobalActions();
  initCatalogModal();
});

// Navegação por Abas no Formulário
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.form-section').forEach(s => s.classList.remove('active'));
      
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.classList.add('active');
    });
  });
}

// Binds dos Campos Básicos
function initFormBindings() {
  // Cliente
  bindInput('client-name', val => { state.client.name = val; });
  bindInput('client-branch', val => { state.client.branch = val; });
  bindInput('client-cnpj', val => { state.client.cnpj = val; });
  bindInput('client-city', val => { state.client.city = val; });
  bindInput('client-contact', val => { state.client.contactPerson = val; });
  bindInput('client-phone', val => { state.client.phone = val; });
  bindInput('client-email', val => { state.client.email = val; });

  // Proposta Metadados
  bindInput('prop-main-title', val => { state.proposal.mainTitle = val; });
  bindInput('client-prefix', val => { state.proposal.clientPrefix = val; });
  bindInput('prop-number', val => { state.proposal.number = val; });
  bindInput('prop-date', val => { 
    state.proposal.date = val; 
    state.proposal.formattedDateDisplay = formatDateExtenso(val);
  });
  bindInput('prop-validity', val => { state.proposal.validityDays = val; });
  bindInput('prop-discount-campaign', val => { state.proposal.discountCampaignName = val; });
  bindInput('prop-seller-name', val => { state.proposal.sellerName = val; });
  bindInput('prop-seller-phone', val => { state.proposal.sellerPhone = val; });
  bindInput('prop-seller-email', val => { state.proposal.sellerEmail = val; });

  // Condições & Termos
  bindInput('term-payment', val => { state.terms.payment = val; });
  bindInput('term-installments', val => { state.terms.installments = val; });
  bindInput('term-shipping', val => { state.terms.shipping = val; });
  bindInput('term-delivery', val => { state.terms.deliveryTime = val; });
  bindInput('term-warranty', val => { state.terms.warranty = val; });
  bindInput('term-backup', val => { state.terms.backupMachine = val; });
  bindInput('term-taxes', val => { state.terms.taxes = val; });
  bindInput('term-support', val => { state.terms.technicalSupport = val; });
  bindInput('term-training', val => { state.terms.training = val; });

  // Empresa Emissora
  bindInput('company-name', val => { state.company.name = val; });
  bindInput('company-slogan', val => { state.company.slogan = val; });
  bindInput('company-address', val => { state.company.address = val; });
  bindInput('company-city-state-zip', val => { state.company.cityStateZip = val; });
  bindInput('company-phone', val => { state.company.phone = val; });
  bindInput('company-email', val => { state.company.email = val; });
  bindInput('company-website', val => { state.company.website = val; });

  // Parcelamento no Valor
  bindCheckbox('toggle-installments', val => { 
    state.proposal.enableInstallments = val; 
    const container = document.getElementById('installment-fields-container');
    if (container) container.style.display = val ? 'block' : 'none';
  });
  bindInput('prop-installment-count', val => { state.proposal.installmentCount = parseInt(val, 10) || 12; });
  bindInput('prop-installment-val', val => { state.proposal.installmentValue = parseFloat(val) || 0; });
  bindInput('prop-installment-desc', val => { state.proposal.installmentDesc = val; });
  bindInput('prop-installment-custom', val => { state.proposal.installmentCustomText = val; });

  // Flags
  bindCheckbox('toggle-specs', val => { state.proposal.includeTechnicalSheets = val; });
  bindCheckbox('toggle-terms', val => { state.proposal.includeTermsAndPayment = val; });

  // Preenchimento inicial dos inputs
  populateFormFields();
}

function bindInput(id, callback) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('input', (e) => {
    callback(e.target.value);
    renderProposalDocument();
  });
}

function bindCheckbox(id, callback) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('change', (e) => {
    callback(e.target.checked);
    renderProposalDocument();
  });
}

function populateFormFields() {
  setVal('client-name', state.client.name);
  setVal('client-branch', state.client.branch);
  setVal('client-cnpj', state.client.cnpj);
  setVal('client-city', state.client.city);
  setVal('client-contact', state.client.contactPerson);
  setVal('client-phone', state.client.phone);
  setVal('client-email', state.client.email);

  setVal('prop-main-title', state.proposal.mainTitle || 'PROPOSTA COMERCIAL');
  setVal('client-prefix', state.proposal.clientPrefix || 'Para:');
  setVal('prop-number', state.proposal.number);
  setVal('prop-date', state.proposal.date);
  setVal('prop-validity', state.proposal.validityDays);
  setVal('prop-discount-campaign', state.proposal.discountCampaignName);
  setVal('prop-seller-name', state.proposal.sellerName);
  setVal('prop-seller-phone', state.proposal.sellerPhone);
  setVal('prop-seller-email', state.proposal.sellerEmail);

  setVal('term-payment', state.terms.payment);
  setVal('term-installments', state.terms.installments);
  setVal('term-shipping', state.terms.shipping);
  setVal('term-delivery', state.terms.deliveryTime);
  setVal('term-warranty', state.terms.warranty);
  setVal('term-backup', state.terms.backupMachine);
  setVal('term-taxes', state.terms.taxes);
  setVal('term-support', state.terms.technicalSupport);
  setVal('term-training', state.terms.training || 'A Forta Tech possui técnicos especializados para realizar capacitações presenciais em São Bernardo do Campo ou no formato EAD com material gravado permanente.');

  // Empresa Emissora
  setVal('company-name', state.company.name || 'FORTA TECH');
  setVal('company-slogan', state.company.slogan || 'Inovação, Alta Precisão e Produtividade para a sua Oficina');
  setVal('company-address', state.company.address || 'R. Baffin, 32 - Jardim do Mar');
  setVal('company-city-state-zip', state.company.cityStateZip || 'São Bernardo do Campo - SP, 09750-620');
  setVal('company-phone', state.company.phone || '+55 41 98508-1076');
  setVal('company-email', state.company.email || 'regional2.tech@grupoforta.com.br');
  setVal('company-website', state.company.website || 'www.fortatech.com.br');

  setCheck('toggle-specs', state.proposal.includeTechnicalSheets);
  setCheck('toggle-terms', state.proposal.includeTermsAndPayment);

  // Parcelamento
  setCheck('toggle-installments', state.proposal.enableInstallments);
  setVal('prop-installment-count', state.proposal.installmentCount || 12);
  setVal('prop-installment-val', state.proposal.installmentValue > 0 ? state.proposal.installmentValue : '');
  setVal('prop-installment-desc', state.proposal.installmentDesc || '');
  setVal('prop-installment-custom', state.proposal.installmentCustomText || '');

  const instContainer = document.getElementById('installment-fields-container');
  if (instContainer) {
    instContainer.style.display = state.proposal.enableInstallments ? 'block' : 'none';
  }
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.value = val;
}

function setCheck(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.checked = !!val;
}

// Renderizar lista de edição dos Equipamentos do Catálogo
function renderProductsEditor() {
  const container = document.getElementById('products-editor-list');
  if (!container) return;

  if (!state.catalog || state.catalog.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px 15px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.15); border-radius: 8px; color: #94a3b8;">
        <div style="font-weight: 600; color: #f8fafc; margin-bottom: 6px;">Nenhum equipamento na proposta</div>
        <div style="font-size: 0.8rem; margin-bottom: 12px;">Clique no botão "+ Adicionar do Catálogo Oficial" acima para escolher os produtos.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = state.catalog.map((prod, index) => {
    let thumbSrc = prod.image || '';
    let thumbCdn = '';
    if (typeof EQUIPMENT_REAL_IMAGES !== 'undefined') {
      for (const key of Object.keys(EQUIPMENT_REAL_IMAGES)) {
        const entry = EQUIPMENT_REAL_IMAGES[key];
        if (entry) {
          if (!thumbSrc && (entry.id === prod.id || key.toLowerCase() === ('' + prod.id).replace(/[-_]/g, '').toLowerCase())) {
            thumbSrc = entry.local || entry.cdn;
          }
          if (entry.local === thumbSrc && entry.cdn && entry.cdn !== thumbSrc) {
            thumbCdn = entry.cdn;
            break;
          }
        }
      }
    }

    const isDrawerOpen = !!prod._isDrawerOpen;
    const featuresText = (prod.features || []).join('\n');
    const specsText = (prod.specs || []).map(s => `${s.label} = ${s.value}`).join('\n');

    return `
    <div class="item-card-edit ${prod.selected ? 'active' : ''}" data-index="${index}">
      <div class="item-card-header" style="display: flex; align-items: center; justify-content: space-between;">
        <div class="item-toggle-wrap" style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
          <label class="switch" style="flex-shrink: 0;">
            <input type="checkbox" class="prod-toggle" data-index="${index}" ${prod.selected ? 'checked' : ''}>
            <span class="slider"></span>
          </label>
          ${thumbSrc ? `<img src="${thumbSrc}" ${thumbCdn ? `data-cdn="${thumbCdn}" onerror="if(this.dataset.cdn && this.src !== this.dataset.cdn){this.src=this.dataset.cdn;}"` : ''} alt="${prod.name}" style="width: 44px; height: 44px; object-fit: contain; background: #131722; border-radius: 6px; border: 1px solid #232838; padding: 2px; flex-shrink: 0;">` : ''}
          <div style="min-width: 0; flex: 1;">
            <div class="item-title-edit" title="${prod.name}">${prod.name}</div>
            <span class="item-tag">${prod.category}</span>
          </div>
        </div>
        <button class="remove-custom-prod" data-index="${index}" title="Remover este equipamento da proposta">✕</button>
      </div>

      <div class="item-fields-grid">
        <div class="form-group">
          <label>Qtd</label>
          <input type="number" min="1" class="prod-qty" data-index="${index}" value="${prod.quantity || 1}">
        </div>
        <div class="form-group">
          <label>Preço Unitário (R$)</label>
          <input type="number" step="10" class="prod-price" data-index="${index}" value="${prod.defaultPrice}">
        </div>
        <div class="form-group">
          <label>Desconto Unitário (R$)</label>
          <input type="number" step="10" class="prod-discount" data-index="${index}" value="${prod.defaultDiscount || 0}">
        </div>
        <div class="form-group">
          <label>Total Item Líquido</label>
          <input type="text" disabled value="${formatBRL((prod.defaultPrice - (prod.defaultDiscount || 0)) * (prod.quantity || 1))}">
        </div>
      </div>

      <!-- BOTÃO SUBMENU: EDITAR INFORMAÇÕES DO ITEM -->
      <div style="margin-top: 12px; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 10px;">
        <button class="btn-toggle-drawer" data-index="${index}" style="width: 100%; background: ${isDrawerOpen ? 'rgba(229,9,20,0.15)' : 'rgba(255,255,255,0.04)'}; border: 1px solid ${isDrawerOpen ? 'rgba(229,9,20,0.4)' : 'rgba(255,255,255,0.1)'}; color: ${isDrawerOpen ? '#ff4d58' : '#cbd5e1'}; font-size: 0.78rem; font-weight: 700; padding: 7px 12px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: all 0.2s;">
          <span style="display: flex; align-items: center; gap: 6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Editar Ficha Técnica & Informações
          </span>
          <span class="drawer-arrow-icon" style="font-size: 0.75rem;">${isDrawerOpen ? '▲' : '▼'}</span>
        </button>

        <!-- GAVETA EXPANSÍVEL DE EDIÇÃO -->
        <div class="item-details-drawer" id="drawer-${index}" style="display: ${isDrawerOpen ? 'block' : 'none'}; margin-top: 12px; background: #0b0d13; border: 1px solid #232a3d; border-radius: 8px; padding: 14px;">
          
          <div class="form-group" style="margin-bottom: 10px;">
            <label style="font-size: 0.75rem; color: #94a3b8;">Nome do Equipamento na Proposta</label>
            <input type="text" class="prod-edit-name" data-index="${index}" value="${prod.name}">
          </div>

          <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label style="font-size: 0.75rem; color: #94a3b8;">Slogan / Tagline</label>
              <input type="text" class="prod-edit-tagline" data-index="${index}" value="${prod.tagline || ''}" placeholder="Ex: Alta Precisão Operacional">
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label style="font-size: 0.75rem; color: #94a3b8;">Selo / Badge</label>
              <input type="text" class="prod-edit-badge" data-index="${index}" value="${prod.badge || ''}" placeholder="Ex: Homologada Volvo">
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 10px;">
            <label style="font-size: 0.75rem; color: #94a3b8;">Descrição Comercial na Proposta</label>
            <textarea class="prod-edit-desc" data-index="${index}" rows="3" style="font-size: 0.82rem; line-height: 1.4;">${prod.description || ''}</textarea>
          </div>

          <div class="form-group" style="margin-bottom: 10px;">
            <label style="font-size: 0.75rem; color: #94a3b8;">Diferenciais & Destaques (1 item por linha com ✓)</label>
            <textarea class="prod-edit-features" data-index="${index}" rows="3" style="font-size: 0.82rem; line-height: 1.4;" placeholder="Destaque 1&#10;Destaque 2">${featuresText}</textarea>
          </div>

          <div class="form-group" style="margin-bottom: 10px;">
            <label style="font-size: 0.75rem; color: #94a3b8;">Especificações Técnicas (Formato: Rótulo = Valor por linha)</label>
            <textarea class="prod-edit-specs" data-index="${index}" rows="3" style="font-size: 0.82rem; line-height: 1.4;" placeholder="Resolução = 4K Ultra HD&#10;Garantia = 12 Meses">${specsText}</textarea>
          </div>

          <!-- CAMPO E ANEXO DE IMAGEM DO COMPUTADOR -->
          <div class="form-group" style="margin-bottom: 0;">
            <label style="font-size: 0.75rem; color: #94a3b8; font-weight: 700; display: block; margin-bottom: 6px;">Foto do Equipamento na Proposta</label>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                <label class="btn-attach-img" style="cursor: pointer; background: linear-gradient(135deg, rgba(229,9,20,0.2) 0%, rgba(229,9,20,0.08) 100%); border: 1px solid rgba(229,9,20,0.45); color: #ff4d58; padding: 8px 14px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; box-shadow: 0 2px 8px rgba(229,9,20,0.15);">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                  </svg>
                  <span>📁 Anexar Imagem do Computador</span>
                  <input type="file" accept="image/*" class="prod-file-input" data-index="${index}" style="display: none;">
                </label>
                ${thumbSrc ? `
                  <button type="button" class="btn-remove-img" data-index="${index}" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); color: #cbd5e1; padding: 7px 12px; border-radius: 6px; font-size: 0.75rem; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
                    ✕ Remover Foto
                  </button>
                ` : ''}
              </div>
              ${thumbSrc ? `
                <div style="display: flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.35); padding: 6px 12px; border-radius: 6px; border: 1px solid #1f2536;">
                  <img src="${thumbSrc}" ${thumbCdn ? `data-cdn="${thumbCdn}" onerror="if(this.dataset.cdn && this.src !== this.dataset.cdn){this.src=this.dataset.cdn;}"` : ''} alt="Prévia" style="width: 48px; height: 48px; object-fit: contain; background: #131722; border-radius: 4px; border: 1px solid #283046; padding: 2px;">
                  <div style="font-size: 0.72rem; color: #22c55e; font-weight: 600;">✓ Imagem carregada e ativa na proposta</div>
                </div>
              ` : ''}
              <div style="margin-top: 2px;">
                <span style="font-size: 0.7rem; color: #64748b;">Ou digite uma URL / caminho web:</span>
                <input type="text" class="prod-edit-image" data-index="${index}" value="${(prod.image && !prod.image.startsWith('data:')) ? prod.image : ''}" placeholder="https://... ou images/foto.png" style="margin-top: 4px; font-size: 0.78rem;">
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  `;}).join('');

  // Listeners dos produtos
  container.querySelectorAll('.prod-toggle').forEach(el => {
    el.addEventListener('change', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].selected = e.target.checked;
      const card = el.closest('.item-card-edit');
      if (card) {
        if (e.target.checked) card.classList.add('active');
        else card.classList.remove('active');
      }
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.prod-qty').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].quantity = parseInt(e.target.value, 10) || 1;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.prod-price').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].defaultPrice = parseFloat(e.target.value) || 0;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.prod-discount').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].defaultDiscount = parseFloat(e.target.value) || 0;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.remove-custom-prod').forEach(el => {
    el.addEventListener('click', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog.splice(idx, 1);
      renderProductsEditor();
      renderProposalDocument();
    });
  });

  // Listeners do Submenu Expansível
  container.querySelectorAll('.btn-toggle-drawer').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = btn.getAttribute('data-index');
      state.catalog[idx]._isDrawerOpen = !state.catalog[idx]._isDrawerOpen;
      renderProductsEditor();
    });
  });

  container.querySelectorAll('.prod-edit-name').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].name = e.target.value;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.prod-edit-tagline').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].tagline = e.target.value;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.prod-edit-badge').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].badge = e.target.value;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.prod-edit-desc').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].description = e.target.value;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.prod-edit-features').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].features = e.target.value.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.prod-edit-specs').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      const lines = e.target.value.split('\n');
      const newSpecs = [];
      lines.forEach(line => {
        if (line.includes('=')) {
          const parts = line.split('=');
          newSpecs.push({
            label: parts[0].trim(),
            value: parts.slice(1).join('=').trim()
          });
        } else if (line.trim().length > 0) {
          newSpecs.push({
            label: "Item",
            value: line.trim()
          });
        }
      });
      state.catalog[idx].specs = newSpecs;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.prod-edit-image').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.catalog[idx].image = e.target.value.trim();
      renderProposalDocument();
    });
  });

  // Handler de Anexo de Imagem do Computador (FileReader Base64)
  container.querySelectorAll('.prod-file-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const idx = e.target.getAttribute('data-index');
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(evt) {
        state.catalog[idx].image = evt.target.result; // Armazena Base64 Data URL
        state.catalog[idx]._isDrawerOpen = true; // Mantém gaveta aberta
        renderProductsEditor();
        renderProposalDocument();
      };
      reader.readAsDataURL(file);
    });
  });

  // Handler de Remoção de Foto
  container.querySelectorAll('.btn-remove-img').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = btn.getAttribute('data-index');
      state.catalog[idx].image = '';
      state.catalog[idx]._isDrawerOpen = true;
      renderProductsEditor();
      renderProposalDocument();
    });
  });
}

// Renderizar lista de edição dos Serviços (Frete, Montagem)
function renderServicesEditor() {
  const container = document.getElementById('services-editor-list');
  if (!container) return;

  container.innerHTML = state.services.map((srv, index) => `
    <div class="item-card-edit ${srv.selected ? 'active' : ''}" data-index="${index}">
      <div class="item-card-header" style="display: flex; align-items: center; justify-content: space-between;">
        <div class="item-toggle-wrap" style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
          <label class="switch" style="flex-shrink: 0;">
            <input type="checkbox" class="srv-toggle" data-index="${index}" ${srv.selected ? 'checked' : ''}>
            <span class="slider"></span>
          </label>
          <input type="text" class="srv-name" data-index="${index}" value="${srv.name}" style="font-size: 0.88rem; font-weight: 700; color: #fff; background: transparent; border: 1px solid transparent; padding: 4px 6px; border-radius: 4px; width: 100%; transition: all 0.2s;" onfocus="this.style.background='#141824'; this.style.borderColor='#232b3d';" onblur="this.style.background='transparent'; this.style.borderColor='transparent';" title="Clique para editar o título do serviço">
        </div>
        <button class="remove-custom-service" data-index="${index}" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; width: 26px; height: 26px; min-width: 26px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; cursor: pointer; padding: 0; transition: all 0.2s; flex-shrink: 0; margin-left: 8px;" title="Remover este serviço">✕</button>
      </div>

      <div class="form-group" style="margin-top: 8px; margin-bottom: 8px;">
        <label style="font-size: 0.75rem; color: #94a3b8;">Descrição / Transportadora / Detalhes</label>
        <input type="text" class="srv-desc" data-index="${index}" value="${srv.description || ''}" placeholder="Ex: Transporte com seguro de carga e descarregamento no local do cliente..." style="font-size: 0.8rem;">
      </div>

      <div class="item-fields-grid">
        <div class="form-group">
          <label>Valor (R$)</label>
          <input type="number" step="10" class="srv-price" data-index="${index}" value="${srv.price}">
        </div>
        <div class="form-group">
          <label>Desconto (R$)</label>
          <input type="number" step="10" class="srv-discount" data-index="${index}" value="${srv.discount || 0}">
        </div>
      </div>
    </div>
  `).join('');

  // Listeners dos serviços
  container.querySelectorAll('.srv-toggle').forEach(el => {
    el.addEventListener('change', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.services[idx].selected = e.target.checked;
      renderServicesEditor();
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.remove-custom-service').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (confirm(`Deseja remover o serviço "${state.services[idx].name}"?`)) {
        state.services.splice(idx, 1);
        renderServicesEditor();
        renderProposalDocument();
      }
    });
  });

  container.querySelectorAll('.srv-name').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.services[idx].name = e.target.value;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.srv-desc').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.services[idx].description = e.target.value;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.srv-price').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.services[idx].price = parseFloat(e.target.value) || 0;
      renderProposalDocument();
    });
  });

  container.querySelectorAll('.srv-discount').forEach(el => {
    el.addEventListener('input', (e) => {
      const idx = e.target.getAttribute('data-index');
      state.services[idx].discount = parseFloat(e.target.value) || 0;
      renderProposalDocument();
    });
  });
}

// Cálculo Totais da Proposta
function calculateTotals() {
  let subtotalOriginal = 0;
  let totalDiscounts = 0;
  let finalTotal = 0;

  state.catalog.filter(p => p.selected).forEach(p => {
    const qty = p.quantity || 1;
    const orig = p.defaultPrice * qty;
    const disc = (p.defaultDiscount || 0) * qty;
    subtotalOriginal += orig;
    totalDiscounts += disc;
    finalTotal += (orig - disc);
  });

  state.services.filter(s => s.selected).forEach(s => {
    const orig = s.price;
    const disc = s.discount || 0;
    subtotalOriginal += orig;
    totalDiscounts += disc;
    finalTotal += (orig - disc);
  });

  return {
    subtotalOriginal,
    totalDiscounts,
    finalTotal
  };
}

// Fotos Reais Oficiais dos Equipamentos do Site Forta Tech
function getProductIllustration(prod) {
  let imgSrc = '';
  let cdnFallback = '';
  let label = (typeof prod === 'object' && prod.name) ? prod.name : "Equipamento Oficial Forta Tech";
  const id = (typeof prod === 'object' && prod.id) ? prod.id : prod;

  if (typeof prod === 'object' && prod.image) {
    imgSrc = prod.image;
  }

  // Busca inteligente de imagem e fallback CDN em EQUIPMENT_REAL_IMAGES
  if (typeof EQUIPMENT_REAL_IMAGES !== 'undefined') {
    for (const key of Object.keys(EQUIPMENT_REAL_IMAGES)) {
      const entry = EQUIPMENT_REAL_IMAGES[key];
      if (entry) {
        if (!imgSrc && (entry.id === id || key.toLowerCase() === ('' + id).replace(/[-_]/g, '').toLowerCase())) {
          imgSrc = entry.local || entry.cdn;
        }
        if (entry.local === imgSrc && entry.cdn && entry.cdn !== imgSrc) {
          cdnFallback = entry.cdn;
        }
      }
    }
  }

  if (imgSrc) {
    return `
      <div class="product-illustration-container">
        <img src="${imgSrc}" 
             ${cdnFallback ? `data-cdn="${cdnFallback}" onerror="if(this.dataset.cdn && this.src !== this.dataset.cdn){this.src=this.dataset.cdn;}"` : ''}
             alt="${label}" 
             class="product-illustration-img">
        <div class="product-illustration-badges">
          <span class="badge-orig">EQUIPAMENTO ORIGINAL FORTA TECH</span>
          <span class="badge-gar">GARANTIA DE FÁBRICA 12 MESES</span>
        </div>
      </div>
    `;
  }

  return `
    <div style="padding: 40px; text-align: center; background: #131722; border-radius: 8px;">
      <h3 style="color: var(--primary-red); font-size: 1.2rem;">${label.toUpperCase()}</h3>
    </div>
  `;
}

// Renderização do Logo Oficial Forta Tech
function getFortaLogoSvg(extraStyle = '') {
  const logoSrc = (typeof OFFICIAL_LOGO !== 'undefined' && OFFICIAL_LOGO.local) ? OFFICIAL_LOGO.local : 'images/forta_logo_official.png';
  const cdnLogo = (typeof OFFICIAL_LOGO !== 'undefined' && OFFICIAL_LOGO.cdn) ? OFFICIAL_LOGO.cdn : 'https://fortatech.com.br/cdn/shop/files/logo_forta_tech.png?v=1723114776&width=600';
  const fallbackB64 = (typeof OFFICIAL_LOGO !== 'undefined' && OFFICIAL_LOGO.base64) ? OFFICIAL_LOGO.base64 : '';

  return `
    <img src="${logoSrc}" 
         alt="Forta Tech" 
         class="forta-official-logo"
         onerror="if (this.src !== '${cdnLogo}') { this.src='${cdnLogo}'; } else if (this.src !== '${fallbackB64}' && '${fallbackB64}') { this.src='${fallbackB64}'; }"
         style="max-width: 100%; height: 100%; object-fit: contain; object-position: left center; display: block; ${extraStyle}">
  `;
}

// RENDERIZAÇÃO COMPLETA DO DOCUMENTO DA PROPOSTA
function renderProposalDocument() {
  const docContainer = document.getElementById('proposal-document');
  if (!docContainer) return;

  const totals = calculateTotals();
  const selectedProducts = state.catalog.filter(p => p.selected);
  const selectedServices = state.services.filter(s => s.selected);

  let html = '';

  // -------------------------------------------------------------
  // PÁGINA 1: CAPA CINEMATOGRÁFICA (Fiel à Página 1 do PDF)
  // -------------------------------------------------------------
  html += `
    <div class="doc-page page-cover">
      <div class="cover-bg-grid"></div>
      <div class="cover-accent-line"></div>

      <div class="cover-top">
        <div style="width: 340px; height: 65px; margin-bottom: 25px; display: flex; align-items: center;">
          ${getFortaLogoSvg()}
        </div>
      </div>

      <div class="cover-main-body">
        <h1 class="cover-main-title" style="font-size: 3.6rem; letter-spacing: 1px;">
          ${(state.proposal.mainTitle || 'PROPOSTA COMERCIAL').replace(/\n/g, '<br>').replace(/ /g, '<br>')}
        </h1>
        <div class="cover-date-string" style="font-size: 1.3rem; margin-top: 8px; color: #cbd5e1;">${formatDateExtenso(state.proposal.date)}</div>
      </div>

      <div class="cover-client-card">
        <div class="cover-client-label" style="font-size: 0.9rem;">${state.proposal.clientPrefix || 'Para:'}</div>
        <div class="cover-client-name" style="font-size: 1.4rem; font-weight: 800; color: #FFFFFF;">${state.client.name}</div>
        <div style="font-size: 1.05rem; color: #cbd5e1; margin-top: 4px; font-weight: 600;">${state.client.branch || ''}</div>
        <div class="cover-client-details" style="margin-top: 8px;">
          <span>CNPJ: ${state.client.cnpj || 'Não informado'}</span>
          <span>•</span>
          <span>${state.client.city || ''}</span>
        </div>
      </div>

      <div class="doc-page-footer">
        <div>Ref: <strong>${state.proposal.number}</strong></div>
        <div class="footer-web">${state.company.website}</div>
      </div>
    </div>
  `;

  // -------------------------------------------------------------
  // PÁGINAS DE FICHAS TÉCNICAS (Fiel às Páginas 2 a 6 do PDF)
  // -------------------------------------------------------------
  if (state.proposal.includeTechnicalSheets) {
    selectedProducts.forEach((prod, pIdx) => {
      html += `
        <div class="doc-page">
          <div class="doc-page-header">
            <div style="width: 140px; height: 35px;">
              ${getFortaLogoSvg()}
            </div>
            <div class="header-doc-meta">
              UNDERCAR • FORTATECH.COM.BR • PÁG 0${pIdx + 2}
            </div>
          </div>

          <div class="product-hero-header" style="margin-bottom: 16px;">
            <h2 class="product-main-name" style="font-size: 2.3rem; font-style: italic; font-weight: 900; letter-spacing: 0.5px;">
              ${prod.name.toUpperCase()}
            </h2>
            ${prod.badge ? `
              <div class="product-badges-row">
                <span class="product-badge-item">★ ${prod.badge}</span>
                <span class="product-badge-homolog">Alta Tecnologia & Precisão</span>
              </div>
            ` : ''}
          </div>

          <!-- Imagem / Ilustração Fiel do Equipamento -->
          ${getProductIllustration(prod)}

          <div class="product-intro-desc">
            <strong style="color: var(--primary-red); font-size: 1.05rem; display: block; margin-bottom: 4px;">${prod.tagline || ''}</strong>
            ${prod.description}
          </div>

          <!-- Lista de Destaques Operacionais -->
          <div class="features-grid">
            ${(prod.features || []).map(feat => `
              <div class="feature-pill">
                <span class="feature-pill-icon" style="background: #E50914; color: #fff; width: 18px; height: 18px; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; font-size: 11px;">
                  ✓
                </span>
                <span>${feat}</span>
              </div>
            `).join('')}
          </div>

          <!-- Tabela de Especificações Técnicas -->
          ${prod.specs && prod.specs.length > 0 ? `
            <div class="tech-spec-section">
              <div class="tech-spec-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                ESPECIFICAÇÕES TÉCNICAS OFICIAIS
              </div>
              <div class="tech-spec-grid">
                ${prod.specs.map(s => `
                  <div class="tech-spec-row">
                    <span class="tech-spec-label">${s.label}</span>
                    <span class="tech-spec-val">${s.value}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div class="doc-page-footer">
            <div>${state.client.name}</div>
            <div class="footer-web">${state.company.website}</div>
          </div>
        </div>
      `;
    });
  }

  // -------------------------------------------------------------
  // PÁGINA(S): QUADRO FINANCEIRO & INVESTIMENTO (PAGINAÇÃO DINÂMICA)
  // Suporta propostas com múltiplos itens sem cortar a página
  // -------------------------------------------------------------
  const allQuoteItems = [
    ...selectedProducts.map(p => ({
      isService: false,
      qty: p.quantity || 1,
      name: p.name,
      description: '',
      price: p.defaultPrice,
      discount: p.defaultDiscount || 0
    })),
    ...selectedServices.map(s => ({
      isService: true,
      qty: s.quantity || 1,
      name: s.name,
      description: s.description || '',
      price: s.price,
      discount: s.discount || 0
    }))
  ];

  // Algoritmo de Paginação Inteligente para Documentos A4
  function paginateQuoteItems(items) {
    if (items.length <= 4) return [items];
    const pages = [];
    let list = [...items];
    while (list.length > 0) {
      if (list.length <= 4) {
        pages.push(list);
        break;
      }
      if (list.length === 5) {
        pages.push(list.slice(0, 3));
        list = list.slice(3);
      } else {
        const take = Math.min(6, list.length - 2);
        pages.push(list.slice(0, take));
        list = list.slice(take);
      }
    }
    return pages;
  }

  const financialPages = paginateQuoteItems(allQuoteItems);

  financialPages.forEach((pageItems, pageIdx) => {
    const isLastPage = (pageIdx === financialPages.length - 1);
    const pageNumberText = financialPages.length > 1 ? ` (${pageIdx + 1}/${financialPages.length})` : '';

    html += `
      <div class="doc-page">
        <div class="doc-page-header">
          <div style="width: 140px; height: 35px;">
            ${getFortaLogoSvg()}
          </div>
          <div class="header-doc-meta">
            CONDIÇÕES COMERCIAIS & INVESTIMENTO${pageNumberText}
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <h2 style="font-family: var(--font-display); font-size: 2.1rem; font-weight: 900; letter-spacing: -0.5px; margin-bottom: 4px;">
            Preços, Condições de Pagamento, Prazos${pageIdx > 0 ? ' (Continuação)' : ''}
          </h2>
          <div style="font-size: 0.95rem; color: var(--text-muted);">
            Investimento com bonificação especial aplicada para <strong>${state.client.name}</strong>
          </div>
        </div>

        <div class="price-table-wrap" style="border: 2px solid #E50914; border-radius: 8px; overflow: hidden;">
          <table class="price-table" style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #E50914; color: #FFFFFF;">
                <th style="padding: 14px 12px; text-align: center; font-weight: 800; font-size: 0.85rem; width: 60px;">QUANT</th>
                <th style="padding: 14px 16px; text-align: left; font-weight: 800; font-size: 0.85rem;">PRODUTO / SERVIÇO</th>
                <th style="padding: 14px 16px; text-align: right; font-weight: 800; font-size: 0.85rem;">VALOR UNITÁRIO</th>
                <th style="padding: 14px 16px; text-align: right; font-weight: 800; font-size: 0.85rem;">${(state.proposal.discountCampaignName || 'DESCONTO ESPECIAL').toUpperCase()}</th>
                <th style="padding: 14px 16px; text-align: right; font-weight: 800; font-size: 0.85rem;">VALOR TOTAL</th>
              </tr>
            </thead>
            <tbody>
              ${pageItems.map((item, idx) => {
                const qty = item.qty || 1;
                const unitOrig = item.price;
                const unitDisc = item.discount || 0;
                const totalItem = (unitOrig - unitDisc) * (item.isService ? 1 : qty);

                return `
                  <tr style="background: ${idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)'}; border-bottom: 1px solid #232838;">
                    <td style="padding: 14px 12px; text-align: center; font-weight: 800; color: #E50914;">${qty}</td>
                    <td style="padding: 14px 16px;">
                      <div style="font-weight: 800; color: #FFFFFF; font-size: 0.95rem;">${item.name.toUpperCase()}</div>
                      ${item.description ? `<div style="font-size: 0.78rem; color: #94a3b8; margin-top: 2px;">${item.description}</div>` : ''}
                    </td>
                    <td style="padding: 14px 16px; text-align: right; color: #cbd5e1; font-weight: 600;">${formatBRL(unitOrig)}</td>
                    <td style="padding: 14px 16px; text-align: right; color: #22c55e; font-weight: 800;">${unitDisc > 0 ? formatBRL(unitDisc * (item.isService ? 1 : qty)) : '—'}</td>
                    <td style="padding: 14px 16px; text-align: right; font-weight: 900; color: #FFFFFF; font-size: 1.05rem;">${formatBRL(totalItem)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        ${!isLastPage ? `
          <div style="margin-top: 15px; text-align: right; color: #94a3b8; font-size: 0.85rem; font-style: italic;">
            Continua na página seguinte com o fechamento do investimento ➔
          </div>
        ` : `
          <!-- Caixa de Total da Proposta (Layout Executivo e Refinado) -->
          <div style="display: flex; justify-content: flex-end; margin-top: 24px;">
            <div class="total-investment-box" style="text-align: right; background: #131722; border: 2px solid #E50914; padding: 20px 32px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(229,9,20,0.2);">
              <div style="font-size: 1.1rem; font-weight: 700; color: #cbd5e1; margin-bottom: 4px;">Total da proposta:</div>
              <div class="total-value-display" style="font-family: var(--font-display); font-size: 2.7rem; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">
                ${formatBRL(totals.finalTotal)}
              </div>
              ${totals.totalDiscounts > 0 ? `
                <div style="margin-top: 6px;">
                  <span class="economy-badge-pill" style="font-size: 0.82rem; color: #22c55e; font-weight: 800; display: inline-flex; align-items: center; gap: 6px; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.3); padding: 4px 12px; border-radius: 20px;">
                    <span>✓</span> Economia Total Concedida: ${formatBRL(totals.totalDiscounts)}
                  </span>
                </div>
              ` : ''}

              ${state.proposal.enableInstallments ? (() => {
                if (state.proposal.installmentCustomText && state.proposal.installmentCustomText.trim().length > 0) {
                  return `
                    <div class="installment-display-box" style="margin-top: 10px; background: rgba(229, 9, 20, 0.12); border: 1px solid rgba(229, 9, 20, 0.4); border-radius: 8px; padding: 8px 14px; text-align: right; display: inline-block;">
                      <div style="font-size: 0.75rem; font-weight: 800; color: #ff4d58; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; justify-content: flex-end; gap: 6px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        Opção de Parcelamento:
                      </div>
                      <div style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 800; color: #ffffff; margin-top: 2px;">
                        ${state.proposal.installmentCustomText}
                      </div>
                    </div>
                  `;
                }

                const count = state.proposal.installmentCount || 12;
                const installmentVal = (state.proposal.installmentValue && state.proposal.installmentValue > 0) 
                  ? state.proposal.installmentValue 
                  : (totals.finalTotal / count);
                const desc = state.proposal.installmentDesc || 'Sem juros direto de fábrica / Cartão BNDES';

                return `
                  <div class="installment-display-box" style="margin-top: 10px; background: rgba(229, 9, 20, 0.12); border: 1px solid rgba(229, 9, 20, 0.4); border-radius: 8px; padding: 8px 16px; text-align: right; display: inline-block;">
                    <div style="font-size: 0.75rem; font-weight: 800; color: #ff4d58; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; justify-content: flex-end; gap: 6px;">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                      Opção de Parcelamento:
                    </div>
                    <div style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; color: #ffffff; margin-top: 3px;">
                      ${count}x de <span style="color: #ff4d58;">${formatBRL(installmentVal)}</span>
                    </div>
                    ${desc ? `<div style="font-size: 0.75rem; color: #cbd5e1; font-weight: 600; margin-top: 2px;">(${desc})</div>` : ''}
                  </div>
                `;
              })() : ''}
            </div>
          </div>
        `}

        <div class="doc-page-footer">
          <div style="width: 130px; height: 35px;">
            ${getFortaLogoSvg()}
          </div>
          <div class="footer-web">${state.company.website}</div>
        </div>
      </div>
    `;
  });

  // -------------------------------------------------------------
  // PÁGINA: DETALHES, FORMAS DE PAGAMENTO, FRETE, IMPOSTOS E GARANTIA (Pág 8 do PDF)
  // -------------------------------------------------------------
  if (state.proposal.includeTermsAndPayment) {
    html += `
      <div class="doc-page">
        <div class="doc-page-header">
          <div style="width: 140px; height: 35px;">
            ${getFortaLogoSvg()}
          </div>
          <div class="header-doc-meta">
            DETALHES COMERCIAIS & FISCAIS
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <h2 style="font-family: var(--font-display); font-size: 2.4rem; font-weight: 900; letter-spacing: -0.5px;">
            Detalhes
          </h2>
        </div>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${state.terms.payment ? `
            <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #E50914; padding: 16px 20px; border-radius: 6px;">
              <div style="font-weight: 900; font-size: 0.95rem; text-transform: uppercase; color: #FFFFFF; margin-bottom: 6px;">
                FORMAS DE PAGAMENTO
              </div>
              <div style="font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                ${state.terms.payment}
              </div>
            </div>
          ` : ''}

          ${state.terms.shipping ? `
            <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #E50914; padding: 16px 20px; border-radius: 6px;">
              <div style="font-weight: 900; font-size: 0.95rem; text-transform: uppercase; color: #FFFFFF; margin-bottom: 6px;">
                FRETE
              </div>
              <div style="font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                ${state.terms.shipping}
              </div>
            </div>
          ` : ''}

          ${state.terms.deliveryTime ? `
            <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #E50914; padding: 16px 20px; border-radius: 6px;">
              <div style="font-weight: 900; font-size: 0.95rem; text-transform: uppercase; color: #FFFFFF; margin-bottom: 6px;">
                PRAZO DE ENTREGA
              </div>
              <div style="font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                ${state.terms.deliveryTime}
              </div>
            </div>
          ` : ''}

          ${state.terms.taxes ? `
            <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #E50914; padding: 16px 20px; border-radius: 6px;">
              <div style="font-weight: 900; font-size: 0.95rem; text-transform: uppercase; color: #FFFFFF; margin-bottom: 6px;">
                IMPOSTOS
              </div>
              <div style="font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                ${state.terms.taxes}
              </div>
            </div>
          ` : ''}

          ${state.terms.warranty ? `
            <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #E50914; padding: 16px 20px; border-radius: 6px;">
              <div style="font-weight: 900; font-size: 0.95rem; text-transform: uppercase; color: #FFFFFF; margin-bottom: 6px;">
                GARANTIA
              </div>
              <div style="font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                ${state.terms.warranty}
              </div>
            </div>
          ` : ''}

          ${state.terms.backupMachine ? `
            <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #E50914; padding: 16px 20px; border-radius: 6px;">
              <div style="font-weight: 900; font-size: 0.95rem; text-transform: uppercase; color: #FFFFFF; margin-bottom: 6px;">
                BENEFÍCIO MÁQUINA RESERVA (BACKUP)
              </div>
              <div style="font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                ${state.terms.backupMachine}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="doc-page-footer">
          <div style="width: 130px; height: 35px;">
            ${getFortaLogoSvg()}
          </div>
          <div class="footer-web">${state.company.website}</div>
        </div>
      </div>

      <!-- PÁGINA: SUPORTE TÉCNICO, ASSISTÊNCIA E CONSIDERAÇÕES (Pág 9 do PDF) -->
      <div class="doc-page">
        <div class="doc-page-header">
          <div style="width: 140px; height: 35px;">
            ${getFortaLogoSvg()}
          </div>
          <div class="header-doc-meta">
            SUPORTE TÉCNICO & DIRETRIZES
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <h2 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 900; letter-spacing: -0.5px;">
            Suporte Técnico,<br>Assistência, Considerações.
          </h2>
        </div>

        <div style="display: flex; flex-direction: column; gap: 18px;">
          <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #E50914; padding: 16px 20px; border-radius: 6px;">
            <div style="font-weight: 900; font-size: 0.95rem; text-transform: uppercase; color: #FFFFFF; margin-bottom: 6px;">
              ASSISTÊNCIA TÉCNICA
            </div>
            <div style="font-size: 0.88rem; line-height: 1.6; color: #cbd5e1;">
              ${state.terms.backupMachine ? `${state.terms.backupMachine}<br><br>` : ''}
              A Assistência técnica poderá ser realizada nas instalações da Forta em Santa Catarina, no escritório de São Paulo ou em parceiros/postos de assistência técnica designados. O cliente deverá consultar a Forta antes do envio do equipamento para confirmar a melhor base de apoio para a solução. As peças de reposição estão localizadas no estoque central de Santa Catarina. ${state.terms.techHourRate ? `Fora da garantia, o custo da hora técnica de manutenção é de R$ 135,00.` : ''}
            </div>
          </div>

          ${state.terms.technicalSupport ? `
            <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #E50914; padding: 16px 20px; border-radius: 6px;">
              <div style="font-weight: 900; font-size: 0.95rem; text-transform: uppercase; color: #FFFFFF; margin-bottom: 6px;">
                SUPORTE TÉCNICO
              </div>
              <div style="font-size: 0.88rem; line-height: 1.6; color: #cbd5e1;">
                ${state.terms.technicalSupport}
              </div>
            </div>
          ` : ''}

          ${state.terms.training ? `
            <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #E50914; padding: 16px 20px; border-radius: 6px;">
              <div style="font-weight: 900; font-size: 0.95rem; text-transform: uppercase; color: #FFFFFF; margin-bottom: 6px;">
                TREINAMENTO
              </div>
              <div style="font-size: 0.88rem; line-height: 1.6; color: #cbd5e1;">
                ${state.terms.training}
              </div>
            </div>
          ` : ''}
        </div>

        <div style="text-align: right; margin-top: 25px;">
          <div style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; color: #E50914; letter-spacing: 0.5px;">
            VALIDADE DA PROPOSTA: ${state.proposal.validityDays} DIAS
          </div>
        </div>

        <div class="doc-page-footer">
          <div style="width: 130px; height: 35px;">
            ${getFortaLogoSvg()}
          </div>
          <div class="footer-web">${state.company.website}</div>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // PÁGINA: CONTRA-CAPA & CONTATO OFICIAL (Pág 10 do PDF)
  // -------------------------------------------------------------
  html += `
    <div class="doc-page back-cover" style="text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
      <div style="width: 100%; height: 30px;"></div>

      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <!-- Logo Forta Tech Central -->
        <div style="width: 320px; height: 85px; margin-bottom: 40px;">
          ${getFortaLogoSvg()}
        </div>

        <!-- Banner Telefone Vermelho -->
        <div style="background: #E50914; width: 100%; max-width: 500px; padding: 14px 20px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(229,9,20,0.4);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 900; color: #FFFFFF; letter-spacing: 0.5px;">
            ${state.proposal.sellerPhone || state.company.phone}
          </span>
        </div>

        <!-- Endereço e Contatos -->
        <div style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; max-width: 520px; margin-bottom: 25px;">
          <div>${state.company.address}</div>
          <div>${state.company.cityStateZip}</div>
          <div style="margin-top: 6px; font-weight: 700; color: #FFFFFF;">Email: ${state.proposal.sellerEmail || state.company.email}</div>
        </div>

        <!-- Site Oficial -->
        <div style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 900; color: #FFFFFF; letter-spacing: 0.5px; margin-bottom: 30px;">
          ${state.company.website}
        </div>
      </div>

      <div class="doc-page-footer">
        <div>${state.company.name || 'FORTA TECH'} • ${state.company.slogan || 'Soluções Automotivas de Alta Precisão'}</div>
        <div class="footer-web">${state.company.website}</div>
      </div>
    </div>
  `;

  docContainer.innerHTML = html;
}

// Ações Globais: Impressão, Download Standalone, Templates, Novo Item
function initGlobalActions() {
  // Impressão / PDF
  document.getElementById('btn-print-pdf')?.addEventListener('click', () => {
    window.print();
  });

  // Alternador de Temas
  const themeDarkBtn = document.getElementById('theme-dark-btn');
  const themeLightBtn = document.getElementById('theme-light-btn');
  const docContainer = document.getElementById('proposal-document');

  themeDarkBtn?.addEventListener('click', () => {
    themeDarkBtn.classList.add('active');
    themeLightBtn.classList.remove('active');
    docContainer.classList.remove('theme-clean-light');
    state.proposal.theme = 'dark-tech';
  });

  themeLightBtn?.addEventListener('click', () => {
    themeLightBtn.classList.add('active');
    themeDarkBtn.classList.remove('active');
    docContainer.classList.add('theme-clean-light');
    state.proposal.theme = 'clean-light';
  });

  // Exportar HTML Independente (com estilos embutidos)
  document.getElementById('btn-export-html')?.addEventListener('click', () => {
    exportStandaloneHTML();
  });

  // Adicionar Novo Serviço / Frete Customizado
  document.getElementById('btn-add-service')?.addEventListener('click', () => {
    const newName = prompt('Nome do Serviço / Frete / Taxa:', 'Frete Rodoviário Dedicado');
    if (!newName) return;
    const newPrice = parseFloat(prompt('Valor do Serviço (R$):', '2500')) || 0;
    const newDesc = prompt('Descrição / Detalhes do Serviço:', 'Transporte com seguro de carga e entrega no local.') || '';

    state.services.push({
      id: 'srv_' + Date.now(),
      name: newName,
      description: newDesc,
      price: newPrice,
      discount: 0,
      selected: true,
      quantity: 1
    });

    renderServicesEditor();
    renderProposalDocument();
  });

  // Adicionar Equipamento Customizado
  document.getElementById('btn-add-custom-prod')?.addEventListener('click', () => {
    const newName = prompt('Nome do Equipamento / Produto:', 'Elevador Automotivo 4 Toneladas Forta Tech');
    if (!newName) return;
    const newPrice = parseFloat(prompt('Preço de Tabela (R$):', '25000')) || 0;
    const newDiscount = parseFloat(prompt('Desconto Especial (R$):', '3000')) || 0;

    state.catalog.push({
      id: 'custom_' + Date.now(),
      name: newName,
      category: 'Equipamentos Especiais',
      tagline: 'Solução de Alta Resistência e Produtividade',
      badge: 'Garantia Forta Tech',
      description: 'Equipamento de alta robustez desenvolvido para alta demanda operacional em centros automotivos.',
      features: [
        'Estrutura reforçada de máxima segurança',
        'Acionamento suave e silencioso',
        'Trava de segurança mecânica e pneumática'
      ],
      specs: [
        { label: 'Capacidade', value: 'Conforme aplicação' },
        { label: 'Garantia', value: '12 Meses' }
      ],
      defaultPrice: newPrice,
      defaultDiscount: newDiscount,
      selected: true,
      quantity: 1,
      isCustom: true,
      _isDrawerOpen: true
    });

    renderProductsEditor();
    renderProposalDocument();

    setTimeout(() => {
      const cards = document.querySelectorAll('.item-card-edit');
      const lastCard = cards[cards.length - 1];
      if (lastCard) {
        lastCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  });

  // Resetar para Modelo Padrão Águia Branca
  document.getElementById('btn-reset-template')?.addEventListener('click', () => {
    if (confirm('Deseja restaurar a proposta para o modelo original Águia Branca?')) {
      state.client = JSON.parse(JSON.stringify(DEFAULT_CONFIG.client));
      state.proposal = JSON.parse(JSON.stringify(DEFAULT_CONFIG.proposal));
      state.terms = JSON.parse(JSON.stringify(DEFAULT_CONFIG.terms));
      state.catalog = DEFAULT_CATALOG.filter(p => p.selected).map(p => JSON.parse(JSON.stringify(p)));
      state.services = JSON.parse(JSON.stringify(DEFAULT_SERVICES));
      populateFormFields();
      renderProductsEditor();
      renderServicesEditor();
      renderProposalDocument();
    }
  });
}

// Exportador de HTML Standalone (100% Autônomo e com CSS Inlined)
function exportStandaloneHTML() {
  const proposalHtml = document.getElementById('proposal-document').outerHTML;
  const inlinedCSS = typeof DOC_EMBEDDED_CSS !== 'undefined' ? DOC_EMBEDDED_CSS : '';

  const fullStandalone = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proposta Comercial - Forta Tech - ${state.client.name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700;900&display=swap" rel="stylesheet">
  <style>
    ${inlinedCSS}
  </style>
</head>
<body>
  <!-- Barra de Ações do Documento Exportado -->
  <div class="export-top-bar">
    <div class="export-brand-title">
      <span style="background:#E50914; color:#fff; padding:4px 10px; border-radius:4px; font-size:0.85rem; font-weight:900; letter-spacing:0.5px;">FORTA TECH</span>
      <span>Proposta Comercial • ${state.client.name}</span>
    </div>
    <div style="display: flex; gap: 10px;">
      <button class="export-btn" onclick="window.print()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        Imprimir / Salvar em PDF
      </button>
    </div>
  </div>

  <!-- Documento Oficial -->
  <div class="export-doc-container">
    ${proposalHtml}
  </div>
</body>
</html>`;

  const blob = new Blob([fullStandalone], { type: 'text/html;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Proposta_Comercial_FortaTech_${state.client.name.replace(/[^a-zA-Z0-9]/g, '_')}.html`;
  a.click();
}

// ==========================================================================
// GERENCIADOR DO MODAL DE CATÁLOGO MASTER DE EQUIPAMENTOS
// ==========================================================================
function initCatalogModal() {
  const modal = document.getElementById('catalog-modal');
  const btnOpen = document.getElementById('btn-open-catalog-modal');
  const btnClose = document.getElementById('btn-close-catalog-modal');
  const searchInput = document.getElementById('catalog-search-input');
  const pillsContainer = document.getElementById('catalog-category-pills');
  const gridContainer = document.getElementById('catalog-items-grid');

  const catalogSource = (typeof DEFAULT_CATALOG !== 'undefined') ? DEFAULT_CATALOG : [];
  if (!modal || !btnOpen || catalogSource.length === 0) return;

  let activeCategory = 'all';
  let searchTerm = '';

  // Categorias disponíveis no Catálogo 2026
  const categories = [
    { id: 'all', label: 'Todos os Equipamentos' },
    { id: 'undercar', label: 'Alinhamento 3D' },
    { id: 'elevadores', label: 'Elevadores' },
    { id: 'balanceadoras', label: 'Balanceadoras & Desmontadoras' },
    { id: 'adas', label: 'Sistemas ADAS' },
    { id: 'scanners', label: 'Scanners & DTEA' },
    { id: 'injetores', label: 'Injeção & Bicos' },
    { id: 'atf', label: 'ATF & Ar Condicionado' },
    { id: 'vhe', label: 'Veículos Elétricos (VHE)' },
    { id: 'lubrificacao', label: 'Lubrificação & Pneus' }
  ];

  // Renderiza Pílulas de Categoria
  if (pillsContainer) {
    pillsContainer.innerHTML = categories.map(cat => `
      <button class="category-pill ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    pillsContainer.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        pillsContainer.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-cat');
        filterAndRenderCatalog();
      });
    });
  }

  // Filtragem e Renderização dos Cards
  function filterAndRenderCatalog() {
    if (!gridContainer) return;

    const term = searchTerm.toLowerCase().trim();
    const filtered = catalogSource.filter(item => {
      const matchCat = (activeCategory === 'all') || (item.categoryKey === activeCategory);
      const matchSearch = !term || 
        item.name.toLowerCase().includes(term) || 
        (item.description && item.description.toLowerCase().includes(term)) ||
        (item.category && item.category.toLowerCase().includes(term)) ||
        (item.tagline && item.tagline.toLowerCase().includes(term));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #94a3b8;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; opacity: 0.6;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <div style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 4px;">Nenhum equipamento encontrado</div>
          <div style="font-size: 0.9rem;">Tente pesquisar por outro termo ou selecione a categoria "Todos os Equipamentos".</div>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map(item => {
      const priceText = item.defaultPrice > 0 ? formatBRL(item.defaultPrice) : 'Sob Consulta';
      const imgSrc = item.image || 'images/alinhadora_advanced_3d_black_edition.png';
      let cdnFallback = '';
      if (typeof EQUIPMENT_REAL_IMAGES !== 'undefined') {
        for (const key of Object.keys(EQUIPMENT_REAL_IMAGES)) {
          const entry = EQUIPMENT_REAL_IMAGES[key];
          if (entry && entry.local === imgSrc && entry.cdn && entry.cdn !== imgSrc) {
            cdnFallback = entry.cdn;
            break;
          }
        }
      }

      return `
        <div class="catalog-card-item">
          <div class="catalog-card-img-wrap">
            <img src="${imgSrc}" ${cdnFallback ? `data-cdn="${cdnFallback}" onerror="if(this.dataset.cdn && this.src !== this.dataset.cdn){this.src=this.dataset.cdn;}"` : ''} alt="${item.name}" loading="lazy">
          </div>
          <div class="catalog-card-body">
            <div>
              <div class="catalog-card-cat-badge">${item.category || 'Equipamento'}</div>
              <h4 class="catalog-card-title">${item.name}</h4>
              <p class="catalog-card-desc">${item.description || 'Equipamento de alta tecnologia e precisão operacional Forta Tech.'}</p>
            </div>
            <div class="catalog-card-footer">
              <div class="catalog-card-price ${item.defaultPrice > 0 ? '' : 'no-price'}">
                ${priceText}
              </div>
              <button class="btn-add-to-prop" data-item-id="${item.id}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Listener para adicionar produto
    gridContainer.querySelectorAll('.btn-add-to-prop').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-item-id');
        const masterItem = catalogSource.find(it => it.id === itemId);
        if (masterItem) {
          addEquipmentToProposal(masterItem, btn);
        }
      });
    });
  }

  // Adiciona o item à proposta
  function addEquipmentToProposal(masterItem, btnElement) {
    const existingIndex = state.catalog.findIndex(p => p.id === masterItem.id);

    if (existingIndex >= 0) {
      state.catalog[existingIndex].selected = true;
      state.catalog[existingIndex].quantity = (state.catalog[existingIndex].quantity || 1) + 1;
    } else {
      const cloned = JSON.parse(JSON.stringify(masterItem));
      cloned.selected = true;
      cloned.quantity = 1;
      cloned._isDrawerOpen = false;
      state.catalog.push(cloned);
    }

    // Feedback no botão
    if (btnElement) {
      const origText = btnElement.innerHTML;
      btnElement.style.background = '#22c55e';
      btnElement.innerHTML = '✓ Adicionado!';
      setTimeout(() => {
        btnElement.style.background = '';
        btnElement.innerHTML = origText;
      }, 1200);
    }

    // Atualiza a interface da proposta
    renderProductsEditor();
    renderProposalDocument();
  }

  // Eventos de Busca
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      filterAndRenderCatalog();
    });
  }

  // Abrir / Fechar Modal
  btnOpen.addEventListener('click', () => {
    modal.style.display = 'flex';
    filterAndRenderCatalog();
    setTimeout(() => searchInput?.focus(), 100);
  });

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
}


