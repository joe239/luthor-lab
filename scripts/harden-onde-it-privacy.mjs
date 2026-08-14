import fs from "node:fs";
import path from "node:path";

/**
 * Google Play opens /onde-dallo-stretto/it/privacy on mobile WebViews.
 * Strip Next.js client scripts from the exported HTML so the page cannot go
 * blank from a hydration/router failure, and mirror index.html for directory
 * requests. Content + CSS remain; the page is readable without JavaScript.
 *
 * Also reinforce the site-wide dark color-scheme lock in critical CSS so
 * Android/Xiaomi theme inversion cannot leave Lab ink on a forced light bg
 * before/without the main stylesheet.
 */
const privacyHtml = path.join(
  "out",
  "onde-dallo-stretto",
  "it",
  "privacy.html",
);

if (!fs.existsSync(privacyHtml)) {
  console.error(`harden-onde-it-privacy: missing ${privacyHtml}`);
  process.exit(1);
}

let html = fs.readFileSync(privacyHtml, "utf8");

html = html.replace(/<script\b[\s\S]*?<\/script>/gi, "");

html = html.replace(/<meta\s+name=["']color-scheme["'][^>]*>/gi, "");
html = html.replace(/<style\s+data-privacy-critical>[\s\S]*?<\/style>/gi, "");

const critical = [
  '<meta name="color-scheme" content="dark">',
  "<style data-privacy-critical>",
  "html{color-scheme:dark;background-color:#131415;color:#ebe8de}",
  "body,.lab-root,.lab-main,.lab-prose,.lab-footer{",
  "background-color:#131415;color:#ebe8de;margin:0",
  "}",
  ".lab-nav{background-color:#131415;color:#ebe8de}",
  ".lab-prose a,a[href^=mailto]{color:#7a9e8e}",
  "</style>",
].join("");

html = html.replace("</head>", `${critical}</head>`);

fs.writeFileSync(privacyHtml, html);

const privacyDir = path.join("out", "onde-dallo-stretto", "it", "privacy");
fs.mkdirSync(privacyDir, { recursive: true });
fs.writeFileSync(path.join(privacyDir, "index.html"), html);

console.log(
  "harden-onde-it-privacy: wrote script-free privacy.html and privacy/index.html",
);
