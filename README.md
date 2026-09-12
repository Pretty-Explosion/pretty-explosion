# Pretty Explosion

Local preview website for **Pretty Explosion** — a **BC Canada AI revenue company**. Beachhead: **Quality Video Promotion**, **Grant Intelligence**, and **Truth-seeking Journalism**; roadmap opens to broader AI SaaS/automation. Success = AI-accelerated products that compound cash.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Framer Motion
- Client-side mock Grant AI (no API keys)

## Getting started

```bash
cd pretty-explosion
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Full-page galactic keyart cover + pillars, studio, invest CTAs |
| `/start` | Calm three-door entry — Video / Grants / Partner |
| `/ai` | Plain-language "How AI helps you" (brief → preview → approve) |
| `/studio` | Quality Video Promotion — Spark / Pulse / Explosion |
| `/packages` | Planning bands (quote after brief) — Spark / Pulse / Explosion + retainer |
| `/grants` | Filterable explorer with example grant data |
| `/assistant` | Grant AI chat (mock intelligence) |
| `/journalism` | Truth-seeking journalism desk |
| `/invest` | Investor one-pager (with securities disclaimer) |
| `/about` | Mission and pillars |
| `/contact` | Contact form (client-side validation, mock submit) |
| `/payments` | CAD-first payment links + Energy credits (no live checkout) |


## Themes

Default is **Dark** (cinema polish on Studio featured video). Session-only via query or the nav switcher (Dark · Light · Paper · Editorial):

| Mode | Activate |
|------|----------|
| Dark (default) | `/` or clear `?theme` |
| Light | `/?theme=light` |
| Paper (warm ivory gallery) | `/?theme=paper` |
| Editorial (magazine type) | `/?theme=editorial` |

Nav control sets `data-theme` on `<html>` and syncs the URL without a full reload. `ThemeFromQuery` still handles deep links.

## Design tokens

Defined in `src/app/globals.css` (`:root` + `@theme inline`): background, foreground, muted, chrome-silver accents, glass surfaces, and shared button/input utilities.

## Brand

Locked **galactic / blackhole** brand system:

- **Homepage cover** = `public/brand/logo/galactic-keyart.png` — full-viewport keyart (includes name). Stable paths `public/brand/logo-signature.png` and `public/brand/logo-wordmark-primary.png`.
- **About / Footer mark** = large blackhole-lockup (footer bigger than nav).
- **Nav compact lockup** = `public/brand/logo/blackhole-lockup.png` on desktop Navbar.
- **Favicon / mobile mark** = `public/brand/logo/blackhole-mark.png` (stable path `public/brand/logo-mark.png`); used for mobile nav and metadata icons.
- **UI type** = Space Grotesk (display) + Inter (body); JetBrains Mono for AI/assistant labels.
- **Palette** = chrome / minimal silver-black — not neon.
- **Archived explorations** = cyber Caps under `public/brand/cyber/`, calligraphy under `public/brand/calligraphy/` (not primary brand).

CSS variables: `--font-display`, `--font-body`, `--font-mono` (via `next/font/google` in `src/app/layout.tsx`).

## Notes

- All grant listings are marked as **examples** for preview purposes.
- The Grant AI assistant runs entirely in the browser — no external LLM or API keys.
- Studio / packages bands are **CAD planning ranges** — quote after brief, not sold prices. Buy stays dark until BN / CAD Stripe.
- AI client promise: **brief → preview → approve**, with human craft on every delivery.
- Built for mobile-first responsive layouts with sticky navigation and footer.

## Publish criteria

Go-live DONE vs BLOCKED checklist: [`docs/PUBLISH-CRITERIA.md`](./docs/PUBLISH-CRITERIA.md).

Publish-candidate draft status: [`docs/FINAL-DRAFT.md`](./docs/FINAL-DRAFT.md).

Planned legal name: **Pretty Explosion Ltd** (BC limited company). Contact: prettyxplosion@gmail.com.
