# Content guide — version 6

This site is intentionally file-based. You do not need a CMS: edit the files below, save them, and rebuild the site. Text files use UTF-8, so Chinese can be entered directly.

## 1. Name, email, social links, location, and portrait

Edit `src/data/site.ts`. Keep the quotes around text. The contact form uses the `email` value. Add a public LinkedIn URL only when you want it shown. The site does **not** publish a phone number.

The supplied portrait was visible in the project brief but was not available as a filesystem file, so it was not copied or reconstructed. To add it:

1. Save the original as `public/images/stepan-kalashnikov.jpg`.
2. In `src/data/site.ts`, change `portrait: ""` to `portrait: "/images/stepan-kalashnikov.jpg"`.

It will appear at a 4:5 crop on the home page. Keep the original safely outside the website too.

## 2. Homepage text and competence areas

Edit `src/i18n/ui.ts`:

- English homepage: the `en` object (`hero`, `competence`, `homeAbout`, and `cta`).
- Chinese homepage: the `zh` object with the same keys.
- The four competence areas are in `competence.items`. Edit the title and text, but keep the array structure.

## 3. About content

Short headings, research focus, and future direction are in `src/i18n/ui.ts` under `about`. Education, experience, publication, tools, and languages are in `src/data/profile.ts`, separated into `en` and `zh`. Update each language independently; no text is translated at runtime.

## 4. English and Chinese Insights

- English: `src/content/insights/en/`
- Chinese: `src/content/insights/zh/`

Each Insight is a Markdown (`.md`) file. The filename can match the slug, for example `electrostatic-spray-regimes.md`. Everything below the second `---` is the article body and supports headings, lists, tables, blockquotes, images, and code blocks.

## 5. Add an English Insight

Create `src/content/insights/en/your-slug.md`. Copy the documentation-only example below. Set `locale: en`, use a unique lowercase hyphenated `slug`, write the body, and leave `draft: true` until it is ready.

## 6. Add a Chinese Insight

Create `src/content/insights/zh/your-chinese-slug.md`. Set `locale: zh`. The English and Chinese slugs may differ. Chinese content is edited independently and does not need an English counterpart.

## 7. Connect English and Chinese translations

Add the counterpart's slug under `translations` in **both** files:

```yaml
translations:
  zh: chinese-article-slug
```

In the Chinese file, use:

```yaml
translations:
  en: english-article-slug
```

If no counterpart exists, omit that key. The language switcher will safely go to the other language's Insights index and indicate that the article translation is unavailable.

## 8. Publish or unpublish

- `draft: true` — excluded from lists, the homepage, and generated article URLs.
- `draft: false` — publicly generated.
- `featured: true` — eligible for the homepage. The homepage shows up to four featured, published items, newest first.

Always run `npm run build` before publishing; an invalid date, type, or frontmatter field will stop the build and point to the problem.

## 9. Insight images

Put public images in `public/images/insights/`. Use clear filenames, compress large photos, and only publish images you are allowed to use. In Markdown:

```md
![Meaningful description of the image](/images/insights/file-name.jpg)
```

The deployment helper automatically prefixes featured-image paths. For ordinary Markdown body images, use the deployed base path when publishing on GitHub Pages (`/website-coat/images/insights/file-name.jpg`), or use a relative URL such as `../../../images/insights/file-name.jpg` if you need the same source to work under different bases.

## 10. Featured visual

It is optional. Omit `featuredVisual` to show no placeholder.

For a real image:

```yaml
featuredVisual:
  kind: image
  src: /images/insights/file-name.jpg
  alt: Precise description for screen-reader users
  caption: Optional factual caption
  credit: Optional photographer or source credit
```

For a CSS summary card suitable for a screenshot:

```yaml
featuredVisual:
  kind: summary-card
  alt: Summary card describing the article
  caption: Optional caption
```

The summary card uses only the title, summary, tags, and optional caption already supplied in frontmatter.

## 11. Add Russian later

1. Add `"ru"` to `locales` and its display name in `src/i18n/config.ts`.
2. Add a complete `ru` translation object in `src/i18n/ui.ts`.
3. Add a `ru` profile in `src/data/profile.ts`.
4. Add `ru` to the content schema's locale enum in `src/content.config.ts`.
5. Create `src/content/insights/ru/` and add `ru?: string` to `translations` in the schema.

The same dynamic page tree will generate Russian routes; do not create a separate `src/pages/ru/` directory.

## 12. Run locally

From the `version6` directory:

```bash
npm install
npm run dev
```

Astro prints the local URL. Because production uses the `/website-coat` base path, open the URL Astro reports with that path.

## 13. Build

```bash
npm run build
```

The static result is written to `dist/`. To deploy at a custom domain root later, set `base: "/"` and update `site` in `astro.config.mjs`.

## Documentation-only example (not published)

This block is intentionally only in this guide. It does not generate a public article.

```md
---
title: "A precise, factual title"
slug: "a-precise-factual-slug"
locale: "en"
publishedAt: 2026-09-25
updatedAt: 2026-09-26
summary: "One or two sentences explaining exactly what the reader will learn."
type: "research-note"
tags: ["YSZ", "feedstocks"]
featured: false
draft: true
translations:
  zh: "counterpart-chinese-slug"
featuredVisual:
  kind: "summary-card"
  alt: "Summary card for this research note"
  caption: "Optional factual caption"
---

## First section

Write the independently edited article here.
```

Allowed types are `research-note`, `technical-note`, `exhibition`, `supplier-note`, and `guide`.
