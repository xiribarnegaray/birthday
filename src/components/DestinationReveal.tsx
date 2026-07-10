"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { giftContent } from "@/data/giftContent";

export function DestinationReveal() {
  const { destination } = giftContent.sections;
  const { images, location } = giftContent;

  return (
    <section
      id="destination"
      aria-label="Cuarta pista: el destino"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-cream sm:px-10"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.minas.src}
          alt={images.minas.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/75 via-forest-deep/35 to-forest-deep/90" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-cream/30 px-4 py-1 text-xs tracking-[0.3em] text-cream/80 uppercase"
        >
          {destination.kicker}
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-beige sm:text-xl"
        >
          {destination.intro}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl font-semibold text-accent-soft sm:text-7xl"
        >
          {destination.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="max-w-sm text-base text-balance text-beige sm:text-lg"
        >
          {destination.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-forest-deep/40 px-5 py-2 text-sm tracking-wide backdrop-blur-sm"
        >
          <MapPin className="h-4 w-4 text-accent-soft" aria-hidden="true" />
          {location.full}
        </motion.div>
      </div>
    </section>
  );
}
