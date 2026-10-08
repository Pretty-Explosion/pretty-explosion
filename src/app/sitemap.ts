import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const paths = [
  "/",
  "/start",
  "/ai",
  "/studio",
  "/packages",
  "/grants",
  "/assistant",
  "/journalism",
  "/recruit",
  "/invest",
  "/about",
  "/contact",
  "/payments",
  "/fonts",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return paths.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
  }));
}
