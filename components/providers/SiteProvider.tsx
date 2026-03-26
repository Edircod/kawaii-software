"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

import { copy } from "@/lib/content";
import { locales, type Locale, type ThemeMode } from "@/lib/i18n";

type SiteContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  dictionary: (typeof copy)[Locale];
};

const SiteContext = createContext<SiteContextValue | null>(null);

type SiteProviderProps = {
  children: ReactNode;
  initialLocale: Locale;
  initialTheme: ThemeMode;
};

export function SiteProvider({
  children,
  initialLocale,
  initialTheme
}: SiteProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [theme, setTheme] = useState<ThemeMode>(initialTheme);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.cookie = `locale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.toggle("light-theme", theme === "light");
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("locale");
    const savedTheme = window.localStorage.getItem("theme");

    if (savedLocale && locales.includes(savedLocale as Locale)) {
      setLocaleState(savedLocale as Locale);
    }

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }

    const media = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.matches && !reduced.matches) {
      document.documentElement.classList.add("has-custom-cursor");
    }
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === "dark" ? "light" : "dark")),
      dictionary: copy[locale]
    }),
    [locale, theme]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);

  if (!context) {
    throw new Error("useSite must be used inside SiteProvider");
  }

  return context;
}
