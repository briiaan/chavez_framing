import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://chavezframing.com',
  integrations: [sitemap({
    filter: (page) => page !== 'https://chavezframing.com/privacy-policy'
  }), react()],
  outDir: './site',
  compressHTML: true,
  output: "server",
  adapter: node({
    mode: "standalone"
  })
})