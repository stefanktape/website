# Deploying svsolutions.pro

This is a static Astro site. The production URL is **https://svsolutions.pro** with base `/`, configured through `src/data/site.ts` and `astro.config.mjs`. Do not configure a repository subdirectory. No backend, database, runtime credentials or server adapter is required.

## Build contract

| Setting | Value |
| --- | --- |
| Project root in this repository | `version6` |
| Node | 24 LTS (`.nvmrc`) |
| Install | `npm ci` |
| Validate | `npm run check && npm test` |
| Build | `npm run build` |
| Publish directory relative to project root | `dist` |
| Publish directory relative to repository root | `version6/dist` |

For a restricted build account, set the non-secret environment variable `ASTRO_TELEMETRY_DISABLED=1`. No site secrets are needed. Run build commands from `version6`, not `ver5` or the repository root.

## Any static hosting provider

1. Configure the project root, Node version and commands above.
2. Review both languages using `npm run preview` after a successful build.
3. Upload the **contents** of `dist/` or let the provider publish that directory.
4. Add `svsolutions.pro` in the provider's custom-domain settings. Follow that provider's current DNS instructions at your domain registrar and enable HTTPS.
5. Configure `404.html` as the missing-page response with HTTP status 404. Do not use an SPA catch-all rewrite to `index.html`.
6. Confirm `/en/`, `/zh/`, article pages, assets, `/robots.txt`, `/sitemap-index.xml`, `/en/rss.xml` and `/zh/rss.xml` are reachable over HTTPS.

Astro emits HTML redirects at `/`, `/about/`, `/contact/` and `/insights/`. These work without provider rules. If supported, add permanent HTTP redirects for the three legacy section URLs and a redirect from `/` to `/en/`; keep the static files as fallbacks. Use locale page URLs as canonical URLs. Article paths always include their locale.

## Cloudflare Pages example

Select the repository, set the root directory to `version6`, use `npm run build` and set the output directory to `dist`. Ensure the install step uses the committed lockfile (`npm ci`) and the Node version is 24. Add `svsolutions.pro` as a custom domain through Pages and follow its DNS instructions. No Pages Functions or SPA fallback is needed. Review preview deployments before changing the production branch or domain.

## GitHub Pages with a custom domain

Use a Pages Actions build that checks out the repository, sets up Node 24, runs the install/check/test/build commands in `version6`, uploads `version6/dist` as the Pages artifact and deploys that artifact. Set the custom domain to `svsolutions.pro` in repository Pages settings and configure the required DNS records according to GitHub's current documentation. Enforce HTTPS after the certificate is ready.

If your chosen Pages publishing method requires a `CNAME` file in the artifact, add `version6/public/CNAME` containing only `svsolutions.pro` before building. This file is intentionally not included for other providers. Do not publish at the default repository subpath without separately changing the site's routing contract.

## After a content update

```bash
cd version6
npm ci
npm run check
npm test
npm run build
npm run preview
```

Deploy the new `dist/`. Drafts never generate article pages, feed items or sitemap entries. RSS and sitemap update on each build. A contact-form visit only prepares an email; test actual mail delivery separately through your own email application if you change the recipient.

## Release review

- Verify email ownership, factual About content, publication dates and both languages.
- Inspect the supplied raster logos and icons; replace them with original vector masters when available.
- Verify every published image and its permissions; check translation links.
- Confirm canonical/hreflang/OG URLs use the custom domain, not a preview host.
- Check mobile menu, keyboard focus, 404 status and root redirect on the deployed provider.
- Check the social-image PNG and favicon after caches have refreshed.

No deployment, DNS change or domain verification is performed by a local build. Those are hosting-account actions to complete when you are ready to publish.
