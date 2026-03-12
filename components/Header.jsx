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
  { label: "Projekt", href: "/#case" },
  { label: "Om mig", href: "/#om" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
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
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled || isOpen
          ? "border-b border-black/[0.04]"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        zIndex: isOpen ? 10000 : 50,
        background: scrolled || isOpen ? "rgba(250,250,248,0.95)" : "transparent",
        backdropFilter: scrolled || isOpen ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-[18px] font-700 tracking-tight text-heading relative z-50"
        >
          Stolt Marketing
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Tjänster dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/tjanster"
              className="flex items-center gap-1 text-[15px] font-500 text-muted hover:text-heading transition-colors duration-200"
            >
              Tjänster
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                >
                  <div className="bg-surface/95 backdrop-blur-xl rounded-[16px] border border-border shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] p-3 w-[320px]">
                    <div className="flex flex-col gap-1">
                      {/* All services link */}
                      <Link
                        href="/tjanster"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-primary/[0.04] transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/6 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                          <MonitorSmartphone
                            size={16}
                            className="text-primary"
                          />
                        </div>
                        <div>
                          <div className="text-[14px] font-600 text-heading">
                            Alla tjänster
                          </div>
                          <div className="text-[12px] text-muted">
                            Översikt av hela erbjudandet
                          </div>
                        </div>
                      </Link>

                      <div className="h-px bg-border-light my-1" />

                      {serviceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-primary/[0.04] transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary/6 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                            <item.icon size={16} className="text-primary" />
                          </div>
                          <div>
                            <div className="text-[14px] font-600 text-heading">
                              {item.label}
                            </div>
                            <div className="text-[12px] text-muted">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-500 text-muted hover:text-heading transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#kontakt"
            className="premium-btn text-[14px] !py-2.5 !px-5"
          >
            Boka kostnadsfri genomgång
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 p-2 text-muted hover:text-heading transition-colors"
          aria-label="Meny"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 lg:hidden"
            style={{ zIndex: 9999, background: "#FAFAF8" }}
          >
            <nav className="flex flex-col items-start px-8 pt-28 pb-10 h-full overflow-y-auto">
              {/* Tjänster section */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="w-full mb-6"
              >
                <p className="text-[11px] font-700 text-muted uppercase tracking-widest mb-4">
                  Tjänster
                </p>
                <div className="flex flex-col gap-1">
                  <Link
                    href="/tjanster"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3.5 py-3 px-4 -mx-4 rounded-xl hover:bg-primary/[0.04] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center">
                      <MonitorSmartphone size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-[16px] font-600 text-heading">Alla tjänster</div>
                      <div className="text-[13px] text-muted">Översikt av erbjudandet</div>
                    </div>
                  </Link>
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3.5 py-3 px-4 -mx-4 rounded-xl hover:bg-primary/[0.04] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-[16px] font-600 text-heading">{item.label}</div>
                        <div className="text-[13px] text-muted">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-6" />

              {/* Other nav items */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="flex flex-col gap-1 w-full mb-8"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-[18px] font-heading font-600 text-body hover:text-heading transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full"
              >
                <Link
                  href="/#kontakt"
                  onClick={() => setIsOpen(false)}
                  className="premium-btn w-full justify-center text-[16px]"
                >
                  Boka kostnadsfri genomgång
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
