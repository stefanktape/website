import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const insights = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(["en", "zh"]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    summary: z.string(),
    type: z.enum(["research-note", "technical-note", "exhibition", "supplier-note", "guide"]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
    translations: z.object({ en: z.string().optional(), zh: z.string().optional() }).optional(),
    featuredVisual: z.discriminatedUnion("kind", [
      z.object({ kind: z.literal("image"), src: z.string(), alt: z.string(), caption: z.string().optional(), credit: z.string().optional() }),
      z.object({ kind: z.literal("summary-card"), alt: z.string().optional(), caption: z.string().optional(), credit: z.string().optional() })
    ]).optional()
  })
});

export const collections = { insights };
