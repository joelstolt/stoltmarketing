"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { CITY_ORDER, CITIES, SERVICE_ORDER, SERVICES, SITE } from "@/lib/local/data";

const services = [
  { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
  { label: "Hemsida för företag", href: "/hemsida-foretag" },
  { label: "E-handel", href: "/tjanster/e-handel" },
  { label: "WordPress-hemsida", href: "/tjanster/wordpress" },
  { label: "SEO & Synlighet", href: "/tjanster/seo" },
  { label: "Google Ads", href: "/tjanster/google-ads" },
  { label: "Facebook-annonsering", href: "/tjanster/facebook-annonsering" },
  { label: "AI-synlighet", href: "/tjanster/ai-synlighet" },
  { label: "AI & Automation", href: "/tjanster/ai-automation" },
  { label: "Tillgänglighet & EAA", href: "/tillganglighet" },
  { label: "Managed hemsida", href: "/tjanster/managed-hemsida" },
  { label: "Alla tjänster", href: "/tjanster" },
];

const company = [
  { label: "Om mig", href: "/om" },
  { label: "Projekt", href: "/projekt" },
  { label: "Gratis sajtkoll", href: "/sajtkoll" },
  { label: "Guider", href: "/guider" },
  { label: "Blogg", href: "/blogg" },
  { label: "Guide: sökmotoroptimering", href: "/sokmotoroptimering" },
  { label: "Vad kostar en hemsida?", href: "/vad-kostar-en-hemsida" },
  { label: "Vad kostar SEO?", href: "/vad-kostar-seo" },
  { label: "Vad kostar Google Ads?", href: "/blogg/vad-kostar-google-ads" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Boka genomgång", href: "/boka" },
  { label: "Integritetspolicy", href: "/integritet" },
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
                color: "rgba(242,236,221,0.5)",
              }}
            >
              Marketing
            </span>
          </Link>
          <p style={{ fontSize: 14, color: "rgba(242,236,221,0.5)", lineHeight: 1.7, maxWidth: 300 }}>
            Digital byrå i Hässleholm med 10+ års erfarenhet. Moderna hemsidor,
            e-handel, SEO, Google Ads och AI-automation, med enterprise-kvalitet
            till företag i hela Skåne och Sverige.
          </p>

          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href={SITE.phoneHref}
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(242,236,221,0.65)", textDecoration: "none" }}
            >
              <Phone size={15} color="#F2C230" />
              {SITE.phone}
            </a>
            <a
              href="mailto:joel@stoltmarketing.se"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(242,236,221,0.65)", textDecoration: "none" }}
            >
              <Mail size={15} color="#F2C230" />
              joel@stoltmarketing.se
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(242,236,221,0.65)" }}>
              <MapPin size={15} color="#F2C230" />
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
                {SERVICES.hemsida.label} & SEO {CITIES[c].name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Lokalt-band: alla ort × tjänst-länkar för synlighet och crawl */}
      <div style={{ borderTop: "1px solid rgba(242,236,221,0.12)" }}>
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
                  style={{ fontSize: 14, fontWeight: 700, color: "#F2ECDD", textDecoration: "none", display: "block", marginBottom: 12 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F2C230")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F2ECDD")}
                >
                  {CITIES[c].name}
                </Link>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {SERVICE_ORDER.map((s) => (
                    <Link
                      key={s}
                      href={`/${c}/${s}`}
                      style={{ fontSize: 13, color: "rgba(242,236,221,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#F2C230")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,236,221,0.5)")}
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
          <span style={{ fontSize: 13, color: "rgba(242,236,221,0.4)" }}>
            © {new Date().getFullYear()} Stolt Marketing, webbyrå i Hässleholm &amp; Skåne för hemsidor, SEO, Google Ads och AI.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 13, color: "rgba(242,236,221,0.4)" }}>Svar inom 24h på vardagar</span>
            <a
              href="https://kvota.se"
              target="_blank"
              rel="noopener"
              style={{ fontSize: 13, color: "rgba(242,236,221,0.4)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F2C230")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,236,221,0.4)")}
            >
              Egen AI-produkt: Kvota.se
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
  color: "rgba(242,236,221,0.4)",
  textTransform: "uppercase",
  marginBottom: 16,
};
