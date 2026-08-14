import fs from "node:fs";
import path from "node:path";

/**
 * Google Play opens /onde-dallo-stretto/it/privacy on mobile WebViews.
 * Strip Next.js client scripts from the exported HTML so the page cannot go
 * blank from a hydration/router failure, and mirror index.html for directory
 * requests. Content + CSS remain; the page is readable without JavaScript.
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

if (!html.includes("data-privacy-critical")) {
  html = html.replace(
    "</head>",
    '<style data-privacy-critical>html,body{background:#131415;color:#ebe8de;margin:0}</style></head>',
  );
}

fs.writeFileSync(privacyHtml, html);

const privacyDir = path.join("out", "onde-dallo-stretto", "it", "privacy");
fs.mkdirSync(privacyDir, { recursive: true });
fs.writeFileSync(path.join(privacyDir, "index.html"), html);

console.log(
  "harden-onde-it-privacy: wrote script-free privacy.html and privacy/index.html",
);
