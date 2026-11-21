/* Fifteen language versions of the product page. These are not translations of
   one text: Italian carries the original "radio from home" positioning for
   people from Messina living away; the other languages present the app as
   live Italian radio for the car. */

export type OndeLocale = "it" | "en" | "ja" | "fr" | "de" | "es" | "pl" | "sl" | "el" | "pt" | "ro" | "hu" | "cs" | "sk" | "hr";

export const ONDE_LOCALES: OndeLocale[] = ["it", "en", "ja", "fr", "de", "es", "pl", "sl", "el", "pt", "ro", "hu", "cs", "sk", "hr"];

export const ONDE_LANG_LABELS: Record<OndeLocale, string> = {
  it: "Italiano",
  en: "English",
  ja: "日本語",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  pl: "Polski",
  sl: "Slovenščina",
  el: "Ελληνικά",
  pt: "Português",
  ro: "Română",
  hu: "Magyar",
  cs: "Čeština",
  sk: "Slovenčina",
  hr: "Hrvatski",
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
  /** Top line of the active App Store badge ("Download on the" / "Scarica su"). */
  getApple: string;
  /** Top line of the active Google Play badge. */
  getGoogle: string;
  soonApple: string;
  storeHint: string;
  phoneRadioAlt: string;
  noteBefore: string;
  supportLabel: string;
  privacyLabel: string;
  privacyHref: string;
  iconAlt: string;
  carplayAlt: string;
  skylineAlt: string;
  shots: OndeShot[];
};

export const ONDE_CARPLAY_SRC = "/lab/onde-carplay-v6.webp";

/* `/it/` storefront: the country-less URL 404s (it defaults to the US store,
   where the app is not published — verified 2026-09-02; live on EU storefronts).
   On-device the App Store resolves the app id in the visitor's own storefront. */
export const ONDE_APP_STORE_URL = "https://apps.apple.com/it/app/onde-dallo-stretto/id6799721986";

export const ONDE_GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.cusmanodev.ondedallostretto";

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
  es: "es_ES",
  pl: "pl_PL",
  sl: "sl_SI",
  el: "el_GR",
  pt: "pt_PT",
  ro: "ro_RO",
  hu: "hu_HU",
  cs: "cs_CZ",
  sk: "sk_SK",
  hr: "hr_HR",
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
    ogDescription: "Stanco delle solite playlist? Passa alla radio!",
    kicker: "LUTHOR Lab",
    lede: "Le radio di casa, anche quando sei lontano",
    subhead: "",
    lead: [
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
    getApple: "Scarica su",
    getGoogle: "Scarica su",
    soonApple: "In arrivo su",
    storeHint: "disponibile su App Store e Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto su iPhone in orizzontale, con l'antenna telescopica di una radio e la mappa dello Stretto sullo sfondo",
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
    ogDescription: "Tired of the same old playlists? Switch to the radio!",
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
    getApple: "Download on the",
    getGoogle: "Get it on",
    soonApple: "Coming soon to the",
    storeHint: "now on the App Store and Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto on an iPhone held sideways, with a radio's telescopic antenna and the map of the Strait in the background",
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
    ogDescription: "いつものプレイリストに飽きたら、ラジオへ！",
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
    getApple: "ダウンロードは",
    getGoogle: "ダウンロードは",
    soonApple: "近日公開",
    storeHint: "App StoreとGoogle Playで配信中",
    phoneRadioAlt:
      "横向きの iPhone に表示された Onde dallo Stretto — ラジオの伸縮アンテナと、背景に海峡の地図",
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
    ogDescription: "Fatigué des playlists habituelles ? Passez à la radio !",
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
    getApple: "Télécharger dans l'",
    getGoogle: "Télécharger sur",
    soonApple: "Bientôt sur l'",
    storeHint: "disponible sur l'App Store et Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto sur un iPhone à l'horizontale, avec l'antenne télescopique d'une radio et la carte du Détroit en arrière-plan",
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
    ogDescription: "Genug von den üblichen Playlists? Schalt aufs Radio um!",
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
    getApple: "Laden im",
    getGoogle: "Jetzt bei",
    soonApple: "Bald im",
    storeHint: "jetzt im App Store und bei Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto auf einem iPhone im Querformat, mit der Teleskopantenne eines Radios und der Karte der Meerenge im Hintergrund",
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
  es: {
    metaTitle: "Onde dallo Stretto — radio italiana en directo, en tu coche",
    metaDescription:
      "Onde dallo Stretto lleva la verdadera radio italiana a tu coche: la música, las voces, el espíritu de Italia — en directo y sin filtros. Gira el dial por una auténtica banda FM, párate en una frecuencia y escucha. Un producto de LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — las radios de Sicilia y Calabria",
    ogDescription: "¿Cansado de las playlists de siempre? ¡Pásate a la radio!",
    kicker: "LUTHOR Lab",
    lede: "Radio italiana en directo, en tu coche.",
    subhead: "Gira el dial. Italia está ahí.",
    lead: "Onde dallo Stretto lleva la verdadera radio italiana a tu salpicadero: la música, las voces, el calor de Italia — en directo y sin filtros. Gira el dial por una auténtica banda FM, párate en una frecuencia y escucha. Sin playlists, sin algoritmos: solo la radio tal y como suena en Italia, ahora mismo.",
    features: [
      "Una banda FM de verdad: gira, sintoniza, escucha",
      "Pensada para el coche: CarPlay, mandos en el volante, seis presintonías",
      "Gratuita. Sin publicidad, sin cuenta.",
    ],
    shotsLabel: "Capturas de pantalla de la app",
    storeLabel: "Descargar la app",
    getApple: "Descárgala en el",
    getGoogle: "Disponible en",
    soonApple: "Próximamente en el",
    storeHint: "disponible en App Store y Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto en un iPhone en horizontal, con la antena telescópica de una radio y el mapa del Estrecho de fondo",
    noteBefore: "Onde dallo Stretto es un producto de LUTHOR Lab.",
    supportLabel: "Soporte",
    privacyLabel: "Privacidad y condiciones de uso",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Icono de la app Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto en Apple CarPlay",
    skylineAlt:
      "El skyline de Onde dallo Stretto — los monumentos del Estrecho sobre la escala FM con la aguja ámbar",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "La app Onde dallo Stretto — sintonizada en 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "La app Onde dallo Stretto — el dial en 88.4 FM, ONDE UNO, presintonía 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "La app Onde dallo Stretto — la lista de emisoras en antena ahora mismo",
      },
    ],
  },

  pl: {
    metaTitle: "Onde dallo Stretto — włoskie radio na żywo, w Twoim samochodzie",
    metaDescription:
      "Onde dallo Stretto przenosi prawdziwe włoskie radio do Twojego samochodu: muzyka, głosy, klimat Włoch — na żywo i bez filtrów. Kręć pokrętłem po prawdziwym paśmie FM, zatrzymaj się na częstotliwości i słuchaj. Produkt LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — radia z Sycylii i Kalabrii",
    ogDescription: "Masz dość wciąż tych samych playlist? Przełącz się na radio!",
    kicker: "LUTHOR Lab",
    lede: "Włoskie radio na żywo, w Twoim samochodzie.",
    subhead: "Przekręć pokrętło. Włochy się odezwą.",
    lead: "Onde dallo Stretto przenosi prawdziwe włoskie radio na Twoją deskę rozdzielczą: muzyka, głosy, ciepło Włoch — na żywo i bez filtrów. Kręć pokrętłem po prawdziwym paśmie FM, zatrzymaj się na częstotliwości i słuchaj. Bez playlist, bez algorytmów: tylko radio, takie jakie właśnie gra we Włoszech.",
    features: [
      "Prawdziwe pasmo FM: kręć, strój, słuchaj",
      "Stworzona do samochodu: CarPlay, przyciski na kierownicy, sześć zapamiętanych stacji",
      "Darmowa. Bez reklam, bez konta.",
    ],
    shotsLabel: "Zrzuty ekranu aplikacji",
    storeLabel: "Pobierz aplikację",
    getApple: "Pobierz z",
    getGoogle: "Pobierz z",
    soonApple: "Wkrótce w",
    storeHint: "dostępna w App Store i Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto na iPhonie w poziomie, z teleskopową anteną radia i mapą Cieśniny w tle",
    noteBefore: "Onde dallo Stretto jest produktem LUTHOR Lab.",
    supportLabel: "Wsparcie",
    privacyLabel: "Prywatność i warunki korzystania",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Ikona aplikacji Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto w Apple CarPlay",
    skylineAlt:
      "Skyline Onde dallo Stretto — zabytki Cieśniny nad skalą FM z bursztynową wskazówką",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Aplikacja Onde dallo Stretto — nastawiona na 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Aplikacja Onde dallo Stretto — pokrętło na 88.4 FM, ONDE UNO, stacja 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Aplikacja Onde dallo Stretto — lista stacji nadających w tej chwili",
      },
    ],
  },

  sl: {
    metaTitle: "Onde dallo Stretto — italijanski radio v živo, v vašem avtu",
    metaDescription:
      "Onde dallo Stretto prinaša pravi italijanski radio v vaš avto: glasba, glasovi, utrip Italije — v živo in brez filtrov. Zavrtite gumb po pravem FM-pasu, ustavite se na frekvenci in prisluhnite. Izdelek LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — radijske postaje Sicilije in Kalabrije",
    ogDescription: "Dovolj istih seznamov predvajanja? Preklopite na radio!",
    kicker: "LUTHOR Lab",
    lede: "Italijanski radio v živo, v vašem avtu.",
    subhead: "Zavrtite gumb. Italija se oglasi.",
    lead: "Onde dallo Stretto prinaša pravi italijanski radio na vašo armaturno ploščo: glasba, glasovi, toplina Italije — v živo in brez filtrov. Zavrtite gumb po pravem FM-pasu, ustavite se na frekvenci in prisluhnite. Brez seznamov predvajanja, brez algoritmov: samo radio, kakršen ta hip igra v Italiji.",
    features: [
      "Pravi FM-pas: zavrtite, naravnajte, poslušajte",
      "Narejena za avto: CarPlay, tipke na volanu, šest shranjenih postaj",
      "Brezplačna. Brez oglasov, brez računa.",
    ],
    shotsLabel: "Posnetki zaslona aplikacije",
    storeLabel: "Prenesite aplikacijo",
    getApple: "Prenesite iz",
    getGoogle: "Na voljo v",
    soonApple: "Kmalu v",
    storeHint: "na voljo v App Store in Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto na iPhonu v ležečem položaju, s teleskopsko anteno radia in zemljevidom Ožine v ozadju",
    noteBefore: "Onde dallo Stretto je izdelek LUTHOR Lab.",
    supportLabel: "Podpora",
    privacyLabel: "Zasebnost in pogoji uporabe",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Ikona aplikacije Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto v Apple CarPlay",
    skylineAlt:
      "Panorama Onde dallo Stretto — znamenitosti Ožine nad FM-skalo z jantarno iglo",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Aplikacija Onde dallo Stretto — naravnana na 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Aplikacija Onde dallo Stretto — gumb na 88.4 FM, ONDE UNO, postaja 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Aplikacija Onde dallo Stretto — seznam postaj, ki ta hip oddajajo",
      },
    ],
  },

  el: {
    metaTitle: "Onde dallo Stretto — ιταλικό ραδιόφωνο ζωντανά, στο αυτοκίνητό σας",
    metaDescription:
      "Το Onde dallo Stretto φέρνει το αληθινό ιταλικό ραδιόφωνο στο αυτοκίνητό σας: η μουσική, οι φωνές, ο παλμός της Ιταλίας — ζωντανά και χωρίς φίλτρα. Γυρίστε τον επιλογέα σε μια πραγματική μπάντα FM, σταθείτε σε μια συχνότητα και ακούστε. Ένα προϊόν της LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — οι ραδιοφωνικοί σταθμοί της Σικελίας και της Καλαβρίας",
    ogDescription: "Βαρεθήκατε τις ίδιες playlist; Περάστε στο ραδιόφωνο!",
    kicker: "LUTHOR Lab",
    lede: "Ιταλικό ραδιόφωνο ζωντανά, στο αυτοκίνητό σας.",
    subhead: "Γυρίστε τον επιλογέα. Η Ιταλία ακούγεται.",
    lead: "Το Onde dallo Stretto φέρνει το αληθινό ιταλικό ραδιόφωνο στο ταμπλό σας: η μουσική, οι φωνές, η ζεστασιά της Ιταλίας — ζωντανά και χωρίς φίλτρα. Γυρίστε τον επιλογέα σε μια πραγματική μπάντα FM, σταθείτε σε μια συχνότητα και ακούστε. Χωρίς playlist, χωρίς αλγορίθμους: μόνο το ραδιόφωνο όπως παίζει στην Ιταλία, αυτή τη στιγμή.",
    features: [
      "Μια πραγματική μπάντα FM: γυρίστε, συντονιστείτε, ακούστε",
      "Φτιαγμένη για το αυτοκίνητο: CarPlay, χειριστήρια στο τιμόνι, έξι προεπιλογές",
      "Δωρεάν. Χωρίς διαφημίσεις, χωρίς λογαριασμό.",
    ],
    shotsLabel: "Στιγμιότυπα οθόνης της εφαρμογής",
    storeLabel: "Κατεβάστε την εφαρμογή",
    getApple: "Διαθέσιμο στο",
    getGoogle: "Διαθέσιμο στο",
    soonApple: "Έρχεται σύντομα στο",
    storeHint: "διαθέσιμη σε App Store και Google Play",
    phoneRadioAlt:
      "Το Onde dallo Stretto σε iPhone σε οριζόντια θέση, με την τηλεσκοπική κεραία ενός ραδιοφώνου και τον χάρτη του Πορθμού στο φόντο",
    noteBefore: "Το Onde dallo Stretto είναι ένα προϊόν της LUTHOR Lab.",
    supportLabel: "Υποστήριξη",
    privacyLabel: "Απόρρητο και όροι χρήσης",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Εικονίδιο της εφαρμογής Onde dallo Stretto",
    carplayAlt: "Το Onde dallo Stretto στο Apple CarPlay",
    skylineAlt:
      "Η γραμμή του ορίζοντα του Onde dallo Stretto — τα μνημεία του Πορθμού πάνω από την κλίμακα FM με την κεχριμπαρένια βελόνα",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Η εφαρμογή Onde dallo Stretto — συντονισμένη στους 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Η εφαρμογή Onde dallo Stretto — ο επιλογέας στους 88.4 FM, ONDE UNO, προεπιλογή 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Η εφαρμογή Onde dallo Stretto — η λίστα των σταθμών που εκπέμπουν αυτή τη στιγμή",
      },
    ],
  },

  pt: {
    metaTitle: "Onde dallo Stretto — rádio italiana em direto, no seu carro",
    metaDescription:
      "O Onde dallo Stretto traz a verdadeira rádio italiana para o seu carro: a música, as vozes, o espírito de Itália — em direto e sem filtros. Rode o botão por uma banda FM a sério, pare numa frequência e oiça. Um produto da LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — as rádios da Sicília e da Calábria",
    ogDescription: "Cansado das playlists de sempre? Mude para a rádio!",
    kicker: "LUTHOR Lab",
    lede: "Rádio italiana em direto, no seu carro.",
    subhead: "Rode o botão. A Itália está no ar.",
    lead: "O Onde dallo Stretto traz a verdadeira rádio italiana para o seu tablier: a música, as vozes, o calor de Itália — em direto e sem filtros. Rode o botão por uma banda FM a sério, pare numa frequência e oiça. Sem playlists, sem algoritmos: só a rádio tal como está a tocar em Itália, neste momento.",
    features: [
      "Uma banda FM a sério: rode, sintonize, oiça",
      "Feita para o carro: CarPlay, comandos no volante, seis memórias",
      "Gratuita. Sem publicidade, sem conta.",
    ],
    shotsLabel: "Capturas de ecrã da aplicação",
    storeLabel: "Descarregar a aplicação",
    getApple: "Descarregar na",
    getGoogle: "Disponível no",
    soonApple: "Brevemente na",
    storeHint: "disponível na App Store e no Google Play",
    phoneRadioAlt:
      "O Onde dallo Stretto num iPhone na horizontal, com a antena telescópica de um rádio e o mapa do Estreito ao fundo",
    noteBefore: "O Onde dallo Stretto é um produto da LUTHOR Lab.",
    supportLabel: "Suporte",
    privacyLabel: "Privacidade e termos de utilização",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Ícone da aplicação Onde dallo Stretto",
    carplayAlt: "O Onde dallo Stretto no Apple CarPlay",
    skylineAlt:
      "O skyline do Onde dallo Stretto — os monumentos do Estreito sobre a escala FM com a agulha âmbar",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "A aplicação Onde dallo Stretto — sintonizada nos 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "A aplicação Onde dallo Stretto — o botão nos 88.4 FM, ONDE UNO, memória 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "A aplicação Onde dallo Stretto — a lista das estações no ar neste momento",
      },
    ],
  },

  ro: {
    metaTitle: "Onde dallo Stretto — radio italian în direct, în mașina ta",
    metaDescription:
      "Onde dallo Stretto aduce adevăratul radio italian în mașina ta: muzica, vocile, spiritul Italiei — în direct și fără filtre. Rotește butonul pe o bandă FM adevărată, oprește-te pe o frecvență și ascultă. Un produs LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — posturile de radio din Sicilia și Calabria",
    ogDescription: "Te-ai săturat de aceleași playlisturi? Treci pe radio!",
    kicker: "LUTHOR Lab",
    lede: "Radio italian în direct, în mașina ta.",
    subhead: "Rotește butonul. Italia se aude.",
    lead: "Onde dallo Stretto aduce adevăratul radio italian pe bordul tău: muzica, vocile, căldura Italiei — în direct și fără filtre. Rotește butonul pe o bandă FM adevărată, oprește-te pe o frecvență și ascultă. Fără playlisturi, fără algoritmi: doar radioul așa cum se aude în Italia, chiar acum.",
    features: [
      "O bandă FM adevărată: rotește, acordează, ascultă",
      "Gândită pentru mașină: CarPlay, comenzi pe volan, șase posturi memorate",
      "Gratuită. Fără reclame, fără cont.",
    ],
    shotsLabel: "Capturi de ecran din aplicație",
    storeLabel: "Descarcă aplicația",
    getApple: "Descarcă din",
    getGoogle: "Disponibil pe",
    soonApple: "În curând pe",
    storeHint: "disponibilă în App Store și pe Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto pe un iPhone ținut orizontal, cu antena telescopică a unui radio și harta Strâmtorii pe fundal",
    noteBefore: "Onde dallo Stretto este un produs LUTHOR Lab.",
    supportLabel: "Asistență",
    privacyLabel: "Confidențialitate și condiții de utilizare",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Pictograma aplicației Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto pe Apple CarPlay",
    skylineAlt:
      "Skyline-ul Onde dallo Stretto — monumentele Strâmtorii deasupra scalei FM cu acul chihlimbariu",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Aplicația Onde dallo Stretto — acordată pe 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Aplicația Onde dallo Stretto — butonul pe 88.4 FM, ONDE UNO, postul memorat 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Aplicația Onde dallo Stretto — lista posturilor aflate în emisie chiar acum",
      },
    ],
  },

  hu: {
    metaTitle: "Onde dallo Stretto — élő olasz rádió az autódban",
    metaDescription:
      "Az Onde dallo Stretto az igazi olasz rádiót hozza el az autódba: a zene, a hangok, Olaszország hangulata — élőben és szűrők nélkül. Tekerd a gombot egy igazi FM-sávon, állj meg egy frekvencián, és hallgasd. A LUTHOR Lab terméke.",
    ogTitle: "Onde dallo Stretto — Szicília és Calabria rádiói",
    ogDescription: "Eleged van a szokásos lejátszási listákból? Válts rádióra!",
    kicker: "LUTHOR Lab",
    lede: "Élő olasz rádió, az autódban.",
    subhead: "Tekerd a gombot. Olaszország megszólal.",
    lead: "Az Onde dallo Stretto az igazi olasz rádiót hozza a műszerfaladra: a zene, a hangok, Olaszország melege — élőben és szűrők nélkül. Tekerd a gombot egy igazi FM-sávon, állj meg egy frekvencián, és hallgasd. Nincsenek lejátszási listák, nincsenek algoritmusok: csak a rádió, ahogy épp most szól Olaszországban.",
    features: [
      "Igazi FM-sáv: tekerd, hangold, hallgasd",
      "Autóra tervezve: CarPlay, kormányról vezérelhető, hat tárolt állomás",
      "Ingyenes. Reklám és fiók nélkül.",
    ],
    shotsLabel: "Képernyőképek az alkalmazásból",
    storeLabel: "Az alkalmazás letöltése",
    getApple: "Letöltés innen:",
    getGoogle: "Szerezd meg:",
    soonApple: "Hamarosan itt:",
    storeHint: "elérhető az App Store-ban és a Google Playen",
    phoneRadioAlt:
      "Az Onde dallo Stretto egy fektetett iPhone-on, egy rádió teleszkópos antennájával és a Szoros térképével a háttérben",
    noteBefore: "Az Onde dallo Stretto a LUTHOR Lab terméke.",
    supportLabel: "Támogatás",
    privacyLabel: "Adatvédelem és felhasználási feltételek",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Az Onde dallo Stretto alkalmazás ikonja",
    carplayAlt: "Az Onde dallo Stretto Apple CarPlay-en",
    skylineAlt:
      "Az Onde dallo Stretto látképe — a Szoros nevezetességei az FM-skála fölött, borostyán mutatóval",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Az Onde dallo Stretto alkalmazás — 106.8 FM-re hangolva, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Az Onde dallo Stretto alkalmazás — a gomb 88.4 FM-en, ONDE UNO, 1-es tárolt állomás",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Az Onde dallo Stretto alkalmazás — az éppen adásban lévő állomások listája",
      },
    ],
  },

  cs: {
    metaTitle: "Onde dallo Stretto — italské rádio naživo, ve vašem autě",
    metaDescription:
      "Onde dallo Stretto přináší skutečné italské rádio do vašeho auta: hudba, hlasy, atmosféra Itálie — naživo a bez filtrů. Otáčejte knoflíkem po skutečném pásmu FM, zastavte se na frekvenci a poslouchejte. Produkt LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — rádia ze Sicílie a Kalábrie",
    ogDescription: "Máte dost pořád stejných playlistů? Přepněte na rádio!",
    kicker: "LUTHOR Lab",
    lede: "Italské rádio naživo, ve vašem autě.",
    subhead: "Otočte knoflíkem. Itálie se ozve.",
    lead: "Onde dallo Stretto přináší skutečné italské rádio na vaši palubní desku: hudba, hlasy, teplo Itálie — naživo a bez filtrů. Otáčejte knoflíkem po skutečném pásmu FM, zastavte se na frekvenci a poslouchejte. Žádné playlisty, žádné algoritmy: jen rádio tak, jak právě teď hraje v Itálii.",
    features: [
      "Skutečné pásmo FM: otáčejte, laďte, poslouchejte",
      "Stvořená pro auto: CarPlay, ovládání na volantu, šest předvoleb",
      "Zdarma. Bez reklam, bez účtu.",
    ],
    shotsLabel: "Snímky obrazovky aplikace",
    storeLabel: "Stáhnout aplikaci",
    getApple: "Stáhnout v",
    getGoogle: "Získat na",
    soonApple: "Již brzy v",
    storeHint: "k dispozici v App Store a na Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto na iPhonu naležato, s teleskopickou anténou rádia a mapou Úžiny v pozadí",
    noteBefore: "Onde dallo Stretto je produkt LUTHOR Lab.",
    supportLabel: "Podpora",
    privacyLabel: "Soukromí a podmínky použití",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Ikona aplikace Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto v Apple CarPlay",
    skylineAlt:
      "Panorama Onde dallo Stretto — památky Úžiny nad stupnicí FM s jantarovou ručičkou",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Aplikace Onde dallo Stretto — naladěná na 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Aplikace Onde dallo Stretto — knoflík na 88.4 FM, ONDE UNO, předvolba 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Aplikace Onde dallo Stretto — seznam stanic, které právě vysílají",
      },
    ],
  },

  sk: {
    metaTitle: "Onde dallo Stretto — talianske rádio naživo, vo vašom aute",
    metaDescription:
      "Onde dallo Stretto prináša skutočné talianske rádio do vášho auta: hudba, hlasy, atmosféra Talianska — naživo a bez filtrov. Otáčajte gombíkom po skutočnom pásme FM, zastavte sa na frekvencii a počúvajte. Produkt LUTHOR Lab.",
    ogTitle: "Onde dallo Stretto — rádiá zo Sicílie a Kalábrie",
    ogDescription: "Máte dosť stále rovnakých playlistov? Prepnite na rádio!",
    kicker: "LUTHOR Lab",
    lede: "Talianske rádio naživo, vo vašom aute.",
    subhead: "Otočte gombíkom. Taliansko sa ozve.",
    lead: "Onde dallo Stretto prináša skutočné talianske rádio na vašu palubnú dosku: hudba, hlasy, teplo Talianska — naživo a bez filtrov. Otáčajte gombíkom po skutočnom pásme FM, zastavte sa na frekvencii a počúvajte. Žiadne playlisty, žiadne algoritmy: len rádio tak, ako práve teraz hrá v Taliansku.",
    features: [
      "Skutočné pásmo FM: otáčajte, laďte, počúvajte",
      "Stvorená pre auto: CarPlay, ovládanie na volante, šesť predvolieb",
      "Zadarmo. Bez reklám, bez účtu.",
    ],
    shotsLabel: "Snímky obrazovky aplikácie",
    storeLabel: "Stiahnuť aplikáciu",
    getApple: "Stiahnuť z",
    getGoogle: "Získajte na",
    soonApple: "Už čoskoro v",
    storeHint: "k dispozícii v App Store a na Google Play",
    phoneRadioAlt:
      "Onde dallo Stretto na iPhone naležato, s teleskopickou anténou rádia a mapou Úžiny v pozadí",
    noteBefore: "Onde dallo Stretto je produkt LUTHOR Lab.",
    supportLabel: "Podpora",
    privacyLabel: "Súkromie a podmienky používania",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Ikona aplikácie Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto v Apple CarPlay",
    skylineAlt:
      "Panoráma Onde dallo Stretto — pamiatky Úžiny nad stupnicou FM s jantárovou ručičkou",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Aplikácia Onde dallo Stretto — naladená na 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Aplikácia Onde dallo Stretto — gombík na 88.4 FM, ONDE UNO, predvoľba 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Aplikácia Onde dallo Stretto — zoznam staníc, ktoré práve vysielajú",
      },
    ],
  },

  hr: {
    metaTitle: "Onde dallo Stretto — talijanski radio uživo, u vašem autu",
    metaDescription:
      "Onde dallo Stretto donosi pravi talijanski radio u vaš auto: glazba, glasovi, duh Italije — uživo i bez filtara. Okrećite gumb po pravom FM pojasu, zaustavite se na frekvenciji i slušajte. Proizvod LUTHOR Laba.",
    ogTitle: "Onde dallo Stretto — radijske postaje Sicilije i Kalabrije",
    ogDescription: "Dosta vam je uvijek istih playlista? Prebacite se na radio!",
    kicker: "LUTHOR Lab",
    lede: "Talijanski radio uživo, u vašem autu.",
    subhead: "Okrenite gumb. Italija se javlja.",
    lead: "Onde dallo Stretto donosi pravi talijanski radio na vašu kontrolnu ploču: glazba, glasovi, toplina Italije — uživo i bez filtara. Okrećite gumb po pravom FM pojasu, zaustavite se na frekvenciji i slušajte. Bez playlista, bez algoritama: samo radio kakav upravo svira u Italiji.",
    features: [
      "Pravi FM pojas: okrenite, ugodite, slušajte",
      "Stvorena za auto: CarPlay, komande na volanu, šest memoriranih postaja",
      "Besplatna. Bez reklama, bez računa.",
    ],
    shotsLabel: "Snimke zaslona aplikacije",
    storeLabel: "Preuzmite aplikaciju",
    getApple: "Preuzmite iz",
    getGoogle: "Dostupno na",
    soonApple: "Uskoro u",
    storeHint: "dostupna u App Storeu i na Google Playu",
    phoneRadioAlt:
      "Onde dallo Stretto na iPhoneu u vodoravnom položaju, s teleskopskom antenom radija i kartom Tjesnaca u pozadini",
    noteBefore: "Onde dallo Stretto proizvod je LUTHOR Laba.",
    supportLabel: "Podrška",
    privacyLabel: "Privatnost i uvjeti korištenja",
    privacyHref: "/onde-dallo-stretto/privacy",
    iconAlt: "Ikona aplikacije Onde dallo Stretto",
    carplayAlt: "Onde dallo Stretto na Apple CarPlayu",
    skylineAlt:
      "Panorama Onde dallo Stretto — znamenitosti Tjesnaca iznad FM skale s jantarnom kazaljkom",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Aplikacija Onde dallo Stretto — namještena na 106.8 FM, SEGNALE BLU",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Aplikacija Onde dallo Stretto — gumb na 88.4 FM, ONDE UNO, memorija 1",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Aplikacija Onde dallo Stretto — popis postaja koje upravo emitiraju",
      },
    ],
  },
};
