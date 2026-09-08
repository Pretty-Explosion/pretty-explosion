import type { Metadata } from "next";
import Link from "next/link";
import { AssistantChat } from "@/components/AssistantChat";

export const metadata: Metadata = {
  title: "Grant AI",
  description:
    "Describe your film or media project and get matched example grants, outline drafts, and materials checklists.",
};

export default function AssistantPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-64 opacity-60" />
      <div className="relative mx-auto max-w-6xl section-pad py-14 md:py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">Grant AI</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
            From project brief to submission plan
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            Describe your project in plain language. This preview Grant AI (no API keys) suggests example
            funders, a draft outline, and a materials checklist — always yours to review.
          </p>
        </div>
        <div className="mb-6">
          <Link href="/grants" className="btn-secondary text-sm">
            Browse grants
          </Link>
        </div>
        <AssistantChat />
      </div>
    </div>
  );
}
