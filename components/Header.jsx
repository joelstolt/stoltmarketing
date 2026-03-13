"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Cpu,
  Search,
  Shield,
  MonitorSmartphone,
} from "lucide-react";
import Link from "next/link";

const serviceItems = [
  {
    icon: Globe,
    label: "Webbutveckling",
    desc: "Moderna sajter som konverterar",
    href: "/tjanster/webbutveckling",
  },
  {
    icon: Cpu,
    label: "AI & Automation",
    desc: "Smarta verktyg som sparar tid",
    href: "/tjanster/ai-automation",
  },
  {
    icon: Search,
    label: "SEO",
    desc: "Synlighet som ger fler kunder",
    href: "/tjanster/seo",
  },
  {
    icon: Shield,
    label: "Managed hemsida",
    desc: "Drift, underhåll och förbättringar",
    href: "/tjanster/managed-hemsida",
  },
];

const navItems = [
  { label: "Projekt", href: "/projekt" },
  { label: "Om mig", href: "/om" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

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

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

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
            scrolled || isOpen
              ? "rgba(250, 250, 248, 0.95)"
              : "transparent",
          backdropFilter: scrolled || isOpen ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled || isOpen ? "blur(20px)" : "none",
          borderBottom:
            scrolled || isOpen
              ? "1px solid rgba(0,0,0,0.04)"
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
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#0C0F1A",
              textDecoration: "none",
            }}
          >
            Stolt Marketing
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex"
            style={{
              alignItems: "center",
              gap: 28,
            }}
          >
            {/* Tjänster dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/tjanster"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#6B7280",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0C0F1A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
              >
                Tjänster
                <ChevronDown
                  size={14}
                  style={{
                    transition: "transform 0.2s",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)",
                  }}
                />
              </Link>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      paddingTop: 12,
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(255,255,255,0.97)",
                        backdropFilter: "blur(20px)",
                        borderRadius: 16,
                        border: "1px solid #E5E5E0",
                        boxShadow:
                          "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                        padding: 12,
                        width: 320,
                      }}
                    >
                      <Link
                        href="/tjanster"
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "10px 12px",
                          borderRadius: 10,
                          textDecoration: "none",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "rgba(29,78,216,0.04)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 8,
                            background: "rgba(29,78,216,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <MonitorSmartphone size={16} color="#1D4ED8" />
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: "#0C0F1A",
                            }}
                          >
                            Alla tjänster
                          </div>
                          <div style={{ fontSize: 12, color: "#6B7280" }}>
                            Översikt av hela erbjudandet
                          </div>
                        </div>
                      </Link>

                      <div
                        style={{
                          height: 1,
                          background: "#F0F0EC",
                          margin: "4px 0",
                        }}
                      />

                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "10px 12px",
                            borderRadius: 10,
                            textDecoration: "none",
                            transition: "background 0.15s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background =
                              "rgba(29,78,216,0.04)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 8,
                              background: "rgba(29,78,216,0.06)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <item.icon size={16} color="#1D4ED8" />
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 600,
                                color: "#0C0F1A",
                              }}
                            >
                              {item.label}
                            </div>
                            <div style={{ fontSize: 12, color: "#6B7280" }}>
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#6B7280",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0C0F1A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
              >
                {item.label}
              </Link>
            ))}

            <Link href="/kontakt" className="premium-btn" style={{ fontSize: 14, padding: "10px 20px" }}>
              Boka kostnadsfri genomgång
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            style={{
              padding: 8,
              color: "#6B7280",
              background: "none",
              border: "none",
              cursor: "pointer",
              position: "relative",
              zIndex: 10002,
            }}
            aria-label="Meny"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              background: "#FAFAF8",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
            className="lg:hidden"
          >
            <div style={{ padding: "24px 24px 40px" }}>
              {/* Tjänster section */}
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                Tjänster
              </p>

              <Link
                href="/tjanster"
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "12px 0",
                  textDecoration: "none",
                  borderBottom: "1px solid #F0F0EC",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(29,78,216,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MonitorSmartphone size={18} color="#1D4ED8" />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "#0C0F1A" }}>
                    Alla tjänster
                  </div>
                  <div style={{ fontSize: 13, color: "#6B7280" }}>
                    Översikt av erbjudandet
                  </div>
                </div>
              </Link>

              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 0",
                    textDecoration: "none",
                    borderBottom: "1px solid #F0F0EC",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(29,78,216,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={18} color="#1D4ED8" />
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#0C0F1A" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 13, color: "#6B7280" }}>
                      {item.desc}
                    </div>
                  </div>
                </Link>
              ))}

              {/* Divider */}
              <div style={{ height: 1, background: "#E5E5E0", margin: "24px 0" }} />

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
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#3B3F4A",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA */}
              <div style={{ marginTop: 24 }}>
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="premium-btn"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    fontSize: 16,
                    padding: "16px 32px",
                  }}
                >
                  Boka kostnadsfri genomgång
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
