import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { Locale } from "../i18n/config";
import { publishedInsights, articleAlternates } from "./publishing.mjs";

export async function getPublishedInsights(locale?: Locale): Promise<CollectionEntry<"insights">[]> {
  const entries = await getCollection("insights");
  return publishedInsights(entries, locale);
}

export function getArticleAlternates(entry: CollectionEntry<"insights">, entries: CollectionEntry<"insights">[]): Partial<Record<Locale, string>> {
  return articleAlternates(entry, entries);
}

export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === "zh" ? "zh-CN" : "en-GB", {
    year: "numeric", month: "short", day: "numeric", timeZone: "UTC"
  });
}
