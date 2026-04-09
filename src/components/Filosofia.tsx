"use client";

import { Brush, Ruler, TerminalSquare } from "lucide-react";

import { useSite } from "@/components/providers/SiteProvider";
import { Card } from "@/components/ui/Card";
import { SectionReveal } from "@/components/ui/SectionReveal";

const iconMap = [Brush, Ruler, TerminalSquare];

export function Filosofia() {
  const { dictionary } = useSite();

  return (
    <section id="philosophy" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.28em] text-secondary">
            {"// philosophy"}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-foreground md:text-6xl">
            {dictionary.philosophy.headline}
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">{dictionary.philosophy.intro}</p>
        </SectionReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {dictionary.philosophy.cards.map((card, index) => {
            const Icon = iconMap[index];

            return (
              <SectionReveal
                key={card.title}
                direction={index % 2 === 0 ? "left" : "right"}
                className="h-full"
              >
                <Card
                  className={`group h-full border-l-4 ${
                    card.accent === "primary"
                      ? "border-l-primary"
                      : card.accent === "secondary"
                        ? "border-l-secondary"
                        : "border-l-jolly"
                  } transition hover:-translate-y-1 hover:shadow-glow`}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                      {card.kicker}
                    </span>
                    <div className="glass-soft rounded-full border p-3 text-foreground">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-[-0.03em] text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-muted">{card.body}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass-soft rounded-full border px-3 py-1.5 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
