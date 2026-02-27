"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function CTA() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24">
      <div className="section-shell text-center">
        <h2 className="text-4xl font-semibold md:text-5xl">{t.cta.headline}</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t.cta.subtitle}</p>
        <Link
          href="mailto:contact@bestudio.com"
          className="mt-10 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white"
        >
          {t.cta.button}
        </Link>
        <div className="mt-12">
          <p className="text-2xl font-semibold">BE.</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Do It Simple.</p>
        </div>
      </div>
    </section>
  );
}
