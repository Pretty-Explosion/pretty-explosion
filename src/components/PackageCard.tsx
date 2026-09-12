import Link from "next/link";
import {
  BUY_SOON_LABEL,
  PACKAGE_BAND_NOTE,
  PACKAGE_SPINE,
  type VideoPackage,
} from "@/data/packages";

type Props = {
  pkg: VideoPackage;
  featured?: boolean;
};

export function PackageSpine() {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
      {PACKAGE_SPINE.join(" → ")}
    </p>
  );
}

export function PackageBuySoon() {
  return (
    <button type="button" disabled className="btn-soon w-full text-center" aria-disabled="true">
      {BUY_SOON_LABEL}
    </button>
  );
}

export function PackageCard({ pkg, featured = false }: Props) {
  return (
    <div
      className={`flex flex-col bg-background p-8 md:p-10 ${
        featured ? "md:flex-row md:items-start md:gap-12" : ""
      }`}
    >
      <div className={featured ? "md:w-2/5" : undefined}>
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
            {pkg.name}
          </h3>
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
            {pkg.tag}
          </span>
        </div>
        <p className="mt-6 font-[family-name:var(--font-display)] text-xl font-medium text-foreground/90">
          {pkg.band}
        </p>
        <p className="mt-1 text-xs text-muted/60">{PACKAGE_BAND_NOTE}</p>
        <div className="mt-4">
          <PackageSpine />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted">{pkg.summary}</p>
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "mt-8 md:mt-0" : ""}`}>
        <ul
          className={`flex-1 space-y-2.5 text-sm text-foreground/70 ${
            featured ? "mt-8 md:mt-0" : "mt-8"
          }`}
        >
          {pkg.deliverables.map((d) => (
            <li key={d} className="flex gap-2.5">
              <span className="mt-2 h-px w-3 shrink-0 bg-foreground/25" />
              {d}
            </li>
          ))}
        </ul>
        <p className="mt-8 border-t border-card-border pt-5 text-xs text-muted">
          Best for: {pkg.bestFor}
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Link href="/start" className="btn-primary w-full text-center text-sm">
            Start a brief
          </Link>
          <PackageBuySoon />
        </div>
      </div>
    </div>
  );
}
