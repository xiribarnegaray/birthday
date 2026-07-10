"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedLines } from "@/components/AnimatedLines";
import { cn } from "@/lib/cn";

interface ClueImage {
  src: string;
  alt: string;
}

interface ClueSectionProps {
  id?: string;
  kicker: string;
  lines: readonly string[];
  image: ClueImage;
  /** Iconos ya renderizados (JSX), no referencias a componentes. */
  icons?: ReactNode[];
  ariaLabel?: string;
  /** "full": foto de fondo a pantalla completa. "card": foto tipo recuerdo, con leve rotación. */
  layout?: "full" | "card";
}

/**
 * Escena reutilizable para las pistas de la historia: combina una
 * fotografía con texto que aparece progresivamente y un leve parallax.
 */
export function ClueSection({
  id,
  kicker,
  lines,
  image,
  icons,
  ariaLabel,
  layout = "full",
}: ClueSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  if (layout === "card") {
    return (
      <section
        id={id}
        ref={sectionRef}
        aria-label={ariaLabel}
        className="relative flex min-h-[100svh] w-full flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-b from-beige via-cream to-sage-light px-6 py-24 text-forest-deep sm:px-10"
      >
        <motion.div
          style={{ y: cardY }}
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl border-4 border-cream shadow-2xl shadow-forest-deep/20"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 320px, 80vw"
          />
        </motion.div>

        <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6 text-center">
          <span className="rounded-full border border-forest-deep/20 px-4 py-1 text-xs tracking-[0.3em] text-brown uppercase">
            {kicker}
          </span>
          <AnimatedLines
            lines={lines}
            lineClassName="font-display text-2xl text-balance sm:text-3xl"
          />
          {icons && icons.length > 0 && <IconRow icons={icons} tone="dark" />}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-label={ariaLabel}
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-end overflow-hidden px-6 pb-20 sm:px-10"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/15 via-forest-deep/10 to-forest-deep/90" />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6 text-center text-cream">
        <span className="rounded-full border border-cream/30 px-4 py-1 text-xs tracking-[0.3em] text-cream/80 uppercase">
          {kicker}
        </span>
        <AnimatedLines
          lines={lines}
          lineClassName="font-display text-2xl text-balance sm:text-3xl"
        />
        {icons && icons.length > 0 && <IconRow icons={icons} tone="light" />}
      </div>
    </section>
  );
}

function IconRow({ icons, tone }: { icons: ReactNode[]; tone: "light" | "dark" }) {
  return (
    <div
      className={cn(
        "mt-2 flex items-center gap-5",
        tone === "light" ? "text-cream/70" : "text-brown",
      )}
    >
      {icons.map((icon, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
        >
          {icon}
        </motion.span>
      ))}
    </div>
  );
}
