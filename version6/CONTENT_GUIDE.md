# Editing and publishing

Run all commands from `version6/`. Edit UTF-8 source files, not the generated `dist/` folder. English and Chinese text are maintained independently; the site does not automatically translate them.

## 1. Homepage text

Edit `src/data/home.ts`. The `en` and `zh` objects contain the hero, four capability cards, founder preview and contact CTA. Keep the existing quotes, commas and braces. Use `\n` inside a quoted title to request a line break. UI labels and page metadata are in `src/i18n/ui.ts`.

## 2. About and profile

Edit `src/data/profile.ts`: introduction, research focus, education, experience, publication, tools, languages and future direction. Edit the homepage founder preview separately in `src/data/home.ts` if its summary also needs changing. Keep dates and technical claims factual.

An optional real portrait can be placed at `public/images/stepan-kalashnikov.jpg`. Set `portrait: "/images/stepan-kalashnikov.jpg"` in `src/data/site.ts`. Leave it empty to show no image or placeholder.

## 3. Email and social links

Edit `email` and `social.linkedin` in `src/data/site.ts`. This updates the direct links and form recipient together. The existing Gmail address is retained until you provide another valid mailbox. Set the LinkedIn value to `""` to hide it. Contact-page paragraphs are in `src/data/contact.ts`.

## 4. Add an English Insight

```bash
npm run new:insight -- --lang en --slug ceramic-feedstock-note
```

Open `src/content/insights/en/ceramic-feedstock-note.md`, replace every TODO and review the draft. Alternatively create a `.md` file manually:

```yaml
---
title: "Your reviewed technical title"
slug: ceramic-feedstock-note
locale: en
publishedAt: 2026-10-15
summary: "A short, factual description of the question and scope."
type: research-note
tags: [ceramics, feedstocks]
featured: false
draft: true
---
```

Below the second `---`, write the article using Markdown headings, paragraphs and lists. Leave `draft: true` until you are ready to publish. The example is documentation only, not a published article.

## 5. Add a Chinese Insight

```bash
npm run new:insight -- --lang zh --slug taoci-yuanliao
```

Edit the generated file in `src/content/insights/zh/`. Set `locale: zh` and write the title, summary and body in Chinese. Use a lowercase Latin slug for a predictable URL; the title can contain Chinese. A Chinese article does not need an English counterpart.

## 6. Connect translations

Use the other article's frontmatter `slug`, not its filename or full URL. Add this to the English frontmatter:

```yaml
translations:
  zh: taoci-yuanliao
```

Add the reverse link to the Chinese frontmatter:

```yaml
translations:
  en: ceramic-feedstock-note
```

Both published articles must link to each other; the build reports nonreciprocal links. A missing or draft counterpart is omitted from SEO alternates, and the switcher safely opens that language's Insights index. Remove a translation link if the counterpart has been permanently deleted.

## 7. Images, figures, tables and code

Put real, approved images in `public/images/insights/`. Keep filenames lowercase and compress images. Never add an unpublished industrial result or an image without permission.

For an optional article hero, add:

```yaml
featuredVisual:
  kind: image
  src: /images/insights/particle-section.jpg
  alt: "Describe what the actual image shows."
  caption: "Figure 1. Describe the specimen and imaging conditions."
  credit: "Image credit, if applicable."
```

The file must actually exist. Do not copy this path unchanged unless you have supplied the image. Ordinary images in the body use the same domain-root path:

```md
![A description of the actual figure](/images/insights/particle-section.jpg)
```

For a caption, use HTML inside Markdown (or MDX):

```html
<figure>
  <img src="/images/insights/particle-section.jpg" alt="Describe the actual image" loading="lazy" width="1200" height="800" />
  <figcaption>Figure 1. Conditions, scale and source.</figcaption>
</figure>
```

Use the image's real width and height. Equations can also be supplied as accessible images with a meaningful text alternative. Technical tables and code blocks scroll within the reading column on small screens:

````md
| Parameter | Value | Method |
| --- | --- | --- |
| Your parameter | Your measured value | Your method |

```python
# Your reproducible analysis
```

## References

1. Author, publication, year. [DOI](https://doi.org/your-doi)
````

These are writing patterns, not technical data. Replace them with real reviewed material. `.mdx` is supported for articles requiring Astro/MDX components; use `.md` for normal writing. Do not paste untrusted JavaScript into MDX.

## 8. Drafts, featured posts and dates

- `draft: true`: excluded from pages, lists, RSS and sitemap. Use your editor to review it; the website does not expose a draft URL.
- `draft: false`: included in the next build. Publishing is controlled by this flag, not the date; future dates do not schedule publication.
- `featured: true`: preferred on the homepage. Up to three articles are shown, featured first and newest first within each group. Remaining places use recent published articles.
- `publishedAt: YYYY-MM-DD`: original publication date; required.
- `updatedAt: YYYY-MM-DD`: optional revision date, displayed on the article; cannot precede publication.

Supported `type` values: `research-note`, `technical-note`, `industry-note`, `event-note`, `project-update`, `guide`. Older `exhibition` and `supplier-note` values remain accepted. Types and dates are displayed with localized labels. Tags do not create extra pages.

## 9. Post helper

```bash
npm run new:insight -- --lang en --slug my-title
npm run new:insight -- --lang zh --slug my-chinese-title
npm run new:insight -- --help
```

The helper creates a draft only. It validates the language and slug and refuses to overwrite a file. Slugs must use lowercase letters, numbers and single hyphens. Each language must have unique slugs, even across `.md` and `.mdx` files.

## 10. Preview

```bash
npm ci
npm run dev
```

Use `/en/` or `/zh/` on the address Astro prints. Save a file to update the development page. Check the terminal if a page reports an error. To view the actual production output, run `npm run build` followed by `npm run preview`.

## 11. Build before publishing

```bash
npm run check
npm test
npm run build
```

Fix errors before uploading `dist/`. Empty-content warnings are expected until the first article is added. RSS feeds at `/en/rss.xml` and `/zh/rss.xml` and the sitemap are generated automatically.

## 12. Common mistakes

- Missing the closing frontmatter `---`, a quote or a YAML indentation level.
- Forgetting to change `draft: true` after final review.
- Putting a `zh` article in the `en` folder, or reusing a slug in one language.
- Using an invalid content type or a revision date before publication.
- Linking translations in only one direction.
- Writing `public/images/...` in a URL: the browser path starts with `/images/...`.
- Referring to an image that has not been committed or uploaded.
- Adding private collaboration details, personal contact data not intended for publication, or claims unsupported by evidence.
- Editing `dist/`: the next build replaces it.

See [DEPLOYMENT.md](DEPLOYMENT.md) for the final hosting steps.
