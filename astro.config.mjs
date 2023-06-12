import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://josemongedev.github.io",
  base: "/tutorial-astro",
  integrations: [preact()]
});