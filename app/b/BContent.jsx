"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import FieldCanvas from "@/components/b/FieldCanvas";

gsap.registerPlugin(ScrollTrigger, SplitText);

const INK = "#1A1611";
const PAPER = "#FAF5EC";
const GUL = "#F2BC1B";

const services = [
  { i: "01", title: "Webbutveckling", desc: "Moderna sajter som konverterar", href: "/tjanster/webbutveckling" },
  { i: "02", title: "E-handel", desc: "Butiker byggda för att sälja", href: "/tjanster/e-handel" },
  { i: "03", title: "WordPress", desc: "Snabba, säkra WP-sidor", href: "/tjanster/wordpress" },
  { i: "04", title: "AI & Automation", desc: "Arbetsflöden som sparar tid", href: "/tjanster/ai-automation" },
  { i: "05", title: "SEO", desc: "Synlighet som ger fler kunder", href: "/tjanster/seo" },
  { i: "06", title: "Google Ads", desc: "Annonsering som ger resultat", href: "/tjanster/google-ads" },
  { i: "07", title: "Managed hemsida", desc: "Drift, underhåll, förbättringar", href: "/tjanster/managed-hemsida" },
];

const cases = [
  { client: "LIA-platsbanken", tag: "AcadeMedia · Next.js", img: "/case-lia.webp", desc: "Mötesplattform för YH-studenter och arbetsgivare." },
  { client: "RBN Utbildning", tag: "Helhetsleverans · WP + API", img: "/case-rbn.webp", desc: "Ny profil, sajt och API-integration i ett." },
  { client: "Förskolan Harpan", tag: "Grafisk profil · Next.js", img: "/case-harpan.webp", desc: "Varm identitet och enkel platsansökan." },
  { client: "Omniway", tag: "EdTech · WCAG 2.1 AA", img: "/case-omniway.webp", desc: "Tillgänglighet från grunden, mörkt tema." },
];

const clients = ["AcadeMedia", "SMH Sverige", "KYH", "Hermods", "Kvota.se", "RBN Utbildning", "Omniway"];

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
  const headerRef = useRef(null);
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
          { color: "rgba(250,245,236,0.14)" },
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

      /* ── Headertema: ljus över mörka partiet ── */
      ScrollTrigger.create({
        trigger: ".b-dark",
        start: "top 64",
        end: "bottom 64",
        onToggle: ({ isActive }) => headerRef.current?.classList.toggle("b-header-light", isActive),
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
    <div ref={root} style={{ background: PAPER }}>
      <style>{`
        .b-h1-line { will-change: transform; }
        .b-servicerow { position: relative; display: grid; grid-template-columns: 64px 1fr auto; align-items: baseline; gap: 20px; padding: 26px 8px; border-top: 1px solid rgba(250,245,236,0.14); text-decoration: none; overflow: hidden; }
        .b-servicerow::before { content: ""; position: absolute; inset: 0; background: ${GUL}; transform: scaleY(0); transform-origin: bottom; transition: transform .38s cubic-bezier(.16,1,.3,1); }
        .b-servicerow:hover::before { transform: scaleY(1); }
        .b-servicerow > * { position: relative; transition: color .25s; }
        .b-servicerow .b-srv-title { color: ${PAPER}; }
        .b-servicerow .b-srv-i, .b-servicerow .b-srv-desc { color: rgba(250,245,236,0.45); }
        .b-servicerow .b-srv-arrow { color: rgba(250,245,236,0.35); transform: translateX(-8px); opacity: 0; transition: all .3s cubic-bezier(.16,1,.3,1); }
        .b-servicerow:hover .b-srv-title, .b-servicerow:hover .b-srv-i, .b-servicerow:hover .b-srv-desc { color: ${INK}; }
        .b-servicerow:hover .b-srv-arrow { color: ${INK}; transform: translateX(0); opacity: 1; }
        .b-marquee-inner { display: flex; gap: 56px; width: max-content; animation: b-scroll 36s linear infinite; }
        @keyframes b-scroll { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .b-marquee-inner { animation: none; } }
        .b-header-light .b-nav-text { color: ${PAPER} !important; }
        .b-header-light .b-nav-pill { background: ${PAPER} !important; color: ${INK} !important; border-color: ${PAPER} !important; }
        .b-case-scroll { display: flex; gap: 28px; }
        @media (max-width: 899px) {
          .b-case-scroll { overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 16px; -webkit-overflow-scrolling: touch; }
          .b-case-panel { scroll-snap-align: start; }
          .b-servicerow { grid-template-columns: 44px 1fr auto; padding: 20px 4px; }
        }
      `}</style>

      {/* ═══ Toppbar ═══ */}
      <header
        ref={headerRef}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", transition: "all .3s" }}
      >
        <Link href="/" aria-label="Stolt Marketing — till startsidan" style={{ textDecoration: "none" }}>
          <span className="b-nav-text" style={{ transition: "color .3s", color: INK }}>
            <Wordmark />
          </span>
        </Link>
        <a
          href="/boka"
          className="b-nav-pill"
          data-umami-event="cta-hero-topp"
          style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: PAPER, background: INK, border: `1px solid ${INK}`, padding: "10px 20px", borderRadius: 8, textDecoration: "none", transition: "all .3s" }}
        >
          Boka genomgång
        </a>
      </header>

      {/* ═══ 1. Hero — Fältet ═══ */}
      <section style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
        <FieldCanvas className="b-field" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1120, width: "100%", margin: "0 auto", padding: "110px 24px 38vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <span className="b-eyebrow-bar" aria-hidden="true" style={{ width: 26, height: 5, background: GUL, display: "inline-block" }} />
            <span className="b-eyebrow-text" style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7A7263" }}>
              Webbyrå i Skåne — något att vara stolt över
            </span>
          </div>
          <h1 className="b-h1 font-heading" style={{ fontWeight: 600, fontSize: "clamp(42px, 7.2vw, 104px)", lineHeight: 1.02, letterSpacing: "-0.02em", color: INK, maxWidth: "13ch", margin: 0 }}>
            Webbplatser, SEO och AI som gör dig lätt att hitta.
          </h1>
          <p className="b-sub" style={{ marginTop: 28, fontSize: 17, lineHeight: 1.6, color: "#433D33", maxWidth: 460 }}>
            Ingen byrå-overhead. Du jobbar direkt med personen som bygger, optimerar och tar ansvar för resultatet.
          </p>
          <div className="b-ctas" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34, position: "relative", zIndex: 3 }}>
            <a href="/boka" className="premium-btn" data-umami-event="cta-hero-primar" style={{ boxShadow: "0 6px 24px rgba(26,22,17,0.18)" }}>
              Boka kostnadsfri genomgång <ArrowRight size={16} />
            </a>
            <a href="#tjanster" className="secondary-btn" style={{ background: PAPER, boxShadow: "0 6px 24px rgba(26,22,17,0.10)" }}>Se tjänster</a>
          </div>
        </div>
        <div className="b-scrollcue" style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A7263", fontWeight: 600 }}>Skrolla</span>
          <span className="b-scrollcue-line" aria-hidden="true" style={{ width: 2, height: 34, background: INK, display: "block", opacity: 0.5 }} />
        </div>
      </section>

      {/* ═══ Mörka partiet ═══ */}
      <div className="b-dark" style={{ background: INK }}>
        {/* 2. Manifest */}
        <section style={{ maxWidth: 1120, margin: "0 auto", padding: "16vh 24px 10vh" }}>
          <p className="b-manifest font-heading" style={{ fontWeight: 500, fontSize: "clamp(26px, 4vw, 52px)", lineHeight: 1.25, letterSpacing: "-0.01em", maxWidth: "24ch", margin: 0 }}>
            Inga mellanhänder. Inga projektledare på timpris. Du pratar direkt med den som bygger — och resultatet ska vara <em className="b-gulord" style={{ fontStyle: "italic" }}>något att vara stolt över</em>.
          </p>
        </section>

        {/* 3. Tjänster */}
        <section id="tjanster" className="b-services" style={{ maxWidth: 1120, margin: "0 auto", padding: "8vh 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
            <span aria-hidden="true" style={{ width: 26, height: 5, background: GUL, display: "inline-block" }} />
            <h2 style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(250,245,236,0.55)", margin: 0, fontFamily: "var(--font-body)" }}>
              Allt du behöver för att växa digitalt
            </h2>
          </div>
          <div style={{ borderBottom: "1px solid rgba(250,245,236,0.14)" }}>
            {services.map((s) => (
              <a key={s.i} href={s.href} className="b-servicerow">
                <span className="b-srv-i" style={{ fontSize: 14, fontWeight: 600 }}>{s.i}</span>
                <span className="b-srv-title font-heading" style={{ fontWeight: 600, fontSize: "clamp(26px, 4.4vw, 54px)", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                  {s.title}
                  <span className="b-srv-desc" style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14, marginTop: 6, letterSpacing: 0 }}>{s.desc}</span>
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
                <div className="b-stat-num font-heading" data-target={s.target} style={{ fontWeight: 600, fontSize: "clamp(54px, 7vw, 92px)", lineHeight: 1, color: PAPER }}>
                  <span>0</span>
                  <span style={{ color: GUL }}>{s.suffix}</span>
                </div>
                <div style={{ marginTop: 10, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(250,245,236,0.5)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Case — horisontellt */}
        <section ref={caseSecRef} style={{ overflow: "hidden", padding: "10vh 0" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
            <span aria-hidden="true" style={{ width: 26, height: 5, background: GUL, display: "inline-block" }} />
            <h2 style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(250,245,236,0.55)", margin: 0, fontFamily: "var(--font-body)" }}>
              Uppdrag som talar för sig själva
            </h2>
          </div>
          <div ref={trackRef} className="b-case-scroll" style={{ paddingLeft: "max(24px, calc((100vw - 1120px) / 2))", paddingRight: 24 }}>
            {cases.map((c) => (
              <article key={c.client} className="b-case-panel" style={{ flexShrink: 0, width: "min(78vw, 560px)" }}>
                <div style={{ border: "1px solid rgba(250,245,236,0.16)", background: "rgba(250,245,236,0.04)", overflow: "hidden" }}>
                  <img src={c.img} alt={c.client} loading="lazy" style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", objectPosition: "top", display: "block", filter: "saturate(0.92)" }} />
                </div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginTop: 18 }}>
                  <h3 className="font-heading" style={{ fontWeight: 600, fontSize: 26, color: PAPER, margin: 0 }}>{c.client}</h3>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: GUL, whiteSpace: "nowrap" }}>{c.tag}</span>
                </div>
                <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.55, color: "rgba(250,245,236,0.6)", maxWidth: 420 }}>{c.desc}</p>
              </article>
            ))}
            <div style={{ flexShrink: 0, width: "min(60vw, 380px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <a href="/projekt" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 26, color: GUL, textDecoration: "none" }}>
                Se alla projekt <ArrowUpRight size={26} />
              </a>
            </div>
          </div>
        </section>

        {/* 6. Citat */}
        <section className="b-quote" style={{ maxWidth: 1120, margin: "0 auto", padding: "10vh 24px 12vh" }}>
          <span aria-hidden="true" className="font-heading" style={{ display: "block", fontSize: 110, lineHeight: 0.6, color: GUL, fontWeight: 600, marginBottom: 26 }}>”</span>
          <blockquote style={{ margin: 0 }}>
            <p className="b-quote-text font-heading" style={{ fontWeight: 500, fontStyle: "italic", fontSize: "clamp(22px, 3.2vw, 40px)", lineHeight: 1.35, color: PAPER, maxWidth: "30ch", margin: 0 }}>
              Vi behövde en helhetsleverans — ny grafisk profil, ny sajt och integration mot våra system. Joel levererade allt under en och samma kontakt.
            </p>
            <footer style={{ marginTop: 26, fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(250,245,236,0.55)" }}>
              Robin — RBN Utbildning
            </footer>
          </blockquote>
        </section>

        {/* 7. Marquee */}
        <div style={{ borderTop: "1px solid rgba(250,245,236,0.12)", borderBottom: "1px solid rgba(250,245,236,0.12)", padding: "30px 0 32px", overflow: "hidden" }} aria-hidden="true">
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(250,245,236,0.4)", margin: "0 0 22px" }}>
            Betrodd av företag i hela Sverige
          </p>
          <div className="b-marquee-inner">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 40 }}>
                <span className="font-heading" style={{ fontWeight: 500, fontStyle: "italic", fontSize: 34, color: "rgba(250,245,236,0.5)", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>{c}</span>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: GUL, display: "inline-block", flexShrink: 0 }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 8. Final — gula fältet ═══ */}
      <section className="b-final" style={{ background: GUL, padding: "16vh 24px" }}>
        <div className="b-final-inner" style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <h2 className="font-heading" style={{ fontWeight: 600, fontSize: "clamp(40px, 6.5vw, 92px)", lineHeight: 1.04, letterSpacing: "-0.02em", color: INK, margin: 0 }}>
            Något att vara<br />stolt över.
          </h2>
          <p style={{ margin: "26px auto 0", fontSize: 17, lineHeight: 1.6, color: "rgba(26,22,17,0.75)", maxWidth: 440 }}>
            Boka en kostnadsfri genomgång — 15–20 minuter, en ärlig bedömning, inga förpliktelser.
          </p>
          <div style={{ marginTop: 38 }}>
            <a
              ref={magnetRef}
              href="/boka"
              data-umami-event="cta-hero-final"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, background: INK, color: PAPER, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, padding: "20px 38px", borderRadius: 10, textDecoration: "none", willChange: "transform" }}
            >
              Boka kostnadsfri genomgång <ArrowRight size={17} />
            </a>
          </div>
          <p style={{ marginTop: 22, fontSize: 14, color: "rgba(26,22,17,0.65)" }}>
            eller mejla <a href="mailto:joel@stoltmarketing.se" style={{ color: INK, fontWeight: 600 }}>joel@stoltmarketing.se</a>
          </p>
        </div>
      </section>

      {/* Minifooter */}
      <footer style={{ background: INK, padding: "26px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <Wordmark color={PAPER} barColor={GUL} />
          <nav style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
            {[["Tjänster", "/tjanster"], ["Projekt", "/projekt"], ["Blogg", "/blogg"], ["Kontakt", "/kontakt"], ["Integritet", "/integritet"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 13.5, color: "rgba(250,245,236,0.6)", textDecoration: "none" }}>{label}</Link>
            ))}
          </nav>
          <span style={{ fontSize: 12.5, color: "rgba(250,245,236,0.4)" }}>© {new Date().getFullYear()} Stolt Marketing</span>
        </div>
      </footer>
    </div>
  );
}
