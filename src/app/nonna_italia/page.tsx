import type { Metadata } from "next";

import NonnaProduct from "./NonnaProduct";
import { NONNA_STRINGS } from "./content";

const t = NONNA_STRINGS.en;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: t.canonical,
  },
};

export const dynamic = "force-static";

export default function NonnaItaliaPage() {
  return <NonnaProduct locale="en" />;
}
