import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

const site = process.env.GITHUB_PAGES_SITE || 'https://junclemente.github.io';
const base = process.env.GITHUB_PAGES_BASE || '/trip-planner-astro';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{css,js,html,svg,png,ico,woff2}'],
        navigateFallback: `${base}/`,
        navigateFallbackDenylist: [/^\/_astro\//],
      },
      manifest: {
        name: 'Trip Planner',
        short_name: 'TripPlan',
        description: 'Your personal travel trip planner',
        theme_color: '#4f46e5',
        background_color: '#f9fafb',
        display: 'standalone',
        start_url: `${base}/`,
        scope: `${base}/`,
        icons: [
          {
            src: `${base}/icons/icon-192.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `${base}/icons/icon-512.png`,
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: `${base}/icons/icon.svg`,
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
