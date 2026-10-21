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
    name: "Alinhadora 3D Torre Fixa Forta Tech Essence Black Edition",
    category: "Undercar & Alinhamento 3D",
    categoryKey: "undercar",
    tagline: "Alinhamento 3D com Black Targets Antirreflexo e Alta Rentabilidade",
    badge: "Black Targets Antirreflexo",
    description: "A Alinhadora 3D Torre Fixa Essence Black Edition é uma solução de alta tecnologia desenvolvida para oferecer extrema precisão e rapidez no alinhamento de veículos de passeio, SUVs e caminhonetes. Equipada com Black Targets (alvos pretos antirreflexo), elimina distorções causadas por iluminação intensa natural ou artificial, garantindo leituras estáveis e alta confiabilidade com o melhor custo-benefício da categoria.",
    features: [
      "Black Targets Antirreflexo: Leituras estáveis e imunes a reflexos de luz solar ou iluminação da oficina",
      "Câmeras 3D de Alta Resolução: Captação tridimensional instantânea para identificar e corrigir desvios com rapidez",
      "Medições Automáticas Completas: Distância entre-eixos, bitola, dimensões cruzadas e diâmetros de rodas",
      "Indicação Visual com LEDs: Guias luminosos no travessão de câmeras para orientação direta do operador",
      "Ampla Compatibilidade: Projetada para atender com perfeição veículos de passeio, SUVs e caminhonetes",
      "Software Inteligente de Fácil Operação: Interface intuitiva que zera o retrabalho e reduz o tempo de box"
    ],
    specs: [
      { label: "Tipo de Alinhamento", value: "3D Digital de Alta Resolução com Torre Fixa" },
      { label: "Tecnologia de Alvos", value: "Black Targets Antirreflexo de Alta Durabilidade" },
      { label: "Indicação Visual", value: "LEDs de orientação no travessão de câmeras" },
      { label: "Aplicações", value: "Veículos de Passeio, Utilitários, SUVs e Caminhonetes" },
      { label: "Medições Especiais", value: "Dimensões cruzadas, entre-eixos, bitola e diâmetro de pneus" },
      { label: "Banco de Dados", value: "Multimarcas Global Atualizado" },
      { label: "Garantia", value: "12 Meses de Fábrica Forta Tech" }
    ],
    defaultPrice: 44900.00,
    defaultDiscount: 8000.00,
    finalPrice: 36900.00,
    image: "images/alinhadora_essence_3d_black.png",
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
    image: "images/elevador_2col_ebb452_cinza.png",
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
    id: "elevador-4500kg-ep452-portico-vermelho",
    name: "Elevador Hidráulico Forta Tech EP452 Pórtico 4.5 Ton (Vermelho)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Potência, Robustez e Piso Livre com Pórtico Superior e 2 Destravamentos",
    badge: "4.5 Toneladas • Pórtico Vermelho",
    description: "O EP452 Pórtico Vermelho foi desenvolvido para oficinas modernas que atendem desde veículos leves até SUVs e utilitários de grande porte, suportando até 4.500 kg com total estabilidade. Seu sistema de pórtico superior garante piso 100% livre para trânsito desobstruído de equipamentos e descarregadores de baterias, enquanto o design reforçado e a pintura vermelha industrial transmitem durabilidade e profissionalismo.",
    features: [
      "Piso 100% Livre com Pórtico Superior: Passagem desobstruída para carrinhos de ferramentas e mesas de bateria VHE",
      "Capacidade de Carga de 4.500 kg: Projetado para veículos de passeio, picapes pesadas, blindados e SUVs grandes",
      "Sistema com 2 Destravamentos de Segurança: Confiabilidade mecânica absoluta em cada ciclo de elevação",
      "Braços Articulados Reforçados Amarelos: Alcance estendido e sapatas com regulagem de altura milimétrica",
      "Barra Superior de Desligamento Automático: Sensor que interrompe a subida caso o veículo toque o pórtico",
      "Pintura Eletrostática Vermelha Industrial: Acabamento de alto impacto visual e proteção anticorrosiva duradoura"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "4.500 kg (4.5 Toneladas)" },
      { label: "Altura Máxima de Elevação", value: "1.820 mm" },
      { label: "Altura Total do Pórtico", value: "3.720 mm" },
      { label: "Largura Total", value: "3.410 mm" },
      { label: "Motorização", value: "220V Monofásico ou Trifásico / 2.2 kW" },
      { label: "Configuração", value: "Pórtico Superior com Piso Livre / 2 Destravamentos" },
      { label: "Garantia", value: "12 Meses Forta Tech" }
    ],
    defaultPrice: 22120.00,
    defaultDiscount: 7130.00,
    finalPrice: 14990.00,
    image: "images/elevador_2col_ep452_portico_vermelho.png",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-launch-tlt-240-sb-lite",
    name: "Elevador Automotivo 2 Colunas Launch TLT 240 SB Lite (4.0 Ton)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Tecnologia e Qualidade Global Launch com Excelente Custo-Benefício",
    badge: "Homologação Global Launch • 4.0 Ton",
    description: "O LAUNCH TLT 240 SB LITE é um elevador automotivo eletro-hidráulico de duas colunas com capacidade para 4.000 kg, desenvolvido com a renomada engenharia e padrão de qualidade mundial da LAUNCH. Equipado com cilindros hidráulicos duplos de acionamento direto, sincronização por cabos de aço e cabos e mangueiras protegidos sob a base baixa, oferece elevação estável, silenciosa e com máxima segurança para manutenção mecânica e troca de óleo.",
    features: [
      "Engenharia Oficial LAUNCH: Padrão internacional de fabricação com componentes hidráulicos e estruturais de alta confiabilidade",
      "Capacidade para 4.000 kg: Ideal para atendimento de ampla gama de veículos de passeio, sedans, SUVs e utilitários médios",
      "Cilindros Hidráulicos Duplos de Alta Pressão: Elevação suave e uniforme com menor desgaste mecânico",
      "Cabos e Tubulações Protegidos: Passagem inferior protegida com rampa rebaixada que preserva os componentes",
      "Braços Telescópicos com Travas Automáticas: Posicionamento ergonômico nos pontos de apoio do chassi",
      "Válvula de Segurança Hidráulica: Proteção contra sobrepressão e descida controlada em qualquer situação"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "4.000 kg (4.0 Toneladas)" },
      { label: "Altura Máxima de Elevação", value: "1.850 mm" },
      { label: "Altura Total das Colunas", value: "2.780 mm" },
      { label: "Largura Entre Colunas", value: "2.750 mm" },
      { label: "Largura Total", value: "3.370 mm" },
      { label: "Motor", value: "220V Monofásico / 2.2 kW" },
      { label: "Tempo de Elevação", value: "± 50 segundos" },
      { label: "Garantia", value: "12 Meses de Fábrica LAUNCH" }
    ],
    defaultPrice: 18880.00,
    defaultDiscount: 4390.00,
    finalPrice: 14490.00,
    image: "images/elevador_launch_tlt240_sb_lite.png",
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
    id: "manta-corta-fogo-bridgehill-car-standard",
    name: "Manta Corta-Fogo Automotiva Bridgehill Car Standard",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Contenção Rápida de Incêndios para Veículos Elétricos (EV) e Combustão",
    badge: "Homologação Internacional EV & Combustão",
    description: "A Bridgehill Car Standard é a manta corta-fogo de alta temperatura desenvolvida para contenção e isolamento imediato de incêndios em veículos elétricos (baterias de íon-lítio) e a combustão. Bloqueia chamas instantaneamente, isola fumaças tóxicas e gases letais sem necessidade de água ou espuma química. Reutilizável em até 10 ocorrências veiculares, é a solução indispensável para centros automotivos, concessionárias, garagens, túneis e estações de recarga. Acompanha bolsa/mochila hermética ergonômica Smartbag com certificação IP65 para rápida mobilização.",
    features: [
      "Contenção Instantânea de Incêndios: Abafa chamas e corta o oxigênio imediatamente em veículos elétricos e a combustão",
      "Isolamento de Fumaça Tóxica e Fuligem: Retém vapores e fumaça densa de baterias de íon-lítio em ambientes fechados",
      "Ação Ecológica sem Água: Controla o fogo sem água ou espuma, evitando contaminação ambiental e danos estruturais",
      "Resistência Térmica Extrema: Núcleo em Piroxênio de alta pureza que suporta picos de até 1.600 °C e trabalho contínuo a 800 °C",
      "Reutilizável até 10 Vezes: Desenvolvida com tecido tecnológico BridgeTech™ para múltiplas utilizações conforme severidade",
      "Smartbag IP65 Inclusa: Acompanha bolsa hermética à prova de água e poeira (EN 60529) para resposta imediata",
      "Ilhoses Periféricos a cada 1 Metro: Permite uso como cortina térmica ou desdobramento rápido por dois operadores"
    ],
    specs: [
      { label: "Dimensões", value: "± 6,0 x 8,0 m (Disponível também versão XL: 7,5 x 10,0 m)" },
      { label: "Peso Total", value: "± 28 kg" },
      { label: "Temperatura de Pico", value: "± 1.600 °C (2.912 °F)" },
      { label: "Temperatura de Trabalho", value: "± 800 °C a 1.200 °C" },
      { label: "Material do Núcleo", value: "Piroxênio (Pyroxene) de Alta Pureza" },
      { label: "Revestimento", value: "Polímero tecnológico BridgeTech™" },
      { label: "Reutilização", value: "Reutilizável em até 10 ocorrências veiculares" },
      { label: "Aplicações", value: "Veículos Elétricos (EV), Híbridos, Combustão, Oficinas e Garagens" },
      { label: "Certificações", value: "NFPA 701-2019, EN ISO 1182, EN ISO 1716, EN 13501-1 (A1), ASTM D257" },
      { label: "Validação Independente", value: "Testado e certificado pelo instituto europeu RISE Fire Research" },
      { label: "Acessório Incluso", value: "Smartbag Hermética Ergonômica Padrão IP65 (EN 60529)" },
      { label: "Garantia", value: "12 Meses de Fábrica" }
    ],
    defaultPrice: 34900.00,
    defaultDiscount: 5000.00,
    finalPrice: 29900.00,
    image: "images/manta_corta_fogo_bridgehill_car_standard.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 12. OSCILOSCÓPIOS & DIAGNÓSTICO AVANÇADO
  // --------------------------------------------------------------------------
  {
    id: "osciloscopio-launch-o2-2",
    name: "Osciloscópio Digital Automotivo Launch O2-2 (4 Canais)",
    category: "Scanners & DTEA",
    categoryKey: "scanners",
    tagline: "Análise Avançada de Sinais de Alta Velocidade para Scanners Linha X-431",
    badge: "100 MHz • 4 Canais Digitais",
    description: "O LAUNCH O2-2 Scopebox é um osciloscópio automotivo digital de 4 canais de alta velocidade, desenvolvido para diagnóstico aprofundado de falhas elétricas e eletrônicas veiculares. Integrado com perfeição aos scanners da linha LAUNCH X-431 (PRO 1S V5.0, PRO SE, PRO 3 LINK, PAD VII e PAD IX), transforma o tablet de diagnóstico em um laboratório automotivo para análise de sensores, atuadores, ignição e redes de comunicação CAN/LIN.",
    features: [
      "4 Canais Independentes: Permite monitorar e comparar múltiplos sinais simultaneamente (ex: sincronismo CKP e CMP)",
      "Largura de Banda de 100 MHz e Amostragem de 1 GSa/s: Captura falhas transientes e microinterrupções em alta velocidade",
      "Testes Guiados Automotivos Pré-Configurados: Biblioteca integrada com padrões de onda de referência para centenas de componentes",
      "Decodificação de Redes CAN / LIN: Diagnóstico aprofundado do tráfego de dados veicular direto na tela do scanner",
      "Gravação e Reprodução de Formas de Onda: Armazene gráficos para emissão de laudos técnicos e comprovação ao cliente",
      "Gabinete Emborrachado Reforçado: Proteção anti-impacto industrial desenvolvida para o dia a dia pesado da oficina"
    ],
    specs: [
      { label: "Canais", value: "4 Canais analógicos independentes" },
      { label: "Largura de Banda", value: "100 MHz" },
      { label: "Taxa de Amostragem", value: "Até 1 GSa/s" },
      { label: "Conectividade", value: "USB plug-and-play de alta velocidade" },
      { label: "Compatibilidade", value: "Scanners Launch X-431 PRO 1S V5.0, PRO SE, PRO 3 LINK, PAD VII, PAD IX" },
      { label: "Aplicações", value: "Sensores, atuadores, ignição primária/secundária, redes CAN, LIN, FlexRay" },
      { label: "Garantia", value: "12 Meses de Fábrica" }
    ],
    defaultPrice: 8379.00,
    defaultDiscount: 3479.00,
    finalPrice: 4900.00,
    image: "images/osciloscopio_launch_o2_2.png",
    selected: false,
    quantity: 1
  },
  {
    id: "osciloscopio-multimetro-launch-em101n",
    name: "Osciloscópio 2 Canais com Multímetro Digital Launch EM101N",
    category: "Scanners & DTEA",
    categoryKey: "scanners",
    tagline: "Solução 2 em 1 Portátil com Conexão Sem Fio para Diagnóstico Geral e VHE",
    badge: "Osciloscópio + Multímetro Sem Fio",
    description: "O LAUNCH EM101N combina as funções de um multímetro digital True RMS de alta precisão e um osciloscópio automotivo de 2 canais em um único equipamento compacto e robusto. Essencial para a detecção e manutenção em veículos a combustão, híbridos e elétricos (VHE), possui comunicação sem fio Bluetooth de alta velocidade e aplicativo intuitivo compatível com scanners Launch e tablets.",
    features: [
      "Equipamento 2 em 1: Multímetro True-RMS e osciloscópio de 2 canais integrados para diagnósticos rápidos",
      "Comunicação Sem Fio Wireless / Bluetooth: Liberdade de movimento na oficina sem emaranhado de fios no cofre do motor",
      "Especial para Veículos Híbridos e Elétricos (VHE): Medições seguras em sistemas de baixa e alta precisão",
      "Geração e Visualização Rápida de Formas de Onda: Análise visual instantânea de sensores, pulsos de injeção e atuadores",
      "Interface Intuitiva: Software com configuração rápida de escala de tempo, tensão e trigger automático",
      "Design Portátil e Ergonômico: Gabinete resistente com alça de apoio para encaixe no compartimento do motor"
    ],
    specs: [
      { label: "Função Principal", value: "Osciloscópio de 2 Canais + Multímetro Digital True RMS" },
      { label: "Canais", value: "2 Canais de entrada analógica" },
      { label: "Comunicação", value: "Conexão Wireless / Bluetooth e USB" },
      { label: "Aplicações", value: "Veículos Leves, Comerciais, Híbridos e Elétricos (VHE)" },
      { label: "Medições do Multímetro", value: "Tensão DC/AC, Corrente, Resistência, Continuidade e Diodos" },
      { label: "Compatibilidade", value: "Scanners Launch da linha X-431 e dispositivos compatíveis" },
      { label: "Garantia", value: "12 Meses de Fábrica" }
    ],
    defaultPrice: 4680.00,
    defaultDiscount: 1190.00,
    finalPrice: 3490.00,
    image: "images/osciloscopio_launch_em101n.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 13. MESA ELEVADORA PARA BATERIAS VHE
  // --------------------------------------------------------------------------
  {
    id: "elevador-mesa-baterias-eev15-fortatech",
    name: "Mesa Elevadora Eletro-Hidráulica para Baterias EV Forta Tech EEV 15 (1.500 kg)",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Máxima Estabilidade e Segurança na Remoção e Instalação de Packs de Baterias EV",
    badge: "Capacidade 1.500 kg • Linha EV",
    description: "Desenvolvido especialmente para centros automotivos e concessionárias que realizam serviços em veículos híbridos e elétricos, o Forta Tech EEV 15 oferece capacidade de 1.500 kg com estabilidade incomparável. Possui acionamento eletro-hidráulico suave, tampo com ajustes finos de nivelamento e sapatas isolantes ajustáveis para sustentação milimétrica de baterias de alta voltagem, motores elétricos e transmissões sob o veículo.",
    features: [
      "Capacidade de Carga de 1.500 kg: Suporta com folga os maiores packs de baterias de veículos elétricos e SUVs do mercado",
      "Acionamento Eletro-Hidráulico Suave: Elevação e descida controladas por botoeira ergonômica sem esforço físico",
      "Tampo com Regulagem Multi-Eixos: Ajuste angular de inclinação e posicionamento fino para encaixe perfeito no chassi",
      "Sapatas Isolantes Reguláveis: Protegem a carcaça da bateria contra arranhões e curto-circuitos acidentais",
      "Rodízios Industriais com Freio: Mobilidade ágil na oficina e travamento seguro no box de manutenção",
      "Válvulas de Segurança Hidráulicas: Proteção contra sobrecarga e descida suave e controlada"
    ],
    specs: [
      { label: "Capacidade de Carga", value: "1.500 kg (1,5 Toneladas)" },
      { label: "Tipo de Acionamento", value: "Eletro-hidráulico motorizado integrado" },
      { label: "Plataforma", value: "Tampo bipartido com regulagem de posicionamento e inclinação" },
      { label: "Aplicações", value: "Packs de Baterias EV, Motores Elétricos, Transmissões e Conjuntos de Suspensão" },
      { label: "Segurança Operacional", value: "Sapatas isolantes e travas mecânico-hidráulicas de segurança" },
      { label: "Acabamento", value: "Pintura eletrostática a pó de alta durabilidade (Cinza Industrial)" },
      { label: "Garantia", value: "12 Meses Forta Tech" }
    ],
    defaultPrice: 24900.00,
    defaultDiscount: 3900.00,
    finalPrice: 21000.00,
    image: "images/elevador_mesa_eev15_fortatech.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 14. BALANCEADORA DE RODAS SPIN 200
  // --------------------------------------------------------------------------
  {
    id: "balanceadora-spin-200-sp200",
    name: "Balanceadora de Rodas Motorizada com Laser Forta Tech Spin 200 (SP200)",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Tecnologia Essencial com Apontador Laser e Freio Automático",
    badge: "Apontador Laser • Freio Automático",
    description: "A SPIN 200 combina medição dinâmica e estática de alta precisão com freio automático e indicação a laser para aplicação perfeita de contrapesos. Projetada para oficinas e autocenters que buscam máxima rentabilidade com investimento inteligente, entrega leituras consistentes em apenas 7 segundos com operação intuitiva.",
    features: [
      "Indicação a Laser de Posição do Chumbo: Aponta exatamente onde colar o contrapeso, eliminando erros e retrabalhos",
      "Acionamento e Freio Automáticos: Para automaticamente na posição correta de aplicação com agilidade e segurança",
      "Múltiplos Modos de Balanceamento: Programas DYN (dinâmico), STA (estático) e modos ALU para rodas esportivas de liga leve",
      "Ciclo Rápido de Medição: Diagnóstico completo de desbalanceamento em apenas 7 a 8 segundos",
      "Auto-Calibração e Auto-Diagnóstico: Sistema inteligente que garante a repetibilidade e precisão milimétrica das leituras",
      "Capô de Proteção com Partida Automática: Inicia o giro ao fechar a proteção com máxima segurança operacional"
    ],
    specs: [
      { label: "Diâmetro de Rodas Suportado", value: "10\" a 24\"" },
      { label: "Largura da Roda", value: "1,5\" a 20\"" },
      { label: "Peso Máximo da Roda", value: "65 kg" },
      { label: "Precisão de Balanceamento", value: "± 1 g" },
      { label: "Tempo de Ciclo", value: "7 a 8 segundos" },
      { label: "Recursos Especiais", value: "Laser indicador de peso, freio automático de posicionamento, display LED" },
      { label: "Tensão de Alimentação", value: "220V Monofásico" },
      { label: "Garantia", value: "12 Meses Forta Tech" }
    ],
    defaultPrice: 9490.00,
    defaultDiscount: 1510.00,
    finalPrice: 7980.00,
    image: "images/balanceadora_spin_200.png",
    selected: false,
    quantity: 1
  },

  // --------------------------------------------------------------------------
  // 15. TESTADORES PROFISSIONAIS DE BATERIAS
  // --------------------------------------------------------------------------
  {
    id: "testador-baterias-launch-bst-860s",
    name: "Testador de Baterias e Sistema Elétrico Launch BST-860S com Impressora",
    category: "Scanners & DTEA",
    categoryKey: "scanners",
    tagline: "Diagnóstico em Segundos com Emissão de Relatório Impresso na Hora",
    badge: "Impressora Térmica Integrada",
    description: "O LAUNCH BST-860S é o testador de baterias e sistemas elétricos automotivos mais completo da categoria. Realiza diagnóstico do estado de saúde (SOH) e carga (SOC) da bateria, teste do motor de arranque e teste de ondulação do alternador em poucos segundos, emitindo imediatamente um comprovante impresso térmico com logotipo e dados do teste para entrega ao cliente.",
    features: [
      "Impressora Térmica Embutida: Imprime na hora o laudo de teste para apresentar ao cliente e fechar vendas de baterias",
      "Compatibilidade Universal 12V e 24V: Testa baterias convencionais de chumbo-ácido, AGM, GEL, EFB e Start-Stop",
      "Diagnóstico 3 em 1 Completo: Teste de Bateria, Teste de Partida (motor de arranque) e Teste de Carga (Alternador)",
      "Tecnologia de Condutância Avançada: Não descarrega a bateria do veículo e garante testes rápidos e 100% seguros",
      "Display LCD Colorido com Iluminação: Visualização clara dos parâmetros com menu intuitivo totalmente em português",
      "Garras Kelvin de Alta Precisão: Medição a 4 fios que elimina resistência de contato e ruídos elétricos"
    ],
    specs: [
      { label: "Tipos de Baterias", value: "Chumbo-ácido regular, Placa Plana AGM, Espiral AGM, GEL, EFB e Start-Stop" },
      { label: "Tensão de Teste", value: "12V e 24V" },
      { label: "Faixa de CCA", value: "100 a 2.000 CCA (normas SAE, DIN, EN, IEC, JIS)" },
      { label: "Impressora", value: "Térmica integrada (bobina padrão de 57 mm)" },
      { label: "Testes Integrados", value: "Saúde da bateria (SOH), Carga (SOC), Motor de arranque, Diodo/ondulação do alternador" },
      { label: "Garantia", value: "12 Meses de Fábrica" }
    ],
    defaultPrice: 1989.00,
    defaultDiscount: 424.00,
    finalPrice: 1565.00,
    image: "images/testador_baterias_bst_860s.png",
    selected: false,
    quantity: 1
  },
  {
    id: "testador-baterias-launch-bst-360",
    name: "Testador de Baterias Bluetooth Sem Fio Launch BST-360",
    category: "Scanners & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Bluetooth para Diagnósticos Rápidos via Scanner ou Smartphone",
    badge: "Conexão Sem Fio Bluetooth",
    description: "O LAUNCH BST-360 é um testador sem fio inovador com tecnologia Bluetooth de baixa energia (BLE). Conecta-se diretamente aos scanners da linha Launch X-431 ou a smartphones Android e iOS. Avalia em segundos a saúde da bateria, a capacidade de partida a frio (CCA) e o sistema de carga do alternador, gerando laudos digitais instantâneos para envio por WhatsApp ou e-mail.",
    features: [
      "Conexão Sem Fio Bluetooth BLE: Realize testes sob o capô enquanto visualiza os gráficos no tablet ou celular",
      "Integração Total com Scanners Launch: Funciona como acessório nativo nos scanners X-431 PRO SE, PRO 3 LINK, PAD VII e PAD IX",
      "Aplicativo Gratuito para Celular (iOS e Android): Permite uso autônomo mesmo sem scanner na oficina",
      "Geração de Laudos em PDF para WhatsApp: Comprove o estado da bateria com relatório profissional no celular do cliente",
      "Proteção Eletrônica Total: Proteção contra inversão de polaridade, faíscas e sobretensão",
      "Ultracompacto e Leve: Cabe na palma da mão e pode ser levado em atendimentos externos e socorro mecânico"
    ],
    specs: [
      { label: "Tensão de Operação", value: "Baterias 12V (automóveis, motos, utilitários leves)" },
      { label: "Faixa de CCA", value: "100 a 2.000 CCA (padrões CCA, DIN, JIS, EN, IEC, GB, SAE, MCA)" },
      { label: "Conectividade", value: "Bluetooth 5.0 BLE de baixo consumo" },
      { label: "Compatibilidade", value: "Scanners Launch X-431 e smartphones Android / iOS" },
      { label: "Testes Realizados", value: "Teste de Bateria (SOH/SOC), Teste de Partida e Teste de Carga do Alternador" },
      { label: "Garantia", value: "12 Meses de Fábrica" }
    ],
    defaultPrice: 849.00,
    defaultDiscount: 269.00,
    finalPrice: 580.00,
    image: "images/testador_baterias_bst_360.png",
    selected: false,
    quantity: 1
  },
  // --------------------------------------------------------------------------
  // 16. CATÁLOGO COMPLEMENTAR OFICIAL FORTATECH.COM.BR (SINCRONIZADO DO SITE)
  // --------------------------------------------------------------------------
  {
    id: "rampa-pneumatica-para-alinhamento-sher-tile-forta-tech-rtp4000-nacional",
    code: "INN032",
    name: "RAMPA PNEUMATICA PARA ALINHAMENTO - SHER TILE FORTA TECH RTP4000 NACIONAL",
    category: "Undercar & Alinhamento 3D",
    categoryKey: "undercar",
    tagline: "Precisão Tridimensional e Produtividade para o Centro Automotivo",
    badge: "Código: INN032 • Original Forta Tech",
    description: "Solução oficial Forta Tech de alta tecnologia e confiabilidade operacional, projetada para elevar a produtividade e a precisão técnica do seu centro automotivo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "INN032" },
      { label: "Categoria", value: "Undercar & Alinhamento 3D" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 37420.29,
    defaultDiscount: 0.00,
    finalPrice: 37420.29,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202503141150150691rampa.png?v=1782741708",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-hidraulico-forta-tech-ep502-portico-5-ton-cinza",
    code: "FT24006",
    name: "ELEVADOR HIDRAULICO FORTA TECH EP502 PORTICO 5 TON CINZA",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Segurança Estrutural, Estabilidade e Alta Capacidade de Elevação",
    badge: "Código: FT24006 • Original Forta Tech",
    description: "Elevador Hidráulico Forta Tech EP502 Pórtico 5 Ton - Cinza Projetado para o trabalho pesado do dia a dia em oficinas, o Elevador EP502 da Forta Tech suporta até 5 toneladas , ideal para veículos de grande porte. Com estrutura reforçada em formato pórtico , garante estabilidade, segurança e eficiência nas operações. Acionamento hidráulico confiável e pintura eletrostática cinza para maior durabilidade. Destaques: Capacidade de 5.000 kg Estrutura em pórtico reforçado Sistema...",
    features: [
      "Capacidade de 5.000 kg",
      "Estrutura em pórtico reforçado",
      "Sistema de elevação hidráulico confiável",
      "Acabamento em pintura eletrostática cinza",
      "Ideal para oficinas, frotas e centros automotivos"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "FT24006" },
      { label: "Categoria", value: "Elevadores Automotivos" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 34500.00,
    defaultDiscount: 0.00,
    finalPrice: 34500.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202609101453243881ep_502_02.png?v=1789062837",
    selected: false,
    quantity: 1
  },
  {
    id: "tapete-antiderrapante-para-elevadores-com-logotipo-launch",
    code: "INN300",
    name: "TAPETE ANTIDERRAPANTE PARA ELEVADORES COM LOGOTIPO LAUNCH",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Segurança Estrutural, Estabilidade e Alta Capacidade de Elevação",
    badge: "Código: INN300 • Original Forta Tech",
    description: "O kit de tapetes antiderrapantes para elevador é desenvolvido em manta PVC, com material isolante para proteção contra descarga elétrica. É impermeável para qualquer tipo de líquido, incluindo óleo de motor ou câmbio. Antiderrapante e antichamas para um trabalho mais seguro. É ecologicamente correto, pois sua composição é de 60% material reciclável.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "INN300" },
      { label: "Categoria", value: "Elevadores Automotivos" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 2570.39,
    defaultDiscount: 0.00,
    finalPrice: 2570.39,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202501241603025266tapete_impermeavel_launch.png?v=1782824496",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-can-fd-adaptador-chrysler-fiat-sgw-12-8",
    code: "CBO0025",
    name: "Combo Can FD + Adaptador Chrysler / FIat SGW 12+8",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0025 • Original Forta Tech",
    description: "Adaptador Chrysler/Fiat SGW 12+8 Funciona com os scanners: Autel, Launch, Snap-On, Sun PDL, Napro, Rasther, Raven Multimec 3, Xtool ou todos que possuam os veículos do grupo FCA em seu banco de dados. Cabo especifico para uso em transmissão de dados em SGW (Security Gateway). Comprimento de 35 cm; Verifique as especificações técnicas. Aplicação: Veículos lançados a partir de 2018, e todos fabricados a partir de 2020 no Brasil, do Grupo Fiat Chrysler Automóveis (FCA - FIAT,...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0025" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 1569.00,
    defaultDiscount: 0.00,
    finalPrice: 1569.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202506251530523540cabos.png?v=1789057635",
    selected: false,
    quantity: 1
  },
  {
    id: "kit-bomba-eletrica-gatilho-inteligente-mangueiras-tbox-pescador-para-208l-forta-tech-flow-elite-x1",
    code: "",
    name: "Kit Bomba Elétrica + Gatilho Inteligente + Mangueiras + Tbox + pescador Para 208l Forta Tech Flow Elite X1",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Linha Oficial Forta Tech",
    description: "Destaques do equipamento: · Gatilho inteligente com pistola digital e pré-ajuste , que evita desperdícios e garante controle total do volume dispensado. · Bomba elétrica de 200W com vazão de até 8L/min, garantindo agilidade no abastecimento. · Mangueira de 3 metros para maior mobilidade durante o uso. · Bico com fechamento manual , reforçando a segurança no manuseio. · Compatível com tambores de 60 a 220 litros , trazendo flexibilidade para diferentes estruturas de oficina...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/FLOW_ELITE_X3_1c03b1aa-b51e-4818-b21a-8d02b1a66020.png?v=1744982975",
    selected: false,
    quantity: 1
  },
  {
    id: "diagnostico-eletronico-de-baterias-de-veiculos-eletricos-e-hibridos-aviloo",
    code: "AVI25001",
    name: "Diagnóstico eletrônico de baterias de veículos elétricos e híbridos Aviloo",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Solução Homologada para Diagnóstico e Manutenção de Veículos Elétricos e Híbridos",
    badge: "Código: AVI25001 • Original Forta Tech",
    description: "O AVILOO é uma solução avançada para diagnóstico eletrônico de baterias de veículos elétricos e híbridos, desenvolvida para oferecer uma avaliação técnica precisa, confiável e rastreável do Estado de Saúde da bateria, conhecido como SoH. Diferente de um scanner convencional, o AVILOO realiza a coleta de dados reais diretamente do sistema de gerenciamento da bateria, o BMS, por meio da conexão OBD-II. Sua metodologia é baseada em medições dinâmicas, realizadas durante o uso...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "AVI25001" },
      { label: "Categoria", value: "Veículos Híbridos & Elétricos (VHE)" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/aviloo.png?v=1790949243",
    selected: false,
    quantity: 1
  },
  {
    id: "torre-movel-de-alinhamento-3d-forta-tech-black-elite",
    code: "",
    name: "Torre Móvel de Alinhamento 3D Forta Tech Black Elite",
    category: "Undercar & Alinhamento 3D",
    categoryKey: "undercar",
    tagline: "Precisão Tridimensional e Produtividade para o Centro Automotivo",
    badge: "Linha Oficial Forta Tech",
    description: "A Torre Móvel Black Elite leva a tecnologia de alinhamento 3D de alto desempenho para a sua oficina. Câmeras de alta resolução, software inteligente e banco de dados atualizado garantem alinhamento perfeito e resultados profissionais. Recomendada para uso em fossos. Destaques Tecnologia 3D de alta precisão: câmeras de alta resolução com medições tridimensionais detalhadas (distância entre eixos, diâmetro dos pneus, largura das rodas e muito mais) Software inteligente e fác...",
    features: [
      "Tecnologia 3D de alta precisão: câmeras de alta resolução com medições tridimensionais detalhadas (distância entre eixos, diâmetro dos pneus, largura das rodas e muito mais)",
      "Software inteligente e fácil de usar: interface intuitiva que guia o técnico passo a passo, reduzindo erros humanos e aumentando a produtividade",
      "Banco de dados atualizado: cobertura completa de veículos nacionais e importados, com atualizações constantes",
      "Máxima eficiência: processos mais rápidos e precisos, melhorando o fluxo de trabalho e a satisfação do cliente",
      "Investimento inteligente: equipamento compacto, moderno e robusto, que garante alto retorno sobre o investimento",
      "Aumente seus ganhos com alinhamentos precisos e clientes satisfeitos"
    ],
    specs: [
      { label: "Categoria", value: "Undercar & Alinhamento 3D" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/blackelite.png?v=1790261414",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-de-4-colunas-forta-tech-5-0-rjp-5-000-kg",
    code: "",
    name: "Elevador de 4 Colunas Forta Tech 5.0 RJP – 5.000 kg",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Segurança Estrutural, Estabilidade e Alta Capacidade de Elevação",
    badge: "Linha Oficial Forta Tech",
    description: "O elevador de 4 colunas 5.0 RJP foi desenvolvido para oferecer segurança, estabilidade e alto desempenho em trabalhos de elevação e alinhamento. Seu design robusto o torna uma excelente opção para oficinas automotivas que exigem confiabilidade, operação eficiente e adaptação a diferentes tipos de veículos. As dimensões podem variar ligeiramente. Destaques Capacidade de carga de 5.000 kg Destravamento pneumático sincronizado Macaco elevador eletro-hidráulico padrão Altura d...",
    features: [
      "Capacidade de carga de 5.000 kg",
      "Destravamento pneumático sincronizado",
      "Macaco elevador eletro-hidráulico padrão",
      "Altura de elevação secundária de 340 mm",
      "Plataformas ajustáveis para diferentes bitolas",
      "Estrutura reforçada e operação segura"
    ],
    specs: [
      { label: "Categoria", value: "Elevadores Automotivos" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/rjp5000.png?v=1790260194",
    selected: false,
    quantity: 1
  },
  {
    id: "elevador-pantografico-forta-tech-etz-35-e-3-500-kg-embutido-no-piso",
    code: "",
    name: "Elevador Pantográfico Forta Tech ETZ 35 E – 3.500 kg (Embutido no Piso)",
    category: "Elevadores Automotivos",
    categoryKey: "elevadores",
    tagline: "Segurança Estrutural, Estabilidade e Alta Capacidade de Elevação",
    badge: "Linha Oficial Forta Tech",
    description: "O elevador pantográfico ETZ 35 E foi desenvolvido para oferecer alta capacidade de carga e máxima segurança na elevação de veículos. Sua estrutura reforçada e seu sistema de acionamento hidráulico de quatro cilindros o tornam uma excelente opção para oficinas que buscam eficiência, confiabilidade e estabilidade em suas operações diárias. Solução profissional para elevação automotiva. Destaques Pantográfico 4 cilindros Embutido no piso Estrutura reforçada",
    features: [
      "Pantográfico",
      "4 cilindros",
      "Embutido no piso",
      "Estrutura reforçada"
    ],
    specs: [
      { label: "Categoria", value: "Elevadores Automotivos" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/etz35.png?v=1790258736",
    selected: false,
    quantity: 1
  },
  {
    id: "caixa-com-105-adaptadores-para-troca-de-atf-forta-tech",
    code: "",
    name: "Maleta com 105 Adaptadores para Troca de ATF Forta Tech",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Linha Oficial Forta Tech",
    description: "Caixa com 105 adaptadores projetada para apoiar processos de manutenção e serviço de transmissão automática em diferentes tipos de veículos, oferecendo praticidade, organização e eficiência na oficina. Destaques Ampla compatibilidade para diferentes aplicações Conexão rápida e segura Organização prática das peças Ideal para serviço profissional de ATF Estojo resistente para uso em oficina Conexão segura, economia de tempo, máxima compatibilidade, organização profissional",
    features: [
      "Ampla compatibilidade para diferentes aplicações",
      "Conexão rápida e segura",
      "Organização prática das peças",
      "Ideal para serviço profissional de ATF",
      "Estojo resistente para uso em oficina",
      "Conexão segura, economia de tempo, máxima compatibilidade, organização profissional"
    ],
    specs: [
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/maleta105.png?v=1790258309",
    selected: false,
    quantity: 1
  },
  {
    id: "equipamento-para-troca-de-fluido-de-freio-forta-tech-brake-fluid-elite-x1",
    code: "",
    name: "Equipamento Para Troca De Fluido De Freio Forta Tech Brake Fluid Elite X1",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Linha Oficial Forta Tech",
    description: "A Brake Fluid Elite X1 é uma máquina inteligente para a troca de fluido de freio. Eficiência, controle e tecnologia para oficinas que buscam um serviço mais profissional. Destaques Tecnologia AC & DC: maior estabilidade, segurança e eficiência durante a operação Substituição dinâmica: troca completa do fluido de freio em aproximadamente 2–3 minutos Pressão ajustável: faixa de trabalho configurável conforme a necessidade do serviço Sistema automatizado: equipado com duas cé...",
    features: [
      "Tecnologia AC & DC: maior estabilidade, segurança e eficiência durante a operação",
      "Substituição dinâmica: troca completa do fluido de freio em aproximadamente 2–3 minutos",
      "Pressão ajustável: faixa de trabalho configurável conforme a necessidade do serviço",
      "Sistema automatizado: equipado com duas células de carga para substituição totalmente automática",
      "Operação inteligente: lembrete automático, purga de ar e uso por uma única pessoa",
      "Tela touch de 10\": controle por microcomputador e consulta de dados de conectores"
    ],
    specs: [
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/fluidelitex1.png?v=1790257983",
    selected: false,
    quantity: 1
  },
  {
    id: "maquina-de-limpeza-e-reducao-de-catalisador-forta-tech-efi-smart-1",
    code: "",
    name: "Máquina de Limpeza e Redução de Catalisador Forta Tech EFI-Smart 1",
    category: "Limpeza de Bicos & Injeção",
    categoryKey: "injetores",
    tagline: "Eficiência, Diagnóstico Preciso e Limpeza Profunda do Sistema de Injeção",
    badge: "Linha Oficial Forta Tech",
    description: "Este equipamento foi projetado especificamente para a limpeza e manutenção do catalisador de três vias com acúmulo severo de carvão. Restaura o rendimento do seu catalisador. Destaques Design simples e operação fluida: design intuitivo que permite um uso fácil e eficiente Equipamento leve e altamente funcional: estrutura compacta e portátil, ideal para qualquer oficina Limpeza e redução de alto rendimento: utiliza líquido de limpeza e agente redutor para o catalisador de t...",
    features: [
      "Design simples e operação fluida: design intuitivo que permite um uso fácil e eficiente",
      "Equipamento leve e altamente funcional: estrutura compacta e portátil, ideal para qualquer oficina",
      "Limpeza e redução de alto rendimento: utiliza líquido de limpeza e agente redutor para o catalisador de três vias, eliminando rapidamente os depósitos de carvão e restaurando seu rendimento",
      "Melhora a resposta do veículo",
      "Facilita a partida",
      "Otimiza a combustão"
    ],
    specs: [
      { label: "Categoria", value: "Limpeza de Bicos & Injeção" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/efi-smart.png?v=1790257244",
    selected: false,
    quantity: 1
  },
  {
    id: "testador-portatil-de-cabos-de-recarga-para-veiculos-eletricos-practicable",
    code: "",
    name: "Testador Portátil de Cabos de Recarga para Veículos Elétricos practiCABLE",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Solução Homologada para Diagnóstico e Manutenção de Veículos Elétricos e Híbridos",
    badge: "Linha Oficial Forta Tech",
    description: "O practiCABLE é a solução portátil tudo-em-um para testes automatizados de cabos de carga Modo 2 (IC-CPD) e Modo 3. Cumpre as normas e regulamentações mais exigentes (DGUV V3, EN 50699, EN 62752 etc.), garantindo a segurança e a confiabilidade em cada teste. Fácil de usar, robusto e preciso. Ideal para oficinas, técnicos de manutenção e serviços especializados em mobilidade elétrica. Destaques Cumpre normas: DGUV V3, EN 50699, EN 62752 e mais Automatizado: conecta, inicia ...",
    features: [
      "Cumpre normas: DGUV V3, EN 50699, EN 62752 e mais",
      "Automatizado: conecta, inicia e pronto",
      "Portátil e resistente: maleta compacta, projetada para trabalho em campo",
      "Testes para cabos de carga Modo 2 (IC-CPD) e Modo 3",
      "Conectores Tipo 1 e Tipo 2",
      "Compatível com tomadas monofásicas e trifásicas (Schuko, CEE 16/32A)"
    ],
    specs: [
      { label: "Categoria", value: "Veículos Híbridos & Elétricos (VHE)" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/praticable.png?v=1790251804",
    selected: false,
    quantity: 1
  },
  {
    id: "calibrador-de-pneus-por-nitrogenio-n2-smart-4-com-vacuum-system",
    code: "",
    name: "Calibrador de pneus por nitrogênio N2 Smart 4 com Vacuum System",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Linha Oficial Forta Tech",
    description: "O N2 Smart 4 com Vacuum System é o calibrador de pneus por nitrogênio que enche e esvazia 4 pneus ao mesmo tempo. O Vacuum System elimina o ar e a umidade antes de encher com nitrogênio, melhorando a pureza e a estabilidade da pressão. A solução inteligente para a sua oficina: máxima eficiência, máxima confiança. Destaques Nitrogênio de alta pureza: maior estabilidade de pressão e melhor rendimento Pressão constante: controle preciso para maior segurança Maior durabilidade...",
    features: [
      "Nitrogênio de alta pureza: maior estabilidade de pressão e melhor rendimento",
      "Pressão constante: controle preciso para maior segurança",
      "Maior durabilidade dos pneus: reduz o desgaste e prolonga sua vida útil",
      "Melhor eficiência de combustível: menos variação de pressão, mais economia",
      "Menor variação térmica: mais estabilidade em qualquer condição de direção",
      "Vacuum System: elimina o ar e a umidade antes de encher com nitrogênio, melhorando a pureza e a estabilidade da pressão"
    ],
    specs: [
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 0.00,
    defaultDiscount: 0.00,
    finalPrice: 0.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/n2-smart4.png?v=1790251191",
    selected: false,
    quantity: 1
  },
  {
    id: "monitor-de-nivel-de-lubrificante-com-caixa-de-controle-sonoro-alarm-forta-tech-flow-smart-900-fw900",
    code: "20022FTC",
    name: "Monitor De Nível De Lubrificante Com Caixa De Controle Sonoro - Alarm Forta Tech Flow Smart 900 - FW900",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 20022FTC • Original Forta Tech",
    description: "Destaques do equipamento: · ?? Faixa de medição de 0 a 90 cm com alta precisão (2 cm). · ?? Alarme sonoro integrado , que alerta imediatamente em caso de excesso. · ?? Leitura em tempo real da altura do óleo , com visualização instantânea. · ?? Interface digital personalizável , adaptada às necessidades do operador. · ? Tensão de operação: 220V , com instalação prática. Projetado para quem não abre mão de controle, segurança e agilidade , o Flow Smart 900 é um aliado essen...",
    features: [
      "· ?? Faixa de medição de 0 a 90 cm com alta precisão (2 cm).",
      "· ?? Alarme sonoro integrado , que alerta imediatamente em caso de excesso.",
      "· ?? Leitura em tempo real da altura do óleo , com visualização instantânea.",
      "· ?? Interface digital personalizável , adaptada às necessidades do operador.",
      "· ? Tensão de operação: 220V , com instalação prática."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "20022FTC" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 2949.00,
    defaultDiscount: 0.00,
    finalPrice: 2949.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202504241746274188flow_smart_900.png?v=1745527676",
    selected: false,
    quantity: 1
  },
  {
    id: "monitor-de-nivel-de-lubrificante-ft-nivel-forta-tech-flow-500-fw500",
    code: "20023FTC",
    name: "Monitor De Nível De Lubrificante - Ft-nível Forta Tech Flow 500 - FW500",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 20023FTC • Original Forta Tech",
    description: "O Flow 500 é um monitor de nível de lubrificante que oferece controle exato do nível de óleo nos tanques, evitando faltas e otimizando o estoque. Faz parte da linha FLOW da Forta Tech – equipamentos inteligentes para lubrificação: bombas móveis, monitores de nível e pistolas digitais com conectividade, soluções robustas, modernas e interconectadas que elevam o nível de controle e abastecimento de óleo em oficinas, concessionárias, autocentros e indústrias. Cada produto da ...",
    features: [
      "Monitoramento preciso do nível de lubrificante",
      "Controle exato do nível de óleo nos tanques para evitar faltas e otimizar o estoque",
      "Operação ágil: processos rápidos que economizam tempo e recursos",
      "Maior controle do estoque: informação em tempo real para melhores decisões",
      "Abastecimento preciso: entrega exata do volume necessário, sem desperdícios",
      "Precisão total, maior produtividade, menos desperdício, tecnologia e confiabilidade"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "20023FTC" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 3949.00,
    defaultDiscount: 0.00,
    finalPrice: 3949.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202504241734170308flow_500.png?v=1745526987",
    selected: false,
    quantity: 1
  },
  {
    id: "bomba-eletrica-movel-com-tablet-e-aplicativo-rack-gatilho-e-acessorios-ft-pump-forta-tech-flow-elite-x3",
    code: "20024FTC",
    name: "Bomba Elétrica Móvel Com Tablet E Aplicativo, Rack, Gatilho E Acessórios - FT-PUMP Forta Tech Flow Elite X3",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 20024FTC • Original Forta Tech",
    description: "Controle total do abastecimento de óleo. A Flow Elite X3 é uma bomba elétrica móvel com tablet integrado, rack e dispensador, que transforma o abastecimento de óleo em eficiência, controle e rentabilidade. Faz parte da linha FLOW da Forta Tech – equipamentos inteligentes para lubrificação: bombas móveis, monitores de nível e pistolas digitais com conectividade, soluções robustas, modernas e interconectadas que elevam o nível de controle e abastecimento de óleo em oficinas,...",
    features: [
      "Controle digital intuitivo: tablet integrado com interface fácil de usar para uma operação rápida e precisa",
      "Mobilidade total para abastecimento: design móvel com rodas de alta resistência que permite deslocá-la com facilidade",
      "Construção robusta para uso profissional: estrutura em aço inoxidável e componentes de alta qualidade para máxima durabilidade",
      "Monitoramento preciso do nível de lubrificante: controle exato do nível de óleo nos tanques para evitar faltas e otimizar o estoque",
      "Operação ágil: processos rápidos que economizam tempo e recursos",
      "Maior controle do estoque: informação em tempo real para melhores decisões"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "20024FTC" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 10899.00,
    defaultDiscount: 0.00,
    finalPrice: 10899.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202504241612113572flow_elite_x3_61fecd1d-8764-4023-b383-3b065dd50d1a.png?v=1745525365",
    selected: false,
    quantity: 1
  },
  {
    id: "antena-de-comunicacao-para-equipamento-gatilho-inteligente-forta-tech-flow-smart-901-fw901",
    code: "20021FTC",
    name: "Antena De Comunicação Para Equipamento Gatilho Inteligente - Forta Tech Flow Smart 901 - FW901",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 20021FTC • Original Forta Tech",
    description: "Destaques do equipamento: · 💡 Gatilho inteligente com pistola digital e pré-ajuste , que evita desperdícios e garante controle total do volume dispensado. · ⚙️ Bomba elétrica de 200W com vazão de até 8L/min, garantindo agilidade no abastecimento. · 🧰 Mangueira de 3 metros para maior mobilidade durante o uso. · 🔄 Bico com fechamento manual , reforçando a segurança no manuseio. · 🔧 Compatível com tambores de 60 a 220 litros , trazendo flexibilidade para diferentes estrut...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "20021FTC" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 2089.00,
    defaultDiscount: 0.00,
    finalPrice: 2089.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202504241557269701flow_smart_901.png?v=1745521142",
    selected: false,
    quantity: 1
  },
  {
    id: "licenciamento-de-uso-data-launch-iberica-anual-para-acesso-a-info-tec-4-usuarios",
    code: "LIC-DATA-SRV",
    name: "Licenciamento De Uso Data Launch Ibérica Anual Para Acesso A Info Tec 4 Usuários",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: LIC-DATA-SRV • Original Forta Tech",
    description: "Licenciamento Anual de Uso Data Launch Ibérica - Acesso às Informações Técnicas para 4 Usuários Acesso ilimitado às informações técnicas automotivas mais atualizadas, para toda a equipe. O Data Launch oferece acesso a informações essenciais para a reparação de veículos comerciais e automóveis de passageiros, com o objetivo de otimizar o tempo e a precisão do diagnóstico e reparo. Com mais de 30.000 oficinas em toda a Europa utilizando esta plataforma diariamente, o Data La...",
    features: [
      "Acesso a mais de 45.000 desenhos técnicos e gráficos , todos vinculados ao Tec Doc, com link direto para o catálogo de peças.",
      "Seleção de veículos por marca, modelo, motor e ano , facilitando a pesquisa e a personalização do diagnóstico.",
      "Organização intuitiva do menu em sete categorias, para uma navegação mais eficiente.",
      "Informações detalhadas sobre esquemas elétricos, incluindo motor, airbag, conforto, ABS, ar condicionado, câmbio automático e muito mais.",
      "Dados técnicos completos , como correias de distribuição, torques de aperto, falhas de componentes, dados de ajuste, lubrificantes e fluidos, e tempos de reparo.",
      "Diagnóstico avançado de componentes e códigos de erro , permitindo uma análise precisa de problemas no veículo."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "LIC-DATA-SRV" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 9276.00,
    defaultDiscount: 0.00,
    finalPrice: 9276.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/DATA_LAUNCH.png?v=1738861726",
    selected: false,
    quantity: 1
  },
  {
    id: "desmontadora-de-pneus-forta-tech-grip-eco-300-gp300-vermelha",
    code: "25018FTC",
    name: "DESMONTADORA DE PNEUS FORTA TECH GRIP ECO 300 - GP300 - VERMELHA",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Alta Performance, Precisão e Agilidade para Rodas e Pneus",
    badge: "Código: 25018FTC • Original Forta Tech",
    description: "GRIP ECO 300 Compacta, eficiente e com recursos essenciais, a ECO-300 é a escolha perfeita para quem busca praticidade sem abrir mão da performance. Ideal para oficinas que valorizam produtividade, agilidade e u m excelente custo-benefício. Calibrador de pneus incluso Sistema de travamento automático Suporta rodas de até 22 polegadas",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "25018FTC" },
      { label: "Categoria", value: "Balanceadoras & Desmontadoras" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 9090.00,
    defaultDiscount: 1190.00,
    finalPrice: 7900.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202608041455187657grip300_sembotao_1.png?v=1789069589",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-919-dtea-pro-new-edition-sgw-osciloscopio-em-101n",
    code: "CBO0043",
    name: "Scanner 919 DTEA Pro New Edition + SGW + osciloscópio EM 101N",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0043 • Original Forta Tech",
    description: "O Combo Launch 919 DTEA PRO New Edition + SGW + EM101N reúne scanner automotivo profissional, Security Gateway e um equipamento que combina osciloscópio de 2 canais e multímetro digital em uma única solução. Desenvolvido para oficinas, autoelétricas, autocenters e profissionais de diagnóstico automotivo, o combo permite realizar desde a identificação de falhas nos módulos eletrônicos até a análise detalhada de sinais, tensões, correntes, resistências e formas de onda. Laun...",
    features: [
      "Osciloscópio automotivo de 2 canais ;",
      "Multímetro digital integrado;",
      "Largura de banda de 10 MHz ;",
      "Taxa máxima de amostragem em tempo real de 50 MHz/s ;",
      "Memória de buffer de 1 M ;",
      "Medição de tensão AC/DC de até ±600 V;"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0043" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 10964.00,
    defaultDiscount: 1684.00,
    finalPrice: 9280.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202609210930267256919em101.png?v=1789993875",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-pad-ix-sgw-sfd",
    code: "CBO0032",
    name: "Combo Pad IX + SGW + SFD",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0032 • Original Forta Tech",
    description: "Combo Exclusivo Launch PAD IX + Licenças SFD e SGW – Diagnóstico Profissional O Launch X-431 PAD IX é o scanner automotivo mais avançado da linha Launch, projetado para profissionais que exigem máximo desempenho, conectividade e precisão no diagnóstico de veículos leves e utilitários. Neste combo exclusivo Forta Tech , você adquire o PAD IX junto com as licenças originais SFD e SGW , liberando acesso total às montadoras com sistemas de segurança bloqueados — como Volkswage...",
    features: [
      "Scanner Automotivo Launch X-431 PAD IX Diagnóstico completo em todos os sistemas eletrônicos",
      "Comunicação DoIP, CAN FD e J2534",
      "Funções especiais avançadas (reset, sangria, calibração, programação e codificação)",
      "Atualizações automáticas via Wi-Fi e suporte remoto",
      "Tablet industrial de alto desempenho com tela touch e processador octa-core",
      "Licença SFD (Security Feature Diagnostic) Desbloqueia acesso total para veículos do grupo VW, Audi, Skoda e Seat"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0032" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 38790.00,
    defaultDiscount: 0.00,
    finalPrice: 38790.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202511120935307322combos_licencas_sgw_sfd.png?v=1778247251",
    selected: false,
    quantity: 1
  },
  {
    id: "fluid-900-maleta-kit-com-90-adaptadores",
    code: "CBO0047",
    name: "Fluid 900 + maleta kit com 90 adaptadores",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: CBO0047 • Original Forta Tech",
    description: "A Fluido 900 , da Forta Tech, é uma máquina profissional de troca de fluido de transmissão automática (ATF), projetada para oficinas mecânicas e centros automotivos que buscam eficiência, precisão e um processo mais limpo na manutenção de câmbios automáticos. Montada sobre uma estrutura com rodízios, a máquina alia robustez a mobilidade, facilitando seu deslocamento dentro da oficina conforme a necessidade do serviço. Equipada com um sistema de troca sem pressão, o equipam...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0047" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 23940.00,
    defaultDiscount: 5140.00,
    finalPrice: 18800.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/fluid900maleta.png?v=1789669482",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-scanner-pro-se-scope-scanner-com-osciloscopio-4-canais-sgw",
    code: "CBO0045",
    name: "Combo Scanner PRO SE Scope (scanner com osciloscópio 4 canais + sgw)",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0045 • Original Forta Tech",
    description: "O Combo Scanner PRO SE Scope + SGW reúne scanner automotivo profissional, osciloscópio integrado de 4 canais e Security Gateway (SGW) em uma única solução para diagnóstico eletrônico avançado. Desenvolvido para oficinas, autoelétricas, autocenters e profissionais especializados, o combo permite realizar desde a leitura e análise dos sistemas eletrônicos do veículo até a investigação detalhada de sinais elétricos, sensores, atuadores e redes de comunicação. Scanner PRO SE S...",
    features: [
      "Análise de sensores;",
      "Teste de atuadores;",
      "Análise de sinais de injetores;",
      "Sistemas de ignição;",
      "Sincronismo entre virabrequim e comando;",
      "Análise de sinais elétricos;"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0045" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 18749.00,
    defaultDiscount: 7459.00,
    finalPrice: 11290.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/combo_pro_se__sgw_03__osciloscopio.png?v=1789669900",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-scanner-919-dtea-multimetro",
    code: "CBO0042",
    name: "Combo Scanner 919 DTEA + Multímetro",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0042 • Original Forta Tech",
    description: "Launch 919 DTEA PRO O Launch 919 DTEA PRO é um scanner automotivo profissional desenvolvido para realizar diagnósticos rápidos e precisos em veículos nacionais e importados. O equipamento permite identificação automática do veículo por VIN , leitura e apagamento de códigos de falha e análise dos principais módulos, incluindo ECM, ABS, SRS e TCM . Com dados em tempo real (Live Data) e testes ativos (controle bidirecional) , possibilita uma análise mais aprofundada de sensor...",
    features: [
      "1 Scanner Automotivo Launch 919 DTEA PRO;",
      "1 Interface VCI;",
      "Cabos e adaptadores de diagnóstico;",
      "Cabo USB;",
      "Carregador/fonte de alimentação;",
      "Maleta ou estojo para transporte;"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0042" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 7500.00,
    defaultDiscount: 1510.00,
    finalPrice: 5990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/prosemulti.png?v=1789670053",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-cat-501s-kit-com-90-adaptadores-para-atf-capa-protetora-de-brinde",
    code: "CBO0046",
    name: "Combo CAT 501S + Kit com 90 Adaptadores para ATF + Capa Protetora de Brinde",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: CBO0046 • Original Forta Tech",
    description: "O Combo CAT 501S + Kit com 90 Adaptadores para ATF + Capa Protetora reúne uma solução completa para oficinas que trabalham com troca, flushing e manutenção de fluidos de transmissões automáticas . O conjunto combina a tecnologia e precisão da CAT 501S com a ampla variedade de conexões do kit com 90 adaptadores para ATF , permitindo atender diferentes modelos e sistemas de transmissão. Para completar, o combo acompanha uma capa protetora como brinde , ajudando a manter a má...",
    features: [
      "Troca automatizada e equalizada do fluido ATF;",
      "Eficiência de substituição de até 99,9% do fluido;",
      "Reconhecimento automático da direção do fluxo;",
      "Função de flushing;",
      "Ciclo de limpeza com detergente;",
      "Ajuste preciso do nível de óleo;"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0046" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 24598.00,
    defaultDiscount: 5608.00,
    finalPrice: 18990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/atf_501__maleta_kit_com_90_adaptadores__capa_brinde.png?v=1789669586",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-portatil-para-medicao-de-pneus-ttm-launch",
    code: "L00957",
    name: "Scanner Para Medição De Pneus TTM Launch",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: L00957 • Original Forta Tech",
    description: "O Scanner TTM Launch é um examinador portátil de profundidade da banda de rodagem do pneu, desenvolvido para tornar a inspeção mais rápida, precisa e profissional. Com medição de até 0,1 mm de precisão, permite avaliar o desgaste dos pneus com muito mais segurança do que uma análise visual ou manual. Seu design estrutural inovador permite que a medição seja feita de forma prática, independentemente da altura do chassi do veículo. A banda de rodagem completa pode ser medida...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00957" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 4500.00,
    defaultDiscount: 2555.00,
    finalPrice: 1945.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202602041057504017ttm-113.png?v=1770213517",
    selected: false,
    quantity: 1
  },
  {
    id: "balanceadora-de-rodas-b100",
    code: "DIN002",
    name: "Balanceadora de rodas B100",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Alta Performance, Precisão e Agilidade para Rodas e Pneus",
    badge: "Código: DIN002 • Original Forta Tech",
    description: "Reunindo as características necessárias para quem procura a melhor relação de Custo x Benefício, a Balanceadora de Rodas Élius B100 oferece recursos que irão encantar seu operador e trará produtividade para o seu dia a dia. Com painel e teclado suspensos para uma visualização prática, além de ampliar o espaço para armazenamento de contrapesos. A distância entre o painel e a área de armazenamento de contrapesos favorece a proteção dos componentes eletrônicos. Sua facilidade...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "DIN002" },
      { label: "Categoria", value: "Balanceadoras & Desmontadoras" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 8809.01,
    defaultDiscount: 0.00,
    finalPrice: 8809.01,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202410241329454251baln-100_4fbdeab4-2017-4e5f-8446-8aa1424a4c75.png?v=1789066651",
    selected: false,
    quantity: 1
  },
  {
    id: "equipamento-para-troca-de-fluido-de-atf-cm-100-tektino",
    code: "100CMBV",
    name: "Equipamento para troca de fluido de ATF CM-100 TEKTINO",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 100CMBV • Original Forta Tech",
    description: "Ideal para centros automotivos que buscam excelência e precisão, este equipamento é essencial para a troca de fluido de transmissão automática, incluindo sistemas CVT e de dupla embreagem úmida. A Tektino CM-100 oferece uma operação simplificada através de um menu intuitivo e displays claros que permitem visualizar todo o processo. Seu design robusto em aço, combinado com software de alta precisão, assegura uma troca de óleo eficiente e quase 100% de limpeza do sistema de ...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "100CMBV" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 12900.00,
    defaultDiscount: 3000.00,
    finalPrice: 9900.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202410221614378048teck-100.png?v=1729624643",
    selected: false,
    quantity: 1
  },
  {
    id: "gatilho-dispensador-inteligente-mangueira-forta-tech-flow-smart-900-flo900",
    code: "25019FTC",
    name: "Gatilho Dispensador Inteligente + Mangueira - Forta Tech Flow Smart 900 - FLO900",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 25019FTC • Original Forta Tech",
    description: "Solução oficial Forta Tech de alta tecnologia e confiabilidade operacional, projetada para elevar a produtividade e a precisão técnica do seu centro automotivo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "25019FTC" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 4889.00,
    defaultDiscount: 0.00,
    finalPrice: 4889.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202504241720029589flo900.png?v=1745526098",
    selected: false,
    quantity: 1
  },
  {
    id: "creader-elite-903",
    code: "L00903",
    name: "CReader Elite 903 LAUNCH",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00903 • Original Forta Tech",
    description: "Benefícios do Creader Elite 903: Sistema Operacional Android: Com uma interface moderna e intuitiva, baseada em Android, o Creader Elite 903 oferece uma navegação ágil e fácil acesso às funções de diagnóstico. Reconhecimento Automático de VIN: Agiliza a identificação do veículo e garante maior precisão na leitura de dados, economizando tempo durante o diagnóstico. Cobertura OBD II Genérica: Realiza leitura e apagamento de códigos de falha (DTCs), acesso a dados em tempo re...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00903" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 399.00,
    defaultDiscount: 0.00,
    finalPrice: 399.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/CREADER_ECIN.png?v=1768828812",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-919-dtea-pro-licenca-sgw",
    code: "CBO0041",
    name: "Scanner 919 Dtea Pro + Licença SGW",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0041 • Original Forta Tech",
    description: "O Kit Scanner 919 Dtea Pro + Licença SGW é a solução completa para oficinas e profissionais automotivos que buscam diagnóstico avançado com acesso liberado aos sistemas protegidos das montadoras do grupo Stellantis, como Fiat, Jeep, Peugeot, Citroën, RAM e Chrysler. O scanner 919 Dtea Pro oferece diagnóstico profissional multimarcas com ampla cobertura de veículos nacionais e importados, realizando leitura e apagamento de falhas, testes ativos, codificações, adaptações e f...",
    features: [
      "Leitura e apagamento de códigos de falha",
      "Diagnóstico completo multimarcas",
      "Testes ativos e bidirecionais",
      "Funções especiais avançadas",
      "Reset de óleo",
      "Sangria ABS"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0041" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 7590.00,
    defaultDiscount: 1610.00,
    finalPrice: 5980.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202605141723462591919_e_sgw_1.png?v=1778790523",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-tpms-crt-511s-v2-launch",
    code: "FT260301",
    name: "SCANNER TPMS CRT 511 LAUNCH - NEW",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: FT260301 • Original Forta Tech",
    description: "O Creader TPMS 511S V2 Launch é uma ferramenta profissional e independente para diagnóstico, ativação, reaprendizado e programação de sensores TPMS. Desenvolvido para oficinas, autocenters e borracharias, oferece suporte para mais de 98% dos veículos do mercado, tornando o serviço de monitoramento da pressão dos pneus mais rápido, preciso e rentável. Com sistema Android, tela de 5”, Wi-Fi, bateria de 6.000 mAh e memória de 2 + 32 GB, o equipamento permite ler informações c...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "FT260301" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 3248.00,
    defaultDiscount: 1348.00,
    finalPrice: 1900.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202607170908232838v2_02.png?v=1784290207",
    selected: false,
    quantity: 1
  },
  {
    id: "crt-711-launch",
    code: "L00711",
    name: "CRT 711 LAUNCH",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: L00711 • Original Forta Tech",
    description: "A melhor opção para empresas de pneus Como uma ferramenta profissional de diagnóstico de TPMS, o CRT 711 é capaz de ler, aprender e programar os sensores LAUNCH, bem como a ativação da ID do sensor pelos sinais de RF. Funções do TPMS Ferramenta de diagnóstico e TPMS sem fio baseada em Android. Ativa, lê e reaprende todos os sensores conhecidos de 315MHz/433MHz. A correspondência de TPMS pela porta OBD é suportada com etapas de aprendizado imediatas. Manual e porta OBD reap...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00711" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 8567.04,
    defaultDiscount: 0.00,
    finalPrice: 8567.04,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202502191343348261launch-crt711_3.png?v=1739985125",
    selected: false,
    quantity: 1
  },
  {
    id: "geradora-de-fumaca-para-deteccao-de-vazamentos-launch-sld-501-turbo",
    code: "L00501",
    name: "GERADORA DE FUMACA PARA DETECCAO DE VAZAMENTOS LAUNCH SLD-501 TURBO",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00501 • Original Forta Tech",
    description: "Apresentamos o inovador Detector de Vazamento de Fumaça Lançamento SLD-501 , uma ferramenta essencial para diagnósticos precisos e rápidos em oficinas automotivas. Projetado para detectar uma vasta gama de problemas em veículos, desde sistemas turbo até sistemas de evaporação, este equipamento robusto e versátil é uma adição indispensável para aumentar a eficiência e a precisão dos serviços automotivos. Características Principais: Eficiência Máxima : Reduz significativamen...",
    features: [
      "Eficiência Máxima : Reduz significativamente o custo do trabalho e aumenta a renda por serviço com diagnósticos rápidos e precisos.",
      "Flexibilidade Avançada : Equipado com mangueira de fumaça e cabos de energia destacáveis, adaptando-se facilmente a diferentes configurações de oficina.",
      "Ciclo de Trabalho Inteligente : Inclui um controlador de ciclo de trabalho de 5 minutos com um único botão de controle, simplificando o processo de teste.",
      "Adaptabilidade Universal : Vem com um cone adaptador universal, capaz de se ajustar à maioria das entradas e saídas de veículos.",
      "Medição Precisa : Conta com um manômetro e um medidor de fluxo ajustável, garantindo um diagnóstico imediato e preciso do estado do vazamento.",
      "Compressor de Ar Integrado : Possui um compressor de ar com uma taxa de fluxo de até 10L/M, adequado para modelos Turbo e EVAP."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00501" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 3989.00,
    defaultDiscount: 0.00,
    finalPrice: 3989.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202410251333479786detector_de_vazamento-lado_dbe10aee-9c1f-4c82-9ca5-a42c4d8297d0.png?v=1787761351",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-pro-se-x431-ts-gun-4-valvulas-tpms",
    code: "CBO0026",
    name: "Combo PRO SE + X431 TS Gun + 4 Válvulas TPMS",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: CBO0026 • Original Forta Tech",
    description: "Combo Profissional X-431 PRO SE + TS Gun + 4 Válvulas TPMS Diagnóstico completo e calibragem de pneus em um só pacote Aumente a eficiência da sua oficina com um combo completo e inteligente. O Scanner Automotivo Launch X-431 PRO SE já é referência em diagnósticos avançados. Agora, aliado à TS Gun – pistola de reprogramação e leitura TPMS – e um kit com 4 válvulas universais , você tem nas mãos uma solução completa para diagnóstico veicular e manutenção do sistema de monito...",
    features: [
      "Diagnóstico completo em centenas de montadoras",
      "Funções avançadas: reset, programação, codificação, testes ativos e bidirecionais",
      "Atualização online e suporte em português",
      "Equipamento homologado pela Launch Brasil",
      "Ativação, leitura e clonagem de sensores TPMS",
      "Reprogramação de sensores universais Launch"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0026" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 13499.00,
    defaultDiscount: 0.00,
    finalPrice: 13499.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202507041433008648pro-sets-gunsgw_bccd8e7b-939d-4704-846c-bf3c66fc9d7d.png?v=1789047169",
    selected: false,
    quantity: 1
  },
  {
    id: "x431-pro-3-link",
    code: "L00369EX",
    name: "X431 PRO 3 LINK",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00369EX • Original Forta Tech",
    description: "O Launch X431 PRO3 LINK é equipado com o SmartLink C V2.0 (VCI), oferecendo modo de diagnóstico duplo : Diagnóstico local via cabo (OBDII/DB15) Diagnóstico remoto inteligente via Bluetooth/Wi-Fi Conta com cobertura completa de sistemas (OE-Level) para veículos de passeio e comerciais leves, sendo compatível com mais de 110 fabricantes dos mercados dos EUA, Ásia e Europa. Funções completas: Leitura e limpeza de DTCs (códigos de falha) Transmissão de dados ao vivo Controle b...",
    features: [
      "Diagnóstico local via cabo (OBDII/DB15)",
      "Diagnóstico remoto inteligente via Bluetooth/Wi-Fi",
      "Leitura e limpeza de DTCs (códigos de falha)",
      "Transmissão de dados ao vivo",
      "Controle bidirecional",
      "Codificação (coding) avançada"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00369EX" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 19990.00,
    defaultDiscount: 2000.00,
    finalPrice: 17990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202507031453408039pro3-link.png?v=1787755176",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-itpms-para-x-431-10-valvulas",
    code: "CBO0040",
    name: "Scanner ITPMS Para X-431 + 10 Válvulas",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: CBO0040 • Original Forta Tech",
    description: "O Combo Scanner iTPMS para X-431 + 10 Válvulas TPMS é a solução completa para oficinas e autocenters que buscam profissionalizar os serviços de pneus e sistemas de monitoramento de pressão. Este combo oferece uma combinação ideal de diagnóstico eletrônico e reposição de componentes, permitindo um atendimento mais rápido, eficiente e lucrativo. O que inclui: Scanner iTPMS para X-431: Equipamento dedicado para diagnóstico e programação de sensores TPMS. Compatível com a linh...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0040" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 5321.40,
    defaultDiscount: 2331.40,
    finalPrice: 2990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/ITPMS-_VALVULAS.png?v=1770210370",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-tpms-profissional-x-431-pro-se-i-tpms-valvulas-tpms-10-un",
    code: "CBO0039",
    name: "Combo TPMS Profissional – X-431 PRO SE + I-TPMS + Válvulas TPMS (10 un.)",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: CBO0039 • Original Forta Tech",
    description: "O Combo TPMS Profissional Launch foi desenvolvido para oficinas e autocenters que desejam profissionalizar os serviços de pneus, sensores TPMS e manutenção preventiva, reunindo diagnóstico eletrônico, programação de sensores e componentes físicos em uma única solução. Este combo integra o X-431 PRO SE, o módulo Launch I-TPMS e um kit com 10 válvulas TPMS metálicas LTR-03, permitindo que a oficina execute desde o diagnóstico até a substituição e reaprendizagem dos sensores,...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0039" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 15301.00,
    defaultDiscount: 3311.00,
    finalPrice: 11990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202601301156244124pro_se_itpms.png?v=1789048302",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-profissional-de-imobilizador-x-431-pro-se-xprog-3-key-programmer-licenca-immo",
    code: "CBO0038",
    name: "Combo Profissional de Imobilizador – X-431 PRO SE + XPROG 3 + Key Programmer + Licença IMMO",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0038 • Original Forta Tech",
    description: "Combo Profissional de Imobilizador – X-431 PRO SE + XPROG 3 + Key Programmer + Licença IMMO O Combo Profissional de Imobilizador Launch foi desenvolvido para oficinas e centros técnicos que desejam atuar em um nível avançado de serviços de chaves, imobilizador e segurança veicular, reunindo em um único pacote hardware, software e licenciamento oficial para operações profissionais. Este combo integra quatro soluções complementares da Launch, criando um ecossistema completo ...",
    features: [
      "Integra scanner, hardware dedicado e software oficial",
      "Amplia o portfólio de serviços da oficina",
      "Reduz retrabalho e dependência de terceiros",
      "Eleva o nível técnico e a credibilidade do negócio",
      "Ideal para profissionais que já dominam diagnóstico automotivo"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0038" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 26223.90,
    defaultDiscount: 8233.90,
    finalPrice: 17990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/scanner_pro_se_immo_copiar.png?v=1789998910",
    selected: false,
    quantity: 1
  },
  {
    id: "licenca-para-software-adicional-imobobilizador-immo-pad-e-immo-pro",
    code: "LIC-431IMMO-SRV",
    name: "Licença para software adicional imobilizador IMMO PAD e IMMO PRO",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: LIC-431IMMO-SRV • Original Forta Tech",
    description: "A licença para software adicional de imobilizador amplia os recursos dos equipamentos compatíveis Launch X-431 IMMO PAD e IMMO PRO , adicionando funções avançadas para diagnóstico e programação de sistemas de imobilização. Com a ativação do pacote IMMO, o equipamento pode oferecer suporte a funções como programação e casamento de chaves, leitura de senhas, adaptação de imobilizadores e clonagem de ECU , conforme a cobertura disponível para cada marca e modelo de veículo. C...",
    features: [
      "Adquira a licença de ativação do software IMMO, conforme o período de validade contratado.",
      "Acesse o menu Software Store (Mall) no seu equipamento Launch compatível.",
      "Localize e selecione o pacote de software IMMO .",
      "Insira o código PIN de ativação fornecido.",
      "Conclua a ativação online e faça o download/atualização do pacote de software."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "LIC-431IMMO-SRV" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 7856.07,
    defaultDiscount: 4106.07,
    finalPrice: 3750.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/LICENCA-IMMO.png?v=1789583667",
    selected: false,
    quantity: 1
  },
  {
    id: "x-431-key-programmer",
    code: "L00437",
    name: "X-431 Key Programmer",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00437 • Original Forta Tech",
    description: "O X-431 Key Programmer é um programador de chaves desenvolvido para trabalhar em conjunto com scanners de diagnóstico da linha LAUNCH X-431, permitindo leitura, gravação e programação de informações de chaves automotivas de forma prática e eficiente. O equipamento é compatível com chaves inteligentes universais, controles remotos universais e transponders, oferecendo uma solução versátil para oficinas, chaveiros automotivos e profissionais que realizam serviços de programa...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00437" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 810.00,
    defaultDiscount: 37.00,
    finalPrice: 773.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/KEY_PROG.png?v=1738872866",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-profissional-launch-919-dtea-pro-limpeza-de-bicos-injetores-cnc-603",
    code: "CBO0037",
    name: "Combo Profissional – Launch 919 DTEA PRO + Limpeza de Bicos Injetores CNC 603",
    category: "Limpeza de Bicos & Injeção",
    categoryKey: "injetores",
    tagline: "Eficiência, Diagnóstico Preciso e Limpeza Profunda do Sistema de Injeção",
    badge: "Código: CBO0037 • Original Forta Tech",
    description: "O Combo Launch 919 DTEA PRO + CNC 603 foi criado para oficinas que desejam diagnosticar com precisão e executar o serviço com eficiência, unindo duas soluções essenciais para o dia a dia automotivo: diagnóstico eletrônico profissional e limpeza de bicos injetores. O Launch 919 DTEA PRO permite identificar falhas com rapidez, analisar dados em tempo real, executar funções especiais e gerar laudos DTEA, agregando credibilidade ao diagnóstico e facilitando a aprovação de serv...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0037" },
      { label: "Categoria", value: "Limpeza de Bicos & Injeção" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 9584.00,
    defaultDiscount: 2094.00,
    finalPrice: 7490.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202601301055486608cnc_919.png?v=1789409984",
    selected: false,
    quantity: 1
  },
  {
    id: "x431-pad-v-link-smartlink-v4-0",
    code: "L00357EX",
    name: "X431 PAD V LINK SMARTLINK V4.0",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00357EX • Original Forta Tech",
    description: "O Launch X-431 PAD V LINK é uma ferramenta de diagnóstico premium , desenvolvida para profissionais que desejam ir além do diagnóstico convencional e atuar em um nível próximo ao padrão OE (Original Equipment) . Trata-se de uma solução moderna, robusta e altamente tecnológica, indicada para oficinas avançadas, centros técnicos e profissionais especializados. Com cobertura de mais de 110 marcas , o PAD V LINK reúne todas as funcionalidades consagradas da plataforma X-431 — ...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00357EX" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 23900.00,
    defaultDiscount: 4910.00,
    finalPrice: 18990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202602021115484338padv-smart.png?v=1789051020",
    selected: false,
    quantity: 1
  },
  {
    id: "crp-123s-hd",
    code: "L001060",
    name: "CRP 123S HD",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L001060 • Original Forta Tech",
    description: "O LAUNCH CRP 123S HD é um scanner de diagnóstico portátil voltado para veículos diesel pesados , como caminhões, ônibus e veículos comerciais. É indicado para oficinas de linha pesada, frotistas e mecânicos que precisam ler e apagar falhas com rapidez, sem depender de equipamentos de bancada. Com ele, o técnico conecta o scanner ao veículo, identifica os códigos de falha, consulta os dados em tempo real e confirma o reparo antes de liberar o caminhão. Isso reduz o tempo de...",
    features: [
      "Leitura e apagamento de códigos de falha (DTC)",
      "Leitura de dados em tempo real dos sistemas do veículo"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L001060" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 3990.00,
    defaultDiscount: 700.00,
    finalPrice: 3290.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202607171046026736crp123shd_02.png?v=1789043017",
    selected: false,
    quantity: 1
  },
  {
    id: "multimetro-mtm100",
    code: "L001063",
    name: "MULTIMETRO MTM100",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L001063 • Original Forta Tech",
    description: "O Launch MTM-100 é um multímetro automotivo versátil, desenvolvido para diagnósticos elétricos precisos em veículos modernos. Com medição True RMS, funções avançadas de teste e display digital de alta resolução, o equipamento oferece mais confiabilidade, segurança e praticidade para técnicos, oficinas e profissionais de diagnóstico automotivo. Ideal para análise de circuitos, sensores, atuadores, baterias e sistemas elétricos, o MTM-100 permite medir tensão, corrente, resi...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L001063" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 600.00,
    defaultDiscount: 201.00,
    finalPrice: 399.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202607161315595759mtm_01.png?v=1787751798",
    selected: false,
    quantity: 1
  },
  {
    id: "creader-professional-129s-mt",
    code: "L001061",
    name: "CRP 129S Launch Para Motocicletas",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L001061 • Original Forta Tech",
    description: "O Launch CRP 129S BIKE é um scanner desenvolvido especialmente para diagnóstico eletrônico de motocicletas, ideal para oficinas, mecânicos e centros de serviço especializados em motos que desejam realizar diagnósticos mais rápidos, precisos e profissionais. Com ampla cobertura de marcas e modelos de motocicletas, o equipamento permite identificar falhas eletrônicas, acompanhar parâmetros em tempo real e auxiliar na manutenção preventiva e corretiva. É uma solução prática p...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L001061" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 4990.00,
    defaultDiscount: 600.00,
    finalPrice: 4390.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202608251150181368crp129sbike_02.png?v=1787675766",
    selected: false,
    quantity: 1
  },
  {
    id: "licenciamento-de-uso-adas",
    code: "LIC-ADAS-SRV",
    name: "Licenciamento de uso ADAS",
    category: "Sistemas ADAS & Calibração",
    categoryKey: "adas",
    tagline: "Calibração Avançada de Sistemas de Assistência ao Condutor",
    badge: "Código: LIC-ADAS-SRV • Original Forta Tech",
    description: "A Licença ADAS (Estático) Launch é a solução ideal para oficinas que desejam oferecer calibração precisa e confiável dos sistemas de Assistência ao Condutor (ADAS) em veículos modernos. Essa licença, quando adicionada aos scanners Launch, proporciona a calibração estática de sensores e câmeras, essenciais para garantir a segurança e o funcionamento perfeito dos sistemas de assistência ao condutor. Compatível com os scanners Launch X-431 PRO, PRO SE, PAD V, PAD VII e modelo...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "LIC-ADAS-SRV" },
      { label: "Categoria", value: "Sistemas ADAS & Calibração" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 8500.00,
    defaultDiscount: 0.00,
    finalPrice: 8500.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202602041001344411adas_gabarito.png?v=1775063445",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-pro-se-adas-dinamico-e-estatico",
    code: "CBO0034",
    name: "Scanner PRO SE ADAS (Dinâmico e estático)",
    category: "Sistemas ADAS & Calibração",
    categoryKey: "adas",
    tagline: "Calibração Avançada de Sistemas de Assistência ao Condutor",
    badge: "Código: CBO0034 • Original Forta Tech",
    description: "O X-431 PRO SE ADAS une o diagnóstico completo de um dos scanners mais vendidos da Launch à função de calibração dos sistemas de assistência ao condutor (ADAS). É a solução para oficinas, funilarias e autocenters que precisam recalibrar câmeras e radares após alinhamento, troca de para-brisa, reparo de colisão ou substituição de sensores, sem depender de concessionária. Calibração ADAS dinâmica e estática Dinâmica: o procedimento é feito com o veículo em movimento, guiado ...",
    features: [
      "Dinâmica: o procedimento é feito com o veículo em movimento, guiado passo a passo pelo scanner, que acompanha o aprendizado do sistema em tempo real.",
      "Estática: feita com o veículo parado na oficina, usando painéis-alvo e refletores posicionados conforme as medidas indicadas pelo software.",
      "Atende sistemas como alerta de saída de faixa (LDW), piloto automático adaptativo (ACC), alerta de colisão traseira (RCW), câmera de visão 360° (AVM), monitoramento de ponto cego (BSD) e visão noturna (NVS).",
      "Cobertura de mais de 98% dos veículos do mercado.",
      "Leitura e apagamento de códigos de falha, leitura de parâmetros em tempo real, testes de atuadores, codificação e adaptações.",
      "Funções especiais de serviço para o dia a dia da oficina."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0034" },
      { label: "Categoria", value: "Sistemas ADAS & Calibração" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 18480.00,
    defaultDiscount: 4590.00,
    finalPrice: 13890.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/PROSE.png?v=1791979122",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-scope-profissional-x-431-pro-se-osciloscopio-o2-2",
    code: "CBO0035",
    name: "Scanner Scope Profissional X-431 Pro SE + Osciloscópio O2-2",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0035 • Original Forta Tech",
    description: "Combo Profissional – Launch X-431 PRO SE + Osciloscópio Launch O2-2 O Combo Launch X-431 PRO SE + Osciloscópio Launch O2-2 foi criado para oficinas que querem dar um salto de nível no diagnóstico, indo além do “apagar falha” e entregando um serviço mais preciso, profissional e confiável. É a combinação ideal para quem atende veículos modernos e precisa resolver falhas elétricas que scanners comuns nem sempre conseguem concluir com segurança. O X-431 PRO SE é um scanner pro...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0035" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 18359.00,
    defaultDiscount: 7459.00,
    finalPrice: 10900.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202608281638242462scope-2-2.png?v=1787945988",
    selected: false,
    quantity: 1
  },
  {
    id: "licenca-anual-sfd-vw-audi-para-linha_x_431-lic_sfd_x431",
    code: "LIC_SFD_X431",
    name: "LICENCA ANUAL SFD VW AUDI PARA LINHA_X_431 (LIC_SFD_X431)",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: LIC_SFD_X431 • Original Forta Tech",
    description: "LICENÇA ANUAL SFD VW/AUDI PARA LINHA X-431 Desbloqueie o acesso completo aos veículos Volkswagen e Audi com total segurança. Com a Licença Anual SFD da Launch, você libera as funções protegidas pelos novos módulos de segurança implementados nas linhas VW e Audi , conhecidas como SFD (Schutz Fahrzeug Diagnose) . Funções avançadas liberadas: Reset de luzes de serviço Acesso a unidades de controle restritas Programações e adaptações Testes bidirecionais e codificações Por que...",
    features: [
      "Reset de luzes de serviço",
      "Acesso a unidades de controle restritas",
      "Programações e adaptações",
      "Testes bidirecionais e codificações"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "LIC_SFD_X431" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 1791.00,
    defaultDiscount: 1.00,
    finalPrice: 1790.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/SFD_GABARITO_62800e86-a361-40b6-980a-6fdbdbdba3c9.png?v=1769026451",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-x-431-pro-se-launch-bst-860-testador-de-bateria-c-impressora",
    code: "CBO0028",
    name: "Combo X-431 Pro SE Launch + BST 860 Testador de Bateria c/ impressora",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0028 • Original Forta Tech",
    description: "Combo X-431 Pro SE Launch + Testador de Bateria BST 860S com Impressora Potencialize o atendimento da sua oficina com o Combo X-431 Pro SE Launch + Testador de Bateria BST 860S com Impressora. O X-431 Pro SE Launch é um scanner automotivo de alta performance, ideal para diagnósticos completos em uma ampla variedade de veículos. Com ele, você pode realizar testes avançados, reset de luzes de serviço, calibrações e outras funções essenciais com total precisão. O Testador de ...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0028" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 11970.00,
    defaultDiscount: 0.00,
    finalPrice: 11970.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202508081415074089pro_se_bst860s.png?v=1758200788",
    selected: false,
    quantity: 1
  },
  {
    id: "atualizacao-de-software-x431-pro1s-scanpad-gt-12-meses",
    code: "LIC-UPDAPRO-SRV",
    name: "Atualização/ Licença Software X431 PRO SE / SCANPAD / GT - 12 Meses",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: LIC-UPDAPRO-SRV • Original Forta Tech",
    description: "Atualização de Software X431 PRO1S / SCANPAD / GT - 12 Meses A atualização de software para os modelos X431 PRO1S, SCANPAD e GT garante que seus scanners estejam sempre equipados com as últimas inovações tecnológicas. Com essa atualização, você mantém seus equipamentos funcionando com o máximo de desempenho, aproveitando todos os recursos mais recentes disponíveis no mercado automotivo. Benefícios e Vantagens: Compatibilidade Ampliada – Inclusão de novos modelos de veículo...",
    features: [
      "Compatibilidade Ampliada – Inclusão de novos modelos de veículos e protocolos de comunicação, aumentando a cobertura de diagnósticos.",
      "Correções e Melhorias – Soluções para erros anteriores e otimização do desempenho, oferecendo maior estabilidade e rapidez no diagnóstico.",
      "Novas Funções de Diagnóstico – Acesso a recursos avançados, como códigos de falhas mais detalhados e funções de manutenção, tornando o trabalho mais preciso.",
      "Manutenção de Alta Performance – A atualização mantém seu equipamento sempre atualizado com as tendências do mercado, garantindo a longevidade do investimento.",
      "Suporte Atualizado – Acesso a material de apoio e suporte técnico, além de treinamento sobre novos recursos e funcionalidades."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "LIC-UPDAPRO-SRV" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 4000.00,
    defaultDiscount: 1010.00,
    finalPrice: 2990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/ATUALI_PRO_1S.png?v=1738853885",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-pro-se-vsp600",
    code: "CBO0016",
    name: "Combo PRO SE + VSP600",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0016 • Original Forta Tech",
    description: "Combo Scanner Automotivo Launch X431 PRO SE + Câmera de Inspeção Diagnóstico completo com tecnologia profissional! O X431 PRO SE acessa todos os sistemas do veículo (motor, ABS, airbag, câmbio, etc.) e realiza funções avançadas como reset de serviço, codificação e calibrações. Acompanha câmera de inspeção para visualização em áreas de difícil acesso, ideal para inspeções visuais rápidas e precisas. ? Scanner profissional completo ? Leitura de todos os módulos do veículo ? ...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0016" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 10299.00,
    defaultDiscount: 0.00,
    finalPrice: 10299.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202503071055260670cbo0016.png?v=1776867969",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-sgw-sfd",
    code: "CBO0031",
    name: "Combo SGW + SFD",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: CBO0031 • Original Forta Tech",
    description: "Licença SFD (Security Feature Diagnostic) Desbloqueia acesso total para veículos do grupo VW, Audi, Skoda e Seat Permite substituição e codificação de módulos com segurança Licença SGW (Security Gateway) Desbloqueia o acesso a veículos Fiat, Jeep, Chrysler, Dodge, RAM e Alfa Romeo Necessária para efetuar resets, testes de atuadores e codificações em veículos com gateway de segurança",
    features: [
      "Licença SFD (Security Feature Diagnostic) Desbloqueia acesso total para veículos do grupo VW, Audi, Skoda e Seat",
      "Permite substituição e codificação de módulos com segurança",
      "Licença SGW (Security Gateway) Desbloqueia o acesso a veículos Fiat, Jeep, Chrysler, Dodge, RAM e Alfa Romeo",
      "Necessária para efetuar resets, testes de atuadores e codificações em veículos com gateway de segurança"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0031" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 2480.00,
    defaultDiscount: 300.00,
    finalPrice: 2180.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202511121107144924licencas_sdw_sfd.png?v=1784721690",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-tpms-tsgun-launch-para-x431-pro1sv-4-0-ou-modelos-acima",
    code: "L00122",
    name: "Scanner I-tpms Launch para X431 Pro1sv.4.0 ou modelo superior",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: L00122 • Original Forta Tech",
    description: "O Launch I-TPMS é um módulo avançado desenvolvido para realizar diagnóstico, programação e reaprendizagem de sensores TPMS, atendendo desde oficinas profissionais até autocenters que desejam elevar o nível dos serviços de pneus e segurança veicular. O grande diferencial do I-TPMS é sua dupla compatibilidade: Pode ser utilizado integrado aos scanners X-431 (PRO1S v4.0 ou superior) Pode ser usado diretamente no smartphone, através do aplicativo Launch TPMS Isso torna o equip...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00122" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 2549.00,
    defaultDiscount: 800.00,
    finalPrice: 1749.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/I-TPMS_CAIXA_1.png?v=1770210370",
    selected: false,
    quantity: 1
  },
  {
    id: "desmontadora-de-pneus-forta-tech-302-vermelha",
    code: "DIN005EX",
    name: "Desmontadora de pneus Forta Tech 302 vermelha",
    category: "Balanceadoras & Desmontadoras",
    categoryKey: "balanceadoras",
    tagline: "Alta Performance, Precisão e Agilidade para Rodas e Pneus",
    badge: "Código: DIN005EX • Original Forta Tech",
    description: "A desmontadora de rodas D302 oferece recursos que irão encantar o operador e trazer mais produtividade no seu dia a dia. Com torre pneumática basculante e estrutura de aço duas vezes mais reforçada, este equipamento consegue trabalhar de forma contínua e com pneus maiores. Você ainda pode acoplar um braço auxiliar deslizante para ganhar desempenho e trabalhar com pneus Run Flat. O braço auxiliar é vendido separadamente. Se você procura por um produto robusto, econômico e p...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "DIN005EX" },
      { label: "Categoria", value: "Balanceadoras & Desmontadoras" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 21927.73,
    defaultDiscount: 0.00,
    finalPrice: 21927.73,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202501310856303611desmontadora_de_pneus_d302.png?v=1787750364",
    selected: false,
    quantity: 1
  },
  {
    id: "leitor-infravermelho-tit-202",
    code: "L00195",
    name: "Leitor infravermelho TIT-202",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00195 • Original Forta Tech",
    description: "Câmara de imagem térmica com tecnologia avançada de infravermelhos. Utilizando a tecnologia avançada de infravermelhos, a TIT-202 pode converter a informação da radiação em imagem, e apresenta-se claramente no ecrã a cores. Reflete o defeito ligeiro como uma pequena diferença de temperatura que o dispositivo de diagnóstico não consegue detectar. Caraterísticas: Pode ser utilizado em qualquer área de um veículo para captar facilmente a imagem IR e detectar as áreas de difíc...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00195" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 9379.00,
    defaultDiscount: 0.00,
    finalPrice: 9379.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/termometro.png?v=1738868247",
    selected: false,
    quantity: 1
  },
  {
    id: "licenca-anual-sgw-stellantis-via-america-para-linha-x-431",
    code: "LIC_SGW_US_X431",
    name: "Licença Anual Sgw Stellantis Para Linha X-431",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: LIC_SGW_US_X431 • Original Forta Tech",
    description: "A Licença SGW Stellantis é essencial para realizar diagnósticos completos em veículos do grupo Stellantis , que inclui marcas como Fiat, Jeep, Chrysler, Dodge e RAM . Esses veículos possuem o sistema de segurança SGW (Security Gateway) , que limita o acesso dos scanners às centrais eletrônicas. Sem a liberação, diversas funções ficam bloqueadas. Com a licença ativa, você garante acesso total aos sistemas do veículo , permitindo diagnósticos mais completos e profissionais. ...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "LIC_SGW_US_X431" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 1290.00,
    defaultDiscount: 600.00,
    finalPrice: 690.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/SGW_GABARITO_e44e1144-dc52-4bb6-b7fd-82c34fb54905.png?v=1769026452",
    selected: false,
    quantity: 1
  },
  {
    id: "camera-de-inspecao-endoscopio-com-cabo-flexivel-e-duas-cameras-smartsafe",
    code: "L00202",
    name: "Câmera de inspeção – endoscópio com cabo flexível e duas câmeras SmartSafe",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00202 • Original Forta Tech",
    description: "A câmera de inspeção SmartSafe com duas câmeras é um endoscópio automotivo profissional para ver o interior de componentes de difícil acesso, como motores, câmbios, cabeçotes e dutos, sem precisar desmontar. O diferencial é a câmera dupla : a lente frontal mostra o que está à frente do cabo e a lateral mostra as paredes internas, o que facilita enxergar desgaste, carbonização e contaminação em cilindros e válvulas. O cabo flexível alcança espaços estreitos e a iluminação L...",
    features: [
      "Duas câmeras integradas, frontal e lateral",
      "Iluminação LED com brilho ajustável",
      "Cabo flexível para áreas de difícil acesso",
      "Tela colorida de alta definição",
      "Registro de fotos e vídeos, com armazenamento interno e saída USB",
      "Bateria recarregável"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00202" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 729.00,
    defaultDiscount: 269.00,
    finalPrice: 460.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202511101652000120camera_de_inspecao_-_endoscopio_com_cabo_flexivel_e_duas_camerassmartsafe_1a384aac-3ac6-4378-9211-df8373ed16e9.png?v=1772646269",
    selected: false,
    quantity: 1
  },
  {
    id: "carregador-e-estabilizador-de-carga-pfp-150-p-programacao-de-bateria-220v-launc",
    code: "L00350",
    name: "CARREGADOR E ESTABILIZADOR DE CARGA PFP-150 P/ PROGRAMACAO DE BATERIA 220V LAUNC",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00350 • Original Forta Tech",
    description: "Carregador Profissional de Bateria Launch PFP-150 — Potência, Precisão e Segurança em um Só Equipamento O Launch PFP-150 é um carregador e fonte de alimentação profissional de 150A , desenvolvido para atender os padrões mais exigentes de oficinas, concessionárias e centros de diagnóstico automotivo . Projetado e fabricado na Itália , o PFP-150 é reconhecido mundialmente como o melhor suporte de energia OEM do mercado, garantindo tensão estável e corrente controlada durante...",
    features: [
      "Fonte de alimentação estabilizada : mantém a tensão constante durante atualizações e programações, evitando falhas e danos à ECU.",
      "Carregamento inteligente de baterias : reconhece automaticamente o tipo de bateria (AGM, GEL, LÍTIO, CHUMBO-ÁCIDO, etc.) e ajusta o ciclo de carga ideal.",
      "Modo de recuperação : recupera baterias profundamente descarregadas com segurança e controle total da corrente.",
      "Modo Showroom / Exposição : mantém o veículo energizado por longos períodos sem sobreaquecimento, ideal para concessionárias e feiras.",
      "Modo Diagnóstico / Oficina : fornece energia contínua e estável durante testes com scanner e programação.",
      "Tensão de entrada: 230 V"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00350" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 9397.00,
    defaultDiscount: 1407.00,
    finalPrice: 7990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202411041138246737pfp-150.png?v=1787754729",
    selected: false,
    quantity: 1
  },
  {
    id: "capa-protetora-contra-poeira-cat-501",
    code: "L00128",
    name: "CAPA PROTETORA CONTRA POEIRA CAT 501",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: L00128 • Original Forta Tech",
    description: "Capa Protetora para Máquina CAT 501S – Proteção e Durabilidade Mantenha sua máquina CAT 501S protegida contra poeira, sujeira e danos com nossa capa protetora de alta qualidade. Desenvolvida para garantir a longevidade e funcionalidade do seu equipamento, a capa é feita com material resistente e tropicalizado , ideal para as condições do mercado brasileiro. Com um design sob medida , ela oferece encaixe perfeito para a máquina, além de ser fácil de colocar e remover, mante...",
    features: [
      "Material resistente e durável , ideal para proteger contra poeira e sujeira;",
      "Ajuste perfeito para a máquina CAT 501S ;",
      "Facilidade de uso , com abertura prática para cobrir e descobrir o equipamento;",
      "Design compacto e funcional , sem comprometer a mobilidade da máquina;",
      "Proteção extra para conservar o bom estado do equipamento e garantir sua durabilidade."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00128" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 350.00,
    defaultDiscount: 190.00,
    finalPrice: 160.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202511041602315090capa_cat_01.png?v=1789477274",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-137-m-benz-7gdct-automatizada",
    code: "137KIT",
    name: "Adaptador ATF – Kit 137 Mercedes-Benz A200 (Transmissão Automatizada 7GDCT / 724.0)",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 137KIT • Original Forta Tech",
    description: "Adaptador ATF – Kit 137 Mercedes-Benz A200 (Transmissão Automatizada 7GDCT / 724.0) O Kit 137 foi desenvolvido especificamente para transmissões automatizadas 7GDCT – 724.0 da Mercedes-Benz A200 , garantindo vedação precisa , fluxo correto do fluido e segurança total durante o processo de troca de fluido ATF. Nosso departamento de engenharia no Brasil atua continuamente no desenvolvimento e aprimoramento de adaptadores exclusivos , adequados à realidade e aos modelos prese...",
    features: [
      "Aplicação: Mercedes-Benz A200 – Transmissão 7GDCT (724.0)",
      "Compatível com máquinas de troca de fluido ATF",
      "Engenharia brasileira com foco em precisão e durabilidade",
      "???? Produção local e suporte técnico especializado"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "137KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 669.00,
    defaultDiscount: 0.00,
    finalPrice: 669.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202410301009201094adaptador_atf_-_kit_137.png?v=1787767328",
    selected: false,
    quantity: 1
  },
  {
    id: "kit-de-cabos-para-carros-eletricos-scanners-launch-overseas-301190852",
    code: "L00385",
    name: "KIT DE CABOS PARA CARROS ELETRICOS SCANNERS LAUNCH OVERSEAS (301190852)",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Solução Homologada para Diagnóstico e Manutenção de Veículos Elétricos e Híbridos",
    badge: "Código: L00385 • Original Forta Tech",
    description: "kit de cabos para linha EV compativel com scanner que possuem smartlink como VCI. O Kit de Atualização de Diagnóstico de Baterias LAUNCH New Energy inclui cabos de teste de baterias para diversas marcas de veículos. O software de diagnóstico de baterias e alguns softwares de diagnóstico para veículos de novas energias podem ser ativados e baixados com o cartão de ativação incluso.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00385" },
      { label: "Categoria", value: "Veículos Híbridos & Elétricos (VHE)" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 6900.00,
    defaultDiscount: 0.00,
    finalPrice: 6900.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202609101006346430kit_de_cabos.png?v=1789045619",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-cnc-603-creader-elite-926",
    code: "CBO0030",
    name: "Combo CNC 603 + Creader Elite 926",
    category: "Limpeza de Bicos & Injeção",
    categoryKey: "injetores",
    tagline: "Eficiência, Diagnóstico Preciso e Limpeza Profunda do Sistema de Injeção",
    badge: "Código: CBO0030 • Original Forta Tech",
    description: "Combo SmartSafe CNC603 + Launch Creader 926 Limpeza de bicos e diagnóstico rápido — a dupla que todo mecânico precisa. O Combo SmartSafe CNC603 + Launch Creader 926 combina dois equipamentos essenciais para elevar a produtividade e a qualidade dos serviços na sua oficina: limpeza profissional de injetores e diagnóstico eletrônico completo. SmartSafe CNC603 – Limpeza e teste de injetores A CNC603 é a máquina ideal para quem busca precisão e praticidade. Com sistema ultrassô...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0030" },
      { label: "Categoria", value: "Limpeza de Bicos & Injeção" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 4220.00,
    defaultDiscount: 0.00,
    finalPrice: 4220.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202510221419480472cnc_603_creader_926_1.png?v=1778591428",
    selected: false,
    quantity: 1
  },
  {
    id: "fio-de-conexao-pulso-1-kit-06-unid",
    code: "ECM008",
    name: "Fio de Conexão Pulso 1 (Kit com 6 Unidades)",
    category: "Limpeza de Bicos & Injeção",
    categoryKey: "injetores",
    tagline: "Eficiência, Diagnóstico Preciso e Limpeza Profunda do Sistema de Injeção",
    badge: "Código: ECM008 • Original Forta Tech",
    description: "Fio de Conexão Pulso 1 (Kit com 6 Unidades) Kit original de cabos de pulso compatível com a máquina ECM-X6 da Forta Tech , utilizado para conectar os injetores durante os testes e simulações de funcionamento. Garante comunicação estável, leitura precisa e maior confiabilidade nos resultados de diagnóstico e limpeza. ? Compatível com ECM-X6 ? Conexão rápida e segura ? Alta durabilidade e precisão nos pulsos ? Kit com 6 cabos individuais",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "ECM008" },
      { label: "Categoria", value: "Limpeza de Bicos & Injeção" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 266.00,
    defaultDiscount: 0.00,
    finalPrice: 266.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202510211549311034ecm.png?v=1787755885",
    selected: false,
    quantity: 1
  },
  {
    id: "camera-de-inspecao-hd-launch-vsp-600",
    code: "00042",
    name: "Câmera de inspeção HD Launch VSP-600",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: 00042 • Original Forta Tech",
    description: "Câmera de Inspeção HD LAUNCH VSP-600 - Visualização e Captura em Locais de Difícil Acesso com Tecnologia de Ponta Descubra a precisão e eficiência da Câmera de Inspeção HD LAUNCH VSP-600, sua nova ferramenta essencial para inspeções técnicas em ambientes industriais, automotivos e muito mais. Com capacidade para capturar vídeos e imagens em alta definição, esta câmera oferece uma solução prática para visualizar áreas que antes eram inacessíveis.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "00042" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 739.00,
    defaultDiscount: 254.00,
    finalPrice: 485.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/vsp600-1.png?v=1789133245",
    selected: false,
    quantity: 1
  },
  {
    id: "xprog-3-para-imobilizador-para-pad-iii-v-vii-pro5-pro1sv5-0",
    code: "L00119",
    name: "XPROG 3 PARA IMOBILIZADOR PARA PAD III/V/VII/PRO5/PRO1SV5.0",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00119 • Original Forta Tech",
    description: "1. Compatível com scanners de diagnóstico da série X-431, o X-PROG 3 permite a leitura/gravação de EEPROM, MCU integrado e chips BMW CAS4+/FEM, chaves infravermelhas Mercedes-Benz, geração de chaves especiais, leitura do código INS do motor BMW. 2. Marcas suportadas: VW, AUDI, SKODA, SEAT, BMW, MERCEDES-BENZ, TOYOTA, etc. Mais modelos continuam a ser atualizados. 3. Sistemas suportados: Transmissão Automática, Sistema de Instrumentos, CAS, Sistema de Corpo, Sistema de Bloq...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00119" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 7650.00,
    defaultDiscount: 1160.00,
    finalPrice: 6490.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202609141542210152202410251018468698x-431_xprog_-frente.png?v=1789411583",
    selected: false,
    quantity: 1
  },
  {
    id: "atualizacao-de-software-alinhadora-forta-tec",
    code: "LIC-ALINHADORA",
    name: "Atualização De Software Alinhadora Forta Tech",
    category: "Undercar & Alinhamento 3D",
    categoryKey: "undercar",
    tagline: "Precisão Tridimensional e Produtividade para o Centro Automotivo",
    badge: "Código: LIC-ALINHADORA • Original Forta Tech",
    description: "Atualização de Software alinhadora 3D FORTA TECH ADVANCED",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "LIC-ALINHADORA" },
      { label: "Categoria", value: "Undercar & Alinhamento 3D" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 1300.00,
    defaultDiscount: 0.00,
    finalPrice: 1300.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202509291822531560lic-alinhadora.png?v=1759181028",
    selected: false,
    quantity: 1
  },
  {
    id: "x431-immo-pro-com-xprog3-launch",
    code: "L00126EX",
    name: "X431 IMMO PRO COM XPROG3 LAUNCH",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00126EX • Original Forta Tech",
    description: "Diagnóstico Inteligente 1. O diagnóstico inteligente inclui leitura/limpeza de DTCs, streaming de dados ao vivo, etc. 2. Suporta protocolos de comunicação CAN FD e DoIP*. 3. 10 funções de serviço avançadas. 4. Relatório de diagnóstico pré-varredura e pós-varredura. 5. Diagnóstico sem fio e com fio. 6. One-stop Info Center inclui informações sobre reparos de veículos e atualizações mais recentes. 7. Apoie a revisão do histórico de diagnóstico. Vantagens 1. Suporta substitui...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00126EX" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 14990.00,
    defaultDiscount: 3000.00,
    finalPrice: 11990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202410251611135905immo-frente.png?v=1775759633",
    selected: false,
    quantity: 1
  },
  {
    id: "conjunto-de-conectores-para-scanner-de-diag-veiculos-obdi-e-outros-301180930",
    code: "L00209",
    name: "Conjunto de conectores para scanner de diag veículos OBDI e outros",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00209 • Original Forta Tech",
    description: "A Maleta de Conectores OBDI é o kit indispensável para profissionais da reparação automotiva que atuam em veículos mais antigos ou importados que ainda utilizam protocolos de diagnóstico pré-OBDII. Composta por uma variedade de conectores originais de fábrica, a maleta permite a comunicação direta entre o scanner automotivo e a ECU do veículo , garantindo acesso a falhas, leitura de parâmetros e execução de testes de diagnóstico que não seriam possíveis apenas com o conect...",
    features: [
      "Ampla compatibilidade : cobre diversas marcas e modelos equipados com sistemas OBDI.",
      "Kit completo : contém os conectores mais utilizados no mercado, organizados em maleta rígida para facilitar o transporte e armazenamento.",
      "Qualidade profissional : cabos e conectores resistentes, projetados para uso intensivo em oficinas.",
      "Facilidade de uso : identificação clara de cada adaptador, agilizando o trabalho do reparador.",
      "Integração total : compatível com scanners automotivos Launch (como X-431 PRO SE, PAD VII, PAD IX e outros modelos), além de suportar diversas funções de leitura e programação permitidas pelo veículo.",
      "Permite atender veículos mais antigos sem perda de faturamento."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00209" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 2089.00,
    defaultDiscount: 0.00,
    finalPrice: 2089.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202509011719480845maleta_obdi_1.png?v=1781726483",
    selected: false,
    quantity: 1
  },
  {
    id: "kit-de-valvulas-tpms-10-unidades",
    code: "CBO0002",
    name: "Kit de Válvulas TPMS - 10 unidades",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: CBO0002 • Original Forta Tech",
    description: "Válvula programável compatível com sistemas TPMS, projetada para reposição profissional. Possui sensores 2 em 1 de 315 MHz e 433 MHz, vida útil elevada e chip de nível automotivo. Sensor TPMS programável e universal.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0002" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 2290.00,
    defaultDiscount: 0.00,
    finalPrice: 2290.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202501161428456673valvulas10.png?v=1755633214",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-alinhadora-essence-scanner-919-dtea-pro",
    code: "CBO0024",
    name: "Combo Alinhadora Essence + SCANNER 919 DTEA PRO",
    category: "Undercar & Alinhamento 3D",
    categoryKey: "undercar",
    tagline: "Precisão Tridimensional e Produtividade para o Centro Automotivo",
    badge: "Código: CBO0024 • Original Forta Tech",
    description: "O Combo Alinhadora Essence + Launch 919 DTEA PRO foi desenvolvido para oficinas que desejam unir diagnóstico eletrônico avançado com alinhamento automotivo profissional, criando um fluxo de serviço mais completo, técnico e rentável. A Alinhadora Essence oferece precisão no alinhamento de direção, contribuindo diretamente para a segurança, estabilidade e desempenho do veículo. Já o Launch 919 DTEA PRO complementa o serviço com diagnóstico eletrônico avançado, leitura de fal...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0024" },
      { label: "Categoria", value: "Undercar & Alinhamento 3D" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 52468.00,
    defaultDiscount: 10568.00,
    finalPrice: 41900.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202608311707224427kit-essense919.png?v=1788206892",
    selected: false,
    quantity: 1
  },
  {
    id: "x-431-b-kit-cabo-adaptador-para-caminhoes",
    code: "L00384",
    name: "X-431 B KIT CABO ADAPTADOR PARA CAMINHOES",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: L00384 • Original Forta Tech",
    description: "A maleta inclui todos os conectores obd mais comuns para uso com máquinas agrícolas, industriais, comercial, etc. para que você possa entregar um diagnóstico completo aos seus clientes. Também dentro você encontrará um código de ativação para liberar o software de veículo pesado em seu x-431, onde conterá diversas montadora do mundo todo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00384" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 12000.00,
    defaultDiscount: 3350.00,
    finalPrice: 8650.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202505061751458430x-431-b-kit.png?v=1789061734",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-com-10-cartoes-de-analise-cromatografica-de-fluidos-vital-fluids",
    code: "CBO0019",
    name: "Combo com 10 Cartões de Análise Cromatográfica De Fluidos - Vital Fluids",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: CBO0019 • Original Forta Tech",
    description: "Solução oficial Forta Tech de alta tecnologia e confiabilidade operacional, projetada para elevar a produtividade e a precisão técnica do seu centro automotivo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0019" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 299.00,
    defaultDiscount: 0.00,
    finalPrice: 299.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202503251357095494fluidos_1.png?v=1742933617",
    selected: false,
    quantity: 1
  },
  {
    id: "combo-com-50-cartoes-de-analise-cromatografica-de-fluidos-vital-fluids",
    code: "CBO0021",
    name: "Combo com 50 Cartões de Análise Cromatográfica De Fluidos - Vital Fluids",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: CBO0021 • Original Forta Tech",
    description: "Solução oficial Forta Tech de alta tecnologia e confiabilidade operacional, projetada para elevar a produtividade e a precisão técnica do seu centro automotivo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "CBO0021" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 1890.00,
    defaultDiscount: 0.00,
    finalPrice: 1890.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202503251654531455fluidos_1.png?v=1742933263",
    selected: false,
    quantity: 1
  },
  {
    id: "x431-immo-pad-com-xprog3-launch",
    code: "L00359EX",
    name: "X431 IMMO PAD COM XPROG3 LAUNCH",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00359EX • Original Forta Tech",
    description: "Launch X-431 IMMO Pad All-In-One Ferramenta de programação de chave de diagnóstico de carro. Principais Benefícios para sua Empresa: Mais serviços, mais faturamento: Realize programação e clonagem de ECUs, leitura e gravação de EEPROM e MCU, e substituição de módulos anti-roubo de diversas marcas. Atendimento mais rápido e assertivo: O sistema baseado em Android 7.1 garante agilidade e facilidade de navegação, otimizando o tempo da equipe técnica. Tecnologia de ponta para ...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00359EX" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 31200.00,
    defaultDiscount: 6210.00,
    finalPrice: 24990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202609101106153657capa.png?v=1789049237",
    selected: false,
    quantity: 1
  },
  {
    id: "maquina-de-limpeza-de-bico-cnc-603-lite",
    code: "L00452",
    name: "Máquina De Limpeza De Bico CNC 603 Lite",
    category: "Limpeza de Bicos & Injeção",
    categoryKey: "injetores",
    tagline: "Eficiência, Diagnóstico Preciso e Limpeza Profunda do Sistema de Injeção",
    badge: "Código: L00452 • Original Forta Tech",
    description: "Por que investir no CNC603 LITE? Limpeza Ultrassônica Profunda – Realiza a limpeza simultânea de múltiplos injetores através de ondas ultrassônicas, removendo de forma eficaz depósitos de carbono e outras impurezas, restaurando o desempenho do motor e reduzindo consumo de combustível. Teste de Alta Precisão – Simula condições reais de funcionamento do motor, permitindo a verificação da pulverização, vedação e vazão dos injetores, automatizando e garantindo um diagnóstico c...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00452" },
      { label: "Categoria", value: "Limpeza de Bicos & Injeção" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 4299.00,
    defaultDiscount: 1309.00,
    finalPrice: 2990.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202607171013034122cnc_603_02.png?v=1789042903",
    selected: false,
    quantity: 1
  },
  {
    id: "analise-cromatografica-de-fluidos-vital-fluids",
    code: "RX001",
    name: "Análise Cromatográfica De Fluidos - Cartão Vital Fluids",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: RX001 • Original Forta Tech",
    description: "O cartão Vital Fluids faz a análise cromatográfica de fluidos automotivos na própria oficina, na frente do cliente. Com uma gota do fluido, o cartão mostra em poucos instantes a condição real do óleo, ATF ou outro fluido, e indica se a troca é necessária. Como usar Retire uma amostra do fluido. Aplique uma gota na área de teste do cartão. Aguarde o resultado. Compare com a escala do cartão e mostre ao cliente. Vantagens para a oficina Diagnóstico preciso e imediato: avalie...",
    features: [
      "Retire uma amostra do fluido.",
      "Aplique uma gota na área de teste do cartão.",
      "Aguarde o resultado.",
      "Compare com a escala do cartão e mostre ao cliente.",
      "Diagnóstico preciso e imediato: avalie a condição do fluido em minutos e evite trocas desnecessárias.",
      "Mais lucro e credibilidade: ofereça um serviço transparente e técnico, que aumenta a confiança e a fidelização."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "RX001" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 31.40,
    defaultDiscount: 0.00,
    finalPrice: 31.40,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202501171438447162fluidos_2.png?v=1737135576",
    selected: false,
    quantity: 1
  },
  {
    id: "camera-de-inspecao-endoscopio-com-cabo-flexivel-launch-vsp-808",
    code: "L00194",
    name: "Câmera De Inspeção - Endoscópio Com Cabo Flexível Launch VSP 808",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00194 • Original Forta Tech",
    description: "Câmera de Inspeção Launch VSP 808 - Endoscópio com Cabo Flexível A Câmera de Inspeção Launch VSP 808 é a solução perfeita para profissionais que precisam realizar inspeções precisas em áreas de difícil acesso, sem comprometer a qualidade do diagnóstico. Com um cabo flexível e alta resolução , essa ferramenta oferece visibilidade clara e detalhada , tornando o diagnóstico mais rápido, preciso e eficiente. Vantagens e Benefícios: Inspeção de Alta Precisão : Com resolução de ...",
    features: [
      "Inspeção de Alta Precisão : Com resolução de imagem de alta qualidade, permite visualizar os detalhes mais sutis em áreas complexas, como motores, sistemas de escape e outros componentes automotivos.",
      "Cabo Flexível e Durável : O cabo flexível permite alcançar os locais mais apertados e difíceis de acessar, oferecendo maior versatilidade nas inspeções.",
      "Diagnóstico Rápido e Eficiente : Evita desmontagens desnecessárias, reduzindo o tempo de trabalho e aumentando a produtividade .",
      "Facilidade de Uso : Sua interface intuitiva e design ergonômico facilitam o manuseio, garantindo uma experiência de uso simples e confortável .",
      "Versatilidade para Diversas Aplicações : Ideal para oficinas automotivas, mecânicos e eletricistas, a VSP 808 é também útil para inspeções em áreas industriais, sistemas hidráulicos, eletrônicos e mais."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00194" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 1699.00,
    defaultDiscount: 100.00,
    finalPrice: 1599.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/VSV_808.png?v=1769025888",
    selected: false,
    quantity: 1
  },
  {
    id: "atualizacao-de-software-x431-pad-vii-12-meses",
    code: "LIC-UPDAPAV-SRV",
    name: "Atualização De Software X431 PAD VII - 12 Meses",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: LIC-UPDAPAV-SRV • Original Forta Tech",
    description: "Atualização de Software X431 PAD VII - 12 Meses A atualização de software para o X431 PAD VII garante que seu scanner automotivo continue operando com o máximo de desempenho e precisão. Ao realizar essa atualização, você assegura que seu equipamento esteja sempre preparado para diagnosticar veículos com as últimas tecnologias e protocolos. Benefícios e Vantagens: Expansão de Compatibilidade – Inclusão de novos modelos de veículos e protocolos de comunicação, ampliando a ca...",
    features: [
      "Expansão de Compatibilidade – Inclusão de novos modelos de veículos e protocolos de comunicação, ampliando a capacidade de diagnóstico.",
      "Correções de Erros e Melhorias de Performance – Correção de falhas anteriores e aprimoramento da estabilidade, garantindo um desempenho mais rápido e confiável.",
      "Funções Avançadas de Diagnóstico – Acesso a novas funções, como testes automáticos e diagnósticos mais detalhados, proporcionando uma análise mais precisa.",
      "Atualizações Contínuas – Manutenção constante do software com melhorias e novas ferramentas, mantendo o seu equipamento alinhado às tendências do setor automotivo.",
      "Apoio Técnico e Material Educacional – Suporte contínuo e materiais de treinamento sobre novas funções e atualizações, para otimizar o uso do equipamento."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "LIC-UPDAPAV-SRV" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 10000.00,
    defaultDiscount: 3250.00,
    finalPrice: 6750.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/ATUALI_PAD_VII.png?v=1738861691",
    selected: false,
    quantity: 1
  },
  {
    id: "atualizacao-de-software-x431-pad-iii-pad-v-12-meses",
    code: "LIC-UPDAPIII-SR",
    name: "Atualização De Software X431 PAD III, PAD V - 12 Meses",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: LIC-UPDAPIII-SR • Original Forta Tech",
    description: "Atualização de Software X431 PAD III e PAD V - 12 Meses A atualização de software para os modelos X431 PAD III e PAD V garante que seus scanners automotivos estejam sempre atualizados com as últimas funções e melhorias. Ao realizar essa atualização, você assegura que seu equipamento acompanhe as mudanças tecnológicas e ofereça diagnósticos mais rápidos, precisos e eficientes. Benefícios e Vantagens: Acesso a Novos Modelos de Veículos – Inclusão de novos veículos e protocol...",
    features: [
      "Acesso a Novos Modelos de Veículos – Inclusão de novos veículos e protocolos de comunicação, ampliando as possibilidades de diagnóstico.",
      "Correção de Erros – Correção de bugs e melhorias no desempenho do sistema, garantindo maior estabilidade e confiabilidade.",
      "Funções Avançadas – Novas funções de diagnóstico e serviços, aumentando a versatilidade e precisão do scanner.",
      "Atualização Contínua – Mantém o equipamento alinhado às novas tecnologias do mercado automotivo, garantindo sua longevidade e relevância.",
      "Suporte ao Cliente – Acesso a suporte técnico e materiais de treinamento atualizados."
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "LIC-UPDAPIII-SR" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 6000.00,
    defaultDiscount: 1510.00,
    finalPrice: 4490.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/ATUALI_PAD_III.png?v=1738853751",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-124-audi-q3-a-partir-de-2013",
    code: "124KIT",
    name: "Adaptador 124 Audi Q3 A Partir De 2013",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 124KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões DSG - DQ500 aplicação: Audi Q3 , Q5 , Q7 2013 - Automatizadas Úmidas . O kit compõe os adaptadores 124. Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nen...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "124KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 469.00,
    defaultDiscount: 0.00,
    finalPrice: 469.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_13.png?v=1763748377",
    selected: false,
    quantity: 1
  },
  {
    id: "launch-creader-elite-926",
    code: "L00926EX",
    name: "CReader Elite 926 LAUNCH",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00926EX • Original Forta Tech",
    description: "O Creader Elite 926 da Launch é uma ferramenta de diagnóstico automotivo compacta, projetada para atender entusiastas automotivos que buscam se aventurar no mundo do diagnóstico, tendo uma eficiência e na identificação de falhas veiculares. Benefícios do Creader Elite 926: Sistema Operacional Android: Com uma interface moderna e intuitiva, baseada em Android, o Creader Elite 905 oferece uma navegação ágil e fácil acesso às funções de diagnóstico. Reconhecimento Automático ...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00926EX" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 699.00,
    defaultDiscount: 200.00,
    finalPrice: 499.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/CREADER_ECIN.png?v=1768828812",
    selected: false,
    quantity: 1
  },
  {
    id: "scanner-para-diagnostico-de-baterias-de-veiculos-eletricos-ismart-evp01",
    code: "L00240",
    name: "Scanner Para diagnóstico De Baterias De Veículos Elétricos - ISMART EVP01",
    category: "Veículos Híbridos & Elétricos (VHE)",
    categoryKey: "vhe",
    tagline: "Solução Homologada para Diagnóstico e Manutenção de Veículos Elétricos e Híbridos",
    badge: "Código: L00240 • Original Forta Tech",
    description: "iSmartEV P01 - A Solução Inovadora para Diagnóstico de Veículos Elétricos e Híbridos O iSmartEV P01 é uma ferramenta de diagnóstico inovadora e essencial para a manutenção de veículos elétricos e híbridos . Desenvolvido para acompanhar a eletrificação da frota automotiva , ele oferece diagnósticos rápidos e precisos com funções como leitura e apagamento de códigos de erro, monitoramento de dados em tempo real e testes de ação, tornando-o a solução completa para quem trabal...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00240" },
      { label: "Categoria", value: "Veículos Híbridos & Elétricos (VHE)" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 32509.00,
    defaultDiscount: 0.00,
    finalPrice: 32509.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/ISMART_EVP01.png?v=1739213250",
    selected: false,
    quantity: 1
  },
  {
    id: "s2-2-sensorbox-para-x431-pro1s-versao-5-0-e-modelos-acima",
    code: "00041",
    name: "S2-2 SENSORBOX PARA X431 PRO1S VERSAO 5.0 E MODELOS ACIMA",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: 00041 • Original Forta Tech",
    description: "A S2-2 Sensorbox é o acessório essencial para ampliar o poder de diagnóstico do seu scanner automotivo. Compatível com X431 PRO1S versão 5.0 e modelos superiores , ela permite simular sinais de sensores automotivos, facilitando testes avançados e identificação precisa de falhas. Ideal para oficinas que trabalham com diagnóstico eletrônico, a Sensorbox S2-2 ajuda o profissional a testar chicotes, módulos e centrais sem a necessidade de substituir peças desnecessariamente. M...",
    features: [
      "Compatível com X431 PRO1S versão 5.0 e superiores",
      "Simulação de sinais de sensores automotivos",
      "Auxilia na identificação de falhas elétricas e eletrônicas",
      "Ideal para testes de chicotes e módulos",
      "Equipamento robusto e de uso profissional",
      "Fácil integração com scanner Launch"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "00041" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 5003.00,
    defaultDiscount: 15.00,
    finalPrice: 4988.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202411060950393017sensorbox-4.png?v=1782159484",
    selected: false,
    quantity: 1
  },
  {
    id: "camera-de-inspecao-endoscopio-com-cabo-flexivel-launch-vsp-800",
    code: "L00193",
    name: "Câmera de inspeção – endoscópio com cabo flexível Launch VSP 800",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00193 • Original Forta Tech",
    description: "Câmera de Inspeção Digital LAUNCH VSP-800 Videoscope – Ferramenta Essencial para Diagnóstico Automotivo Conheça a Câmera de Inspeção Digital LAUNCH VSP-800, uma ferramenta avançada projetada para profissionais que necessitam de precisão nos diagnósticos de áreas inacessíveis em veículos. Com funcionalidades de alta tecnologia, a VSP-800 é a escolha perfeita para inspeções detalhadas, proporcionando uma visão clara e detalhada das estruturas internas dos automóveis.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00193" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 979.00,
    defaultDiscount: 180.00,
    finalPrice: 799.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/202411041322176372vsp-800-frente.png?v=1787762522",
    selected: false,
    quantity: 1
  },
  {
    id: "sensor-tpms-universal-e-programavel-launch-ltr-03-rf",
    code: "L00208",
    name: "Sensor TPMS Universal e Programável LAUNCH LTR-03 RF",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: L00208 • Original Forta Tech",
    description: "Sensor TPMS LAUNCH LTR-03 RF, a mais recente inovação em tecnologia de monitoramento de pressão de pneus. Desenvolvido e produzido pela LAUNCH, este sensor universal e programável oferece uma solução completa para qualquer centro automotivo que realize serviços de substituição ou manutenção de TPMS.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00208" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 300.00,
    defaultDiscount: 151.00,
    finalPrice: 149.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/VALVULA_CAIXA.png?v=1770210370",
    selected: false,
    quantity: 1
  },
  {
    id: "testador-de-baterias-profissional-launch-bst-880d",
    code: "L00880",
    name: "Testador de Baterias Profissional LAUNCH BST-880D",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00880 • Original Forta Tech",
    description: "Introduzindo o LAUNCH BST-880D, um testador de baterias revolucionário que combina diagnóstico automotivo avançado com teste de bateria preciso. Ideal para profissionais do setor automotivo, este equipamento robusto suporta uma ampla gama de modelos de baterias e realiza diagnósticos complexos em sistemas essenciais do veículo como ABS, SRS, motor e transmissão automática. Equipado com funções de serviço avançadas e atualização contínua via WIFI, o BST-880D é a ferramenta ...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00880" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 4372.91,
    defaultDiscount: 0.00,
    finalPrice: 4372.91,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/BST-880.png?v=1738871855",
    selected: false,
    quantity: 1
  },
  {
    id: "tyre-scan-scanner-handheld-para-medicao-de-pneus-p1",
    code: "PUL020",
    name: "Tyre Scan - Scanner Handheld para Medição de Pneus P1",
    category: "Lubrificação & Pneus",
    categoryKey: "lubrificacao",
    tagline: "Tecnologia de Ponta para Medição, Calibração e Monitoramento de Pneus (TPMS)",
    badge: "Código: PUL020 • Original Forta Tech",
    description: "Ofereça serviços para seus clientes através de relatórios técnicos que apontam as causas de desgaste dos pneus, tais como: desgastes contínuos ou desequilibrados no centro, parte interna ou externa dos pneus. Evidencie a vida útil e eficácia dos pneus na frenagem. ESPECIFICAÇÃO • Compacto Semelhante ao tamanho de um smartphone de 6 • Rede de comunicação, Suporte 4G, Wifi / Hot Spot • Detecção de placa Câmera HD com recurso de leitura de placa • Design integrado Tela de toq...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "PUL020" },
      { label: "Categoria", value: "Lubrificação & Pneus" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 20082.51,
    defaultDiscount: 0.00,
    finalPrice: 20082.51,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/tyre-scan.png?v=1789133572",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-144-bmw-x6-mercedes-benz-slk-c350-2006",
    code: "144KIT",
    name: "Adaptador ATF - Kit 144 - BMW X6 / Mercedes Benz SLK, C350 2006",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 144KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões ZF8HP Câmbio Automático de 8 marchas. Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "144KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 389.00,
    defaultDiscount: 0.00,
    finalPrice: 389.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_12.png?v=1763748342",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-142-vw-passat-tsi-2009",
    code: "142KIT",
    name: "Adaptador ATF - Kit 142 - VW Passat TSI 2009",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 142KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões 09G e TF-71SC AT6 aplicação: Passat TSI 2009. O kit compõe os adaptadores 142. Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "142KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 539.00,
    defaultDiscount: 0.00,
    finalPrice: 539.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_11.png?v=1763748308",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-140-civic-turbo-15-cvt",
    code: "140KIT",
    name: "Adaptador ATF - Kit 140 - Civic Turbo 15 CVT",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 140KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões LL-CVT (MCKA) aplicação Civic Turbo. O kit compõe os adaptadores 140. Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "140KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 469.00,
    defaultDiscount: 0.00,
    finalPrice: 469.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_10.png?v=1763748228",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-139-volvo-xc-60-t5",
    code: "139KIT",
    name: "Adaptador ATF - Kit 139 - Volvo XC 60 T5",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 139KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões DSG 6DCT450 - Aplicações Volvo XC 60 T5. O kit compõe os adaptadores 139. Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "139KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 469.00,
    defaultDiscount: 0.00,
    finalPrice: 469.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_9.png?v=1763748129",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-133-dsg-golf-tsfi",
    code: "133KIT",
    name: "Adaptador ATF - Kit 133 - DSG Golf TSFI",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 133KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões DQ 380 e 400 aplicação: DSG Golf TSFI Automatizada Úmida. Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "133KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 519.00,
    defaultDiscount: 0.00,
    finalPrice: 519.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_7.png?v=1763748047",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-131-nissan-versa-march",
    code: "131KIT",
    name: "Adaptador ATF - Kit 131 - Nissan Versa / March",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 131KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões Xtronic CVT - Aplicações Nissan VERSA / MARCH. O kit compõe os adaptadores 131. Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "131KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 449.00,
    defaultDiscount: 0.00,
    finalPrice: 449.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_6.png?v=1763746847",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-128-new-fit-city-hrv",
    code: "128KIT",
    name: "Adaptador ATF - Kit 128 New Fit / City / HRV",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 128KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões CVT GD7A aplicações New Fit / City / HRV . O ki compõe os adaptadores 128 . Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "128KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 449.00,
    defaultDiscount: 0.00,
    finalPrice: 449.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_5.png?v=1763746786",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-127-bmw-540-v8-zf5hp19-bmw-320i-audi-a4",
    code: "127KIT",
    name: "Adaptador ATF - Kit 127 BMW 540 V8 / ZF5HP19 / BMW 320i / AUDI A4",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 127KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões ZF 5HP19 - Aplicação BMW 540 V8 . Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "127KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 239.00,
    defaultDiscount: 0.00,
    finalPrice: 239.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_4.png?v=1763746734",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-126-peugeot-2-0-turbo-novo-citroen-c3-renegade-gasolina-e-flex-1-8-fiat-toro-gasolina-1-8-argo-cronos-1-8",
    code: "126KIT",
    name: "Adaptador ATF - Kit 126 - Peugeot 2.0 Turbo / Novo Citroën C3 / Renegade Gasolina e Flex 1.8 / Fiat Toro Gasolina 1.8 / Argo / Cronos 1.8",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 126KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões AISIN TF-72SC - Aplicações Peugeot 2.0 Turbo / Novo Citroën C3 / Renegade Gasolina e Flex 1.8 / Fiat Toro Gasolina 1.8 / Argo / Cronos 1.8. O kit compõe os adaptadores 126 . Consulte também os kits sugeridos com 12, 24 e 38 adaptadores...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "126KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 379.00,
    defaultDiscount: 0.00,
    finalPrice: 379.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_3.png?v=1763746669",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-123-volvo-serie-xc-ta",
    code: "123KIT",
    name: "Adaptador ATF - Kit 123 - Volvo Série XC TA",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 123KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões AISIN TF -80SC - Aplicações Volvo Série XC TA . Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "123KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 129.00,
    defaultDiscount: 0.00,
    finalPrice: 129.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_890c2b66-8535-45a4-ba91-7eebdcfcc453.png?v=1763746634",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-121-fusion-edge",
    code: "121KIT",
    name: "Adaptador ATF - Kit 121 - Fusion / Edge",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 121KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões 6F35 / 6F50 aplicação Fusion / Edge. Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "121KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 579.00,
    defaultDiscount: 0.00,
    finalPrice: 579.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_42a4a341-edfe-4a28-b3af-89b457c13a73.png?v=1763746595",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-122-toyota-corolla-yaris-jeep-renegade",
    code: "122KIT",
    name: "Adaptador ATF - Kit 122 - Toyota Corolla / Yaris / Jeep Renegade",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 122KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões CVTi-S - Aplicação Toyota Corolla / Yaris. O kit compõe os adaptadores 122 . Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "122KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 389.00,
    defaultDiscount: 0.00,
    finalPrice: 389.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_8.png?v=1763748082",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-119-vw-amarok-2012-modelos-abaixo-de-2012",
    code: "119KIT",
    name: "Adaptador ATF - Kit 119 - VW Amarok 2012 - modelos abaixo de 2012",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 119KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões ZF 8HP45 aplicação: VW Amarok 2012 - modelos abaixo de 2012 . Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "119KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 419.00,
    defaultDiscount: 0.00,
    finalPrice: 419.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_18.png?v=1763749125",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-117-mercedez-benz-classe-c-e-ml-s-durango-v6-2013",
    code: "117KIT",
    name: "Adaptador ATF - Kit 117 - Mercedez Benz Classe C / E / ML / S / Durango V6 2013",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 117KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões 722.3/722.4/722.6 aplicações Mercedez Benz Classe C / E / ML / S / Durango V6 2013 . Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "117KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 59.00,
    defaultDiscount: 0.00,
    finalPrice: 59.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_19.png?v=1763749093",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-110-honda-cvt-accord",
    code: "110KIT",
    name: "Adaptador ATF - Kit 110 - Honda CVT ACCORD",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 110KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões CVT Xtronic JF011-E / JF010-E / SLXA aplicação Honda Accord O Kit compõe os adaptadores 110. Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "110KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 399.00,
    defaultDiscount: 0.00,
    finalPrice: 399.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_16.png?v=1763749045",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-109-nissan-sentra-versa-renault-fluence-mitsubishi-outlander-asx-lancer",
    code: "109KIT",
    name: "Adaptador ATF - Kit 109 - Nissan Sentra / Versa / Renault Fluence / Mitsubishi Outlander / ASX / Lancer",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 109KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões CVT Xtronic JF011-E / JF010-E/ SLXA - Aplicações Nissan Sentra / Versa / Renault Fluence / Mitsubishi / Outlander /ASX/Lancer. O Kit compõe adaptadores 109 . Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficin...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "109KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 909.00,
    defaultDiscount: 0.00,
    finalPrice: 909.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_14.png?v=1763748591",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-atf-kit-107-ford-focus-ecosport",
    code: "107KIT",
    name: "Adaptador ATF - Kit 107 - Ford Focus / Ecosport",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 107KIT • Original Forta Tech",
    description: "Dispomos de um departamento de engenharia no Brasil que desenvolve continuamente os adaptadores para o mercado brasileiro. Somos reconhecidos como a empresa que possui mais adaptadores úteis ou tropicalizados para o Brasil. Para transmissões 4727-E / 6E70 / 6T70 aplicações: Ford Focus / Ecosport . Consulte também os kits sugeridos com 12, 24 e 38 adaptadores para sua oficina ficar mais completa sem necessidade de dispensar nenhum veículo.",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "107KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 159.00,
    defaultDiscount: 0.00,
    finalPrice: 159.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_17.png?v=1763749012",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-102-jetta",
    code: "102KIT",
    name: "ADAPTADOR 102 JETTA",
    category: "Máquinas de ATF & Câmbio",
    categoryKey: "atf",
    tagline: "Gestão Inteligente de Fluidos e Manutenção de Transmissões Automáticas",
    badge: "Código: 102KIT • Original Forta Tech",
    description: "Adaptador ATF para transmissões 09G e AISIN TF-71SC AT6 aplicação: VW Jetta /Golf / Beetle",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "102KIT" },
      { label: "Categoria", value: "Máquinas de ATF & Câmbio" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 489.00,
    defaultDiscount: 0.00,
    finalPrice: 489.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/Prancheta_1_copiar_15.png?v=1763748958",
    selected: false,
    quantity: 1
  },
  {
    id: "adaptador-chrysler-fiat-sgw-12-8",
    code: "L00105",
    name: "Adaptador Chrysler/Fiat SGW 12+8",
    category: "Scanners de Diagnóstico & DTEA",
    categoryKey: "scanners",
    tagline: "Tecnologia Oficial Launch & Forta Tech para Diagnóstico Avançado",
    badge: "Código: L00105 • Original Forta Tech",
    description: "Funciona com os scanners: Autel, Launch, Snap-On, Sun PDL, Napro, Rasther, Raven Multimec 3, Xtool ou todos que possuam os veículos do grupo FCA em seu banco de dados. Cabo especifico para uso em transmissão de dados em SGW (Security Gateway). Comprimento de 35 cm; Verifique as especificações técnicas. Aplicação: Veículos lançados a partir de 2018, e todos fabricados a partir de 2020 no Brasil, do Grupo Fiat Chrysler Automóveis (FCA - FIAT, CHRYSLER, JEEP, DODGE, RAM e Ste...",
    features: [
      "Produto oficial distribuído e garantido pela Forta Tech no Brasil",
      "Alta durabilidade e precisão para uso profissional intensivo em oficinas e centros automotivos",
      "Suporte técnico especializado e pronta disponibilidade de peças e acessórios",
      "Fácil integração à rotina operacional com excelente retorno sobre o investimento"
    ],
    specs: [
      { label: "Código / SKU Oficial", value: "L00105" },
      { label: "Categoria", value: "Scanners de Diagnóstico & DTEA" },
      { label: "Procedência", value: "Oficial Forta Tech / Launch Brasil" },
      { label: "Garantia Oficial", value: "Conforme política de garantia Forta Tech" }
    ],
    defaultPrice: 439.00,
    defaultDiscount: 0.00,
    finalPrice: 439.00,
    image: "https://cdn.shopify.com/s/files/1/0697/8414/2079/files/CABO_12_8.png?v=1738853837",
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
    installmentCustomText: "",
    enableDifal: false,
    difalMode: "added",
    difalValue: 0,
    difalRate: 0,
    difalUF: "",
    difalDesc: "",
    difalShowInTable: false
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