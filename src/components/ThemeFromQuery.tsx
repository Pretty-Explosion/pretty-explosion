'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { applyTheme, themeFromParam } from '@/lib/theme';

/**
 * Session-only theme via ?theme=light | paper | editorial.
 * Sets documentElement.dataset.theme (+ matching html class).
 * No cookies / localStorage — leaving the query returns to dark default.
 * Deep links and nav toggle URL sync both flow through here.
 */
export function ThemeFromQuery() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    applyTheme(themeFromParam(searchParams.get('theme')));
  }, [searchParams, pathname]);

  return null;
}
