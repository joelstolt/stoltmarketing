# Ortssidor, genomförande 2026-10-04

Status: genomfört i koden och kontrollerat utan build/deploy. Omfattning: fem hubbar och tjugo tjänstesidor, samma 25 URL:er.

## Bekräftat i research
- Lokal verksamhetsbas är Hässleholm. Ideon-/life-science-specialisering saknar stöd i sidornas namngivna referenser.
- Hubbschema i varje ortslayout ärvs av tjänstesidorna. Det är orsaken till dubbla FAQPage och brödsmulor.
- Förskolan Harpan och Pingstkyrkan är dokumenterade Hässleholmsprojekt. Niklassons Flytt är dokumenterat Helsingborgsprojekt med 38 sidor.
- Kundmotorns historiska ögonblicksbild: 37 offertförfrågningar för Niklassons, 30-dagarsperiod hämtad 5 september 2026. Detta är hemsideresultat, ingen visad Ads- eller AI-effekt.
- Hemsidans paket hämtas från lib/pricing-packages.js. SEO-audit 4 900 kr finns i samma källa. Spets 2 990 kr/mån har Google Ads-arbete; annonsbudget tillkommer.

## Genomfört
- Alla 25 URL:er behållna: /hassleholm, /kristianstad, /helsingborg, /malmo, /lund och för var och en /hemsida, /seo, /google-ads, /ai-automation.
- Fem hubbar har rollen att välja rätt uppdrag. Alla tjugo tjänstesidor har ett avgränsat kundjobb, ett konkret exempel och en ortsspecifik fråga. Felaktig Malmö-bas, obelagda branschanspråk, stadsekonomi/infrastruktur och irrelevanta ortslistor borttagna.
- Kundens sökningar gäller kundens tjänst, inte webbyråns sökord. SEO-exempel är märkta som illustrativa när sökvolym saknas. Historiskt Niklassons-underlag avgränsat från orsaks- och effektlöften.
- Hemsidor läser hela paketkorten från central pricing. SEO visar audit och avgränsat Spets-arbete. Ads visar Spets med separat annonsbudget och befintligt konto enligt offert. AI skiljer rutan 495 kr/mån, 30 dagar gratis och ingen bindning från kalender/systemintegration och annat specialarbete.
- Hubbschema flyttat till respektive page.js. Tjänstesidor ärver inte längre FAQPage eller hubbens brödsmula. Native details använder samma frågor/svar som JSON-LD.
- Varje sida har egen canonical, Open Graph och Twitter. Tjänstens primära knapp matchar uppdraget. Compact hero, uttrycklig highlight och färgidentitet behållna.

## Filer
- components/CityServicePage.jsx, components/CityHubExtra.jsx, components/CityProof.jsx.
- lib/local/data.js, combos.json, seo.js, hub-content.json, hub-schema.js.
- app/{hassleholm,kristianstad,helsingborg,malmo,lund}/page.js, layout.js och respektive *Content.jsx.
- De tjugo befintliga tjänsternas page.js/layout.js behålls och använder uppdaterade gemensamma komponenter/helpers.

## Verifiering
- Next SWC parsade 61 lokala JS/JSX-filer utan syntaxfel.
- Programmatisk kontroll av alla 25 sidor: exakt en FAQPage och en BreadcrumbList per sida; identiska frågor/svar i schema och den synliga FAQ-källan; unika frågor; provider-bas Hässleholm.
- Samtliga 25 canonical-adresser och sidunika Twitter-data kontrollerade. Alla 25 routefiler finns kvar.
- Bas 1 190, Bredd 1 990, Spets 2 990 och SEO-audit 4 900 hämtas från central pricing och verifierades. 13 statiska interna länkmål kontrollerade.
- Ändrade filer saknar långa tankstreck, typografiska citattecken och dekorativa textpilar. Räkneexemplet på Hässleholms Ads-sida kontrollerat: 200 klick, 10 kontakter, 2 kunder, 2 010 kr kvar före övriga kostnader med givna antaganden.
- Kontrollskriptet finns tillfälligt i /tmp/check-local-pages.cjs. Visuell livekontroll, build och deploy görs av root i den gemensamma avslutningen.

Ingen build, devserver, deploy, commit eller push körs av denna deluppgift. Root samordnar slutverifiering och publicering.

## Previewuppföljning: förslagsankare

Den gemensamma CTA-källan för orternas hemsidetjänst i lib/local/data.js länkar nu till /hemsida-foretag#forslag. Det ersätter det borttagna #koll-url-hemsida-målet och rättar samtliga renderade länkar från de fem orternas hemsidesidor. Sökning i lib/local, tre City-komponenter och alla fem ortmappar fann inga ytterligare gamla mål. Ingen build eller deploy körd.
