import Link from "next/link";
import type { ReactNode } from "react";

import "./lab.css";

export const LAB_CONTACT_EMAIL = "info@luthoradvisory.com";

/* Shared chrome for the LUTHOR Lab marketing pages. Pure presentational
   server components — no auth, no Supabase, statically generated. */

export function LabNav() {
  return (
    <nav className="lab-nav">
      <div className="lab-wrap lab-nav-inner">
        <Link href="/" className="lab-logo-mark" aria-label="LUTHOR Lab home">
          L<span className="lab-logo-word">Lab</span>
        </Link>
        <span className="lab-nav-spacer" />
        <Link href="/about" className="lab-nav-link">
          About
        </Link>
      </div>
    </nav>
  );
}

export function LabFooter({ note }: { note?: ReactNode }) {
  return (
    <footer className="lab-footer">
      <div className="lab-wrap lab-footer-top">
        <Link href="/" className="lab-footer-logo" aria-label="LUTHOR Lab home">
          L
        </Link>
        <p className="lab-footer-links">
          <Link href="/">Lab</Link> ·{" "}
          <a href={`mailto:${LAB_CONTACT_EMAIL}`}>{LAB_CONTACT_EMAIL}</a> · ©
          2026 Luthor Advisory · Luxembourg
        </p>
      </div>
      {note ? (
        <div className="lab-wrap">
          <p className="lab-footer-note">{note}</p>
        </div>
      ) : null}
    </footer>
  );
}

export const RISKPRO_APP_STORE_URL =
  "https://apps.apple.com/us/app/riskpro/id1476150467";

export const RISKPRO_GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.cusmanodev.riskpro";

/**
 * Store buttons — markup/asset structure reused from the iMeditazione site
 * (icon + two-line label pill), restyled with the Lab design tokens.
 * Until launch `storeUrl` is null and the badge shows a "Coming soon" pill.
 */
export function AppStoreBadge({
  storeUrl = null,
  soonLabel = "Coming soon to the",
}: {
  storeUrl?: string | null;
  soonLabel?: string;
}) {
  if (storeUrl) {
    return (
      <a
        className="lab-store-btn"
        href={storeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="lab-store-btn-icon" src="/lab/store-apple.png" alt="" />
        <span className="lab-store-btn-text">
          <small>Download on the</small>
          <strong>App Store</strong>
        </span>
      </a>
    );
  }
  return (
    <span className="lab-store-btn lab-store-btn--soon">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="lab-store-btn-icon" src="/lab/store-apple.png" alt="" />
      <span className="lab-store-btn-text">
        <small>{soonLabel}</small>
        <strong>App Store</strong>
      </span>
    </span>
  );
}

export function GooglePlayBadge({
  storeUrl = null,
  soonLabel = "Coming soon on",
}: {
  storeUrl?: string | null;
  soonLabel?: string;
}) {
  if (storeUrl) {
    return (
      <a
        className="lab-store-btn"
        href={storeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="lab-store-btn-icon"
          src="/lab/store-googleplay.png"
          alt=""
        />
        <span className="lab-store-btn-text">
          <small>Get it on</small>
          <strong>Google Play</strong>
        </span>
      </a>
    );
  }
  return (
    <span className="lab-store-btn lab-store-btn--soon">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="lab-store-btn-icon"
        src="/lab/store-googleplay.png"
        alt=""
      />
      <span className="lab-store-btn-text">
        <small>{soonLabel}</small>
        <strong>Google Play</strong>
      </span>
    </span>
  );
}
