import { ScrollProgress } from "@/components/ScrollProgress";
import { BirthdayHero } from "@/components/BirthdayHero";
import { Clue } from "@/components/Clue";
import { Comida } from "@/components/Comida";
import { Familia } from "@/components/Familia";
import { GiftReveal } from "@/components/GiftReveal";
import { TricolorDots } from "@/components/TricolorDots";
import { giftContent } from "@/data/giftContent";

export default function Home() {
  const { intro, vale, vasco } = giftContent.sections;

  return (
    <>
      <ScrollProgress />

      {/* 1. Portada */}
      <BirthdayHero />

      {/* 2. Introducción del regalo */}
      <Clue
        id="intro"
        ariaLabel="Introducción del regalo"
        lines={intro.lines}
        align="center"
        tone="dark"
        mark={<TricolorDots />}
      />

      {/* 3. Comer bien + Nacional */}
      <Comida />

      {/* 4. Vale y la cancha */}
      <Clue
        id="vale"
        ariaLabel="Vale y la cancha"
        lines={vale.lines}
        comment={vale.comment}
        align="left"
        tone="light"
      />

      {/* 5. El "vasco fallido" (guiño breve a Xavi) */}
      <Clue
        id="vasco"
        ariaLabel="El vasco fallido"
        lines={vasco.lines}
        comment={vasco.comment}
        align="right"
        tone="light"
      />

      {/* 6. Un lugar conocido, vivido distinto, en familia */}
      <Familia />

      {/* 7. Revelación final */}
      <GiftReveal />
    </>
  );
}
