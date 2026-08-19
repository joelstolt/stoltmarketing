"use client";

import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/local/data";

/**
 * Personkort för Joel — foto, namn, tel, mejl.
 * onGul: mörkt kort mot rapsgul sektion. compact: smal sidokolumn.
 */
export default function JoelCard({ compact = false, onGul = false }) {
  const photo = compact ? 56 : 64;
  return (
    <div
      className={onGul ? "" : "bg-surface border border-border"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: compact ? 14 : 16,
        padding: compact ? "16px 16px" : "18px 18px",
        borderRadius: 10,
        ...(onGul
          ? {
              background: "#161309",
              border: "1px solid rgba(25,20,5,0.18)",
            }
          : {}),
      }}
    >
      <img
        src="/joel-stolt.webp"
        alt="Joel Stolt"
        width={photo}
        height={photo}
        style={{
          width: photo,
          height: photo,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #F2C230",
          flexShrink: 0,
        }}
      />
      <div style={{ minWidth: 0 }}>
        <div
          className="font-heading"
          style={{
            fontWeight: 600,
            fontSize: compact ? 15 : 16,
            color: onGul ? "#F2ECDD" : "var(--color-heading)",
            letterSpacing: "-0.01em",
          }}
        >
          {SITE.founder}
        </div>
        <div
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 12,
            color: onGul ? "rgba(242,236,221,0.55)" : "var(--color-muted)",
            marginTop: 2,
          }}
        >
          Stolt Marketing · {SITE.baseCity}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }}>
          <a
            href={SITE.phoneHref}
            data-umami-event="cta-telefon"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: "#F2C230",
              textDecoration: "none",
            }}
          >
            <Phone size={13} />
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 500,
              color: onGul ? "rgba(242,236,221,0.78)" : "var(--color-body)",
              textDecoration: "none",
            }}
          >
            <Mail size={13} />
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}
