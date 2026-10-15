import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

export async function createInsight({ root = process.cwd(), lang, slug, now = new Date() }) {
  if (!["en", "zh"].includes(lang)) throw new Error("--lang must be en or zh");
  if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("--slug must contain lowercase letters, numbers and single hyphens, e.g. spray-regimes");
  }
  const folder = path.join(root, "src/content/insights", lang);
  const file = path.join(folder, `${slug}.md`);
  const text = `---
title: "TODO: Add a clear technical title"
slug: ${slug}
locale: ${lang}
publishedAt: ${now.toISOString().slice(0, 10)}
summary: "TODO: Summarize the question, scope and main point."
type: research-note
tags: []
featured: false
draft: true
# updatedAt: YYYY-MM-DD
# translations:
#   ${lang === "en" ? "zh" : "en"}: counterpart-slug
# featuredVisual:
#   kind: image
#   src: /images/insights/your-figure.jpg
#   alt: Describe the actual figure
#   caption: Figure 1. Add a factual caption.
#   credit: Add image credit if applicable.
---

## ${lang === "zh" ? "问题与范围" : "Question and scope"}

TODO: ${lang === "zh" ? "明确研究问题、已有证据及局限。" : "Define the question, evidence and limitations."}

## ${lang === "zh" ? "参考文献" : "References"}

TODO: ${lang === "zh" ? "添加可追溯的参考文献。" : "Add traceable references."}
`;
  await mkdir(folder, { recursive: true });
  await writeFile(file, text, { flag: "wx" });
  return file;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) {
    console.log("Usage: npm run new:insight -- --lang en --slug my-title\nCreates a draft; refuses to overwrite existing files.");
    return;
  }
  const options = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i];
    if (!["--lang", "--slug"].includes(key) || !args[i + 1] || args[i + 1].startsWith("--")) {
      throw new Error("Usage: npm run new:insight -- --lang en --slug my-title");
    }
    if (options[key.slice(2)]) throw new Error(`Duplicate option: ${key}`);
    options[key.slice(2)] = args[i + 1];
  }
  const file = await createInsight(options);
  console.log(`Created draft: ${path.relative(process.cwd(), file)}\nEdit the TODO fields, review the content, then set draft: false to publish.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch(error => {
    console.error(error.code === "EEXIST" ? "An Insight with that filename already exists. Nothing was overwritten." : error.message);
    process.exitCode = 1;
  });
}
