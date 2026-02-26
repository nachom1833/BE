"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition ${
        scrolled
          ? "border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="#home" className="shrink-0">
          <p className="text-xl font-semibold leading-none">BE.</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Do It Simple.</p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#capabilities" className="text-sm text-slate-700 dark:text-slate-200">{t.nav.capabilities}</Link>
          <Link href="#industries" className="text-sm text-slate-700 dark:text-slate-200">{t.nav.industries}</Link>
          <Link href="#method" className="text-sm text-slate-700 dark:text-slate-200">{t.nav.method}</Link>
          <Link href="#contact" className="text-sm text-slate-700 dark:text-slate-200">{t.nav.contact}</Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            className="text-sm"
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            aria-label="Toggle language"
          >
            EN | ES
          </button>
          <button
            className="rounded-full border border-slate-300 p-2 text-xs dark:border-slate-700"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? "☀" : "☾"}
          </button>
          <Link
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white"
          >
            {t.nav.talk}
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-950 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="section-shell flex flex-col gap-4 py-5">
          <Link href="#capabilities" onClick={() => setMenuOpen(false)}>{t.nav.capabilities}</Link>
          <Link href="#industries" onClick={() => setMenuOpen(false)}>{t.nav.industries}</Link>
          <Link href="#method" onClick={() => setMenuOpen(false)}>{t.nav.method}</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</Link>
          <div className="flex items-center gap-4 pt-2">
            <button className="text-sm" onClick={() => setLocale(locale === "en" ? "es" : "en")}>EN | ES</button>
            <button
              className="rounded-full border border-slate-300 p-2 text-xs dark:border-slate-700"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {resolvedTheme === "dark" ? "☀" : "☾"}
            </button>
            <Link href="#contact" className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white">
              {t.nav.talk}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
