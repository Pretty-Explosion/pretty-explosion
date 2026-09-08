'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/studio", label: "Studio" },
  { href: "/grants", label: "Grants" },
  { href: "/journalism", label: "Journalism" },
  { href: "/recruit", label: "Recruit" },
  { href: "/contact", label: "Contact" },
];

function BrandLogo() {
  return (
    <>
      {/* Desktop / tablet: galactic blackhole lockup (scaled down) */}
      <Image
        src="/brand/logo/blackhole-lockup.png"
        alt="Pretty Explosion"
        width={220}
        height={147}
        priority
        className="hidden h-9 w-auto object-contain sm:block"
      />
      {/* Mobile: blackhole mark (compact) */}
      <Image
        src="/brand/logo/blackhole-mark.png"
        alt="Pretty Explosion"
        width={36}
        height={36}
        priority
        className="h-8 w-8 object-contain sm:hidden"
      />
    </>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between section-pad">
        <Link href="/" className="group flex items-center gap-2" aria-label="Pretty Explosion home">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-[13px] font-medium tracking-wide transition-colors xl:px-3.5 ${
                  active ? "text-foreground" : "text-muted/80 hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-x-2 bottom-0 h-px bg-foreground/50"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
          <Suspense fallback={null}>
            <ThemeToggle variant="nav" />
          </Suspense>
          <Link href="/start" className="btn-primary ml-3 !px-3.5 !py-1.5 text-[13px]">
            Start
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-card-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-4 bg-foreground transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-px w-4 bg-foreground transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-card-border bg-background/95 lg:hidden"
          >
            <div className="flex flex-col gap-0.5 px-4 py-4 sm:px-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-sm px-3 py-3 text-sm font-medium ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Suspense fallback={null}>
                <ThemeToggle variant="menu" />
              </Suspense>
              <Link
                href="/start"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 text-center text-sm"
              >
                Start
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
