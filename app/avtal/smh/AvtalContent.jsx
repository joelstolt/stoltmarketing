"use client";

import { useState, useRef, useEffect } from "react";

const primary = "#1D4ED8";
const heading = "#0C0F1A";
const body = "#3B3F4A";
const muted = "#6B7280";
const base = "#F8F9FA";
const surface = "#FFFFFF";
const border = "#E5E7EB";
const green = "#059669";

function FadeIn({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.6s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Shield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function Clock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function Zap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={primary} stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const baseFeatures = [
  "Daglig backup av databas och filer",
  "Proaktiv säkerhetsövervakning",
  "Uptime monitoring med larm",
  "Staging-miljö för säkra uppdateringar",
];

const packages = [
  {
    name: "Bas",
    focus: "Grundtrygghet & drift",
    price: "1 500",
    hours: "0 timmar inkluderade",
    response: "2–14 dagar",
    maintenance: "Månadsvis genomgång",
    license: false,
    features: [
      "WordPress & plugin-underhåll månadsvis",
      "Support i mån av tid",
      "Alla grundfunktioner inkluderade",
    ],
    note: "Bricks Builder-licens (790 kr/år) faktureras separat.",
    popular: false,
  },
  {
    name: "Medium",
    focus: "Aktivt underhåll & prioriterad support",
    price: "6 500",
    hours: "10 timmar/mån",
    response: "1–2 arbetsdagar",
    maintenance: "Veckovis genomgång",
    license: true,
    features: [
      "10h dedikerad utvecklingstid",
      "Prioriterad support",
      "Veckovis säkerhet & uppdateringar",
      "Bricks Builder-licens ingår",
    ],
    note: null,
    popular: true,
  },
  {
    name: "Max",
    focus: "Strategisk tillväxt & högsta beredskap",
    price: "12 000",
    hours: "20 timmar/mån",
    response: "Ofta samma dag",
    maintenance: "Veckovis + proaktiv optimering",
    license: true,
    features: [
      "20h dedikerad utvecklingstid (värde 13 000 kr)",
      "Högsta prioritet på support",
      "Veckovis genomgång + prestanda",
      "Bricks Builder-licens ingår",
      "Proaktiv konverteringsoptimering",
    ],
    note: null,
    popular: false,
  },
];

const hourUsage = [
  "Utbyggnad av nya funktioner eller designjusteringar",
  "Uppdatering av produkter, banners eller kampanjmaterial",
  "Löpande hastighetsoptimering och konverteringsjusteringar",
];

export default function AvtalContent() {
  return (
    <div style={{
      fontFamily: "'DM Sans', system-ui, sans-serif",
      background: base,
      color: body,
      lineHeight: 1.7,
      minHeight: "100vh",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: ${primary}; color: #fff; }
        @media print {
          body { background: #fff !important; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* ═══ HEADER BANNER ═══ */}
      <div style={{
        background: `linear-gradient(135deg, ${heading} 0%, #1a2340 50%, #1e3a5f 100%)`,
        padding: "48px 24px 56px",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -60, right: -60, width: 250, height: 250, borderRadius: "50%",
          background: "rgba(29,78,216,0.15)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: -40, width: 180, height: 180, borderRadius: "50%",
          background: "rgba(29,78,216,0.08)", pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 999, fontSize: 12, fontWeight: 600,
              color: "#93C5FD", background: "rgba(29,78,216,0.2)",
              border: "1px solid rgba(29,78,216,0.3)", textTransform: "uppercase",
              letterSpacing: "0.08em", marginBottom: 20,
            }}>
              Förvaltningsavtal 2026
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 style={{
              fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800,
              lineHeight: 1.15, letterSpacing: "-0.025em",
            }}>
              Drift, Säkerhet & Utveckling
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p style={{ marginTop: 12, fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
              Ett aktivt förvaltningsavtal som säkerställer att er e-handelsplattform är tekniskt optimerad, säker och i ständig tillväxt.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div style={{
              marginTop: 24, display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px", borderRadius: 12,
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 14, fontWeight: 600,
            }}>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>Kund:</span>
              <span>SMH, KYH och Hermods</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ═══ CONTENT ═══ */}
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px" }}>

        {/* ── Grundläggande standard ── */}
        <FadeIn>
          <section style={{ marginTop: 48, padding: 32, background: surface, borderRadius: 20, border: `1px solid ${border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(29,78,216,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Shield />
              </div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: heading, letterSpacing: "-0.01em" }}>Grundläggande teknisk standard</h2>
                <p style={{ fontSize: 13, color: muted }}>Gäller samtliga nivåer</p>
              </div>
            </div>

            <p style={{ fontSize: 15, color: body, marginBottom: 20, maxWidth: 600 }}>
              För att er webbshop ska prestera optimalt dygnet runt ingår följande i alla paket:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              {baseFeatures.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: base, borderRadius: 10, fontSize: 14, color: body }}>
                  <Check /> {f}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── Paketen ── */}
        <FadeIn delay={0.06}>
          <h2 style={{ marginTop: 48, fontSize: 28, fontWeight: 800, color: heading, letterSpacing: "-0.02em", textAlign: "center" }}>
            Förvaltningsnivåer
          </h2>
          <p style={{ textAlign: "center", fontSize: 15, color: muted, marginTop: 8 }}>
            Välj den nivå som passar ert behov och ambitionsnivå.
          </p>
        </FadeIn>

        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={i * 0.06 + 0.1}>
              <div style={{
                position: "relative", height: "100%", padding: 28, background: surface, borderRadius: 20,
                border: pkg.popular ? `2px solid ${primary}` : `1px solid ${border}`,
                boxShadow: pkg.popular ? "0 4px 20px rgba(29,78,216,0.08)" : "0 1px 3px rgba(0,0,0,0.03)",
                display: "flex", flexDirection: "column",
              }}>
                {pkg.popular && (
                  <span style={{
                    position: "absolute", top: -12, left: 28,
                    fontSize: 11, fontWeight: 700, color: "#fff", background: primary,
                    padding: "4px 14px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.06em",
                  }}>Rekommenderad</span>
                )}

                <div style={{ fontSize: 13, fontWeight: 600, color: primary, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {pkg.name}
                </div>
                <div style={{ fontSize: 13, color: muted, marginTop: 2 }}>{pkg.focus}</div>

                <div style={{ marginTop: 16, display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontSize: 36, fontWeight: 800, color: heading, letterSpacing: "-0.02em" }}>{pkg.price}</span>
                  <span style={{ fontSize: 15, color: muted }}>kr/mån</span>
                </div>

                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: body }}>
                    <Clock />
                    <div>
                      <div style={{ fontWeight: 600 }}>Svarstid</div>
                      <div style={{ color: muted }}>{pkg.response}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: body }}>
                    <Zap />
                    <div>
                      <div style={{ fontWeight: 600 }}>Inkluderade timmar</div>
                      <div style={{ color: muted }}>{pkg.hours}</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 20, borderTop: `1px solid ${border}`, paddingTop: 16, flex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {pkg.features.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: body }}>
                        <span style={{ marginTop: 2 }}><Check /></span> {f}
                      </div>
                    ))}
                  </div>
                </div>

                {pkg.note && (
                  <p style={{ marginTop: 16, fontSize: 12, color: muted, fontStyle: "italic", paddingTop: 12, borderTop: `1px solid ${border}` }}>
                    {pkg.note}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── Definition av timmar ── */}
        <FadeIn>
          <section style={{ marginTop: 48, padding: 32, background: surface, borderRadius: 20, border: `1px solid ${border}` }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: heading, marginBottom: 8 }}>Definition av avsatta timmar</h2>
            <p style={{ fontSize: 15, color: body, marginBottom: 16 }}>
              Timmarna i Medium och Max är dedikerad tid reserverad för er. De kan användas till:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {hourUsage.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: body }}>
                  <Check /> {item}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── Priser ── */}
        <FadeIn>
          <section style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ padding: 28, background: surface, borderRadius: 20, border: `1px solid ${border}`, textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>Konsulttimme</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: heading, marginTop: 8 }}>650 <span style={{ fontSize: 16, color: muted, fontWeight: 500 }}>kr/h</span></div>
              <div style={{ fontSize: 13, color: muted, marginTop: 4 }}>Vardagar 07:00–17:00</div>
            </div>
            <div style={{ padding: 28, background: surface, borderRadius: 20, border: `1px solid ${border}`, textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>Akut jourtid</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: heading, marginTop: 8 }}>1 300 <span style={{ fontSize: 16, color: muted, fontWeight: 500 }}>kr/h</span></div>
              <div style={{ fontSize: 13, color: muted, marginTop: 4 }}>Kritiska fel efter kl. 17:00</div>
            </div>
          </section>
        </FadeIn>

        {/* ── Varför ── */}
        <FadeIn>
          <section style={{
            marginTop: 48, marginBottom: 64, padding: 40, borderRadius: 20, textAlign: "center",
            background: `linear-gradient(135deg, ${heading} 0%, #1a2340 50%, #1e3a5f 100%)`,
            color: "#fff", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%",
              background: "rgba(29,78,216,0.12)", pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Varför välja ett aktivt avtal?
              </h2>
              <p style={{ marginTop: 16, fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.75 }}>
                Webbshoppar som SMH, KYH och Hermods kräver ständig tillsyn för att inte tappa fart.
                Genom avsatta timmar säkerställer ni att sajten inte bara överlever — utan faktiskt
                utvecklas i takt med marknaden. Ni får en trygg partner som känner er kodbas och
                som kan agera snabbt när möjligheter dyker upp.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* ── Footer ── */}
        <div style={{ borderTop: `1px solid ${border}`, padding: "24px 0 40px", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: muted }}>
            Stolt Marketing · joel@stoltmarketing.se · Hässleholm, Sverige
          </p>
        </div>
      </div>
    </div>
  );
}
