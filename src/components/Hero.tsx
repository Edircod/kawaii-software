"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { useSite } from "@/components/providers/SiteProvider";

const coordinates = [
  { label: "f(x)", x: "9%", y: "10%" },
  { label: "kawaii(x,y)", x: "79%", y: "12%" },
  { label: "assert(quality)", x: "12%", y: "88%" },
  { label: "loop()", x: "87%", y: "82%" }
];

function getOfficeTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone
  }).format(new Date());
}

type Platform = {
  x1: number;
  x2: number;
  y: number;
};

export function Hero() {
  const { dictionary } = useSite();
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleLineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [dinoActive, setDinoActive] = useState(false);
  const [officeNow, setOfficeNow] = useState(() => ({
    palermo: "--:--",
    perth: "--:--",
    tokyo: "--:--"
  }));

  useEffect(() => {
    const syncTimes = () =>
      setOfficeNow({
        palermo: getOfficeTime("Europe/Rome"),
        perth: getOfficeTime("Australia/Perth"),
        tokyo: getOfficeTime("Asia/Tokyo")
      });

    syncTimes();
    const timer = window.setInterval(syncTimes, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const start = window.setTimeout(() => setDinoActive(true), 2200);
    const cycle = window.setInterval(() => {
      setDinoActive(true);
      window.setTimeout(() => setDinoActive(false), 9000);
    }, 18000);

    const stop = window.setTimeout(() => setDinoActive(false), 11000);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(stop);
      window.clearInterval(cycle);
    };
  }, []);

  useLayoutEffect(() => {
    const computePlatforms = () => {
      if (!sectionRef.current) {
        return;
      }

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const nextPlatforms: Platform[] = [];

      titleLineRefs.current.forEach((line) => {
        if (!line) {
          return;
        }
        const rect = line.getBoundingClientRect();
        nextPlatforms.push({
          x1: rect.left - sectionRect.left + 28,
          x2: rect.right - sectionRect.left - 28,
          y: rect.top - sectionRect.top + rect.height * 0.58
        });
      });

      if (cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        nextPlatforms.push({
          x1: cardRect.left - sectionRect.left + 24,
          x2: cardRect.right - sectionRect.left - 24,
          y: cardRect.top - sectionRect.top + 12
        });
      }

      setPlatforms(nextPlatforms.filter((p) => p.x2 - p.x1 > 60));
    };

    computePlatforms();

    const ro = new ResizeObserver(computePlatforms);
    if (sectionRef.current) {
      ro.observe(sectionRef.current);
    }
    titleLineRefs.current.forEach((line) => {
      if (line) {
        ro.observe(line);
      }
    });
    if (cardRef.current) {
      ro.observe(cardRef.current);
    }

    window.addEventListener("resize", computePlatforms);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", computePlatforms);
    };
  }, [dictionary.hero.title]);

  const heroLines = useMemo(() => dictionary.hero.title, [dictionary.hero.title]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-8"
    >
      <div className="hero-mesh absolute inset-0" />
      <motion.div
        className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-secondary/30 blur-[120px]"
        animate={{ x: [0, 20, -10, 0], y: [0, 30, -10, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] right-[12%] h-80 w-80 rounded-full bg-jolly/20 blur-[130px]"
        animate={{ x: [0, -30, 10, 0], y: [0, -24, 18, 0], scale: [1, 0.9, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {coordinates.map((point, index) => (
        <motion.div
          key={point.label}
          className="pointer-events-none absolute hidden font-mono text-[10px] uppercase tracking-[0.22em] text-muted/60 xl:block"
          style={{ left: point.x, top: point.y }}
          animate={
            dinoActive
              ? { y: [0, -4, 0], opacity: [0.5, 0], rotate: [0, 140], scale: [1, 0.5] }
              : { y: [0, -8, 0], opacity: [0.45, 0.8, 0.45], rotate: 0, scale: 1 }
          }
          transition={{ duration: 1.2, delay: index * 0.08, ease: "easeInOut" }}
        >
          {point.label}
        </motion.div>
      ))}

      <PixelDino platforms={platforms} active={dinoActive} />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,390px)] lg:items-end lg:gap-8">
          <div className="min-w-0 max-w-none pr-0 lg:pr-4">
            <motion.p
              className="mb-6 max-w-2xl font-mono text-sm uppercase tracking-[0.2em] text-muted"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {dictionary.hero.eyebrow}
            </motion.p>

            <div className="font-display text-[clamp(3.25rem,7.2vw,6.35rem)] font-extrabold leading-[0.9] tracking-[-0.062em] text-foreground">
              {heroLines.map((line, index) => (
                <div
                  key={line}
                  ref={(el) => {
                    titleLineRefs.current[index] = el;
                  }}
                  className="overflow-hidden"
                >
                  <motion.span
                    className="block leading-none"
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </div>

            <motion.p
              className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              {dictionary.hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
            >
              <Link
                href="#process"
                className="cta-solid inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium transition hover:scale-[1.02]"
              >
                {dictionary.hero.primaryCta}
                <ArrowRight size={17} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 font-medium text-foreground transition hover:border-jolly hover:shadow-glow"
              >
                {dictionary.hero.secondaryCta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.22 }}
            ref={cardRef}
            className="glass-soft relative overflow-hidden rounded-[32px] border p-7 shadow-card backdrop-blur-xl lg:ml-0"
          >
            <div className="absolute inset-0 bg-mesh opacity-70" />
            <div className="relative space-y-5">
              <div className="font-mono text-sm uppercase tracking-[0.28em] text-muted">
                kawaii(x,y)
              </div>
              <div className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                {dictionary.hero.panelTitle}
              </div>
              <p className="max-w-md text-base leading-7 text-muted">
                {dictionary.hero.panelBody}
              </p>
              <div className="grid gap-3 pt-4 font-mono text-sm text-foreground/85">
                <div className="glass-strong rounded-2xl border p-4">
                  <div className="mb-2 text-foreground">{dictionary.coverage.milan}</div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full border border-border px-2 py-1 text-secondary">
                      {dictionary.coverage.officeHoursLabel} {dictionary.coverage.workday}
                    </span>
                    <span className="rounded-full border border-border px-2 py-1 text-foreground/85">
                      {dictionary.coverage.liveNowLabel}{" "}
                      <span suppressHydrationWarning>{officeNow.palermo}</span>
                    </span>
                  </div>
                </div>
                <div className="glass-strong rounded-2xl border p-4">
                  <div className="mb-2 text-foreground">{dictionary.coverage.sydney}</div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full border border-border px-2 py-1 text-jolly">
                      {dictionary.coverage.officeHoursLabel} {dictionary.coverage.workday}
                    </span>
                    <span className="rounded-full border border-border px-2 py-1 text-foreground/85">
                      {dictionary.coverage.liveNowLabel}{" "}
                      <span suppressHydrationWarning>{officeNow.perth}</span>
                    </span>
                  </div>
                </div>
                <div className="glass-strong rounded-2xl border p-4">
                  <div className="mb-2 text-foreground">{dictionary.coverage.tokyo}</div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full border border-border px-2 py-1 text-secondary">
                      {dictionary.coverage.officeHoursLabel} {dictionary.coverage.workday}
                    </span>
                    <span className="rounded-full border border-border px-2 py-1 text-foreground/85">
                      {dictionary.coverage.liveNowLabel}{" "}
                      <span suppressHydrationWarning>{officeNow.tokyo}</span>
                    </span>
                  </div>
                </div>
                <div className="glass-strong rounded-2xl border p-4 text-foreground">
                  {dictionary.hero.panelCoverage}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="ml-auto hidden font-mono text-xs uppercase tracking-[0.38em] text-muted/70 md:block">
          {dictionary.hero.verticalNote}
        </div>
      </div>
    </section>
  );
}

function PixelDino({ platforms, active }: { platforms: Platform[]; active: boolean }) {
  const [pos, setPos] = useState({ x: -100, y: -100, dir: 1 });
  const state = useRef({
    x: -100,
    y: -100,
    vx: 120,
    vy: 0,
    dir: 1,
    grounded: false,
    lastTime: 0,
    nextJumpAt: 0,
    currentPlatform: 0
  });

  useEffect(() => {
    if (!platforms.length) {
      return;
    }

    const first = platforms[0];
    const startX = first.x1 + 14;
    const startY = first.y - 20;
    state.current = {
      ...state.current,
      x: startX,
      y: startY,
      vy: 0,
      dir: 1,
      grounded: true,
      nextJumpAt: performance.now() + 900,
      currentPlatform: 0,
      lastTime: performance.now()
    };
    setPos({ x: startX, y: startY, dir: 1 });
  }, [platforms]);

  useEffect(() => {
    if (!active || !platforms.length) {
      return;
    }

    let frame = 0;
    const gravity = 760;

    const tick = (now: number) => {
      const s = state.current;
      const dt = Math.min((now - s.lastTime) / 1000, 0.033);
      s.lastTime = now;

      const current = platforms[s.currentPlatform] ?? platforms[0];
      const previousY = s.y;

      if (s.grounded) {
        s.x += s.vx * s.dir * dt;

        if (s.x <= current.x1 + 6 || s.x >= current.x2 - 14) {
          s.dir *= -1;
        }

        if (now > s.nextJumpAt && platforms.length > 1) {
          const target = (s.currentPlatform + 1) % platforms.length;
          const targetCenter = (platforms[target].x1 + platforms[target].x2) / 2;
          s.dir = targetCenter > s.x ? 1 : -1;
          s.vy = -290;
          s.grounded = false;
          s.currentPlatform = target;
          s.nextJumpAt = now + 1700 + Math.random() * 500;
        }
      } else {
        s.x += s.vx * s.dir * dt;
        s.vy += gravity * dt;
        s.y += s.vy * dt;

        for (let i = 0; i < platforms.length; i += 1) {
          const p = platforms[i];
          const landingY = p.y - 20;
          const withinX = s.x >= p.x1 + 2 && s.x <= p.x2 - 16;
          if (previousY <= landingY && s.y >= landingY && withinX) {
            s.y = landingY;
            s.vy = 0;
            s.grounded = true;
            s.currentPlatform = i;
            break;
          }
        }
      }

      setPos({ x: s.x, y: s.y, dir: s.dir });
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame((ts) => {
      state.current.lastTime = ts;
      tick(ts);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [active, platforms]);

  return (
    <motion.div
      className="pointer-events-none absolute hidden xl:block"
      style={{ left: 0, top: 0 }}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.75 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) scaleX(${pos.dir})`,
          transformOrigin: "center"
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ imageRendering: "pixelated" }}
        >
          <rect x="4" y="4" width="4" height="4" fill="#c400f7" />
          <rect x="8" y="4" width="4" height="4" fill="#c400f7" />
          <rect x="12" y="4" width="4" height="4" fill="#c400f7" />
          <rect x="16" y="8" width="4" height="4" fill="#c400f7" />
          <rect x="12" y="8" width="4" height="4" fill="#c400f7" />
          <rect x="8" y="8" width="4" height="4" fill="#c400f7" />
          <rect x="4" y="8" width="4" height="4" fill="#c400f7" />
          <rect x="6" y="12" width="4" height="4" fill="#c400f7" />
          <rect x="10" y="12" width="4" height="4" fill="#c400f7" />
          <rect x="14" y="12" width="4" height="4" fill="#c400f7" />
          <rect x="8" y="16" width="3" height="4" fill="#4033ff" />
          <rect x="14" y="16" width="3" height="4" fill="#4033ff" />
          <rect x="18" y="10" width="2" height="2" fill="#f1f0ff" />
          <rect x="6" y="2" width="2" height="2" fill="#4033ff" />
        </svg>
      </div>
    </motion.div>
  );
}
