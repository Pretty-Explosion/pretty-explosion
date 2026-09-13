import Link from "next/link";
import { PackageBuySoon, PackageSpine } from "@/components/PackageCard";
import { PACKAGE_BAND_NOTE, hardSellPromo } from "@/data/packages";

export function HardSellPromoSection() {
  return (
    <div id="hard-sell" className="mt-28 scroll-mt-24 md:mt-36">
      <div className="max-w-lg">
        <p className="eyebrow">{hardSellPromo.tag}</p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
          {hardSellPromo.name}
        </h2>
        <p className="mt-5 font-[family-name:var(--font-display)] text-xl font-medium tracking-tight text-foreground/85">
          {hardSellPromo.headline}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted">{hardSellPromo.summary}</p>
        <div className="mt-4">
          <PackageSpine />
        </div>
      </div>

      <div className="mt-14 grid gap-px bg-card-border lg:grid-cols-3">
        {hardSellPromo.useRights.map((tier) => (
          <div key={tier.name} className="flex flex-col bg-background p-8 md:p-10">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
                {tier.name}
              </h3>
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                {tier.tag}
              </span>
            </div>
            <p className="mt-6 font-[family-name:var(--font-display)] text-xl font-medium text-foreground/90">
              {tier.band}
            </p>
            <p className="mt-1 text-xs text-muted/60">{PACKAGE_BAND_NOTE}</p>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">{tier.rights}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">{hardSellPromo.usageNote}</p>
      <div className="mt-8 flex max-w-sm flex-col gap-2">
        <Link href="/start" className="btn-primary w-full text-center text-sm">
          Start a brief
        </Link>
        <PackageBuySoon />
      </div>
    </div>
  );
}
