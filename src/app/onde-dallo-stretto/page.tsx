import type { Metadata } from "next";

import { LabNav } from "@/components/lab/LabChrome";

import OndeLocaleRedirect from "./OndeLocaleRedirect";

const GATE_TITLE = "Onde dallo Stretto — Choose your language";
const GATE_DESCRIPTION =
  "Choose Italian, English, Japanese, French or German to discover Onde dallo Stretto, the live Italian radio app from LUTHOR Lab.";

export const metadata: Metadata = {
  title: GATE_TITLE,
  description: GATE_DESCRIPTION,
  alternates: {
    canonical: "https://luthorlab.com/onde-dallo-stretto",
  },
  openGraph: {
    title: GATE_TITLE,
    description: GATE_DESCRIPTION,
    url: "https://luthorlab.com/onde-dallo-stretto",
    type: "website",
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
    title: GATE_TITLE,
    description: GATE_DESCRIPTION,
    images: ["https://luthorlab.com/lab/onde-og.jpg"],
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
