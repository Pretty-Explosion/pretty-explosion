import Link from "next/link";

const footerLinks = [
  { href: "/start", label: "Start" },
  { href: "/studio", label: "Studio" },
  { href: "/packages", label: "Packages" },
  { href: "/grants", label: "Grants" },
  { href: "/journalism", label: "Journalism" },
  { href: "/recruit", label: "Recruit" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/assistant", label: "Grant AI" },
];

const secondaryLinks = [
  { href: "/invest", label: "Invest" },
  { href: "/payments", label: "Payments" },
  { href: "/ai", label: "How AI helps" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 section-pad py-16 md:grid-cols-[1.5fr_1fr] md:py-20">
        <div>
          <Link href="/" aria-label="Pretty Explosion home" className="inline-block">
            <img
              src="/brand/logo/blackhole-lockup.png"
              alt="Pretty Explosion"
              width={720}
              height={480}
              className="h-auto w-full max-w-xs object-contain object-left md:max-w-sm"
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Film, docs, and movies via Studio. Grant submissions. Transparent journalism.
            Recruiting skilled participants.
          </p>
          <p className="mt-5 text-sm text-foreground/70">
            <a href="mailto:prettyxplosion@gmail.com" className="transition hover:text-foreground">
              prettyxplosion@gmail.com
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-foreground/65 transition hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              More
            </p>
            <ul className="space-y-2.5">
              {secondaryLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-foreground/50 transition hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-card-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 section-pad py-5 text-xs text-muted/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pretty Explosion Ltd (BC)</p>
          <p>Cinema-grade craft. Fairer funding. Rigorous truth.</p>
        </div>
      </div>
    </footer>
  );
}
