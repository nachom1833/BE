"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function HeroComponent() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative h-[100svh] overflow-hidden md:h-screen" aria-label="Hero section">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.svg"
        src="https://cdn.coverr.co/videos/coverr-modern-architecture-1579/1080p.mp4"
      />
      <div className="absolute inset-0 z-10 bg-[#0f172a]/40" />

      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1280px] items-center px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-[720px] text-left"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-lg font-medium text-white/80 md:text-xl">
            {t.hero.subtitle}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex gap-4">
            <Link
              href="#contact"
              aria-label="Start a conversation with BE Studio"
              className="bg-accent px-6 py-3 font-semibold text-white transition-all duration-300 hover:opacity-90"
            >
              {t.hero.primary}
            </Link>
            <Link
              href="#method"
              aria-label="Discover BE Studio method"
              className="border border-white/40 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10"
            >
              {t.hero.secondary}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const Hero = memo(HeroComponent);

export default Hero;
