import type { Metadata } from "next";

import { LabNav } from "@/components/lab/LabChrome";

import { ONDE_LANG_STORAGE_KEY, ONDE_LOCALES } from "./content";

export const metadata: Metadata = {
  title: "Onde dallo Stretto — live Italian radio, in your car",
  description:
    "Onde dallo Stretto brings real Italian radio to your dashboard: the music, the voices, the warmth of Italy — live and unfiltered. Turn the dial across a real FM band, stop on a frequency, and listen. A LUTHOR Lab product.",
  alternates: {
    canonical: "https://luthorlab.com/onde-dallo-stretto",
  },
};

export const dynamic = "force-static";

/* Static export cannot negotiate Accept-Language on the server. This page
   is a detector: plain JS reads localStorage (manual choice) or the browser
   language, then replaces the URL with /onde-dallo-stretto/{locale}. */

const DETECT_SCRIPT = `(function () {
  var locales = ${JSON.stringify(ONDE_LOCALES)};
  var key = ${JSON.stringify(ONDE_LANG_STORAGE_KEY)};
  var chosen = null;
  try {
    var stored = localStorage.getItem(key);
    if (stored && locales.indexOf(stored) !== -1) chosen = stored;
  } catch (e) {}
  if (!chosen) {
    var nav = (navigator.language || "").toLowerCase();
    if (nav.indexOf("it") === 0) chosen = "it";
    else if (nav.indexOf("ja") === 0) chosen = "ja";
    else if (nav.indexOf("fr") === 0) chosen = "fr";
    else if (nav.indexOf("de") === 0) chosen = "de";
    else chosen = "en";
  }
  location.replace("/onde-dallo-stretto/" + chosen);
})();`;

export default function OndeDalloStrettoGatePage() {
  return (
    <div className="lab-root lab-root--onde">
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
      <script dangerouslySetInnerHTML={{ __html: DETECT_SCRIPT }} />
    </div>
  );
}
