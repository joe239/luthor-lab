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

const LAST_UPDATED = "13 agosto 2026";

/* Plain <a> (not next/link): Google Play and mobile browsers must get a full
   document load of static HTML, not a client soft-navigation into the locale tree. */
export default function OndeDalloStrettoPrivacyItPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <div className="lab-wrap">
          <article className="lab-prose">
            <p className="lab-kicker">
              <a
                href="/onde-dallo-stretto/it"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Onde dallo Stretto
              </a>
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

            <h2>Conservazione dei dati</h2>
            <p>
              Non conserviamo alcun dato degli utenti. Non ci sono account e non
              esiste un nostro server che memorizzi informazioni su di te. I preset
              e l&apos;ultima stazione ascoltata restano sul dispositivo finché l&apos;app è
              installata. I log tecnici descritti sopra, tenuti dal fornitore di
              hosting e dai server delle emittenti, seguono le rispettive
              informative e non dipendono da noi.
            </p>

            <h2>Cancellazione dei dati</h2>
            <p>
              Non conserviamo dati degli utenti, quindi non esiste una procedura di
              richiesta di cancellazione: non c&apos;è nulla che possiamo cancellare al
              posto tuo. Puoi rimuovere in qualsiasi momento tutto quello che
              l&apos;app ha salvato, disinstallando l&apos;app oppure cancellando i dati
              dell&apos;app dalle impostazioni di sistema del dispositivo.
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
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<!--email_off--><a href="mailto:info@luthorlab.com">info@luthorlab.com</a><!--/email_off-->',
                }}
              />
              : la rimozione viene effettuata nel più breve tempo possibile.
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
