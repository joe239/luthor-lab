/* Five language versions of the product page. These are not translations of
   one text: Italian carries the original "radio from home" positioning for
   people from Messina living away; the other languages present the app as
   live Italian radio for the car. */

export type OndeLocale = "it" | "en" | "ja" | "fr" | "de";

export const ONDE_LOCALES: OndeLocale[] = ["it", "en", "ja", "fr", "de"];

export const ONDE_LANG_LABELS: Record<OndeLocale, string> = {
  it: "Italiano",
  en: "English",
  ja: "日本語",
  fr: "Français",
  de: "Deutsch",
};

export const ONDE_LANG_STORAGE_KEY = "onde-lang";

type OndeShot = { src: string; alt: string };

export type OndeSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type OndeStrings = {
  metaTitle: string;
  metaDescription: string;
  /** Link-preview copy (og:/twitter: title+description) — kept separate from
      metaTitle/metaDescription so the HTML <title> stays useful for navigation. */
  ogTitle: string;
  ogDescription: string;
  kicker: string;
  lede: string;
  subhead: string;
  /** One or more lead paragraphs under the hero. */
  lead: string | string[];
  features: string[];
  /** Optional structured sections (Italian product copy). Absent/empty elsewhere. */
  sections?: OndeSection[];
  shotsLabel: string;
  storeLabel: string;
  soonApple: string;
  soonGoogle: string;
  storeHint: string;
  noteBefore: string;
  supportLabel: string;
  privacyLabel: string;
  privacyHref: string;
  iconAlt: string;
  carplayAlt: string;
  skylineAlt: string;
  shots: OndeShot[];
};

export const ONDE_CARPLAY_SRC = "/lab/onde-shot-carplay.png";

/* Open Graph: FM-dial screenshot composed onto a 1200x630 brand-dark canvas. */
export const ONDE_OG_IMAGE = {
  url: "https://luthorlab.com/lab/onde-og.jpg",
  width: 1200,
  height: 630,
} as const;

export const ONDE_OG_LOCALES: Record<OndeLocale, string> = {
  it: "it_IT",
  en: "en_US",
  ja: "ja_JP",
  fr: "fr_FR",
  de: "de_DE",
};

export const ONDE_EN_IT_LANGUAGE_ALTERNATES = {
  en: "https://luthorlab.com/onde-dallo-stretto/en",
  it: "https://luthorlab.com/onde-dallo-stretto/it",
  "x-default": "https://luthorlab.com/onde-dallo-stretto/en",
} as const;

export const ONDE_STRINGS: Record<OndeLocale, OndeStrings> = {
  it: {
    metaTitle: "Onde dallo Stretto — le radio di casa, anche quando sei lontano",
    metaDescription:
      "Onde dallo Stretto ricrea l'esperienza di una vera autoradio: scala FM, preset, SCAN e radio siciliane e calabresi in streaming. Gratuita, senza pubblicità. Un prodotto LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — le radio di Sicilia e Calabria",
    ogDescription:
      "Stanco delle solite playlist? Passa anche tu alla radio: le emittenti locali di Sicilia e Calabria in streaming, come su un'autoradio anni '90. Gratis, senza pubblicità, senza registrazione. iOS e Android.",
    kicker: "LUTHOR Lab",
    lede: "Le radio di casa, anche quando sei lontano",
    subhead: "",
    lead: [
      "Sei all'estero e ti manca ascoltare in auto le radio siciliane e calabresi?",
      "**Onde dallo Stretto** ricrea l'esperienza di una vera autoradio anni '90: niente liste infinite, ma una scala FM da esplorare frequenza per frequenza, con ogni emittente nella sua posizione reale e il classico fruscio tra una stazione e l'altra.",
    ],
    features: [],
    sections: [
      {
        title: "Cosa trovi",
        paragraphs: [],
        bullets: [
          "Una scala FM con le stazioni ordinate per frequenza",
          "Sei preset per le tue radio preferite",
          "SCAN per cercare automaticamente la stazione successiva",
          '"In onda adesso" per vedere cosa stanno trasmettendo le emittenti',
          "Titolo del brano in riproduzione, quando disponibile",
        ],
      },
      {
        title: "In auto",
        paragraphs: [
          "Con **CarPlay e Android Auto** puoi ascoltare e cambiare stazione direttamente dall'auto.",
          "Anche tramite Bluetooth puoi utilizzare i comandi al volante per passare da una radio all'altra senza prendere il telefono.",
        ],
      },
      {
        title: "Semplice da usare",
        paragraphs: [
          "Scorri la scala FM per cambiare frequenza, salva le tue stazioni preferite oppure lascia fare a SCAN.",
          "Puoi cambiare stazione anche dagli auricolari, dai comandi al volante o con Siri.",
        ],
      },
      {
        title: "Gratuita e senza pubblicità",
        paragraphs: [
          "Nessun account, nessuna registrazione, nessuna pubblicità nell'app e nessun tracciamento.",
          "I preferiti e l'ultima stazione ascoltata restano salvati sul tuo dispositivo.",
        ],
      },
      {
        title: "Le radio restano le radio",
        paragraphs: [
          "Onde dallo Stretto non ospita né modifica l'audio delle emittenti: l'app si collega direttamente ai loro stream e li riproduce integralmente, compresi programmi e pubblicità.",
          "La disponibilità delle singole stazioni dipende dai rispettivi servizi di streaming.",
        ],
      },
    ],
    shotsLabel: "Schermate dell'app",
    storeLabel: "Scarica l'app",
    soonApple: "In arrivo su",
    soonGoogle: "In arrivo su",
    storeHint: "non è ancora negli store — in arrivo",
    noteBefore: "Onde dallo Stretto è un prodotto LUTHOR Lab.",
    supportLabel: "Supporto",
    privacyLabel: "Privacy e termini d'uso",
    privacyHref: "/onde-dallo-stretto/it/privacy",
    iconAlt: "Icona dell'app Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto su Apple CarPlay",
    skylineAlt:
      "Lo skyline di Onde dallo Stretto — i monumenti dello Stretto sopra la scala FM con l'indicatore ambra",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "L'app Onde dallo Stretto — sintonizzata su 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "L'app Onde dallo Stretto — la manopola su 88.4 FM, ONDE UNO, preset 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "L'app Onde dallo Stretto — l'elenco delle stazioni in onda adesso",
      },
    ],
  },
  en: {
    metaTitle: "Onde dallo Stretto — live Italian radio, in your car",
    metaDescription:
      "Onde dallo Stretto brings real Italian radio to your dashboard: the music, the voices, the warmth of Italy — live and unfiltered. Turn the dial across a real FM band, stop on a frequency, and listen. A LUTHOR Lab product.",
    ogTitle: "Onde dallo Stretto — the radio stations of Sicily and Calabria",
    ogDescription:
      "Tired of the same old playlists? Make the switch to radio: the local stations of Sicily and Calabria in streaming, like on a '90s car radio. Free, no ads, no sign-up. iOS and Android.",
    kicker: "LUTHOR Lab",
    lede: "Live Italian radio, in your car.",
    subhead: "Turn the dial. Italy comes through.",
    lead: "Onde dallo Stretto brings real Italian radio to your dashboard: the music, the voices, the warmth of Italy — live and unfiltered. Turn the dial across a real FM band, stop on a frequency, and listen. No playlists, no algorithms: just radio as it is playing in Italy, right now.",
    features: [
      "A real FM band: turn, tune, listen",
      "Made for the car: CarPlay, steering-wheel controls, six presets",
      "Free. No ads, no account.",
    ],
    shotsLabel: "App screenshots",
    storeLabel: "Get the app",
    soonApple: "Coming soon to the",
    soonGoogle: "Coming soon to",
    storeHint: "not in the stores yet — coming soon",
    noteBefore: "Onde dallo Stretto is a LUTHOR Lab product.",
    supportLabel: "Support",
    privacyLabel: "Privacy & Terms of Use",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Onde dallo Stretto app icon",
    carplayAlt: "Onde dallo Stretto on Apple CarPlay",
    skylineAlt:
      "The Onde dallo Stretto skyline — landmarks of the Strait above the FM scale with the amber needle",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Onde dallo Stretto app — tuned to 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Onde dallo Stretto app — dial on 88.4 FM, ONDE UNO, preset 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Onde dallo Stretto app — the list of stations on air right now",
      },
    ],
  },
  ja: {
    metaTitle: "Onde dallo Stretto — イタリアのラジオを、そのまま車の中へ",
    metaDescription:
      "Onde dallo Stretto は、イタリアのラジオをライブのまま届けます。音楽も、声も、街の空気も、放送そのまま。本物のFMバンドをダイヤルで回り、周波数に止まって、耳を傾ける——いまイタリアで流れているラジオです。LUTHOR Lab のプロダクト。",
    ogTitle: "Onde dallo Stretto — シチリアとカラブリアのラジオ",
    ogDescription:
      "いつものプレイリストに飽きたら、あなたもラジオへ。シチリアとカラブリアのローカル局を、90年代のカーラジオのようにストリーミングで。無料、広告なし、登録不要。iOS・Android対応。",
    kicker: "LUTHOR Lab",
    lede: "イタリアのラジオを、そのまま車の中へ。",
    subhead: "ダイヤルを回せば、そこはイタリア。",
    lead: "Onde dallo Stretto は、イタリアのラジオをライブのまま届けます。音楽も、声も、街の空気も、放送そのまま。本物のFMバンドをダイヤルで回り、周波数に止まって、耳を傾ける——プレイリストでも、アルゴリズムでもない、いまイタリアで流れているラジオです。",
    features: [
      "本物のFMバンド——回して、合わせて、聴く",
      "車のために:CarPlay、ステアリング操作、6つのプリセット",
      "無料。広告なし、登録なし。",
    ],
    shotsLabel: "アプリの画面",
    storeLabel: "アプリを入手",
    soonApple: "近日公開",
    soonGoogle: "近日公開",
    storeHint: "ストアではまだ配信されていません — 近日公開",
    noteBefore: "Onde dallo Stretto は LUTHOR Lab のプロダクトです。",
    supportLabel: "サポート",
    privacyLabel: "プライバシーと利用規約",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Onde dallo Stretto のアプリアイコン",
    carplayAlt: "Onde dallo Stretto の Apple CarPlay 画面",
    skylineAlt:
      "Onde dallo Stretto のスカイライン — FM スケールと琥珀色の針の上に並ぶ海峡の名所",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Onde dallo Stretto — 106.8 FM、SEGNALE BLU を受信中",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Onde dallo Stretto — ダイヤルを 88.4 FM、ONDE UNO（プリセット1）に",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Onde dallo Stretto — いま放送中の局の一覧",
      },
    ],
  },
  fr: {
    metaTitle: "Onde dallo Stretto — la radio italienne en direct, dans votre voiture",
    metaDescription:
      "Onde dallo Stretto fait entrer la vraie radio italienne dans votre voiture : la musique, les voix, l'art de vivre italien — en direct et sans filtre. Tournez sur une vraie bande FM, arrêtez-vous sur une fréquence et écoutez. Un produit LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — les radios de Sicile et de Calabre",
    ogDescription:
      "Fatigué des playlists habituelles ? Passez vous aussi à la radio : les stations locales de Sicile et de Calabre en streaming, comme sur un autoradio des années 90. Gratuit, sans publicité, sans inscription. iOS et Android.",
    kicker: "LUTHOR Lab",
    lede: "La radio italienne en direct, dans votre voiture.",
    subhead: "Tournez la molette. L'Italie est là.",
    lead: "Onde dallo Stretto fait entrer la vraie radio italienne dans votre voiture : la musique, les voix, l'art de vivre italien — en direct et sans filtre. Tournez sur une vraie bande FM, arrêtez-vous sur une fréquence et écoutez. Pas de playlists, pas d'algorithmes : la radio telle qu'elle se vit en Italie, à l'instant même.",
    features: [
      "Une vraie bande FM : tourner, régler, écouter",
      "Pensée pour la voiture : CarPlay, commandes au volant, six présélections",
      "Gratuite. Sans publicité, sans compte.",
    ],
    shotsLabel: "Captures d'écran de l'app",
    storeLabel: "Télécharger l'app",
    soonApple: "Bientôt sur l'",
    soonGoogle: "Bientôt sur",
    storeHint: "pas encore sur les stores — bientôt disponible",
    noteBefore: "Onde dallo Stretto est un produit LUTHOR Lab.",
    supportLabel: "Assistance",
    privacyLabel: "Confidentialité et conditions d'utilisation",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Icône de l'app Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto sur Apple CarPlay",
    skylineAlt:
      "La skyline d'Onde dallo Stretto — les monuments du Détroit au-dessus de l'échelle FM avec l'aiguille ambre",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "L'app Onde dallo Stretto — réglée sur 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "L'app Onde dallo Stretto — la molette sur 88.4 FM, ONDE UNO, présélection 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "L'app Onde dallo Stretto — la liste des stations à l'antenne",
      },
    ],
  },
  de: {
    metaTitle: "Onde dallo Stretto — Italienisches Radio, live in deinem Auto",
    metaDescription:
      "Onde dallo Stretto bringt echtes italienisches Radio in dein Auto: die Musik, die Stimmen, das Lebensgefühl Italiens — live und ungefiltert. Dreh über ein echtes FM-Band, bleib auf einer Frequenz stehen und hör zu. Ein Produkt von LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — die Radiosender aus Sizilien und Kalabrien",
    ogDescription:
      "Genug von den üblichen Playlists? Steig auch du aufs Radio um: die Lokalsender aus Sizilien und Kalabrien im Streaming, wie auf einem Autoradio der 90er. Kostenlos, ohne Werbung, ohne Registrierung. iOS und Android.",
    kicker: "LUTHOR Lab",
    lede: "Italienisches Radio, live in deinem Auto.",
    subhead: "Dreh am Rad — und Italien ist da.",
    lead: "Onde dallo Stretto bringt echtes italienisches Radio in dein Auto: die Musik, die Stimmen, das Lebensgefühl Italiens — live und ungefiltert. Dreh über ein echtes FM-Band, bleib auf einer Frequenz stehen und hör zu. Keine Playlists, keine Algorithmen: nur Radio, wie es in diesem Moment in Italien läuft.",
    features: [
      "Ein echtes FM-Band: drehen, abstimmen, hören",
      "Fürs Auto gemacht: CarPlay, Lenkradtasten, sechs Presets",
      "Kostenlos. Ohne Werbung, ohne Konto.",
    ],
    shotsLabel: "App-Screenshots",
    storeLabel: "App laden",
    soonApple: "Bald im",
    soonGoogle: "Bald bei",
    storeHint: "noch nicht in den Stores — bald verfügbar",
    noteBefore: "Onde dallo Stretto ist ein Produkt von LUTHOR Lab.",
    supportLabel: "Support",
    privacyLabel: "Datenschutz & Nutzungsbedingungen",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "App-Symbol von Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto auf Apple CarPlay",
    skylineAlt:
      "Die Skyline von Onde dallo Stretto — Wahrzeichen der Meerenge über der FM-Skala mit der bernsteinfarbenen Nadel",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Die App Onde dallo Stretto — eingestellt auf 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Die App Onde dallo Stretto — der Regler auf 88.4 FM, ONDE UNO, Preset 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Die App Onde dallo Stretto — die Liste der Sender, die gerade senden",
      },
    ],
  },
};
