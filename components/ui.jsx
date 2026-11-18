"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ── Scroll-triggered reveal, ENDAST under vecket.
      Above-the-fold-innehåll får aldrig starta på opacity 0 (LCP). ── */
export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ y: inView || reduceMotion ? 0 : 12 }}
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
          className="mt-5 font-heading text-[clamp(30px,3.6vw,44px)] leading-[1.1] text-heading"
          style={{ fontWeight: 620, letterSpacing: "-0.03em" }}
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
export function PageHero({ breadcrumbs, badge, title, subtitle, bullets, highlight, compact = false, cta = { href: "/kontakt", label: "Berätta vad ni behöver" } }) {
  /* Ny profil 2026-11-17: lugn topp med svagt gult sken, brödsmulor, liten gul punkt
     framför överraden och rubrik i normal stil. highlight tas emot men markeras inte
     längre (inga kursiva accentord). */
  void highlight;
  return (
    <section className="relative overflow-hidden" style={{ borderBottom: "1px solid var(--color-border-light)" }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(55% 70% at 85% 30%, rgba(242,194,48,0.06), transparent 70%)" }}
      />
      <div className={`relative z-10 max-w-[1200px] mx-auto px-4 sm:px-12 ${compact ? "pt-16 sm:pt-20 pb-12 sm:pb-16" : "pt-16 sm:pt-24 pb-14 sm:pb-24"}`}>
        {breadcrumbs && (
          <nav aria-label="Brödsmulor" className="flex flex-wrap items-center gap-2 text-[14px] text-muted mb-7">
            {breadcrumbs.map((bc, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-faint" aria-hidden="true">/</span>}
                {bc.href ? (
                  <a href={bc.href} className="hover:text-heading transition-colors">{bc.label}</a>
                ) : (
                  <span aria-current="page">{bc.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && <span className="eyebrow">{badge}</span>}

        <h1
          className={`mt-5 ${compact ? "text-[clamp(32px,4.4vw,52px)]" : "text-[clamp(36px,5vw,60px)]"} leading-[1.05] text-heading max-w-[880px]`}
          style={{ fontWeight: 640, letterSpacing: "-0.035em" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-[17px] sm:text-[19px] leading-relaxed text-body max-w-[620px]">{subtitle}</p>
        )}

        {bullets && (
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-[14.5px] text-body">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {cta && (
          <div className="flex flex-wrap gap-3 mt-9">
            <a href={cta.href} className="premium-btn">
              <span>{cta.label}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
