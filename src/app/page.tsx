import { Leaf, Mountain, Wind } from "lucide-react";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BirthdayHero } from "@/components/BirthdayHero";
import { TogetherSection } from "@/components/TogetherSection";
import { ClueSection } from "@/components/ClueSection";
import { TrailAnimation } from "@/components/TrailAnimation";
import { DestinationReveal } from "@/components/DestinationReveal";
import { RevealCTA } from "@/components/RevealCTA";
import { GiftReveal } from "@/components/GiftReveal";
import { FinalMessage } from "@/components/FinalMessage";
import { giftContent } from "@/data/giftContent";

export default function Home() {
  const { pause, nature } = giftContent.sections;
  const { images } = giftContent;

  return (
    <>
      <ScrollProgress />

      {/* 1. Portada */}
      <BirthdayHero />

      {/* 2. Hace tiempo venimos pensando en esto */}
      <TogetherSection />

      {/* 3. Primera pista: salir de la rutina */}
      <ClueSection
        id="pause"
        kicker={pause.kicker}
        lines={pause.lines}
        image={images.friends}
        layout="card"
        ariaLabel="Primera pista: salir de la rutina"
      />

      {/* 4. Segunda pista: naturaleza */}
      <ClueSection
        id="nature"
        kicker={nature.kicker}
        lines={nature.lines}
        image={images.nature}
        icons={[
          <Leaf key="leaf" className="h-5 w-5" aria-hidden="true" />,
          <Wind key="wind" className="h-5 w-5" aria-hidden="true" />,
          <Mountain key="mountain" className="h-5 w-5" aria-hidden="true" />,
        ]}
        ariaLabel="Segunda pista: naturaleza"
      />

      {/* 5. Tercera pista: movimiento y trekking */}
      <TrailAnimation />

      {/* 6. Cuarta pista: el destino */}
      <DestinationReveal />

      {/* 7. Antes de la revelación */}
      <RevealCTA />

      {/* 8. Revelación final */}
      <GiftReveal />

      {/* 9. Mensaje final */}
      <FinalMessage />
    </>
  );
}
