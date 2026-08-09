"use client";

import {
  ONDE_LANG_LABELS,
  ONDE_LANG_STORAGE_KEY,
  ONDE_LOCALES,
  type OndeLocale,
} from "./content";

export default function OndeLangSwitcher({
  current,
}: {
  current: OndeLocale;
}) {
  return (
    <div className="onde-langs" aria-label="Language">
      {ONDE_LOCALES.map((code) =>
        code === current ? (
          <span key={code} className="onde-lang onde-lang--active">
            {ONDE_LANG_LABELS[code]}
          </span>
        ) : (
          <a
            key={code}
            href={`/onde-dallo-stretto/${code}`}
            className="onde-lang"
            onClick={() => {
              try {
                localStorage.setItem(ONDE_LANG_STORAGE_KEY, code);
              } catch {
                /* storage unavailable — navigation still works */
              }
            }}
          >
            {ONDE_LANG_LABELS[code]}
          </a>
        ),
      )}
    </div>
  );
}
