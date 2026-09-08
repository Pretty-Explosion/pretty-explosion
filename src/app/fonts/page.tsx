import type { Metadata } from "next";
import {
  Space_Grotesk,
  Orbitron,
  Exo_2,
  Rajdhani,
  Inter,
} from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Font preview",
  description:
    "Compare futuristic display font options for Pretty Explosion — Space Grotesk, Orbitron, Exo 2, and Rajdhani.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sample =
  "An inclusive, AI-intelligent platform for grant submissions across narrative film, documentary, commercial, TV, animation, digital, and immersive media.";

const fonts = [
  {
    name: "Space Grotesk",
    note: "Default — clean, minimal futurism",
    className: spaceGrotesk.className,
    recommended: true,
  },
  {
    name: "Orbitron",
    note: "Geometric sci-fi display",
    className: orbitron.className,
  },
  {
    name: "Exo 2",
    note: "Technical, cinematic width",
    className: exo2.className,
  },
  {
    name: "Rajdhani",
    note: "Condensed, industrial chrome",
    className: rajdhani.className,
  },
];

export default function FontsPage() {
  return (
    <div className="relative">
      <div className="hero-glow absolute inset-x-0 top-0 h-72 opacity-80" />
      <div className="relative mx-auto max-w-6xl section-pad py-14 md:py-16">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Brand · Typography
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
            Font preview
          </h1>
          <p className={`mt-4 text-muted ${inter.className}`}>
            Same headline and body sample in four display options. Chrome mirror
            gradient on the wordmark. Site default is{" "}
            <span className="text-foreground">Space Grotesk</span> +{" "}
            <span className="text-foreground">Inter</span>.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex text-sm text-accent underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {fonts.map((f) => (
            <article
              key={f.name}
              className="glass relative overflow-hidden rounded-3xl p-7 md:p-8"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-sm font-semibold text-foreground">{f.name}</h2>
                  <p className="mt-0.5 text-xs text-muted">{f.note}</p>
                </div>
                {f.recommended && (
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-2">
                    Default
                  </span>
                )}
              </div>

              <p
                className={`${f.className} chrome-text text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl`}
              >
                Pretty Explosion
              </p>

              <p
                className={`${f.className} mt-5 text-sm leading-relaxed text-muted md:text-[15px]`}
              >
                {sample}
              </p>

              <div className="mt-6 border-t border-white/5 pt-5">
                <p className={`${inter.className} text-xs text-muted`}>
                  Body (Inter) for quiet reading contrast against the display face.
                </p>
                <p className={`${inter.className} mt-2 text-sm leading-relaxed text-foreground/80`}>
                  {sample}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
