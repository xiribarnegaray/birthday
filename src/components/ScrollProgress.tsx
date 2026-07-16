"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Barra superior minimalista que indica el progreso de la historia.
 * Es puramente decorativa, por eso queda oculta para lectores de pantalla.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px] bg-ink/10"
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-red via-gold to-blue"
        style={{ scaleX }}
      />
    </div>
  );
}
