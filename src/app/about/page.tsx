import type { Metadata } from "next";

import {
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Giovanni Cusmano — LUTHOR Lab",
  description:
    "Market risk and IRRBB in Luxembourg banking. FRM, MSc Bocconi. Luxembourg City.",
  alternates: {
    canonical: "https://luthorlab.com/about",
  },
};

export const dynamic = "force-static";

const EXPERIENCE = [
  {
    role: "Risk Management — Agricultural Bank of China, Luxembourg Branch",
    dates: "June 2021 – present",
    body: null,
  },
  {
    role: "Risk Management — Nomura Bank (Luxembourg) S.A.",
    dates: "June 2011 – May 2021",
    body: "Risk controls under CRR/CRD IV and Basel III. ICAAP. Point of contact for IT projects: gathering business requirements and turning them into use cases.",
  },
  {
    role: "Treasury Controller — Nomura Bank (Luxembourg) S.A.",
    dates: "November 2010 – May 2011",
    body: "Large exposure and solvency ratio monitoring, hedging ratios, currency position risk.",
  },
  {
    role: "Financial Controller — UniCredit Luxembourg S.A.",
    dates: "January – November 2010",
    body: "Performance measurement and reporting for Private Banking.",
  },
];

export default function AboutPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <div className="lab-wrap">
          <article className="lab-prose">
            <p className="lab-kicker">LUTHOR Lab · About</p>
            <h1>Giovanni Cusmano</h1>
            <p>
              Market risk and IRRBB in Luxembourg banking. FRM, MSc Bocconi.
              Luxembourg City.
            </p>
            <p>
              Fifteen years in risk management, the last five as the sole risk
              officer of a Class 1 third-country branch under CRD6 — which
              means the whole perimeter sits on one desk: IRRBB, liquidity
              stress testing, ICAAP and ILAAP, the Recovery Plan, model design
              and validation, and the governance around all of it.
            </p>
            <p>
              For the past year I have also been building the software I
              wished existed for that work.
            </p>

            <h2>Now</h2>
            <p>
              Risk Management — Agricultural Bank of China, Luxembourg Branch.
              June 2021 to present. Leading ICLAAP and Recovery Plan. Building
              and validating risk models against regulatory and Group
              requirements. Market and liquidity risk monitoring and
              reporting.
            </p>

            <h2>What I build</h2>
            <p>
              I write the code myself, working with AI coding agents as the
              implementation layer while I keep the architecture, the domain
              judgement and the testing.
            </p>
            <p>
              LUTHOR is the main one: a regulatory AI workspace that reviews
              bank documents against the actual text of the regulation. Under
              it sits a corpus of more than 3,700 legal provisions — CRR, CRD,
              DORA, BRRD, LCR, EBA guidelines and RTS, CSSF circulars — parsed
              to article level, with hybrid retrieval (vector plus lexical)
              and an AI reranking layer. Every answer is anchored to a
              citation, and when there is no source in the corpus the system
              stops instead of inventing one. Retrieval quality is measured on
              fixed test batteries, not on impressions.
            </p>
            <p>
              The rest of the Lab is smaller and more personal: an iOS risk
              assessment tool, a radio app, a meditation app. Different
              domains, same method — ship it, use it, fix what annoys me.
            </p>

            <h2>Experience</h2>
            {EXPERIENCE.map((entry) => (
              <div key={entry.dates} className="lab-xp">
                <p className="lab-xp-role">{entry.role}</p>
                <p className="lab-xp-dates">{entry.dates}</p>
                {entry.body ? <p>{entry.body}</p> : null}
              </div>
            ))}
            <p>
              Earlier: junior auditor at Ernst &amp; Young (banks and
              insurers), and an internship in accounting at Robert Bosch
              S.p.A. in Milan.
            </p>

            <h2>Education</h2>
            <p>Financial Risk Manager (FRM®) — GARP, 2014</p>
            <p>
              MSc Accounting, Corporate Finance and Control — Università
              Bocconi, 2008
            </p>
            <p>BSc Business Administration — Università Bocconi, 2005</p>

            <h2>Tools</h2>
            <p>
              Risk: IRRBB and NII modelling, liquidity stress testing,
              ICAAP/ILAAP, regulatory reporting.
            </p>
            <p>
              Code: Python, SQL, VBA. Next.js and React, Supabase and Postgres
              with pgvector, Swift and SwiftUI. Claude API, vector embeddings,
              retrieval evaluation.
            </p>

            <h2>Contact</h2>
            <p>
              <a href={`mailto:${LAB_CONTACT_EMAIL}`}>{LAB_CONTACT_EMAIL}</a>
            </p>
          </article>
        </div>
      </main>

      <LabFooter />
    </div>
  );
}
