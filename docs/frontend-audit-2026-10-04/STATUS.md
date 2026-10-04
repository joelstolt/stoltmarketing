# Frontendgranskning 2026-10-04

Uppdrag: gå igenom hela den publika sajten, UX/UI, grafik, texter och SEO.

- Live: https://www.stoltmarketing.se
- Kod: branch main. Befintliga lokala ändringar lämnas orörda.
- Granskning och förslag, inga produktionsändringar i detta skede.
- Hämtat 100 publika sidor: samtliga 97 sitemap-adresser, två annonslandningssidor och serviceavtal. Alla svarade HTTP 200.
- Läst publikt sidinnehåll, med gemensamma malltexter avduplicerade. 32 bloggartiklar, tre guider, 25 ortssidor och övriga affärs-/projektsidor ingår.
- Kontrollerat internlänkar, ankare, metadata, canonical, schema och sitemap. Fyra knappar pekar på ett borttaget ankare.
- Visuella stickprov på startsida, priser, kontakt, bokning och artikel. Mobilmeny, kontaktwidget och kalenderflik provade utan inskick.
- DataForSEO: nio träffar i leverantörens databas, observationer från augusti/september. Ingen Search Console-data hämtad.
- PageSpeed API gav 429. Inga aktuella Lighthouse-poäng eller fältvärden påstås vara mätta.
- Faktakontroller mot Google, Skatteverket, PTS, Riksdagen, Stripe och W3C. Allvarliga sakfel finns i äldre guider.
- Granskningen har genomförts seriellt. Ingen fan-out, bygge eller dev-server har startats.
- Levererat: RAPPORT.md, SIDOR.md med exakt 100 URL:er och TEXTFORSLAG.md med kopierbara förslag.
- Slutkontroll: alla 100 sidor finns i åtgärdslistan, alla crawlade URL:er gav 200, rapportens kodreferenser finns. 37 sidor har P1, 60 P2 och tre P3; det är prioritering av sidor, inte antal separata buggar.
- Tillfällig viewport återställd. Inga byggen eller servrar startade och inga formulär skickade.
- Inga ändringar i applikationen eller produktion. Rapportfilerna är lokala och inte committade/pushade. Befintliga ändringar i .DS_Store, rank-snapshot.json och övriga docs lämnades orörda.
- Återstår efter analysen: genomförande enligt rapportens rundor A till C, testutskick med Resend-verifiering, aktuell prestandamätning och vid behov Search Console-underlag inför URL-sammanslagningar.
