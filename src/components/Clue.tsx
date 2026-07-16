"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { StorySection } from "@/components/StorySection";
import { cn } from "@/lib/cn";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface ClueProps {
  id?: string;
  ariaLabel?: string;
  /** Frases principales, se revelan una tras otra. */
  lines: readonly string[];
  /** Remate en rojo debajo de la pista (anotación, no párrafo principal). */
  comment?: string;
  align?: "left" | "center" | "right";
  tone?: "dark" | "light";
  /** Marca o separador decorativo que aparece arriba (ej. TricolorDots). */
  mark?: ReactNode;
}

/**
 * Pista integrada directamente sobre el degradado del fondo (sin tarjeta).
 * Tipografía grande, aparición escalonada y remate rojo que entra después.
 */
export function Clue({
  id,
  ariaLabel,
  lines,
  comment,
  align = "center",
  tone = "dark",
  mark,
}: ClueProps) {
  const alignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
        ? "items-end text-right"
        : "items-center text-center";

  // Remate rojo con contraste según dónde cae la sección en el degradado.
  const commentClass = tone === "dark" ? "text-red-deep" : "text-rose-200";

  return (
    <StorySection
      id={id}
      ariaLabel={ariaLabel}
      tone={tone}
      contentClassName={cn("flex flex-col", alignClass)}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className={cn("flex flex-col gap-6", alignClass)}
      >
        {mark ? (
          <motion.div variants={item} className="mb-1">
            {mark}
          </motion.div>
        ) : null}

        {lines.map((text, index) => (
          <motion.p
            key={index}
            variants={item}
            className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl"
          >
            {text}
          </motion.p>
        ))}

        {comment ? (
          <motion.p
            variants={item}
            className={cn(
              "mt-2 max-w-sm font-display text-base italic sm:text-lg",
              commentClass,
            )}
          >
            {comment}
          </motion.p>
        ) : null}
      </motion.div>
    </StorySection>
  );
}
