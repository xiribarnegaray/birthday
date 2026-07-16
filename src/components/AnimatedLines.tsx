"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface AnimatedLinesProps {
  lines: readonly string[];
  emphasisWord?: string;
  className?: string;
  lineClassName?: string;
  align?: "left" | "center";
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.05 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Revela una lista de frases una por una a medida que la sección entra
 * en el viewport. Se usa en casi todas las escenas de la historia.
 */
export function AnimatedLines({
  lines,
  emphasisWord,
  className,
  lineClassName,
  align = "center",
}: AnimatedLinesProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {lines.map((text, index) => (
        <motion.p key={index} variants={line} className={cn("text-balance", lineClassName)}>
          {withEmphasis(text, emphasisWord)}
        </motion.p>
      ))}
    </motion.div>
  );
}

function withEmphasis(text: string, word?: string): ReactNode {
  if (!word) return text;

  const index = text.toLowerCase().indexOf(word.toLowerCase());
  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + word.length);
  const after = text.slice(index + word.length);

  return (
    <>
      {before}
      <span className="font-display italic text-gold">{match}</span>
      {after}
    </>
  );
}
