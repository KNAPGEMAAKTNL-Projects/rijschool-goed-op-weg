# Rijschool Goed op Weg — Project Guidelines

## Brand Name
Always write the brand name as **RIJSCHOOL GOED OP WEG** (all caps) in formal/heading contexts.
In copy, use **Rijschool Goed op Weg** (mixed case, exactly as written here).

## Tech Stack
- Framework: Astro 6 (Static Site Generation)
- Styling: Tailwind CSS 4 (via @tailwindcss/vite, NOT @astrojs/tailwind)
- Deployment: Cloudflare Pages
- Animation: CSS-only (or GSAP if DESIGN.md specifies animation level 7+)

## Design System
Read `DESIGN.md` before making ANY visual decisions. It is the single source of truth.
Read `.claude/rules/astro-conversion.md` and `.claude/rules/design-fidelity.md` — these MUST be followed during builds.

## Design Reference
`homepage-reference.html` is the visual reference. `DESIGN.md` is the token source of truth.
During builds, reference both — homepage-reference.html for layout intent, DESIGN.md for exact values.

## Skills
Activate `frontend-design` for any HTML generation tasks.
Use Impeccable commands (/audit, /critique, /polish, etc.) for design refinement.

## Copy Language
nl — Dutch. Set during Session 1 Prompt 1.
This is the language ALL website copy is written in.

## Critical Rules
- All internal links MUST NOT end with trailing slash (Astro trailingSlash: "never", build.format: "file")
- All text in Nederlands unless specified otherwise
- Use je/jij (informal) — fits the brand's informal, approachable voice
- All formatting: follow Dutch conventions (e.g., komma als decimaalteken: €12,50 not €12.50)
- Never use stock photos for team/student imagery — real celebration photos only
- Never use "Versturen" as form button text
- Never use aggressive sales language ("Wij zijn de #1 rijschool...")
- NEVER add max-w-*, mx-auto, or container wrappers not in the reference HTML
- NEVER normalize padding/margin values across sections
- NEVER symmetrize asymmetric layouts from the reference design

## Brand Voice
Energetic, informal, celebratory, personal. Gen-Z friendly but not exclusionary.
Uses direct address (jij/je). Celebrates students' achievements genuinely.
Avoid corporate stiffness. Think: proud instructor texting a student's family, not a brochure.

## Design Context

### Target Audience
Young people (16-25) in Tiel and surrounding Betuwe region looking for their first driving license (car, motorcycle, moped) or professional certification (taxi). Parents are often the paying party. Mobile-first audience (70%+), WhatsApp-native communication.

### Brand Personality
Energetic, personal, celebratory

### Emotional Goal
Excitement to start driving + trust that this will work out

### Aesthetic Direction
Warm vivid orange (#F05A1E) on warm off-white (#FFFAF7). Bold geometric sans-serif (Outfit 800 headings, Figtree body). Full-bleed hero with dark overlay. SVG wave section dividers. Gradient CTA buttons. CBR stat counter animation as signature interaction.

### References
Top-rated competitors: Nationale Rijschool (9/10, conversion-optimized), Rijschool de Betuwe (8/10, multi-hero sections), Rijschool GLOW (7.6/10, SVG waves + gradient CTAs). HTML files in competitor-reference/.

### Anti-References
No blue primary (market-saturated). No serif fonts. No conservative palettes. No carousels/sliders. No corporate tone. No hidden pricing. No stock photos. No "Nu kopen" language. No heavy JS bloat.

### Design Principles
1. CBR pass rates are the primary differentiator — display them prominently with animated counters
2. Real celebration photos > any stock imagery — the Facebook gallery IS the portfolio
3. WhatsApp first, phone second — match the audience's communication habits
4. Fast is a feature — Astro static + ~15KB JS budget beats every WordPress competitor
5. The instructor's personality should be visible in the design language, not hidden behind a template
