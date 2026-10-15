import type { Locale } from "../i18n/config";

export const contact = {
  en: {
    title: "Let's talk\nmaterials & processes.",
    intro: "For questions about ceramic feedstocks, spray processes, particle analysis or research collaboration, get in touch directly.",
    note: "An initial conversation can start with the material system, process conditions and the question you are exploring.",
    formTitle: "Prepare an email",
    formNote: "This form prepares a message in your email application. Nothing is submitted to a website server. Review and send the email from your own application."
  },
  zh: {
    title: "聊聊材料，\n聊聊工艺。",
    intro: "如需交流陶瓷原料、喷雾工艺、颗粒分析或研究合作，请直接联系。",
    note: "初次交流可以从材料体系、工艺条件，以及您正在探索的问题开始。",
    formTitle: "准备一封邮件",
    formNote: "此表单会在您的电子邮件应用中准备一封邮件，不会向网站服务器提交数据。请在自己的邮件应用中检查并发送。"
  }
} satisfies Record<Locale, object>;
