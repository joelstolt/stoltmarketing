import Link from "next/link";
import { Check, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import s from "@/components/ny/ny.module.css";
import { SITE } from "@/lib/local/data";
import { DEMO_FRAGA } from "@/lib/usp";

export const metadata = {
  title: "Så funkar det: samtal, klickbar demo, bygget och löpande",
  description:
    "Samma väg för alla: ett gratis samtal, en klickbar demo, fast pris innan jag börjar och löpande drift eller reserverad tid. Akut hjälp samma arbetsdag.",
  alternates: { canonical: "https://www.stoltmarketing.se/sa-funkar-det" },
};

/* Ersätter /priser (2026-11-17). Inga publika priser utom Akut hjälp (Joels beslut 2026-11-17). */

const STEG = [
  {
    namn: "Samtal",
    text: "Ni berättar vad ni behöver eller vad som krånglar, med egna ord. Jag frågar det jag behöver veta och säger direkt om det är något jag kan hjälpa till med.",
    far: ["Svar nästa arbetsdag", "Ärlig bedömning", "Kostar ingenting"],
  },
  {
    namn: "Klickbar demo",
    text: "Efter samtalet visar jag en klickbar demo av det vi pratat om, oavsett om det är ett CRM, ett affärssystem, en sajt eller en webbshop. Ni klickar runt i den innan ni bestämmer er. För system och kopplingar får ni också en plan med vad som ska byggas, i vilken ordning och till vilket pris.",
    far: ["Helt riskfritt för er", "Plan i vanligt språk", "Fast pris per del"],
  },
  {
    namn: "Bygget",
    text: "Ni får ett förslag att titta på innan något byggs klart. Sedan bygger jag, visar under vägen och lämnar över först när allt är testat.",
    far: ["Fast pris innan jag börjar", "Förslag innan bygget", "Ni äger det som byggs"],
  },
  {
    namn: "Löpande",
    text: "Efteråt håller jag det igång, och den som vill får reserverad tid varje månad för att bygga vidare.",
    far: ["Drift för allt jag byggt", "Reserverad tid varje månad", "Rapport första vardagen"],
  },
];

const LOPANDE = [
  {
    namn: "Drift",
    text: "Allt jag byggt hålls igång: hosting, säkerhet, uppdateringar, backup och övervakning. Går något sönder rättar jag det.",
  },
  {
    namn: "Partner",
    text: "Reserverad tid varje månad till det ni behöver: nya sidor, annonser, mätning, automation. Svar nästa arbetsdag och en rapport första vardagen i månaden.",
  },
];

const FAQ = [
  DEMO_FRAGA,
  {
    q: "Vad kostar det?",
    a: "Ni får ett fast pris innan jag börjar, skriftligt. Löpande hjälp har ett fast månadspris som ni vet i förväg. Första samtalet kostar ingenting. Akut hjälp kostar 1 500 kr/h exkl moms.",
  },
  {
    q: "Äger vi det som byggs?",
    a: "Ja. Sajten, innehållet och koden är era enligt avtalet. Vill ni flytta hjälper jag till med överlämningen.",
  },
  {
    q: "Hur snabbt svarar du?",
    a: "Senast nästa arbetsdag. Akuta fel, som en kassa som inte tar betalt, börjar jag med samma arbetsdag.",
  },
  {
    q: "Kan du jobba ihop med vår byrå?",
    a: "Ja. En del kunder har en byrå för annonser eller innehåll och mig för tekniken och mätningen.",
  },
];

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Header />
      <main id="main-content" className={s.scope}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />

        <section className={s.intro}>
          <div className={`${s.frame} ${s.introInner}`}>
            <nav className={s.crumbs} aria-label="Brödsmulor">
              <Link href="/">Start</Link>
              <span className={s.crumbSep} aria-hidden="true">/</span>
              <span aria-current="page">Så funkar det</span>
            </nav>
            <p className={s.kicker}>Så funkar det</p>
            <h1 className={s.h1Sub}>Samma väg för alla. Ni vet vad det kostar innan jag börjar.</h1>
            <p className={s.heroLead}>
              Oavsett om det är en kassa som strular eller ett nytt system börjar det med ett samtal och slutar med något
              som fungerar, och som någon håller koll på.
            </p>
            <div className={s.heroActions}>
              <Link href="/kontakt" className={s.btnPrimary} data-umami-event="safunkar-hero-cta">
                Berätta vad ni behöver
              </Link>
              <Link href="/akut" className={s.btnGhost}>Akut hjälp</Link>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <ol className={`${s.cells} ${s.cells2} ${s.reveal}`}>
              {STEG.map((st) => (
                <li key={st.namn} className={s.cell}>
                  <h2 className={s.cellTitle} style={{ fontSize: 22 }}>{st.namn}</h2>
                  <p className={s.cellText}>{st.text}</p>
                  <ul className={s.checkList}>
                    {st.far.map((f) => (
                      <li key={f}>
                        <Check size={16} strokeWidth={2.25} aria-hidden="true" className={s.checkIcon} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={`${s.blockHead} ${s.reveal}`}>
              <h2 className={s.h2}>Löpande, på två sätt</h2>
              <p className={s.blockLead}>Båda har ett fast månadspris som ni vet i förväg.</p>
            </div>
            <ul className={`${s.systemGrid} ${s.grid2} ${s.reveal}`}>
              {LOPANDE.map((l) => (
                <li key={l.namn} className={s.systemCard}>
                  <div className={s.systemHead}>
                    <h3 className={s.systemName}>{l.namn}</h3>
                  </div>
                  <p className={s.systemText}>{l.text}</p>
                </li>
              ))}
            </ul>

            <div className={s.akut} id="akut">
              <div>
                <h3 className={s.akutTitle}>Akut hjälp</h3>
                <p className={s.akutText}>Har något slutat fungera? Jag börjar felsöka samma arbetsdag.</p>
              </div>
              <div className={s.akutRight}>
                <span className={s.akutPrice}>1 500 kr/h exkl moms</span>
                <a href={SITE.phoneHref} className={s.btnGhost} data-umami-event="safunkar-akut-ring">
                  <Phone size={16} strokeWidth={2} aria-hidden="true" />
                  Ring {SITE.phone}
                </a>
              </div>
            </div>

            <div className={s.pricing}>
              <h3 className={s.pricingTitle}>Så sätter jag priset</h3>
              <ul className={s.pricingList}>
                <li>Du får ett fast pris innan jag börjar, skriftligt. Inga timmar som rinner iväg.</li>
                <li>Första samtalet kostar ingenting.</li>
                <li>Löpande hjälp har ett fast månadspris som du vet i förväg.</li>
                <li>Annonsbudget betalar ni direkt till Google eller Meta, utan påslag.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.frame} ${s.block}`}>
            <div className={s.faq}>
              <h2 className={s.h2}>Vanliga frågor</h2>
              <div className={s.faqList}>
                {FAQ.map((f) => (
                  <div key={f.q} className={s.faqItem}>
                    <h3 className={s.faqQ}>{f.q}</h3>
                    <p className={s.faqA}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.cta}`}>
          <div className={`${s.frame} ${s.ctaInner}`}>
            <h2 className={`${s.ctaTitle} ${s.reveal}`}>Berätta vad ni behöver.</h2>
            <p className={s.ctaText}>Några rader räcker. Ni får svar nästa arbetsdag.</p>
            <div className={s.heroActions}>
              <Link href="/kontakt" className={s.btnPrimary} data-umami-event="safunkar-avslut-cta">Skriv till mig</Link>
              <a href={SITE.phoneHref} className={s.btnGhost}>Ring {SITE.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
