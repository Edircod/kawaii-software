import type { Metadata } from "next";
import {
  DM_Sans,
  Fraunces,
  JetBrains_Mono,
  Syne
} from "next/font/google";

import { getInitialSettings } from "@/lib/request-context";

import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains-mono"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kawaii-software.com"),
  title: "kawaii(x,y) | Cute software that works.",
  description:
    "A boutique software house blending Japanese craft, Italian aesthetics, and Australian engineering into enterprise-grade software.",
  applicationName: "kawaii(x,y)",
  keywords: [
    "Next.js agency",
    "enterprise software",
    "software house",
    "design systems",
    "cloud architecture",
    "AI integration"
  ],
  openGraph: {
    title: "kawaii(x,y)",
    description: "Cute software that works.",
    url: "https://kawaii-software.com",
    siteName: "kawaii(x,y)",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "kawaii(x,y)"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "kawaii(x,y)",
    description: "Cute software that works.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, theme } = getInitialSettings();

  return (
    <html
      lang={locale}
      className={`${theme === "light" ? "light-theme" : "dark-theme"} ${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
