"use client";

import Link from "next/link";

import { Logo } from "@/components/Logo";
import { useSite } from "@/components/providers/SiteProvider";

export function Footer() {
  const { dictionary, theme } = useSite();

  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo variant={theme === "light" ? "light" : "dark"} className="h-6 w-auto" />
          <p className="mt-4 text-base text-foreground">{dictionary.footer.tagline}</p>
          <p className="mt-3 font-mono text-sm text-muted">{dictionary.footer.closing}</p>
        </div>

        <div className="space-y-4 text-right">
          <div className="flex flex-wrap justify-end gap-5 text-sm text-muted">
            <Link href="#" className="transition hover:text-foreground">
              {dictionary.footer.privacy}
            </Link>
            <Link href="#" className="transition hover:text-foreground">
              {dictionary.footer.cookie}
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              {dictionary.footer.linkedin}
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              {dictionary.footer.github}
            </Link>
          </div>
          <p className="text-sm text-muted">{dictionary.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
