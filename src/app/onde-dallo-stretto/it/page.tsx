import type { Metadata } from "next";

import { ONDE_STRINGS } from "../content";
import OndeProduct from "../OndeProduct";

export const dynamic = "force-static";

const t = ONDE_STRINGS.it;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: "https://luthorlab.com/onde-dallo-stretto/it",
  },
};

/* Italian product + privacy live under the static `it/` segment so they do not
   share a dynamic `[lang]` param with nested routes (static-export conflict). */
export default function OndeItPage() {
  return <OndeProduct locale="it" />;
}
