import {
  AppStoreBadge,
  GooglePlayBadge,
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

import {
  NONNA_APP_STORE_URL,
  NONNA_GOOGLE_PLAY_URL,
  NONNA_LOCALE_HREFS,
  NONNA_STRINGS,
  type NonnaLocale,
} from "./content";

const SCREENSHOT_SRCS = [
  "/lab/nonna-shot-home.jpg",
  "/lab/nonna-shot-info.jpg",
  "/lab/nonna-shot-android.jpg",
] as const;

/* Plain <a> for cross-locale links: each language variant is its own static
   document, a full load keeps the exported HTML (and its lang) authoritative. */
export default function NonnaProduct({ locale }: { locale: NonnaLocale }) {
  const t = NONNA_STRINGS[locale];
  const other: NonnaLocale = locale === "en" ? "it" : "en";

  return (
    <div className="lab-root lab-root--nonna">
      <LabNav />

      <main className="lab-main">
        <div className="lab-wrap">
          <nav className="nonna-lang" aria-label="Language">
            <span aria-current="page">{t.switcherLabel}</span>
            <a href={NONNA_LOCALE_HREFS[other]}>
              {NONNA_STRINGS[other].switcherLabel}
            </a>
          </nav>
        </div>

        <header className="lab-hero">
          <div className="lab-wrap">
            <p className="lab-kicker">LUTHOR Lab</p>
            <h1>
              Nonna <span className="lab-hero-accent">Italia</span>
            </h1>
            <p className="lab-hero-lede">{t.lede}</p>
          </div>
        </header>

        <section className="lab-section">
          <div className="lab-wrap">
            <p className="lab-product-lead">{t.lead}</p>

            {/* The home-screen composition: sky, icon tile, ground. */}
            <div className="nonna-showcase">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="nonna-icon-tile"
                src="/lab/nonna-icon.png"
                alt={t.iconAlt}
                width={128}
                height={128}
              />
            </div>

            {/* Info-screen style: white cards on the pale azure paper. */}
            <div className="nonna-info-band">
              {t.cards.map((card) => (
                <div key={card.title} className="nonna-card">
                  <strong>{card.title}</strong>
                  {card.body}
                </div>
              ))}
            </div>

            <div className="lab-shots">
              {SCREENSHOT_SRCS.map((src, i) => (
                <div key={src} className="lab-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={t.shotAlts[i]} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="lab-store">
              <AppStoreBadge storeUrl={NONNA_APP_STORE_URL} />
              <GooglePlayBadge storeUrl={NONNA_GOOGLE_PLAY_URL} />
            </div>
          </div>
        </section>
      </main>

      <LabFooter
        note={
          <>
            {t.footerNote}{" "}
            <a href={`mailto:${LAB_CONTACT_EMAIL}`}>{t.supportLabel}</a>
            {" · "}
            <a href={t.privacyHref}>{t.privacyLabel}</a>
          </>
        }
      />
    </div>
  );
}
