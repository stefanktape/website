import type { Locale } from "./config";

export const ui = {
  en: {
    meta: { title: "SV Solutions | Materials & Surface Engineering", description: "Research-led materials and surface engineering: ceramic feedstocks, spray-process characterization, particle microstructure and computational workflows." },
    nav: { home: "Home", insights: "Insights", about: "About", contact: "Contact", primary: "Main navigation", footer: "Footer navigation", menu: "Menu", open: "Open navigation", close: "Close navigation", language: "Language", skip: "Skip to content" },
    actions: { explore: "Explore insights", contact: "Contact", all: "All insights", about: "About the founder", email: "Email", linkedin: "LinkedIn", rss: "RSS feed", home: "Back to home" },
    insights: { title: "Insights", eyebrow: "Notes & perspectives", intro: "Research notes, technical explanations and considered observations on materials, spray processes and surface engineering.", emptyTitle: "The next insight starts with a question.", empty: "No articles published yet. Research notes and technical perspectives will appear here when ready.", read: "Read insight", back: "Back to insights", unavailable: "No translation is available for this article. The language switch links to the other language's Insights page.", updated: "Updated", published: "Published", visual: "Technical summary", tags: "Topics" },
    about: { metaTitle: "About | SV Solutions", eyebrow: "About SV Solutions", focus: "Current research focus", education: "Education", experience: "Selected experience", publication: "Selected publication", tools: "Engineering & computational tools", languages: "Languages", future: "Looking ahead", contact: "Discuss a research question", location: "Based in" },
    contact: { metaTitle: "Contact | SV Solutions", eyebrow: "Technical conversations", name: "Name", organization: "Organization", email: "Your email", topic: "Topic", message: "Message / technical question", send: "Prepare email", required: "Required", optional: "Optional", direct: "Email directly" },
    types: { "research-note": "Research note", "technical-note": "Technical note", "industry-note": "Industry note", "event-note": "Event note", "project-update": "Project update", guide: "Guide", exhibition: "Exhibition", "supplier-note": "Supplier note" },
    footer: { line: "Materials & surface engineering", copyright: "SV Solutions", location: "Research-led · Shanghai, China" },
    notFound: { title: "This page is outside the scope.", text: "The address may have changed, or the page is no longer available.", label: "Page not found" }
  },
  zh: {
    meta: { title: "SV Solutions｜材料与表面工程", description: "以研究为基础的材料与表面工程：陶瓷原料、喷雾过程表征、颗粒微结构及计算工作流。" },
    nav: { home: "首页", insights: "洞见", about: "关于", contact: "联系", primary: "主导航", footer: "页脚导航", menu: "菜单", open: "打开导航", close: "关闭导航", language: "语言", skip: "跳至正文" },
    actions: { explore: "浏览洞见", contact: "联系", all: "全部洞见", about: "了解创始人", email: "电子邮箱", linkedin: "领英", rss: "RSS 订阅", home: "返回首页" },
    insights: { title: "洞见", eyebrow: "记录与观点", intro: "关于材料、喷雾工艺与表面工程的研究笔记、技术说明和观察。", emptyTitle: "每一篇洞见，始于一个问题。", empty: "目前尚无已发布文章。研究记录与技术观点将在准备就绪后刊登于此。", read: "阅读洞见", back: "返回洞见", unavailable: "本文暂无翻译。语言切换将前往另一语言的洞见首页。", updated: "更新于", published: "发布于", visual: "技术摘要", tags: "主题" },
    about: { metaTitle: "关于｜SV Solutions", eyebrow: "关于 SV Solutions", focus: "当前研究方向", education: "教育经历", experience: "部分研究与工作经历", publication: "部分论文", tools: "工程与计算工具", languages: "语言", future: "未来方向", contact: "交流研究问题", location: "所在地" },
    contact: { metaTitle: "联系｜SV Solutions", eyebrow: "技术交流", name: "姓名", organization: "机构", email: "您的电子邮箱", topic: "主题", message: "留言 / 技术问题", send: "准备邮件", required: "必填", optional: "选填", direct: "直接发送邮件" },
    types: { "research-note": "研究笔记", "technical-note": "技术说明", "industry-note": "行业观察", "event-note": "活动记录", "project-update": "项目进展", guide: "指南", exhibition: "展会观察", "supplier-note": "供应商笔记" },
    footer: { line: "材料与表面工程", copyright: "SV Solutions", location: "以研究为基础 · 中国上海" },
    notFound: { title: "此页面暂不在范围内。", text: "地址可能已更改，或页面已不可用。", label: "未找到页面" }
  }
} satisfies Record<Locale, object>;
