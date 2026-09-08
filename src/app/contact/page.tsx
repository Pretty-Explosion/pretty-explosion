import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Pretty Explosion — studio briefs, grants, journalism pitches, partnerships, and press.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-64 opacity-60" />
      <div className="relative mx-auto max-w-6xl section-pad py-14 md:py-16">
        <div className="mb-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
              Tell us what you want to make
            </h1>
            <p className="mt-4 max-w-xl text-muted leading-relaxed">
              Book Quality Video, ask about grants, pitch a story, or explore a partnership.
              This preview validates on-device and simulates submit.
            </p>
          </div>
          <div className="glass rounded-2xl p-5 text-sm text-muted">
            <p className="font-medium text-foreground">Preview note</p>
            <p className="mt-2 leading-relaxed">
              Email us at{" "}
              <a href="mailto:prettyxplosion@gmail.com" className="text-accent underline-offset-2 hover:underline">
                prettyxplosion@gmail.com
              </a>
              . Form submits are still preview-only (no backend mailer yet). Mailing address TBD with Pretty Explosion Ltd.
            </p>
          </div>
        </div>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
