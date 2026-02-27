"use client";

import { useI18n } from "@/lib/i18n";

export default function DataSection() {
  const { t } = useI18n();

  return (
    <section className="py-24">
      <div className="section-shell">
        <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">{t.data.headline}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.data.metrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800">
              <p className="text-4xl font-semibold text-deep-blue dark:text-white">{metric.value}</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
