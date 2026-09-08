import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pretty Explosion is a future-forward film and media company — Quality Video Promotion, Grant Intelligence, and truth-seeking journalism.",
};

const pillars = [
  {
    title: "Quality Video Promotion",
    body: "Our flagship: premium AI-assisted commercial and promo production. Cinematic quality, human craft + AI speed, inclusive storytelling for brands, artists, nonprofits, and creators.",
  },
  {
    title: "Grant Intelligence",
    body: "AI grant matching and submission support across every filming and media form — so bold projects find funding, not just the usual suspects.",
  },
  {
    title: "Truth-seeking Journalism",
    body: "A positive, rigorous investigative desk: solutions and accountability, not doom-scroll. Cinema-grade explainers with editorial independence.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-80 opacity-70" />
      <div className="relative mx-auto max-w-6xl section-pad py-14 md:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">About</p>
          <h1 className="editorial-display mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
            Film & media for what comes next
          </h1>
          <div className="mt-5">
            <Image
              src="/brand/logo/blackhole-lockup.png"
              alt="Pretty Explosion"
              width={280}
              height={187}
              className="h-auto w-full max-w-[240px] object-contain object-left opacity-95"
            />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Pretty Explosion Ltd is a BC Canada AI revenue company at the intersection of production,
            creator infrastructure, and public-interest journalism. We combine AI-intelligent
            tooling with respect for human expertise — directors, producers, reporters, and
            cultural consultants who know how stories move the world.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="glass rounded-3xl p-6">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">Our mission</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Expand who gets seen, funded, and believed — through cinematic promo that scales,
              grant tools that democratize access, and journalism that seeks truth without
              abandoning hope.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 to-transparent p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">Inclusive by default</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We design for emerging creators, underrepresented voices, Indigenous storytelling,
              women and non-binary leadership, youth, climate and social impact — because
              excellence is already everywhere.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link href="/studio" className="btn-primary">
            Explore the studio
          </Link>
          <Link href="/invest" className="btn-secondary">
            Partners & invest
          </Link>
          <Link href="/contact" className="btn-secondary">
            Talk with us
          </Link>
        </div>
      </div>
    </div>
  );
}
