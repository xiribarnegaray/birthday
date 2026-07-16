"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { giftContent } from "@/data/giftContent";
import { OrganicBackground } from "@/components/OrganicBackground";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export function BirthdayHero() {
  const { hero } = giftContent.sections;
  const { birthdayName, images } = giftContent;
  const prefersReducedMotion = useReducedMotionPreference();
  const words = hero.title(birthdayName).split(" ");

  return (
    <section
      id="top"
      aria-label="Portada"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-between overflow-hidden px-6 py-14 text-ink sm:px-10"
    >
      <OrganicBackground variant="white" />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mt-6 text-sm font-semibold tracking-[0.3em] text-red uppercase"
      >
        {hero.eyebrow}
      </motion.p>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 text-center">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5 + words.length * 0.12 + 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <Image
            src={images.escudo.src}
            alt={images.escudo.alt}
            width={images.escudo.width}
            height={images.escudo.height}
            priority
            className="h-auto w-36 sm:w-44"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="relative z-10 flex flex-col items-center gap-2 pb-2 text-xs tracking-[0.25em] text-ink/70 uppercase"
      >
        <span>{hero.scrollHint}</span>
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-red" aria-hidden="true" />
        </motion.span>
      </motion.div>
    </section>
  );
}
