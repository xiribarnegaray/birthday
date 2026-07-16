import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface StorySectionProps {
  id?: string;
  className?: string;
  contentClassName?: string;
  /** Color del texto según dónde cae la sección en el degradado de fondo. */
  tone?: "dark" | "light";
  ariaLabel?: string;
  /** Capa decorativa (por ejemplo OrganicBackground) anclada a toda la sección. */
  decoration?: ReactNode;
  children: ReactNode;
}

/**
 * Bloque base para cada escena de la historia: ocupa (casi) toda la pantalla
 * y centra el contenido, dejando ritmo entre secciones. El fondo es
 * transparente para que se vea el degradado continuo del <main>.
 */
export function StorySection({
  id,
  className,
  contentClassName,
  tone = "dark",
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
        tone === "light" ? "text-white" : "text-ink",
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
