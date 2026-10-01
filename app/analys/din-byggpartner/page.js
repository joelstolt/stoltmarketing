import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Phone, MapPin, ExternalLink } from "lucide-react";

/* Privat genomgång för Din Byggpartner i Varberg AB (okt 2026). Svar på
   kallmejlet "WordPress SE - raddning" steg 1: Robin Johansson bad 1 okt om
   "en lista på vad du kan göra för oss och de eventuella kostnaderna".
   Noindex: sidan skickas som länk i mejl och ska aldrig synas i sök.
   Alla siffror är uppmätta 2026-10-01 (underlag i internal/dinbyggpartnervarberg/seo/):
   - hastighet via Google PageSpeed, mobil (50/100, LCP 14,7 s, FCP 9,6 s, 2 885 KiB,
     447 KiB oanvänd JS, 214 KiB oanvänd CSS, renderblockering 2 850 ms)
   - positioner via DataForSEO, desktop Sverige ("snickare varberg" 11,
     "byggföretag varberg" 21, "byggfirma varberg" 28, övriga inte bland de ca 25 första)
   - sökvolymer via DataForSEO/Google Ads
   - kartan via DataForSEO Maps ("snickare varberg", Varberg)
   - telefonlänken: tel:0735988613 i kontaktrutan på startsidan, texten säger 0735-98 96 13
   - "Se alla husmodeller" går till /wisibel-test/ (titel "wisibel-test") som bäddar in
     wisibel.app/c/dinbyggpartnerivarbergab, 82 modeller
   - titel 114 tecken, ingen metabeskrivning, schema bara Organization, zoom spärrad
   - referensernas tal ur /api/kundmotor (Umami, rullande 30 dagar)
   - priserna per punkt följer nivåerna i genomgångarna för Sockerbiten och Kinnekulle.
   INGA påståenden om "10x förfrågningar" eller rankingklättring hos referenser. */

export const metadata = {
  title: "Genomgång: Din Byggpartner",
  description: "Privat genomgång av dinbyggpartnervarberg.se med åtgärdslista, fasta priser och förslag på ny sajt.",
  robots: { index: false, follow: false },
};

const GUL = "var(--color-accent)";

/* Demosajten, uppmätt 2026-10-01 efter två granskningsrundor (internal/dinbyggpartnervarberg/seo/jamforelse-*.json).
   PSI varierar mellan körningar, därför spann. null = sektionen visas inte. */
const DEMO = {
  url: "https://dinbyggpartnervarberg-demo.joel-d77.workers.dev",
  bildDesktop: "/analys/din-byggpartner/forslag-desktop.webp",
  bildMobil: "/analys/din-byggpartner/forslag-mobil.webp",
  ingress:
    "Förslaget är byggt för tre saker: att ni syns när någon söker snickare, attefallshus eller lösvirkeshus, att den som hittar er ringer er i stället för nästa firma, och att varje förfrågan tar mindre tid att hantera. Det bygger på era egna texter, era bilder och er logga, med hela laget. Förslaget är dolt för Google, men ni kan klicka runt i det precis som en kund. Formulären skickar inget, det är en förhandsvisning.",
  tid: [
    { titel: "Rätt frågor från början", text: "Formuläret frågar om projekttyp, ort och när det ska göras innan kunden skickar. Ni vet vad det gäller och hur bråttom det är innan ni ringer tillbaka." },
    { titel: "SMS när förfrågan kommer in", text: "Ni får ett SMS med namn, nummer och vad det gäller i samma stund som kunden skickar, även när ni står på ett bygge." },
    { titel: "Ett färdigt svar att godkänna", text: "Ni får ett förslag på svar som ni läser, ändrar och skickar. Kunden som lämnat sin mejl får en bekräftelse direkt, så ingen undrar om förfrågan kom fram." },
  ],
  tidNot: "Formuläret ingår i väg 2 och 3. SMS och svarsförslag ingår i väg 3, eller kan läggas till för 495 kr i månaden.",
  jamforelse: [
    ["Robins nummer i mobilen", "Ringer fel nummer", "Rätt nummer överallt", "Den som trycker på ditt nummer når dig."],
    ["Lars och Robin", "Nummer längst ned, laget på en egen sida", "Bild och nummer högst upp på startsidan", "Kunden ser vem som bygger och ringer direkt till rätt person."],
    ["Egen sida per tjänst", "Nej, allt på startsidan", "Ja, fyra tjänstesidor", "Google har en sida att visa när någon söker till exempel badrumsrenovering eller tillbyggnad i Varberg."],
    ["Sidor för Kungsbacka och Falkenberg", "Nej", "Ja", "Ni kan synas för de 380 sökningarna på snickare där varje månad."],
    ["Husmodellerna", "På en sida som heter wisibel-test", "Egen sida med text, biblioteket laddas vid klick", "Google har något att visa när någon söker attefallshus eller lösvirkeshus."],
    ["Offertformuläret", "Namn, mejl, ämne och meddelande", "Projekttyp, ort, när och kontakt", "Ni vet vad det gäller och hur bråttom det är innan ni ringer tillbaka."],
    ["Tid tills sidan syns i mobilen", "11 till 15 s", "Runt 2 s", "Kunden ser er sida direkt i stället för en tom skärm i flera sekunder."],
    ["Sidor med egen beskrivning i Google", "1 av 3", "14 av 14", "Varje sida har en egen text under länken i Google som säger varför man ska klicka."],
    ["Företagsdata för Google och AI", "Bara att ni är en organisation", "Byggföretag med adress, telefon, tjänster och område", "Google och tjänster som ChatGPT kan läsa vad ni gör och var ni jobbar."],
    ["Zooma i mobilen", "Spärrat", "Fungerar", "Den som ser dåligt kan förstora och läsa er sida."],
    ["Hastighet i Googles test, mobil", "50 till 63 av 100", "97 till 100 av 100", "Google väger in hastigheten när den rangordnar sidor."],
    ["Tillgänglighet i Googles test", "86 av 100", "100 av 100", "Fler kan använda sidan, även med skärmläsare eller förstorad text."],
  ],
  kalla:
    "Mätt 1 oktober 2026 med Googles PageSpeed (mobil, tre mätningar av er sajt och fem av förslaget) och en genomgång av alla sidor på båda. Förslaget är dolt för Google tills det blir er riktiga sajt, och den spärren är inte inräknad.",
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

const lokalt = [
  { sok: "Snickare Varberg", volym: 260, plats: 11 },
  { sok: "Snickare Kungsbacka", volym: 210 },
  { sok: "Snickare Falkenberg", volym: 170 },
  { sok: "Byggföretag Varberg", volym: 140, plats: 21 },
  { sok: "Byggfirma Varberg", volym: 140, plats: 28 },
  { sok: "Byggföretag Falkenberg", volym: 110 },
  { sok: "Byggföretag Kungsbacka", volym: 110 },
  { sok: "Badrumsrenovering Varberg", volym: 70 },
];

const husord = [
  { sok: "Bygga attefallshus", volym: 590 },
  { sok: "Lösvirkeshus", volym: 390 },
  { sok: "Arkitektritade hus", volym: 320 },
];

const kartrutan = [
  { namn: "A Byggare i Väst AB", betyg: "4,0", antal: 4 },
  { namn: "Varberg Byggfirma & Snickeri i Halland", betyg: "5,0", antal: 1 },
  { namn: "Hantverkare Halland", betyg: "5,0", antal: 12 },
  { namn: "Veteranpoolen Varberg", betyg: "4,4", antal: 16 },
];

const punkter = [
  {
    nr: "1",
    titel: "Startsidan tar 14,7 sekunder på mobilen",
    kostar: "Det tar nästan 10 sekunder innan något alls syns och 14,7 innan det viktigaste är på plats. Google räknar 2,5 sekunder som gränsen för bra. Det som bromsar är inte bilderna utan temat: sajten laddar 447 kB JavaScript och 214 kB stilmallar som aldrig används, och blockerar visningen i nästan tre sekunder.",
    gor: "Rensar bort det som inte används, skjuter upp det som inte behövs direkt och slår på cache.",
    pris: "3 900 kr",
  },
  {
    nr: "2",
    titel: "Allt ligger på en enda sida",
    kostar: "Nybyggnation, om- och tillbyggnad, kök och badrum, tak och fasad delar på samma sida. Google kan bara ranka en sida för en sak, så den som söker badrumsrenovering Varberg eller tillbyggnad Varberg hittar någon annan.",
    gor: "Egen sida för varje tjänst, med vad som ingår, hur det går till, bilder från era jobb och vanliga frågor.",
    pris: "7 900 kr",
  },
  {
    nr: "3",
    titel: "Husmodellerna ligger på en testsida",
    kostar: "Knappen Se alla husmodeller går till en sida som heter wisibel-test, och det är också namnet Google visar. Själva biblioteket med 82 modeller ligger inbäddat från en annan sajt, så Google ser ingen text alls hos er. Samtidigt söks det på bygga attefallshus 590 gånger i månaden och på lösvirkeshus 390.",
    gor: "En riktig sida för husmodellerna med text om villor, attefallshus och garage i lösvirke, och biblioteket inbäddat så det laddas först när besökaren vill.",
    pris: "2 900 kr",
  },
  {
    nr: "4",
    titel: "Inga sidor för Kungsbacka och Falkenberg",
    kostar: "Ni jobbar från Falkenberg till Kungsbacka, men sajten nämner orterna i en enda mening. Snickare Kungsbacka söks 210 gånger i månaden och snickare Falkenberg 170. Där syns ni inte på de två första sidorna.",
    gor: "Två ortsidor med riktigt innehåll: vad ni gör där, länk till kommunens bygglovssida, lokala frågor och offertformulär.",
    pris: "4 900 kr",
  },
  {
    nr: "5",
    titel: "Sökresultatet säljer inte",
    kostar: "Titeln är 114 tecken, så Google kapar den ungefär halvvägs. Texten under länken saknas helt, och Google väljer själv en textbit att visa.",
    gor: "Titel och beskrivning för varje sida, med tjänst och ort, som får plats och lockar till klick.",
    pris: "1 400 kr",
  },
  {
    nr: "6",
    titel: "Google och AI vet inte vilka ni är",
    kostar: "Den strukturerade datan som Google och AI-tjänster som ChatGPT läser säger bara att ni är en organisation. Adress, telefon, vad ni gör och vilka orter ni täcker finns inte med.",
    gor: "Komplett företagsdata: byggföretag i Veddige, telefon, mejl, tjänster och område Varberg, Falkenberg och Kungsbacka.",
    pris: "2 400 kr",
  },
  {
    nr: "7",
    titel: "Mobilen och tillgängligheten",
    kostar: "Sajten hindrar besökaren från att zooma, flera knappar är för små att trycka på, viss text har för låg kontrast och vissa länkar saknar namn för skärmläsare. Cookierutan säger att den som fortsätter surfa godkänner cookies, och på husmodellsidan ligger två cookierutor ovanpå varandra.",
    gor: "Rättar zoom, tryckytor, kontrast och länknamn, och ersätter cookierutorna med en som frågar på rätt sätt.",
    pris: "1 900 kr",
  },
];

const referenser = [
  { namn: "Niklassons Flytt", ort: "Flytt · Helsingborg", tal: "34", text: "offertförfrågningar via hemsidan senaste 30 dagarna, plus 12 klick på ring.", href: "/projekt/niklassonsflytt" },
  { namn: "Premie Bygg", ort: "Bygg · Örebro", tal: "11", text: "offertförfrågningar senaste 30 dagarna, plus 8 klick på ring. Plats 9 på bygg örebro och plats 11 på byggföretag örebro.", href: "/projekt/premiebygg" },
  { namn: "Norrlands Gräv & Transport", ort: "Mark · Sundsvall", tal: "18", text: "förfrågningar och klick på ring senaste 30 dagarna, varav 3 offertförfrågningar.", href: "/projekt/ngtab" },
];

function Rad({ sok, volym, plats }) {
  return (
    <div
      className="flex items-center justify-between gap-4 bg-surface rounded-[10px] border p-4 sm:p-5"
      style={plats ? { borderColor: "rgba(242,194,48,0.5)" } : { borderColor: "var(--color-border)" }}
    >
      <div className="min-w-0">
        <div className="text-[15px] text-heading font-600">{sok}</div>
        <div className="text-[13px] text-muted">{plats ? `Ni ligger på plats ${plats}` : "Ni syns inte på sida 1 eller 2"}</div>
      </div>
      <div className="text-right flex-shrink-0">
        <div className="font-heading font-600 text-[22px] text-primary leading-none">{volym.toLocaleString("sv-SE")}</div>
        <div className="mt-1 text-[11.5px] text-muted">sök/mån</div>
      </div>
    </div>
  );
}

export default function DinByggpartnerAnalys() {
  const listpris = 25300;
  const summaLokalt = lokalt.reduce((s, o) => s + o.volym, 0);

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
            <Label>Genomgång · Din Byggpartner</Label>
            <h1
              className="font-heading text-[clamp(40px,5.8vw,78px)] leading-[1.03] tracking-[-0.025em] text-heading max-w-[900px]"
              style={{ fontWeight: 380, fontVariationSettings: '"opsz" 144' }}
            >
              Nio snickare och 82 husmodeller.{" "}
              <em style={{ fontStyle: "italic", color: GUL, fontWeight: 400 }}>Google ser nästan inget av det.</em>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[600px]">
              Hej Robin! Som utlovat: en lista på vad jag kan göra för er och vad varje sak kostar,
              med siffror som jag mätt i dag.{DEMO ? " Jag har också byggt ett förslag på hur en ny sajt kan se ut." : ""} Fem
              minuters läsning, inga förpliktelser.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {["Mätt 1 oktober 2026", "Fasta priser, ex moms", "Inget krav på köp"].map((b) => (
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
              Ni är nära toppen. Men inte där klicken tas.
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                { tal: "Plats 11", text: "på snickare varberg, som söks 260 gånger i månaden. Det är överst på sida 2, under de tio som får nästan alla klick." },
                { tal: "14,7 s", text: "tar det innan startsidan syns i mobilen. Många hinner gå tillbaka till Google och ringa nästa snickare innan dess." },
                { tal: "1 sida", text: "bär hela erbjudandet. Fyra tjänster och husmodellerna delar på samma sida, så Google kan bara ranka er för en sak." },
              ].map((s) => (
                <div key={s.tal} className="bg-surface rounded-[10px] border border-border p-7">
                  <div className="font-heading text-[42px] leading-none text-primary" style={{ fontWeight: 560 }}>{s.tal}</div>
                  <p className="mt-3 text-[14.5px] text-body leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Det ni har som konkurrenterna saknar är ansikten och bredd: nio namngivna snickare med
              bild, två partners man kan ringa direkt, riktiga omdömen och ett eget husbibliotek.
              Allt det finns redan. Det behöver bara synas.
            </p>
          </div>
        </section>

        {/* ═══ Gratisfixen ═══ */}
        <section className="pb-16 sm:pb-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-[10px] border p-7 sm:p-9" style={{ borderColor: "rgba(242,194,48,0.5)", background: "rgba(242,194,48,0.06)" }}>
              <div className="flex items-start gap-4">
                <Phone size={22} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-heading font-700 text-[22px] sm:text-[26px] text-heading leading-tight">Gör den här i dag, den är gratis: ditt nummer är fel kopplat</h2>
                  <p className="mt-3 text-[15px] text-body leading-relaxed max-w-[680px]">
                    I kontaktrutan på startsidan står Robin, 0735-98 96 13. Men länken bakom numret
                    ringer 0735-98 86 13. Den som trycker på ditt nummer i mobilen hamnar alltså hos
                    någon annan. Det tar två minuter att rätta i WordPress. Vill du att jag gör det,
                    säg bara till, det kostar inget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Uppsidan ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-6xl mx-auto">
            <Label>02 · Uppsidan</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Kunderna söker redan. Varje månad.
            </h2>
            <div className="mt-10 grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="font-heading font-700 text-[18px] text-heading">I ert område</h3>
                <p className="mt-2 text-[14.5px] text-body leading-relaxed">
                  {summaLokalt.toLocaleString("sv-SE")} sökningar i månaden på snickare och byggföretag i
                  Varberg, Kungsbacka och Falkenberg, plus badrumsrenovering i Varberg.
                </p>
                <div className="mt-6 flex flex-col gap-2.5">
                  {lokalt.map((r) => <Rad key={r.sok} {...r} />)}
                </div>
              </div>
              <div>
                <h3 className="font-heading font-700 text-[18px] text-heading">För husmodellerna, i hela landet</h3>
                <p className="mt-2 text-[14.5px] text-body leading-relaxed">
                  Sökningar som passar ert husbibliotek precis. I dag har ni ingen sida som Google kan
                  visa för dem.
                </p>
                <div className="mt-6 flex flex-col gap-2.5">
                  {husord.map((r) => <Rad key={r.sok} {...r} />)}
                </div>
              </div>
            </div>
            <p className="mt-6 text-[13px] text-muted max-w-[640px]">Sökvolym enligt Googles annonsdata, positioner uppmätta 1 oktober 2026.</p>
          </div>
        </section>

        {/* ═══ Räkna själv ═══ */}
        <section className="py-10 sm:py-14 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="font-heading text-[clamp(24px,3.4vw,40px)] leading-[1.35] text-heading max-w-[28ch]" style={{ fontWeight: 400 }}>
              Vad är ett badrum, en tillbyggnad eller ett attefallshus värt för er? Drar sajten in{" "}
              <em style={{ fontStyle: "italic", color: GUL }}>ett enda extra jobb om året</em>{" "}
              har den betalat sig många gånger om.
            </p>
          </div>
        </section>

        {/* ═══ Kartan ═══ */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-6xl mx-auto">
            <Label>03 · Det billigaste fyndet sitter inte på sajten</Label>
            <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] leading-[1.08] tracking-[-0.02em] text-heading" style={{ fontWeight: 420 }}>
              Ettan i kartan har fyra omdömen.
            </h2>
            <p className="mt-6 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Söker man snickare Varberg i Google Maps visas åtta firmor. Ettan har fyra omdömen och
              tvåan ett. Er Google-profil finns, men den har inga omdömen och kommer inte med.
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
                  <span className="text-[14.5px] text-heading font-600 leading-snug">Din Byggpartner (ni)</span>
                </div>
                <span className="text-[13px] text-muted flex-shrink-0">finns inte med</span>
              </div>
            </div>
            <p className="mt-4 text-[12.5px] text-muted max-w-[560px]">Antalet till höger är omdömen på Google. De fyra översta av åtta, uppmätt 1 oktober 2026.</p>
            <p className="mt-8 text-[15.5px] text-body leading-relaxed max-w-[640px]">
              Ni har redan nöjda kunder som skriver fina saker, de står på er sajt. Får några av dem
              lämna samma ord på Google räcker det för att slåss om platserna i kartan.{" "}
              <strong className="text-heading">Omdömesuppstarten hjälper jag er med oavsett vad ni
              väljer nedan, den kostar inget extra.</strong>
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
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-5 min-w-0 flex-1">
                      <span className="font-heading text-[30px] leading-none text-primary" style={{ fontWeight: 560 }}>{p.nr}</span>
                      <div className="min-w-0">
                        <h3 className="font-heading font-700 text-[19px] text-heading">{p.titel}</h3>
                        <p className="mt-2.5 text-[14.5px] text-body leading-relaxed max-w-[640px]">{p.kostar}</p>
                        <p className="mt-3 text-[14.5px] text-heading leading-relaxed max-w-[640px] flex items-start gap-2.5">
                          <Check size={16} className="text-primary flex-shrink-0 mt-[3px]" strokeWidth={2.5} />
                          <span><strong>Det jag gör:</strong> {p.gor}</span>
                        </p>
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
                  ni har riktiga omdömen med namn, ett helt lag med bild, ett eget husbibliotek och en
                  sajt som på datorn laddar på under två sekunder. Startsidan ligger redan på plats 11
                  och plats 6 på renovering varberg. Grunden finns.
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
                <img src={DEMO.bildDesktop} alt="Förslaget på ny sajt för Din Byggpartner, i datorn" width={1440} height={900} loading="lazy" className="w-full h-auto rounded-[10px] border border-border" />
                <img src={DEMO.bildMobil} alt="Förslaget på ny sajt för Din Byggpartner, i mobilen" width={390} height={844} loading="lazy" className="w-[220px] h-auto rounded-[10px] border border-border justify-self-center" />
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
              Välj den som passar er. Priserna gäller er genomgång.
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-5 items-stretch">
              <div className="h-full flex flex-col bg-surface rounded-[10px] border border-border p-7">
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 1</div>
                <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">Fixa listan på er nuvarande sajt</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">21 900 kr</div>
                <p className="mt-1 text-[13px] text-muted">i stället för {listpris.toLocaleString("sv-SE")} kr styckvis · engångspris, ex moms</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {["Alla sju punkterna åtgärdade", "Telefonlänken och omdömesuppstarten ingår", "Klart inom två veckor", "Inga löpande kostnader"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-full flex flex-col bg-surface rounded-[10px] border p-7 border-primary/40 shadow-[0_4px_24px_rgba(242,194,48,0.08)]">
                <div className="absolute -top-3 left-7 bg-primary text-[#191405] text-[11px] font-700 tracking-[0.08em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  Min ärliga rekommendation
                </div>
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 2</div>
                <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">{DEMO ? "Förslaget som riktig sajt" : "Ny sajt där allt är löst från start"}</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">1 990 kr/mån</div>
                <p className="mt-1 text-[13px] text-muted">0 kr i startavgift · 12 mån bindning, sedan månadsvis · ex moms</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {[
                    "Allt i listan löst från start",
                    "Egen sida för varje tjänst, husmodellerna och orterna",
                    "Flytt från WordPress ingår (annars 4 900 kr)",
                    "Drift, säkerhet, backuper och ändringar inom ett dygn",
                    "Rapport varje månad på var ni ligger i Google",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13.5px] text-body leading-relaxed">
                  Varför jag pekar hit: väg 1 kostar 21 900 kr och lagar det som finns. Första året
                  med väg 2 kostar 23 880 kr, och då får ni en helt ny sajt där allt är byggt rätt från
                  grunden, plus drift och ändringar. Ni slipper också betala en gång till den dag
                  sajten ändå görs om.
                </p>
              </div>

              <div className="h-full flex flex-col bg-surface rounded-[10px] border border-border p-7">
                <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">Väg 3</div>
                <h3 className="mt-2 font-heading font-700 text-[19px] text-heading">Ny sajt plus tillväxt</h3>
                <div className="mt-2 font-heading font-600 text-[24px] text-primary tracking-tight">2 990 kr/mån</div>
                <p className="mt-1 text-[13px] text-muted">0 kr i startavgift · 12 mån bindning, sedan månadsvis · ex moms · annonsbudgeten till Google tillkommer</p>
                <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                  {[
                    "Allt i väg 2",
                    "Google Ads: uppsättning och löpande skötsel",
                    "Nya söktexter varje månad, till exempel om attefallshus och lösvirkeshus",
                    "Rutan för förfrågningar: SMS direkt och förslag på svar",
                    "Strategisamtal en gång i månaden",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                      <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-[10px] border border-border bg-surface p-7 sm:p-8">
              <h3 className="font-heading font-700 text-[17px] text-heading">Tryggheterna med en ny sajt, väg 2 och 3</h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "0 kr i startavgift är på riktigt: sajten byggs färdig först, ni klickar runt i den och betalar först när ni bestämt er.",
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
              Jag går igenom listan med dig, svarar på allt och ni bestämmer helt själva efteråt.
              Ring direkt eller svara på mejlet, så hittar vi en tid.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="/boka?amne=dinbyggpartner" className="premium-btn">
                Boka ett kort snack <ArrowRight size={15} />
              </a>
              <a href="tel:0766867406" className="secondary-btn">
                <Phone size={14} /> 076-686 74 06
              </a>
            </div>
            <p className="mt-10 text-[12px] text-muted leading-relaxed">
              Genomgång gjord av Joel Stolt, Stolt Marketing, Hässleholm. Siffrorna mätta 1 oktober
              2026: Google-positioner, sökvolymer och kartan via DataForSEO, hastighet via Googles
              PageSpeed (mobil). Referensernas tal gäller rullande 30 dagar per 1 oktober 2026. Sidan
              är privat, den visas inte i sökmotorer och är gjord för Din Byggpartner i Varberg AB.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
