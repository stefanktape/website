/** Shared publication rules for pages, homepage selection, RSS and tests. */
export function publishedInsights(entries, locale) {
  const seen = new Set();
  for (const entry of entries) {
    const key = `${entry.data.locale}/${entry.data.slug}`;
    if (seen.has(key)) throw new Error(`Duplicate Insight route: ${key}`);
    if (!entry.id.startsWith(`${entry.data.locale}/`)) {
      throw new Error(`Insight locale does not match its folder: ${entry.id}`);
    }
    seen.add(key);
  }
  return entries.filter(entry => !entry.data.draft && (!locale || entry.data.locale === locale))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf() || a.data.slug.localeCompare(b.data.slug));
}

export function featuredInsights(entries, count = 3) {
  // Prefer featured posts, then fill remaining places with newest posts.
  return [...entries.filter(entry => entry.data.featured), ...entries.filter(entry => !entry.data.featured)].slice(0, count);
}

export function articleAlternates(entry, published) {
  const alternates = { [entry.data.locale]: entry.data.slug };
  const other = entry.data.locale === "en" ? "zh" : "en";
  const slug = entry.data.translations?.[other];
  // A draft or missing counterpart must never produce a dead public link.
  const counterpart = published.find(item => item.data.locale === other && item.data.slug === slug);
  if (counterpart) {
    if (counterpart.data.translations?.[entry.data.locale] !== entry.data.slug) {
      throw new Error(`Add reciprocal translations for ${entry.id} and ${counterpart.id}`);
    }
    alternates[other] = counterpart.data.slug;
  }
  return alternates;
}
