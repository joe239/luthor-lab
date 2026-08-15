import Link from "next/link";
import type { Metadata } from "next";

import {
  AppStoreBadge,
  GooglePlayBadge,
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Nonna Italia — Italian grandmother expressions in Sicilian dialect",
  description:
    "Nonna Italia is a soundboard of Italian grandmother expressions — 100 audio clips recorded in Sicilian dialect, with subtitles in Italian, English and Sicilian. Share any clip. A LUTHOR Lab product.",
  alternates: {
    canonical: "https://luthorlab.com/nonna_italia",
  },
};

export const dynamic = "force-static";

const NONNA_ITALIA_APP_STORE_URL =
  "https://apps.apple.com/app/id1473345646";
const NONNA_ITALIA_GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.cusmanodev.nonnaitalia";

const SCREENSHOTS = [
  {
    src: "/lab/nonna-shot-home.jpg",
    alt: "Nonna Italia app — home screen with the grandmother artwork on the sky-blue background",
  },
  {
    src: "/lab/nonna-shot-info.jpg",
    alt: "Nonna Italia app — Info screen with white cards on the pale azure background",
  },
  {
    src: "/lab/nonna-shot-android.jpg",
    alt: "Nonna Italia app on Android — home screen with the ground continuing behind the navigation bar",
  },
];

export default function NonnaItaliaPage() {
  return (
    <div className="lab-root lab-root--nonna">
      <LabNav />

      <main className="lab-main">
        <header className="lab-hero">
          <div className="lab-wrap">
            <p className="lab-kicker">LUTHOR Lab</p>
            <h1>
              Nonna <span className="lab-hero-accent">Italia</span>
            </h1>
            <p className="lab-hero-lede">
              A soundboard of Italian grandmother expressions.
            </p>
          </div>
        </header>

        <section className="lab-section">
          <div className="lab-wrap">
            <p className="lab-product-lead">
              One hundred audio clips recorded in Sicilian dialect — the phrases
              Italian grandmothers actually say. Each clip has subtitles in
              Italian, English and Sicilian. Share any clip from the app.
            </p>

            {/* The home-screen composition: sky, icon tile, ground. */}
            <div className="nonna-showcase">
              <img
                className="nonna-icon-tile"
                src="/lab/nonna-icon.png"
                alt="Nonna Italia app icon — the grandmother on a sky-blue background"
                width={128}
                height={128}
              />
            </div>

            {/* Info-screen style: white cards on the pale azure paper. */}
            <div className="nonna-info-band">
              <div className="nonna-card">
                <strong>100 clips</strong>
                Recorded in Sicilian dialect — the phrases grandmothers
                actually say.
              </div>
              <div className="nonna-card">
                <strong>Subtitles ×3</strong>
                Italian, English and Sicilian, one flag tap away.
              </div>
              <div className="nonna-card">
                <strong>Sharing</strong>
                Send any clip from the app&apos;s share button.
              </div>
            </div>

            <div className="lab-shots">
              {SCREENSHOTS.map((shot) => (
                <div key={shot.src} className="lab-shot">
                  <img src={shot.src} alt={shot.alt} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="lab-store">
              <AppStoreBadge storeUrl={NONNA_ITALIA_APP_STORE_URL} />
              <GooglePlayBadge storeUrl={NONNA_ITALIA_GOOGLE_PLAY_URL} />
            </div>
          </div>
        </section>
      </main>

      <LabFooter
        note={
          <>
            Nonna Italia is a LUTHOR Lab product.{" "}
            <a href={`mailto:${LAB_CONTACT_EMAIL}`}>Support</a>
            {" · "}
            <Link href="/nonna_italia/privacy">Privacy Policy</Link>
            {" · "}
            <a href="/nonna_italia/it/privacy">Informativa sulla privacy</a>
          </>
        }
      />
    </div>
  );
}
