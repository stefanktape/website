import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { createInsight } from "../scripts/new-insight.mjs";
import { publishedInsights, featuredInsights, articleAlternates } from "../src/lib/publishing.mjs";
import { prepareEmail } from "../src/lib/email.mjs";

function post(slug, locale = "en", extra = {}) {
  return { id: `${locale}/${slug}`, data: { slug, locale, publishedAt: new Date("2026-10-01"), draft: false, featured: false, ...extra } };
}

test("publication excludes drafts, separates languages and sorts newest first", () => {
  const old = post("old");
  const latest = post("latest", "en", { publishedAt: new Date("2026-10-15") });
  assert.deepEqual(publishedInsights([old, post("draft", "en", { draft: true }), post("chinese", "zh"), latest], "en"), [latest, old]);
});

test("duplicate public routes fail instead of silently overwriting a page", () => {
  assert.throws(() => publishedInsights([post("same"), post("same")]), /Duplicate/);
});

test("frontmatter locale must match its language folder", () => {
  const entry = post("wrong"); entry.id = "zh/wrong";
  assert.throws(() => publishedInsights([entry]), /folder/);
});

test("homepage prefers featured content and fills from recent content up to three", () => {
  const entries = [post("newest"), post("featured", "en", { featured: true }), post("older"), post("oldest")];
  assert.deepEqual(featuredInsights(entries).map(entry => entry.data.slug), ["featured", "newest", "older"]);
});

test("language links resolve a published reciprocal translation", () => {
  const en = post("spray", "en", { translations: { zh: "penwu" } });
  const zh = post("penwu", "zh", { translations: { en: "spray" } });
  assert.deepEqual(articleAlternates(en, [en, zh]), { en: "spray", zh: "penwu" });
});

test("missing or draft translations produce no broken alternate link", () => {
  const en = post("spray", "en", { translations: { zh: "penwu" } });
  const zh = post("penwu", "zh", { draft: true });
  assert.deepEqual(articleAlternates(en, publishedInsights([en, zh])), { en: "spray" });
});

test("published translations must link in both directions", () => {
  const en = post("spray", "en", { translations: { zh: "penwu" } });
  assert.throws(() => articleAlternates(en, [en, post("penwu", "zh")]), /reciprocal/);
});

test("post helper creates editable drafts in either locale and never overwrites", async t => {
  const root = await mkdtemp(path.join(os.tmpdir(), "sv-insight-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const lang of ["en", "zh"]) {
    const file = await createInsight({ root, lang, slug: "spray-note", now: new Date("2026-10-15") });
    const content = await readFile(file, "utf8");
    assert.match(content, new RegExp(`locale: ${lang}`));
    assert.match(content, /draft: true/);
    assert.match(content, /publishedAt: 2026-10-15/);
    await assert.rejects(createInsight({ root, lang, slug: "spray-note" }), { code: "EEXIST" });
    assert.equal(await readFile(file, "utf8"), content);
  }
});

test("post helper rejects unsupported languages and path traversal", async () => {
  await assert.rejects(createInsight({ lang: "ru", slug: "note" }), /en or zh/);
  for (const slug of ["../outside", "Uppercase", "double--hyphen", "", "note.md"]) {
    await assert.rejects(createInsight({ lang: "en", slug }), /slug/);
  }
});

test("email preparation keeps Unicode and special characters in the body", () => {
  const uri = prepareEmail("mailto:person@example.com", { name: "思凡", organization: "R&D", email: "a+b@example.com", topic: "YSZ & HAP?", message: "First line\n第二行 #1" });
  const params = new URLSearchParams(uri.split("?")[1]);
  assert.equal(params.get("subject"), "YSZ & HAP?");
  assert.match(params.get("body"), /思凡/);
  assert.match(params.get("body"), /R&D/);
  assert.match(params.get("body"), /First line\n第二行 #1/);
});

test("email topic cannot introduce a new header", () => {
  const uri = prepareEmail("mailto:person@example.com", { name: "A", organization: "", email: "a@example.com", topic: "Question\r\nBcc: other@example.com", message: "Hello" });
  assert.equal(new URLSearchParams(uri.split("?")[1]).get("subject"), "Question Bcc: other@example.com");
});
