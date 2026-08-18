"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ── Scroll-triggered reveal, ENDAST under vecket.
      Above-the-fold-innehåll får aldrig starta på opacity 0 (LCP). ── */
export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Badge, gult streck + versalrad i Archivo (nya profilen) ── */
export function Badge({ children }) {
  return <span className="eyebrow">{children}</span>;
}

/* ── Section header (badge + h2 + optional subtitle) ── */
export function SectionHeader({ badge, title, subtitle, maxWidth = "700px" }) {
  return (
    <>
      <Reveal>
        <Badge>{badge}</Badge>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className="mt-5 font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading"
          style={{ fontWeight: 420, fontVariationSettings: '"opsz" 120' }}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[560px]">
            {subtitle}
          </p>
        </Reveal>
      )}
    </>
  );
}

/* ── Page hero for sub-pages (breadcrumb + eyebrow + headline + subtitle + CTAs).
      Samma familj som startsidans "fältet i mörker" men gryningsvarianten:
      statiska fältrader i SVG + horisont i stället för canvas. Renderas
      statiskt, ovanför vecket animeras inget från opacity 0. ── */
export function PageHero({ breadcrumbs, badge, title, subtitle, bullets }) {
  /* Sista ordet får guld-kursiven, samma signatur som startsidans gulord. */
  let titleHead = title;
  let titleAccent = null;
  if (typeof title === "string") {
    const m = title.trim().match(/^(.*?)(\S+)$/s);
    if (m && m[1]) {
      titleHead = m[1];
      titleAccent = m[2];
    }
  }

  /* Vinden: scrollfarten böjer fältraderna (--vind 0..1), fjädrar tillbaka
     via CSS-transition. Passiv lyssnare, av vid prefers-reduced-motion. */
  const heroRef = useRef(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let t;
    const onScroll = () => {
      const y = window.scrollY;
      const now = performance.now();
      const v = Math.min(1, Math.abs(y - lastY) / Math.max(1, now - lastT) / 2.5);
      lastY = y;
      lastT = now;
      el.style.setProperty("--vind", v.toFixed(3));
      clearTimeout(t);
      t = setTimeout(() => el.style.setProperty("--vind", "0"), 160);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-dark field-glow relative overflow-hidden">

      {/* Fältraderna: perspektivlinjer mot gryningen, ekar startsidans canvas */}
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 w-full pointer-events-none"
        style={{
          height: "clamp(120px, 22vw, 230px)",
          maskImage: "linear-gradient(to top, black 55%, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black 55%, transparent)",
        }}
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
      >
        <line x1="1200" y1="26" x2="0" y2="30" stroke="rgba(242,236,221,0.09)" strokeWidth="1" />
        <line x1="-140" y1="240" x2="812" y2="28" stroke="rgba(242,194,48,0.05)" strokeWidth="1" />
        <line x1="40" y1="240" x2="826" y2="28" stroke="rgba(122,148,64,0.09)" strokeWidth="1" />
        <line x1="220" y1="240" x2="840" y2="28" stroke="rgba(242,194,48,0.08)" strokeWidth="1" />
        <line x1="400" y1="240" x2="854" y2="28" stroke="rgba(242,194,48,0.11)" strokeWidth="1" />
        <line x1="580" y1="240" x2="868" y2="28" stroke="rgba(122,148,64,0.10)" strokeWidth="1" />
        <line x1="760" y1="240" x2="882" y2="28" stroke="rgba(242,194,48,0.13)" strokeWidth="1" />
        <line x1="940" y1="240" x2="896" y2="28" stroke="rgba(242,194,48,0.10)" strokeWidth="1" />
        <line x1="1120" y1="240" x2="910" y2="28" stroke="rgba(122,148,64,0.08)" strokeWidth="1" />
        <line x1="1300" y1="240" x2="924" y2="28" stroke="rgba(242,194,48,0.06)" strokeWidth="1" />
        {/* Ljuspulser som vandrar längs raderna mot horisonten */}
        {[
          { x1: 220, x2: 840, d: "8s", del: "-2s", o: 0.35 },
          { x1: 400, x2: 854, d: "11s", del: "-6s", o: 0.42 },
          { x1: 580, x2: 868, d: "7s", del: "-1s", o: 0.3 },
          { x1: 760, x2: 882, d: "9s", del: "-4s", o: 0.48 },
          { x1: 940, x2: 896, d: "12.5s", del: "-8s", o: 0.32 },
          { x1: 1120, x2: 910, d: "8.5s", del: "-5s", o: 0.26 },
        ].map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1="240"
            x2={l.x2}
            y2="28"
            className="hero-puls"
            stroke="rgba(242,194,48,0.55)"
            strokeWidth="1.5"
            style={{ "--pd": l.d, "--pdel": l.del, opacity: l.o }}
          />
        ))}
      </svg>

      {/* Korn som svävar i gryningsljuset */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "12%", bottom: "16%", d: "11s", del: "0s", s: 3 },
          { left: "28%", bottom: "7%", d: "14s", del: "-4s", s: 2 },
          { left: "55%", bottom: "11%", d: "12s", del: "-7s", s: 2.5 },
          { left: "73%", bottom: "20%", d: "16s", del: "-2s", s: 2 },
          { left: "87%", bottom: "9%", d: "13s", del: "-9s", s: 3 },
        ].map((k, i) => (
          <span
            key={i}
            className="hero-korn"
            style={{
              left: k.left,
              bottom: k.bottom,
              width: k.s,
              height: k.s,
              animationDuration: k.d,
              animationDelay: k.del,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav
            className="flex items-center gap-2 text-[12px] text-muted mb-6"
            style={{ fontFamily: "var(--font-ui)", letterSpacing: "0.08em" }}
          >
            {breadcrumbs.map((bc, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-border">·</span>}
                {bc.href ? (
                  <a
                    href={bc.href}
                    className="hover:text-heading transition-colors"
                  >
                    {bc.label}
                  </a>
                ) : (
                  <span className="text-heading font-500">{bc.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Eyebrow, samma motiv som startsidan: guldstreck + versaler */}
        <div className="flex items-center gap-3.5">
          <span
            aria-hidden="true"
            className="inline-block"
            style={{ width: 30, height: 2, background: "var(--color-accent)" }}
          />
          <span
            className="uppercase"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 10.5,
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "var(--color-accent)",
            }}
          >
            {badge}
          </span>
        </div>

        <h1
          className="mt-6 font-heading text-[clamp(40px,5.8vw,78px)] leading-[1.03] tracking-[-0.025em] text-heading max-w-[900px]"
          style={{ fontWeight: 380, fontVariationSettings: '"opsz" 144' }}
        >
          {titleAccent ? (
            <>
              {titleHead}
              <em style={{ fontStyle: "italic", color: "var(--color-accent)", fontWeight: 400 }}>
                {titleAccent}
              </em>
            </>
          ) : (
            title
          )}
        </h1>

        {subtitle && (
          <p className="mt-6 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[580px]">
            {subtitle}
          </p>
        )}

        {bullets && (
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-[13px] text-body font-500"
                style={{ fontFamily: "var(--font-ui)", letterSpacing: "0.04em" }}
              >
                <span className="w-2 h-2 bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-3 mt-9">
          <a href="/boka" className="premium-btn">
            <span>Boka kostnadsfri genomgång</span>
            <ArrowRight size={15} className="opacity-80" />
          </a>
        </div>
      </div>

    </section>
  );
}
