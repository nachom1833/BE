"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function Method() {
  const { t } = useI18n();

  return (
    <section id="method" className="relative overflow-hidden bg-deep-blue py-24 text-white">
      <span className="pointer-events-none absolute left-10 top-5 select-none text-[30vw] font-bold leading-none text-white/5">
        BE
      </span>
      <div className="section-shell relative z-10">
        <h2 className="text-3xl font-semibold md:text-4xl">{t.method.title}</h2>
        <p className="mt-4 text-lg text-slate-200">{t.method.subtitle}</p>

        <div className="mt-12 space-y-5">
          {t.method.steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center gap-4 border-b border-white/20 pb-4"
            >
              <span className="text-lg text-white/70">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-medium">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
