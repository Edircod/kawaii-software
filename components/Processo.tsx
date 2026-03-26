"use client";

import { useSite } from "@/components/providers/SiteProvider";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Processo() {
  const { dictionary } = useSite();

  return (
    <section id="process" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.28em] text-secondary">
            {"// process"}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-foreground md:text-6xl">
            {dictionary.process.headline}
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">{dictionary.process.intro}</p>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-8">
            {dictionary.process.steps.map((step, index) => (
              <SectionReveal
                key={step.code}
                direction={index % 2 === 0 ? "left" : "right"}
                className="glass-soft relative rounded-[28px] border p-6 shadow-card md:ml-12 md:p-8"
              >
                <div className="absolute -left-1 top-6 hidden h-3 w-3 rounded-full bg-secondary md:block" />
                <div className="absolute right-6 top-4 font-display text-6xl font-bold leading-none tracking-[-0.06em] text-primary/20 md:text-8xl">
                  {index + 1}
                </div>

                <div className="relative z-10 max-w-3xl">
                  <div className="mb-3 font-mono text-sm uppercase tracking-[0.24em] text-jolly">
                    {step.code}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted">{step.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
