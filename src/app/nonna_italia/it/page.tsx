import type { Metadata } from "next";

import NonnaProduct from "../NonnaProduct";
import { NONNA_OG_IMAGE, NONNA_OG_LOCALES, NONNA_STRINGS } from "../content";

const t = NONNA_STRINGS.it;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: t.canonical,
  },
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: t.canonical,
    locale: NONNA_OG_LOCALES.it,
    images: [{ ...NONNA_OG_IMAGE, alt: t.iconAlt }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const dynamic = "force-static";

/* Italian product + privacy live under the static `it/` segment, matching the
   Onde layout (no dynamic [lang] — it would collide with it/privacy in the
   static export). */
export default function NonnaItaliaItPage() {
  return <NonnaProduct locale="it" />;
}
