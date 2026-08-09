import type { Metadata } from "next";

import OndeContent from "./OndeContent";

export const metadata: Metadata = {
  title: "Onde dallo Stretto — Messina's FM dial, wherever you live",
  description:
    "Onde dallo Stretto is an Italian radio app that works like a real car radio: you turn through the FM dial, and the stations you pick up are the ones you would receive driving around Messina. A LUTHOR Lab product.",
  alternates: {
    canonical: "https://luthorlab.com/onde-dallo-stretto",
  },
};

export const dynamic = "force-static";

export default function OndeDalloStrettoPage() {
  return <OndeContent />;
}
