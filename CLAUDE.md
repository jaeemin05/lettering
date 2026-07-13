# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

**LetteRing** — an emotional, poetic jewelry shopping site ("마음을 반지에 새기다" / *Engraving your mind on a ring*). Copy is Korean; brand terms stay English. The aesthetic is warm and sentimental, never cold or clinical.

## Commands

```bash
npm run dev      # dev server (Turbopack) — http://localhost:3000
npm run build    # production build (also runs the TypeScript typecheck)
npm run start    # serve the production build
npm run lint     # ESLint (eslint-config-next)
```

There is no test runner configured. `npm run build` is the verification gate — it typechecks and statically prerenders every route, so a green build means the whole site compiles.

## Design system (non-negotiable brand rules)

Colors and fonts are defined once in [app/globals.css](app/globals.css) via Tailwind v4's `@theme` block (there is **no** `tailwind.config.js` — Tailwind v4 is CSS-first). Use the semantic utility classes, never raw hex:

- `warm-beige` #FAF6F0 — page background · `cream` #FFFDF9 — card/surface
- `burgundy` #6B1D2F — primary accent · `burgundy-deep` — hover/pressed
- `brown` #4A3A35 — body text/lines · `brown-soft` — secondary text
- `gold` #B08D57 — subtle eyebrow/divider accent

**Never use pure black (#000000) or pure white (#FFFFFF)** — it breaks the warm tone. Reach for `brown` / `warm-beige` / `cream` instead.

Typography: `font-serif` (Playfair Display) for headings, logo, and emotional pull-quotes — often italic. `font-sans` (Geist) for body. Both are wired as CSS variables in [app/layout.tsx](app/layout.tsx).

## Architecture

App Router. Routes are `app/<name>/page.tsx`; the five nav sections are `about`, `shop`, `letters`, `review`, `notice`. Photos are curated Unsplash images served via `next/image` — [lib/images.ts](lib/images.ts) is the single source (photo IDs with Korean descriptions, `unsplash()` URL helper, and `filmClass` — a desaturate/sepia filter applied to every photo for analogue cohesion; keep it when adding images). Each photo wrapper also carries the `.grain` noise overlay. `images.unsplash.com` is allowed in [next.config.ts](next.config.ts). Page copy/data lives inline in each page except products ([lib/products.ts](lib/products.ts)) and nav ([lib/nav.ts](lib/nav.ts)).

The cart is client-side: [lib/cart.ts](lib/cart.ts) persists to localStorage and fires a `cart:updated` event; `Header` subscribes for the badge, `AddToCartButton` writes. There is no `/cart` or `/mypage` page yet — the header icons 404.

- [app/layout.tsx](app/layout.tsx) loads fonts + metadata and wraps every page with `Header` / `Footer`.
- [lib/nav.ts](lib/nav.ts) is the **single source of truth for navigation** — both `Header` and `Footer` import `navItems`. Add or rename a nav link here, not in the components.
- Client components are only [components/Header.tsx](components/Header.tsx) (active-link, mobile menu, cart badge) and [components/AddToCartButton.tsx](components/AddToCartButton.tsx). Everything else is a server component; keep it that way unless interactivity is truly needed.
- [components/PageHero.tsx](components/PageHero.tsx) is the shared eyebrow/title/description hero used by all sub-pages — reuse it for new sections instead of hand-rolling headers.

## Gotchas

- **Next.js 16 + Turbopack** — see AGENTS.md above; conventions may differ from older Next.js. Read `node_modules/next/dist/docs/` before using an unfamiliar API.
- **lucide-react is a 1.x release with brand icons removed** — `Instagram`, and likely other social/brand glyphs, no longer export and will fail the build. Verify an icon exists (e.g. `node -e "console.log(!!require('lucide-react').IconName)"`) before importing it; use a generic glyph (`AtSign`, `Send`) as a fallback.
