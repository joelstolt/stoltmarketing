"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { CITY_ORDER, CITIES, SITE } from "@/lib/local/data";

const services = [
  { label: "Förfrågningsrutan", href: "/forfragningar" },
  { label: "Hemsidor", href: "/hemsida-foretag" },
  { label: "SEO", href: "/tjanster/seo" },
  { label: "Google Ads", href: "/tjanster/google-ads" },
  { label: "Priser och paket", href: "/priser" },
  { label: "Alla tjänster", href: "/tjanster" },
];
const company = [
  { label: "Om Joel", href: "/om" },
  { label: "Kundprojekt", href: "/projekt" },
  { label: "Gratis sajtkoll", href: "/sajtkoll" },
  { label: "Guider", href: "/guider" },
  { label: "Blogg", href: "/blogg" },
  { label: "Kontakt", href: "/kontakt" },
];

const linkStyle = {
  fontFamily: "var(--font-ui)",
  fontSize: 13.5,
  color: "rgba(242,236,221,0.65)",
  textDecoration: "none",
  transition: "color 0.2s",
};
const hover = (e) => (e.currentTarget.style.color = "#F2C230");
const unhover = (e) => (e.currentTarget.style.color = "rgba(242,236,221,0.65)");

export default function Footer() {
  return (
    <footer className="hero-dark footer-natt">
      {/* Natthimlen: horisontlinje + stjärnor bakom innehållet */}
      <div className="footer-horisont" aria-hidden="true" />
      <div aria-hidden="true">
        {[
          [5, 14, 0], [11, 58, 1.4], [17, 26, 2.8], [24, 72, 0.7], [31, 10, 3.5],
          [39, 48, 1.1], [46, 22, 4.2], [54, 66, 2.1], [61, 36, 0.4], [69, 12, 3.1],
          [76, 55, 1.8], [83, 28, 4.6], [89, 68, 0.9], [94, 40, 2.5],
        ].map(([left, top, delay], i) => (
          <span
            key={i}
            className="footer-stjarna"
            style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${delay}s` }}
          />
        ))}
      </div>
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
            aria-label="Stolt Marketing, till startsidan"
            href="/"
            className="font-heading"
            style={{
              fontSize: 24,
              fontWeight: 600,
              fontVariationSettings: '"opsz" 100',
              letterSpacing: "-0.01em",
              color: "#F2ECDD",
              textDecoration: "none",
              display: "flex",
              alignItems: "baseline",
              gap: 9,
              marginBottom: 12,
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "baseline" }}>
              sto
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "0.115em",
                  height: "0.72em",
                  background: "#F2C230",
                  margin: "0 0.075em",
                }}
              />
              t
            </span>
            <span
              className="font-body"
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(242,236,221,0.65)",
              }}
            >
              Marketing
            </span>
          </Link>
          <p style={{ fontSize: 14, color: "rgba(242,236,221,0.65)", lineHeight: 1.7, maxWidth: 300 }}>
            Stolt Marketing i Hässleholm. Förfrågningar via hemsidan direkt till
            mobilen, hemsidor, SEO och Google Ads för hantverksföretag i hela Sverige.
          </p>

          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href={SITE.phoneHref}
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(242,236,221,0.65)", textDecoration: "none" }}
            >
              <Phone aria-hidden="true" size={15} color="#F2C230" />
              {SITE.phone}
            </a>
            <a
              href="mailto:joel@stoltmarketing.se"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(242,236,221,0.65)", textDecoration: "none" }}
            >
              <Mail aria-hidden="true" size={15} color="#F2C230" />
              joel@stoltmarketing.se
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(242,236,221,0.65)" }}>
              <MapPin aria-hidden="true" size={15} color="#F2C230" />
              Hässleholm, Skåne
            </div>
          </div>

          {/* Gårdslampan: det enda varma ljuset på natthimlen är vägen in */}
          <span className="gardslampa" style={{ display: "inline-block", marginTop: 20 }}>
            <Link
              href="/boka"
              className="premium-btn"
              style={{ fontSize: 13, padding: "10px 20px", display: "inline-flex" }}
            >
              Boka kostnadsfri genomgång
            </Link>
          </span>
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
                {CITIES[c].name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(242,236,221,0.12)", padding: "20px 20px", marginTop: 24 }}>
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
          <span style={{ fontSize: 13, color: "rgba(242,236,221,0.65)" }}>
            © {new Date().getFullYear()} Stolt Marketing i Hässleholm. Förfrågningar och hemsidor för hantverksföretag.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/integritet" style={linkStyle}>Integritet och personuppgifter</Link>
            <a
              href="https://kvota.se"
              target="_blank"
              rel="noopener"
              style={{ fontSize: 13, color: "rgba(242,236,221,0.65)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F2C230")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,236,221,0.65)")}
            >
              Egen AI-produkt: Kvota.se
            </a>
            <a
              href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.stoltmarketing.se%2F"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="pagespeed-sjalv"
              style={{ fontSize: 13, color: "rgba(242,236,221,0.62)", textDecoration: "none", marginLeft: 18 }}
            >
              Mät den här sajten själv
            </a>
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
  fontFamily: "var(--font-ui)",
  fontSize: 10.5,
  fontWeight: 600,
  letterSpacing: "0.24em",
  color: "rgba(242,236,221,0.65)",
  textTransform: "uppercase",
  marginBottom: 16,
};
