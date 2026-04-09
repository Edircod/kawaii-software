"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useSite } from "@/components/providers/SiteProvider";
import { Card } from "@/components/ui/Card";
import { SectionReveal } from "@/components/ui/SectionReveal";

function getOfficeTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone
  }).format(new Date());
}

export function CoverageMap() {
  const { dictionary } = useSite();
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

  const offices = [
    {
      label: dictionary.coverage.milan,
      now: officeNow.palermo,
      accent: "text-secondary",
      outer: "border-secondary/40",
      inner: "border-secondary/20",
      time: "text-secondary"
    },
    {
      label: dictionary.coverage.sydney,
      now: officeNow.perth,
      accent: "text-jolly",
      outer: "border-jolly/40",
      inner: "border-jolly/20",
      time: "text-jolly"
    },
    {
      label: dictionary.coverage.tokyo,
      now: officeNow.tokyo,
      accent: "text-foreground/80",
      outer: "border-foreground/25",
      inner: "border-foreground/10",
      time: "text-foreground"
    }
  ] as const;

  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
        <SectionReveal direction="left">
          <Card className="relative overflow-hidden p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(64,51,255,0.14),transparent_45%),radial-gradient(circle_at_bottom,rgba(196,0,247,0.14),transparent_35%)]" />
            <div className="relative">
              <div className="flex flex-wrap justify-center gap-5">
                {offices.map((office, index) => (
                  <div
                    key={office.label}
                    className="w-[158px] space-y-3 sm:w-[165px] md:w-[150px] lg:w-[132px] xl:w-[145px]"
                  >
                    <p
                      className={`text-center font-mono text-sm uppercase tracking-[0.28em] ${office.accent}`}
                    >
                      {office.label}
                    </p>
                    <div className="relative mx-auto aspect-square w-full">
                      <motion.div
                        className={`absolute inset-0 rounded-full border ${office.outer}`}
                        animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 18 - index * 2, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className={`absolute inset-[14%] rounded-full border ${office.inner}`}
                        animate={{ rotate: index % 2 === 0 ? -360 : 360 }}
                        transition={{ duration: 14 + index, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="glass-soft absolute inset-0 flex items-center justify-center rounded-full border">
                        <div className="flex h-full w-full items-center justify-center">
                          <div
                            suppressHydrationWarning
                            className={`text-center font-mono text-[clamp(1.65rem,2.45vw,2.05rem)] leading-none ${office.time}`}
                          >
                            {office.now}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-strong mt-8 rounded-[24px] border p-5 font-mono text-sm text-muted">
                <div className="flex items-start justify-between gap-4">
                  <span>{dictionary.coverage.milan}</span>
                  <span className="max-w-[72%] text-right text-secondary">
                    {dictionary.coverage.officeHoursLabel} {dictionary.coverage.workday} • {dictionary.coverage.liveNowLabel}{" "}
                    <span suppressHydrationWarning>{officeNow.palermo}</span>
                  </span>
                </div>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <span>{dictionary.coverage.sydney}</span>
                  <span className="max-w-[72%] text-right text-jolly">
                    {dictionary.coverage.officeHoursLabel} {dictionary.coverage.workday} • {dictionary.coverage.liveNowLabel}{" "}
                    <span suppressHydrationWarning>{officeNow.perth}</span>
                  </span>
                </div>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <span>{dictionary.coverage.tokyo}</span>
                  <span className="max-w-[72%] text-right text-foreground">
                    {dictionary.coverage.officeHoursLabel} {dictionary.coverage.workday} • {dictionary.coverage.liveNowLabel}{" "}
                    <span suppressHydrationWarning>{officeNow.tokyo}</span>
                  </span>
                </div>
                <div className="my-4 h-px bg-border" />
                <div className="flex justify-between text-foreground">
                  <span>{dictionary.coverage.totalLabel}</span>
                  <span>{dictionary.coverage.totalValue}</span>
                </div>
              </div>
            </div>
          </Card>
        </SectionReveal>

        <SectionReveal direction="right" className="max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.28em] text-secondary">
            {"// coverage"}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-foreground md:text-6xl">
            {dictionary.coverage.headline}
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">{dictionary.coverage.intro}</p>

          <div className="mt-8 space-y-3">
            {dictionary.coverage.strip.map((line, index) => (
              <div
                key={line}
                className="glass-soft flex items-center gap-4 rounded-2xl border px-5 py-4"
              >
                <span className={`font-mono text-sm ${index === 1 ? "text-jolly" : "text-secondary"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-foreground/90">{line}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 font-mono text-sm uppercase tracking-[0.22em] text-muted">
            {dictionary.coverage.continuous}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
