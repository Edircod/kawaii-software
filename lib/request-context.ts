import { cookies, headers } from "next/headers";

import { inferLocale, type ThemeMode } from "@/lib/i18n";

export function getInitialSettings() {
  const cookieStore = cookies();
  const headerStore = headers();

  const locale = inferLocale(headerStore, cookieStore.get("locale")?.value);
  const theme = cookieStore.get("theme")?.value === "light" ? "light" : "dark";

  return {
    locale,
    theme: theme as ThemeMode
  };
}
