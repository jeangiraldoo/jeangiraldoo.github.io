import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteSitemap } from "svelte-sitemap/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    svelteSitemap({
      domain: "jeangiraldoo.github.io",
      changeFreq: "yearly",
    }),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/lib/paraglide",
      emitTsDeclarations: true,
      strategy: ["url", "baseLocale"],
      urlPatterns: [
        {
          pattern: "/",
          localized: [
            ["en", "/"],
            ["es", "/es"],
          ],
        },
        {
          pattern: "/about",
          localized: [
            ["en", "/about"],
            ["es", "/es/sobre-mi"],
          ],
        },
        {
          pattern: "/contact",
          localized: [
            ["en", "/contact"],
            ["es", "/es/contacto"],
          ],
        },
        {
          pattern: "/blog",
          localized: [
            ["en", "/blog"],
            ["es", "/es/blog"],
          ],
        },
        {
          pattern: "/projects",
          localized: [
            ["en", "/projects"],
            ["es", "/es/proyectos"],
          ],
        },
      ],
    }),
  ],
});
