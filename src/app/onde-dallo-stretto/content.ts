/* Five language versions of the product page. These are not translations of
   one text: Italian carries the original "radio from home" positioning for
   people from Messina living away; the other languages present the app as a
   window on Italy, with the angle adapted to each audience. */

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

export type OndeStrings = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  lede: string;
  lead: string;
  shotsLabel: string;
  storeLabel: string;
  soonApple: string;
  soonGoogle: string;
  storeHint: string;
  noteBefore: string;
  privacyLabel: string;
  iconAlt: string;
  shots: OndeShot[];
};

export const ONDE_STRINGS: Record<OndeLocale, OndeStrings> = {
  it: {
    metaTitle: "Onde dallo Stretto — la radio di Messina, ovunque tu sia",
    metaDescription:
      "Onde dallo Stretto è una radio italiana che funziona come una vera autoradio: giri la manopola FM e prendi le stazioni che riceveresti guidando per Messina. Per i messinesi lontani da casa. Un prodotto LUTHOR Lab.",
    kicker: "LUTHOR Lab · Prodotto",
    lede: "Una radio italiana che funziona come una vera autoradio.",
    lead: "Giri la manopola sulla banda FM, ti fermi su una frequenza e ascolti. Le stazioni che prendi sono quelle che riceveresti guidando per Messina — le stesse frequenze, le stesse voci. Pensata per i messinesi che vivono lontano da casa.",
    shotsLabel: "Schermate dell'app",
    storeLabel: "Scarica l'app",
    soonApple: "In arrivo su",
    soonGoogle: "In arrivo su",
    storeHint: "non è ancora negli store — in arrivo",
    noteBefore: "Onde dallo Stretto è un prodotto LUTHOR Lab. Supporto:",
    privacyLabel: "Privacy e termini d'uso",
    iconAlt: "Icona dell'app Onde dallo Stretto",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "L'app Onde dallo Stretto — sintonizzata su 94.9 FM, Radio Empire",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "L'app Onde dallo Stretto — la manopola su 91.1 FM, Radio 24",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "L'app Onde dallo Stretto — l'elenco delle stazioni in onda adesso",
      },
    ],
  },
  en: {
    metaTitle: "Onde dallo Stretto — live Italian radio, made for the car",
    metaDescription:
      "Onde dallo Stretto plays live Italian radio the way a car radio does: turn through the FM dial and pick up the stations of Messina, Sicily — real Italian voices and real Italian music. A LUTHOR Lab product.",
    kicker: "LUTHOR Lab · Product",
    lede: "Live Italian radio, made for the car.",
    lead: "Turn through the FM dial, stop on a frequency, and listen. The stations are the ones you would pick up driving around Messina, Sicily — real Italian voices and real Italian music, live. An authentic slice of Italy, not a playlist.",
    shotsLabel: "App screenshots",
    storeLabel: "Get the app",
    soonApple: "Coming soon to the",
    soonGoogle: "Coming soon on",
    storeHint: "not in the stores yet — coming soon",
    noteBefore: "Onde dallo Stretto is a LUTHOR Lab product. Support:",
    privacyLabel: "Privacy & Terms of Use",
    iconAlt: "Onde dallo Stretto app icon",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Onde dallo Stretto app — tuned to 94.9 FM, Radio Empire",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Onde dallo Stretto app — turning the dial to 91.1 FM, Radio 24",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Onde dallo Stretto app — the list of stations on air right now",
      },
    ],
  },
  ja: {
    metaTitle: "Onde dallo Stretto — イタリアの生放送ラジオ",
    metaDescription:
      "Onde dallo Stretto は、イタリアのラジオをカーラジオのように聴くアプリ。FMダイヤルを回すと、シチリア・メッシーナの街を走りながら受信できる放送がそのまま流れる。LUTHOR Lab のプロダクト。",
    kicker: "LUTHOR Lab · プロダクト",
    lede: "イタリアの生放送ラジオを、カーラジオのように。",
    lead: "FMダイヤルを回し、周波数を合わせて、耳を傾ける。聞こえてくるのは、シチリア・メッシーナの街を車で走りながら受信できる放送そのもの。編集も演出もない、イタリアの声とイタリアの音楽が、そのまま届く。",
    shotsLabel: "アプリの画面",
    storeLabel: "アプリを入手",
    soonApple: "近日公開",
    soonGoogle: "近日公開",
    storeHint: "ストアではまだ配信されていません — 近日公開",
    noteBefore: "Onde dallo Stretto は LUTHOR Lab のプロダクトです。サポート:",
    privacyLabel: "プライバシーと利用規約",
    iconAlt: "Onde dallo Stretto のアプリアイコン",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Onde dallo Stretto — 94.9 FM、Radio Empire を受信中",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Onde dallo Stretto — ダイヤルを 91.1 FM、Radio 24 に",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Onde dallo Stretto — いま放送中の局の一覧",
      },
    ],
  },
  fr: {
    metaTitle: "Onde dallo Stretto — la vraie radio italienne",
    metaDescription:
      "Onde dallo Stretto fait écouter la radio italienne comme un autoradio : on tourne la molette FM et on capte les stations de Messine, en Sicile — des voix italiennes et de la musique italienne, en direct. Un produit LUTHOR Lab.",
    kicker: "LUTHOR Lab · Produit",
    lede: "La vraie radio italienne, pas une playlist.",
    lead: "Tournez la molette sur la bande FM, arrêtez-vous sur une fréquence, écoutez. Les stations sont celles que l'on capte en conduisant dans Messine, en Sicile — des voix italiennes et de la musique italienne, en direct. La radio comme là-bas, pensée pour la voiture.",
    shotsLabel: "Captures d'écran de l'app",
    storeLabel: "Télécharger l'app",
    soonApple: "Bientôt sur l'",
    soonGoogle: "Bientôt sur",
    storeHint: "pas encore sur les stores — bientôt disponible",
    noteBefore: "Onde dallo Stretto est un produit LUTHOR Lab. Assistance :",
    privacyLabel: "Confidentialité et conditions d'utilisation",
    iconAlt: "Icône de l'app Onde dallo Stretto",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "L'app Onde dallo Stretto — réglée sur 94.9 FM, Radio Empire",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "L'app Onde dallo Stretto — la molette sur 91.1 FM, Radio 24",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "L'app Onde dallo Stretto — la liste des stations à l'antenne",
      },
    ],
  },
  de: {
    metaTitle: "Onde dallo Stretto — italienisches Radio, live",
    metaDescription:
      "Onde dallo Stretto spielt italienisches Radio wie ein Autoradio: am FM-Regler drehen und die Sender von Messina auf Sizilien empfangen — italienische Stimmen und italienische Musik, live und unverändert. Ein Produkt von LUTHOR Lab.",
    kicker: "LUTHOR Lab · Produkt",
    lede: "Italienisches Radio, live — wie im Auto in Sizilien.",
    lead: "Am FM-Regler drehen, auf einer Frequenz anhalten, zuhören. Die Sender sind die, die man beim Fahren durch Messina auf Sizilien empfängt — italienische Stimmen und italienische Musik, live und unverändert, so wie sie in Italien wirklich läuft. Gemacht fürs Auto.",
    shotsLabel: "App-Screenshots",
    storeLabel: "App laden",
    soonApple: "Bald im",
    soonGoogle: "Bald bei",
    storeHint: "noch nicht in den Stores — bald verfügbar",
    noteBefore: "Onde dallo Stretto ist ein Produkt von LUTHOR Lab. Support:",
    privacyLabel: "Datenschutz & Nutzungsbedingungen",
    iconAlt: "App-Symbol von Onde dallo Stretto",
    shots: [
      {
        src: "/lab/onde-shot-dial.jpg",
        alt: "Die App Onde dallo Stretto — eingestellt auf 94.9 FM, Radio Empire",
      },
      {
        src: "/lab/onde-shot-tuning.jpg",
        alt: "Die App Onde dallo Stretto — der Regler auf 91.1 FM, Radio 24",
      },
      {
        src: "/lab/onde-shot-onair.jpg",
        alt: "Die App Onde dallo Stretto — die Liste der Sender, die gerade senden",
      },
    ],
  },
};
