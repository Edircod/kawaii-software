"use client";

import { useRouter } from "next/navigation";

import { useSite } from "@/components/providers/SiteProvider";
import { locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, dictionary } = useSite();
  const router = useRouter();

  function handleLocaleChange(next: Locale) {
    // Persist so middleware can use it on the next root-path visit
    document.cookie = `locale=${next}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(`/${next}`);
  }

  return (
    <div className="glass-soft flex items-center gap-1 rounded-full border p-1 backdrop-blur-md">
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handleLocaleChange(item)}
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
