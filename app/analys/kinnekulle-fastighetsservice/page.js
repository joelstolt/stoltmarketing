import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Phone, Wrench, MapPin } from "lucide-react";

/* Privat genomgång för Kinnekulle Fastighetsservice AB (aug 2026).
   Noindex: sidan skickas som länk i mejl och ska aldrig synas i sök.
   Alla siffror är uppmätta 2026-08-24: position och sökdata via DataForSEO
   (plats 16, "badrumsrenovering lidköping"; 7 rankade sökord via Labs),
   hastighet via Google PageSpeed (mobil 60/100, LCP 11,3 s, 3,0 MB),
   kartrutan via DataForSEO Maps ("byggfirma götene": 12 företag, KFS saknas;
   GBP 4,7/3 omdömen). Sajtsvepet (20 sidor: H1, meta, titlar, schema, alt)
   gjort med egen crawl samma dag. */

export const metadata = {
  title: "Genomgång: Kinnekulle Fastighetsservice",
  description: "Privat genomgång av kinnekulle-fastighetsservice.se med åtgärdslista och paketpris.",
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
    titel: "Ingen sida har en huvudrubrik",
    text: "Noll av era 20 sidor har en H1, alltså raden som talar om för Google och för en AI vad sidan handlar om. Det är det första båda läser, och i dag möts de av tystnad. Jag sätter rätt rubrikstruktur på samtliga sidor.",
    pris: "4 900 kr",
  },
  {
    nr: "2",
    titel: "Sökresultatet säljer inte",
    text: "Alla titlar följer mallen sidnamn plus företagsnamn, ingen innehåller en tjänst eller en ort. Texten som visas under er länk i Google saknas på alla 20 sidor, så Google hittar på en själv. Jag skriver om båda för varje sida, med rätt sökord och ort.",
    pris: "2 900 kr",
  },
  {
    nr: "3",
    titel: "Tjänstesidorna är för tunna",
    text: "Era tretton tjänstesidor ligger på 900 till 1 500 tecken, badrumssidan är längst med drygt 3 000. En AI gissar aldrig, den upprepar det ni skrivit, och Google kopplar inte ihop sidorna med det ni gör. Jag skriver ut varje tjänst: vad ni gör, var ni gör det och för vem.",
    pris: "7 900 kr",
  },
  {
    nr: "4",
    titel: "Företagsdatan är anonym",
    text: "Den strukturerade data som Google och AI läser saknar telefon, adress, öppettider, vilka orter ni jobbar i och ert betyg. Jag lägger in komplett företagsdata, så en AI kan svara att Kinnekulle Fastighetsservice i Götene bygger badrum, har 4,7 i betyg och nås på 073-613 50 52.",
    pris: "2 400 kr",
  },
  {
    nr: "5",
    titel: "Ingen fråga-och-svar-del",
    text: "Frågor och svar är det format en AI helst citerar, för det liknar hur folk faktiskt frågar. Ni har ingen sådan del i dag. Jag bygger en av era vanligaste kundfrågor, med rätt markup bakom så både Google och AI kan plocka upp den.",
    pris: "1 900 kr",
  },
  {
    nr: "6",
    titel: "Startsidan är för tung",
    text: "3 MB, och det tar 11 sekunder innan innehållet syns i mobilen. Google mäter varje besök som ett förstabesök, så det straffar placeringen, och en besökare på mobilnät hinner tröttna. Bilderna komprimeras till moderna format och laddas först när de behövs.",
    pris: "1 900 kr",
  },
  {
    nr: "7",
    titel: "Elva bilder saknar beskrivning",
    text: "11 av era 52 bilder saknar alt-text, beskrivningen som skärmläsare, Google och AI läser. Snabb fix som också ger synlighet på bildsök.",
    pris: "900 kr",
    sjalv: true,
  },
];

const kartrutan = [
  { namn: "XL-BYGG Götene", betyg: "4,5", antal: 113 },
  { namn: "Jubels AB, Lidköping", betyg: "4,3", antal: 44 },
  { namn: "Höjentorps Snickerier AB", betyg: "4,8", antal: 32 },
  { namn: "Kinnekulle Fastighetsservice", betyg: "4,7", antal: 3, ni: true },
];

export default function KinnekulleAnalys() {
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
            <Label>Genomgång · Kinnekulle Fastighetsservice</Label>
            <h1
              className="font-heading text-[clamp(40px,5.8vw,78px)] leading-[1.03] tracking-[-0.025em] text-heading max-w-[900px]"
              style={{ fontWeight: 380, fontVariationSettings: '"opsz" 144' }}
            >
              Så syns Kinnekulle Fastighetsservice i Google,{" "}
              <em style={{ fontStyle: "italic", color: GUL, fontWeight: 400 }}>och i AI-sök.</em>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[580px]">
              Hej! Som utlovat: hela genomgången med allt jag mätt på er sajt, vad varje punkt
              kostar att åtgärda och vad ett färdigt paket kostar. Fem minuters läsning, inga
              förpliktelser.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {["Mätt 24 augusti 2026", "Fasta priser, ex moms", "Inget krav på köp"].map((b) => (
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
              Sajten finns. Men den berättar inte vad ni gör.
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                { tal: "7", text: "sökord syns ni på i Google i dag. Inget av dem handlar om era tjänster: de gäller lediga lägenheter, hyresrätter och ställplatser." },
                { tal: "0 av 20", text: "sidor har en huvudrubrik. Lika många har texten som visas under er länk i sökresultatet. Det är det första Google och en AI läser." },
                { tal: "Plats 16", text: "på badrumsrenovering Lidköping. Upp från plats 28 i mitten av augusti, bra riktning, men fortfarande sida 2 dit få klickar." },
              ].map((s) => (
                <div key={s.tal} className="bg-surface rounded-[10px] border border-border p-7">
                  <div className="font-heading text-[42px] leading-none text-primary" style={{ fontWeight: 560 }}>{s.tal}</div>
                  <p className="mt-3 text-[14.5px] text-body leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Det ni frågade om, att en AI ska kunna läsa in era tjänster, hänger på precis det här.
              En AI som ChatGPT eller Googles AI-svar gissar aldrig, den återger det som står i text
              och struktur på sajten. I dag finns det för lite att hämta, och därför finns ni inte
              med i svaren.
            </p>
          </div>
        </section>

        {/* ═══ Kartrutan ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-6xl mx-auto">
            <Label>02 · Det största fyndet sitter inte på sajten</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Ni saknas i kartrutan, i er egen kommun.
            </h2>
            <p className="mt-6 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              På sökningen byggfirma Götene visar Google tolv företag i kartrutan. Ni är inte ett av
              dem. Kartrutan ligger ovanför de vanliga träffarna, så det är där de flesta klickar,
              och det är också den Googles AI lutar sig mot för lokala frågor.
            </p>
            <div className="mt-10 max-w-[560px] flex flex-col gap-3">
              {kartrutan.map((k) => (
                <div
                  key={k.namn}
                  className="flex items-center justify-between gap-4 bg-surface rounded-[10px] border p-5"
                  style={k.ni ? { borderColor: "rgba(242,194,48,0.5)" } : { borderColor: "var(--color-border)" }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <MapPin size={15} className={k.ni ? "text-primary flex-shrink-0" : "text-muted flex-shrink-0"} />
                    <span className={`text-[14.5px] truncate ${k.ni ? "text-heading font-600" : "text-body"}`}>{k.namn}{k.ni ? " (ni)" : ""}</span>
                  </div>
                  <div className="flex items-baseline gap-4 flex-shrink-0">
                    <span className="text-[13px] text-muted">{k.betyg} i betyg</span>
                    <span className="font-heading font-600 text-[20px] text-primary w-[52px] text-right">{k.antal}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] text-muted max-w-[560px]">Antalet till höger är omdömen på Google. Uppmätt 24 augusti 2026.</p>
            <p className="mt-8 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Ert betyg 4,7 är i toppklass i klungan. Det som avgör är antalet: tre omdömen räcker
              inte för att Google ska våga visa er. Det här är den enskilt största anledningen till
              att ni inte syns lokalt, och den billigaste att rätta till.{" "}
              <strong className="text-heading">Omdömesuppstarten hjälper jag er med oavsett vad ni
              väljer nedan, den kostar inget extra.</strong>
            </p>
          </div>
        </section>

        {/* ═══ Räkna själv ═══ */}
        <section className="py-10 sm:py-14 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="font-heading text-[clamp(24px,3.4vw,40px)] leading-[1.35] text-heading max-w-[26ch]" style={{ fontWeight: 400 }}>
              Vad är ett badrum värt för er? Drar sajten in{" "}
              <em style={{ fontStyle: "italic", color: GUL }}>ett enda extra jobb i kvartalet</em>{" "}
              har den betalat sig många gånger om.
            </p>
          </div>
        </section>

        {/* ═══ Listan ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-6xl mx-auto">
            <Label>03 · Listan, punkt för punkt</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Sju saker stoppar Google och AI. Så här löser vi dem.
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
                            <Wrench size={12} className="text-primary" /> Går att göra själv i WordPress
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
                  alla 20 sidor har rätt kanonisk adress, 19 av 20 har mellanrubriker, varje sida har
                  en unik titel, den interna länkningen är stark och er robots.txt släpper in både
                  Google och AI-tjänsterna. Och ni har klättrat på egen hand, från plats 28 till 16
                  sedan mitten av augusti. Grunden går att bygga på.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Vägval ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <Label>04 · Tre vägar framåt</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Välj den som passar er. Priserna gäller er genomgång.
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-5 items-stretch">
              <div className="h-full flex flex-col bg-surface rounded-[10px] border border-border p-7">
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 1</div>
                <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">Fixa listan på er nuvarande sajt</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">19 900 kr</div>
                <p className="mt-1 text-[13px] text-muted">i stället för 22 800 kr styckvis · engångspris, ex moms</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {["Alla sju punkterna åtgärdade", "Omdömesuppstarten ingår", "Klart inom två veckor", "Inga löpande kostnader"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-full flex flex-col bg-surface rounded-[10px] border border-border p-7">
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 2</div>
                <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">Ny sajt: Bredd, till Bas-pris</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">
                  <s className="text-muted font-400 text-[16px] mr-2">1 990</s>1 190 kr/mån
                </div>
                <p className="mt-1 text-[13px] text-muted">0 kr i startavgift · priset gäller första året, därefter 1 990 kr/mån · 12 mån bindning, sedan månadsvis · ex moms</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {["Helt ny sajt, design från vitt papper", "Obegränsat antal sidor, alla tretton tjänsterna får en egen", "Texter och struktur byggda för sök och AI", "Drift, säkerhet och löpande ändringar ingår", "SEO-rapport varje månad"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[12.5px] text-muted leading-relaxed">
                  Täcker hela sajten. Det väg 3 lägger till är det som drar in grannkommunerna och
                  svarar kunderna åt er.
                </p>
              </div>

              <div className="relative h-full flex flex-col bg-surface rounded-[10px] border p-7 border-primary/40 shadow-[0_4px_24px_rgba(242,194,48,0.08)]">
                <div className="absolute -top-3 left-7 bg-primary text-[#191405] text-[11px] font-700 tracking-[0.08em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  Min ärliga rekommendation
                </div>
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 3</div>
                <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">Ny sajt: Spets, till Bredd-pris</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">
                  <s className="text-muted font-400 text-[16px] mr-2">2 990</s>1 990 kr/mån
                </div>
                <p className="mt-1 text-[13px] text-muted">0 kr i startavgift · priset gäller första året, därefter 2 990 kr/mån · 12 mån bindning, sedan månadsvis · ex moms</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {[
                    "Allt i Bredd",
                    "Egna sidor för Skara, Lidköping och Mariestad",
                    "AI-assistent som svarar dygnet runt",
                    "Google Ads-hantering och nya söktexter varje månad",
                    "Allt i listan löst från start, omdömesuppstarten också",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13.5px] text-body leading-relaxed">
                  Varför jag pekar hit: väg 1 kostar 19 900 kr en gång och lagar det som finns. För
                  ungefär samma pengar första året får ni i stället en sajt där allt är byggt rätt
                  från grunden, plus annonsering, AI-assistent och ny text varje månad. Och ni
                  slipper betala en gång till den dag sajten ändå görs om.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[10px] border border-border bg-surface p-7 sm:p-8">
              <h3 className="font-heading font-700 text-[17px] text-heading">Tryggheterna med de nya sajterna, väg 2 och 3</h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "0 kr i startavgift är på riktigt: sajten byggs färdig först, ni tittar och klickar runt i den, och betalar först när ni bestämt er.",
                  "Ni äger allt, alltid: sajten, innehållet och domänen är era.",
                  "Efter första året löper allt månadsvis. Uppsägning med ett mejl, till nästa månadsskifte, inga uppsägningsavgifter.",
                  "Vill ni sluta tar ni sajten med er och driftar den var ni vill. Jag hjälper till med flytten, ingen inlåsning, och det står i avtalet.",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2.5 text-[14px] text-body leading-relaxed">
                    <Check size={15} className="text-primary flex-shrink-0 mt-[3px]" />
                    <span>{t}</span>
                  </div>
                ))}
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
              Ring direkt eller svara på mejlet, så hittar vi en tid.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="/boka?amne=kinnekulle" className="premium-btn">
                Boka ett kort snack <ArrowRight size={15} />
              </a>
              <a href="tel:0766867406" className="secondary-btn">
                <Phone size={14} /> 076-686 74 06
              </a>
            </div>
            <p className="mt-10 text-[12px] text-muted leading-relaxed">
              Genomgång gjord av Joel Stolt, Stolt Marketing, Hässleholm. Siffrorna mätta 24
              augusti 2026: Google-position, sökdata och kartrutan via DataForSEO, hastighet via
              Googles PageSpeed, sajtsvepet över alla 20 sidor samma dag. Sidan är privat, den
              visas inte i sökmotorer och är gjord för Kinnekulle Fastighetsservice AB.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
