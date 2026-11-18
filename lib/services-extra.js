import { SITE, SERVICES, SEO_EVIDENCE } from "./local/data";
import METHODS from "./local/service-extra-content.json";

const websiteTerms = "Fast pris skriftligt innan jag börjar. Löpande hjälp har ett fast månadspris som du vet i förväg.";
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
    metaDescription: "Webbutveckling för företag: innehåll, redaktörsflöde och integrationer. Klickbar demo efter första samtalet, helt riskfritt, och fast pris skriftligt före start.",
    h1: "Webbutveckling för det er sajt behöver göra.", highlight: "behöver göra",
    subtitle: "När sajten behöver ett redaktörsverktyg, egna funktioner eller kopplingar till andra system börjar jag med arbetsflödet. Efter första samtalet får ni en klickbar demo, helt riskfritt, och sedan förslag på teknik, omfattning och ansvar före start.",
    intro: "På den här sidan väljer ni upplägg för ett webbprojekt. För en vanlig företagssajt med fast pris finns ett separat hemsideerbjudande.",
    cta: { href: "/kontakt", label: "Beskriv ert webbprojekt" },
    features: [
      { title: "Sidstruktur och innehåll", desc: "Jag utgår från det besökaren ska hitta och göra. Viktiga tjänster och kontaktvägar får tydliga ingångar." },
      { title: "Redaktörens arbete", desc: "Vi bestämmer vilka delar ni ska ändra själv och provar ett vanligt arbetsmoment före lansering." },
      { title: "Funktioner och kopplingar", desc: "Formulär, bokning och externa system avgränsas i förslaget. Åtkomst och löpande ansvar ingår i planeringen." },
    ],
    offers: [
      { name: "Företagssajt med fast pris", price: "Fast pris innan jag börjar", desc: "En tydlig företagssajt med omfattningen avtalad i förväg.", terms: websiteTerms, href: "/hemsida-foretag", label: "Se hemsidor för företag" },
      { name: "Ett anpassat webbprojekt", price: "Enligt offert", desc: "Redaktörsflöde, integrationer och egna funktioner prissätts efter överenskommen omfattning.", terms: "Förslaget beskriver bygge, test, leverans och fortsatt drift." },
    ],
    proof: { title: "Linguista: innehåll och redaktörsflöde", text: "I uppdraget för Linguista flyttades över 70 artiklar från WordPress och redaktionen fick ett innehållssystem. Projektet visar hur innehåll, publicering och teknik kan planeras tillsammans.", href: "/projekt/linguista", label: "Se projektets omfattning och före/efter" },
    faqs: [
      { q: "Hur väljer du teknik?", a: "Jag utgår från innehåll, hur ni vill redigera och vilka system som behöver kopplas ihop. WordPress eller ett anpassat bygge kan båda vara relevanta. Valet och driftansvaret beskrivs i förslaget." },
      { q: "Hur skiljer sig denna tjänst från en vanlig företagssajt?", a: "En vanlig företagssajt har en tydlig omfattning. Anpassade funktioner och integrationer behöver egen avgränsning och ett eget fast pris, som ni får skriftligt innan jag börjar. Priserna anges exkl. moms." },
      { q: "Hur bestäms leveranstiden?", a: "Efter att innehåll, funktioner och åtkomst är genomgångna får ni en tidplan skriftligt, tillsammans med det fasta priset. Innan dess har ni klickat runt i demon från första samtalet." },
    ],
    relatedHref: "/hemsida-foretag", relatedLabel: "Hemsidor för företag",
    ctaTitle: "Vilken uppgift behöver er sajt lösa?", ctaText: "Skicka er webbadress, önskade funktioner och hur ni vill arbeta med innehållet. Jag hör av mig nästa arbetsdag och bokar första samtalet.",
  }),
  seo: base("seo", {
    slug: "seo", badge: "SEO", serviceName: "Sökmotoroptimering",
    metaTitle: "SEO-byrå: audit, sökord och tydlig åtgärdsplan",
    metaDescription: "SEO-audit med fast pris skriftligt innan jag börjar. Nollmätning, teknik och innehåll med prioriterad åtgärdslista. Löpande arbete avgränsas före start.",
    h1: "SEO med en tydlig plan från nuläget.", highlight: "tydlig plan",
    subtitle: "Jag går igenom vad kunderna söker, hur din sajt kan läsas och vilka sidor som behöver förbättras. Du får en prioriterad åtgärdslista innan du beställer fortsatt arbete.",
    offers: [
      { name: "SEO-audit", price: "Fast pris innan jag börjar", desc: "Nollmätning av teknik, innehåll och synlighet med prioriterad åtgärdslista.", terms: "Engångsgranskning. Åtgärder avtalas separat." },
      { name: "Löpande SEO-arbete", price: "Fast månadspris i förväg", desc: "Löpande innehåll och optimering enligt överenskommen omfattning. Större SEO-projekt får separat offert.", terms: websiteTerms },
    ],
    proof: { title: "Niklassons Flytt: struktur och dokumenterad mätning", text: `Webbplatsen har 38 tjänste- och ortssidor. Händelsemätningen registrerade ${SEO_EVIDENCE.count} offertförfrågningar under en ${SEO_EVIDENCE.days}-dagarsperiod, hämtad ${SEO_EVIDENCE.date}. Det beskriver webbplatsen i den perioden. SEO-effekt bedöms även med sökdata och jämförelse över tid.`, href: SEO_EVIDENCE.href, label: "Se projektet och mätningens avgränsning" },
    relatedHref: "/sokmotoroptimering", relatedLabel: "Guiden till sökmotoroptimering",
    ctaTitle: "Börja med din sajt och dina tjänster.", ctaText: "Skicka din webbadress, serviceområde och vad du säljer. Jag föreslår en granskning med tydlig omfattning.",
  }),
  "google-ads": base("google-ads", {
    slug: "google-ads", serviceName: "Google Ads",
    metaTitle: "Google Ads-byrå: kampanjer och uppföljning",
    metaDescription: "Google Ads med fast pris skriftligt innan jag börjar. Separat annonsbudget. Befintligt konto enligt offert. Du äger kontot.",
    h1: "Google Ads med tydligt mål och budget.", highlight: "mål och budget",
    subtitle: "Jag bygger annonser kring det du säljer och följer kostnaden för relevanta kontakter. Uppdraget börjar med ditt serviceområde, din marginal och vad som räknas som en användbar förfrågan.",
    offers: [
      { name: "Google Ads, uppsättning och skötsel", price: "Fast pris innan jag börjar", desc: "Uppsättning och löpande skötsel enligt överenskommen omfattning.", terms: `${websiteTerms} Annonsbudgeten tillkommer och betalas separat till Google.` },
      { name: "Ett befintligt annonskonto", price: "Enligt offert", desc: "Granskning, kampanjändringar och uppföljning avgränsas utifrån ditt konto. Eventuellt arbete på en befintlig landningssida specificeras i offerten.", terms: "Arbetets pris och villkor bekräftas före start. Annonsbudget tillkommer." },
    ],
    proof: { title: "Så följs en kontakt vidare till affär", text: "Ett klick på telefonnumret visar att någon försökte ta kontakt. För att bedöma affärsnytta behöver vi även känna till genomförda samtal, relevanta förfrågningar och vilka som blev kunder. Kostnadsguiden visar hur arbete, mediebudget och marginal kan räknas tillsammans.", href: "/blogg/vad-kostar-google-ads", label: "Läs kostnadsguiden" },
    faqs: [
      ...SERVICES["google-ads"].faqs,
      { q: "Kostar en kampanjsida extra?", a: "Det avgörs före start. En kampanjsida som ingår i den överenskomna omfattningen följer det fasta priset. En fristående kampanjsida eller arbete utanför omfattningen får ett eget fast pris skriftligt innan jag börjar." },
      { q: "När kan jag bedöma resultatet?", a: "Vi behöver tillräckligt med relevanta kontakter och återkoppling på vilka som blir affär. Tidsperioden beror på budget, efterfrågan och köpprocess. Uppföljningsperioden bestäms utifrån ditt upplägg." },
    ],
    relatedHref: "/tjanster/seo", relatedLabel: "Sökmotoroptimering",
    ctaTitle: "Visa ditt erbjudande och ditt nuläge.", ctaText: "Skicka din webbadress och berätta om tjänst, serviceområde och befintligt annonskonto. Jag föreslår upplägg och omfattning.",
  }),
  "ai-automation": base("ai-automation", {
    slug: "ai-automation", serviceName: "AI och automation", badge: "AI och automation",
    metaTitle: "AI-automation: avgränsade flöden",
    metaDescription: "AI-automation med mänsklig granskning. Fast pris skriftligt innan jag börjar. Kalender och systemintegrationer enligt separat offert.",
    h1: "AI och automation för ett avgränsat jobb.", highlight: "avgränsat jobb",
    subtitle: "Börja med ett ärende som återkommer. Jag beskriver vilket underlag flödet behöver, vad det gör och var du godkänner. Det kan gälla CRM, portaler och bokning, agenter som skriver utkast till svar och offerter som du godkänner, eller kopplingar mellan system.",
    offers: [
      { name: "Ett flöde i taget", price: "Fast pris per flöde", desc: "Agenter som skriver utkast till svar och offerter som du läser och godkänner, CRM, portaler och bokning, eller kopplingar mellan system. Fast pris efter en genomgång.", terms: websiteTerms, href: "/mindre-handarbete", label: "Se hur automation fungerar" },
      { name: "Ett anpassat flöde", price: "Enligt offert", desc: "Kalender, offertautomation, sammanfattningar och systemkopplingar avgränsas efter dina behov.", terms: "Offerten beskriver bygge, test, behörigheter och drift.", href: "/kontakt", label: "Beskriv ditt arbetsflöde" },
    ],
    proof: { title: "Kvota: från underlag till granskat offertutkast", text: "Kvota är min egen produkt för offertutkast med AI-stöd. Användaren kontrollerar pris, innehåll och villkor före utskick. Det visar ett konkret arbetsflöde där AI förbereder och människan fattar beslut.", href: "https://kvota.se", label: "Se Kvota" },
    relatedHref: "/mindre-handarbete", relatedLabel: "Mindre handarbete med automation",
    ctaTitle: "Börja med ett konkret ärende.", ctaText: "Se vad som kan automatiseras hos er. Behöver du koppla andra system, beskriv ett exempelärende så avgränsar jag arbetet.",
  }),
  "managed-hemsida": {
    slug: "managed-hemsida", serviceName: "Drift och underhåll", serviceType: "Förvaltning av webbplats", badge: "Drift och underhåll",
    metaTitle: "Managed hemsida: drift, underhåll och innehållsändringar",
    metaDescription: "Drift och underhåll av hemsidan med fast månadspris som du vet i förväg. Svar nästa arbetsdag, och jag kan ta över sajter jag inte byggt.",
    h1: "Din hemsida, uppdaterad och omhändertagen.", highlight: "omhändertagen",
    subtitle: "Jag sköter drift, underhåll och överenskomna innehållsändringar. Har någon annan byggt sajten börjar jag med att kontrollera teknik, konton och vilket ansvar som går att ta över.",
    bullets: ["En kontaktperson", "Svar nästa arbetsdag", "Genomgång före övertagande"],
    intro: "Drift kan ingå i ett fast månadspris. För en befintlig sajt bekräftas omfattningen efter en genomgång.",
    cta: { href: "/kontakt", label: "Be om en genomgång av din sajt" },
    features: [
      { title: "Uppdateringar och kontroll", desc: "Jag planerar plattforms- och innehållsändringar och kontrollerar viktiga sidor och kontaktvägar efteråt." },
      { title: "Säkerhetskopior och återställning", desc: "Lösningen för säkerhetskopior och återställning bestäms utifrån din plattform och beskrivs vid övertagandet." },
      { title: "Konton och ansvar", desc: "Du får veta vilka konton och delar jag sköter och vilken åtkomst du behåller. Ett ärende och en större ombyggnad avgränsas separat." },
    ],
    process: [
      { title: "Inventering", desc: "Du visar sajt, plattform och nuvarande leverantör. Jag går igenom drift, konton och avtalsberoenden." },
      { title: "Omfattning", desc: "Jag bekräftar vad som kan tas över och vilket separat arbete som behövs." },
      { title: "Överlämning", desc: "Åtkomst, säkerhetskopior och ansvar kontrolleras innan övertagandet." },
      { title: "Löpande hjälp", desc: "Du skickar ändringar via den överenskomna kontaktvägen. Jag utför dem enligt överenskommen omfattning, med svar nästa arbetsdag." },
    ],
    offers: [
      { name: "Löpande drift och ändringar", price: "Fast månadspris i förväg", desc: "Hosting, säkerhet och innehållsändringar enligt överenskommen omfattning. Svar nästa arbetsdag.", terms: websiteTerms },
    ],
    faqs: [
      { q: "Är svarstid samma sak som ändringstid?", a: "Nej. Ett svar bekräftar att jag tagit emot ditt ärende. Jag svarar nästa arbetsdag. En genomförd innehållsändring följer den överenskomna omfattningen, och större ändringar får separat tidplan." },
      { q: "Kan du ta över en hemsida från en annan leverantör?", a: "Jag börjar med en genomgång av plattform, avtal, konton och åtkomst. Efter den bekräftar jag vad jag kan ta ansvar för och om överföring eller annat extra arbete behövs." },
      { q: "Hur länge gäller avtalet?", a: "Löpande hjälp har ett fast månadspris som du vet i förväg, exkl. moms. Ett särskilt övertagande eller arbete utanför omfattningen beskrivs i offerten." },
      { q: "Ingår aktiv SEO?", a: "Sökgrunden ingår i en ny sajt. Aktiv optimering och nytt innehåll är löpande arbete med fast månadspris, och en större SEO-insats avgränsas separat." },
    ],
    relatedHref: "/sa-funkar-det", relatedLabel: "Så funkar det",
    ctaTitle: "Visa din sajt innan vi bestämmer ansvaret.", ctaText: "Skicka webbadress, nuvarande plattform och vilka ändringar du brukar behöva. Jag börjar med en genomgång.",
  },
  "e-handel": {
    slug: "e-handel", serviceName: "E-handel", serviceType: "E-handelsutveckling", badge: "E-handel",
    metaTitle: "E-handel: mindre webbutik eller större ombyggnad",
    metaDescription: "E-handel med tydlig omfattning. Webbshop, ny butiksfront eller flytt från äldre plattform, med fast pris skriftligt innan jag börjar.",
    h1: "E-handel med ett upplägg för ditt sortiment.", highlight: "ditt sortiment",
    subtitle: "En mindre webbshop och en ombyggnad av en befintlig butik behöver olika upplägg. Jag börjar med produkter, betalning, frakt och systemkopplingar innan du väljer omfattning.",
    bullets: ["Omfattning före start", "Betalning och frakt planeras", "Namngivet eget projekt"],
    intro: "Jag hjälper dig välja mellan en mindre webbshop och ett större projekt. Specialintegrationer och leverantörsavgifter behöver beskrivas innan du beställer.",
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
      { name: "Mindre webbshop", price: "Fast pris innan jag börjar", desc: "Webbshop och produktsidor för en mindre butik. Produkter och funktioner avgränsas före start.", terms: `${websiteTerms} Betal- och fraktleverantörers avgifter samt specialintegrationer specificeras separat.`, href: "/sa-funkar-det", label: "Se hur det går till" },
      { name: "Ny butiksfront", price: "Fast pris innan jag börjar", desc: "Ny butiksfront på befintlig plattform. Befintlig produkt- och kassahantering behålls enligt projektets plan.", terms: "Större funktioner och integrationer får egen avgränsning." },
      { name: "Full flytt", price: "Fast pris innan jag börjar", desc: "Flytt från äldre plattform med produktmigrering, adressernas ompekningar och ny kassa. Antal produkter, språk och kopplingar bekräftas i offerten.", terms: "Löpande drift har ett fast månadspris som du vet i förväg." },
    ],
    proof: { title: "Batteriproffs: min egen webbutik", text: "Batteriproffs är ett eget e-handelsprojekt. Caset visar sortiment, köpflöde och tekniska vägval. Det hjälper dig granska vad jag faktiskt har byggt innan du beställer en lösning för ditt sortiment.", href: "/projekt/batteriproffs", label: "Se butiksprojektet" },
    faqs: [
      { q: "När räcker en mindre webbshop?", a: "Det passar en mindre butik med begränsat sortiment. Vi avgränsar produkter, betalning och frakt före start. En större ombyggnad, produktmigrering och egna systemkopplingar är en annan omfattning." },
      { q: "Vad skiljer en ny butiksfront från en full flytt?", a: "En ny butiksfront ligger på befintlig plattform. En full flytt omfattar produktmigrering, ompekningar och ny kassa. Båda får ett fast pris skriftligt innan jag börjar, och funktioner utanför omfattningen bekräftas och prissätts före start." },
      { q: "Vad kostar driften för ett större butiksprojekt?", a: "Löpande drift har ett fast månadspris som du vet i förväg. Vad som sköts och vilka leverantörsavgifter som tillkommer specificeras i förslaget." },
      { q: "Är leveranstiden alltid 30 dagar?", a: "En planerad leveranstid bekräftas när sortiment, åtkomst och funktioner är genomgångna. Produktunderlag och integrationsbehov kan påverka tidplanen." },
      { q: "Kan en flytt påverka Google-placeringarna?", a: "Ja. En adressplan och ompekningar minskar risken, men placeringar kan ändras. Jag kontrollerar de överenskomna adresserna och följer upp efter lansering." },
    ],
    relatedHref: "/blogg/vad-kostar-webbutik", relatedLabel: "Kostnadsguiden för webbutiker",
    ctaTitle: "Börja med det butiken behöver klara.", ctaText: "Skicka butikens adress, antal produkter, språk och vilka system den behöver koppla till. Jag föreslår rätt omfattning.",
  },
  wordpress: {
    slug: "wordpress", serviceName: "WordPress", serviceType: "WordPress-utveckling", badge: "WordPress",
    metaTitle: "WordPress-hemsida: bygga, redigera och underhålla",
    metaDescription: "WordPress för företag med tydligt redaktörsbehov. Fast pris innan jag börjar. Drift, innehåll och eventuell flytt avgränsas före start.",
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
      { name: "Hemsida med WordPress", price: "Fast pris innan jag börjar", desc: "Teknik och innehållsomfattning bestäms i förslaget.", terms: websiteTerms, href: "/sa-funkar-det", label: "Se hur det går till" },
      { name: "Hjälp med en befintlig sajt", price: "Enligt offert", desc: "Felsökning, övertagande eller ändringar avgränsas efter att plattform och åtkomst är genomgångna.", terms: "En eventuell flytt är ett separat beslut och beskrivs i förslaget." },
    ],
    proof: { title: "Ett dokumenterat val av plattform", text: "I Linguista-projektet flyttades över 70 artiklar från WordPress och redaktionen fick ett innehållssystem. Det är ett exempel på ett plattformsbyte. För ditt projekt bedömer jag först om befintlig WordPress kan uppfylla behovet.", href: "/projekt/linguista", label: "Se plattformsvalet i projektet" },
    faqs: [
      { q: "Måste jag lämna WordPress?", a: "Nej. Om det passar ditt innehållsarbete kan WordPress behållas. Jag bedömer befintligt bygge och underhållsbehov innan jag föreslår något annat." },
      { q: "Kan jag uppdatera sajten själv?", a: "Redaktörens uppgifter och verktyg planeras i projektet. Du får en genomgång av de delar du ska ändra. Innehållsändringar kan också skickas till mig enligt överenskommen omfattning." },
      { q: "Vad kostar en hemsida med WordPress?", a: "Första samtalet kostar ingenting. Därefter får du ett fast pris skriftligt innan jag börjar, exkl. moms. Särskilda tillägg och integrationer avgränsas före start." },
      { q: "Kan en befintlig sajt flyttas?", a: "Ja. Flytten får ett fast pris skriftligt innan jag börjar. Omfattning, innehåll och integrationsbehov kontrolleras innan upplägget bekräftas." },
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
    offers: [{ name: "Meta-kampanjer", price: "Enligt offert", desc: "Arbete med Facebook och Instagram avgränsas efter konto, material och mål.", terms: "Mediebudget till Meta tillkommer separat. Villkor bekräftas i offerten." }],
    faqs: [
      { q: "Kan du sköta Meta-annonser?", a: "Ja. Meta-hantering har ett eget fast pris skriftligt innan jag börjar, och en separat annonsbudget till Meta." },
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
    metaDescription: "Audit av AI-synlighet med fast pris skriftligt innan jag börjar. Frågeurval, AI-tjänster, datum och körningar dokumenteras. Rapport med observationer och prioriterade åtgärder.",
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
    offers: [{ name: "AI-synlighetsaudit", price: "Fast pris innan jag börjar", desc: "Avtalat frågeurval, observationer och genomgång med prioriterad rapport.", terms: "Engångsgranskning. Antal frågor, AI-tjänster och körningar bekräftas före start. Genomförande av åtgärder avtalas separat." }],
    faqs: [
      { q: "Vad ingår i rapporten?", a: "Avtalat frågeurval, AI-tjänster, antal körningar, datum, dokumenterade svar och källor. Jag beskriver begränsningar och ger en prioriterad åtgärdslista för teknik och innehåll." },
      { q: "Är AI-läsbarhet samma sak som att bli citerad?", a: "Nej. Läsbarhet beskriver att innehåll kan hämtas och förstås tekniskt. Om en tjänst faktiskt nämner eller länkar företaget behöver observeras separat. Lighthouse har ingen kategori för AI-läsbarhet." },
      { q: "Kan en placering i Google eller FAQ-schema garantera AI-citat?", a: "Nej. Sökposition och sidstruktur kan ingå i underlaget, men ingen av dem är en citeringsgaranti. Jag redovisar vad som observerats och hur mätningen gjordes." },
      { q: "Ingår AI-mätning i löpande SEO-arbete?", a: "Löpande SEO och innehållsarbete omfattar inte automatiskt en särskild mätning. En mätning med frågeurval och dokumenterad rapport bekräftas separat och får ett fast pris skriftligt innan jag börjar." },
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
    openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }],  title: s.metaTitle, description: s.metaDescription, url, type: "website", locale: "sv_SE", siteName: SITE.name },
    twitter: { images: ["/og-image.png"],  card: "summary_large_image", title: s.metaTitle, description: s.metaDescription },
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
