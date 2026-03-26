"use client";

import { Capacita } from "@/components/Capacita";
import { Contatti } from "@/components/Contatti";
import { CoverageMap } from "@/components/CoverageMap";
import { Filosofia } from "@/components/Filosofia";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Numeri } from "@/components/Numeri";
import { Processo } from "@/components/Processo";
import { SiteProvider } from "@/components/providers/SiteProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import type { Locale, ThemeMode } from "@/lib/i18n";

type SiteShellProps = {
  initialLocale: Locale;
  initialTheme: ThemeMode;
};

export function SiteShell({ initialLocale, initialTheme }: SiteShellProps) {
  return (
    <SiteProvider initialLocale={initialLocale} initialTheme={initialTheme}>
      <CustomCursor />
      <div className="relative overflow-x-clip">
        <Navbar />
        <main>
          <Hero />
          <Filosofia />
          <CoverageMap />
          <Capacita />
          <Processo />
          <Numeri />
          <Contatti />
        </main>
        <Footer />
      </div>
    </SiteProvider>
  );
}
