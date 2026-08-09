import Link from "next/link";
import type { Metadata } from "next";

import { LabFooter, LabNav } from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Onde dallo Stretto — Privacy e Termini d'uso",
  description:
    "Onde dallo Stretto non raccoglie, non conserva e non trasmette alcun dato personale. L'app non ha account, non richiede registrazione, non usa strumenti di analisi, non traccia gli utenti e non contiene pubblicità.",
  alternates: {
    canonical: "https://luthorlab.com/onde-dallo-stretto/it/privacy",
  },
};

export const dynamic = "force-static";

const LAST_UPDATED = "9 agosto 2026";

export default function OndeDalloStrettoPrivacyItPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <div className="lab-wrap">
          <article className="lab-prose">
            <p className="lab-kicker">
              <Link
                href="/onde-dallo-stretto/it"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Onde dallo Stretto
              </Link>{" "}
              · Privacy e Termini d&apos;uso
            </p>
            <h1>Privacy e Termini d&apos;uso</h1>

            <h2>Privacy</h2>
            <p>
              Onde dallo Stretto non raccoglie, non conserva e non trasmette alcun
              dato personale. L&apos;app non ha account, non richiede registrazione, non
              usa strumenti di analisi, non traccia gli utenti e non contiene
              pubblicità.
            </p>
            <p>
              I preset e l&apos;ultima stazione ascoltata restano sul dispositivo e non
              vengono mai inviati altrove.
            </p>
            <p>
              Durante l&apos;ascolto il dispositivo si collega direttamente ai server di
              streaming delle emittenti. Come in qualsiasi collegamento diretto,
              quei server vedono l&apos;indirizzo IP, esattamente come se l&apos;ascolto
              avvenisse da un browser. A quei collegamenti si applicano le
              informative sulla privacy delle singole emittenti; noi non abbiamo
              accesso né controllo sui dati che esse possono trattare.
            </p>
            <p>
              All&apos;avvio l&apos;app scarica l&apos;elenco delle stazioni da un file statico. Il
              file non contiene dati personali né identificativi, ma la richiesta
              raggiunge il fornitore di hosting, che può registrare l&apos;indirizzo IP
              nei propri log tecnici, come avviene per qualsiasi richiesta web.
            </p>

            <h2>Termini d&apos;uso</h2>
            <p>
              Onde dallo Stretto è un elenco. Rinvia agli stream pubblicamente
              accessibili pubblicati dalle emittenti radiofoniche presenti nella
              lista. L&apos;app non ospita, non conserva, non ritrasmette e non modifica
              alcun contenuto audio.
            </p>
            <p>
              I contenuti, i nomi delle stazioni e i marchi appartengono ai
              rispettivi titolari. Gli stream vengono trasmessi senza alcuna
              modifica, compresa la pubblicità delle emittenti.
            </p>
            <p>
              L&apos;app è gratuita, non contiene pubblicità e non ha scopo di lucro.
            </p>
            <p>
              Le emittenti che desiderano che la propria stazione sia rimossa
              dall&apos;elenco possono scrivere a{" "}
              <a href="mailto:info@luthorlab.com">info@luthorlab.com</a>: la
              rimozione viene effettuata entro cinque giorni lavorativi.
            </p>
            <p>
              La disponibilità degli stream dipende esclusivamente dai server delle
              emittenti. Non viene fornita alcuna garanzia sulla disponibilità di
              una stazione in un dato momento.
            </p>

            <p className="lab-prose-updated">Ultimo aggiornamento: {LAST_UPDATED}</p>
          </article>
        </div>
      </main>

      <LabFooter />
    </div>
  );
}
