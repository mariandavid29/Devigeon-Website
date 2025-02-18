// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  integrations: [react(), sitemap(), robotsTxt()],
  i18n: {
    defaultLocale: 'ro',
    locales: ['en', 'ro'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // site: 'https://devigeon.com',
});
