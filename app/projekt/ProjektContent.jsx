import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CASES, synligtCase } from "@/lib/case-data";
import { OMRADEN } from "@/lib/nav";
import { SITE } from "@/lib/local/data";
import s from "@/components/ny/ny.module.css";
import p from "./projekt.module.css";

/* /projekt i nya profilen (2026-11-17). Casen grupperas efter de tre områdena.
   Texterna på korten kommer från lib/case-data.js (publicerade casesidor).
   Inga nya kundnamn, inga påhittade siffror. */

const GRUPPER = [
  {
    key: "hittar",
    lead: "Sidor som svarar på det kunderna söker efter, och mätning av vilka sidor som ger förfrågningar.",
    case: ["niklassonsflytt", "arkipel", "ngtab", "gardetshundtrim"],
  },
  {
    key: "kunder",
    lead: "Sajter och en webbshop där det är enkelt att ta nästa steg: be om offert, söka plats eller handla.",
    case: ["premiebygg", "batteriproffs", "forskolan-harpan", "pingstkyrkan"],
  },
  {
    key: "handarbete",
    lead: "System som tar bort handarbete: CRM med AI-agent, synk mellan system, bokning och redaktioner som publicerar själva.",
    case: ["eget-crm", "sonepar-utbildningar", "rbn-utbildning", "linguista", "edshare"],
  },
];

/* Uppdrag utan egen casesida. Samma texter som redan låg publicerade på /projekt. */
const FLER = [
  {
    title: "LIA-platsbanken",
    omrade: "Mindre handarbete",
    text: "Plattform för AcadeMedias YH-studenter och arbetsgivare med registrering, sök och matchning.",
  },
  {
    title: "SMH / KYH / Hermods",
    omrade: "Fler blir kunder",
    text: "Förvaltning och utveckling av utbildningsbutiker, bland annat betalning och deltagarflöden.",
  },
  {
    title: "Omniway",
    omrade: "Fler blir kunder",
    text: "Webbplats för en lärplattform med arbete kring kontrast, struktur och tillgänglighet.",
    href: "https://omniway.se",
  },
];

function CaseKort({ c, eager }) {
  return (
    <Link href={`/projekt/${c.slug}`} className={p.card}>
      <img
        src={c.screenshot}
        alt=""
        width="1440"
        height="900"
        loading={eager ? "eager" : "lazy"}
        className={p.cardImg}
      />
      <div className={p.cardBody}>
        <div className={p.cardMeta}>
          <span>{c.badge}</span>
        </div>
        <h3 className={p.cardTitle}>{c.title}</h3>
        <p className={p.cardText}>{c.heroSubtitle}</p>
        <span className={p.cardLink}>Läs caset om {c.title}</span>
      </div>
    </Link>
  );
}

export default function ProjektContent() {
  const omrade = Object.fromEntries(OMRADEN.map((o) => [o.key, o]));

  return (
    <>
      {/* Toppen */}
      <section className={s.intro}>
        <div className={`${s.frame} ${s.introInner}`}>
          <nav className={s.crumbs} aria-label="Brödsmulor">
            <Link href="/">Start</Link>
            <span className={s.crumbSep} aria-hidden="true">/</span>
            <span aria-current="page">Case</span>
          </nav>
          <p className={s.kicker}>Case</p>
          <h1 className={s.h1Sub} style={{ maxWidth: 820 }}>Det jag har byggt åt andra.</h1>
          <p className={s.heroLead}>
            Sajter, en webbshop och publicering för redaktioner. Varje case visar vad som behövdes, vad jag byggde och
            vad som går att mäta, med källa.
          </p>
          <div className={s.heroActions}>
            <Link href="/kontakt" className={s.btnPrimary} data-umami-event="projekt-hero-cta">
              Berätta vad ni behöver
            </Link>
          </div>
          <nav className={p.jump} aria-label="Case per område">
            <span className={p.jumpLabel}>Per område:</span>
            {GRUPPER.map((g) => (
              <a key={g.key} href={`#${g.key}`}>{omrade[g.key].namn}</a>
            ))}
            <a href="#fler">Fler uppdrag</a>
          </nav>
        </div>
      </section>

      {/* En sektion per område */}
      {GRUPPER.map((g, gi) => {
        const o = omrade[g.key];
        return (
          <section key={g.key} id={g.key} className={s.section} style={{ scrollMarginTop: 72 }}>
            <div className={`${s.frame} ${s.block}`}>
              <div className={`${p.groupHead} ${s.reveal}`}>
                <div>
                  <h2 className={s.h2}>{o.namn}</h2>
                  <p className={s.blockLead}>{g.lead}</p>
                </div>
                <Link href={o.href} className={p.groupLink}>Mer om {o.namn.toLowerCase()}</Link>
              </div>
              <div className={p.grid}>
                {g.case.filter(synligtCase).map((slug, i) => (
                  <CaseKort key={slug} c={CASES[slug]} eager={gi === 0 && i < 2} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Fler uppdrag */}
      <section id="fler" className={s.section} style={{ scrollMarginTop: 72 }}>
        <div className={`${s.frame} ${s.block}`}>
          <div className={`${s.blockHead} ${s.reveal}`}>
            <h2 className={s.h2}>Fler uppdrag</h2>
            <p className={s.blockLead}>
              Uppdrag utan egen casesida än. Här redovisas inga uppmätta affärsresultat.
            </p>
          </div>
          <div className={`${s.cells} ${s.cells2}`}>
            {FLER.map((f) => (
              <div key={f.title} className={s.cell}>
                <span className={p.otherArea}>{f.omrade}</span>
                <h3 className={s.cellTitle}>{f.title}</h3>
                <p className={s.cellText}>{f.text}</p>
                {f.href && (
                  <a href={f.href} target="_blank" rel="noopener noreferrer" className={p.otherExt}>
                    Besök {f.title}
                    <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
                    <span className="sr-only"> (öppnas i ny flik)</span>
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className={p.disclaimer}>
            Kontaktaktiviteter, levererade funktioner och tekniska tester visar olika saker. Varje case förklarar sin
            källa och period. Resultaten är inga löften om vad er sajt kommer att ge.
          </p>
        </div>
      </section>

      {/* Avslut */}
      <section className={`${s.section} ${s.cta}`}>
        <div className={`${s.frame} ${s.ctaInner}`}>
          <h2 className={`${s.ctaTitle} ${s.reveal}`}>Berätta vad ni behöver.</h2>
          <p className={s.ctaText}>Några rader räcker. Ni får svar nästa arbetsdag.</p>
          <div className={s.heroActions}>
            <Link href="/kontakt" className={s.btnPrimary} data-umami-event="projekt-avslut-cta">Skriv till mig</Link>
            <a href={SITE.phoneHref} className={s.btnGhost}>Ring {SITE.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
