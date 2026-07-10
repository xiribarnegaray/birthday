import { cn } from "@/lib/cn";

type BackgroundVariant = "sage" | "accent" | "cream" | "forest";

const VARIANT_BLOBS: Record<BackgroundVariant, [string, string]> = {
  sage: ["bg-sage/30", "bg-sage-light/40"],
  accent: ["bg-accent/25", "bg-accent-soft/30"],
  cream: ["bg-cream/50", "bg-beige/50"],
  forest: ["bg-forest/25", "bg-sage/20"],
};

interface OrganicBackgroundProps {
  variant?: BackgroundVariant;
  className?: string;
}

/**
 * Capa decorativa de formas orgánicas y desenfocadas, reutilizada como
 * fondo sutil en varias escenas para evitar bloques de color plano.
 */
export function OrganicBackground({
  variant = "sage",
  className,
}: OrganicBackgroundProps) {
  const [first, second] = VARIANT_BLOBS[variant];

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute -top-24 -left-20 h-72 w-72 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] blur-3xl",
          first,
        )}
      />
      <div
        className={cn(
          "absolute -right-24 bottom-0 h-80 w-80 rounded-[55%_45%_40%_60%/45%_55%_45%_55%] blur-3xl",
          second,
        )}
      />
    </div>
  );
}
