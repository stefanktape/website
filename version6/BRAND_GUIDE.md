# SV Solutions brand implementation

The primary visual reference is the supplied **SV Solutions Brand Kit**, specifically `references/full-brand-board.png` and `tokens/brand-tokens.json`: blue/navy geometric logo previews, contrasting light/dark applications, restrained orange accents, tracked SOLUTIONS lettering and sans-serif typography. The website applies this palette and hierarchy in a dark technical hero with light editorial sections; it does not use the sheet's mock buildings, factory image or business-card artwork as evidence of the business.

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

Inter Variable is bundled through `@fontsource-variable/inter`, served from the site itself. Chinese falls back to PingFang SC, Microsoft YaHei and the system sans-serif. No font CDN or external font request is used. Body copy is regular; headings use semibold weights. The supplied raster lockup carries the bold SV and tracked SOLUTIONS lettering. A typographic fallback remains available only when the configured image path is empty.

Use the shared maximum-width container, generous section spacing, small uppercase technical labels and thin grid dividers. Content sections remain white or near-white. The hero, contact CTA and footer use navy; the header remains white. Use gradients sparingly: the hero and research panel use subtle navy shifts. Avoid decorative shadows, blur, glass effects, elaborate animations and stock imagery.

## Supplied logo and icon assets

`public/brand/logos/` and `public/brand/icons/` contain selected PNGs copied unchanged from the supplied kit. The kit was extracted from a flattened raster board; these are **not original vector masters**. The white lockup is a recolored derivative. Inspection on white and navy confirmed that low-opacity extraction texture remains, particularly around the white version. At normal header/footer size it is faint, but these PNGs are temporary web assets rather than print-ready artwork. Replace them with genuine designer-supplied vectors when available; do not trace or redraw the symbol.

| Asset | Location under `public/brand/` | Configuration / use |
| --- | --- | --- |
| Primary transparent lockup | `logos/logo-primary-raster-transparent.png` | `site.logo.light`: white header |
| White transparent lockup | `logos/logo-white-raster-transparent.png` | `site.logo.dark`: navy footer |
| Primary / white monograms | `logos/monogram-primary-raster-transparent.png`, `logos/monogram-white-raster-transparent.png` | Available for future tight layouts; full accessible lockups are used now |
| Favicons | `icons/favicon-32.png`, `icons/favicon-48.png` | `site.icons.small`, `site.favicon` |
| Apple touch icon | `icons/favicon-180.png` | `site.icons.apple` |
| Larger icons | `icons/favicon-256.png`, `icons/favicon-512.png` | `site.icons.medium`, `site.icons.large` |
| Social image, 1200 × 630 | `social-card.png` | `site.socialImage` |

`light` and `dark` describe the **background**, not the artwork color. `Brand.astro` uses the primary lockup by default and the white lockup when passed `dark`; the footer explicitly passes it. Both supplied lockups measure 548 × 224. Those natural dimensions are set in `site.logo.width` / `.height`, while CSS scales to 176px wide on desktop and 144px on smaller screens with `height: auto`. Do not force them into a 220 × 60 rectangle. The header supplies vertical clear space, and the footer supplies generous padding. Keep at least 12px of clear space around these display sizes.

To replace a logo, copy the approved file into `public/brand/logos/`, update its browser path in `src/data/site.ts`, and update the natural width/height if its aspect ratio differs. If future variants have different proportions, give each its own dimensions in the component rather than stretching either one. Always inspect the replacement on both surface colors and at mobile width. Preserve the `alt` text and accessible Home link.

No mockup or reference-board image is shipped as page photography. The current social-card source is `public/brand/social-card.svg`; it embeds the supplied white raster lockup and is not a vector master of the mark. Re-export at 1200 × 630 after changing it, keeping `social-card.png` in sync.

## Technical imagery

Use only real, permission-cleared portraits, microscopy, apparatus photographs or reviewed technical figures. Prefer no image to an invented project photograph. Supply meaningful alt text, units, scale bars where appropriate, factual captions and source credits. Keep source images safely outside the generated build, optimize public copies and declare their actual dimensions. Figures must remain readable against white and within the article reading width.
