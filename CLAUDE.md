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
[POPULATED BY /teach-impeccable IN PROMPT 5 — left empty during setup]
