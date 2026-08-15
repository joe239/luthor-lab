export type NonnaLocale = "en" | "it";

export const NONNA_APP_STORE_URL = "https://apps.apple.com/app/id1473345646";
export const NONNA_GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.cusmanodev.nonnaitalia";

type NonnaCard = { title: string; body: string };

type NonnaStrings = {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  lede: string;
  lead: string;
  cards: NonnaCard[];
  shotAlts: [string, string, string];
  iconAlt: string;
  supportLabel: string;
  privacyLabel: string;
  privacyHref: string;
  footerNote: string;
  switcherLabel: string;
};

export const NONNA_STRINGS: Record<NonnaLocale, NonnaStrings> = {
  en: {
    metaTitle:
      "Nonna Italia — Italian grandmother expressions in Sicilian dialect",
    metaDescription:
      "Nonna Italia is a soundboard of Italian grandmother expressions — 100 audio clips recorded in Sicilian dialect, with subtitles in Italian, English and Sicilian. Share any clip. A LUTHOR Lab product.",
    canonical: "https://luthorlab.com/nonna_italia",
    lede: "A soundboard of Italian grandmother expressions.",
    lead:
      "One hundred audio clips recorded in Sicilian dialect — the phrases Italian grandmothers actually say. Each clip has subtitles in Italian, English and Sicilian. Share any clip from the app.",
    cards: [
      {
        title: "100 clips",
        body:
          "Recorded in Sicilian dialect — the phrases grandmothers actually say.",
      },
      {
        title: "Subtitles ×3",
        body: "Italian, English and Sicilian, one flag tap away.",
      },
      {
        title: "Sharing",
        body: "Send any clip from the app's share button.",
      },
    ],
    shotAlts: [
      "Nonna Italia app — home screen with the grandmother artwork on the sky-blue background",
      "Nonna Italia app — Info screen with white cards on the pale azure background",
      "Nonna Italia app on Android — home screen with the ground continuing behind the navigation bar",
    ],
    iconAlt: "Nonna Italia app icon — the grandmother on a sky-blue background",
    supportLabel: "Support",
    privacyLabel: "Privacy Policy",
    privacyHref: "/nonna_italia/privacy",
    footerNote: "Nonna Italia is a LUTHOR Lab product.",
    switcherLabel: "English",
  },
  it: {
    metaTitle: "Nonna Italia — Le espressioni delle nonne in dialetto siciliano",
    metaDescription:
      "Nonna Italia è una soundboard di espressioni di nonna siciliana: 100 audio registrati in dialetto, con sottotitoli in italiano, inglese e siciliano. Ogni clip si può condividere. Un prodotto LUTHOR Lab.",
    canonical: "https://luthorlab.com/nonna_italia/it",
    lede: "100 audio di nonne siciliane, sempre in tasca, compresi gli insulti.",
    lead:
      "Cento audio registrati in dialetto siciliano. Ogni registrazione include i sottotitoli in italiano, inglese e siciliano, ed è pronta da condividere con un solo click.",
    cards: [
      {
        title: "100 clip",
        body: "Registrate in dialetto siciliano.",
      },
      {
        title: "Tre lingue di sottotitoli",
        body: "Italiano, inglese e siciliano: basta toccare la bandiera.",
      },
      {
        title: "Condivisione",
        body: "Si condividono come qualsiasi altro file: messaggi, email, chat.",
      },
    ],
    shotAlts: [
      "App Nonna Italia — schermata principale con la nonna sullo sfondo celeste",
      "App Nonna Italia — schermata Info con le card bianche su sfondo azzurro chiaro",
      "App Nonna Italia su Android — schermata principale col terreno che continua dietro la barra di navigazione",
    ],
    iconAlt: "Icona dell'app Nonna Italia — la nonna su sfondo celeste",
    supportLabel: "Supporto",
    privacyLabel: "Informativa sulla privacy",
    privacyHref: "/nonna_italia/it/privacy",
    footerNote: "Nonna Italia è un prodotto LUTHOR Lab.",
    switcherLabel: "Italiano",
  },
};

export const NONNA_LOCALE_HREFS: Record<NonnaLocale, string> = {
  en: "/nonna_italia",
  it: "/nonna_italia/it",
};
