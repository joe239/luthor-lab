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
    canonical: "https://luthorlab.com/lab/nonna_italia",
  },
};

export const dynamic = "force-static";

const NONNA_ITALIA_APP_STORE_URL =
  "https://apps.apple.com/app/id1473345646";
const NONNA_ITALIA_GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.cusmanodev.nonnaitalia";

export default function NonnaItaliaPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <header className="lab-hero">
          <div className="lab-wrap">
            <p className="lab-kicker">LUTHOR Lab</p>
            <h1>Nonna Italia</h1>
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
            <Link href="/lab/nonna_italia/privacy">Privacy Policy</Link>
          </>
        }
      />
    </div>
  );
}
