import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor One-Pager",
  description:
    "Pretty Explosion investor overview — BC Canada AI revenue company. Quality Video beachhead, grants, Studio OS, broader AI products. Illustrative preview only; not a securities offering.",
};

const engines = [
  {
    eyebrow: "Beachhead",
    title: "Quality Video Promotion",
    body: "Cinema-grade spots and campaign films for brands, artists, nonprofits, and creators. Human craft + AI speed — first cash engine, not the only product forever.",
  },
  {
    eyebrow: "Platform",
    title: "Grant Intelligence",
    body: "AI matching and submission support across narrative, documentary, commercial, TV, animation, streaming, and immersive media.",
  },
  {
    eyebrow: "Desk",
    title: "Truth-seeking Journalism",
    body: "Solutions-led investigative desk — rigor and accountability without doom-scroll. Builds audience and institutional credibility.",
  },
];

const packages = [
  { name: "Spark", feel: "Social-ready short promo", price: "From ~$2,500" },
  { name: "Pulse", feel: "Multi-cut campaign package", price: "From ~$8,500" },
  { name: "Explosion", feel: "Full cinematic promo production", price: "From ~$28,000" },
];

const margins = [
  {
    title: "Shot libraries",
    body: "Reusable cinematic plates and motifs across briefs — less reinventing, more polish.",
  },
  {
    title: "AI previz",
    body: "Boards, animatics, and rough assembly that compress alignment time before cameras roll.",
  },
  {
    title: "Templated finish",
    body: "Color, captions, aspect variants, and delivery kits without a new pipeline every job.",
  },
];

const payRows = [
  ["Core craft", "Competitive production pay for directors, editors, and specialists who ship cinema-grade work"],
  ["Package velocity", "Studio revenue from Spark / Pulse / Explosion (and custom scopes)"],
  ["Upside", "Success participation, equity-for-video where aligned, and platform upside as Grant Intelligence and PE Studio OS mature"],
  ["Culture", "Inclusive crews; ethical AI disclosure; journalism desk independence norms"],
];

const capital = [
  {
    stage: "Phase 0",
    body: "Prove flagship delivery — Quality Video Promotion pipeline, brand/creator relationships, and repeatable Spark→Explosion packaging.",
  },
  {
    stage: "Seed · CAD $150–400k band",
    body: "Uses story (not an offer): delivery float, people/ops, AI toolchain, Grant Intelligence + next product GTM, working capital. Exact instruments only with Canadian counsel.",
  },
  {
    stage: "Later · Studio OS + AI products",
    body: "Scale the brief→preview→approve OS and broader AI SaaS / automation / B2B tools — software-ish margin beside the media vertical.",
  },
];

const wildcards = [
  {
    title: "Equity-for-video",
    body: "Selective equity or success participation in lieu of / alongside cash for aligned startups and creators.",
  },
  {
    title: "CSR slate",
    body: "Brand-funded social-impact promo and journalism collaborations.",
  },
  {
    title: "White-label",
    body: "PE pipelines and finish templates under partner brands / agencies.",
  },
  {
    title: "Stock + custom",
    body: "Library + bespoke hybrid packages that keep margins while staying cinematic.",
  },
];


const revenuePhases = [
  {
    phase: "A",
    title: "Quality Video beachhead",
    body: "Sell Spark / Pulse / Explosion with AI speed — cash engine. Cinema-grade craft; human finish on deliveries.",
  },
  {
    phase: "B",
    title: "Grant Intelligence recurring",
    body: "Membership + success fees once the helper earns trust. Contingent fees never fund baseline payroll alone.",
  },
  {
    phase: "C",
    title: "Studio OS → AI product surface",
    body: "Brief → preview → approve portal, then software-ish margin that can power SaaS, automation, and B2B tools beyond media.",
  },
  {
    phase: "D",
    title: "B2B & new AI lines",
    body: "Optional white-label, stock+custom libraries, and other AI products chosen by contribution margin — not film-only forever.",
  },
];

export default function InvestPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-64 opacity-60" />
      <div className="relative mx-auto max-w-6xl section-pad py-14 md:py-16">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Investor one-pager
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
            Pretty Explosion
          </h1>
          <p className="mt-4 text-xl font-medium text-accent-2 md:text-2xl">
            BC Canada AI revenue company — products that compound cash.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Pretty Explosion builds AI-accelerated products that grow revenue smoothly.{" "}
            <span className="text-foreground/90">Quality Video Promotion</span> is the beachhead
            (cinema-grade, human-directed). Grant Intelligence, Studio OS, and broader SaaS /
            automation / B2B tools expand the machine — media is a vertical, not a ceiling.
          </p>
        </div>

        {/* Non-solicitation disclaimer (kept) */}
        <div className="mt-10 rounded-2xl border border-warning/30 bg-warning/5 px-5 py-4 text-sm text-muted">
          <p className="font-medium text-warning">Disclaimer (Canada / British Columbia)</p>
          <p className="mt-1 leading-relaxed">
            Illustrative preview for conversation only. Pretty Explosion is based in{" "}
            <span className="text-foreground/85">British Columbia, Canada</span>. This page is{" "}
            <span className="text-foreground/85">not an offering memorandum</span>, not a prospectus,
            and <span className="text-foreground/85">not an offer to sell securities</span> in Canada,
            the United States, or any other jurisdiction. It is not legal, tax, financial, or
            investment advice, and not a solicitation under Canadian securities law (including BCSC /
            CSA frameworks) or foreign regimes. Any capital raise would require appropriate Canadian
            counsel and compliant exemptions or filings — talk to a{" "}
            <span className="text-foreground/85">BC-qualified lawyer and accountant</span> before
            acting. Package prices, Seed bands, and structure notes are illustrative placeholders in
            CAD framing. No traction, AUM, or forecasts are claimed here. Example metrics elsewhere on
            this site are for product demos only.
          </p>
        </div>

        
        {/* AI revenue machine */}
        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">
            North star
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            AI revenue machine
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Success = AI-accelerated products that compound cash. Quality Video is the beachhead;
            the company is built to add SaaS, automation, and B2B tools — not film-production-only.
            Educational roadmap only; no invented traction.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {revenuePhases.map((p) => (
              <div key={p.phase} className="glass flex flex-col rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Phase {p.phase}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted/70">
            Internal roadmap detail: docs/AI-REVENUE-MACHINE.md · treasury notes:
            docs/trading-finance-beside-product.md (CAD; educational).
          </p>
        </section>

        {/* Three engines */}
        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">
            Three engines
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            One company. Three engines of impact.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {engines.map((e) => (
              <div key={e.title} className="glass flex flex-col rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {e.eyebrow}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{e.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">
            Packages
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            Spark · Pulse · Explosion
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Flagship studio packaging.{" "}
            <span className="text-foreground/80">All pricing is illustrative</span> — final quotes
            depend on scope, talent, locations, and usage.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl border p-6 ${
                  pkg.name === "Explosion"
                    ? "border-white/20 bg-gradient-to-b from-white/[0.1] to-transparent"
                    : "border-white/[0.08] bg-white/[0.03]"
                }`}
              >
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                  {pkg.name}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-accent-2">
                  {pkg.price}
                </p>
                <p className="mt-1 text-xs text-muted/70">Illustrative example pricing</p>
                <p className="mt-4 text-sm text-muted">{pkg.feel}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm">
            <Link href="/studio" className="font-semibold text-accent-2 transition hover:text-white">
              See full studio packages →
            </Link>
          </p>
        </section>

        {/* Unit economics */}
        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">
            Unit economics
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            Margin play
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Qualitative margin levers — not financial projections. Directors keep taste, framing,
            and performance; AI accelerates the repetitive path from brief to masters.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {margins.map((m) => (
              <div
                key={m.title}
                className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-6"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pay / upside */}
        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">
            Structure
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            Pay / upside summary
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Illustrative operating model — not compensation guarantees or forecasts.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  <th className="px-5 py-3 font-[family-name:var(--font-display)] font-semibold">
                    Layer
                  </th>
                  <th className="px-5 py-3 font-[family-name:var(--font-display)] font-semibold">
                    Approach
                  </th>
                </tr>
              </thead>
              <tbody>
                {payRows.map(([layer, approach]) => (
                  <tr key={layer} className="border-b border-white/5 last:border-0">
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-foreground/90">
                      {layer}
                    </td>
                    <td className="px-5 py-4 text-muted">{approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Capital path */}
        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">
            Capital path
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            Phase 0 → Seed → Series A
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {capital.map((c) => (
              <div key={c.stage} className="glass rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {c.stage}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted/70">
            Exact instruments, dilution, and milestones shared only under appropriate agreements.
          </p>
        </section>

        {/* Investor one-liner */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-[#0a0a0c] to-accent/10 px-8 py-10 md:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Investor one-liner
            </p>
            <blockquote className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
              Pretty Explosion is a BC-based AI revenue company — Quality Video as beachhead, then
              grants, Studio OS, and broader SaaS/automation that compound cash.
            </blockquote>
          </div>
        </section>

        {/* Wildcards */}
        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">Wildcards</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            Optional upside surfaces
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {wildcards.map((w) => (
              <div
                key={w.title}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
              Start a conversation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Brand fit, studio pipeline capacity, grant-platform roadmap, journalism desk
              independence norms, and whether a partnership or capital conversation makes sense.
              Formal materials shared only under appropriate agreements.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-sm">
                Contact / intro call
              </Link>
              <Link href="/studio" className="btn-secondary text-sm">
                Quality Video Promotion
              </Link>
              <Link href="/start" className="btn-secondary text-sm">
                Start here
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 to-transparent p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
              Source markdown
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The canonical one-pager lives in-repo at{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-xs text-accent-2">
                docs/investor-one-pager.md
              </code>{" "}
              — tight, print-friendly, matching the sections on this page.
            </p>
            <p className="mt-4 text-xs text-muted/70">
              Again: not an offer to sell securities in Canada or elsewhere; BC/Canada framing;
              illustrative preview only.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
