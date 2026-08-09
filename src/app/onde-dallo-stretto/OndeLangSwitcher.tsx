"use client";

import { useEffect, useId, useRef, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="onde-langs" ref={rootRef}>
      <button
        type="button"
        className="onde-lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        {ONDE_LANG_LABELS[current]}
        <span className="onde-lang-caret" aria-hidden="true">
          ▾
        </span>
      </button>
      {open ? (
        <ul
          id={listId}
          className="onde-lang-menu"
          role="listbox"
          aria-label="Language"
        >
          {ONDE_LOCALES.map((code) => (
            <li key={code} role="option" aria-selected={code === current}>
              {code === current ? (
                <span className="onde-lang onde-lang--active">
                  {ONDE_LANG_LABELS[code]}
                </span>
              ) : (
                <a
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
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
