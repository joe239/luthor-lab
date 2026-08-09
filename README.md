# LUTHOR Lab — standalone static site

A standalone static replica of the LUTHOR Lab pages from the main LUTHOR site
(luthoradvisory.com). Next.js App Router + TypeScript, exported as fully
static HTML — no auth, no database, no API routes, no environment variables.

## Routes

| This site             | Source page on luthoradvisory.com |
| --------------------- | --------------------------------- |
| `/`                   | `/lab`                            |
| `/riskpro`            | `/lab/riskpro`                    |
| `/riskpro/privacy`    | `/lab/riskpro/privacy`            |
| `/onde-dallo-stretto` | — (Lab-only, self-canonical)      |

Pages replicated from the main site carry a canonical link tag pointing to
the corresponding `luthoradvisory.com` URL. `/onde-dallo-stretto` exists only
here and is canonical to `https://luthorlab.com/onde-dallo-stretto`.

## Development

```bash
npm install
npm run dev
```

## Static export

```bash
npm run build
```

The fully static site is emitted to `out/`. Serve it with any static file
host.

## Notes

- Markup, copy, styles (`src/components/lab/lab.css`) and assets
  (`public/lab/`) are copied verbatim from the source repo.
- Fonts (Sora, DM Sans, JetBrains Mono) are loaded from Google Fonts via
  `<link>` tags, exactly as the source site does.
- Tailwind v4 is included only for its preflight/base layer, matching the
  source site's `globals.css`.
