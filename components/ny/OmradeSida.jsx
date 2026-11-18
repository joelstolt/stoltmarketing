import Link from "next/link";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import s from "./ny.module.css";
import { SITE } from "@/lib/local/data";

/* Mall för de tre områdessidorna (Fler hittar er, Fler blir kunder, Mindre handarbete).
   Varje sida skickar in sitt innehåll som data. Inga påhittade siffror; uppdrag är
   anonymiserade tills kunden sagt ja. */
export default function OmradeSida({ d }) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content" className={s.scope}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />

        {/* Toppen */}
        <section className={s.intro}>
          <div className={`${s.frame} ${s.introInner}`}>
            <nav className={s.crumbs} aria-label="Brödsmulor">
              <Link href="/">Start</Link>
              <span className={s.crumbSep} aria-hidden="true">/</span>
              <Link href="/tjanster">Det jag gör</Link>
              <span className={s.crumbSep} aria-hidden="true">/</span>
              <span aria-current="page">{d.namn}</span>
            </nav>
            <div className={s.introGrid}>
              <div>
                <p className={s.kicker}>{d.namn}</p>
                <h1 className={s.h1Sub}>{d.rubrik}</h1>
                <p className={s.heroLead}>{d.ingress}</p>
                <div className={s.heroActions}>
                  <Link href="/kontakt" className={s.btnPrimary} data-umami-event={`${d.key}-hero-cta`}>
                    Berätta vad ni behöver
                  </Link>
                  <Link href="/sa-funkar-det" className={s.btnGhost}>Så funkar det</Link>
                </div>
              </div>
              <div className={s.uiCard} aria-hidden="true" style={{ margin: 0 }}>
                <div className={s.uiHead}>
                  <span className={s.uiTitle}>{d.panel.titel}</span>
                  <span className={s.chip}>
                    <span className={s.dotAccent} />
                    {d.panel.etikett}
                  </span>
                </div>
                <div className={s.uiRows}>
                  {d.panel.rader.map(([namn, besk]) => (
                    <div key={namn} className={s.uiRow}>
                      <span className={s.uiRowName}>{namn}</span>
                      <span className={s.uiRowDesc}>{besk}</span>
                    </div>
                  ))}
                </div>
                <div className={s.uiFoot}>{d.panel.fot}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Det här ingår */}
        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={`${s.blockHead} ${s.reveal}`}>
              <h2 className={s.h2}>{d.ingarRubrik}</h2>
              <p className={s.blockLead}>{d.ingarIngress}</p>
            </div>
            <div className={`${s.cells} ${d.delar.length === 4 ? s.cells2 : ""} ${s.reveal}`}>
              {d.delar.map((del) =>
                del.href ? (
                  <Link key={del.titel} href={del.href} className={s.cell} id={del.id}>
                    <h3 className={s.cellTitle}>{del.titel}</h3>
                    <p className={s.cellText}>{del.text}</p>
                    <span className={s.cellLink}>{del.lank || "Läs mer"}</span>
                  </Link>
                ) : (
                  <div key={del.titel} className={s.cell} id={del.id}>
                    <h3 className={s.cellTitle}>{del.titel}</h3>
                    <p className={s.cellText}>{del.text}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Så ser arbetet ut */}
        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={s.split}>
              <div className={`${s.splitText} ${s.reveal}`}>
                <h2 className={s.h2}>{d.arbete.rubrik}</h2>
                {d.arbete.stycken.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <ul className={s.checkList}>
                  {d.arbete.punkter.map((p) => (
                    <li key={p}>
                      <Check size={16} strokeWidth={2.25} aria-hidden="true" className={s.checkIcon} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${s.caseNote} ${s.reveal}`} style={{ marginTop: 0, padding: 28 }}>
                <span className={s.caseLabel}>Från ett uppdrag</span>
                <p style={{ fontSize: 19, lineHeight: 1.5, letterSpacing: "-0.01em" }}>{d.uppdrag}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Frågor */}
        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={s.faq}>
              <h2 className={s.h2}>Vanliga frågor</h2>
              <div className={s.faqList}>
                {d.faq.map((f) => (
                  <div key={f.q} className={s.faqItem}>
                    <h3 className={s.faqQ}>{f.q}</h3>
                    <p className={s.faqA}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Andra områden */}
        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`} style={{ paddingTop: 72, paddingBottom: 72 }}>
            <div className={s.cells}>
              {d.andra.map((o) => (
                <Link key={o.href} href={o.href} className={s.cell}>
                  <h3 className={s.cellTitle}>{o.namn}</h3>
                  <p className={s.cellText}>{o.kort}</p>
                  <span className={s.cellLink}>Läs mer</span>
                </Link>
              ))}
              <Link href="/akut" className={s.cell}>
                <h3 className={s.cellTitle}>Akut hjälp</h3>
                <p className={s.cellText}>Har något slutat fungera? Jag börjar felsöka samma arbetsdag.</p>
                <span className={s.cellLink}>Till akut hjälp</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Avslut */}
        <section className={`${s.section} ${s.cta}`}>
          <div className={`${s.frame} ${s.ctaInner}`}>
            <h2 className={`${s.ctaTitle} ${s.reveal}`}>Berätta vad ni behöver.</h2>
            <p className={s.ctaText}>Några rader räcker. Ni får svar nästa arbetsdag.</p>
            <div className={s.heroActions}>
              <Link href="/kontakt" className={s.btnPrimary} data-umami-event={`${d.key}-avslut-cta`}>Skriv till mig</Link>
              <a href={SITE.phoneHref} className={s.btnGhost}>Ring {SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
