import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://arx-ein.github.io',
  integrations: [tailwind(), mdx()],
  devOptions: {
    // port: 3000
    tailwindConfig: './tailwind.config.mjs',
  },
  redirects: {
    "/mycelithyl-hyphae": "/",
  },
});