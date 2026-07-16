import { ImageResponse } from "next/og";
import { giftContent } from "@/data/giftContent";

export const runtime = "edge";
export const alt = giftContent.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { theme, birthdayName } = giftContent;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${theme.blueDeep} 0%, ${theme.red} 60%, ${theme.gold} 100%)`,
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 34,
            color: theme.goldSoft,
            letterSpacing: 4,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Tenemos algo para vos
        </div>
        <div
          style={{
            fontSize: 104,
            color: theme.white,
            fontWeight: 700,
            marginTop: 20,
            textAlign: "center",
            display: "flex",
          }}
        >
          ¡Feliz cumpleaños, {birthdayName}!
        </div>
        <div
          style={{
            fontSize: 30,
            color: theme.snow,
            marginTop: 30,
            display: "flex",
          }}
        >
          Una pequeña historia con pistas antes de la revelación
        </div>
      </div>
    ),
    { ...size },
  );
}
