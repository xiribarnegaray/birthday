"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { StorySection } from "@/components/StorySection";
import { giftContent } from "@/data/giftContent";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.24, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// "familia" aparece un poco más lenta y con una leve escala.
const word: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Familia() {
  const { familia } = giftContent.sections;

  return (
    <StorySection
      id="familia"
      ariaLabel="Un lugar conocido, vivido distinto, en familia"
      tone="light"
      contentClassName="flex flex-col items-center text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.p
          variants={item}
          className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl"
        >
          {familia.lead}
        </motion.p>

        <motion.p
          variants={item}
          className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl"
        >
          {familia.linePrefix}
          <span className="relative inline-block">
            <motion.span
              variants={word}
              className="inline-block text-5xl font-bold text-gold sm:text-6xl"
            >
              {familia.emphasis}
            </motion.span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-1 h-1.5 rounded-full bg-gradient-to-r from-red via-white to-blue"
            />
          </span>
          .
        </motion.p>

        <motion.p
          variants={item}
          className="mt-1 max-w-sm font-display text-base text-rose-200 italic sm:text-lg"
        >
          {familia.comment}
        </motion.p>

        <motion.a
          variants={item}
          href="#gift-reveal"
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.03 }}
          className="group mt-2 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold tracking-wide text-blue-deep shadow-lg shadow-blue-deep/30 transition-colors hover:bg-gold-soft"
        >
          {familia.ctaLabel}
          <ArrowDown
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </motion.a>
      </motion.div>
    </StorySection>
  );
}
