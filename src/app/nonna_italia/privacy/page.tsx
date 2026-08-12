import Link from "next/link";
import type { Metadata } from "next";

import { LabFooter, LabNav } from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Nonna Italia — Privacy Policy",
  description:
    "Nonna Italia collects no personal data: no accounts, no analytics, no tracking, no third-party SDKs, no ads. Fully offline — the app requests no permissions.",
  alternates: {
    canonical: "https://luthorlab.com/nonna_italia/privacy",
  },
};

export const dynamic = "force-static";

const CONTACT_EMAIL = "cusmanodev@gmail.com";
const LAST_UPDATED = "21 July 2026";

export default function NonnaItaliaPrivacyPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <div className="lab-wrap">
          <article className="lab-prose">
            <p className="lab-kicker">
              <Link
                href="/nonna_italia"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Nonna Italia
              </Link>{" "}
              · Privacy Policy
            </p>
            <h1>Nonna Italia collects no personal data.</h1>
            <p className="lab-prose-updated">Last updated: {LAST_UPDATED}</p>

            <h2>No accounts, no tracking</h2>
            <p>
              Nonna Italia does not collect, store or share any personal data.
              There are no accounts, no analytics, no tracking, no third-party
              SDKs and no ads in the app.
            </p>

            <h2>Fully offline</h2>
            <p>
              The app makes no network requests. All audio content is bundled
              in the app; nothing leaves your device.
            </p>

            <h2>No permissions</h2>
            <p>The app requests no device permissions.</p>

            <h2>Sharing</h2>
            <p>
              When you share a clip, the app opens your device&apos;s system
              share sheet. The app itself doesn&apos;t transmit or store
              anything.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </article>
        </div>
      </main>

      <LabFooter />
    </div>
  );
}
