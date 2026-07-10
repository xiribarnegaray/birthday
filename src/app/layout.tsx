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

const { theme, meta, birthdayPerson } = giftContent;

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
  themeColor: theme.forest,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeStyle = {
    "--forest": theme.forest,
    "--forest-deep": theme.forestDeep,
    "--sage": theme.sage,
    "--sage-light": theme.sageLight,
    "--beige": theme.beige,
    "--cream": theme.cream,
    "--brown": theme.brown,
    "--accent": theme.accent,
    "--accent-soft": theme.accentSoft,
  } as React.CSSProperties;

  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
      style={themeStyle}
    >
      <body className="min-h-full flex flex-col bg-cream text-forest">
        <MotionConfig reducedMotion="user">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
          >
            Saltar al contenido
          </a>
          <main id="main-content" aria-label={`Regalo de cumpleaños para ${birthdayPerson}`}>
            {children}
          </main>
        </MotionConfig>
      </body>
    </html>
  );
}
