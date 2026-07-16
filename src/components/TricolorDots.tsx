import { cn } from "@/lib/cn";

/**
 * Pequeño detalle decorativo en rojo, blanco y azul. Sirve como separador
 * sutil o marca de sección. Es puramente visual.
 */
export function TricolorDots({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex items-center gap-1.5", className)}
    >
      <span className="h-2 w-2 rounded-full bg-red" />
      <span className="h-2 w-2 rounded-full bg-white ring-1 ring-ink/15" />
      <span className="h-2 w-2 rounded-full bg-blue" />
    </span>
  );
}
