// ==========================================================================
// ASSETS VISUAIS OFICIAIS FORTATECH.COM.BR
// Logo oficial e imagens dos equipamentos
// ==========================================================================

const EQUIPMENT_REAL_IMAGES = {
  alinhadora3D: {
    local: "images/alinhadora_advanced_3d_black_edition.png",
    cdn: "images/alinhadora_advanced_3d_black_edition.png"
  },
  alinhadoraAdvanced3D: {
    local: "images/alinhadora_advanced_3d_black_edition.png",
    cdn: "images/alinhadora_advanced_3d_black_edition.png"
  },
  alinhadoraEssence3D: {
    local: "images/alinhadora_advanced_3d.png",
    cdn: "images/alinhadora_advanced_3d.png"
  },
  alinhadoraWA861: {
    local: "images/alinhadora_wa861_smartsafe.png",
    cdn: "images/alinhadora_wa861_smartsafe.png"
  },
  adasEcoSmartSafe: {
    local: "images/adas_eco_smartsafe.png",
    cdn: "images/adas_eco_smartsafe.png"
  },
  elevadorEB452Vermelho: {
    local: "images/elevador_2col_eb452_vermelho.png",
    cdn: "images/elevador_2col_eb452_vermelho.png"
  },
  elevadorEPP452Portico: {
    local: "images/elevador_2col_epp452_portico_grafite.png",
    cdn: "images/elevador_2col_epp452_portico_grafite.png"
  },
  elevadorEPP602: {
    local: "images/elevador_6000kg_epp602.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202411061325346012elevador-600.png?v=1789072441"
  },
  elevadorPantograficoETZ: {
    local: "images/elevador_pantografico_etz_fortatech.png",
    cdn: "images/elevador_pantografico_etz_fortatech.png"
  },
  elevadorPantograficoETZ30SS: {
    local: "images/elevador_pantografico_etz30ss_sobrepor.png",
    cdn: "images/elevador_pantografico_etz30ss_sobrepor.png"
  },
  recicladoraArFT545D: {
    local: "images/recicladora_ar_ft545d_dualac.png",
    cdn: "images/recicladora_ar_ft545d_dualac.png"
  },
  recicladoraAc519SmartSafe: {
    local: "images/recicladora_ac519_smartsafe.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202411061628520484ac-519-lado.png?v=1789407724"
  },
  balanceadoraB102: {
    local: "images/balanceadora_b102.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202410241337018827balan-102_ff5bf4d7-cbcd-4e63-813f-68547540e38e.png?v=1787676431"
  },
  balanceadoraSpin500: {
    local: "images/balanceadora_spin_500.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202608261331486654spin_500_03.png?v=1787761925"
  },
  desmontadoraGrip500: {
    local: "images/desmontadora_grip_500.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202504241446173012grip_500.png?v=1769612502"
  },
  maquinaBicosCNC605A: {
    local: "images/maquina_cnc_605a.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/cnc-605-frente2.png?v=1786993878"
  },
  maquinaAtfCat501s: {
    local: "images/maquina_atf_cat_501s.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202410231317357764cat-frente.png?v=1729700606"
  },
  maleta90AdaptadoresAtf: {
    local: "images/maleta_90_adaptadores_atf.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202502191443150037maleta.png?v=1787751159"
  },
  maquinaThermoEliteX1: {
    local: "images/maquina_thermo_elite_x1.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202504241336451226thermo.png?v=1745513681"
  },
  maquinaAtfFluid900: {
    local: "images/maquina_atf_fluid_900.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202609161432371535900.png?v=1789581719"
  },
  maquinaAtfFluid500: {
    local: "images/maquina_atf_fluid_500.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202410221614378048teck-100.png?v=1729624643"
  },
  trocaOleoToc317: {
    local: "images/troca_oleo_toc_317.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202410221726042083toc-317-frente.png?v=1787762325"
  },
  scannerLaunch919DteaPro: {
    local: "images/scanner_launch_919_dtea_pro.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta1_ba4c9c11-1617-4c0c-adbf-9cbcb07ce035.png?v=1789995833"
  },
  scannerLaunchX431ProSe: {
    local: "images/scanner_launch_x431_pro_se.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202609161141541640prose.png?v=1789570137"
  },
  scannerLaunchPadViiLink: {
    local: "images/scanner_launch_pad_vii_link.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/PAD_VII_NOVO1.png?v=1769633331"
  },
  scannerLaunchPadIxLink: {
    local: "images/scanner_launch_pad_ix_link.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/pad_ix.png?v=1762781513"
  },
  scannerLaunchPro3LinkHd: {
    local: "images/scanner_launch_pro3_link_hd.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202608261146475038pro3-link_f2f6f20e-95dd-4372-aa7a-6bc043c6c79f.png?v=1787755669"
  },
  calibradorN2Smart1: {
    local: "images/calibrador_n2_smart_1.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202601261413291850n2_smart_01.png?v=1776978388"
  },
  equipamentoVheCe39: {
    local: "images/equipamento_vhe_ce39_smartsafe.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/ISMART_EVP01.png?v=1739213250"
  },
  avlEvaluateVhe: {
    local: "images/avl_evaluate_vhe.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/ISMARTEV_RT100.png?v=1739213175"
  },
  mantaAntiChamasEv: {
    local: "images/manta_anti_chamas_ev.png",
    cdn: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202609101006346430kit_de_cabos.png?v=1789045619"
  }
};

const OFFICIAL_LOGO = {
  local: "images/forta_logo_official.png",
  base64: "data:image/png;base64,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"
};

const EQUIPMENT_ASSETS = {
  // Logo Oficial Forta Tech (PNG oficial de alta fidelidade)
  logoFortaTech: '<img src="images/forta_logo_official.png" alt="Forta Tech" class="forta-official-logo-img" style="max-width: 100%; height: auto; object-fit: contain; display: block;">'
};
