# Pretty Explosion — Deploy Checklist

Use this when moving the local final draft toward a public host (Origin / Cursor cloud agents, Vercel, or similar). Nothing here invents contact details or metrics.

---

## 1. Origin / repo namespace

- [ ] Confirm **Origin namespace** (or chosen SCM org) for the production repo
- [ ] Connect hosting (e.g. Vercel to Origin) per https://cursor.com/codebase/get-started
- [x] Production origin — https://prettyexplosion.com (GoDaddy). Still point DNS at the host.
- [x] metadataBase — `NEXT_PUBLIC_SITE_URL`, default https://prettyexplosion.com (`src/lib/site.ts`)

---

## 2. Environment

| Variable / secret | Needed? | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Defaults to https://prettyexplosion.com. Set only to override metadata, Open Graph, canonicals, sitemap, and robots. |
| `RESEND_API_KEY` | Yes, for live leads | Contact and recruit forms send through Resend. See `.env.example`. Without the key the form shows an error. |
| `CONTACT_FROM_EMAIL` | After domain verification | Defaults to the shared Resend sender. Set to `Pretty Explosion <hello@prettyexplosion.com>` once prettyexplosion.com is verified. |
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
- [ ] Confirm `/contact` and `/recruit` show an error when `RESEND_API_KEY` is missing, and deliver to prettyxplosion@gmail.com when it is set

---

## 4. Hosting

Suggested path (pick one; do not invent vendor lock-in):

1. Origin + connected Vercel (or equivalent) for the Next.js App Router app
2. Set production branch / auto-deploy on main
3. Attach custom domain when ready
4. Attach https://prettyexplosion.com. Metadata, Open Graph, canonicals, sitemap, and robots already use that origin unless `NEXT_PUBLIC_SITE_URL` is set.

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
