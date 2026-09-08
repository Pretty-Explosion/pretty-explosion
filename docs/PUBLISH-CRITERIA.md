# Pretty Explosion — Publish criteria

**Status:** Publish-candidate draft (site shell ready; go-live blocked on Luke items below)  
**Path:** `/workspace/pretty-explosion`  
**Legal name (planned):** Pretty Explosion Ltd (BC limited company)  
**Contact email:** prettyxplosion@gmail.com  
**Companion:** [`FINAL-DRAFT.md`](./FINAL-DRAFT.md) · [`DEPLOY-CHECKLIST.md`](./DEPLOY-CHECKLIST.md) · [`BC-SETUP-CHECKLIST.md`](./BC-SETUP-CHECKLIST.md)

Use this as the single go / no-go list. **DONE** = already true in the draft. **BLOCKED** = needs Luke (or counsel / vendors Luke chooses) before a public launch.

---

## Summary

| Bucket | Count |
|--------|------:|
| **DONE** (draft / site + Luke-provided email) | **16** |
| **BLOCKED** (needs Luke) | **12** |

Soft-launch of a marketing shell can proceed once domain + hosting + metadataBase land; full commercial launch also needs Pretty Explosion Ltd registration, bank, Stripe, and counsel sign-off on invest / Energy / alternate-rails copy.

---

## DONE — site & draft

- [x] Main routes shipped — /, /start, /ai, /studio, /grants, /assistant, /journalism, /invest, /about, /contact, /payments
- [x] Brand locks — galactic cover, blackhole nav/footer/mark, Space Grotesk + Inter, chrome/silver palette
- [x] Nav + footer — Payments linked; core routes present
- [x] Quality Video packages — Spark / Pulse / Explosion with illustrative pricing labeled as such
- [x] Studio media placeholders — Drop clips here later frames (no invented sample reels)
- [x] Grant explorer — filterable example catalog
- [x] Grant AI — client-side mock (no API keys / live LLM)
- [x] Journalism desk — standards + sample directions marked illustrative
- [x] Invest page — Canada/BC securities disclaimer; no fake traction / AUM
- [x] Payments and Energy page — CAD-first framing; prepaid Energy; no live checkout
- [x] Contact form — client validation + mock submit
- [x] Contact email — prettyxplosion@gmail.com (mailto on Contact + Footer)
- [x] AI client promise — brief to preview to approve across /ai, /studio, /start
- [x] Internal docs — FINAL-DRAFT, deploy, BC setup, payments notes, marketing plan
- [x] Entity choice — Pretty Explosion Ltd (BC limited company) confirmed; registration still pending
- [x] Production build expected to pass

---

## BLOCKED — needs Luke
### Entity and money

- [ ] Legal entity registration — incorporate Pretty Explosion Ltd via Corporate Online / BC Registries as counsel advises; no registration number on site until issued
- [ ] BC registry / CRA — filings for Pretty Explosion Ltd, Business Number, GST (and PST if advised)
- [ ] Business bank (CAD) — account in the name Pretty Explosion Ltd
- [ ] Stripe (Canada) — account + payment links wired to business bank (no live buttons until then)

### Identity and reachability

- [ ] Domain — production hostname chosen + DNS
- [ ] Public phone / mailing address — only if you want them public (email is done)

### Hosting and metadata

- [ ] Origin / hosting — Origin namespace (or SCM org) + connected host (e.g. Vercel)
- [ ] metadataBase URL — replace http://localhost:3000 in src/app/layout.tsx with the real production URL

### Assets and counsel

- [ ] Film clips / stills — real media for Studio Drop clips here later slots
- [ ] Lawyer sign-off — invest page language + any Energy / prepaid-credit / alternate-rails consumer terms (BC / Canada)
- [ ] Alternate rails — remain off until counsel confirms; page already says under review
- [ ] Energy pack terms — expiry, refunds, disclosures written with counsel before any pack sale

### Optional (nice for launch, not hard blockers for a shell)

- [ ] Real grant programs to replace example catalog rows
- [ ] Domain email / Workspace later (initial contact: prettyxplosion@gmail.com)
- [ ] Contact form mailer (Resend, Formspree, etc.)
- [ ] Analytics (privacy-aware for Canada)

---

## Explicit non-goals until unblocked

- No fake phone, address, registration number, or traction metrics
- No live payment checkout or alternate-rail settlement on this draft
- No change to locked brand system

---

*Last updated: publish-candidate sprint · Sun Sep 6, 2026 PT*
