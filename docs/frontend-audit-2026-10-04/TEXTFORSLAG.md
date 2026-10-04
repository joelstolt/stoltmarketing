# Konkreta textförslag

Förslag efter granskningen 4 oktober 2026. Inget är publicerat. Texterna nedan utgår från erbjudandena som står på sajten. Punkter som kräver verifierade mätningar eller avtalsdetaljer har markerats med hakparenteser.

## 1. Startsida: förklara produkten direkt

Den nuvarande frågerubriken fångar ett verkligt problem. Svagheten är att "en ruta" förklarar produkten ganska sent och att du/ni blandas. Föreslagen variant:

```text
Få hemsidans förfrågningar direkt till mobilen.

Kunden skriver på din hemsida. Du får ett SMS och ett färdigt förslag på svar som du kan läsa, ändra och skicka.

För dig som jobbar hos kunder och inte hinner bevaka inkorgen.

Prova gratis i 30 dagar

Därefter 495 kr/mån exkl. moms. Ingen bindningstid.

Behöver du också en ny hemsida? Se hemsidor och priser.
```

Huvudknappen ska leda till starten av provperioden eller en tydligt beskriven kontakt för att få den uppsatt, inte en generell bokningssida som inte nämner produkten. Om nästa steg endast är ett intresseformulär kan knappen heta:

```text
Jag vill prova rutan
```

## 2. Ersätt hemsidevillkoret i rutans process

I `components/b/SaGarDetTill.jsx:94` står nu ett 12-månadersvillkor under rutans 30-dagarsprocess. Föreslagen ersättning:

```text
De första 30 dagarna är gratis. Därefter kostar rutan 495 kr/mån exkl. moms, utan bindningstid.
```

Beskriv dessutom hur kunden väljer att fortsätta och avslutar när detta har kontrollerats mot det faktiska avtalet. Texten ovan inför inget nytt antagande om automatisk förlängning.

## 3. Förfrågningssidan: funktion och avgränsning

```text
Så fungerar det

1. Kunden beskriver sitt ärende i rutan på din hemsida.
2. Du får ett SMS när förfrågan kommer in.
3. Du får ett förslag på svar som du kan godkänna eller ändra.

Du bestämmer vad som skickas. Rutan svarar inte på vanliga telefonsamtal, läser inte din vanliga mejlkorg och bokar inte jobb i din kalender.
```

Visa de faktiska månadsgränserna i ett närliggande innehållsblock. Skriv "Detta ingår" ovanför dem, inte obegränsade formuleringar.

## 4. Hemsidans gratis förslag

Ersätter formuleringar som lovar att hela sajten är färdig före beslutet.

```text
Se ett förslag innan du bestämmer dig.

Skicka din webbadress eller ditt företagsnamn. Inom två arbetsdagar får du ett klickbart förslag med en startsida och en tjänstesida, utan kostnad eller förpliktelse.

Vill du gå vidare bygger jag klart resten av sajten enligt det upplägg vi kommer överens om.

Få mitt gratis designförslag
```

## 5. Bas: omfattning och bindning samlat

```text
Bas
För dig som behöver en mindre företagssajt.

0 kr i startavgift. 1 190 kr/mån exkl. moms.

En hemsida med upp till fem sidor. Design, innehåll, drift, säkerhet och löpande innehållsändringar ingår.

12 månaders inledande avtal, därefter månadsvis. Totalt 14 280 kr exkl. moms under de första 12 månaderna, utan tillägg.

Se allt som ingår
```

## 6. Rätta prisguidens exempel på större sajt

`/vad-kostar-en-hemsida` lovar i dag 10 till 20 sidor på Bas-priset. Följande utgår från central prislistas Bredd:

```text
Hantverksföretaget med flera tjänster

Du behöver plats för dina viktigaste tjänster, kundprojekt och områden du arbetar i. Bredd kostar 1 990 kr/mån exkl. moms, med 0 kr i startavgift och 12 månaders inledande avtal. Vi bestämmer sidstruktur och innehåll innan bygget börjar.
```

## 7. Malmö: korrekt lokal närvaro

```text
Webb och marknadsföring för företag i Malmö.

Jag heter Joel Stolt och utgår från Hässleholm. Jag hjälper företag i Malmö med hemsidor, sökmotoroptimering och annonsering. Du har direktkontakt med mig genom hela arbetet, på distans eller vid ett möte vi bokar tillsammans.
```

## 8. Lokal SEO: använd kundens sökord

```text
Syns du när någon söker efter det du gör i Hässleholm?

För en VVS-firma kan det vara "rörmokare Hässleholm". För en målare kan det vara "måla fasad Hässleholm". Jag undersöker vilka sökningar som är relevanta för just ditt företag och bygger innehåll som hjälper kunden att välja och ta kontakt.
```

Fraserna här är exempel, inte påstått verifierade volymer. Faktisk prioritering ska göras med sökdata.

## 9. SEO-prisguiden: jämför leveransen

Ersätter den kategoriska varningen mot priser under 3 000 kr.

```text
Bedöm vad du får för pengarna.

Ett månadspris säger inte tillräckligt om kvaliteten. Be om en konkret beskrivning av arbetet: vilka sidor som ska förbättras, vad som produceras, hur resultatet följs upp och vilka begränsningar som finns.

Jämför samma omfattning och fråga alltid om bindningstid, konton och ägande innan du bestämmer dig.
```

## 10. Visa kundresultat med rätt period och innebörd

```text
Resultat från kundens webbplats

[Antal] inskickade förfrågningar och [antal] klick på telefonnumret under [startdatum] till [slutdatum].

Källa: [system och definition]. Siffrorna visar kontakter via webbplatsen, inte antal genomförda affärer.

Se kundprojektet
```

Om riktiga samtal mäts genom en separat samtalslösning: skriv det i stället, med definition. Använd inte telefonklick och samtal som synonymer.

## 11. AI-läsbarhet och Lighthouse

```text
Så testade vi

Lighthouse mäter prestanda, tillgänglighet, best practices och SEO. Resultaten nedan kommer från [datum, enhet och testförhållanden].

Vi gjorde också ett separat test av hur innehållet kan läsas maskinellt med [verktyg och metod]. Det testet visar tekniska förutsättningar, inte hur ofta företaget rekommenderas av ChatGPT eller andra AI-tjänster.
```

## 12. Kontakt och bokning

På kontakt:

```text
Vad vill du ha hjälp med?

Skriv några rader om ditt företag och vad du behöver. Jag återkommer samma arbetsdag.

Namn
E-post
Vad behöver du hjälp med?

Skicka till Joel

Vill du hellre prata? Välj en tid i kalendern.
```

Behåll endast svarslöftet om det faktiskt gäller. Visa det också efter inskick. På bokningsfliken:

```text
Boka 15 till 20 minuter med Joel.

Vi går igenom vad du vill förbättra och vilket nästa steg som passar. Samtalet är kostnadsfritt och du förbinder dig inte till något.

Välj en tid
```

## 13. Rättade SEO-förklaringar

I stället för påståendet att sajter med färre än 50 sidor är osynliga:

```text
Ge dina viktigaste tjänster tillräckligt med utrymme.

En egen sida kan göra det lättare att beskriva tjänsten, svara på kundens frågor och visa relevanta projekt. Hur många sidor du behöver beror på vad du erbjuder och vad kunderna söker efter. Fler sidor hjälper bara när de tillför användbart innehåll.
```

I stället för ett löfte om FAQ-resultat i Google:

```text
Samla de frågor som hjälper kunden att fatta beslut.

Svara tydligt om pris, omfattning, process och villkor. Ett bra FAQ-avsnitt gör sidan mer användbar. FAQ-märkning ger däremot inte längre FAQ-utökningar i Googles sökresultat.
```

I stället för att förutsätta AI-citering från organisk topp tio:

```text
Gör informationen lätt att hitta och kontrollera.

Tydliga tjänstesidor, aktuella företagsuppgifter och konkreta svar är en bra grund för både vanlig sökning och AI-sök. En bra Google-placering garanterar däremot inte att företaget nämns i ett AI-svar. Vi behöver mäta de två sakerna separat.
```

Källor och begränsningar för de här rättningarna finns i `RAPPORT.md`.

## 14. Praktisk språkstädning

| Nuvarande ord/uttryck | Föreslagen riktning |
|---|---|
| leads | förfrågningar, när det är vad som mäts |
| konverterar | får besökaren att ta kontakt eller köpa |
| edge-hosting | snabb drift; teknisk förklaring längre ned vid behov |
| enterprise-kvalitet | konkret egenskap eller leverans, utan kvalitetsstämpel |
| AI-läsbarhet 100/100 | namngivet tekniskt test och dess faktiska innebörd |
| obegränsat / allt ingår | faktisk omfattning plus tydliga avgränsningar |
| vi / oss i Joels tjänsteleverans | jag / mig |
| du och ni om samma läsare | konsekvent du |
| lastar snabbt | laddar snabbt |
| Det allra flesta | De allra flesta |
| invest ererar | investerar |
| innehål | innehåll |
| sparer | sparar |
| retta | rätta |
| Nästa.js | Next.js, om tekniken verkligen behöver nämnas |

Gör inte automatiska globala ersättningar på hela sajten utan sammanhang. Ett case om ett team kan exempelvis behöva "vi", och ett tekniskt kundunderlag kan behöva korrekt fackterminologi.
