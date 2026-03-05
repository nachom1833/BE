"use client";

import type { PointerEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useI18n } from "@/lib/i18n";

type CapabilityCardProps = {
  index: number;
  title: string;
  description: string;
};

const MAX_ROTATION = 6;

function clampRotation(value: number) {
  return Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, value));
}

function CapabilityCard({ index, title, description }: CapabilityCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 220,
    damping: 24,
    mass: 0.7,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 220,
    damping: 24,
    mass: 0.7,
  });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    const nextRotateY = clampRotation((x - 0.5) * 2 * MAX_ROTATION);
    const nextRotateX = clampRotation((0.5 - y) * 2 * MAX_ROTATION);

    rotateX.set(nextRotateX);
    rotateY.set(nextRotateY);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="[perspective:1000px]">
      <motion.article
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-accent/40 dark:border-slate-800 dark:bg-slate-950"
      >
        <span className="pointer-events-none absolute -right-2 -top-10 text-8xl font-bold text-slate-300/30 dark:text-slate-700/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="relative text-xl font-semibold">{title}</h3>
        <p className="relative mt-3 max-w-md text-slate-600 dark:text-slate-300">{description}</p>
      </motion.article>
    </div>
  );
}

export default function Capabilities() {
  const { t } = useI18n();

  return (
    <section id="capabilities" className="bg-white py-24 dark:bg-slate-950">
      <div className="section-shell">
        <h2 className="text-3xl font-semibold md:text-4xl">{t.capabilities.title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{t.capabilities.intro}</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.capabilities.items.map((item, index) => (
            <CapabilityCard
              key={item.title}
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
