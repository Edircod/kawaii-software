"use client";

import { Moon, SunMedium } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useSite } from "@/components/providers/SiteProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, dictionary } = useSite();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? dictionary.nav.themeLight : dictionary.nav.themeDark}
      className="glass-soft relative inline-flex h-11 w-11 items-center justify-center rounded-full border text-foreground transition hover:border-jolly hover:shadow-glow"
    >
      <motion.span
        className="absolute inset-1 rounded-full border border-border bg-[color:var(--surface)]"
        animate={{
          rotate: isDark ? 0 : 180,
          boxShadow: isDark
            ? "0 0 0 rgba(0,0,0,0)"
            : "0 0 24px rgba(196, 0, 247, 0.24)"
        }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
      />
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 60, scale: 0.65, y: 3 }}
            animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotate: -70, scale: 0.6, y: -3 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-10"
          >
            <Moon size={17} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -70, scale: 0.6, y: -3 }}
            animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotate: 70, scale: 0.65, y: 3 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-10"
          >
            <SunMedium size={17} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
