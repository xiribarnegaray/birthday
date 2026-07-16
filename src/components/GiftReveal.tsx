"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import confetti from "canvas-confetti";
import { Download, ExternalLink } from "lucide-react";
import { RestartButton } from "@/components/RestartButton";
import { giftContent } from "@/data/giftContent";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

export function GiftReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });
  const hasFiredRef = useRef(false);
  const prefersReducedMotion = useReducedMotionPreference();

  const { reveal } = giftContent.sections;
  const { images, from, theme, realVoucherUrl } = giftContent;
  const signature = from.join(" y ");

  useEffect(() => {
    if (!isInView || hasFiredRef.current || prefersReducedMotion) return;
    hasFiredRef.current = true;

    const colors = [theme.red, theme.blue, theme.gold, theme.white];

    confetti({
      particleCount: 90,
      spread: 75,
      startVelocity: 38,
      gravity: 0.9,
      ticks: 200,
      origin: { y: 0.35 },
      colors,
      scalar: 0.9,
      disableForReducedMotion: true,
    });

    const timeout = window.setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 100,
        startVelocity: 28,
        origin: { y: 0.3 },
        colors,
        scalar: 0.8,
        disableForReducedMotion: true,
      });
    }, 220);

    return () => window.clearTimeout(timeout);
  }, [isInView, prefersReducedMotion, theme]);

  return (
    <section
      id="gift-reveal"
      ref={sectionRef}
      aria-label="Revelación del regalo"
      className="relative flex min-h-[100svh] w-full scroll-mt-0 flex-col items-center justify-center gap-8 overflow-hidden px-6 py-24 text-white sm:px-10"
    >
      {/* Tarjeta tipo vale/regalo */}
      <motion.article
        initial={{ opacity: 0, y: 30, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm overflow-hidden rounded-[28px] bg-paper text-ink shadow-2xl shadow-blue-deep/50 ring-1 ring-gold/40"
      >
        <div className="flex flex-col items-center gap-1 px-6 pt-7 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-red uppercase">
            {reveal.voucherHeader}
          </span>
          <h2 className="font-display text-2xl font-semibold text-balance sm:text-3xl">
            {reveal.title}
          </h2>
          <p className="text-base text-ink/70">{reveal.subtitle}</p>
        </div>

        <div className="mt-5 px-4">
          <Image
            src={images.caricatura.src}
            alt={images.caricatura.alt}
            width={images.caricatura.width}
            height={images.caricatura.height}
            sizes="(min-width: 640px) 360px, 90vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>

        <div className="flex flex-col items-center gap-1 px-6 pt-5 pb-7 text-center">
          <p className="text-sm text-ink/70">{reveal.signaturePrefix}</p>
          <p className="font-display text-xl font-semibold text-blue">{signature}</p>
          <p className="mt-3 text-xs text-ink/60">{reveal.footnote}</p>
        </div>
      </motion.article>

      {/* Acciones */}
      <div className="flex w-full max-w-sm flex-col items-center gap-3">
        <a
          href={images.caricatura.src}
          download="vale-parque-central.png"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-deep shadow-lg shadow-blue-deep/30 transition-colors hover:bg-gold-soft active:scale-[0.98]"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {reveal.downloadLabel}
        </a>

        {realVoucherUrl ? (
          <a
            href={realVoucherUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
          >
            {reveal.realVoucherLabel}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}

        <RestartButton
          label={reveal.restartLabel}
          targetId="top"
          className="mt-2 text-white/90"
        />
      </div>
    </section>
  );
}
