import type { Metadata } from "next";

import { LabNav } from "@/components/lab/LabChrome";

import OndeLocaleRedirect from "./OndeLocaleRedirect";

export const metadata: Metadata = {
  title: "Onde dallo Stretto — live Italian radio, in your car",
  description:
    "Onde dallo Stretto brings real Italian radio to your dashboard: the music, the voices, the warmth of Italy — live and unfiltered. Turn the dial across a real FM band, stop on a frequency, and listen. A LUTHOR Lab product.",
  alternates: {
    canonical: "https://luthorlab.com/onde-dallo-stretto",
  },
  openGraph: {
    title: "Onde dallo Stretto — live Italian radio, in your car",
    description:
      "Onde dallo Stretto brings real Italian radio to your dashboard: the music, the voices, the warmth of Italy — live and unfiltered. Turn the dial across a real FM band, stop on a frequency, and listen. A LUTHOR Lab product.",
    url: "https://luthorlab.com/onde-dallo-stretto",
    locale: "en_US",
    images: [
      {
        url: "https://luthorlab.com/lab/onde-og.jpg",
        width: 1200,
        height: 630,
        alt: "Onde dallo Stretto app — tuned to 106.8 FM, SEGNALE BLU",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const dynamic = "force-static";

/* Primary redirect: blocking <head> script on full document load (root layout).
   Soft-nav fallback: OndeLocaleRedirect. Prefer plain <a> links to this path. */

export default function OndeDalloStrettoGatePage() {
  return (
    <div className="lab-root lab-root--onde">
      <OndeLocaleRedirect />
      <LabNav />
      <main className="lab-main">
        <div className="lab-wrap">
          <p className="onde-lang-gate">Onde dallo Stretto</p>
          <noscript>
            <p className="onde-lang-gate-links">
              <a href="/onde-dallo-stretto/it">Italiano</a>
              {" · "}
              <a href="/onde-dallo-stretto/en">English</a>
              {" · "}
              <a href="/onde-dallo-stretto/ja">日本語</a>
              {" · "}
              <a href="/onde-dallo-stretto/fr">Français</a>
              {" · "}
              <a href="/onde-dallo-stretto/de">Deutsch</a>
            </p>
          </noscript>
        </div>
      </main>
    </div>
  );
}
