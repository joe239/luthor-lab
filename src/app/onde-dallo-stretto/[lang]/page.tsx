import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ONDE_LOCALES, ONDE_STRINGS, type OndeLocale } from "../content";
import OndeProduct from "../OndeProduct";

export const dynamic = "force-static";

export function generateStaticParams() {
  return ONDE_LOCALES.map((lang) => ({ lang }));
}

function isOndeLocale(lang: string): lang is OndeLocale {
  return (ONDE_LOCALES as string[]).includes(lang);
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
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `https://luthorlab.com/onde-dallo-stretto/${lang}`,
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
