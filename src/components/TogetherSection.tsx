import { StorySection } from "@/components/StorySection";
import { OrganicBackground } from "@/components/OrganicBackground";
import { AnimatedLines } from "@/components/AnimatedLines";
import { giftContent } from "@/data/giftContent";

export function TogetherSection() {
  const { together } = giftContent.sections;

  return (
    <StorySection
      background="cream"
      ariaLabel="Hace tiempo veníamos pensando en esto"
      decoration={<OrganicBackground variant="sage" />}
    >
      <AnimatedLines
        lines={together.lines}
        emphasisWord={together.emphasisWord}
        lineClassName="font-display text-2xl sm:text-3xl"
      />
    </StorySection>
  );
}
