# Pretty Explosion — Deploy Checklist

Use this when moving the local final draft toward a public host (Origin / Cursor cloud agents, Vercel, or similar). Nothing here invents contact details or metrics.

---

## 1. Origin / repo namespace

- [ ] Confirm **Origin namespace** (or chosen SCM org) for the production repo
- [ ] Connect hosting (e.g. Vercel to Origin) per https://cursor.com/codebase/get-started
- [ ] Decide production domain / subdomain (placeholder OK until DNS is ready)
- [ ] Set metadataBase in src/app/layout.tsx from http://localhost:3000 to the real site URL once known

---

## 2. Environment

| Variable / secret | Needed? | Notes |
|---|---|---|
| Public site URL | Yes (at go-live) | For Open Graph / canonicals via metadataBase |
| Contact form mailer (Resend, Formspree, etc.) | Optional | Form currently validates + mock-submits client-side only |
| LLM / Grant AI API keys | No for current preview | Assistant is local mock intelligence |
| Analytics | Optional | Do not invent traction metrics on-site |

No dotenv secrets are required for the shipped build or start scripts.

---

## 3. Build and smoke test

From the pretty-explosion project root:

1. Install dependencies with the package manager
2. Run the production build script from package.json
3. Serve the production build locally to smoke-test

- [ ] Production build exits 0
- [ ] Spot-check /, /start, /studio, /grants, /contact on desktop + phone width
- [ ] Confirm galactic cover + blackhole nav/footer still load from public/brand/logo/
- [ ] Confirm contact form validates without a backend

---

## 4. Hosting

Suggested path (pick one; do not invent vendor lock-in):

1. Origin + connected Vercel (or equivalent) for the Next.js App Router app
2. Set production branch / auto-deploy on main
3. Attach custom domain when ready
4. After URL is live: update metadataBase, Open Graph image absolute URLs if needed, and robots

Preview / staging before production is recommended while media and legal copy are still pending.

---

## 5. What Luke must provide (blocked without these)

Do **not** invent these on the site:

| Item | Why |
|---|---|
| **Film clips / stills** | Studio Drop clips here later placeholders stay empty until real assets land |
| **Contact email** | Form / footer must not use a fake address |
| **Legal / company name** | Footer copyright and any contracts / invoices |
| **Phone / mailing address** (if any) | Only if you want them public — omit rather than invent |
| **Origin namespace + domain preference** | Deploy wiring |
| **Real grant programs** (optional) | Replace example catalog rows when ready |

Also useful later (not required for a soft launch of the shell): refined brand kit exports, commercial font licenses if specialty faces are added, press / case-study quotes.

---

## 6. Brand locks (do not change on deploy)

- Homepage cover = galactic keyart
- Nav / favicon = blackhole lockup / mark
- Footer = large blackhole lockup
- Palette = black / graphite / chrome silver

---

## 7. Post-deploy copy checks

- [ ] Studio package prices still marked illustrative
- [ ] Grants labeled examples until real programs are supplied
- [ ] Invest page securities disclaimer intact
- [ ] No fake traction numbers, fake address, or invented phone/email

---

*Last updated: session work while Luke was away (Sep 6, 2026 PT).*
