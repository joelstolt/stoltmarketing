// ============================================================
// Data for kundcase-sidorna under /projekt/[slug].
// Nya case: lagg en entry har + tunn page.js/layout.js i app/projekt/<slug>/.
// Skriv bara pastaenden som ar verifierbara - inga hittade siffror.
// ============================================================

export const CASES = {
  "forskolan-harpan": {
    slug: "forskolan-harpan",
    screenshot: "/case-harpan.webp",
    category: ["Webb"],
    measurementNote: "Här visas levererade funktioner. Ingen före/efter-mätning av ansökningar, bokningar eller nya kunder redovisas.",
    title: "Förskolan Harpan",
    badge: "Kundcase",
    metaTitle: "Kundcase: Förskolan Harpan",
    metaDescription:
      "Ny grafisk profil och modern webbplats för Förskolan Harpan i Hässleholm: varm design, enkel platsansökan och en sajt förskolan uppdaterar utan utvecklare.",
    heroTitle: "Förskolan Harpan: en profil och sajt varm som verksamheten.",
    heroSubtitle:
      "En kristen förskola med musikprofil i Hässleholm behövde en identitet och en webbplats som gör det enkelt för föräldrar att hitta rätt och söka plats.",
    bullets: ["Ny grafisk profil", "Enkel platsansökan", "Automatisk publicering"],
    challenge: [
      "Förskolan saknade en sammanhängande grafisk identitet, och webbplatsen var svår att navigera för föräldrar som ville söka plats eller hitta praktisk information. Sajten behövde besvara praktiska frågor utan att skapa extra administration för personalen.",
    ],
    solution: [
      "Jag tog fram en varm och inbjudande profil som speglar verksamheten, med musiken och barnen i fokus, och byggde en sajt med tydlig navigation och enkel platsansökan. Automatisk publicering sköter själva publiceringen när innehållet har ändrats. Det är inte samma sak som att personalen kan redigera allt utan hjälp.",
    ],
    results: [
      { label: "Grafisk profil", value: "Ny identitet" },
      { label: "Teknik", value: "Next.js" },
      { label: "Status", value: "Live på egen domän" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Cloudflare Pages"],
    liveUrl: "https://www.forskolanharpan.se",
    deliverables: [
      "Grafisk profil och designsystem",
      "Design och bygge av webbplatsen",
      "Texter och struktur",
      "Platsansökan via formulär",
      "Drift på Cloudflare med autodeploy",
      "Löpande underhåll",
    ],
  },
  pingstkyrkan: {
    slug: "pingstkyrkan",
    screenshot: "/case-pingstkyrkan.webp",
    category: ["Webb"],
    measurementNote: "Här visas levererade funktioner. Ingen före/efter-mätning av ansökningar, bokningar eller nya kunder redovisas.",
    title: "Pingstkyrkan Hässleholm",
    badge: "Kundcase",
    metaTitle: "Kundcase: Pingstkyrkan Hässleholm",
    metaDescription:
      "Ny webbplats för Pingstkyrkan i Hässleholm: lugn design, tydlig information om samlingar och verksamhet, snabb och trygg drift på egen domän.",
    heroTitle: "Pingstkyrkan Hässleholm: en lugn och tydlig plats på nätet.",
    heroSubtitle:
      "En församling behöver en sajt som välkomnar nya besökare och håller medlemmarna uppdaterade, utan att någon i personalen ska behöva bli webbtekniker.",
    bullets: ["Tydlig struktur", "Lätt att underhålla", "Snabb och trygg drift"],
    challenge: [
      "Församlingen behövde en modern webbplats som samlar tider, verksamheter och kontaktvägar på ett ställe, och som känns lika välkomnande som mötet i dörren. Kravet var enkelhet: både för besökaren som söker en gudstjänsttid och för de som sköter sajten i vardagen.",
    ],
    solution: [
      "En stillsam, tydlig design med verksamheten i centrum, byggd som en snabb statisk sajt i Next.js på Cloudflare. Strukturen utgår från de frågor besökare faktiskt har: när är samlingarna, vad finns för barn och unga, hur kommer jag i kontakt. Kontaktformuläret skickar via Resend. Jag sköter den tekniska driften, medan innehåll och aktuella tider behöver hållas uppdaterade.",
    ],
    results: [
      { label: "Struktur", value: "Byggd kring besökarens frågor" },
      { label: "Teknik", value: "Next.js, statisk" },
      { label: "Status", value: "Live på egen domän" },
    ],
    tech: ["Next.js", "React", "Cloudflare Pages", "Resend"],
    liveUrl: "https://www.pingstkyrkanhassleholm.se",
    deliverables: [
      "Design och bygge av webbplatsen",
      "Informationsstruktur och texter",
      "Kontaktformulär via Resend",
      "Drift på Cloudflare",
      "Löpande underhåll",
    ],
  },
  gardetshundtrim: {
    slug: "gardetshundtrim",
    screenshot: "/case-gardetshundtrim.webp",
    category: ["Webb", "SEO"],
    measurementNote: "Här visas levererade funktioner. Ingen före/efter-mätning av ansökningar, bokningar eller nya kunder redovisas.",
    title: "Gärdets Hundtrim",
    badge: "Kundcase",
    metaTitle: "Kundcase: Gärdets Hundtrim",
    metaDescription:
      "Webbplats för Gärdets Hundtrim i Stockholm: varm design, tydliga tjänster och priser, och en enkel väg till bokning för hundägare på Gärdet.",
    heroTitle: "Gärdets Hundtrim: en sajt lika välkomnande som salongen.",
    heroSubtitle:
      "En lokal hundtrimsalong i Stockholm lever på närområdet och rekommendationer. Sajtens jobb är att göra första intrycket varmt och bokningen självklar.",
    bullets: ["Lokalt fokus", "Tjänster och priser tydligt", "Enkel bokningsväg"],
    challenge: [
      "En liten salong har ett enda digitalt jobb: när en hundägare i närområdet söker trimning ska salongen synas, kännas trygg och vara lätt att boka. Allt annat är brus. Sajten behövde visa tjänster, priser och personen bakom, utan omvägar.",
    ],
    solution: [
      "En varm, personlig sajt med tjänsterna och bokningsvägen i centrum, byggd för lokala sökningar kring Gärdet och Östermalm. Besökaren kan läsa priserna innan kontakt och ta nästa steg från tjänstesidan.",
    ],
    results: [
      { label: "Fokus", value: "Lokala bokningar" },
      { label: "Priser", value: "Öppna på sajten" },
      { label: "Status", value: "Live på egen domän" },
    ],
    tech: ["Responsiv design", "Lokal SEO-struktur"],
    liveUrl: "https://gardetshundtrim.se",
    deliverables: [
      "Design och bygge av webbplatsen",
      "Tjänste- och prisstruktur",
      "Kontakt- och bokningsväg",
      "Grundläggande lokal sökoptimering",
    ],
  },
  "batteriproffs": {
    "title": "Batteriproffs",
    "badge": "Eget projekt",
    "category": [
        "E-handel"
    ],
    "screenshot": "/case-batteriproffs.webp",
    "heroTitle": "Batteriproffs: min egen butik med en riktig företagskassa.",
    "heroSubtitle": "Batterier för företag, med öppna priser och en kassa anpassad för organisationsnummer, referens och leveransval.",
    "bullets": [
        "Egen B2B-butik",
        "Kassa för företagsköp",
        "Källspårning på ordernivå"
    ],
    "challenge": [
        "Jag ville pröva e-handelslösningar i en egen verksamhet. Batteriproffs säljer batterier för bland annat truckar, städmaskiner och fritidsbruk."
    ],
    "solution": [
        "Jag byggde produktval, företagskassa, kundkonto och orderflöde. Kunden kan se pris och ange de uppgifter som behövs för ett företagsköp.",
        "Källspårning på ordernivå används för uppföljning. Det tidigare caset redovisade fem beställningar under den första månaden, varav en med ChatGPT som källa. Månadens datum och den exakta attribueringsmetoden saknas i det publicerade underlaget, så de uppgifterna används inte som ett aktuellt resultat."
    ],
    "results": [
        {
            "label": "Kassa",
            "value": "Företagsanpassad"
        },
        {
            "label": "Priser",
            "value": "Öppna på sajten"
        },
        {
            "label": "Projekt",
            "value": "Egen butik"
        }
    ],
    "measurementNote": "Här visas levererade funktioner. Äldre Lighthouse-poäng saknar sparat testdatum i casets underlag och används inte som aktuell prestandamätning. En kanalmarkering på en order bevisar inte ensam vad som orsakade köpet.",
    "tech": [
        "Next.js",
        "Stripe",
        "Resend",
        "Umami"
    ],
    "liveUrl": "https://www.batteriproffs.se",
    "deliverables": [
        "Produkt- och användningssidor",
        "Företagskassa med Stripe",
        "Kundkonto och orderflöde",
        "Källspårning på ordernivå",
        "Omdömessystem med verifierat köp",
        "Drift och vidareutveckling"
    ],
    "slug": "batteriproffs",
    "metaTitle": "Eget projekt: Batteriproffs",
    "metaDescription": "Batterier för företag, med öppna priser och en kassa anpassad för organisationsnummer, referens och leveransval."
},
  "niklassonsflytt": {
    "title": "Niklassons Flytt",
    "badge": "Kundcase",
    "category": [
        "Webb",
        "SEO"
    ],
    "screenshot": "/case-niklassonsflytt.webp",
    "heroTitle": "Niklassons Flytt: offertförfrågningar som går att följa.",
    "heroSubtitle": "En flyttfirma i Helsingborg fick tydliga sidor för sina tjänster i Skåne, offertformulär och ett innehållssystem kunden kan uppdatera själv.",
    "bullets": [
        "37 offert-events i historiskt utdrag",
        "38 URL:er i sitemap",
        "Kunden redigerar innehållet"
    ],
    "challenge": [
        "Niklassons behövde samla tjänster, priser och kontaktvägar och kunna se vilka sidor besökarna använde före en offertförfrågan. De behövde också ändra innehåll utan att beställa varje textändring."
    ],
    "solution": [
        "Jag byggde tjänste- och ortssidor samt ett offertflöde med händelsemätning. Ett registrerat formulärevent kan följas upp, men behöver jämföras med levererade meddelanden och kundens affärssystem för att visa verkliga affärer.",
        "Kunden redigerar texter och priser i Sanity. Publiceringen bygger om sajten automatiskt efter en ändring."
    ],
    "results": [
        {
            "label": "Offert-events, 30-dagarsutdrag",
            "value": "37"
        },
        {
            "label": "Telefonklick i samma utdrag",
            "value": "10"
        },
        {
            "label": "URL:er i sitemap",
            "value": "38"
        }
    ],
    "measurementNote": "Källa: Umami-snapshot hämtat 5 september 2026 kl. 21.40 UTC. Utdraget avser de föregående 30 dagarna; exakta från- och tillgränser sparades inte i snapshotet. 37 är registrerade offert-skickad-events, inte verifierade unika kunder. 10 är klick på telefonlänken, inte genomförda samtal. Detta är historiska tal. Trafik, säsong och andra insatser kan påverka utfallet; ingen effekt jämfört med tiden före ombyggnaden har fastställts.",
    "tech": [
        "Next.js",
        "Sanity",
        "Cloudflare",
        "Resend",
        "Umami"
    ],
    "liveUrl": "https://www.niklassonsflytt.se",
    "deliverables": [
        "Tjänste- och ortssidor",
        "Offertformulär",
        "Mätning av kontaktaktiviteter",
        "Redigering i Sanity",
        "Automatisk publicering"
    ],
    "slug": "niklassonsflytt",
    "metaTitle": "Kundcase: Niklassons Flytt",
    "metaDescription": "En flyttfirma i Helsingborg fick tydliga sidor för sina tjänster i Skåne, offertformulär och ett innehållssystem kunden kan uppdatera själv."
},
  "arkipel": {
    "title": "Arkipel Entreprenad",
    "badge": "Kundcase",
    "category": [
        "Webb",
        "SEO"
    ],
    "screenshot": "/case-arkipel.webp",
    "heroTitle": "Arkipel: tydliga sidor för tjänster och upptagningsområde.",
    "heroSubtitle": "Ett byggföretag i Norrköping fick en webbplats som samlar renovering, totalentreprenad och referenser och leder vidare till offert.",
    "bullets": [
        "61 URL:er i sitemap",
        "Tjänster och orter",
        "Offertväg från innehållet"
    ],
    "challenge": [
        "Besökaren behövde kunna förstå vilka arbeten Arkipel tar sig an och var företaget arbetar, utan att leta genom en allmän startsida."
    ],
    "solution": [
        "Jag byggde innehåll kring tjänster, orter och kundens frågor. Varje relevant sida har egen titel och tydlig kontaktväg.",
        "Sidorna levereras färdigbyggda från Cloudflare. Offertformuläret skickar via Resend och kontaktaktiviteter följs i Umami."
    ],
    "results": [
        {
            "label": "URL:er i sitemap",
            "value": "61"
        },
        {
            "label": "Serversvar i äldre test",
            "value": "65 ms"
        },
        {
            "label": "Uppgift om startsidans vikt",
            "value": "80 kB"
        }
    ],
    "measurementNote": "Det tidigare caset anger augusti 2026 för sitemap, serversvar och sidvikt. Exakt testdatum, testplats, antal körningar och vilka resurser som ingår i 80 kB är inte sparade här. Talen är historiska observationer, inte ett mått på dagens fullständiga laddningstid. Medianen 17 från ett annat urval är inte Arkipels tidigare sidantal och används därför inte som före-värde. Fler sidor garanterar varken ranking eller fler kunder.",
    "tech": [
        "Next.js",
        "Cloudflare",
        "Resend",
        "Umami"
    ],
    "liveUrl": "https://www.arkipel.se",
    "deliverables": [
        "Informationsstruktur",
        "Tjänste- och ortssidor",
        "Referensprojekt",
        "Offertformulär",
        "Kontaktmätning",
        "Drift"
    ],
    "slug": "arkipel",
    "metaTitle": "Kundcase: Arkipel Entreprenad",
    "metaDescription": "Ett byggföretag i Norrköping fick en webbplats som samlar renovering, totalentreprenad och referenser och leder vidare till offert."
},
  "premiebygg": {
    "title": "Premie Bygg",
    "badge": "Kundcase",
    "category": [
        "Webb",
        "SEO"
    ],
    "screenshot": "/case-premiebygg.webp",
    "heroTitle": "Premie Bygg: från tjänstesida till offertförfrågan.",
    "heroSubtitle": "Byggföretag i Örebro med tydliga tjänster, referensbilder och ett offertflöde som behöver fungera hela vägen till mottagaren.",
    "bullets": [
        "47 URL:er i sitemap",
        "Offertformulär via Resend",
        "Referensbilder och tjänster"
    ],
    "challenge": [
        "Det räcker inte att ett formulär visar en bekräftelse. Förfrågan måste också nå rätt mottagare. Premie Bygg behövde ett tydligt kontaktflöde tillsammans med sidor för verksamhetens tjänster."
    ],
    "solution": [
        "Jag byggde tjänste- och ortssidor, bearbetade projektbilder och kopplade offertformuläret till Resend.",
        "Skydd mot automatiska inskick använder bland annat ett honeypot-fält som inte krockar med vanliga autofyllfält. Utskicksloggen är kontrollpunkten för skickade mejl; ett webbsvar ensamt visar inte leverans."
    ],
    "results": [
        {
            "label": "URL:er i sitemap",
            "value": "47"
        },
        {
            "label": "Offert-events, historiskt utdrag",
            "value": "5"
        },
        {
            "label": "Telefonklick i samma utdrag",
            "value": "6"
        }
    ],
    "measurementNote": "Kontaktvärdena kommer från Umami-snapshot hämtat 5 september 2026 kl. 21.40 UTC för föregående 30 dagar. Exakta periodgränser saknas i snapshotet. Events är inte verifierade unika förfrågningar eller kunder och telefonklick är inte genomförda samtal. Sidantalet avser casets äldre sitemapuppgift från augusti 2026. Ingen före/efter-effekt på försäljning har fastställts.",
    "tech": [
        "Next.js",
        "Cloudflare",
        "Resend",
        "Umami"
    ],
    "liveUrl": "https://www.premiebygg.se",
    "deliverables": [
        "Tjänste- och ortssidor",
        "Bildbearbetning",
        "Offertformulär via Resend",
        "Skydd mot automatiska inskick",
        "Kontaktmätning",
        "Drift"
    ],
    "slug": "premiebygg",
    "metaTitle": "Kundcase: Premie Bygg",
    "metaDescription": "Byggföretag i Örebro med tydliga tjänster, referensbilder och ett offertflöde som behöver fungera hela vägen till mottagaren."
},
  "ngtab": {
    "title": "Norrlands Gräv & Transport",
    "badge": "Kundcase",
    "category": [
        "Webb",
        "SEO"
    ],
    "screenshot": "/case-ngtab.webp",
    "heroTitle": "Norrlands Gräv & Transport: en egen adress för varje sida.",
    "heroSubtitle": "Markarbeten, schakt och transport i Sundsvall med omnejd. Jag byggde struktur och kontaktvägar och kontrollerade sidornas canonical-adresser.",
    "bullets": [
        "69 URL:er i sitemap",
        "Canonical per relevant sida",
        "Tjänster och upptagningsområde"
    ],
    "challenge": [
        "Tjänster och orter behövde få begripliga egna sidor. Felaktigt ärvda canonical-adresser kan skicka motstridiga signaler till Google om vilken URL som ska visas."
    ],
    "solution": [
        "Jag satte canonical för sidornas avsedda adresser och byggde tjänste- och ortssidor. Canonical är en signal till Google, inte en garanti för indexering.",
        "Offertformuläret skickar via Resend och kontaktaktiviteter mäts. Sidorna levereras färdigbyggda från Cloudflare."
    ],
    "results": [
        {
            "label": "URL:er i sitemap",
            "value": "69"
        },
        {
            "label": "Offert-events, historiskt utdrag",
            "value": "8"
        },
        {
            "label": "Telefonklick i samma utdrag",
            "value": "4"
        }
    ],
    "measurementNote": "Kontaktvärdena kommer från Umami-snapshot hämtat 5 september 2026 kl. 21.40 UTC för föregående 30 dagar. Exakta periodgränser saknas i snapshotet. Telefonklick visar inte genomförda samtal och offert-events visar inte avslutade affärer. Sidantalet avser casets sitemapuppgift från augusti 2026. Att en URL finns i sitemap visar inte att Google har indexerat eller rankat den.",
    "tech": [
        "Next.js",
        "Cloudflare",
        "Resend",
        "Umami"
    ],
    "liveUrl": "https://www.ngtab.se",
    "deliverables": [
        "Tjänste- och ortssidor",
        "Kontroll av canonical",
        "Offertformulär",
        "Kontaktmätning",
        "Drift"
    ],
    "slug": "ngtab",
    "metaTitle": "Kundcase: Norrlands Gräv & Transport",
    "metaDescription": "Markarbeten, schakt och transport i Sundsvall med omnejd. Jag byggde struktur och kontaktvägar och kontrollerade sidornas canonical-adresser."
},
  "linguista": {
    "title": "Linguista",
    "badge": "Kundcase · AcadeMedia",
    "category": [
        "Webb",
        "Tillgänglighet"
    ],
    "screenshot": "/case-linguista.webp",
    "heroTitle": "Linguista: snabbare startsida och egen publicering.",
    "heroSubtitle": "Modersmålsundervisning, moderna språk och studiehandledning. Redaktionen fick ett innehållssystem och över 70 artiklar flyttades från WordPress.",
    "bullets": [
        "Redaktionen publicerar själv",
        "Över 70 artiklar migrerade",
        "Tydliga före- och eftervärden"
    ],
    "challenge": [
        "Den tidigare webbplatsen var redan snabb i det redovisade desktop-testet. Behovet var också enklare publicering, tydlig struktur och bättre stöd för tangentbord och skärmläsare."
    ],
    "solution": [
        "Jag byggde om webbplatsen och flyttade artiklarna till Sanity. Redaktionen ändrar innehållet och publiceringen bygger om sajten automatiskt.",
        "Jag arbetade med kontraster, semantik, kontaktformulär och navigation. Automatisk tillgänglighetspoäng används som deltest tillsammans med manuella kontroller."
    ],
    "results": [
        {
            "label": "Prestanda, Lighthouse desktop",
            "value": "99 till 100"
        },
        {
            "label": "Tillgänglighet, automatiskt test",
            "value": "82 till 100"
        },
        {
            "label": "Best practices, Lighthouse",
            "value": "96 till 100"
        }
    ],
    "comparison": [
        {
            "label": "First Contentful Paint",
            "before": "607 ms",
            "after": "292 ms",
            "delta": "52 % kortare"
        },
        {
            "label": "Largest Contentful Paint",
            "before": "980 ms",
            "after": "532 ms",
            "delta": "46 % kortare"
        },
        {
            "label": "Speed Index",
            "before": "745 ms",
            "after": "392 ms",
            "delta": "47 % kortare"
        },
        {
            "label": "Sidvikt enligt äldre jämförelse",
            "before": "1,74 MB",
            "after": "1,17 MB",
            "delta": "33 % mindre"
        },
        {
            "label": "Bildarkiv, hela sajten",
            "before": "26,6 MB",
            "after": "2,1 MB",
            "delta": "92 % mindre"
        }
    ],
    "measurementNote": "Källa enligt det ursprungliga caset: Lighthouse 13.4, desktop, gamla och nya startsidan i juli 2026. Exakt testdatum, körningsloggar och definitionen av sidvikt saknas här. Bildarkivets storlek avser hela sajten och är inte vad en besökare laddar ned. Testet beskriver en syntetisk körning, inte mobilprestanda eller verkliga användares Core Web Vitals. 100 i automatiskt tillgänglighetstest intygar varken full WCAG-uppfyllelse eller lagefterlevnad. AI-läsbarhet ingår inte i Lighthouse; den tidigare poängen utelämnas eftersom testmetoden inte redovisades.",
    "tech": [
        "Next.js",
        "Sanity",
        "Cloudflare",
        "Resend"
    ],
    "liveUrl": "https://www.linguista.se",
    "deliverables": [
        "Ombyggnad av webbplatsen",
        "Migrering av artiklar",
        "Redigering i Sanity",
        "Automatisk publicering",
        "Arbete med webbtillgänglighet",
        "Kontaktformulär"
    ],
    "slug": "linguista",
    "metaTitle": "Kundcase: Linguista",
    "metaDescription": "Modersmålsundervisning, moderna språk och studiehandledning. Redaktionen fick ett innehållssystem och över 70 artiklar flyttades från WordPress."
},
  "edshare": {
    "title": "EdShare",
    "badge": "Kundcase · AcadeMedia EdTech",
    "category": [
        "Webb",
        "Tillgänglighet"
    ],
    "screenshot": "/case-edshare.webp",
    "heroTitle": "EdShare: mindre sidvikt och enklare publicering.",
    "heroSubtitle": "En webbplats för att dela lärarkompetens fick ett nytt innehållssystem, färre tunga resurser och en tydligare struktur.",
    "bullets": [
        "2,67 till 0,37 MB i äldre jämförelse",
        "Redigering i Sanity",
        "Tydliga före- och eftervärden"
    ],
    "challenge": [
        "Den tidigare WordPress-sajten hade blivit tung med flera plugins och tredjepartsskript. EdShare behövde kunna hålla innehållet aktuellt med mindre tekniskt arbete."
    ],
    "solution": [
        "Jag byggde om webbplatsen, flyttade artiklar till Sanity och minskade mängden resurser som startsidan laddar.",
        "Semantisk HTML, kontraster och navigation bearbetades för bättre tillgänglighet. Automatisk poängsättning kompletteras av manuella kontroller."
    ],
    "results": [
        {
            "label": "Prestanda, Lighthouse desktop",
            "value": "96 till 100"
        },
        {
            "label": "Tillgänglighet, automatiskt test",
            "value": "92 till 100"
        },
        {
            "label": "SEO, Lighthouse",
            "value": "85 till 92"
        }
    ],
    "comparison": [
        {
            "label": "Serversvar, TTFB",
            "before": "1 318 ms",
            "after": "135 ms",
            "delta": "90 % kortare"
        },
        {
            "label": "Sidvikt enligt äldre jämförelse",
            "before": "2,67 MB",
            "after": "0,37 MB",
            "delta": "86 % mindre"
        },
        {
            "label": "First Contentful Paint",
            "before": "742 ms",
            "after": "417 ms",
            "delta": "44 % kortare"
        },
        {
            "label": "Largest Contentful Paint",
            "before": "870 ms",
            "after": "588 ms",
            "delta": "32 % kortare"
        },
        {
            "label": "Speed Index",
            "before": "1 679 ms",
            "after": "606 ms",
            "delta": "64 % kortare"
        }
    ],
    "measurementNote": "Källa enligt det ursprungliga caset: Lighthouse på desktop samt separat serversvarsmätning på gamla och nya startsidan. Testdatum, testplats, antal körningar och resursdefinitionen för sidvikt redovisades inte. Detta är historiska testvärden, inte aktuella fältdata eller en garanti för varje besök. SEO-poängen 92 är ett tekniskt deltest, inte en ranking. Tillgänglighetspoäng 100 bevisar inte WCAG-uppfyllelse eller lagefterlevnad. Den tidigare AI-poängen utelämnas eftersom en namngiven, repeterbar metod saknas.",
    "tech": [
        "Next.js",
        "Sanity",
        "Cloudflare"
    ],
    "liveUrl": "https://www.edshare.se",
    "deliverables": [
        "Ombyggnad av webbplatsen",
        "Migrering till Sanity",
        "Minskning av tunga resurser",
        "Arbete med webbtillgänglighet",
        "Drift"
    ],
    "slug": "edshare",
    "metaTitle": "Kundcase: EdShare",
    "metaDescription": "En webbplats för att dela lärarkompetens fick ett nytt innehållssystem, färre tunga resurser och en tydligare struktur."
},

  "eget-crm": {
      "title": "Stolt Marketings CRM",
      "badge": "Eget system: kundregister med AI",
        "kort": "Förfrågningar, offerter och fakturor på ett ställe, där AI skriver utkasten. Inget skickas utan mitt klick.",
        "kortsiffra": {"value": "0", "label": "mejl till kund som skickas utan mitt klick"},
      "category": [
          "System",
          "AI"
      ],
      "screenshot": "/case-crm.png",
      "screenshotCaption": "Illustration med exempeldata. Riktiga kunduppgifter visas aldrig.",
      "heroTitle": "Mitt eget CRM med AI-agent: det jag bygger åt kunder kör jag själv.",
      "heroSubtitle": "Förfrågningar, offerter, uppföljning och fakturor låg utspridda i fyra verktyg. Nu ligger de i ett CRM jag har byggt, där en AI-agent skriver utkasten och jag bestämmer vad som skickas.",
      "bullets": [
          "I drift sedan 14 november 2026",
          "Inget skickas utan mitt klick",
          "AI-kostnad med tak per månad"
      ],
      "challenge": [
          "Kunder och affärer låg i Notion, fakturor i ett fakturaprogram, offerter i min mejl och svar på utskick i ett utskicksverktyg. En offert som jag skickade från mejlen hamnade aldrig i något system, och då syntes den inte när jag planerade veckan.",
          "Jag ville ha ett ställe där varje förfrågan blir en uppgift, varje offert följs upp och varje faktura går att spåra, utan att jag lägger tid på att flytta uppgifter mellan verktyg."
      ],
      "solution": [
          "CRM:et bygger på min egen CRM-produkt Kvota och är anpassat efter hur jag säljer. Förfrågningar från sajten går in via en kö, så att ingen tappas, och blir en kontakt och en uppgift. Kunder bokar möten direkt i min kalender. Offerter kan skickas med en länk där kunden godkänner, och en godkänd offert blir ett fakturautkast med löpnummer, PDF och påminnelser.",
          "AI-agenten skriver svar på kundmejl som utkast i min Gmail, i min ton. Den sorterar svar på utskick, lägger in offerter jag skickat från mejlen som affärer och skriver utkast till påminnelser dag 5 och 12. Inget skickas utan att jag har läst och klickat. Allt som når en kund, raderas eller slås ihop kräver alltid mitt godkännande.",
          "Agenten har samma behörighet som jag och aldrig mer, och ett test stoppar bygget om koden försöker gå runt det. Varje ändring loggas med att den gjordes via agenten, och AI-kostnaden har ett tak per månad."
      ],
      "flode": [
          {
              "titel": "Förfrågan kommer in",
              "text": "Från formuläret på sajten via en kö. Den blir en kontakt och en uppgift i CRM:et."
          },
          {
              "titel": "Agenten skriver utkast",
              "text": "Svaret ligger i min Gmail, i min ton. Jag läser, ändrar och skickar."
          },
          {
              "titel": "Offerten följs upp",
              "text": "Utkast till påminnelse dag 5 och 12, och en uppgift att ringa dag 19."
          },
          {
              "titel": "Vunnen affär blir faktura",
              "text": "Utkast med löpnummer och PDF. Inget går till kunden utan mitt klick."
          }
      ],
      "results": [
          {
              "label": "I drift sedan",
              "value": "14 nov 2026"
          },
          {
              "label": "Dokumenterade beslut om hur systemet ska fungera",
              "value": "44"
          },
          {
              "label": "Kostnad för att gå igenom 30 dagars mejl och skriva 22 svarsutkast",
              "value": "0,63 USD"
          },
          {
              "label": "Utskick till kund som agenten gör utan mitt klick",
              "value": "0"
          }
      ],
      "measurementNote": "Systemet är nytt. Sparad tid och effekt på försäljningen är inte mätt än och redovisas här när det finns underlag. Kostnaden 0,63 USD gäller en genomgång av 30 dagars mejl den 15 november 2026. Antalet beslut är räknat i projektets beslutslogg den 17 november 2026.",
      "tech": [
          "Next.js",
          "Supabase",
          "Cloudflare Workers",
          "Claude (Anthropic)",
          "Gmail och Google Kalender",
          "Resend"
      ],
      "deliverables": [
          "Pipeline med mina egna säljsteg",
          "Förfrågningar från sajten direkt in som uppgift",
          "Bokning i Google Kalender med Meet",
          "Offerter ur mejl blir affärer, med uppföljning",
          "Fakturor med löpnummer, PDF och påminnelser",
          "AI-agent som skriver utkast men aldrig skickar själv"
      ],
      "slug": "eget-crm",
      "metaTitle": "Case: eget CRM med AI-agent",
      "metaDescription": "Förfrågningar, offerter, uppföljning och fakturor i ett eget CRM, med en AI-agent som skriver utkasten. Inget skickas utan att jag har läst det."
  },
  "sonepar-utbildningar": {
      "title": "Sonepar Utbildningar",
      "badge": "Kundcase: kurser och bokning",
        "kort": "Kurser från två system på en sajt, och varje bokning hamnar direkt i rätt system hos rätt person.",
        "kortsiffra": {"value": "15 min", "label": "från ändring i kurssystemet till sajten"},
      "category": [
          "System",
          "Integration"
      ],
      "kraverOk": true,
      "screenshot": "/case-sonepar.webp",
      "screenshotCaption": "Kurskatalogen på pilotadressen, november 2026.",
      "heroTitle": "Sonepar Utbildningar: två kurssystem, en sajt och bokningar som hamnar rätt.",
      "heroSubtitle": "Kurserna låg i två olika system. Nu visas de i en gemensam katalog under Sonepars domän, och varje bokning går till rätt system och rätt kontaktperson.",
      "bullets": [
          "Två kurssystem i en katalog",
          "Bokning till rätt system",
          "Lanseras 20 november 2026"
      ],
      "challenge": [
          "Sonepar, en teknisk grossist, ville samla sina utbildningar på en egen sajt under sin domän. Sonepars egna produktutbildningar fanns i ett system och utbildningspartnern RBN:s kurser i ett annat, med olika uppbyggnad.",
          "Sajten skulle gå att hitta i Google, kunden skulle kunna lägga upp kurser själv, och bokningar skulle komma fram till rätt person utan dubbelarbete."
      ],
      "solution": [
          "Jag byggde en sajt som läser kurserna från båda systemen och slår ihop dem till en katalog. Kunden styr själv vad som syns med fält i sina egna system, och ändringar når sajten inom 15 minuter utan att någon rör koden.",
          "En bokning av Sonepars egna kurser skrivs direkt in i deras bokningstabell, bokaren får en bekräftelse med kalenderknapp och rätt kontaktperson får besked. En bokning av RBN:s kurser kommer till RBN med förifyllda länkar, så att den läggs in i deras system med några klick. Ett skydd stoppar dubbla bokningar.",
          "Sajten har egna sidor per bransch och kategori för att synas i sök. Den körs i Sonepars miljö med deras avsändaradress och bakom deras säkerhetsskydd, och jag besvarade deras säkerhetskrav innan den togs i drift. Arbetet gick efter kundens egen ärendelista."
      ],
      "flode": [
          {
              "titel": "Kunden lägger in kursen",
              "text": "I sitt eget kurssystem, som förut. Ett fält styr om den syns på sajten."
          },
          {
              "titel": "Sajten hämtar den",
              "text": "Inom 15 minuter syns kursen i katalogen, med datum, ort och pris."
          },
          {
              "titel": "Besökaren bokar",
              "text": "Formuläret kontrollerar att tillfället är aktivt och stoppar dubbla bokningar."
          },
          {
              "titel": "Bokningen hamnar rätt",
              "text": "I Sonepars bokningstabell eller hos RBN med förifyllda länkar. Bokaren får en bekräftelse."
          }
      ],
      "results": [
          {
              "label": "Kurssystem som visas i en katalog",
              "value": "2"
          },
          {
              "label": "Från ändring i kurssystemet till sajten",
              "value": "15 min"
          },
          {
              "label": "Branscher med egna sidor",
              "value": "4"
          },
          {
              "label": "Automatiska tester (september 2026)",
              "value": "117"
          }
      ],
      "measurementNote": "Byggfakta, inte affärsresultat. Uppgifterna kommer från projektets dokumentation (september till november 2026). Sajten lanseras 20 november 2026. Bokningar och trafik mäts efter lanseringen och redovisas här när de finns.",
      "tech": [
          "Next.js",
          "Vercel",
          "SmartSuite",
          "Softr",
          "Cloudflare Workers",
          "Resend"
      ],
      "deliverables": [
          "Gemensam kurskatalog från två system",
          "Bokning till rätt system och kontaktperson",
          "Bekräftelse med kalenderknapp",
          "Skydd mot dubbla bokningar",
          "Sidor per bransch och kategori",
          "Driftsatt i kundens miljö"
      ],
      "slug": "sonepar-utbildningar",
      "metaTitle": "Kundcase: Sonepar Utbildningar",
      "metaDescription": "Två kurssystem i en katalog under Sonepars domän, och bokningar som går till rätt system och rätt kontaktperson."
  },
  "rbn-utbildning": {
      "title": "RBN Utbildning",
      "badge": "Kundcase: kurser och bokning",
        "kort": "Kurserna läggs in en gång och syns på sajten av sig själva. Bokningar kommer in färdiga att lägga in.",
        "kortsiffra": {"value": "10 till 1", "label": "obligatoriska fält i bokningsformuläret"},
      "category": [
          "Integration",
          "WordPress"
      ],
      "kraverOk": true,
      "screenshot": "/case-rbn.webp",
      "screenshotCaption": "En kurssida på rbnutbildning.se, november 2026. Pris, betyg och tillfällen kommer från SmartSuite.",
      "heroTitle": "RBN Utbildning: kurserna läggs in en gång, sajten uppdateras själv.",
      "heroSubtitle": "RBN har sina kurser, tillfällen och omdömen i SmartSuite. Jag har byggt vidare på synken till deras WordPress-sajt och på bokningen, så att det som läggs in i SmartSuite syns på sajten och bokningar är lätta att ta emot.",
      "bullets": [
          "Daglig synk från SmartSuite",
          "Bokning med förifyllda länkar",
          "Från 10 till 1 obligatoriskt fält"
      ],
      "challenge": [
          "RBN Utbildning säljer yrkesutbildningar inom elsäkerhet, bygg och arbetsmiljö, trafik och första hjälpen. All kursdata finns i SmartSuite: 75 kurser, 1 030 tillfällen och 1 786 omdömen i augusti 2026.",
          "Samma uppgifter skulle synas på webben utan att läggas in två gånger. Bokningsformuläret hade tio obligatoriska fält, och kurser utan datum visade bara att inga tillfällen fanns."
      ],
      "solution": [
          "Sajten är byggd i WordPress av RBN. Min del är synken, bokningen och vidareutvecklingen. Varje dag klockan 17 hämtar sajten kurser, tillfällen, bilder och omdömen från SmartSuite, visar bara aktiva tillfällen med framtida datum och räknar om snittbetyget.",
          "När någon bokar får RBN ett mejl med en sammanfattning och tre förifyllda länkar till SmartSuite, så att företag, kontaktperson och bokning läggs in med några klick. Formuläret har ett obligatoriskt fält i stället för tio. Kurser utan datum fick en tydlig väg till kontakt i stället för ett tomt besked, och E-learning blev ett eget alternativ med eget pris.",
          "Varje ändring prövas först på en testsajt och sätts live efter RBN:s ja."
      ],
      "flode": [
          {
              "titel": "RBN lägger in kursen",
              "text": "I SmartSuite, med datum, ort, pris och platser."
          },
          {
              "titel": "Synken körs varje dag",
              "text": "Klockan 17 hämtar sajten allt nytt, i omgångar så att inget tappas."
          },
          {
              "titel": "Sajten visar rätt",
              "text": "Bara aktiva tillfällen med framtida datum. Snittbetyget räknas om."
          },
          {
              "titel": "Bokningen kommer in",
              "text": "Mejl med sammanfattning och tre förifyllda länkar till SmartSuite."
          }
      ],
      "results": [
          {
              "label": "Kurser uppdaterade i totalsynken 12 november 2026, utan fel",
              "value": "74"
          },
          {
              "label": "Omdömen i samma körning",
              "value": "2 081"
          },
          {
              "label": "Obligatoriska fält i bokningen, före och efter",
              "value": "10 till 1"
          },
          {
              "label": "Kurssidor utan datum som fick en väg till kontakt",
              "value": "41"
          }
      ],
      "measurementNote": "Uppgifterna kommer från synkens körlogg och ändringsloggen för sajten. Hur bokningarna påverkats är inte mätt: RBN:s bokningar beror också på annonser, säsong och annat arbete, och ingen jämförelse före och efter har gjorts.",
      "tech": [
          "WordPress",
          "Bricks",
          "PHP",
          "SmartSuite API",
          "WP-Cron"
      ],
      "liveUrl": "https://rbnutbildning.se",
      "deliverables": [
          "Daglig synk från SmartSuite till WordPress",
          "Bilder, produktblad och omdömen med snittbetyg",
          "Bokningsmejl med förifyllda SmartSuite-länkar",
          "Enklare bokningsformulär",
          "E-learning som eget alternativ med eget pris",
          "Testsajt först, live efter ja"
      ],
      "slug": "rbn-utbildning",
      "metaTitle": "Kundcase: RBN Utbildning",
      "metaDescription": "Kurser, tillfällen och omdömen läggs in en gång i SmartSuite och syns på RBN:s sajt. Bokningar kommer med förifyllda länkar."
  }
};

/* Case som väntar på kundens ok (kraverOk) syns bara på förhandsadressen, aldrig i produktion. */
export function synligtCase(slug) {
  const c = CASES[slug];
  return Boolean(c) && (!c.kraverOk || process.env.NEXT_PUBLIC_PREVIEW === "1");
}

export function caseMetadata(key) {
  const c = CASES[key];
  const url = `https://www.stoltmarketing.se/projekt/${c.slug}`;
  return {
    title: `${c.metaTitle} | Stolt Marketing`,
    description: c.metaDescription,
    alternates: { canonical: url },
    /* Case som väntar på kundens ok indexeras inte (2026-11-17). */
    ...(c.kraverOk ? { robots: { index: false, follow: true } } : {}),
    twitter: { images: ["/og-image.png"],  card: "summary_large_image", title: c.metaTitle, description: c.metaDescription },
    openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }], 
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      type: "article",
      locale: "sv_SE",
      siteName: "Stolt Marketing",
    },
  };
}

export function caseBreadcrumb(key) {
  const c = CASES[key];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
      { "@type": "ListItem", position: 2, name: "Projekt", item: "https://www.stoltmarketing.se/projekt" },
      { "@type": "ListItem", position: 3, name: c.title, item: `https://www.stoltmarketing.se/projekt/${c.slug}` },
    ],
  };
}
