import { StorySection } from "@/components/StorySection";
import { OrganicBackground } from "@/components/OrganicBackground";
import { AnimatedLines } from "@/components/AnimatedLines";
import { RestartButton } from "@/components/RestartButton";
import { giftContent } from "@/data/giftContent";

export function FinalMessage() {
  const { finalMessage } = giftContent.sections;
  const { from } = giftContent;
  const signature = `${finalMessage.signaturePrefix} ${from.join(" y ")}`;

  return (
    <StorySection
      id="final-message"
      background="dawn"
      ariaLabel="Mensaje final"
      decoration={<OrganicBackground variant="accent" />}
      contentClassName="flex flex-col items-center gap-10"
    >
      <AnimatedLines
        lines={finalMessage.lines}
        lineClassName="font-display text-xl text-balance sm:text-2xl"
      />

      <p className="font-display text-lg text-accent-soft italic sm:text-xl">{signature}</p>

      <RestartButton label={finalMessage.restartLabel} targetId="top" className="text-cream" />
    </StorySection>
  );
}
