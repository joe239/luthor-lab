import Link from "next/link";
import type { Metadata } from "next";

import {
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
  RISKPRO_APP_STORE_URL,
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

const PRINCIPLES = [
  {
    num: "01",
    title: "Sharp and focused",
    body: "Real tools, not demos.",
  },
  {
    num: "02",
    title: "Practitioners first",
    body: "Built by people who do this for a living.",
  },
  {
    num: "03",
    title: "Pilots, not users",
    body: "Your feedback is part of the product.",
  },
];

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
              <span className="lab-hero-accent">Big ideas about risk.</span>
            </h1>
            <p className="lab-hero-lede lab-mission lab-reveal lab-reveal--d2">
              LUTHOR Lab is the workshop behind LUTHOR — where we build sharp,
              focused tools that test big ideas about risk, regulation and
              data. Built in Luxembourg by risk professionals, shipped early,
              and shaped by the people who use them. Every Lab product is an
              open experiment: you try it, you tell us where it&apos;s wrong,
              and it gets better. That&apos;s the deal.
            </p>
            <div className="lab-hero-cta lab-reveal lab-reveal--d3">
              <a href="#join" className="lab-btn lab-btn--green">
                Become a pilot
              </a>
            </div>
          </div>
        </header>

        <section
          className="lab-section lab-section--cream"
          aria-label="Lab principles"
        >
          <div className="lab-wrap">
            <div className="lab-principles">
              {PRINCIPLES.map((principle, index) => (
                <article
                  key={principle.num}
                  className={`lab-principle lab-reveal lab-reveal--d${index + 1}`}
                >
                  <p className="lab-principle-num">{principle.num}</p>
                  <h2>{principle.title}</h2>
                  <p className="lab-principle-body">{principle.body}</p>
                </article>
              ))}
            </div>
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
                <span className="lab-status lab-status--live">
                  Live on the App Store
                </span>
                <h3 className="lab-card-name">RiskPRO</h3>
                <p>
                  An independent risk read on US/EU stocks and UCITS ETFs —
                  three risk dimensions, a clear verdict, PRIIPs risk class
                  from live market data.
                </p>
                <div className="lab-card-actions">
                  <Link href="/riskpro" className="lab-card-open">
                    View product →
                  </Link>
                  <a
                    href={RISKPRO_APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lab-card-alt"
                  >
                    Get it on the App Store
                  </a>
                  <a
                    href={`mailto:${LAB_CONTACT_EMAIL}?subject=RiskPRO%20pilot`}
                    className="lab-card-alt"
                  >
                    Become a TestFlight pilot
                  </a>
                </div>
              </article>

              <article className="lab-card lab-reveal lab-reveal--d2">
                <span className="lab-status lab-status--dev">
                  In development
                </span>
                <h3 className="lab-card-name">AnaCredit Doctor</h3>
                <p>
                  Diagnose AnaCredit submissions before the BCL does —
                  validation rules, plausibility checks and a plain-language
                  explanation of every error code.
                </p>
                <div className="lab-card-actions">
                  <a
                    href={`mailto:${LAB_CONTACT_EMAIL}?subject=AnaCredit%20Doctor`}
                    className="lab-card-alt"
                  >
                    Ask about it
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
