export type SiteTheme = "dark" | "light" | "paper" | "editorial";

export const THEME_OPTIONS: { id: SiteTheme; label: string; short: string }[] = [
  { id: "dark", label: "Dark", short: "Dark" },
  { id: "light", label: "Light", short: "Light" },
  { id: "paper", label: "Paper", short: "Paper" },
  { id: "editorial", label: "Editorial", short: "Edit" },
];

const THEME_CLASSES = ["light", "paper", "editorial"] as const;

/** Apply theme to <html>: data-theme + helper class. Default dark clears all. */
export function applyTheme(theme: SiteTheme) {
  const root = document.documentElement;
  root.classList.remove(...THEME_CLASSES);

  if (theme === "dark") {
    delete root.dataset.theme;
    return;
  }

  root.dataset.theme = theme;
  root.classList.add(theme);
}

export function themeFromParam(value: string | null): SiteTheme {
  if (value === "light" || value === "paper" || value === "editorial") return value;
  return "dark";
}

export function readDomTheme(): SiteTheme {
  const t = document.documentElement.dataset.theme;
  if (t === "light" || t === "paper" || t === "editorial") return t;
  return "dark";
}
