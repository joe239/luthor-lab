import Link from "next/link";
import type { Metadata } from "next";

import {
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

const HOME_TITLE = "LUTHOR Lab — Sharp tools. Big ideas about risk.";
const HOME_DESCRIPTION =
  "LUTHOR Lab is the workshop behind LUTHOR — sharp, focused tools that test big ideas about risk, regulation and data. Built in Luxembourg by risk professionals, shipped early, shaped by pilots.";
const HOME_URL = "https://luthorlab.com/";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: HOME_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export const dynamic = "force-static";

export default function LabPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <header className="lab-hero lab-hero--v2">
          <div className="lab-wrap">
            <p className="lab-kicker lab-reveal">LUTHOR Lab</p>
            <h1 className="lab-reveal lab-reveal--d1">
              Independent lab.
              <br />
              <span className="lab-hero-accent">
                Apps, experiments, ideas made real.
              </span>
            </h1>
            <p className="lab-hero-lede lab-mission lab-reveal lab-reveal--d2">
              LUTHOR Lab is a space for building and exploring. Projects can
              start from a practical problem, a curiosity, or simply an idea
              worth testing — from financial and regulatory software to apps,
              digital tools, and small experiments.
            </p>
            <p className="lab-hero-lede lab-mission lab-reveal lab-reveal--d3">
              Everything is developed independently, with a focus on
              simplicity, usefulness, and making things that actually work.
              Some projects become finished products. Others remain
              experiments. The lab is where both can happen.
            </p>
          </div>
        </header>

        <section
          className="lab-section lab-section--cream"
          aria-label="The Lab"
        >
          <div className="lab-wrap">
            <p className="lab-kicker lab-reveal">The Lab</p>
            <h2 className="lab-section-title lab-reveal lab-reveal--d1">
              LUTHOR Lab
            </h2>
            <p className="lab-hero-lede lab-reveal lab-reveal--d2">
              LUTHOR Lab is an independent digital lab creating focused apps and AI-powered tools for real-world problems.
            </p>
            <p className="lab-hero-lede lab-reveal lab-reveal--d3">
              From risk and regulatory technology to everyday consumer apps, each project starts with a simple idea: make something useful, clear and thoughtfully designed.
            </p>
          </div>
        </section>

        <section
          className="lab-section lab-section--pad-top"
          aria-label="Lab products"
        >
          <div className="lab-wrap">
            <p className="lab-kicker lab-reveal">What&apos;s on the bench</p>
            <h2 className="lab-section-title lab-reveal lab-reveal--d1">
              Lab products.
            </h2>
            <div className="lab-cards">
              <article className="lab-card lab-reveal lab-reveal--d1">
                <span className="lab-status lab-status--live">Live</span>
                <h3 className="lab-card-name">LUTHOR</h3>
                <p className="lab-card-sub">Regulatory AI for banks</p>
                <p>
                  Document review grounded in the actual text of CRR, CRD,
                  DORA, BRRD, EBA guidelines and CSSF circulars, with exact
                  citations. Built for the people who have to write those
                  documents and defend them.
                </p>
                <div className="lab-card-actions">
                  <a
                    href="https://luthoradvisory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lab-card-open"
                  >
                    Visit site →
                  </a>
                </div>
              </article>

              <article className="lab-card lab-reveal lab-reveal--d2">
                <span className="lab-status lab-status--live">Live</span>
                <h3 className="lab-card-name">RiskPRO</h3>
                <p className="lab-card-sub">Risk assessment</p>
                <p>
                  An independent risk read on US/EU stocks and UCITS ETFs —
                  three risk dimensions, a clear verdict, PRIIPs risk class
                  from live market data.
                </p>
                <div className="lab-card-actions">
                  <Link href="/riskpro" className="lab-card-open">
                    View product →
                  </Link>
                </div>
              </article>

              <article className="lab-card lab-reveal lab-reveal--d2">
                <span className="lab-status lab-status--soon">Coming soon</span>
                <h3 className="lab-card-name">Onde dallo Stretto</h3>
                <p className="lab-card-sub">The radio from home</p>
                <p>
                  An Italian radio app that works like a real car radio — you
                  turn through the FM dial and pick up the local stations you
                  would receive driving between Sicily and Calabria, with the
                  Strait of Messina at the centre. For Sicilians and Calabrians
                  living away from home.
                </p>
                <div className="lab-card-actions">
                  <a href="/onde-dallo-stretto" className="lab-card-open">
                    View product →
                  </a>
                </div>
              </article>

              <article className="lab-card lab-reveal lab-reveal--d3">
                <span className="lab-status lab-status--live">Live</span>
                <h3 className="lab-card-name">iMeditazione</h3>
                <p className="lab-card-sub">Guided meditation in Italian</p>
                <p>
                  Free, no account, nothing to sign up for. On the App Store.
                </p>
                <div className="lab-card-actions">
                  <a
                    href="https://imeditazione.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lab-card-open"
                  >
                    Visit site →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="join" className="lab-join" aria-label="Join the Lab">
          <div className="lab-wrap lab-join-inner">
            <p className="lab-kicker lab-kicker--join lab-reveal">
              Join the Lab
            </p>
            <h2 className="lab-reveal lab-reveal--d1">
              Try what we ship. Tell us where it&apos;s wrong.
            </h2>
            <p className="lab-join-lede lab-reveal lab-reveal--d2">
              Lab products grow through their pilots. If you work in funds,
              risk or compliance — or you just care about honest tools — try
              what we ship and tell us where it&apos;s wrong.
            </p>
            <div className="lab-hero-cta lab-reveal lab-reveal--d3">
              <a
                href={`mailto:${LAB_CONTACT_EMAIL}?subject=LUTHOR%20Lab%20—%20pilot`}
                className="lab-btn lab-btn--cream"
              >
                Write to the Lab
              </a>
            </div>
            <p className="lab-join-contact lab-reveal lab-reveal--d3">
              Or simply write to us at{" "}
              <a href={`mailto:${LAB_CONTACT_EMAIL}`}>{LAB_CONTACT_EMAIL}</a>
            </p>
          </div>
        </section>
      </main>

      <LabFooter />
    </div>
  );
}
