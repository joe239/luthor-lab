import Link from "next/link";
import type { Metadata } from "next";

import {
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Onde dallo Stretto Privacy — LUTHOR Lab",
  description:
    "Onde dallo Stretto collects no personal data. There is no account, no sign-up, no analytics, no advertising, and no third-party tracking of any kind.",
  alternates: {
    canonical: "https://luthorlab.com/onde-dallo-stretto/privacy",
  },
};

export const dynamic = "force-static";

const LAST_UPDATED = "9 August 2026";

export default function OndeDalloStrettoPrivacyPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <div className="lab-wrap">
          <article className="lab-prose">
            <p className="lab-kicker">
              <Link
                href="/onde-dallo-stretto"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Onde dallo Stretto
              </Link>{" "}
              · Privacy Policy
            </p>
            <h1>Privacy</h1>
            <p className="lab-prose-updated">Last updated {LAST_UPDATED}</p>

            <p>
              Onde dallo Stretto collects no personal data. There is no
              account, no sign-up, no analytics, no advertising, and no
              third-party tracking of any kind.
            </p>

            <h2>What stays on your device</h2>
            <p>
              Your presets and the last station you were listening to are
              stored on your device only. Nothing is uploaded and nothing is
              shared.
            </p>

            <h2>What the app downloads</h2>
            <p>
              The app downloads a public list of stations — names, FM
              frequencies, and stream addresses. That request carries no
              account, no device identifier, and nothing that identifies you.
            </p>

            <h2>Connections to radio stations</h2>
            <p>
              When you listen, your device connects directly to the
              broadcaster&apos;s streaming server, the same way a web browser
              would. Like any web server, that server can see your IP address
              and may keep its own logs. The same is true when the app reads
              the current track title from a station. These servers belong to
              the broadcasters: we do not control them and we have no access
              to what they log.
            </p>

            <h2>Diagnostics</h2>
            <p>
              The app writes technical playback messages to the system log on
              your device. They stay on your device and are never sent to us.
            </p>

            <h2>Children</h2>
            <p>
              The app is not directed to children, and it collects no data
              from anyone.
            </p>

            <h2>Changes</h2>
            <p>
              If this policy changes, the updated version will be published on
              this page with a new date.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy: write to us at{" "}
              <a href={`mailto:${LAB_CONTACT_EMAIL}`}>{LAB_CONTACT_EMAIL}</a>.
            </p>
          </article>
        </div>
      </main>

      <LabFooter />
    </div>
  );
}
