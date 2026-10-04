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

};

export function caseMetadata(key) {
  const c = CASES[key];
  const url = `https://www.stoltmarketing.se/projekt/${c.slug}`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDescription },
    openGraph: {
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
