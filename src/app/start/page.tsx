import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Three clear paths with Pretty Explosion — quality video, funding, or partnership. AI that grows revenue smoothly, not novelty.",
};

const paths = [
  {
    eyebrow: "01",
    title: "Start a Quality Video brief",
    body: "Spark, Pulse, Explosion, or a ~2:00 Hard-Sell — CAD planning bands, quote after brief. Cinema-grade promo with human craft and AI speed. Brief → preview → approve.",
    href: "/packages",
    secondaryHref: "/studio",
    secondaryCta: "Open studio",
    cta: "See packages",
  },
  {
    eyebrow: "02",
    title: "Find funding / Grant AI",
    body: "Browse example funders and use Grant AI for match ideas, draft outlines, and checklists. Always reviewable. Always yours.",
    href: "/grants",
    secondaryHref: "/assistant",
    secondaryCta: "Open Grant AI",
    cta: "Browse grants",
  },
  {
    eyebrow: "03",
    title: "Pitch / partner",
    body: "Investors, brand collaborators, and strategic partners — BC AI revenue company overview (educational; not a securities offer).",
    href: "/invest",
    secondaryHref: "/contact",
    secondaryCta: "Contact us",
    cta: "Investor overview",
  },
];

export default function StartPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-72 opacity-60" />
      <div className="relative mx-auto max-w-6xl section-pad py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Start a project</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
            Three paths. No maze.
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Pick the door that fits. Video, funding, or partnership — calm paths that grow revenue
            smoothly for you and for PE. AI accelerates; people finish what clients feel.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {paths.map((p) => (
            <div
              key={p.title}
              className="glass flex flex-col rounded-[1.75rem] p-7 transition hover:border-white/20"
            >
              <p className="font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.14em] text-accent-3">
                {p.eyebrow}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.body}</p>
              <div className="mt-8 flex flex-col gap-2">
                <Link href={p.href} className="btn-primary w-full text-center text-sm">
                  {p.cta}
                </Link>
                {"secondaryHref" in p && p.secondaryHref && (
                  <Link href={p.secondaryHref} className="btn-secondary w-full text-center text-sm">
                    {p.secondaryCta}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-accent/5 px-6 py-8 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">
                Payments &amp; Energy
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight md:text-2xl">
                CAD payment links + prepaid Energy credits
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Stripe / CAD first. Energy is purchasing power so you can ship more — PE gets
                prepaid float. Crypto rails under review with counsel. No live checkout on this
                preview.
              </p>
            </div>
            <Link href="/payments" className="btn-primary shrink-0 text-center text-sm">
              How payments &amp; Energy work
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.02] px-6 py-8 text-center md:px-10">
          <p className="text-sm text-muted">
            AI here is for smooth revenue growth — not novelty.{" "}
            <Link href="/ai" className="font-semibold text-accent-2 transition hover:text-white">
              How AI helps you →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
