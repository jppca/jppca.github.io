import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jpparradev.com',
  integrations: [sitemap()],
});
