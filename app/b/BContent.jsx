"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import FieldCanvas from "@/components/b/FieldCanvas";
import BFaq from "@/components/b/BFaq";
import HeroKoll from "@/components/b/HeroKoll";
import Kundmotor from "@/components/b/Kundmotor";
import SaGarDetTill from "@/components/b/SaGarDetTill";
import { SITE } from "@/lib/local/data";
import { SNAPSHOT } from "@/lib/kundmotor";

gsap.registerPlugin(ScrollTrigger, SplitText);

const BG = "#0F0D08";
const BG2 = "#161309";
const INK = "#191405";
const PAPER = "#F2ECDD";
const GUL = "#F2C230";
const DIM = "rgba(242,236,221,0.7)";
const FAINT = "rgba(242,236,221,0.62)"; /* lägsta som klarar 4,5:1 på bläck */
const LINE = "rgba(242,236,221,0.14)";

/* Erbjudandet är EN sak (hemsidan). Resten säljs som det det är:
   sådant som ingår eller läggs till, inte sju likvärdiga byråtjänster. */
const tillval = [
  { titel: "SEO", rad: "synlighet på Google", href: "/tjanster/seo" },
  { titel: "Google Ads", rad: "annonsering", href: "/tjanster/google-ads" },
  { titel: "AI & automation", rad: "offerter och mejl", href: "/tjanster/ai-automation" },
  { titel: "E-handel", rad: "butik och betalning", href: "/tjanster/e-handel" },
  { titel: "WordPress", rad: "när det passar bättre", href: "/tjanster/wordpress" },
  { titel: "Managed drift", rad: "tar över befintliga sajter", href: "/tjanster/managed-hemsida" },
];

/* Taggen är kundens utfall (live ur Umami där det finns) eller bransch · ort.
   Aldrig rått sidantal: byggda sidor är inventarie, inte ett resultat. */
const cases = [
  { slug: "niklassonsflytt", client: "Niklassons Flytt", tag: "Flytt · Helsingborg", img: "case-niklassonsflytt", desc: "En sida för varje tjänst och ort i Skåne, och varje förfrågan mäts. Kunden sköter innehållet själv.", href: "/projekt/niklassonsflytt" },
  { slug: "arkipel", client: "Arkipel Entreprenad", tag: "Bygg · Norrköping", img: "case-arkipel", desc: "Tre gånger fler sidor än branschsnittet, en per tjänst och ort. Så en byggfirma faktiskt hittas.", href: "/projekt/arkipel" },
  { slug: "premiebygg", client: "Premie Bygg", tag: "Bygg · Örebro", img: "case-premiebygg", desc: "Formulärkedjan verifierad på riktigt, så offertförfrågningarna kommer fram.", href: "/projekt/premiebygg" },
  { slug: "ngtab", client: "Norrlands Gräv & Transport", tag: "Entreprenad · Sundsvall", img: "case-ngtab", desc: "Ett tyst canonical-fel tog bort sajten ur Google. Fixat, plus en sida per tjänst och ort.", href: "/projekt/ngtab" },
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

  /* Kundmotorn: ögonblicksbilden ligger i SSR-HTML, live-talen byts in efter laddning.
     Delas mellan hero-beviset, casekortens taggar och kundmotor-sektionen. */
  const [km, setKm] = useState(SNAPSHOT);
  useEffect(() => {
    let alive = true;
    fetch("/api/kundmotor")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive && d && typeof d.leads === "number" && Array.isArray(d.rows) && d.rows.length) setKm(d);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const liveRad = (slug) => km.rows.find((r) => r.slug === slug);
  const liveTag = (slug, fallback) => {
    const r = liveRad(slug);
    if (!r || !r.offert) return fallback;
    return `${r.offert} offerter${r.samtal ? ` · ${r.samtal} samtal` : ""} / 30 dgr`;
  };
  const niklassons = liveRad("niklassonsflytt");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ── Hero-intro. Texten är synlig från första målningen (LCP), den
           sätter sig bara till rätta: ingen opacity, ingen mask. ── */
        const split = new SplitText(".b-h1", { type: "lines", linesClass: "b-h1-line", aria: "none" });
        gsap
          .timeline({ defaults: { ease: "power3.out" }, onComplete: () => split.revert() })
          .from(".b-eyebrow-bar", { scaleX: 0, transformOrigin: "left center", duration: 0.7 }, 0.1)
          .from(".b-eyebrow-text", { x: -12, duration: 0.6 }, 0.25)
          .from(split.lines, { y: 26, duration: 0.9, stagger: 0.08 }, 0.2)
          .from(".b-sub, .b-koll, .b-proof", { y: 14, duration: 0.7, stagger: 0.1 }, 0.6)
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

        /* ── Manifest: ord färgas in vid scroll. Startar läsbart (46 %), inte 16. ── */
        const words = new SplitText(".b-manifest", { type: "words", aria: "none" }).words;
        gsap.fromTo(
          words,
          { color: "rgba(242,236,221,0.46)" },
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
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".b-services", start: "top 72%" },
        });

        /* ── Citat ── */
        const qSplit = new SplitText(".b-quote-text", { type: "lines", aria: "none" });
        gsap.from(qSplit.lines, {
          y: 22,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".b-quote", start: "top 70%" },
          onComplete: () => qSplit.revert(),
        });

        /* ── Final ── */
        gsap.from(".b-final-inner > *", {
          y: 30,
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
        .b-servicerow .b-srv-desc { color: ${DIM}; }
        .b-servicerow .b-srv-arrow { color: ${FAINT}; transform: translateX(-8px); opacity: 0; transition: all .3s cubic-bezier(.16,1,.3,1); }
        .b-servicerow:hover .b-srv-title, .b-servicerow:hover .b-srv-desc { color: ${INK}; }
        .b-servicerow:hover .b-srv-arrow { color: ${INK}; transform: translateX(0); opacity: 1; }
        .b-tillval-pill { display: inline-flex; align-items: baseline; gap: 8px; border: 1px solid ${LINE}; border-radius: 3em; padding: 11px 18px; text-decoration: none; transition: border-color .25s, background .25s; }
        .b-tillval-pill:hover { border-color: ${GUL}; background: rgba(242,194,48,0.08); }
        .b-case-scroll { display: flex; gap: 28px; }
        .b-case-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .b-case-head .b-case-tag { white-space: nowrap; }
        .b-case-link { display: block; text-decoration: none; color: inherit; }
        .b-case-link:hover h3 { color: ${GUL}; }
        @media (max-width: 899px) {
          .b-case-scroll { overflow-x: auto; scroll-snap-type: x proximity; scroll-padding-left: 24px; padding-bottom: 16px; -webkit-overflow-scrolling: touch; }
          .b-case-panel { scroll-snap-align: start; }
          .b-servicerow { grid-template-columns: 44px 1fr auto; padding: 20px 4px; }
          /* Mobil: tagg på egen rad under rubriken, aldrig bredvid (bryter raden annars) */
          .b-case-head { flex-direction: column; align-items: flex-start; gap: 7px; }
          .b-case-head .b-case-tag { white-space: normal; line-height: 1.6; }
        }
        /* Mobil: fältet ska glöda, inte canvasen */
        @media (max-width: 640px) { .b-field { opacity: 0.55; } }
      `}</style>

      {/* Global header (Header.jsx) renderas av app/page.js ovanför denna komponent */}

      {/* ═══ 1. Hero, Fältet i mörker. Ett fält, en dörr. ═══ */}
      <section className="field-glow" style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", background: BG }}>
        <FieldCanvas className="b-field" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1120, width: "100%", margin: "0 auto", padding: "110px 24px 34vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <span className="b-eyebrow-bar" aria-hidden="true" style={{ width: 30, height: 2, background: GUL, display: "inline-block" }} />
            <span className="b-eyebrow-text" style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: GUL }}>
              Hemsidor åt företag som lever på förfrågningar
            </span>
          </div>
          {/* H1 bär löftet. Kategoriorden (hemsida, SEO, AI) bor i title-taggen och i b-sub. */}
          <h1 className="b-h1 font-heading" style={{ fontWeight: 360, fontVariationSettings: '"opsz" 144', fontSize: "clamp(42px, 7.2vw, 104px)", lineHeight: 1.02, letterSpacing: "-0.025em", color: PAPER, maxWidth: "16ch", margin: 0 }}>
            Din nya hemsida, <span style={{ fontWeight: 640 }}>färdig innan du betalar</span> ett öre<em style={{ fontStyle: "italic", color: GUL, fontWeight: 400 }}>.</em>
          </h1>
          <p className="b-sub" style={{ marginTop: 28, fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.75, color: DIM, maxWidth: 580 }}>
            Klistra in adressen till din nuvarande sajt. Jag mäter den på tio sekunder, och vill du får du sedan ett färdigt förslag på en ny, byggt på ditt företag och dina orter. Gratis, utan möte, utan förpliktelser. Gillar du den: 0 kr i start, från 1 190 kr i månaden, drift och ändringar ingår.
          </p>
          <div className="b-koll" style={{ marginTop: 30 }}>
            <HeroKoll plats="hero" />
          </div>
          <p className="b-proof" style={{ marginTop: 18, fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.04em", color: FAINT, position: "relative", zIndex: 3 }}>
            Niklassons Flytt · {niklassons?.offert || 37} offertförfrågningar på 30 dagar, mätt i sajten
          </p>
        </div>
        <div className="b-scrollcue" style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 9.5, letterSpacing: "0.3em", textTransform: "uppercase", color: FAINT, fontWeight: 600 }}>Skrolla</span>
          <span className="b-scrollcue-line" aria-hidden="true" style={{ width: 2, height: 34, background: GUL, display: "block", opacity: 0.6 }} />
        </div>
      </section>

      {/* ═══ Mörka partiet. Ordningen är medveten: bevis (kundmotor, case, citat,
          person) och mekanism FÖRE katalogen (tjänster). ═══ */}
      <div className="b-dark" style={{ background: BG }}>
        {/* 2. Manifest */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "16vh 24px 8vh" }}>
          <p className="b-manifest font-heading" style={{ fontWeight: 400, fontVariationSettings: '"opsz" 90', fontSize: "clamp(26px, 4vw, 52px)", lineHeight: 1.32, letterSpacing: "-0.01em", maxWidth: "24ch", margin: 0, color: "rgba(242,236,221,0.46)" }}>
            Inga mellanhänder. Inga projektledare på timpris. Du pratar direkt med mig, Joel Stolt, och resultatet ska vara <em className="b-gulord" style={{ fontStyle: "italic" }}>något att vara stolt över</em>.
          </p>
        </section>

        {/* 3. Kundmotorn: mätt, inte påstått */}
        <Kundmotor data={km} />

        {/* 4. Case, horisontellt */}
        <section ref={caseSecRef} style={{ overflow: "hidden", padding: "6vh 0 10vh" }}>
          <div className="sec-rule" style={{ maxWidth: 1120, margin: "0 auto 40px", padding: "0 24px", paddingBottom: "1.1em" }}>
            <h2 className="sec-label" style={{ margin: 0, letterSpacing: "0.22em" }}>
              Uppdrag som talar för sig själva
            </h2>
            <span className="sec-eng" aria-hidden="true">projekt</span>
          </div>
          <div ref={trackRef} className="b-case-scroll" style={{ paddingLeft: "max(24px, calc((100vw - 1120px) / 2))", paddingRight: 24 }}>
            {cases.map((c) => (
              <article key={c.client} className="b-case-panel" style={{ flexShrink: 0, width: "min(78vw, 560px)" }}>
                <a href={c.href} className="b-case-link">
                  <div style={{ border: `1px solid ${LINE}`, background: BG2, overflow: "hidden" }}>
                    <img
                      src={`/${c.img}-1120.webp`}
                      srcSet={`/${c.img}-640.webp 640w, /${c.img}-1120.webp 1120w, /${c.img}.webp 1600w`}
                      sizes="(max-width: 899px) 78vw, 560px"
                      width={1600}
                      height={1000}
                      alt={`Startsidan för ${c.client}`}
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "auto", aspectRatio: "16/10", objectFit: "cover", objectPosition: "top", display: "block", filter: "saturate(0.92)" }}
                    />
                  </div>
                  <div className="b-case-head" style={{ marginTop: 18 }}>
                    <h3 className="font-heading" style={{ fontWeight: 560, fontVariationSettings: '"opsz" 110', fontSize: 26, color: PAPER, margin: 0, transition: "color .25s" }}>{c.client}</h3>
                    <span className="b-case-tag" style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: GUL }}>{liveTag(c.slug, c.tag)}</span>
                  </div>
                  <p style={{ marginTop: 8, fontSize: 15, lineHeight: 1.65, color: DIM, maxWidth: 420 }}>{c.desc}</p>
                </a>
              </article>
            ))}
            <div style={{ flexShrink: 0, width: "min(60vw, 380px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <a href="/projekt" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 460, fontSize: 26, color: GUL, textDecoration: "none" }}>
                Se alla projekt <ArrowUpRight size={26} />
              </a>
            </div>
          </div>
        </section>

        {/* 5. Citat: riktig Google-recension, ordagrann och länkad så den går att verifiera. */}
        <section className="b-quote" style={{ maxWidth: 1120, margin: "0 auto", padding: "8vh 24px 12vh" }}>
          <span aria-hidden="true" className="font-heading" style={{ display: "block", fontSize: 110, lineHeight: 0.6, color: GUL, fontWeight: 500, marginBottom: 26 }}>”</span>
          <blockquote style={{ margin: 0 }}>
            <p className="b-quote-text font-heading" style={{ fontWeight: 380, fontVariationSettings: '"opsz" 90', fontStyle: "italic", fontSize: "clamp(22px, 3.2vw, 40px)", lineHeight: 1.4, color: PAPER, maxWidth: "30ch", margin: 0 }}>
              Vi har arbetat med ett flertal webbyråer genom åren och ingenting kan mäta sig med Stolt Marketing. En liten byrå med den mest otroliga servicementaliteten. Otroligt snabb, lösningsorienterad och ingenting känns någonsin krångligt eller omöjligt.
            </p>
            <div role="img" aria-label="5 av 5 i betyg" style={{ display: "flex", gap: 4, marginTop: 24 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill={GUL} color={GUL} strokeWidth={1} aria-hidden="true" />
              ))}
            </div>
            <footer style={{ marginTop: 14, fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: FAINT }}>
              Claudia, Omniway ·{" "}
              <a
                href="https://www.google.com/maps?cid=8357467268890589983"
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event="recension-google"
                style={{ color: GUL, textDecoration: "none" }}
              >
                Recension på Google &rarr;
              </a>
            </footer>
          </blockquote>
        </section>

        {/* 6. Personen bakom: en person är poängen, inte ursäkten */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "2vh 24px 8vh" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px 40px", borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, padding: "34px 0" }}>
            <img
              src="/joel-stolt-240.webp"
              srcSet="/joel-stolt-240.webp 240w, /joel-stolt.webp 576w"
              sizes="104px"
              width={104}
              height={104}
              alt="Joel Stolt, personen som bygger, optimerar och svarar"
              loading="lazy"
              decoding="async"
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
              {["10+ år i branschen", `${km.sajter} kundsajter i drift och mätning`, "Hässleholm, kunder i hela Sverige"].map((f) => (
                <span key={f} style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 500, color: "rgba(242,236,221,0.78)" }}>
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

        {/* 7. Mekanismen: dag 1, dag 3, dag 10 */}
        <SaGarDetTill />

        {/* 8. Erbjudandet: en huvudrad med pris, resten som tillval */}
        <section id="tjanster" className="b-services" style={{ maxWidth: 1120, margin: "0 auto", padding: "6vh 24px 8vh" }}>
          <div className="sec-rule" style={{ marginBottom: 36 }}>
            <h2 className="sec-label" style={{ margin: 0, letterSpacing: "0.22em" }}>
              Hemsidor som ger förfrågningar
            </h2>
            <span className="sec-eng" aria-hidden="true">tjänster</span>
          </div>
          <a
            href="/tjanster/webbutveckling"
            className="b-servicerow"
            data-umami-event="cta-tjanst-hemsida"
            style={{ gridTemplateColumns: "1fr auto", borderBottom: `1px solid ${LINE}`, padding: "34px 8px" }}
          >
            <span className="b-srv-title font-heading" style={{ fontWeight: 400, fontVariationSettings: '"opsz" 110', fontSize: "clamp(30px, 5.4vw, 66px)", letterSpacing: "-0.015em", lineHeight: 1.08 }}>
              Ny hemsida, byggd för att hittas
              <span className="b-srv-desc" style={{ display: "block", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 14, marginTop: 10, letterSpacing: "0.02em" }}>
                0 kr i startavgift · från 1 190 kr/mån · drift och ändringar ingår
              </span>
            </span>
            <ArrowUpRight className="b-srv-arrow" size={34} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <p style={{ marginTop: 36, marginBottom: 14, fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: FAINT }}>
            Ingår eller läggs till efter behov
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {tillval.map((t) => (
              <a key={t.href} href={t.href} className="b-tillval-pill">
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.05em", color: PAPER }}>{t.titel}</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, color: FAINT }}>{t.rad}</span>
              </a>
            ))}
            <a href="/tjanster" className="b-tillval-pill" style={{ borderColor: "rgba(242,194,48,0.45)" }}>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.05em", color: GUL }}>Alla tjänster &rarr;</span>
            </a>
          </div>
        </section>

        {/* 9. FAQ, schema + lead-trygghet */}
        <BFaq />
      </div>

      {/* ═══ 10. Final, gula fältet. Samma dörr som i heron. ═══ */}
      <section className="b-final" style={{ background: GUL, padding: "16vh 24px" }}>
        <div className="b-final-inner" style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <h2 className="font-heading" style={{ fontWeight: 460, fontVariationSettings: '"opsz" 144', fontSize: "clamp(40px, 6.5vw, 92px)", lineHeight: 1.04, letterSpacing: "-0.025em", color: INK, margin: 0 }}>
            Något att vara<br /><em style={{ fontStyle: "italic", fontWeight: 380 }}>stolt över</em>.
          </h2>
          <p style={{ margin: "26px auto 0", fontSize: 17, lineHeight: 1.65, color: "rgba(25,20,5,0.78)", maxWidth: 460 }}>
            Klistra in din adress. Om två arbetsdagar klickar du runt i din nya hemsida.
          </p>
          <div ref={magnetRef} style={{ marginTop: 34, willChange: "transform" }}>
            <HeroKoll plats="final" tema="gul" />
          </div>
          <p style={{ marginTop: 22, fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(25,20,5,0.8)" }}>
            0 kr i startavgift · från 1 190 kr/mån · färdig innan du betalar
          </p>
          <p style={{ marginTop: 18, fontSize: 14.5, color: "rgba(25,20,5,0.7)" }}>
            eller ring <a href={SITE.phoneHref} data-umami-event="cta-telefon" style={{ color: INK, fontWeight: 600 }}>{SITE.phone}</a>
            {" "}· mejla <a href="mailto:joel@stoltmarketing.se" style={{ color: INK, fontWeight: 600 }}>joel@stoltmarketing.se</a>
            {" "}· eller <a href="/boka" data-umami-event="cta-boka" style={{ color: INK, fontWeight: 600 }}>boka en tid</a>
          </p>
        </div>
      </section>

      {/* Minifooter. Egna produkter bor på /om, inte här. */}
      <footer style={{ background: "#0B0A06", borderTop: `1px solid ${LINE}`, padding: "26px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <Wordmark color={PAPER} barColor={GUL} />
          <nav aria-label="Sidfot" style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
            {[["Tjänster", "/tjanster"], ["Priser", "/priser"], ["Projekt", "/projekt"], ["Blogg", "/blogg"], ["Kontakt", "/kontakt"], ["Integritet", "/integritet"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: FAINT, textDecoration: "none" }}>{label}</Link>
            ))}
          </nav>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 11, letterSpacing: "0.14em", color: FAINT }}>© 2026 Stolt Marketing</span>
        </div>
      </footer>
    </div>
  );
}
