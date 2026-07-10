"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Moon } from "lucide-react";
import { giftContent } from "@/data/giftContent";

/**
 * Tarjeta de estilo "app de viajes" con el detalle del alojamiento real.
 * No incrusta Airbnb: el botón abre el enlace en una pestaña nueva.
 */
export function AirbnbCard() {
  const { airbnb, images, location } = giftContent;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="w-full max-w-sm overflow-hidden rounded-[28px] bg-cream text-forest-deep shadow-2xl shadow-forest-deep/30"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={images.airbnb.src}
          alt={images.airbnb.alt}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 384px, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent" />
        {airbnb.nightsLabel && (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-forest-deep backdrop-blur-sm">
            <Moon className="h-3.5 w-3.5" aria-hidden="true" />
            {airbnb.nightsLabel}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-xl font-semibold">{airbnb.title}</h3>
          <p className="flex items-center gap-1.5 text-sm text-brown">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {location.full}
          </p>
        </div>

        <p className="text-sm text-forest-deep/80">{airbnb.description}</p>

        <a
          href={airbnb.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep active:scale-[0.98]"
        >
          {airbnb.ctaLabel}
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>

        <p className="text-center text-xs text-brown/80">{airbnb.datesNote}</p>
      </div>
    </motion.div>
  );
}
