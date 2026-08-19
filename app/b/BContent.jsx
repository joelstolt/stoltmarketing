"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import FieldCanvas from "@/components/b/FieldCanvas";
import BFaq from "@/components/b/BFaq";
import { SITE } from "@/lib/local/data";

gsap.registerPlugin(ScrollTrigger, SplitText);

const BG = "#0F0D08";
const BG2 = "#161309";
const INK = "#191405";
const PAPER = "#F2ECDD";
const GUL = "#F2C230";
const DIM = "rgba(242,236,221,0.66)";
const LINE = "rgba(242,236,221,0.14)";

const services = [
  { i: "01", title: "Webbutveckling", desc: "Moderna sajter som konverterar", href: "/tjanster/webbutveckling" },
  { i: "02", title: "E-handel", desc: "Butiker byggda för att sälja", href: "/tjanster/e-handel" },
  { i: "03", title: "WordPress", desc: "Snabba, säkra WP-sidor", href: "/tjanster/wordpress" },
  { i: "04", title: "AI & Automation", desc: "Mejl & offerter som sköter sig själva", href: "/tjanster/ai-automation" },
  { i: "05", title: "SEO", desc: "Synlighet som ger fler kunder", href: "/tjanster/seo" },
  { i: "06", title: "Google Ads", desc: "Annonsering som ger resultat", href: "/tjanster/google-ads" },
  { i: "07", title: "Managed hemsida", desc: "Drift, underhåll, förbättringar", href: "/tjanster/managed-hemsida" },
];

const cases = [
  { client: "Niklassons Flytt", tag: "32 offertförfrågningar / 30 dgr", img: "/case-niklassonsflytt.webp", desc: "38 sidor över Skåne, och varje förfrågan mäts. Kunden sköter innehållet själv.", href: "/projekt/niklassonsflytt" },
  { client: "Arkipel Entreprenad", tag: "Bygg · Norrköping · 61 sidor", img: "/case-arkipel.webp", desc: "En sida per tjänst och ort, mot en branschmedian på 17. Så en byggfirma faktiskt hittas.", href: "/projekt/arkipel" },
  { client: "Premie Bygg", tag: "Bygg · Örebro · 47 sidor", img: "/case-premiebygg.webp", desc: "Formulärkedjan verifierad på riktigt, så offertförfrågningarna kommer fram.", href: "/projekt/premiebygg" },
  { client: "Norrlands Gräv & Transport", tag: "Entreprenad · Sundsvall · 69 sidor", img: "/case-ngtab.webp", desc: "Ett tyst canonical-fel tog bort sajten ur Google. Fixat, plus en sida per tjänst och ort.", href: "/projekt/ngtab" },
];

const clients = ["Niklassons Flytt", "Arkipel", "Premie Bygg", "NGTAB", "AcadeMedia", "RBN Utbildning", "Förskolan Harpan"];

const stats = [
  { target: 150, suffix: "+", label: "Levererade projekt" },
  { target: 10, suffix: "+", label: "Års erfarenhet" },
  { target: 24, suffix: "h", label: "Svarslöfte vardagar" },
];

function Wordmark({ color = "inherit", barColor = GUL }) {
  return (
    <span
      className="font-heading"
      style={{ display: "inline-flex", alignItems: "baseline", fontSize: 24, fontWeight: 600, color, fontVariationSettings: '"opsz" 100', letterSpacing: "-0.01em" }}
    >
      sto
      <span aria-hidden="true" style={{ display: "inline-block", width: "0.115em", height: "0.72em", background: barColor, margin: "0 0.075em" }} />
      t
    </span>
  );
}

export default function BContent() {
  const root = useRef(null);
  const trackRef = useRef(null);
  const caseSecRef = useRef(null);
  const magnetRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ── Hero-intro ── */
        const split = new SplitText(".b-h1", { type: "lines", mask: "lines", linesClass: "b-h1-line" });
        gsap
          .timeline({ defaults: { ease: "power3.out" }, onComplete: () => split.revert() })
          .from(".b-eyebrow-bar", { scaleX: 0, transformOrigin: "left center", duration: 0.7 }, 0.1)
          .from(".b-eyebrow-text", { opacity: 0, x: -12, duration: 0.6 }, 0.25)
          .from(split.lines, { yPercent: 115, duration: 1.0, stagger: 0.1 }, 0.35)
          .from(".b-sub, .b-ctas", { opacity: 0, y: 18, duration: 0.7, stagger: 0.12 }, 0.9)
          .from(".b-field", { opacity: 0, duration: 1.4, ease: "power1.inOut" }, 0.5)
          .from(".b-scrollcue", { opacity: 0, duration: 0.8 }, 1.4);

        gsap.to(".b-scrollcue-line", {
          scaleY: 0,
          transformOrigin: "bottom center",
          duration: 1.1,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });

        /* ── Manifest: ord färgas in vid scroll ── */
        const words = new SplitText(".b-manifest", { type: "words" }).words;
        gsap.fromTo(
          words,
          { color: "rgba(242,236,221,0.16)" },
          {
            color: PAPER,
            stagger: 0.04,
            ease: "none",
            scrollTrigger: { trigger: ".b-manifest", start: "top 78%", end: "bottom 45%", scrub: 0.4 },
          }
        );
        gsap.utils.toArray(".b-manifest .b-gulord").forEach((el) =>
          gsap.to(el, { color: GUL, scrollTrigger: { trigger: ".b-manifest", start: "bottom 50%", end: "bottom 40%", scrub: true } })
        );

        /* ── Tjänsterader in ── */
        gsap.from(".b-servicerow", {
          y: 36,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".b-services", start: "top 72%" },
        });

        /* ── Räknare ── */
        gsap.utils.toArray(".b-stat-num").forEach((el) => {
          const target = +el.dataset.target;
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            snap: { v: 1 },
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: () => (el.firstChild.textContent = Math.round(obj.v)),
          });
        });

        /* ── Citat ── */
        const qSplit = new SplitText(".b-quote-text", { type: "lines", mask: "lines" });
        gsap.from(qSplit.lines, {
          yPercent: 110,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".b-quote", start: "top 70%" },
          onComplete: () => qSplit.revert(),
        });

        /* ── Final ── */
        gsap.from(".b-final-inner > *", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".b-final", start: "top 70%" },
        });

        /* ── Case: horisontell pin (endast desktop) ── */
        mm.add("(min-width: 900px)", () => {
          const track = trackRef.current;
          const sec = caseSecRef.current;
          if (!track || !sec) return;
          const getX = () => -(track.scrollWidth - sec.clientWidth);
          gsap.to(track, {
            x: getX,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top top",
              end: () => `+=${track.scrollWidth - sec.clientWidth}`,
              pin: true,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  /* Magnetknapp i finalen */
  useEffect(() => {
    const btn = magnetRef.current;
    if (!btn || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(x, y);
      if (dist < 160) {
        gsap.to(btn, { x: x * 0.22, y: y * 0.22, duration: 0.4, ease: "power3.out" });
      } else {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div ref={root} style={{ background: BG }}>
      <style>{`
        .b-h1-line { will-change: transform; }
        .b-servicerow { position: relative; display: grid; grid-template-columns: 64px 1fr auto; align-items: baseline; gap: 20px; padding: 26px 8px; border-top: 1px solid ${LINE}; text-decoration: none; overflow: hidden; }
        .b-servicerow::before { content: ""; position: absolute; inset: 0; background: ${GUL}; transform: scaleY(0); transform-origin: bottom; transition: transform .38s cubic-bezier(.16,1,.3,1); }
        .b-servicerow:hover::before { transform: scaleY(1); }
        .b-servicerow > * { position: relative; transition: color .25s; }
        .b-servicerow .b-srv-title { color: ${PAPER}; }
        .b-servicerow .b-srv-i, .b-servicerow .b-srv-desc { color: rgba(242,236,221,0.45); }
        .b-servicerow .b-srv-arrow { color: rgba(242,236,221,0.35); transform: translateX(-8px); opacity: 0; transition: all .3s cubic-bezier(.16,1,.3,1); }
        .b-servicerow:hover .b-srv-title, .b-servicerow:hover .b-srv-i, .b-servicerow:hover .b-srv-desc { color: ${INK}; }
        .b-servicerow:hover .b-srv-arrow { color: ${INK}; transform: translateX(0); opacity: 1; }
        .b-marquee-inner { display: flex; gap: 56px; width: max-content; animation: b-scroll 36s linear infinite; }
        @keyframes b-scroll { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .b-marquee-inner { animation: none; } }
        .b-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 26px;
          font-family: var(--font-ui);
          font-weight: 600;
          font-size: 11.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border-radius: 3em;
          text-decoration: none;
          white-space: nowrap;
          color: #F2ECDD;
          background: #0F0D08;
          border: 1.5px solid rgba(242, 236, 221, 0.72);
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .b-cta-secondary:hover {
          background: #F2C230;
          border-color: #F2C230;
          color: #191405;
          transform: translateY(-1px);
        }
        .b-case-scroll { display: flex; gap: 28px; }
        @media (max-width: 899px) {
          .b-case-scroll { overflow-x: auto; scroll-snap-type: x proximity; scroll-padding-left: 24px; padding-bottom: 16px; -webkit-overflow-scrolling: touch; }
          .b-case-panel { scroll-snap-align: start; }
          .b-servicerow { grid-template-columns: 44px 1fr auto; padding: 20px 4px; }
        }
      `}</style>

      {/* Global header (Header.jsx) renderas av app/page.js ovanför denna komponent */}

      {/* ═══ 1. Hero, Fältet i mörker ═══ */}
      <section className="field-glow" style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", background: BG }}>
        <FieldCanvas className="b-field" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1120, width: "100%", margin: "0 auto", padding: "110px 24px 38vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <span className="b-eyebrow-bar" aria-hidden="true" style={{ width: 30, height: 2, background: GUL, display: "inline-block" }} />
            <span className="b-eyebrow-text" style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: GUL }}>
              Webbyrå i Skåne, något att vara stolt över
            </span>
          </div>
          <h1 className="b-h1 font-heading" style={{ fontWeight: 360, fontVariationSettings: '"opsz" 144', fontSize: "clamp(42px, 7.2vw, 104px)", lineHeight: 1.02, letterSpacing: "-0.025em", color: PAPER, maxWidth: "13ch", margin: 0 }}>
            Webbplatser, SEO och AI som ger ditt företag <span style={{ fontWeight: 640 }}>fler kunder</span><em style={{ fontStyle: "italic", color: GUL, fontWeight: 400 }}>.</em>
          </h1>
          <p className="b-sub" style={{ marginTop: 28, fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.75, color: DIM, maxWidth: 540 }}>
            Din nya sajt görs färdig innan du betalar ett öre: titta, klicka runt, bestäm sedan. Enterprise-kvalitet till småföretag, byggd av personen du pratar med.
          </p>
          <div className="b-ctas" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34, position: "relative", zIndex: 3 }}>
            <a href="/boka" className="premium-btn" data-umami-event="cta-hero-primar">
              Boka kostnadsfri genomgång <ArrowRight size={15} />
            </a>
            <a href="#tjanster" className="b-cta-secondary">Se tjänster</a>
          </div>
        </div>
        <div className="b-scrollcue" style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 9.5, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(242,236,221,0.4)", fontWeight: 600 }}>Skrolla</span>
          <span className="b-scrollcue-line" aria-hidden="true" style={{ width: 2, height: 34, background: GUL, display: "block", opacity: 0.6 }} />
        </div>
      </section>

      {/* ═══ Mörka partiet ═══ */}
      <div className="b-dark" style={{ background: BG }}>
        {/* 2. Manifest */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "16vh 24px 10vh" }}>
          <p className="b-manifest font-heading" style={{ fontWeight: 400, fontVariationSettings: '"opsz" 90', fontSize: "clamp(26px, 4vw, 52px)", lineHeight: 1.32, letterSpacing: "-0.01em", maxWidth: "24ch", margin: 0 }}>
            Inga mellanhänder. Inga projektledare på timpris. Du pratar direkt med mig, Joel Stolt, och resultatet ska vara <em className="b-gulord" style={{ fontStyle: "italic" }}>något att vara stolt över</em>.
          </p>
        </section>

        {/* 3. Tjänster */}
        <section id="tjanster" className="b-services" style={{ maxWidth: 1120, margin: "0 auto", padding: "8vh 24px" }}>
          <div className="sec-rule" style={{ marginBottom: 36 }}>
            <span className="sec-no" aria-hidden="true">01</span>
            <h2 className="sec-label" style={{ margin: 0, letterSpacing: "0.22em" }}>
              Synas, sälja och spara tid, allt under ett tak
            </h2>
            <span className="sec-eng" aria-hidden="true">tjänster</span>
          </div>
          <div style={{ borderBottom: `1px solid ${LINE}` }}>
            {services.map((s) => (
              <a key={s.i} href={s.href} className="b-servicerow">
                <span className="b-srv-i" style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em" }}>{s.i}</span>
                <span className="b-srv-title font-heading" style={{ fontWeight: 400, fontVariationSettings: '"opsz" 110', fontSize: "clamp(26px, 4.4vw, 54px)", letterSpacing: "-0.015em", lineHeight: 1.1 }}>
                  {s.title}
                  <span className="b-srv-desc" style={{ display: "block", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 13.5, marginTop: 6, letterSpacing: "0.02em" }}>{s.desc}</span>
                </span>
                <ArrowUpRight className="b-srv-arrow" size={30} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </section>

        {/* 4. Siffror */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "10vh 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ borderTop: `2px solid ${GUL}`, paddingTop: 18 }}>
                <div className="b-stat-num font-heading" data-target={s.target} style={{ fontWeight: 340, fontVariationSettings: '"opsz" 144', fontSize: "clamp(54px, 7vw, 92px)", lineHeight: 1, color: PAPER }}>
                  <span>0</span>
                  <span style={{ color: GUL, fontStyle: "italic" }}>{s.suffix}</span>
                </div>
                <div style={{ marginTop: 10, fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(242,236,221,0.5)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4b. Personen bakom: en person är poängen, inte ursäkten */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "4vh 24px 10vh" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px 40px", borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, padding: "34px 0" }}>
            <img
              src="/joel-stolt.webp"
              alt="Joel Stolt, personen som bygger, optimerar och svarar"
              loading="lazy"
              style={{ width: 104, height: 104, borderRadius: "50%", objectFit: "cover", border: `2px solid ${GUL}`, flexShrink: 0 }}
            />
            <div style={{ flex: "1 1 340px", minWidth: 280 }}>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: GUL, margin: "0 0 8px" }}>
                Personen bakom
              </p>
              <p className="font-heading" style={{ fontWeight: 420, fontVariationSettings: '"opsz" 100', fontSize: "clamp(20px, 2.6vw, 28px)", lineHeight: 1.35, color: PAPER, margin: 0, maxWidth: "26em" }}>
                Jag heter <em style={{ fontStyle: "italic", color: GUL }}>Joel Stolt</em>. Jag bygger själv, svarar själv och tar ansvar själv. Inget lämnas bort, ingen sitter emellan.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
              {["10+ år i branschen", "150+ levererade projekt", "Hässleholm, kunder i hela Sverige"].map((f) => (
                <span key={f} style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 500, color: "rgba(242,236,221,0.72)" }}>
                  <span aria-hidden="true" style={{ width: 5, height: 5, borderRadius: "50%", background: GUL, display: "inline-block" }} />
                  {f}
                </span>
              ))}
              <a href="/om" style={{ marginTop: 4, fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: GUL, textDecoration: "none" }}>
                Mer om mig &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* 5. Case, horisontellt */}
        <section ref={caseSecRef} style={{ overflow: "hidden", padding: "10vh 0" }}>
          <div className="sec-rule" style={{ maxWidth: 1120, margin: "0 auto 40px", padding: "0 24px", paddingBottom: "1.1em" }}>
            <span className="sec-no" aria-hidden="true">02</span>
            <h2 className="sec-label" style={{ margin: 0, letterSpacing: "0.22em" }}>
              Uppdrag som talar för sig själva
            </h2>
            <span className="sec-eng" aria-hidden="true">projekt</span>
          </div>
          <div ref={trackRef} className="b-case-scroll" style={{ paddingLeft: "max(24px, calc((100vw - 1120px) / 2))", paddingRight: 24 }}>
            {cases.map((c) => {
              const inner = (
                <>
                  <div style={{ border: `1px solid ${LINE}`, background: BG2, overflow: "hidden" }}>
                    <img src={c.img} alt={c.client} loading="lazy" style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", objectPosition: "top", display: "block", filter: "saturate(0.92)" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginTop: 18 }}>
                    <h3 className="font-heading" style={{ fontWeight: 560, fontVariationSettings: '"opsz" 110', fontSize: 26, color: PAPER, margin: 0 }}>{c.client}</h3>
                    <span style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: GUL, whiteSpace: "nowrap" }}>{c.tag}</span>
                  </div>
                  <p style={{ marginTop: 8, fontSize: 15, lineHeight: 1.65, color: DIM, maxWidth: 420 }}>{c.desc}</p>
                </>
              );
              return (
                <article key={c.client} className="b-case-panel" style={{ flexShrink: 0, width: "min(78vw, 560px)" }}>
                  {c.href ? (
                    <a href={c.href} aria-label={`Se hela caset: ${c.client}`} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </article>
              );
            })}
            <div style={{ flexShrink: 0, width: "min(60vw, 380px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <a href="/projekt" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 460, fontSize: 26, color: GUL, textDecoration: "none" }}>
                Se alla projekt <ArrowUpRight size={26} />
              </a>
            </div>
          </div>
        </section>

        {/* 6. Citat */}
        <section className="b-quote" style={{ maxWidth: 1120, margin: "0 auto", padding: "10vh 24px 12vh" }}>
          <span aria-hidden="true" className="font-heading" style={{ display: "block", fontSize: 110, lineHeight: 0.6, color: GUL, fontWeight: 500, marginBottom: 26 }}>”</span>
          <blockquote style={{ margin: 0 }}>
            <p className="b-quote-text font-heading" style={{ fontWeight: 380, fontVariationSettings: '"opsz" 90', fontStyle: "italic", fontSize: "clamp(22px, 3.2vw, 40px)", lineHeight: 1.4, color: PAPER, maxWidth: "30ch", margin: 0 }}>
              Vi behövde en helhetsleverans, ny grafisk profil, ny sajt och integration mot våra system. Joel levererade allt under en och samma kontakt.
            </p>
            <footer style={{ marginTop: 26, fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(242,236,221,0.5)" }}>
              Robin, RBN Utbildning
            </footer>
          </blockquote>
        </section>

        {/* 7. Marquee */}
        <div style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, background: BG2, padding: "30px 0 32px", overflow: "hidden" }} aria-hidden="true">
          <p style={{ textAlign: "center", fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(242,236,221,0.4)", margin: "0 0 22px" }}>
            Betrodd av företag i hela Sverige
          </p>
          <div className="b-marquee-inner">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 40 }}>
                <span className="font-heading" style={{ fontWeight: 380, fontStyle: "italic", fontSize: 34, color: "rgba(242,236,221,0.55)", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>{c}</span>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: GUL, display: "inline-block", flexShrink: 0 }} />
              </span>
            ))}
          </div>
        </div>

        {/* 7b. Egna produkter — bevis på hantverket, inte en butik */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "9vh 24px 3vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <span aria-hidden="true" style={{ width: 30, height: 2, background: GUL, display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: GUL }}>
              Egna produkter
            </span>
          </div>
          <p className="font-heading" style={{ fontWeight: 400, fontVariationSettings: '"opsz" 90', fontSize: "clamp(20px, 2.8vw, 32px)", lineHeight: 1.4, color: PAPER, maxWidth: "28ch", margin: 0 }}>
            Jag bygger inte bara åt kunder. Fem egna produkter driver jag själv,{" "}
            <em style={{ fontStyle: "italic", color: GUL }}>på samma stack som din sajt får</em>.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 26 }}>
            {[
              { namn: "Kvota", rad: "AI-offerter", url: "https://kvota.se" },
              { namn: "Granska", rad: "EAA-scanner", url: "https://granska.io" },
              { namn: "Konforma", rad: "CE-dokument", url: "https://konforma.se" },
              { namn: "Tryggadokument", rad: "framtidsfullmakt", url: "https://tryggadokument.se" },
              { namn: "Efterbo", rad: "bouppteckning", url: "https://efterbo.se" },
            ].map((p) => (
              <a
                key={p.namn}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event={`produkt-${p.namn.toLowerCase()}`}
                style={{ display: "inline-flex", alignItems: "baseline", gap: 8, border: `1px solid ${LINE}`, borderRadius: "3em", padding: "10px 18px", textDecoration: "none" }}
              >
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.05em", color: PAPER }}>{p.namn}</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, color: "rgba(242,236,221,0.5)" }}>{p.rad}</span>
              </a>
            ))}
          </div>
        </section>

        {/* 8. FAQ, schema + lead-trygghet */}
        <BFaq />
      </div>

      {/* ═══ 9. Final, gula fältet ═══ */}
      <section className="b-final" style={{ background: GUL, padding: "16vh 24px" }}>
        <div className="b-final-inner" style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <h2 className="font-heading" style={{ fontWeight: 460, fontVariationSettings: '"opsz" 144', fontSize: "clamp(40px, 6.5vw, 92px)", lineHeight: 1.04, letterSpacing: "-0.025em", color: INK, margin: 0 }}>
            Något att vara<br /><em style={{ fontStyle: "italic", fontWeight: 380 }}>stolt över</em>.
          </h2>
          <p style={{ margin: "26px auto 0", fontSize: 17, lineHeight: 1.65, color: "rgba(25,20,5,0.78)", maxWidth: 440 }}>
            Boka en kostnadsfri genomgång, 15 till 20 minuter, en ärlig bedömning, inga förpliktelser.
          </p>
          <div style={{ marginTop: 38 }}>
            <a
              ref={magnetRef}
              href="/boka"
              data-umami-event="cta-hero-final"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, background: INK, color: PAPER, fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase", padding: "20px 38px", borderRadius: "3em", textDecoration: "none", willChange: "transform" }}
            >
              Boka kostnadsfri genomgång <ArrowRight size={15} />
            </a>
          </div>
          <p style={{ marginTop: 22, fontSize: 14.5, color: "rgba(25,20,5,0.7)" }}>
            eller ring <a href={SITE.phoneHref} data-umami-event="cta-telefon" style={{ color: INK, fontWeight: 600 }}>{SITE.phone}</a>
            {" "}· mejla <a href="mailto:joel@stoltmarketing.se" style={{ color: INK, fontWeight: 600 }}>joel@stoltmarketing.se</a>
          </p>
        </div>
      </section>

      {/* Minifooter */}
      <footer style={{ background: "#0B0A06", borderTop: `1px solid ${LINE}`, padding: "26px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <Wordmark color={PAPER} barColor={GUL} />
          <nav style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
            {[["Tjänster", "/tjanster"], ["Projekt", "/projekt"], ["Blogg", "/blogg"], ["Kontakt", "/kontakt"], ["Integritet", "/integritet"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,236,221,0.6)", textDecoration: "none" }}>{label}</Link>
            ))}
          </nav>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 11, letterSpacing: "0.14em", color: "rgba(242,236,221,0.4)" }}>© {new Date().getFullYear()} Stolt Marketing</span>
        </div>
      </footer>
    </div>
  );
}
