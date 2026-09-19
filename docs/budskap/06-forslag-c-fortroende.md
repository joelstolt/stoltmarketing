# Förslag C: Förtroende och bevis först

Status: KLAR 2026-09-19. Alla sex delsteg skrivna och checkpointade.

Vinkel: en främling litar inte på en okänd ensam konsult. Frågan är inte om löftet är bra, utan om någon tror på det.

Läsregel: UPPMÄTT = siffra eller citat med källa (fil:rad, underlagsfil 01 till 05, eller API-svar). ANTAGET = min bedömning. Små tal är små tal: nästan allt beteende nedan bygger på 4 till 20 personer och är mönster, inte bevis.

## Checkpoint-logg
- [x] Steg 1: läst underlag 01 till 05
- [x] Steg 2: läst koden (BContent, HeroKoll, BFaq, SaGarDetTill, Kundmotor, LP, webbutveckling, sajtkoll, om, case Niklassons, CloseBlock) + en DataForSEO-slagning på Google-profilen
- [x] Steg 3: bevisinventering
- [x] Steg 4: invändningarna
- [x] Steg 5: copy (avsnitt 4)
- [x] Steg 6: bort/flyttas, inte-budskap, mätning, ordning (avsnitt 5 till 9)

## Kort svar

Erbjudandet är inte problemet. Problemet är att en främling inte har något skäl att tro på det. Du är en okänd, ensam konsult med 3 Google-recensioner som erbjuder 0 kr i start, månadspris och bindning. Det är exakt formen på avtalen som företagare varnar varandra för (05). Det folk faktiskt gör på sajten är att kolla upp dig: de läser /om och de klickar på caset (02). Just de två sidorna har minst bevis på hela sajten.

Det du missar är alltså inte en bättre rubrik. Det är:
1. recensioner,
2. kundens egen röst i casen,
3. ditt ansikte och dina villkor bredvid knappen i stället för på skärm sex,
4. att sajten säger samma sak på varje sida,
5. svar på frågan ingen ställer högt: vad händer om du försvinner.

Ärlig proportion: med ca 23 svenska köpbesökare i månaden (02) ger allt i det här dokumentet högst ungefär 1 lead till per månad, och det går inte att mäta på sajten. Undantaget är recensionerna. De höjer tilliten och de är inträdesbiljetten till kartpaketet som visas på 3 av de 5 viktigaste köporden (04). Det är den enda åtgärden i min vinkel som också ger trafik.

## 1. Diagnos: vad du missar, viktigast först

### 1. Folk kollar vem du är innan de gör något, och den sidan säljer fel person
- UPPMÄTT: /om sågs av 19 unika svenska prospekt på 30 dagar, startsidan av 18. 5 av 17 som nådde en kontaktsida på 90 dagar hade läst /om först (02, avsnitt 1 och slutbedömning punkt 5).
- UPPMÄTT: /om säger "Digital konsult & AI-specialist" (app/om/OmContent.jsx:95), "150+ Levererade projekt" och "1 AI SaaS-produkt" (:59-61), "Hundratals sajter levererade" (:10) och "Fem produkter jag byggt och driver själv" (:398-399). Sidan har noll kundcitat och noll recensioner (egen grep på blockquote, recension, citat: noll träffar). CTA är "Boka kostnadsfri genomgång" (:535), inte förslaget.
- Följd (ANTAGET): den som går till /om för att få veta om du är att lita på får veta att du är AI-specialist med fem egna produkter. Frågan "har han tid med min hemsida" väcks, och ingen kund säger emot.

### 2. De som klickar vidare väljer caset, och caset saknar kundens röst
- UPPMÄTT: av 44 annonsbesök på /lp/hemsida-foretag gick 5 vidare till en annan sida, 4 av dem till /projekt/niklassonsflytt (02, avsnitt 2). Fyra personer, alltså ett mönster och inget bevis.
- UPPMÄTT: case-sidan har inget kundcitat, ingen bild på gamla sajten, inget namn på någon hos kunden. Den säger "Vi byggde" (app/projekt/niklassonsflytt/NiklassonsCase.jsx:9), talet är 32 medan startsidan säger 37 (:8 mot app/b/BContent.jsx:261), den slutar med teknikstack (:46) och "Boka genomgång" (components/CaseStudy.jsx:235, components/CloseBlock.jsx:45-48).
- UPPMÄTT: de kunder som har siffror (Niklassons, NGTAB, Premie Bygg) har ingen röst på sajten. De kunder som har röst (Omniway, en andra Google-recension, RBN Utbildning) har inga siffror och visas inte som case på startsidan (BContent.jsx:41-46 mot LpHemsidaContent.jsx:430-450). Beviset är delat i två halvor som aldrig möts.

### 3. Du har 3 Google-recensioner. De du möter i kartan har 62 och 67
- UPPMÄTT 2026-09-19 (DataForSEO business_data/google/my_business_info/live på profilens cid): 3 betyg, snitt 5,0, 4 foton, huvudkategori "Marknadsföringskonsult", beskrivningen är gamla byråtexten med "Enterprise-kvalitet" och "kostnadsfri genomgång". Huvudsessionens uppgift om 0 recensioner är från 2026-08-07, så det har rört sig från 0 till 3 på sex veckor.
- UPPMÄTT: Sunbird 62, Webbas 67, Fäldt 42, Sitea 38 (03, steg 1). 5 av 10 konkurrenter visar betyg ovanför vecket (03, steg 4). Kartpaketet visas på webbyrå, hemsida företag och webbdesign (04, del 4).
- UPPMÄTT: LP-koden gömmer antalet med flit: "Antalet skyltas medvetet INTE ... tva ser svagt ut i jamforelse" (LpHemsidaContent.jsx:425-429). Det är rätt tänkt idag, men det är ett symptom. Lösningen är fler recensioner, inte bättre gömställe.

### 4. Erbjudandet har samma form som avtalen folk varnar varandra för, och sajten gömmer det enda villkoret som oroar
- UPPMÄTT: vanligaste rädslan i 05 är att säljaren lovar en sak och avtalet säger en annan (7 av 15 källor), näst vanligast inlåsning (6 av 15). Det enda ordagranna citatet i underlaget: "lovar en grej och låser en med avtal på nått annat" (Trustpilot-omdöme om Eniro, november 2024, via 05). Förbehåll från 05: de arga rösterna gäller mest katalogbolag, inte hemsideabonnemang.
- UPPMÄTT: 12 månaders bindning står inte vid priset i hero eller i gula finalen (BContent.jsx:255, :445). Den står i en FAQ som är stängd från start (components/b/BFaq.jsx:67) och på en liten rad (components/b/SaGarDetTill.jsx:94). Under mejlfältet står "Ingen bindning, inga påminnelser." (components/b/HeroKoll.jsx:291). Ordet moms finns inte på någon säljsida (05).
- UPPMÄTT: tre abonnemangskonkurrenter säljer helt utan bindning: Vizme 699 kr/mån, Hemsida24, Värmlandswebb 499 kr/mån (03, 05). Din bindning är alltså en verklig nackdel i jämförelsen och måste förklaras, inte gömmas.

### 5. Sajten säger emot sig själv, och för en misstänksam läsare är varje motsägelse ett bevis
- UPPMÄTT: 19 motsägelser mellan sidor (01, tabell B). De som skadar tilliten mest: 32 mot 37 offertförfrågningar, "19 kundsajter" mot "150+ projekt" mot "Hundratals sajter", fem mot sex sidor i Bas, 10 dagar mot 2 till 4 veckor, "utan möte" mot "15 till 20 min video" mot "en halvtimme", "nästa månadsskifte" mot "en månads uppsägning".
- UPPMÄTT: /sajtkoll skriver "Inga gissningar, ingen lagring." (app/sajtkoll/page.js:251) medan resultatet sparas i databasen (app/api/sajtkoll/route.js:627-645 enligt 01). Det är inte en slarvig formulering, det är ett osant påstående på den sida annonserna går till.
- UPPMÄTT: Google-profilen säger öppet alla sju dagar 8 till 18, /kontakt säger vardagar 08 till 17 (API-svaret mot 01, A11).
- Poängen i min vinkel: konsekvens ÄR bevis. Rädsla nummer ett är "säger en sak, menar en annan". En sajt som säger två saker bekräftar den.

### 6. Det som gör dig verklig saknas
- UPPMÄTT: frågan "vad händer om du blir sjuk eller slutar" besvaras ingenstans, fast du säljer 12 månaders drift (01 avsnitt E, 05 avsnitt 5). En konkurrerande byrå använder just det argumentet mot ensamkonsulter (siteflow.se/blog/webbyra-eller-frilans, via 05).
- UPPMÄTT: inget organisationsnummer och ingen F-skatt-uppgift i sidfot, /om, /kontakt, /integritet eller layout (egen grep: noll träffar).
- UPPMÄTT: köparen ombeds lämna sin mejl för "ett förslag" men får aldrig se hur ett förslag ser ut (egen grep på exempel och pages.dev i app/b, components/b, app/lp, app/priser, app/hemsida-foretag: noll träffar).
- UPPMÄTT: ingen video och ingen röst på någon säljsida. Före/efter-komponenten finns (components/ForeEfter.jsx) men används bara på två AcadeMedia-case med teknikmått.
- UPPMÄTT: ansiktet kommer först i sektion 6 på startsidan (BContent.jsx:354) och saknas helt på /sajtkoll, /priser, /hemsida-foretag och /tjanster/webbutveckling (01, avsnitt D5). 0 av 10 konkurrenter har ett ansikte i hero (03), så här finns en billig skillnad att ta.

## 2. Bevisinventering: vad finns, vad är gömt, vad saknas

| Bevis | Läge | Var idag (UPPMÄTT) | Var det ska ligga | Joel måste |
|---|---|---|---|---|
| Google-recensioner | FINNS, FÖR FÅ: 3 st, 5,0 | 1 citat i startsidans sektion 5 (BContent.jsx:324-349), 2 citat i LP sektion 4 (LpHemsidaContent.jsx:430-444). Noll på /om, /sajtkoll, /priser, webbutveckling, case | Ett kort citat med Google-länk direkt under knappen på start, LP och sajtkollens resultat. Antal visas först vid 10 eller fler | Skaffa 12 till, se avsnitt 8 |
| Kundcitat med namn | FINNS, 3 st, GÖMDA | Bara LP och startsidans sektion 5. Ingen av dem är från de fyra casen | På varje casekort och överst på varje case-sida. På /om | Be Niklassons och en byggkund om en mening var |
| Siffror per case | FINNS, STARKT, men spretar | Live på start (37), hårdkodat 32 på LP, case-sida och ortssidor (lib/local/data.js CITY_PROOF) | Samma live-källa överallt, eller skriv "över 30" där det måste vara statiskt | Inget utanför sajten |
| Kundmotorn (19 sajter, 156 förfrågningar på 30 d, uppdateras varje timme) | FINNS, UNIKT, GÖMT | Bara startsidans sektion 3. Ingen av de 10 konkurrenterna visar något liknande i underlaget (03, beviskolumnen) | En rad av den på LP, /om, webbutveckling och i sajtkollens resultat | Inget |
| "Kolla själv" (PageSpeed-länk, be en kund visa sin rapport) | FINNS, GÖMT | Minifoten (BContent.jsx:465-473) och en stängd FAQ (BFaq.jsx:51-52) | Direkt under Kundmotorns tal | Inget |
| Ansikte | FINNS, SENT | Start sektion 6, LP sektion 5, /boka, /kontakt | Liten rund bild bredvid knappen i hero på start, LP och i sajtkollens resultat | Inget (bilden finns: /joel-stolt-240.webp) |
| Röst, video | SAKNAS | Ingenstans | 45 till 60 sekunder i "Så går det till", klick för att ladda så att den inte kostar Lighthouse-poäng | Spela in |
| Exempel på ett förslag | SAKNAS | Ingenstans | Länk under knappen: "Se hur ett förslag ser ut" | Be en demomottagare om lov, eller bygg ett åt en påhittad firma |
| Före/efter-bilder | SAKNAS för småföretagscasen | ForeEfter.jsx finns, bara teknikmått på AcadeMedia | Casekorten på start och överst på case-sidan | Hämta gamla sajten ur Wayback Machine, be kunden om lov |
| Lokala case (Förskolan Harpan, Pingstkyrkan) | FINNS, GÖMDA | lib/case-data.js och ortssidor, inte start eller /om | /om och ortssidorna i nordöstra Skåne. Inte startsidan, de är inte offertföretag | Inget |
| Garanti | SAKNAS som namngiven sak | Löftet "färdig innan du betalar" täcker tiden före lansering. Efter lansering: 12 månader utan utgång | Bredvid bindningen | Affärsbeslut, se avsnitt 4.5 |
| Svarstid 24 h vardagar | FINNS, KONSEKVENT | LP, /boka, /kontakt, sidfot | Behåll. Lägg den bredvid ansiktet | Inget |
| "Du pratar med den som bygger" | FINNS | Manifestet (BContent.jsx:276), LP sektion 5 | Behåll, men besvara baksidan i samma andetag | Bestäm vem som rycker in |
| Företagsfakta (org.nr, F-skatt, sedan 2014, ort) | SAKNAS | Ingenstans | Sidfot, /om, LP-foten | Ta fram org.nr |
| Referenskund att ringa | SAKNAS | FAQ säger "be vilken kund som helst visa sin" (BFaq.jsx:52) men ger ingen väg | Invändningssektionen och /om | Fråga två kunder |
| Google-profilen | FINNS, SVAG | 3 betyg, 4 foton, kategori Marknadsföringskonsult, gammal text. 7 färdiga bilder ligger i docs/gbp | Utanför sajten, men det är första träffen när någon googlar ditt namn | Se avsnitt 8 |

Läsning: det mesta finns. Det som saknas helt är sådant bara du kan skaffa (recensioner, kundröster, video, org.nr, ett exempel). Det som finns ligger på fel ställe: på startsidans skärm 3 till 6, medan folk landar på LP, /sajtkoll och /om.

## 3. Köparens tio invändningar och var svaret ska ligga

Invändningarna och deras ordning kommer från 05, avsnitt 6. Status är UPPMÄTT där. Kolumnen "Var exakt" är mitt förslag.

| # | Köparen tänker | Idag | Svar och bevis | Var exakt |
|---|---|---|---|---|
| 1 | Är det ett sånt abonnemang man inte kommer ur? | DELVIS, gömt | Bindningen sägs vid priset, med skäl och totalsumma. Ev. 30 dagars utgång | Hero-underrubrik (BContent.jsx:254-256), final-raden (:444-446), LP-underrubrik (LpHemsidaContent.jsx:271-274), ny ruta före mekanismen |
| 2 | Vad är haken med gratis? | JA, men utan "jag ringer aldrig upp" | En mening om att du aldrig ringer upp, plus länk till ett riktigt exempel | Hero-punkt 3, under mejlfältet (HeroKoll.jsx:290-292), invändningssektionen |
| 3 | Vem äger sajt och domän, och rör du min mejl? | DELVIS | Ägande finns. Lägg till export som färdiga filer (finns bara på LP) och en mening om mejlen | Villkorsraden vid priset, invändningssektionen |
| 4 | Vad kostar det totalt, med moms? | DELVIS | 14 280 kr första året på Bas, och [exkl. moms] utskrivet | Överallt där priset står |
| 5 | Ger det något? | JA, sajtens starkaste del | Behåll Kundmotorn. Lägg kundens röst bredvid talet | Casekorten, case-sidan |
| 6 | Du är ensam. Sjuk? Slutar? | NEJ | Rakt svar: sajten står kvar, domän och inloggningar är dina, färdiga filer | Invändningssektionen, /om, LP-FAQ |
| 7 | Är du seriös, vilka har anlitat dig? | DELVIS | Recensioner, org.nr, ansikte vid knappen, ring en kund | Hero, sidfot, /om |
| 8 | Hur mycket jobb blir det för mig? | DELVIS | En rak mening: jag skriver texterna, du svarar på några frågor | Mekanismens dag 1, invändningssektionen |
| 9 | Vad kostar ändringar sen? | DELVIS | Vad som ingår, och att nytt bygge får pris innan | Invändningssektionen |
| 10 | Förstår jag vad du säger? | DELVIS | Bort med canonical, enterprise, edge, AI-läsbarhet, scope | Case-texter, LP, FAQ |

Obesvarat idag: 1 helt (nr 6), 7 delvis. De två som besvaras bäst (2 och 5) är de du själv bryr dig mest om. De som oroar köparen mest (1, 3, 4) är gömda eller halva.

## 4. Färdig copy

Fyra regler som all text nedan följer:
1. Varje påstående får ett bevis bredvid sig som går att kontrollera (en länk, ett live-tal, ett namn).
2. Villkoren sägs där priset sägs. Aldrig pris utan bindning, aldrig bindning utan skäl.
3. En mekanism, samma ord på alla sidor: förslag inom två arbetsdagar, utan möte, startsida och en tjänstesida, live ungefär tio dagar efter ja.
4. Köparens ord: hemsida, inte sajt eller webbplats. Jag, inte vi.

Allt inom [hakparentes] måste du bekräfta eller fylla i innan det publiceras. Tal som 37 och 19 ska hämtas live ur samma källa som startsidan redan använder (lib/kundmotor.js), aldrig hårdkodas.

### 4.1 Startsidan (app/b/BContent.jsx + components/b/*)

Etikett över rubriken (nu: "Hemsidor åt företag som lever på förfrågningar", BContent.jsx:247). Årtalet är UPPMÄTT i app/om/OmContent.jsx:8.

```text
Joel Stolt, Hässleholm · hemsidor åt småföretag sedan 2014
```

H1, variant A (min rekommendation). Sätter personen och risken först, och tappar "ett öre" som kan låta som lockbetet "gratis hemsida" (05, svagt belägg).

```text
Jag bygger din hemsida först. Du bestämmer dig sen.
```

H1, variant B. Behåller dagens löfte och gör villkoren till poängen. Håller bara om underrubriken säger villkoren rakt, vilket den gör nedan.

```text
Din nya hemsida, färdig innan du betalar. Inget finstilt.
```

Title-taggen behålls som den är ("Hemsida för företag, färdig innan du betalar"), den bär sökordet.

Underrubrik (ersätter BContent.jsx:254-256):

```text
Skriv in adressen till hemsidan du har idag. Jag mäter den på tio sekunder, och vill du får du inom två arbetsdagar en länk till ett förslag du kan klicka runt i. Inget möte, och jag ringer aldrig upp dig. Gillar du det: 0 kr i start, från 1 190 kr i månaden [exkl. moms], 12 månader och sedan månad för månad. Hemsidan och domänen är dina.
```

Knapp (HeroKoll.jsx:193, nu "Mät min sajt"):

```text
Mät min hemsida
```

Länk under fältet, ny. Kräver kod: idag avvisar API:t allt utan punkt (01, A9 fynd 7), så länken ska öppna mejlfält plus företagsnamn utan mätning.

```text
Har du ingen hemsida än? Beställ förslaget direkt
```

Rad med ansikte direkt under fältet, ny. Rund bild 40 px, /joel-stolt-240.webp finns redan.

```text
Joel Stolt bygger och svarar själv. Svar inom 24 timmar på vardagar.
```

Tre punkter som ersätter den enda bevisraden (BContent.jsx:260-262). Varje punkt är en länk till sitt bevis.

```text
Niklassons Flytt: 37 offertförfrågningar senaste 30 dagarna. Talet hämtas ur deras mätning varje timme.
[En mening ur en Google-recension]. Läs recensionerna på Google
Se hur ett förslag ser ut innan du lämnar din mejl
```

Om punkt 2: fram till 10 recensioner, använd meningen som börjar "Otroligt snabb" ur Omniway-recensionen (BContent.jsx:329) med länken som redan finns (:339). Från 10 recensioner byter du till raden nedan.

```text
5,0 på Google, [antal] omdömen. Läs dem
```

Om punkt 3: kräver att du har ett exempel att visa (avsnitt 8). Tills dess:

```text
19 kundsajter i drift just nu. Be vilken kund som helst visa sin månadsrapport.
```

Text under mejlfältet efter mätningen (ersätter "Ingen bindning, inga påminnelser.", HeroKoll.jsx:290-292). Formuleringen kommer från 05.

```text
Förslaget är gratis och du förbinder dig inte till något. Säger du nej hör du inte av mig igen.
```

Sektion 2, manifest och person ihopslagna (ersätter BContent.jsx:274-278 och flyttar upp :352-385). Ansiktet hamnar då på skärm två i stället för skärm sex.

```text
Jag heter Joel Stolt. Jag bygger själv, svarar själv och tar ansvar själv. Ingen säljare, ingen projektledare, ingen som ringer upp dig. Blir jag sjuk står din hemsida kvar, och domänen och inloggningarna är dina från första dagen.
```

Faktaraderna bredvid (nu "10+ år i branschen" m.fl., :374):

```text
Bygger hemsidor sedan 2014
19 kundsajter i drift och mätning
Org.nr [xxxxxx-xxxx] · godkänd för F-skatt
Hässleholm, kunder i hela Sverige
```

Rad under Kundmotorns tal (components/b/Kundmotor.jsx, efter :119). Flyttar upp det som idag ligger i minifoten och i en stängd FAQ.

```text
Lita inte på mig, kolla själv. Be vilken kund som helst visa sin månadsrapport, eller mät den här hemsidan i Googles eget verktyg.
```

Case-sektionens rubrik (nu "Uppdrag som talar för sig själva", BContent.jsx:287):

```text
Vad siffrorna visar och vad kunderna säger
```

Casekortens texter utan fackord (BContent.jsx:42-45). Under varje text ska en mening från kunden in när du har den.

```text
Niklassons Flytt: En sida för varje tjänst och ort i Skåne. Varje förfrågan räknas, så vi ser vad hemsidan ger.
Arkipel Entreprenad: Tre gånger fler sidor än en vanlig byggfirma har, en per tjänst och ort. Det är så man hittas.
Premie Bygg: Jag testade hela vägen från formulär till inkorg, så att ingen offertförfrågan försvinner.
Norrlands Gräv & Transport: Hemsidan hade försvunnit ur Google utan att någon märkt det. Nu syns den igen, med en sida per tjänst och ort.
[Under varje: "En mening från kunden." Förnamn, roll, företag]
```

Mekanismen, dag 1 (SaGarDetTill.jsx:22). Besvarar invändning 8.

```text
Jag läser din hemsida, dina tjänster och orterna du jobbar i, och skriver texterna. Du behöver inte förbereda något. Har du ingen hemsida skriver du bara företagsnamnet.
```

Mekanismen, dag 10 (SaGarDetTill.jsx:32). Säger när avtalet skrivs, vilket ingen sida gör idag (01, avsnitt E).

```text
[Säger du ja skriver vi avtal], jag bygger resten av sidorna, kopplar formuläret till din mejl och hemsidan går live. Först då börjar månadspriset. Säger du nej har det inte kostat något, och du hör inte av mig igen.
```

Raden i gula finalen (BContent.jsx:444-446):

```text
0 kr i start · från 1 190 kr/mån [exkl. moms] · 12 månader, sedan månad för månad · hemsidan är din
```

Ny ordning på startsidan: 1 hero med ansikte och tre bevis, 2 personen, 3 Kundmotorn med "kolla själv", 4 case med kundröster, 5 två recensioner, 6 villkorsrutan (4.5), 7 mekanismen med video och exempel, 8 sex raka svar (4.5), 9 gula finalen. Tjänstepillren krymper till en rad ovanför finalen.

### 4.2 Annonssidan /lp/hemsida-foretag (LpHemsidaContent.jsx)

H1, variant A (för annonsgruppen hemsida):

```text
Ny hemsida till ditt företag. Se den innan du bestämmer dig.
```

H1, variant B (för annonsgruppen webbyrå, där sökaren väljer leverantör. ANTAGET att personvinkeln passar bättre där):

```text
Ny hemsida till ditt företag, byggd av en person du kan ringa.
```

Underrubrik (ersätter :271-274, bort med "Enterprise-kvalitet"):

```text
Jag heter Joel Stolt och bygger den själv. Du får ett förslag att klicka runt i inom två arbetsdagar, utan möte. Gillar du det: 0 kr i start, från 1 190 kr/mån [exkl. moms], 12 månader och sedan månad för månad. Hemsidan och domänen är dina.
```

Bevisraden (:281-287, idag hårdkodat 32):

```text
37 offertförfrågningar på 30 dagar för Niklassons Flytt. Mätt i deras hemsida, inte uppskattat.
```

Faktaraden (:303-305, idag "10+ år i branschen · 150+ levererade projekt · Kunder i hela Sverige"):

```text
Bygger hemsidor sedan 2014 · 19 kundsajter i drift just nu · Org.nr [xxxxxx-xxxx], godkänd för F-skatt
```

Formulärets rubrik och underrad (:309):

```text
Få ett förslag att klicka runt i
Två arbetsdagar. Kostar ingenting. Inget möte.
```

Telefonfältets hjälptext (:202). Den som är rädd för säljsamtal ska se att numret är frivilligt och varför.

```text
Telefon (bara om du vill att jag ringer)
```

Knappen (:231):

```text
Bygg mitt förslag
```

Texten under knappen (:234-240):

```text
Svar inom 24 timmar på vardagar. Jag ringer bara om du bett om det. Säger du nej hör du inte av mig igen.
```

Direkt under formuläret på mobil, ny: samma ansiktsrad som på startsidan plus en recensionsmening med Google-länk. På mobil studsade 24 av 30 (02). Första skärmen ska innehålla en människa och ett bevis, inte bara ett formulär.

Steg 1 (:36-37, idag videomöte):

```text
Fyll i formuläret
Namn, mejl och gärna adressen till hemsidan du har idag. Det tar en minut och du behöver inte boka något möte. Vill du hellre prata först ringer du mig.
```

Steg 3 (:46-47):

```text
Gillar du det bygger jag klart
[Då skriver vi avtal], jag bygger resten och hemsidan går live. Först då börjar månadspriset. Gillar du det inte kostar det ingenting och du hör inte av mig igen.
```

De två länkarna "Boka kostnadsfri genomgång" (:608, :627):

```text
Få ett gratis förslag
```

Övrigt på LP: Bas ska vara "Upp till fem sidor" (:65). Uppsägningstexten (:89) ska vara densamma som på startsidan. Lägg till de två FAQ-svaren om bindning och sjukdom ur 4.5. Flytta "Du pratar med den som bygger" (:493-522) till direkt efter heron och bevissektionen (:387-491) till plats tre, före prisankaret. ANTAGET: den som skrollar en skärm ska möta en människa och ett kundbevis före en prisjämförelse.

### 4.3 /tjanster/webbutveckling

Ärligt först: 2 svenska prospekt såg sidan på 30 dagar (02). Texten här går inte att mäta. Skälet att ändå göra det: startsidans huvudrad länkar hit (BContent.jsx:399), och den som klickar möter AcadeMedia, Next.js-listor och "150+". Det är en motsägelse till.

Title (layout.js:12). Mallen lägger till "| Stolt Marketing", så håll den kort.

```text
Ny hemsida till företaget, se den först
```

Metabeskrivning (layout.js:13-14):

```text
Se din nya hemsida innan du bestämmer dig. 0 kr i start, från 1 190 kr/mån, 12 månader, sedan månadsvis. Byggd och skött av Joel Stolt, Hässleholm.
```

Etikett (WebbutvecklingContent.jsx:45, nu "Webbutveckling"):

```text
Ny hemsida
```

H1, variant A:

```text
Ny hemsida som du får se innan du bestämmer dig.
```

H1, variant B:

```text
Hemsidor åt småföretag. Jag bygger, mäter och sköter dem själv.
```

Ingress (:47, bort med "Samma kvalitet som jag levererar åt AcadeMedia"):

```text
Jag heter Joel Stolt och har byggt hemsidor sedan 2014. Du får ett förslag att klicka runt i inom två arbetsdagar, utan möte. Gillar du det bygger jag klart, och sedan sköter jag drift och ändringar. 0 kr i start, från 1 190 kr i månaden [exkl. moms], 12 månader och sedan månad för månad. Hemsidan och domänen är dina.
```

Tre punkter (:48):

```text
19 kundsajter i drift just nu
Förslag inom två arbetsdagar, utan möte
Svar inom 24 timmar på vardagar
```

Bevisblocket (:111-135): byt rutorna "150+" och "AcadeMedia" och casen Linguista och EdShare mot en rad ur Kundmotorn, Niklassons-kortet och en recension. AcadeMedia är ett riktigt förtroendebevis, men som en mening och inte som rubrik:

```text
Jag bygger också åt AcadeMedia, Sveriges största utbildningsföretag. Samma hantverk, mindre hemsida.
```

Knappen "Få upplägg och pris" (:214) sitter under ett pris som redan står där. Byt till:

```text
Få ett gratis förslag
```

### 4.4 Sajtkollens resultatsteg (app/sajtkoll/page.js och components/b/HeroKoll.jsx)

Problemet, UPPMÄTT: 8 av 11 annonskörningar fick 71 poäng eller mer, medan rubriken säger att brister kostar dem förfrågningar (HeroKoll.jsx:216). 0 av 11 tog nästa steg (02). Efter resultatet på /sajtkoll erbjuds rapport, bevakning och möte, aldrig förslaget, och sidan har varken ansikte, pris eller case (01, A9).

Min vinkel: var ärlig med poängen. Den som får 75 och hör "din sajt läcker" slutar lita på mätaren och på dig. Den som får 75 och hör "tekniken är okej, men mätningen ser inte det viktigaste" får ett skäl att lyssna. ANTAGET att det spelar roll, men det kostar inget att pröva.

Omdömesrad under 60 poäng:

```text
[Poäng] av 100. Det här kostar dig förfrågningar.
```

Omdömesrad 60 till 84 poäng:

```text
[Poäng] av 100. Tekniken är okej, men [antal] saker drar ner.
Det mätningen inte ser är det som brukar avgöra: hur många sidor du har som kan dyka upp när någon söker på din tjänst och din ort, och om någon faktiskt hör av sig.
```

Omdömesrad 85 poäng eller mer:

```text
[Poäng] av 100. Bra hemsida. Tekniken hade jag inte rört.
Mätningen ser inte hur många förfrågningar den ger dig. Vet du inte det själv är det den siffran som är värd att ta reda på.
```

Erbjudandet, direkt efter kontrollraderna och FÖRE rapporten. Ersätter blocket "Vill du att det vi hittade blir fixat?" (page.js:425-443). Samma mekanism som startsidan, så att sajten har en dörr och inte två.

```text
Vill du se den ombyggd?

Jag bygger ett förslag på din startsida och en tjänstesida, med dina texter och dina orter. Du får en länk inom två arbetsdagar. Kostar ingenting, inget möte, och jag ringer inte upp dig.

[din@mejl.se]  [Bygg mitt förslag]

Gillar du det: 0 kr i start, från 1 190 kr/mån [exkl. moms], 12 månader och sedan månad för månad. Säger du nej hör du inte av mig igen.
```

Förtroenderad under erbjudandet, med ansiktsbilden:

```text
Joel Stolt bygger och svarar själv. 19 kundsajter i drift. Niklassons Flytt: 37 offertförfrågningar senaste 30 dagarna.
```

Rapporten blir andrahandsval (page.js:341-382). Kryssrutan ska INTE vara ikryssad från start (:361). Förbockat samtycke är precis den sortens smygvillkor som rädsla nummer ett handlar om.

```text
Vill du bara ha rapporten?
Skriv din mejl så skickar jag alla 14 punkter med åtgärdslista. Gratis.
[ ] Mät om min hemsida varje månad och mejla mig vad som ändrats. Avslutas med ett klick.
```

Rad i heron på /sajtkoll, under ingressen (:191-195). Annonsbesökaren vet idag inte vem som står bakom verktyget.

```text
Verktyget är byggt av Joel Stolt. Jag bygger hemsidor åt småföretag och använder samma mätning på mina kunders hemsidor.
```

Raden om lagring (:250-252, idag "Inga gissningar, ingen lagring." vilket inte stämmer):

```text
Allt som rapporteras läses ur ett riktigt svar från din hemsida. Jag sparar resultatet så att du kan dela länken, inget annat.
```

Övrigt på /sajtkoll: "vi" blir "jag" (:192, :347, :378, :466), "så går Joel igenom" försvinner (:434), "Tolv saker" blir "14 saker" (:456), knappen "Se tjänster" (:441) tas bort.

### 4.5 Sektionen som besvarar invändningarna

Två delar. Villkorsrutan ligger nära priset. De sex svaren ligger öppna, inte hopfällda: en stängd FAQ är ett gömställe (BFaq.jsx:67). Samma texter återanvänds på LP:n och /priser.

Villkorsrutan, mellan recensionerna och mekanismen. Grundtexten kommer från 05, jag har kortat den.

```text
Det här är inte ett sånt avtal

Du har säkert blivit uppringd av någon som säljer hemsidor. Jag ringer aldrig upp. Du hittade hit själv, och du skriver inte på något förrän du klickat runt i ditt förslag.

Bindningen är 12 månader. Skälet är enkelt: jag tar 0 kr för att bygga, så de tolv månaderna är det som betalar bygget. Bas kostar 14 280 kr första året [exkl. moms], allt inräknat. Sedan är det månad för månad.

Inget förlängs ett år i taget. Du säger upp med ett mejl. Hemsidan, texterna och domänen är dina, och du får med dig allt som färdiga filer.
```

Tillägg om du vill driva det hela vägen (affärsbeslut, inte copy). Tre abonnemangskonkurrenter har ingen bindning alls (diagnos 4), så det här är den punkt där du är svagast i en jämförelse. Välj ett av två:

```text
Alternativ 1: 30 dagar efter lansering kan du ångra dig. Då avslutar vi, du betalar bara för månaden som gått och hemsidan får du med dig.

Alternativ 2: Vill du inte ha någon bindning alls? Då betalar du bygget som en engångssumma, [X kr], och kör månad för månad från start.
```

Alternativ 2 gör dessutom förklaringen trovärdig: säger du att bindningen betalar bygget ska det gå att betala bygget i stället. ANTAGET att risken i alternativ 1 är liten, eftersom kunden redan klickat runt i och godkänt hemsidan innan lansering.

Sex raka svar, öppna kort. Etikett "Innan du frågar", rubrik "Sex raka svar."

```text
Vad är haken med att förslaget är gratis?
Det finns ingen. Jag bygger förslaget för att det är det ärligaste sättet att visa vad du får, och det tar mig några timmar. Det kommer ingen faktura, inget samtal och inga påminnelser. Säger du nej lägger jag ner det.

Du är ensam. Vad händer om du blir sjuk eller slutar?
Hemsidan står kvar. Den ligger hos Cloudflare och fungerar utan att jag rör den. Det som får vänta är ändringar, och då säger jag till. [Domänen står på ditt företag och du har egna inloggningar från första dagen.] Skulle jag sluta helt får du hemsidan som färdiga filer som vilken webbutvecklare som helst kan ta över. [Om någon namngiven kan rycka in: skriv det här.]

Rör du min domän och min mejl?
[Domänen behåller du, och den står på ditt företag. Mejlen du har idag rör jag inte. Flytten görs så att varken hemsida eller mejl ligger nere.]

Hur mycket jobb blir det för mig?
Lite. Jag läser hemsidan du har och skriver texterna. Du svarar på några frågor, skickar bilder om du har några och säger till när något är fel. [Räkna med en timme totalt.]

Vad kostar det när jag vill ändra något sen?
Ingenting. Nya texter, bilder, priser och öppettider ingår och är klara inom två arbetsdagar. Vill du ha något som är ett nytt bygge, till exempel en bokningsfunktion, säger jag priset innan jag börjar.

Kan jag prata med någon som redan är kund?
Ja. Säg till, så får du numret till två. [Kräver att två kunder sagt ja.]
```

Texten om sjukdom bygger på 05, avsnitt 5. Tre antaganden i den måste du bekräfta: att kunddomäner registreras på kundens företag, att kunden får egna inloggningar, och om det finns en reservperson. Finns ingen reserv är det bättre att inte låtsas. Svaret håller ändå.

Det som blir kvar i den hopfällda FAQ:n: priset per paket, uppsägning, "Jobbar du bara i Hässleholm", "Hur vet jag att siffrorna stämmer". Frågorna om WordPress mot Next.js och om AI-lösningar hör inte hemma hos en hemsideköpare (BFaq.jsx:35, :39).

### 4.6 /om (app/om/OmContent.jsx)

Ingår inte i beställningen men hör till min vinkel: det är den sida flest riktiga prospekt läser (02).

Underrad (:95, nu "Digital konsult & AI-specialist"):

```text
Jag bygger och sköter hemsidor åt småföretag. Själv, sedan 2014.
```

Första stycket (:100-105):

```text
Jag har byggt hemsidor i över tio år, åt allt från flyttfirmor och byggföretag till AcadeMedia, Sveriges största utbildningsföretag. Idag sköter jag 19 kundsajter. Jag bygger dem, mäter dem varje månad och svarar själv när du hör av dig.
```

Andra stycket (:108-113). Gör om AI från identitet till förklaring på det som annars låter för bra för att vara sant.

```text
[AI använder jag som verktyg, inte som säljargument. Det är skälet till att jag hinner bygga ett förslag åt dig på två dagar utan att ta betalt för det.]
```

Talen (:59-61): "Sedan 2014", "19 kundsajter i drift" (live), "24 h svarstid på vardagar". Bort med "150+", "1 AI SaaS-produkt" och "Hundratals sajter levererade" (:10).

Ny ordning: 1 vem jag är, 2 de tre kundrösterna med Google-länk, 3 kortet om sjukdom ur 4.5, 4 lokala case (Förskolan Harpan, Pingstkyrkan), 5 tidslinjen, 6 egna produkter sist. Produktsektionen (:398-399) får en mening som besvarar "har han tid med mig":

```text
[Kundernas hemsidor går alltid först. De egna produkterna bygger jag mellan uppdragen, och det är där jag testar allt innan det hamnar hos en kund.]
```

Avslut (:535, nu "Boka kostnadsfri genomgång"): knappen "Få ett gratis förslag" och raden "eller ring mig". Sist på sidan:

```text
Stolt Marketing · Joel Stolt · Hässleholm · Org.nr [xxxxxx-xxxx] · Godkänd för F-skatt
```

Samma rad i den globala sidfoten (components/Footer.jsx:251-254) och i LP-foten.

### 4.7 Case-sidan Niklassons Flytt (NiklassonsCase.jsx + CaseStudy.jsx)

Dit gick 4 av de 5 annonsbesökare som klickade vidare.

- Rubriken (:8) hämtar live-talet, eller blir statisk: "Över 30 offertförfrågningar i månaden."
- Direkt under ingressen: kundens egna ord, med namn och roll. Får du lov: "Ring gärna och fråga."
- Bild på gamla hemsidan bredvid den nya.
- "Vi byggde" (:9) blir "Jag byggde".
- Teknikraden (:46) sist i liten stil eller bort.
- Avslutet (CaseStudy.jsx:235) byter text och knapp:

```text
Vill du se din egen hemsida ombyggd?
Jag bygger ett förslag på två arbetsdagar. Gratis, utan möte. Du pratar med mig som byggde den här.
[Knapp] Få ett gratis förslag
```

### 4.8 Menyn och knapparna utanför startsidan

- Första menyraden (components/Header.jsx:32-33, nu "Webbutveckling · Moderna sajter som konverterar"):

```text
Ny hemsida · Se den innan du bestämmer dig
```

- Menyknappen (Header.jsx:439-445, nu "Boka genomgång") och CloseBlock (components/CloseBlock.jsx:45-48):

```text
Gratis förslag
```

Förslagsformuläret finns idag bara på startsidan och LP:n (01, avsnitt D). Gör LP:ns formulär till en delad komponent och lägg den i CloseBlock, så att /priser, /om, case-sidorna och webbutveckling leder till samma dörr. "Boka en tid" blir en textlänk bredvid, för den som hellre pratar.

### 4.9 Google-profilen

Ny beskrivning (ersätter texten med "Enterprise-kvalitet" och "kostnadsfri genomgång"):

```text
Jag heter Joel Stolt och bygger hemsidor åt småföretag i Hässleholm, Skåne och resten av Sverige. Du får se din nya hemsida innan du bestämmer dig: jag bygger ett förslag du kan klicka runt i, gratis och utan möte. Gillar du det kostar det 0 kr i start och från 1 190 kr i månaden, med drift, ändringar och support inräknat. 12 månader, sedan månad för månad. Du äger hemsidan och domänen. Jag bygger själv, svarar själv inom 24 timmar på vardagar och ringer aldrig upp och säljer.
```

Huvudkategori: byt från Marknadsföringskonsult till Webbdesigner, behåll den gamla som extra. ANTAGET att kategorin heter så i det svenska gränssnittet. Öppettider: samma som på /kontakt. Bilder: ladda upp de 7 som ligger i docs/gbp (profilen har 4).

### 4.10 Två meddelanden till kunder

Be om recension. Länken går direkt till recensionsrutan för din profil. Kontrollera att den öppnar rätt profil innan du skickar.

```text
Hej [Förnamn],

En snabb fråga. Jag har precis börjat samla omdömen på Google, och ditt skulle betyda mycket. Det tar en minut:

https://search.google.com/local/writereview?placeid=ChIJXdzXg2JmdG0RH3stiDOw-3M

Skriv precis som det var, kort går bra. Hur det var att jobba ihop och om hemsidan gjort någon skillnad räcker gott.

Allt gott,
Joel
```

Be om citat, före-bild och referens (till Niklassons och en byggkund):

```text
Hej [Förnamn],

Jag bygger om min egen hemsida och vill visa [Företaget] som exempel, med era siffror som de ser ut i rapporten. Tre snabba frågor:

• Får jag citera dig med namn och företag? En eller två meningar om hur det var att byta hemsida räcker. Skriv dem själv, eller så ringer jag och skriver ner vad du säger.
• Får jag visa en bild på er gamla hemsida bredvid den nya?
• Skulle du kunna tänka dig att ta ett kort samtal någon gång, om en ny kund vill höra hur det är att jobba med mig? Säg nej om det känns jobbigt, helt okej.

Allt gott,
Joel
```

Skicka dem ett i taget och personligt, inte som massutskick. Be inte om recension i utbyte mot något, det bryter mot Googles regler.

## 5. Vad som ska bort eller flyttas

Bort, för att det är osant eller säger emot något annat (gör det samma dag):
- "Inga gissningar, ingen lagring." (app/sajtkoll/page.js:251). Resultatet sparas. Ny text i 4.4.
- "Ingen bindning, inga påminnelser." (components/b/HeroKoll.jsx:291). Krockar med 12 månader. Ny text i 4.1.
- Hårdkodat "32 offertförfrågningar" (LpHemsidaContent.jsx:283, :409, NiklassonsCase.jsx:8, :11, :26, :44, lib/local/data.js CITY_PROOF). Live-tal eller "över 30".
- "Upp till sex sidor" (LpHemsidaContent.jsx:65). Fem, som i paketfilen.
- "en månads uppsägning" (LpHemsidaContent.jsx:89). Samma villkor som startsidan.
- Videomötet som steg 1 på LP (:36-37) och "en halvtimme" på /hemsida-foretag (:212). En mekanism.
- "Det beror på omfattningen ... Du får en tydlig offert" (lib/local/service-extra-content.json:62). Priset är öppet.
- "Det här är hela prislistan" (app/priser/page.js:57) så länge e-handelssidan har 89 000 och 149 000 kr.
- Förbockad Sajtvakten (app/sajtkoll/page.js:361).

Bort, för att det är påståenden utan bevis eller fel persons ord:
- "150+ levererade projekt" på LP, webbutveckling, /tjanster, /om och ortssidor, och "Hundratals sajter levererade" (OmContent.jsx:10). Ett tal räcker: 19 kundsajter i drift, live och kontrollerbart. Tre olika tal för samma sak är sämre än ett litet.
- "Enterprise-kvalitet" (LpHemsidaContent.jsx:272, components/Footer.jsx:125, app/layout.js:136).
- "Digital konsult & AI-specialist" (OmContent.jsx:95, app/layout.js:110) och "Digital byrå" (Footer.jsx:124, layout.js:105).
- Tekniklistorna och frågan "Vilken teknik bygger du i?" på webbutveckling (WebbutvecklingContent.jsx:18-28).
- Fackorden: canonical-fel (BContent.jsx:45), "snabb edge" och "AI-läsbarhet" (LpHemsidaContent.jsx:53, :57), "scope" (BFaq.jsx:12, KontaktContent.jsx:56).
- FAQ-frågorna om WordPress mot Next.js och AI-lösningar på startsidan (BFaq.jsx:35, :39), och svaret "Allt ingår i månadspriset på 1 190 kr" som säger emot "de flesta landar på Bredd" (:48 mot :12).
- "vi" på /sajtkoll, i Niklassons-caset och Batteriproffs-caset. Säljer du att man pratar med en person kan sajten inte säga vi.

Flyttas:
- Ansiktet: från startsidans sektion 6 till heron (liten) och sektion 2 (stor). På LP från sektion 5 till direkt efter heron.
- Recensionerna: en mening vid knappen, två hela direkt efter casen. In på /om och i sajtkollens resultat.
- 12 månader: från stängd FAQ till raden där priset står, överallt.
- "Hur vet jag att siffrorna stämmer" och PageSpeed-länken: från FAQ och minifot till direkt under Kundmotorns tal.
- "Exporterad som färdiga filer" (finns bara i LP-FAQ :85): till villkorsrutan på alla sidor.
- De fem egna produkterna på /om: sist på sidan, efter kundbevisen.
- AcadeMedia: från rubrik och bevisruta till en mening.
- "Boka genomgång" som huvudknapp i menyn, CloseBlock, /priser, /om, case och sajtkollens resultat: blir textlänk. Huvudknappen är förslaget.
- Lokala casen Harpan och Pingstkyrkan: in på /om.

Behåll som det är: Kundmotorn, "Tre dagar som gör risken till min", svarslöftet 24 timmar på vardagar, title-taggen på startsidan, telefonnumret i LP-toppen, att antalet recensioner inte skyltas förrän de är 10.

## 6. Det som inte är budskap men som avgör om budskapet spelar någon roll

Proportionerna först. Om du har tio timmar skulle jag lägga dem så här (ANTAGET, min bedömning):
- 4 timmar utanför sajten: recensioner, kundröster, Google-profilen.
- 3 timmar på sajtkollens resultatsteg och LP:ns första skärm, de enda ställena som får trafik i volym när annonser går.
- 2 timmar på /om och case-sidan, dit folk faktiskt går för att kolla upp dig.
- 1 timme på att ta bort motsägelserna i avsnitt 5.
- 0 timmar på att fila på startsidans H1. Den har setts av 8 riktiga svenskar på 13 dagar (02).

1. Trafiken. UPPMÄTT: ca 23 svenska köpbesökare i månaden utan annonser, 0 riktiga leads via sajten på 30 dagar (02). Bättre förtroende på 23 personer ger högst ungefär 1 lead till per månad. Ingen text i det här dokumentet ändrar det.

2. Recensionerna. 3 idag, målet var 15. Det är den enda punkten som både höjer tilliten och ger trafik, eftersom kartpaketet visas på webbyrå, hemsida företag och webbdesign och listar byråer med recensioner (04). Du har 19 kundsajter i drift. Svarar hälften ja är du på 12 till 13 (ANTAGET). Det här är veckans viktigaste jobb och det tar en kväll.

3. Google-profilen. Den som googlar ditt namn ser profilen före sajten (ANTAGET, men organiska besök på / och /om är rimligen namnsökningar enligt 02). Idag: fel huvudkategori, gammal byråtext, 4 foton, öppettider som inte stämmer med sajten.

4. Uppföljning av sajtkollen. UPPMÄTT: 11 klara mätningar från annonser, 0 mejladresser (02). Det finns alltså ingen att följa upp. Med förslagsformuläret i resultatsteget får du adresser, och då gäller det du lovar: svar inom 24 timmar och förslag inom två arbetsdagar. Varje brutet löfte här river mer än texten bygger. En sak till: de 11 adresserna som redan ligger i databasen ska du inte använda för uppsökande kontakt. Sidan lovade "ingen lagring" när de mätte.

5. Annonserna. Slå inte på dem igen förrän LP:n och sajtkollens resultatsteg är ombyggda, och helst inte före 10 recensioner. UPPMÄTT: sökordet sajtkoll lockar den som vill ha ett gratis test (02). Hemsida- och webbyråorden kostar 100 till 150 kr per klick, vilket ger 7 500 till 22 500 kr per kund i 04:s räkneexempel (ANTAGET där), mot 14 280 kr i förstaårsvärde på Bas. Förtroende höjer konverteringen men gör inte breda annonser lönsamma på Bas. Dessutom saknas Google Ads-tagg på sajten, så Google får inga konverteringar att lära sig av (02, mätlucka 6).

6. Bästa trafiken är den minsta. UPPMÄTT: 5 av 9 besökare från ChatGPT nådde kontakt eller bokning, via ortssidor och /om (02). Nio personer. Men det är just de som läser /om, så arbetet i 4.6 är det som tjänar dem. Ortssidorna visar fortfarande hårdkodat 32 och knappen "Boka genomgång".

7. Dina egna utskick. Om kunderna i praktiken kommer från demomejlen är sajtens jobb att bekräfta ett beslut, inte skapa det (02, sista stycket). Då är /om, /projekt och /priser viktigare än någon H1, och rätt mått är hur många av dem du kontaktat som går in, tittar och svarar.

8. Mäthygien. UPPMÄTT: 41 procent av de svenska besöken är dina egna enheter och 60 procent av alla besökare är utländska bottar (02). Stäng av Umami i dina webbläsare och filtrera på Sverige innan du läser en enda siffra till.

## 7. Hur varje ändring mäts, och hur lång tid det tar

Förutsättning: punkt 8 ovan. Annars mäter du dig själv.

Tiderna bygger på augustitakten med annonser (44 LP-besök och 11 klara mätningar på 10 dagar, 02) respektive dagens trafik utan annonser. Räkningen är enkel sannolikhet: om den sanna andelen är p, är chansen att se noll på n försök (1 minus p) upphöjt till n.

| Ändring | Händelse som redan finns i Umami | Idag | När syns en skillnad |
|---|---|---|---|
| Sajtkollens resultatsteg med förslagsformulär | lead-forslag, forslag-[plats] och sajtkoll-[plats] följer med om HeroKoll-formuläret återanvänds. Jämför mot sajtkoll-kord | 0 av 11 | 2 till 3 veckor MED annonser. Om 15 procent lämnar mejl är chansen att se noll på 20 mätningar ca 4 procent. Utan annonser: ca 2 mätningar i månaden, alltså aldrig |
| LP: ny hero, formulär, ordning | lead-lp-hemsida | 0 av 44 | 2 till 3 veckor MED annonser för att se om den ger leads alls (vid 4 procent är chansen för noll på 75 besök ca 5 procent). Att skilja 2 från 4 procent kräver ca 1 100 besök per version, alltså över ett år. Kör en version, A/B-testa inte |
| Startsidans hero: ansikte, tre bevis, villkor vid priset | koll-hero, sajtkoll-hero, forslag-hero, lead-forslag, recension-google | 1 av 8 använde fältet | Går inte att mäta. Ca 15 unika prospekt i månaden landar på /. Att se 10 mot 25 procent kräver ca 100 per version, alltså över ett halvår per version |
| /om omskriven, förslagsknapp | cta-close-boka, cta-telefon, och lead-händelserna för dem som sett /om | 19 unika på 30 dagar | Går inte att mäta under ett år |
| Case-sidan med kundröst och ny knapp | cta-close-boka | 9 unika på /projekt på 30 dagar | Går inte att mäta |
| /tjanster/webbutveckling | cta-tjanst-hemsida (klick dit från startsidan) | 2 unika på 30 dagar | Går inte att mäta |
| Invändningssektionen, villkorsrutan | Ingen. Öppna kort ger inga klick | | Går inte att mäta i Umami |
| Recensioner och Google-profil | Utanför Umami. Antal och snitt med samma DataForSEO-anrop som jag gjorde idag. Profilens egen statistik för samtal och klick. I Umami: google som källa med / eller /om som ingång | 3 betyg | Antalet ser du varje vecka. Effekt i kartan tidigast 4 till 8 veckor efter 10 recensioner (ANTAGET) |

Fyra små tillägg som gör mätningen bättre (nya händelser, en rad var): klick på de tre bevispunkterna i heron (bevis-hero-case, bevis-hero-recension, bevis-hero-exempel), telefonklick på LP:n (saknas idag, 02 mätlucka 3), och klick på "Har du ingen hemsida än".

Det ärliga svaret: två saker går att mäta inom en månad, och bara med annonser på. Resten gör du för att det är rätt, inte för att du kan bevisa det. På den här volymen är fem samtal värda mer än Umami. Visa LP:n för fem småföretagare du inte känner och fråga vad som får dem att tveka, och fråga varje ny kund vad som fick dem att höra av sig (ANTAGET, men det kostar en eftermiddag).

## 8. Vad du måste skaffa utanför sajten, i ordning

Vecka 1:
1. Skicka recensionsfrågan (4.10) till alla nuvarande kunder och till nöjda gamla. Mål: 10 inom tre veckor, 15 inom sex.
2. Skicka frågan om citat, före-bild och referens till Niklassons och en byggkund.
3. Rätta Google-profilen: kategori, text, öppettider, de 7 bilderna i docs/gbp. En halvtimme.
4. Bestäm de fem sakerna i hakparentes: moms, när avtalet skrivs, i vems namn domänen står, att kundens mejl lämnas orörd, och vem som rycker in om du blir borta. Ta fram org.nr.

Vecka 2:
5. Före-bilder på de fyra casens gamla hemsidor ur Wayback Machine. Kräver inget av kunden utom ett ja.
6. Ett exempel på förslag att länka till: be en demomottagare om lov, eller bygg ett åt en påhittad firma.
7. Bestäm om garantin: alternativ 1, alternativ 2 eller ingen (4.5).

Vecka 3:
8. Spela in videon, mobilen duger: 15 sekunder vem du är, 30 sekunder där du klickar runt i ett riktigt förslag, 10 sekunder villkoren. Din röst är beviset, inte produktionen.

På sajten, i den här ordningen:
- A, samma dag: allt under "Bort, för att det är osant" i avsnitt 5.
- B, före nästa annonskrona: sajtkollens resultatsteg (4.4) och LP:ns hero och formulär (4.2).
- C: /om (4.6), case-sidan (4.7), förslagsformuläret som delad komponent i CloseBlock (4.8).
- D: startsidans ordning, villkorsrutan och de sex svaren (4.1, 4.5).
- E: webbutveckling och menyn (4.3, 4.8).

## 9. Antaganden som går att motbevisa

1. Priserna är exklusive moms. Motbevisas av din avtalsmall.
2. Avtalet skrivs när kunden säger ja till förslaget och betalningen börjar vid lansering. Bara det senare är UPPMÄTT (SaGarDetTill.jsx:32).
3. Kunddomäner registreras på kundens företag och kunden får egna inloggningar.
4. De 7 bilderna i docs/gbp är inte uppladdade. UPPMÄTT är bara att profilen har 4 foton.
5. Kategorin Webbdesigner finns i Googles svenska gränssnitt.
6. Hälften av 19 kunder skriver en recension om de får en personlig fråga.
7. En besökare som ser "3 omdömen" blir mindre övertygad än en som ser ett citat utan antal. Det är skälet att vänta till 10. Samma bedömning som i kodkommentaren (LpHemsidaContent.jsx:425-429).
8. De fyra annonsbesökare som klickade till caset letade efter bevis från en kund. Fyra personer, går inte att pröva på dagens trafik.
9. Höga poäng är skälet till att 0 av 11 gick vidare från sajtkollen. ANTAGET även i 02. Prövas av 4.4 på 2 till 3 veckor med annonser.
10. Misstron mot katalogbolagens avtal förs över på ditt erbjudande för att formen är densamma. Det är 05:s antagande och mitt. Underlaget är 15 källor, mest om katalogbolag.

Status: KLAR 2026-09-19.

