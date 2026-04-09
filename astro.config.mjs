// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://areyleyva.com',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
