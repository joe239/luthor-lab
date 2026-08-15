import type { Metadata } from "next";

import NonnaProduct from "../NonnaProduct";
import { NONNA_STRINGS } from "../content";

const t = NONNA_STRINGS.it;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: t.canonical,
  },
};

export const dynamic = "force-static";

/* Italian product + privacy live under the static `it/` segment, matching the
   Onde layout (no dynamic [lang] — it would collide with it/privacy in the
   static export). */
export default function NonnaItaliaItPage() {
  return <NonnaProduct locale="it" />;
}
