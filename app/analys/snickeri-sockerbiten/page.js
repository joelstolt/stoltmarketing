import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Phone, Wrench } from "lucide-react";

/* Privat genomgång för Snickeri Sockerbiten (Marcus Martin, aug 2026).
   Noindex: sidan skickas som länk i mejl och ska aldrig synas i sök.
   Alla siffror är uppmätta 2026-08-18: position via DataForSEO (plats 37,
   "snickare i lund", volym 260/mån) och sajtmätning via Sajtkoll (db51ad62d0). */

export const metadata = {
  title: "Genomgång: Snickeri Sockerbiten",
  description: "Privat genomgång av snickerisockerbiten.se med åtgärdslista och fasta priser.",
  robots: { index: false, follow: false },
};

const GUL = "var(--color-accent)";

function Label({ children }) {
  return (
    <div className="flex items-center gap-3.5 mb-5">
      <span aria-hidden="true" className="inline-block" style={{ width: 30, height: 2, background: GUL }} />
      <span className="uppercase" style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.28em", color: GUL }}>
        {children}
      </span>
    </div>
  );
}

const punkter = [
  {
    nr: "1",
    titel: "Bilderna gör sajten tung",
    text: "När du själv öppnar sajten känns den snabb, telefonen har sparat bilderna sedan tidigare besök. Google mäter i stället varje besök som ett förstabesök: alla bilder laddas på en gång i gamla format, även de längst ner som ingen scrollat till. Sånt straffar Google i placeringen, och en ny besökare på svajigt mobilnät hinner tröttna. Fixen: moderna bildformat och att bilder laddas först när de behövs.",
    pris: "1 900 kr",
    sjalv: true,
  },
  {
    nr: "2",
    titel: "Rubriken kapas i Google",
    text: "Er titel är för lång för sökresultatet, så slutet klipps bort och syns aldrig. Jag skriver om titel och beskrivning så de får plats, säljer och pekar på rätt sökningar: snickare i Lund och Dalby.",
    pris: "1 400 kr",
  },
  {
    nr: "3",
    titel: "Startsidan säger inte tillräckligt",
    text: "För att gå från sida 4 mot sida 1 behöver sidan visa tydligare i text och struktur vad ni gör och var ni gör det. Jag bygger om textstrukturen på startsidan och lägger den grund som krävs för att klättra.",
    pris: "3 900 kr",
  },
  {
    nr: "4",
    titel: "Bara en väg in för kunder",
    text: "I dag finns en mejladress att klicka på, inget mer. Många vill ringa direkt från mobilen eller skicka ett snabbt formulär, och varje extra steg kostar förfrågningar. Klickbart nummer plus ett enkelt formulär löser det.",
    pris: "2 400 kr",
  },
  {
    nr: "5",
    titel: "Hälften av bilderna saknar alt-text",
    text: "Beskrivningarna som skärmläsare och Google läser saknas på hälften av bilderna. Nya tillgänglighetslagen ställer krav på allt fler företag, och samma texter hjälper er synas på bildsök. Snabb fix.",
    pris: "900 kr",
  },
];

export default function SockerbitenAnalys() {
  return (
    <>
      <Header />
      <main>
        {/* ═══ Hero ═══ */}
        <section className="hero-dark field-glow relative overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 w-full pointer-events-none"
            style={{ height: "clamp(120px, 22vw, 230px)", maskImage: "linear-gradient(to top, black 55%, transparent)", WebkitMaskImage: "linear-gradient(to top, black 55%, transparent)" }}
            viewBox="0 0 1200 240"
            preserveAspectRatio="none"
          >
            <line x1="1200" y1="26" x2="0" y2="30" stroke="rgba(242,236,221,0.09)" strokeWidth="1" />
            <line x1="220" y1="240" x2="840" y2="28" stroke="rgba(242,194,48,0.08)" strokeWidth="1" />
            <line x1="400" y1="240" x2="854" y2="28" stroke="rgba(242,194,48,0.11)" strokeWidth="1" />
            <line x1="580" y1="240" x2="868" y2="28" stroke="rgba(122,148,64,0.10)" strokeWidth="1" />
            <line x1="760" y1="240" x2="882" y2="28" stroke="rgba(242,194,48,0.13)" strokeWidth="1" />
            <line x1="940" y1="240" x2="896" y2="28" stroke="rgba(242,194,48,0.10)" strokeWidth="1" />
            <line x1="220" y1="240" x2="840" y2="28" className="hero-puls" stroke="rgba(242,194,48,0.55)" strokeWidth="1.5" style={{ "--pd": "8s", "--pdel": "-2s", opacity: 0.35 }} />
            <line x1="580" y1="240" x2="868" y2="28" className="hero-puls" stroke="rgba(242,194,48,0.55)" strokeWidth="1.5" style={{ "--pd": "10s", "--pdel": "-6s", opacity: 0.4 }} />
            <line x1="940" y1="240" x2="896" y2="28" className="hero-puls" stroke="rgba(242,194,48,0.55)" strokeWidth="1.5" style={{ "--pd": "12s", "--pdel": "-4s", opacity: 0.3 }} />
          </svg>

          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28">
            <Label>Genomgång · Snickeri Sockerbiten</Label>
            <h1
              className="font-heading text-[clamp(40px,5.8vw,78px)] leading-[1.03] tracking-[-0.025em] text-heading max-w-[900px]"
              style={{ fontWeight: 380, fontVariationSettings: '"opsz" 144' }}
            >
              Så får fler i Lund tag i Snickeri{" "}
              <em style={{ fontStyle: "italic", color: GUL, fontWeight: 400 }}>Sockerbiten.</em>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[580px]">
              Hej Marcus! Som utlovat: hela genomgången med färska siffror, vad varje sak kostar er
              i dag och vad den kostar att fixa. Fem minuters läsning, inga förpliktelser.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {["Mätt 18 augusti 2026", "Fasta priser, ex moms", "Inget krav på köp"].map((b) => (
                <li key={b} className="flex items-center gap-2 text-[13px] text-body font-500" style={{ fontFamily: "var(--font-ui)", letterSpacing: "0.04em" }}>
                  <span className="w-2 h-2 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ Läget ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <Label>01 · Läget i dag</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Kunderna söker. De hittar er inte.
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                { tal: "260", text: "söker efter snickare i Lund varje månad. Siffran är Googles egen annonsdata." },
                { tal: "37", text: "är er plats i sökresultatet. Det är sida 4, och dit klickar sig i praktiken ingen." },
                { tal: "Sida 1", text: "domineras av kataloger och offertsajter, inte riktiga snickerier. Där finns er lucka." },
              ].map((s) => (
                <div key={s.tal} className="bg-surface rounded-[10px] border border-border p-7">
                  <div className="font-heading text-[42px] leading-none text-primary" style={{ fontWeight: 560 }}>{s.tal}</div>
                  <p className="mt-3 text-[14.5px] text-body leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Förfrågningarna som görs i dag går till firmorna som syns. Eftersom en stor del av
              första sidan är kataloger, inte konkurrenter med genomarbetade sajter, har en riktig
              firma med rätt byggd sajt god chans att klättra förbi.
            </p>
          </div>
        </section>

        {/* ═══ Räkna själv ═══ */}
        <section className="py-10 sm:py-14 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="font-heading text-[clamp(24px,3.4vw,40px)] leading-[1.35] text-heading max-w-[26ch]" style={{ fontWeight: 400 }}>
              Vad är ett jobb värt för er? Drar sajten in{" "}
              <em style={{ fontStyle: "italic", color: GUL }}>ett enda extra jobb i kvartalet</em>{" "}
              har den betalat sig många gånger om.
            </p>
          </div>
        </section>

        {/* ═══ Listan ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-6xl mx-auto">
            <Label>02 · Listan, punkt för punkt</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Fem saker läcker kunder. Så här täpper vi dem.
            </h2>
            <div className="mt-10 flex flex-col gap-5">
              {punkter.map((p) => (
                <div key={p.nr} className="bg-surface rounded-[10px] border border-border p-7 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-5 min-w-0 flex-1">
                      <span className="font-heading text-[30px] leading-none text-primary" style={{ fontWeight: 560 }}>{p.nr}</span>
                      <div className="min-w-0">
                        <h3 className="font-heading font-700 text-[19px] text-heading">{p.titel}</h3>
                        <p className="mt-2.5 text-[14.5px] text-body leading-relaxed max-w-[640px]">{p.text}</p>
                        {p.sjalv && (
                          <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-600 text-body border border-border rounded-full px-3 py-1" style={{ fontFamily: "var(--font-ui)" }}>
                            <Wrench size={12} className="text-primary" /> Går att göra själv med ett WordPress-tillägg
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="font-heading font-600 text-[22px] text-primary whitespace-nowrap">{p.pris}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[10px] border p-6" style={{ borderColor: "rgba(122,148,64,0.4)", background: "rgba(122,148,64,0.07)" }}>
              <div className="flex items-start gap-3">
                <Check size={18} className="flex-shrink-0 mt-[2px]" style={{ color: "#9DB765" }} />
                <p className="text-[14.5px] text-body leading-relaxed">
                  <strong className="text-heading">Det här är redan bra, så ni vet att jag inte hittar på jobb:</strong>{" "}
                  servern svarar snabbt (0,5 sekunder), sajten är mobilanpassad och anslutningen är
                  säker. Grunden finns. Därför räcker punkterna ovan, inget behöver byggas om från noll.
                </p>
              </div>
            </div>

            <p className="mt-6 text-[13px] text-muted">
              Hela den tekniska mätningen, alla 14 kontrollerna, finns att läsa här:{" "}
              <a href="https://www.stoltmarketing.se/sajtkoll/r/db51ad62d0" className="text-primary font-600 hover:underline">
                stoltmarketing.se/sajtkoll/r/db51ad62d0
              </a>
            </p>
          </div>
        </section>

        {/* ═══ Vägval ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <Label>03 · Två vägar framåt</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Välj den som passar er. Båda är bra affärer.
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-5 items-stretch">
              <div className="h-full flex flex-col bg-surface rounded-[10px] border border-border p-7 sm:p-8">
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 1</div>
                <h3 className="mt-2 font-heading font-700 text-[20px] text-heading">Fixa listan på er nuvarande sajt</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">8 900 kr</div>
                <p className="mt-1 text-[13px] text-muted">i stället för 10 500 kr styckvis · engångspris, ex moms</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {["Alla fem punkterna åtgärdade", "Klart inom en vecka", "Inga löpande kostnader", "Ni behåller sajten precis som den är i övrigt"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full flex flex-col bg-surface rounded-[10px] border p-7 sm:p-8 border-primary/40 shadow-[0_4px_24px_rgba(242,194,48,0.08)]">
                <div className="absolute -top-3 left-7 bg-primary text-[#191405] text-[11px] font-700 tracking-[0.08em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  Min ärliga rekommendation
                </div>
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 2</div>
                <h3 className="mt-2 font-heading font-700 text-[20px] text-heading">Ny sajt där allt är löst från start</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">0 kr start, 1 190 kr/mån</div>
                <p className="mt-1 text-[13px] text-muted">12 månaders bindning, därefter månadsvis · ex moms</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {[
                    "Gratis designförslag inom 2 arbetsdagar, ni ser innan ni bestämmer",
                    "Helt ny, snabb sajt klar på 1 till 2 veckor",
                    "Allt i listan löst från början",
                    "Hosting, säkerhet, ändringar och support ingår löpande",
                    "Ni äger domän och innehåll, alltid",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13.5px] text-body leading-relaxed">
                  Varför jag rekommenderar den här: punkterna i listan lappar en sajt som har några
                  år på nacken. För ungefär samma pengar första året får ni en sajt byggd för att
                  klättra, och slipper sedan tänka på den igen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,3.8vw,44px)] leading-[1.1] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Ska vi ta ett kort snack om det här?
            </h2>
            <p className="mt-4 text-[15.5px] text-body leading-relaxed">
              Jag går igenom listan med dig, svarar på allt och du bestämmer helt själv efteråt.
              Föreslå ett par tider som passar, eller svara direkt på mejlet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="/boka?amne=sockerbiten" className="premium-btn">
                Boka ett kort snack <ArrowRight size={15} />
              </a>
              <a href="tel:0766867406" className="secondary-btn">
                <Phone size={14} /> 076-686 74 06
              </a>
            </div>
            <p className="mt-10 text-[12px] text-muted leading-relaxed">
              Genomgång gjord av Joel Stolt, Stolt Marketing, Hässleholm. Siffrorna mätta 18
              augusti 2026: Google-position och sökvolym via DataForSEO, sajtmätning via Sajtkoll.
              Sidan är privat, den visas inte i sökmotorer och är gjord för Snickeri Sockerbiten.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
