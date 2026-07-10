"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Compass, Footprints, Mountain, Route, TreePine, type LucideIcon } from "lucide-react";
import { giftContent } from "@/data/giftContent";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";
import { cn } from "@/lib/cn";

interface Waypoint {
  x: number;
  y: number;
  icon: LucideIcon;
  side: "left" | "right";
}

const VIEW_HEIGHT = 920;

const WAYPOINTS: Waypoint[] = [
  { x: 100, y: 60, icon: Footprints, side: "right" },
  { x: 68, y: 260, icon: Route, side: "left" },
  { x: 132, y: 460, icon: TreePine, side: "right" },
  { x: 68, y: 660, icon: Mountain, side: "left" },
  { x: 100, y: 860, icon: Compass, side: "right" },
];

function buildTrailPath(points: Waypoint[]): string {
  const [w0, w1, w2, w3, w4] = points;
  return [
    `M${w0.x},${w0.y}`,
    `Q${w0.x - 42},${(w0.y + w1.y) / 2} ${w1.x},${w1.y}`,
    `Q${w1.x - 28},${(w1.y + w2.y) / 2} ${w2.x},${w2.y}`,
    `Q${w2.x + 42},${(w2.y + w3.y) / 2} ${w3.x},${w3.y}`,
    `Q${w3.x - 28},${(w3.y + w4.y) / 2} ${w4.x},${w4.y}`,
  ].join(" ");
}

export function TrailAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotionPreference();
  const staticProgress = useMotionValue(1);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = prefersReducedMotion ? staticProgress : scrollYProgress;

  const { trekking } = giftContent.sections;
  const pathD = buildTrailPath(WAYPOINTS);

  return (
    <section
      id="trekking"
      ref={sectionRef}
      aria-label="Tercera pista: movimiento y trekking"
      className="relative flex min-h-[150svh] w-full flex-col items-center overflow-hidden bg-gradient-to-b from-forest-deep via-forest to-forest-deep px-6 py-24 text-cream sm:px-10"
    >
      <span className="rounded-full border border-cream/30 px-4 py-1 text-xs tracking-[0.3em] text-cream/80 uppercase">
        {trekking.kicker}
      </span>

      <div className="relative mt-14 h-[68vh] max-h-[720px] min-h-[520px] w-full max-w-[260px] flex-shrink-0">
        <svg
          viewBox={`0 0 200 ${VIEW_HEIGHT}`}
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <path
            d={pathD}
            fill="none"
            stroke="var(--sage)"
            strokeOpacity={0.35}
            strokeWidth={4}
            strokeLinecap="round"
          />
          <motion.path
            d={pathD}
            fill="none"
            stroke="var(--accent-soft)"
            strokeWidth={5}
            strokeLinecap="round"
            style={{ pathLength: progress }}
          />
          {WAYPOINTS.map((point, index) => (
            <TrailDot key={index} point={point} index={index} progress={progress} />
          ))}
        </svg>

        {trekking.lines.map((text, index) => {
          const point = WAYPOINTS[index];
          if (!point) return null;
          return (
            <TrailLabel
              key={text}
              text={text}
              icon={point.icon}
              side={point.side}
              topPercent={(point.y / VIEW_HEIGHT) * 100}
              index={index}
              progress={progress}
            />
          );
        })}
      </div>
    </section>
  );
}

function TrailDot({
  point,
  index,
  progress,
}: {
  point: Waypoint;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / WAYPOINTS.length;
  const end = start + 0.14;
  const active = useTransform(progress, [start, end], [0, 1], { clamp: true });
  const radius = useTransform(active, [0, 1], [4, 9]);
  const opacity = useTransform(active, [0, 1], [0.4, 1]);

  return (
    <motion.circle
      cx={point.x}
      cy={point.y}
      r={radius}
      style={{ opacity }}
      fill="var(--accent-soft)"
    />
  );
}

function TrailLabel({
  text,
  icon: Icon,
  side,
  topPercent,
  index,
  progress,
}: {
  text: string;
  icon: LucideIcon;
  side: "left" | "right";
  topPercent: number;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / WAYPOINTS.length;
  const end = start + 0.14;
  const active = useTransform(progress, [start, end], [0, 1], { clamp: true });
  const opacity = useTransform(active, [0, 1], [0.25, 1]);
  const x = useTransform(active, [0, 1], [side === "left" ? 10 : -10, 0]);

  return (
    <motion.div
      style={{ top: `${topPercent}%`, opacity, x }}
      className={cn(
        "absolute flex w-[150px] -translate-y-1/2 items-center gap-2 text-sm text-cream/90",
        side === "left" ? "right-[58%] flex-row-reverse text-right" : "left-[58%] text-left",
      )}
    >
      <Icon className="h-4 w-4 shrink-0 text-accent-soft" aria-hidden="true" />
      <span>{text}</span>
    </motion.div>
  );
}
