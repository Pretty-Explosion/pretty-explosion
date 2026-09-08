# Crypto payments — BC / Canada framing (educational)

**Not legal, tax, securities, or regulatory advice.** Pretty Explosion (PE) is a **BC Canada AI revenue company**. This note is for **smooth operations** — optional settlement rails beside CAD — not a product pitch. Confirm every enablement decision with a **BC-qualified lawyer** (and CPA for tax) before going live.

**Hard framing:** Crypto here means **optional payment acceptance / settlement** for client invoices and product checkout. It does **not** mean investing, yield, staking products, token sales, or PE acting as an exchange.

---

## What this is (and is not)

| Is | Is not |
|---|---|
| Optional way clients settle invoices or packages | An investment product or “earn yield” offer |
| Ops convenience beside **CAD + Stripe** | PE claiming to be an MSB, VASP, or crypto exchange |
| Prefer **stablecoins** (e.g. USDC) via reputable processors | PE issuing a token or promising APY |
| Feature-flagged, lawyer-cleared later | Live checkout without compliance review |

**Brand / company locks:** Dual-benefit economy; AI revenue machine; flexible beyond film. Payments remain a support layer for product cash — not a finance destination page’s hero.

---

## Prefer stablecoins + reputable processors

- **Default asset lens:** fiat-referenced **stablecoins** (commonly discussed: **USDC**) over volatile assets for client settlement — clearer invoicing, less FX drama for both sides.
- **Prefer licensed / reputable payment processors** that already handle custody, conversion, and compliance plumbing — do **not** build a DIY wallet stack for v1.
- **CAD on/off-ramps:** Plan so PE’s books and bank stay **CAD-first**. Typical pattern (illustrative): client pays crypto → processor converts → **CAD** lands in the business bank (or PE invoices in CAD and optionally accepts crypto as an alternate rail). Exact flow depends on the chosen processor and legal advice.
- **Accounting:** Treat crypto receipts like other foreign/alternate settlement — fair market value in CAD at receipt, CPA-approved bookkeeping. No invented COGS or AUM.

---

## Candidate chains for payments UX (high level, neutral)

Compare for **checkout UX**, not for trading. Numbers below are **order-of-magnitude / qualitative** and change over time — re-check before choosing.

| Chain | Fees (typical feel) | Speed (feel) | Ecosystem / UX notes |
|---|---|---|---|
| **Base** (Ethereum L2) | Usually low vs L1 | Fast confirmations for commerce | Growing USDC / consumer-app tooling; EVM-familiar |
| **Solana** | Often very low | Very fast finality feel | Strong consumer / wallet UX; different toolchain than EVM |
| **Polygon** | Low relative to L1 | Fast for most checkout flows | Mature EVM payments / NFT commerce history |
| **Ethereum** (L1) | Higher and more variable | Slower / costlier under congestion | Deepest liquidity & brand recognition; often overkill for small invoices |

**Neutral takeaway for PE:** Any chain choice is secondary to (1) **CAD Stripe working**, (2) a **compliant processor**, (3) lawyer sign-off. Prefer the chain your processor already supports well for **stablecoin invoice settlement**.

---

## Canada / BC caution (must confirm with counsel)

Operating from **British Columbia, Canada**:

1. **Tax reporting** — Crypto received as payment for services is generally business income (CAD FMV). Capital treatment may differ if you hold/convert; **CPA required**. GST/HST (and any PST questions) still apply to the underlying taxable supply in most cases — ask your CPA; do not invent rates or exemptions here.
2. **MSB / FINTRAC** — Businesses **in the business of** transferring or exchanging value (money services, certain virtual asset activities) may need **MSB registration** and AML program obligations under federal rules. Accepting crypto **only as payment for your own goods/services** is a different fact pattern than operating an exchange or remittance desk — **but the line is fact-specific**. **Must confirm with a lawyer before enabling any crypto checkout.**
3. **Securities / BCSC–CSA** — Do not market tokens, pools, or “returns.” Educational docs and `/invest` stay informational; they are not offerings.
4. **Privacy** — Wallet addresses and KYC data from a processor are personal / sensitive operational data; align with PIPEDA / BC PIPA habits.
5. **No fake licenses** — Do not claim PE is registered as an MSB, exchange, or exempt dealer unless that is true and verified.

---

## Recommended phased approach

### Phase 0 — CAD + Stripe only (now)
- Business bank in legal entity name; **Stripe (Canada)** payment links / Checkout.
- Site and docs say: payments are **CAD-first**.
- No crypto UI beyond educational stubs.

### Phase 1 — Research a compliant processor
- Shortlist processors that support **Canada**, **stablecoin → CAD**, invoicing, and clear ToS.
- Lawyer memo: “accept crypto as payment for PE services” vs activities that trigger **MSB / FINTRAC**.
- CPA: bookkeeping, GST, year-end reporting.
- Still **no** public live crypto button.

### Phase 2 — Optional crypto checkout behind a flag
- Feature flag off by default; enable only after Phase 1 sign-off.
- Copy: “Optional settlement rail — not an investment.”
- Stablecoin preference; volatile assets discouraged or blocked.
- Keep Stripe CAD as the default path on `/start` and studio flows.

---

## Hard no (non-negotiable)

- Tokens as **investment**, fundraising via unregistered token sale, or “buy PE coin”
- Fake **APY**, staking yield, or liquidity-mining marketing
- Unregistered **securities** or dealing language
- Claiming PE is an **MSB / exchange / licensed VASP** without proof
- Invented licenses, registrations, or traction metrics
- Enabling live crypto checkout before lawyer + CPA confirmation

---

## Related PE docs

- `docs/BC-SETUP-CHECKLIST.md` — entity, GST, Stripe CAD stack  
- `docs/AI-REVENUE-MACHINE.md` — CAD treasury lens; finance beside product  
- `docs/DUAL-BENEFIT-ECONOMY.md` — dual-benefit framing  
- Site stub: `/payments` (disclaimer-heavy; no live rails)

*Educational only. Last updated Sun Sep 6, 2026 (PT).*
