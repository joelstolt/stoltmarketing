# Frontendförbättring 2026-10-04

## Uppdrag och godkänt scope

Joel har godkänt att hela prioriteringslistan med 28 punkter genomförs i en sammanhängande körning. Live: https://www.stoltmarketing.se. Han har bekräftat att ingen annan tung session kör och godkänt parallellt arbete med högst tre subagenter.

## Plan

1. Rätta CTA, widget, kontaktflöde och motstridig presentation av befintliga erbjudanden.
2. Förbättra gemensam navigation, typografi, sidtoppar, artikelmall, fokus och rörelse.
3. Parallellt: redigera alla 32 bloggartiklar; revidera 25 ortssidor; förbättra case, guider och studien.
4. Synka tjänstesidor, prisguider, integritet, metadata/schema och sitemap. Behåll befintliga URL:er.
5. Granska diffar, bygg en gång i huvudsessionen och deploya preview. Kontrollera visuellt och med crawl.
6. Committa avgränsat, pusha main enligt deployspärren, bygg från den commiten och deploya produktion. Verifiera live med curl, UI och kontaktleverans.

## Antaganden och avgränsningar

- lib/pricing-packages.js är källan för befintliga hemsidepaket. Befintliga priser ändras inte, felaktiga exempel rättas efter denna källa.
- Förfrågningsrutan är startsidans huvudprodukt; hemsidor får en tydlig parallell ingång.
- Inga schema-/datamigrationer, betalningsändringar, DNS-cutover eller autentiseringsändringar ingår.
- Samma publika URL:er behålls. Sammanläggning/redirect kräver först query-/URL-underlag.
- Inga nya kundresultat, certifieringar eller lokal närvaro uppfinns. Saknade underlag ersätts med precisa, avgränsade formuleringar.
- Inga nya externa mottagare. Testkontakt går till Joels befintliga formulärmottagare och verifieras i Resend-loggen.
- Befintliga ändringar i .DS_Store, rank-snapshot.json, CLAUDE.md och andra docs är användarens och lämnas utanför commit.
- Notion-verktyg saknas i sessionen. Notion ej uppdaterat ska anges i kvittot.

## Verifiering

Bygge med pnpm cf:build. Preview med wrangler.preview.jsonc. Produktionsdeploy kräver main == origin/main och buildstamp för samma commit. Kontrollera alla 100 publika URL:er för HTTP, canonical, metadata, ankar- och internlänkar. Testa mobil/desktop, meny, bokningsflik, formulärens namn/fokus och kontaktwidget. Verifiera testkontakt i Resend utan att exponera nycklar. Försök aktuell PageSpeed och läs befintlig Search Console-åtkomst om tillgänglig; rapportera konkret begränsning om data inte finns.

## Status

- Research klar. Analysunderlag i docs/frontend-audit-2026-10-04/.
- Gemensam artikelmall, hero, mobilmeny och sidfot ändrade. Kontakt/bokning delar nu ett tillgängligt formulär med tydlig felhantering och bekräftad referens.
- Widgeten öppnas endast vid klick och döljs på kontakt/bokning/integritet. Sajtkollens kontextdialog är semantiskt stängd tills användaren öppnar den.
- Startsida och produkt får illustrerat flöde, tydligare CTA och rätt produktvillkor. Prislistan får avtalssumma, paketgränser och gemensamt gratis förslag.
- Alla 100 publika sidor genomgångna: 32 bloggartiklar, 25 ortssidor, 10 tjänstesidor, 10 case, guider, landningssidor och övriga sidor.
- Integritet omskriven mot aktuella kodflöden; fullständiga leverantörsavtal/organisationsuppgifter kan inte intygas utifrån enbart kod. Ingen juridisk certifiering påstås.
- Preview deployad och curl-kontrollerad: 100/100 HTTP 200 och noll avvikelser för H1, main, canonical, metadata, schema, ankar-ID och synlig typografi.
- Webbläsarprov vid 320, 390, 768 och 1280 px: meny/Escape/inert, formulärvalidering och kvarvarande text efter fel, bokningsflikar och kalender, bloggfilter/sökning, artikelankare, kryssrutor, kopieringsknapp, prisberäkning och widgetens manuella öppning/stängning.
- Efter visuell QA tonades blommorna bakom startsidans brödtext ned. Kalenderns faktiska 30 minuter synkas i bokning/pris.
- Klart: kod 00fd929 pushad på main, byggd och publicerad på www.stoltmarketing.se och preview. Slutlig produktionscrawl 100/100 utan fynd.
- Kontaktformulär provat live: Resend bekräftar delivered till joel@stoltmarketing.se.
- PageSpeed API gav 429, men webbmätning genomförd: slutligt 97/100/100/100 på startsidan mobil, LCP 2,551 s, TBT 0 ms, CLS 0. CrUX saknar data.
- Återstår verksamhets-/SEO-effektuppföljning, Search Console-underlag före URL-sammanslagningar och verifiering av aktiva leverantörsavtal. Notion ej uppdaterat.
- Fullständigt kvitto: docs/frontend-audit-2026-10-04/LEVERANSKVITTO.md.
