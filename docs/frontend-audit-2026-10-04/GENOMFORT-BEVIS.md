# Genomförande: kundbevis, guider och tillgänglighet

Klart lokalt. Inga builds, servrar, deployer, commits eller pushar i denna del.

## Genomfört
- Samtliga tio projektdetaljer använder samma visuella CasePage med befintlig stor skärmbild, leverans, resultat och metodbegränsningar.
- Niklassons, Premie Bygg och NGTAB redovisar Umami-snapshot hämtat 5 september 2026, historiskt 30-dagarsutdrag. Exakta periodgränser saknas i snapshot och uppfinns inte.
- Telefonklick separerade från samtal, formulärevents från kunder/affärer.
- Arkipels branschmedian används inte som före-värde. Inga generella sidantalskrav eller canonical-garantier kvar i casen.
- Linguista och EdShare skiljer Lighthouse från AI-läsbarhet och WCAG/lagefterlevnad. AI-poäng utan namngiven metod borttagna.
- ForeEfter visar endast ändpunkter. Inget reglage med påhittade mellanvärden.

## Research
- Rapport/SIDOR och samtliga tilldelade innehållsfiler lästa.
- Primärkällor kontrollerade: Riksdagen MFL 12 c, Googles recensionspolicy/lokalranking och AI-funktioner, PTS frågor/svar samt OpenAI datahantering.
- Originaldatabasen och mätkoden bakom hantverkssajtstudien hittades i Dev/internal/leadsgoogle efter att projektregistret kontrollerats.

## Index, guider och studie
- Projektindex omskrivet: två stora bildkort per rad, relevanta lokala case först, enklare filter med aria-pressed/status. Kortare tekniktext och detaljer på egna case.
- Tre guider omskrivna med kort svar, faktisk redigeringsdag 4 oktober 2026, primärkällor och tydligt nästa steg.
- Recensioner: neutral fråga till alla verkliga kunder, inget review gating, korrekt MFL 12 c kontra Googles incitamentspolicy.
- AI-sök: repeterbar metod och inga universella topptio/schema/rekommendationsgarantier.
- ChatGPT: avidentifiering före första exempel, godkänt företagsverktyg kontra privat konto, nio kopierbara promptmallar och ingen säker tidsvinst.
- Studiens originalkod och databas hittade i Dev/internal/leadsgoogle. Aggregat sparade i hantverkssajter-underlag.json utan företagsnamn. 4 864 företagsposter rekonstruerade, inte 4 864 unika sajter. Täckning och saknade värden redovisas. Felaktiga nämnare och slutsatser korrigerade, Dataset-schema borttaget eftersom en publik datamängd inte levereras.

## Tillgänglighet genomförd
- Tillgänglighetssidan använder jag/du och avgränsar EAA till utpekade konsumenttjänster. Mikroföretagets omsättning ELLER balansomslutning högst 2 miljoner euro enligt lagtexten.
- WCAG, automatiska testpoäng, lagkrav och certifiering hålls isär. Obelagda 30-40-procentspåståenden och fyra hundror borttagna.
- Priser oförändrade men moms, Bas högst fem sidor och tolv månaders bindning synliga.
- Granskningens antal mallar/flöden uppfinns inte: omfattning ska fastställas skriftligt före beställning, rapport dokumenterar testade delar.
- Kontaktfält har labels/id/autocomplete, synligt globalt fokus, vänteläge, fel/återförsök och semantisk bekräftelse. HTTP, API:s ok och leveransreferens kontrolleras. Tidsheuristiken skickas med. Inget formulär skickat.
- FAQ och FAQ-schema använder samma datafil. Åtgärdspaket anges som frånpris i schema, moms explicit.

## Slutverifiering
- Babel-parser från installerad Next används utan bygge: 55 JS/JSX-filer i hela ägda spåret, inklusive senare LP/Om, parsar utan syntaxfel.
- Alla tio case har befintlig route, skärmbild, metodnot och rätt egen canonical.
- Statisk kontroll av interna länkar och bildfiler gav inga saknade mål. Otillåten typografi och dekorativa textpilar saknas i de 55 kodfilerna.
- git diff --check utan anmärkning. Formulären verifierade statiskt för reference, tidsheuristik och felstatus; inga skickade förfrågningar.
- Studien har kontrollerade summor och procentnämnare. Originalurvalet kan rekonstrueras i nuvarande databas men en fryst publiceringsexport saknas. Exakta Umami-periodgränser och fullständiga äldre Lighthouse-loggar saknas och anges som begränsningar på sidorna.
- 17 URL:er i detta spår, plus två LP och Om i separat checkpoint, har bearbetats med befintliga adresser.
- Ingen bygg-/render-/liveverifiering genomförd enligt uppdragets förbud. Ändringarna är lokala och inte commitade, pushade eller deployade.

## Rättning efter preview-QA
- Preview hittade dubbla BreadcrumbList på tio case och tre guider. Indexens breadcrumb flyttad från app/projekt/layout.js och app/guider/layout.js till respektive indexpage. Föräldralayouterna renderar nu bara children och metadata.
- Faktiska index- och childlayoutkomponenter SSR-renderade med React (yttre UI mockad), utan bygge/server/nätverk: 15 schema-kedjor, exakt en BreadcrumbList per index, case och guide. Kontroll: /tmp/check-case-guide-breadcrumbs.cjs. git diff --check utan anmärkning.
- Ny preview måste byggas av root innan produktions-HTML kan markeras verifierad.
