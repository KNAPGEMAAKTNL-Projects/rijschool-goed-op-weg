# DESIGN.md — Rijschool Goed op Weg

Single source of truth for all design tokens, layout decisions, and implementation rules.
Session 2 (copywriting) and Session 3 (Astro build) read this file.

---

## 1. Project Identity

- **Client:** Rijschool Goed op Weg
- **Business type:** Autorijschool / driving school (eenmanszaak)
- **Archetype:** E — Lifestyle & Personal Brand (Personal Trainer variant)
- **Voice file slug:** `rijschool` — voice file needed, run voice research prompt before Session 2
- **Copy language:** `nl` (Dutch — all website copy in Dutch, determines which `lang/` references Session 2 loads)
- **Addressal:** je/jij (informal — confirmed by Facebook voice analysis)

### Tone Scores

| Axis | Default (PT) | Adjusted | Reason |
|------|-------------|----------|--------|
| Energy | 9 | **7** | Excitement + trust balance, not pure gym intensity |
| Density | 6 | **6** | Multiple services + CBR stats + pricing need display |
| Formality | 3 | **3** | Facebook voice confirms very informal ("slay", "periodt") |
| Richness | 8 | **6** | No brand assets yet, limited visual material |
| Animation | 6 | **5** | Mobile-first (70%+), slow-reveal with energetic accents |

### Brand Assets

| Asset | Client provided? | What we chose |
|-------|-----------------|---------------|
| Logo | No | Text logo "GOED OP WEG" in Outfit 800, primary orange |
| Brand colors | No | #F05A1E anchor (vivid vermillion-orange) + warm neutrals |
| Fonts | No | Outfit (headings) + Figtree (body) |
| Photos | Yes (Facebook) | Real celebration photos from CBR — NO stock |

### Target Audience
Young people 16-25 in Tiel/Betuwe seeking first driving license (car, motorcycle, moped) or professional certification (taxi). Parents often pay. Mobile-first (70%+), WhatsApp-native. NOT: older adults, budget-seekers.

### Creative Direction Summary
Energetic, warm, youthful — the brand smells like gasoline and feels like the excitement of starting to drive. Visitors should feel "excitement to start driving + trust that this will work out" within 3 seconds. Sharp diagonal section dividers express speed and forward motion (not waves — waves feel like a cleaning company).

---

## 2. Color System

### Palette Roles

| Role | Hex | Where used | Contrast notes |
|------|-----|-----------|----------------|
| Primary | `#F05A1E` | CTA buttons bg, stat numbers, accents, hover states | Dark text (#1A1A2E) on primary: 5.02:1 AA pass |
| Primary Dark | `#B62500` | CTA hover bg, accent text on light bg | White on primary-dark: 6.45:1 AA pass |
| Primary Light | `#FF9757` | Decorative, orange accents on dark bg | On dark: 5.02:1 AA pass |
| Primary Surface | `#FFF0E8` | Featured cards bg, USP strip, accent-tinted sections | — |
| Secondary | `#83523E` | Warm brown supporting tone, image placeholders | — |
| Dark | `#1A1A2E` | Hero bg, dark sections, CTA button text | On primary: 5.02:1 AA pass |
| Darkest | `#111118` | Footer bg | — |
| Background | `#FFFAF7` | Page background, stats section | Dark text on bg: 16.32:1 AAA pass |
| Surface | `#F9EFEB` | Card/section backgrounds (dagcursus, FAQ) | — |
| White | `#FFFFFF` | Cards, elevated surfaces, opleidingen/tarieven bg | — |
| Text | `#211A18` | Primary body text, headings | On bg: 16.32:1 AAA pass |
| Text Muted | `#655D5A` | Secondary text, labels, descriptions | — |
| Border | `#CEC5C1` | Dividers, card borders, form borders | — |
| Error | `#CB002A` | Form validation errors | — |
| Success | `#5D6319` | CBR comparison lines, positive indicators | — |

### CTA Contrast Rule
- **Default state:** Dark text (#1A1A2E) on orange (#F05A1E) = 5.02:1 AA pass
- **Hover state:** White text on darkened orange (#B62500) = 6.45:1 AA pass
- **Orange as text on light bg:** Large text/icons only (3.25:1). For body-size accent text use #5F0000 (primary-10, 13.52:1 AAA)

### Primary Tonal Ramp (Material Design)

| Tone | Hex | Use |
|------|-----|-----|
| 0 | `#000000` | — |
| 10 | `#5F0000` | Accent text on light bg (13.52:1 AAA) |
| 20 | `#790000` | — |
| 30 | `#970000` | — |
| 40 | `#B62500` | CTA hover, dark accent |
| 50 | `#D64403` | — |
| 60 | `#F76024` | Close to primary |
| 70 | `#FF7B3E` | — |
| 80 | `#FF9757` | Primary light |
| 90 | `#FFB371` | — |
| 95 | `#FFC17E` | — |
| 99 | `#FFCD89` | — |
| 100 | `#FFFFFF` | — |

---

## 3. Typography

### Fonts

| Role | Family | Weights | Google Fonts |
|------|--------|---------|--------------|
| Heading | Outfit | 400, 600, 700, 800 | `family=Outfit:wght@400;600;700;800` |
| Body | Figtree | 300, 400, 500, 600 | `family=Figtree:wght@300;400;500;600` |

Both are variable fonts (A-tier, top 50 on Google Fonts). Neither is in the overused list.

### Embed

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Figtree:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Type Scale (Perfect Fourth — 1.333)

| Token | Size | Line-height | Letter-spacing | Use |
|-------|------|-------------|----------------|-----|
| `--text-4xl` | 4.2087rem | 1.1 | -0.025em | H1 (Outfit 800) |
| `--text-3xl` | 3.1573rem | 1.15 | -0.02em | H2 (Outfit 700), stat numbers |
| `--text-2xl` | 2.3686rem | 1.25 | -0.015em | H3 (Outfit 700), prices |
| `--text-xl` | 1.7769rem | 1.35 | -0.01em | H4 (Outfit 600), section headings |
| `--text-lg` | 1.333rem | 1.45 | -0.005em | Lead text (Figtree 400) |
| `--text-base` | 1rem | 1.5 | 0em | Body text (Figtree 400) |
| `--text-sm` | 0.7502rem | 1.6 | 0.01em | Captions, labels (Figtree 500) |

### Font Loading Strategy
`display=swap` — text renders immediately in fallback font, swaps when loaded. Preconnect to both Google Fonts domains.

---

## 4. Spacing System

### Fluid Root Font Size

```css
html { font-size: clamp(1rem, 0.68rem + 0.357vw, 1.25rem); }
/* 16px @1440px → ~18px @1920px → 20px @2560px+ */
```

ALL rem values scale proportionally with this root. This is the single most important responsive rule.

### Container Max-Widths (rem, NOT px)

| Container | Rem | px @16px | px @20px | Use |
|-----------|-----|---------|---------|-----|
| Content | 68.75rem | 1100px | 1375px | Default content sections |
| Wide | 87.5rem | 1400px | 1750px | Gallery, full-bleed content |
| Nav | 80rem | 1280px | 1600px | Navigation bar |
| Hero Text | 35rem | 560px | 700px | Hero content block max-width |

### Section Padding (varied, NOT uniform)

| Section | Desktop | Mobile | Rationale |
|---------|---------|--------|-----------|
| Hero | 0 (full-viewport, min-h: 92vh) | 0 | Full-bleed |
| Stats | 4rem top/bottom | 3rem | Compact data |
| Opleidingen | 5rem | 3.5rem | Standard content |
| USP Strip | 2.5rem | 2rem | Thin accent strip |
| Dagcursus | 6rem | 4rem | Generous, hero product |
| Geslaagden | 4rem | 3rem | Photo density |
| Instructeur | 6rem | 4rem | Personal, breathing room |
| Reviews | 4rem | 3rem | Social proof |
| Tarieven | 5rem | 3.5rem | Pricing scan space |
| FAQ | 4rem | 3rem | Functional |
| Contact | 5rem | 3.5rem | Final CTA |

### Grid Gaps
- Card grids: 1rem (opleidingen, gallery)
- Content grids (asymmetric): 3rem desktop, 2rem mobile
- Stats: 1.5rem
- Pricing: 1.25rem

### Component Internal Padding
- Cards: 1.5rem
- Buttons: 0.75rem 1.5rem (default), 0.5rem 1.25rem (small)
- Form inputs: 0.75rem 1rem
- FAQ items: 1.25rem 1.5rem
- Nav height: 4rem

---

## 5. Component Styles

### Buttons

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | `#F05A1E` | `#1A1A2E` | none | bg → #B62500, text → white, translateY(-2px), shadow |
| WhatsApp | `#25D366` | white | none | bg → #1EBE5A, translateY(-2px) |
| Outline | transparent | `#211A18` | 2px solid #CEC5C1 | border → #F05A1E, text → #F05A1E |

All buttons: `border-radius: 8px`, `font-family: Outfit`, `font-weight: 700`, `transition: all 300ms var(--ease)`.

### Cards
- Background: white (#FFFFFF)
- Border: 1px solid #CEC5C1
- Border-radius: 8px
- Shadow: none (default), `0 12px 24px -8px rgba(240,90,30,0.3)` on hover
- Featured variant: bg #FFF0E8, border-color #F05A1E, "Populair" badge

### Form Fields
- Background: rgba(255,255,255,0.08) on dark bg, white on light bg
- Border: 1px solid rgba(255,255,255,0.15) on dark, 1px solid #CEC5C1 on light
- Border-radius: 8px
- Focus: border-color → #F05A1E
- Placeholder: rgba(255,255,255,0.3) on dark, #CEC5C1 on light

### Nav Links
- Font: Figtree 500, 0.9375rem
- Color: #211A18 default, #F05A1E on hover
- Transition: color 200ms var(--ease)

---

## 6. Grid & Layout

### Section Grid Structures

| Section | Grid | Ratio | Breakpoints |
|---------|------|-------|-------------|
| Hero | Single column, left-aligned | — | Content max-width 35rem |
| Stats | `grid-cols-3` | 4/4/4 | → 1 col on mobile |
| Opleidingen | `grid-cols-3` | 4/4/4 × 2 rows | → 2 col tablet, 1 col mobile |
| USP Strip | `grid-cols-4` | 3/3/3/3 | → 2 col mobile |
| Dagcursus | `grid-cols-12` | **7/5** text-left/image-right | → 1 col mobile (image first) |
| Geslaagden | `grid-cols-4` | variable heights | → 3 col tablet, 2 col mobile |
| Instructeur | `grid-cols-12` | **5/7** image-left/text-right | → 1 col mobile |
| Reviews | `grid-cols-3` | 4/4/4 | → 1 col mobile |
| Tarieven | `grid-cols-3` | 4/4/4 + featured scale | → 1 col mobile |
| FAQ | Single column | max-width 45rem | Centered |
| Contact | `grid-cols-12` | **7/5** form-left/info-right | → 1 col mobile |

### Breakpoints
- Mobile: < 640px
- Tablet: 640px–1023px
- Desktop: 1024px+
- Wide: 1440px+ (fluid root scaling takes over)

### Container Strategy
All containers use `max-width` in rem with `margin: 0 auto; padding: 0 1.5rem;`

---

## 7. Decorative Elements

### Diagonal Section Dividers (NOT waves — client rejected waves as "cleaning company")

Sharp polygon cuts expressing speed and forward motion. Directions alternate for rhythm.

**Hero → Stats (forward diagonal, right-down):**
```html
<svg viewBox="0 0 1440 72" preserveAspectRatio="none">
  <polygon points="0,72 1440,0 1440,72" fill="#FFFAF7"/>
</svg>
```

**Surface → Dark / geslaagden (opposing diagonal, left-down):**
```html
<svg viewBox="0 0 1440 72" preserveAspectRatio="none">
  <polygon points="0,0 1440,72 0,72" fill="#1A1A2E"/>
</svg>
```

**Dark → White / after geslaagden (right-down):**
```html
<svg viewBox="0 0 1440 72" preserveAspectRatio="none">
  <polygon points="0,72 1440,0 1440,72" fill="#FFFFFF"/>
</svg>
```

**Surface → Contact dark (left-down):**
```html
<svg viewBox="0 0 1440 72" preserveAspectRatio="none">
  <polygon points="0,0 1440,72 0,72" fill="#1A1A2E"/>
</svg>
```

Height: 4.5rem desktop, 2.5rem mobile. Always visible (not hidden on mobile).

### Other Decorative Elements
- **"Populair" ribbon badge:** `position: absolute; transform: rotate(45deg);` orange bg, white text. Used on featured opleidingen card + featured pricing card.
- **Instructor photo offset shadow:** `box-shadow: 12px 12px 0 #FFF0E8` on instructor image.
- **Gallery card accent border:** `border-bottom: 3px solid #F05A1E` on each gallery card.
- **Trait pills:** Inline pill-shaped badges with `border-radius: 100px`, surface bg, border.

---

## 8. Icon System

- **Library:** Phosphor (rounded, friendly — matches F3 casual formality)
- **Stroke width:** 2px
- **Size:** 24px default, 20px in buttons, 28px in feature sections
- **Install:** Copy SVGs from phosphoricons.com or use `@phosphor-icons/web`
- **Usage:** USP icons, check marks, contact icons, nav mobile hamburger
- **DO NOT:** Use hugeicons MCP (returns font codepoints, not SVG paths). DO NOT draw SVG paths manually.

---

## 9. Repo Stack

| Layer | Repo | URL | Provides | Compat | JS Cost |
|-------|------|-----|----------|--------|---------|
| 1. Structure | preline | github.com/htmlstreamofficial/preline | Section containers, card components, nav, accordion, responsive grids | B (Astro-native) | 0 KB |
| 2. Animation | tailwind-animations | github.com/new-data-services/tailwind-animations | CSS `animation-timeline: view()` utilities, fade-up reveals, staggered appearances | A (Astro-native) | 0 KB |
| 3. Interactive | melt-ui | melt-ui.com | FAQ accordion, service selector, form interactions. Svelte islands. | C (Svelte) | ~8 KB |
| 4. Decorative | skip | — | Inline SVG diagonal dividers, no repo needed | — | 0 KB |
| 5. Specific | number-flow | github.com/barvian/number-flow | Animated CBR stat counters (signature interaction) | B | ~7 KB |

**Total JS: ~15 KB** (well within archetype E budget of 0-30 KB)

---

## 10. Interaction Vocabulary

### Scroll Behavior: Measured Reveals — Fade-Up (A5)
```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .reveal {
      animation: fade-up linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 80%;
    }
  }
}
@keyframes fade-up {
  from { transform: translateY(1.25rem); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```
Stagger: 100ms between items. Max 4 staggered items per group. Hero content visible immediately (no scroll animation — LCP protection).

### Hover Pattern: Color Shift (Energetic)
```css
@media (hover: hover) {
  .card-hover:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(240,90,30,0.3);
    transition: all 300ms var(--ease);
  }
}
```

### Easing Personality: Snappy
```css
--ease: cubic-bezier(0.16, 1, 0.3, 1);
```
Used on ALL transitions project-wide. Modern, decisive. Matches "excitement to start driving."

### Signature Interaction: Counter Animation on CBR Stats
Numbers count from 0 to final value (91%, 90%, 100%) when scrolled into view. Uses `number-flow` repo. IntersectionObserver trigger. Fires once, holds final value. ~7KB JS.

---

## 11. Animation Specification

- **Level:** 5/10 (slow-reveal with energetic accents)
- **JS budget:** 0-30 KB (archetype E). Actual: ~15 KB.
- **GSAP:** Not used (CSS-only satisfies A5 requirements)

| Effect | Section | Implementation |
|--------|---------|----------------|
| Text entrance | Hero | CSS @keyframes (fade-in + slide-up), 0.6-0.7s, staggered 0.1s delays |
| Fade-up reveal | All content sections | CSS animation-timeline: view(), 80% entry range |
| Staggered cards | Opleidingen, Gallery | 100ms delay between items, max 4 visible at once |
| Color shift hover | Service cards, trait pills | 300ms background + color transition |
| Button lift | All CTAs | translateY(-2px) + shadow on hover, 300ms |
| Counter animation | Stats row | number-flow, IntersectionObserver trigger |

### Reduced Motion Fallback
All animations wrapped in `@media (prefers-reduced-motion: no-preference)`. With reduced motion: all content visible immediately, no transforms, no opacity changes. Only color transitions remain.

---

## 12. CTA Architecture

- **Primary contact:** WhatsApp (16-25 demographic, WhatsApp-native)
- **Secondary contact:** Phone (06 28990655, click-to-call)
- **Tertiary:** Contact form

### Button Text
- Primary CTA: **"Plan je proefles"** (+ arrow →)
- WhatsApp: **"WhatsApp"** (+ WhatsApp icon)
- Dagcursus-specific: **"Boek je dagcursus"**
- Microcopy under CTAs: **"Vrijblijvend — Binnen 24 uur reactie"**

### Header Contact Display
- Phone number: visible on desktop (1024px+), hidden mobile
- CTA button "Plan je proefles": visible on desktop (768px+)

### Sticky Mobile CTA Bar
- **Yes** — WhatsApp icon button + "Plan je proefles" full-width button
- Always visible on mobile (< 768px), fixed bottom, z-index 99
- Background white, border-top, subtle shadow

### Form Fields
1. Opleiding (dropdown selector: Auto/Motor/Bromfiets/BE/Taxi/Theorie)
2. Naam (text, required)
3. Telefoonnummer (tel, optional — making optional = +275% capture)
4. Bericht (textarea, optional)
- Spam: Cloudflare Turnstile + honeypot (zero visible friction)
- Privacy note: "Wij respecteren je privacy"

### CTA Placement
- Hero: "Plan je proefles" + WhatsApp (primary)
- After Dagcursus section: "Boek je dagcursus" (secondary)
- After Instructeur section: "Plan je proefles" (secondary)
- Contact section: Full form (tertiary)
- Every page: sticky mobile bar (persistent)

---

## 13. Trust Signals

| Priority | Signal | Placement | Content |
|----------|--------|-----------|---------|
| 1 | CBR slagingspercentages | Hero badge, Stats row (section 2), Service pages | Motor 91%, Bromfiets 90%, Taxi 100%, Auto 62% vs CBR gemiddelde |
| 2 | Google Reviews | Hero badge, Reviews section (section 8) | 5.0/5, 15 beoordelingen |
| 3 | Geslaagdenfoto's | Gallery section (section 6), Geslaagd page | Real celebration photos from Facebook |
| 4 | Rijschoolnummer | Footer, Contact section | 7633G1 |
| 5 | KvK-nummer | Footer, Contact section | 51173336 |

---

## 14. Pricing Display

- **Approach:** Full prices visible (transparent, filters budget hunters)
- **Format:** €XX per les (individual lessons), €XXX alles-in (dagcursus packages)
- **Display locations:** Homepage tarieven section, dedicated Tarieven page, service page sidebar
- **BTW note:** Rijlessen zijn vrijgesteld van BTW (educational services VAT-exempt in NL)
- **Featured package:** Dagcursus bromfiets — highlighted with "Populair" ribbon, scale(1.04), orange top border

---

## 15. Anti-Patterns (NEVER DO)

### From SOPs
- [ ] No opacity:0 on hero elements (LCP trap)
- [ ] No "Versturen" as button text
- [ ] No aggressive sales language ("Wij zijn de #1 rijschool...")
- [ ] No stock photos for team/students
- [ ] No unverifiable social proof
- [ ] No English phrases that should be Dutch (exception: Gen-Z phrases client naturally uses)
- [ ] No "bel ons maar even" (commanding)
- [ ] No "Neem vandaag nog contact op!" (American urgency)

### From Anti-Slop Pipeline
- [ ] No uniform section padding (vary per section — see section 4)
- [ ] No symmetric 6/6 grids throughout (use 7/5 and 5/7 asymmetric)
- [ ] No max-w-7xl mx-auto on every section (varied containers)
- [ ] No centered-everything layout (left-aligned hero, asymmetric grids)
- [ ] No uniform card heights in grids (gallery uses variable aspect ratios)
- [ ] No gradient text
- [ ] No glassmorphism / glow borders
- [ ] No rounded corners > 12px (8px standard, 100px for pills only)
- [ ] No identical card layouts repeated 3-4 times (featured variant differs)

### From Client Interview
- [ ] No blue as primary color (market-saturated — all 10 competitors use blue)
- [ ] No wave/sine SVG dividers (client rejected: "feels like a cleaning company" — use diagonal cuts)
- [ ] No Revolution Slider or hero carousels (dated)
- [ ] No "Nu kopen" / transactional CTA language
- [ ] No corporate/institutional tone (Van Thiel anti-reference)
- [ ] No hidden pricing (Jaddi, Xplore anti-pattern)
- [ ] No heavy page builder JS bloat (Astro advantage)
- [ ] No conservative navy+gray palette ("NOT for old people")
- [ ] No serif fonts ("NOT for old people")
- [ ] No budget-looking design (discount banners, "vanaf €XX" as hero)

---

## 16. Dutch UX Requirements

### Number & Currency Formatting
- Currency: `€12,50` (komma as decimal separator, NO space before €)
- Thousands: `1.234` (punt as thousands separator)
- Phone: `06 28 99 06 55` (spaces in mobile numbers) or `06-28990655` (hyphenated)
- Postcode: `4002 HG` (4 digits + space + 2 letters uppercase)
- Dates: `12 april 2026` (day month year, month lowercase)
- Percentages: `91%` (no space before %)

### Cookie Banner
**No cookie banner needed** — Cloudflare Web Analytics is cookie-free, no tracking cookies, no consent required under Dutch GDPR implementation.

### Legal Footer Requirements
- KvK-nummer: 51173336
- Rijschoolnummer: 7633G1
- Link to Privacybeleid
- Link to Algemene voorwaarden
- Copyright notice

### Hyphenation
Enable CSS hyphenation for Dutch compound words:
```css
h1, h2, h3 { hyphens: auto; word-break: break-word; }
html { -webkit-hyphenate-limit-chars: 8 4 4; }
```

### Trailing Slashes
**Never** — Astro `trailingSlash: "never"`, `build.format: "file"`. All internal links must NOT end with `/`.

---

## 17. Design Reference

| File | Purpose |
|------|---------|
| `homepage-reference.html` | Visual reference for homepage layout, all 12 sections |
| `service-page-reference.html` | Template for all 6 service pages (auto, motor, etc.) |
| `tarieven-reference.html` | Pricing page layout with 6 service cards |
| `over-ons-reference.html` | About page with instructor section + contact form |
| `geslaagd-reference.html` | Gallery page with filter bar + masonry grid + CBR bar charts |
| `design-direction.html` | Color swatches, type scale preview, contrast table |

**When in doubt about layout → reference HTML. When in doubt about values → DESIGN.md.**
