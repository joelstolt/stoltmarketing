"use client";

import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const services = [
  { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
  { label: "AI & Automation", href: "/tjanster/ai-automation" },
  { label: "SEO & Synlighet", href: "/tjanster/seo" },
  { label: "Google Ads", href: "/tjanster/google-ads" },
  { label: "Managed hemsida", href: "/tjanster/managed-hemsida" },
  { label: "Alla tjänster", href: "/tjanster" },
];

const company = [
  { label: "Om mig", href: "/om" },
  { label: "Projekt", href: "/projekt" },
  { label: "Blogg", href: "/blogg" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Boka genomgång", href: "/boka" },
  { label: "Integritetspolicy", href: "/integritet" },
];

const hassleholm = [
  { label: "Hemsida Hässleholm", href: "/hassleholm/hemsida" },
  { label: "SEO Hässleholm", href: "/hassleholm/seo" },
  { label: "Google Ads Hässleholm", href: "/hassleholm/google-ads" },
  { label: "AI & Automation", href: "/hassleholm/ai-automation" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #E5E5E0" }}>
      {/* Main footer */}
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "48px 20px 40px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 48,
        }}
        className="footer-grid"
      >
        {/* Col 1: Brand */}
        <div>
          <Link
            href="/"
            className="font-heading"
            style={{
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0C0F1A",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 3,
                height: 22,
                borderRadius: 2,
                background: "#1D4ED8",
                marginRight: 10,
                flexShrink: 0,
              }}
            />
            stolt marketing
          </Link>
          <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, maxWidth: 300 }}>
            Digital konsult med 10+ års erfarenhet. Moderna webbplatser,
            e-handel, AI-lösningar och SEO — med enterprise-kvalitet till
            småföretag i hela Sverige.
          </p>

          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="mailto:joel@stoltmarketing.se"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                color: "#3B3F4A",
                textDecoration: "none",
              }}
            >
              <Mail size={15} color="#1D4ED8" />
              joel@stoltmarketing.se
            </a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                color: "#3B3F4A",
              }}
            >
              <MapPin size={15} color="#1D4ED8" />
              Hässleholm, Sverige
            </div>
          </div>

          <Link
            href="/boka"
            className="premium-btn"
            style={{
              marginTop: 20,
              fontSize: 13,
              padding: "10px 20px",
              display: "inline-flex",
            }}
          >
            Boka kostnadsfri genomgång
          </Link>
        </div>

        {/* Col 2: Tjänster */}
        <div>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 16,
            }}
          >
            Tjänster
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {services.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  color: "#3B3F4A",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3B3F4A")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Företaget */}
        <div>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 16,
            }}
          >
            Företaget
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {company.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  color: "#3B3F4A",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3B3F4A")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4: Hässleholm */}
        <div>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 16,
            }}
          >
            Hässleholm
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {hassleholm.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  color: "#3B3F4A",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3B3F4A")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #F0F0EC",
          padding: "20px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, color: "#9CA3AF" }}>
            © {new Date().getFullYear()} Stolt Marketing. Alla rättigheter förbehållna.
          </span>
          <span style={{ fontSize: 13, color: "#9CA3AF" }}>
            Svar inom 24h på vardagar
          </span>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
