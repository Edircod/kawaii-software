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
import { type Locale, type ThemeMode } from "@/lib/i18n";

type SiteContextValue = {
  locale: Locale;
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
  const [theme, setTheme] = useState<ThemeMode>(initialTheme);

  useEffect(() => {
    document.documentElement.lang = initialLocale;
    document.cookie = `locale=${initialLocale}; path=/; max-age=31536000; SameSite=Lax`;
  }, [initialLocale]);

  useEffect(() => {
    const themeAttr = theme === "light" ? "kawaii-light" : "kawaii-dark";
    document.documentElement.setAttribute("data-theme", themeAttr);
    document.documentElement.style.colorScheme = theme;
    document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
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
      locale: initialLocale,
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === "dark" ? "light" : "dark")),
      dictionary: copy[initialLocale]
    }),
    [initialLocale, theme]
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
