import type { Metadata } from "next";
import Link from "next/link";

import {
  LabFooter,
  LabNav,
  LAB_CONTACT_EMAIL,
} from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "About — LUTHOR Lab",
  description:
    "LUTHOR Lab is a one-person software laboratory: useful applications built with AI, shipped and used in the real world.",
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
            <h1>LUTHOR Lab</h1>
            <p>
              LUTHOR Lab is a one-person software laboratory: useful
              applications built with AI, shipped and used in the real world.
            </p>
            <p>
              The method: the founder keeps the architecture, the domain
              judgement and the testing; AI coding agents are the
              implementation layer. Ship it, use it daily, fix what annoys.
            </p>
            <p>
              What comes out of it:{" "}
              <a
                href="https://luthoradvisory.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LUTHOR
              </a>
              , a regulatory AI workspace that reviews bank documents against
              the actual text of the regulation, with a corpus of 3,700+ legal
              provisions parsed to article level and every answer anchored to a
              citation; and the Lab apps — a{" "}
              <Link href="/riskpro">risk assessment tool</Link>, a{" "}
              <Link href="/onde-dallo-stretto">radio app</Link>, a{" "}
              <a
                href="https://imeditazione.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                meditation app
              </a>
              . Different domains, same method.
            </p>

            <h2>The founder</h2>
            <p>
              Giovanni Cusmano — market risk and IRRBB in Luxembourg banking.
              FRM, MSc Bocconi. Luxembourg City.
            </p>
            <p>
              Fifteen years in risk management, the last five as the sole risk
              officer of a Class 1 third-country branch under CRD6 — which
              means the whole perimeter sits on one desk: IRRBB, liquidity
              stress testing, ICAAP and ILAAP, the Recovery Plan, model design
              and validation, and the governance around all of it.
            </p>

            <h2>Now</h2>
            <p>
              Risk Management — Agricultural Bank of China, Luxembourg Branch.
              June 2021 to present. Leading ICLAAP and Recovery Plan. Building
              and validating risk models against regulatory and Group
              requirements. Market and liquidity risk monitoring and
              reporting.
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
