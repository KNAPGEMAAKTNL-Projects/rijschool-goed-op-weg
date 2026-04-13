# Layout Direction — Rijschool Goed op Weg

Tone: E7 D6 F3 R6 A5 | Repo stack: preline + tailwind-animations + melt-ui + number-flow

---

## 1. Hero Approach: Full-Bleed Dark Overlay

**Choice:** Full-bleed background image + dark gradient overlay + left-aligned text block

**Why not split hero:** Split hero (50/50 grid) reads as SaaS/corporate — wrong for F3 casual energy. The competitor the client loved most (Nationale, 9/10) uses a full-width hero with overlaid text. GLOW (7.6/10) also uses full-bleed dark overlay.

**Structure:**
- Full-viewport-width background: real CBR celebration photo
- Dark gradient overlay: `linear-gradient(to right, rgba(26,26,46,0.92) 0%, rgba(26,26,46,0.5) 60%, rgba(26,26,46,0.3) 100%)` — heavier on left for text, lighter on right to show photo
- Content block: left-aligned, max-width 35rem (hero-text container)
- Stacking order: Google review badge (pill, backdrop-blur) → H1 headline (Outfit 800, 4xl) → subtext (Figtree 400, lg) → dual CTA row (orange primary + WhatsApp green) → phone number below
- Diagonal cut divider at bottom edge transitioning to stats section

**Mobile adaptation:** Full-width stacked. CTAs go full-width. Badge above headline. Phone number moves into sticky bar.

**What preline provides:** Base section structure + responsive container. We override with custom hero classes.
**What tailwind-animations provides:** Hero text fade-in on load (subtle 0.5s opacity transition — NOT scroll-triggered, content visible immediately for LCP).

---

## 2. Key Section Layout Decisions

### Stats Row (Section 2) — 3-column equal grid
- **Grid:** `grid-cols-3` equal columns, gap-6
- **Cards:** White (#FFFFFF) on warm off-white background (#FFFAF7). Subtle border (#CEC5C1), rounded-lg (8px)
- **Content per card:** Big number (Outfit 800, 3xl, orange), label (Figtree 500, sm), comparison line (success green, xs: "+9% boven gemiddelde")
- **What number-flow provides:** Animated counter — numbers count from 0 to final on scroll-into-view
- **Mobile:** Stack to single column, cards side-by-side as horizontal scroll (3 compact cards)
- **Asymmetry:** None — equal grid is correct for comparable stats

### Opleidingen Cards (Section 3) — 3x2 card grid with featured variant
- **Grid:** `grid-cols-3` desktop, `grid-cols-2` tablet, `grid-cols-1` mobile. Gap-4
- **Cards:** White background, 1px border, rounded-lg. Emoji icon top, heading (Outfit 700), description (Figtree 400, sm)
- **Hover:** Color shift — background transitions to primary orange (#F05A1E), text goes white, border goes orange. Lift -4px + shadow. Transition 300ms snappy easing
- **Featured card (Dagcursus bromfiets):** Accent-tinted background (#FFF0E8), primary border color, small "Populair" badge
- **What preline provides:** Card component structure (padding, border, radius)
- **What tailwind-animations provides:** Staggered scroll reveal (fade-up, 100ms stagger, max 4 visible at once)

### Dagcursus Feature (Section 5) — Asymmetric 7/5 grid
- **Grid:** `grid-cols-12`, text spans 7 columns (left), image spans 5 columns (right)
- **Text side:** Section label (uppercase, sm, orange), H2 headline, body paragraph, CTA button, bullet points with Phosphor check-circle icons
- **Image side:** Real photo (students with moped at CBR), rounded-lg, slight negative margin top for overlapping effect with section above
- **Background:** Surface (#F9EFEB) — subtle contrast from white sections around it
- **Mobile:** Image stacks above text, full-width

### Geslaagden Gallery (Section 6) — Full-bleed dark section
- **Background:** Dark (#1A1A2E), full-bleed (breaks out of content container)
- **Diagonal cut divider:** Top edge (warm off-white wave on dark), bottom edge (dark wave on white)
- **Layout:** 4-column masonry-like grid of celebration photos. Variable card heights for organic feel. No uniform sizing (anti-pattern: identical card heights)
- **Content per card:** Photo (80% of card), student name, license type badge (e.g., "Motor" or "Bromfiets"), small orange accent line
- **Scroll behavior:** Staggered reveal (diagonal wave pattern, 80ms stagger)
- **Mobile:** 2-column grid, horizontal scroll for overflow

### Over de Instructeur (Section 7) — Asymmetric 5/7 grid (reversed)
- **Grid:** `grid-cols-12`, image spans 5 columns (left), text spans 7 columns (right)
- **Image:** Real instructor photo, rounded-lg, warm shadow
- **Text:** H2 headline, personal story paragraph, personality traits as inline badges/pills (e.g., "Geduldig", "Ervaren", "Toegankelijk"), contact CTA
- **Background:** White (#FFFFFF) — clean, personal
- **Why reversed (image-left):** Alternates from dagcursus section (text-left/image-right). Creates visual rhythm.

### Tarieven (Section 9) — 3-column pricing cards
- **Grid:** `grid-cols-3` desktop, stack mobile
- **Cards:** White, bordered, rounded-lg. Featured package has: orange top border (4px), "Populair" ribbon badge rotated -45deg (GLOW pattern: `transform: translate(-40px,10px) rotate(-45deg)`), slightly scaled up (`scale-105`)
- **Content per card:** Package name (Outfit 700), price (Outfit 800, 2xl, orange), what's included list with check icons, CTA button
- **Non-featured cards:** Subtle border, muted CTA (outline variant)
- **Background:** White (#FFFFFF)

---

## 3. Section Rhythm

### Padding Variation (NOT uniform)

| Section | Padding (desktop) | Padding (mobile) | Rationale |
|---------|-------------------|------------------|-----------|
| Hero | py-0 (full-viewport) | py-0 | Full-bleed, no padding |
| Stats row | py-16 (4rem) | py-12 | Compact — data, not breathing room |
| Opleidingen | py-20 (5rem) | py-14 | Standard content section |
| USP strip | py-10 (2.5rem) | py-8 | Thin accent strip, tight |
| Dagcursus feature | py-24 (6rem) | py-16 | Generous — hero product, breathing room |
| Geslaagden gallery | py-16 (4rem) | py-12 | Photos need less padding, more visual density |
| Instructeur | py-24 (6rem) | py-16 | Personal section, generous space |
| Reviews | py-16 (4rem) | py-12 | Social proof, medium density |
| Tarieven | py-20 (5rem) | py-14 | Pricing needs scanning space |
| FAQ | py-16 (4rem) | py-12 | Functional, compact |
| Contact | py-20 (5rem) | py-14 | Final CTA, clear space |

### Background Color Alternation

```
Hero           ██████████ #1A1A2E (dark, image overlay)
               ~~wave~~
Stats          ░░░░░░░░░░ #FFFAF7 (warm off-white)
Opleidingen    ██████████ #FFFFFF (white)
USP strip      ▓▓▓▓▓▓▓▓▓▓ #FFF0E8 (accent-tinted, warm peach)
Dagcursus      ░░░░░░░░░░ #F9EFEB (surface)
               ~~wave~~
Geslaagden     ██████████ #1A1A2E (dark — celebration energy)
               ~~wave~~
Instructeur    ██████████ #FFFFFF (white — personal, clean)
Reviews        ░░░░░░░░░░ #FFFAF7 (warm off-white)
Tarieven       ██████████ #FFFFFF (white)
FAQ            ░░░░░░░░░░ #F9EFEB (surface)
Contact        ██████████ #1A1A2E (dark — mirrors hero bookend)
Footer         ██████████ #111118 (darkest)
```

**Pattern:** Light-light-accent-surface-DARK-light-light-light-surface-DARK-darkest
The two dark sections (geslaagden + contact) create visual anchors at 1/3 and end of page. The accent-tinted USP strip breaks the white-white monotony in the top half.

### Decorative Elements Placement

| Element | Location | Implementation |
|---------|----------|----------------|
| Diagonal cut divider | Hero bottom → Stats top | Inline SVG, 60px height, warm off-white fill on dark bg. `transform: scaleX(-1)` for asymmetry |
| Diagonal cut divider | Above Geslaagden gallery | Dark fill on surface bg, flipped from hero wave |
| Diagonal cut divider | Below Geslaagden gallery | Warm off-white fill on dark bg |
| Diagonal cut divider | Above Contact section | Dark fill on surface bg |
| "Populair" ribbon | Dagcursus card + Featured pricing card | CSS `transform: translate(-40px, 10px) rotate(-45deg)`, orange bg, white text |
| Accent line | Geslaagden photo cards | 3px bottom border in primary orange on each card |
| Icon badges | Instructor personality traits | Pill-shaped inline elements with Phosphor icons + text |

---

## 4. Repo Stack Manifest

| Repo | What it provides in this project |
|------|----------------------------------|
| **preline** (Structure) | Base section containers, card components, nav structure, accordion component for FAQ, responsive grid utilities. We override colors/fonts/spacing to match our tokens. |
| **tailwind-animations** (Animation) | CSS `animation-timeline: view()` utilities for scroll-triggered fade-up reveals. Hero text entrance animation. Staggered card appearances (100ms delay between items). All CSS-only, zero JS. |
| **melt-ui** (Interactive, Svelte) | FAQ accordion expand/collapse. Service card selector for form Step 1. Contact form field interactions. Loaded as Svelte islands — only hydrates on the sections that need interactivity. |
| **number-flow** (Specific) | Animated CBR stat counters (0→91%, 0→90%, 0→100%). Triggers on scroll-into-view via IntersectionObserver. The signature interaction. ~7KB. |

**Total JS: ~15 KB** | Everything else is static HTML + CSS.

---

## 5. Grid & Asymmetry Summary

| Section | Grid Ratio | Type |
|---------|------------|------|
| Hero | Single column (full-bleed) | Full-width |
| Stats | 4/4/4 (equal thirds) | Symmetric |
| Opleidingen | 4/4/4 × 2 rows | Symmetric grid |
| USP strip | 3/3/3/3 (equal quarters) | Symmetric strip |
| Dagcursus | **7/5** (text-heavy left) | Asymmetric |
| Gallery | 3/3/3/3 masonry | Near-symmetric, varied heights |
| Instructeur | **5/7** (image left, text-heavy right) | Asymmetric (reversed from above) |
| Reviews | 4/4/4 cards | Symmetric |
| Tarieven | 4/4/4 with featured scale-up | Symmetric with emphasis |
| FAQ | Single column, max-w-content | Contained |
| Contact | **7/5** (form left, info right) | Asymmetric |

**Asymmetric sections:** 3 out of 12 (dagcursus, instructeur, contact). The alternating direction (7/5 → 5/7 → 7/5) creates visual rhythm without being predictable. All other sections use clean symmetric grids appropriate for their content type (stats, cards, pricing).
