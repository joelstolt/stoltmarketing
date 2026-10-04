# Leveranskvitto, 4 oktober 2026

## Publicerat

- Produktion: https://www.stoltmarketing.se
- Samma bygge i preview: https://stoltmarketing-preview.joel-d77.workers.dev
- Källkod på main: 00fd929 (grundrundan 3a92910).
- Produktionsversion i Cloudflare: 8f43a87a-8142-4532-8399-478510852f71.
- pnpm cf:build passerar. Deployvakten bekräftar att main, origin/main och byggstämpel motsvarar samma commit.
- Preview har X-Robots-Tag: noindex, nofollow.

## Genomförd omfattning

100 publika sidor är genomgångna, med bevarade adresser: 32 bloggartiklar, 25 ortssidor, 10 tjänstesidor, 10 kundcase och övriga produkt-, kontakt-, pris-, guide-, studie- och landningssidor. Alla artiklar har bearbetats; 17 har skrivits om omfattande och 15 fått riktade rättningar. Detaljer per sida finns i GENOMFORT-filerna och TACKNING.md.

Navigation, artikelmall, hero, kontrast, CTA, formulär, bokning, widgetbeteende och produktförklaring har ändrats. Priser och avtalsperioder har synkats utan ändrade priser. Case och studie skiljer dokumenterade observationer från affärseffekt och redovisar dataluckor. FAQ, schema, canonical, delningsmetadata, internlänkar och sitemap har städats.

Startsidan behåller det mörka/gula uttrycket och det animerade fältet. Bakgrunden tonas ned bakom text, herons text är statisk från första målningen, fältet har färre strån och ritas högst 30 gånger per sekund. Det pausas utanför vyn och när fliken är dold.

## Verifiering

- Publicerade sidor: 100/100 HTTP 200, noll registrerade fynd i production-checks.json. Kontroller: en H1 och main, skipmål, sidunik canonical/titel/description/Twitter, schema-JSON, dubbla FAQ/brödsmulor/artiklar, kända ankar-ID, synlig typografi och avsiktlig index/noindex.
- Alla tio länkade casebilder ger HTTP 200. Sitemap har 97 publika URL:er; de tre avsiktliga noindex-sidorna ingår inte.
- UI stickprovat vid 320, 390, 768 och 1280 px. Ingen horisontell sidskroll observerad i kontrollerade mallar.
- Mobilmeny: öppning, Escape, fokus på menyval, inert bakgrund och dold kontaktwidget.
- Kontakt: namngivna fält, native validering/fokus, vänteläge, tydligt fel och bevarad text efter utebliven serverreferens i preview.
- Bokning: paketval väljer meddelandeflik och förifyller text, tangentbord byter flik, Google Kalender visas. Sidans 30 minuter stämmer med kalendern. Ingen verklig mötestid bokades.
- Blogg: kombinerad ämnesfiltrering och sökning visar rätt resultat. Artikelankare, kryssrutor och kopieringsknapp fungerar. Prisberäkning med 1 190 kr och 12 månader ger 14 280 kr.
- Lokala CTA når #forslag på hemsidesidan. Produktdemons steg visar rätt innehåll och är tydligt märkta som illustration.
- Extern kontaktwidget öppnas på klick och stängs. Den visas inte på kontakt/bokning/integritet eller under mobilmenyn. Inget widgetmeddelande skickades.
- Inga console errors observerades i de granskade vyerna.

## Faktisk kontaktleverans

Ett märkt tekniskt test skickades från den publicerade kontaktsidan till den befintliga adressen joel@stoltmarketing.se. Sidan visade mottagningsbekräftelse. Resend-loggen verifierar delivered för ämnet Kontakt: QA frontend 20261004, ID 01a108c9-261d-7134-910a-97f48416f70a, skickat 2026-10-04 21:19:22 UTC. Se resend-verification.json. Ingen riktig kundförfrågan eller bokning skapades.

## Prestanda

PageSpeed API gav 429, men webbgränssnittet kunde mäta den publicerade startsidan. Första mobilmätningen efter huvudrundan gav 92 i prestanda och 100 för tillgänglighet, bästa metoder och SEO; LCP 3,2 s, TBT 20 ms, CLS 0. Den mätningen motiverade den sista animationsoptimeringen.

Första rapport: https://pagespeed.web.dev/analysis/https-www-stoltmarketing-se/brfb5agpny?form_factor=mobile

Slutmätning efter animationsoptimering: **97 prestanda, 100 tillgänglighet, 100 bästa metoder, 100 SEO**. FCP 0,934 s, LCP 2,551 s, TBT 0 ms, CLS 0, Speed Index 2,316 s. Rapport: https://pagespeed.web.dev/analysis/https-www-stoltmarketing-se/rgfvt4j50w?form_factor=mobile. Se pagespeed-final.json och pagespeed-final.txt. LCP ligger fortfarande strax över riktvärdet 2,5 s i just denna körning. Poängen gäller startsidan i ett syntetiskt mobiltest, inte alla sidor eller en garanti för tillgänglighet eller ranking. CrUX visar Ingen data. Umami hoppas över när navigator.webdriver är satt, vilket begränsar jämförelsen med riktiga besök.

## Vad som återstår utanför genomförd frontend

- Följ effekten på kvalificerade förfrågningar och söksynlighet över jämförbara perioder. Search Console-underlag behövs före eventuella URL-sammanslagningar.
- Verifiera aktiva leverantörsavtal, överföringsskydd och verksamhetens gallringsrutiner. Integritetstexten motsvarar observerade funktioner; en full avtalsrevision ingick inte.
- Fyll endast på historiska caseperioder, mätloggar och en fryst studieexport när ursprungsunderlag finns. Inga saknade bevis har hittats på.
- Notion ej uppdaterat: verktygsåtkomst saknas i sessionen.

Befintliga lokala ändringar i .DS_Store, rank-snapshot.json, CLAUDE.md, docs/gbp och docs/ny-ingang-2026-09-23 har lämnats utanför våra commits.
