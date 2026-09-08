import type { Metadata } from "next";
import Link from "next/link";
import { RecruitForm } from "@/components/RecruitForm";

export const metadata: Metadata = {
  title: "Recruit",
  description:
    "Join the Pretty Explosion crew — directors, DPs, editors, journalists, grant writers, producers, and AI-fluent creatives. BC-based, human craft + AI assist.",
};

const roles = [
  {
    title: "Directors & DPs",
    body: "High-skill cinematography and direction — light, lens, blocking, and story leadership for film, docs, and promo.",
  },
  {
    title: "Editors",
    body: "Picture lock, cutdowns, and finishing with intentional pace — AI-accelerated assemblies you still author.",
  },
  {
    title: "Journalists",
    body: "Transparent, non-biased reporting — solutions and accountability without the doom-scroll.",
  },
  {
    title: "Grant writers",
    body: "Match, outline, and polish submissions. Brief → preview → approve with creators.",
  },
  {
    title: "Producers",
    body: "Schedule, budget, and inclusive logistics so craft can ship on time.",
  },
  {
    title: "AI-fluent creatives",
    body: "People who use AI as assist, not substitute — and disclose when it matters.",
  },
];

export default function RecruitPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-64 opacity-60" />
      <div className="relative mx-auto max-w-6xl section-pad py-14 md:py-16">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Recruit</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
            Join the crew
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Pretty Explosion is building a craft-first crew for Studio, Grants, and Journalism —
            directors, DPs, editors, and collaborators who care about{" "}
            <span className="text-foreground/90">high-skill cinematography and direction</span>, and who like{" "}
            <span className="text-foreground/90">brief → preview → approve</span>. We are{" "}
            <strong className="font-medium text-foreground">BC-based</strong>; entity wording is{" "}
            <strong className="font-medium text-foreground">Pretty Explosion Ltd (BC)</strong>{" "}
            planned — not a US LLC.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            This is a set, not a job board. Human craft stays in the director’s chair. AI helps with
            speed — assemblies, outlines, variants — never as a fake headcount or invented traction story.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#interest" className="btn-primary">
              Express interest
            </a>
            <Link href="/studio" className="btn-secondary">
              See Studio
            </Link>
            <a
              href="mailto:prettyxplosion@gmail.com?subject=Recruit%20-%20Pretty%20Explosion"
              className="btn-secondary"
            >
              Email prettyxplosion@gmail.com
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.title} className="glass rounded-3xl p-6">
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-2" />
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">{r.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div id="interest" className="scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-3">Interest form</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
              Tell us where you fit on set
            </h2>
            <p className="mt-3 mb-8 max-w-xl text-sm text-muted">
              Preview form — validates on-device and simulates submit. Or write{" "}
              <a href="mailto:prettyxplosion@gmail.com" className="text-accent underline-offset-2 hover:underline">
                prettyxplosion@gmail.com
              </a>
              .
            </p>
            <RecruitForm />
          </div>
          <div className="glass rounded-3xl p-6 text-sm text-muted">
            <p className="font-medium text-foreground">How we work</p>
            <ul className="mt-4 space-y-3 leading-relaxed">
              <li>
                <span className="text-foreground/90">Brief</span> — clear goals and constraints
              </li>
              <li>
                <span className="text-foreground/90">Preview</span> — early cuts, outlines, look options
              </li>
              <li>
                <span className="text-foreground/90">Approve</span> — your call before anything locks
              </li>
            </ul>
            <p className="mt-6 leading-relaxed">
              No invented team size or metrics here. If you have a reel, CV, or writing sample,
              mention it in the form or attach it in email.
            </p>
            <p className="mt-4 text-xs text-muted/70">
              Pretty Explosion Ltd (BC) · planned entity wording · local preview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
