import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://luthorlab.com";

const PUBLIC_ROUTES = [
  "/",
  "/nonna_italia",
  "/nonna_italia/it",
  "/nonna_italia/privacy",
  "/nonna_italia/it/privacy",
  "/onde-dallo-stretto",
  "/onde-dallo-stretto/en",
  "/onde-dallo-stretto/it",
  "/onde-dallo-stretto/fr",
  "/onde-dallo-stretto/de",
  "/onde-dallo-stretto/ja",
  "/onde-dallo-stretto/privacy",
  "/onde-dallo-stretto/it/privacy",
  "/riskpro",
  "/riskpro/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
