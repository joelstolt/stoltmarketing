"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { OMRADEN, HUVUDMENY } from "@/lib/nav";
import { SITE } from "@/lib/local/data";
import c from "./chrome.module.css";

export default function Header() {
  const pathname = usePathname() || "/";
  const [meny, setMeny] = useState(false);
  const [mobil, setMobil] = useState(false);
  const megaRef = useRef(null);
  const knappRef = useRef(null);
  const stangTimer = useRef(null);
  const hovradVid = useRef(0);

  const aktiv = (href) => pathname === href || pathname.startsWith(`${href}/`);
  const omradeAktivt = OMRADEN.some((o) => aktiv(o.href)) || pathname.startsWith("/tjanster");

  useEffect(() => {
    setMeny(false);
    setMobil(false);
  }, [pathname]);

  useEffect(() => {
    if (!meny) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMeny(false);
        knappRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (!megaRef.current?.contains(e.target) && !knappRef.current?.contains(e.target)) setMeny(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [meny]);

  useEffect(() => {
    if (!mobil) return;
    const forra = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setMobil(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = forra;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobil]);

  const oppna = () => {
    clearTimeout(stangTimer.current);
    hovradVid.current = Date.now();
    setMeny(true);
  };
  /* Musen öppnar menyn redan vid hovring; ett klick direkt efter ska inte stänga den. */
  const klick = () => {
    if (Date.now() - hovradVid.current < 600) {
      setMeny(true);
      return;
    }
    setMeny((v) => !v);
  };
  const stangSnart = () => {
    clearTimeout(stangTimer.current);
    stangTimer.current = setTimeout(() => setMeny(false), 140);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Hoppa till innehållet</a>
      <header className={c.header}>
        <div className={c.inner}>
          <Link href="/" className={c.brand} aria-label="Stolt Marketing, till startsidan">
            <Logo />
          </Link>

          <nav className={c.nav} aria-label="Huvudmeny">
            <div className={c.navItem} onMouseEnter={oppna} onMouseLeave={stangSnart}>
              <button
                ref={knappRef}
                type="button"
                className={`${c.navLink} ${omradeAktivt ? c.navLinkActive : ""}`}
                aria-expanded={meny}
                aria-controls="mega-meny"
                onClick={klick}
              >
                Det jag gör
                <ChevronDown size={15} strokeWidth={2} aria-hidden="true" className={`${c.chev} ${meny ? c.chevOpen : ""}`} />
              </button>
            </div>
            {HUVUDMENY.map((l) => (
              <Link key={l.href} href={l.href} className={`${c.navLink} ${aktiv(l.href) ? c.navLinkActive : ""}`}>
                {l.namn}
              </Link>
            ))}
          </nav>

          <div className={c.actions}>
            <Link href="/akut" className={`${c.akut} ${aktiv("/akut") ? c.navLinkActive : ""}`}>
              Akut hjälp
            </Link>
            <Link href="/kontakt" className={c.cta} data-umami-event="header-cta">
              Berätta vad ni behöver
            </Link>
            <button
              type="button"
              className={c.burger}
              aria-label={mobil ? "Stäng menyn" : "Öppna menyn"}
              aria-expanded={mobil}
              aria-controls="mobilmeny"
              onClick={() => setMobil((v) => !v)}
            >
              {mobil ? <X size={22} strokeWidth={1.8} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.8} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mega-meny"
          ref={megaRef}
          className={`${c.mega} ${meny ? c.megaOpen : ""}`}
          onMouseEnter={oppna}
          onMouseLeave={stangSnart}
          hidden={!meny}
        >
          <div className={c.megaInner}>
            {OMRADEN.map((o) => (
              <div key={o.key} className={c.megaCol}>
                <Link href={o.href} className={c.megaHead}>
                  <span className={c.megaTitle}>{o.namn}</span>
                  <span className={c.megaDesc}>{o.kort}</span>
                </Link>
                <ul className={c.megaList}>
                  {o.tjanster.map((t) => (
                    <li key={t.href}>
                      <Link href={t.href}>{t.namn}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={`${c.megaCol} ${c.megaSide}`}>
              <span className={c.megaTitle}>Har något slutat fungera?</span>
              <span className={c.megaDesc}>Jag börjar felsöka samma arbetsdag.</span>
              <Link href="/akut" className={c.megaSideLink}>Akut hjälp</Link>
              <Link href="/tjanster" className={c.megaSideLink}>Alla tjänster</Link>
            </div>
          </div>
        </div>
      </header>

      <div id="mobilmeny" className={`${c.mobile} ${mobil ? c.mobileOpen : ""}`} hidden={!mobil}>
        <nav className={c.mobileNav} aria-label="Mobilmeny">
          {OMRADEN.map((o) => (
            <div key={o.key} className={c.mobileGroup}>
              <Link href={o.href} className={c.mobileArea}>{o.namn}</Link>
              <div className={c.mobileSubs}>
                {o.tjanster.map((t) => (
                  <Link key={t.href} href={t.href}>{t.namn}</Link>
                ))}
              </div>
            </div>
          ))}
          <div className={c.mobileGroup}>
            {HUVUDMENY.map((l) => (
              <Link key={l.href} href={l.href} className={c.mobileArea}>{l.namn}</Link>
            ))}
            <Link href="/akut" className={c.mobileArea}>Akut hjälp</Link>
          </div>
        </nav>
        <div className={c.mobileFoot}>
          <Link href="/kontakt" className={c.cta}>Berätta vad ni behöver</Link>
          <a href={SITE.phoneHref} className={c.mobilePhone}>Ring {SITE.phone}</a>
        </div>
      </div>
    </>
  );
}
