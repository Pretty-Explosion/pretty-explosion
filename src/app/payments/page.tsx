import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payments & Energy",
  description:
    "Pretty Explosion payments: CAD-first Stripe payment links, prepaid Energy credits (purchasing power). Dual benefit for clients and PE. Crypto under review with counsel — educational only; not live checkout.",
};

export default function PaymentsPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-72 opacity-60" />
      <div className="relative mx-auto max-w-3xl section-pad py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Payments &amp; Energy
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
          Pay in CAD. Fuel with Energy.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Pretty Explosion is a BC Canada AI revenue company. Settlement is designed around{" "}
          <strong className="font-semibold text-foreground/90">Canadian dollars</strong> and
          standard card / bank rails (e.g. Stripe). Prepaid{" "}
          <strong className="font-semibold text-foreground/90">Energy</strong> is purchasing power
          for PE work — not an investment product. No live checkout on this preview site.
        </p>

        <div className="mt-10 space-y-5">
          <div className="glass rounded-[1.75rem] p-7">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              CAD + Stripe payment links (default)
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Invoices, deposits, and package checkout are planned in{" "}
              <strong className="text-foreground/80">CAD</strong> via ordinary Stripe (Canada) /
              bank settlement. When go-live happens, expect clear payment links — not an exchange
              or investment product. No live payment buttons are enabled here.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              <li>Studio packages (Spark / Pulse / Explosion) and retainers</li>
              <li>Deposits before production starts</li>
              <li>Optional memberships or bundles when offered</li>
            </ul>
          </div>

          <div className="glass rounded-[1.75rem] p-7">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              Energy credits — prepaid purchasing power
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <strong className="text-foreground/80">Energy</strong> is our plain-language name for
              prepaid usage credits: capacity you buy ahead so you can ship more — extra previz
              rounds, cutdowns, Grant AI assists, or production throughput — without restarting
              invoices for every small add-on.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Energy is <strong className="text-foreground/80">CAD-denominated product fuel</strong>
              , redeemable only for Pretty Explosion services. It is{" "}
              <strong className="text-foreground/80">not</strong> a security, yield product, gift
              that appreciates, or stake in the company. Burn rates, expiry, and refunds will be
              written clearly before any packs go live (BC consumer terms with counsel).
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-3">
                  You get
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Clear purchasing power — more shippable work per prepaid pack, a simple meter
                  (energy in → work out), and fewer payment interruptions mid-project.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-3">
                  PE gets
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Prepaid float and smoother ops cash — so we can staff delivery and keep AI +
                  human craft moving without chasing every invoice.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              That mutual upside is intentional: you ship more; PE compounds capacity ethically.
              No fake APY. No “your balance earns returns.”
            </p>
          </div>

          <div className="glass rounded-[1.75rem] p-7">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              How it fits a project
            </h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted">
              <li>
                Start with a{" "}
                <Link href="/packages" className="font-medium text-accent-2 hover:text-white">
                  studio package
                </Link>{" "}
                or path on{" "}
                <Link href="/start" className="font-medium text-accent-2 hover:text-white">
                  /start
                </Link>{" "}
                — pay the deposit or invoice in CAD when live.
              </li>
              <li>
                Optionally top up with Energy packs for extra rounds, assists, or throughput —
                still CAD, still redeemable only with PE.
              </li>
              <li>
                Approve every client-facing deliverable. AI accelerates; people finish what you
                feel.
              </li>
            </ol>
            <p className="mt-4 text-xs text-muted/70">
              Preview site: pricing and packs are illustrative. No checkout is enabled.
            </p>
          </div>

          <div className="glass rounded-[1.75rem] p-7">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              Crypto settlement — under review with counsel
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We may later offer <strong className="text-foreground/80">optional</strong> crypto
              payment acceptance (preferring stablecoins such as USDC via a reputable processor) as
              an alternate settlement rail beside CAD — for operational convenience only. This is{" "}
              <strong className="text-foreground/80">not</strong> an investment, yield, staking, or
              token offering. Crypto checkout is{" "}
              <strong className="text-foreground/80">not enabled</strong> and will not go live
              without BC / Canada legal and tax confirmation (“under review with counsel”).
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-amber-500/30 bg-amber-500/5 p-7">
            <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-amber-100/90">
              Disclaimers (read carefully)
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              <li>
                This page is{" "}
                <strong className="text-foreground/80">educational / informational</strong> only —
                not legal, tax, securities, or regulatory advice.
              </li>
              <li>
                Pretty Explosion does <strong className="text-foreground/80">not</strong> claim to
                be a registered money-services business, crypto exchange, bank, or dealer.
              </li>
              <li>
                Energy / credits are prepaid service capacity — not securities, not yield, not an
                unregistered offering. No fake licenses or APY.
              </li>
              <li>
                Accepting crypto as payment for services can raise tax and (depending on facts)
                FINTRAC / MSB questions in Canada — counsel must confirm before enablement.
              </li>
              <li>
                Prepaid consumer credits may need BC disclosure, expiry, and refund terms —
                counsel before any pack sale.
              </li>
              <li>
                No contact email, phone, or address is invented here; use the Contact form when
                ready.
              </li>
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Internal / planning only
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted/80">
              Team strategy notes (not client advice; not published as product terms):{" "}
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-accent-3">
                docs/DUAL-BENEFIT-ECONOMY.md
              </span>
              {" · "}
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-accent-3">
                docs/CRYPTO-PAYMENTS-BC.md
              </span>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/start" className="btn-primary text-center text-sm">
            Start a project
          </Link>
          <Link href="/contact" className="btn-secondary text-center text-sm">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
