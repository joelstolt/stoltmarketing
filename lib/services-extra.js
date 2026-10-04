import { SITE, SERVICES, PRICING, SEO_EVIDENCE } from "./local/data";
import { tillagg, engangs, requestBox } from "./pricing-packages";
import METHODS from "./local/service-extra-content.json";

const shopMonthly = (Number(PRICING.basManad.replace(/\D/g, "")) + Number(tillagg.find((t) => t.name === "E-handel").price.replace(/\D/g, ""))).toLocaleString("sv-SE").replace(/\u00a0/g, " ");

const websiteTerms = `Exkl. moms. 0 kr startavgift. ${PRICING.bindning}.`;
const base = (key, overrides) => ({
  ...SERVICES[key], serviceName: SERVICES[key].name, badge: SERVICES[key].badge,
  bullets: ["Direktkontakt med Joel", "Omfattning före start", "Uppföljning av arbetet"],
  ...overrides,
});

// Data driver både synlig text, metadata och en enda FAQPage per tjänstesida.
export const EXTRA_SERVICES = {
  webbutveckling: base("hemsida", {
    slug: "webbutveckling", badge: "Webbutveckling", serviceName: "Webbutveckling",
    metaTitle: "Webbdesign och webbutveckling för företag",
    metaDescription: "Webbutveckling för företag: innehåll, redaktörsflöde och integrationer. Jag visar tidigare projekt och avgränsar omfattning, teknik och pris före start.",
    h1: "Webbutveckling för det din sajt behöver göra.", highlight: "behöver göra",
    subtitle: "När sajten behöver ett redaktörsverktyg, egna funktioner eller kopplingar till andra system börjar jag med arbetsflödet. Du får förslag på teknik, omfattning och ansvar före start.",
    intro: "På denna sida väljer du upplägg för ett webbprojekt. För en vanlig företagssajt med månadspris finns ett separat hemsideerbjudande.",
    cta: { href: "/kontakt", label: "Beskriv ditt webbprojekt" },
    features: [
      { title: "Sidstruktur och innehåll", desc: "Jag utgår från det besökaren ska hitta och göra. Viktiga tjänster och kontaktvägar får tydliga ingångar." },
      { title: "Redaktörens arbete", desc: "Vi bestämmer vilka delar du ska ändra själv och provar ett vanligt arbetsmoment före lansering." },
      { title: "Funktioner och kopplingar", desc: "Formulär, bokning och externa system avgränsas i förslaget. Åtkomst och löpande ansvar ingår i planeringen." },
    ],
    offers: [
      { name: "Företagssajt till månadspris", price: `Från ${PRICING.basManad}`, desc: "Bas har högst fem sidor. Bredd och Spets har större omfattning enligt paketens innehåll.", terms: websiteTerms, href: "/hemsida-foretag", label: "Se hemsidor och gratis designförslag" },
      { name: "Ett anpassat webbprojekt", price: "Enligt offert", desc: "Redaktörsflöde, integrationer och egna funktioner prissätts efter överenskommen omfattning.", terms: "Förslaget beskriver bygge, test, leverans och fortsatt drift." },
    ],
    proof: { title: "Linguista: innehåll och redaktörsflöde", text: "I uppdraget för Linguista flyttades över 70 artiklar från WordPress och redaktionen fick ett innehållssystem. Projektet visar hur innehåll, publicering och teknik kan planeras tillsammans.", href: "/projekt/linguista", label: "Se projektets omfattning och före/efter" },
    faqs: [
      { q: "Hur väljer du teknik?", a: "Jag utgår från innehåll, hur du vill redigera och vilka system som behöver kopplas ihop. WordPress eller ett anpassat bygge kan båda vara relevanta. Valet och driftansvaret beskrivs i förslaget." },
      { q: "Hur skiljer sig denna tjänst från hemsidepaketen?", a: `Hemsidepaketen börjar med Bas, ${PRICING.basManad} för högst fem sidor. De passar en företagssajt med tydlig omfattning. Anpassade funktioner och integrationer behöver egen avgränsning och offert. Hemsidepaketens villkor är ${PRICING.bindning}, exkl. moms.` },
      { q: "Hur bestäms leveranstiden?", a: "Efter att innehåll, funktioner och åtkomst är genomgångna får du en tidplan. Ett gratis designförslag på startsida och en tjänstesida är ett separat beslutsunderlag för hemsideerbjudandet." },
    ],
    relatedHref: "/hemsida-foretag", relatedLabel: "Hemsidepaket och designförslag",
    ctaTitle: "Vilken uppgift behöver din sajt lösa?", ctaText: "Skicka din webbadress, önskade funktioner och hur du vill arbeta med innehållet. Jag föreslår ett avgränsat nästa steg.",
  }),
  seo: base("seo", {
    slug: "seo", badge: "SEO", serviceName: "Sökmotoroptimering",
    metaTitle: "SEO-byrå: audit, sökord och tydlig åtgärdsplan",
    metaDescription: `SEO-audit ${PRICING.seoAudit} exkl. moms. Nollmätning, teknik och innehåll med prioriterad åtgärdslista. Löpande arbete avgränsas före start.`,
    h1: "SEO med en tydlig plan från nuläget.", highlight: "tydlig plan",
    subtitle: "Jag går igenom vad kunderna söker, hur din sajt kan läsas och vilka sidor som behöver förbättras. Du får en prioriterad åtgärdslista innan du beställer fortsatt arbete.",
    offers: [
      { name: "SEO-audit", price: PRICING.seoAudit, desc: "Nollmätning av teknik, innehåll och synlighet med prioriterad åtgärdslista.", terms: "Exkl. moms. Engångsgranskning. Åtgärder avtalas separat." },
      { name: "Löpande arbete i Spets", price: PRICING.spets, desc: "Hemsida, löpande innehåll och optimering enligt paketets omfattning. Större SEO-projekt får separat offert.", terms: `${websiteTerms} Google Ads-arbete ingår, annonsbudget tillkommer.` },
    ],
    proof: { title: "Niklassons Flytt: struktur och dokumenterad mätning", text: `Webbplatsen har 38 tjänste- och ortssidor. Händelsemätningen registrerade ${SEO_EVIDENCE.count} offertförfrågningar under en ${SEO_EVIDENCE.days}-dagarsperiod, hämtad ${SEO_EVIDENCE.date}. Det beskriver webbplatsen i den perioden. SEO-effekt bedöms även med sökdata och jämförelse över tid.`, href: SEO_EVIDENCE.href, label: "Se projektet och mätningens avgränsning" },
    relatedHref: "/sokmotoroptimering", relatedLabel: "Guiden till sökmotoroptimering",
    ctaTitle: "Börja med din sajt och dina tjänster.", ctaText: "Skicka din webbadress, serviceområde och vad du säljer. Jag föreslår en granskning med tydlig omfattning.",
  }),
  "google-ads": base("google-ads", {
    slug: "google-ads", serviceName: "Google Ads",
    metaTitle: "Google Ads-byrå: kampanjer och uppföljning",
    metaDescription: `Google Ads-arbete ingår i Spets ${PRICING.spets} exkl. moms. Separat annonsbudget. Befintligt konto enligt offert. Du äger kontot.`,
    h1: "Google Ads med tydligt mål och budget.", highlight: "mål och budget",
    subtitle: "Jag bygger annonser kring det du säljer och följer kostnaden för relevanta kontakter. Uppdraget börjar med ditt serviceområde, din marginal och vad som räknas som en användbar förfrågan.",
    offers: [
      { name: "Google Ads i Spets", price: PRICING.spets, desc: "Uppsättning och löpande skötsel ingår tillsammans med hemsidans Spets-omfattning.", terms: `${websiteTerms} Annonsbudgeten tillkommer och betalas separat till Google.` },
      { name: "Ett befintligt annonskonto", price: "Enligt offert", desc: "Granskning, kampanjändringar och uppföljning avgränsas utifrån ditt konto. Eventuellt arbete på en befintlig landningssida specificeras i offerten.", terms: "Arbetets pris och villkor bekräftas före start. Annonsbudget tillkommer." },
    ],
    proof: { title: "Så följs en kontakt vidare till affär", text: "Ett klick på telefonnumret visar att någon försökte ta kontakt. För att bedöma affärsnytta behöver vi även känna till genomförda samtal, relevanta förfrågningar och vilka som blev kunder. Kostnadsguiden visar hur arbete, mediebudget och marginal kan räknas tillsammans.", href: "/blogg/vad-kostar-google-ads", label: "Läs kostnadsguiden" },
    faqs: [
      ...SERVICES["google-ads"].faqs,
      { q: "Kostar en kampanjsida alltid 4 900 kr extra?", a: "Nej. En ny sida inom Spets-paketets överenskomna omfattning följer paketet. En fristående kampanjsida eller arbete utanför omfattningen får en egen offert. Det avgörs före start, utan en generell tilläggsavgift på denna sida." },
      { q: "När kan jag bedöma resultatet?", a: "Vi behöver tillräckligt med relevanta kontakter och återkoppling på vilka som blir affär. Tidsperioden beror på budget, efterfrågan och köpprocess. Uppföljningsperioden bestäms utifrån ditt upplägg." },
    ],
    relatedHref: "/tjanster/seo", relatedLabel: "Sökmotoroptimering",
    ctaTitle: "Visa ditt erbjudande och ditt nuläge.", ctaText: "Skicka din webbadress och berätta om tjänst, serviceområde och befintligt annonskonto. Jag föreslår upplägg och omfattning.",
  }),
  "ai-automation": base("ai-automation", {
    slug: "ai-automation", serviceName: "AI och automation", badge: "AI och automation",
    metaTitle: "AI-automation: förfrågningar och avgränsade flöden",
    metaDescription: "AI-automation med mänsklig granskning. Rutan 495 kr/mån, 30 dagar gratis, ingen bindning. Kalender och systemintegrationer enligt separat offert.",
    h1: "AI och automation för ett avgränsat jobb.", highlight: "avgränsat jobb",
    subtitle: "Börja med ett ärende som återkommer. Jag beskriver vilket underlag flödet behöver, vad det gör och var du godkänner. Rutan för förfrågningar kan vara ett första steg på din befintliga hemsida.",
    offers: [
      { name: "Rutan för förfrågningar", price: "495 kr/mån", desc: `Tar emot förfrågningar, skickar SMS och föreslår ett svar som du granskar. ${requestBox.capacity}`, terms: "Exkl. moms. 30 dagar gratis och ingen bindning.", href: "/forfragningar", label: "Se rutan och prova gratis" },
      { name: "Ett anpassat flöde", price: "Enligt offert", desc: "Kalender, offertautomation, sammanfattningar och systemkopplingar avgränsas efter dina behov.", terms: "Offerten beskriver bygge, test, behörigheter och drift.", href: "/kontakt", label: "Beskriv ditt arbetsflöde" },
    ],
    proof: { title: "Kvota: från underlag till granskat offertutkast", text: "Kvota är min egen produkt för offertutkast med AI-stöd. Användaren kontrollerar pris, innehåll och villkor före utskick. Det visar ett konkret arbetsflöde där AI förbereder och människan fattar beslut.", href: "https://kvota.se", label: "Se Kvota" },
    relatedHref: "/forfragningar", relatedLabel: "Standardrutan för förfrågningar",
    ctaTitle: "Börja med ett konkret ärende.", ctaText: "Se vad rutan kan göra på din hemsida. Behöver du koppla andra system, beskriv ett exempelärende så avgränsar jag arbetet.",
  }),
  "managed-hemsida": {
    slug: "managed-hemsida", serviceName: "Drift och underhåll", serviceType: "Förvaltning av webbplats", badge: "Drift och underhåll",
    metaTitle: "Managed hemsida: drift, underhåll och innehållsändringar",
    metaDescription: `Drift och underhåll från ${PRICING.basManad} exkl. moms. Bas: ändringar inom två arbetsdagar. Bredd: en arbetsdag. ${PRICING.bindning}.`,
    h1: "Din hemsida, uppdaterad och omhändertagen.", highlight: "omhändertagen",
    subtitle: "Jag sköter drift, underhåll och överenskomna innehållsändringar. Har någon annan byggt sajten börjar jag med att kontrollera teknik, konton och vilket ansvar som går att ta över.",
    bullets: ["En kontaktperson", "Ändringstid enligt paket", "Genomgång före övertagande"],
    intro: "Drift ingår i hemsidepaketen. För en befintlig sajt bekräftas omfattningen efter en genomgång.",
    cta: { href: "/kontakt", label: "Be om en genomgång av din sajt" },
    features: [
      { title: "Uppdateringar och kontroll", desc: "Jag planerar plattforms- och innehållsändringar och kontrollerar viktiga sidor och kontaktvägar efteråt." },
      { title: "Säkerhetskopior och återställning", desc: "Lösningen för säkerhetskopior och återställning bestäms utifrån din plattform och beskrivs vid övertagandet." },
      { title: "Konton och ansvar", desc: "Du får veta vilka konton och delar jag sköter och vilken åtkomst du behåller. Ett ärende och en större ombyggnad avgränsas separat." },
    ],
    process: [
      { title: "Inventering", desc: "Du visar sajt, plattform och nuvarande leverantör. Jag går igenom drift, konton och avtalsberoenden." },
      { title: "Omfattning", desc: "Jag bekräftar vad som kan tas över och vilket paket eller separat arbete som behövs." },
      { title: "Överlämning", desc: "Åtkomst, säkerhetskopior och ansvar kontrolleras innan övertagandet." },
      { title: "Löpande hjälp", desc: "Du skickar ändringar via den överenskomna kontaktvägen. Jag utför dem enligt paketets ändringstid." },
    ],
    offers: [
      { name: "Bas", price: PRICING.basManad, desc: "Drift och innehållsändringar enligt Bas-omfattningen. Genomförda ändringar inom två arbetsdagar.", terms: websiteTerms },
      { name: "Bredd", price: PRICING.bredd, desc: "För flera tjänster och fler sidor enligt paketets omfattning. Genomförda ändringar inom en arbetsdag.", terms: websiteTerms },
    ],
    faqs: [
      { q: "Är svarstid samma sak som ändringstid?", a: "Nej. Ett svar bekräftar att jag tagit emot ditt ärende. En genomförd innehållsändring följer paketets nivå: Bas inom två arbetsdagar, Bredd inom en arbetsdag. Större ändringar får separat tidplan." },
      { q: "Kan du ta över en hemsida från en annan leverantör?", a: "Jag börjar med en genomgång av plattform, avtal, konton och åtkomst. Efter den bekräftar jag vad jag kan ta ansvar för och om överföring eller annat extra arbete behövs." },
      { q: "Hur länge gäller avtalet?", a: `Hemsidepaketens priser är exkl. moms, med 0 kr startavgift och ${PRICING.bindning}. Ett särskilt övertagande eller arbete utanför paketet beskrivs i offerten.` },
      { q: "Ingår aktiv SEO?", a: "Bas innehåller sökgrunden. Bredd har SEO-rapport. Spets har aktiv optimering och nytt innehåll enligt paketets omfattning. En större SEO-insats avgränsas separat." },
    ],
    relatedHref: "/priser", relatedLabel: "Hemsidepaketens fulla omfattning",
    ctaTitle: "Visa din sajt innan vi bestämmer ansvaret.", ctaText: "Skicka webbadress, nuvarande plattform och vilka ändringar du brukar behöva. Jag börjar med en genomgång.",
  },
  "e-handel": {
    slug: "e-handel", serviceName: "E-handel", serviceType: "E-handelsutveckling", badge: "E-handel",
    metaTitle: "E-handel: mindre webbutik eller större ombyggnad",
    metaDescription: "E-handel med tydlig omfattning. Mindre butik som +800 kr/mån ovanpå hemsidepaket. Större butiksfront 89 000 kr eller full flytt 149 000 kr exkl. moms.",
    h1: "E-handel med ett upplägg för ditt sortiment.", highlight: "ditt sortiment",
    subtitle: "En mindre webbshop och en ombyggnad av en befintlig butik behöver olika upplägg. Jag börjar med produkter, betalning, frakt och systemkopplingar innan du väljer omfattning.",
    bullets: ["Omfattning före start", "Betalning och frakt planeras", "Namngivet eget projekt"],
    intro: "Jag hjälper dig välja mellan ett mindre butikstillägg och ett större projekt. Specialintegrationer och leverantörsavgifter behöver beskrivas innan du beställer.",
    cta: { href: "/kontakt", label: "Visa din butik och ditt sortiment" },
    features: [
      { title: "Produkter och beställning", desc: "Produktuppgifter, varianter, betalning och orderflöde kontrolleras utifrån sortimentet." },
      { title: "Plattform och kopplingar", desc: "Jag bedömer om befintlig plattform kan behållas och vad lager, frakt och ekonomisystem kräver." },
      { title: "Flytt och uppföljning", desc: "Gamla adresser, ompekningar och mätning planeras före lansering. En flytt kan ändå påverka synligheten." },
    ],
    process: [
      { title: "Sortiment och nuläge", desc: "Du visar butik, produkter, språk och viktigaste orderflöden." },
      { title: "Fast omfattning", desc: "Jag beskriver vad som behålls, vad som byggs och vilka kopplingar som ingår." },
      { title: "Bygge och test", desc: "Vi kontrollerar produkt, kassa, order och överenskomna betal- och fraktflöden." },
      { title: "Lansering och drift", desc: "Ompekningar och kontaktvägar verifieras. Drift och fortsatt arbete följer valt upplägg." },
    ],
    offers: [
      { name: "Mindre webbshop", price: tillagg.find((t) => t.name === "E-handel").price, desc: `Butikstillägg ovanpå valfritt hemsidepaket. Bas plus tillägg kostar ${shopMonthly} kr/mån. Produkter och funktioner avgränsas före start.`, terms: `${websiteTerms} Betal- och fraktleverantörers avgifter samt specialintegrationer specificeras separat.`, href: "/priser", label: "Se hemsidepaket och tillägg" },
      { name: "Ny butiksfront", price: "89 000 kr", desc: "Ny butiksfront på befintlig plattform, upp till 500 produkter och ett språk. Befintlig produkt- och kassahantering behålls enligt projektets plan.", terms: "Exkl. moms. 0 kr i förskott, betalning vid lansering. Större funktioner och integrationer får egen avgränsning." },
      { name: "Full flytt", price: "149 000 kr", desc: "Flytt från äldre plattform med produktmigrering, adressernas ompekningar och ny kassa. Antal produkter, språk och kopplingar bekräftas i offerten.", terms: "Exkl. moms. 0 kr i förskott, betalning vid lansering. Drift för de större projekten: 2 495 kr/mån utan bindning." },
    ],
    proof: { title: "Batteriproffs: min egen webbutik", text: "Batteriproffs är ett eget e-handelsprojekt. Caset visar sortiment, köpflöde och tekniska vägval. Det hjälper dig granska vad jag faktiskt har byggt innan du beställer en lösning för ditt sortiment.", href: "/projekt/batteriproffs", label: "Se butiksprojektet" },
    faqs: [
      { q: "När räcker tillägget på 800 kr/mån?", a: "Det passar en mindre butik ovanpå ett hemsidepaket. Vi avgränsar produkter, betalning och frakt före start. En större ombyggnad, produktmigrering och egna systemkopplingar är en annan omfattning." },
      { q: "Vad skiljer 89 000 kr från 149 000 kr?", a: "89 000 kr gäller en ny butiksfront på befintlig plattform, upp till 500 produkter och ett språk. 149 000 kr gäller full flytt inklusive produktmigrering, ompekningar och ny kassa. Beloppen är exkl. moms. Funktioner utanför omfattningen bekräftas och prissätts före start." },
      { q: "Vad kostar driften för ett större butiksprojekt?", a: "Det större upplägget har drift för 2 495 kr/mån exkl. moms, utan bindning. Vad som sköts och vilka leverantörsavgifter som tillkommer specificeras i förslaget. Det är separat från hemsidepaketens mindre butikstillägg." },
      { q: "Är leveranstiden alltid 30 dagar?", a: "En planerad leveranstid bekräftas när sortiment, åtkomst och funktioner är genomgångna. Produktunderlag och integrationsbehov kan påverka tidplanen." },
      { q: "Kan en flytt påverka Google-placeringarna?", a: "Ja. En adressplan och ompekningar minskar risken, men placeringar kan ändras. Jag kontrollerar de överenskomna adresserna och följer upp efter lansering." },
    ],
    relatedHref: "/blogg/vad-kostar-webbutik", relatedLabel: "Kostnadsguiden för webbutiker",
    ctaTitle: "Börja med det butiken behöver klara.", ctaText: "Skicka butikens adress, antal produkter, språk och vilka system den behöver koppla till. Jag föreslår rätt omfattning.",
  },
  wordpress: {
    slug: "wordpress", serviceName: "WordPress", serviceType: "WordPress-utveckling", badge: "WordPress",
    metaTitle: "WordPress-hemsida: bygga, redigera och underhålla",
    metaDescription: `WordPress för företag med tydligt redaktörsbehov. Hemsidepaket från ${PRICING.basManad} exkl. moms. Drift, innehåll och eventuell flytt avgränsas före start.`,
    h1: "WordPress som passar ditt innehållsarbete.", highlight: "innehållsarbete",
    subtitle: "Vill du skriva, byta bilder och publicera själv kan WordPress vara ett relevant val. Jag går igenom innehåll, tillägg och underhåll innan vi bestämmer om sajten ska behållas, byggas om eller flyttas.",
    bullets: ["Redigering planeras", "Drift och ansvar tydliggörs", "Teknik väljs efter behov"],
    intro: "Att bygga och sköta WordPress är ett eget val. En flytt till annan teknik rekommenderas först när behovet motiverar den.",
    cta: { href: "/kontakt", label: "Prata om din WordPress-sajt" },
    features: [
      { title: "Redaktörsverktyg", desc: "Vi bestämmer vilka sidor och fält du ändrar själv och går igenom ett vanligt publiceringsmoment." },
      { title: "Underhåll", desc: "Hosting, tillägg, säkerhetskopior och uppdateringar får tydligt ansvar." },
      { title: "Sökgrund och kontakt", desc: "Jag kontrollerar struktur och kontaktvägar. Prestanda bedöms på den byggda sajten." },
    ],
    offers: [
      { name: "Hemsidepaket", price: `Från ${PRICING.basManad}`, desc: "Bas har högst fem sidor. Teknik och innehållsomfattning bestäms i förslaget.", terms: websiteTerms, href: "/priser", label: "Se paketen" },
      { name: "Hjälp med en befintlig sajt", price: "Enligt offert", desc: "Felsökning, övertagande eller ändringar avgränsas efter att plattform och åtkomst är genomgångna.", terms: "En eventuell flytt är ett separat beslut och beskrivs i förslaget." },
    ],
    proof: { title: "Ett dokumenterat val av plattform", text: "I Linguista-projektet flyttades över 70 artiklar från WordPress och redaktionen fick ett innehållssystem. Det är ett exempel på ett plattformsbyte. För ditt projekt bedömer jag först om befintlig WordPress kan uppfylla behovet.", href: "/projekt/linguista", label: "Se plattformsvalet i projektet" },
    faqs: [
      { q: "Måste jag lämna WordPress?", a: "Nej. Om det passar ditt innehållsarbete kan WordPress behållas. Jag bedömer befintligt bygge och underhållsbehov innan jag föreslår något annat." },
      { q: "Kan jag uppdatera sajten själv?", a: "Redaktörens uppgifter och verktyg planeras i projektet. Du får en genomgång av de delar du ska ändra. Innehållsändringar kan också skickas till mig enligt hemsidepaketets omfattning." },
      { q: "Vad kostar en hemsida med WordPress?", a: `Hemsidepaketen börjar på ${PRICING.basManad} för högst fem sidor, exkl. moms, med 0 kr startavgift och ${PRICING.bindning}. Särskilda tillägg och integrationer avgränsas före start.` },
      { q: "Kan en befintlig sajt flyttas utan extra startavgift?", a: `WordPress-migrering finns i prislistan för ${engangs.find((p) => p.name === "WordPress-migrering").price}, exkl. moms. Omfattning, innehåll och integrationsbehov kontrolleras innan upplägget bekräftas.` },
    ],
    relatedHref: "/blogg/wordpress-vs-nextjs", relatedLabel: "Valet mellan WordPress och ett anpassat bygge",
    ctaTitle: "Berätta hur du vill arbeta med innehållet.", ctaText: "Skicka din webbadress och beskriv vad du ändrar ofta. Jag föreslår ett upplägg för redigering och underhåll.",
  },
  "facebook-annonsering": {
    slug: "facebook-annonsering", serviceName: "Facebook och Instagram", serviceType: "Annonsering i sociala medier", badge: "Meta-annonsering",
    metaTitle: "Facebook-annonsering: Facebook och Instagram enligt offert",
    metaDescription: "Meta-annonsering på Facebook och Instagram. Kampanjarbete enligt separat offert och mediebudget separat till Meta. Kontaktkvalitet följs upp.",
    h1: "Facebook och Instagram med ett tydligt uppdrag.", highlight: "tydligt uppdrag",
    subtitle: "Jag planerar erbjudande, annonsmaterial och kontaktväg tillsammans med dig. Arbetet får en separat offert och annonsbudgeten betalas till Meta.",
    bullets: ["Separat offert", "Mediebudget tillkommer", "Kontakter och kvalitet följs upp"],
    intro: "Välj vad en relevant kontakt ska vara innan annonsmaterialet tas fram. Då kan arbetet följas upp mot ditt erbjudande.",
    cta: { href: "/kontakt", label: "Be om ett Meta-upplägg" },
    features: [
      { title: "Erbjudande och urval", desc: "Jag planerar budskap och de tillgängliga målgruppsinställningarna efter vilka kunder du kan hjälpa." },
      { title: "Bild, text och kontaktväg", desc: "Annonsmaterial och landningssida eller formulär beskriver samma erbjudande. Materialbehov anges i offerten." },
      { title: "Uppföljning", desc: "Kostnad, registrerade kontakter och din bedömning av kvalitet följs upp tillsammans." },
    ],
    process: [
      { title: "Mål", desc: "Du beskriver erbjudandet, relevant kund och marginal." },
      { title: "Offert", desc: "Arbete, material, uppföljning och mediebudget avgränsas separat." },
      { title: "Uppsättning", desc: "Konton, annonser och överenskommen mätning kontrolleras." },
      { title: "Uppföljning", desc: "Jag går igenom kostnad och kontakter. Du återkopplar vilka som kan bli affär." },
    ],
    offers: [{ name: "Meta-kampanjer", price: "Enligt offert", desc: "Arbete med Facebook och Instagram avgränsas efter konto, material och mål.", terms: "Meta-arbete ingår inte i hemsidepaketet Spets. Mediebudget till Meta tillkommer separat. Villkor bekräftas i offerten." }],
    faqs: [
      { q: "Ingår Meta-hantering i Spets?", a: "Nej. Spets har Google Ads-arbete enligt den gemensamma prislistan. Meta-hantering har en separat offert och separat annonsbudget till Meta." },
      { q: "Hur bestäms annonsbudgeten?", a: "Utifrån erbjudande, marginal och vad vi behöver undersöka. Budget och arbetskostnad hålls isär. Kontaktkostnaden följs upp för ditt konto." },
      { q: "Kan du lova exakt rätt målgrupp?", a: "Nej. Jag använder tillgängliga inställningar och annonsinnehåll för att förbättra urvalet. Inkomna kontakter behöver ändå bedömas och användas i uppföljningen." },
      { q: "Vad behöver du från mig?", a: "Erbjudande, serviceområde, bilder eller annat material och tillgång till berörda Meta-konton. Materialproduktion och mätningens omfattning beskrivs i offerten." },
    ],
    relatedHref: "/tjanster/google-ads", relatedLabel: "Google Ads",
    ctaTitle: "Visa erbjudandet du vill annonsera.", ctaText: "Skicka tjänst eller produkt, mål och vilket material du har. Jag återkommer med avgränsat arbete och budgetförslag.",
  },
  "ai-synlighet": {
    slug: "ai-synlighet", serviceName: "AI-synlighet", serviceType: "Granskning av AI-synlighet", badge: "AI-synlighet",
    metaTitle: "AI-SEO: mät AI-synlighet med tydligt underlag",
    metaDescription: "Audit av AI-synlighet för 4 900 kr exkl. moms. Frågeurval, AI-tjänster, datum och körningar dokumenteras. Rapport med observationer och prioriterade åtgärder.",
    h1: "Se hur ditt företag förekommer i AI-svar.", highlight: "AI-svar",
    subtitle: "Jag undersöker ett avtalat urval av kundfrågor och dokumenterar svar och källhänvisningar. Rapporten skiljer teknisk läsbarhet från faktiska omnämnanden och ger en prioriterad åtgärdslista.",
    bullets: ["Frågeurval före start", "Datum och körningar dokumenteras", "Redovisad metod"],
    intro: "En mätning är en observation av utvalda frågor och tjänster vid en bestämd tidpunkt. Den behöver upprepas för att visa förändring.",
    cta: { href: "/kontakt", label: "Be om en AI-synlighetsaudit" },
    features: [
      { title: "Tydligt urval", desc: "Antal kundfrågor, AI-tjänster och körningar anges innan uppdraget börjar. Urvalet kopplas till din tjänst och marknad." },
      { title: "Spårbart underlag", desc: "Rapporten dokumenterar fråga, tjänst, körning, datum, svar, omnämnande och eventuell källhänvisning." },
      { title: "Prioriterade åtgärder", desc: "Jag skiljer tillgänglighet och innehållsproblem från observerade svar. Ingen teknisk poäng bevisar att företaget blir citerat." },
    ],
    process: [
      { title: "Urval", desc: "Vi väljer kundfrågor och bekräftar antal, tjänster och körningar." },
      { title: "Observation", desc: "Jag dokumenterar svar, länkar och datum för varje körning." },
      { title: "Genomgång", desc: "Teknik, innehåll och källinformation granskas med hänsyn till observationerna." },
      { title: "Rapport", desc: "Du får underlag, metodbegränsningar och prioriterade åtgärder. Fortsatt arbete avtalas separat." },
    ],
    offers: [{ name: "AI-synlighetsaudit", price: "4 900 kr", desc: "Avtalat frågeurval, observationer och genomgång med prioriterad rapport.", terms: "Exkl. moms. Engångsgranskning. Antal frågor, AI-tjänster och körningar bekräftas före start. Genomförande av åtgärder avtalas separat." }],
    faqs: [
      { q: "Vad ingår i rapporten?", a: "Avtalat frågeurval, AI-tjänster, antal körningar, datum, dokumenterade svar och källor. Jag beskriver begränsningar och ger en prioriterad åtgärdslista för teknik och innehåll." },
      { q: "Är AI-läsbarhet samma sak som att bli citerad?", a: "Nej. Läsbarhet beskriver att innehåll kan hämtas och förstås tekniskt. Om en tjänst faktiskt nämner eller länkar företaget behöver observeras separat. Lighthouse har ingen kategori för AI-läsbarhet." },
      { q: "Kan en placering i Google eller FAQ-schema garantera AI-citat?", a: "Nej. Sökposition och sidstruktur kan ingå i underlaget, men ingen av dem är en citeringsgaranti. Jag redovisar vad som observerats och hur mätningen gjordes." },
      { q: "Ingår en särskild AI-mätning i Spets?", a: "Spets omfattar SEO och innehållsarbete enligt paketet. En särskild mätning med frågeurval och dokumenterad rapport behöver bekräftas separat. Auditpriset på denna sida är 4 900 kr exkl. moms." },
    ],
    relatedHref: "/tjanster/seo", relatedLabel: "SEO-audit och fortsatt arbete",
    ctaTitle: "Vilka frågor ställer dina kunder?", ctaText: "Skicka sajt, tjänst och exempel på kundfrågor. Jag föreslår urval och omfattning för en spårbar granskning.",
  },
};

for (const [key, service] of Object.entries(EXTRA_SERVICES)) {
  service.method = METHODS[key];
  if (!service.ctaTitle) service.ctaTitle = "Beskriv det du vill förbättra.";
}

export function extraServiceMetadata(key) {
  const s = EXTRA_SERVICES[key];
  const url = `${SITE.url}/tjanster/${s.slug}`;
  return {
    title: s.metaTitle, description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url, type: "website", locale: "sv_SE", siteName: SITE.name },
    twitter: { card: "summary_large_image", title: s.metaTitle, description: s.metaDescription },
  };
}

export function extraServiceJsonLd(key) {
  const s = EXTRA_SERVICES[key];
  const url = `${SITE.url}/tjanster/${s.slug}`;
  return [
    {
      "@context": "https://schema.org", "@type": "Service", name: s.serviceName,
      serviceType: s.serviceType, description: s.metaDescription, url,
      provider: { "@type": "ProfessionalService", "@id": `${SITE.url}/#organization`, name: SITE.name, url: SITE.url },
      areaServed: { "@type": "Country", name: "Sverige" },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Tjänster", item: `${SITE.url}/tjanster` },
        { "@type": "ListItem", position: 3, name: s.badge, item: url },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: s.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
    },
  ];
}

export function ExtraServiceSchema({ serviceKey }) {
  return extraServiceJsonLd(serviceKey).map((block, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />);
}
