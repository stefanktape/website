# SV Solutions brand implementation

The primary visual reference is the **branding.png brand sheet supplied with this task**: blue/navy geometric logo previews, contrasting light/dark applications, restrained orange accents, tracked SOLUTIONS lettering and sans-serif typography. The website applies this palette and hierarchy in a typographic, editorial layout; it does not use the sheet's mock buildings, factory image or business-card artwork as evidence of the business.

## Palette

All CSS colors are defined in `src/styles/global.css`.

| Token | Color | Use |
| --- | --- | --- |
| `--blue` | `#007BFF` | Brand accents, rules, markers and focus rings |
| `--navy` | `#0E2A47` | Headings, wordmark and dark technical panels |
| `--steel` | `#516680` | Supporting text and metadata on light surfaces |
| `--light` | `#E6ECF3` | Quiet fills and selection |
| `--orange` | `#F2932E` | A small marker on a navy panel; never dominant |
| `--white` | `#FFFFFF` | Main editorial surface and dark-panel text |
| `--blue-accessible` | `#0064D1` | Small text links and white-text action backgrounds |

The darker action blue preserves readable contrast where primary blue is too light for small white text. Use orange only for a small highlight, not body text, primary buttons or large backgrounds. Dark-panel secondary text uses the dedicated `--on-dark-muted` token.

## Typography and layout

Inter Variable is bundled through `@fontsource-variable/inter`, served from the site itself. Chinese falls back to PingFang SC, Microsoft YaHei and the system sans-serif. No font CDN or external font request is used. Body copy is regular; headings use semibold weights. The temporary wordmark uses heavy italic SV with tracked regular SOLUTIONS, following the hierarchy in the reference without reproducing its symbol.

Use the shared maximum-width container, generous section spacing, small uppercase technical labels and thin grid dividers. Most backgrounds are white or near-white. Reserve navy for focused panels and the contact CTA. Use gradients sparingly; the research panel uses only a subtle navy shift. Avoid decorative shadows, blur, glass effects, elaborate animations and stock imagery.

## Original logo assets

No standalone original logo export was available in the repository or attachments. The supplied brand sheet is a visual reference, not a production logo asset. The previous personal symbol was removed. **Do not trace, redraw or crop the geometric SV symbol from the screenshot.**

When original exports are available, place them at:

| Asset | Location | Configuration |
| --- | --- | --- |
| Full-color logo for white backgrounds | `public/brand/sv-solutions-light.svg` | `site.logo.light` |
| White/blue logo for navy backgrounds | `public/brand/sv-solutions-dark.svg` | `site.logo.dark` |
| Approved favicon | `public/brand/favicon.svg` | `site.favicon` |
| Approved social image, 1200 × 630 | `public/brand/social-card.png` | `site.socialImage` |

Configure their browser paths in `src/data/site.ts`, for example `logo.light: "/brand/sv-solutions-light.svg"` within the existing object. PNG exports are also supported. Keep a transparent background, preserve the original proportions and leave clear space around the logo. Light surfaces use `logo.light`; any future dark-background `Brand` component should pass `dark` to use `logo.dark`. Empty values intentionally show the clean typographic wordmark.

The current favicon is a temporary text-only “SV” on navy. The current social image is also typographic, not a substitute geometric logo. Its editable source is `public/brand/social-card.svg`; after editing, export it as the 1200 × 630 PNG used by social metadata. Keep both files in sync. Replace these with approved brand assets when supplied.

## Technical imagery

Use only real, permission-cleared portraits, microscopy, apparatus photographs or reviewed technical figures. Prefer no image to an invented project photograph. Supply meaningful alt text, units, scale bars where appropriate, factual captions and source credits. Keep source images safely outside the generated build, optimize public copies and declare their actual dimensions. Figures must remain readable against white and within the article reading width.
