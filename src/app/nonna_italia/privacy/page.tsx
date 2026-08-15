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

const CONTACT_EMAIL = "info@luthorlab.com";
const LAST_UPDATED = "13 August 2026";

export default function NonnaItaliaPrivacyPage() {
  return (
    <div className="lab-root lab-root--paper">
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

            <h2>Data retention</h2>
            <p>
              Nonna Italia stores no data on our systems: there are no servers, no accounts and
              no backups, so there is nothing to retain and no retention period to state.
              Anything the app saves on your device stays there for as long as the app is
              installed.
            </p>

            <h2>Data deletion</h2>
            <p>
              We hold no data on our systems, so there is no data deletion request procedure:
              there is nothing we could delete on your behalf. You can remove everything the app
              has saved at any time by uninstalling the app, or by clearing the app&apos;s data from
              your device&apos;s system settings.
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
