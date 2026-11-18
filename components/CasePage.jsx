import Link from "next/link";
import { ExternalLink, Check } from "lucide-react";
import s from "@/components/ny/ny.module.css";
import c from "./CasePage.module.css";

/* Mall för casesidorna under /projekt/<namn>, ny profil 2026-11-17.
   Texterna kommer oförändrade från lib/case-data.js. Bara formen är ny.
   Sidan läggs i <main> av respektive page.js, därför sätts scope-klassen här. */
export default function CasePage({ data }) {
  return (
    <div className={s.scope}>
      {/* Toppen */}
      <section className={s.intro}>
        <div className={`${s.frame} ${s.introInner}`}>
          <nav className={s.crumbs} aria-label="Brödsmulor">
            <Link href="/">Start</Link>
            <span className={s.crumbSep} aria-hidden="true">/</span>
            <Link href="/projekt">Case</Link>
            <span className={s.crumbSep} aria-hidden="true">/</span>
            <span aria-current="page">{data.title}</span>
          </nav>
          <p className={s.kicker}>{data.badge}</p>
          <h1 className={s.h1Sub} style={{ maxWidth: 900 }}>{data.heroTitle}</h1>
          <p className={s.heroLead}>{data.heroSubtitle}</p>
          <div className={s.heroActions}>
            <Link href="/kontakt" className={s.btnPrimary} data-umami-event={`case-${data.slug}-hero-cta`}>
              Berätta vad ni behöver
            </Link>
            {data.liveUrl && (
              <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className={`${s.btnGhost} ${c.wrapBtn}`}>
                Besök {data.title}
                <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only"> (öppnas i ny flik)</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Skärmbild */}
      {data.screenshot && (
        <section className={s.section}>
          <div className={`${s.frame}`} style={{ paddingTop: 56, paddingBottom: 56 }}>
            <figure className={c.shot}>
              <a
                href={data.screenshot}
                target="_blank"
                rel="noopener noreferrer"
                className={c.shotLink}
                aria-label={`Öppna större skärmbild av ${data.title}`}
              >
                <img
                  src={data.screenshot}
                  alt={`Skärmbild av ${data.title}s webbplats`}
                  className={c.shotImg}
                  width="1440"
                  height="900"
                  fetchPriority="high"
                />
              </a>
              <figcaption className={c.shotCaption}>
                {data.screenshotCaption || "Sparad skärmbild av leveransen. Öppna bilden för att se den större."}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* Behovet och det jag byggde */}
      <section className={s.section}>
        <div className={`${s.frame} ${s.block}`}>
          <div className={c.body}>
            <div className={c.prose}>
              <h2 className={s.h2}>Behovet</h2>
              {data.challenge.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h2 className={`${s.h2} ${c.h2Gap}`}>Det jag byggde</h2>
              {data.solution.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className={c.side}>
              <h2 className={c.sideTitle}>Det här ingick</h2>
              <ul className={s.checkList}>
                {data.deliverables.map((d) => (
                  <li key={d}>
                    <Check size={16} strokeWidth={2.25} aria-hidden="true" className={s.checkIcon} />
                    {d}
                  </li>
                ))}
              </ul>
              {data.liveUrl && (
                <div className={c.sideActions}>
                  <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className={`${s.btnGhost} ${c.wrapBtn}`}>
                    Besök {data.title}
                    <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
                    <span className="sr-only"> (öppnas i ny flik)</span>
                  </a>
                </div>
              )}
              {data.tech?.length > 0 && (
                <details className={c.tech}>
                  <summary>Teknik i projektet</summary>
                  <p>{data.tech.join(", ")}</p>
                </details>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Så flödar det */}
      {data.flode?.length > 0 && (
        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={s.blockHead}>
              <h2 className={s.h2}>Så fungerar det, steg för steg</h2>
            </div>
            <div className={`${s.cells} ${c.flow}`}>
              {data.flode.map((f) => (
                <div key={f.titel} className={s.cell}>
                  <h3 className={s.cellTitle}>{f.titel}</h3>
                  <p className={s.cellText}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Leverans och resultat */}
      <section className={s.section}>
        <div className={`${s.frame} ${s.block}`}>
          <div className={s.blockHead}>
            <h2 className={s.h2}>Leverans och redovisade resultat</h2>
          </div>
          <div className={s.cells}>
            {data.results.map((r) => (
              <div key={r.label} className={s.cell}>
                <p className={c.resultValue}>{r.value}</p>
                <p className={s.cellText}>{r.label}</p>
              </div>
            ))}
          </div>

          {data.comparison && (
            <div className={c.compare}>
              <h3 className={c.compareTitle}>Före och efter</h3>
              <p className={c.compareLead}>
                Två redovisade testlägen. Förutsättningar och begränsningar anges i metodrutan.
              </p>
              <dl className={c.compareList}>
                {data.comparison.map((rad) => (
                  <div key={rad.label} className={c.compareRow}>
                    <dt>{rad.label}</dt>
                    <dd className={c.compareCols}>
                      <div>
                        <span className={c.compareSmall}>Före ombyggnaden</span>
                        <span className={c.compareNum}>{rad.before}</span>
                      </div>
                      <div>
                        <span className={c.compareSmall}>Efter ombyggnaden</span>
                        <span className={c.compareNum}>{rad.after}</span>
                      </div>
                    </dd>
                    {rad.delta && <dd className={c.compareSmall}>Förändring: {rad.delta}</dd>}
                  </div>
                ))}
              </dl>
            </div>
          )}

          {data.measurementNote && (
            <aside className={`${s.caseNote} ${c.note}`} aria-label="Källor och mätningens begränsningar">
              <span className={s.caseLabel}>Så ska uppgifterna läsas</span>
              <p>{data.measurementNote}</p>
            </aside>
          )}
        </div>
      </section>

      {/* Avslut */}
      <section className={`${s.section} ${s.cta}`}>
        <div className={`${s.frame} ${s.ctaInner}`}>
          <h2 className={s.ctaTitle}>Behöver ni något liknande?</h2>
          <p className={s.ctaText}>Berätta vad ni behöver eller vad som krånglar. Ni får svar nästa arbetsdag.</p>
          <div className={s.heroActions}>
            <Link href="/kontakt" className={s.btnPrimary} data-umami-event={`case-${data.slug}-avslut-cta`}>
              Skriv till mig
            </Link>
            <Link href="/projekt" className={s.btnGhost}>Fler case</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
