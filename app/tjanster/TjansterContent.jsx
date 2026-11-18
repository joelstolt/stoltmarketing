import Link from "next/link";
import s from "@/components/ny/ny.module.css";
import { OMRADEN } from "@/lib/nav";

/* Översikten Det jag gör, ny profil 2026-11-17. Tjänstesidorna ligger kvar på sina
   adresser under /tjanster och grupperas här under de tre områdena. */
const TEXT = {
  "/tjanster/seo": "Sidor som svarar på det era kunder söker efter, och teknik som Google kan läsa.",
  "/tjanster/ai-synlighet": "Vad ChatGPT och liknande svarar om er, och vad som behöver ändras för att ni ska vara med.",
  "/tjanster/google-ads": "Annonser med mål ni kan följa: förfrågningar och köp, inte bara klick.",
  "/tjanster/facebook-annonsering": "Annonser i Facebook och Instagram när målgruppen finns där.",
  "/tjanster/webbutveckling": "Snabba sajter som säger vad ni gör och gör det lätt att höra av sig.",
  "/tjanster/e-handel": "WooCommerce eller egen kod, med kassa och betalningar som går igenom.",
  "/tjanster/wordpress": "Jag jobbar i den sajt ni har: rättar, snabbar upp och bygger vidare.",
  "/tillganglighet": "Sajter som fler kan använda, med koll på kraven i tillgänglighetslagen.",
  "/tjanster/managed-hemsida": "Hosting, säkerhet, uppdateringar och backup, och svar när något händer.",
  "/tjanster/ai-automation": "Agenter och flöden som tar bort manuellt arbete, ett flöde i taget.",
  "/mindre-handarbete#crm": "Förfrågningar, offerter och kunder på ett ställe.",
  "/mindre-handarbete#kopplingar": "Sajt, kassa, CRM och affärssystem som pratar med varandra.",
};

export default function TjansterContent() {
  return (
    <div className={s.scope}>
      <section className={s.intro}>
        <div className={`${s.frame} ${s.introInner}`}>
          <nav className={s.crumbs} aria-label="Brödsmulor">
            <Link href="/">Start</Link>
            <span className={s.crumbSep} aria-hidden="true">/</span>
            <span aria-current="page">Det jag gör</span>
          </nav>
          <p className={s.kicker}>Det jag gör</p>
          <h1 className={s.h1Sub}>Det digitala som tar in kunder och sparar tid.</h1>
          <p className={s.heroLead}>
            Tre områden, en person. Bredden finns, men varje del ska ge något ni kan se: fler som hittar er, fler som
            blir kunder och mindre som görs för hand.
          </p>
          <div className={s.heroActions}>
            <Link href="/kontakt" className={s.btnPrimary} data-umami-event="tjanster-hero-cta">
              Berätta vad ni behöver
            </Link>
            <Link href="/sa-funkar-det" className={s.btnGhost}>Så funkar det</Link>
          </div>
        </div>
      </section>

      {OMRADEN.map((o) => (
        <section key={o.key} className={s.section}>
          <div className={`${s.frame} ${s.block}`} style={{ paddingTop: 80, paddingBottom: 80 }}>
            <div className={s.split} style={{ alignItems: "start" }}>
              <div className={s.reveal}>
                <h2 className={s.h2}>{o.namn}</h2>
                <p className={s.blockLead}>{o.kort}</p>
                <div className={s.heroActions} style={{ marginTop: 24 }}>
                  <Link href={o.href} className={s.btnGhost}>Läs mer om {o.namn.toLowerCase()}</Link>
                </div>
              </div>
              <div className={`${s.cells} ${s.cells2} ${s.reveal}`}>
                {o.tjanster.map((t) => (
                  <Link key={t.href} href={t.href} className={s.cell}>
                    <h3 className={s.cellTitle}>{t.namn}</h3>
                    <p className={s.cellText}>{TEXT[t.href]}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className={s.section}>
        <div className={`${s.frame} ${s.block}`} style={{ paddingTop: 72, paddingBottom: 72 }}>
          <div className={s.akut} style={{ marginTop: 0 }}>
            <div>
              <h2 className={s.akutTitle}>Har något slutat fungera?</h2>
              <p className={s.akutText}>Akut hjälp: jag börjar felsöka samma arbetsdag.</p>
            </div>
            <div className={s.akutRight}>
              <span className={s.akutPrice}>1 500 kr/h exkl moms</span>
              <Link href="/akut" className={s.btnGhost}>Till akut hjälp</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.cta}`}>
        <div className={`${s.frame} ${s.ctaInner}`}>
          <h2 className={`${s.ctaTitle} ${s.reveal}`}>Berätta vad ni behöver.</h2>
          <p className={s.ctaText}>Några rader räcker. Ni får svar nästa arbetsdag.</p>
          <div className={s.heroActions}>
            <Link href="/kontakt" className={s.btnPrimary}>Skriv till mig</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
