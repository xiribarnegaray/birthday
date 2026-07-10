"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import confetti from "canvas-confetti";
import { AirbnbCard } from "@/components/AirbnbCard";
import { giftContent } from "@/data/giftContent";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export function GiftReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const hasFiredRef = useRef(false);
  const prefersReducedMotion = useReducedMotionPreference();
  const { giftReveal } = giftContent.sections;
  const { location, theme } = giftContent;

  useEffect(() => {
    if (!isInView || hasFiredRef.current || prefersReducedMotion) return;
    hasFiredRef.current = true;

    const colors = [theme.accent, theme.accentSoft, theme.sageLight, theme.cream];

    confetti({
      particleCount: 90,
      spread: 75,
      startVelocity: 38,
      gravity: 0.9,
      ticks: 200,
      origin: { y: 0.35 },
      colors,
      scalar: 0.9,
      disableForReducedMotion: true,
    });

    const timeout = window.setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 100,
        startVelocity: 28,
        origin: { y: 0.3 },
        colors,
        scalar: 0.8,
        disableForReducedMotion: true,
      });
    }, 220);

    return () => window.clearTimeout(timeout);
  }, [isInView, prefersReducedMotion, theme]);

  return (
    <section
      id="gift-reveal"
      ref={sectionRef}
      aria-label="Revelación del regalo"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-b from-forest-deep via-forest to-sage px-6 py-24 sm:px-10"
    >
      <div className="flex flex-col items-center gap-4 text-center text-cream">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-semibold text-accent-soft sm:text-4xl"
        >
          {giftReveal.preTitle}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-sm text-balance text-xl sm:text-2xl"
        >
          {giftReveal.title(location.city)}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <AirbnbCard />
      </motion.div>
    </section>
  );
}
