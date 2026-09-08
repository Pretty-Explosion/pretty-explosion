import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How AI helps you",
  description:
    "How Pretty Explosion uses AI to grow revenue smoothly for clients and for PE — video beachhead, grants, and broader products. Human craft first.",
};

const sections = [
  {
    eyebrow: "Video",
    title: "Faster previz & versions you approve",
    body: "AI helps us sketch looks, cut options, and iterate promo packages quickly. Directors and editors still shape the story. You get clear previews — and you approve before anything ships.",
    href: "/studio",
    cta: "See studio packages",
  },
  {
    eyebrow: "Grants",
    title: "Match + draft help",
    body: "Describe your project and get suggested example funders, outline drafts, and materials checklists. Grant AI is a helper for first drafts — your voice and your facts stay in control.",
    href: "/assistant",
    cta: "Try Grant AI",
    secondaryHref: "/grants",
    secondaryCta: "Browse grants",
  },
  {
    eyebrow: "Journalism",
    title: "Research assist (human editors always decide)",
    body: "AI can speed background research and organization. Human editors decide what publishes. Truth-seeking, solutions framing, and accountability stay editorial — never automated.",
    href: "/journalism",
    cta: "Visit the desk",
  },
];

export default function AiPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-72 opacity-60" />
      <div className="relative mx-auto max-w-6xl section-pad py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">For clients</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
            How AI helps you
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            AI exists to <span className="text-foreground/90">grow revenue smoothly</span> — for
            your projects and for Pretty Explosion — not as novelty demos.
          </p>
          <p className="mt-3 text-base font-medium text-accent-2">
            Brief → preview → approve. Human craft where it counts.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted/80">
            Video is our beachhead; the same habit powers grants and future AI products. No fake
            dashboards — just where AI saves time and where people stay in charge.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {sections.map((s) => (
            <article key={s.eyebrow} className="glass flex flex-col rounded-[1.75rem] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{s.eyebrow}</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                {s.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
              <div className="mt-7 flex flex-col gap-2">
                <Link href={s.href} className="text-sm font-semibold text-accent-2 transition hover:text-white">
                  {s.cta} →
                </Link>
                {"secondaryHref" in s && s.secondaryHref && (
                  <Link
                    href={s.secondaryHref}
                    className="text-sm font-medium text-muted transition hover:text-white"
                  >
                    {s.secondaryCta} →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-4 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-10">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight md:text-3xl">
              Ready when you are
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
              Start with video, funding, or partnership — calm paths that grow outcomes, not
              complexity. We keep the maze out of the way.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/start" className="btn-primary text-sm">
              Start here
            </Link>
            <Link href="/contact" className="btn-secondary text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
