"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { StorySection } from "@/components/StorySection";
import { OrganicBackground } from "@/components/OrganicBackground";
import { AnimatedLines } from "@/components/AnimatedLines";
import { giftContent } from "@/data/giftContent";

export function RevealCTA() {
  const { beforeReveal } = giftContent.sections;

  return (
    <StorySection
      background="forest"
      ariaLabel="Antes de la revelación"
      decoration={<OrganicBackground variant="forest" />}
      contentClassName="flex flex-col items-center gap-10"
    >
      <AnimatedLines
        lines={beforeReveal.lines}
        lineClassName="font-display text-xl text-balance text-beige sm:text-2xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-col items-center gap-2"
      >
        {beforeReveal.closingLines.map((text) => (
          <p key={text} className="font-display text-2xl text-cream sm:text-3xl">
            {text}
          </p>
        ))}
      </motion.div>

      <motion.a
        href="#gift-reveal"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.03 }}
        className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold tracking-wide text-forest-deep shadow-lg shadow-accent/20 transition-colors hover:bg-accent-soft"
      >
        {beforeReveal.ctaLabel}
        <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
      </motion.a>
    </StorySection>
  );
}
