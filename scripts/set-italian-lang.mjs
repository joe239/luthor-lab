import fs from "node:fs";
import path from "node:path";

/**
 * The root layout hardcodes <html lang="en">; with output: "export" it cannot
 * vary per route. Rewrite the exported Italian routes to lang="it" so Chrome
 * stops offering translation. Runs before harden-onde-it-privacy.mjs, which
 * copies the already-fixed privacy.html into privacy/index.html.
 */
const ITALIAN_PAGES = [
  path.join("out", "onde-dallo-stretto", "it.html"),
  path.join("out", "onde-dallo-stretto", "it", "privacy.html"),
];

for (const file of ITALIAN_PAGES) {
  if (!fs.existsSync(file)) {
    console.error(`set-italian-lang: missing ${file}`);
    process.exit(1);
  }
  const html = fs.readFileSync(file, "utf8");
  const fixed = html.replace('<html lang="en"', '<html lang="it"');
  if (fixed === html) {
    console.error(`set-italian-lang: no <html lang="en"> found in ${file}`);
    process.exit(1);
  }
  fs.writeFileSync(file, fixed);
}

console.log(`set-italian-lang: set lang="it" on ${ITALIAN_PAGES.length} pages`);
