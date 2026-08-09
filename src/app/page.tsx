import Link from "next/link";
import type { Metadata } from "next";

import {
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "LUTHOR Lab — Sharp tools. Big ideas about risk.",
  description:
    "LUTHOR Lab is the workshop behind LUTHOR — sharp, focused tools that test big ideas about risk, regulation and data. Built in Luxembourg by risk professionals, shipped early, shaped by pilots.",
  alternates: {
    canonical: "https://luthoradvisory.com/lab",
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
              Sharp tools.
              <br />
              <span className="lab-hero-accent">
                Each one built because I needed it.
              </span>
            </h1>
            <p className="lab-hero-lede lab-mission lab-reveal lab-reveal--d2">
              LUTHOR Lab is where I build. Some of it is regulatory software
              for banks. Some of it is an app that plays the radio from the
              city I come from. What they have in common is the starting
              point: a problem I had, and nothing that solved it properly.
            </p>
            <p className="lab-hero-lede lab-mission lab-reveal lab-reveal--d3">
              I build alone, and I release when something works. If you use
              one of these and something annoys you, tell me — that is the
              whole feedback loop.
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
              LUTHOR Lab is a one-person software laboratory: useful
              applications built with AI, shipped and used in the real world.
            </p>
            <p className="lab-hero-lede lab-reveal lab-reveal--d3">
              The method: the founder keeps the architecture, the domain
              judgement and the testing; AI coding agents are the
              implementation layer. Ship it, use it daily, fix what annoys.
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
                <span className="lab-status lab-status--live">
                  Live on the App Store
                </span>
                <h3 className="lab-card-name">RiskPRO</h3>
                <p className="lab-card-sub">Risk assessment on iOS</p>
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
                  turn through the FM dial and pick up the stations you would
                  receive driving around Messina. For people from Messina
                  living away from home.
                </p>
                <div className="lab-card-actions">
                  <Link href="/onde-dallo-stretto" className="lab-card-open">
                    View product →
                  </Link>
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

        <section
          id="behind-the-lab"
          className="lab-section lab-section--cream"
          aria-label="Behind the Lab"
        >
          <div className="lab-wrap">
            <p className="lab-kicker lab-reveal">Behind the Lab</p>
            <h2 className="lab-section-title lab-reveal lab-reveal--d1">
              Giovanni Cusmano
            </h2>
            <p className="lab-hero-lede lab-reveal lab-reveal--d2">
              Giovanni Cusmano — market risk and IRRBB in Luxembourg banking.
              FRM, MSc Bocconi. Luxembourg City. Fifteen years in risk
              management, the last five as the sole risk officer of a Class 1
              third-country branch under CRD6 — which means the whole
              perimeter sits on one desk: IRRBB, liquidity stress testing,
              ICAAP and ILAAP, the Recovery Plan, model design and
              validation, and the governance around all of it.
            </p>
            <p className="lab-hero-lede lab-reveal lab-reveal--d3">
              Risk Management — Agricultural Bank of China, Luxembourg Branch.
              June 2021 to present. Leading ICLAAP and Recovery Plan. Building
              and validating risk models against regulatory and Group
              requirements. Market and liquidity risk monitoring and
              reporting.
            </p>
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
