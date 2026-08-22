import type { Metadata } from "next";

import NonnaProduct from "../NonnaProduct";
import {
  NONNA_LANGUAGE_ALTERNATES,
  NONNA_OG_IMAGE,
  NONNA_OG_LOCALES,
  NONNA_STRINGS,
} from "../content";

const t = NONNA_STRINGS.it;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: t.canonical,
    languages: NONNA_LANGUAGE_ALTERNATES,
  },
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: t.canonical,
    type: "website",
    locale: NONNA_OG_LOCALES.it,
    images: [{ ...NONNA_OG_IMAGE, alt: t.iconAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: t.metaTitle,
    description: t.metaDescription,
    images: [NONNA_OG_IMAGE.url],
  },
};

export const dynamic = "force-static";

/* Italian product + privacy live under the static `it/` segment, matching the
   Onde layout (no dynamic [lang] — it would collide with it/privacy in the
   static export). */
export default function NonnaItaliaItPage() {
  return <NonnaProduct locale="it" />;
}
