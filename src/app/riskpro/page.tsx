import Link from "next/link";
import type { Metadata } from "next";

import {
  AppStoreBadge,
  GooglePlayBadge,
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
  RISKPRO_APP_STORE_URL,
  RISKPRO_GOOGLE_PLAY_URL,
} from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "RiskPRO — An independent risk read on US/EU stocks and UCITS ETFs",
  description:
    "RiskPRO gives you three risk dimensions, a clear verdict, and for UCITS funds the PRIIPs risk class computed from live market data — side by side with the fund's own KID. A LUTHOR Lab product.",
  alternates: {
    canonical: "https://luthorlab.com/riskpro",
  },
  openGraph: {
    title: "RiskPRO — An independent risk read on US/EU stocks and UCITS ETFs",
    description:
      "RiskPRO gives you three risk dimensions, a clear verdict, and for UCITS funds the PRIIPs risk class computed from live market data — side by side with the fund's own KID. A LUTHOR Lab product.",
    url: "https://luthorlab.com/riskpro",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://luthorlab.com/lab/riskpro-og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RiskPRO — An independent risk read on US/EU stocks and UCITS ETFs",
    description:
      "RiskPRO gives you three risk dimensions, a clear verdict, and for UCITS funds the PRIIPs risk class computed from live market data — side by side with the fund's own KID. A LUTHOR Lab product.",
    images: ["https://luthorlab.com/lab/riskpro-og.png"],
  },
};

export const dynamic = "force-static";

const SCREENSHOTS = [
  {
    src: "/lab/riskpro-shot-rings.jpg",
    alt: "RiskPRO app — risk rings and overall verdict for a UCITS ETF",
  },
  {
    src: "/lab/riskpro-shot-riskclass.jpg",
    alt: "RiskPRO app — PRIIPs risk class analysis with the fund's KID one tap away",
  },
  {
    src: "/lab/riskpro-shot-report.jpg",
    alt: "RiskPRO app — full report exported as PDF",
  },
];

export default function RiskProPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <header className="lab-hero">
          <div className="lab-wrap">
            <p className="lab-kicker">LUTHOR Lab</p>
            <h1>
              Risk<span className="lab-hero-accent">PRO</span>
            </h1>
            <p className="lab-hero-lede">
              An independent risk read on US/EU stocks and UCITS ETFs.
            </p>
          </div>
        </header>

        <section className="lab-section">
          <div className="lab-wrap">
            <p className="lab-product-lead">
              Three risk dimensions, a clear verdict, and for UCITS funds the
              PRIIPs risk class computed from live market data — shown side by
              side with the fund&apos;s own KID, with the official document one
              tap away. The methodology is one tap away on every ring segment.
              Export the full report as PDF or the price history as CSV.
            </p>

            <div className="lab-shots">
              {SCREENSHOTS.map((shot) => (
                <div key={shot.src} className="lab-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.src} alt={shot.alt} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="lab-store">
              <AppStoreBadge storeUrl={RISKPRO_APP_STORE_URL} />
              <GooglePlayBadge storeUrl={RISKPRO_GOOGLE_PLAY_URL} />
            </div>
          </div>
        </section>
      </main>

      <LabFooter
        note={
          <>
            RiskPRO is a LUTHOR Lab product. Made in Luxembourg by risk
            professionals.{" "}
            <a href={`mailto:${LAB_CONTACT_EMAIL}`}>Support</a>
            {" · "}
            <Link href="/riskpro/privacy">Privacy Policy</Link>
          </>
        }
      />
    </div>
  );
}
