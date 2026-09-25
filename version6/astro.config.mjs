import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://stefanktape.github.io",
  base: "/website-coat",
  output: "static",
  trailingSlash: "always"
});
