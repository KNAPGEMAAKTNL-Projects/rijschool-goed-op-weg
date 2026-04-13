# SESSION 1 DECISIONS — Rijschool Goed op Weg

Self-contained reference for Phase B (Prompts 5-8). All creative direction, archetype, and technical decisions.

---

## Feeling Interview (Prompt 5)

### Verbatim Q&A

**Q: Which competitors feel closest? Which feel wrong?**
A: [Rated in COMPETITORS.md] Top: Nationale Rijschool 9/10 ("AI but done super well"), Rijschool de Betuwe 8/10 ("great design, some broken"), GLOW 7.6/10 ("looks professional"). Worst: Xplore 4/10 ("old design clearly"), Rijschool Noord 4/10 ("just old and broken").

**Q: 1-2 websites from ANY industry that feel like what you want?**
A: "Did that" — referred to competitor HTMLs as reference.

**Q: If your business was a physical space?**
A: "It looks energetic, young, it would smell like gasoline."

**Q: One word your ideal customer should feel within 3 seconds?**
A: "Excitement to start driving, trust that this will work out"

**Q: Who is your customer NOT?**
A: "Old people, people that want the cheapest option"

### Anchor Color Direction
- Temperature: **Warm** (gasoline, energetic, excitement, youth)
- Lightness: **Balanced** (not dark-moody, not pastel-soft)
- Saturation: **Vivid** (energetic, young, NOT cheapest option)
- Proposed anchor: **#F05A1E** (vivid vermillion-orange, ~17° hue)
- Design log note: 23° from By Shakir gold (#C9A962, ~40°) — under 60° minimum. Exception justified: different saturation (95% vs 40%), industry, archetype, demographic.

### Typography Personality
- Structure: **Sans-serif** (modern, direct, no serif = NOT for old people)
- Weight feel: **Heavy-bold** (energetic, impactful, ALL CAPS celebration posts)
- Character: **Geometric** (modern, young, structured confidence)
- Search query heading: "bold geometric sans-serif energetic modern sporty"
- Search query body: "clean geometric sans readable contemporary"

### Spatial Feeling
- Density: **Balanced** — enough white space to breathe, enough content to feel energetic
- Structure: **Structured** — grid-based, clear hierarchy channeling chaotic celebration energy
- Containment: **Expansive** — full-bleed heroes, full-width sections, edge-to-edge imagery

### Motion Philosophy
- **Slow-reveal with energetic accents** — Animation level 5/10
- Scroll-triggered section reveals (fade-up, 300ms)
- Quick hover transitions on CTAs (200-300ms)
- Stat counter animation on CBR percentages
- No autoplay video, no heavy parallax, no theatrical transitions
- Mobile: reduced motion, no parallax

### Anti-References
| Competitor | Rating | Client words | Anti-pattern |
|---|---|---|---|
| Xplore | 4/10 | "old design clearly" | Dated templates, no visual hierarchy, buried CTAs |
| Rijschool Noord | 4/10 | "just old and broken" | Broken responsive, Revolution Slider, "Nu kopen" language |
| Jaddi | 5/10 | "slow and old" | Slow loading, stock photos, no reviews, hidden pricing |
| Van Thiel | 7/10 | "too impersonal" | Corporate tone, no personality, dense text |

Anti-patterns from interview:
- No blue as primary (market-saturated)
- No conservative navy+gray (NOT for old people)
- No serif fonts (NOT for old people)
- No budget design (NOT cheapest option)
- No heavy JS bloat (Astro advantage)
- No hidden pricing
- No Revolution Slider/carousels

---

## Archetype + Requirements (Prompt 6)

### Step 1 — Confirmed Archetype: E (Lifestyle & Personal Brand)
Variant: Personal Trainer (results-oriented, instructor-led, youthful)
Visitor mindset: "I'm looking for a rijschool where I'll actually pass."
Decision timeline: Days to weeks
Primary conversion: WhatsApp → proefles booking

### Step 2 — Archetype E Requirements
MUST HAVE: Personality showing, personal photos, social proof (CBR stats + reviews), easy booking (WhatsApp), portfolio (geslaagden gallery)
MUST NOT: Corporate tone, impersonal copy

### Step 3 — Adjusted Tone Scores
| Axis | PT Default | Adjusted | Reason |
|------|-----------|----------|--------|
| Energy | 9 | **7** | Excitement + trust balance, not pure gym intensity |
| Density | 6 | **6** | Multiple services + CBR stats + pricing |
| Formality | 3 | **3** | Facebook voice confirms very informal |
| Richness | 8 | **6** | No brand assets yet, limited visual material |
| Animation | 6 | **5** | Mobile-first, slow-reveal with accents |

**Final: E7 D6 F3 R6 A5**

### Step 4a — Homepage Section Order
1. Hero (full-bleed photo + dark overlay + bold headline + "Plan je proefles" CTA + Google 5.0/5 badge + phone)
2. CBR Stats Row (big animated numbers: Motor 91% | Bromfiets 90% | Taxi 100% | vs. locatiegemiddelde)
3. Opleidingen Cards (Auto, Motor, Bromfiets, BE, Taxi, Dagcursus bromfiets as featured)
4. USP Strip (Hoog slagingspercentage | Persoonlijke aanpak | Automaat beschikbaar | Dagcursus in 1 dag)
5. Dagcursus Bromfiets Feature (dedicated section, own CTA)
6. Geslaagden Gallery (20+ real celebration photos from Facebook)
7. Over de Instructeur (real photo, name, story, approach)
8. Reviews (Google reviews + testimonials)
9. Tarieven Overview (clean pricing cards)
10. FAQ Accordion
11. Contact + CTA (form + WhatsApp + phone + locatie)
12. Footer (KvK 51173336, rijschoolnummer 7633G1, social links)

### Step 4b — CTA Architecture
- Primary: WhatsApp (16-25 demographic)
- Secondary: Phone (06 28990655)
- Tertiary: Contact form (4 fields: opleiding selector, naam, telefoon optional, bericht optional)
- CTA text: "Plan je proefles"
- Microcopy: "Vrijblijvend — Binnen 24 uur reactie"
- Header: phone visible + "Plan je proefles" button
- Sticky mobile bar: YES — WhatsApp + "Plan je proefles"
- Spam protection: Cloudflare Turnstile + honeypot

### Step 4c — Trust Signal Priority
1. CBR slagingspercentages (unique — zero competitors show these)
2. Google reviews (5.0/5, 15 reviews)
3. Real geslaagdenfoto's (authentic Facebook celebration photos)

### Step 4d — Pricing Approach
Full prices visible. Transparent packages on homepage + tarieven page. Showing prices filters budget hunters.

### Step 5 — Conversion Requirements
- [x] Primary CTA visible without scrolling
- [x] Secondary CTA every 2-3 sections
- [x] WhatsApp + phone from any page (header + sticky bar)
- [x] Trust signal within first 2 sections
- [x] Commitment barrier: "Kan ik het wel?" → "Behaal zorgeloos je rijbewijs" + CBR stats (source: client voice)
- [x] Social proof: verifiable only (CBR from cbr.nl, Google reviews)
- [x] Form fields minimized (phone optional)
- [x] Privacy note near forms

### Step 6 — Anti-Pattern List
SOP: No opacity:0 hero (LCP), no "Versturen", no aggressive sales, no stock photos, no unverifiable proof, no "bel ons maar even", no "Neem vandaag nog contact op!"
Anti-slop: No uniform padding, no 6/6 grids, no max-w-7xl everywhere, no centered-everything, no uniform card heights, no gradient text, no glassmorphism, no corners > 12px, no identical repeated cards
Client: No blue primary, no carousels, no "Nu kopen", no corporate tone, no hidden pricing, no JS bloat, no navy+gray, no serif, no budget design

### Step 7 — Interactive Pattern
Pattern C (card selector, zero JS). 6 services in flat grid.

### Step 8 — Repo Stack (E7 D6 F3 R6 A5)
| Layer | Repo | Compat | JS |
|-------|------|--------|----|
| Structure | preline | B (Astro-native) | 0 KB |
| Animation | tailwind-animations | A (Astro-native) | 0 KB |
| Interactive | melt-ui (Svelte) | C | ~8 KB |
| Decorative | skip (inline SVG waves) | — | 0 KB |
| Specific | number-flow | B | ~7 KB |
Total: ~15 KB

Design log checks:
- Font: All previous were serif → proposing geometric sans → NO conflict
- Color: 23° from gold → EXCEPTION documented
- Repo combo: preline + tailwind-animations ≠ last (custom HTML + none) → OK
- Signature: counter animation ≠ last 3 → OK

### Step 9 — Interaction Vocabulary
- Scroll: Measured reveals — fade-up (translateY 20px→0, opacity 0→1, animation-timeline: view())
- Hover: Color shift (energetic) — cards shift to accent on hover, 300ms
- Easing: Snappy — cubic-bezier(0.16, 1, 0.3, 1)
- Signature: Counter animation on CBR stats (number-flow, counts from 0→final on scroll)
- CSS: --ease-project: cubic-bezier(0.16, 1, 0.3, 1);
