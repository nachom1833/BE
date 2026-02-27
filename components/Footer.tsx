"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  const argentinaTime = useMemo(
    () =>
      new Intl.DateTimeFormat("en-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date()),
    []
  );

  return (
    <footer className="border-t border-slate-200 py-12 dark:border-slate-800">
      <div className="section-shell grid gap-8 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold">BE.</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Do It Simple.</p>
        </div>
        <nav className="space-y-2">
          <Link href="#capabilities" className="block">{t.nav.capabilities}</Link>
          <Link href="#industries" className="block">{t.nav.industries}</Link>
          <Link href="#method" className="block">{t.nav.method}</Link>
          <Link href="#contact" className="block">{t.nav.contact}</Link>
        </nav>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t.footer.email}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t.footer.linkedin}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Argentina time</p>
          <p className="mt-1 text-sm">{argentinaTime}</p>
        </div>
      </div>
    </footer>
  );
}
