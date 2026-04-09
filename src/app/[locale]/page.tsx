import type { Metadata } from "next";
import { cookies } from "next/headers";

import { SiteShell } from "@/components/SiteShell";
import { copy } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";

type Props = { params: { locale: string } };

const base = "https://kawaii-software.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const { meta } = copy[locale];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${base}/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${base}/${l}`])
      )
    }
  };
}

export default function LocalePage({ params }: Props) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const theme = cookies().get("theme")?.value === "light" ? "light" : "dark";

  return <SiteShell initialLocale={locale} initialTheme={theme as "light" | "dark"} />;
}
