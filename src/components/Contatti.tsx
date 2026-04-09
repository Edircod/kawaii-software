"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Clock3, Mail, MapPin } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useSite } from "@/components/providers/SiteProvider";
import { Card } from "@/components/ui/Card";
import { SectionReveal } from "@/components/ui/SectionReveal";

function getTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone
  }).format(new Date());
}

export function Contatti() {
  const { dictionary } = useSite();
  const [submitted, setSubmitted] = useState(false);
  const [clocks, setClocks] = useState(() => ({
    milan: "--:--:--",
    sydney: "--:--:--",
    tokyo: "--:--:--"
  }));

  useEffect(() => {
    const syncClocks = () =>
      setClocks({
        milan: getTime("Europe/Rome"),
        sydney: getTime("Australia/Perth"),
        tokyo: getTime("Asia/Tokyo")
      });

    syncClocks();
    const interval = window.setInterval(syncClocks, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, dictionary.contact.validation.name),
        email: z.string().email(dictionary.contact.validation.email),
        company: z.string().optional(),
        project: z.string().min(12, dictionary.contact.validation.project),
        budget: z.string().min(1)
      }),
    [dictionary]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      project: "",
      budget: dictionary.contact.budgets[3]
    }
  });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <SectionReveal direction="left">
          <Card className="p-8 md:p-10">
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.28em] text-secondary">
              {"// contact"}
            </p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-foreground md:text-6xl">
              {dictionary.contact.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              {dictionary.contact.subheadline}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label={dictionary.contact.fields.name}
                  error={errors.name?.message}
                  input={
                    <input
                      {...register("name")}
                      placeholder={dictionary.contact.placeholders.name}
                      className="input-field"
                    />
                  }
                />
                <Field
                  label={dictionary.contact.fields.email}
                  error={errors.email?.message}
                  input={
                    <input
                      {...register("email")}
                      placeholder={dictionary.contact.placeholders.email}
                      className="input-field"
                    />
                  }
                />
              </div>

              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_220px]">
                <Field
                  label={dictionary.contact.fields.company}
                  input={
                    <input
                      {...register("company")}
                      placeholder={dictionary.contact.placeholders.company}
                      className="input-field"
                    />
                  }
                />
                <Field
                  label={dictionary.contact.fields.budget}
                  input={
                    <select {...register("budget")} className="input-field">
                      {dictionary.contact.budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  }
                />
              </div>

              <Field
                label={dictionary.contact.fields.project}
                error={errors.project?.message}
                input={
                  <textarea
                    {...register("project")}
                    rows={6}
                    placeholder={dictionary.contact.placeholders.project}
                    className="input-field resize-none"
                  />
                }
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full border border-jolly px-6 py-3.5 font-medium text-foreground transition hover:scale-[1.02] hover:shadow-glow disabled:opacity-60"
                >
                  {dictionary.contact.submit}
                </button>
                {submitted ? (
                  <p className="text-sm text-secondary">{dictionary.contact.success}</p>
                ) : null}
              </div>
            </form>
          </Card>
        </SectionReveal>

        <SectionReveal direction="right" className="space-y-6">
          <Card className="p-8">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.28em] text-secondary">
              {dictionary.contact.officeTitle}
            </p>

            <div className="space-y-4">
              <OfficeRow
                title={dictionary.contact.milanLabel}
                time={clocks.milan}
                accent="text-secondary"
                officeHours={dictionary.contact.officeHours}
              />
              <OfficeRow
                title={dictionary.contact.sydneyLabel}
                time={clocks.sydney}
                accent="text-jolly"
                officeHours={dictionary.contact.officeHours}
              />
              <OfficeRow
                title={dictionary.contact.tokyoLabel}
                time={clocks.tokyo}
                accent="text-foreground"
                officeHours={dictionary.contact.officeHours}
              />
            </div>

            <div className="glass-strong mt-8 rounded-3xl border p-5">
              <div className="flex items-start gap-3 text-muted">
                <Clock3 size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p>{dictionary.contact.officeHours}</p>
                  <p className="mt-2">{dictionary.contact.response}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="space-y-6 p-8">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-secondary" size={18} />
              <div>
                <p className="font-medium text-foreground">hello@kawaii-software.com</p>
                <p className="mt-1 text-sm text-muted">{dictionary.contact.inboxNote}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-jolly" size={18} />
              <div>
                <p className="font-medium text-foreground">
                  {dictionary.contact.milanLabel} / {dictionary.contact.sydneyLabel} / {dictionary.contact.tokyoLabel}
                </p>
                <p className="mt-1 text-sm text-muted">{dictionary.contact.locationNote}</p>
              </div>
            </div>
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
}

function Field({
  label,
  input,
  error
}: {
  label: string;
  input: ReactNode;
  error?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {input}
      {error ? <span className="text-sm text-jolly">{error}</span> : null}
    </label>
  );
}

function OfficeRow({
  title,
  time,
  accent,
  officeHours
}: {
  title: string;
  time: string;
  accent: string;
  officeHours: string;
}) {
  return (
    <div className="glass-soft rounded-[24px] border p-5">
      <p className="text-sm text-muted">{title}</p>
      <div suppressHydrationWarning className={`mt-2 font-mono text-4xl ${accent}`}>
        {time}
      </div>
      <p className="mt-2 text-xs text-muted">{officeHours}</p>
    </div>
  );
}
