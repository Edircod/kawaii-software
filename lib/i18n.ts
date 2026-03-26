export const locales = ["en", "it", "ja"] as const;

export type Locale = (typeof locales)[number];
export type ThemeMode = "dark" | "light";

const localeSet = new Set<Locale>(locales);

export function isLocale(value?: string | null): value is Locale {
  return Boolean(value && localeSet.has(value as Locale));
}

function parseAcceptLanguage(headerValue: string | null): Locale {
  if (!headerValue) {
    return "en";
  }

  const normalized = headerValue.toLowerCase();

  if (normalized.includes("ja")) {
    return "ja";
  }

  if (normalized.includes("it")) {
    return "it";
  }

  return "en";
}

export function inferLocale(
  headerStore: Pick<Headers, "get">,
  cookieLocale?: string | null
): Locale {
  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const country =
    headerStore.get("x-vercel-ip-country") ??
    headerStore.get("cf-ipcountry") ??
    headerStore.get("x-country-code");

  if (country === "JP") {
    return "ja";
  }

  if (country === "IT") {
    return "it";
  }

  return parseAcceptLanguage(headerStore.get("accept-language"));
}
