"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  AppStoreBadge,
  GooglePlayBadge,
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

/* The site is a static export, so there is no server-side locale
   negotiation: the page renders in English and switches to Italian on the
   client when the visitor's device language is Italian. `?lang=it` /
   `?lang=en` overrides the detection. */

const STRINGS = {
  en: {
    kicker: "LUTHOR Lab · Product",
    lede: "An Italian radio app that works like a real car radio.",
    lead: "You turn through the FM dial, stop on a frequency, and listen. The stations you pick up are the ones you would receive driving around Messina — the same frequencies, the same voices. Made for people from Messina living away from home.",
    shotsLabel: "App screenshots",
    storeLabel: "Get the app",
    soonApple: "Coming soon to the",
    soonGoogle: "Coming soon on",
    storeHint: "not in the stores yet — coming soon",
    noteBefore: "Onde dallo Stretto is a LUTHOR Lab product. Support:",
    privacyLabel: "Privacy Policy",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Onde dallo Stretto app — tuned to 94.9 FM, Radio Empire",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Onde dallo Stretto app — turning the dial to 91.1 FM, Radio 24",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Onde dallo Stretto app — the list of stations on air right now",
      },
    ],
  },
  it: {
    kicker: "LUTHOR Lab · Prodotto",
    lede: "Una radio italiana che funziona come una vera autoradio.",
    lead: "Giri la manopola sulla banda FM, ti fermi su una frequenza e ascolti. Le stazioni che prendi sono quelle che riceveresti guidando per Messina — le stesse frequenze, le stesse voci. Pensata per i messinesi che vivono lontano da casa.",
    shotsLabel: "Schermate dell'app",
    storeLabel: "Scarica l'app",
    soonApple: "In arrivo su",
    soonGoogle: "In arrivo su",
    storeHint: "non è ancora negli store — in arrivo",
    noteBefore: "Onde dallo Stretto è un prodotto LUTHOR Lab. Supporto:",
    privacyLabel: "Informativa privacy",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "L'app Onde dallo Stretto — sintonizzata su 94.9 FM, Radio Empire",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "L'app Onde dallo Stretto — la manopola su 91.1 FM, Radio 24",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "L'app Onde dallo Stretto — l'elenco delle stazioni in onda adesso",
      },
    ],
  },
} as const;

type Locale = keyof typeof STRINGS;

export default function OndeContent() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const override = new URLSearchParams(window.location.search).get("lang");
    const lang = (override || navigator.language || "").toLowerCase();
    if (lang.startsWith("it")) {
      setLocale("it");
    } else if (override) {
      setLocale("en");
    }
  }, []);

  const t = STRINGS[locale];

  return (
    <div className="lab-root lab-root--onde" lang={locale}>
      <LabNav />

      <main className="lab-main">
        <header className="lab-hero">
          <div className="lab-wrap">
            <p className="lab-kicker">{t.kicker}</p>
            <h1>
              Onde <span className="lab-hero-accent">dallo Stretto</span>
            </h1>
            <p className="lab-hero-lede">{t.lede}</p>
            <div className="onde-dial" aria-hidden="true">
              <div className="onde-dial-scale">
                <span className="onde-dial-needle" />
              </div>
              <div className="onde-dial-numbers">
                <span>87</span>
                <span>92</span>
                <span>96</span>
                <span>100</span>
                <span>104</span>
                <span>108</span>
              </div>
            </div>
          </div>
        </header>

        <section className="lab-section lab-section--pad-top">
          <div className="lab-wrap">
            <p className="lab-product-lead">{t.lead}</p>
          </div>
        </section>

        <section
          className="lab-section lab-section--onde"
          aria-label={t.shotsLabel}
        >
          <div className="lab-wrap">
            <div className="lab-shots">
              {t.shots.map((shot) => (
                <div key={shot.src} className="lab-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.src} alt={shot.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lab-section" aria-label={t.storeLabel}>
          <div className="lab-wrap">
            <p className="onde-store-hint">{t.storeHint}</p>
            <div className="lab-store">
              <AppStoreBadge soonLabel={t.soonApple} />
              <GooglePlayBadge soonLabel={t.soonGoogle} />
            </div>
          </div>
        </section>
      </main>

      <LabFooter
        note={
          <>
            {t.noteBefore}{" "}
            <a href={`mailto:${LAB_CONTACT_EMAIL}`}>{LAB_CONTACT_EMAIL}</a> ·{" "}
            <Link href="/onde-dallo-stretto/privacy">{t.privacyLabel}</Link>
          </>
        }
      />
    </div>
  );
}
