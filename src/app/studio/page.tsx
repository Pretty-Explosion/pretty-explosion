import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PackageCard } from "@/components/PackageCard";
import { videoPackages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Quality Video Promotion",
  description:
    "Film, docs, and movies via Quality Video Promotion — Spark, Pulse, and Explosion packages. Human craft + AI speed. Brief → preview → approve.",
};

const process = [
  {
    step: "01",
    title: "Brief",
    body: "Share audience, emotion, must-haves, and constraints. We turn that into a creative north star you can feel.",
  },
  {
    step: "02",
    title: "Preview",
    body: "Boards, look options, and temp cuts — fast, clear versions so you can react early. Directors still call taste.",
  },
  {
    step: "03",
    title: "Approve",
    body: "You green-light the direction before we lock production. No surprise deliveries. Your call, every version.",
  },
  {
    step: "04",
    title: "Produce & finish",
    body: "Hybrid craft with inclusive casting and ethical AI disclosure. Color, mix, captions, and channel-ready masters.",
  },
];

const selectedWork = [
  {
    type: "video" as const,
    src: "/studio/preview/luke-hero-extract-1080p.mp4",
    poster: "/studio/preview/luke-hero-extract-poster.jpg",
    caption: "Boys and Men · Trailer",
    alt: "Boys and Men trailer extract — PE production",
    kind: "series · trailer · ~47s",
    mutedDefault: false,
    featured: true,
  },
  {
    type: "video" as const,
    src: "/studio/preview/koa-sam-diner-hero-30s-muted.mp4",
    poster: "/studio/preview/hero-reel-poster.png",
    caption: "KOA & Sam · Diner",
    alt: "Muted 30s hero from KOA and Sam diner scene — public mute per gate",
    kind: "narrative · muted preview",
  },
  {
    type: "video" as const,
    src: "/studio/preview/one-last-call-hero-30s-muted.mp4",
    poster: "/studio/preview/bts-still.png",
    caption: "One Last Call",
    alt: "Muted 30s hero from One Last Call rough assembly — public mute per gate",
    kind: "narrative · muted preview",
  },
  {
    type: "image" as const,
    src: "/studio/preview/boys-and-men-poster.jpg",
    caption: "Boys and Men · Poster",
    alt: "Boys and Men series poster FINAL",
    kind: "series · in development",
  },
  {
    type: "image" as const,
    src: "/studio/preview/diner-natural-still.jpg",
    caption: "KOA & Sam · Still",
    alt: "Natural production still from KOA and Sam diner scene",
    kind: "narrative · production still",
  },
  {
    type: "image" as const,
    src: "/studio/preview/disaster-doc-still.png",
    caption: "Journalism / doc craft",
    alt: "Natural disaster documentary craft still — respectful mutual aid framing",
    kind: "journalism craft",
  },
  {
    type: "video" as const,
    src: "/studio/preview/koa-and-hayley-scene-1080p.mp4",
    poster: "/studio/preview/codex-koa-warm-profile.jpg",
    caption: "Koa & Hayley",
    alt: "Full scene — Koa and Hayley with audio",
    kind: "narrative · full clip",
  },
  {
    type: "image" as const,
    src: "/studio/preview/codex-koa-wide-underpass.jpg",
    caption: "CODEX · Underpass",
    alt: "Wide shot — Koa and adult in underpass, no adult close-up",
    kind: "CODEX · still",
  },
  {
    type: "image" as const,
    src: "/studio/preview/codex-dear-dad-letter.jpg",
    caption: "CODEX · Dear Dad",
    alt: "Dear Dad handwritten letter insert — no faces",
    kind: "CODEX · still",
  },
  {
    type: "image" as const,
    src: "/studio/preview/codex-koa-silhouette.jpg",
    caption: "CODEX · Koa silhouette",
    alt: "Koa silhouette with rim light",
    kind: "CODEX · still",
  },
  {
    type: "image" as const,
    src: "/studio/preview/codex-koa-walk-from-behind.jpg",
    caption: "CODEX · Walk",
    alt: "Koa and adult walking away down corridor — backs only",
    kind: "CODEX · still",
  },
  {
    type: "image" as const,
    src: "/studio/preview/codex-koa-warm-profile.jpg",
    caption: "CODEX · Koa",
    alt: "Koa warm profile still",
    kind: "CODEX · still",
  },
];

const workflow = [
  {
    title: "Human craft",
    items: [
      "Creative direction",
      "Story & inclusivity consult",
      "Talent & performance notes",
      "Final picture lock taste",
    ],
  },
  {
    title: "AI speed",
    items: [
      "Reference clustering",
      "Rough assembly & variants",
      "Temp VO / scratch tracks",
      "Aspect ratio & caption drafts",
    ],
  },
];

export default function StudioPage() {
  const featured = selectedWork.find((w) => "featured" in w && w.featured);
  const gallery = selectedWork.filter((w) => !("featured" in w && w.featured));

  return (
    <div className="relative">
      <div className="relative mx-auto max-w-6xl section-pad py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Studio</p>
          <h1 className="editorial-display mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.25rem]">
            Film, docs & movies
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Quality Video Promotion — cinema-grade work for brands, artists, and creators. Human
            craft + AI speed. Brief → preview → approve.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/start" className="btn-primary">
              Start a brief
            </Link>
            <Link href="/packages" className="btn-secondary">
              See packages
            </Link>
          </div>
        </div>

        {/* Selected work — photographer splash */}
        <div className="mt-28 md:mt-36">
          <div className="mb-14 max-w-lg md:mb-20">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              Selected work
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Lived craft samples and series development. Muted for public where dialogue needs a
              clean pass.
            </p>
          </div>

          {/* Featured trailer — cinema polish (2.39 letterbox-safe margins) */}
          {featured && (
            <figure className="mb-20 md:mb-28">
              <div
                className="cinema-featured"
                aria-label="Featured trailer with cinema letterbox framing"
              >
                <div className="cinema-featured__frame">
                  <video
                    src={featured.src}
                    poster={"poster" in featured ? featured.poster : undefined}
                    controls
                    playsInline
                    preload="metadata"
                    muted={
                      "mutedDefault" in featured ? featured.mutedDefault !== false : true
                    }
                  />
                </div>
              </div>
              <figcaption className="media-caption mt-6">
                <p className="media-caption__kicker">{featured.kind}</p>
                <p className="media-caption__body">{featured.caption}</p>
              </figcaption>
            </figure>
          )}

          {/* Gallery — more whitespace + caption craft (cinema / editorial polish) */}
          <div className="studio-gallery grid sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.src} className="group">
                <div className="relative aspect-[3/2] overflow-hidden bg-black">
                  {item.type === "video" ? (
                    <video
                      className="h-full w-full object-cover"
                      src={item.src}
                      poster={"poster" in item ? item.poster : undefined}
                      controls
                      playsInline
                      preload="metadata"
                      muted={"mutedDefault" in item ? item.mutedDefault !== false : true}
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1600}
                      height={1067}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.015]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  )}
                </div>
                <figcaption className="media-caption mt-5">
                  <p className="media-caption__kicker">{item.kind}</p>
                  <p className="media-caption__body">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Packages — cleaner */}
        <div id="packages" className="mt-32 scroll-mt-24 md:mt-40">
          <div className="max-w-lg">
            <p className="eyebrow">Packages</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              Spark · Pulse · Explosion
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              CAD planning bands — quote after brief, not sold prices. Final quotes depend on
              scope, talent, locations, and usage.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-card-border lg:grid-cols-3">
            {videoPackages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          <p className="mt-6 text-xs text-muted/70">
            Full bands, 2:00 Hard-Sell, retainer, and AI-positive educate packs on{" "}
            <Link href="/packages" className="text-foreground/70 transition hover:text-foreground">
              /packages
            </Link>
            .
          </p>
        </div>

        {/* Process */}
        <div className="mt-32 md:mt-40">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
            Brief → preview → approve → finish
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {process.map((s) => (
              <div key={s.step}>
                <p className="font-[family-name:var(--font-display)] text-xs font-medium tracking-[0.14em] text-muted">
                  {s.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-32 md:mt-40">
          <p className="eyebrow">AI + human</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
            Speed without surrendering taste
          </h2>
          <div className="mt-14 grid gap-px bg-card-border md:grid-cols-2">
            {workflow.map((w) => (
              <div key={w.title} className="bg-background p-8 md:p-10">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                  {w.title}
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-muted">
                  {w.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="text-foreground/40">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-wrap gap-3 md:mt-32">
          <Link href="/start" className="btn-primary">
            Start a brief
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
