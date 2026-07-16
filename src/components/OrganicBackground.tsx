import { cn } from "@/lib/cn";

type BackgroundVariant = "red" | "blue" | "white" | "gold";

const VARIANT_BLOBS: Record<BackgroundVariant, [string, string]> = {
  red: ["bg-red/20", "bg-gold-soft/25"],
  blue: ["bg-blue/25", "bg-white/10"],
  white: ["bg-white/50", "bg-red/10"],
  gold: ["bg-gold/25", "bg-blue/15"],
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
  variant = "red",
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
