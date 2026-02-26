"use client";

import { useI18n } from "@/lib/i18n";

export default function Capabilities() {
  const { t } = useI18n();

  return (
    <section id="capabilities" className="bg-white py-24 dark:bg-slate-950">
      <div className="section-shell">
        <h2 className="text-3xl font-semibold md:text-4xl">{t.capabilities.title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{t.capabilities.intro}</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.capabilities.items.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 p-8 transition hover:border-accent/40 dark:border-slate-800"
            >
              <span className="pointer-events-none absolute -right-2 -top-10 text-8xl font-bold text-slate-300/30 dark:text-slate-700/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="relative text-xl font-semibold">{item.title}</h3>
              <p className="relative mt-3 max-w-md text-slate-600 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
