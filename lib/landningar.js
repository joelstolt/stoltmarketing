/* Innehållet i landningssidorna för Google Ads (2026-11-18). En sida per annonsgrupp.
   Strategi och sökord: _underlag/arbetsmappar/google-ads-2026-11-18/STRATEGI.md.
   Regler: tilltal ni, inga priser utom fast pris skriftligt, inga påhittade siffror,
   inga långa tankstreck. Bevisen ligger i components/ny/Landning.jsx (BEVIS). */

const PRIS_SYSTEM = [
  { titel: "Antal system", text: "Hur många system som ska hänga ihop, och om de har ett sätt att hämta och skicka uppgifter." },
  { titel: "Antal flöden", text: "Hur många saker som ska gå mellan dem, till exempel ordrar, kunder och fakturor." },
  { titel: "Undantag", text: "Hur mycket som måste hanteras särskilt: returer, delbetalningar, flera valutor eller lager." },
  { titel: "Drift efteråt", text: "Om ni vill att jag sköter det löpande till fast månadspris, eller tar över själva." },
];

const PRIS_AI = [
  { titel: "Vad som ska göras", text: "Vilka uppgifter som ska tas över, och hur många steg varje uppgift har." },
  { titel: "Era system", text: "Vilka system AI:n ska läsa från och skriva till, till exempel mejl, kalender och affärssystem." },
  { titel: "AI-kostnad", text: "Den löpande kostnaden för AI:n. Den får ett tak per månad, så den kan inte skena." },
  { titel: "Drift efteråt", text: "Om ni vill att jag sköter det löpande till fast månadspris, eller tar över själva." },
];

const FRAGA_AGANDE = {
  q: "Vem äger det som byggs?",
  a: "Ni gör. Koden och uppgifterna är era.",
};

export const LANDNINGAR = {
  "fortnox-integration": {
    slug: "fortnox",
    service: "Annons: Fortnox-integration",
    meta: {
      title: "Fortnox-integration byggd för hur ni jobbar",
      description:
        "Saknas en färdig koppling till Fortnox? Jag bygger den: webbshop, CRM, bokning eller ert eget system. Fast pris skriftligt innan jag börjar, svar nästa arbetsdag.",
    },
    kicker: "Fortnox-integration",
    h1: "Fortnox-integration, byggd för hur ni jobbar.",
    lead: "Saknas en färdig koppling som gör det ni behöver? Jag bygger den. Ordrar, kunder och fakturor går mellan Fortnox och webbshoppen, CRM:et eller ert eget system, utan att någon skriver av dem för hand.",
    form: {
      titel: "Berätta vad som ska kopplas ihop",
      text: "Några rader räcker. Jag svarar nästa arbetsdag med frågor eller ett förslag på upplägg.",
      label: "Vad ska gå till eller från Fortnox?",
      placeholder:
        "Till exempel: ordrar i webbshoppen ska bli fakturor i Fortnox. Skriv gärna vilka system ni har, och ett telefonnummer om ni vill att jag ringer.",
    },
    bevis: ["grossist", "crm"],
    demoRubrik: "Uppgifterna går själva, åt rätt håll.",
    demoText: [
      "Fortnox har ett öppet API för bland annat kunder, artiklar, ordrar och fakturor. Det betyder att ett annat system kan hämta och skicka uppgifter till Fortnox, när något händer eller på bestämda tider.",
      "Jag börjar med det flöde som tar mest tid i dag. När det fungerar och ni ser vad det sparar tar vi nästa.",
    ],
    demo: {
      typ: "flode",
      titel: "En order i webbshoppen, hela vägen in i Fortnox",
      steg: [
        { label: "Kunden beställer i webbshoppen", typ: "falt", text: "Order 1043, tre artiklar, betald med kort" },
        { label: "Kopplingen skapar fakturan i Fortnox", typ: "notis", text: "Ny faktura i Fortnox", var: "Kunden fanns redan och uppdaterades" },
        { label: "Ni ser det, utan att skriva av något", typ: "klart", text: "Fakturan ligger i Fortnox, kopplad till ordern." },
      ],
      fot: "Vad som ska gå åt vilket håll bestämmer vi tillsammans.",
    },
    gor: {
      rubrik: "Vanliga Fortnox-kopplingar",
      ingress: "Finns det en färdig app som gör det ni behöver säger jag det. Jag bygger när den inte finns, inte räcker eller när flera system ska hänga ihop.",
      items: [
        { titel: "Webbshop och Fortnox", text: "Ordrar från WooCommerce, Shopify eller en egen butik blir kunder och fakturor i Fortnox." },
        { titel: "CRM och Fortnox", text: "En vunnen affär blir en faktura, och ni ser i CRM:et vad kunden har betalat." },
        { titel: "Bokning och Fortnox", text: "Bokade kurser, tider eller tjänster faktureras utan att någon skriver av bokningen." },
        { titel: "Ert eget system", text: "Har ni ett system som inget färdigt tillägg stöder bygger jag kopplingen mellan det och Fortnox." },
      ],
    },
    pris: PRIS_SYSTEM,
    faq: [
      {
        q: "Vad kostar en Fortnox-integration?",
        a: "Det beror på hur många flöden och system som ska hänga ihop. Ni får ett fast pris skriftligt innan jag börjar, och första samtalet kostar ingenting.",
      },
      {
        q: "Finns det inte färdiga integrationer till Fortnox?",
        a: "Jo, många. Finns det en som gör det ni behöver säger jag det, då är den ofta billigast. Jag bygger när det inte finns någon, när den färdiga inte räcker eller när flera system ska hänga ihop.",
      },
      {
        q: "Måste vi byta webbshop eller system?",
        a: "Nej, oftast inte. Jag bygger kopplingen mot det ni redan har. Saknar något system ett sätt att hämta och skicka uppgifter säger jag det i genomgången, innan bygget börjar.",
      },
      {
        q: "Vad händer om Fortnox ändrar något?",
        a: "Ni kan ha löpande drift till fast månadspris. Då ser jag till att kopplingen fungerar och rättar den om något ändras hos Fortnox eller i ert system. Svar nästa arbetsdag.",
      },
      FRAGA_AGANDE,
      {
        q: "Hur lång tid tar det?",
        a: "Ni får en tidplan tillsammans med det fasta priset. En koppling med ett flöde går fortare än flera system som ska hänga ihop.",
      },
    ],
    avslut: {
      rubrik: "Berätta vad som ska in i Fortnox.",
      text: "Första samtalet kostar ingenting. Ni får ett fast pris skriftligt innan jag börjar, och svar nästa arbetsdag.",
    },
  },

  systemintegration: {
    slug: "systemintegration",
    service: "Annons: Systemintegration",
    meta: {
      title: "Systemintegration: system som pratar med varandra",
      description:
        "Jag kopplar ihop sajt, webbshop, CRM, bokning och affärssystem så att ingen skriver av uppgifter för hand. Fast pris skriftligt innan jag börjar, svar nästa arbetsdag.",
    },
    kicker: "Systemintegration",
    h1: "Systemintegration som får era system att prata med varandra.",
    lead: "Skrivs samma uppgift in på två ställen, eller förs över för hand varje vecka? Jag kopplar ihop sajten, webbshoppen, CRM:et, bokningen och affärssystemet så att uppgifterna går av sig själva.",
    form: {
      titel: "Berätta vilka system ni har",
      text: "Några rader räcker. Jag svarar nästa arbetsdag med frågor eller ett förslag på upplägg.",
      label: "Vilka system ska hänga ihop, och vad ska gå mellan dem?",
      placeholder:
        "Till exempel: bokningar på sajten ska in i vårt kurssystem och kunden ska få en bekräftelse. Skriv gärna ett telefonnummer om ni vill att jag ringer.",
    },
    bevis: ["grossist", "crm"],
    demoRubrik: "När systemen inte hänger ihop blir någon på kontoret kopplingen.",
    demoText: [
      "Någon kopierar, klistrar in och dubbelkollar. Det tar tid varje vecka och det blir fel ibland.",
      "Jag bygger kopplingar som hämtar och skickar uppgifterna själva, med skydd mot dubbletter och besked till rätt person när något inte går igenom.",
    ],
    demo: { typ: "omrade", omrade: "kunder" },
    gor: {
      rubrik: "Det här brukar jag koppla ihop",
      ingress: "Ibland räcker en direkt koppling mellan två system, ibland behövs mer. Jag föreslår det enklaste som håller och säger varför.",
      items: [
        { titel: "Sajt och bokning", text: "Bokningar och förfrågningar från sajten hamnar direkt i rätt system hos rätt person." },
        { titel: "Webbshop och affärssystem", text: "Ordrar och fakturor mellan webbshoppen och Fortnox, Visma eller ett annat affärssystem." },
        { titel: "CRM, mejl och kalender", text: "Förfrågningar, mejl och möten på samma kundkort, utan att någon flyttar dem." },
        { titel: "Listor och kalkylark", text: "Excel-filer som flera uppdaterar för hand blir ett system där uppgifterna finns på ett ställe." },
      ],
    },
    pris: PRIS_SYSTEM,
    faq: [
      {
        q: "Vad kostar systemintegration?",
        a: "Det beror på hur många system och flöden som ska hänga ihop. Ni får ett fast pris skriftligt innan jag börjar, och första samtalet kostar ingenting.",
      },
      {
        q: "Vilka system går att koppla ihop?",
        a: "System som har ett sätt att hämta och skicka uppgifter, oftast ett API. De flesta affärssystem, webbshoppar, CRM och bokningssystem har det. Jag kollar era system i genomgången.",
      },
      {
        q: "Behöver vi en integrationsplattform?",
        a: "Inte alltid. Ibland räcker en direkt koppling mellan två system, ibland är en plattform rätt. Jag föreslår det enklaste som håller och förklarar varför.",
      },
      {
        q: "Vad händer när något slutar fungera?",
        a: "Med löpande drift börjar jag felsöka samma arbetsdag. Ni pratar med den som byggde kopplingen, inte med en kö.",
      },
      FRAGA_AGANDE,
      {
        q: "Hur lång tid tar det?",
        a: "Ni får en tidplan tillsammans med det fasta priset. Ett flöde mellan två system går fortare än flera system som ska hänga ihop.",
      },
    ],
    avslut: {
      rubrik: "Berätta vilka system som ska hänga ihop.",
      text: "Första samtalet kostar ingenting. Ni får ett fast pris skriftligt innan jag börjar, och svar nästa arbetsdag.",
    },
  },

  "crm-med-ai": {
    slug: "crm",
    service: "Annons: CRM med AI-agent",
    meta: {
      title: "CRM med AI-agent, byggt för hur ni säljer",
      description:
        "Förfrågningar, offerter, uppföljning och fakturor på ett ställe. AI skriver utkasten, ni bestämmer vad som skickas. Fast pris skriftligt innan jag börjar.",
    },
    kicker: "CRM med AI-agent",
    h1: "Ett CRM byggt för hur ni säljer, med AI som gör grovjobbet.",
    lead: "Förfrågningar, offerter, uppföljning och fakturor på ett ställe. AI skriver utkasten till svar och påminnelser. Ni läser och bestämmer vad som skickas.",
    form: {
      titel: "Berätta hur ni säljer i dag",
      text: "Några rader räcker. Jag svarar nästa arbetsdag med frågor eller ett förslag på upplägg.",
      label: "Vad tar tid i dag, och vilka verktyg använder ni?",
      placeholder:
        "Till exempel: förfrågningar kommer på mejl, offerter görs i Word och ingen har koll på vem som behöver en påminnelse. Skriv gärna ett telefonnummer om ni vill att jag ringer.",
    },
    bevis: ["crm", "grossist"],
    demoRubrik: "Inget skickas utan att ni har läst det.",
    demoText: [
      "En AI-agent är ett program som gör uppgifter åt er: läser mejl, skriver ett första utkast till svar och påminner om offerter som inte fått svar.",
      "Agenten skriver, ni bestämmer. Allt som går till en kund väntar på ert klick, och jag bygger den så att den aldrig kan göra mer än den som använder den.",
    ],
    demo: { typ: "omrade", omrade: "handarbete" },
    gor: {
      rubrik: "Det här kan ingå",
      ingress: "Bara det ni använder, med era egna säljsteg. Ni anpassar inte er försäljning efter systemet.",
      items: [
        { titel: "Förfrågningar och kunder", text: "Varje förfrågan från sajten eller mejlen blir en kund och en uppgift. Ingen tappas bort." },
        { titel: "Offerter och uppföljning", text: "Offerter som kunden godkänner med en länk, och en påminnelse när kunden inte har svarat." },
        { titel: "Fakturor", text: "En vunnen affär blir ett fakturautkast i CRM:et, eller går vidare till Fortnox." },
        { titel: "AI som skriver utkast", text: "Svar på mejl och påminnelser skrivs åt er, i er ton. Ni läser, ändrar och skickar." },
      ],
    },
    pris: PRIS_AI,
    faq: [
      {
        q: "Varför inte ett färdigt CRM?",
        a: "Ett färdigt CRM passar många. Ett eget lönar sig när ni anpassar er efter systemet i stället för tvärtom, när det ska hänga ihop med flera andra system eller när ni vill att AI gör en del av jobbet. Jag säger ärligt vad jag tror passar er.",
      },
      {
        q: "Vad kostar det?",
        a: "Ni får ett fast pris skriftligt innan jag börjar. AI-kostnaden får ett tak per månad. I mitt eget CRM kostade det 0,63 USD att låta AI gå igenom 30 dagars mejl och skriva 22 svarsutkast.",
      },
      {
        q: "Skickar AI:n något själv?",
        a: "Nej. Allt som går till en kund väntar på att någon av er läser och klickar.",
      },
      {
        q: "Kan vi flytta in det vi har i dag?",
        a: "Ja. Till mitt eget CRM flyttade jag kunder, affärer och abonnemang från Notion. Kunder och historik från ert nuvarande verktyg kan flyttas in på samma sätt.",
      },
      {
        q: "Var lagras våra uppgifter?",
        a: "Ni äger uppgifterna. Vilka tjänster som lagrar och behandlar dem står i förslaget, så att ni kan ta ställning innan något byggs.",
      },
      FRAGA_AGANDE,
    ],
    avslut: {
      rubrik: "Berätta hur ni säljer i dag.",
      text: "Första samtalet kostar ingenting. Ni får ett fast pris skriftligt innan jag börjar, och svar nästa arbetsdag.",
    },
  },

  "ai-konsult": {
    slug: "ai",
    service: "Annons: AI-konsult och automation",
    meta: {
      title: "AI-konsult som bygger det ni behöver",
      description:
        "Jag tar reda på var AI sparar tid hos er, bygger det och ser till att det fungerar. AI gör grovjobbet, ni godkänner det som går till kund. Fast pris innan jag börjar.",
    },
    kicker: "AI-konsult och automation",
    h1: "AI-konsult som bygger det ni behöver, inte bara pratar om det.",
    lead: "Jag tar reda på var AI sparar tid hos er, bygger det och ser till att det fungerar. AI gör grovjobbet, ni godkänner allt som går till en kund.",
    form: {
      titel: "Berätta vad som tar tid",
      text: "Några rader räcker. Jag svarar nästa arbetsdag med frågor eller ett förslag på var ni kan börja.",
      label: "Vilket arbete gör ni för hand varje vecka?",
      placeholder:
        "Till exempel: vi svarar på samma frågor i mejl varje dag, eller skriver av beställningar till affärssystemet. Skriv gärna ett telefonnummer om ni vill att jag ringer.",
    },
    bevis: ["crm"],
    demoRubrik: "Börja med ett arbete som tar tid varje vecka.",
    demoText: [
      "Automation som ingen använder är dyr. Därför börjar jag med ett arbete som tar tid i dag, bygger det och visar vad det sparar innan vi tar nästa.",
      "Jag säger också när AI inte är svaret. Ibland räcker en enkel automation eller ett bättre formulär.",
    ],
    demo: {
      typ: "flode",
      titel: "Ett mejl från en kund, med svarsutkast klart",
      steg: [
        { label: "Kunden mejlar", typ: "falt", text: "Hej, har ni tid att byta element i vecka 48?" },
        { label: "AI läser mejlet och skriver ett utkast", typ: "utkast", text: "Hej! Vi har tid tisdag eller torsdag i vecka 48. Passar någon av dagarna?" },
        { label: "Ni läser och skickar", typ: "skicka", text: "Inget går iväg innan ni klickar." },
      ],
      fot: "AI:n hämtar uppgifterna ur era system och era tidigare svar. Ni bestämmer.",
    },
    gor: {
      rubrik: "Där AI brukar spara tid",
      ingress: "En AI-agent är ett program som gör uppgifter åt er. Den skriver och sorterar, ni godkänner.",
      items: [
        { titel: "Svar på mejl och förfrågningar", text: "AI skriver ett första utkast i er ton, med uppgifter från era system. Ni läser och skickar." },
        { titel: "Offerter och påminnelser", text: "Utkast till offert ur förfrågan, och en påminnelse när kunden inte har svarat." },
        { titel: "Sortering och sammanfattning", text: "Mejl, ärenden och dokument sorteras och sammanfattas, så att rätt person tar rätt sak." },
        { titel: "Uppgifter mellan system", text: "Det som i dag skrivs av för hand mellan mejl, CRM och affärssystem förs över automatiskt." },
      ],
    },
    pris: PRIS_AI,
    faq: [
      {
        q: "Vad gör en AI-konsult hos er?",
        a: "Jag går igenom var tiden går, föreslår vad som lönar sig att automatisera och bygger det. Ni får ett fast pris skriftligt innan jag börjar.",
      },
      {
        q: "Vad kostar det?",
        a: "Ni får ett fast pris skriftligt innan jag börjar. AI-kostnaden får ett tak per månad. I mitt eget CRM kostade det 0,63 USD att låta AI gå igenom 30 dagars mejl och skriva 22 svarsutkast.",
      },
      {
        q: "Är det säkert att låta AI skriva till våra kunder?",
        a: "AI:n skickar ingenting själv. Allt som går till en kund väntar på att någon av er läser och klickar, och den kan aldrig göra mer än den som använder den.",
      },
      {
        q: "Behöver vi köpa ChatGPT-licenser?",
        a: "Nej, inte för det jag bygger. AI:n körs i systemet jag bygger åt er, och kostnaden får ett tak per månad.",
      },
      {
        q: "Vilken AI använder ni?",
        a: "Den som passar uppgiften. I mitt eget system använder jag Claude från Anthropic.",
      },
      FRAGA_AGANDE,
    ],
    avslut: {
      rubrik: "Berätta vad ni gör för hand varje vecka.",
      text: "Första samtalet kostar ingenting. Ni får ett fast pris skriftligt innan jag börjar, och svar nästa arbetsdag.",
    },
  },
};

/* Metadata för en landningssida: noindex, egen canonical (aldrig i root-layouten). */
export function landningMetadata(path) {
  const d = LANDNINGAR[path];
  const url = `https://www.stoltmarketing.se/lp/${path}`;
  return {
    title: d.meta.title,
    description: d.meta.description,
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    alternates: { canonical: url },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }],
    },
  };
}
