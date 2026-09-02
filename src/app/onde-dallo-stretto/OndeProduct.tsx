import type { ReactNode } from "react";

import {
  AppStoreBadge,
  GooglePlayBadge,
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

import {
  ONDE_APP_STORE_URL,
  ONDE_CARPLAY_SRC,
  ONDE_STRINGS,
  type OndeLocale,
} from "./content";
import OndeLangSwitcher from "./OndeLangSwitcher";

/** Render light **bold** markers from content strings. */
function richText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function CarplayShot({ alt }: { alt: string }) {
  return (
    <div className="onde-carplay">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={ONDE_CARPLAY_SRC} alt={alt} loading="lazy" />
    </div>
  );
}

export default function OndeProduct({ locale }: { locale: OndeLocale }) {
  const t = ONDE_STRINGS[locale];
  const leadParas = Array.isArray(t.lead) ? t.lead : [t.lead];
  const sections = t.sections?.filter(
    (s) => s.title || s.paragraphs.length > 0 || (s.bullets?.length ?? 0) > 0,
  );
  const hasSections = Boolean(sections && sections.length > 0);

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
              {t.subhead ? <p className="onde-subhead">{t.subhead}</p> : null}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="onde-app-icon"
              src="/lab/onde-icon.png"
              alt={t.iconAlt}
            />
          </div>
          <div className="lab-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="onde-skyline"
              src="/lab/onde-skyline.png"
              alt={t.skylineAlt}
              width={1536}
              height={620}
            />
          </div>
        </header>

        <section className="lab-section lab-section--pad-top">
          <div className="lab-wrap">
            {leadParas.map((para) => (
              <p key={para} className="lab-product-lead">
                {richText(para)}
              </p>
            ))}
            {t.features.length > 0 ? (
              <ul className="onde-features">
                {t.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            ) : null}

            {hasSections ? (
              <div className="onde-copy-sections">
                {sections!.map((section) => {
                  const isInAuto =
                    section.title.toLowerCase() === "in auto";
                  return (
                    <section key={section.title} className="onde-copy-section">
                      <h2 className="onde-section-title">{section.title}</h2>
                      {section.paragraphs.map((para) => (
                        <p key={para} className="lab-product-lead">
                          {richText(para)}
                        </p>
                      ))}
                      {section.bullets && section.bullets.length > 0 ? (
                        <ul className="onde-features">
                          {section.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                      {isInAuto ? <CarplayShot alt={t.carplayAlt} /> : null}
                    </section>
                  );
                })}
              </div>
            ) : (
              <CarplayShot alt={t.carplayAlt} />
            )}
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
              <AppStoreBadge
                storeUrl={ONDE_APP_STORE_URL}
                downloadLabel={t.getApple}
              />
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
            <a href={t.privacyHref}>{t.privacyLabel}</a>
          </>
        }
      />
    </div>
  );
}
