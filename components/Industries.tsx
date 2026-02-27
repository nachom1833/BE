"use client";

import { useI18n } from "@/lib/i18n";

export default function Industries() {
  const { t } = useI18n();

  return (
    <section id="industries" className="py-24">
      <div className="section-shell">
        <h2 className="text-3xl font-semibold md:text-4xl">{t.industries.title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.industries.items.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800">
              <h3 className="text-2xl font-medium">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
