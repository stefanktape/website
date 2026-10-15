# SV Solutions — Materials & Surface Engineering

A compact, research-led engineering website for https://svsolutions.pro. English and Chinese share one locale-first page structure: Home, Insights, About and Contact. The founder's background remains factual; there are no invented projects, customers or results.

## Run the site

Use Node.js 24 LTS (see `.nvmrc`) and npm. No credentials, database or external services are required.

```bash
cd version6                 # from the repository root
npm ci                     # install exactly the committed lockfile
npm run dev                # Astro prints the local development address
```

Open `/en/` or `/zh/` on the address Astro prints. The domain root redirects to English. In a restricted cloud home directory, export `ASTRO_TELEMETRY_DISABLED=1` before running Astro. This avoids a telemetry configuration write and does not affect the site.

```bash
npm run check              # strict TypeScript + Astro diagnostics
npm test                   # publication, helper and mailto logic tests
npm run build              # static output in dist/
npm run preview            # serve the production build locally
npm run new:insight -- --lang en --slug spray-process-note
```

## Stack and folders

Astro 5, strict TypeScript, Markdown/MDX content collections, small components, plain CSS and self-hosted Inter. Astro integrations supply MDX, sitemap and RSS; no client framework or CMS is used. Only navigation and email preparation need client JavaScript.

| Location | What to edit |
| --- | --- |
| `src/data/site.ts` | Brand, domain, email, social links, optional logos and portrait |
| `src/data/home.ts` | EN/ZH homepage copy and capabilities |
| `src/data/profile.ts` | EN/ZH About copy, education and research facts |
| `src/data/contact.ts` | EN/ZH contact introductions and email explanation |
| `src/i18n/ui.ts` | Navigation, labels, metadata and content-type translations |
| `src/content/insights/en/`, `zh/` | English and Chinese articles |
| `src/content.config.ts` | Frontmatter validation and supported types |
| `src/pages/[locale]/` | Shared page templates, article routes and RSS |
| `src/components/`, `src/layouts/` | Reusable UI and metadata |
| `src/styles/global.css` | Brand tokens, responsive layout and article styling |
| `public/brand/`, `public/images/` | Static brand assets and real technical images |
| `scripts/new-insight.mjs` | Dependency-free draft creation helper |
| `tests/` | Publication and helper regression tests |
| `dist/` | Generated deployment output; never edit it directly |

`/about/`, `/contact/` and `/insights/` are compatibility redirects to English, not additional navigation sections. Missing pages use the branded `404.html`. The sitemap lists canonical locale pages; each locale has an Insights RSS feed even when empty.

## Before publishing

- Review both languages, especially dates, technical claims, links and contact details.
- Supply final original logo exports when available; the temporary wordmark is intentional.
- Publish only reviewed posts (`draft: false`). An empty Insights section is supported.
- Check article translation links in both directions and image paths beginning `/images/`.
- Run `npm run check`, `npm test` and `npm run build`.
- Preview desktop and mobile navigation and both language switches.
- Deploy only `dist/` with the custom domain and HTTPS configured.

The contact form prepares an email in the visitor's own application. It does not deliver mail through a backend. No new brand mailbox has been assumed.

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md), [BRAND_GUIDE.md](BRAND_GUIDE.md) and [DEPLOYMENT.md](DEPLOYMENT.md) for everyday maintenance.
