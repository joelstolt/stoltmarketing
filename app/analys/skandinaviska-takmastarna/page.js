import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Phone, MapPin, ExternalLink } from "lucide-react";

/* Privat genomgång för Skandinaviska Takmästarna AB (okt 2026). Svar på
   kallmejlet "WordPress SE - raddning" steg 1, de bad om listan 1 okt.
   Noindex: sidan skickas som länk i mejl och ska aldrig synas i sök.
   Alla siffror är uppmätta 2026-10-01:
   - hastighet via Google PageSpeed, mobil (startsidan 57/100, LCP 20,0 s,
     10 448 KiB, drönarfilmen 4 104 KiB)
   - positioner via DataForSEO, desktop Sverige ("takläggare sala" 16,
     "takläggare enköping" 25, övriga åtta orter inte bland de ca 20 första)
   - sökvolymer via DataForSEO/Google Ads (takläggare + ort, tio orter = 1 690;
     med takbyte och takrenovering 2 360)
   - kartrutan via DataForSEO Maps ("takläggare sala", Sala), Maps-sökning på
     företagsnamnet gav bara Takmästarna i Spånga (179 omdömen)
   - referensernas tal ur /api/kundmotor (Umami, rullande 30 dagar), samma
     mätning som kunderna får i sin månadsrapport
   - prisspann för takprojekt: brabyggfirmor.se/kostnad/taklaggare/sala
   INGA påståenden om "10x förfrågningar" eller rankingklättring hos
   referenser förrän det finns en källa (kund, före/efter, var siffran finns). */

export const metadata = {
  title: "Genomgång: Skandinaviska Takmästarna",
  description: "Privat genomgång av skandinaviskatakmastarna.se med åtgärdslista och förslag på drift.",
  robots: { index: false, follow: false },
};

const GUL = "var(--color-accent)";

/* Demosajten, uppmätt 2026-10-01 efter två granskningsrundor (internal/skandinaviskatakmastarna/seo/jamforelse-*.json).
   PSI varierar mellan körningar, därför spann. null = sektionen visas inte. */
const DEMO = {
  url: "https://skandinaviskatakmastarna-demo.joel-d77.workers.dev",
  bildDesktop: "/analys/skandinaviska-takmastarna/forslag-desktop.webp",
  bildMobil: "/analys/skandinaviska-takmastarna/forslag-mobil.webp",
  ingress:
    "Förslaget är byggt för tre saker: att ni syns när någon söker takläggare i era orter, att den som hittar er ringer er i stället för nästa firma, och att varje förfrågan tar mindre tid att hantera. Det bygger på era egna texter, era drönarbilder och er logga, och era gamla adresser skickas vidare till de nya sidorna så att inget tappas i Google. Förslaget är dolt för Google, men ni kan klicka runt i det precis som en kund. Formulären skickar inget, det är en förhandsvisning.",
  tid: [
    { titel: "Rätt frågor från början", text: "Formuläret frågar om tjänst, taktyp och ort innan kunden skickar. Ni vet vad det gäller innan ni ringer tillbaka och kan ge ett bättre svar redan i första samtalet." },
    { titel: "SMS när förfrågan kommer in", text: "Ni får ett SMS med namn, nummer och vad det gäller i samma stund som kunden skickar, inte först när någon hinner läsa mejlen." },
    { titel: "Ett färdigt svar att godkänna", text: "Ni får ett förslag på svar som ni läser, ändrar och skickar. Kunden som lämnat sin mejl får en bekräftelse direkt, så ingen undrar om förfrågan kom fram." },
  ],
  tidNot: "Formuläret ingår i väg 2 och 3. SMS och svarsförslag ingår i väg 3, eller kan läggas till för 495 kr i månaden.",
  jamforelse: [
    ["Tid tills sidan syns i mobilen", "20 s", "Runt 2 s", "Kunden ser er sida direkt i stället för en tom skärm i flera sekunder."],
    ["Offertformuläret", "Namn, kontakt, taktyp och fritext", "Tjänst, taktyp, ort och kontakt i tre korta steg", "Ni ser vilken tjänst och vilken ort det gäller innan ni ringer tillbaka."],
    ["Före- och efterbilderna", "Stora bildfiler", "Reglage för att jämföra före och efter", "Kunden ser själv skillnaden ni gör, redan innan första samtalet."],
    ["Sidor med egen beskrivning i Google", "14 av 21", "25 av 25", "Varje sida har en egen text under länken i Google som säger varför man ska klicka."],
    ["Företagsdata för Google och AI", "Bara sidnamn och sökruta", "Takläggare med tjänster, orter och vanliga frågor", "Google och tjänster som ChatGPT kan läsa vad ni gör och var ni jobbar."],
    ["Drönarfilmen i mobilen", "4 MB laddas", "Laddas inte, stillbild i stället", "Mindre väntan och mindre mobildata för kunden."],
    ["Sajten märkt som", "Engelska", "Svenska", "Google behöver inte gissa vilket språk sidan har."],
    ["Zooma i mobilen", "Spärrat", "Fungerar", "Den som ser dåligt kan förstora och läsa er sida."],
    ["Bilder med beskrivning för Google", "66 av 150", "142 av 142", "Bilderna kan hittas i Googles bildsök och läsas upp av skärmläsare."],
    ["Hastighet i Googles test, mobil", "56 till 59 av 100", "89 till 99 av 100", "Google väger in hastigheten när den rangordnar sidor."],
    ["Tillgänglighet i Googles test", "85 av 100", "100 av 100", "Fler kan använda sidan, även med skärmläsare eller förstorad text."],
  ],
  kalla:
    "Mätt 1 oktober 2026 med Googles PageSpeed (mobil, tre mätningar av er sajt och fyra av förslaget) och en genomgång av alla sidor på båda. Förslaget är dolt för Google tills det blir er riktiga sajt, och den spärren är inte inräknad.",
};

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

const orter = [
  { ort: "Stockholm", volym: 880 },
  { ort: "Uppsala", volym: 170 },
  { ort: "Västerås", volym: 140 },
  { ort: "Norrköping", volym: 140 },
  { ort: "Örebro", volym: 140 },
  { ort: "Eskilstuna", volym: 90 },
  { ort: "Nyköping", volym: 50 },
  { ort: "Bålsta", volym: 30 },
  { ort: "Enköping", volym: 30, plats: 25 },
  { ort: "Sala", volym: 20, plats: 16 },
];

const kartrutan = [
  { namn: "Sala Takläggning i Västmanland", betyg: "5,0", antal: 1 },
  { namn: "Mcl Tak & Bygg AB", betyg: "5,0", antal: 1 },
  { namn: "WL Plåtslageri AB", betyg: "4,8", antal: 11 },
  { namn: "HW-Bygg AB", betyg: "4,1", antal: 18 },
];

const punkter = [
  {
    nr: "1",
    titel: "Startsidan tar 20 sekunder på mobilen",
    kostar: "Startsidan väger 10,2 MB. En drönarfilm på 4 MB laddas i bakgrunden även på mobilen, och före/efter-bilderna laddas i full storlek, 1920 pixlar breda, fast de visas mycket mindre. Alla laddas dessutom direkt, även de längst ner. Många som letar takläggare på mobilen hinner ge upp innan sidan syns, och Google väger in farten när den placerar er.",
    gor: "Stillbild i stället för film på mobilen, bilder i rätt storlek och moderna format, och laddning först när man scrollar fram till dem.",
  },
  {
    nr: "2",
    titel: "Ni syns inte i Google Maps",
    kostar: "När jag söker på ert namn i Google Maps hittar jag ingen profil för er. Det som kommer upp är Takmästarna i Spånga, ett annat bolag med nästan samma namn och 179 omdömen. Den som letar takläggare i Google Maps ser bara firmor som har en profil.",
    gor: "Sätter upp och kopplar er Google-företagsprofil, och ger er ett enkelt sätt att be om ett omdöme efter varje jobb.",
  },
  {
    nr: "3",
    titel: "Google vet inte var ni finns",
    kostar: "Sajten har ingen adress, inget org.nr och ingen ort ni utgår från, bara ett 08-nummer. För någon i Sala eller Uppsala är det svårt att veta om ni är lokala, och Google kan inte koppla ihop er med orterna ni jobbar i.",
    gor: "Lägger in adress, org.nr, F-skatt och vilka orter ni täcker, både synligt och som strukturerad data som Google och AI-tjänster som ChatGPT läser.",
  },
  {
    nr: "4",
    titel: "Åtta av tio ortsidor syns inte",
    kostar: "Ni har sidor för tio orter, men bara Sala och Enköping finns med på de två första sidorna i Google. Uppsala, Västerås, Örebro och Stockholm, där flest söker, finns inte där.",
    gor: "Följer varje ortsida varje månad, bygger ut de som inte klättrar och skickar en rapport på var ni ligger.",
  },
  {
    nr: "5",
    titel: "Sökresultatet säljer inte",
    kostar: "Startsidan, Kontakt, Om oss och Referensbilder saknar texten som visas under er länk i Google, så Google väljer en textbit själv. Sajten är dessutom märkt som engelsk i koden fast den är på svenska.",
    gor: "Skriver titlar och beskrivningar med tjänst och ort för varje sida, och rättar språkmärkningen.",
  },
  {
    nr: "6",
    titel: "Annonsklick som landar på en långsam sida",
    kostar: "Det ligger en spårningskod för Google Ads på sajten. Kör ni annonser betalar ni för varje klick, även från dem som tröttnar innan startsidan har laddat.",
    gor: "Sköter annonserna och skickar dem till sidor som laddar direkt och handlar om rätt ort.",
  },
  {
    nr: "7",
    titel: "Texter som säger olika saker",
    kostar: "Om oss och sidfoten säger att ni är specialister på taktvätt, inspektion och underhåll, medan startsidan säljer takomläggning, plåt och renovering. Några stavfel syns direkt, och ett testinlägg, Hello world!, ligger kvar från när WordPress installerades. Den som ska lägga ett sexsiffrigt belopp på ett tak läser noga.",
    gor: "Samordnar budskapet, rättar texterna och tar bort testinlägget.",
  },
];

const referenser = [
  {
    namn: "Niklassons Flytt",
    ort: "Flytt · Helsingborg",
    tal: "34",
    text: "offertförfrågningar via hemsidan senaste 30 dagarna, plus 12 klick på ring.",
    href: "/projekt/niklassonsflytt",
  },
  {
    namn: "Premie Bygg",
    ort: "Bygg · Örebro",
    tal: "11",
    text: "offertförfrågningar senaste 30 dagarna, plus 8 klick på ring. Plats 9 på bygg örebro och plats 11 på byggföretag örebro.",
    href: "/projekt/premiebygg",
  },
  {
    namn: "Norrlands Gräv & Transport",
    ort: "Mark · Sundsvall",
    tal: "18",
    text: "förfrågningar och klick på ring senaste 30 dagarna, varav 3 offertförfrågningar.",
    href: "/projekt/ngtab",
  },
];

export default function TakmastarnaAnalys() {
  const summa = orter.reduce((s, o) => s + o.volym, 0);

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
            <Label>Genomgång · Skandinaviska Takmästarna</Label>
            <h1
              className="font-heading text-[clamp(40px,5.8vw,78px)] leading-[1.03] tracking-[-0.025em] text-heading max-w-[900px]"
              style={{ fontWeight: 380, fontVariationSettings: '"opsz" 144' }}
            >
              {summa.toLocaleString("sv-SE")} gånger i månaden söker någon takläggare i era orter.{" "}
              <em style={{ fontStyle: "italic", color: GUL, fontWeight: 400 }}>De flesta hittar inte er.</em>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[600px]">
              Hej! Som utlovat: listan ni bad om, med färska siffror. Jag har också räknat på vad
              det är värt för er om jag tar över driften av sajten{DEMO ? ", och byggt ett förslag på hur sajten kan se ut" : ""}.
              Fem minuters läsning, inga förpliktelser.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {["Mätt 1 oktober 2026", "Fasta priser, ex moms", "Listan är er oavsett"].map((b) => (
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
              Ni har sidor för tio orter. Google visar två av dem.
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                { tal: "20 s", text: "tar det innan startsidan syns i mobilen. Många som letar takläggare hinner gå tillbaka och ringa nästa firma innan dess." },
                { tal: "2 av 10", text: "ortsidor syns i Google: Sala på plats 16 och Enköping på plats 25. De andra åtta finns inte på sida 1 eller 2." },
                { tal: "Ingen", text: "Google-profil hittar jag på ert namn. Det som kommer upp är Takmästarna i Spånga, ett annat bolag med 179 omdömen." },
              ].map((s) => (
                <div key={s.tal} className="bg-surface rounded-[10px] border border-border p-7">
                  <div className="font-heading text-[42px] leading-none text-primary" style={{ fontWeight: 560 }}>{s.tal}</div>
                  <p className="mt-3 text-[14.5px] text-body leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Grunden finns. Ortsidorna är skrivna för varje ort i stället för kopierade, och det är
              precis rätt. Det som saknas är allt runt omkring: fart, en Google-profil, uppgifter om
              vilka ni är och någon som följer upp sidorna varje månad.
            </p>
          </div>
        </section>

        {/* ═══ Uppsidan ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-6xl mx-auto">
            <Label>02 · Uppsidan</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Kunderna finns redan. De söker varje månad.
            </h2>
            <p className="mt-6 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Så många gånger i månaden söker någon på takläggare plus en av era orter i Google, och
              så här ligger ni till i dag. Varje rad är en sida ni redan har.
            </p>
            <div className="mt-10 max-w-[640px] flex flex-col gap-2.5">
              {orter.map((o) => (
                <div
                  key={o.ort}
                  className="flex items-center justify-between gap-4 bg-surface rounded-[10px] border p-4 sm:p-5"
                  style={o.plats ? { borderColor: "rgba(242,194,48,0.5)" } : { borderColor: "var(--color-border)" }}
                >
                  <div className="min-w-0">
                    <div className="text-[15px] text-heading font-600 truncate">Takläggare {o.ort}</div>
                    <div className="text-[13px] text-muted">{o.plats ? `Ni ligger på plats ${o.plats}` : "Ni syns inte på sida 1 eller 2"}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-heading font-600 text-[22px] text-primary leading-none">{o.volym.toLocaleString("sv-SE")}</div>
                    <div className="mt-1 text-[11.5px] text-muted">sök/mån</div>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 px-4 sm:px-5 pt-3">
                <div className="text-[15px] text-heading font-700">Totalt, tio orter</div>
                <div className="font-heading font-600 text-[26px] text-primary">{summa.toLocaleString("sv-SE")}</div>
              </div>
            </div>
            <p className="mt-6 text-[13px] text-muted max-w-[640px]">
              Räknar man in takbyte och takrenovering i samma orter blir det drygt 2 300 sökningar i
              månaden. Sökvolym och positioner uppmätta 1 oktober 2026.
            </p>
          </div>
        </section>

        {/* ═══ Räkna själv ═══ */}
        <section className="py-10 sm:py-14 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="font-heading text-[clamp(24px,3.4vw,40px)] leading-[1.35] text-heading max-w-[28ch]" style={{ fontWeight: 400 }}>
              Ett takprojekt landar ofta på 80 000 till 400 000 kr. Drar sajten in{" "}
              <em style={{ fontStyle: "italic", color: GUL }}>ett enda extra takjobb om året</em>{" "}
              har den betalat ett helt års drift, med råge.
            </p>
          </div>
        </section>

        {/* ═══ Kartrutan ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-6xl mx-auto">
            <Label>03 · Det billigaste fyndet sitter inte på sajten</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              I kartan räcker det med ett omdöme. I dag.
            </h2>
            <p className="mt-6 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Söker man takläggare Sala i Google Maps ligger två firmor överst med ett enda omdöme
              var. Ingen av de fyra översta har fler än 18. Ni finns inte med.
            </p>
            <div className="mt-10 max-w-[560px] flex flex-col gap-3">
              {kartrutan.map((k) => (
                <div key={k.namn} className="flex items-center justify-between gap-4 bg-surface rounded-[10px] border border-border p-5">
                  <div className="flex items-center gap-3 min-w-0">
                    <MapPin size={15} className="text-muted flex-shrink-0" />
                    <span className="text-[14.5px] text-body leading-snug">{k.namn}</span>
                  </div>
                  <div className="flex items-baseline gap-4 flex-shrink-0">
                    <span className="text-[13px] text-muted">{k.betyg} i betyg</span>
                    <span className="font-heading font-600 text-[20px] text-primary w-[40px] text-right">{k.antal}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 bg-surface rounded-[10px] border p-5" style={{ borderColor: "rgba(242,194,48,0.5)" }}>
                <div className="flex items-center gap-3 min-w-0">
                  <MapPin size={15} className="text-primary flex-shrink-0" />
                  <span className="text-[14.5px] text-heading font-600 leading-snug">Skandinaviska Takmästarna (ni)</span>
                </div>
                <span className="text-[13px] text-muted flex-shrink-0">finns inte med</span>
              </div>
            </div>
            <p className="mt-4 text-[12.5px] text-muted max-w-[560px]">Antalet till höger är omdömen på Google. Uppmätt 1 oktober 2026.</p>
            <p className="mt-8 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Det är en låg ribba. En Google-profil och en handfull omdömen från nöjda kunder räcker
              för att slåss om de platserna.{" "}
              <strong className="text-heading">Profilen och omdömesuppstarten ingår om jag tar över
              driften.</strong>
            </p>
          </div>
        </section>

        {/* ═══ Listan ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <Label>04 · Listan, punkt för punkt</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Sju saker kostar er kunder. Så här löser jag dem.
            </h2>
            <div className="mt-10 flex flex-col gap-5">
              {punkter.map((p) => (
                <div key={p.nr} className="bg-surface rounded-[10px] border border-border p-7 sm:p-8">
                  <div className="flex items-start gap-5">
                    <span className="font-heading text-[30px] leading-none text-primary" style={{ fontWeight: 560 }}>{p.nr}</span>
                    <div className="min-w-0">
                      <h3 className="font-heading font-700 text-[19px] text-heading">{p.titel}</h3>
                      <p className="mt-2.5 text-[14.5px] text-body leading-relaxed max-w-[680px]">{p.kostar}</p>
                      <p className="mt-3 text-[14.5px] text-heading leading-relaxed max-w-[680px] flex items-start gap-2.5">
                        <Check size={16} className="text-primary flex-shrink-0 mt-[3px]" strokeWidth={2.5} />
                        <span><strong>Det jag gör:</strong> {p.gor}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[10px] border p-6" style={{ borderColor: "rgba(122,148,64,0.4)", background: "rgba(122,148,64,0.07)" }}>
              <div className="flex items-start gap-3">
                <Check size={18} className="flex-shrink-0 mt-[2px]" style={{ color: "#9DB765" }} />
                <p className="text-[14.5px] text-body leading-relaxed">
                  <strong className="text-heading">Det här är redan bra, så ni vet att jag inte hittar på jobb:</strong>{" "}
                  tio ortsidor med egen text för varje ort, Sala-sidan har både titel och beskrivning,
                  servern svarar snabbt och sajten får full pott på Googles kontroll av säkerhet och
                  god praxis. Därför går det att bygga vidare på det ni har.
                </p>
              </div>
            </div>
          </div>
        </section>

        {DEMO && (
          <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
            <div className="max-w-6xl mx-auto">
              <Label>05 · Så kan det se ut</Label>
              <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
                Jag har byggt ett förslag. Klicka runt i det.
              </h2>
              <p className="mt-6 text-[15.5px] text-body leading-relaxed max-w-[640px]">{DEMO.ingress}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={DEMO.url} target="_blank" rel="noopener noreferrer" className="premium-btn">
                  Öppna förslaget <ExternalLink size={15} />
                </a>
              </div>
              <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-5 items-end">
                <img src={DEMO.bildDesktop} alt="Förslaget på ny sajt för Skandinaviska Takmästarna, i datorn" width={1440} height={900} loading="lazy" className="w-full h-auto rounded-[10px] border border-border" />
                <img src={DEMO.bildMobil} alt="Förslaget på ny sajt för Skandinaviska Takmästarna, i mobilen" width={390} height={844} loading="lazy" className="w-[220px] h-auto rounded-[10px] border border-border justify-self-center" />
              </div>
              <h3 className="mt-14 font-heading font-700 text-[22px] text-heading">Mindre jobb med varje förfrågan</h3>
              <div className="mt-5 grid md:grid-cols-3 gap-5">
                {DEMO.tid.map((t) => (
                  <div key={t.titel} className="bg-surface rounded-[10px] border border-border p-6">
                    <h4 className="font-heading font-700 text-[17px] text-heading">{t.titel}</h4>
                    <p className="mt-2 text-[14.5px] text-body leading-relaxed">{t.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[13px] text-muted max-w-[640px]">{DEMO.tidNot}</p>

              <h3 className="mt-14 font-heading font-700 text-[22px] text-heading">Före och efter, och vad det betyder för er</h3>
              <div className="mt-5 rounded-[10px] border border-border bg-surface">
                <div className="hidden md:grid md:grid-cols-[1.1fr_1fr_1fr_1.7fr] gap-4 px-5 py-4 border-b border-border text-[13.5px] font-600 text-heading">
                  <div>Mätpunkt</div>
                  <div>Er sajt i dag</div>
                  <div>Förslaget</div>
                  <div>Vad det betyder för er</div>
                </div>
                {DEMO.jamforelse.map((r) => (
                  <div key={r[0]} className="grid md:grid-cols-[1.1fr_1fr_1fr_1.7fr] gap-x-4 gap-y-1.5 px-5 py-4 border-b border-border last:border-0 text-[14px]">
                    <div className="text-heading font-600 md:font-400 md:text-body">{r[0]}</div>
                    <div className="text-muted"><span className="md:hidden text-[12px] uppercase tracking-[0.08em] mr-2">I dag</span>{r[1]}</div>
                    <div className="text-heading font-600"><span className="md:hidden text-[12px] uppercase tracking-[0.08em] text-muted font-400 mr-2">Förslaget</span>{r[2]}</div>
                    <div className="text-body leading-relaxed">{r[3]}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[12.5px] text-muted max-w-[640px]">{DEMO.kalla}</p>
            </div>
          </section>
        )}

        {/* ═══ Referenser ═══ */}
        <section className={`py-16 sm:py-24 px-5 sm:px-8 ${DEMO ? "" : "bg-surface-muted"}`}>
          <div className="max-w-6xl mx-auto">
            <Label>{DEMO ? "06" : "05"} · De som redan kör med mig</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Det enda som räknas är förfrågningar.
            </h2>
            <p className="mt-6 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Varje sajt jag sköter mäter förfrågningar, klick på ring och mejl. Talen nedan är
              hämtade ur samma mätning som kunderna själva får i sin månadsrapport, inte uppskattade.
            </p>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {referenser.map((r) => (
                <a key={r.namn} href={r.href} className="group h-full flex flex-col bg-surface rounded-[10px] border border-border p-7 hover:border-primary/40 transition-colors">
                  <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">{r.ort}</div>
                  <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">{r.namn}</h3>
                  <div className="mt-4 font-heading text-[42px] leading-none text-primary" style={{ fontWeight: 560 }}>{r.tal}</div>
                  <p className="mt-3 text-[14px] text-body leading-relaxed flex-1">{r.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-600 text-primary">
                    Läs caset <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-8 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Över alla 19 kundsajter jag mäter blev det 303 förfrågningar, klick på ring och
              mejlklick de senaste 30 dagarna.
            </p>
          </div>
        </section>

        {/* ═══ Vägval ═══ */}
        <section className={`py-16 sm:py-24 px-5 sm:px-8 ${DEMO ? "bg-surface-muted" : ""}`}>
          <div className="max-w-6xl mx-auto">
            <Label>{DEMO ? "07" : "06"} · Tre vägar framåt</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Välj den som passar er. Listan är er oavsett.
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-5 items-stretch">
              <div className="h-full flex flex-col bg-surface rounded-[10px] border border-border p-7">
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 1</div>
                <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">Gör listan själva</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">0 kr</div>
                <p className="mt-1 text-[13px] text-muted">listan är gratis, som jag lovade</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {["Ge listan till den som sköter sajten i dag", "Ni behåller sajten som den är", "Hör av er om något är oklart"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-full flex flex-col bg-surface rounded-[10px] border border-border p-7">
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 2</div>
                <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">Jag tar över driften</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">1 990 kr/mån</div>
                <p className="mt-1 text-[13px] text-muted">0 kr i startavgift · 12 mån bindning, sedan månadsvis · ex moms</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {[
                    DEMO ? "Förslaget blir er riktiga sajt, flytten från WordPress ingår (annars 4 900 kr)" : "Sajten flyttas till snabb drift hos mig, flytten ingår (annars 4 900 kr)",
                    "Alla tio ortsidorna och era texter följer med",
                    "Punkt 1, 2, 3, 5 och 7 i listan lösta vid flytten",
                    "Google-profilen och omdömesuppstarten ingår",
                    "Drift, säkerhet, backuper och ändringar inom ett dygn",
                    "Rapport varje månad på var ni ligger i Google",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[12.5px] text-muted leading-relaxed">
                  Ni slipper också WordPress-underhållet: temat, sidbyggaren och formulärtillägget ni
                  kör i dag måste uppdateras löpande för att inte bli en säkerhetsrisk.
                </p>
              </div>

              <div className="relative h-full flex flex-col bg-surface rounded-[10px] border p-7 border-primary/40 shadow-[0_4px_24px_rgba(242,194,48,0.08)]">
                <div className="absolute -top-3 left-7 bg-primary text-[#191405] text-[11px] font-700 tracking-[0.08em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  Min ärliga rekommendation
                </div>
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 3</div>
                <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">Driften plus tillväxt</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">2 990 kr/mån</div>
                <p className="mt-1 text-[13px] text-muted">0 kr i startavgift · 12 mån bindning, sedan månadsvis · ex moms · annonsbudgeten till Google tillkommer</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {[
                    "Allt i väg 2, plus punkt 4 och 6 i listan",
                    "Google Ads: uppsättning och löpande skötsel",
                    "Ortsidorna byggs ut, och fler orter när ni vill",
                    "Nya söktexter varje månad",
                    "Rutan för förfrågningar: SMS direkt och förslag på svar",
                    "Strategisamtal en gång i månaden",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13.5px] text-body leading-relaxed">
                  Varför jag pekar hit: ni har redan tio orter och en annonskod på sajten. Det här är
                  paketet där jag driver båda framåt varje månad. 2 990 kr i månaden blir 35 880 kr om
                  året, mindre än hälften av ett enda takjobb.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[10px] border border-border bg-surface p-7 sm:p-8">
              <h3 className="font-heading font-700 text-[17px] text-heading">Tryggheterna om jag tar över, väg 2 och 3</h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "0 kr i startavgift är på riktigt: sajten flyttas och görs klar först, ni klickar runt i den och betalar först när ni bestämt er.",
                  "Ni äger allt, alltid: sajten, innehållet och domänen är era.",
                  "Efter första året löper allt månadsvis. Uppsägning med ett mejl, till nästa månadsskifte, inga uppsägningsavgifter.",
                  "Vill ni sluta tar ni sajten med er. Jag hjälper till med flytten, ingen inlåsning, och det står i avtalet.",
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
        <section className={`py-16 sm:py-24 px-5 sm:px-8 ${DEMO ? "" : "bg-surface-muted"}`}>
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,3.8vw,44px)] leading-[1.1] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Ska vi ta ett kort snack om det här?
            </h2>
            <p className="mt-4 text-[15.5px] text-body leading-relaxed">
              Jag går igenom listan med er, svarar på allt och ni bestämmer helt själva efteråt.
              Ring direkt eller svara på mejlet, så hittar vi en tid.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="/boka?amne=takmastarna" className="premium-btn">
                Boka ett kort snack <ArrowRight size={15} />
              </a>
              <a href="tel:0766867406" className="secondary-btn">
                <Phone size={14} /> 076-686 74 06
              </a>
            </div>
            <p className="mt-10 text-[12px] text-muted leading-relaxed">
              Genomgång gjord av Joel Stolt, Stolt Marketing, Hässleholm. Siffrorna mätta 1 oktober
              2026: Google-positioner, sökvolymer och kartan via DataForSEO, hastighet via Googles
              PageSpeed (mobil). Prisspannet för takprojekt kommer från BraByggfirmor. Referensernas
              tal gäller rullande 30 dagar per 1 oktober 2026. Sidan är privat, den visas inte i
              sökmotorer och är gjord för Skandinaviska Takmästarna AB.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
