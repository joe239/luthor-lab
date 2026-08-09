"use client";

import { useLayoutEffect } from "react";

import { ONDE_LANG_STORAGE_KEY, ONDE_LOCALES } from "./content";

function chooseLocale(): string {
  try {
    const stored = localStorage.getItem(ONDE_LANG_STORAGE_KEY);
    if (stored && (ONDE_LOCALES as string[]).includes(stored)) {
      return stored;
    }
  } catch {
    /* storage unavailable */
  }
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("it")) return "it";
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("de")) return "de";
  return "en";
}

/** Fallback when soft navigation skips the blocking <head> script. */
export default function OndeLocaleRedirect() {
  useLayoutEffect(() => {
    window.location.replace(`/onde-dallo-stretto/${chooseLocale()}`);
  }, []);

  return null;
}
