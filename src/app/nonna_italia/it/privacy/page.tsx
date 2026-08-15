import type { Metadata } from "next";

import { LabFooter, LabNav } from "@/components/lab/LabChrome";

export const metadata: Metadata = {
  title: "Nonna Italia — Informativa sulla privacy",
  description:
    "Nonna Italia non raccoglie dati personali: niente account, niente analytics, niente tracciamento, niente SDK di terzi, niente pubblicità. Completamente offline — l'app non richiede alcun permesso.",
  alternates: {
    canonical: "https://luthorlab.com/nonna_italia/it/privacy",
  },
};

export const dynamic = "force-static";

const CONTACT_EMAIL = "info@luthorlab.com";
const LAST_UPDATED = "15 agosto 2026";

/* Plain <a> (not next/link): Google Play and mobile browsers must get a full
   document load of static HTML, not a client soft-navigation into the locale tree. */
export default function NonnaItaliaPrivacyItPage() {
  return (
    <div className="lab-root">
      <LabNav />

      <main className="lab-main">
        <div className="lab-wrap">
          <article className="lab-prose">
            <p className="lab-kicker">
              <a
                href="/nonna_italia"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Nonna Italia
              </a>{" "}
              · Informativa sulla privacy
            </p>
            <h1>Nonna Italia non raccoglie dati personali.</h1>
            <p className="lab-prose-updated">
              Ultimo aggiornamento: {LAST_UPDATED}
            </p>

            <h2>Niente account, niente tracciamento</h2>
            <p>
              Nonna Italia non raccoglie, non conserva e non condivide alcun
              dato personale. Nell&apos;app non ci sono account, strumenti di
              analisi, tracciamento, SDK di terzi né pubblicità.
            </p>

            <h2>Completamente offline</h2>
            <p>
              L&apos;app non effettua richieste di rete. Tutti i contenuti audio
              sono inclusi nell&apos;app; nulla esce dal tuo dispositivo.
            </p>

            <h2>Nessun permesso</h2>
            <p>L&apos;app non richiede alcun permesso sul dispositivo.</p>

            <h2>Condivisione</h2>
            <p>
              Quando condividi una clip, l&apos;app apre il foglio di
              condivisione di sistema del dispositivo. L&apos;app in sé non
              trasmette né conserva nulla.
            </p>

            <h2>Conservazione dei dati</h2>
            <p>
              Nonna Italia non conserva dati sui nostri sistemi: non ci sono
              server, account né backup, quindi non c&apos;è nulla da
              conservare e nessun periodo di conservazione da indicare. Ciò che
              l&apos;app salva sul tuo dispositivo resta lì finché l&apos;app è
              installata.
            </p>

            <h2>Cancellazione dei dati</h2>
            <p>
              Non deteniamo dati sui nostri sistemi, quindi non esiste una
              procedura di richiesta di cancellazione: non c&apos;è nulla che
              potremmo cancellare al posto tuo. Puoi rimuovere in qualsiasi
              momento tutto ciò che l&apos;app ha salvato disinstallando
              l&apos;app, oppure cancellando i dati dell&apos;app dalle
              impostazioni di sistema del dispositivo.
            </p>

            <h2>Contatti</h2>
            <p>
              Domande su questa informativa:{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    `<!--email_off--><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a><!--/email_off-->`,
                }}
              />
              .
            </p>
          </article>
        </div>
      </main>

      <LabFooter />
    </div>
  );
}
