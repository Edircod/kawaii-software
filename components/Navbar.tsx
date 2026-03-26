"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useSite } from "@/components/providers/SiteProvider";

const navTargets = [
  { id: "philosophy", key: "philosophy" },
  { id: "capabilities", key: "capabilities" },
  { id: "process", key: "process" },
  { id: "contact", key: "contact" }
] as const;

export function Navbar() {
  const { dictionary, theme } = useSite();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-out ${
          scrolled
            ? "nav-surface border-border backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="#hero" className="shrink-0" aria-label="kawaii(x,y)">
            <Logo variant={theme === "light" ? "light" : "dark"} className="h-[52px] w-auto md:h-[60px]" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navTargets.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="font-mono text-sm text-muted transition hover:text-foreground"
              >
                {"// "}
                {dictionary.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="#contact"
              className="rounded-full border border-jolly px-5 py-3 text-sm font-medium text-foreground transition hover:scale-[1.02] hover:shadow-glow"
            >
              {dictionary.nav.talk}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="glass-soft inline-flex h-11 w-11 items-center justify-center rounded-full border text-foreground lg:hidden"
            aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="menu-surface fixed inset-0 z-40 flex min-h-screen flex-col px-6 pb-8 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <div className="mb-10 flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-7">
              {navTargets.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-bold tracking-tight text-foreground"
                  >
                    <span className="mr-3 font-mono text-base text-muted">{"//"}</span>
                    {dictionary.nav[item.key]}
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-10 rounded-full border border-jolly px-6 py-4 text-center font-medium text-foreground shadow-glow"
            >
              {dictionary.nav.talk}
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
