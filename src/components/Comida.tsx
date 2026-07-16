"use client";

import { motion, type Variants } from "framer-motion";
import { StorySection } from "@/components/StorySection";
import { giftContent } from "@/data/giftContent";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Comida() {
  const { comida } = giftContent.sections;

  return (
    <StorySection
      id="comida"
      ariaLabel="Comer bien y Nacional"
      tone="dark"
      contentClassName="flex flex-col items-center text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.span
          variants={item}
          className="font-display text-4xl font-bold text-balance text-ink sm:text-5xl"
        >
          {comida.left}
        </motion.span>

        <motion.span
          variants={item}
          aria-hidden="true"
          className="font-display text-3xl font-bold text-red sm:text-4xl"
        >
          +
        </motion.span>

        <motion.span
          variants={item}
          className="font-display text-4xl font-bold text-balance text-blue sm:text-5xl"
        >
          {comida.right}
        </motion.span>

        <motion.p
          variants={item}
          className="mt-4 max-w-sm font-display text-base text-red-deep italic sm:text-lg"
        >
          {comida.comment}
        </motion.p>
      </motion.div>
    </StorySection>
  );
}
