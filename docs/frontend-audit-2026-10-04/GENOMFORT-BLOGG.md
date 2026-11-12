# Bloggrunda 4 oktober 2026

Klart i källkoden. Ägande: app/blogg/** och lib/blog-*. Tidigare checkpoints nedan beskriver arbetsförloppet; slutstatus står sist.

- Alla 32 ursprungliga URL:er och publiceringsdatum inventerade.
- Auditens bloggfynd lästa. Relevant skill marketing:content-creation läst.
- Originalinnehåll sparat till /tmp/stolt-blog-original.json för redaktionell jämförelse.
- Primärkällor lästa för moms, ångerrätt, nya ångerfunktionen, Google Business Profile, CWV, Google Ads budget och betalavgifter.
- Nästa: redaktionell omskrivning av svaga artiklar, saklig korrigering av övriga, en gemensam datakälla för index/metadata/schema, sedan syntax/data/länkkontroll.

Inga builds, servrar, deploys, commits eller pushar körs av bloggagenten.

## Checkpoint 1

Arbetsdata finns i lib/blog-articles.json. Originalets starkare strukturer och texter har sparats, medan följande 11 artiklar nu har full redaktionell omskrivning:
wordpress-vs-nextjs, seo-for-smaforetag, lokal-seo-guide, google-business-profile-guide, webbdesign-trender-2026, varfor-snabb-hemsida, ai-for-foretag, content-strategi-smaforetag, hemsida-som-saljer, wordpress-eller-webbyra, e-handel-guide.

Återstår: Ads-ekonomi, SEO-byråval, moms samt sakrättningar i resterande artiklar. Datat är ännu inte kopplat till sidmallarna och index.

## Checkpoint 2

23 artiklar har nu redaktionell behandling i arbetsdata. Ytterligare klara:
google-ads-vs-seo, vad-kostar-google-ads, valja-seo-byra, moms-regler-e-handel, hemsida-inga-kunder, seo-tips-smaforetag, seo-analys-sjalv, sokordsanalys-nyborjare, chatbot-for-foretag, google-ads-byra-eller-sjalv, vad-kostar-webbutik, betallosningar-webbutik.

- Ads-kalkyl visar omsättning, täckningsbidrag, arvode, känslighet och 3,75 förväntade affärer.
- Swish-avtal/förmedlare och fast/rörlig avgift är separerade. Specificerat Stripe-pris daterat.
- Sajtkontroll och sökordsurval använder verkligt eget auditunderlag med tydliga datum/begränsningar.
- Rutan har rätt pris, användningsgränser och gräns mellan förfrågan/chatt/specialintegration.

Återstår nio artiklar, slutlig datakoppling, index och syntax/data/länkkontroll.

## Slutcheckpoint

Samtliga 32 artiklar och bloggindex är färdigbehandlade. Alla ursprungliga URL:er och publiceringsdatum är kvar. Inget har avpublicerats eller omdirigerats. Alla artiklar har redaktionellt uppdateringsdatum 2026-10-04, sammanfattning, egen titel och description, egen canonical, relevanta relaterade länkar och CTA.

### Exakt täckning

17 artiklar har omfattande ny text med egna konkreta exempel och en tydlig uppgift:

- wordpress-vs-nextjs
- seo-for-smaforetag
- lokal-seo-guide
- google-business-profile-guide
- webbdesign-trender-2026
- varfor-snabb-hemsida
- ai-for-foretag
- content-strategi-smaforetag
- hemsida-som-saljer
- wordpress-eller-webbyra
- e-handel-guide
- google-ads-vs-seo
- vad-kostar-google-ads
- valja-seo-byra
- moms-regler-e-handel
- chatbot-for-foretag
- ai-verktyg-smaforetag

15 artiklar behåller användbar befintlig struktur och har korrigerats, förtydligats och kompletterats enligt auditens fynd:

- hemsida-inga-kunder
- seo-tips-smaforetag
- seo-analys-sjalv
- sokordsanalys-nyborjare
- google-ads-byra-eller-sjalv
- vad-kostar-webbutik
- betallosningar-webbutik
- teknisk-seo-guide
- konverteringsoptimering-tips
- landningssida-som-konverterar
- checklista-ny-hemsida
- automatisera-med-ai
- marknadsforing-smaforetag
- e-postmarknadsforing-smaforetag
- valja-domannamn

Bloggindex har sökning, ämnesfilter, fyra rekommenderade ingångar, författare, lästid, synliga uppdateringsdatum och separata tjänstelänkar. Resultatantal annonseras för hjälpmedel. Sökning och filter ligger i en avgränsad klientkomponent som får kortdata, inte hela artikelinnehållet.

### Filer

- lib/blog-articles.json: gemensamt redaktionellt innehåll för alla 32 artiklar.
- lib/blog-data.js: artikeluppslag, kortdata, datum/lästid, metadata och Article/Breadcrumb-schema.
- app/blogg/*/page.js och app/blogg/*/layout.js: 32 sidpar kopplade till data och den gemensamma BlogArticle-mallen.
- app/blogg/page.js, app/blogg/layout.js och app/blogg/BlogIndex.jsx: index, metadata och sökning/filter.
- docs/frontend-audit-2026-10-04/BLOGG-KALLKONTROLL.json: extern käll-länkkontroll.

Bloggagenten har inte ändrat components/BlogArticle.jsx eller globala filer. Den gemensamma mallen förbättras av huvudsessionen.

### Viktiga rättningar

- Bas 1 190 kr/mån och högst fem sidor, Bredd 1 990 kr/mån och Spets 2 990 kr/mån. Spets skiljer Google Ads-arbete från mediebudget. Webbavtalets 12 månader och därefter månadsvis framgår där pris/villkor diskuteras.
- Rutan: 495 kr/mån, 30 dagar gratis, ingen bindning. Användningsgränser och ordinarie telefon/e-post/kalender skiljs från widgeten. Automatisk chatt skiljs från förfrågan och godkänt svarsutkast.
- Ads-exemplet skiljer omsättning, täckningsbidrag, arvode och vinst. Känslighet för klickpris, avslutsgrad och marginal redovisas. Förväntade affärer avrundas inte till påhittade kundresultat.
- Kontaktmätning skiljer telefonklick från genomförda samtal och kvalificerade förfrågningar. AI-läsbarhet skiljs från Lighthouse-poäng.
- WordPress och Next.js jämförs efter arbetssätt, underhåll och behov, utan generella löften om säkerhet, ranking eller hastighet.
- Aktuell momsgräns och villkor, tillfällig livsmedelsmoms, ångerrätt och ångerfunktion, betalavgifter, lokal sökning, Google Ads-budget och Core Web Vitals har kontrollerats i primärkällor. Daterade priser och exempel framgår som sådana.
- Inga uppfunna kundresultat, nya generella marknadsprisintervall eller minimiordkrav. Verkliga observationer från sajtens audit och DataForSEO redovisas med datum och begränsningar.
- Föråldrade SEO-råd och verktyg ersatta. FID ersatt med INP; fältdata skiljs från labbtest. FAQ-resultatens avveckling har beaktats. Canonical, noindex och migration beskrivs med nödvändiga villkor.
- Inga långa tankstreck, typografiska citattecken eller dekorativa textpilar i artikeldata.

### Verifiering och praktiska gränser

- 68 ägda JS/JSX-moduler har syntaxparsats med Babel utan fel.
- Dataassertioner godkända: exakt 32 unika artikel-URL:er, titlar och descriptions; ursprungliga publiceringsdatum bevarade; sammanfattningar och block finns; interna related/CTA-länkar pekar på existerande sidfiler; förbjuden typografi saknas.
- SSR-kontroll med den faktiska gemensamma BlogArticle-mallen och mockade yttre komponenter: alla 32 sidpar renderade, ett H1 per artikel, rätt uppdateringsdatum och lästid, egen canonical, rätt Article-schema och en breadcrumb. Samtliga 220 innehållsankare pekar på renderade avsnitts-id. Index renderar 32 kort, filter, söklabel, resultatantal och main-content.
- 24 externa primärkällslänkar kontrollerade. 22 svarade HTTP 200 i shellkontrollen. Skatteverkets två länkar gav anslutningsåterställning i shell men båda sidornas faktiska innehåll öppnades och kontrollerades med webbläsningsverktyget. Båda kontrollutfallen finns i källkontrollfilen.

Huvudsessionen har fått besked att kod och data är färdiga och kan byggas. Återstår där: fullständigt Next-bygge, manuell interaktion med sökning/filter och mallens kopiering/checklistor, visuell kontroll på mobil och dator, preview/live-kontroll samt eventuell deploy. Bloggagenten har inte kört bygge, server, deploy, commit eller push. SSR-kontrollen verifierar struktur och data men ersätter inte dessa kontroller.

Dynamiska priser och regler är kontrollerade per 4 oktober 2026 och behöver underhållas när primärkällor eller erbjudandet ändras. Exemplen är illustrativa och ger inga resultatgarantier.
