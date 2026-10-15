import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { locales, type Locale } from "../../i18n/config";
import { ui } from "../../i18n/ui";
import { pagePath } from "../../i18n/paths";
import { getPublishedInsights } from "../../lib/insights";
import { site } from "@data/site";

export function getStaticPaths() { return locales.map(locale => ({ params: { locale } })); }
export const GET: APIRoute = async ({ params }) => {
  const locale = params.locale as Locale;
  const entries = await getPublishedInsights(locale);
  return rss({
    title: `${site.name} — ${ui[locale].insights.title}`,
    description: ui[locale].insights.intro,
    site: site.url,
    items: entries.map(entry => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.publishedAt,
      link: pagePath(locale, "insights", entry.data.slug),
      categories: [entry.data.type, ...entry.data.tags],
      author: site.founder.name
    })),
    customData: `<language>${locale === "zh" ? "zh-CN" : "en"}</language>`
  });
};
