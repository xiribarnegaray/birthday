import { ImageResponse } from "next/og";
import { giftContent } from "@/data/giftContent";

export const runtime = "edge";
export const alt = giftContent.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { theme, birthdayPerson } = giftContent;

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
          background: `linear-gradient(135deg, ${theme.forestDeep} 0%, ${theme.forest} 55%, ${theme.sage} 100%)`,
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 34,
            color: theme.accentSoft,
            letterSpacing: 4,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Tenemos un regalo para
        </div>
        <div
          style={{
            fontSize: 116,
            color: theme.cream,
            fontWeight: 700,
            marginTop: 20,
            display: "flex",
          }}
        >
          {birthdayPerson}
        </div>
        <div
          style={{
            fontSize: 30,
            color: theme.beige,
            marginTop: 30,
            display: "flex",
          }}
        >
          Una pequeña historia con pistas antes de la revelación 🌄
        </div>
      </div>
    ),
    { ...size },
  );
}
