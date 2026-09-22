"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
} from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/local/data";

const PAPER = "#F2ECDD";
const GUL = "#F2C230";
const DIM = "rgba(242,236,221,0.62)";
const FAINT = "rgba(242,236,221,0.4)";
const LINE = "rgba(242,236,221,0.14)";

/* Menyn säljer en sak först (rutan för förfrågningar). Tjänstesidorna lever kvar på
   sina adresser och nås via /tjanster, startsidan och sidfoten. */
const navItems = [
  { label: "Förfrågningar", href: "/forfragningar" },
  { label: "Priser", href: "/priser" },
  { label: "Projekt", href: "/projekt" },
  { label: "Sajtkoll", href: "/sajtkoll" },
  { label: "Om mig", href: "/om" },
  { label: "Kontakt", href: "/kontakt" },
];

const navLinkStyle = {
  fontFamily: "var(--font-ui)",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: DIM,
  textDecoration: "none",
  transition: "color 0.2s",
  whiteSpace: "nowrap",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ═══ HEADER BAR ═══ */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10001,
          height: 72,
          display: "flex",
          alignItems: "center",
          background:
            scrolled || isOpen ? "rgba(15,13,8,0.85)" : "transparent",
          backdropFilter: scrolled || isOpen ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled || isOpen ? "blur(12px)" : "none",
          borderBottom:
            scrolled || isOpen
              ? `1px solid ${LINE}`
              : "1px solid transparent",
          transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-heading"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 9,
              fontSize: 24,
              fontWeight: 600,
              fontVariationSettings: '"opsz" 144',
              letterSpacing: "-0.01em",
              color: PAPER,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              marginRight: 24,
            }}
          >
            <span className="sr-only">Stolt Marketing, till startsidan</span>
            <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "baseline" }}>
              sto
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "0.115em",
                  height: "0.72em",
                  background: GUL,
                  margin: "0 0.075em",
                }}
              />
              t
            </span>
            <span
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: DIM,
              }}
            >
              Marketing
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex"
            style={{
              alignItems: "center",
              gap: 22,
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={navLinkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = GUL)}
                onMouseLeave={(e) => (e.currentTarget.style.color = DIM)}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={SITE.phoneHref}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "var(--font-ui)",
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
                color: PAPER,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GUL)}
              onMouseLeave={(e) => (e.currentTarget.style.color = PAPER)}
            >
              <Phone size={14} color={GUL} />
              {SITE.phone}
            </a>

            <Link
              href="/boka"
              className="premium-btn"
              style={{ fontSize: 10.5, padding: "11px 22px" }}
            >
              Boka genomgång
            </Link>
          </nav>

          {/* Mobile hamburger: två linjer i olika längd (gul accent, samma
              signatur som wordmarkens streck) som morfar till ett kryss.
              Etiketten säger vad knappen gör, ikonen är detaljen. */}
          <style>{`
            /* OBS: ingen display här. Inline-<style> ligger efter Tailwind i
               kaskaden och vann över lg:hidden med samma specificitet, så
               knappen syntes på desktop (buggen 2026-08-24). Display styrs nu
               av Tailwind-klasserna flex + lg:hidden på knappen. */
            .mob-menu-btn { align-items: center; gap: 11px; background: none; border: none; cursor: pointer; padding: 10px 2px 10px 10px; position: relative; z-index: 10002; }
            .mob-menu-label { font-family: var(--font-ui); font-size: 10px; font-weight: 600; letter-spacing: 0.26em; text-transform: uppercase; color: rgba(242,236,221,0.62); transition: color 0.25s; }
            .mob-menu-btn.is-open .mob-menu-label { color: #F2C230; }
            .mob-burger { position: relative; width: 26px; height: 14px; display: block; }
            .mob-burger span { position: absolute; right: 0; height: 2px; border-radius: 2px; transition: transform 0.36s cubic-bezier(0.16,1,0.3,1), width 0.36s cubic-bezier(0.16,1,0.3,1), top 0.36s cubic-bezier(0.16,1,0.3,1), background 0.25s; }
            .mob-burger .l1 { top: 2px; width: 26px; background: #F2ECDD; }
            .mob-burger .l2 { top: 10px; width: 15px; background: #F2C230; }
            .mob-menu-btn:active .mob-burger .l2 { width: 26px; }
            .mob-menu-btn.is-open .mob-burger .l1 { top: 6px; width: 24px; transform: rotate(45deg); background: #F2C230; }
            .mob-menu-btn.is-open .mob-burger .l2 { top: 6px; width: 24px; transform: rotate(-45deg); background: #F2C230; }
            @media (prefers-reduced-motion: reduce) { .mob-burger span { transition: none; } }
          `}</style>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex lg:hidden mob-menu-btn ${isOpen ? "is-open" : ""}`}
            aria-label={isOpen ? "Stäng menyn" : "Öppna menyn"}
            aria-expanded={isOpen}
          >
            <span className="mob-menu-label">{isOpen ? "Stäng" : "Meny"}</span>
            <span className="mob-burger" aria-hidden="true">
              <span className="l1" />
              <span className="l2" />
            </span>
          </button>
        </div>
      </header>

      {/* ═══ MOBILE MENU (portal-style, outside header) ═══ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10000,
              background: "#0F0D08",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
            className="lg:hidden"
          >
            <div style={{ padding: "24px 24px 40px" }}>
              {/* Other nav */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-heading"
                  style={{
                    display: "block",
                    padding: "14px 0",
                    fontSize: 20,
                    fontWeight: 500,
                    color: PAPER,
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA */}
              <div style={{ marginTop: 24 }}>
                <Link
                  href="/boka"
                  onClick={() => setIsOpen(false)}
                  className="premium-btn"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    fontSize: 11.5,
                    padding: "16px 32px",
                  }}
                >
                  Boka kostnadsfri genomgång
                </Link>

                <a
                  href={SITE.phoneHref}
                  onClick={() => setIsOpen(false)}
                  style={{
                    marginTop: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 9,
                    fontFamily: "var(--font-ui)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: PAPER,
                    textDecoration: "none",
                  }}
                >
                  <Phone size={17} color={GUL} />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
