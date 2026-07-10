"use client";

import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/cn";

interface RestartButtonProps {
  label: string;
  targetId?: string;
  className?: string;
}

/**
 * Vuelve a llevar a la persona usuaria al comienzo de la historia
 * mediante un desplazamiento suave.
 */
export function RestartButton({ label, targetId = "top", className }: RestartButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-current/30 px-5 py-3 text-sm font-medium tracking-wide transition-colors hover:border-current/70 hover:bg-current/5 active:scale-[0.97]",
        className,
      )}
    >
      <RotateCcw className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  );
}
