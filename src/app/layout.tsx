import type { Metadata, Viewport } from "next";

import { ONDE_DETECT_LOCALE_SCRIPT } from "@/app/onde-dallo-stretto/detect-locale-script";

import "./globals.css";

export const metadata: Metadata = {
  title: "LUTHOR Lab — Sharp tools. Big ideas about risk.",
  description:
    "LUTHOR Lab is the workshop behind LUTHOR — sharp, focused tools that test big ideas about risk, regulation and data. Built in Luxembourg by risk professionals, shipped early, shaped by pilots.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{ __html: ONDE_DETECT_LOCALE_SCRIPT }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
