"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { giftContent } from "@/data/giftContent";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export function BirthdayHero() {
  const { hero } = giftContent.sections;
  const { birthdayPerson, images, birthdayDateLabel } = giftContent;
  const prefersReducedMotion = useReducedMotionPreference();
  const words = hero.title(birthdayPerson).split(" ");

  return (
    <section
      id="top"
      aria-label="Portada"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-between overflow-hidden px-6 py-14 text-cream sm:px-10"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/75 via-forest-deep/60 to-forest-deep/90" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-sm uppercase tracking-[0.3em] text-accent-soft"
      >
        {hero.eyebrow}
      </motion.p>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <h1 className="font-display max-w-md text-4xl leading-tight font-semibold text-balance sm:text-5xl">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-3 inline-block last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 + words.length * 0.12 + 0.15 }}
          className="max-w-sm text-balance text-base text-beige sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 + words.length * 0.12 + 0.4 }}
          className="text-[11px] tracking-[0.25em] text-cream/75 uppercase"
        >
          {birthdayDateLabel}
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="flex flex-col items-center gap-2 pb-2 text-xs tracking-[0.25em] text-cream/80 uppercase"
      >
        <span>{hero.scrollHint}</span>
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </motion.div>
    </section>
  );
}
