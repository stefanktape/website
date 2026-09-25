import type { Locale } from "./config";

const en = {
  meta: { title: "Stepan Kalashnikov | Materials & Surface Engineering", description: "Research notes and technical work on ceramic feedstocks, spray processes, particle structure, and surface engineering." },
  nav: { home: "Home", insights: "Insights", about: "About", contact: "Contact", open: "Open navigation", close: "Close navigation", language: "Language" },
  hero: { eyebrow: "Materials & Surface Engineering · Shanghai", title: "Ceramic feedstocks, spray processes, and thermal-spray research.", text: "Research-led engineering work connecting slurry and powder design, spray behaviour, particle structure, and coating applications.", cta: "Explore insights" },
  competence: { eyebrow: "Technical competence", title: "Research grounded in materials and process evidence", items: [
    { title: "Ceramic feedstock engineering", text: "Porous ceramic microspheres and slurry formulation for coating-related feedstocks, including HAP and YSZ research systems." },
    { title: "Spray-process characterization", text: "Electrostatic spraying, Taylor cone-jet stability, high-speed imaging, and analysis of how process conditions relate to atomization regime." },
    { title: "Particle & microstructure analysis", text: "Particle-size distribution, morphology, pore structure, and preparation and characterization of ceramic microsphere cross-sections." },
    { title: "Computational & engineering tools", text: "Python, VASP, LAMMPS, Gaussian, CATIA and SolidWorks used across materials research and engineering workflows." }
  ]},
  featured: { eyebrow: "Published work", title: "Featured insights", all: "View all insights" },
  homeAbout: { eyebrow: "About", title: "A materials researcher working from feedstock to particle structure.", text: "Stepan Kalashnikov is a Master's student in Materials Science and Engineering at Shanghai Jiao Tong University (2024–2027). His current work examines ceramic microsphere precursor feedstocks for thermal-barrier-coating-related applications.", link: "Read the technical CV" },
  cta: { title: "Have a technical question or shared research interest?", text: "Use the contact page to introduce the material system, process, or question you would like to discuss.", link: "Contact Stepan" },
  insights: { title: "Insights", eyebrow: "Technical publication", intro: "Research notes, technical explanations, exhibition observations, supplier notes, and practical guides.", empty: "No published insights yet. New work will appear here after it has been reviewed and published.", read: "Read insight", back: "Back to insights", unavailable: "This article is not available in the other language. The switcher links to that language's Insights index.", updated: "Updated", visual: "Technical summary" },
  about: { metaTitle: "About | Stepan Kalashnikov", eyebrow: "Technical CV", title: "Stepan Kalashnikov", intro: "Materials Science and Engineering master's student based in Shanghai, working on ceramic feedstocks, spray behaviour, and particle microstructure.", focusTitle: "Current research / technical focus", focus: ["Porous ceramic microspheres and precursor feedstocks for thermal-barrier-coating-related applications", "Electrostatic and air-assisted spraying; high-speed-camera analysis of spraying regimes and Taylor cone-jet stability", "Influence of slurry properties, including viscosity and density, on spraying behaviour", "Particle morphology, size distribution, pore structure, and ceramic microsphere cross-section preparation and characterization", "YSZ-related work, including a confidential industrial collaboration using a PES–NMP–YSZ slurry system"], educationTitle: "Education", experienceTitle: "Professional & research experience", publicationTitle: "Publication", toolsTitle: "Engineering & computational tools", languagesTitle: "Languages", futureTitle: "Future research direction", future: "Planning to continue into doctoral research focused on thermal spray and surface engineering.", contactTitle: "Contact" },
  contact: { metaTitle: "Contact | Stepan Kalashnikov", eyebrow: "Contact", title: "Start a technical conversation", intro: "Share a research interest, material system, spray process, or technical question. This mailto form opens your email application; it does not send data to a third party.", name: "Name", organization: "Organization", email: "Email", topic: "Topic (optional)", message: "Message / technical question", send: "Prepare email", required: "Required" },
  footer: { line: "Materials research · Shanghai, China" }
} as const;

const zh = {
  meta: { title: "Stepan Kalashnikov（思凡）｜材料与表面工程", description: "关于陶瓷原料、喷雾过程、颗粒结构与表面工程的研究记录和技术工作。" },
  nav: { home: "首页", insights: "洞见", about: "关于", contact: "联系", open: "打开导航", close: "关闭导航", language: "语言" },
  hero: { eyebrow: "材料与表面工程 · 上海", title: "陶瓷原料、喷雾过程与热喷涂研究。", text: "以研究为基础，连接浆料与粉体设计、喷雾行为、颗粒结构和涂层应用。", cta: "浏览洞见" },
  competence: { eyebrow: "技术能力", title: "以材料与过程证据为基础的研究", items: [
    { title: "陶瓷原料工程", text: "面向涂层相关原料的多孔陶瓷微球与浆料配方研究，包括 HAP 与 YSZ 研究体系。" },
    { title: "喷雾过程表征", text: "静电喷雾、泰勒锥射流稳定性、高速成像，以及工艺条件与雾化模式关系分析。" },
    { title: "颗粒与微结构分析", text: "粒径分布、形貌、孔结构，以及陶瓷微球截面的制备与表征。" },
    { title: "计算与工程工具", text: "在材料研究与工程工作流程中使用 Python、VASP、LAMMPS、Gaussian、CATIA 和 SolidWorks。" }
  ]},
  featured: { eyebrow: "已发表内容", title: "精选洞见", all: "查看全部洞见" },
  homeAbout: { eyebrow: "关于", title: "从原料到颗粒结构的材料研究者。", text: "Stepan Kalashnikov（思凡）是上海交通大学材料科学与工程专业硕士研究生（2024–2027），目前研究面向热障涂层相关应用的陶瓷微球前驱体原料。", link: "查看技术履历" },
  cta: { title: "有技术问题或共同研究兴趣？", text: "请通过联系页面介绍您希望讨论的材料体系、工艺或问题。", link: "联系 Stepan" },
  insights: { title: "洞见", eyebrow: "技术出版", intro: "研究笔记、技术说明、展会观察、供应商笔记和实用指南。", empty: "目前没有已发布的洞见。新内容经审阅和发布后会显示在这里。", read: "阅读洞见", back: "返回洞见", unavailable: "本文暂无另一语言版本。语言切换将前往对应语言的洞见首页。", updated: "更新于", visual: "技术摘要" },
  about: { metaTitle: "关于 | Stepan Kalashnikov（思凡）", eyebrow: "技术履历", title: "Stepan Kalashnikov（思凡）", intro: "常驻上海的材料科学与工程硕士研究生，研究陶瓷原料、喷雾行为与颗粒微结构。", focusTitle: "当前研究与技术方向", focus: ["用于热障涂层相关应用的多孔陶瓷微球与前驱体原料", "静电喷雾与气辅喷雾；利用高速摄影分析喷雾模式和泰勒锥射流稳定性", "浆料黏度、密度等性质对喷雾行为的影响", "颗粒形貌、粒径分布、孔结构，以及陶瓷微球截面制备与表征", "YSZ 相关工作，包括采用 PES–NMP–YSZ 浆料体系的保密工业合作"], educationTitle: "教育经历", experienceTitle: "职业与研究经历", publicationTitle: "论文", toolsTitle: "工程与计算工具", languagesTitle: "语言", futureTitle: "未来研究方向", future: "计划继续攻读博士学位，研究方向聚焦热喷涂与表面工程。", contactTitle: "联系" },
  contact: { metaTitle: "联系 | Stepan Kalashnikov（思凡）", eyebrow: "联系", title: "开始技术交流", intro: "请介绍您的研究兴趣、材料体系、喷雾工艺或技术问题。此表单通过您的电子邮件应用生成邮件，不会向第三方发送数据。", name: "姓名", organization: "机构", email: "电子邮箱", topic: "主题（可选）", message: "留言 / 技术问题", send: "生成邮件", required: "必填" },
  footer: { line: "材料研究 · 中国上海" }
};

export const ui = { en, zh } as const;
