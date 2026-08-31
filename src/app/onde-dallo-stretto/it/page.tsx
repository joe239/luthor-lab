import type { Metadata } from "next";

import {
  ONDE_EN_IT_LANGUAGE_ALTERNATES,
  ONDE_OG_IMAGE,
  ONDE_OG_LOCALES,
  ONDE_STRINGS,
} from "../content";
import OndeProduct from "../OndeProduct";

export const dynamic = "force-static";

const t = ONDE_STRINGS.it;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: "https://luthorlab.com/onde-dallo-stretto/it",
    languages: ONDE_EN_IT_LANGUAGE_ALTERNATES,
  },
  openGraph: {
    title: t.ogTitle,
    description: t.ogDescription,
    url: "https://luthorlab.com/onde-dallo-stretto/it",
    type: "website",
    locale: ONDE_OG_LOCALES.it,
    images: [{ ...ONDE_OG_IMAGE, alt: t.shots[0].alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: t.ogTitle,
    description: t.ogDescription,
    images: [ONDE_OG_IMAGE.url],
  },
};

/* Italian product + privacy live under the static `it/` segment so they do not
   share a dynamic `[lang]` param with nested routes (static-export conflict). */
export default function OndeItPage() {
  return <OndeProduct locale="it" />;
}
