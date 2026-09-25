import type { Locale } from "./config";

export type PageKey = "home" | "insights" | "about" | "contact";

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}` || "/";
}

export function pagePath(locale: Locale, page: PageKey, slug?: string): string {
  const section = page === "home" ? "" : `${page}/`;
  const tail = slug ? `${slug}/` : "";
  return withBase(`/${locale}/${section}${tail}`);
}

export function assetPath(path: string): string {
  return withBase(path);
}
