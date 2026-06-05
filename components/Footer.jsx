"use client";

import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { CITY_ORDER, CITIES, SERVICE_ORDER, SERVICES } from "@/lib/local/data";

const services = [
  { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
  { label: "E-handel", href: "/tjanster/e-handel" },
  { label: "WordPress-hemsida", href: "/tjanster/wordpress" },
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

const linkStyle = {
  fontSize: 14,
  color: "#3B3F4A",
  textDecoration: "none",
  transition: "color 0.2s",
};
const hover = (e) => (e.currentTarget.style.color = "#1D4ED8");
const unhover = (e) => (e.currentTarget.style.color = "#3B3F4A");

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
            Digital byrå i Hässleholm med 10+ års erfarenhet. Moderna hemsidor,
            e-handel, SEO, Google Ads och AI-automation — med enterprise-kvalitet
            till företag i hela Skåne och Sverige.
          </p>

          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="mailto:joel@stoltmarketing.se"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#3B3F4A", textDecoration: "none" }}
            >
              <Mail size={15} color="#1D4ED8" />
              joel@stoltmarketing.se
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#3B3F4A" }}>
              <MapPin size={15} color="#1D4ED8" />
              Hässleholm, Skåne
            </div>
          </div>

          <Link
            href="/boka"
            className="premium-btn"
            style={{ marginTop: 20, fontSize: 13, padding: "10px 20px", display: "inline-flex" }}
          >
            Boka kostnadsfri genomgång
          </Link>
        </div>

        {/* Col 2: Tjänster */}
        <div>
          <p style={colHeading}>Tjänster</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {services.map((link) => (
              <Link key={link.href} href={link.href} style={linkStyle} onMouseEnter={hover} onMouseLeave={unhover}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Företaget */}
        <div>
          <p style={colHeading}>Företaget</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {company.map((link) => (
              <Link key={link.href} href={link.href} style={linkStyle} onMouseEnter={hover} onMouseLeave={unhover}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4: Orter */}
        <div>
          <p style={colHeading}>Orter i Skåne</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {CITY_ORDER.map((c) => (
              <Link key={c} href={CITIES[c].hub} style={{ ...linkStyle, fontWeight: 600 }} onMouseEnter={hover} onMouseLeave={unhover}>
                {SERVICES.hemsida.label} & SEO {CITIES[c].name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Lokalt-band: alla ort × tjänst-länkar för synlighet och crawl */}
      <div style={{ borderTop: "1px solid #F0F0EC" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "32px 20px 8px" }}>
          <p style={{ ...colHeading, marginBottom: 20 }}>Webbyrå, SEO, Google Ads & AI i Skåne</p>
          <div
            className="footer-local-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 28 }}
          >
            {CITY_ORDER.map((c) => (
              <div key={c}>
                <Link
                  href={CITIES[c].hub}
                  className="font-heading"
                  style={{ fontSize: 14, fontWeight: 700, color: "#0C0F1A", textDecoration: "none", display: "block", marginBottom: 12 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#0C0F1A")}
                >
                  {CITIES[c].name}
                </Link>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {SERVICE_ORDER.map((s) => (
                    <Link
                      key={s}
                      href={`/${c}/${s}`}
                      style={{ fontSize: 13, color: "#6B7280", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
                    >
                      {SERVICES[s].label} {CITIES[c].name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #F0F0EC", padding: "20px 20px", marginTop: 24 }}>
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
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href="https://kvota.se"
              target="_blank"
              rel="noopener"
              style={{ fontSize: 13, color: "#9CA3AF", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              Kvota.se
            </a>
            <span style={{ fontSize: 13, color: "#9CA3AF" }}>Svar inom 24h på vardagar</span>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-local-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </footer>
  );
}

const colHeading = {
  fontSize: 12,
  fontWeight: 700,
  color: "#9CA3AF",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: 16,
};
