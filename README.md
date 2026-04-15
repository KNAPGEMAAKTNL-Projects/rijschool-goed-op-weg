# Rijschool Goed op Weg

Website for Rijschool Goed op Weg — driving school in Tiel, Gelderland.

## Tech Stack

- **Framework:** Astro 6 (Static Site Generation)
- **Styling:** Tailwind CSS 4 (via @tailwindcss/vite)
- **Interactivity:** Svelte islands (melt-ui) + number-flow counters
- **Deployment:** Cloudflare Pages
- **Animation:** CSS scroll-driven animations (zero JS)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Static output deploys to Cloudflare Pages via Git integration or:

```bash
wrangler pages deploy ./dist
```

---

Built by [KNAP GEMAAKT.](https://knapgemaakt.nl)
