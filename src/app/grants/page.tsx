import type { Metadata } from "next";
import Link from "next/link";
import { GrantExplorer } from "@/components/GrantExplorer";

export const metadata: Metadata = {
  title: "Grants",
  description:
    "Filter example film and media grants by medium, stage, region, and eligibility themes.",
};

export default function GrantsPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-56 opacity-40" />
      <div className="relative mx-auto max-w-6xl section-pad py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow">Grant explorer</p>
          <h1 className="editorial-display mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
            Funding paths that fit your craft
          </h1>
          <p className="mt-6 text-muted leading-relaxed">
            Browse realistic <strong className="font-medium text-foreground/80">example</strong> opportunities
            across filming and media. Filter by medium, stage, region, and eligibility themes — then take
            matches into <Link href="/assistant" className="font-medium text-foreground/80 transition hover:text-white">Grant AI</Link> for outlines and checklists.
          </p>
          <div className="mt-8">
            <Link href="/assistant" className="btn-secondary text-sm">
              Open Grant AI
            </Link>
          </div>
        </div>
        <GrantExplorer />
      </div>
    </div>
  );
}
