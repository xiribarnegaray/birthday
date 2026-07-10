import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type StorySectionBackground = "cream" | "forest" | "dawn" | "sage" | "minas";

const BACKGROUND_CLASSES: Record<StorySectionBackground, string> = {
  cream: "bg-cream text-forest",
  forest: "bg-forest text-cream",
  dawn: "bg-gradient-to-b from-forest-deep via-forest to-sage text-cream",
  sage: "bg-gradient-to-b from-beige via-sage-light to-sage text-forest-deep",
  minas: "bg-gradient-to-b from-accent-soft via-accent to-forest-deep text-cream",
};

interface StorySectionProps {
  id?: string;
  className?: string;
  contentClassName?: string;
  background?: StorySectionBackground;
  ariaLabel?: string;
  /** Capa decorativa (por ejemplo OrganicBackground) anclada a toda la sección. */
  decoration?: ReactNode;
  children: ReactNode;
}

/**
 * Bloque base para cada escena de la historia: ocupa (casi) toda la
 * pantalla y centra el contenido, dejando espacio para que el scroll
 * tenga ritmo entre secciones.
 */
export function StorySection({
  id,
  className,
  contentClassName,
  background = "cream",
  ariaLabel,
  decoration,
  children,
}: StorySectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 sm:px-10",
        BACKGROUND_CLASSES[background],
        className,
      )}
    >
      {decoration}
      <div className={cn("relative z-10 w-full max-w-xl", contentClassName)}>
        {children}
      </div>
    </section>
  );
}
