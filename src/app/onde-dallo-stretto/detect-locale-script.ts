import { ONDE_LANG_STORAGE_KEY, ONDE_LOCALES } from "./content";

/* Static export cannot negotiate Accept-Language on the server. This runs in
   <head> on every full document load; it no-ops unless the path is exactly
   the Onde gate. Soft navigations do not re-run head scripts — callers must
   use a plain <a> (hard navigation) to /onde-dallo-stretto. */
export const ONDE_DETECT_LOCALE_SCRIPT = `(function () {
  var path = location.pathname.replace(/\\/+$/, "") || "/";
  if (path !== "/onde-dallo-stretto") return;
  var locales = ${JSON.stringify(ONDE_LOCALES)};
  var key = ${JSON.stringify(ONDE_LANG_STORAGE_KEY)};
  var chosen = null;
  try {
    var stored = localStorage.getItem(key);
    if (stored && locales.indexOf(stored) !== -1) chosen = stored;
  } catch (e) {}
  if (!chosen) {
    var nav = (navigator.language || "").toLowerCase();
    if (nav.indexOf("it") === 0) chosen = "it";
    else if (nav.indexOf("ja") === 0) chosen = "ja";
    else if (nav.indexOf("fr") === 0) chosen = "fr";
    else if (nav.indexOf("de") === 0) chosen = "de";
    else chosen = "en";
  }
  location.replace("/onde-dallo-stretto/" + chosen);
})();`;
