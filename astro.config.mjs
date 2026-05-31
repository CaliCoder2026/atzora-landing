import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://atzora.app',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
