import Link from "next/link";
import { Phone, MessageSquare, MousePointerClick, Hammer, RefreshCw, PenLine, Blocks, Bot, UserCheck } from "lucide-react";
import { DEMO_FRAGA } from "@/lib/usp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Omraden from "@/components/ny/Omraden";
import ArendeFonster from "@/components/ny/ArendeFonster";
import Skrivfalt from "@/components/ny/Skrivfalt";
import s from "@/components/ny/ny.module.css";
import t from "@/components/ny/start.module.css";
import { IKONER, VERKTYG } from "@/components/ny/verktyg";
import { SITE } from "@/lib/local/data";
import { CASES, synligtCase } from "@/lib/case-data";
import { Delad, Fragor } from "@/components/ny/Sida";

// Canonical sätts här (inte i root-layouten), se kommentar i app/layout.js.
export const metadata = {
  description:
    "Stolt Marketing i Hässleholm: sajt, webbshop, synlighet i Google och ChatGPT, annonser och egna system med AI-agent, skötta av en person. Fast pris innan jag börjar.",
  alternates: {
    canonical: "https://www.stoltmarketing.se",
  },
};

/* Startsidan, ny profil 2026-11-17. Underlag: _underlag/arbetsmappar/erbjudande-2026-11-17/
   RAPPORT.md och SAJTEN.md. Allt kunddata är anonymiserat tills kunden sagt ja.
   Inga påhittade siffror eller resultat. */

const STEG = [
  { namn: "Samtal", ikon: MessageSquare, text: "Ni berättar vad ni behöver eller vad som krånglar. Det kostar ingenting." },
  { namn: "Klickbar demo", ikon: MousePointerClick, text: "Efter samtalet visar jag en klickbar demo av det vi pratat om, helt riskfritt för er. För system som ska hänga ihop får ni också en plan." },
  { namn: "Bygget", ikon: Hammer, text: "Fast pris innan jag börjar, skriftligt. Inga timmar som rinner iväg." },
  {
    namn: "Löpande",
    ikon: RefreshCw,
    text: "Drift för allt jag byggt, eller reserverad tid varje månad med svar nästa arbetsdag och en rapport.",
  },
];

/* Vad ärendet i toppen visar. 1 h 29 min = 09:52 till 11:21 i loggen från uppdraget. */
const BEVIS = [
  { stor: "1 h 29 min", text: "Från kundens mejl till att beställningarna gick igenom igen." },
  { stor: "En person", text: "Den som svarar är den som felsöker och rättar. Ingen kö och ingen byrå emellan." },
  { stor: "Testköp", text: "Ett riktigt köp gjordes innan ärendet stängdes. Klart betyder att det fungerar." },
];

/* Jämförelsen. Allmänna beskrivningar, inga priser eller påståenden om namngivna byråer. */
const JAMFOR = [
  {
    namn: "Anställa en utvecklare",
    rader: [
      ["Vem svarar", "Er egen utvecklare, när den är på plats."],
      ["Hur priset sätts", "Lön och arbetsgivaravgifter varje månad, även när det är lugnt."],
      ["Vad som ingår", "Oftast en specialitet: webb, system eller annonser."],
      ["När något går sönder", "Den som är på plats felsöker."],
      ["Att komma igång", "Rekrytering och upplärning innan något händer."],
    ],
  },
  {
    namn: "Anlita en byrå",
    rader: [
      ["Vem svarar", "En projektledare, som för vidare till den som gör jobbet."],
      ["Hur priset sätts", "Timmar eller projekt, ofta en byrå per område."],
      ["Vad som ingår", "Det byrån gör. Resten köper ni någon annanstans."],
      ["När något går sönder", "Ett ärende i en kö, ibland hos fel leverantör."],
      ["Att komma igång", "Avtal, uppstartsmöte och projektplan."],
    ],
  },
  {
    namn: "Stolt Marketing",
    jag: true,
    rader: [
      ["Vem svarar", "Jag, och det är jag som gör jobbet."],
      ["Hur priset sätts", "Fast pris innan jag börjar. Löpande hjälp till fast månadspris."],
      ["Vad som ingår", "Sajt och webbshop, synlighet i Google och ChatGPT, annonser, kundregister och system som pratar med varandra."],
      ["När något går sönder", "Jag börjar felsöka samma arbetsdag."],
      ["Att komma igång", "Ett samtal, en klickbar demo, sedan ett fast pris skriftligt."],
    ],
  },
];

/* Erbjudandet system med agent. Exemplen är saker som mitt eget kundregister gör i dag
   (beslut 27, 28, 37, 43 och 44 i stoltmarketing-crm/DECISIONS.md). */
const AGENT_STEG = [
  { titel: "Ni beskriver jobbet", ikon: PenLine, text: "Med egna ord: vad som tar tid varje vecka, var uppgifterna finns och vad som ska komma ut." },
  { titel: "Jag bygger systemet", ikon: Blocks, text: "Runt ert sätt att jobba, och kopplat till det ni redan har: mejl, kalender, sajt och kundregister." },
  { titel: "Agenten gör jobbet", ikon: Bot, text: "Läser, sorterar, lägger in, skriver utkast och följer upp. Varje dag, utan att någon behöver komma ihåg det." },
  { titel: "Ni bestämmer", ikon: UserCheck, text: "Allt som går till en kund väntar på ert klick. Ni ser vad agenten har gjort och varför." },
];

const AGENT_JOBB = [
  "Skriver svar på förfrågningar",
  "Följer upp offerter som inte fått svar",
  "Sorterar svar på utskick",
  "Lägger in offerter från mejlen i kundregistret",
  "Sammanfattar varje morgon vad som väntar",
];

/* Frågor och svar på startsidan. Samma text går in i FAQPage-datan nedan. Bara belagda fakta. */
const FRAGOR = [
  {
    q: "Vad kostar det att anlita Stolt Marketing?",
    a: "Ni får ett fast pris skriftligt innan jag börjar, efter ett första samtal som inte kostar något. Löpande hjälp har ett fast månadspris. Det enda publika timpriset är Akut hjälp, 1 500 kr i timmen exklusive moms.",
  },
  DEMO_FRAGA,
  {
    q: "Vad är skillnaden mot att anlita en byrå?",
    a: "Det är jag som svarar och jag som gör jobbet, utan projektledare emellan. Jag tar hand om sajt, webbshop, synlighet i Google och ChatGPT, annonser och system, så att ni slipper flera leverantörer som skyller på varandra.",
  },
  {
    q: "Kan ni bygga ett system med en AI-agent åt oss?",
    a: "Ja. Ni beskriver jobbet som tar tid, och jag bygger systemet runt ert sätt att jobba med en agent som läser, sorterar, skriver utkast och följer upp. Allt som går till en kund väntar på ert klick. Mitt eget kundregister fungerar så i dag.",
  },
  {
    q: "Hur syns vi när kunder frågar ChatGPT?",
    a: "Jag mäter varje månad vad ChatGPT, Claude, Gemini och Perplexity svarar om er, och ändrar det på sajten som gör att ni saknas eller beskrivs fel.",
  },
  {
    q: "Hur snabbt får vi hjälp när något går sönder?",
    a: "Jag börjar felsöka samma arbetsdag. Andra frågor får svar nästa arbetsdag.",
  },
  {
    q: "Jobbar du med företag utanför Skåne?",
    a: "Ja. Jag utgår från Hässleholm och har kunder i hela Sverige.",
  },
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FRAGOR.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const PASTAENDE = "Ni har en sajt, annonser och system som måste fungera. Men ingen som har koll på helheten.";

const UTVALDA = ["eget-crm", "sonepar-utbildningar", "rbn-utbildning", "niklassonsflytt", "premiebygg"]
  .filter(synligtCase)
  .slice(0, 3);

const CITAT = [
  {
    text: "Vi har arbetat med ett flertal webbyråer genom åren och ingenting kan mäta sig med Stolt Marketing. En liten byrå med den mest otroliga servicementaliteten. Otroligt snabb, lösningsorienterad och ingenting känns någonsin krångligt eller omöjligt.",
    vem: "Claudia, Omniway",
    google: "https://www.google.com/maps?cid=8357467268890589983",
  },
  { text: "Vilken trygghet du är!", vem: "Försäljningschef, fasadföretag" },
  { text: "Han är snabb, han är bra och en fröjd att jobba med.", vem: "Styrelseordförande" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className={s.scope}>
        {/* Toppen */}
        <section className={t.hero}>
          <div className={`${s.frame} ${t.heroInner}`}>
            <h1 className={t.h1}>Utvecklaren ni inte har.</h1>
            <p className={t.lead}>
              Sajt, annonser och system, skötta av en person. Ni slipper anställa, och slipper fyra leverantörer som
              skyller på varandra.
            </p>
            <p className={t.breadth}>Klickbar demo efter första samtalet. Fast pris innan jag börjar. Svar nästa arbetsdag.</p>
            <div className={t.actions}>
              <Link href="/kontakt" className={t.btn} data-umami-event="start-hero-cta">
                Berätta vad ni behöver
              </Link>
              <Link href="/sa-funkar-det" className={t.btnDark}>Så funkar det</Link>
            </div>
            <div className={t.stage}>
              <p className={t.stageLabel}>Så går det till när något går sönder</p>
              <ArendeFonster />
              <ul className={t.proofRow}>
                {BEVIS.map((b) => (
                  <li key={b.stor} className={t.proofCell}>
                    <span className={t.proofBig}>{b.stor}</span>
                    <p className={t.proofText}>{b.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Verktygen */}
        <section className={s.section}>
          <div className={s.frame}>
            <div className={t.toolsHead}>
              <p className={t.toolsLabel}>Jag jobbar i det ni redan använder</p>
              <Link href="/tjanster" className={t.toolsLink}>Det jag gör</Link>
            </div>
            <ul className={t.toolGrid}>
              {VERKTYG.map((namn) => (
                <li key={namn} className={`${t.tool} ${namn === "WooCommerce" ? t.toolWide : ""}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={IKONER[namn]} /></svg>
                  <span className={t.toolName}>{namn}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Påståendet */}
        <section className={`${s.section} ${t.statement}`}>
          <div className={s.frame}>
            <p className={t.statementText}>
              {PASTAENDE.split(" ").map((ord, i) => (
                <span key={i} className={t.ord} style={{ "--i": i }}>
                  {ord}{" "}
                </span>
              ))}
            </p>
            <p className={t.statementSub}>Det är där jag kommer in.</p>
          </div>
        </section>

        {/* Jämförelsen */}
        <section className={s.section} id="jamfor">
          <div className={s.frame} style={{ paddingBottom: 112 }}>
            <div className={t.sectionHead}>
              <h2 className={t.h2}>En utvecklare utan att anställa. En kontakt i stället för fyra.</h2>
              <p className={t.h2Lead}>Så skiljer det sig från att anställa eller att anlita en byrå.</p>
            </div>
            <div className={t.compare}>
              {JAMFOR.map((kol) => (
                <div key={kol.namn} className={`${t.compareCol} ${kol.jag ? t.compareMe : ""}`}>
                  <h3 className={t.compareName}>
                    {kol.jag && <span className={s.dotAccent} />}
                    {kol.namn}
                  </h3>
                  <dl className={t.compareList}>
                    {kol.rader.map(([fraga, svar]) => (
                      <div key={fraga}>
                        <dt>{fraga}</dt>
                        <dd>{svar}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System med agent */}
        <section className={`${s.section} ${t.agentSection}`} id="agent">
          <div className={s.frame} style={{ paddingBottom: 112 }}>
            <div className={t.sectionHead}>
              <h2 className={t.h2}>Beskriv jobbet. Jag bygger systemet och agenten som gör det.</h2>
              <p className={t.h2Lead}>
                Ett system byggt för hur ni jobbar, med en AI-agent som tar det ni gör för hand varje vecka. Agenten gör
                grovjobbet, ni godkänner det som går till kund.
              </p>
            </div>
            <ol className={t.steps}>
              {AGENT_STEG.map((st) => (
                <li key={st.titel} className={t.stepCell}>
                  <span className={t.stepCellIcon}><st.ikon size={17} strokeWidth={1.8} aria-hidden="true" /></span>
                  <h3 className={t.stepCellTitle}>{st.titel}</h3>
                  <p className={t.stepCellText}>{st.text}</p>
                </li>
              ))}
            </ol>
            <div className={t.agentProof}>
              <div>
                <p className={t.agentProofTitle}>Det här gör agenten i mitt eget kundregister i dag</p>
                <ul className={t.agentJobs}>
                  {AGENT_JOBB.map((j) => (
                    <li key={j}>
                      <span className={s.dotAccent} />
                      {j}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={t.agentProofSide}>
                <p className={t.agentProofText}>Inget skickas till en kund utan mitt klick. Samma upplägg bygger jag åt er.</p>
                <Link href="/projekt/eget-crm" className={t.btnDark}>Se hur det fungerar</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tre områden */}
        <section className={s.section} id="omraden">
          <div className={s.frame} style={{ paddingBottom: 112 }}>
            <div className={t.sectionHead}>
              <h2 className={t.h2}>Det digitala som tar in kunder och sparar tid.</h2>
              <p className={t.h2Lead}>Bredden finns, men varje del ska ge något ni kan se.</p>
            </div>
            <Omraden />
          </div>
        </section>

        {/* Så funkar det */}
        <section className={s.section} id="sa-funkar-det">
          <div className={s.frame} style={{ paddingBottom: 112 }}>
            <div className={t.sectionHead}>
              <h2 className={t.h2}>Så funkar det</h2>
              <p className={t.h2Lead}>Samma väg för alla, oavsett om det är en kassa som strular eller ett nytt system.</p>
            </div>
            <ol className={t.steps}>
              {STEG.map((st) => (
                <li key={st.namn} className={t.stepCell}>
                  <span className={t.stepCellIcon}><st.ikon size={17} strokeWidth={1.8} aria-hidden="true" /></span>
                  <h3 className={t.stepCellTitle}>{st.namn}</h3>
                  <p className={t.stepCellText}>{st.text}</p>
                </li>
              ))}
            </ol>

            <div className={s.akut} id="akut">
              <div>
                <h3 className={s.akutTitle}>Akut hjälp</h3>
                <p className={s.akutText}>Har något slutat fungera? Jag börjar felsöka samma arbetsdag.</p>
              </div>
              <div className={s.akutRight}>
                <span className={s.akutPrice}>1 500 kr/h exkl moms</span>
                <a href={SITE.phoneHref} className={s.btnGhost} data-umami-event="start-akut-ring">
                  <Phone size={16} strokeWidth={2} aria-hidden="true" />
                  Ring {SITE.phone}
                </a>
              </div>
            </div>

            <div className={s.pricing}>
              <h3 className={s.pricingTitle}>Så sätter jag priset</h3>
              <ul className={s.pricingList}>
                <li>Ni får ett fast pris innan jag börjar, skriftligt. Inga timmar som rinner iväg.</li>
                <li>Första samtalet kostar ingenting.</li>
                <li>Efter samtalet får ni en klickbar demo, helt riskfritt.</li>
                <li>Löpande hjälp har ett fast månadspris som ni vet i förväg.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Case */}
        <section className={s.section} id="case">
          <div className={s.frame} style={{ paddingBottom: 112 }}>
            <div className={t.sectionHead}>
              <h2 className={t.h2}>Det här har jag byggt</h2>
              <p className={t.h2Lead}>Kunduppdrag och mitt eget kundregister där AI skriver utkasten. Med källor och begränsningar på varje case.</p>
            </div>
            <ul className={t.caseGrid}>
              {UTVALDA.map((slug) => {
                const c = CASES[slug];
                const r = c.kortsiffra || c.results[0];
                return (
                  <li key={slug}>
                    <Link href={`/projekt/${slug}`} className={t.caseCard}>
                      <span className={t.caseImg}>
                        <img src={c.screenshot} alt="" width="1440" height="900" loading="lazy" />
                      </span>
                      <span className={t.caseBody}>
                        <span className={t.caseKicker}>{c.badge}</span>
                        <span className={t.caseTitle}>{c.title}</span>
                        <span className={t.caseText}>{c.kort || c.heroSubtitle}</span>
                        <span className={t.caseStat}>
                          <span className={t.caseStatBig}>{r.value}</span>
                          <span className={t.caseStatLabel}>{r.label}</span>
                        </span>
                        <span className={t.caseLink}>Läs caset</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className={t.caseMore}>
              <Link href="/projekt">Alla case</Link>
            </p>
          </div>
        </section>

        {/* Citat */}
        <section className={s.section}>
          <div className={`${s.frame} ${s.quotes}`}>
            {CITAT.map((c) => (
              <figure key={c.text} className={`${s.quote} ${c.google ? s.quoteWide : ""} ${s.reveal}`}>
                <blockquote className={s.quoteText}>{c.text}</blockquote>
                <figcaption className={s.quoteWho}>
                  {c.vem}
                  {c.google ? (
                    <>
                      ,{" "}
                      <a href={c.google} target="_blank" rel="noopener noreferrer" data-umami-event="recension-google">
                        recension på Google
                      </a>
                    </>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Joel */}
        <section className={s.section} id="joel">
          <div className={`${s.frame} ${s.joel}`}>
            <img src="/joel-stolt.webp" alt="Joel Stolt" className={s.joelImg} loading="lazy" width="340" height="425" />
            <div className={s.joelText}>
              <h2 className={s.h2}>Det är jag som svarar.</h2>
              <p className={s.blockLead}>
                Jag heter Joel Stolt och driver Stolt Marketing från Hässleholm. Jag jobbar ensam, så det är jag som
                svarar, jag som gör jobbet och jag som håller koll. Kunderna finns i hela Sverige.
              </p>
              <dl className={s.facts}>
                <div>
                  <dt>Svar</dt>
                  <dd>Nästa arbetsdag</dd>
                </div>
                <div>
                  <dt>Akuta fel</dt>
                  <dd>Samma arbetsdag</dd>
                </div>
              </dl>
              <div className={s.heroActions}>
                <Link href="/om" className={s.btnGhost}>Mer om mig</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Frågor */}
        <section className={s.section} id="fragor">
          <div className={s.frame} style={{ paddingTop: 104, paddingBottom: 104 }}>
            <Delad rubrik="Vanliga frågor" ingress="Det de flesta undrar innan första samtalet.">
              <Fragor faqs={FRAGOR} />
            </Delad>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD).replace(/</g, "\\u003c") }}
          />
        </section>

        {/* Avslut */}
        <section className={`${s.section} ${t.final}`}>
          <div className={s.frame}>
            <h2 className={t.finalTitle}>Berätta vad ni behöver.</h2>
            <p className={t.finalText}>Några rader räcker. Ni får svar nästa arbetsdag.</p>
            <div className={t.finalComposer}>
              <Skrivfalt event="start-avslut-cta" stor />
            </div>
            <p className={t.finalAlt}>
              Eller ring <a href={SITE.phoneHref}>{SITE.phone}</a>, eller <Link href="/boka">boka ett samtal</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
