import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/data/site.ts";

export default defineConfig({
  site: site.url,
  base: "/",
  output: "static",
  trailingSlash: "always",
  integrations: [mdx(), sitemap({
    filter: (page) => !["/", "/404/", "/about/", "/contact/", "/insights/"].includes(new URL(page).pathname)
  })]
});
