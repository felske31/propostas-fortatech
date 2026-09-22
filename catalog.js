// ==========================================================================
// CATÁLOGO OFICIAL FORTA TECH 2026 (CATÁLOGO MASTER COMPLETO)
// Linha completa: Undercar, Alinhadoras 3D, Elevadores, Balanceadoras, Desmontadoras,
// Scanners X-431 & DTEA, ADAS, Limpeza de Bicos, ATF, VHE e Lubrificação
// ==========================================================================

const DEFAULT_CATALOG = [
  // --------------------------------------------------------------------------
  // 1. ALINHAMENTO DE DIREÇÃO 3D (UNDERCAR)
  // --------------------------------------------------------------------------
  {
    id: "alinhadora-3d-forta-tech-advanced",
    name: "Alinhadora 3D Forta Tech Advanced Black Edition",
    category: "Undercar & Alinhamento 3D",
    categoryKey: "undercar",
    tagline: "A Pioneira em Alinhamento Sem Rampa",
    badge: "Homologada Volvo & VW",
    description: "Alta tecnologia, mobilidade e máxima produtividade em um só equipamento. Com câmeras 4K Ultra HD, mini targets inovadores e banco de dados multimarcas atualizado, a ADVANCED realiza alinhamentos com precisão milimétrica em qualquer elevador da oficina sem necessidade de rampa dedicada.",
    features: [
      "Transforme seu elevador de 2 colunas em um box de alinhamento de alta rentabilidade",
      "Compensa até 13% de desnível no elevador ou no piso do veículo",
      "Câmeras 4K de alta precisão com leitura instantânea em tempo real",
      "Medidas automáticas completas: bitola, entre-eixos, diâmetro de pneus e ângulos",
      "Análise completa de cáster, cambagem e convergência/divergência",
      "Alvos antirreflexo ultraleves com fixação universal e sem componentes eletrônicos"
    ],
    specs: [
      { label: "Resolução das Câmeras", value: "Câmeras 4K Ultra HD de Alta Precisão" },
      { label: "Compensação de Desnível", value: "Até 13% no elevador ou piso" },
      { label: "Compatibilidade de Elevador", value: "Qualquer elevador / sem rampa dedicada" },
      { label: "Alvos (Targets)", value: "Mini targets antirreflexo ultra resistentes" },
      { label: "Homologações Oficiais", value: "Volvo e Volkswagen" },
      { label: "Banco de Dados", value: "Multimarcas Global com Atualizações Periódicas" },
      { label: "Garantia", value: "12 Meses de Fábrica Forta Tech" }
    ],
    defaultPrice: 71900.00,
    defaultDiscount: 16900.00,
    finalPrice: 55000.00,
    image: "images/alinhadora_advanced_3d_black_edition.png",
    selected: true,
    quantity: 1
  },
  {
    id: "alinhadora-essence-3d-black-edition",
    name: "Alinhadora Essence 3D Black Edition",
    category: "Undercar & Alinhamento 3D",
    categoryKey: "undercar",
    tagline: "Alinhamento 3D com Precisão OEM e Investimento Inteligente",
    badge: "Precisão OEM de Fábrica",
    description: "A Essence 3D oferece tecnologia avançada com câmeras de alta resolução, software inteligente e operação intuitiva em um equipamento compacto e moderno. Zere o retrabalho e entregue alinhamento com padrão de fábrica.",
    features: [
      "Realiza medição da distância entre-eixos, bitola, dimensões cruzadas e diâmetros",
      "Indicações de orientação de uso com LEDs auxiliares ao lado das câmeras",
      "Permite a realização de procedimentos em conformidade com as especificações OE",
      "Banco de dados atualizado com leitura de modelos nacionais e importados"
    ],
    specs: [
      { label: "Tipo de Alinhamento", value: "3D Digital de Alta Resolução" },
      { label: "Indicação Visual", value: "LEDs de auxílio no travessão de câmeras" },
      { label: "Medições Especiais", value: "Dimensões cruzadas, entre-eixos e bitola" },
      { label: "Garantia", value: "12 Meses" }
    ],
    defaultPrice: 58900.00,
    defaultDiscount: 9000.00,
    finalPrice: 49900.00,
    image: "images/alinhadora_advanced_3d.png",
    selected: false,
    quantity: 1
  },
  {
    id: "alinhadora-wa861-pro-3d",
    name: "Alinhadora WA 861 PRO 3D SmartSafe / Forta Tech",
    category: "Undercar & Alinhamento 3D",
    categoryKey: "undercar",
    tagline: "Solução Móvel Definitiva em Ultra HD com Rastreamento Automático",
    badge: "Rastreamento Automático",
    description: "Revoluciona o layout da oficina. Com rastreamento automático inteligente, as câmeras acompanham a altura do elevador sozinhas. Transforma um elevador comum de 2 colunas em um box de alinhamento com até 30% a mais de produtividade.",
    features: [
      "Câmeras móveis que acompanham a subida e descida do elevador automaticamente",
      "Sem obras na oficina, sem rampas fixas ou valetas",
      "Software SmartSafe com relatórios gráficos instantâneos",
      "Alvos de alta durabilidade com garras autocentrantes"
    ],
    specs: [
      { label: "Tecnologia de Rastreamento", value: "Motorizado Automático com Câmeras Ultra HD" },
      { label: "Compatibilidade de Box", value: "Elevador 2 Colunas, 4 Colunas, Tesoura ou Valeta" },
      { label: "Comunicação", value: "Sem fios / Alta velocidade" },
      { label: "Garantia", value: "12 Meses" }
    ],
    defaultPrice: 78900.00,
    defaultDiscount: 14000.00,
    finalPrice: 64900.00,
    image: "images/alinhadora_wa861_smartsafe.png",
    selected: false,
    quantity: 1
  },
  {
    id: "alinhadora-wa861-lite-3d",
    name: "Alinhadora WA 861 LITE 3D",
    category: "Undercar & Alinhamento 3D",
    categoryKey: "undercar",
    tagline: "Tecnologia de Ponta e Economia para sua Oficina",
    badge: "Melhor Custo-Benefício 3D",
    description: "Totalmente adaptável a qualquer rampa ou valeta graças ao ajuste manual da torre. Conta com base de dados global e segundo monitor integrado. Emissão de relatórios visuais de 'antes e depois' para comprovar o serviço ao cliente.",
    features: [
      "Segundo monitor de apoio para visualização direta do operador sob o veículo",
      "Leitura 3D rápida com banco de dados global",
      "Relatórios visuais claros para valorizar o serviço de alinhamento",
      "Estrutura compacta que economiza espaço útil de trabalho"
    ],
    specs: [
      { label: "Monitores", value: "Dois monitores (Painel Superior + Monitor de Apoio)" },
      { label: "Ajuste de Altura", value: "Torre com ajuste manual suave" },
      { label: "Precisão", value: "3D Milimétrica" },
      { label: "Garantia", value: "12 Meses" }
    ],
    defaultPrice: 48900.00,
    defaultDiscount: 7000.00,
    finalPrice: 41900.00,
    image: "images/alinhadora_wa861_smartsafe.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 2. SISTEMAS ADAS (CALIBRAÇÃO DE CÂMERAS E RADARES)
  // --------------------------------------------------------------------------
  {
    id: "adas-eco-smartsafe",
    name: "Sistema de Calibração ADAS ECO SmartSafe",
    category: "Sistemas ADAS & Calibração",
    categoryKey: "adas",
    tagline: "A Solução Ideal para Calibração de Assistência ao Condutor",
    badge: "Parceiro Oficial Autoglass",
    description: "Estrutura dobrável e sistema de medição a laser de altíssima precisão. Indicado para serviços em troca de para-brisa, alinhamento e suspensão, e reparação frontal pós-colisão. Calibra câmeras frontais e radares de múltiplas montadoras com excelência.",
    features: [
      "Calibração de câmeras frontais (LDW, FCW, TSR) e radares (ACC, AEB, BSD)",
      "Estrutura dobrável compacta de fácil transporte e armazenamento",
      "Medição a laser para alinhamento milimétrico ao centro do veículo",
      "Compatível com scanners Launch X-431 PRO SE, PRO 3 LINK, PAD VII e PAD IX"
    ],
    specs: [
      { label: "Compatibilidade", value: "Linha Launch X-431 PRO SE, PRO 3, PAD VII e PAD IX" },
      { label: "Medição de Posição", value: "Laser de Alta Precisão" },
      { label: "Estrutura", value: "Alumínio Aeronáutico Dobrável e Nivelável" },
      { label: "Aplicações", value: "Troca de para-brisa, alinhamento, reparo pós-batida" },
      { label: "Garantia", value: "12 Meses" }
    ],
    defaultPrice: 59900.00,
    defaultDiscount: 10000.00,
    finalPrice: 49900.00,
    image: "images/adas_eco_smartsafe.png",
    selected: false,
    quantity: 1
  },
  {
    id: "adas-mobile-smartsafe",
    name: "Sistema de Calibração ADAS Mobile SmartSafe",
    category: "Sistemas ADAS & Calibração",
    categoryKey: "adas",
    tagline: "Alta Performance e Versatilidade Móvel em Calibração ADAS",
    badge: "Ajuste Tridimensional a Laser",
    description: "Solução de alta performance com estrutura ultra robusta sobre rodas de travamento rápido, ajustes milimétricos tridimensionais e base de dados completa para calibração estática e dinâmica de câmeras e radares com suporte a Doppler.",
    features: [
      "Ajuste tridimensional fino com apontamento laser de referência",
      "Ideal para operações fixas e serviços móveis de calibração",
      "Suporte a refletor de radar e simulador de radar Doppler (opcional)",
      "Cobertura para montadoras asiáticas, europeias e americanas"
    ],
    specs: [
      { label: "Tipo de Ajuste", value: "Micro-ajuste 3D com manivelas micrométricas" },
      { label: "Mobilidade", value: "Base móvel com rodízios de trava rápida" },
      { label: "Calibração", value: "Estática e Dinâmica" },
      { label: "Garantia", value: "12 Meses" }
    ],
    defaultPrice: 79900.00,
    defaultDiscount: 13000.00,
    finalPrice: 66900.00,
    image: "images/adas_eco_smartsafe.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 3. ELEVADORES AUTOMOTIVOS
  // --------------------------------------------------------------------------
  {
    id: "elevador-4500kg-ebb452-automatico",
    name: "Elevador 4.500kg EBB 452 (Base Baixa, Automático)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "O Gigante da Categoria - Compatível com Veículos Eletrificados",
    badge: "Capacidade 4.5 Toneladas",
    description: "A escolha perfeita para quem busca robustez máxima e elevação segura de veículos pesados, picapes, SUVs e veículos eletrificados. Conta com destravamento elétrico automático e estrutura reforçada de alta durabilidade.",
    features: [
      "Capacidade de carga de 4.500 kg para veículos leves, picapes e blindados",
      "Destravamento eletromagnético automático pelo painel de controle",
      "Base baixa de passagem facilitada para veículos com saia esportiva",
      "Braços telescópicos reforçados de 3 estágios com travas de segurança automáticas",
      "Compatível com veículos eletrificados e baterias de tração"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "4.500 kg (4.5 Ton)" },
      { label: "Altura Máxima de Elevação", value: "1.820 mm" },
      { label: "Altura Total das Colunas", value: "2.860 mm" },
      { label: "Largura Total", value: "3.410 mm" },
      { label: "Tensão / Potência do Motor", value: "220V Monofásico ou Trifásico / 2.2 kW" },
      { label: "Tipo de Destravamento", value: "Automático Elétrico" }
    ],
    defaultPrice: 28900.00,
    defaultDiscount: 4000.00,
    finalPrice: 24900.00,
    image: "images/elevador_2col_eb452_vermelho.png",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-4500kg-eb452-manual",
    name: "Elevador 4.500kg EB 452 (Base Baixa, Manual)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Resistência, Eficiência e Excelente Custo-Benefício",
    badge: "4.5 Toneladas Base Baixa",
    description: "Projetado para oferecer alta durabilidade e sistema confiável de destravamento manual com trava de segurança mecânica dupla em cada coluna.",
    features: [
      "Capacidade para 4.500 kg com cilindros hidráulicos duplos de alta pressão",
      "Sapatas ajustáveis com adaptadores de altura inclusos",
      "Válvula de descida manual de emergência em caso de falta de energia",
      "Pintura eletrostática a pó de alta resistência contra corrosão"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "4.500 kg" },
      { label: "Altura Máxima", value: "1.820 mm" },
      { label: "Altura Total", value: "2.860 mm" },
      { label: "Largura Total", value: "3.410 mm" },
      { label: "Motor", value: "220V / 2.2 kW" },
      { label: "Destravamento", value: "Manual Bilateral" }
    ],
    defaultPrice: 24900.00,
    defaultDiscount: 3500.00,
    finalPrice: 21400.00,
    image: "images/elevador_2col_eb452_vermelho.png",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-3500kg-eb352-manual",
    name: "Elevador 3.500kg EB 352 (Base Baixa, Manual)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Robustez e Agilidade para Oficinas de Alto Fluxo",
    badge: "3.5 Toneladas Versátil",
    description: "Elevador automotivo de 3.500 kg com design funcional e estrutura reforçada. Proporciona ergonomia superior e total estabilidade na elevação de veículos leves e SUVs médios.",
    features: [
      "Capacidade para 3.500 kg ideal para carros de passeio e utilitários leves",
      "Acionamento suave e silencioso",
      "Estrutura compacta que se adapta perfeitamente ao pé-direito padrão da oficina"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "3.500 kg" },
      { label: "Altura Máxima", value: "1.820 mm" },
      { label: "Altura Total", value: "2.779 mm" },
      { label: "Largura Total", value: "3.410 mm" },
      { label: "Motor", value: "220V / 2.2 kW" }
    ],
    defaultPrice: 21900.00,
    defaultDiscount: 3000.00,
    finalPrice: 18900.00,
    image: "images/elevador_2col_eb452_vermelho.png",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-4500kg-epp452-portico",
    name: "Elevador 4.500kg EPP 452 (Pórtico Superior, Piso Livre, Automático)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Piso 100% Livre com Pórtico Superior - Ideal para Veículos Elétricos",
    badge: "Pórtico Piso Livre Automático",
    description: "A solução premium para oficinas que necessitam de piso completamente desobstruído para trânsito ágil de carrinhos de ferramentas, coletores de óleo e descarregadores de baterias VHE. Destravamento automático e sensor de limite superior.",
    features: [
      "Piso totalmente livre sem rampa de travessia inferior",
      "Pórtico superior com barra de desligamento automático de segurança ao encostar no teto",
      "Estrutura reforçada de 4.500 kg compatível com veículos elétricos pesados",
      "Destravamento automático eletrônico em painel dedicado"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "4.500 kg" },
      { label: "Altura Máxima de Elevação", value: "1.820 mm" },
      { label: "Altura Total do Pórtico", value: "3.720 mm" },
      { label: "Largura Total", value: "3.410 mm" },
      { label: "Motor", value: "220V / 2.2 kW" },
      { label: "Configuração", value: "Pórtico Superior / Piso Livre Automático" }
    ],
    defaultPrice: 32900.00,
    defaultDiscount: 4500.00,
    finalPrice: 28400.00,
    image: "images/elevador_2col_epp452_portico_grafite.png",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-6000kg-epp602-pesado",
    name: "Elevador 6.000kg EPP 602 (Pórtico Automático Heavy Duty)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Força Bruta para Não Recusar Nenhum Serviço",
    badge: "6.0 Toneladas Heavy Duty",
    description: "Projetado para atender às demandas mais pesadas de oficinas e concessionárias que trabalham com caminhonetes grandes (RAM 2500/3500, F-250), vans, furgões e utilitários pesados com total segurança e estabilidade.",
    features: [
      "Capacidade extraordinária de 6.000 kg para frotas pesadas",
      "Pórtico reforçado com 4.750 mm de altura para veículos com teto alto",
      "Largura estendida de 4.620 mm para facilitar o acesso de veículos extra largos",
      "Motor trifásico de 3.0 kW para elevação potente e contínua"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "6.000 kg (6 Toneladas)" },
      { label: "Altura Máxima de Elevação", value: "1.900 mm" },
      { label: "Altura Total", value: "4.750 mm" },
      { label: "Largura Total", value: "4.620 mm" },
      { label: "Motor", value: "380V Trifásico / 3.0 kW" }
    ],
    defaultPrice: 54900.00,
    defaultDiscount: 8000.00,
    finalPrice: 46900.00,
    image: "images/elevador_6000kg_epp602.png",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-pantografico-etz-40e",
    name: "Elevador Pantográfico ETZ 40E (4.000 kg, Embutir no Piso)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Alta Capacidade e Máxima Eficiência para Alinhamento e Mecânica",
    badge: "4.000 kg Embutido no Piso",
    description: "Desenvolvido para proporcionar alta capacidade de carga e segurança máxima no levantamento de veículos. Com estrutura reforçada e tecnologia de acionamento hidráulico de 4 cilindros, fica nivelado ao chão quando recolhido.",
    features: [
      "Instalação embutida que garante piso 100% plano para entrada de veículos rebaixados",
      "Quatro cilindros hidráulicos sincronizados com precisão",
      "Console de comando independente com botões ergonômicos e botão de emergência",
      "Travas pneumáticas mecânicas de segurança em múltiplas posições"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "4.000 kg" },
      { label: "Instalação", value: "Embutir no Piso" },
      { label: "Acionamento", value: "Eletro-hidráulico de 4 Cilindros" },
      { label: "Garantia", value: "12 Meses" }
    ],
    defaultPrice: 48900.00,
    defaultDiscount: 7000.00,
    finalPrice: 41900.00,
    image: "images/elevador_pantografico_etz_fortatech.png",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-pantografico-etz-30ss",
    name: "Elevador Pantográfico ETZ 30SS (3.000 kg, Sobrepor ao Piso)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Compacto, Potente e Pronto para Trabalhar sem Quebra de Piso",
    badge: "3.000 kg Sobrepor",
    description: "A solução perfeita para quem busca um equipamento potente e seguro sem a necessidade de escavação ou obras civis. Rampas articuladas que facilitam o acesso de veículos e console integrado de controle.",
    features: [
      "Instalação rápida sobre o piso existente sem necessidade de alvenaria",
      "Capacidade para 3.000 kg com plataformas extensíveis para entre-eixos variados",
      "Perfil baixo quando recolhido (apenas 110 mm de altura do solo)",
      "Sistema de destravamento pneumático e descida suave com alarme sonoro"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "3.000 kg" },
      { label: "Instalação", value: "Sobre o Piso (Sem Obras)" },
      { label: "Altura Mínima Recolhido", value: "110 mm" },
      { label: "Garantia", value: "12 Meses" }
    ],
    defaultPrice: 38900.00,
    defaultDiscount: 5500.00,
    finalPrice: 33400.00,
    image: "images/elevador_pantografico_etz30ss_sobrepor.png",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-baterias-eev-15",
    name: "Elevador para Baterias de Veículos Elétricos EEV 15 (1.500 kg)",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Segurança Absoluta na Remoção e Instalação de Baterias VHE",
    badge: "Especialista em Baterias EV",
    description: "Desenvolvido para garantir máxima segurança e estabilidade na remoção e instalação de packs de baterias de veículos elétricos e híbridos. Plataforma ajustável com inclinação e deslocamento para encaixe milimétrico sob o chassi.",
    features: [
      "Capacidade de 1.500 kg compatível com os maiores packs de baterias do mercado",
      "Plataforma articulada com ajuste de inclinação em até 7° e deslocamento fino",
      "Isolação e proteção para evitar riscos de acidentes elétricos e danos estruturais",
      "Rodízios pesados com travas para transporte suave dentro da oficina"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "1.500 kg" },
      { label: "Altura Máxima", value: "1.720 mm" },
      { label: "Altura Mínima", value: "1.050 mm" },
      { label: "Dimensões da Plataforma", value: "1.200 mm x 700 mm" },
      { label: "Ângulo de Inclinação", value: "Até 7°" }
    ],
    defaultPrice: 34900.00,
    defaultDiscount: 5000.00,
    finalPrice: 29900.00,
    image: "images/elevador_pantografico_etz_fortatech.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 4. BALANCEADORAS DE RODAS
  // --------------------------------------------------------------------------
  {
    id: "balanceadora-de-rodas-forta-tech-b102-vermelha-1",
    name: "Balanceadora de Rodas Forta Tech B102",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Tecnologia com Levitação Magnética e Alta Precisão",
    badge: "Levitação Magnética",
    description: "A Balanceadora B102 é a solução ideal para oficinas e centros automotivos que buscam precisão cirúrgica, durabilidade e silêncio operacional. Com inovador sistema de levitação magnética, reduz atrito e ruído a zero durante a medição.",
    features: [
      "Sistema exclusivo de Levitação Magnética para máxima durabilidade e precisão",
      "Plano ultra detalhado com 512 posições angulares",
      "Localizador de Posição Inteligente (SPL) com apontamento a laser",
      "Bloqueio Automático de Rotação (ASB) ao identificar desbalanceamento",
      "Medição automatizada de distância e diâmetro com régua digital de precisão"
    ],
    specs: [
      { label: "Diâmetro do Aro", value: "10” a 30”" },
      { label: "Diâmetro Máximo de Roda", value: "1080 mm" },
      { label: "Largura de Roda", value: "415 mm" },
      { label: "Peso Máx. Pneu + Roda", value: "65 kg" },
      { label: "Precisão da Balança", value: "± 1g" },
      { label: "Velocidade de Rotação", value: "220 rpm" },
      { label: "Motor / Tensão", value: "110V / 220V" }
    ],
    defaultPrice: 19900.00,
    defaultDiscount: 3400.00,
    finalPrice: 16500.00,
    image: "images/balanceadora_b102.png",
    selected: false,
    quantity: 1
  },
  {
    id: "balanceadora-b104-forta-tech",
    name: "Balanceadora de Rodas Forta Tech B104",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Monitor LCD Interativo com Laser Óptico Inteligente",
    badge: "Display LCD & Laser Óptico",
    description: "Equipada com monitor LCD interativo de alta nitidez, laser óptico inteligente de posicionamento de chumbos e tecnologia de levitação magnética para balanceamento com precisão absoluta e agilidade.",
    features: [
      "Monitor LCD colorido com interface gráfica interativa",
      "Laser óptico que indica o ponto exato de aplicação do contrapeso",
      "Levitação magnética de alta durabilidade com 512 posições angulares",
      "Suporta conjuntos de rodas e pneus pesados de até 80 kg"
    ],
    specs: [
      { label: "Diâmetro do Aro", value: "10” a 30”" },
      { label: "Peso Máximo da Roda", value: "80 kg" },
      { label: "Precisão", value: "± 1g" },
      { label: "Display", value: "Monitor LCD Colorido Interativo" },
      { label: "Motor / Tensão", value: "110V / 220V" }
    ],
    defaultPrice: 24900.00,
    defaultDiscount: 4000.00,
    finalPrice: 20900.00,
    image: "images/balanceadora_b104.png",
    selected: false,
    quantity: 1
  },
  {
    id: "balanceadora-spin-500",
    name: "Balanceadora Automática SPIN 500",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Tela Touch Screen de 10” e Parada Automática a Laser",
    badge: "Touch Screen 10”",
    description: "Projetada para entregar eficiência e automação inteligente. Com tela touch de 10”, sensores automáticos de medição 3D e laser de posicionamento com parada automática na posição de correção.",
    features: [
      "Tela touch screen de 10 polegadas com software moderno e intuitivo",
      "Medição automática de distância, diâmetro e largura da roda",
      "Laser de posicionamento com parada e trava automática no local do contrapeso"
    ],
    specs: [
      { label: "Diâmetro do Aro", value: "10” a 24”" },
      { label: "Peso Máximo da Roda", value: "65 kg" },
      { label: "Precisão", value: "± 1g" },
      { label: "Alimentação", value: "220V" }
    ],
    defaultPrice: 26900.00,
    defaultDiscount: 4000.00,
    finalPrice: 22900.00,
    image: "images/balanceadora_spin_500.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 5. DESMONTADORAS DE PNEUS
  // --------------------------------------------------------------------------
  {
    id: "desmontadora-de-pneus-forta-tech-grip-500-gp500-vermelha",
    name: "Desmontadora de Pneus Forta Tech Grip 500",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Robusta com Braço Auxiliar Duplo para Pneus RunFlat e Perfil Baixo",
    badge: "Especialista em RunFlat",
    description: "Desenvolvida para oficinas exigentes e autocenters premium. Combina estrutura reforçada com braços auxiliares pneumáticos duplos que facilitam a montagem e desmontagem de pneus de perfil baixo e RunFlat sem esforço manual.",
    features: [
      "Dois braços auxiliares pneumáticos de alta rigidez para RunFlat e perfil baixo",
      "Atende rodas de até 24” com alta estabilidade e dois cilindros de fixação",
      "Garras de fixação com protetores plásticos e sistema lub-refil integrado",
      "Descolador lateral pneumático potente com regulagem de curso"
    ],
    specs: [
      { label: "Fixação do Aro", value: "12” a 24”" },
      { label: "Largura da Roda (Cubo)", value: "10” a 19”" },
      { label: "Largura Máxima da Roda", value: "1000 mm" },
      { label: "Pressão do Ar de Trabalho", value: "0,8 - 1,2 MPa (8 - 12 bar)" },
      { label: "Potência do Motor", value: "1,1 / 0,75 kW" },
      { label: "Tensão / Frequência", value: "220V / 60Hz" }
    ],
    defaultPrice: 26900.00,
    defaultDiscount: 4400.00,
    finalPrice: 22500.00,
    image: "images/desmontadora_grip_500.png",
    selected: false,
    quantity: 1
  },
  {
    id: "desmontadora-grip-elite-x1",
    name: "Desmontadora de Pneus Grip Elite X1",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Tecnologia Leverless (Dispensa Espátulas) com Elevador Pneumático",
    badge: "Sem Espátulas (Até 30”)",
    description: "A escolha definitiva para oficinas de alto padrão. Dispensa totalmente o uso de espátulas evitando qualquer risco de danificar rodas de liga leve ou pneus blindados. Possui elevador pneumático integrado para içar rodas de até 30”.",
    features: [
      "Cabeçote automático que dispensa o uso de espátulas (sistema Leverless)",
      "Elevador pneumático de rodas integrado que elimina esforço físico do operador",
      "Capacidade ampliada para rodas de até 30 polegadas de veículos de grande porte",
      "Travamento pneumático total da coluna e braços"
    ],
    specs: [
      { label: "Fixação", value: "12” a 30”" },
      { label: "Largura da Roda", value: "3” a 14”" },
      { label: "Diâmetro Máximo", value: "1000 mm" },
      { label: "Pressão de Ar", value: "0,8 - 1,0 MPa" },
      { label: "Potência / Tensão", value: "0,75 / 1,1 kW • 220V" }
    ],
    defaultPrice: 42900.00,
    defaultDiscount: 6000.00,
    finalPrice: 36900.00,
    image: "images/desmontadora_grip_500.png",
    selected: false,
    quantity: 1
  },
  {
    id: "desmontadora-grip-smart-900",
    name: "Desmontadora Grip Smart 900",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Torre Basculante com Braço Deslizante para Blindados",
    badge: "Torre Basculante Pneumática",
    description: "Projetada para operações pesadas e contínuas, conta com torre basculante pneumática, braços auxiliares especiais para blindados e elevador de rodas para agilidade operacional incomparável.",
    features: [
      "Torre com acionamento basculante pneumático a pedal",
      "Braço auxiliar deslizante especial para pneus RunFlat e blindados",
      "Elevador pneumático de roda acoplado"
    ],
    specs: [
      { label: "Fixação do Aro", value: "14” a 28”" },
      { label: "Largura Máxima da Roda", value: "1000 mm" },
      { label: "Motor", value: "220V / 1,1 kW" }
    ],
    defaultPrice: 34900.00,
    defaultDiscount: 5000.00,
    finalPrice: 29900.00,
    image: "images/desmontadora_grip_500.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 6. RECICLADORAS DE AR CONDICIONADO
  // --------------------------------------------------------------------------
  {
    id: "recicladora-ar-ft545d-dualac",
    name: "Recicladora de Ar Condicionado FT 545D Dual Air Forta Tech",
    category: "Ar Condicionado & Arrefecimento",
    categoryKey: "atf",
    tagline: "Estação Automatizada Inteligente para Gás R-134a e R-1234yf",
    badge: "Dual Gas R134a / R1234yf",
    description: "Estação de serviço de ar condicionado totalmente automática e computadorizada. Realiza recuperação, reciclagem, vácuo com teste de vazamento, injeção de óleo/contraste e recarga de gás com precisão milimétrica por balança eletrônica.",
    features: [
      "Compatível com gás R-134a e o novo fluido ecológico R-1234yf",
      "Tela touch screen colorida com banco de dados de capacidades de todas as montadoras",
      "Impressora térmica integrada para emissão de relatório completo do serviço",
      "Balança eletrônica de alta precisão com purga automática de gases incondensáveis"
    ],
    specs: [
      { label: "Fluidos Refrigerantes", value: "R-134a e R-1234yf" },
      { label: "Capacidade do Tanque", value: "12 Litros" },
      { label: "Precisão da Balança", value: "± 10g" },
      { label: "Bomba de Vácuo", value: "Alta Vazão com Sensor de Vácuo" },
      { label: "Display", value: "Touch Screen Colorido Interativo" },
      { label: "Impressora", value: "Térmica Integrada" }
    ],
    defaultPrice: 38900.00,
    defaultDiscount: 6000.00,
    finalPrice: 32900.00,
    image: "images/recicladora_ar_ft545d_dualac.png",
    selected: false,
    quantity: 1
  },
  {
    id: "recicladora-ac519-smartsafe",
    name: "Recicladora de Ar Condicionado AC-519 SmartSafe",
    category: "Ar Condicionado & Arrefecimento",
    categoryKey: "atf",
    tagline: "Serviço Rápido, Fácil e com Rentabilidade Acima da Média",
    badge: "SmartSafe Automática",
    description: "Máquina recicladora de gás de ar condicionado automotivo totalmente automática. Realiza a recuperação, reciclagem, recarga de gás refrigerante e inserção de óleo com extrema precisão e relatórios impressos detalhados.",
    features: [
      "Novo software com display colorido de alta definição",
      "Engates rápidos nos reservatórios de óleo para maior conveniência",
      "Novo design de tubulações para redução de resíduos de fluido refrigerante",
      "Módulo atualizado de separação óleo/gás de alta eficiência"
    ],
    specs: [
      { label: "Fonte de Energia", value: "110V / 220V 50Hz/60Hz" },
      { label: "Potência", value: "700W" },
      { label: "Capacidade do Tanque", value: "12L" },
      { label: "Taxa de Preenchimento", value: "800g/min" }
    ],
    defaultPrice: 34900.00,
    defaultDiscount: 5000.00,
    finalPrice: 29900.00,
    image: "images/recicladora_ac519_smartsafe.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 7. MÁQUINAS DE TROCA DE FLUIDO DE TRANSMISSÃO (ATF) & ARREFECIMENTO
  // --------------------------------------------------------------------------
  {
    id: "maquina-atf-fluid-900-smart",
    name: "Máquina de Troca de Óleo de Câmbio ATF Fluid 900 Smart",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "A Mais Avançada Solução em Troca 100% Automatizada de ATF",
    badge: "Android 10.2 & Tela 10.1”",
    description: "Desenvolvida para profissionais que buscam excelência total em manutenção de transmissões automáticas. Sistema Android integrado com tela de 10.1”, aquecimento do óleo novo até 92°C, impressora térmica e banco de dados multimarcas completo com imagens das conexões.",
    features: [
      "Sistema Android com tela sensível ao toque de 10.1 polegadas",
      "Aquecimento integrado do óleo novo até 92°C para igualar a temperatura do câmbio",
      "Impressora térmica integrada para emissão de laudo técnico antes e depois",
      "Controle automático de fluxo bidirecional de fluido sem risco de inversão de mangueiras",
      "Descarga e limpeza automatizada de tanques com manômetro digital"
    ],
    specs: [
      { label: "Sistema Operacional", value: "Android Integrado com Wi-Fi" },
      { label: "Display", value: "Touch Screen de 10.1 Polegadas" },
      { label: "Aquecimento de Óleo", value: "Até 92°C" },
      { label: "Impressora", value: "Térmica Embutida" },
      { label: "Capacidade dos Tanques", value: "25 Litros cada (Óleo Novo e Usado)" },
      { label: "Garantia", value: "12 Meses" }
    ],
    defaultPrice: 32900.00,
    defaultDiscount: 5000.00,
    finalPrice: 27900.00,
    image: "images/maquina_atf_fluid_900.png",
    selected: false,
    quantity: 1
  },
  {
    id: "maquina-atf-fluid-500",
    name: "Máquina de Troca de Fluido ATF Fluid 500 Forta Tech",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Operação Totalmente Automatizada com Display de 7”",
    badge: "Balanças Eletrônicas Duplas",
    description: "Troca 100% automatizada de fluido de transmissão automática com identificação de fluxo, balanças eletrônicas de alta precisão (erro ±0,01L) e função de limpeza em ciclo da transmissão.",
    features: [
      "Display de 7 polegadas com menu interativo em português",
      "Substituição igualitária 100% automática com aquecimento integrado",
      "Banco de dados com fotos dos pontos de conexão das mangueiras por veículo"
    ],
    specs: [
      { label: "Capacidade do Tanque", value: "25 Litros" },
      { label: "Precisão de Substituição", value: "± 0,01 Litro" },
      { label: "Potência", value: "150W / 220V" }
    ],
    defaultPrice: 23900.00,
    defaultDiscount: 3500.00,
    finalPrice: 20400.00,
    image: "images/maquina_atf_fluid_500.png",
    selected: false,
    quantity: 1
  },
  {
    id: "maquina-atf-cat-501s-launch",
    name: "Máquina de Troca de Fluido ATF Launch CAT-501S",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Consagrada no Mercado Mundial com Substituição de 99,9%",
    badge: "Pesagem Célula de Carga",
    description: "Com tecnologia de pesagem por célula de carga, a CAT-501S garante a substituição de 99,9% do fluido ATF com impressora térmica integrada e ciclo de limpeza com detergente.",
    features: [
      "Reconhecimento automático de sentido do fluxo de óleo",
      "Display colorido de 5 polegadas e impressora integrada",
      "Ajuste de nível de fluido incremental com alta precisão"
    ],
    specs: [
      { label: "Taxa de Troca", value: "99,9% do fluido" },
      { label: "Impressora", value: "Térmica Integrada" },
      { label: "Balanças", value: "Células de Carga de Alta Precisão" }
    ],
    defaultPrice: 21900.00,
    defaultDiscount: 3000.00,
    finalPrice: 18900.00,
    image: "images/maquina_atf_cat_501s.png",
    selected: false,
    quantity: 1
  },
  {
    id: "maleta-90-adaptadores-atf",
    name: "Maleta Importada com 90 Adaptadores ATF Forta Tech",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "O Complemento Essencial para Conectar em Qualquer Transmissão",
    badge: "Kit 90 Conectores Premium",
    description: "Maleta de conectores em alumínio e latão usinado de alta precisão para acoplamento rápido e seguro em sistemas de transmissão automática de veículos nacionais e importados.",
    features: [
      "Mais de 90 adaptadores especiais organizados em berço de espuma de alta densidade",
      "Compatível com DSG, CVT, Al4, 6T30/40, ZF, Aisin e transmissões modernas"
    ],
    specs: [
      { label: "Quantidade de Peças", value: "90 Adaptadores com O-rings de vedação" },
      { label: "Material", value: "Alumínio Usinado e Latão Naval" }
    ],
    defaultPrice: 6900.00,
    defaultDiscount: 1000.00,
    finalPrice: 5900.00,
    image: "images/maleta_90_adaptadores_atf.png",
    selected: false,
    quantity: 1
  },
  {
    id: "maquina-arrefecimento-thermo-elite-x1",
    name: "Máquina de Troca de Líquido de Arrefecimento Thermo Elite X1",
    category: "Ar Condicionado & Arrefecimento",
    categoryKey: "atf",
    tagline: "Eficiência, Precisão e Tecnologia no Controle Térmico do Motor",
    badge: "Aquecimento de Coolant Novo",
    description: "Única com tecnologia de aquecimento para fluido novo. Realiza a circulação automática e completa do sistema de arrefecimento com substituição igualitária, tela touch de 7” e sistema de filtragem integrado.",
    features: [
      "Circulação automática do sistema de arrefecimento com substituição igualitária",
      "Tela touch de 7 polegadas com controle por microcomputador",
      "Sistema de filtragem integrado com manômetro de pressão digital"
    ],
    specs: [
      { label: "Capacidade dos Tanques", value: "19 Litros x 2" },
      { label: "Tela", value: "Touch Screen de 7”" },
      { label: "Tensão", value: "220V" }
    ],
    defaultPrice: 24900.00,
    defaultDiscount: 3500.00,
    finalPrice: 21400.00,
    image: "images/maquina_thermo_elite_x1.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 8. LIMPEZA E TESTE DE BICOS INJETORES
  // --------------------------------------------------------------------------
  {
    id: "gdi-605-launch-equipamento-para-testes-e-limpeza-de-bico-injetor",
    name: "Máquina de Limpeza e Teste de Bicos CNC-605A SmartSafe",
    category: "Limpeza de Bicos & Injeção",
    categoryKey: "injetores",
    tagline: "Limpeza Ultrassônica de Alta Frequência com Cuba Removível",
    badge: "GDI, SFI, EFI",
    description: "Equipamento completo para teste dinâmico e limpeza ultrassônica profunda de injetores automotivos convencionais e injeção direta GDI. Conta com cuba ultrassônica removível de alta potência e painel digital com testes automáticos de estanqueidade, leque e vazão.",
    features: [
      "Compatível com injetores GDI (injeção direta), SFI e EFI convencionais",
      "Cuba ultrassônica removível de alta potência para limpeza profunda de bicos",
      "Simulação de diversas condições reais de funcionamento do motor",
      "Testes automatizados completos: estanqueidade, pulverização, leque e vazão",
      "Drenagem automática de fluido das provetas graduadas com visor iluminado",
      "Manômetro de precisão para controle de pressão de teste em tempo real"
    ],
    specs: [
      { label: "Compatibilidade de Injetores", value: "GDI, SFI, EFI convencionais" },
      { label: "Cuba Ultrassônica", value: "Removível de Alta Frequência" },
      { label: "Quantidade de Provetas", value: "6 Provetas com Iluminação em LED" },
      { label: "Testes Disponíveis", value: "Vazão, Leque, Estanqueidade, Aceleração" },
      { label: "Pressão de Operação", value: "0 a 6,5 bar regulável" },
      { label: "Alimentação Elétrica", value: "110V / 220V Bivolt Automático" }
    ],
    defaultPrice: 12900.00,
    defaultDiscount: 3000.00,
    finalPrice: 9900.00,
    image: "images/maquina_cnc_605a.png",
    selected: false,
    quantity: 1
  },
  {
    id: "maquina-bicos-cnc-605-plus",
    name: "Máquina de Limpeza de Bicos CNC 605 PLUS SmartSafe",
    category: "Limpeza de Bicos & Injeção",
    categoryKey: "injetores",
    tagline: "Suporte Total a Injetores PIEZO Elétricos e GDI",
    badge: "PIEZO & GDI de Alta Pressão",
    description: "A mais avançada máquina de teste e limpeza de bicos injetores do mercado. Além de GDI, SFI e EFI, suporta bicos Piezoelétricos de última geração sob pressão de óleo segura com controle microprocessado.",
    features: [
      "Apoia a limpeza e o teste de injetores Piezoelétricos, GDI e convencionais",
      "Monitoramento em tempo real do desempenho dos injetores de combustível",
      "Cuba ultrassônica removível com ajuste de tempo e aquecimento"
    ],
    specs: [
      { label: "Injetores Atendidos", value: "PIEZO, GDI, SFI, EFI" },
      { label: "Display", value: "Display LCD Colorido com Botões Touch" },
      { label: "Provetas", value: "6 Provetas de Vidro de Alta Resistência" }
    ],
    defaultPrice: 16900.00,
    defaultDiscount: 3000.00,
    finalPrice: 13900.00,
    image: "images/maquina_cnc_605a.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 9. SCANNERS DE DIAGNÓSTICO & DTEA (LINHA X-431)
  // --------------------------------------------------------------------------
  {
    id: "scanner-launch-919-dtea-pro",
    name: "Scanner Launch 919 DTEA PRO New Edition BR",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "O Penta Brasileiro - Scanner Oficial com Software DTEA Homologado",
    badge: "Homologado Polícia Federal & DTEA",
    description: "O 919 DTEA PRO New Edition BR une hardware Launch de alto desempenho com o software revolucionário DTEA (Diagnóstico Técnico Eletrônico Automotivo), gerando laudos periciais eletrônicos completos do veículo com proteção contra fraudes, adulteração de quilometragem e clonagem de chassi.",
    features: [
      "Software DTEA exclusivo para inspeção veicular e segurança pública (atende requisitos da Polícia Federal)",
      "VCI DBS Car VII com suporte a CAN FD, DoIP e diagnóstico de motocicletas",
      "Varredura rápida de todos os módulos eletrônicos (DTCs) com tradução automática e termos técnicos",
      "Pacote completo com 31 funções especiais (Freio/ABS, Motor/Injeção, Bateria, DPF, etc.)",
      "Leitor de fluxo de dados gráficos em tempo real com zoom e sobreposição de curvas"
    ],
    specs: [
      { label: "Sistema Operacional", value: "Android 10.0" },
      { label: "Processador", value: "2.0 GHz Octa-Core" },
      { label: "Memória RAM / Armazenamento", value: "4 GB RAM / 64 GB Interno" },
      { label: "Tela", value: "7” IPS (1024x600)" },
      { label: "Bateria", value: "6300 mAh (7.6V)" },
      { label: "Interface VCI", value: "DBS Car VII com Bluetooth e Wi-Fi Dual Band" }
    ],
    defaultPrice: 14900.00,
    defaultDiscount: 2500.00,
    finalPrice: 12400.00,
    image: "images/scanner_launch_919_dtea_pro.png",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-launch-x431-pro-se",
    name: "Scanner Launch X-431 PRO SE",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "O Scanner Automotivo Mais Vendido do Mundo",
    badge: "39 Funções Especiais & CAN FD",
    description: "Cobertura de mais de 110 montadoras com suporte a protocolos modernos CAN FD e DoIP. Completo, robusto e ergonômico, ideal para diagnósticos rápidos e precisos em carros de passeio e picapes.",
    features: [
      "Mais de 110 montadoras com suporte a CAN FD e DoIP",
      "39 Funções especiais de serviço e calibração de fábrica",
      "Compatível com calibração ADAS e software IMMO de chaves"
    ],
    specs: [
      { label: "Tela", value: "8” Touchscreen (1280x800)" },
      { label: "Memória", value: "4 GB RAM / 64 GB" },
      { label: "Processador", value: "2.0 GHz Octa-Core" },
      { label: "Câmera", value: "Traseira 8MP" }
    ],
    defaultPrice: 16900.00,
    defaultDiscount: 2500.00,
    finalPrice: 14400.00,
    image: "images/scanner_launch_x431_pro_se.png",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-launch-x431-pad-vii-link",
    name: "Scanner Launch X-431 PAD VII LINK",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Topo de Linha com Programação Online em 16 Montadoras e SmartLink C",
    badge: "Programação Online J2534",
    description: "Projetado para oficinas que trabalham com alto volume e demandam máxima velocidade e programação de módulos. Inclui SmartLink C para Pass-thru J2534 e diagnóstico remoto de nível de engenharia.",
    features: [
      "Programação online de ECUs em 16 montadoras globais",
      "SmartLink C integrado com Pass-thru J2534 e diagnóstico remoto",
      "41 Funções especiais com mapeamento completo de topologia de rede",
      "Compatível com veículos de passeio, elétricos e pesados (caminhões/ônibus)"
    ],
    specs: [
      { label: "Tela", value: "13,3” FHD (1920x1080)" },
      { label: "Memória", value: "8 GB RAM / 256 GB Armazenamento" },
      { label: "Bateria", value: "9.360 mAh (7.6V)" },
      { label: "VCI", value: "SmartLink C com Wi-Fi 2.4/5GHz e USB" }
    ],
    defaultPrice: 38900.00,
    defaultDiscount: 6000.00,
    finalPrice: 32900.00,
    image: "images/scanner_launch_pad_vii_link.png",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-launch-x431-pad-ix-link",
    name: "Scanner Launch X-431 PAD IX LINK (Launch AI)",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Inteligência Artificial Integrada com Android 13 e 12GB de RAM",
    badge: "Novo Topo de Linha PAD IX",
    description: "O ápice da engenharia de diagnóstico. Varredura na topologia de rede 10x mais rápida, inteligência artificial Launch AI integrada que responde perguntas técnicas em tempo real e visualização de até 40 fluxos de dados simultâneos.",
    features: [
      "Inteligência Artificial Launch AI para suporte e diagnóstico em tempo real",
      "Tela cinematográfica de 13,6 polegadas (2560x1600) de altíssimo brilho",
      "12 GB de memória RAM e 512 GB de armazenamento ultrarrápido",
      "SmartLink 3.0 V3 com conexão Dual Band aprimorada"
    ],
    specs: [
      { label: "Sistema Operacional", value: "Android 13" },
      { label: "Memória RAM / Armazenamento", value: "12 GB RAM / 512 GB SSD" },
      { label: "Tela", value: "13,6” Ultra HD (2560x1600)" },
      { label: "Câmeras", value: "Traseira 20MP / Frontal 8MP" }
    ],
    defaultPrice: 48900.00,
    defaultDiscount: 7000.00,
    finalPrice: 41900.00,
    image: "images/scanner_launch_pad_ix_link.png",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-launch-x431-pro3-link-hd",
    name: "Scanner Launch X-431 PRO 3 LINK HD (Linha Pesada Diesel)",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Feito para Caminhão e Linha Pesada Diesel 12V/24V (Euro 5 e 6)",
    badge: "Diesel Pesado Euro 5/6",
    description: "Scanner completo com maleta de adaptadores para caminhões, ônibus e utilitários diesel. Realiza regeneração de DPF, reset de NOx, sangria de ABS/EBS e calibração de suspensão pneumática.",
    features: [
      "Compatível com protocolos pesados J1939, J1708/J1587, CAN FD e DoIP",
      "Regeneração forçada de DPF, parametrização de Arla/SCR e codificação de injetores",
      "Acompanha maleta de cabos e conectores dedicada para linha pesada"
    ],
    specs: [
      { label: "Tela", value: "10,1” Touchscreen" },
      { label: "Voltagem Suportada", value: "9V a 36V DC" },
      { label: "Normas de Emissões", value: "Euro 3, Euro 4, Euro 5 e Euro 6" }
    ],
    defaultPrice: 28900.00,
    defaultDiscount: 4000.00,
    finalPrice: 24900.00,
    image: "images/scanner_launch_pro3_link_hd.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 10. LUBRIFICAÇÃO, ARREFECIMENTO & PNEUS
  // --------------------------------------------------------------------------
  {
    id: "troca-de-oleo-a-vacuo-toc-317-launch",
    name: "Troca de Óleo a Vácuo Launch TOC-317 (70 Litros)",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Esgotamento Rápido e Limpo Acionado por Ar Comprimido",
    badge: "Capacidade 70 Litros",
    description: "Solução prática e eficiente para troca de óleo automotivo, eliminando a necessidade de levantar o veículo ou remover o bujão do cárter. Equipado com visor de sucção graduado e kit de sondas flexíveis.",
    features: [
      "Bombeamento de óleo feito por vácuo acionado por ar comprimido",
      "Tanque com 70 litros de capacidade e rodízios para fácil locomoção",
      "Evita desgaste de roscas do bujão e vazamentos no cárter"
    ],
    specs: [
      { label: "Capacidade do Reservatório", value: "70 Litros" },
      { label: "Pressão de Trabalho", value: "6 - 8 bar" },
      { label: "Visor de Sucção", value: "Câmara Graduada Transparente" }
    ],
    defaultPrice: 3990.00,
    defaultDiscount: 500.00,
    finalPrice: 3490.00,
    image: "images/troca_oleo_toc_317.png",
    selected: false,
    quantity: 1
  },
  {
    id: "calibrador-nitrogenio-n2-smart-1",
    name: "Calibrador de Pneus por Nitrogênio N2 Smart 1",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Pressão Constante, Maior Durabilidade e Menor Variação Térmica",
    badge: "Gerador de Nitrogênio N2",
    description: "Utiliza o compressor de ar da oficina para gerar nitrogênio de alta pureza de forma estável. Garante pressão constante nos pneus, menor resistência ao rolamento e máxima rentabilidade no autocenter.",
    features: [
      "Geração automatizada de N2 de alta pureza",
      "Inflagem e calibração com purga automática de oxigênio",
      "Display digital de fácil leitura com regulagem eletrônica de pressão"
    ],
    specs: [
      { label: "Pureza do Nitrogênio", value: "95% a 99% N2" },
      { label: "Capacidade de Inflagem", value: "Automóveis, SUVs e Utilitários" }
    ],
    defaultPrice: 18900.00,
    defaultDiscount: 3000.00,
    finalPrice: 15900.00,
    image: "images/calibrador_n2_smart_1.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 11. SOLUÇÕES PARA VEÍCULOS HÍBRIDOS E ELÉTRICOS (VHE)
  // --------------------------------------------------------------------------
  {
    id: "equipamento-vhe-ce39-smartsafe",
    name: "Equipamento 4 em 1 para Baterias EV SmartSafe CE 39",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Diagnóstico, Equalização e Carga/Descarga de Módulos de Bateria EV",
    badge: "4 em 1 Especialista EV",
    description: "O primeiro equipamento do setor 4 em 1 para manutenção avançada de baterias de veículos elétricos. Realiza diagnóstico das células, equalização milimétrica de tensão e ciclos controlados de carga e descarga de módulos.",
    features: [
      "Equalização de células de bateria para restaurar capacidade original do pack",
      "Função inteligente de carga e descarga de alta eficiência",
      "Monitoramento individual de tensão e temperatura de cada célula com alarmes de segurança"
    ],
    specs: [
      { label: "Funções", value: "Diagnóstico, Equalização, Carga e Descarga de Módulos" },
      { label: "Aplicações", value: "Packs de Baterias de Lítio (NMC, LFP) de Veículos Elétricos e Híbridos" },
      { label: "Interface", value: "Tela Touch Screen Colorida Integrada" }
    ],
    defaultPrice: 89900.00,
    defaultDiscount: 15000.00,
    finalPrice: 74900.00,
    image: "images/equipamento_vhe_ce39_smartsafe.png",
    selected: false,
    quantity: 1
  },
  {
    id: "avl-evaluate-vhe",
    name: "Testador de Isolamento e Aterramento AVL EVALUATE",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Validação de Segurança Elétrica ECE R100 com Plugue Tipo 2",
    badge: "Norma ECE R100 Integrada",
    description: "Solução ideal para medir e validar a segurança elétrica de veículos eletrificados de forma rápida e confiável. Conecta diretamente à porta de carregamento Tipo 2 do veículo com display integrado e feedback sonoro e visual.",
    features: [
      "Testa resistência de isolamento e ligação equipotencial (aterramento)",
      "Conexão direta na porta CA Tipo 2 sem necessidade de adaptadores",
      "Tecnologia de medição de 4 fios (Kelvin) que elimina interferências"
    ],
    specs: [
      { label: "Norma de Referência", value: "ECE R100 Internacional" },
      { label: "Conector", value: "Tipo 2 Integrado" },
      { label: "Método", value: "Medição Kelvin a 4 Fios" }
    ],
    defaultPrice: 38900.00,
    defaultDiscount: 5000.00,
    finalPrice: 33900.00,
    image: "images/avl_evaluate_vhe.png",
    selected: false,
    quantity: 1
  },
  {
    id: "manta-anti-chamas-ev",
    name: "Manta Anti-Chamas Especial para Veículos Elétricos",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Isolamento Completo de Chamas e Fumaça em Segundos",
    badge: "Resiste até 2.500 °C",
    description: "Solução essencial de segurança para oficinas e concessionárias que atendem veículos elétricos. Bloqueia o fogo, isola a fumaça tóxica e reduz os riscos de fuga térmica da bateria de lítio sem necessidade de água.",
    features: [
      "Atua diretamente no foco do incêndio contendo o fogo imediatamente",
      "Isolamento completo da fumaça de baterias de alta voltagem",
      "Resiste a temperaturas extremas de até 2.500 °C mantendo a integridade estrutural"
    ],
    specs: [
      { label: "Resistência Térmica", value: "Até 2.500 °C" },
      { label: "Aplicações", value: "Oficinas, Concessionárias, Estações de Carregamento" }
    ],
    defaultPrice: 12900.00,
    defaultDiscount: 2000.00,
    finalPrice: 10900.00,
    image: "images/manta_anti_chamas_ev.png",
    selected: false,
    quantity: 1
  }
];

const DEFAULT_SERVICES = [
  {
    id: "frete",
    name: "Frete Especial + Descarga Técnica",
    description: "Transporte com seguro de carga e descarregamento no local do cliente.",
    price: 3530.00,
    discount: 0.00,
    selected: true,
    quantity: 1
  },
  {
    id: "montagem",
    name: "Montagem + Entrega Técnica + Calibração Operacional",
    description: "Instalação no local, nivelamento, calibração inicial e treinamento presencial com técnico especialista.",
    price: 3000.00,
    discount: 0.00,
    selected: true,
    quantity: 1
  }
];

const DEFAULT_CONFIG = {
  client: {
    name: "EV COMÉRCIO DE VEÍCULOS LTDA.",
    branch: "(RAJA – BELO HORIZONTE/MG)",
    cnpj: "00.000.000/0000-00",
    city: "Belo Horizonte / MG",
    contactPerson: "Gerência de Oficina",
    phone: "+55 (31) 98888-7777",
    email: "contato@evcomercio.com.br"
  },
  proposal: {
    mainTitle: "PROPOSTA COMERCIAL",
    clientPrefix: "Para:",
    number: "PROP-2026/0842",
    date: "2026-03-02",
    formattedDateDisplay: "02 de Março de 2026",
    validityDays: 7,
    sellerName: "Consultoria Comercial Forta Tech",
    sellerPhone: "+55 41 98508-1076",
    sellerEmail: "regional2.tech@grupoforta.com.br",
    sellerRole: "Especialista Técnico Undercar",
    discountCampaignName: "DESCONTO ESPECIAL",
    theme: "dark-tech",
    includeTechnicalSheets: true,
    includeWarrantyPolicy: true,
    includeTermsAndPayment: true,
    enableInstallments: false,
    installmentCount: 12,
    installmentValue: 0,
    installmentDesc: "Sem juros direto de fábrica / Cartão BNDES",
    installmentCustomText: ""
  },
  terms: {
    payment: "Os valores expostos acima são para pagamento à Vista. Os financiamentos estão disponíveis para pagamentos em até 18x sem entrada diretamente com a Forta Tech e estão sujeitos a avaliação de crédito.",
    installments: "Opção de parcelamento em até 18x sem entrada direto com a fábrica (sujeito à análise de crédito).",
    shipping: "O frete corre por conta do cliente. FOB Gaspar.",
    deliveryTime: "O prazo de entrega é de até 15 dias (*sujeito a avaliação de crédito e disponibilidade de estoque).",
    warranty: "A garantia para os produtos mencionados nesta proposta é de 12 meses a partir da emissão da Nota Fiscal. A garantia não cobrirá problemas decorridos de mal-uso ou desastres naturais. O envio e o retorno dos equipamentos para Reparação em Garantia correm por conta do cliente.",
    backupMachine: "",
    taxes: "A mercadoria importada sairá de Santa Catarina com o Imposto sobre Circulação de Mercadoria e Serviços (ICMS) de 4% conforme legislação. O comprador é o responsável pelo pagamento dos impostos de seu estado de acordo com as normas fiscais e regime tributários adotados por sua empresa.",
    technicalSupport: "A Forta Tech possui um grupo técnico qualificado para atender por telefone e WhatsApp as dúvidas operacionais para cada produto do portfólio. Dispomos de serviços exclusivos in loco, tal como treinamento operacional in company.",
    training: "Técnicos especializados para capacitações. Ocorrem em São Bernardo do Campo ou em formato EAD gravado para consulta posterior permanente.",
    techHourRate: "Fora da garantia, o custo da hora técnica de manutenção é de R$ 135,00."
  },
  company: {
    name: "FORTA TECH",
    slogan: "Inovação, Alta Precisão e Produtividade para a sua Oficina",
    address: "R. Baffin, 32 - Jardim do Mar",
    cityStateZip: "São Bernardo do Campo - SP, 09750-620",
    phone: "+55 41 98508-1076",
    email: "regional2.tech@grupoforta.com.br",
    website: "www.fortatech.com.br"
  }
};