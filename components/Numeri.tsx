"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Numeri() {
  const { dictionary } = useSite();

  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.28em] text-secondary">
            {"// trust"}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-foreground md:text-6xl">
            {dictionary.numbers.headline}
          </h2>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.numbers.items.map((item, index) => (
            <SectionReveal
              key={item.label}
              direction={index % 2 === 0 ? "left" : "right"}
              className="glass-soft rounded-[28px] border p-8 shadow-card"
            >
              <div className={`font-display text-7xl font-extrabold tracking-[-0.06em] ${index % 2 === 0 ? "text-secondary" : "text-jolly"}`}>
                {item.value}
              </div>
              <p className="mt-4 max-w-[15ch] text-base leading-7 text-muted">{item.label}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
