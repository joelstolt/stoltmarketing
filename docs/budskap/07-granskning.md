# 07 Granskning (skeptikern)

Status: KLAR 2026-09-19. Kort svar står sist i filen. Ingen kod ändrad, inget byggt, inget deployat.

Uppdrag: försöka fälla förslagen A (nisch), B (erbjudande) och C (förtroende) mot datan.

## Checkpoint-logg
- [x] Utfil skapad
- [x] Underlag 01-05 lästa i sin helhet (2026-09-19)
- [x] Förslag A, B, C lästa i sin helhet (2026-09-19)
- [x] Stickprov i koden (tolv gjorda, se avsnitt 1)
- [x] Räkning: budskap mot trafik (avsnitt 2)
- [x] Domar per ändring (avsnitt 3, 45 rader)
- [x] Motsägelser mellan förslagen avgjorda (avsnitt 4)
- [x] H1 per sida och löfteskontroll (avsnitt 5)
- [x] Vad alla missat (avsnitt 6)
- [x] Plan, högst 10 steg (avsnitt 7)
- [x] Overifierat och frågor till Joel (avsnitt 8 och 9)

---

## 1. Stickprov: stämmer underlaget? (UPPMÄTT 2026-09-19, egen läsning av koden)

| # | Påstående | Källa som påstod | Utfall | Belägg |
|---|---|---|---|---|
| 1 | Startsidans knapp säger "Mät min sajt", förslagsformuläret kommer först efter mätningen | 01, B | STÄMMER | components/b/HeroKoll.jsx:193, :265-284 |
| 2 | "Ingen bindning, inga påminnelser." under mejlfältet, 12 mån bindning i FAQ | 01, 05, alla förslag | STÄMMER | HeroKoll.jsx:291, components/b/BFaq.jsx:12 |
| 3 | API:t avvisar företagsnamn utan punkt | 01, alla förslag | STÄMMER | app/api/sajtkoll/route.js:74 (!host.includes(".")), :190 felmeddelandet |
| 4 | /sajtkoll säger "ingen lagring" men resultatet sparas i D1 | 01, alla förslag | STÄMMER | app/sajtkoll/page.js:251, route.js:627-647 (INSERT INTO results) |
| 5 | Sajtvakten är förbockad | 01, B, C | STÄMMER | page.js:361 (defaultChecked) |
| 6 | LP: steg 1 videomöte, "sex sidor", "en månads uppsägning", "Enterprise-kvalitet", hårdkodat 32, "150+", "80 000 till 200 000 kr", kommentar om att antalet recensioner göms | 01, 05, B, C | STÄMMER, alla åtta | LpHemsidaContent.jsx:36-37, :65, :89, :272, :283, :304, :328, :425-429 |
| 7 | FAQ stängd från start | 05 | STÄMMER | BFaq.jsx:67 useState(null) |
| 8 | Ordet moms eller exkl finns inte på säljsidorna | 05 | STÄMMER | grep över app/priser, app/b, components/b, LP, /hemsida-foretag, webbutveckling, pricing-packages: 0 träffar |
| 9 | Menyn har tio tjänsterader | 01, A | STÄMMER | components/Header.jsx:32-86 |
| 10 | 19 sajter, Niklassons 37 i ögonblicksbilden | 01 | STÄMMER | lib/kundmotor.js:53-64 (SNAPSHOT 2026-09-05) |
| 11 | /hantverkssajter är föräldralös | A | STÄMMER. Ordet förekommer i tre case-filer men som löptext, inte som länk | grep i app, components, lib |
| 12 | Inget org.nr eller F-skatt på sajten | C | STÄMMER. Träffarna på "organisationsnummer" gäller Batteriproffs-caset och bloggposter | grep |

### Ett fel jag hittade i underlaget

**"Åtta av elva fick beskedet att sajten duger" stämmer inte som det står.** 02 och förslag C hänvisar till rubriken "Tre saker kostar dig förfrågningar" (HeroKoll.jsx:216). Den rubriken finns bara i startsidans fält. Annonsbesökarna landade på /sajtkoll, och där visas API:ts omdöme bredvid poängen (page.js:290, result.verdict). UPPMÄTT ur route.js:550-555 och de elva poängen i 02:

| Poäng | Antal av 11 | Omdöme de faktiskt såg |
|---|---|---|
| 86, 86 | 2 | "Er sajt står sig bra. Det som återstår är detaljer." |
| 71, 71, 75, 75, 75, 75 | 6 | "Grunden finns, men flera saker läcker besökare i dag." |
| 45, 54, 57 | 3 | "Här finns mycket att hämta. Sajten jobbar inte för er som den kunde." |

Alltså: 2 av 11 fick höra att sajten duger. 9 av 11 fick höra att något läcker eller att mycket finns att hämta. Ändå tog 0 av 11 nästa steg. Hypotesen "poängen var för snäll" förklarar alltså högst 2 av 11. Den starkare förklaringen är den som B och 01 pekar på: efter resultatet fanns inget erbjudande att säga ja till, bara rapport, bevakning, konkurrentjämförelse och möte. Följd för planen: att skriva om omdömestexterna (A, B och C lägger alla kraft där) är lägre prioritet än att lägga förslagsfrågan i resultatet. B är det enda förslaget som citerar rätt text.

Övrigt jag noterade: förslag B har rätt i att "du hittade hit själv" och "jag ringer aldrig upp och säljer" inte får skrivas om Joel gör egna utskick. A och C använder båda formuleringen. Se avsnitt 4.

---

## 2. Är det här ens ett budskapsproblem? Räkningen

Nej, inte i första hand. Det är för lite rätt trafik, för lite förtroende och en säljkanal som står still. Budskapet är trea.

### 2.1 Vad ett perfekt budskap kan ge på dagens trafik

UPPMÄTT (02): Umamis 158 svenska besökare på 30 dagar är 28 Joel själv, 13 kunder, 4 bottar och 113 prospekt. Av prospekten är 79 köpbesökare, men 50 av dem köptes med annonser som gick i tio dagar. Grundnivån utan annonser är ca 23 köpbesökare per månad. Uppmätt konvertering på 90 dagar: 1 lead på 111 köpbesökare, alltså ca 1 procent.

| Budskapets kvalitet | Konvertering | Leads per månad på 23 besökare | Kunder per år (ANTAGET var fjärde lead) |
|---|---|---|---|
| Dagens | ca 1 % | 0,2 | 0,7 |
| Rimligt bra | 3 % | 0,7 | 2,1 |
| Mycket bra | 5 % | 1,2 | 3,5 |
| Orimligt bra för kall trafik | 10 % | 2,3 | 6,9 |

Taket för ett perfekt budskap ensamt är alltså ungefär plus 1 lead i månaden, plus 2 till 3 kunder om året, värda 29 000 till 43 000 kr första året på Bas. Det går inte att mäta: 02 räknar med 400 till 800 besökare per variant för att skilja 1 procent från 3. Med 23 i månaden tar det flera år.

### 2.2 Samma budskap med mer trafik

| Källa | Köpbesökare per månad | Leads vid 1 % | Leads vid 3 % | Kostnad |
|---|---|---|---|---|
| I dag | 23 | 0,2 | 0,7 | 0 kr |
| Annonser i augustitakt | ca 170 | 1,7 | 5,1 | ANTAGET ca 150 klick x 120 kr = ca 18 000 kr per månad. Faktisk kostnad är inte känd, den finns bara i Google Ads |

Vid 3 procent och var fjärde lead till kund blir det ca 1,3 kunder för ca 18 000 kr, alltså ca 14 000 kr per kund. Bas är värd 14 280 kr första året och Ads-planens eget tak är 4 800 kr. Annonser går alltså runt först år två, eller om kunden tar Bredd. Annonser är ett sätt att testa erbjudandet, inte en motor.

### 2.3 Det ingen av de tre räknade på: utskicken som inte går

UPPMÄTT 2026-09-19 (egen läsning av /Users/joelstolt/Desktop/Dev/internal/pitchfabrik och /Users/joelstolt/Desktop/Dev/TASKS.md rad 22-23):

- Pitchfabriken har 240 genomgångna hantverks-, el- och byggbolag (omsättning 3 till 50 MSEK). 132 pitchar är klassade stark, 68 medel, 40 svag. Alla har färdiga mejltexter.
- Filen data/utskickt.json finns inte. Inget är skickat. TASKS.md säger samma sak: "200 färdiga mejl (132 starka). Inget skickat", daterat 2026-08-11. De har legat i 39 dagar.
- Källdatabasen bakom har enligt README 16 207 bolag med både mejl och hemsida, noll kontaktade.
- Demo-utskicken (internal/outreach-demos/state.json): 1 pitch skickad sedan juli, 4 utkast som väntar på godkännande sedan 2026-08-18.

Alla tre förslagen skriver att motorn rimligen är Joels egna utskick. Ingen kontrollerade om motorn går. Den går inte.

Räkning (ANTAGET, svarsfrekvenser för kalla men personliga mejl med en konkret iakttagelse):

| Antagande | 132 starka pitchar ger |
|---|---|
| 3 % svarar ja till ett gratis förslag | 4 förslag, ca 1 kund vid var fjärde |
| 5 % | 7 förslag, ca 1,7 kunder |
| 8 % | 11 förslag, ca 2,6 kunder |

Mediekostnad: 0 kr. Även det sämsta fallet ger ungefär lika mycket som ett perfekt budskap på sajten ger på ett halvår, och kanalen går att fylla på (16 207 bolag). README anger "historisk konvertering cirka 7 procent" för demos, men utan källa, så den siffran är overifierad.

Två förbehåll. Pitcharnas iakttagelser verifierades live 10 till 11 augusti och måste kontrolleras om före utskick (README:s egen kärnregel). Och reklam via mejl till enskilda firmor kräver samtycke, så håll utskicken till aktiebolag (A flaggade samma sak).

### 2.4 Följd för sajten

Den som får en pitch googlar Joel och går in på sajten. Då är sajtens jobb att bekräfta, inte att övertyga från noll: vem är han (/om), har han gjort det förut (caset), vad kostar det och vad binder jag mig till (/priser, villkoren), och stämmer det han säger (recensioner, Google-profilen, inga motsägelser). Det flyttar tyngden från H1 till /om, caset, villkoren och recensionerna. C och B har därför mest rätt om VAD som ska göras på sajten. A har mest rätt om VEM utskicken ska gå till.

### 2.5 Rak rangordning av vad som avgör utfallet de närmaste tre månaderna (ANTAGET, min bedömning)

1. Utskick som faktiskt går ut: störst, gratis, går att mäta per 100 mejl.
2. Förtroende utanför sajten: 3 Google-recensioner mot 62 och 67 hos dem som syns i Skånes kartpaket. Enda åtgärden som också ger trafik.
3. De två ytor som får köpt trafik (sajtkollens resultat, annonssidan): mätbara på 75 klick, men annonsekonomin är svag.
4. Motsägelserna och villkoren: billigt, ingen nedsida, spelar roll för alla som kollar upp Joel.
5. Rubriker och ordval på startsidan: minst. Sedd av 8 riktiga svenskar på 13 dagar.

---

## 3. Domar per föreslagen ändring

Grund: U = bygger på uppmätt underlag, T = tyckande eller antagande, U+T = uppmätt problem men antagen lösning.

| # | Ändring | Från | Grund | Dom | Skäl |
|---|---|---|---|---|---|
| 1 | H1 på startsidan: "Hemsidor åt hantverkare och lokala firmor. Färdig innan du betalar ett öre." | A | T | STRYK | Inget uppmätt talar mot dagens H1 (8 besökare). 10 av 19 kunder i lib/kundmotor.js:18-36 är INTE hantverk (skola, kyrka, BRF, AcadeMedia, e-handel). De som testade sajtkollen var bilverkstad, specialistfirma, liten e-handel (02). 75 tecken spräcker en rubrik på upp till 104 px. Nischen hör hemma i ögonbryn, branschrad, case och utskick. |
| 2 | H1 på startsidan: "Jag bygger din hemsida först. Du bestämmer dig sen." | C | T | STRYK | Mindre sann än dagens. Köparen bestämmer sig efter två sidor (BFaq.jsx:16), inte efter en färdig hemsida. Dagens "färdig innan du betalar" är bokstavligt sann om första fakturan kommer vid lansering (SaGarDetTill.jsx:32). |
| 3 | Behåll H1 på startsidan | B | U (ingen data emot) | BEHÅLL | Ordagrant unik bland 10 konkurrenter (03). Lägg tiden någon annanstans. |
| 4 | Ögonbryn: "För hantverkare och lokala tjänsteföretag" | A | T | BEHÅLL | Billigt, utesluter e-handel och SaaS (rätt) men inte städ, verkstad, massage. Nischen syns utan att H1 stänger dörren. |
| 5 | Ögonbryn: "Joel Stolt, Hässleholm · hemsidor åt småföretag sedan 2014" | C | T | ÄNDRA | Personen ska in, men som ansiktsrad under fältet (nästa rad), inte i stället för vem sajten är till för. |
| 6 | Ansiktsrad under fältet: "Joel Stolt bygger och svarar själv. Svar inom 24 timmar på vardagar." | C | U+T | BEHÅLL | /om lästes av 19 prospekt mot startsidans 18 (02): folk vill veta vem. 0 av 10 konkurrenter har ansikte i hero (03). Liten insats, bilden finns. |
| 7 | Knapp "Bygg mitt gratis förslag" och ETT fält som en komponent på alla säljsidor. Text utan punkt hoppar över mätningen | B | U+T | BEHÅLL | Löftet är en ny hemsida och ingen knapp ber om den (uppmätt). En komponent tar bort fyra versioner av mekanismen. Men B:s slutsats "ett fält fungerar, fyra inte" håller inte: /sajtkoll och LP:n skiljer sig i erbjudande, sökavsikt OCH fält, så antalet fält går inte att peka ut. Därför stoppregel på LP:n, och reservplan: ger 75 klick 0 leads byts knappen på LP:n till testet. |
| 8 | Knapp "Testa min hemsida" / "Mät min hemsida" på startsidan | A, C | T | ÄNDRA | Rätt ord (hemsida), men knappen säljer fortfarande mätningen. Använd "Testa min hemsida" bara på /sajtkoll, där annonsen lovade ett test och 62 procent körde det. |
| 9 | Dörr för den utan hemsida | A, B, C | U | BEHÅLL | Texten lovar, API:t avvisar (route.js:74). B:s lösning är enklast: anropa inte API:t när punkt saknas. |
| 10 | Prisraden alltid hel: "0 kr i start. Från 1 190 kr/mån [exkl. moms]. 12 månader, sedan månadsvis. Du äger hemsidan." | B (A och C samma sak) | U | BEHÅLL | 0 träffar på moms, bindningen står inte vid priset, "Ingen bindning" under mejlfältet (alla verifierade). Kräver att Joel bekräftar moms. |
| 11 | A:s underrubrik på startsidan med sex branscher, test, förslag, pris, bindning och ägande i ett stycke | A | T | ÄNDRA | Ca 75 ord i en underrubrik. Ta B:s korta underrubrik och lägg villkoren i prisraden under fältet. |
| 12 | Branschrad "Bygg · El · VVS · Måleri · Tak · Mark och gräv · Flytt · Städ · Bilverkstad" | A | T | ÄNDRA | Case finns för bygg, flytt och mark. El, VVS, måleri, tak, städ och bilverkstad har inget bevis på sajten. Lista bara branscher där det finns en kund att visa. |
| 13 | Punkten "så du hittas när någon söker elektriker i Hässleholm" | A | T | ÄNDRA | Antyder placering på Google. Joels egen sajt ligger på plats 25 till 71, och löften om placering är just det Svensk Handel varnar för (05, B10). Skriv "så att du kan synas på varje tjänst och ort, inte bara på firmanamnet". |
| 14 | "Jag ringer aldrig upp och säljer. Du hittade hit själv." | A, C (C även i Google-profilen) | T | STRYK | Osant för alla som fått en pitch. Joel kör kalla utskick med upp till två automatiska uppföljningar (internal/outreach-demos/README.md) och har 200 kalla pitchar klara. B såg det. Skriv B:s rad: "Säger du nej hör du inte av mig igen." |
| 15 | Raden under mejlfältet: "Förslaget är gratis och du förbinder dig inte till något. Säger du nej hör du inte av mig igen." | A, B, C | U | BEHÅLL | Ersätter en verifierad krock (HeroKoll.jsx:291 mot BFaq.jsx:12). |
| 16 | Tack-text som säger EN uppföljning i förväg | B | U+T | BEHÅLL | Sajten lovar "inga påminnelser" medan utskicksmotorn har två. Säg det som faktiskt sker. C:s "inga påminnelser" i sex raka svar stryks. |
| 17 | Case-texter utan fackord | A, C | U | BEHÅLL | "canonical-fel" och "Formulärkedjan verifierad" står där (BContent.jsx:44-45). Ta C:s texter men byt "så vi ser" mot "så att du ser". |
| 18 | Title på startsidan till "Hemsida åt hantverkare och lokala företag" | A | T | STRYK | "hemsida hantverkare" har 10 sök i månaden. Title bär "hemsida för företag" (480). Inget att vinna. Uppdatera däremot OG-beskrivning och JSON-LD till dagens erbjudande (01 A15). |
| 19 | LP: underrubrik utan "Enterprise-kvalitet", steg 1 utan videomöte, 32 blir live-tal, sex blir fem sidor, samma uppsägningsvillkor | A, B, C | U | BEHÅLL | Alla åtta felen verifierade i koden. Ingen nedsida. |
| 20 | LP: tre varianter (/lp/webbyra, /lp/hemsida-pris) med egen annonstext | B | U+T | ÄNDRA | Rätt tanke (utm_content webbyra 17 klick landar på en sida utan ordet i första skärmen). Men 43 klick i månaden delat på tre ger aldrig ett utslag. Gör H1 och överrad till en prop som styrs av annonsgruppen, mät alla tillsammans mot EN stoppregel. Bygg prisvarianten först om första grinden klaras. |
| 21 | LP: behåll formulär med namn, mejl, telefon, adress | C (A tre fält) | T | STRYK | 0 av 44 är det enda vi vet om formuläret. Pröva B:s ena fält, med telefon som valfritt i steg 2. |
| 22 | LP: person direkt efter hero, bevis före prisankaret | C | T | BEHÅLL, låg prio | Rimligt (4 av 5 vidareklick gick till caset) men fyra personer. Går inte att mäta för sig. |
| 23 | /sajtkoll resultat: förslagsfrågan först, rapport som obockad reserv, 14 rader hopfällda, "Boka genomgång" och "Se tjänster" bort | A, B, C | U | BEHÅLL, högst prio av sajtändringarna | 0 av 11 tog nästa steg och inget av stegen var huvuderbjudandet. Mitt stickprov visar att det är fortsättningen, inte omdömet, som är felet. |
| 24 | Nya omdömestexter per poängnivå | A, B, C | T | ÄNDRA | Mindre viktigt än alla tre tror (se stickprovet). Ta B:s etikett "av 100 på tekniken" och C:s ärliga 85-plus-text. Stryk "Det här kostar dig förfrågningar" (C) och "det är sällan tekniken som avgör om telefonen ringer" (A): båda är påståenden om kundens affär som testet inte har mätt. |
| 25 | Stycket "Det som skiljer firmorna som får förfrågningar från de andra är två saker" | A | T | STRYK | Mätningen av 4 864 sajter mätte sidantal och analysverktyg, inte vilka firmor som får förfrågningar (HantverkssajterContent.jsx:120-152). Sambandet är Joels tes, inte ett mätresultat. Behåll de uppmätta talen: medianen 17 sidor, 31 procent under tio sidor, 45 procent utan mätverktyg. |
| 26 | Låt sajtkollen räkna sidor i sitemap och visa talet bredvid poängen | A, B | U+T | BEHÅLL | Gör bryggan till ett faktum i stället för ett påstående. Kod, medel. Efter resultatstegets ombyggnad. |
| 27 | /sajtkoll hero: rätta "ingen lagring", vi blir jag, tolv blir 14, rad om vem som står bakom med pris | A, B, C | U | BEHÅLL | Osant påstående på sidan annonserna gick till. A:s variant med "hantverkare" stryks där: testarna var blandade småföretag. |
| 28 | Villkorsblock, öppet: bindning, varför, årssumma, när man skriver på, haken, sjukdom | A, B, C | U | BEHÅLL (B:s version) | 05: 2 av 10 invändningar besvaras fullt, FAQ stängd (BFaq.jsx:67). B:s är den enda utan "du hittade hit själv". Byt "30 000 till 100 000 kr" mot "ofta tiotusentals kronor": Googles AI-ruta säger 15 000 till 80 000 (04) och en siffra som går att slå hål på är sämre än ingen. |
| 29 | "Kan jag prata med någon som redan är kund? Ja, du får numret till två." | C | T | BEHÅLL | Starkaste förtroendegreppet för en ensam konsult med 3 recensioner. Kräver två ja från kunder. |
| 30 | "Be vilken kund som helst visa sin månadsrapport" upp till hero och Kundmotorn | C | T | ÄNDRA | Joel kan inte lova vad kunderna gör. Skriv "Säg till, så ber jag en kund visa sin rapport." |
| 31 | Org.nr och F-skatt i sidfot, /om och LP | C | U | BEHÅLL | Saknas (verifierat). Hantverkare skyltar själva med F-skatt. Fem minuter. |
| 32 | /om: ny underrad, första stycke, recensioner, kort om sjukdom, produkterna sist, förslagsknapp | C (A och B varianter) | U+T | BEHÅLL (C:s text) | Sidan flest prospekt läser, och dit pitchmottagare går. A:s "åt hantverkare" stryks här: hälften av kunderna är något annat, och ChatGPT-besökarna kom via ortssidor. "Sedan 2014" verifierat i OmContent.jsx:8. |
| 33 | Niklassons-caset: kundens ord, före-bild, "Jag byggde", ny avslutning | C | U+T | BEHÅLL | Verifierat att citat saknas och att talet är 32. Kräver kundens ja. |
| 34 | Meny: sex poster utan rullgardin | A | T | ÄNDRA | Menyn är uppmätt stor, effekten är tyckande. Gör B:s lilla version nu: första raden "Ny hemsida", bort med Facebook-annonsering, AI-synlighet och WordPress, knappen "Gratis förslag". "För hantverkare" läggs till när sidan säljer något. |
| 35 | /hantverkssajter blir landningssida för utskick: jag/du, erbjudande, pris, förslagsfältet | A | U+T | BEHÅLL, och viktigare än A trodde | De 200 färdiga pitcharna går till just el, bygg, måleri och snickeri. Det här är sidan de ska länka till. Stryk A:s nya title ("Hemsida för hantverkare", 10 sök i månaden) och behåll mätningen som rubrik. |
| 36 | llms.txt: smal hantverkartext | A | T | ÄNDRA | ChatGPT-besökarna landade på ortssidor (/kristianstad, /lund, /helsingborg), alltså frågade de efter en lokal webbyrå. A:s text tar bort "webbyrå" och lägger Skåne sist. Uppdatera erbjudandet, behåll "webbyrå i Hässleholm och Skåne" först, nämn hantverk som typkund. |
| 37 | Paketrader och regeln "en tjänst och en ort räcker fem sidor" | A, B | U | BEHÅLL | Lagar ett verifierat självmål (page.js:198 mot pricing-packages.js:14). |
| 38 | /tjanster/webbutveckling: ny title, H1, ingress, bevis | A, B, C | U (sidan är fel) men | BEHÅLL minimalt, låg prio | 2 prospekt på 30 dagar. Gör tre saker: H1, ta bort offertsvaret (service-extra-content.json:62), byt knapp. A:s title "Webbyrå för hantverkare" stryks (ingen sökvolym, och Joel säger "jag"). B:s idé att slå ihop sidan med /hemsida-foretag är rätt på sikt. |
| 39 | Omordning av startsidan till nio nya sektioner, video | C | T | STRYK tills vidare | Medelstor insats på en sida 18 personer ser per månad. Gör ansiktsraden och villkorsblocket, inte hela omflyttningen. Video efter recensionerna. |
| 40 | Google-profilen: text, kategori, öppettider, 7 bilder, recensionsfrågan | C | U | BEHÅLL, topp tre | 3 recensioner uppmätt av C. Stryk "ringer aldrig upp och säljer" ur profiltexten. |
| 41 | Pausa sajtkoll-annonsen tills resultatsteget är ombyggt, stoppregler 75 klick och 30 mätningar | B (A, C liknande) | U+T | BEHÅLL | Enda sättet att få ett svar på den här volymen. |
| 42 | 30 dagars ånger eller alternativ utan bindning | B, C | T | ÄNDRA: vänta | Affärsbeslut utan data. Säg bindningen öppet först och fråga efter den i fem samtal. Se frågorna sist. |
| 43 | Städa mätningen: Umami av på egna enheter, filter Sverige, cta-telefon på LP | A, B, C | U | BEHÅLL | 41 procent av svenska besök är Joel. |
| 44 | En källa i koden för mekanism, prisrad, leveranstid, bevistal | B | U | BEHÅLL | Fyra versioner finns för att texten är hårdkodad på fyra ställen. Utan detta är motsägelserna tillbaka inom en månad. |
| 45 | Använd inte de 11 testade adresserna i D1 för kontakt | A, B, C | U | BEHÅLL | Sidan lovade "ingen lagring". Elva adresser är inte värda att bryta det löfte som hela det nya budskapet vilar på. |

---

## 4. Där förslagen säger emot varandra: mitt val

| # | Fråga | A | B | C | Val | Motivering ur underlaget |
|---|---|---|---|---|---|---|
| 1 | H1 på startsidan | Nisch i rubriken | Behåll | Person först | B | 8 besökare kan inte fälla rubriken. 10 av 19 kunder är utanför nischen. C:s variant är mindre sann än dagens. |
| 2 | Vem sajten är till för | I H1 | Ögonbrynet som i dag | Ersätts av personen | A:s ögonbryn, C:s ansiktsrad under fältet | Båda får plats. Nischen syns, H1 stänger ingen ute. |
| 3 | Huvudknappen | Testa min hemsida | Bygg mitt gratis förslag | Mät min hemsida | B på sidor som lovar ny hemsida, "Testa min hemsida" på /sajtkoll | Löftet och knappen ska säga samma sak (01 A1 fynd 1). På /sajtkoll fungerar testet (62 procent), rör det inte. |
| 4 | "Jag ringer aldrig upp, du hittade hit själv" | Ja | Nej, uttryckligen | Ja | B | Joel gör kalla utskick med uppföljningar och har 200 pitchar klara. Meningen vore just "säger en sak, gör en annan" (05, rädsla 1). |
| 5 | Påminnelser efter förslaget | Hör inte av mig | En uppföljning, sagd i förväg | Inga påminnelser | B | Ett obesvarat förslag utan uppföljning är bortkastat arbete. Löftet ska matcha det Joel faktiskt gör. |
| 6 | LP-formuläret | Tre fält | Ett fält | Fyra fält med bättre etiketter | B | 0 av 44 med dagens formulär. Pröva det som skiljer sig mest, med stoppregel. |
| 7 | Antal annonssidor | En | Tre | En med två H1 | En komponent, H1 per annonsgrupp, en gemensam stoppregel | Trafiken räcker inte till tre mätningar. |
| 8 | Startsidans title | Hantverkare | (orörd) | Behåll | C | Sökorden finns inte (10 i månaden). |
| 9 | Menyn | Sex poster, ingen rullgardin | Döp om och rensa | Döp om första raden, byt knapp | B nu, A senare | Går inte att mäta, gör det billiga. |
| 10 | /om, underrad | Åt hantverkare och lokala firmor | Åt företag som lever på förfrågningar | Åt småföretag, själv, sedan 2014 | C | /om läses av namnsökare och ChatGPT-besökare från ortssidor, inte bara hantverkare. |
| 11 | llms.txt | Smal hantverkartext | (orörd) | (orörd) | Lokal webbyrå först, hantverk som typkund | ChatGPT-trafiken kom via ortssidor. Den enda källa som fungerar ska inte smalnas av på en gissning. |
| 12 | När annonserna slås på | När LP och sajtkoll är rättade | Samma, med stoppregler | Dessutom helst 10 recensioner | B, plus två villkor till | Först ska pitcharna ut (0 kr per kontakt mot ca 120 kr per klick) och söktermsrapporten läsas. Därefter 75 klick som test, inte mer. |
| 13 | De 11 adresserna i D1 | Använd inte | Inte med hänvisning till testet | Använd inte | A och C | Se dom 45. |
| 14 | Vad en byrå kostar | (orörd) | 30 000 till 100 000 överallt | (orörd) | Ingen siffra: "ofta tiotusentals kronor" | Två spann finns i dag, Google säger ett tredje. |
| 15 | Leveranstid | cirka 10 dagar | två veckor | ungefär tio dagar | "inom två veckor efter ditt ja" tills Joel säger annat | Täcker både "Dag 10" och "1-2 veckor". Ett löfte som hålls slår ett som imponerar. |
| 16 | Sajtkollens omdöme vid 60 till 84 | Tekniken är okej, sällan den som avgör | Grunden håller, tre saker kostar besökare | Tekniken är okej, mätningen ser inte det viktigaste | B:s etikett "på tekniken", utan påståenden om kundens affär | Se stickprovet: omdömet var inte huvudfelet. |

---

## 5. Bästa H1 per sida, putsad, och kontroll av löftena

| Sida | Val | Varför |
|---|---|---|
| / | Behåll: "Din nya hemsida, färdig innan du betalar ett öre." | Sann om första fakturan kommer vid lansering. Unik i ordalydelse bland 10 konkurrenter. Låter som en människa. |
| /lp/hemsida-foretag (annonsgrupp hemsida) | "Ny hemsida till ditt företag. Se den färdig innan du betalar." | Nästan dagens H1, delad i två meningar. Rubriken var aldrig felet på LP:n, det var underrubriken, steg 1 och formuläret. |
| samma sida, annonsgrupp webbyrå | "Webbyrå i Skåne som bygger din hemsida innan du betalar." | B:s. Sökordet står i rubriken. Kräver att annonsgruppen bara visas i Skåne, annars är rubriken osann. Underrad: "Byrån är en person. Jag heter Joel Stolt och bygger, svarar och tar ansvar själv." |
| /sajtkoll | Behåll: "Hur bra fungerar din hemsida?" | Sidans första steg är det enda på sajten med uppmätt bra utfall (10 av 16 körde testet). Rör inte det som fungerar. |
| /tjanster/webbutveckling | "Ny hemsida till ditt företag. Jag bygger den först, du betalar sen." | A:s tanke med B:s ord. Bokstavligt sann, till skillnad från "du ser den innan du bestämmer dig". |
| /om | H1 "Joel Stolt" kvar. Underrad: "Jag bygger och sköter hemsidor åt småföretag. Själv, sedan 2014." | C:s. Årtalet finns i OmContent.jsx:8. |
| /hantverkssajter | "Jag mätte 4 864 svenska hantverkssajter." | A:s. Behåll även title kring mätningen. |
| /hemsida-foretag | "Hemsida till företaget. 0 kr i start, från 1 190 kr i månaden." | Ingen av de tre såg att dagens H1 lovar ett utfall: "En hemsida som ger dig kunder" (page.js:159). Det kan Joel inte garantera. "från" saknas också. |
| /priser | "Öppna priser. Färdig hemsida innan du betalar." | Bara ordbytet sajt till hemsida. |

### Löften i förslagens copy som Joel inte kan hålla, eller inte vet om han kan hålla

| Text | Var | Problem | Gör så här |
|---|---|---|---|
| "Jag ringer aldrig upp och säljer. Du hittade hit själv." | A 2.1, 2.4, 2.5. C 4.1, 4.5, 4.9 | Osant för pitchmottagare | Stryk. "Säger du nej hör du inte av mig igen." |
| "så du hittas när någon söker elektriker i Hässleholm" | A 2.1 | Antytt placeringslöfte | "så att du kan synas på varje tjänst och ort" |
| "En hemsida som ger dig kunder" | live, /hemsida-foretag | Utfallslöfte | Se tabellen ovan |
| "Det här kostar dig förfrågningar." | C 4.4, och live i HeroKoll.jsx:216 | Testet mäter teknik, inte förfrågningar | "[poäng] av 100 på tekniken. Här finns mest att hämta." |
| "Det som skiljer firmorna som får förfrågningar från de andra" | A 2.4 | Mätningen visar inte det | Behåll bara de uppmätta talen |
| "Be vilken kund som helst visa sin månadsrapport" | C 4.1 (finns redan i BFaq.jsx:52) | Joel styr inte kunderna | "Säg till, så ber jag en kund visa sin rapport." |
| "37 offertförfrågningar" skrivet som fast tal | A, B, C | Live-talet kan sjunka | Hämta alltid live. Skriv aldrig talet i annonstext. |
| "Om två arbetsdagar" för ett gratis förslag | alla | Håller det vid fem förfrågningar samma vecka plus pitchsvar? | Se fråga 8 sist |
| "live inom [två veckor]", "[cirka 10 dagar]" | A, B, C | Tre versioner finns redan | Ett tal, Joels beslut |
| "Inget förlängs ett år i taget", "domänen står på din firma", "egna inloggningar", "färdiga filer", "mejlen rör jag inte" | A, B, C, alla inom hakparentes | Ingen har läst avtalsmallen | Publicera bara det som står i avtalet |
| "5,0 på Google" | C, från 10 recensioner | Sant bara så länge snittet är 5,0 | Hämta eller uppdatera för hand, skriv aldrig ett betyg som inte stämmer |

Språkkontroll: jag har läst all föreslagen copy i A, B och C. Inga långa tankstreck eller typografiska citattecken i själva texterna (förslagen grep-kontrollerade sig själva, och jag såg inga). Tonen är genomgående mänsklig. Två slängar kan strykas utan att något går förlorat: "Det är så man hittas." (C, Arkipel-kortet) och "Inte en skiss i en PDF utan en riktig hemsida" (B, steg 2). C:s andra kundmejl innehåller punktlistetecken som följer med vid inklistring, byt dem mot vanliga rader.

---

## 6. Vad ALLA tre missade

1. **Utskicksmotorn står still.** UPPMÄTT: 200 färdiga pitchar till hantverks-, el- och byggbolag (132 starka) har legat oskickade sedan 2026-08-11, och demo-utskicken har skickat 1 pitch sedan juli med 4 utkast som väntar på Joels godkännande sedan 08-18 (se 2.3). Alla tre skrev att utskick rimligen är motorn. A föreslog till och med att bygga en ny lista på ca 600 firmor ur hantverksmätningen, medan 200 färdiga mejl redan finns. Det här är det enskilt största fyndet i hela genomgången.

2. **Ingen vet om leadkedjan fungerar efter ombyggnaden 8 september.** UPPMÄTT (02): alla formulär går sedan 2026-09-08 genom D1-tabellen kvota_form_outbox, som har 0 rader. De sju testmejlen i Resend är från 6 och 7 september, alltså före. Sedan ombyggnaden finns varken ett test eller en riktig förfrågan som bevisar att ett ifyllt formulär når Joels inkorg. Joels egen regel säger att formulär ska verifieras i Resend-loggen. Det ska göras för alla fyra formulären (kontakt, boka, LP, förslag) innan ett enda mejl eller annonsklick skickas mot sajten. Jag har inte testat själv, eftersom uppdraget förbjuder ändringar och formulärutskick. EJ VERIFIERAT.

3. **Annonsanalysen vilar helt på Umami. Ingen har öppnat Google Ads.** Faktisk kostnad, faktiska klick, CPC och framför allt söktermsrapporten är okända. Kampanjen heter sok-sajtkoll och 16 av 63 spårade klick gick till ett gratisverktyg. Det tyder på att en del av budgeten köpte nyfikna testare, inte hemsideköpare, men det är en gissning tills söktermerna är lästa. Umami laddas dessutom först efter window.load (app/layout.js:198), så den som lämnar innan sidan laddat klart syns inte alls. Skillnaden mellan Google Ads klick och Umamis 63 besök är det närmaste en mätning av mobilens laddtapp som går att få utan nya verktyg. Ads-planens egen grind (CPL under 500 kr efter sex veckor) prövades aldrig: annonserna gick i tio dagar. Varför de stoppades vet jag inte.

4. **Ingen mäter steget förslag till kund.** Alla tre gör "gratis förslag" till huvudknapp överallt. Varje förslag är timmar av obetalt arbete. Pitchfabrikens README anger ca 7 procent historisk konvertering för demos (overifierat). Om det stämmer även för inkommande förfrågningar krävs ca 14 förslag per kund, och då kostar en kund mer i arbetstid än Bas ger första året. Troligen konverterar den som själv bett om ett förslag mycket bättre än den som fått ett oombett, men det vet ingen. Det behövs en enkel logg: datum för förfrågan, datum skickat, svar, utfall. Utan den går det aldrig att säga om erbjudandet bär sig.

5. **Kapaciteten bakom "två arbetsdagar".** Löftet står i all ny copy. Om pitcharna ger 5 ja i veckan och annonserna 2 till är det sju förslag på en vecka för en person som också sköter 19 kundsajter. Ett brutet tvådagarslöfte river mer än texten bygger (C säger det, men ingen sätter ett tak).

6. **Telefonen, på riktigt.** A och B nämner att numret saknas i mobilens första skärm, C inte alls. Ingen föreslår det enkla: samma fasta rad i mobilens nederkant som LP:n redan har ("Ring" och "Gratis förslag") på startsidan, /priser, /om och i sajtkollens resultat. UPPMÄTT: på mobil ligger numret inne i menyn (Header.jsx:635-651) och telefonklick på LP:n mäts inte. Att hantverkare hellre ringer är ANTAGET i alla tre förslagen, men kostnaden för att pröva är en komponent som redan finns.

7. **Återbesökaren.** En annonsbesökare kom tillbaka 16 gånger på fyra dagar, såg /priser 11 gånger och öppnade kalendern (02). /priser har varken förslagsfält eller ansikte, bara "Boka genomgång". B lägger fältet där, men ingen säger det uppenbara: kolla samtalslogg, kalender och inkorg 28 till 31 augusti. Det är den enda möjliga heta köparen i hela underlaget.

8. **H1 på /hemsida-foretag lovar ett utfall.** "En hemsida som ger dig kunder" (page.js:159). Alla tre granskade ordval och motsägelser men ingen flaggade den. Den är just den sortens löfte som 05 visar att brända köpare reagerar på.

9. **Erbjudandet självt är oprövat mot kall trafik.** Alla tre utgår från att erbjudandet är bra och att vägen dit läcker. Belägg för: 19 kunder i drift (hur många på abonnemanget, och hur de kom in, vet ingen av oss). Belägg emot: 0 av ca 56 annonsklick, och Joel är dyrast per månad av abonnemangsaktörerna i underlaget (Värmlandswebb 499 utan bindning, Vizme 699 utan bindning, Groundwork 995 med 36 månader, Brucy 1 495). Stoppregeln på 75 klick är därför ett test av ERBJUDANDET, inte av orden. Blir det 0 igen efter att LP:n är rättad är det pris, bindning eller trafikkälla som ska ändras, inte rubriken.

10. **Små saker ingen såg:** annonser och länkar som pekar på stoltmarketing.se utan www får en 301 till www först (uppmätt med curl 2026-09-19), ett onödigt hopp på mobil. C:s profiltext för Google innehåller löftet "ringer aldrig upp och säljer". Och recensionsmejlet i C går bra att skicka i dag, det kräver ingen av de andra ändringarna.

Det jag prövade men inte kunde belägga: mobil laddtid på den animerade startsidan och på LP:n. PageSpeed-API:ets gratiskvot var slut. Serversvaret är snabbt (0,16 till 0,81 s till första byte inklusive omdirigeringen, 16 till 19 skriptfiler per sida), men det säger inget om hur sidan renderas på en telefon. EJ VERIFIERAT.

---

## 7. Slutlig plan, viktigast först (högst 10 steg)

Ordning att GÖRA det i skiljer sig lite från viktordningen: steg 3 och 4 tar en kväll och ska vara klara innan första pitchen i steg 1 går, eftersom mottagarna går in på sajten.

### Steg 1. Skicka de färdiga pitcharna, 25 i veckan
Insats: en kväll för första omgången, sedan ca en timme per vecka. Inget nytt behöver skrivas.
Gör: kör om live-kontrollen på de 132 starka (iakttagelserna är från 10 till 11 augusti), välj 25 aktiebolag, skicka med skicka.py, verifiera levererat i Resend. Godkänn eller stryk de fyra demo-utkasten som legat sedan 18 augusti. Länka pitcharna till /hantverkssajter när steg 9 är klart, till startsidan innan dess.
Mäts: svar per 100 skickade, antal som ber om förslag, antal kunder. Grind: under 2 positiva svar på de första 75 skickade betyder att pitchen ska skrivas om, inte sajten.

### Steg 2. Recensioner och Google-profilen: från 3 till 15
Insats: en kväll för mejlen, en halvtimme för profilen.
Gör: personlig fråga till alla 19 kunder, börja med bygg-, flytt- och markkunderna. Byt huvudkategori, text, öppettider, ladda upp de 7 bilderna i docs/gbp.
Mäts: antal recensioner per vecka. Från 10: raden "5,0 på Google, [antal] omdömen" under fältet. Följ "webbyrå hässleholm" och "webbyrå kristianstad" i rank-snapshot.

```text
Hej [Förnamn],

En snabb fråga. Jag har precis börjat samla omdömen på Google, och ditt skulle betyda mycket. Det tar en minut:

[recensionslänken, kontrollera att den öppnar rätt profil]

Skriv precis som det var, kort går bra. Hur det var att jobba ihop och om hemsidan gjort någon skillnad räcker gott.

Allt gott,
Joel
```

```text
Jag heter Joel Stolt och bygger hemsidor åt småföretag i Hässleholm, Skåne och resten av Sverige. Du får se din nya hemsida innan du bestämmer dig: jag bygger ett förslag du kan klicka runt i, gratis och utan möte. Gillar du det kostar det 0 kr i start och från 1 190 kr i månaden, med drift, ändringar och support inräknat. 12 månader, sedan månad för månad. Du äger hemsidan och domänen. Jag bygger själv och svarar själv inom 24 timmar på vardagar.
```

### Steg 3. Bevisa att en förfrågan kommer fram, och städa mätningen
Insats: en timme.
Gör: skicka ett test genom vart och ett av de fyra formulären (kontakt, boka, annonssidan, förslagsfältet) och kontrollera i Resend-loggen att mejlet levererats. Stäng av Umami på egna enheter (localStorage umami.disabled = 1), filtrera på Sverige, lägg cta-telefon på annonssidans telefonlänkar. Exportera söktermsrapport, klick och kostnad ur Google Ads för 22 till 31 augusti.
Mäts: fyra levererade mejl i Resend. Skillnaden mellan Google Ads klick och Umamis 63 besök visar hur många som lämnade innan sidan laddat.

### Steg 4. Ta bort det som är osant eller säger emot sig självt
Insats: en till två timmar. Ingen nedsida, allt verifierat i koden.
Mäts: grep efter de gamla strängarna ger 0 träffar.

```text
/sajtkoll, raden under fältet (i dag: Inga gissningar, ingen lagring.):
Allt som rapporteras läses ur ett riktigt svar från din hemsida. Jag sparar resultatet så att du kan dela länken, inget annat.

Under mejlfältet på startsidan (i dag: Ingen bindning, inga påminnelser.):
Förslaget är gratis och du förbinder dig inte till något. Säger du nej hör du inte av mig igen.

Annonssidan, steg 1 (i dag: Boka en kostnadsfri genomgång):
Skriv din adress och din mejl
Det tar en minut. Inget möte, inget samtal. Har du ingen hemsida skriver du företagsnamnet.

Annonssidan, underrubrik (i dag börjar den med Enterprise-kvalitet):
Skriv din webbadress eller ditt företagsnamn. Om två arbetsdagar klickar du runt i din nya hemsida. Gratis och utan möte.

H1 på /hemsida-foretag (i dag: En hemsida som ger dig kunder ...):
Hemsida till företaget. 0 kr i start, från 1 190 kr i månaden.
```

Samma runda: 32 blir live-talet, "Upp till sex sidor" blir fem, "en månads uppsägning" blir "till nästa månadsskifte", offertsvaret i service-extra-content.json:62 tas bort, "hela prislistan" på /priser får tillägget om webbutiker, Sajtvakten avbockad, "150+", "Hundratals sajter" och "Enterprise-kvalitet" bort, "vi" blir "jag" på /sajtkoll, tolv blir 14.

### Steg 5. Prisraden och villkoren vid priset, överallt
Insats: liten, men först när Joel bekräftat moms, när avtalet skrivs och leveranstid (frågorna sist).
Mäts: går inte att isolera. Kontroll: inget pris på sajten står utan bindning (grep).

```text
0 kr i start. Från 1 190 kr/mån [exkl. moms]. 12 månader, sedan månadsvis. Du äger hemsidan.
```

```text
Villkoren, innan du frågar

Är det här ett sånt abonnemang man inte kommer ur?
Nej. Bindningen är 12 månader, sedan är det månad för månad. [Inget förlängs ett år i taget.] Du säger upp med ett mejl. Hemsidan, texterna och domänen är dina.

Varför 12 månader?
För att jag inte tar betalt för bygget. En byrå fakturerar ofta tiotusentals kronor innan du har sett något. Jag bygger först och sprider kostnaden på tolv månader. Det är de månaderna som betalar jobbet.

Vad kostar det på ett år?
Bas: 12 x 1 190 = 14 280 kr. Bredd: 12 x 1 990 = 23 880 kr. [Priserna är exklusive moms.] Då ingår bygget, drift, säkerhet, domän och ändringar. Vill du ha något nytt byggt får du priset innan jag börjar.

När skriver jag på, och när börjar jag betala?
[Du skriver på när du har sett förslaget och sagt ja, inte innan. Första fakturan kommer när hemsidan är live på din domän.]

Vad är haken med gratis?
Ingen. Förslaget är mitt sätt att visa hur jag jobbar. Säger du nej kommer ingen faktura, och du hör inte av mig igen.

Du är ensam. Vad händer om du blir sjuk eller slutar?
Hemsidan står kvar. Den ligger hos Cloudflare och rullar utan att jag rör den. Är jag sjuk får ändringar vänta, och då säger jag till. [Domänen står på ditt företag.] Slutar jag helt får du hemsidan som färdiga filer som en annan webbutvecklare kan ta över.
```

### Steg 6. Sajtkollens resultat: fråga efter förslaget
Insats: medel. Görs före nästa annonskrona.
Mäts: mejl (förslag eller rapport) delat med klara annonsmätningar i D1. Grind: minst 4 på 30, annars stängs sajtkoll-annonsen för gott.

```text
[poäng] av 100 på tekniken.

Den här kollen mäter 14 tekniska saker. Den mäter inte hur många sidor du har som kan dyka upp när någon söker på din tjänst och din ort. Det tittar jag på när jag bygger ditt förslag.

Vill du se din hemsida byggd på nytt?
Jag bygger startsidan och en tjänstesida åt dig, med dina tjänster och dina orter, på en riktig länk. Klart om två arbetsdagar. Det kostar ingenting och du förbinder dig inte till något.

Knapp: Bygg mitt gratis förslag

Säger du nej hör du inte av mig igen. Gillar du den: 0 kr i start, från 1 190 kr/mån [exkl. moms], 12 månader och sedan månadsvis. Du äger hemsidan.

Textlänk: Inte redo för det? Mejla mig rapporten i stället.
Kryssruta, tom från start: Mät om min hemsida varje månad och mejla vad som ändrats. Avslutas med ett klick.

Sist, hopfällt: Visa alla 14 kontroller
```

Rad i sidans hero, med liten bild på Joel:

```text
Jag heter Joel Stolt och bygger hemsidor åt småföretag. 0 kr i start, från 1 190 kr/mån [exkl. moms]. Du ser hemsidan innan du betalar.
```

### Steg 7. Ett förslagsfält, samma komponent överallt
Insats: medel. Ersätter annonssidans fyra fält och läggs på startsidan, /priser, /om, case-sidorna och tjänstesidan. Text utan punkt hoppar över mätningen, så den utan hemsida kommer in. Fast rad i mobilens nederkant med "Ring" och "Gratis förslag" på samma sidor. Ansiktsrad under fältet.
Mäts: på annonssidan, se steg 10. På övriga sidor bara antal lead-forslag per kvartal, och en logg över varje förslag: förfrågan, skickat, svar, utfall.

```text
Platshållare: dittforetag.se eller företagsnamn
Knapp: Bygg mitt gratis förslag
Rad under: Steg 1 av 2. Inget möte. Har du en hemsida mäter jag den på köpet, det tar tio sekunder.
Reservrad: Hellre prata först? Ring [telefonnumret].
Ansiktsrad: Joel Stolt bygger och svarar själv. Svar inom 24 timmar på vardagar.
Ögonbryn på startsidan: För hantverkare och lokala tjänsteföretag
```

```text
Tack. Inom två arbetsdagar har du en länk i mejlen.

Jag läser din hemsida, dina tjänster och din ort och bygger något du kan klicka runt i. Jag mejlar länken och hör av mig en gång till veckan efter. Sedan är det tyst om du inte svarar.

Vill du hellre prata innan dess når du mig på [telefonnumret].
```

### Steg 8. /om och Niklassons-caset: sidorna folk kollar upp dig på
Insats: medel. Kräver två kundcitat och ett ja till före-bild.
Mäts: går inte att mäta på trafiken. Följ per kvartal hur stor andel av dem som läst /om som når kontakt eller förslag.

```text
Underrad på /om: Jag bygger och sköter hemsidor åt småföretag. Själv, sedan 2014.

Första stycket: Jag har byggt hemsidor i över tio år, åt allt från flyttfirmor och byggföretag till AcadeMedia, Sveriges största utbildningsföretag. Idag sköter jag 19 kundsajter. Jag bygger dem, mäter dem varje månad och svarar själv när du hör av dig.

Sist på sidan och i sidfoten: Stolt Marketing · Joel Stolt · Hässleholm · Org.nr [xxxxxx-xxxx] · Godkänd för F-skatt

Avslut på caset: Vill du se din egen hemsida ombyggd? Jag bygger ett förslag på två arbetsdagar. Gratis, utan möte. Du pratar med mig som byggde den här.
```

### Steg 9. /hantverkssajter blir landningssidan för pitcharna
Insats: medel. Jag och du i stället för vi och er, erbjudande och prisrad, förslagsfältet i stället för länken till /kontakt. Case-texterna på startsidan utan fackord i samma runda.
Mäts: märk pitchlänkarna med utm_source=utskick. Besök, fältanvändning och lead-forslag per 100 skickade pitchar.

```text
H1: Jag mätte 4 864 svenska hantverkssajter.

Underrubrik: Elektriker, målare, snickare och byggfirmor över hela landet. De flesta hemsidor fungerar. Hälften har 17 sidor eller färre, nästan var tredje har under tio, och 45 procent mäter inte vad hemsidan ger. Här är vad mätningen visade, och vad jag gör åt det.

Slutsektion: Var ligger din hemsida i jämförelsen? Skriv in adressen så testar jag den på tio sekunder. Vill du sedan se en ny, med en sida för varje tjänst och ort, bygger jag ett förslag på två arbetsdagar. Gratis och utan möte.
```

```text
Niklassons Flytt: En sida för varje tjänst och ort i Skåne. Varje förfrågan räknas, så att firman ser vad hemsidan ger.
Arkipel Entreprenad: Tre gånger fler sidor än en vanlig byggfirma har, en per tjänst och ort.
Premie Bygg: Jag testade hela vägen från formulär till inkorg, så att ingen offertförfrågan försvinner.
Norrlands Gräv & Transport: Hemsidan hade försvunnit ur Google utan att någon märkt det. Nu syns den igen, med en sida per tjänst och ort.
```

### Steg 10. Annonser som test av erbjudandet, inte som motor
Insats: liten när steg 3 till 7 är klara. Budget: 75 klick, ca 9 000 kr (ANTAGET 120 kr per klick).
Gör: bara exakt och fras på hemsida företag, ny hemsida företag och webbyrå plus Skåneort. Slutadress med www. H1 styrs av annonsgruppen. Sajtkoll-gruppen slås på separat mot grinden i steg 6. Parallellt: visa annonssidan för fem småföretagare du inte känner och fråga vad som får dem att tveka.
Mäts: lead-forslag från cpc-besök. 3 eller fler på 75 klick: fortsätt. 1 till 2: fortsätt till 150. 0: stäng av. Då är det erbjudandet (pris, bindning) eller trafikkällan som ska ändras, inte rubriken.

### Det som medvetet INTE står i planen
Ny H1 på startsidan, ny title på startsidan, omflyttning av startsidans sektioner, video, tre separata annonssidor, smal hantverkartext i llms.txt, meny utan rullgardin, 30 dagars ångerrätt. Skäl står i avsnitt 3.

---

## 8. Fortfarande overifierat

1. Att leadkedjan fungerar efter ombyggnaden 2026-09-08. Outboxen har 0 rader och inget test är gjort sedan dess. Jag har inte testat (uppdraget tillåter inga formulärutskick).
2. Mobil laddtid och Lighthouse för startsidan och annonssidan. PageSpeed-API:ets kvot var slut. Bara serversvaret är mätt (0,16 till 0,81 s).
3. Att annonssidans formulär ligger under vecket på mobil (B). Koden visar att det ligger efter all herotext, men jag har inte sett sidan i en telefon.
4. B:s slutsats "ett fält fungerar, fyra fält fungerar inte". Två sidor med olika erbjudande, sökavsikt och fält går inte att jämföra på fältantal.
5. Att poängen var skälet till att 0 av 11 gick vidare från sajtkollen. Mitt stickprov talar emot: 9 av 11 fick ett omdöme som sa att något läcker.
6. Pitchfabrikens "historiska konvertering cirka 7 procent". Står i README utan källa. Mina svarsfrekvenser på 3 till 8 procent är antaganden.
7. Hur de 19 kunderna faktiskt kom in (utskick, rekommendation, sajt). Avgör hur hela planen ska vägas.
8. Google Ads: faktisk kostnad, antal klick, CPC, söktermer, matchningstyper, dagens annonstexter och varför kampanjen stoppades 31 augusti. Inget av det finns i repot.
9. Recensionsantalet 3 och profilens kategori och öppettider. Mätt av C via DataForSEO, inte ommätt av mig. Att kategorin heter Webbdesigner på svenska är antaget.
10. A:s klassning att 9 av 19 kunder är hantverk. Jag räknade själv på firmanamnen och får 9 till 10, men det är en klassning på namn.
11. Alla villkor inom hakparentes: moms, när avtalet skrivs, när de tolv månaderna börjar, ingen årsförlängning, domän på kundens företag, egna inloggningar, export som filer, att mejlen lämnas orörd, leveranstid.
12. Att hantverkare hellre ringer än mejlar. Antaget i alla tre förslagen, inte mätt.
13. Att en smalare llms.txt ger fler ChatGPT-besök. Nio personer på 90 dagar är underlaget.
14. Att "ett öre" och "gratis" väcker minnet av lockbeten. Ett sökutdrag i 05, svagt.
15. Att misstron mot katalogbolagens avtal förs över på Joels erbjudande. 05:s eget förbehåll: 15 källor, mest om katalogbolag.
16. Om återbesökaren 28 till 31 augusti var en köpare.
17. Att pitcharnas iakttagelser från 10 till 11 augusti fortfarande stämmer.

## 9. Frågor bara Joel kan svara på, med mitt föreslagna svar

1. Hur kom de 19 kunderna in? Förslag: jag utgår från utskick och rekommendationer tills du säger annat, och planen är rangordnad efter det.
2. Varför har de 200 pitcharna inte gått ut sedan 11 augusti? Förslag: kör om kontrollen på de starka och skicka 25 aktiebolag nästa vardag.
3. Är priserna exklusive moms? Förslag: ja, och det skrivs ut överallt där priset står.
4. När skrivs avtalet, och när börjar de tolv månaderna? Förslag: avtal vid ja till förslaget, första faktura och månad ett vid lansering.
5. Vilken leveranstid gäller? Förslag: "inom två veckor efter ditt ja", samma på alla sidor.
6. Står kundens domän på kundens företag, får kunden egna inloggningar, gäller export som filer alla, och finns en reservperson? Förslag: publicera bara det som står i avtalsmallen. Finns ingen reservperson skrivs ingenting om det.
7. En uppföljning efter skickat förslag, eller ingen? Förslag: en, veckan efter, sagd i förväg i tack-texten.
8. Håller "två arbetsdagar" om det kommer fem förfrågningar samma vecka? Förslag: behåll löftet, sätt ett eget tak på tre förslag i veckan och svara övriga samma dag med ett datum.
9. 30 dagars ångerrätt eller ett alternativ utan bindning? Förslag: vänta. Säg bindningen öppet först och fråga efter den i fem samtal.
10. Kom det ett samtal, en bokning eller ett mejl 28 till 31 augusti? Förslag: kolla samtalslogg, kalender och inkorg i dag.
11. Vad sökte annonsklicken på, och vad kostade de? Förslag: exportera söktermsrapporten innan nästa annonskrona. Min gissning är att bred matchning köpte testare och folk som letade Wix.
12. Får de elva testade adresserna i D1 användas? Förslag: nej.

---

## Kort svar till Joel

Det du missar är inte en rubrik. Du har 200 färdiga pitchar till hantverksbolag som legat oskickade i 39 dagar, 3 Google-recensioner mot 62 och 67 hos dem som syns i kartan, och ingen som vet om formulären fungerar efter ombyggnaden 8 september. Sajten har 23 köpbesökare i månaden. Ett perfekt budskap på den trafiken ger högst en lead till per månad och går inte att mäta.

Gör så här: skicka pitcharna, samla recensionerna, bevisa att en förfrågan kommer fram, och ta bort det sajten säger som är osant eller säger emot sig självt. Skriv sedan villkoren vid priset, låt sajtkollens resultat fråga efter förslaget, och gör /om och caset till sidor som håller när någon kollar upp dig. Rör inte startsidans H1. Slå inte på annonserna förrän det är gjort, och då som ett test på 75 klick.

Av förslagen: B har rätt om vad sajten ska be om och var ensam om att se att "jag ringer aldrig upp" är osant. C har rätt om vad som får en främling att lita på dig. A har rätt om vem utskicken ska gå till, men fel om att skriva det i H1.

Status: KLAR 2026-09-19.
