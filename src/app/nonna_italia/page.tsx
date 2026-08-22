import type { Metadata } from "next";

import NonnaProduct from "./NonnaProduct";
import {
  NONNA_LANGUAGE_ALTERNATES,
  NONNA_OG_IMAGE,
  NONNA_OG_LOCALES,
  NONNA_STRINGS,
} from "./content";

const t = NONNA_STRINGS.en;

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
    locale: NONNA_OG_LOCALES.en,
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

export default function NonnaItaliaPage() {
  return <NonnaProduct locale="en" />;
}
