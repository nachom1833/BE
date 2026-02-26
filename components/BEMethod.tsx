"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function BEMethodComponent() {
  const { t } = useI18n();

  return (
    <section
      id="method"
      className="relative overflow-hidden bg-bg-primary py-24 md:py-32"
      aria-labelledby="be-method-title"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[22vw] font-bold tracking-tight text-deep-blue/5 dark:text-white/5"
      >
        BE
      </span>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="md:col-span-5"
          >
            <motion.p
              variants={itemVariants}
              className="mb-6 text-sm uppercase tracking-[0.2em] text-text-secondary"
            >
              {t.beMethod.label}
            </motion.p>
            <motion.h2
              id="be-method-title"
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-text-primary md:text-5xl"
            >
              {t.beMethod.title}
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-lg text-text-secondary">
              {t.beMethod.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-10 md:col-span-7"
          >
            {t.beMethod.steps.map((step, index) => (
              <motion.article key={step.title} variants={itemVariants} className="flex items-start gap-6">
                <p className="text-4xl font-semibold text-text-primary/30" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-text-secondary">{step.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const BEMethod = memo(BEMethodComponent);

export default BEMethod;
