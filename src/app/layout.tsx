import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { giftContent } from "@/data/giftContent";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const { theme, meta, birthdayName } = giftContent;

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "es_UY",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: theme.red,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeStyle = {
    "--white": theme.white,
    "--snow": theme.snow,
    "--paper": theme.paper,
    "--red": theme.red,
    "--red-deep": theme.redDeep,
    "--blue": theme.blue,
    "--blue-deep": theme.blueDeep,
    "--ink": theme.ink,
    "--gold": theme.gold,
    "--gold-soft": theme.goldSoft,
  } as React.CSSProperties;

  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
      style={themeStyle}
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-blue-deep focus:px-4 focus:py-2 focus:text-white"
          >
            Saltar al contenido
          </a>
          <main
            id="main-content"
            aria-label={`Regalo de cumpleaños para ${birthdayName}`}
            className="story-gradient"
          >
            {children}
          </main>
        </MotionConfig>
      </body>
    </html>
  );
}
