"use client";

import { Blocks, Cloud, Cpu, LockKeyhole, Smartphone, Workflow } from "lucide-react";

import { useSite } from "@/components/providers/SiteProvider";
import { Card } from "@/components/ui/Card";
import { SectionReveal } from "@/components/ui/SectionReveal";

const icons = [Cloud, Blocks, Cpu, Smartphone, Workflow, LockKeyhole];
const spans = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-2"
];

export function Capacita() {
  const { dictionary } = useSite();

  return (
    <section id="capabilities" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.28em] text-secondary">
            {"// capabilities"}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-foreground md:text-6xl">
            {dictionary.capabilities.headline}
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">{dictionary.capabilities.intro}</p>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {dictionary.capabilities.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <SectionReveal key={item.title} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className={`${spans[index]} group h-full transition hover:-translate-y-1 hover:border-white/20`}>
                  <div className="glass-soft mb-6 inline-flex rounded-2xl border p-3 text-foreground">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="glass-soft rounded-full border px-3 py-1.5 font-mono text-xs text-muted transition group-hover:border-jolly/40 group-hover:text-foreground"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 max-w-xl text-base leading-8 text-muted">{item.description}</p>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
