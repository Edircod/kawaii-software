import type { Metadata } from "next";

import { SiteShell } from "@/components/SiteShell";
import { copy } from "@/lib/content";
import { getInitialSettings } from "@/lib/request-context";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = getInitialSettings();
  const meta = copy[locale].meta;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "https://kawaii-software.com"
    }
  };
}

export default function Page() {
  const { locale, theme } = getInitialSettings();

  return <SiteShell initialLocale={locale} initialTheme={theme} />;
}
