import type { Metadata } from "next";

import { LabFooter, LabNav } from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Onde dallo Stretto — Privacy & Terms of Use",
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
              <a
                href="/onde-dallo-stretto"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Onde dallo Stretto
              </a>{" "}
              · Privacy &amp; Terms of Use
            </p>
            <h1>Privacy &amp; Terms of Use</h1>

            <h2>Privacy</h2>
            <p>
              Onde dallo Stretto does not collect, store, or transmit any
              personal data. The app has no account, no registration, no
              analytics, no tracking, and no advertising.
            </p>
            <p>
              Your presets and your last played station are stored only on
              your device and never leave it.
            </p>
            <p>
              While you listen, your device connects directly to the streaming
              servers of the radio stations. As with any direct connection,
              those servers can see your IP address, exactly as if you
              listened through a web browser. The stations&apos; own privacy
              policies apply to those connections; we have no access to, and
              no control over, any data they may process.
            </p>
            <p>
              At launch, the app downloads its station list from a static
              file. The file contains no personal data and no identifiers,
              but the request reaches the hosting provider, which may record
              the IP address in its technical logs, as with any web request.
            </p>

            <h2>Terms of Use</h2>
            <p>
              Onde dallo Stretto is a directory. It links to the publicly
              accessible streams published by the broadcasters of the radio
              stations it lists. The app does not host, store, re-broadcast,
              or modify any audio content.
            </p>
            <p>
              All content, station names, and trademarks belong to their
              respective broadcasters. Streams are passed through unaltered,
              including the stations&apos; own advertising.
            </p>
            <p>
              The app is free, carries no advertising, and is operated on a
              non-profit basis.
            </p>
            <p>
              If you represent a broadcaster and wish your station to be
              removed from the list, contact us at{" "}
              <a href="mailto:info@luthorlab.com">info@luthorlab.com</a>:
              removal will be carried out promptly.
            </p>
            <p>
              Stream availability depends entirely on the broadcasters&apos;
              servers. No guarantee is given that any station will be
              available at any given time.
            </p>

            <p className="lab-prose-updated">Last updated: {LAST_UPDATED}</p>
          </article>
        </div>
      </main>

      <LabFooter />
    </div>
  );
}
