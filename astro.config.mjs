// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// ⚠️ @astrojs/cloudflare v13 + Astro 6.1 Vite mismatch (Astro #16029)
// Adapter commented out — all pages prerendered as static HTML.
// Deploy via: wrangler pages deploy ./dist/client
// Re-enable when the fix ships.
// import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // ── Site ──────────────────────────────────────────────
  site: 'https://rijschoolgoedopweg.nl',
  build: { format: 'file' },
  trailingSlash: 'never',

  // ── Cloudflare adapter (disabled — see note above) ───
  // adapter: cloudflare({
  //   imageService: 'compile',
  //   prerenderEnvironment: 'node',
  // }),

  // ── Security ──────────────────────────────────────────
  security: { csp: true },

  // ── Fonts (self-hosted at build time, GDPR-compliant) ─
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Outfit',
      cssVariable: '--font-heading',
    },
    {
      provider: fontProviders.google(),
      name: 'Figtree',
      cssVariable: '--font-body',
    },
  ],

  // ── Images ────────────────────────────────────────────
  image: { layout: 'constrained' },

  // ── i18n ──────────────────────────────────────────────
  i18n: {
    locales: ['nl'],
    defaultLocale: 'nl',
  },

  // ── Integrations ──────────────────────────────────────
  integrations: [
    sitemap({ namespaces: { news: false, video: false } }),
    svelte(),
  ],

  // ── Vite ──────────────────────────────────────────────
  vite: { plugins: [tailwindcss()] },
});
