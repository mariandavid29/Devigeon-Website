// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import paraglide from '@inlang/paraglide-astro';

export default defineConfig({
  integrations: [
    react(),
    sitemap(),
    robotsTxt(),
    paraglide({ project: './project.inlang', outdir: './src/paraglide' }),
  ],
  i18n: {
    defaultLocale: 'ro',
    locales: ['en', 'ro'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // site: 'https://devigeon.com',
});
