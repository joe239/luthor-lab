import Link from "next/link";

import {
  AppStoreBadge,
  GooglePlayBadge,
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

import { ONDE_STRINGS, type OndeLocale } from "./content";
import OndeLangSwitcher from "./OndeLangSwitcher";

export default function OndeProduct({ locale }: { locale: OndeLocale }) {
  const t = ONDE_STRINGS[locale];

  return (
    <div className="lab-root lab-root--onde" lang={locale}>
      <LabNav />

      <main className="lab-main">
        <div className="lab-wrap">
          <OndeLangSwitcher current={locale} />
        </div>

        <header className="lab-hero">
          <div className="lab-wrap onde-hero-wrap">
            <div className="onde-hero-copy">
              <p className="lab-kicker">{t.kicker}</p>
              <h1>Onde dallo Stretto</h1>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="onde-app-icon"
              src="/lab/onde-icon.png"
              alt={t.iconAlt}
            />
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
            <a href={`mailto:${LAB_CONTACT_EMAIL}`}>{t.supportLabel}</a>
            {" · "}
            <Link href="/onde-dallo-stretto/privacy">{t.privacyLabel}</Link>
          </>
        }
      />
    </div>
  );
}
