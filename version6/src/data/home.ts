import type { Locale } from "../i18n/config";

export const home = {
  en: {
    hero: {
      eyebrow: "Materials & surface engineering",
      title: "From ceramic feedstocks to particle structure.",
      text: "Research-led work connecting ceramic materials, spray behaviour and microstructure — with a focus on thermal-spray and coating-related applications.",
      note: "Materials. Process. Evidence.",
      panelLabel: "Research focus",
      panelTitle: "A closer look at what shapes a particle.",
      topics: ["Ceramic feedstocks", "Spray behaviour", "Particle microstructure"],
      panelNote: "Thermal spray / TBC-related research"
    },
    capabilities: {
      eyebrow: "Core capabilities",
      title: "Materials knowledge.\nProcess understanding.",
      intro: "Four connected areas of technical work, grounded in characterization and research.",
      items: [
        { title: "Ceramic feedstock engineering", text: "Slurry formulation and porous ceramic microspheres, including HAP and YSZ research systems.", detail: "Formulation / precursor design" },
        { title: "Spray-process characterization", text: "Electrostatic spraying, cone-jet stability and high-speed imaging of atomization regimes.", detail: "Spray behaviour / process analysis" },
        { title: "Particle & microstructure analysis", text: "Particle-size distributions, morphology, pore structure and ceramic microsphere cross-sections.", detail: "Structure / characterization" },
        { title: "Computational workflows", text: "Python-based analysis and materials-modeling tools, supported by engineering CAD workflows.", detail: "Analysis / modeling / engineering" }
      ]
    },
    featured: { eyebrow: "From the notebook", title: "Latest insights", intro: "Research notes and technical perspectives on materials, spray processes and surface engineering." },
    founder: {
      eyebrow: "The researcher behind SV Solutions",
      title: "Technical curiosity.\nA materials foundation.",
      name: "Stepan Kalashnikov",
      role: "Founder · Materials researcher",
      text: "SV Solutions is an early-stage, research-led materials and surface-engineering brand founded by Stepan Kalashnikov. A master's student at Shanghai Jiao Tong University (2024–2027), he studies ceramic microsphere precursor feedstocks for thermal-barrier-coating-related applications.",
      portraitAlt: "Stepan Kalashnikov, founder of SV Solutions"
    },
    cta: { eyebrow: "Start a conversation", title: "A material system.\nA process question.\nA shared research interest.", text: "Introduce the problem, the available evidence and what you would like to understand." }
  },
  zh: {
    hero: {
      eyebrow: "材料与表面工程",
      title: "从陶瓷原料，\n到颗粒结构。",
      text: "以研究为基础，连接陶瓷材料、喷雾行为与微观结构，聚焦热喷涂及涂层相关应用。",
      note: "材料。工艺。证据。",
      panelLabel: "研究方向",
      panelTitle: "深入理解颗粒\n如何形成。",
      topics: ["陶瓷原料", "喷雾行为", "颗粒微结构"],
      panelNote: "热喷涂 / 热障涂层相关研究"
    },
    capabilities: {
      eyebrow: "核心能力",
      title: "理解材料，\n理解工艺。",
      intro: "四个相互关联的技术方向，以表征和研究为基础。",
      items: [
        { title: "陶瓷原料工程", text: "浆料配方与多孔陶瓷微球研究，包括 HAP 与 YSZ 研究体系。", detail: "配方 / 前驱体设计" },
        { title: "喷雾过程表征", text: "静电喷雾、锥射流稳定性，以及雾化模式的高速成像分析。", detail: "喷雾行为 / 工艺分析" },
        { title: "颗粒与微结构分析", text: "粒径分布、形貌、孔结构，以及陶瓷微球截面的制备与表征。", detail: "结构 / 表征" },
        { title: "计算与工程工作流", text: "基于 Python 的分析、材料建模工具及工程 CAD 工作流。", detail: "分析 / 建模 / 工程" }
      ]
    },
    featured: { eyebrow: "研究手记", title: "最新洞见", intro: "关于材料、喷雾工艺与表面工程的研究记录与技术观点。" },
    founder: {
      eyebrow: "SV Solutions 背后的研究者",
      title: "技术探索，\n立足材料。",
      name: "Stepan Kalashnikov（思凡）",
      role: "创始人 · 材料研究者",
      text: "SV Solutions 是由 Stepan Kalashnikov（思凡）创立的早期研究型材料与表面工程品牌。他目前是上海交通大学材料科学与工程硕士研究生（2024–2027），研究面向热障涂层相关应用的陶瓷微球前驱体原料。",
      portraitAlt: "SV Solutions 创始人 Stepan Kalashnikov（思凡）"
    },
    cta: { eyebrow: "开始交流", title: "一个材料体系，\n一个工艺问题，\n一个共同的研究兴趣。", text: "请介绍您的问题、已有证据，以及希望进一步理解的内容。" }
  }
} satisfies Record<Locale, object>;
