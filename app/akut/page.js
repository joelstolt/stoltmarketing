import Link from "next/link";
import { Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import s from "@/components/ny/ny.module.css";
import { SITE } from "@/lib/local/data";

export const metadata = {
  title: "Akut hjälp: när sajten, kassan eller formuläret slutat fungera",
  description:
    "Kassan tar inte betalt, formuläret skickar inget eller sajten ligger nere? Jag börjar felsöka samma arbetsdag. 1 500 kr/h exkl moms.",
  alternates: { canonical: "https://www.stoltmarketing.se/akut" },
};

/* Akut hjälp är det enda köpsättet med publikt pris (Joels beslut 2026-11-17).
   Beloppet 1 500 kr/h är förslaget i RAPPORT.md, beslut 2. */

const LOGG = [
  { tid: "09:52", text: "Kunden skriver: samtliga beställningar har misslyckats de senaste veckorna." },
  { tid: "", text: "Felsöker kopplingen mellan webbutiken och betalningen." },
  { tid: "", text: "Felet hittat och rättat." },
  { tid: "", text: "Testköp genomfört och godkänt." },
  { tid: "11:21", text: "Klart. Beställningarna går igenom igen.", klar: true },
];

const FEL = [
  { titel: "Betalningar som inte går igenom", text: "Kassan tar inte betalt, eller beställningar fastnar på vägen." },
  { titel: "Formulär som inte kommer fram", text: "Kunder skriver, men inget hamnar hos er." },
  { titel: "Sajten ligger nere", text: "Felmeddelande, vit sida eller en sajt som är så långsam att ingen väntar." },
  { titel: "Fel efter en uppdatering", text: "Något som fungerade i går gör det inte i dag." },
  { titel: "Mätningen visar noll", text: "Annonser eller statistik som plötsligt slutat räkna." },
  { titel: "Något annat", text: "Beskriv vad som händer, så säger jag om det är något jag kan lösa." },
];

const GANG = [
  { namn: "Hör av dig", text: "Ring eller skriv. Beskriv vad som händer och sedan när." },
  { namn: "Felsökning", text: "Jag börjar samma arbetsdag och säger vad det är så fort jag vet." },
  { namn: "Rättning", text: "Jag rättar och visar att det fungerar, till exempel med ett testköp." },
  { namn: "Sammanfattning", text: "Ni får veta vad som hände och vad som kan göras så att det inte händer igen." },
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className={s.scope}>
        <section className={s.intro}>
          <div className={`${s.frame} ${s.introInner}`}>
            <nav className={s.crumbs} aria-label="Brödsmulor">
              <Link href="/">Start</Link>
              <span className={s.crumbSep} aria-hidden="true">/</span>
              <span aria-current="page">Akut hjälp</span>
            </nav>
            <div className={s.introGrid}>
              <div>
                <p className={s.kicker}>Akut hjälp</p>
                <h1 className={s.h1Sub}>När något har slutat fungera.</h1>
                <p className={s.heroLead}>
                  Kassan tar inte betalt, formuläret skickar inget eller sajten ligger nere. Jag börjar felsöka samma
                  arbetsdag.
                </p>
                <p className={s.heroBreadth}>
                  1 500 kr/h exkl moms, minst en timme. Hör du av dig efter arbetstid börjar jag nästa arbetsdag.
                </p>
                <div className={s.heroActions}>
                  <a href={SITE.phoneHref} className={s.btnPrimary} data-umami-event="akut-ring">
                    <Phone size={16} strokeWidth={2} aria-hidden="true" />
                    Ring {SITE.phone}
                  </a>
                  <Link href="/kontakt?amne=akut" className={s.btnGhost} data-umami-event="akut-skriv">Skriv i stället</Link>
                </div>
              </div>

              <figure className={s.logPanel}>
                <div className={s.logHead}>
                  <div>
                    <div className={s.logKicker}>Ärende</div>
                    <div className={s.logTitle}>Webbutiken tar inte betalt</div>
                  </div>
                  <span className={s.chip}>
                    <span className={s.dotAccent} />
                    Löst samma förmiddag
                  </span>
                </div>
                <ol className={s.logList}>
                  {LOGG.map((rad, i) => (
                    <li key={i} className={`${s.logRow} ${rad.klar ? s.logRowDone : ""}`}>
                      <span className={s.logTime}>{rad.tid}</span>
                      <span className={s.logDot} aria-hidden="true" />
                      <span className={s.logText}>{rad.text}</span>
                    </li>
                  ))}
                </ol>
                <figcaption className={s.logCaption}>Ur ett riktigt uppdrag, augusti 2026. Kunden är anonymiserad.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={`${s.blockHead} ${s.reveal}`}>
              <h2 className={s.h2}>Det här brukar det vara</h2>
              <p className={s.blockLead}>
                I WordPress, WooCommerce, Webflow eller egen kod, oavsett vem som byggde sajten från början.
              </p>
            </div>
            <div className={`${s.cells} ${s.reveal}`}>
              {FEL.map((f) => (
                <div key={f.titel} className={s.cell}>
                  <h3 className={s.cellTitle}>{f.titel}</h3>
                  <p className={s.cellText}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={`${s.blockHead} ${s.reveal}`}>
              <h2 className={s.h2}>Så går det till</h2>
            </div>
            <ol className={`${s.steps} ${s.reveal}`}>
              {GANG.map((g) => (
                <li key={g.namn} className={s.step}>
                  <h3 className={s.stepTitle}>{g.namn}</h3>
                  <p className={s.stepText}>{g.text}</p>
                </li>
              ))}
            </ol>
            <div className={s.pricing}>
              <h3 className={s.pricingTitle}>Efteråt</h3>
              <ul className={s.pricingList}>
                <li>Vill ni slippa nästa gång kan jag ta hand om driften löpande, med fast månadspris.</li>
                <li>Behöver något byggas om får ni ett fast pris innan jag börjar.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.cta}`}>
          <div className={`${s.frame} ${s.ctaInner}`}>
            <h2 className={`${s.ctaTitle} ${s.reveal}`}>Ring, så börjar jag samma arbetsdag.</h2>
            <p className={s.ctaText}>Eller skriv några rader om vad som händer.</p>
            <div className={s.heroActions}>
              <a href={SITE.phoneHref} className={s.btnPrimary}>Ring {SITE.phone}</a>
              <Link href="/kontakt?amne=akut" className={s.btnGhost}>Skriv till mig</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
