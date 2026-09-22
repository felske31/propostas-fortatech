// ==========================================================================
// CSS EMBEDADO COMPLETO PARA EXPORTAÇÃO STANDALONE E IMPRESSÃO A4 FULL-BLEED
// Garante fidelidade visual 100% e evita qualquer distorção no PDF
// ==========================================================================

const DOC_EMBEDDED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700;900&display=swap');

:root {
  --primary-red: #E50914;
  --primary-red-hover: #c40811;
  --primary-red-glow: rgba(229, 9, 20, 0.4);
  --dark-bg: #0b0c10;
  --dark-surface: #14161d;
  --dark-surface-2: #1e222d;
  --dark-border: #2c3242;
  --text-main: #f0f2f5;
  --text-muted: #9ba3b4;
  --accent-gold: #f59e0b;
  --accent-cyan: #06b6d4;
  --accent-green: #10b981;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --font-main: 'Plus Jakarta Sans', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.5);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-main);
  background-color: #060709;
  color: var(--text-main);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0 0 60px 0;
}

.export-top-bar {
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(18, 21, 30, 0.95);
  border-bottom: 1px solid #282f42;
  padding: 14px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(12px);
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.export-brand-title {
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 12px;
}

.export-btn {
  background: linear-gradient(135deg, #E50914 0%, #ff2e3b 100%);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.88rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px rgba(229, 9, 20, 0.4);
  transition: all 0.2s;
}

.export-btn:hover {
  background: linear-gradient(135deg, #ff1a26 0%, #ff424e 100%);
  transform: translateY(-1px);
}

.export-doc-container {
  width: 100%;
  max-width: 860px;
  margin-top: 30px;
  padding: 0 15px;
  box-sizing: border-box;
}

#proposal-document {
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
}

.doc-page {
  background: #0d0f17;
  border: 1px solid #232838;
  border-radius: 12px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
  padding: 40px 35px;
  min-height: 1120px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.forta-official-logo {
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
}

.doc-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 15px;
  margin-bottom: 25px;
}

.header-doc-meta {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--text-muted);
  text-transform: uppercase;
}

.page-cover {
  background: radial-gradient(circle at 85% 15%, rgba(229, 9, 20, 0.18) 0%, transparent 45%),
              radial-gradient(circle at 15% 85%, rgba(25, 30, 45, 0.8) 0%, transparent 40%),
              #08090d;
  padding: 45px 40px 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.cover-bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 36px 36px;
  pointer-events: none;
}

.cover-accent-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(180deg, #E50914 0%, rgba(229, 9, 20, 0.3) 100%);
}

.cover-top {
  position: relative;
  z-index: 2;
}

.cover-main-body {
  margin: 30px 0;
  position: relative;
  z-index: 2;
}

.cover-main-title {
  font-family: var(--font-display);
  font-size: 3.6rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.5px;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #ffffff;
}

.cover-date-string {
  font-size: 1.2rem;
  color: #cbd5e1;
  font-weight: 600;
}

.cover-client-card {
  margin-top: auto;
  margin-bottom: 20px;
  background: rgba(18, 22, 33, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 5px solid var(--primary-red);
  padding: 20px 26px;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
}

.cover-client-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-red);
  font-weight: 800;
  margin-bottom: 4px;
}

.cover-client-name {
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 2px;
}

.cover-client-details {
  font-size: 0.88rem;
  color: var(--text-muted);
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.doc-page-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 15px;
  margin-top: 20px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-web {
  color: #E50914;
  font-weight: 700;
}

.product-hero-header {
  margin-bottom: 16px;
}

.product-main-name {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1.2;
}

.product-badges-row {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.product-badge-item {
  background: rgba(229, 9, 20, 0.15);
  border: 1px solid rgba(229, 9, 20, 0.4);
  color: #ff4d58;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
}

.product-badge-homolog {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #cbd5e1;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
}

.product-illustration-container {
  background: radial-gradient(circle at center, #1b2133 0%, #0a0c12 100%);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 12px;
  border: 1px solid #232838;
  box-shadow: 0 12px 30px rgba(0,0,0,0.6);
  margin-bottom: 22px;
  min-height: 380px;
  height: 390px;
  box-sizing: border-box;
}

.product-illustration-img {
  max-width: 96%;
  max-height: 315px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 16px 32px rgba(0,0,0,0.85));
  display: block;
}

.product-illustration-badges {
  margin-top: 14px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.product-illustration-badges .badge-orig {
  background: rgba(229,9,20,0.15);
  border: 1px solid rgba(229,9,20,0.4);
  color: #ff4d58;
  font-size: 0.76rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
}

.product-illustration-badges .badge-gar {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: #cbd5e1;
  font-size: 0.76rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
}

.product-intro-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #cbd5e1;
  margin-bottom: 20px;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 22px;
}

.feature-pill {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #232838;
  border-radius: 8px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: #e2e8f0;
}

.tech-spec-section {
  background: #11141d;
  border: 1px solid #232838;
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 20px;
}

.tech-spec-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 800;
  color: #ff4d58;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.tech-spec-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 24px;
}

.tech-spec-row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.82rem;
}

.tech-spec-label {
  color: #94a3b8;
}

.tech-spec-val {
  color: #ffffff;
  font-weight: 700;
  text-align: right;
}

.price-table-wrap {
  border: 2px solid #E50914;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.price-table {
  width: 100%;
  border-collapse: collapse;
}

.price-table th {
  background: #E50914;
  color: #ffffff;
  padding: 14px 16px;
  font-weight: 800;
  font-size: 0.85rem;
  text-align: left;
}

.price-table td {
  padding: 14px 16px;
  border-bottom: 1px solid #232838;
  font-size: 0.9rem;
}

.total-investment-box {
  background: linear-gradient(135deg, #161a26 0%, #0e1017 100%) !important;
  border: 2px solid var(--primary-red) !important;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(229, 9, 20, 0.2) !important;
}

.total-value-display {
  color: #ffffff !important;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 2px 8px rgba(0, 0, 0, 0.9) !important;
  letter-spacing: -0.5px;
}

.economy-badge-pill {
  background: rgba(34, 197, 94, 0.12) !important;
  border: 1px solid rgba(34, 197, 94, 0.35) !important;
  color: #22c55e !important;
  font-weight: 800;
  box-shadow: 0 2px 10px rgba(34, 197, 94, 0.15);
}

.installment-display-box {
  background: rgba(229, 9, 20, 0.12);
  border: 1px solid rgba(229, 9, 20, 0.4);
  border-radius: 8px;
  padding: 8px 16px;
  text-align: right;
  display: inline-block;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* ==========================================================================
   PRINT / PDF MEDIA QUERIES (IMPRESSÃO PERFEITA FULL-BLEED A4 210mm x 297mm)
   ========================================================================== */

@page {
  size: A4 portrait;
  margin: 0 !important;
}

@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
    box-sizing: border-box !important;
  }

  html, body {
    width: 210mm !important;
    height: auto !important;
    margin: 0 auto !important;
    padding: 0 !important;
    background: #08090d !important;
    overflow: visible !important;
  }

  .export-top-bar {
    display: none !important;
  }

  .export-doc-container {
    display: block !important;
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    margin: 0 !important;
    padding: 0 !important;
    background: transparent !important;
    overflow: visible !important;
    transform: none !important;
  }

  #proposal-document {
    display: block !important;
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    margin: 0 !important;
    padding: 0 !important;
    gap: 0 !important;
    transform: none !important;
  }

  /* PÁGINA A4 COM ALTURA E ENCAIXE MILIMÉTRICO */
  .doc-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    margin: 0 !important;
    padding: 16mm 18mm !important;
    box-sizing: border-box !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    page-break-before: always !important;
    page-break-after: always !important;
    break-before: page !important;
    break-after: page !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
    background-color: #08090d !important;
    overflow: hidden !important;
    position: relative !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
  }

  .doc-page:first-child,
  .page-cover {
    page-break-before: auto !important;
    break-before: auto !important;
  }

  /* CAPA */
  .page-cover {
    padding: 24mm 20mm !important;
  }

  .cover-main-title {
    font-size: 3.4rem !important;
    line-height: 1.05 !important;
  }

  .cover-client-name {
    font-size: 1.3rem !important;
  }

  /* PÁGINAS DE PRODUTO */
  .product-hero-header {
    margin-bottom: 10px !important;
  }

  .product-main-name {
    font-size: 1.65rem !important;
    line-height: 1.15 !important;
  }

  .product-badges-row {
    margin-top: 4px !important;
    gap: 6px !important;
  }

  .product-badge-item,
  .product-badge-homolog {
    font-size: 0.72rem !important;
    padding: 3px 9px !important;
  }

  .product-illustration-container {
    height: 280px !important;
    min-height: 280px !important;
    max-height: 280px !important;
    padding: 10px 18px !important;
    margin-bottom: 12px !important;
    background: radial-gradient(circle at center, #1b2133 0%, #0a0c12 100%) !important;
  }

  .product-illustration-img {
    max-height: 235px !important;
    max-width: 96% !important;
    width: auto !important;
    object-fit: contain !important;
    display: block !important;
    visibility: visible !important;
  }

  .product-illustration-badges {
    margin-top: 8px !important;
    gap: 6px !important;
  }

  .product-illustration-badges span {
    font-size: 0.68rem !important;
    padding: 2px 8px !important;
  }

  .product-intro-desc {
    font-size: 0.85rem !important;
    line-height: 1.4 !important;
    margin-bottom: 12px !important;
  }

  .product-intro-desc strong {
    font-size: 0.95rem !important;
    margin-bottom: 3px !important;
  }

  .features-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 7px !important;
    margin-bottom: 12px !important;
  }

  .feature-pill {
    padding: 6px 10px !important;
    font-size: 0.76rem !important;
    line-height: 1.3 !important;
    gap: 7px !important;
  }

  .feature-pill-icon {
    width: 15px !important;
    height: 15px !important;
    font-size: 10px !important;
    flex-shrink: 0 !important;
  }

  .tech-spec-section {
    padding: 10px 14px !important;
    margin-bottom: 10px !important;
  }

  .tech-spec-title {
    font-size: 0.78rem !important;
    margin-bottom: 6px !important;
  }

  .tech-spec-grid {
    gap: 4px 18px !important;
  }

  .tech-spec-row {
    padding: 2px 0 !important;
    font-size: 0.74rem !important;
  }

  /* PÁGINA DE PREÇOS / FINANCEIRO */
  .price-table th {
    padding: 9px 12px !important;
    font-size: 0.78rem !important;
  }

  .price-table td {
    padding: 9px 12px !important;
    font-size: 0.82rem !important;
  }

  .total-investment-box {
    padding: 14px 24px !important;
    margin-top: 18px !important;
  }

  .total-value-display {
    font-size: 2.4rem !important;
  }

  /* RODAPÉ */
  .doc-page-footer {
    padding-top: 8px !important;
    margin-top: 6px !important;
    font-size: 0.72rem !important;
  }
}
`;
