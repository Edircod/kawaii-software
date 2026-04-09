import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";

const base = "https://kawaii-software.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.8
  }));
}
