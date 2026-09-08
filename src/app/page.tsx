'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  {
    eyebrow: "Studio",
    title: "Film, docs & movies",
    body: "Cinema-grade commercial, documentary, and movie work. Human craft + AI speed.",
    href: "/studio",
    cta: "Explore Studio",
  },
  {
    eyebrow: "Grants",
    title: "Grant submissions",
    body: "Match opportunities to your craft, then draft with confidence. You approve every path.",
    href: "/grants",
    cta: "Browse grants",
  },
  {
    eyebrow: "Desk",
    title: "Transparent journalism",
    body: "Truth-seeking reporting — solutions and accountability. Clarity over clickbait.",
    href: "/journalism",
    cta: "Visit the desk",
  },
  {
    eyebrow: "Crew",
    title: "Recruit skilled participants",
    body: "Directors, editors, journalists, producers, AI-fluent creatives. BC-based.",
    href: "/recruit",
    cta: "Join the crew",
  },
];

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
};

export default function HomePage() {
  return (
    <>
      {/* Full-viewport galactic cover — keyart includes name/logo */}
      <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-black">
        <h1 className="sr-only">Pretty Explosion</h1>
        <img
          src="/brand/logo/galactic-keyart.png"
          alt="Pretty Explosion — galactic keyart with name"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(0,0,0,0.5)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/60 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.65 }}
            className="mx-auto w-full max-w-6xl section-pad pb-16 pt-32 md:pb-24"
          >
            <p className="max-w-md text-sm leading-relaxed text-white/55 md:text-[0.9375rem]">
              Film and docs via Studio. Grant submissions. Transparent journalism.
              Recruiting skilled participants.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/start" className="btn-primary">
                Start
              </Link>
              <Link href="/studio" className="btn-secondary">
                Open Studio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pillars" className="mx-auto max-w-6xl section-pad scroll-mt-20 space-section">
        <motion.div {...fade} className="mb-16 max-w-xl md:mb-20">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Four tracks. One company.
          </h2>
        </motion.div>
        <div className="grid gap-px bg-card-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              {...fade}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="flex flex-col bg-background p-8 md:p-10"
            >
              <p className="eyebrow">{p.eyebrow}</p>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{p.body}</p>
              <Link
                href={p.href}
                className="mt-10 text-sm font-medium text-foreground/70 transition hover:text-foreground"
              >
                {p.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-card-border">
        <div className="mx-auto max-w-6xl section-pad space-section">
          <motion.div {...fade} className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Studio</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              Film, docs, movies
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              Quality Video Promotion — Spark, Pulse, or Explosion. Brief → preview → approve.
              Pricing is illustrative.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/studio" className="btn-primary">
                View studio
              </Link>
              <Link href="/start" className="btn-secondary">
                Start
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl section-pad space-section">
        <motion.div {...fade} className="max-w-xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to make something — or join the crew?
          </h2>
          <p className="mt-5 max-w-md text-muted leading-relaxed">
            Start a brief, explore grants, pitch the desk, or tell us how you want to collaborate.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/start" className="btn-primary">
              Start
            </Link>
            <Link href="/recruit" className="btn-secondary">
              Recruit
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
