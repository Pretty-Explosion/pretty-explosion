import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HardSellPromoSection } from "@/components/HardSellPromo";
import { PackageBuySoon, PackageCard, PackageSpine } from "@/components/PackageCard";
import { educatePack, retainerPackage, videoPackages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "2:00 Hard-Sell sliding scale plus Spark, Pulse, and Explosion planning bands — quote after brief. Pretty Explosion Ltd (BC).",
};

export default function PackagesPage() {
  return (
    <div className="relative">
      <div className="relative mx-auto max-w-6xl section-pad py-20 md:py-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <p className="eyebrow">Studio package planning</p>
            <h1 className="editorial-display mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.25rem]">
              Spark · Pulse · Explosion
            </h1>
            <p className="mt-6 max-w-lg font-[family-name:var(--font-display)] text-xl font-medium tracking-tight text-foreground/85 md:text-2xl">
              {educatePack.headline}
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              CAD planning bands for commercial packages. Quote after brief — not sold
              prices. Pay stays dark until a Business Number and CAD Stripe land.
            </p>
            <div className="mt-8">
              <PackageSpine />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/start" className="btn-primary">
                Start a brief
              </Link>
              <Link href="#hard-sell" className="btn-secondary">
                2:00 Hard-Sell
              </Link>
              <Link href="/studio#packages" className="btn-secondary">
                Studio packages
              </Link>
            </div>
          </div>

          <figure className="group">
            <div className="relative aspect-[3/2] overflow-hidden bg-black">
              <Image
                src="/studio/preview/diner-natural-still.jpg"
                alt="Natural production still — diner scene"
                width={1600}
                height={1067}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
            <figcaption className="media-caption mt-5">
              <p className="media-caption__kicker">Lived still · photographer splash</p>
              <p className="media-caption__body">Craft first. Checkout later.</p>
            </figcaption>
          </figure>
        </div>

        <HardSellPromoSection />

        <div id="tiers" className="mt-28 scroll-mt-24 md:mt-36">
          <div className="max-w-lg">
            <p className="eyebrow">Planning bands</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              Three tiers. Quote after brief.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Bands help you plan. Final quotes depend on scope, talent, locations, and usage.
              Nothing here is a checkout price.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-card-border lg:grid-cols-3">
            {videoPackages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-card-border lg:grid-cols-[1.1fr_0.9fr]">
          <PackageCard pkg={retainerPackage} featured />

          <div className="flex flex-col bg-background p-8 md:p-10">
            <p className="eyebrow">{educatePack.name}</p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
              {educatePack.headline}
            </h2>
            <p className="mt-6 font-[family-name:var(--font-display)] text-xl font-medium text-foreground/90">
              {educatePack.band}
            </p>
            <p className="mt-1 text-xs text-muted/60">Planning band · quote after brief</p>
            <div className="mt-4">
              <PackageSpine />
            </div>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">{educatePack.summary}</p>
            <div className="mt-8 flex flex-col gap-2">
              <Link href="/start" className="btn-primary w-full text-center text-sm">
                Start a brief
              </Link>
              <PackageBuySoon />
            </div>
          </div>
        </div>

        <p className="mt-16 max-w-xl text-xs leading-relaxed text-muted/70">
          Pretty Explosion Ltd (BC). Prettyx Media is a trade shorthand. No live Stripe, no
          deposits, and no sold prices on this page.
        </p>

        <div className="mt-16 flex flex-wrap gap-3 md:mt-20">
          <Link href="/start" className="btn-primary">
            Start a brief
          </Link>
          <Link href="/studio" className="btn-secondary">
            Open Studio
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
