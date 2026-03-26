"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { locales } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, dictionary } = useSite();

  return (
    <div className="glass-soft flex items-center gap-1 rounded-full border p-1 backdrop-blur-md">
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-[0.24em] transition ${
            locale === item
              ? "bg-[color:var(--solid-button-bg)] text-[color:var(--solid-button-text)]"
              : "text-muted hover:text-foreground"
          }`}
          aria-label={dictionary.languages[item]}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
