# 06 Förslag A: Nisch och målgrupp först

Status: KLAR 2026-09-19. Ingen kod ändrad, inget byggt, inget deployat. Allt nedan är förslag.

Vinkel: budskapet ska välja köpare. Frågan som prövas: ska stoltmarketing.se säga rakt ut att den är till för hantverkare och lokala tjänsteföretag som lever på förfrågningar?

Läsregel: UPPMÄTT = siffra eller citat med källa (underlagsfil eller fil:rad i koden). ANTAGET = min bedömning. Små tal är små tal.

## Logg

- [x] Utfil skapad
- [x] Underlag 01-05 läst (hela filerna), plus ERBJUDANDE-ANALYS.md och Ads-delen av ADS-OCH-OMBYGGNAD-PLAN.md
- [x] Kod läst: app/b/BContent.jsx, components/b/HeroKoll.jsx, SaGarDetTill.jsx, BFaq.jsx, app/lp/hemsida-foretag/LpHemsidaContent.jsx, app/tjanster/webbutveckling (Content + layout), app/sajtkoll/page.js, app/api/sajtkoll/route.js (validering, kontroller, omdömen), components/Header.jsx, app/hantverkssajter/HantverkssajterContent.jsx, lib/kundmotor.js, lib/pricing-packages.js, public/llms.txt
- [x] Del 0 Ställningstagande
- [x] Del 1 Diagnos
- [x] Del 2 Copy (startsida, LP, /tjanster/webbutveckling, sajtkollens resultatsteg, invändningsblock, /hantverkssajter, meny, /om, llms.txt, paketrader)
- [x] Del 3 Bort eller flyttas
- [x] Del 4 Inte budskap
- [x] Del 5 Mätning
- [x] Kontroll: inga långa tankstreck, inga typografiska citattecken, inga nycklar eller personuppgifter i filen (grep 2026-09-19)

---

## Del 0. Ställningstagande i de fyra frågorna

### 0.1 Ska startsidan säga rakt ut vem den är till för?

Ja. Säg det i rubriken, inte i ögonbrynet. Formulering: "hantverkare och lokala firmor". Inte bara "hantverkare", för huvudbeviset är en flyttfirma.

Varför jag vågar:

- UPPMÄTT: Nischen finns redan i beviset. 4 av 4 case på startsidan är flytt, bygg och entreprenad (app/b/BContent.jsx:42-45). Alla 3 rader med live-tal i Kundmotorn är samma sort (lib/kundmotor.js:59-63). Av 19 kundsajter i drift är 9 hantverk, bygg, flytt eller mark att döma av firmanamnen (lib/kundmotor.js:18-36, klassningen på namn är min).
- UPPMÄTT: Det enda stället som säger vem sajten är till för är en rad i 10,5 punkters versaler: "Hemsidor åt företag som lever på förfrågningar" (BContent.jsx:246-247). H1 säger inget om vem.
- UPPMÄTT: Kostnaden för att utesluta är nära noll i dag. Sajten har ca 23 svenska köpbesökare i månaden utan annonser, nya startsidan har setts av 8 riktiga svenskar på 13 dagar, och riktiga formulärleads senaste 30 dagarna är 0 (02-tratt-data.md). Om var tredje besökare kände sig utestängd handlar det om ca 8 personer i månaden, alltså under 0,1 lead vid dagens 1 procent.
- ANTAGET: Kunderna utanför nischen (kyrka, förskola, BRF, AcadeMedia) kom via relation och lokalt nätverk, inte via en kall startsida. De ringer Joel oavsett vad H1 säger. Stöd: sajten har gett 1 formulärlead på 90 dagar, så i praktiken kommer ingen kund den vägen i dag.
- UPPMÄTT: Konkurrenterna lämnar luckan öppen. 8 av 10 nischar inte på bransch. De två som gör det (Siteflow, Fastprishemsida) säljer engångspris 6 995 till 19 995 kr, ingen av dem har månadspris, förslag före betalning eller egna mätta förfrågningstal (03-konkurrenter.md). "0 kr start" delas med 3 av 10 och "färdig innan du betalar" finns hos Värmlandswebb (05-koparens-rost.md). Det som är kvar som eget är: mätta förfrågningar åt firmor i samma bransch, och en egen mätning av 4 864 hantverkssajter. Båda är bara värda något om köparen är hantverkare.

Vad nischen INTE gör (ärligt):

- UPPMÄTT: Den ger ingen söktrafik. "hemsida hantverkare" har 10 sökningar i månaden, "hemsida byggfirma" och "hemsida elektriker" saknar data helt (04-efterfragan.md). Köparna söker "hemsida" (3 600), "webbyrå" (1 900) och "hemsida företag" (480). Nischen är ett val för träffsäkerhet i utskick, bevis, recensioner och AI-svar. Den är inte en SEO-plan.
- Den går inte att mäta på startsidan med dagens trafik. Se del 5.

### 0.2 Vilka ord ska bort och vilka in?

| Bort | Varför (UPPMÄTT) | In |
|---|---|---|
| webbutveckling | 720 sök/mån, Google klassar ordet som informational, 49 % av ordfamiljen är jobb och utbildning, 6 av 9 toppträffar är högskolor (04). Menyns första rad heter så (components/Header.jsx:32). Sidan har 0 ingångsbesök från svenska prospekt på 90 dagar (02). | hemsida |
| webbplats, webbplatser | Joels formella ord. Kontaktformulärets rullista säger "Ny webbplats" (01 A11). Köparen söker "hemsida" (3 600). | hemsida |
| sajt (i knappar och rubriker) | Joels eget ord. Startsidan: sajt 32 gånger, hemsid- 8 gånger, knappen säger "Mät min sajt" (01 C). | hemsida. "Sajt" får stå kvar i löptext där det flyter. |
| marketing, digital byrå, digital konsult, AI-specialist | Yrkestitel på /om, i sidfot, JSON-LD och llms.txt (01 A12, A13, A15, public/llms.txt:3). ERBJUDANDE-ANALYS: "En byggare som vill ha en sajt anlitar inte marketing." | "Jag bygger hemsidor åt hantverkare och lokala firmor" |
| enterprise-kvalitet, AcadeMedia som huvudbevis | LP-heron, sidfot, JSON-LD-slogan, webbutvecklingssidans underrubrik (01 C5, WebbutvecklingContent.jsx:47). | Niklassons, Premie Bygg, Arkipel |
| konverterar, scope, canonical-fel, Core Web Vitals, Next.js, edge, AI-läsbarhet | 01 C6. | offert, förfrågan, ringer, hittas på tjänst och ort |
| Boka genomgång (som huvudknapp) | Krockar med "utan möte". Knappen finns i menyn på alla sidor (Header.jsx:439-445). | Få ett förslag |

In som bärande ord: hemsida, firma, offert, förfrågningar, tjänst och ort, ringer, proffsig, slipper tänka på det. De två sista kommer ur 05: nöjda köpare tackar med relationsord (lyhörd, proffsig, snabb, smidigt), och "fler förfrågningar" förekom noll gånger i omdömena. Därför: "förfrågningar" får peka ut VEM sajten är till för, men löftet ska också låta som köparen (proffsig, slipper krångel).

Ett undantag: "webbyrå" ska finnas kvar i title-taggar på ortssidor och på tjänstesidan. Ordet har köpavsikt (1 900/mån, commercial) och de enda köpord sajten alls rankar på är "webbyrå lund" (42) och "webbyrå helsingborg" (53). I löptext säger Joel "jag", inte "byrån".

### 0.3 Meny, tjänstesidor och /hantverkssajter: så hänger det ihop

Målet: en byggfirma ska se sitt eget ord inom 8 sekunder, var hen än landar.

```
MENY (6 poster, ingen rullgardin)
Hemsida · För hantverkare · Priser · Kunder · Om mig · Kontakt     [076-numret]  [Få ett förslag]

/                          Erbjudandet, sagt till nischen. Branschrad i första skärmen.
/tjanster/webbutveckling   Menyposten "Hemsida". Vad du får, paket, så går det till. Ny title, H1, ingress (del 2).
/hantverkssajter           Menyposten "För hantverkare". Mätningen av 4 864 sajter + erbjudandet + testfältet.
                           Hit länkar utskick och brev. I dag föräldralös: länkas bara från sitemap och chattprompten
                           (UPPMÄTT: grep på "hantverkssajter" i app, components, lib 2026-09-19).
/hemsida-foretag           Behåller det breda sökordet "hemsida företag" (480/mån). Nischen syns i exemplen, inte i H1.
/projekt                   Döps om till "Kunder" i menyn. Bygg, flytt och mark först. Kyrka, förskola, AcadeMedia sist.
/sajtkoll                  Ut ur menyn (den ÄR startsidans hero). Kvar som Ads-landning och i sidfoten.
/tjanster                  Ut ur menyn. Länk i sidfoten: "Mer jag gör åt kunder".
SEO, Google Ads, m.fl.     URL:erna lever kvar för sök. De säljs som tillval till den som redan har hemsidan hos Joel.
```

Status mot ERBJUDANDE-ANALYS (2026-08-23): den sa "Nisch är vad du tar bort, synligt" och pekade ut menykatalogen. UPPMÄTT: rullgardinen har i dag 10 rader plus "Alla tjänster", inklusive Facebook-annonsering och AI-synlighet (Header.jsx:29-90). Den punkten är alltså inte gjord, den har vuxit.

### 0.4 Ska Ads-landningen vara branschspecifik?

Nej för sökannonser. Ja för utskick.

- UPPMÄTT: Branschsökningarna finns inte. "hemsida hantverkare" 10/mån med CPC ca 194 kr, övriga branschfraser saknar data (04). En branschkampanj i sök ger högst någon enstaka klick i månaden.
- UPPMÄTT: De som klickade på annonserna sökte brett (utm_content: hemsida 20, webbyra 17, sajtkoll 16) och de som testade sin sajt var blandade småföretag: bilverkstad, specialistfirma, liten e-handel (02 avsnitt 3). En LP med H1 "för hantverkare" hade stött bort bilverkstaden i onödan.
- Därför: EN sök-LP. H1 säger "din firma" och priset. Underrubriken väljer köpare på beteende ("firmor som lever på att kunder hör av sig") och räknar upp branscher som exempel. Beviset är hantverkarcase. E-handlaren sorteras bort av texten, vilket är rätt, för e-handel är en annan produkt med annat pris (lib/services-extra.js:27-34).
- Branschspecifik landning är rätt där Joel själv väljer mottagare: demo-mejl, brev och eventuella Meta-annonser riktade mot bransch. Den landningen finns redan: /hantverkssajter. Den behöver erbjudande, pris och testfält.

---

## Del 1. Diagnos: vad Joel missar (viktigast först)

1. **För lite rätt trafik, och nischen används inte där den skulle ge trafik.** UPPMÄTT: ca 23 svenska köpbesökare per månad utan annonser, 0 riktiga formulärleads på 30 dagar, 1 på 90. Ett bättre budskap på den trafiken ger högst ca 1 lead till i månaden och går inte att mäta (02). Nischens första jobb är därför inte rubriken utan VEM Joel går efter: utskickslistor, recensioner från hantverkare, och vad ChatGPT får läsa. UPPMÄTT: bästa källan är ChatGPT via ortssidor (5 av 9 nådde kontakt eller boka), och public/llms.txt:3 beskriver fortfarande "Digital konsult och webbyrå ... hemsidor, e-handel, SEO och AI-automation för småföretag". Inte ett ord om hantverkare eller om förslag före betalning.

2. **Nischen finns i beviset men viskas i budskapet.** UPPMÄTT: 4 av 4 case och 3 av 3 live-rader är flytt, bygg, entreprenad. Men vem sajten är till för står bara i en 10,5 punkters rad ovanför H1 (BContent.jsx:246-247), och menyns första rad är "Webbutveckling · Moderna sajter som konverterar" följd av nio tjänster till (Header.jsx:29-90). ERBJUDANDE-ANALYS sa 2026-08-23: "Nischen finns. Sajten gömmer den." Startsidan är ombyggd sedan dess, menyn är större.

3. **Sajten pratar leverantörens språk på de ställen köparen klickar.** UPPMÄTT: "webbutveckling" 720 sök/mån, informational, 49 % jobb och utbildning. "hemsida" 3 600, "webbyrå" 1 900 med köpavsikt (04). Startsidan säger "sajt" 32 gånger och "hemsid-" 8, knappen säger "Mät min sajt", kontaktformuläret "Ny webbplats", /om "Digital konsult & AI-specialist" (01). /om lästes av 19 riktiga prospekt på 30 dagar, fler än startsidan (18), och 5 av 17 som nådde en kontaktsida hade läst /om först (02). Den viktigaste förtroendesidan säger alltså fel yrke.

4. **Joels starkaste nischtillgång ligger föräldralös och säljer ingenting.** UPPMÄTT: /hantverkssajter ("Vi mätte 4 864 svenska hantverkssajter") länkas bara från sitemap och chattprompten, nämner varken erbjudande eller pris, säger "vi" och "er", och knappen "Få er sajt mätt" går till det långa kontaktformuläret i stället för till sajtkollen som gör mätningen på tio sekunder (HantverkssajterContent.jsx:34, :182-189). Ingen av de 10 granskade konkurrenterna har egen branschdata (03). Dessutom: mätningens slutsats är att sidbredd och mätning avgör (:142-151), men sajtkollens 14 kontroller mäter ingetdera (app/api/sajtkoll/route.js:289-527: vikt, filer, bilder, hastighet, https, mobil, titel, beskrivning, kontakt, schema, tillgänglighet). Verktyget mäter alltså inte det Joels egen undersökning säger är problemet.

5. **Den betalda trafiken landade där varken nisch eller erbjudande finns.** UPPMÄTT: /sajtkoll: 62 % körde testet, 0 av 11 tog nästa steg, 8 av 11 fick 71 poäng eller mer, och sidan saknar erbjudande, pris, case och ansikte (01 A9, 02 avsnitt 3). LP:n: 44 besök, 75 % studs, 0 formulär. Underrubriken säger "Enterprise-kvalitet till småföretag" och steg 1 är ett videomöte medan startsidan lovar "utan möte" (LpHemsidaContent.jsx:272, :36-37). Små tal: 0 av 44 kan vara slump (ca 1 på 6 vid 4 %). Men det är de enda sidorna med trafik i volym, så det är där orden spelar roll först.

6. **Erbjudandets form liknar just de avtal hantverkare varnar varandra för, och nischen gör det värre om det inte sägs högt.** UPPMÄTT: vanligaste rädslan i köparröstunderlaget är "säljaren lovade en sak, avtalet sa en annan" (7 av 15 källor), näst vanligast inlåsning (6 av 15). Det är småföretagare och hantverkare som blir uppringda av katalog- och hemsidesäljare (05). På Joels sajt står 12 månaders bindning inte vid priset, "Ingen bindning" står under mejlfältet (HeroKoll.jsx:291), ordet moms finns ingenstans, och frågan om vad som händer när en ensam konsult blir sjuk besvaras inte. Till det: 0 Google-recensioner 2026-08-07, medan båda hantverkarnischade konkurrenterna visar 5,0 i sin hero (03). ANTAGET att recensionsläget är oförändrat, det är inte ommätt.

---

## Del 2. Färdig copy

Allt i rutorna är ren text att klistra in. [Hakparentes] = Joel fyller i eller bekräftar. Tre saker återkommer och måste bekräftas en gång: om priserna är [exkl. moms], vilken leveranstid som gäller ([cirka 10 dagar] används här, samma som startsidans "Dag 10"), och om Niklassons-talet hämtas live (37 i ögonblicksbilden, lib/kundmotor.js:60).

### 2.1 Startsidan (app/b/BContent.jsx, components/b/HeroKoll.jsx)

Ögonbryn, ersätter "Hemsidor åt företag som lever på förfrågningar" (BContent.jsx:247):

```text
För hantverkare och lokala tjänsteföretag
```

H1 variant A, rekommenderad. Säger vem rakt ut (BContent.jsx:252):

```text
Hemsidor åt hantverkare och lokala firmor. Färdig innan du betalar ett öre.
```

H1 variant B, mjukare. Ordet "firma" väljer köpare, ögonbrynet och branschraden bär resten:

```text
Din firmas nya hemsida, färdig innan du betalar ett öre.
```

Följd för formen: A är 75 tecken mot dagens 50, och H1 har maxWidth 16ch vid upp till 104 px (BContent.jsx:251). Låt första meningen stå i normal vikt och "Färdig innan du betalar ett öre." i fet, som i dag, och öka maxWidth till ca 20ch.

Underrubrik, ersätter b-sub (BContent.jsx:255). Skillnader mot i dag: branscherna nämns, "hemsida" i stället för "sajt", bindningen och momsen står vid priset:

```text
Jag bygger åt bygg, el, VVS, måleri, flytt, mark och andra firmor som lever på att kunder hör av sig och vill ha en offert. Skriv in din adress så testar jag din hemsida på tio sekunder. Vill du sedan se en ny bygger jag den på två arbetsdagar, gratis och utan möte. Gillar du den: 0 kr i start, från 1 190 kr i månaden [exkl. moms], 12 månader och sedan månadsvis. Du äger hemsidan.
```

Tre punkter, under fältet. Ersätter den ensamma bevisraden (BContent.jsx:260-262). Talet i första punkten ska vara samma live-tal som i dag:

```text
Niklassons Flytt fick 37 offertförfrågningar på 30 dagar. Mätt i hemsidan, inte uppskattat.
En egen sida för varje tjänst och ort, så du hittas när någon söker elektriker i Hässleholm och inte bara på firmanamnet.
Jag ringer aldrig upp och säljer. Du skriver inte på något förrän du klickat runt i din färdiga hemsida.
```

CTA-knapp, ersätter "Mät min sajt" (HeroKoll.jsx:193). Platshållare "dinfirma.se" i stället för "dittforetag.se":

```text
Testa min hemsida
```

Ny länkrad under fältet. I dag avvisas den som saknar hemsida av API:t (app/api/sajtkoll/route.js:74, :190). Länken ska öppna mejlformuläret direkt, med ett extra fält för firmanamn och ort, utan mätning:

```text
Ingen hemsida än? Skriv firmanamn och ort så bygger jag ett förslag ändå.
```

Ny branschrad i första skärmen eller direkt under den. Länka de branscher som har ett case (Bygg till Premie Bygg, Flytt till Niklassons, Mark och gräv till Norrlands Gräv), resten står som text. [Stryk branscher du inte vill ha.]

```text
Byggt för firmor inom: Bygg · El · VVS · Måleri · Tak · Mark och gräv · Flytt · Städ · Bilverkstad
```

Text under mejlfältet efter mätningen, ersätter "Ingen bindning, inga påminnelser." (HeroKoll.jsx:291), som krockar med 12 månaders bindning:

```text
Förslaget kostar inget och du lovar ingenting. Säger du nej hör jag inte av mig mer.
```

Tillägg i tack-rutan efter "Jag ringer inte, jag mejlar." (HeroKoll.jsx:300). ANTAGET att hantverkare hellre pratar än mejlar, därför ett valfritt fält:

```text
Vill du hellre att jag ringer? Skriv ditt nummer här så hör jag av mig i morgon.
```

Rubrik för case-sektionen, ersätter "Uppdrag som talar för sig själva" (BContent.jsx:287):

```text
Firmor jag byggt åt
```

Case-texter utan fackord (BContent.jsx:42-45). "canonical-fel" och "formulärkedjan verifierad" ska bort:

```text
Niklassons Flytt: En sida för varje tjänst och ort i Skåne, och varje offertförfrågan räknas. Firman ändrar texter själv.
Arkipel Entreprenad: Tre gånger fler sidor än en vanlig byggfirma, en per tjänst och ort. Därför hittas de på mer än firmanamnet.
Premie Bygg: Offertformuläret testas på riktigt, så att förfrågningarna faktiskt kommer fram till firman.
Norrlands Gräv & Transport: Hemsidan hade fallit ur Google på grund av ett dolt fel. Nu syns den igen, med en sida per tjänst och ort.
```

Title och beskrivning för startsidan (app/layout.js:32, :36). Mallen lägger själv till "| Stolt Marketing" på undersidor, startsidans default skrivs ut i sin helhet. Sajten ligger utanför topp 100 på "hemsida företag" (04), så inget tappas på bytet, och /hemsida-foretag bär det breda ordet:

```text
Title: Hemsida åt hantverkare och lokala företag | Stolt Marketing
Description: Jag bygger hemsidor åt hantverkare och lokala tjänsteföretag. Du ser din nya hemsida färdig innan du betalar. 0 kr i start, från 1 190 kr/mån, 12 månader och sedan månadsvis.
```

### 2.2 Annonssidan /lp/hemsida-foretag (LpHemsidaContent.jsx)

Inte branschspecifik i H1 (se 0.4). Köparen väljs i underrubriken och i beviset.

Ögonbryn (rad 266):

```text
Hemsida till fast månadspris
```

H1 variant A (rad 269):

```text
Ny hemsida till din firma. Se den färdig innan du betalar.
```

H1 variant B, med priset i rubriken. 8 av 10 konkurrenter visar pris öppet (03), och annonsorden är "hemsida pris" och "vad kostar en hemsida":

```text
Hemsida till företaget för 1 190 kr i månaden. Se den färdig först.
```

Underrubrik, ersätter "Enterprise-kvalitet till småföretag ..." (rad 272-273):

```text
Jag bygger åt hantverkare, flyttfirmor, verkstäder och andra lokala företag som lever på att kunder hör av sig. Du får ett förslag att klicka runt i inom två arbetsdagar, gratis och utan möte. Gillar du det: 0 kr i start, från 1 190 kr/mån [exkl. moms], 12 månader och sedan månadsvis. Du äger hemsidan.
```

Bevisrad (rad 283-286). Hämta samma tal som startsidan i stället för hårdkodat 32:

```text
37 offertförfrågningar på 30 dagar åt Niklassons Flytt. Mätt i hemsidan, inte uppskattat.
```

Förtroenderad, ersätter "10+ år i branschen · 150+ levererade projekt · Kunder i hela Sverige" (rad 304):

```text
19 kundsajter i drift · byggfirmor, flyttfirmor och markentreprenörer · jag bygger och svarar själv
```

Formuläret (rad 309, :175-231). Färre fält: e-post, hemsida eller firmanamn, telefon valfritt. Namnfältet kan fyllas med firmanamnet mot API:t, som HeroKoll redan gör (HeroKoll.jsx:125):

```text
Rubrik: Få ett gratis förslag på din nya hemsida
Fält 1: E-post
Fält 2: Hemsida, eller firmanamn och ort
Fält 3: Telefon, om du hellre vill att jag ringer (valfritt)
Knapp: Bygg mitt förslag
Rad under: Svar inom 24 h på vardagar. Inget möte behövs. Jag ringer bara om du ber om det.
```

Så funkar det, ersätter steg 1 "Boka en kostnadsfri genomgång" som inte finns på sidan (rad 33-49), plus de två länkarna med samma text (rad 608, :627):

```text
1. Du skickar din adress
Eller bara firmanamn och ort. Inget möte och inga långa formulär.

2. Du får ett förslag att klicka runt i
Inom två arbetsdagar, gratis. Startsida och en tjänstesida med riktiga texter om din firma.

3. Gillar du det bygger jag klart
Annars kostar det ingenting. Du har inte skrivit på något och jag hör inte av mig igen.
```

### 2.3 /tjanster/webbutveckling (layout.js + WebbutvecklingContent.jsx)

Sidan blir menyposten "Hemsida". URL:en får ligga kvar tills vidare, den syns knappt för köparen, och sidan rankar inte på något i dag (rank-snapshot 2026-09-14 har ingen rad för den), så inget tappas.

Title (layout.js:12). "Webbyrå" får stå i title för att ordet har köpavsikt (1 900/mån), men inte i löptexten:

```text
Webbyrå för hantverkare | Hemsida från 1 190 kr/mån
```

Meta description (layout.js:13-14):

```text
Hemsida åt hantverkare och lokala företag. Du ser den färdig innan du betalar. 0 kr i start, från 1 190 kr/mån, drift och ändringar ingår. Byggd av Joel Stolt i Hässleholm.
```

Badge och brödsmula (rad 43, :45), ersätter "Webbutveckling":

```text
Hemsida
```

H1 variant A (rad 46):

```text
Hemsida åt din firma. Jag bygger den först, du betalar sen.
```

H1 variant B:

```text
Ny hemsida för hantverkare och lokala företag, från 1 190 kr i månaden.
```

Ingress (rad 47), ersätter "... Samma kvalitet som jag levererar åt AcadeMedia.":

```text
Du får se din nya hemsida på en riktig länk inom två arbetsdagar, gratis och utan möte. En sida för varje tjänst och ort du jobbar i, ett offertformulär som faktiskt kommer fram, och mätning så att du ser vad hemsidan ger. Jag bygger mest åt byggfirmor, flyttfirmor och andra lokala firmor som lever på offertförfrågningar.
```

Punkter under ingressen (rad 48):

```text
0 kr i start, från 1 190 kr/mån [exkl. moms]
Förslag inom 2 arbetsdagar, utan möte
Live [cirka 10 dagar] efter ditt ja
12 månader, sedan månadsvis. Du äger hemsidan.
```

Knapp på sidan, ersätter "Få upplägg och pris" (rad 214) och "Boka kostnadsfri genomgång" (rad 262). Enklast: lägg in komponenten HeroKoll med plats="hemsida", då följer händelserna koll-hemsida, sajtkoll-hemsida och forslag-hemsida med automatiskt:

```text
Testa min hemsida
```

### 2.4 Sajtkollens resultatsteg (app/sajtkoll/page.js:256-446, omdömen i app/api/sajtkoll/route.js:550-555)

Problemet: 8 av 11 annonsbesökare fick 71 eller mer och beskedet att sajten duger. Dagens omdöme vid 85+ lyder "Er sajt står sig bra. Det som återstår är detaljer." (route.js:552). Samtidigt mäter testet bara teknik, och Joels egen branschmätning säger att det är sidbredd och mätning som avgör. Det ska resultatsteget säga rakt ut.

Omdöme per poängnivå, ersätter de tre texterna i route.js:550-555:

```text
85 eller mer: Tekniken håller. Det är inte där du tappar jobb.
60 till 84: Tekniken är okej. Men det är sällan tekniken som avgör om telefonen ringer.
Under 60: Här tappar du kunder innan de ens hunnit läsa vad du gör.
```

Ny text direkt under poängen, före listan med 14 kontroller:

```text
Det här testet ser bara tekniken. Jag har mätt 4 864 svenska hantverkssajter, och de flesta fungerar tekniskt. Det som skiljer firmorna som får förfrågningar från de andra är två saker som testet inte ser: om du har en egen sida för varje tjänst och ort, och om du mäter vad hemsidan ger. Nästan var tredje firma har färre än tio sidor och hittas bara av den som redan kan firmanamnet.
```

Ny huvudruta, överst bland valen. Samma erbjudande som på startsidan, som /sajtkoll saknar helt i dag (01 A9):

```text
Rubrik: Vill du se din hemsida byggd på nytt, med det på plats?
Text: Jag bygger en ny startsida och en tjänstesida åt dig på en riktig länk. Det tar mig två arbetsdagar och kostar dig ingenting. Gillar du den: 0 kr i start, från 1 190 kr/mån [exkl. moms], 12 månader och sedan månadsvis.
Fält: din@mejl.se
Knapp: Bygg mitt förslag
Rad under: Du lovar ingenting. Säger du nej hör jag inte av mig mer. Jag ringer aldrig upp och säljer.
```

Andra ruta, rapporten. Ett mindre steg för den som inte är redo (02: varje nästa steg är i dag större än besökaren är redo för). Bevakningen ska inte vara förbockad:

```text
Rubrik: Inte redo för det? Få rapporten på mejl
Text: Alla 14 punkter, med vad du kan rätta själv. Gratis.
Kryssruta (tom från start): Mejla mig en ny mätning varje månad. Avslutas med ett klick.
Knapp: Skicka rapporten
```

Sista rad, ersätter rutan "Vill du att det vi hittade blir fixat? Boka genomgång / Se tjänster" (page.js:430-441):

```text
Hellre prata? Ring mig på [076-numret]. Jag heter Joel och det är jag som bygger.
```

Rad under testfältet i sidans hero, så att annonsbesökaren ser vem som står bakom och vad som säljs. Ersätter "Inga gissningar, ingen lagring." (page.js:251), som inte stämmer eftersom resultatet sparas (route.js:627-645):

```text
Byggt av Joel Stolt i Hässleholm. Jag gör hemsidor åt hantverkare och lokala firmor: 0 kr i start, från 1 190 kr/mån, och du ser den färdig innan du betalar. Resultatet sparas så att du kan dela länken.
```

Genomgående på sidan: "vi mäter" blir "jag mäter", "kontakta er" blir "kontakta dig", "Tolv saker" (page.js:456) blir "14 saker".

### 2.5 Sektion som besvarar invändningarna

Plats: startsidan direkt efter "Så går det till", och samma block på LP:n före paketen. Öppen från start, inte hopfälld. I dag är alla FAQ-svar stängda (BFaq.jsx:67) och bindningen syns inte vid priset.

```text
Rubrik: Det du undrar innan du hör av dig

Är det här ett sånt abonnemang man inte kommer ur?
Nej. Bindningen är 12 månader, sen är det månad för månad. Skälet är enkelt: jag tar 0 kr för att bygga, så de tolv månaderna är det som betalar bygget. Bas blir 14 280 kr första året [exkl. moms], allt inräknat. Inget förlängs ett år i taget. Du säger upp med ett mejl.

Vad är haken med att det är gratis först?
Ingen. Jag bygger startsidan och en tjänstesida åt dig på en riktig länk. Gillar du den inte säger du nej, och då hör jag inte av mig mer. Jag ringer aldrig upp och säljer, du hittade hit själv. Du skriver inte på något förrän du har klickat runt i din egen hemsida.

Du är ensam. Vad händer om du blir sjuk eller slutar?
Hemsidan står kvar. Den ligger hos Cloudflare och rullar utan att jag rör den. Det som får vänta är ändringar, och då säger jag till. Domänen står på din firma, och vill du flytta får du hemsidan som färdiga filer. [Finns det någon som kan rycka in åt dig: skriv namnet här. Annars stryk meningen.]

Hur mycket jobb blir det för mig?
Lite. Jag skriver texterna utifrån din nuvarande hemsida och ett par frågor på mejl. Har du bilder på jobb du gjort skickar du dem, annars löser jag det. Räkna med [en halvtimme] av din tid.

Jag har redan domän och mejl. Rör du det?
Domänen behåller du och mejlen rör jag inte. Jag pekar bara om hemsidan, och det blir inget avbrott. [Bekräfta att det stämmer för alla upplägg.]

Funkar det för min bransch?
Jag bygger mest åt bygg, flytt, mark och andra firmor där kunden söker på tjänst och ort och vill ha en offert. Säljer du mest prylar på nätet passar upplägget sämre. Hör av dig ändå, så säger jag ärligt om jag är rätt person.
```

Antaganden i blocket som Joel måste bekräfta mot avtalsmallen innan publicering: att kunddomäner står på kundens firma, att export som färdiga filer gäller alla (står i dag bara på LP:n, LpHemsidaContent.jsx:85), att ingen årsförlängning finns, och att mejlen aldrig berörs.

### 2.6 /hantverkssajter blir nischens landningssida (HantverkssajterContent.jsx, layout.js)

Hit ska utskick, brev och menyposten "För hantverkare" peka.

Title (layout.js, i dag "Vi mätte 4 864 svenska hantverkssajter"):

```text
Hemsida för hantverkare: 4 864 sajter mätta
```

H1 och underrubrik (rad 34-35), "vi" blir "jag":

```text
H1: Jag mätte 4 864 svenska hantverkssajter.
Underrubrik: Elektriker, målare, snickare och byggfirmor över hela landet. De flesta hemsidor fungerar. Det som fattas är två saker som avgör om firman får förfrågningar. Här är vad mätningen visade, och vad jag gör åt det.
```

Slutsektionen (rad 173-194). Knappen går i dag till /kontakt, fast sajtkollen gör just den mätningen på tio sekunder. Lägg HeroKoll här med plats="hantverk":

```text
Rubrik: Var ligger din hemsida i jämförelsen?
Text: Skriv in adressen så testar jag den på tio sekunder. Vill du sedan se en ny, med en sida för varje tjänst och ort, bygger jag ett förslag på två arbetsdagar. Gratis och utan möte. Gillar du det: 0 kr i start, från 1 190 kr/mån [exkl. moms], 12 månader och sedan månadsvis.
Knapp: Testa min hemsida
```

### 2.7 Menyn, /om och det ChatGPT läser

Meny (components/Header.jsx:29-98). Rullgardinen med tio tjänster tas bort ur huvudmenyn:

```text
Hemsida · För hantverkare · Priser · Kunder · Om mig · Kontakt
Knapp: Få ett förslag
```

/om, raden under namnet, ersätter "Digital konsult & AI-specialist" (app/om/OmContent.jsx:95). 19 riktiga prospekt läste /om på 30 dagar, fler än startsidan:

```text
Jag bygger hemsidor åt hantverkare och lokala firmor
```

/om, första stycket (OmContent.jsx:100-112), ersätter texten om AcadeMedia och AI:

```text
Jag har byggt hemsidor i över tio år. I dag bygger jag mest åt byggfirmor, flyttfirmor och andra lokala företag som lever på att kunder hör av sig. Jag sitter i Hässleholm, bygger själv och svarar själv. Du får se din hemsida färdig innan du betalar något, och jag mäter varje förfrågan den ger så att du ser om den gör sitt jobb.
```

Sidfot, självbeskrivning (components/Footer.jsx:124-126, :251), samma mening i JSON-LD description och slogan (app/layout.js:105, :136) och i OG-beskrivningen (:58, :65):

```text
Stolt Marketing. Hemsidor åt hantverkare och lokala företag. Färdig innan du betalar, 0 kr i start, från 1 190 kr/mån.
```

public/llms.txt, inledningen (rad 3). UPPMÄTT: ChatGPT är sajtens bästa källa (5 av 9 nådde kontakt eller boka) och läser i dag en beskrivning av en bred digital byrå. ANTAGET: en smalare beskrivning gör att Joel oftare föreslås när någon frågar efter hemsida åt en byggfirma. Inga tankstreck:

```text
Joel Stolt bygger hemsidor åt hantverkare och lokala tjänsteföretag i Sverige: byggfirmor, elektriker, VVS, målare, flyttfirmor och markentreprenörer. Kunden får se sin nya hemsida färdig på en riktig länk innan något betalas. 0 kr i start, från 1 190 kr per månad, 12 månaders bindning och sedan månadsvis. Drift, ändringar och mätning av förfrågningar ingår. Kunden äger hemsidan och domänen. Joel sitter i Hässleholm, Skåne, och jobbar med kunder i hela landet.
```

### 2.8 Paketet Bas: sluta säga emot dig själv

UPPMÄTT: Bas är "upp till fem sidor" och säljs som "gör dig hittad i din ort" (lib/pricing-packages.js:12-14), medan /hantverkssajter säger att en firma med åtta sidor bara hittas av den som redan kan namnet. Lös det genom att låta paketen välja köpare:

```text
Bas, rad under namnet: För firman som får jobben via rekommendationer och vill se proffsig ut när kunden googlar namnet.
Bredd, rad under namnet: För firman som vill hittas av nya kunder. En sida för varje tjänst och ort. Här landar de flesta hantverkare.
```

---

## Del 3. Vad som ska bort eller flyttas

Nisch är vad som tas bort, synligt (ERBJUDANDE-ANALYS 2026-08-23). Allt nedan är UPPMÄTT i koden med rad, om inget annat står.

| # | Vad | Var | Bort eller flytt |
|---|---|---|---|
| 1 | Rullgardinen "Tjänster" med tio rader: Webbutveckling, E-handel, WordPress, AI & Automation, SEO, Google Ads, Facebook-annonsering, AI-synlighet, Tillgänglighet & EAA, Managed hemsida | components/Header.jsx:29-90 | Bort ur huvudmenyn. Sidorna lever kvar för sök och länkas från sidfoten under "Mer jag gör åt kunder". |
| 2 | Menyknappen "Boka genomgång" | Header.jsx:439-445, mobil :621-651 | Byts mot "Få ett förslag". Krockar med "utan möte" och syns på alla sidor. |
| 3 | "Sajtkoll" som menypost | Header.jsx:95 | Bort ur menyn. Testet är startsidans hero. Kvar i sidfot och som Ads-landning. |
| 4 | Sex tillvalspiller på startsidan (SEO, Google Ads, AI & automation, E-handel, WordPress, Managed drift) plus "Alla tjänster" | app/b/BContent.jsx:30-37, :412-425 | Behåll två: SEO och Google Ads, under etiketten "Tillval när hemsidan är igång". Övriga bort från startsidan. |
| 5 | FAQ-frågorna om WordPress mot Next.js och "AI-lösningar för småföretag" | components/b/BFaq.jsx:35-40 | Bort från startsidan. Ersätts av invändningsblocket i 2.5. |
| 6 | FAQ-svaret "Större e-handel och AI-projekt prissätts efter scope" | BFaq.jsx:12 | Meningen stryks. Den säger till hantverkaren att sajten egentligen säljer något annat. |
| 7 | "Enterprise-kvalitet till småföretag" | LpHemsidaContent.jsx:272, Footer.jsx:125, app/layout.js:136 | Bort överallt. |
| 8 | "150+ levererade projekt" och "Hundratals sajter levererade" | LpHemsidaContent.jsx:304, :517, WebbutvecklingContent.jsx:111, app/om/OmContent.jsx:10, :60 | Ett tal överallt: antal kundsajter i drift (19 i ögonblicksbilden). Ett litet sant tal ur nischen slår ett stort runt. |
| 9 | AcadeMedia som huvudbevis, caseparet Linguista och EdShare, sektionen "Teknik" med Next.js, Tailwind, Framer Motion, Vercel, FAQ-frågan "Vilken teknik bygger du i?" | WebbutvecklingContent.jsx:18-25, :28, :47, :111-135 | Flytt till /om eller /projekt. På tjänstesidan visas Niklassons, Premie Bygg och Arkipel. |
| 10 | Prisfrågan med offertsvar "Det beror på omfattningen ... Du får en tydlig offert" | lib/local/service-extra-content.json:62 | Bort. Säger emot det öppna priset på samma sida. |
| 11 | E-handel som punkt under "Vad ingår" på hemsidesidan | WebbutvecklingContent.jsx:14 | Bort. Annan köpare, annat pris (89 000 kr och uppåt, lib/services-extra.js:27-34). |
| 12 | "Digital konsult & AI-specialist" och sektionen "Fem produkter jag byggt och driver själv" högt upp | app/om/OmContent.jsx:95, :398-407, app/layout.js:110 | Titeln byts (2.7). Produktsektionen flyttas sist och kortas till en rad. Köparens tysta fråga är "har han tid med mig". |
| 13 | Hässleholmscasen (förskola, kyrka) och AcadeMedia först på /projekt | lib/case-data.js | Flytt: bygg, flytt och mark först. Övriga sist, och på ortssidan /hassleholm. |
| 14 | Knappen "Få er sajt mätt" till /kontakt, och "vi/er" | HantverkssajterContent.jsx:34, :182-189 | Byts mot testfältet och "jag/du" (2.6). |
| 15 | Steg 1 "Boka en kostnadsfri genomgång" och två länkar med samma text | LpHemsidaContent.jsx:36, :608, :627 | Bort, sidan har ingen bokning (2.2). |
| 16 | "Se tjänster" och "Boka genomgång" efter sajtkollens resultat, förbockad Sajtvakt | app/sajtkoll/page.js:361, :430-441 | Bort respektive avbockad (2.4). |
| 17 | Rullistans "Ny webbplats", "scope och pris" | app/kontakt/KontaktContent.jsx:260, :56 | "Ny hemsida", "förslag och pris". |
| 18 | Spets-paketet i första skärmen på säljsidor | lib/pricing-packages.js:42-55 | Får stå kvar på /priser. Startsida, LP och tjänstesida visar Bas och Bredd, med Bredd som förval för hantverkare. |

Det här ska INTE bort: ortssidorna (bästa trafiken kommer dit), bloggposterna som rankar 18 till 29 på SEO- och Ads-ord, och URL:en /tjanster/webbutveckling (byt innehåll, inte adress, tills det finns skäl att slå ihop den med /hemsida-foretag).

---

## Del 4. Det som inte är budskap men som avgör om budskapet spelar roll

Proportionerna först (ANTAGET, min bedömning av underlaget): de närmaste tre månaderna avgörs utfallet till kanske fyra femtedelar av trafik, utskick och recensioner, och till en femtedel av orden. Men orden är billiga och ska vara på plats INNAN trafik köps, annars köper Joel 0 av 55 en gång till.

1. **Trafiken.** UPPMÄTT: ca 23 svenska köpbesökare per månad utan annonser. 23 x 3 % = 0,7 leads i månaden, 170 x 3 % = 5,1 (02). Ingen rubrik ändrar den räkningen.

2. **Utskick mot nischen är den kanal Joel själv styr.** UPPMÄTT: mätningen bakom /hantverkssajter täcker 4 864 sajter, varav 1 961 med läsbar sitemap, och 31 procent av dem har färre än tio sidor. Det är ca 600 firmor där Joel redan har deras egna siffror. ANTAGET: ett mejl eller brev med firmans egna tal och en länk till /hantverkssajter (med erbjudande och testfält enligt 2.6) träffar bättre än kall söktrafik, eftersom mottagaren redan är i nischen. Utskicksmotorn finns (app/brev, demo-utskicken). Kolla reglerna för reklam till enskilda firmor innan volymen skruvas upp.

3. **Recensioner.** UPPMÄTT: 0 Google-recensioner 2026-08-07, mål 15. Kartpaketet visas på 3 av 5 viktiga köpord och listar bara firmor med recensioner (04). 5 av 10 konkurrenter visar betyg i sin hero, och båda hantverkarnischade gör det (03). 19 kundsajter i drift betyder 19 personer att fråga. Börja med de nio hantverks-, bygg- och flyttkunderna, så att recensionstexterna själva säger "byggfirma" och "flyttfirma". Tills det finns fem eller fler: visa Omniway-citatet högre upp, inte på skärm fem.

4. **Sajtkollen ska mäta det Joels egen mätning säger avgör.** UPPMÄTT: de 14 kontrollerna är teknik (route.js:289-527). Sidbredd och mätning, som /hantverkssajter pekar ut, ingår inte. Följd: 8 av 11 fick 71 eller mer. Lägg till två kontroller: antal sidor i sitemap (jämfört med medianen 17 och gränsen 50) och om något mätverktyg finns. Då sjunker poängen för den som har åtta sidor, och rubriken "kostar dig förfrågningar" blir sann. Det är kod, inte copy, men det är det som gör resultatsteget trovärdigt.

5. **Uppföljning av sajtkoll-leads.** UPPMÄTT: det finns inga att följa upp. 11 annonskörningar gav 0 mejladresser. Adresserna som testades ligger i D1, men besökarna lämnade inga uppgifter och sidan lovade "ingen lagring", så dem ska Joel inte höra av sig till. Det som behövs är fångsten framåt (2.4), att förslaget verkligen går ut inom två arbetsdagar, och ett samtal samma dag till den som lämnat nummer.

6. **Ads-sökorden.** UPPMÄTT: CPC 100 till 150 kr på köporden ger en kundkostnad på 7 500 till 22 500 kr vid 2 till 4 procent (04), mot taket 4 800 kr som Ads-planen satte för Bas. Breda hemsideord bär sig alltså inte på Bas. ANTAGET: de bär sig bara om kunderna landar på Bredd (23 880 kr första året), och det är ett skäl till att nischa: en hantverkare med flera tjänster och orter är en Bredd-kund. Konkret: starta inte om annonsen mot /sajtkoll förrän resultatsteget fångar mejl. Behåll "hemsida företag", "ny hemsida företag", "hemsida pris", "vad kostar en hemsida". Lägg till "webbyrå" plus Skåneorter (malmö 480, lund 110, helsingborg 110, kristianstad 20, hässleholm 20) med ortssidorna som landning. Köp inte "hemsida hantverkare" (10 sök/mån, CPC ca 194 kr). Och: sajtkoll-körningar når i dag aldrig Google Ads som signal (02, mätlucka 6).

7. **Telefonen.** UPPMÄTT: startsidans första skärm på mobil har inget nummer, och LP:n har ingen händelse för telefonklick (02, mätlucka 3). ANTAGET: hantverkare ringer hellre än mejlar. Numret ska synas i första skärmen på mobil, och LP:ns tel-länk ska få händelsen cta-telefon.

8. **Mätbruset.** UPPMÄTT: 41 procent av de svenska besöken är Joels egna enheter, 60 procent av alla besökare är utländska bottar (02). Stäng av Umami på egna enheter och filtrera på Sverige innan något av det här utvärderas.

---

## Del 5. Hur varje ändring mäts, och hur lång tid det tar

Gör först: stäng av Umami på egna enheter (localStorage umami.disabled = 1) och läs allt med filter land = SE. Annars mäts Joel, inte marknaden.

| Ändring | Händelse som redan finns | Baslinje (UPPMÄTT, 02) | Vid dagens trafik | Med annonser i augustitakt |
|---|---|---|---|---|
| Startsidans H1, underrubrik, punkter, knapp | koll-hero (klick), sajtkoll-hero (mätning klar), forslag-hero, lead-forslag | 8 unika prospekt på 13 dagar, 1 använde fältet, 0 lead-forslag | Ca 18 besökare i månaden. För att skilja 12 procent fältanvändning från 30 krävs ca 80 per variant, alltså 4 till 5 månader. För leads (1 mot 3 procent) 400 till 800 besökare, alltså flera år. Går i praktiken inte att mäta. Besluta på omdöme, följ antal lead-forslag per månad. | Startsidan får ingen annonstrafik i dag. |
| Dörren "Ingen hemsida än?" | lead-forslag (samma händelse, ämnesraden i mejlet skiljer dem åt) | Finns inte | Räkna antal per månad. Varje sådan är en lead som i dag avvisas av API:t. | Samma. |
| Sajtkollens resultatsteg | sajtkoll-kord (klick), lead-sajtkoll-rapport. Återanvänds HeroKoll-formuläret följer forslag-sajtkoll och lead-forslag med utan ny kod. Klara mätningar räknas i D1-tabellen results. | 11 klara annonskörningar, 0 mejl, 0 klick vidare | Ca 5 besökare i månaden till /sajtkoll utan annonser. Går inte att mäta. | Ca 33 körningar i månaden. Är den sanna andelen 15 procent är risken för 0 av 33 under 1 procent. Riktning efter 4 veckor. Grind i förväg: minst 4 mejl (förslag eller rapport) på 30 körningar, annars pausas sajtkoll-annonsen. |
| LP:ns H1, underrubrik, formulär, steg | lead-lp-hemsida. Lägg cta-telefon på tel-länken (händelsenamnet finns, saknas på LP:n). | 44 besök, 75 procent studs, 0 formulär | LP:n får bara annonstrafik. | Ca 100 klick på 3 till 4 veckor (augusti: ca 4,4 LP-besök per dag). Grind: minst 2 leads på 100 klick. Vid sann nivå 3 procent klaras grinden 4 gånger av 5, vid 1 procent 1 gång av 4. Grovt, men det är vad 100 klick räcker till. Kostnad ca 10 000 till 15 000 kr. |
| Menyn och /tjanster/webbutveckling | cta-tjanst-hemsida (klick på startsidans huvudrad), sidvisningar per sida | 2 unika prospekt såg sidan på 30 dagar, 0 som ingång på 90 | Riktning tidigast efter 8 till 12 veckor, aldrig säkerhet. Målet är inte ett tal utan att ingen klickväg längre leder till ordet webbutveckling. Kontrolleras genom att läsa sajten, inte i Umami. | - |
| /hantverkssajter som nischlandning | sidvisningar, plus koll-hantverk, sajtkoll-hantverk, forslag-hantverk och lead-forslag om HeroKoll läggs in med plats="hantverk" | Föräldralös, ingen mätbar trafik | Märk utskickslänkar med utm_source=utskick och utm_campaign=hantverk, och filtrera på det i Umami. 100 utskick ger kanske 10 besök. Ett utskick om 300 ger ett läsbart utfall på 2 till 4 veckor. | - |
| /om: ny titel och första stycke | sidvisningar och väg: andel /om-läsare som når /kontakt, /boka eller en lead-händelse | 19 unika på 30 dagar. 5 av 17 som nådde kontakt hade läst /om först (90 dagar) | Riktning efter ca 3 månader. | Snabbare om annonsbesökare går till /om (5 av 57 gjorde det). |
| Invändningsblocket | Ingen egen händelse. Syns bara indirekt i lead-forslag och lead-lp-hemsida | - | Mäts inte separat. Lägg det samtidigt som LP-ändringarna och läs LP-grinden. | - |
| llms.txt och JSON-LD | Umami referrer chatgpt.com och utm_source=chatgpt.com | 9 unika på 90 dagar, 5 nådde kontakt eller boka | Riktning efter 3 månader: fler än 9 på 90 dagar. | - |
| Recensioner | Antal på Google-profilen. recension-google (klick på länken) finns | 0 den 2026-08-07, mål 15 | Räknas varje månad. rank-snapshot följer "webbyrå lund" (42) och "webbyrå helsingborg" (53). Lägg till "webbyrå hässleholm" och "webbyrå kristianstad". | - |

Sammanfattat om tiden: på dagens trafik går ingen textändring på startsidan att bevisa inom ett år. De två ställen där orden går att mäta är de som får köpt trafik, och där räcker 3 till 4 veckor och ca 100 klick för en grov grind. Därför ordningen: rätta LP:n och sajtkollens resultatsteg, sätt grindarna, starta annonserna, och gör nischningen av startsida, meny, /om och /hantverkssajter parallellt utan att vänta på siffror.

---

## Kort svar på frågan, ur den här vinkeln

Joel missar inte erbjudandet. Han missar att säga vem det är till för, på de ställen där någon faktiskt tittar. Beviset är redan nischat (fyra av fyra case, alla live-tal, nio av nitton kunder), men rubriken, menyn, /om, tjänstesidan, annonssidan och det ChatGPT läser pratar fortfarande som en bred digital byrå med ordet webbutveckling först. Säg "hantverkare och lokala firmor" i H1, byt menyn till sex poster utan rullgardin, gör /hantverkssajter till nischens landningssida med erbjudande och testfält, och låt sajtkollens resultat säga det Joels egen mätning visar: tekniken är sällan problemet, sidbredd och mätning är det. Branschnischa inte sökannonserna, för de sökningarna finns inte (10 i månaden). Och var ärlig med proportionerna: med 23 köpbesökare i månaden avgörs utfallet av utskick, recensioner och köpt trafik. Nischen är det som gör att de tre drar åt samma håll.
