#!/usr/bin/env python3
"""Engangsskript 2026-08-07: utoka djupinnehallet pa tjanstesidorna mot uppmatt vinnarspec.

Lagger till stycken och FAQ pa seo/google-ads/webbutveckling och skapar
facebook-annonsering + ai-synlighet. Ror inte ai-automation/managed-hemsida.
Kors en gang: python3 scripts/expand-service-content.py
"""
import json, os

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FN = os.path.join(HERE, "lib", "local", "service-extra-content.json")
d = json.load(open(FN))

# ---------------- SEO ----------------
d["seo"]["deepParagraphs"] += [
    "Vad gör en SEO-byrå rent konkret varje månad? Hos mig ser det ut så här: jag följer positionerna på de sökord som betyder något för din affär, bygger ut de sidor som är nära att ta sig upp, skriver nya sidor för tjänster och frågor du ännu inte syns på, och håller tekniken ren efter varje ändring på sajten. Du får en rapport där du ser positioner, trafik och vad nästa månad ska ge. Inga hemligheter och ingen jargong.",
    "Lokal SEO är en egen gren. Kartrutan i Google styrs av närhet, kategori och recensioner, inte av samma faktorer som de vanliga träffarna, och bara en bråkdel av företagen i kartrutan syns också organiskt. Därför jobbar jag med båda ytorna parallellt: Google Företagsprofil med rätt kategori, öppettider och attribut, ett stadigt flöde av äkta recensioner, och sidor som tar de organiska träffarna. I många branscher är tröskeln in i kartrutan förvånansvärt låg, ofta räcker det med ett tjugotal genuina omdömen.",
    "Det som skiljer sajter som rankar från sajter som inte gör det är oftast inte länkar, utan sidbredd. När jag mätte de bäst rankade företagen i flera tjänstebranscher var antalet tjänstesidor den faktor som starkast följde med antalet sökord de rankade på, medan länkstyrkan i sig spelade förvånansvärt liten roll. En sajt med tio sidor kan inte konkurrera med en som besvarar hundra frågor. Därför börjar min SEO nästan alltid i innehållsplanen, inte i länkjakten.",
    "AI-söket förändrar inte grunderna, det höjer insatsen. När Google visar ett AI-svar hämtas källorna nästan uteslutande från sidor som redan rankar i topp tio på samma fråga. Det betyder att vanlig, gedigen SEO numera ger dubbel utdelning: den vanliga träffen och chansen att bli citerad i AI-svaret. Sidor med konkreta prisuppgifter och aktuellt innehåll citeras oftare, så den sortens sidor prioriterar jag högt.",
    "Hur väljer man SEO-byrå? Kräv tre saker. En nollmätning innan arbetet börjar, så att resultat går att bevisa i efterhand. Riktig sökordsdata bakom prioriteringarna, inte magkänsla. Och en tydlig månadsleverans du kan läsa och förstå. Var skeptisk mot garanterade förstaplatser, ingen seriös byrå kan lova det, och mot långa bindningstider som ska ersätta förtroende.",
]
d["seo"]["faqs"] += [
    {"q": "Vad kostar SEO per månad?", "a": "Hos mig ingår löpande SEO i Tillväxt för 2 490 kr/mån, tillsammans med Google Ads och nytt innehåll. En engångsaudit med åtgärdslista kostar 4 900 kr. På den svenska marknaden i övrigt ligger löpande SEO oftast mellan 5 000 och 30 000 kr i månaden beroende på ambitionsnivå och konkurrens."},
    {"q": "Hur väljer jag rätt SEO-byrå?", "a": "Titta på tre saker: att de mäter ditt nuläge innan de börjar, att de visar vilken data de bygger prioriteringarna på, och att du förstår månadsrapporten. Undvik garantier om förstaplatser och upplägg där du inte äger din egen sajt och data om ni skiljs åt."},
    {"q": "Fungerar SEO för små företag?", "a": "Ja, ofta bättre än för stora. Lokala sökningar och nischade tjänsteord har lägre konkurrens, och kartrutan går att ta med ett rimligt antal äkta recensioner. Ett litet företag med rätt sidor kan slå betydligt större konkurrenter på de sökningar som faktiskt ger kunder."},
    {"q": "Vad är AI-SEO och behöver jag det?", "a": "AI-SEO handlar om att synas när kunder frågar ChatGPT eller får Googles AI-svar. Eftersom AI-svaren nästan alltid citerar sidor som redan rankar organiskt är grunden samma som vanlig SEO, plus innehåll med konkreta svar och priser. Jag mäter och bygger det som en del av SEO-arbetet, läs mer under AI-synlighet."},
]

# ---------------- Google Ads ----------------
d["google-ads"]["deepParagraphs"] += [
    "Sökordsvalet avgör mer än budgivningen. Jag börjar smalt med exakta matchningar på de ord som signalerar köp, bygger en negativlista som stoppar allt som luktar gratis, jobb eller gör-det-själv, och breddar först när datan visar vilka ord som faktiskt genererar förfrågningar. Ett konto som startar brett bränner budgeten på nyfikna i stället för på kunder.",
    "Innan ett enda klick köps räknar jag baklänges från din affär: vad är en ny kund värd, vilken andel av besökarna blir förfrågningar, och vad får ett klick då högst kosta? Det talet styr sedan vilka sökord vi över huvud taget bjuder på. Ord som är för dyra för kalkylen väljs bort hur lockande de än ser ut, för en kampanj som inte går ihop per klick går inte ihop alls.",
    "Landningssidan är halva kampanjen. En annons som leder till startsidan tappar besökaren i tre klick av navigation. Jag skickar i stället trafiken till en sida byggd för exakt det annonsen lovar, med priset synligt, ett kort formulär och telefonnummer högst upp. Ofta är det där den stora förbättringen finns, inte i annonstexten.",
    "Mätningen sätts upp innan kampanjen tänds, aldrig efteråt. Konverteringar räknas när formuläret faktiskt skickats eller samtalet faktiskt ringts, inte när någon sett en sida. Sedan styr jag budgeten veckovis mot kostnad per förfrågan och pausar utan sentimentalitet det som inte levererar. Du ser samma siffror som jag i varje rapport.",
]
d["google-ads"]["faqs"] += [
    {"q": "Vilken budget behöver jag för att börja med Google Ads?", "a": "För ett lokalt tjänsteföretag räcker ofta 3 000 till 6 000 kr i månaden i annonsbudget för att få tillräckligt med data och ett stadigt flöde av förfrågningar. Viktigare än storleken är att budgeten får verka i minst sex veckor så att kampanjen hinner trimmas in innan den utvärderas."},
    {"q": "Varför ska annonsen inte leda till startsidan?", "a": "Startsidan är byggd för att presentera hela företaget, inte för att ta emot en specifik förfrågan. En dedikerad landningssida som svarar exakt på det annonsen lovade, med pris och formulär direkt, konverterar nästan alltid bättre och sänker därmed kostnaden per kund."},
    {"q": "Hur snabbt ger Google Ads resultat?", "a": "Trafiken kommer samma dag som kampanjen tänds. Räkna ändå med fyra till sex veckor innan siffrorna är rättvisande: systemet behöver konverteringar att lära sig på och jag behöver data för att rensa bort sökord som klickar utan att köpa."},
    {"q": "Vad kostar det att låta dig sköta min annonsering?", "a": "Hanteringen ingår i Tillväxt, 2 490 kr/mån, tillsammans med SEO och innehåll. Annonsbudgeten till Google tillkommer och bestämmer du själv. Inga procentpåslag på mediabudgeten och ingen bindning till stora spendnivåer."},
]

# ---------------- Webbutveckling / webbdesign ----------------
d["webbutveckling"]["deepParagraphs"] += [
    "Bra webbdesign är inte samma sak som snygg design. En sida kan vinna pris och ändå inte generera en enda förfrågan. När jag designar utgår jag från vad besökaren kom för att göra: hitta priset, se bevis på att ni kan er sak och ta kontakt utan friktion. Färg, typografi och rörelse är verktyg för det, inte mål i sig. Snabbheten är också design, för en sida som laddar långsamt tappar besökare innan den ens fått visa sig.",
    "Så går ett bygge till hos mig: vi börjar med en genomgång av mål, kunder och innehåll, sedan får du en skiss och ett fast pris. När designen är godkänd bygger jag, fyller på med innehåll och optimerar för sök. Vid lansering pekas domänen om utan avbrott, och därefter mäter vi och justerar. En normal företagssajt tar två till fyra veckor från start till lansering.",
    "Priset är öppet: 0 kr i startavgift och 1 190 kr i månaden, där drift, säkerhet och löpande ändringar redan ingår. Jämför gärna med marknaden, där en byråbyggd sajt oftast kostar 30 000 till 100 000 kr i engångsavgift plus löpande drift. Upplägget gör att jag bara tjänar på att din sajt fortsätter leverera, inte på att fakturera timmar för varje liten ändring.",
]
d["webbutveckling"]["faqs"] += [
    {"q": "Vad kostar webbdesign hos dig?", "a": "0 kr i startavgift och 1 190 kr/mån med 12 månaders bindning, därefter månadsvis. I priset ingår design, bygge, drift, säkerhet och löpande innehållsändringar. Behöver du e-handel är priset 1 990 kr/mån."},
    {"q": "Får jag se en design innan jag bestämmer mig?", "a": "Ja. Efter första genomgången får du en skiss på startsidan och ett fast pris, utan kostnad och utan förpliktelse. Då ser du riktningen innan du säger ja."},
    {"q": "Hur lång tid tar det att få en ny hemsida?", "a": "En vanlig företagssajt tar två till fyra veckor från genomgång till lansering. E-handel och större byggen tar en till tre månader. Du får en tidplan i förslaget och vet alltid vad nästa steg är."},
]

# ---------------- Facebook-annonsering (NY) ----------------
d["facebook-annonsering"] = {
    "deepHeading": "Så får du Meta-annonser att betala sig",
    "deepParagraphs": [
        "Facebook och Instagram är fortfarande den billigaste vägen till stora, lokala målgrupper, men bara om kampanjen optimeras mot rätt sak. Metas system gör exakt det du ber om: ber du om visningar får du visningar, ber du om interaktion får du tummar. Jag ber om förfrågningar. Det kräver att konverteringsspårningen är korrekt uppsatt från dag ett, så att algoritmen lär sig på riktiga leads i stället för på passiva skrollare.",
        "Målgruppsarbetet börjar i din kundlista, inte i Metas intressekategorier. De bästa kampanjerna byggs på lookalikes av dina faktiska kunder, kompletterat med geografi och ålder. Sedan får systemet utrymme att optimera inom ramarna. För ett lokalt tjänsteföretag är en radie runt verksamhetsorten plus ett välriktat budskap oftast starkare än avancerade intresselek.",
        "Det kreativa slits fortare än folk tror. En annons som fungerar i vecka ett är ofta trött i vecka fem, målgruppen har helt enkelt sett den. Därför testar jag alltid flera varianter parallellt, i regel stillbild mot kort video mot ren textannons, och byter ut det som tappar innan kostnaden per lead hinner sticka iväg. Du behöver inte producera reklamfilm, mobilfilmade klipp från verksamheten slår ofta studiomaterial.",
        "De tre vanligaste misstagen jag får städa upp efter: boostade inlägg i stället för riktiga kampanjer, målgrupper så breda att budgeten försvinner i bruset, och kampanjer som stängs av efter två veckor precis när inlärningen är klar. Meta-annonsering belönar tålamod och struktur, inte panikknappar.",
        "Facebook-annonsering och Google Ads gör olika jobb. Google fångar den som redan letar efter tjänsten, Meta skapar efterfrågan hos den som inte börjat leta än. För de flesta företag är rätt svar en kombination: Google tar botten av tratten, Meta fyller på toppen. Jag sköter båda och flyttar budget dit varje krona ger mest.",
    ],
    "faqs": [
        {"q": "Hur stor annonsbudget behöver jag på Meta?", "a": "För ett lokalt företag är 3 000 till 6 000 kr i månaden en rimlig start, tillräckligt för att systemet ska få data att lära sig på. Under det blir inlärningen så långsam att det är svårt att dra slutsatser. Budgeten kan sedan skalas när kostnaden per lead är bevisad."},
        {"q": "Fungerar Facebook-annonsering för B2B?", "a": "Ja, oftare än ryktet säger. Beslutsfattare skrollar också på kvällarna, och kostnaden per visning är en bråkdel av LinkedIns. För nischad B2B med små målgrupper kan LinkedIn ändå vara rätt komplement, det avgör vi utifrån vem din kund faktiskt är."},
        {"q": "Vad är en bra kostnad per lead?", "a": "Det beror helt på vad en kund är värd för dig, och det är där vi börjar räkna. För lokala tjänsteföretag landar en frisk Meta-kampanj ofta på 100 till 400 kr per förfrågan. Viktigast är att talet räknas mot ditt kundvärde, inte mot en generell branschsiffra."},
        {"q": "Måste jag ta fram bilder och filmer själv?", "a": "Nej. Jag bygger annonsmaterialet utifrån det som finns: foton från verksamheten, kundomdömen och enkla mobilklipp. Äkta material från vardagen presterar i regel bättre än polerad reklam, så tröskeln är lägre än de flesta tror."},
    ],
}

# ---------------- AI-synlighet (NY) ----------------
d["ai-synlighet"] = {
    "deepHeading": "Så fungerar AI-sök i praktiken",
    "deepParagraphs": [
        "När Google visar ett AI-svar eller när någon frågar ChatGPT om leverantörer hämtas underlaget från vanliga webbsidor. Jag har mätt hur källorna väljs, och mönstret är tydligt: den stora majoriteten av alla citat går till sidor som redan rankar i topp tio organiskt på samma fråga. Det finns alltså ingen separat AI-optimering som ersätter SEO. Det som finns är sidor som är byggda så att AI-motorerna kan och vill använda dem.",
        "Två saker skiljer sidorna som citeras från sidorna som rankar utan att citeras: konkreta prisspann och aktualitet. Sidor som anger pris från och till, och sidor som visar att innehållet gäller i år, plockas oftare in i AI-svaren. Däremot syns ingen mätbar effekt av FAQ-schema, trots att det ofta säljs som AI-optimering. Jag lägger arbetet där datan visar effekt, inte där myterna pekar.",
        "Tekniken sätter taket. En sajt som renderar sitt innehåll så att AI-motorernas läsare inte ser det är osynlig hur bra innehållet än är. I ett av mina kundcase var halva innehållet oläsbart för AI-assistenter innan ombyggnaden, efteråt gick sajten från 50 till 100 av 100 i AI-läsbarhet med full pott i varje kategori. Den typen av tekniska genomgång är alltid första steget.",
        "Google visar i dag AI-svar och kartrutan på olika sökningar, i min mätning aldrig båda samtidigt. Prisfrågor och kunskapsfrågor får AI-svar, lokala köpsökningar får kartrutan. Det gör strategin enkel att rikta: recensioner och företagsprofilen vinner den ena ytan, innehåll och teknisk läsbarhet den andra. Jag kartlägger vilka av dina viktiga sökningar som tillhör vilken yta och bygger därefter.",
        "Arbetet löper månadsvis: nollmätning av var du nämns i dag, teknisk genomgång av AI-läsbarheten, innehåll som besvarar de frågor dina kunder faktiskt ställer, och återkommande mätning så att du ser utvecklingen mot konkurrenterna. Volymerna i AI-sök är fortfarande små, men de växer, och positionerna som byggs nu blir dyra att ta ikapp senare.",
    ],
    "faqs": [
        {"q": "Nämns företag verkligen i ChatGPT-svar?", "a": "Ja, framför allt när frågan gäller val av leverantör eller vad tjänster kostar. Vilka som nämns styrs av vad som går att läsa och verifiera på webben, och där väger sidor som rankar organiskt tyngst. Att synas i AI-svar är därför en förlängning av att synas i sök."},
        {"q": "Vad betyder GEO och AEO?", "a": "Generative Engine Optimization och Answer Engine Optimization, två namn på samma sak: att optimera för AI-genererade svar i stället för klassiska sökresultat. Jag använder hellre AI-SEO, för i praktiken bygger arbetet på samma grund som vanlig sökmotoroptimering."},
        {"q": "Hjälper FAQ-schema mig att synas i AI-svar?", "a": "Enligt min egen mätning: nej. Sidorna som citerades i AI-svar hade inte FAQ-schema oftare än sidorna som inte citerades. Det som faktiskt skilde var konkreta prisspann och aktuellt innehåll. Schema har andra poänger, men sälj det inte till dig som AI-magi."},
        {"q": "Kan du garantera att AI nämner mitt företag?", "a": "Nej, och ingen seriös leverantör kan det, AI-svaren ägs av Google och OpenAI, inte av oss. Det jag kan är att mäta ditt nuläge, bygga de förutsättningar som bevisligen ökar chansen och visa utvecklingen svart på vitt över tid."},
    ],
}

json.dump(d, open(FN, "w"), ensure_ascii=False, indent=2)
print("OK. Nycklar nu:", ", ".join(d.keys()))
for k in ["seo", "google-ads", "webbutveckling", "facebook-annonsering", "ai-synlighet"]:
    print(f"  {k}: {len(d[k]['deepParagraphs'])} stycken, {len(d[k]['faqs'])} FAQ")
