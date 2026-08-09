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

export type OndeStrings = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  lede: string;
  subhead: string;
  lead: string;
  features: string[];
  shotsLabel: string;
  storeLabel: string;
  soonApple: string;
  soonGoogle: string;
  storeHint: string;
  noteBefore: string;
  supportLabel: string;
  privacyLabel: string;
  iconAlt: string;
  shots: OndeShot[];
};

export const ONDE_STRINGS: Record<OndeLocale, OndeStrings> = {
  it: {
    metaTitle: "Onde dallo Stretto — la radio di Messina, ovunque tu sia",
    metaDescription:
      "Onde dallo Stretto è una radio italiana che funziona come una vera autoradio. Per gli italiani lontani da casa: radio nazionali e voci locali, sulla banda FM con Messina e lo Stretto come riferimento. Un prodotto LUTHOR Lab.",
    kicker: "LUTHOR Lab",
    lede: "Una radio italiana che funziona come una vera autoradio.",
    subhead: "",
    lead: "Giri la manopola sulla banda FM, ti fermi su una frequenza e ascolti. Pensata per gli italiani che vivono lontano da casa: le grandi radio nazionali e le voci locali, sulla banda FM come la ricorderesti guidando in Italia — con Messina e lo Stretto come riferimento.",
    features: [],
    shotsLabel: "Schermate dell'app",
    storeLabel: "Scarica l'app",
    soonApple: "In arrivo su",
    soonGoogle: "In arrivo su",
    storeHint: "non è ancora negli store — in arrivo",
    noteBefore: "Onde dallo Stretto è un prodotto LUTHOR Lab.",
    supportLabel: "Supporto",
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
    metaTitle: "Onde dallo Stretto — live Italian radio, in your car",
    metaDescription:
      "Onde dallo Stretto brings real Italian radio to your dashboard: the music, the voices, the warmth of Italy — live and unfiltered. Turn the dial across a real FM band, stop on a frequency, and listen. A LUTHOR Lab product.",
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
    soonGoogle: "Coming soon on",
    storeHint: "not in the stores yet — coming soon",
    noteBefore: "Onde dallo Stretto is a LUTHOR Lab product.",
    supportLabel: "Support",
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
    metaTitle: "Onde dallo Stretto — イタリアのラジオを、そのまま車の中へ",
    metaDescription:
      "Onde dallo Stretto は、イタリアのラジオをライブのまま届けます。音楽も、声も、街の空気も、放送そのまま。本物のFMバンドをダイヤルで回り、周波数に止まって、耳を傾ける——いまイタリアで流れているラジオです。LUTHOR Lab のプロダクト。",
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
    metaTitle: "Onde dallo Stretto — la radio italienne en direct, dans votre voiture",
    metaDescription:
      "Onde dallo Stretto fait entrer la vraie radio italienne dans votre voiture : la musique, les voix, l'art de vivre italien — en direct et sans filtre. Tournez sur une vraie bande FM, arrêtez-vous sur une fréquence et écoutez. Un produit LUTHOR Lab.",
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
    metaTitle: "Onde dallo Stretto — Italienisches Radio, live in deinem Auto",
    metaDescription:
      "Onde dallo Stretto bringt echtes italienisches Radio in dein Auto: die Musik, die Stimmen, das Lebensgefühl Italiens — live und ungefiltert. Dreh über ein echtes FM-Band, bleib auf einer Frequenz stehen und hör zu. Ein Produkt von LUTHOR Lab.",
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
