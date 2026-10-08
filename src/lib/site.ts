/** Production origin. Override with NEXT_PUBLIC_SITE_URL for previews. */
export const DEFAULT_SITE_URL = "https://prettyexplosion.com";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return DEFAULT_SITE_URL;

  try {
    const url = new URL(configured);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      console.error("NEXT_PUBLIC_SITE_URL must be an http(s) URL; using https://prettyexplosion.com.");
      return DEFAULT_SITE_URL;
    }
    const path = url.pathname === "/" ? "" : url.pathname.replace(/\/$/, "");
    return `${url.origin}${path}`;
  } catch {
    console.error("NEXT_PUBLIC_SITE_URL is not a valid URL; using https://prettyexplosion.com.");
    return DEFAULT_SITE_URL;
  }
}
