import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truth-seeking Journalism",
  description:
    "Transparent, non-biased journalism from Pretty Explosion — solutions, accountability, and rigorous storytelling without the doom-scroll.",
};

const pillars = [
  {
    title: "Solutions journalism",
    body: "We investigate what works — evidence, limits, and transferable lessons — so audiences leave with agency, not exhaustion.",
  },
  {
    title: "Accountability reporting",
    body: "Power deserves scrutiny. We pursue documents, data, and sources with care for people most affected by the story.",
  },
  {
    title: "Inclusive beats",
    body: "Coverage that centers underrepresented communities, Indigenous sovereignty, climate justice, culture, and creative economies.",
  },
  {
    title: "Cinematic explainers",
    body: "Visual essays and short docs that make complex systems legible — produced with the same craft as our promo studio.",
  },
];

const sampleStories = [
  {
    pillar: "Creative economy",
    headline: "Who actually owns the AI clip that went viral?",
    blurb: "A rights-and-labor investigation into generative promo pipelines — and the artists rewriting the contracts.",
  },
  {
    pillar: "Climate solutions",
    headline: "The coastal town that funded its own flood film — then won policy",
    blurb: "How community media plus grant stacks turned a local documentary into measurable adaptation funding.",
  },
  {
    pillar: "Accountability",
    headline: "Follow the festival money",
    blurb: "Mapping opaque sponsorships and gatekeeping in film festivals that claim to champion diversity.",
  },
  {
    pillar: "Culture & belonging",
    headline: "Casting the future: inclusive sets that ship on time",
    blurb: "Profiles of productions proving representation and schedule discipline are not a trade-off.",
  },
];

const standards = [
  "Corrections published promptly and visibly",
  "Sources protected; conflicts disclosed",
  "AI tools labeled when used in research or production",
  "No doom-scroll packaging — clarity over clickbait",
];

export default function JournalismPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-64 opacity-40" />
      <div className="relative mx-auto max-w-6xl section-pad py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Journalism desk</p>
          <h1 className="editorial-display mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
            Transparent, non-biased journalism
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            A truth-seeking desk inside Pretty Explosion. Facts, accountability, and solutions —
            cinema-grade storytelling without the doom-scroll.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Pitch a story
            </Link>
            <Link href="/studio" className="btn-secondary">
              Commission a visual essay
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="border border-white/[0.06] bg-white/[0.02] p-7">
              <div className="mb-5 h-px w-8 bg-white/20" />
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Sample story pillars</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            Sample story directions
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Example headlines for partner conversations — illustrative only, not published reporting.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {sampleStories.map((s) => (
              <article
                key={s.headline}
                className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-3">{s.pillar}</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug">
                  {s.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.blurb}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">Desk standards</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {standards.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 to-transparent p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">Collaborate</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Newsrooms, foundations, brands with public-interest mandates, and independent reporters
              can partner on investigations, visual explainers, or distribution. High-level only —
              editorial independence stays with the desk.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex text-sm">
              Talk to the desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
