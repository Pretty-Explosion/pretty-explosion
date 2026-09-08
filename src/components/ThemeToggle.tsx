'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  THEME_OPTIONS,
  applyTheme,
  readDomTheme,
  themeFromParam,
  type SiteTheme,
} from '@/lib/theme';

type Props = {
  /** Compact horizontal control for desktop nav */
  variant?: 'nav' | 'menu';
};

/**
 * Dark / Light / Paper / Editorial control.
 * Updates data-theme on <html> and syncs ?theme=… via replace (no full reload).
 * Default dark omits the param.
 */
export function ThemeToggle({ variant = 'nav' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [theme, setTheme] = useState<SiteTheme>('dark');

  useEffect(() => {
    setTheme(themeFromParam(searchParams.get('theme')));
  }, [searchParams]);

  useEffect(() => {
    setTheme(readDomTheme());
  }, []);

  const select = useCallback(
    (next: SiteTheme) => {
      applyTheme(next);
      setTheme(next);

      const params = new URLSearchParams(searchParams.toString());
      if (next === 'dark') params.delete('theme');
      else params.set('theme', next);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const isMenu = variant === 'menu';

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={
        isMenu
          ? 'mt-3 grid grid-cols-2 gap-1 rounded-sm border border-card-border p-1'
          : 'ml-2 flex items-center gap-px rounded-sm border border-card-border p-0.5'
      }
    >
      {THEME_OPTIONS.map((opt) => {
        const active = theme === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            aria-pressed={active}
            aria-label={opt.label}
            title={opt.label}
            onClick={() => select(opt.id)}
            className={
              isMenu
                ? `px-2.5 py-2 text-xs font-medium tracking-wide transition-colors ${
                    active
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-muted hover:text-foreground'
                  }`
                : `px-1.5 py-1 text-[10px] font-medium tracking-wide transition-colors xl:px-2 xl:text-[11px] ${
                    active
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-muted/80 hover:text-foreground'
                  }`
            }
          >
            {isMenu ? opt.label : opt.short}
          </button>
        );
      })}
    </div>
  );
}
