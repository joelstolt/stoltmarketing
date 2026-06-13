"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ── Scroll-triggered reveal ── */
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

/* ── Badge — gul flagga + versalrad (Rapsfält) ── */
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
          className="mt-5 font-heading font-600 text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading"
          style={{ maxWidth }}
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

/* ── Page hero for sub-pages (breadcrumb + badge + headline + subtitle + CTAs) ── */
export function PageHero({ breadcrumbs, badge, title, subtitle, bullets }) {
  return (
    <section className="hero-dark relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <Reveal>
            <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
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
          </Reveal>
        )}

        <Reveal delay={0.04}>
          <Badge>{badge}</Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 font-heading font-600 text-[clamp(38px,5.5vw,72px)] leading-[1.05] tracking-[-0.015em] text-heading max-w-[850px]">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[560px]">
              {subtitle}
            </p>
          </Reveal>
        )}

        {bullets && (
          <Reveal delay={0.16}>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-[14px] text-body font-500"
                >
                  <span className="w-2 h-2 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="/boka" className="premium-btn">
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
