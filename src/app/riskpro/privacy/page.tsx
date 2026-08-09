import Link from "next/link";
import type { Metadata } from "next";

import {
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "RiskPRO Privacy Policy — LUTHOR Lab",
  description:
    "RiskPRO collects no personal data: no accounts, no analytics, no tracking, no third-party SDKs.",
  alternates: {
    canonical: "https://luthoradvisory.com/lab/riskpro/privacy",
  },
};

export const dynamic = "force-static";

const LAST_UPDATED = "19 July 2026";

export default function RiskProPrivacyPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <div className="lab-wrap">
          <article className="lab-prose">
            <p className="lab-kicker">
              <Link href="/riskpro" style={{ color: "inherit", textDecoration: "none" }}>
                RiskPRO
              </Link>{" "}
              · Privacy Policy
            </p>
            <h1>RiskPRO collects no personal data.</h1>
            <p className="lab-prose-updated">Last updated: {LAST_UPDATED}</p>

            <h2>No accounts, no tracking</h2>
            <p>
              RiskPRO does not collect, store or share any personal data. There
              are no accounts, no analytics, no tracking and no third-party
              SDKs in the app.
            </p>

            <h2>Network requests</h2>
            <p>
              The app makes network requests solely to its own backend to fetch
              market data for the security you are analyzing. These requests
              contain no personal information.
            </p>

            <h2>Fund documents</h2>
            <p>
              Links to fund documents (PRIIPs KIDs) open the issuer&apos;s
              website. Once you leave the app, the issuer&apos;s own privacy
              policy applies.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a href={`mailto:${LAB_CONTACT_EMAIL}`}>{LAB_CONTACT_EMAIL}</a>.
            </p>
          </article>
        </div>
      </main>

      <LabFooter />
    </div>
  );
}
