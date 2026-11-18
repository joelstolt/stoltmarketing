import Link from "next/link";
import { Logo } from "./Logo";
import { OMRADEN, FORETAGET } from "@/lib/nav";
import { CITY_ORDER, CITIES, SITE } from "@/lib/local/data";
import c from "./chrome.module.css";

export default function Footer() {
  const ar = new Date().getFullYear();
  return (
    <footer className={c.footer}>
      <div className={c.footTop}>
        <div className={c.footBrand}>
          <Logo />
          <p className={c.footTag}>Utvecklaren ni inte har. Svar nästa arbetsdag.</p>
          <div className={c.footContact}>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </div>
          <Link href="/kontakt" className={c.cta}>Berätta vad ni behöver</Link>
        </div>

        <div className={c.footCols}>
          <div>
            <p className={c.footHead}>Det jag gör</p>
            <ul className={c.footList}>
              {OMRADEN.map((o) => (
                <li key={o.href}><Link href={o.href}>{o.namn}</Link></li>
              ))}
              <li><Link href="/tjanster">Alla tjänster</Link></li>
            </ul>
          </div>
          <div>
            <p className={c.footHead}>Tjänster</p>
            <ul className={c.footList}>
              {OMRADEN.flatMap((o) => o.tjanster.filter((t) => !t.href.includes("#"))).map((t) => (
                <li key={t.href}><Link href={t.href}>{t.namn}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className={c.footHead}>Företaget</p>
            <ul className={c.footList}>
              {FORETAGET.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.namn}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className={c.footHead}>Orter</p>
            <ul className={c.footList}>
              {CITY_ORDER.map((k) => (
                <li key={k}><Link href={CITIES[k].hub}>{CITIES[k].name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={c.footBottom}>
        <span>© {ar} Stolt Marketing, Hässleholm. Kunder i hela Sverige.</span>
        <Link href="/integritet">Integritet och personuppgifter</Link>
      </div>
    </footer>
  );
}
