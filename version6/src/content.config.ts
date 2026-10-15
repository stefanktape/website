import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const source = glob({
  pattern: "**/*.{md,mdx}",
  base: "./src/content/insights",
  // Keep the language and extension in the internal ID. Public URLs use data.slug.
  generateId: ({ entry }) => entry
});

const insights = defineCollection({
  loader: {
    ...source,
    async load(context) {
      // Astro 5's glob loader retains cached entries when the final file is removed.
      // Refresh this small file-based collection so deleted posts cannot reappear.
      context.store.clear();
      await source.load(context);
    }
  },
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase hyphenated slug"),
    locale: z.enum(["en", "zh"]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    summary: z.string().min(1),
    type: z.enum(["research-note", "technical-note", "industry-note", "event-note", "project-update", "exhibition", "supplier-note", "guide"]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
    translations: z.object({ en: z.string().optional(), zh: z.string().optional() }).optional(),
    featuredVisual: z.discriminatedUnion("kind", [
      z.object({ kind: z.literal("image"), src: z.string(), alt: z.string(), caption: z.string().optional(), credit: z.string().optional() }),
      z.object({ kind: z.literal("summary-card"), alt: z.string().optional(), caption: z.string().optional(), credit: z.string().optional() })
    ]).optional()
  }).refine(data => !data.updatedAt || data.updatedAt >= data.publishedAt, {
    message: "updatedAt must be on or after publishedAt", path: ["updatedAt"]
  })
});

export const collections = { insights };
