> **Rättelse 2026-09-23:** Bolag 26:s svar efter 0 timmar var en studs från ett fakturasystem. Rätt siffra är 23 av 30, inte 22. Siffrorna i mejl- och sidtexterna nedan är rättade; där listorna säger "de 22" menas nu de 23 som aldrig svarade. Se kvitto-mejldata.md och kvitto-svarsspegeln.md för övriga fynd (fel mottagare för två bolag, söndagssamtalet, nej tack från Vasa VVS och Phoenix).

# Ny ingång för Stolt Marketing: förslaget

Skrivet onsdag 23 september 2026. Status: KLAR, avsnitt 1 till 7.
Inget är skickat, ändrat eller deployat. Allt nedan är förslag tills du sagt ja.

## Kort

- Grund: förslaget Mätningen först (båda granskningarna valde det). Från Ett system tog jag bara skriftligt test för omätta, raderingsvalet i första mejlet och meningen om att hinna svara innan kunden frågat någon annan.
- Du säljer EN liten sak: en ruta på kundens hemsida som skickar förfrågan som SMS och ger ett färdigt förslag på svar. 495 kr/mån, 30 dagar gratis, ingen bindning. Hemsida bara när deras sajt inte klarar rutan.
- Det brådskar: de 22 som testades i september vet inte om det. Avslöjandet ska ut fredag 25 september, oavsett sajt och sälj.
- Sajten: tio punkter, en ny sida (/forfragningar). Tjänstesidor, blogg, ortsidor och case rörs inte.
- Mejlen: tre steg till de mätta, tre till de omätta, ett tack och en rättelse till de 8 som svarade.

Kontrollerat i dag: curl mot stoltmarketing.se (titeln säger fortfarande "färdig innan du betalar", /kontakt har 24-timmarslöftet på 5 ställen), och koden i internal/svarsspegeln (ämnesraden på provmejlet, hur samtal räknas, 990-rutan på rapportsidan).

---

## 1. Diagnos: det som är fel i dag

**Sajten (internal/stoltmarketing)**

1. **Första skärmen säljer fel sak.** Titel, H1 och slogan säger "färdig innan du betalar", och enda knappen är "Mät min sajt / Få gratis förslag". Frasen står 38 gånger i 15 filer. Förfrågningar nämns bara som något en ny sajt ger, aldrig som något kunden tappar. (app/layout.js:32, :35, :136, app/b/BContent.jsx:247-261 och :436-445, components/b/HeroKoll.jsx)
2. **Du lovar själv långsamma svar.** "Svar inom 24h på vardagar" i footern på varje undersida, plus /kontakt, /boka och sajtkollens rapportmejl. "Jag ringer inte, jag mejlar." på /sajtkoll. En som säljer snabba svar kan inte lova ett dygn. (components/Footer.jsx:254, app/kontakt/KontaktContent.jsx:17, :50, :158, :187, app/boka/BokaContent.jsx:296, :301, :367, app/api/sajtkoll/rapport/route.js:170, app/sajtkoll/page.js:408)
3. **Nya erbjudandet finns ingenstans.** Inte i menyn (tio tjänster, components/Header.jsx:32-98). Svarsdelen finns bara som en punkt i Spets för 2 990 kr (lib/pricing-packages.js:48). Identiteten är webbyrå och "Digital konsult & AI-specialist" (app/layout.js:110, Footer.jsx:124).
4. **Sajten bär nästan inget i dag.** Ca 23 köpbesökare i månaden, 0 leads på 30 dagar. Sökannonsen "Hemsida" 23-30 aug: 53 klick, 1 337 kr, 0 leads. Därför: liten ändring nu, ingen ombyggnad.

**Mejlen (Smartlead)**

5. **Alla fyra kampanjerna säljer hemsida och bygger smärtan på vår diagnos av sajten**: plats i Google, "{{score}} av 100", laddtid. Det är webbyråns smärta, inte hantverkarens. 423 unika, 32 svar, ingen kund. Nej-svaren ("nöjda med sajten", "bundna till leverantör", "hemsida på gång") är exakt det mejlen framkallar. (3765785 WLM sajtkoll, 3766130 WordPress v1, 3814760 v2, 3910136 Demo 490)
6. **Steg 2 är samma AI-vinkel för alla**, och i 3765785 skriven som om den vore mätt per bolag ("Sajten saknar det som gör att ChatGPT..."). Den är inte mätt.
7. **Gratis utan nästa steg, samma pitch som alla webbyråer.** Demo 490 (3910136) har pris i ämnesraden, mötesfråga i mejl 1 och "1 990 kr från år två", som läses som en fälla.
8. **Avsändare och signatur spretar.** WLM och Stolt skickar nästan samma mejl. "Grundare, Stolt Marketing i Hässleholm" (3766130, 3814760). v2 steg 3 ber om ett nej, så en del av svaren är tillverkade.

**Svarsspegeln (internal/svarsspegeln), det som redan är ute**

9. **Rapportsidan säljer en tjänst som inte finns**: "Missat samtal-räddaren ... 14 dagar gratis, sedan 990 kr per månad" (src/rapport.js:188). Sidfoten ber folk ringa sondnumret, som sedan 22/9 går till din mobil märkt Kvota (:192). De 8 som svarade har fått länken.
10. **De 22 som aldrig svarade vet inte att de testades.** Räkna med 2 oktober som sista dag att berätta (GDPR art. 14). Två saker de kommer att hitta: provmejlets ämne klipptes av koden till de tre första orden, alltså "Förfrågan: byta en gammal i Stockholm" för el (src/sonder.js, amne), och testbeskedet ligger troligen på deras röstbrevlådor (59 av 90 samtal). Kontrollera båda i D1 och Resend-loggen innan något skickas.

---

## 2. Nya erbjudandet

**I en mening:** Jag sätter en ruta på er hemsida där kunden skriver, förfrågan kommer som SMS till din mobil, och ett förslag på svar ligger färdigt som du ändrar och skickar när du hinner.

**Pris:** 495 kr i månaden exkl moms.

**Villkor**
- 0 kr i start, Joel installerar.
- Första 30 dagarna gratis.
- Ingen bindning, uppsägning med ett mejl.
- Tak per månad: 30 uppringningar, 150 samtalsminuter, 100 SMS, 100 chattar. Över taket hör vi av oss innan något kostar mer.
- Firman godkänner själv personuppgiftsbiträdesavtalet innan rutan slås på. Avtalspart Invox AB, faktura manuellt (Stripe är avstängt för Kundkontakt). Se beslut 2.
- Kräver: en sajt som tar emot en rad kod (eller inloggning så Joel lägger in den), en mobil för SMS, öppettider.

**Det här ingår (allt byggt och provat, karta-sanning avsnitt 1)**
- Rutan på varje sida: skriva ett meddelande, bli uppringd eller chatta.
- SMS och mejl till firman direkt, med namn, kontaktuppgift och början på meddelandet.
- Har kunden skrivit sin mejl får hen en bekräftelse direkt.
- AI skriver sammanfattning och förslag på svar. Firman läser, ändrar och trycker skicka.
- Bli uppringd: firmans mobil ringer, under 10 sekunder i vårt test. Utanför öppettid bokas samtalet till nästa öppning.
- Chatten svarar utifrån sajtens text och säger att den är AI.
- Inkorgen i app.kvota.se/kundkontakt.

**Det här ingår INTE (sägs i mejl 2, på sajten och i varje svar)**
- Samtal till firmans vanliga nummer. Inget telefonsvar, ingen AI i telefon, inget SMS när firman missar ett samtal.
- Mejl direkt till firmans adress, till exempel info@. (Det var där de 22 mättes. Det måste sägas.)
- Svar som går ut automatiskt i firmans namn.
- Kalenderbokning, koppling av firmans befintliga formulär, offert ur förfrågan.
- Löften om svarstid, fler förfrågningar eller fler jobb.

**Dörren in (gratis):** mätningen. De 22 mätta får sin egen. Omätta erbjuds ett skriftligt test de själva säger ja till: ett mejl och formuläret, inga samtal.

**Hemsida:** bara när sajten är hindret (sajten svarar inte, sajtbyggaren tar inte emot rutan, eller ingen sajt). Då ordinarie prislista, från 1 190 kr/mån, 0 kr start. Inte 490-erbjudandet. Rutan läggs till efteråt för 495.

Varför 495 och inte 1 990 med hemsida (Ett system): telefonen, det största hålet i mätningen, ingår inte. En firma som är nöjd med sin sajt säger nej till 1 990 med 12 månaders bindning, och "bunden till leverantör" var redan det vanligaste nejet. 495 är litet nog att säga ja till från soffan. Marginal efter rörlig kostnad: ca 275 till 395 kr per firma och månad.

---

## 3. Sajten (stoltmarketing.se)

Repo: /Users/joelstolt/Desktop/Dev/internal/stoltmarketing. Radnummer från commit be7d5de.

### 3.1 Minsta ändringen, före testet (deploy fredag 25 september)

| # | Fil | Ändring |
|---|---|---|
| 1 | app/b/BContent.jsx | Hero (247-261) och final (436-445) byts, text nedan. HeroKoll flyttas ned i hemsidesblocket (394-413), som får id="hemsida". Typografiskt citattecken på rad 326 tas bort. Manifest, Kundmotor, case, recension och Personen bakom står kvar. |
| 2 | components/b/SaGarDetTill.jsx | Rubrik och steg: hur de 30 dagarna med rutan går till. |
| 3 | components/b/BFaq.jsx | Tre nya frågor FÖRST. De 11 gamla står kvar (hemsidan säljs fortfarande). |
| 4 | app/layout.js | Rad 32, 35, 57, 64, 136. Ingen canonical här. jobTitle och JSON-LD description väntar. |
| 5 | components/Header.jsx | "Förfrågningar" först i navItems. Sajtkoll står kvar. Knappen "Boka genomgång" står kvar (genomgången lovar redan "Var ni tappar förfrågningar"). |
| 6 | components/Footer.jsx | Beskrivning (124-126) och löftet (254). |
| 7 | app/kontakt/KontaktContent.jsx + app/kontakt/layout.js | 24h-löftena (17, 50, 158, 187). Två nya val i tjänstelistan (259-265). Långa tankstrecket i titeln (layout.js:11, :18) byts mot komma. |
| 8 | app/boka/BokaContent.jsx + app/boka/layout.js | 24h-löftena (296, 301, 367-368). Långa tankstrecket i titeln (layout.js:11). |
| 9 | app/sajtkoll/page.js:408, app/api/sajtkoll/rapport/route.js:170 | "Jag ringer inte, jag mejlar." stryks. "svar inom 24 h på vardagar" blir "svar samma arbetsdag". |
| 10 | NY app/forfragningar/layout.js + page.js + MatForm.jsx, och en rad i app/sitemap.js | Landningssidan, full text i 3.4. Egen canonical, index. |

Alla 24h-löften ersätts med: **"Svar samma arbetsdag"** (gäller bara om du klarar det, beslut 6).

Utanför repot, samma dag:
- Kunskapstexten för chatten i rutan (tenant stoltmarketing), text i 3.6. Tenantdata, inte Kvota-produkten.
- Svarsspegeln, se 3.7. Måste vara klart innan en enda rapportlänk skickas.

Kvitto efter deploy (din regel: bygg, deploya, curl):
```text
curl -s https://www.stoltmarketing.se/ | grep -o "<title>[^<]*"                      -> Förfrågningar och hemsidor för hantverksföretag | Stolt Marketing
curl -s https://www.stoltmarketing.se/ | grep -c "Hinner ni"                           -> minst 1
curl -s https://www.stoltmarketing.se/kontakt https://www.stoltmarketing.se/boka | grep -c "24h\|24 timmar\|24 h"   -> 0
curl -s -o /dev/null -w "%{http_code}" https://www.stoltmarketing.se/forfragningar    -> 200
curl -s https://www.stoltmarketing.se/forfragningar | grep -o 'rel="canonical"[^>]*'  -> .../forfragningar
curl -s https://www.stoltmarketing.se/sitemap.xml | grep -c forfragningar             -> 1
```
Plus ett riktigt prov: du skriver i rutan på live-sajten och får SMS:et. Mejlen och sajten ber folk göra just det.

### 3.2 Startsidan, ny text ordagrant (app/b/BContent.jsx)

Eyebrow (247):
> För el, VVS och andra hantverksföretag

H1 (252), samma stil som i dag, fetstil på mitten och gul kursiv på skiljetecknet:
> Hinner ni **svara** innan kunden frågat någon annan*?*

Underrubrik (255):
> En ruta på er hemsida. Kunden skriver, du får ett SMS direkt och ett färdigt förslag på svar. 495 kr i månaden exkl moms, första 30 dagarna gratis.

CTA (ersätter HeroKoll, 257-259):
- Knapp: **Så fungerar det** till /forfragningar (data-umami-event="cta-hero-forfragningar")
- Textlänk: **Vet ni hur snabbt ni svarar? Jag mäter det gratis** till /forfragningar#matning
- Liten rad: **Söker du en ny hemsida? Läs mer längre ned.** till #hemsida

Bevisrad (261, ersätter Niklassons, som inte får kopplas till rutan):
- Fram till måndag 28 september: **Prova själv: skriv i rutan nere till höger.**
- Från måndag 28, när A1 levererats till alla 22: **I september skrev jag till 30 el- och VVS-firmor i Stockholm som en kund. 23 hade inte svarat en vecka senare.**

Final (436-445):
- Rubrik: **Vet du hur det ser ut hos er?**
- Text: **Skriv i rutan här nere, så ser du vad dina kunder skulle få. Vill du veta hur snabbt ni svarar i dag mäter jag det gratis.**
- Knapp: **Så fungerar det** till /forfragningar
- Rad: **495 kr/mån exkl moms · 30 dagar gratis · ingen bindning**
- "eller ring 076-686 74 06" står kvar.

SaGarDetTill.jsx:
- sec-eng: **30 dagar**
- Rubrik: **Så kommer du igång**
- Dag 1: **Jag lägger in rutan.** På varje sida av din hemsida. Jag ställer in din mobil och era öppettider, och du provar själv att skriva, så du ser hur det ser ut för kunden.
- Dag 1 till 30: **Förfrågningarna kommer till dig.** Ett SMS när något kommer in och ett förslag på svar att skicka. Månaden kostar ingenting.
- Dag 30: **Du bestämmer.** Vi tittar tillsammans på vad som kommit in. Vill du fortsätta är det 495 kr i månaden. Vill du inte tar jag bort rutan, och det har inte kostat något.

BFaq.jsx, tre nya frågor först (FAQPage-schemat följer med):
- **Vad kostar rutan för förfrågningar?** 495 kr i månaden exklusive moms, 0 kr i start. De första 30 dagarna kostar ingenting och det finns ingen bindning. Då ingår rutan på varje sida, SMS och mejl när något kommer in, förslag på svar och inkorgen där allt samlas.
- **Svarar ni i telefon åt oss?** Nej. Samtal till ert vanliga nummer går till er som i dag, och inget telefonsvar ingår. En kund som hellre vill prata kan trycka Bli uppringd i rutan, då ringer din mobil.
- **Skickar AI svar till mina kunder?** Inte på förfrågningarna. AI skriver ett förslag, du läser, ändrar och skickar. Har kunden lämnat sin mejl får hen en bekräftelse på att förfrågan kommit fram. Chatten i rutan svarar däremot själv på frågor utifrån det som står på din sajt, och säger att den är AI.

### 3.3 Metadata, meny, footer, kontakt

app/layout.js:
- 32 titel: **Förfrågningar och hemsidor för hantverksföretag | Stolt Marketing**
- 35 beskrivning, och 57 och 64 (OG, Twitter): **En ruta på din hemsida: kunden skriver, du får ett SMS och ett förslag på svar. 495 kr/mån exkl moms, 30 dagar gratis. Hemsidor från 1 190 kr/mån, 0 kr i start.**
- 136 slogan: **Förfrågan via hemsidan, direkt till mobilen.**

components/Header.jsx, navItems:
```js
const navItems = [
  { label: "Förfrågningar", href: "/forfragningar" },
  { label: "Priser", href: "/priser" },
  { label: "Projekt", href: "/projekt" },
  { label: "Sajtkoll", href: "/sajtkoll" },
  { label: "Om mig", href: "/om" },
  { label: "Kontakt", href: "/kontakt" },
];
```
Telefonnumret och "Boka genomgång" står kvar.

components/Footer.jsx:
- 124-126: **Stolt Marketing i Hässleholm. Förfrågningar via hemsidan direkt till mobilen, hemsidor, SEO och Google Ads för hantverksföretag i hela Sverige.**
- 254: **Svar samma arbetsdag**

app/kontakt/KontaktContent.jsx:
- 17 och 50: **Svar samma arbetsdag** / **Jag hör av mig samma arbetsdag**
- 158 och 187: **Fyll i formuläret så återkommer jag samma arbetsdag. Vill du se hur det funkar för dina kunder, skriv i rutan nere till höger.**
- Tjänstelistan, två nya val först: **Rutan för förfrågningar** och **Gratis svarsmätning** (leadet i Kundkontakt får rubrik ur det här fältet).

app/boka/BokaContent.jsx: 296 och 301 **Jag hör av mig samma arbetsdag**, 367-368 **Jag bekräftar tiden samma arbetsdag**.

### 3.4 Ny landningssida /forfragningar, full text

Metadata (app/forfragningar/layout.js):
- title: **Förfrågningar via hemsidan, direkt till mobilen | Stolt Marketing**
- description: **En ruta på din hemsida. Kunden skriver, du får ett SMS och ett förslag på svar som du skickar när du hinner. 495 kr/mån exkl moms, 30 dagar gratis, ingen bindning.**
- canonical: https://www.stoltmarketing.se/forfragningar, index, rad i app/sitemap.js. Inget FAQ-schema här (det bor på startsidan).

---

**[Eyebrow]** För el, VVS och andra hantverksföretag

**[H1]** Det svåra är att hinna svara innan kunden frågat någon annan.

**[Ingress]** Jag sätter en ruta på din hemsida. Kunden skriver där, du får ett SMS direkt, och när du sätter dig och tittar ligger ett förslag på svar färdigt. Du ändrar om du vill och skickar.

**[Prisrad]** 495 kr/mån exkl moms · första 30 dagarna gratis · ingen bindning

**[Knapp]** Skriv till mig (till /kontakt)
**[Rad under]** eller skriv direkt i rutan nere till höger. Det är samma ruta som du skulle få.

**[H2] Så fungerar det**

1. **Kunden skriver i rutan.** Den finns på varje sida av din hemsida. Kunden kan skriva ett meddelande, be att bli uppringd eller chatta.
2. **Du får ett SMS direkt.** Med namn, nummer eller mejl och början på meddelandet. Har kunden skrivit sin mejl får hen samtidigt en bekräftelse på att förfrågan kommit fram.
3. **Ett förslag på svar ligger färdigt.** AI läser förfrågan och skriver ett förslag. Du läser, ändrar om du vill och skickar. Inget går ut i ditt namn utan att du trycker.

*[Bild, när provet i Testfirma solceller är gjort: skärmbild av SMS:et, märkt Provmeddelande. Tills dess ingen bild.]*

Vill kunden hellre prata trycker hen Bli uppringd, och din mobil ringer. Under 10 sekunder från klick till att mobilen ringer, i mitt test. Utanför era öppettider bokas samtalet till nästa gång ni öppnar. Chatten svarar utifrån det som står på din sajt och säger att den är AI.

**[H2] Det här ingår inte**

Hellre att du vet det nu.
- Samtal till ditt vanliga nummer. Inget telefonsvar, ingen AI i telefon och inget SMS när du missar ett samtal.
- Mejl som skickas direkt till din adress, till exempel info@.
- Svar som går ut automatiskt i ditt namn.
- Bokning i din kalender.
- Löften om fler jobb. Rutan ser till att förfrågan via hemsidan når dig. Svaret är ditt.

**[H2] Vad det kostar**

**495 kr i månaden exkl moms**
- 0 kr i start, jag installerar
- Första 30 dagarna gratis
- Ingen bindning, du säger upp med ett mejl
- Upp till 30 uppringningar, 150 samtalsminuter, 100 SMS och 100 chattar i månaden. Räcker det inte hör jag av mig innan något kostar mer.

Du behöver inte byta hemsida. Rutan läggs på den du har, om den tar emot en rad kod. Det kollar jag innan du bestämmer dig, och sköter någon annan din sajt skickar jag raden till dem. Går det inte, eller finns ingen sajt som fungerar, börjar vi med hemsidan. Priserna för hemsidor står på /priser.

**[H2 med id="matning"] Vet du hur snabbt ni svarar i dag?**

*(Stycket nedan visas först från måndag 28 september, när A1 levererats till alla 22. Innan dess står bara erbjudandet och formuläret.)*

I september skrev jag till 30 el- och VVS-firmor i Stockholm som en kund med ett vanligt jobb. 23 av dem hade inte svarat en vecka senare. Hos 20 av 30 hittade min automatiska koll inget formulär på sajten.

Det betyder inte att de struntar i sina kunder. Mejlet kom från en adress de aldrig sett och kan ha hamnat i skräpposten. Men för kunden som väntar ser det likadant ut. Alla 30 har fått ett mejl från mig om att det var ett test, och inga namn publiceras.

*(Visar D1 att ämnesraden blev avklippt, lägg till: "Ämnesraden blev dessutom avklippt, vilket kan ha gjort det värre.")*

Vill du veta hur det ser ut hos er? Jag skickar samma sorts förfrågan till er, som mejl och via formuläret på sajten, någon dag de närmaste två veckorna. Inga samtal. Du får tiden svart på vitt, gratis.

Formulär (MatForm.jsx, postar till /api/contact med service "Svarsmätning", honeypot hp_field, hemsidan läggs i message):
- Ditt namn
- Din mejl (dit resultatet skickas)
- Företagets hemsida
- Kryssruta: **Ja, mät oss.**
- Knapp: **Mät oss**
- Kvitto: **Tack. Jag hör av mig samma arbetsdag.**

**[H2] Jag kör det själv**

Rutan nere till höger är samma ruta. Skriv något där, så ser du vad som händer. Jag svarar samma arbetsdag.

Du skulle vara bland de första firmorna utanför mitt eget bolag som kör den. Därför sätter jag upp den själv, provar hela vägen med dig, och har ingen bindning.

**[H2] Frågor**

*Svarar ni i telefon åt oss?* Nej. Samtal till ert vanliga nummer går till er som i dag. Det som ingår är att en kund som hellre vill prata kan trycka Bli uppringd på sajten.

*Skickar AI svar till mina kunder?* Inte på förfrågningarna. Du läser förslaget och trycker skicka. Chatten svarar däremot själv på frågor utifrån din sajt och säger att den är AI.

*Vem ligger bakom, och var hamnar uppgifterna?* Jag, Joel Stolt på Stolt Marketing. Rutan är Kvota Kundkontakt, som jag sätter upp och hjälper dig med. Avtalet tecknas med Invox AB, och du godkänner själv personuppgiftsbiträdesavtalet innan rutan slås på. Databasen ligger i EU-jurisdiktion, och en del av bearbetningen, bland annat AI-sammanfattningen, sker hos leverantörer i USA.

**[Avslut]** Hör av dig: skriv i rutan här nere, via /kontakt eller ring 076-686 74 06.

---

### 3.5 Rörs inte nu (SEO)

Alla /tjanster/* (särskilt google-ads, plats 18), bloggen (plats 22 till 29), /helsingborg och /lund med /hemsida, /sokmotoroptimering, /hemsida-foretag, /vad-kostar-*, /hantverkssajter, /projekt, /om, /priser. Ingen adress raderas, ingen 301. Skriv i SEO-uppföljningen 7 oktober att footern och startsidan ändrades 25 september.

### 3.6 Kunskapstext för chatten i rutan (tenant stoltmarketing)

```text
Stolt Marketing säljer en ruta för förfrågningar (Kvota Kundkontakt) till hantverksföretag. Kunden skriver i en ruta på företagets hemsida, företaget får ett SMS och ett mejl direkt och ett förslag på svar skrivet av AI, som företaget själv läser, ändrar och skickar. Kunden kan också be att bli uppringd eller chatta. Pris 495 kr i månaden exkl moms, 0 kr i start, första 30 dagarna gratis, ingen bindning. Joel installerar. Ingår inte: samtal till företagets vanliga nummer, telefonsvar eller AI i telefon, SMS vid missat samtal, mejl direkt till företagets adress, svar som skickas automatiskt i företagets namn, kalenderbokning. Joel erbjuder också en gratis svarsmätning: en förfrågan som mejl och via formuläret, inga samtal, och företaget får tiden svart på vitt. Hemsidor finns också, från 1 190 kr i månaden. Lova aldrig svarstider, fler förfrågningar eller fler jobb. Mer: stoltmarketing.se/forfragningar
```

### 3.7 Svarsspegeln (internt verktyg, klart torsdag 24 september, före första rapportlänk)

Repo: /Users/joelstolt/Desktop/Dev/internal/svarsspegeln.

| Fil | Ändring |
|---|---|
| src/rapport.js:188 | 990-rutan byts mot texten nedan. |
| src/rapport.js:192 | "ring {sondnumret}" blir "ring 076-686 74 06". |
| src/rapport.js, referensraden (Leadferno 2023) | "Samma mätning hos 30 el- och VVS-firmor i Stockholm i september: 23 hade inte svarat skriftligt en vecka senare." |
| src/index.js:276-277 (avslöjandemejlet) | Stryk "för de flesta gissar fel om sig själva". Byt "Det gör bara en bråkdel av era konkurrenter." mot "Hos 23 av 30 el- och VVS-firmor i Stockholm kom inget skriftligt svar alls under veckan." |
| src/sonder.js, amne | Hela jobbet i ämnet, inte tre ord. Före första nya test. |
| wrangler.jsonc | BOKNING_URL till https://www.stoltmarketing.se/forfragningar. ELKS_NUMMER: nytt nummer (30 kr/mån) före första nya test, eftersom provtexten skriver ut numret. |

Ny ruta på rapportsidan:
```text
Vill ni att förfrågningar via hemsidan inte blir liggande?
Jag sätter en ruta på er hemsida. Kunden skriver, ni får ett SMS direkt och ett förslag på svar som ni skickar när ni hinner. Samtal till ert vanliga nummer och mejl direkt till er adress ingår inte.
495 kr i månaden exkl moms, första 30 dagarna gratis, ingen bindning.
[Knapp: Läs mer] -> https://www.stoltmarketing.se/forfragningar
```
För beställda test, en rad under nyckeltalen: "Ni visste att förfrågan skulle komma, så svaret kan ha gått snabbare än en vanlig vecka."

### 3.8 Väntar tills testet visat att det säljer (grind: 3 betalande firmor)

- Ny menystruktur, tjänstemenyn krymper (adresserna lever kvar).
- Rutan på /priser. Under testet står priset bara på /forfragningar och startsidan.
- /om skrivs om, jobTitle och JSON-LD description i app/layout.js (104, 110).
- Mätningen som egen publicerad studie (formen från /hantverkssajter) och en resultatsida per firma i /brev/[slug].
- Ett case med en betalande kund. Finns inte i dag.
- Småfel: långa tankstreck i titlarna på /om, /tjanster och ortshubbarna, 24h i ManagedContent.jsx:37 och på /lp-sidorna (rätta innan annonserna startar igen), sajtkollens chatt (lib/chat-config.js), Niklassons 37 mot 32, /serviceavtal i sitemap.

---

## 4. Mejlen

### 4.0 Gemensamt

- Smartlead, nya kampanjer. De gamla sekvenserna rörs aldrig.
- Ren text, ingen spårning, ingen länk i något kallt steg, stopp vid svar, 08 till 16 vardagar, högst 25 nya per dag totalt.
- Avsändare Joel Stolt (beslut 8). Uppföljningar i samma tråd, alltså tomt ämne i Smartlead.
- Bara aktiebolag får erbjudanden. Enskilda firmor bland de 30 får bara avslöjande och rättelse.
- Signatur i första steget: fullt block ur mejl-stil, positioneringsraden enligt beslut 7. Uppföljningar: Joel / 076-686 74 06.
- Svarar någon positivt: svara samma dag, kvällssvar samma kväll (beslut 6). Finns ett nummer, ring.

Merge-fält. Ett litet skript i samma stil som bygg-falt.py bygger dem ur Svarsspegelns D1 och Resend-loggen. Du läser varje rad innan import.

- {{halsning}}: "Hej Förnamn," eller "Hej,"
- {{company_name}}: städat bolagsnamn
- {{jobb}}: ur src/sonder.js. El: byta en gammal elcentral och sätta upp några nya uttag. VVS: byta blandare i köket och kolla en golvbrunn som verkar läcka.
- {{sond_amne}}: ämnet som faktiskt gick ut 2 september, ur Resend-loggen. Enligt koden troligen "Förfrågan: byta en gammal i Stockholm" (el) och "Förfrågan: byta blandare i i Stockholm" (VVS).
- {{amne_rad}}: blev ämnet avklippt: "Ämnesraden blev dessutom avklippt, så mejlet kan ha sett ut som skräppost." Annars tomt.
- {{samtal_rad}}: räknas på om samtalet togs (46elks state success), aldrig på gissningen människa eller röstbrevlåda.
  - 0 togs: "Inget av de tre samtalen togs."
  - 1 togs: "Ett av de tre samtalen togs, av någon hos er eller av en röstbrevlåda. Det korta inspelade beskedet om ett test var från mig."
  - 2 togs: "Två av de tre samtalen togs, av någon hos er eller av en röstbrevlåda. Det korta inspelade beskedet om ett test var från mig."
  - 3 togs: "Alla tre samtalen togs, av någon hos er eller av en röstbrevlåda. Det korta inspelade beskedet om ett test var från mig."
- {{formular_rad}}:
  - inget_formular: "Min automatiska koll hittade inget formulär på sajten, så mejlet fick göra jobbet."
  - ej_stott: "Formuläret på sajten gick inte att prova automatiskt, så mejlet fick göra jobbet."
  - validering_fel: "Formuläret på sajten tog inte emot min förfrågan. Det kan ha berott på min koll, men det är värt att prova själv."
  - spam: "Formuläret sorterade förfrågan som skräp."
  - fel: "Formuläret gav ett tekniskt fel när min koll skickade."
  - skickat, skickat_troligen: "Samma förfrågan gick också in via formuläret på sajten."
  - skickat_osakert: "Samma förfrågan skickades också via formuläret på sajten, men jag kan inte se säkert att den kom fram."
  - ingen_sajt: "Sajten svarade inte när jag försökte nå den."
- {{raderingsdatum}}: 31 oktober

### 4.1 Mätta bolag: sekvens A (de 22 som aldrig svarade)

Vilka: de 22 i el-sthlm-1, minus enskilda firmor (de får A-E) och minus sena svar som redan fått avslöjandemejlet (de får C). A1 går fredag 25 september.

**A1, dag 0, fredag 25 september**

```text
Ämne: {{company_name}}: förfrågan den 2 september var ett test

{{halsning}}

Den 2 september fick ni ett mejl från mig med ämnet "{{sond_amne}}", där jag bad om hjälp med att {{jobb}}. Samma vecka ringde jag er tre gånger med ett automatiskt samtal. Det var ett test, inget jobb väntar. Förlåt för besväret.

Jag mätte hur snabbt 30 el- och VVS-firmor i Stockholm svarar när en ny kund hör av sig. Hos er:
• Mejlet fick inget svar under veckan som följde. {{amne_rad}}
• {{samtal_rad}}
• {{formular_rad}}

23 av de 30 hade inte svarat en vecka senare, så ni är inte ensamma. Mejlet kom från en adress ni aldrig sett och kan ha fastnat i skräpposten. Det är i så fall också bra att veta.

Svara ja så skickar jag hela mätningen med tider, eller radera så tar jag bort allt om er.

Med vänliga hälsningar,

Joel Stolt
Stolt Marketing
Förfrågningar och hemsidor för hantverksföretag
076-686 74 06
joel@stoltmarketing.se
stoltmarketing.se

Inget spelades in. Jag sparade tider och om mejlet och samtalen besvarades, för att mäta svarstider och visa er resultatet. Ansvarig är Stolt Marketing. Uppgifterna om er (bolagsnamn, mejl, telefon och sajt) kommer från er hemsida och offentliga företagsuppgifter. Jag sparar dem med stöd av berättigat intresse och raderar dem senast {{raderingsdatum}}. Ni kan när som helst säga nej, be att få se dem eller klaga hos IMY.

Vill du inte ha fler mejl från mig? Svara nej tack så stryker jag dig direkt.
```

Kontrollera källan i småtexten (var leads.db fick uppgifterna ifrån) och den juridiska personen (beslut 2) innan import.

**A2, dag 4, tisdag 29 september (samma tråd)**

```text
Hej igen,

En sak till, sen släpper jag det.

Mejl som skickas direkt till er adress kan jag inte göra något åt. Det jag kan göra är en ruta på er hemsida där kunden skriver sin förfrågan. Den kommer som ett SMS till din mobil, så den fastnar inte i skräpposten, och har kunden skrivit sin mejl får hen direkt veta att den kommit fram. När du tittar på kvällen ligger ett förslag på svar färdigt. Du ändrar om du vill och trycker skicka.

Samtal till ert vanliga nummer går som i dag, det löser rutan inte.

495 kr i månaden exkl moms, första 30 dagarna gratis, ingen bindning. Kommer nästan inget via hemsidan är det här inget för er, säg bara till.

Ska jag kolla om er hemsida kan ta rutan?

Joel
076-686 74 06

Vill du inte ha fler mejl från mig? Svara nej tack så stryker jag dig direkt.
```

**A3, dag 10, måndag 5 oktober (samma tråd)**

```text
Hej,

Ska jag skicka er mätning eller radera den? Båda går bra, ett ord räcker. Hör jag inget raderar jag allt om er senast {{raderingsdatum}}.

Joel
076-686 74 06

Vill du inte ha fler mejl från mig? Svara nej tack så stryker jag dig direkt.
```

**A-E, enskilda firmor bland de 22, fredag 25 september (egen kampanj, ett mejl, inget erbjudande)**

```text
Ämne: Förfrågan den 2 september var ett test

Hej,

Den 2 september fick du ett mejl från mig med ämnet "{{sond_amne}}", där jag bad om hjälp med att {{jobb}}. Samma vecka ringde jag tre gånger med ett automatiskt samtal. Det var ett test av hur snabbt en ny kund får svar, inget jobb väntar. Förlåt för besväret.

Inget spelades in. Jag sparade dina kontaktuppgifter från din hemsida och offentliga företagsuppgifter, och tider för när mejlet och samtalen gick ut och om de besvarades. Det gjorde jag med stöd av berättigat intresse för att mäta svarstider, och jag raderar allt senast {{raderingsdatum}}. Vill du se ditt resultat, eller att jag raderar det direkt, räcker det att svara på det här mejlet. Du kan också klaga hos IMY.

Jag skickar inget mer om det här.

Allt gott,
Joel Stolt
Stolt Marketing
076-686 74 06
```

**C, de 8 som svarade (plus sena svar som fått avslöjandemejlet), måndag 28 september. Alla, även enskilda firmor, eftersom mejlet inte säljer något.**

```text
Ämne: {{company_name}}: tack, och en rättelse

Hej,

Tack för att ni svarade på min testförfrågan i september, och förlåt att ni lade tid på den.

Efteråt fick ni en länk till ert resultat. Längst ned på den sidan stod en tjänst för missade samtal för 990 kr i månaden. Den tjänsten finns inte att köpa, så jag har tagit bort den. Den skulle inte ha stått där.

Jag sparar uppgifterna om er med stöd av berättigat intresse och raderar dem senast {{raderingsdatum}}. Vill ni att jag raderar dem nu räcker det att svara radera. Ni kan också be att få se dem, eller klaga hos IMY.

Allt gott,
Joel Stolt
Stolt Marketing
076-686 74 06
```

### 4.2 Omätta bolag: sekvens B

Vilka: 100 aktiebolag, el och VVS i Stockholm, urval ur leads.db med urval.mjs. Inte bland de 30, inte i aldrig-kontakta.txt eller befintliga-adresser.txt. Inga enskilda firmor (MFL 19 §). 25 per dag, tisdag 29 september till fredag 2 oktober. B1 går först när A1 levererats till alla 22, annars är meningen "Alla 30 har fått ett mejl" osann.

**B1, dag 0**

```text
Ämne: 23 av 30 el- och VVS-firmor svarade inte på en vecka

{{halsning}}

I september skrev jag till 30 el- och VVS-firmor i Stockholm som en kund med ett vanligt jobb. 23 hade inte svarat en vecka senare. Alla 30 har fått ett mejl från mig om att det var ett test. {{company_name}} var inte med.

Hade ni svarat? Säg ja så skickar jag samma sorts förfrågan till er någon dag de närmaste två veckorna, som mejl och via formuläret på sajten. Inga samtal. Ni får tiden svart på vitt, och ni behöver inte köpa något.

Med vänliga hälsningar,

Joel Stolt
Stolt Marketing
Förfrågningar och hemsidor för hantverksföretag
076-686 74 06
joel@stoltmarketing.se
stoltmarketing.se

Vill du inte ha fler mejl från mig? Svara nej tack så stryker jag dig direkt.
```

**B2, dag 3 (samma tråd)**

```text
Hej igen,

Varför testet är gratis: det jag säljer är en ruta på hemsidan där kunden skriver. Förfrågan kommer som ett SMS till din mobil, med ett förslag på svar färdigt. 495 kr i månaden exkl moms, första 30 dagarna gratis, ingen bindning. Telefonsamtal och mejl direkt till er adress ingår inte.

Men testet är ert oavsett. Ni får tiden det tog och ser om formuläret på er sajt går att skicka i. Hos 20 av de 30 i Stockholm hittade min automatiska koll inget formulär.

Ska jag lägga in {{company_name}}?

Joel
076-686 74 06

Vill du inte ha fler mejl från mig? Svara nej tack så stryker jag dig direkt.
```

**B3, dag 7 (samma tråd, sista)**

```text
Hej,

Är det här något ni vill veta, eller har ni redan koll på hur snabbt ni svarar? Ett nej räcker, då hör jag inte av mig mer.

Joel
076-686 74 06

Vill du inte ha fler mejl från mig? Svara nej tack så stryker jag dig direkt.
```

### 4.3 Svarsmallar (du skickar själv, i tråden, samma dag)

**R1, ja till mätningen (A)**

```text
Hej [Förnamn],

Toppen. Här är mätningen för [bolag], med tider steg för steg:
[rapportlänk]

Kort sagt: [en mening om det tydligaste, utan betyg, till exempel att mejlet aldrig fick svar].

Det jag kan göra något åt är förfrågningarna via hemsidan. En ruta på er sajt: kunden skriver, du får ett SMS direkt och ett förslag på svar som du skickar när du hinner. Samtal till ert vanliga nummer och mejl direkt till er adress ingår inte.

495 kr i månaden exkl moms, första 30 dagarna gratis, ingen bindning, och jag installerar.

Ska jag ringa dig i morgon efter fem, eller passar tidigt på morgonen bättre?

Allt gott,
Joel
```

**R2, ja till testet (B)**

```text
Hej [Förnamn],

Toppen, då lägger jag in [bolag]. Förfrågan kommer någon dag de närmaste två veckorna, som mejl och via formuläret på sajten. Inga samtal. Resultatet får ni en vecka efter.

Den kommer i mitt namn, så ni kan känna igen den. Svaret kan därför gå snabbare än en vanlig vecka, och det står i resultatet. Berätta gärna inte för de andra, så blir det så likt en vanlig vecka som möjligt.

Jag använder mejladressen som står på er sajt. Säg till om kunderna oftast skriver någon annanstans.

Allt gott,
Joel
```

**R3, resultatet (B, en vecka efter testet)**

```text
Hej [Förnamn],

Som utlovat, här är resultatet för [bolag]:
[rapportlänk]

Kort sagt: [en mening om resultatet, rakt och utan betyg].

Klicka runt i lugn och ro. Vill du prata om det, säg bara till så ringer jag.

Allt gott,
Joel
```

**R4, ja till rutan**

```text
Hej [Förnamn],

Så kör vi. Det jag behöver från dig:
• Inloggning till sajten, eller kontakt till den som sköter den
• Vilken mobil som ska få SMS:en, och när ni har öppet
• En mejladress för notiserna

Innan rutan slås på godkänner du personuppgiftsbiträdesavtalet i appen, det kan jag inte göra åt dig. Sedan provar vi tillsammans att skriva och bli uppringd, så du ser hur det ser ut för kunden. De 30 gratis dagarna räknas från den dagen.

Allt gott,
Joel
```

**R5, sajten är hindret**

```text
Hej [Förnamn],

Jag kollade er sajt, och [den svarar inte / sajtbyggaren tar inte emot rutan]. Då går rutan inte att lägga in som det ser ut nu.

Jag bygger hemsidor för hantverksföretag: 0 kr i start, från 1 190 kr i månaden exkl moms, drift och ändringar ingår. Rutan kan läggas till efteråt för 495 kr i månaden. Priserna finns här:
stoltmarketing.se/priser

Vill du att jag ringer och berättar mer?

Allt gott,
Joel
```

**R6, arg över testet (radera först, skicka sedan, logga som klagomål)**

```text
Hej,

Förstår, och förlåt. Jag har raderat allt om [bolag] och skickar inget mer.

Allt gott,
Joel
```

---

## 5. Testplan

### 5.1 Tidslinje

- **Torsdag 24 september**
  - Dina beslut 1 till 8.
  - D1 och Resend-loggen läses (bara läsning): vilka som svarat sent och om de fått avslöjandemejlet, org.nr (enskild firma), hur många samtal som togs per firma, ämnet som faktiskt gick ut 2 september, och svarstexten på det svar som tog 0 timmar (autosvar?).
  - Intresseavvägningen skriven och daterad, en sida.
  - Svarsspegeln rättad enligt 3.7, deploy och curl på en rapport.
  - Merge-CSV byggd. Du läser varje rad.
  - Nya Smartlead-kampanjer: A, A-E, C, B.
- **Fredag 25 september**
  - A1 och A-E skickas.
  - Sajten deployas utan siffrorna, kvitto enligt 3.1, kunskapstexten för chatten inläst.
- **Måndag 28 september**
  - C till de 8.
  - Siffrorna på sajten slås på när Smartlead visar A1 levererat till alla 22. Studsar något: skicka avslöjandet via deras formulär eller ring, och vänta med siffrorna tills alla nåtts.
- **Tisdag 29 september**: A2. B1 börjar, 25 per dag till fredag 2 oktober.
- **Senast fredag 2 oktober, före första prov hos en firma**
  - Kundkontakt aktiverad en gång i Testfirma solceller, titlar som börjar med PROV: skriv i rutan, få SMS:et, läs, ändra och skicka svaret från mobilen. Skärmbild av SMS:et till /forfragningar.
  - 46elks påfyllt, automatisk påfyllning på. Fakturavägen klar (beslut 2).
- **Måndag 5 oktober**: A3. Första B-test kan starta: nytt 46elks-nummer och ämnesfixen på plats, bolagen läggs in utan telefonnummer så att inga samtal planeras.
- **Fredag 9 oktober**: läsning 1, sekvens A.
- **Fredag 16 oktober**: läsning 2, sekvens B.
- **31 oktober**: radering av namn, adresser, nummer och rapportsidor för dem som inte svarat. Kvar blir en rad per firma utan identitet (bransch, tider, kanalstatus) som styrker siffrorna.
- **Fredag 6 november**: läsning 3, startade prov.
- **Fredag 27 november**: läsning 4, betalande.

### 5.2 Mätpunkter

En rad per bolag i en logg: grupp, datum första mejl, svar, kategori, mätning skickad, samtal, prov startat, betalande. Varje svar kategoriseras i Smartlead samma dag:
Positivt (ber om mätningen, ja till testet, vill prova rutan, vill prata), Nej bunden, Nej hemsida på gång, Nej nöjd eller har koll, Nej pris, Nej övrigt, Radera, Klagomål, Studs.

| Mått | Lyckat | Misslyckat | Läses |
|---|---|---|---|
| A: positiva av 22 | minst 3 | högst 1 | fre 9 okt |
| B: positiva av 100 | minst 5 | högst 2 | fre 16 okt |
| Nej av typen bunden eller hemsida på gång | högst 1 | 2 eller fler | fre 16 okt |
| Klagomål på testet | högst 1 | 3 eller fler: dold mätning läggs ned som dörr | löpande |
| Startade prov (rutan live hos firma) | minst 3 | 0 | fre 6 nov |
| Betalande efter 30 dagar | minst 1 av de 3 första | 0 | fre 27 nov |
| Rutan hos kund | varje förfrågan kommer fram | en som inte kommer fram stoppar nya prov | löpande |
| Din svarstid på positiva svar | samma dag, kvällssvar samma kväll | ett positivt svar som väntar över natten | varje svar |

Jämförelse: de gamla sajtkampanjerna gav en handfull positiva på 423 unika. Jämför positiva svar, inte alla svar, eftersom "ett nej räcker" tillverkar svar. 22 och 100 mottagare visar en tydlig skillnad eller ingen, inte en liten.

**Stoppa samma dag** vid ett klagomål om att testet var vilseledande (be om ursäkt, radera, ring jurist) eller studs över 5 procent (pausa, tvätta listan).

**Vad resultatet betyder**
- A lyckas men B misslyckas: egen mätning är dörren, att be om lov att mäta är det inte. Nästa steg är jurist och nya dolda test med avslöjande inbyggt, inte fler B-mejl.
- Positiva svar men 0 startade prov: dörren fungerar, erbjudandet bakom gör det inte. Prata med varje firma innan något ändras.
- 2 eller fler positiva vill ha hemsida och rutan ihop: pröva Ett systems paket (1 990 kr) i nästa omgång.
- Lyckat hela vägen: B på nästa 300 (samma branscher, andra orter). Full ombyggnad av sajten först vid 3 betalande.

**Kostnad:** nytt 46elks-nummer 30 kr/mån. Rutan ca 100 till 220 kr/mån per firma i rörlig kostnad under proven. Din tid (antaget) ca en timme per installation plus svar samma dag.

---

## 6. Beslut du måste ta

**Före torsdag 24 september**

1. **Paket och pris.** Förslag: 495 kr/mån exkl moms, 0 kr start, 30 dagar gratis, ingen bindning. Ingår: Meddelande, Bli uppringd, chatt, AI-förslag på svar, tak 30 uppringningar, 150 minuter, 100 SMS, 100 chattar. Obs: det är mer än 495-nivån i planen 7/9, där chatt och svarsutkast låg i 995. Säg ja till det som ett nytt paket.
2. **Avtalspart och faktura.** Förslag: Invox AB bär avtalet och personuppgiftsbiträdesavtalet, faktura manuellt. Kolla att Stolts fakturor går ut från Invox AB, annars måste Stolt in som mellanled. Står Stolt Marketing som ansvarig i A1:s småtext ska den juridiska personen stämma, skriv "Stolt Marketing (Invox AB)" om det är så.
3. **Avslöjandet till de 22.** Förslag: ja, fredag 25 september, oberoende av sajt och sälj. Säger du nej: radera de 22:s data före 2 oktober. Att låta dem ligga tyst är sämst.
4. **Radering.** Förslag: senast 31 oktober för dem som inte svarar, samma vecka för den som ber om det. En rad per firma utan identitet sparas som stöd för siffrorna.
5. **Rättelsen av 990-rutan.** Förslag: rapportsidan rättas torsdag 24, mejl C till alla 8 måndag 28, utan erbjudande.
6. **Ditt eget svarslöfte.** Förslag: "Svar samma arbetsdag" på sajten. Under testet svarar du på positiva svar samma dag, och på kvällssvar före kl 21 samma kväll. Bara om du klarar det, sajten och mejlen säljer svarstid och kommer att provas.
7. **Positioneringsraden i signaturen.** Förslag: "Förfrågningar och hemsidor för hantverksföretag". Ändras i ~/.claude/skills/mejl-stil/SKILL.md efter ditt ja. Mejlen ovan är skrivna med den.
8. **Avsändarkonto.** Förslag: bara joel@stolt-marketing.se, visningsnamn Joel Stolt, och signaturblocket som skillen säger. Köparläsningen varnar för att olika domäner i avsändare och signatur kan se ut som nätfiske. Alternativ: stryk mejlraden i signaturen i kalla steg.

**Före sajten och B (fredag 25 september)**

9. **Siffrorna offentligt.** Förslag: ja, anonymt, från måndag 28 när A1 levererats till alla, med förbehållet om skräpposten (och den avklippta ämnesraden om D1 visar den).
10. **Omätta.** Förslag: bara skriftligt test med samtycke, inga samtal, inga nya dolda test. Köp ett nytt 46elks-nummer (30 kr/mån) till Svarsspegeln, eftersom provtexten skriver ut numret. Nya dolda test först efter jurist (EU:s svarta lista och art. 14.3 b) och en skriven intresseavvägning.
11. **Adressen.** Förslag: /forfragningar.

**Kan vänta**

12. **Pilot hos befintliga kunder.** Förslag: ja, erbjud två av dina nuvarande hemsideskunder rutan 30 dagar gratis parallellt. Snabbaste vägen till ett första riktigt kundresultat, som saknas i dag.
13. **Telefonen.** Förslag: sälj utan. Bygg SMS vid missat samtal parallellt, prova det på stoltmarketing.se och nämn det först när det fungerat live.
14. **Hemsidepris när sajten är hindret.** Förslag: ordinarie prislista från 1 190 kr, inte 490-erbjudandet.

---

## 7. Granskningarna: vad jag rättade och vad jag lämnade

**Sanning och regler, de sju allvarliga, alla åtgärdade**
1. 990-rutan på rapportsidan: rättas torsdag 24 innan en enda länk skickas (3.7), mejl C till alla 8.
2. "Går att laga" fast info@ inte ingår: A2, B2, R1, rapportrutan och sidan säger rakt ut att mejl direkt till er adress inte ingår. A2 börjar med det.
3. ej_stott blev "inget formulär": egen rad, "gick inte att prova automatiskt". validering_fel mjukad.
4. Samtalsraden gissade människa: räknas bara på om samtalet togs, med meningen om testbeskedet.
5. GDPR art. 14: A1 skickas fredag 25 oberoende av sajt och sälj. Småtext med ansvarig, ändamål, källa, rättslig grund, raderingsdatum, rätt att invända och IMY i A1, A-E och C. Intresseavvägning torsdag 24. Juristfrågan i beslut 10.
6. Ingen ursäkt: "Förlåt för besväret" i A1 och A-E, tack och förlåt i C, inget sälj i A1.
7. Sloganen "Så att varje förfrågan får svar": används inte. Titel och slogan säger "via hemsidan".

**Sanning och regler, medel och låga**
- Åtgärdade: "egna förfrågningar går genom samma system" (nu "samma ruta"), Kvota Offerter struket ur paketet, "tar över driften" borta (hemsidan ingår inte), veckodagarna kontrollerade med date, 495-paketet som nytt beslut (beslut 1), anonym rad sparas efter radering, "Alla 30 har fått ett mejl" i stället för "fått veta", C utan erbjudande så enskilda firmor kan få det, bekräftelsen villkorad ("har kunden skrivit sin mejl"), "automatiskt samtal" i stället för "jag ringer", långa tankstreck i titlarna på /kontakt och /boka, ärlighetsformeln högst en gång per sekvens och sida, personuppgiftsbiträdesavtalet före rutan slås på, ingen publik "en timme", Sajtkoll kvar i menyn.
- Provförfrågningar i riktiga firmors inkorg: ommätningen efter 30 dagar är struken. Prov bara i Testfirma solceller med PROV-titlar.

**Köparläsningen**
- Åtgärdade: testet står i ämnesraden. Avklippta provämnet kontrollerat i koden och hanterat med {{sond_amne}}, {{amne_rad}} och fix före nya test. Testbeskedet på röstbrevlådan står i samtalsraden. Bli uppringd är inte längre uppmaningen (fungerar inte på kvällen), "skriv i rutan" i stället, och SMS:et och svaret som väntar på kvällen står i centrum. Inga betyg ("det är bra", "för en kund som väntar är det lång tid"), T-mejlet till de fyra långsamma är struket. Inga samtal i B. 495 utan bindning i stället för 1 990 med hemsida, Kvota och 12 månader. Tre steg i stället för fyra. Tre fält i formuläret. "Lycka till med {{company_name}}" borta. "I vårt test" en gång. B2 säger vad du säljer, så ingen letar efter haken. Mobilen provas i testfirman innan något sägs om den.

**Medvetet lämnat, och varför**
- A1 är längre än köparen vill (ca 110 ord plus småtext). Art. 14 går före korthet. Småtexten ligger efter signaturen.
- Två domäner i avsändare och signatur: skillen kräver fullt block. Lämnat till dig (beslut 8).
- Ett systems garanti ("gå ur direkt om en förfrågan inte kommer fram"): behövs inte när det inte finns någon bindning.
- Skärmbild av SMS:et i mejlet: inga bilder eller länkar i kalla steg. Bilden hamnar på /forfragningar när provet i testfirman är gjort.
- Footern och standardbeskrivningen ändras på sidor som ingår i SEO-uppföljningen 7 oktober. Liten påverkan, noteras i uppföljningen.
