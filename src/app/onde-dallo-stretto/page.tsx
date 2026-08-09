import type { Metadata } from "next";

import {
  AppStoreBadge,
  GooglePlayBadge,
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Onde dallo Stretto — Messina's FM dial, wherever you live",
  description:
    "Onde dallo Stretto is an Italian radio app that works like a real car radio: you turn through the FM dial, and the stations you pick up are the ones you would receive driving around Messina. A LUTHOR Lab product.",
  alternates: {
    canonical: "https://luthorlab.com/onde-dallo-stretto",
  },
};

export const dynamic = "force-static";

const SCREENSHOTS = [
  {
    file: "onde-shot-dial.jpg",
    label: "The FM dial",
  },
  {
    file: "onde-shot-onair.jpg",
    label: "On air now",
  },
  {
    file: "onde-shot-presets.jpg",
    label: "Station presets",
  },
];

export default function OndeDalloStrettoPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <header className="lab-hero lab-hero--onde">
          <div className="lab-wrap">
            <p className="lab-kicker">LUTHOR Lab · Product</p>
            <h1>
              Onde <span className="lab-hero-accent">dallo Stretto</span>
            </h1>
            <p className="lab-hero-lede">
              An Italian radio app that works like a real car radio.
            </p>
          </div>
        </header>

        <section className="lab-section lab-section--pad-top">
          <div className="lab-wrap">
            <p className="lab-product-lead">
              You turn through the FM dial, stop on a frequency, and listen.
              The stations you pick up are the ones you would receive driving
              around Messina — the same frequencies, the same voices. Made for
              people from Messina living away from home.
            </p>
          </div>
        </section>

        <section
          className="lab-section lab-section--onde"
          aria-label="App screenshots"
        >
          <div className="lab-wrap">
            <div className="lab-shots">
              {SCREENSHOTS.map((shot) => (
                <div key={shot.file} className="lab-shot">
                  <span className="lab-shot-placeholder">
                    {shot.label}
                    <br />
                    screenshot coming
                    <br />
                    {shot.file}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lab-section" aria-label="Get the app">
          <div className="lab-wrap">
            <div className="lab-store">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
        </section>
      </main>

      <LabFooter
        note={
          <>
            Onde dallo Stretto is a LUTHOR Lab product. Support:{" "}
            <a href={`mailto:${LAB_CONTACT_EMAIL}`}>{LAB_CONTACT_EMAIL}</a>
          </>
        }
      />
    </div>
  );
}
