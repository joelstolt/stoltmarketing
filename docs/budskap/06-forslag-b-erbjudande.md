# Förslag B: Erbjudande, CTA-trappa och Ads-matchning först

Status: KLAR 2026-09-19. Alla sex delar skrivna. Ingen kod ändrad, inget byggt, inget deployat.

Vinkel: löftet "färdig innan du betalar" är starkt, men vägen dit läcker. Den här filen prövar vad sajten ber besökaren göra, sida för sida, och bygger om det till en trappa med EN huvudhandling per sida, samma ord i annons, sökord och rubrik, och villkor som sägs högt i stället för i en stängd FAQ.

Läsregel: UPPMÄTT = siffra eller citat ur 01-05 eller ur koden (fil:rad). ANTAGET = min bedömning. Små tal är små tal. Nästan allt nedan vilar på 8 till 56 händelser, så förslagen motiveras med logik och kod, inte med statistik.

## Checkpoint-logg
- [x] Utfil skapad
- [x] Underlag 01-05 läst
- [x] Kod läst: app/b/BContent.jsx, components/b/HeroKoll.jsx, components/b/SaGarDetTill.jsx, components/b/BFaq.jsx, app/lp/hemsida-foretag/LpHemsidaContent.jsx + layout.js, app/sajtkoll/page.js, app/api/sajtkoll/route.js (validering :60-77, poäng och omdöme :545-563), app/tjanster/webbutveckling (Content + layout), components/Header.jsx, app/om/OmContent.jsx, lib/pricing-packages.js, lib/local/data.js, ADS-OCH-OMBYGGNAD-PLAN.md avsnitt E, ERBJUDANDE-ANALYS.md slutdel
- [x] 1. Diagnos
- [x] 2. CTA-trappan
- [x] 3. Färdig copy (startsida, tre LP-varianter med annonstext, tjänstesidan, sajtkollens resultatsteg, villkorssektion, /om, meny)
- [x] 4. Bort eller flyttas
- [x] 5. Det som inte är budskap
- [x] 6. Mätplan med stoppregler
- [x] Kontroll: inga långa tankstreck eller typografiska citattecken i filen (grep gav 0), alla annonsrubriker högst 30 tecken och beskrivningar högst 90 (räknat med skript)

---

## 1. Diagnos: vad Joel missar (viktigast först)

**1. Det finns nästan ingen att övertyga, och de som köptes in fick fel fråga.**
UPPMÄTT: 23 svenska köpbesökare per månad utan annonser. Nya startsidan har setts av 8 riktiga svenskar på 13 dagar. Riktiga leads via sajten på 30 dagar: 0 (02, sammanfattningen). Ett bättre budskap på den trafiken ger högst ca 1 lead till per månad och går inte att mäta. De enda sidor där orden spelar roll i dag är de två annonserna landar på: ca 56 mänskliga klick gav 0 formulär. Därför handlar resten av den här filen mest om /lp/hemsida-foretag och /sajtkoll, inte om startsidans rubrik.

**2. Ingen sida med trafik ber om det sajten lovar.**
UPPMÄTT: löftet är en ny hemsida. Startsidans knapp säger "Mät min sajt" (HeroKoll.jsx:193) och förslagsformuläret visas först efter mätningen (:262-286). /sajtkoll erbjuder efter resultatet rapport, bevakning, konkurrentjämförelse och möte, aldrig förslaget (app/sajtkoll/page.js:343-441). Menyn, /priser, /om, /hemsida-foretag och /tjanster/webbutveckling säger "Boka genomgång" och går till /boka, som inte nämner förslaget alls (01 A10). Händelsen lead-forslag: 0 gånger. Sajtens starkaste erbjudande går alltså bara att beställa på två sidor, och på den ena är det gömt bakom ett annat verktyg.

**3. Sajtkollen ger bort allt, säger att sajten duger och frågar sedan om ett möte.**
UPPMÄTT: 10 av 16 annonsbesökare körde kollen (62 %), 11 mätningar blev klara, 0 av 11 tog nästa steg. Åtta av elva fick 71 poäng eller mer. API:t svarar då "Grunden finns, men flera saker läcker besökare i dag" eller, från 85, "Er sajt står sig bra. Det som återstår är detaljer." (route.js:550-555). Alla 14 rader visas direkt på sidan, så rapporten på mejl tillför inget (0 nya prenumeranter på 30 dagar). ANTAGET men logiskt: kollen mäter 14 tekniska saker, medan Joels eget huvudargument för en ny hemsida är något helt annat, nämligen en sida per tjänst och ort (app/hemsida-foretag/page.js:198-201). Verktyget mäter inte det Joel säljer. Obs: huvudsessionens "16 körningar gav 1 lead" är enligt 02 sexton knapptryck och ett test från Joels egen Mac. Riktigt utfall: 0 av 11.

**4. Ett fält fungerar, fyra fält fungerar inte, och annonsens ord står inte i rubriken.**
UPPMÄTT: samma annonsvecka, samma typ av besökare. På /sajtkoll (ett fält, svar direkt) körde 8 av 11 mobilbesökare kollen. På /lp/hemsida-foretag (fyra fält, formuläret under vecket på mobil) studsade 24 av 30 mobilbesökare och 0 av 44 skickade något. Median tid för dem som alls gick vidare: 14 sekunder. Annonsgruppen webbyra (17 klick) landar på en sida där ordet webbyrå kommer först i sektion 8 (LpHemsidaContent.jsx:584). Prisannonsen landar på ett ankare mitt på sidan, utan rubrik, löfte eller formulär i bild (7 besök på #priser). Underrubriken börjar med "Enterprise-kvalitet till småföretag" (:272). Små tal, men allt pekar åt samma håll.

**5. Villkoren sägs i fel ordning, och mekanismen i fyra versioner.**
UPPMÄTT: köparens vanligaste rädsla i urvalet är att säljaren lovar en sak och avtalet säger en annan (7 av 15 källor), näst vanligast är inlåsning (6 av 15). Joels form (0 kr, månadspris, bindning) är samma form som avtalen folk varnar varandra för. Ändå står 12 månader inte vid priset i hero eller slutsektion (BContent.jsx:255, :445), "Ingen bindning, inga påminnelser" står under mejlfältet (HeroKoll.jsx:291), ordet moms finns inte på någon säljsida och summan 14 280 kr skrivs aldrig ut (05). Första steget är "utan möte" på startsidan, "15 till 20 minuter över video" på LP:n och "en halvtimme" på /hemsida-foretag. Leveranstiden är 10 dagar, 1-2 veckor eller 2-4 veckor. Den som jämför två sidor får exakt den känsla recensenterna beskriver.

**6. Den som saknar hemsida, den som vill ringa och den som kollar vem Joel är har ingen dörr.**
UPPMÄTT: startsidans text säger "Har du ingen sajt skriver du bara företagsnamnet" (SaGarDetTill.jsx:22) men API:t avvisar allt utan punkt (route.js:74). Telefonnummer och ansikte saknas i första skärmen på mobil, och tack-texten säger "Jag ringer inte, jag mejlar" samtidigt som hörnwidgeten erbjuder "Bli uppringd". /om sågs av 19 unika prospekt mot startsidans 18, och 5 av 17 som nådde en kontaktsida hade läst /om först. Den sidan presenterar Joel som "Digital konsult & AI-specialist" och slutar med "Vill du veta mer? Boka kostnadsfri genomgång" (OmContent.jsx:95, :523-535).

---

## 2. CTA-trappan: en huvudhandling per sida

Principen: besökaren ska aldrig behöva välja mellan likvärdiga knappar. Varje sida har EN gul knapp. Allt annat är textlänkar. Huvudhandlingen på alla säljsidor är densamma: gratis förslag.

### De fyra trappstegen

| Steg | Vad besökaren ger | Vad hen får | Storlek på beslutet |
|---|---|---|---|
| 1. Sajtkoll | en webbadress | poäng och tre brister på 10 sekunder | minimalt, ingen kontaktuppgift |
| 2. Gratis förslag | adress eller företagsnamn, plus mejl | länk till startsida och en tjänstesida inom två arbetsdagar | litet, inget möte, ingen telefon |
| 3. Samtal 15 min | en tid | svar på frågor, av Joel | medel |
| 4. Telefon | ett samtal nu | Joel direkt | för den som redan bestämt sig |

Steg 2 är affären. Steg 1 är ett sätt att komma dit för den som har en hemsida. Steg 3 och 4 finns alltid som textlänk under fältet, aldrig som konkurrerande knapp.

### En sida, en handling

| Sida | Huvudhandling (gul knapp) | Reserv (textlänk) | I dag |
|---|---|---|---|
| / | Gratis förslag | ring, boka 15 min | "Mät min sajt" |
| /lp/hemsida-foretag (+ varianter) | Gratis förslag, ett fält | Ring (sticky på mobil) | fyra fält, "Boka genomgång" i steg 1 och två länkar |
| /sajtkoll, före resultat | Testa din hemsida | ingen | "Testa sajten" (behåll) |
| /sajtkoll, efter resultat | Gratis förslag | rapporten på mejl | rapport, bevakning, konkurrent, möte, tjänster |
| /tjanster/webbutveckling | Gratis förslag | boka 15 min | "Få upplägg och pris", "Boka genomgång" |
| /hemsida-foretag, /priser | Gratis förslag | boka 15 min | "Boka genomgång" |
| /om | Gratis förslag | ring | "Boka kostnadsfri genomgång" |
| /boka, /kontakt | Samtal resp. meddelande | gratis förslag | oförändrat, men ska nämna förslaget |
| Menyknappen | Gratis förslag | telefon bredvid (finns på desktop) | "Boka genomgång" |

### Ett fält, samma komponent överallt

Det här är förslagets kärna och den enda större kodändringen: HeroKoll görs om till ett förslagsfält som används på /, LP:n, /sajtkoll, /priser, /om och tjänstesidan. Då finns mekanismen i EN version i stället för fyra, med samma ord och samma händelser.

1. Ett fält: "dittforetag.se eller företagsnamn". Knapp: "Bygg mitt gratis förslag".
2. Innehåller texten en punkt körs mätningen som i dag. Mejlfältet visas DIREKT, medan mätningen går, med raden "Medan jag mäter: vart ska jag skicka länken?". Ingen väntevägg.
3. Saknas punkt (företagsnamn) hoppas mätningen över och mejlfältet visas direkt. Det lagar felet i route.js:74 utan att röra API:t: anropet görs helt enkelt inte.
4. Resultatet fylls i ovanför mejlfältet när det är klart, med texten i avsnitt 3.4.
5. Händelserna som redan finns återanvänds: koll-{plats}, sajtkoll-{plats}, forslag-{plats}, lead-forslag.

Varför ett fält och inte LP:ns formulär: se diagnos 4. Joel får mindre information per lead (domän och mejl, inte namn och telefon), men 0 av 44 fyllde i det långa.

---

## 3. Färdig copy

Ordregler som gäller all text nedan (UPPMÄTT skäl i 01 C och 04): skriv "hemsida", aldrig "sajt" eller "webbplats" i rubriker, knappar och fält. Skriv "förslag", aldrig "designförslag", "skiss" eller "demo". Första steget är alltid "utan möte". Tiden är alltid "två arbetsdagar" för förslaget. Det köparen får se är alltid "startsidan och en tjänstesida på en riktig länk". Prisraden är alltid hela raden, med bindning och moms.

Hakparenteser = Joel måste bekräfta eller fylla i innan texten publiceras.

### 3.0 Två rader som ska stå lika överallt

Prisraden. Ersätter alla ställen där priset står utan bindning (BContent.jsx:255, :407, :445, LpHemsidaContent.jsx:272-273, WebbutvecklingContent.jsx:48):

```text
0 kr i start. Från 1 190 kr/mån [exkl. moms]. 12 månader, sedan månadsvis. Du äger hemsidan.
```

Raden under mejlfältet. Ersätter "Ingen bindning, inga påminnelser." (HeroKoll.jsx:291):

```text
Förslaget är gratis och du förbinder dig inte till något. Säger du nej hör du inte av mig igen.
```

Kommentar: texten lovar att Joel inte hör av sig igen efter ett nej. Den lovar inte att han aldrig kontaktar någon, eftersom Joel gör egna utskick med färdiga förslag. Skriv därför inte "du hittade hit själv" eller "jag kontaktar aldrig företag" någonstans. Det vore just ett sådant löfte som inte stämmer med verkligheten.

### 3.1 Startsidan (app/b/BContent.jsx + components/b/HeroKoll.jsx)

Överrad (behåll):

```text
Hemsidor åt företag som lever på förfrågningar
```

H1, variant A (behåll dagens). Min rekommendation. Inget i underlaget talar emot rubriken, åtta besökare kan inte göra det, och ingen av tio konkurrenter lovar samma sak ordagrant (03).

```text
Din nya hemsida, färdig innan du betalar ett öre.
```

H1, variant B. Bokstavligt sann även för den som vet att förslaget är två sidor och att avtalet skrivs efter det:

```text
Se din nya hemsida först. Bestäm dig sen.
```

Underrubrik (ersätter BContent.jsx:255). Den gamla börjar med mätningen, den nya börjar med det köparen får:

```text
Skriv din webbadress eller ditt företagsnamn. Om två arbetsdagar får du en länk till din nya hemsida: startsidan och en tjänstesida, med riktiga texter om ditt företag och dina orter. Gratis och utan möte.
```

Tre punkter, direkt under fältet (nytt, ersätter att villkoren bara står i löptext):

```text
Du ser den först. Startsidan och en tjänstesida på en riktig länk, om två arbetsdagar.
Du betalar först när den är live. 0 kr i start, från 1 190 kr/mån [exkl. moms]. Drift och ändringar ingår.
Du äger den. 12 månader, sedan månad för månad. Hemsidan, texterna och domänen är dina.
```

Fältets platshållare:

```text
dittforetag.se eller företagsnamn
```

Knapp (ersätter "Mät min sajt"):

```text
Bygg mitt gratis förslag
```

Rad under knappen:

```text
Steg 1 av 2. Inget möte och inget säljsamtal. Har du en hemsida mäter jag den på köpet, det tar tio sekunder.
```

Reservrad, liten text under (finns i dag bara i gula finalen, BContent.jsx:448):

```text
Hellre prata först? Ring [telefonnumret] eller boka 15 minuter.
```

Bevisrad (behåll, men byt "sajten" mot "hemsidan"):

```text
Niklassons Flytt: 37 offertförfrågningar på 30 dagar, mätt i hemsidan
```

Gula finalen (BContent.jsx:439). Samma fält, samma knapp. Texten ovanför:

```text
Skriv din adress. Om två arbetsdagar klickar du runt i din nya hemsida.
```

Tack-läget (ersätter HeroKoll.jsx:297-300). "Jag ringer inte, jag mejlar" tas bort eftersom hörnwidgeten erbjuder uppringning och telefon är ett eget trappsteg:

```text
Tack. Inom två arbetsdagar har du en länk i mejlen.

Jag läser din hemsida, dina tjänster och din ort och bygger något du kan klicka runt i. Jag mejlar länken och hör av mig en gång till veckan efter. Sedan är det tyst om du inte svarar.

Vill du hellre prata innan dess når du mig på [telefonnumret]. Jag ringer inte dig om du inte ber om det.
```

Kommentar: i dag lovar sajten "inga påminnelser" (SaGarDetTill.jsx:32, BFaq.jsx:20). Ett förslag som aldrig följs upp är bortkastat arbete. En enda uppföljning som sägs i förväg är ärligare än ett löfte om noll som sedan bryts. [Joel väljer: en uppföljning eller ingen. Skriv det som faktiskt sker.]

### 3.2 Annonssidan /lp/hemsida-foretag

Sidan görs i tre varianter av SAMMA komponent (en prop som byter överrad, H1 och underrubrik), så att annonsens ord står i rubriken. Alla tre noindex som i dag. Det här är inte tre sidor att underhålla, det är tre rubriker.

**Variant hemsida** (annonsgruppen hemsida: hemsida företag, ny hemsida företag, hemsida till företaget)

Överrad:

```text
Hemsida till företag
```

H1, variant A:

```text
Hemsida till ditt företag. Se den färdig innan du betalar.
```

H1, variant B:

```text
Ny hemsida till företaget? Jag bygger den först, du bestämmer dig sen.
```

**Variant webbyrå** (annonsgruppen webbyra: webbyrå, webbyrå skåne, webbyrå malmö, lund, helsingborg, kristianstad). Ny adress, förslagsvis /lp/webbyra.

Överrad:

```text
Webbyrå i Skåne
```

H1, variant A:

```text
Webbyrå i Skåne som bygger din hemsida innan du betalar.
```

H1, variant B:

```text
Webbyrån där du ser hemsidan först och bestämmer dig sen.
```

Extra rad i underrubriken, bara i den här varianten. Den som söker webbyrå väntar sig en byrå, så säg det rakt:

```text
Byrån är en person. Jag heter Joel Stolt, sitter i Hässleholm och bygger, svarar och tar ansvar själv.
```

**Variant pris** (annonsgruppen pris: vad kostar en hemsida, hemsida pris). Ersätter dagens landning på ankaret #priser. Ny adress, förslagsvis /lp/hemsida-pris.

H1, variant A:

```text
Vad kostar en hemsida? 0 kr i start, 1 190 kr i månaden.
```

H1, variant B:

```text
Hemsida från 1 190 kr i månaden. 0 kr i start, och du ser den innan du betalar.
```

**Gemensamt för alla tre varianter**

Underrubrik (ersätter :271-274, "Enterprise-kvalitet" bort). Kort, för att fältet ska ligga i första skärmen på mobil:

```text
Skriv din webbadress eller ditt företagsnamn. Om två arbetsdagar klickar du runt i din nya hemsida. Gratis och utan möte.
```

Fält och knapp: samma förslagsfält som startsidan, ett fält, knappen "Bygg mitt gratis förslag". Dagens fyra fält tas bort. Telefon frågas i steg 2 som valfritt:

```text
Telefon, om du hellre vill att jag ringer (valfritt)
```

Prisraden direkt under fältet: se 3.0.

Bevis i första skärmen (ersätter hårdkodade "32", hämta samma live-tal som startsidan):

```text
Niklassons Flytt: 37 offertförfrågningar på 30 dagar, mätt i hemsidan
```

Raden "10+ år i branschen · 150+ levererade projekt" (:304, :517) byts mot samma tal som startsidan:

```text
Över 10 år i branschen. 19 kundhemsidor i drift och mätning just nu. Kunder i hela Sverige.
```

Så funkar det (ersätter steg-listan :33-49, där steg 1 i dag är ett videomöte som inte finns):

```text
1. Skriv din adress och din mejl
Det tar en minut. Inget möte, inget samtal. Har du ingen hemsida skriver du företagsnamnet.

2. Du får en länk inom två arbetsdagar
Startsidan och en tjänstesida, byggda för ditt företag. Inte en skiss i en PDF utan en riktig hemsida du kan klicka runt i.

3. Gillar du den bygger jag resten
Då skriver vi avtal och hemsidan är live inom [två veckor]. Gillar du den inte kostar det ingenting. Du har inte skrivit på något och är inte skyldig mig en krona.
```

Mobilens fasta rad i botten (behåll två knappar, byt text på den gula):

```text
Ring
Gratis förslag
```

Annonstext som matchar rubrikerna ord för ord. Teckenantalen är kontrollräknade med skript (max 30 per rubrik, 90 per beskrivning, längsta rubriken är exakt 30).

```text
ANNONSGRUPP HEMSIDA
Sökord (exakt och fras): hemsida företag, ny hemsida företag, hemsida till företaget, hemsida småföretag
Rubrik 1: Hemsida till ditt företag
Rubrik 2: Se den färdig innan du betalar
Rubrik 3: 0 kr i start, 1 190 kr/mån
Rubrik 4: Gratis förslag på två dagar
Rubrik 5: Du äger hemsidan och domänen
Rubrik 6: 12 månader, sedan månadsvis
Beskrivning 1: Jag bygger startsidan åt dig först. Gillar du den: 0 kr i start, från 1 190 kr/mån.
Beskrivning 2: Ingen offert, inget möte. Skriv din webbadress och få en länk till din nya hemsida.
Landar på: /lp/hemsida-foretag, H1 "Hemsida till ditt företag. Se den färdig innan du betalar."
```

```text
ANNONSGRUPP WEBBYRÅ
Sökord (exakt och fras): webbyrå, webbyrå skåne, webbyrå malmö, webbyrå lund, webbyrå helsingborg, webbyrå kristianstad
Rubrik 1: Webbyrå i Skåne
Rubrik 2: Se hemsidan innan du betalar
Rubrik 3: Byrån är en person, inte tio
Rubrik 4: Fast pris: 1 190 kr/mån
Rubrik 5: Gratis förslag på två dagar
Beskrivning 1: Webbyrå i Skåne som bygger din hemsida först. Du bestämmer dig när du har sett den.
Beskrivning 2: 0 kr i start, från 1 190 kr/mån. 12 månader, sedan månadsvis. Du äger hemsidan.
Landar på: /lp/webbyra, H1 "Webbyrå i Skåne som bygger din hemsida innan du betalar."
```

```text
ANNONSGRUPP PRIS
Sökord (exakt och fras): vad kostar en hemsida, hemsida pris, hemsida kostnad
Rubrik 1: Vad kostar en hemsida?
Rubrik 2: 0 kr i start, 1 190 kr/mån
Rubrik 3: Priset står på sidan
Rubrik 4: Se den innan du betalar
Beskrivning 1: Hela prislistan öppet. 0 kr i start, från 1 190 kr/mån, drift och ändringar ingår.
Beskrivning 2: Jag bygger ett gratis förslag först. 12 månader, sedan månadsvis. Du äger hemsidan.
Landar på: /lp/hemsida-pris, H1 "Vad kostar en hemsida? 0 kr i start, 1 190 kr i månaden."
```

```text
ANNONSGRUPP SAJTKOLL (pausad tills resultatsteget i 3.4 är byggt)
Rubrik 1: Testa din hemsida gratis
Rubrik 2: 14 kontroller på 10 sekunder
Rubrik 3: Ingen registrering
Beskrivning 1: Skriv din adress och se vad som får besökare att lämna. Svar direkt, utan registrering.
Landar på: /sajtkoll, H1 "Testa din hemsida. 14 kontroller på 10 sekunder."
```

Kommentar: jag har inte sett dagens annonstexter, de finns inte i repot. Att de inte matchar rubrikerna är därför ANTAGET för annonsens del och UPPMÄTT för landningssidans del (utm_content webbyra landar på en sida utan ordet i första skärmen).

### 3.3 /tjanster/webbutveckling

Ärlig proportion först: sidan sågs av 2 svenska prospekt på 30 dagar och har inte varit ingångssida en enda gång på 90 dagar (02). Ordet webbutveckling klassas av Google som informationssökning, och 49 % av sökvolymen runt det gäller jobb och utbildning (04). Texten nedan spelar alltså roll av ett enda skäl: sidan är dit startsidans huvudrad "Ny hemsida, byggd för att hittas" och menyns första rad leder. Den ska fortsätta samma mening, inte börja på en ny.

Title (mallen lägger till "| Stolt Marketing", totalt ca 55 tecken):

```text
Ny hemsida och webbdesign för företag
```

Metabeskrivning:

```text
Jag bygger din nya hemsida först, du bestämmer dig sen. Gratis förslag på två arbetsdagar. 0 kr i start, från 1 190 kr/mån, 12 månader och sedan månadsvis.
```

Menyrad (Header.jsx:32-33), etikett och underrad:

```text
Ny hemsida
Du ser den innan du betalar
```

Etikett och brödsmula på sidan (ersätter "Webbutveckling"):

```text
Ny hemsida
```

H1, variant A:

```text
Ny hemsida till ditt företag. Du ser den innan du bestämmer dig.
```

H1, variant B:

```text
Jag bygger din hemsida först. Sen bestämmer du dig.
```

Ingress (ersätter :47, AcadeMedia bort ur första skärmen):

```text
Du skriver din webbadress eller ditt företagsnamn. Om två arbetsdagar klickar du runt i startsidan och en tjänstesida, skrivna för ditt företag och dina orter. Gillar du det bygger jag resten, och hemsidan är live inom [två veckor] efter ditt ja. Gillar du det inte har det inte kostat dig något.
```

Tre punkter (ersätter :48):

```text
Gratis förslag om två arbetsdagar, utan möte
0 kr i start, från 1 190 kr/mån [exkl. moms]
12 månader, sedan månadsvis. Du äger hemsidan
```

Knapp: förslagsfältet, "Bygg mitt gratis förslag". Knappen "Få upplägg och pris" (:214) tas bort: priset står redan där.

FAQ-svaret som i dag säger "Det beror på omfattningen ... Du får en tydlig offert" (lib/local/service-extra-content.json:62) ersätts med:

```text
Vad kostar en hemsida hos dig?
0 kr i start och 1 190 kr i månaden för Bas, 1 990 kr för Bredd och 2 990 kr för Spets [exkl. moms]. 12 månader, sedan månadsvis. Då ingår bygget, drift, säkerhet och ändringar. Priset står här och ändras inte i en offert. Större webbutiker prissätts för sig, och då får du priset innan jag börjar.
```

### 3.4 Sajtkollens resultatsteg (samma text på /sajtkoll och i förslagsfältet)

Dagens ordning på /sajtkoll: poäng, omdöme, AI-text, 14 rader, rapportformulär med förbockad bevakning, konkurrentjämförelse, "Boka genomgång", "Se tjänster". Ny ordning: poäng, en mening, tre brister, FRÅGAN, en reservväg, och sist alla 14 rader hopfällda.

Rubrik vid poängen. Tre lägen, byter ut omdömena i route.js:550-555. Poängen får etiketten "på tekniken" så att 75 inte läses som "hemsidan är bra":

```text
85 eller mer:
[poäng] av 100 på tekniken. Den är det inget fel på.

60 till 84:
[poäng] av 100 på tekniken. Grunden håller, men [tre saker] kostar dig besökare.

Under 60:
[poäng] av 100 på tekniken. Här tappar du folk innan de hunnit läsa.
```

Stycket under, samma i alla lägen. Det här är bryggan från det verktyget mäter till det Joel säljer:

```text
Den här kollen mäter 14 tekniska saker. Den mäter inte det som oftast avgör om du får förfrågningar: om du har en egen sida för varje tjänst och varje ort du jobbar i. Det tittar jag på när jag bygger ditt förslag.
```

Sedan de tre värsta bristerna, som i dag.

Frågan (enda gula knappen i resultatet):

```text
Vill du se din hemsida byggd på nytt?

Jag bygger startsidan och en tjänstesida åt dig, med dina tjänster och dina orter, på en riktig länk. Klart om två arbetsdagar. Det kostar ingenting och du förbinder dig inte till något.

[din@mejl.se]   Bygg mitt gratis förslag

Inget möte och inget säljsamtal. Säger du nej hör du inte av mig igen.
Gillar du den: 0 kr i start, från 1 190 kr/mån [exkl. moms], 12 månader och sedan månadsvis. Du äger hemsidan.
```

Reservväg, som textlänk som fäller ut dagens rapportformulär. Bevakningsrutan ska INTE vara förbockad:

```text
Inte redo för det? Mejla mig rapporten i stället.

Kryssruta: Mät om min hemsida varje månad och mejla vad som ändrats. Avslutas med ett klick.
```

Sist, hopfällt:

```text
Visa alla 14 kontroller
```

Bort ur resultatet: konkurrentjämförelsen, rutan "Vill du att det vi hittade blir fixat?" med "Boka genomgång" och "Se tjänster". Joel säljer ingen fix-tjänst med pris, han säljer en ny hemsida.

/sajtkoll före resultatet (annonslandningen). H1, variant A:

```text
Testa din hemsida. 14 kontroller på 10 sekunder.
```

H1, variant B (dagens, behåll om Joel vill):

```text
Hur bra fungerar din hemsida?
```

Underrubrik (ersätter :192-194, "vi" blir "jag", och erbjudandet nämns för första gången på sidan):

```text
Skriv din adress så mäter jag hemsidan på riktigt: hur snabb den är, hur den fungerar i mobilen, hur den syns på Google och om det går att nå dig. Gratis, ingen registrering. Vill du sedan se hur den hade sett ut om jag byggde den får du ett förslag utan kostnad.
```

Knapp:

```text
Testa min hemsida
```

Raden under fältet (ersätter "Inga gissningar, ingen lagring." :251, som inte stämmer eftersom resultatet sparas):

```text
Allt läses ur ett riktigt svar från din hemsida. Resultatet sparas så att du kan dela det med en länk.
```

Ny liten rad med bild på Joel under verktyget. Sidan saknar i dag ansikte, pris och erbjudande helt:

```text
Jag heter Joel Stolt och bygger hemsidor åt företag som lever på förfrågningar. 0 kr i start, från 1 190 kr/mån [exkl. moms]. Du ser hemsidan innan du betalar.
```

"Tolv saker" (:456) ändras till "Fjorton saker".

ANTAGET och värt att säga rakt: texten ovan lagar budskapet, men verktyget mäter fortfarande inte det Joel säljer. Den ändring som gör bryggan sann är att låta kollen räkna sidor i sitemap och visa talet utanför poängen: "Din hemsida har 7 sidor." Det är kod, inte copy, och står därför i avsnitt 5.

### 3.5 Sektionen som besvarar invändningarna

Placering: öppen text, inte hopfälld, direkt efter prisraden på startsidan (före dagens FAQ), på alla LP-varianter i stället för "Det du undrar", och på /priser. Ordningen följer köparens rädslor i 05 (inlåsning och oklara villkor först), inte Joels stolthet (effekt först). De sex första är måsten, resten kan ligga i FAQ:n.

```text
Rubrik: Villkoren, innan du frågar

Är det här ett sånt abonnemang man inte kommer ur?
Nej. Bindningen är 12 månader, sedan är det månad för månad. Inget förlängs ett år i taget. Du säger upp med ett mejl. Hemsidan, texterna och domänen är dina, och du får med dig allt som färdiga filer.

Varför 12 månader?
För att jag inte tar betalt för bygget. En byrå fakturerar 30 000 till 100 000 kr innan du har sett något. Jag bygger först och sprider kostnaden på tolv månader. Det är de månaderna som betalar jobbet.

Vad kostar det på ett år?
Bas: 12 x 1 190 = 14 280 kr. Bredd: 12 x 1 990 = 23 880 kr. [Priserna är exklusive moms.] Då ingår bygget, drift, säkerhet, domän och ändringar. Inget annat tillkommer om du inte ber om något nytt, och då får du priset innan jag börjar.

När skriver jag på, och när börjar jag betala?
Du skriver på när du har sett förslaget och sagt ja, inte innan. Första fakturan kommer när hemsidan är live på din domän. [De tolv månaderna räknas från den dagen.]

Vad är haken med gratis?
Ingen. Förslaget är mitt sätt att visa hur jag jobbar. Säger du nej kommer ingen faktura, och jag hör inte av mig igen.

Du är ensam. Vad händer om du blir sjuk eller slutar?
Hemsidan står kvar. Den ligger hos Cloudflare och rullar utan att jag rör den. Är jag sjuk får ändringar vänta, och då säger jag till. [Domänen står på ditt företag och du har egna inloggningar.] Slutar jag helt får du hemsidan som färdiga filer som vilken webbutvecklare som helst kan ta över. [Finns en namngiven person som kan rycka in: skriv det här. Finns ingen: skriv inget.]

Vad behöver jag göra själv?
Nästan inget. Jag skriver texterna utifrån din nuvarande hemsida och det du berättar. Du läser, rättar det som är fel och skickar bilder om du har några. [Har du inga bilder löser jag det.]

Kan jag behålla min domän och min mejl?
Ja. Domänen är din, och mejlen rör jag inte om du inte vill. [Bytet görs utan att mejlen ligger nere.]

Jag har ingen hemsida i dag. Funkar det?
Ja. Skriv företagsnamnet i stället för en adress, så bygger jag förslaget utifrån vad du gör och var du jobbar.

Räcker Bas med fem sidor?
Har du en tjänst och en ort: ja. Säljer du flera tjänster eller jobbar i flera kommuner behöver varje tjänst och ort en egen sida för att synas, och då är det Bredd. Jag säger vilket jag tror på när du får förslaget.
```

Kommentarer:
- Byråpriset "30 000 till 100 000 kr" är valt med flit. LP:n säger i dag "80 000 till 200 000 kr" (LpHemsidaContent.jsx:328). Googles AI-ruta för "vad kostar en hemsida" anger 15 000 till 80 000 kr för en byråhemsida (04 del 4). Den som just läst det hos Google tror inte på 200 000. Använd ETT spann överallt.
- Sista frågan lagar självmålet i 01 B13. I dag säger /hemsida-foretag att hemsidor med färre än 50 sidor är osynliga, tre skärmar under ett paket med fem sidor. Gör om påståendet till en regel om tjänster och orter, så blir Bas ett ärligt val för enmansfirman och Bredd det logiska för alla andra.
- Allt inom hakparentes är villkor jag inte kan läsa ur koden. Stämmer det inte, stryk meningen. En mening som saknas är bättre än ett löfte som inte håller.

Möjlig ändring av själva erbjudandet (Joels beslut, inte copy): Värmlandswebb säljer 499 kr/mån utan bindning och Vizme 699 kr/mån utan bindning (05, 03). Joel är dyrast per månad och har bindning. En ångerperiod tar udden av jämförelsen till låg risk, eftersom kunden redan sett och godkänt hemsidan:

```text
Ångrar du dig inom 30 dagar efter att hemsidan gått live river vi avtalet. Då har du betalat en månad, inget mer.
```

### 3.6 /om (inte beställt, men sidan läses av fler riktiga besökare än startsidan)

Underrad (ersätter "Digital konsult & AI-specialist", OmContent.jsx:95):

```text
Jag bygger hemsidor åt företag som lever på förfrågningar.
```

Avslutning (ersätter "Vill du veta mer? Boka ett kort samtal ...", :523-535). Knapp: förslagsfältet.

```text
Rubrik: Se din hemsida innan du bestämmer dig

Skriv din webbadress eller ditt företagsnamn, så bygger jag startsidan och en tjänstesida åt dig. Länken kommer om två arbetsdagar. Gratis och utan möte. Hellre prata först? Ring [telefonnumret].
```

Sektionen "Fem produkter jag byggt och driver själv" flyttas längst ned eller kortas till en rad. Den väcker frågan köparen inte ställer högt: har han tid med min hemsida?

### 3.7 Menyknappen och /boka

Menyknappen (Header.jsx:439-445 och :623-631), ersätter "Boka genomgång" och "Boka kostnadsfri genomgång". Länkas till startsidans fält (/#forslag) tills en egen sida /forslag finns:

```text
Gratis förslag
```

/boka, ny rad överst under H1 så att löftet inte tappas i klicket (01 A10):

```text
Vill du hellre se än prata? Skriv din adress på startsidan så bygger jag ett förslag utan möte. Vill du prata först är du på rätt ställe.
```

---

## 4. Vad som ska bort eller flyttas

Bort helt:
1. Knapptexten "Mät min sajt" (HeroKoll.jsx:193). Ersätts av "Bygg mitt gratis förslag".
2. "Ingen bindning, inga påminnelser." (HeroKoll.jsx:291). Krockar med 12 månaders bindning för den som läser misstänksamt.
3. "Jag ringer inte, jag mejlar." (HeroKoll.jsx:300). Krockar med hörnwidgetens "Bli uppringd" och med att telefon är ett eget trappsteg.
4. På LP:n: "Enterprise-kvalitet till småföretag" (:272), steg 1 "Boka en kostnadsfri genomgång" (:36-37), de två länkarna "Boka kostnadsfri genomgång" i Skåne-sektionen (:608, :627), "150+ levererade projekt" (:304, :517), hårdkodade "32 offertförfrågningar" (:283, :409), "Upp till sex sidor" (:65, ska vara fem som i lib/pricing-packages.js:14), "80 000 till 200 000 kr" (:328), "en månads uppsägning" (:89, ska vara "till nästa månadsskifte" som på /priser), "två till fyra veckor" (:93).
5. På /sajtkoll efter resultatet: konkurrentjämförelsen (:385-423), rutan "Vill du att det vi hittade blir fixat?" med "Boka genomgång" och "Se tjänster" (:426-443), förbockningen av Sajtvakten (:361), "ingen lagring" (:251), "Tolv saker" (:456) och alla "vi".
6. På /tjanster/webbutveckling: tekniksektionen med Next.js, Tailwind, Framer Motion, Vercel (:18-25, :96-106), FAQ-frågan "Vilken teknik bygger du i?" (:28), AcadeMedia i första skärmen (:47), knappen "Få upplägg och pris" (:214), offertsvaret i lib/local/service-extra-content.json:62, "två till fyra veckor" (:56, :86), de långa tankstrecken (:10, :79).
7. På /priser: meningen "det finns inga fler rader någon annanstans" (:57) så länge e-handelssidan har 89 000 kr, 149 000 kr och 2 495 kr/mån. Lägg antingen till raden "Större webbutiker prissätts för sig" eller ta bort påståendet.
8. I startsidans FAQ: frågorna om WordPress mot Next.js (BFaq.jsx:35) och AI-lösningar (:39), samt svaret "Allt ingår i månadspriset på 1 190 kr" (:48) som krockar med "De flesta landar på Bredd".
9. Casetexternas fackord: "canonical-fel" (BContent.jsx:45) och "Formulärkedjan verifierad" (:44). Skriv vad kunden fick: "Hemsidan hade försvunnit ur Google. Nu syns den igen, med en sida per tjänst och ort."

Flyttas eller tonas ned:
10. Menyn: "Webbutveckling" blir "Ny hemsida" och står ensam överst. Facebook-annonsering, AI-synlighet och WordPress tas ur rullistan (ERBJUDANDE-ANALYS pekade på detta 2026-08-23, listan har sedan dess vuxit till tio rader). De kan ligga kvar under "Alla tjänster".
11. Sajtvakten och rapporten på mejl: från förstaplats efter resultatet till reservväg under förslagsfrågan.
12. Bindningen: från stängd FAQ och en liten rad (SaGarDetTill.jsx:94) till prisraden, överallt där priset står.
13. /om: "Fem produkter jag byggt och driver själv" längst ned eller som en rad. "AI-specialist" bort ur underraden.
14. Påståendet att hemsidor med färre än 50 sidor är osynliga (app/hemsida-foretag/page.js:198-201, HantverkssajterContent.jsx:142-143): gör om till regeln "en sida per tjänst och ort" så att Bas inte sågas av sin egen säljsida.
15. /hantverkssajter: knappen "Få er sajt mätt" går i dag till det långa kontaktformuläret (:188-189). Ska gå till förslagsfältet, som gör mätningen på tio sekunder.
16. Större, senare: /tjanster/webbutveckling och /hemsida-foretag säljer samma sak i två versioner. Den ena har ingen trafik (2 besökare på 30 dagar, position 25 till 71), den andra har inget bevis alls. Slå ihop dem till en sida på /hemsida-foretag och peka om den andra med 301. Inget rankingvärde går förlorat eftersom inget finns.

---

## 5. Det som inte är budskap, men som avgör om budskapet spelar någon roll

Proportionen, rakt: om Joel har tio timmar ska högst en gå till rubriker. Tre går till förslagsfältet, resultatsteget och LP:ns första skärm på mobil. Sex går till det som står här nedanför. (ANTAGET, min bedömning av 02:s räkning: trafik gånger konvertering, och trafiken är den lilla faktorn.)

**5.1 Trafik.** UPPMÄTT: 23 köpbesökare per månad utan annonser. Vid 3 % är det 0,7 leads per månad. Inget budskap i världen lagar det. Bäst trafik i underlaget är den minsta: ChatGPT-besökare via ortssidor (5 av 9 nådde kontakt eller boka, 90 dagars enda riktiga lead kom därifrån) och organiskt Google (8 av 52). Annonser: 0 av 55. Ortssidorna och /om förtjänar alltså samma förslagsfält och samma prisrad som startsidan, de är där köparna faktiskt landar.

**5.2 Annonsekonomin håller bara om LP:n konverterar dubbelt mot planen.** Räkning (ANTAGET, bygger på planens budget 5 000 kr/mån och uppmätt CPC ca 110 till 130 kr i 04): ca 43 klick per månad. Vid 4 % blir det 1,7 leads, vid var fjärde lead en kund: 0,4 kunder, alltså ca 11 600 kr per kund. Planens eget tak för Bas är 4 800 kr. Vid 8 % blir det ca 5 800 kr per kund, vilket bara går ihop om kunden landar på Bredd (23 880 kr första året). Slutsats: annonser är ett sätt att testa erbjudandet snabbt, inte motorn. Motorn är rimligen Joels egna utskick med färdiga förslag, och då är sajtens jobb att bekräfta: vem är han, vad kostar det, vilka villkor gäller. Det är därför avsnitt 3.5 och 3.6 väger tyngre än startsidans rubrik.

**5.3 Ads-sökord och upplägg.**
- Köp bara köpord i exakt och frasmatchning: hemsida företag, ny hemsida företag, hemsida till företaget, webbyrå plus ort, vad kostar en hemsida, hemsida pris. Köp inte bara "hemsida" (3 600 sökningar men Google klassar det som navigering till Wix, one.com och Hemsida24) och inte "webbutveckling" (informationssökning, hälften jobb och utbildning).
- Behåll planens negativa lista (gratis, jobb, lön, utbildning, kurs, mall, själv) och lägg till varumärkena: wix, wordpress, one.com, hemsida24, squarespace, logga in, webmail.
- Sajtkoll-gruppen pausas tills resultatsteget i 3.4 är byggt. Den drog folk som gjorde exakt det sidan bad om (62 %) och sedan inte erbjöds något de ville ha. Slå på den igen med stoppregeln i avsnitt 6.
- Två tredjedelar av klicken är mobil (41 av 62). Bedöm varje ändring på LP:n i mobilens första skärm, inte på datorn.
- UPPMÄTT i 02: ingen Google Ads-tagg finns på sajten och sajtkoll-körningar når aldrig Google Ads som signal. Med noll konverteringar har automatisk budgivning inget att lära av. Kör manuell CPC eller maximera klick med tak tills det finns minst ett tiotal riktiga leads.
- Geografi (ANTAGET): webbyrå-gruppen bör gå mot Skåne med grannlän, så att rubriken "Webbyrå i Skåne" är sann för alla som klickar. Det enda mönstret för varm trafik i underlaget är lokalt.

**5.4 Recensioner.** UPPMÄTT: 5 av 10 konkurrenter visar betyg i första skärmen, och det lokala kartpaketet vinner 3 av de 5 viktigaste köporden och listar bara företag med recensioner (03, 04). LP:n visar i dag två Google-recensioner och kodkommentaren säger att antalet medvetet inte skyltas eftersom två ser svagt ut (LpHemsidaContent.jsx:425-429). Joel har 19 kundhemsidor i drift. Nitton frågor är mer värda än alla rubriker i den här filen. Målet 15 från augusti gäller fortfarande. När talet är tvåsiffrigt: en rad under fältet, "5,0 på Google, [antal] omdömen", med länk.

**5.5 Uppföljning av dem som kör sajtkollen.**
- Framåt: den som lämnar mejl för ett förslag ska få ett personligt svar samma dag, länken inom två arbetsdagar och EN uppföljning veckan efter, precis som tack-texten i 3.1 säger. Förslaget är Joels dyraste marknadsföring per styck. Utan uppföljning är det bortkastat.
- Bakåt: D1 har adresserna till de elva annonskörningarna, varav ungefär åtta är svenska småföretag (02). Sidan lovade "ingen lagring". Min rekommendation är att INTE höra av sig till dem med hänvisning till testet. Det vore exakt det köparna i 05 varnar för: en sak sades, en annan gjordes. Rätta texten först (3.4). Därefter gäller den nya raden, och bara den som lämnat sin mejl följs upp.
- Låt kollen räkna sidorna i hemsidans sitemap och visa talet bredvid poängen, utanför själva betyget: "Din hemsida har 7 sidor." Då mäter verktyget det Joel säljer, och bryggan i 3.4 blir sann i stället för bara påstådd. Kod, medelstor insats.

**5.6 Städa mätningen innan något mäts.** UPPMÄTT: 41 % av de svenska besöken är Joels egna enheter och 60 % av alla besökare är utländska bottar. Kör localStorage.setItem("umami.disabled", 1) i varje egen webbläsare och filtrera alla rapporter på Sverige. Lägg händelsen cta-telefon på LP:ns telefonlänkar och på mobilens Ring-knapp (mätlucka 3 i 02): i dag syns ingen som ringer från annonssidan. Mejlklick mäts inte alls.

**5.7 En sanning per sak i koden.** Fyra versioner av mekanismen finns för att texten ligger hårdkodad på fyra ställen. Lägg mekanismens tre steg, prisraden, leveranstiden och bevistalen i lib/local/data.js bredvid PRICING och läs därifrån, så som lib/pricing-packages.js redan gör för paketen. Annars glider det isär igen inom en månad.

---

## 6. Hur varje ändring mäts, och hur länge det tar

Grundregel: på dagens organiska trafik (ca 18 riktiga besökare per månad på startsidan, 19 på /om, 2 på tjänstesidan) går INGEN budskapsändring att mäta. 02 räknar med 400 till 800 besökare per variant för att skilja 1 % från 3 %. Det tar flera år. De ändringarna görs för att de är logiska och motsägelsefria, inte för att de kan bevisas. Det som går att mäta är annonslandningarna, och där används stoppregler i stället för signifikans.

Förutsättning: Umami avstängt på Joels enheter och filter på Sverige (5.6). Annars mäter han sig själv.

Utgångslägena i tabellen är UPPMÄTTA (02). Trösklarna i kolumnen Signal är ANTAGNA: de är valda så att ett utfall på noll blir osannolikt om ändringen fungerar, inte för att de bevisar något. Med 30 till 75 händelser går det att säga "det här fungerar inte", aldrig "det här är 40 % bättre".

| Ändring | Händelser som redan finns | Utgångsläge (UPPMÄTT) | Signal | Tid vid nuvarande trafik |
|---|---|---|---|---|
| Förslagsfältet på LP:n (ett fält, ny H1 per annonsgrupp) | koll-{plats}, forslag-{plats}, lead-forslag, filtrerat på sidan /lp/ och utm_medium=cpc. Gamla lead-lp-hemsida som jämförelse | 0 av 44 besök skickade formulär. 1 av 45 besök hade någon händelse alls | Efter 75 annonsklick till LP:n: 3 leads eller fler = fungerar (minst 4 %). 1 till 2 = oklart, fortsätt till 150. 0 = chansen för det vid 4 % är under 5 %, då är det erbjudandet eller trafiken som är fel, inte oturen. Stäng av annonserna | Planens budget (ca 43 klick per månad): 7 till 8 veckor. Augustis takt (ca 5 klick per dag): drygt 2 veckor |
| LP:ns första skärm på mobil | Andel besök med minst en händelse, mobil, cpc. Umamis studs räcker inte eftersom ett fältklick på samma sida inte är en ny sidvisning | 24 av 30 mobilbesök studsade. 8 av 11 mobilbesök på /sajtkoll använde fältet | Efter 40 mobila annonsbesök: fler än 12 använder fältet (30 %) = första skärmen fungerar | 4 till 6 veckor på planens budget |
| Sajtkollens resultatsteg | lead-forslag och lead-sajtkoll-rapport filtrerat på sidan /sajtkoll, delat med klara mätningar (D1 results med cpc-källa). chatt-sajtkoll som bisignal | 0 av 11 klara mätningar gav mejl. 0 nya prenumeranter på 30 dagar | Efter 30 klara annonsmätningar: 4 mejl eller fler = behåll annonsgruppen. 0 till 1 = stäng den, publiken är för tidig | Ca 4 veckor i augustis takt (11 mätningar på 10 dagar) |
| Startsidans knapp och fält | koll-hero, sajtkoll-hero, forslag-hero, lead-forslag | 8 besökare, 1 använde fältet, 0 lämnade mejl | Går inte att mäta. Räkna bara antal lead-forslag per kvartal | Minst 3 månader för att se en enda händelse med rimlig säkerhet |
| Företagsnamn i fältet (ingen hemsida) | lead-forslag där mätningen hoppats över (syns i mejlets ämnesrad, ingen poäng) | 0, dörren har varit stängd | En enda sådan lead är ny information: gruppen finns | Löpande |
| Telefon som trappsteg | cta-telefon (finns på startsidan, Joel-kortet, CloseBlock). Läggs till på LP:n | 1 klick på 30 dagar, 0 mätbara från LP:n | Räkna per annonsperiod tillsammans med leads. Hantverkare som ringer är leads som i dag inte syns | Samma som LP-raden |
| Menyknappen "Gratis förslag" | Ny händelse behövs (cta-header-forslag), knappen saknar spårning i dag | okänt | Bara riktmärke, inget test | 3 månader |
| /om med förslagsfält | koll-om, lead-forslag filtrerat på /om | 19 unika per 30 dagar. 5 av 17 som nådde kontakt hade läst /om | Går inte att testa. Följ antal per kvartal | 3 månader eller mer |
| Villkorssektionen och prisraden | Ingen egen händelse. Indirekt: andel LP-besök som når fältets steg 2 | - | Går inte att isolera. Görs för att motsägelserna ska bort, inte för ett mätbart lyft | - |
| Recensioner | Antal på Google. Händelsen recension-google finns på startsidans citat | 2 synliga på LP:n, mål 15 | 15 stycken | 4 till 8 veckor om alla 19 kunder tillfrågas |

Ordning att göra det i (så att varje steg kan mätas för sig under en annonsperiod):
1. Städa mätningen (5.6). En kväll.
2. Bygg förslagsfältet och lägg det på LP:n med ny H1, ny underrubrik, prisraden och nya steg. Kör hemsida- och webbyrå-gruppen i 75 klick.
3. Bygg om sajtkollens resultatsteg. Slå på sajtkoll-gruppen i 30 mätningar.
4. Lägg samma fält, prisrad och villkorssektion på startsidan, /om, /priser och tjänstesidan. Rätta motsägelserna i avsnitt 4.
5. Parallellt hela tiden: recensioner och egna utskick. Det är där kunderna kommer ifrån.

---

## Sammanfattning

Löftet behöver inte bytas. Det som läcker är frågan sajten ställer. Den lovar en ny hemsida och ber sedan besökaren mäta sin gamla, boka ett möte eller fylla i fyra fält. De 56 annonsklick som köptes i augusti gick till två sidor där den ena aldrig nämner erbjudandet och den andra gömmer formuläret under vecket på mobilen. Resultat: 0 leads. Samtidigt körde 62 % sajtkollen, vilket visar att ett enda fält med svar direkt fungerar på just den här publiken.

Förslaget är därför ett fält, en knapp och en mening överallt: "Bygg mitt gratis förslag". Samma komponent på startsidan, annonssidorna, sajtkollen, /om och /priser. Annonsens ord står i rubriken. Priset står aldrig utan bindning, moms och ägande. Villkoren sägs högt innan köparen hinner leta efter haken.

Och det ärliga: allt detta ger högst någon lead till per månad så länge trafiken är 23 köpbesökare. Recensionerna, ortssidorna, utskicken och uppföljningen avgör mer än varje rubrik i den här filen.
