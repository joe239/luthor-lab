import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ONDE_EN_IT_LANGUAGE_ALTERNATES,
  ONDE_LOCALES,
  ONDE_OG_IMAGE,
  ONDE_OG_LOCALES,
  ONDE_STRINGS,
  type OndeLocale,
} from "../content";
import OndeProduct from "../OndeProduct";

export const dynamic = "force-static";

/* `it` is a static segment (`it/page.tsx` + `it/privacy`) so it is excluded
   here — nesting privacy under a dynamic `[lang]=it` collides in the export. */
const DYNAMIC_LOCALES = ONDE_LOCALES.filter((lang) => lang !== "it");

export function generateStaticParams() {
  return DYNAMIC_LOCALES.map((lang) => ({ lang }));
}

function isOndeLocale(lang: string): lang is OndeLocale {
  return (DYNAMIC_LOCALES as string[]).includes(lang);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isOndeLocale(lang)) {
    return {};
  }
  const t = ONDE_STRINGS[lang];
  const url = `https://luthorlab.com/onde-dallo-stretto/${lang}`;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: url,
      languages: lang === "en" ? ONDE_EN_IT_LANGUAGE_ALTERNATES : undefined,
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url,
      type: "website",
      locale: ONDE_OG_LOCALES[lang],
      images: [{ ...ONDE_OG_IMAGE, alt: t.shots[0].alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.ogTitle,
      description: t.ogDescription,
      images: [ONDE_OG_IMAGE.url],
    },
  };
}

export default async function OndeLangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isOndeLocale(lang)) {
    notFound();
  }
  return <OndeProduct locale={lang} />;
}
