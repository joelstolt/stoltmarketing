# 02 Tratten i siffror (stoltmarketing.se)

Status: KLAR 2026-09-19. Slutbedömningen står sist, sammanfattningen direkt här under.

## Sammanfattning (läs den här först)

- UPPMÄTT: Umami visar 400 besökare på 30 dagar. 242 är utländska bottar, 28 är Joels egna enheter (41 % av alla svenska besök), 13 är kunder som läser sin rapport. Kvar: 113 svenska prospekt, varav 79 köpbesökare. 50 av dem kom från annonser som bara gick 22 till 31 augusti.
- UPPMÄTT: utan annonser har sajten ca 23 svenska köpbesökare per månad. Nya startsidan (live 2026-09-06) har setts av 8 riktiga svenskar. /tjanster/webbutveckling av 2 på 30 dagar.
- UPPMÄTT: riktiga leads via sajten senaste 30 dagarna: 0 (Umami, Resend och D1-utkorgen säger samma sak; det som syns är Joels tester). Senaste 90 dagarna: 1 bokningsförfrågan, från en ChatGPT-besökare via /kristianstad och /om.
- UPPMÄTT: annonserna gav ca 56 mänskliga klick, 0 formulär. Annonssidan studsar 75 %. Sajtkollen körs av 62 % av dem som landar där (11 klara mätningar), men 0 av 11 tog nästa steg. Åtta av elva fick 71 poäng eller mer.
- BEDÖMNING: problemet är i första hand för lite rätt trafik. Ett bättre budskap på dagens trafik (23 köpbesökare per månad) ger som mest ca 1 lead till per månad (0,2 till 1,2). Annonstakten från augusti (ca 170 köpbesökare per månad) ger 1,7 leads redan vid dagens 1 % och ca 5 vid 3 %. Trafik och budskap multipliceras, men utan trafik finns inget att multiplicera. Budskapet spelar roll på två ställen: steget efter sajtkollens resultat och annonssidans första skärm på mobil. Samt på /om, som fler riktiga besökare läser än startsidan.

Startad: 2026-09-19. Period: 30 d = 2026-08-20 till 2026-09-19. 90 d = 2026-06-21 till 2026-09-19 (Umami har data från 2026-06-23).

Fråga: Var tappas folk, och är problemet budskap eller för lite rätt trafik?

Läsregel: UPPMÄTT = siffra ur Umami-API, Resend-API eller kod med filhänvisning. ANTAGET = min bedömning.
Små tal är små tal. Under ca 20 händelser drar jag inga säkra slutsatser.

Metod: Jag hämtade alla 567 sessioner för 90 dagar ur Umami (/sessions) och hela klickkedjan (/sessions/{id}/activity)
för de 226 svenska. Av det byggde jag en besökstabell (391 svenska besök). Kontroll: mina summor för Sverige 30 d blir
exakt Umamis egna (158 besökare, 282 besök, 473 sidvisningar), så återskapandet stämmer.

## Logg över delsteg
- [x] C. Spårningskoden (vad betyder varje händelse)
- [x] 1. Ingångssidor SE 30/90 d
- [x] 2. Betald mot organisk + enskilda cpc-sessioner
- [x] 3. Tratten sajtkoll
- [x] 4. Tratten kontakt/boka + Resend
- [x] 5. Mobil mot dator
- [x] 6. Botbrus (ägartrafik i 6a, utland i 6b)
- [x] Slutbedömning med räkning

---

## C. Vad händelserna betyder (UPPMÄTT ur koden)

| Händelse | Var | Vad den faktiskt mäter |
|---|---|---|
| sajtkoll-kord | app/sajtkoll/page.js:220 | KLICK på knappen "Testa sajten" på /sajtkoll. Inte att mätningen lyckades. Felstavad adress ger också en händelse. |
| koll-hero / koll-final | components/b/HeroKoll.jsx:192 | Klick på "Mät min sajt" i startsidans fält (hero resp. sista blocket). |
| sajtkoll-hero / sajtkoll-final | HeroKoll.jsx:97 | Mätningen på startsidan blev KLAR (resultat visat). |
| forslag-hero / forslag-final | HeroKoll.jsx:283 | Klick på "Bygg mitt förslag" (mejlfältet efter resultatet). |
| lead-forslag | HeroKoll.jsx:138 | Förslagsbegäran skickad och kvitterad av /api/contact. Startsidans enda riktiga lead. |
| chatt-sajtkoll / chatt-hero | sajtkoll/page.js:321, HeroKoll.jsx:255 | Klick på "Fråga AI:n vad det betyder". |
| lead-sajtkoll-rapport | sajtkoll/page.js:366 | Klick på knappen som mejlar rapporten (klick, inte kvitterat utskick). |
| lead-sajtkoll | sajtkoll/page.js:438 | Klick på länken "Boka genomgång" under resultatet. Heter lead men är bara ett klick till /boka. |
| boka-kalender-oppnad | app/boka/BokaContent.jsx:205 | Fliken "tid" vald på /boka. Själva bokningen sker i Google-kalendern och syns INTE i Umami. |
| lead-boka / lead-boka-tid | BokaContent.jsx:249 | Meddelandeformuläret på /boka skickat och kvitterat. |
| lead-kontaktformular | app/kontakt/KontaktContent.jsx:101 | Kontaktformuläret skickat och kvitterat. |
| lead-lp-hemsida | app/lp/hemsida-foretag/LpHemsidaContent.jsx:144 | Annonssidans formulär (ämne "Designförslag: ...") skickat och kvitterat. |
| cta-telefon | BContent.jsx:448, JoelCard.jsx:68, CloseBlock.jsx:36 | Klick på telefonnumret. |
| cta-boka, cta-close-boka, cta-tjanst-hemsida | BContent.jsx, CloseBlock.jsx | Klick på respektive länk. |
| cta-hero-primar, cta-hero-final | finns INTE kvar i koden | Kom från den gamla startsidan (före 2026-09-06). De få som syns i 30 d är från den versionen. |

Mätluckor (UPPMÄTT ur koden):
1. Mejlklick (mailto) spåras inte någonstans. Den som mejlar direkt syns aldrig.
2. Bokning i Google-kalendern syns inte, bara att fliken öppnades.
3. Annonssidan /lp/hemsida-foretag har ingen händelse för klick på telefon eller ankarlänkar, bara för skickat formulär. Den som ringer från annonssidan syns inte.
4. På /sajtkoll finns ingen händelse för "mätning klar". sajtkoll-kord är ett knappklick.
5. Umami-skriptet laddas först efter window.load (app/layout.js:198). Den som lämnar innan sidan laddat klart räknas inte alls. Annonsklick som studsar direkt är alltså underräknade i Umami jämfört med Google Ads egna klicktal.
6. Ingen Google Ads-tagg ligger på livesajten (curl mot /sajtkoll 2026-09-19: ingen googletagmanager, inget AW-id). Konverteringar ska enligt koden gå server-side via klick-id i /api/contact. Följden: sajtkoll-körningar på /sajtkoll når aldrig Google Ads som signal, trots att lib/track.js beskriver dem som volymsignalen budgivningen ska lära sig på.

---

## 6a. Största fyndet: mycket av "trafiken" är Joel själv (UPPMÄTT mönster, ANTAGEN identitet)

Två enhetssignaturer står för ungefär 40 procent av alla svenska besök de senaste 30 dagarna (116 av 282 när två närliggande Kristianstad-signaturer räknas med):
- Mac, Chrome, skärm 1710x1107, stad Kristianstad (geo-IP för Hässleholmstrakten).
- iPhone, Chrome för iOS (crios), skärm 402x874. 94 besök med Chrome mot 11 med Safari på samma skärmstorlek. Hos vanliga svenska iPhone-ägare är det tvärtom, så detta är i praktiken en och samma telefon. Umami ger ny "besökare" varje gång telefonen byter IP, därav Stockholm, Malmö och Göteborg i listan.
- 154 av 157 sådana besök (90 d) är direkttrafik, 131 av dem rakt in på startsidan, ofta 5 till 17 besök per session.

Svenska besök, klassade (UPPMÄTT antal, ANTAGEN klassning):

| Klass | 30 d besök | 30 d unika | 30 d sidvisningar | 90 d besök | 90 d unika |
|---|---|---|---|---|---|
| Ägare (Joels egna enheter) | 116 | 28 | 159 | 161 | 41 |
| Kundyta (/rapport/ngtab m.fl., kunder som läser sin rapport) | 17 | 13 | 18 | 24 | 20 |
| Bot-misstänkt i Sverige (Linux 1280x1024 mot /kontakt#__mfjob, m.m.) | 8 | 4 | 10 | 8 | 4 |
| Möjliga köpare ("prospekt") | 141 | 113 | 286 | 198 | 161 |
| Summa = Umamis Sverige-tal | 282 | 158 | 473 | 391 | 226 |

Av de 141 prospektbesöken är 17 en enda återbesökare (se avsnitt 2). Av resten kom 63 från annonser som bara gick 22 till 31 augusti (plus 3 klick 5 september).

Följd: Umamis "/ 199 visningar" är till största delen Joel. Startsidan som INGÅNG hade på 30 dagar 21 prospektbesök från 15 unika svenskar.

## 1. Ingångssidor, enbart svenska prospekt (ägare, kundyta och bottar borträknade)

Studs = besök med en enda sidvisning och ingen händelse. Tid går bara att mäta på besök med minst två sidvisningar (Umami mäter tid mellan sidvisningar), därför medianen för flersidesbesök.

30 dagar:

| Ingångssida | Besök | Unika | Studs | Studs % | Gick vidare (2+ sidor) | Besök med händelse | Median tid, flersides |
|---|---|---|---|---|---|---|---|
| /lp/hemsida-foretag (inkl #priser) | 45 | 38 | 34 | 75 % | 11 | 1 | 14 s |
| / | 21 | 15 | 10 | 47 % | 11 | 2 | 89 s |
| /sajtkoll | 18 | 18 | 5 | 27 % | 3 | 11 | 174 s |
| /om | 9 | 9 | 4 | 44 % | 4 | 2 | 205 s |
| /projekt | 7 | 6 | 2 | 28 % | 5 | 0 | 154 s |
| /boka | 3 | 3 | 1 | 33 % | 2 | 1 | 159 s |
| /priser | 2 | 1 | 2 | 100 % | 0 | 0 | 0 |
| /kontakt | 2 | 2 | 1 | 50 % | 1 | 0 | 35 s |
| /tjanster/webbutveckling | 0 | 0 | | | | | |
| blogg + guider + analys tillsammans | 23 | 23 | 18 | 78 % | | | |

90 dagar:

| Ingångssida | Besök | Unika | Studs | Studs % | Gick vidare | Besök med händelse | Median tid, flersides |
|---|---|---|---|---|---|---|---|
| / | 43 | 36 | 15 | 34 % | 28 | 2 | 79 s |
| /lp/hemsida-foretag | 45 | 38 | 34 | 75 % | 11 | 1 | 14 s |
| /sajtkoll | 18 | 18 | 5 | 27 % | 3 | 11 | 174 s |
| /om | 13 | 13 | 7 | 53 % | 5 | 2 | 167 s |
| /projekt | 7 | 6 | 2 | 28 % | 5 | 0 | 154 s |
| /boka | 3 | 3 | 1 | | 2 | 1 | |
| /priser | 2 | 1 | 2 | | 0 | 0 | |
| /tjanster/webbutveckling | 0 | 0 | | | | | |
| blogg + guider + analys | 41 | 36 | 30 | 73 % | | | |

Hur många unika svenska prospekt SÅG sidan över huvud taget (inte bara som ingång):

| Sida | 30 d | 90 d |
|---|---|---|
| / | 18 | 41 |
| /lp/hemsida-foretag | 38 | 38 |
| /sajtkoll | 21 | 23 |
| /om | 19 | 33 |
| /projekt | 9 | 14 |
| /priser | 6 | 6 |
| /kontakt | 5 | 12 |
| /boka | 5 | 7 |
| /tjanster/webbutveckling | 2 | 8 |

Läsning:
- /tjanster/webbutveckling, sidan som ska sälja just webbutveckling, har ingen enda svensk prospekt som ingång på 90 dagar och sågs av 8 personer totalt. Den rankar inte (rank-snapshot: position 25 till 71) och får ingen annonstrafik. Dess budskap spelar i dag ingen roll för utfallet.
- /om är tredje mest sedda sidan bland riktiga besökare (19 unika på 30 d, fler än startsidan). Folk kollar vem Joel är innan de gör något.
- /priser sågs av 6 svenska prospekt på 30 dagar. En enda person (återbesökaren i avsnitt 2) stod för 11 av de 16 visningarna.

Nya startsidan (ett fält i heron, live sedan 2026-09-06 kväll, commit e4e26f6): sedd av 8 unika svenska prospekt i 10 besök på 13 dagar. 1 av dem använde fältet (kom från ChatGPT, körde mätningen klart, gick sedan runt 12 minuter på /sajtkoll, /om, /projekt, /priser, skickade inget). 0 lead-forslag. Åtta personer räcker inte för att säga något om budskapet, varken bra eller dåligt.

Veckovis, svenska prospektbesök (UPPMÄTT): v32 9, v33 15, v34 38 (12 cpc), v35 69 (48 cpc), v36 25 (4 cpc), v37 16 (0 cpc), v38 9 (0 cpc). Annonserna gick 22 till 31 augusti plus 3 klick 5 september. Sedan dess inga cpc-besök alls.

---

## 2. Betald trafik mot organisk (svenska prospekt)

Annonserna gick i praktiken 10 dagar: 2026-08-22 till 2026-08-31, plus 3 klick 2026-09-05 (det enda cpc-besöket 08-20 är Joels eget test). Efter det finns inga cpc-besök i Umami (UPPMÄTT). Siffrorna nedan är därför samma för 30 och 90 dagar på cpc-raden.

| Källa | 30 d besök | 30 d unika | Studs | Gick vidare (2+ sidor) | Besök med händelse | 90 d besök | 90 d unika |
|---|---|---|---|---|---|---|---|
| Google Ads (cpc) | 63 | 57 | 41 (65 %) | 13 | 11 (alla = sajtkoll-kord) | 63 | 57 |
| Google organiskt | 28 | 27 | 16 (57 %) | 12 | 2 | 56 | 53 |
| Direkt (utan återbesökaren nedan) | 25 | 23 | 14 | 11 | 1 | 43 | 35 |
| AI-sök (ChatGPT) | 7 | 6 | 3 | 4 | 2 | 10 | 9 |
| Bing m.fl. | 2 | 2 | 2 | 0 | 0 | 4 | 4 |

Var de landar:
- cpc: /lp/hemsida-foretag 44 besök (varav 7 på #priser), /sajtkoll 16, /om 3. utm_content: hemsida 20, webbyra 17, sajtkoll 16, tomt 10.
- Organiskt 30 d: blogg/guider/analys 13, startsidan 8, /om 5, övrigt 2. Nästan hälften av det organiska är alltså folk som söker svar på en fråga (vad kostar webbutik, fler Google-recensioner), inte folk som söker en webbyrå. Startsidan och /om är rimligen varumärkessök (någon som googlat Joel eller Stolt Marketing).
- Ingen organisk besökare landade på /tjanster/webbutveckling, /priser eller /hemsida-foretag.

Annonsbesökens mönster (UPPMÄTT, 63 besök):
- /lp/hemsida-foretag: 44 besök, 33 studsar (75 %). Av de 11 som "gick vidare" är 6 bara ankarhopp inom samma sida. Verklig vidareklick: 4 till /projekt/niklassonsflytt (caset), 1 till startsidan. Skickade formulär (lead-lp-hemsida): 0. Mobil 30 besök varav 24 studs, dator 14 varav 9 studs.
- /sajtkoll: 16 besök, 10 klickade "Testa sajten" (62 %). 5 studsar. 2 gick till /priser och tillbaka. 0 klickade vidare till chatt, rapportmejl eller bokning.
- 5 av 57 annonsbesökare kom tillbaka senare. En av dem 16 gånger (se nedan).
- Annonsbesökare som någon gång nådde: /kontakt 1, /boka 1, /priser 3, /om 5. Alltså nådde 1 av 57 en kontaktsida.
- 7 av de 63 besöken ser ut som Googles egen annonsgranskning, inte människor: tre till fyra besök samma minut från olika enheter (08-22 20:43 till 20:44, fyra besök; 09-05 22:50, tre besök till /om). ANTAGET, men mönstret är typiskt. Rimligt antal mänskliga annonsbesök: ca 56.

15 enskilda cpc-sessioner, följda via sessions/activity (UPPMÄTT, tid i UTC):

| Nr | Dag | Annons | Enhet | Förlopp |
|---|---|---|---|---|
| 1 | 08-23 | hemsida | laptop | LP, caset Niklassons, /projekt, /om, /projekt, /sajtkoll (körde koll), /projekt. 29 minuter. Skickade inget. |
| 2 | 08-23 | hemsida | laptop | LP, caset Niklassons, lämnar efter 6 s. |
| 3 | 08-23 | hemsida | mobil | LP, caset, tillbaka till LP, lämnar efter 63 s. |
| 4 | 08-23 | (tom, #priser) | mobil | LP på prisankaret, en sidvisning, lämnar. |
| 5 | 08-25 | webbyra | laptop | LP, en sidvisning, lämnar. |
| 6 | 08-25 | sajtkoll | laptop | /sajtkoll, klickar Testa efter 8 s, inget mer. |
| 7 | 08-25 | sajtkoll | laptop | /sajtkoll, klickar Testa efter 4 s, inget mer. |
| 8 | 08-25 | webbyra | mobil | LP, till startsidan efter 3 s, lämnar. |
| 9 | 08-26 | hemsida | mobil | LP, ankarhopp, 36 minuter mellan visningarna (flik kvar öppen), inget skickat. |
| 10 | 08-27 | sajtkoll | laptop | /sajtkoll, kör kollen 4 gånger (två adresser på samma sajt), går till /priser, tillbaka till /sajtkoll. 7 minuter. Skickade inget. |
| 11 | 08-28 | sajtkoll | mobil | /sajtkoll, klickar Testa efter 11 s, inget mer. |
| 12 | 08-28 | hemsida | dator | LP, en sidvisning. Kommer sedan tillbaka 16 gånger på fyra dagar, se nedan. |
| 13 | 08-30 | webbyra | dator | LP, caset Niklassons, lämnar efter 25 s. |
| 14 | 08-30 | sajtkoll | laptop | /sajtkoll, /priser, tillbaka till /sajtkoll, lämnar efter 32 s utan att köra kollen. |
| 15 | 08-30 | sajtkoll | mobil | /sajtkoll, klickar Testa efter 7 s, inget mer. |

Mönstret: de som landar på annonssidan läser (eller läser inte) och går. De få som klickar vidare väljer caset, inte formuläret. De som landar på sajtkollen gör det sidan ber om, får sitt resultat, och där tar det slut. Ingen av 57 lämnade kontaktuppgifter.

Återbesökaren (session 0cc909, Windows, Chrome, 2560x1440, okänd ort): kom via annonsen "hemsida" 08-28, återkom 16 gånger på fyra dagar, 74 sidvisningar. Såg /priser 11 gånger, /kontakt 6, /sajtkoll 6, /boka 2, öppnade kalenderfliken, klickade på hero-knappen. Skickade inget spårat. Besökstiderna ligger bland annat 02:24, 05:55 och 06:32 svensk tid. Det kan vara en mycket intresserad köpare som ringde eller mejlade (mejlklick mäts inte), en konkurrent, eller Joel eller någon närstående på en Windows-dator. Joel vet bäst: kom det ett samtal eller en bokning runt 31 augusti? Jag räknar honom som EN möjlig köpare, inte som 17 besök.

Vad det kostade: annonskostnaden finns inte i Umami. ADS-OCH-OMBYGGNAD-PLAN.md satte gränsen "CPL under 500 kr efter 6 veckor, förväntat 1 till 2 leads per vecka vid 4 %". Utfall: ca 56 mänskliga klick, 0 leads. Vid 4 % hade 56 klick gett 2,2 leads. Att få 0 när man väntar 2,2 händer av ren slump ungefär en gång på tio (0,96 upphöjt till 56 = 0,10). Det är alltså ett svagt men inte avgörande tecken på att annonssidan konverterar sämre än 4 %.

## 3. Tratten sajtkoll (30 d, svenska prospekt + D1-tabellen results)

| Steg | Antal | Källa |
|---|---|---|
| Unika som såg /sajtkoll | 21 | Umami |
| Varav landade där från annons | 16 besök | Umami |
| Sessioner som klickade "Testa sajten" | 13 (16 klick) | Umami, sajtkoll-kord |
| Mätningar som blev klara (alla källor) | 21 rader: 11 med cpc som källa, 7 är Joels eller Claudes tester av kundsajter, 1 är youtube.com, 2 är ChatGPT-besökaren som använde startsidans fält 09-15 (fick 39 och 43 poäng) | D1 results, 2026-08-20 till 2026-09-19 |
| Klick på "Fråga AI:n" (chatt-sajtkoll) | 0 från prospekt (1 från Joel) | Umami |
| Beställd rapport på mejl (subscribers) | 0 på 30 d (de 2 som finns är från lanseringsdagen 08-17) | D1 subscribers |
| Klick på "Boka genomgång" (lead-sajtkoll) | 0 | Umami |
| Gick vidare till annan sida efter kollen | 3 (2 till /priser, 1 runt i /projekt) | Umami |
| Lead | 0 | Umami + Resend |

Var det tar stopp: efter resultatet. Steget före fungerar ovanligt bra (62 % av annonsbesökarna kör kollen, på mobil 8 av 11). Steget efter fungerar inte alls (0 av 11 tar nästa steg).

Två saker i datan förklarar troligen varför (ANTAGET, men med uppmätt grund):
1. Poängen är för snäll för att skapa ett behov. De 11 annonskörningarna fick 45, 54, 57, 71, 71, 75, 75, 75, 75, 86, 86. Åtta av elva fick 71 eller mer. Den som får 75 av 100 hör "min sajt är helt okej" och går. Rubriken "Tre saker kostar dig förfrågningar" möter en siffra som säger motsatsen.
2. Vilka som testar: av 11 adresser är ungefär 8 svenska småföretagssajter (bilverkstad, specialistfirma, liten e-handel och liknande), 1 en staging-adress (någon som redan bygger nytt), 2 skräp eller nyfikenhet (utländsk sajt, en nedladdningssida). Målgruppen är alltså i huvudsak rätt. Det är inte fel folk, det är fel fortsättning.
3. Sökordet "sajtkoll" lockar den som vill ha ett gratis test, inte den som bestämt sig för att köpa en hemsida. Det är en tidig kontakt, och en tidig kontakt behöver en väg att fånga mejlen. I dag kräver varje nästa steg ett större beslut (boka möte, be om förslag) än besökaren är redo för.

Mätlucka: på /sajtkoll finns ingen händelse för "resultat visat" och ingen för hur långt ner på resultatet folk skrollar. D1-tabellen räddar antalet klara mätningar, men inte vad folk gjorde efteråt.

## 4. Tratten kontakt och boka

Umami, svenska prospekt (bottar och Joel borträknade):

| | 30 d | 90 d |
|---|---|---|
| Unika som såg /kontakt | 5 | 12 |
| Unika som såg /boka | 5 | 7 |
| Unika som såg /priser | 6 | 6 |
| lead-kontaktformular | 0 | 0 |
| lead-boka | 0 | 1 (08-16, kom från ChatGPT via /kristianstad och /om) |
| lead-lp-hemsida, lead-forslag | 0 | 0 |
| boka-kalender-oppnad | 1 (återbesökaren) | 2 |
| cta-telefon | 1 (samma person som bokade 08-16, återkom 08-25) | 1 |

Umamis råtal säger lead-kontaktformular 1 på 30 d och 2 på 90 d. Båda kommer från Joels egen Mac (session 553b62, Kristianstad, 28 besök, den ena med test-utm). Det är tester, inte leads.

/kontakt ser mer besökt ut än den är. Av 18 svenska sidvisningar på 30 d kommer 6 från bot-misstänkta klienter (en formulärbot på Linux, 1280x1024, med adressen /kontakt#__mfjob=..., och en Windows-klient utan ort som går rakt på /kontakt tre olika nätter), 6 från återbesökaren ensam, 1 från Joel och 5 från fyra övriga prospekt.

Resend-loggen (UPPMÄTT 2026-09-19, loggen når tillbaka till 2026-08-22, 413 mejl totalt, nästan allt är larm från Kontrollrummet och andra system som delar nyckel):

| Ämnesradstyp från sajtens /api/contact | Antal sedan 08-22 | Dagar |
|---|---|---|
| "Ny förfrågan från ..." (kontaktformuläret, även widgeten) | 7 | 6 st 2026-09-06, 1 st 2026-09-07 |
| "Förslag: ..." (startsidans fält) | 0 | |
| "Designförslag: ..." (annonssidan) | 0 | |
| "Bokningsförfrågan", "Tidsönskemål", "Prisförfrågan" (/boka) | 0 | |

De 7 mejlen ligger på exakt de dagar då kontaktflödet byggdes om och säkerhetstestades (commit 0970e1a och 379002d, 6 till 8 september) och har ingen motsvarande lead-händelse i Umami. ANTAGET: tester via curl eller från Joels webbläsare. D1-tabellen kvota_form_outbox, som alla formulär går genom sedan 2026-09-08, har 0 rader (UPPMÄTT). Alltså: 0 riktiga formulär på minst 11 dagar, och inget i någon källa som tyder på ett riktigt formulär de senaste 28 dagarna.

Stämmer Umami med Resend? Ja i sak: båda säger noll riktiga leads senaste 30 dagarna. De skiljer sig i brus: Umami har 1 testhändelse som Resend inte kan bekräfta (före loggens start), Resend har 7 testmejl som Umami inte har händelser för.

Det som inte syns någonstans: telefonsamtal (bara klick på numret mäts, 1 st), direkta mejl, bokningar i Google-kalendern, och svar på Joels egna utskick. Om kunder kommer in i dag kommer de den vägen, inte via sajtens formulär.

## 5. Mobil mot dator (svenska prospekt, utan återbesökaren)

| | Mobil 30 d | Dator 30 d | Mobil 90 d | Dator 90 d |
|---|---|---|---|---|
| Besök | 71 | 53 | 87 | 94 |
| Unika | 62 | 50 | 75 | 85 |
| Studs | 45 (63 %) | 29 (54 %) | 56 (64 %) | 42 (44 %) |
| Sidor per besök | 1,54 | 1,94 | 1,54 | 2,38 |
| Nådde /kontakt, /boka eller /priser | 4 | 10 | 6 | 17 |
| Annonsbesök | 41 (28 studs) | 21 (12 studs) | samma | samma |
| /lp-ingång: studs | 24 av 30 | 9 av 14 | | |
| /sajtkoll-ingång: körde kollen | 8 av 11 | 3 av 6 | | |

Läsning: två tredjedelar av annonsklicken är mobil, och mobilen studsar mer på annonssidan (80 % mot 64 %). Men mobilen kör sajtkollen lika gärna eller hellre än datorn. De som tar sig till pris, kontakt eller bokning sitter oftast vid dator (17 mot 6 på 90 d). Den enda riktiga bokningen kom ändå från en mobil. Talen är för små för mer än så.

Källornas kvalitet, 90 d, unika svenska prospekt efter första källa (återbesökaren borträknad):

| Första källa | Unika | Nådde /kontakt eller /boka | Andel |
|---|---|---|---|
| Google Ads | 55 | 0 (1 med återbesökaren) | 0 till 2 % |
| Google organiskt | 52 | 8 | 15 % |
| Direkt | 34 | 1 | 3 % |
| AI-sök (ChatGPT) | 9 | 5 | 56 % |
| Länk från kundsajt (sidfot hos kund) | 6 | 2 | |
| Bing m.fl. | 4 | 1 | |

Nio personer är nio personer, men mönstret är tydligt nog att nämna: de som kommer från ChatGPT landar på ortssidor (/kristianstad, /hassleholm, /lund, /malmo/hemsida, /helsingborg), läser /om och går till /boka. 90-dagarsperiodens enda riktiga formulärlead kom den vägen. Annonsbesökarna går nästan aldrig till en kontaktsida.

---

## 6b. Botbrus: hur stor del är människor i Sverige?

30 dagar, Umamis 400 "besökare" (UPPMÄTT antal, ANTAGEN klassning):

| Grupp | Unika | Andel | Grund |
|---|---|---|---|
| Utland | 242 | 60 % | 214 av 242 har en enda sidvisning, 233 har engelska som språk, 1 har svenska. Skärm 800x600 (96 st) och 1920x1080 på Linux (92 st) är huvudlösa webbläsare. US 132 och PL 51 går nästan bara på startsidan utan referrer. PL-trafiken anropar dessutom en adress av typen /____proof-of-work/validate/..., vilket är en skrapare. Händelser från hela gruppen: 1. |
| Joel själv | 28 | 7 % | Avsnitt 6a. |
| Kunder som läser sin rapport | 13 | 3 % | Ingång /rapport/... |
| Bot-misstänkt i Sverige | 4 | 1 % | Formulärbot mot /kontakt, nattlig klient utan ort. |
| Svenska prospekt | 113 | 28 % | Resten. |
| varav Googles annonsgranskning | 7 | | Tre till fyra besök samma minut. |
| varav infosökare (landar på blogg, guide, analys) | 23 | | Söker svar, inte leverantör. |
| varav kyrkfolk som tittar på sitt eget case | 5 | | /projekt/pingstkyrkan, 23 till 24 augusti. |
| varav KÖPBESÖKARE (svensk människa på en säljande sida) | 79 | 20 % | 50 från annons, 31 övriga (några i båda). |

Svar: ungefär 28 procent av Umamis besökare är svenska människor som kan bli kunder, och ungefär 20 procent är det jag kallar köpbesökare. Av startsidans 199 visningar på 30 dagar är en liten del riktiga: 18 unika svenska prospekt såg den.

Åtgärd som inte rör budskapet men gör nästa mätning läsbar: stäng av Umami på Joels egna enheter (kör localStorage.setItem("umami.disabled", 1) en gång i konsolen per webbläsare, Umamis skript respekterar den) och filtrera på land = SE i alla rapporter.

---

## Slutbedömning

### Hur många riktiga köpbesök har sajten per månad?

Köpbesökare = unik svensk människa som landar på en säljande sida (startsida, annonssida, sajtkoll, tjänst, ort, pris, om, projekt, kontakt, boka). Joel, kunder, bottar, annonsgranskning och bloggläsare borträknade.

| Period | Dagar | Köpbesökare | Varav annons | Varav övriga | Per 30 dagar, övriga |
|---|---|---|---|---|---|
| Före annonserna, 07-20 till 08-19 | 31 | 23 | 0 | 23 | 22 |
| Med annonser, senaste 30 d | 30 | 79 | 50 | 31 | 31 |
| Efter annonserna, 09-06 till 09-19 | 13 | 10 | 0 | 10 | 23 |

Svar: utan annonser har sajten ungefär 23 köpbesökare i månaden, alltså knappt en om dagen. Med annonserna igång (10 dagar) kom 50 till. Umamis rubriktal 400 besökare är fem gånger fler än de 79 köpbesökarna samma period, och 17 gånger fler än grundnivån utan annonser.

### Vilken konvertering vore rimlig?

Uppmätt, 90 d: 111 köpbesökare gav 1 formulärlead, 1 telefonklick (samma person) och 2 öppnade kalendrar utan känd bokning. Det är 0,9 procent säkert och högst 2,7 procent om båda kalenderöppningarna blev bokningar. Med så små tal ligger det sanna värdet någonstans mellan 0 och 5 procent.

Rimligt mål (ANTAGET, branschnormala tal för en liten tjänstesajt med blandad trafik): 3 procent av köpbesökarna till lead. 5 procent är bra. Över det ligger bara varm trafik, alltså folk som redan fått ett mejl, ett brev eller en rekommendation.

### Räkningen: budskap mot trafik

Antagen affärskedja: 1 lead av 4 blir kund (25 %). En kund är värd ca 14 300 kr första året på Bas (1 190 kr x 12), enligt ADS-OCH-OMBYGGNAD-PLAN.md.

A. Bättre budskap, samma trafik (23 köpbesökare per månad):

| Konvertering | Leads per månad | Kunder per år |
|---|---|---|
| 1 % (ungefär i dag) | 0,2 | 0,7 |
| 3 % (rimligt mål) | 0,7 | 2,1 |
| 5 % (bra) | 1,2 | 3,5 |
| 8 % (orimligt bra för kall trafik) | 1,8 | 5,5 |

Taket för ett bättre budskap ensamt: från ungefär 0,2 till som mest 1,2 leads i månaden. Plus 1 lead i månaden, plus 2 till 3 kunder om året. Och det går inte att mäta: för att skilja 1 procent från 3 procent med rimlig säkerhet behövs i storleksordningen 400 till 800 köpbesökare per variant (vanlig formel för två andelar, 80 % styrka). Sajten får 23 i månaden. Det tar alltså flera år innan siffrorna kan säga om ett nytt budskap på startsidan är bättre än det gamla.

B. Mer rätt trafik, samma budskap:

| Köpbesökare per månad | Leads vid 1 % | Leads vid 3 % |
|---|---|---|
| 23 (i dag) | 0,2 | 0,7 |
| 100 | 1,0 | 3,0 |
| ca 170 (annonstakten från augusti hela månaden, 50 per 10 dagar, plus grundtrafiken) | 1,7 | 5,1 |
| 300 | 3,0 | 9,0 |

Fyra gånger mer trafik ger fyra gånger fler leads redan med dagens svaga konvertering. Trafik och budskap multipliceras: 23 x 3 % = 0,7 men 170 x 3 % = 5,1. Skillnaden mellan raderna (trafik) är större än skillnaden mellan kolumnerna (budskap).

C. Men: annonstrafiken konverterade 0 av 50. Det är där budskapet faktiskt spelar roll just nu, eftersom det är de enda sidorna som får trafik i volym:

- Annonssidan /lp/hemsida-foretag: 44 besök, 75 % studs, 0 formulär. Vid 4 % väntade man 1,8. Noll kan vara slump (chansen är ungefär 1 på 6), men inget talar för att sidan fungerar. 28 av 44 var mobil, och där studsar 80 %.
- Sajtkollen: 62 % av annonsbesökarna kör den (mycket bra), 11 klara mätningar på 10 dagar, 0 tog nästa steg. Räkneexempel (ANTAGET): om var fjärde hade lämnat sin mejl för att få rapporten eller ett förslag hade det varit ca 3 mejladresser på 10 dagar, alltså ca 8 per månad, utan ett enda klick till. Det är mjuka leads, inte färdiga förfrågningar, men det är 8 samtal Joel kan starta i stället för 0. Det är den största enskilda läckan som går att se i datan, och den är en budskapsfråga: vad resultatet säger (75 av 100 låter bra) och vad besökaren erbjuds efteråt (boka möte är för stort steg).

### Rak bedömning

1. Huvudproblemet är för lite rätt trafik, inte startsidans budskap. 23 svenska köpbesökare i månaden räcker inte för att leva på vid någon rimlig konvertering, och det räcker inte heller för att mäta om ett nytt budskap är bättre. Nya startsidan har setts av 8 riktiga svenskar på 13 dagar. /tjanster/webbutveckling av 2 på 30 dagar. Att slipa orden där ändrar ingenting mätbart.
2. Joel har läst sin egen trafik som om den vore marknaden. 41 procent av de svenska besöken är han själv, 60 procent av alla besökare är utländska bottar. Beslut om budskap som tagits på Umamis rubriktal är tagna på brus.
3. Budskapet spelar roll på exakt två ställen, de som får betald trafik: steget efter sajtkollens resultat, och annonssidans första skärm på mobil. Där finns en mätbar läcka (11 mätningar och 44 sidbesök gav 0 leads) och där ger varje förbättring utslag direkt, eftersom trafiken går att köpa.
4. Den bästa trafiken sajten har är den minsta: besökare från ChatGPT via ortssidorna (9 personer på 90 dagar, 5 gick till kontakt eller bokning, 1 blev lead) och den organiska Google-trafiken (8 av 52 gick till kontakt eller bokning, de flesta efter att ha landat på startsidan eller /om, vilket rimligen är sökningar på Joels eller firmans namn). Det är folk som redan letar efter just en lokal webbyrå eller redan hört talas om Joel. Mer sådant, alltså ortssidor som syns, recensioner, och egna utskick som får folk att googla namnet, är värt mer än en ny rubrik.
5. /om är en säljsida, inte en bisak. 19 unika prospekt på 30 dagar såg den, fler än som såg startsidan. 5 av 17 som nådde en kontaktsida hade läst /om först. Den som ska ändra budskap bör börja där och på annonssidan, inte på tjänstesidan.

Det jag inte kan se: telefonsamtal, direkta mejl, kalenderbokningar och svar på Joels egna utskick. Om det är därifrån kunderna faktiskt kommer i dag är sajtens roll att bekräfta ett beslut (vem är han, vad kostar det, har han gjort det förut), inte att skapa det. Då är rätt mått inte formulär per besökare utan hur många av dem Joel redan kontaktat som går in, tittar på /om, /projekt och /priser, och sedan svarar på mejlet.
