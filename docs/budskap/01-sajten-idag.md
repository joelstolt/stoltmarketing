# 01 Sajten idag, sedd med en hemsideköpares ögon

Status: KLAR (alla sidor lästa, tvärsnitten B-G skrivna, 2026-09-19)
Källa: källkoden i /Users/joelstolt/Desktop/Dev/internal/stoltmarketing, inte live-sajten.
Metod: läst fil för fil. Allt nedan är UPPMÄTT (fil:rad + citat) om inte raden börjar med ANTAGET.

## A. Sida för sida

### A1. Startsidan (app/page.js -> app/b/BContent.jsx + components/b/*)

- Talar till: "Hemsidor åt företag som lever på förfrågningar" (BContent.jsx:247). Alltså tjänsteföretag med offertflöde. Alla fyra case är flytt/bygg/entreprenad (BContent.jsx:42-45), ingen från Hässleholm.
- Löfte: H1 "Din nya hemsida, färdig innan du betalar ett öre." (BContent.jsx:252).
- Bevis: en rad under fältet "Niklassons Flytt · 37 offertförfrågningar på 30 dagar, mätt i sajten" (BContent.jsx:261), Kundmotorn med live-tal, i kodens ögonblicksbild från 2026-09-05: "19 sajter i drift", 156 "förfrågningar, samtal och mejlklick" (lib/kundmotor.js:53-64, Kundmotor.jsx:90-94), 4 case, 1 Google-recension (Claudia, Omniway, BContent.jsx:329-345), bild på Joel först i sektion 6 (BContent.jsx:354-371).
- Pris: "0 kr i start, från 1 190 kr i månaden, drift och ändringar ingår" (BContent.jsx:255), upprepas :407 och :445.
- CTA: ETT fält med platshållaren "dittforetag.se" och knappen "Mät min sajt" (HeroKoll.jsx:186, :193). Ingen knapp som säger "få ett förslag" eller "ny hemsida".
- Efter klick: 14 kontroller, poäng av 100, upp till tre brister ("Tre saker kostar dig förfrågningar.", HeroKoll.jsx:216). FÖRST DÄREFTER visas frågan "Vill du se den byggd på nytt?" med mejlfält och knappen "Bygg mitt förslag" (HeroKoll.jsx:265, :284). Tack-text: "Tack. Om två arbetsdagar har du en länk." och "Jag ringer inte, jag mejlar." (HeroKoll.jsx:297, :300).
- Telefon och mejl syns först allra längst ned i gula finalen: "eller ring ... · mejla ... · eller boka en tid" (BContent.jsx:448-450). Inget telefonnummer och inget ansikte i första skärmen.

Fynd på startsidan:
1. Löftet och knappen pekar åt olika håll. H1 lovar en ny hemsida, knappen säger "Mät min sajt" (HeroKoll.jsx:193). Den som vill ha en ny hemsida måste först förstå att mätningen är vägen till förslaget. Underrubriken förklarar det, men knappen gör det inte.
2. Den som saknar hemsida har ingen dörr. Sub: "Klistra in adressen till din nuvarande sajt." (BContent.jsx:255). Steg 1 säger "Har du ingen sajt skriver du bara företagsnamnet." (SaGarDetTill.jsx:22) men fältet skickar värdet som URL till /api/sajtkoll (HeroKoll.jsx:84-88). Se A9 fynd 7 om vad som händer med ett företagsnamn.
3. "Ingen bindning, inga påminnelser." (HeroKoll.jsx:291) står precis under förslagsformuläret, medan FAQ säger "12 månaders bindning, därefter månadsvis." (BFaq.jsx:12) och mekanismsektionen "12 månader, sedan månadsvis." (SaGarDetTill.jsx:94). Avser olika saker (förslaget resp. abonnemanget) men läses som en motsägelse.
4. FAQ-svaret "Vad händer efter lansering?": "Allt ingår i månadspriset på 1 190 kr" (BFaq.jsx:48) medan första FAQ-svaret säger "De flesta landar på Bredd, 1 990 kr/mån." (BFaq.jsx:12). Chipsen "I månadspriset ingår" listar "Innehållsändringar" och "Support inom 24 h" utan att säga vilket paket (BFaq.jsx:93).
5. Tidsuppgifter spretar: "Det tar mig två arbetsdagar" (HeroKoll.jsx:268), "Det tar mig några timmar" (BFaq.jsx:16), "Dag 3" (SaGarDetTill.jsx:25), "Dag 10 Live på din domän" (SaGarDetTill.jsx:30), "En enklare webbplats tar oftast 1-2 veckor" (BFaq.jsx:44).
6. Case-texterna är skrivna på SEO-språk: "Ett tyst canonical-fel tog bort sajten ur Google." (BContent.jsx:45), "Formulärkedjan verifierad på riktigt" (BContent.jsx:44). En snickare vet inte vad canonical är.
7. Tjänstekatalogen finns kvar men nedtonad: en huvudrad "Ny hemsida, byggd för att hittas" (BContent.jsx:405) och sex piller under "Ingår eller läggs till efter behov" (BContent.jsx:30-37, :413) plus "Alla tjänster". Oklart för köparen vilka som INGÅR och vilka som LÄGGS TILL.
8. Huvudraden länkar till /tjanster/webbutveckling (BContent.jsx:399), inte till en sida som heter hemsida. Ordet byts alltså vid klicket (se B2).
9. FAQ blandar in frågor som inte rör hemsideköparen: WordPress vs Next.js (BFaq.jsx:35), "AI-lösningar för småföretag" (BFaq.jsx:39).

### A2. Annonslandningssidan /lp/hemsida-foretag (app/lp/hemsida-foretag/LpHemsidaContent.jsx, noindex enligt layout.js:10-14)

- Talar till: företagare som sökt hemsida/pris/webbyrå via Ads. Eyebrow "Hemsida till fast pris" (:266).
- Löfte: H1 "Ny hemsida till ditt företag, se den färdig innan du betalar" (:269). Sub: "Enterprise-kvalitet till småföretag, byggd av personen du pratar med." (:272).
- Bevis: "32 offertförfrågningar på 30 dagar för Niklassons Flytt" (:283-286), tre citat varav två Google-recensioner (:430-450), "10+ år i branschen · 150+ levererade projekt" (:304), bild på Joel i sektion 5 (:497).
- Pris: "Fast pris från 1 190 kr/mån, 0 kr i startavgift och allt ingår" (:272-273), prisankare "Traditionell byrå 80 000 till 200 000 kr" (:328), tre paket (:60-80).
- CTA: formulär direkt i första skärmen, rubrik "Få ditt gratis designförslag" (:309). Fält: Namn, E-post (krav), Telefon, Nuvarande webbadress (valfria) (:175-214). Knapp "Skicka, svar inom 24 h vardagar" (:231). Telefonnummer i toppen (:252-257), sticky "Ring" + "Få gratis förslag" på mobil (:705-723).
- Efter klick: "Tack, jag hör av mig inom 24 timmar. Du får ditt designförslag inom två arbetsdagar." (:162-166).

Fynd:
1. Steg 1 i "Så funkar det" säger "Boka en kostnadsfri genomgång. Femton till tjugo minuter över video." (:36-37) men sidan har ingen bokning, bara formuläret för designförslag. Två länkar heter "Boka kostnadsfri genomgång" och går till samma formulär (:608, :627). Kodkommentaren :714-716 visar att samma krock redan rättats i sticky-knappen men inte här.
2. Startsidan lovar "Gratis, utan möte" (BContent.jsx:255). LP:n säger att första steget är ett videomöte. Samma erbjudande, två olika mekanismer.
3. Beviset skiljer sig: LP "32 offertförfrågningar" (:283, :409) mot startsidans "37" (BContent.jsx:261, lib/kundmotor.js:60). LP-talet är hårdkodat, startsidans är live.
4. "150+ levererade projekt" (:304, :517) mot startsidans "19 kundsajter i drift och mätning" (BContent.jsx:374, lib/kundmotor.js:55). Båda kan vara sanna, men två olika tal för "hur många har du gjort".
5. Bas = "Upp till sex sidor" (:65) mot "Hemsida med upp till fem sidor" i den centrala paketfilen (lib/pricing-packages.js:14) och på /hemsida-foretag (page.js:45).
6. Leveranstid: "Från godkänt förslag till lansering tar det oftast två till fyra veckor" (:93) mot startsidans "Dag 10" (SaGarDetTill.jsx:30) och "1-2 veckor" (BFaq.jsx:44).
7. "Enterprise-kvalitet" (:272) är byråspråk. En målare söker inte enterprise.

### A3. /hemsida-foretag (app/hemsida-foretag/page.js, indexerad SEO-sida, kommentaren :8 säger att den också är Ads-landning)

- Talar till: "företag" generellt. Title "Hemsida för företag | 0 kr start, 1 190 kr per månad" (:13).
- Löfte: H1 "En hemsida som ger dig kunder. 0 kr i start, 1 190 kr i månaden." (:159).
- Bevis: INGET. Inga case, inga citat, ingen bild, inget tal på hela sidan, trots kommentaren "pris direkt, bevis, process, FAQ" (:7). Enda beviset är ett påstående: "När jag mätte lokala tjänsteföretag..." (:198).
- Pris: tre paketkort överst (:39-76), "12 månaders bindning, därefter månadsvis." (:187).
- CTA: "Boka genomgång" på varje paket och "Boka kostnadsfri genomgång" i slutet, allt till /boka (:180, :252). Inget formulär, inget telefonnummer i innehållet.
- Efter klick: bokningssidan, se A10.

Fynd:
1. Sidan sågar sitt eget instegspaket. "sajter med färre än 50 sidor i praktiken osynliga i sök" och "Därför bygger jag inte bara en startsida och fem undersidor" (:198-201), medan Bas tre skärmar upp är "Hemsida med upp till fem sidor" (:45).
2. Mekanismen är en tredje variant: "Först en genomgång på en halvtimme ... Sedan får du en skiss på startsidan och ett fast pris" (:212-213). Startsidan: inget möte, klickbart förslag. LP: 15-20 min video, klickbart förslag. Här: 30 min, "skiss".
3. Prisankaret skiljer sig från LP:n: "oftast 30 000 till 100 000 kr" (:81) mot "80 000 till 200 000 kr" (LpHemsidaContent.jsx:328).
4. "inom några dagar" (:250) mot "inom 2 arbetsdagar" (:161) på samma sida.

### A4. Paketen (lib/pricing-packages.js, källa för /priser och /tjanster)

- Bas "För enmansfirman", 0 kr start, 1 190 kr/mån, "Hemsida med upp till fem sidor", "Domän och mejladress på den", "Ändringar klara inom två arbetsdagar" (:9-21).
- Bredd "För företag med flera tjänster", 1 990 kr/mån, märkt "Här landar de flesta", "Obegränsat antal sidor, en per tjänst", "Formgiven från vitt papper, ingen mall", "Ändringar klara inom ett dygn" (:24-38).
- Spets "För dig som vill äga din marknad", 2 990 kr/mån, AI-assistent, Google Ads, ortssidor, strategisamtal (:42-55).
- Bindning: "12 månaders bindning, därefter månadsvis" (lib/local/data.js:32).
- Filens egen kommentar (:4-5) varnar att priser också ligger hårdkodade i combos.json, llms.txt och chattprompten.

Fynd: Bredd-raden "Formgiven från vitt papper, ingen mall" (:33) säger underförstått att Bas ÄR en mall. /hemsida-foretag lovar samtidigt "Skräddarsydd design i stället för igenkännbar mall" som något som alltid ingår (app/hemsida-foretag/page.js:222).

### A5. /tjanster/webbutveckling (app/tjanster/webbutveckling/WebbutvecklingContent.jsx + lib/local/service-extra-content.json, nyckeln "webbutveckling")

OBS: texten ligger INTE i lib/services-extra.js (den filen rör e-handel, wordpress, facebook, ai-synlighet). Djuptexten ligger i lib/local/service-extra-content.json:49-90 och renderas av components/ServiceExtra.jsx.

- Talar till: oklart. Badge "Webbutveckling" (:45), H1 "Moderna webbplatser och e-handel som gör det lätt för kunder att hitta dig och ta kontakt." (:46), sub "Samma kvalitet som jag levererar åt AcadeMedia." (:47). Title-tagg "Webbdesign & webbutveckling | Hemsida med fast månadspris" (layout.js:12).
- Löfte: inget skarpt. "Färdig innan du betalar" finns INTE i hero, bara som bisats i prisrubriken: "du ser ett färdigt designförslag innan du bestämmer dig" (:144).
- Bevis: "150+ Levererade webbprojekt", "AcadeMedia · Pågående enterprise-uppdrag i WooCommerce" (:111-116), två case: "Linguista, 100/100 i fyra kategorier" och "EdShare, 10x snabbare serversvar" (:126, :132). Teknikmått, inga kundutfall. Startsidans case (Niklassons, 37 offerter) syns inte här.
- Pris: bullets "0 kr start, 1 190 kr/mån" (:48), tre paket hårdkodade (:146-195, kopia av lib/pricing-packages.js trots att den filen säger sig vara enda källan).
- CTA: "Få upplägg och pris" -> /boka?amne=pris&paket=... (:214) och "Boka kostnadsfri genomgång" -> /boka (:262). Ingen sajtkoll, inget förslagsformulär, ingen bild på Joel, inget telefonnummer i innehållet.
- Efter klick: bokningssidan (A10).

Fynd:
1. Samma sida svarar på prisfrågan på två oförenliga sätt. "Vad kostar en webbplats? 0 kr i startavgift och 1 190 kr/mån" (WebbutvecklingContent.jsx:30) och längre ned "Vad kostar en hemsida hos dig? Det beror på omfattningen ... Du får en tydlig offert ... Hör av dig med dina behov så räknar jag på det." (service-extra-content.json:62). Det andra svaret är den gamla offertmodellen.
2. Samma sida ger två leveranstider: "Klar på 1-2 veckor" (:48, :29) och "En normal företagssajt tar två till fyra veckor" (service-extra-content.json:56, :86).
3. Teknikjargong mot fel läsare: sektionen "Teknik" listar "Next.js & React", "Tailwind CSS", "Framer Motion", "Vercel", "Stripe & Klarna" (:18-25). Första FAQ-frågan är "Vilken teknik bygger du i?" (:28).
4. "Kan jag uppdatera sajten själv efteråt? ... Jag erbjuder också managed hemsida om du vill att jag sköter uppdateringar." (:31). Det låter som en separat tjänst, medan resten av sajten säger att ändringar ingår i månadspriset.
5. "Som webbyrå jobbar jag" (service-extra-content.json:53) direkt efter "Jag är en webbutvecklare som gör allt själv" (:52). Byrå eller person?
6. Mekanismen här: "vi börjar med en genomgång ... sedan får du en skiss och ett fast pris" (service-extra-content.json:56, :82). Alltså möte först och "skiss", inte "klickbart förslag utan möte".
7. Knappen "Få upplägg och pris" (:214) sitter under ett paket där priset redan står. Köparen får intrycket att priset ändå inte är priset.
8. Långa tankstreck i copy (Joels egen regel): "leder besökaren till handling — inte bara snygg design" (:10), "Allt du behöver — i en leverans." (:79).

### A6. /tjanster (app/tjanster/TjansterContent.jsx)

- Talar till: den som vill ha "en digital konsult" för allt. Title "Tjänster Hässleholm — Webb, SEO, AI & Google Ads" (app/tjanster/layout.js:11, långt tankstreck i title-taggen).
- Löfte: H1 "Webb, SEO, AI och drift. Ett mål: fler kunder från webben." (:332). Bullet "AI & automation som standard" (:336).
- Bevis: statrutor per tjänst: "150+ Levererade webbprojekt", "24h Svarslöfte på vardagar" (:45-46), "1 Egen AI SaaS-produkt", "45s Offert via AI (Kvota.se)" (:67-68).
- Pris: paketen importeras från lib/pricing-packages.js (:454).
- CTA: "Läs mer" per tjänst, "Få upplägg och pris" per paket (:482), CloseBlock "Boka genomgång" + Ring + Mejla + Joel-kort (components/CloseBlock.jsx:37-48).
- Åtta likvärdiga tjänsteblock (:27-204): Webb, AI & Automation, Söksynlighet, Google Ads, E-handel, WordPress, Drift, Tillgänglighet. Hemsidan är ett av åtta, inte huvudsaken.

Fynd:
1. "Vi gör det enkelt för rätt kunder att hitta dig" (:76) mitt i en sida som annars säger "jag".
2. Processen här: "Vi börjar med en kort genomgång. Inom två arbetsdagar har du sedan ett färdigt designförslag" (:251). Fjärde varianten av mekanismen.
3. Tankstreck i copy: "Varje del stöttar din affär — inget onödigt krångel." (:346), "15–20 min." (:582, components/CloseBlock.jsx:14).

### A7. /priser (app/priser/page.js)

- Talar till: den som jämför pris. H1 "Öppna priser, färdig sajt innan du betalar" (:56).
- Löfte: "Det här är hela prislistan, det finns inga fler rader någon annanstans." (:57).
- Bevis: inget (inga case, inga citat, ingen bild).
- Pris: tre paket ur lib/pricing-packages.js, tillägg e-handel +800 kr/mån, tre engångstjänster à 4 900 kr.
- Villkor, tydligt skrivna: "12 månader, sedan månadsvis ... Uppsägning med ett mejl, till nästa månadsskifte." (:20-21), "Du äger allt. Sajten, innehållet och domänen är dina." (:24-25), "Vad händer efter de första 12 månaderna? Allt löper vidare månadsvis till samma pris" (:39-40).
- CTA: "Boka genomgång" på alla paket (:105) och "Boka kostnadsfri genomgång" (:211). Ingen sajtkoll, inget förslagsformulär.

Fynd:
1. Påståendet "inga fler rader någon annanstans" (:57) stämmer inte: e-handelssidan har "89 000 kr", "149 000 kr" och "Drift efteråt 2 495 kr/mån utan bindningstid" (lib/services-extra.js:27, :31, :34).
2. "Sajten byggs färdig innan du betalar. Du tittar, klickar runt och bestämmer sedan." (:17, :32). Startsidan säger att förslaget är "startsida och en tjänstesida" och att "Resten av sidorna byggs" efter ja (BFaq.jsx:16, SaGarDetTill.jsx:32). Köparen bestämmer sig alltså på två sidor, inte på en färdig sajt. Ingenstans står NÄR 12-månadersavtalet skrivs på (vid ja till förslaget eller vid lansering).
3. Finalen lovar "en ärlig bedömning och ett fast pris" (:205-206) på en sida vars poäng är att priset redan är fast och öppet.

### A8. Menyn (components/Header.jsx)

- Dropdown "Tjänster" med tio rader plus "Alla tjänster": Webbutveckling, E-handel, WordPress, AI & Automation, SEO, Google Ads, Facebook-annonsering, AI-synlighet, Tillgänglighet & EAA, Managed hemsida (:29-90). Första raden heter "Webbutveckling · Moderna sajter som konverterar" (:32-33). Ordet "hemsida" finns bara i "Managed hemsida".
- Övriga: Priser, Projekt, Sajtkoll, Om mig, Kontakt (:92-98).
- Desktop: telefonnummer synligt i menyraden (:417-437) och knappen "Boka genomgång" (:439-445). Mobil: bara logga och "Meny", telefon och "Boka kostnadsfri genomgång" ligger inne i menyn (:621-651).
- Följd: på startsidan konkurrerar menyns knapp "Boka genomgång" med herons "Mät min sajt", och heron säger "utan möte".

### A9. /sajtkoll (app/sajtkoll/page.js + app/api/sajtkoll/route.js). Ads-kampanjen "sok-sajtkoll" landar här.

- Talar till: den som redan har en hemsida och undrar hur den mår. Badge "Gratis verktyg" (:184).
- Löfte: H1 "Hur bra fungerar din hemsida?" (:189). "14 kontroller, cirka 10 sekunder, ingen registrering." (:194).
- Bevis: verktyget självt. Inga case, inga citat, ingen bild på Joel, inget pris.
- Pris: INGET. Orden "ny hemsida", "1 190", "0 kr", "förslag" och "färdig innan du betalar" förekommer inte på sidan.
- CTA: "Testa sajten" (:223).
- Efter klick: poäng + 14 rader. Sedan tre vägar i den här ordningen: (1) "Få hela rapporten med åtgärdslista på mejl" med namn, e-post och förbockad "Sajtvakten" som mejlar varje månad (:343-362), (2) "Jämför med en konkurrent" (:386), (3) "Vill du att det vi hittade blir fixat? Boka en kostnadsfri genomgång ... 15 till 20 minuter" -> /boka, och "Se tjänster" -> /tjanster (:430-441).

Fynd:
1. Sajtkollen på /sajtkoll och sajtkollen i startsidans hero är två olika säljflöden. Startsidan frågar efter mätningen "Vill du se den byggd på nytt?" och tar ett mejl för ett gratis förslag (HeroKoll.jsx:265-284). /sajtkoll har inte det erbjudandet alls, den erbjuder en PDF-lik rapport, månadsbevakning och ett möte. Ads-trafiken skickas alltså till den version som INTE bär huvuderbjudandet.
2. CTA:n talar om att "fixa" det som hittades (:431), inte om en ny hemsida. Sajten säljer ingen fix-tjänst med pris, den säljer ny sajt på abonnemang.
3. Händelsen "sajtkoll-kord" sitter på knappen (:220) och räknar klick på "Testa sajten", inte genomförda mätningar. Händelsen "lead-sajtkoll" (:438) är ett klick på länken till /boka, inte en lead. Tolka de 16 körningarna och "leads" därefter.
4. "Tolv saker som avgör" (:456) mot "14 kontroller" (:194, :420) på samma sida.
5. "Inga gissningar, ingen lagring." (:251) mot att resultatet sparas i databasen för delbar länk och Sajtvakten (app/api/sajtkoll/route.js:627-645, page.js:122).
6. Hela sidan säger "vi": "så mäter vi sajten" (:192), "mäter vi om din sajt varje månad" (:347), "samma motor vi använder" (:466), och i tredje person "så går Joel igenom resultatet" (:434). Startsidan säger "Jag mäter den på tio sekunder" (BContent.jsx:255).
7. Startsidans steg 1 säger "Har du ingen sajt skriver du bara företagsnamnet." (SaGarDetTill.jsx:22). API:t avvisar allt utan punkt i namnet (route.js:74, `!host.includes(".")`) med felet "Skriv en riktig webbadress, till exempel dittforetag.se" (route.js:190). Den som saknar hemsida, alltså den som mest behöver en, kommer inte vidare i startsidans enda formulär.

### A10. /boka (app/boka/BokaContent.jsx). Dit går nästan alla knappar utanför startsidan.

- Löfte: H1 "Boka en kostnadsfri genomgång" (:324), badge "Kostnadsfritt · 15–20 min" (:319).
- Två flikar: meddelande (förvald) eller kalender. Fält: namn, e-post (krav), företagsnamn (valfritt), meddelande. Inget telefonfält.
- Svarslöfte: "Jag hör av mig inom 24 timmar." (:368). Telefon och mejl visas under formuläret (:542). Joel-kort med ansikte i sidokolumnen (:557).
- "Det du får med dig": "Vad som fungerar på sajten nu", "Var ni tappar förfrågningar", "Hur ni står mot konkurrenter", "En konkret plan framåt" (:25-30).

Fynd:
1. Bokningssidan nämner inte designförslaget. /hemsida-foretag lovar "Boka en kostnadsfri genomgång så får du en skiss och ett fast pris" (app/hemsida-foretag/page.js:250), men här lovas en analys av nuvarande sajt och "en konkret plan". Löftet tappas i klicket.
2. Tilltalet byter till "ni" (:27-28) från "du" på alla säljsidor.
3. Title-taggen "Boka kostnadsfri genomgång — Joel Stolt, Hässleholm" (app/boka/layout.js:11) har långt tankstreck, liksom /om och /kontakt (app/om/layout.js:11, app/kontakt/layout.js:11).

### A11. /kontakt (app/kontakt/KontaktContent.jsx)

- H1 "Boka en kostnadsfri genomgång och få tydliga nästa steg." (:144).
- Fält: namn, e-post (krav), företagsnamn, rullista "Välj tjänst" med "Ny webbplats", "E-handel / WooCommerce", "AI & Automation", "SEO & Synlighet", "Managed hemsida / Drift", "Annat" (:259-265), meddelande (krav) med platshållaren "Berätta om ditt nuläge, mål och utmaningar..." (:282). Inget telefonfält.
- Svarslöfte: "Svar inom 24h på vardagar" (:17), telefon "Ring eller SMS, vardagar 08:00 till 17:00" (:24).
- Process: formulär -> "Jag hör av mig inom 24h" -> "kort samtal på 15 till 20 min" -> "Konkret rekommendation med scope och pris." (:45-56).

Fynd:
1. Rullistan säger "Ny webbplats" (:260), inte "Ny hemsida". Ordet "hemsida" finns bara i "Managed hemsida / Drift".
2. "scope och pris" (:56): priset är redan öppet, och "scope" är byråord.
3. Vägen här är tre steg innan köparen ser något (formulär, väntan, samtal). Startsidans väg är adress + mejl och sedan ett färdigt förslag. Samma företag, två helt olika köpresor.

### A12. /om (app/om/OmContent.jsx)

- H1 "Joel Stolt", underrad "Digital konsult & AI-specialist" (:89, :95). Inte "jag bygger hemsidor åt småföretag".
- Text: "Från lokala företag i Hässleholm till Sveriges största utbildningsföretag." (:102-103), "Idag är jag djupt inne i AI" (:110).
- Tal: "10+ Års erfarenhet", "150+ Levererade projekt", "1 AI SaaS-produkt" (:59-61), tidslinjen säger "Hundratals sajter levererade." (:10).
- Sektionen "Jag bygger inte bara åt kunder. Fem produkter jag byggt och driver själv" med Kvota, Granska, Konforma, Tryggadokument, Efterbo (:398-407).
- CTA: "Boka kostnadsfri genomgång" (:535).

Fynd:
1. "1 AI SaaS-produkt" (:61) och "Fem produkter jag byggt och driver själv" (:399) på samma sida.
2. Sidan svarar inte på den ensamma konsultens svaga punkt: vad händer vid sjukdom, semester eller om Joel slutar. Sökning efter sjuk/semester/ensam i app, components och lib ger noll träffar på säljsidorna.
3. Fem egna produkter + AI-specialist väcker frågan köparen inte säger högt: har han tid med min hemsida?

### A13. Sidfoten (components/Footer.jsx, alla sidor utom startsidan och LP:n)

- Självbeskrivning: "Digital byrå i Hässleholm med 10+ års erfarenhet. Moderna hemsidor, e-handel, SEO, Google Ads och AI-automation, med enterprise-kvalitet" (:124-126) och "Stolt Marketing, webbyrå i Hässleholm & Skåne för hemsidor, SEO, Google Ads och AI." (:251).
- Tolv tjänstelänkar (:8-19), "Egen AI-produkt: Kvota.se" (:263), CTA "Boka kostnadsfri genomgång" (:157), "Svar inom 24h på vardagar" (:254).

### A14. Case (lib/case-data.js + startsidans lista)

- lib/case-data.js har fyra case: Förskolan Harpan (Hässleholm), Pingstkyrkan Hässleholm, Gärdets Hundtrim (Stockholm), Batteriproffs (eget). Resultatraderna är teknik och status, inte utfall: "Teknik: Next.js", "Status: Live på egen domän" (:25-29, :58-62, :90-94).
- Startsidan visar fyra ANDRA case, alla bygg/flytt/entreprenad i Helsingborg, Norrköping, Örebro och Sundsvall (BContent.jsx:42-45). De två Hässleholmscasen visas inte på startsidan, trots att Joel sitter i Hässleholm.
- Batteriproffs-caset säger "vi" rakt igenom: "Byggd och driven av oss", "Därför startade vi Batteriproffs" (:114-116).
- /tjanster/webbutveckling visar en tredje uppsättning: Linguista och EdShare, båda AcadeMedia (WebbutvecklingContent.jsx:124-135).

### A15. Metadata och JSON-LD (app/layout.js)

- Title: "Hemsida för företag, färdig innan du betalar | Stolt Marketing" (:32). Description: "Din nya hemsida, färdig innan du betalar ett öre. Hemsidor, SEO och Google Ads åt företag som lever på förfrågningar. 0 kr i start, från 1 190 kr/mån, drift ingår." (:36).
- OG/Twitter-beskrivning är en ÄLDRE positionering: "Webbyrå i Hässleholm och Skåne. Du jobbar direkt med konsulten som bygger ... utan byrå-overhead." (:58, :65). Den som får länken i Messenger eller LinkedIn ser alltså inte erbjudandet.
- JSON-LD: description "Digital byrå i Hässleholm och Skåne" (:105), founder jobTitle "Digital konsult & AI-specialist" (:110), slogan "Enterprise-kvalitet till småföretag." (:136).
- Keywords blandar "webbyrå hässleholm", "webbutvecklare", "AI automation", "hemsida företag", "digital byrå skåne" (:37-48).
- En hörnwidget "Bli uppringd, Meddelande och AI-chatt" laddas på alla sidor (:174-175), medan startsidans tack-text säger "Jag ringer inte, jag mejlar." (HeroKoll.jsx:300).

### A16. /hantverkssajter (app/hantverkssajter/HantverkssajterContent.jsx)

- Talar till: hantverkare, med "vi" och "ni": "Vi mätte 4 864 svenska hantverkssajter." (:34), "Skicka er adress så kör vi samma mätning på er sajt" (:182).
- Löfte/bevis: egen undersökning. Slutsats: "En firma med åtta sidor kan bara hittas av den som redan vet vad den heter." (:142-143).
- Pris: inget. Erbjudandet (ny hemsida, 1 190 kr/mån) nämns inte.
- CTA: "Få er sajt mätt" -> /kontakt (:188-189). Alltså till det långa kontaktformuläret, inte till sajtkollen som gör just den mätningen på tio sekunder och inte till startsidans fält.
- Fynd: sidans huvudpoäng (få sidor = osynlig) talar mot Bas "upp till fem sidor", samma självmål som på /hemsida-foretag.

## B. Motsägelser mellan sidor (alla UPPMÄTTA i koden)

| # | Ämne | Version 1 | Version 2 | Version 3 |
|---|---|---|---|---|
| 1 | Första steget | "Gratis, utan möte" (app/b/BContent.jsx:255), "Jag ringer inte, jag mejlar." (components/b/HeroKoll.jsx:300) | "Boka en kostnadsfri genomgång. Femton till tjugo minuter över video." (app/lp/hemsida-foretag/LpHemsidaContent.jsx:36-37) | "Först en genomgång på en halvtimme" (app/hemsida-foretag/page.js:212) |
| 2 | Vad man får se | "ett riktigt, klickbart förslag" (HeroKoll.jsx:268), "startsida och en tjänstesida" (components/b/BFaq.jsx:16) | "en skiss på startsidan" (app/hemsida-foretag/page.js:213, lib/local/service-extra-content.json:82) | "Sajten byggs färdig innan du betalar." (app/priser/page.js:17) |
| 3 | Leveranstid | "Dag 10 Live på din domän" (components/b/SaGarDetTill.jsx:30) | "1-2 veckor" (BFaq.jsx:44, app/hemsida-foretag/page.js:49, WebbutvecklingContent.jsx:48) | "två till fyra veckor" (LpHemsidaContent.jsx:93, service-extra-content.json:56, :86) |
| 4 | Bas, antal sidor | "upp till fem sidor" (lib/pricing-packages.js:14, app/hemsida-foretag/page.js:45) | "Upp till sex sidor" (LpHemsidaContent.jsx:65) | - |
| 5 | Niklassons-talet | "37 offertförfrågningar" live/ögonblicksbild (BContent.jsx:261, lib/kundmotor.js:60) | "32 offertförfrågningar" hårdkodat (LpHemsidaContent.jsx:283, :409) | - |
| 6 | Hur många jobb | "19 kundsajter i drift och mätning" (BContent.jsx:374, lib/kundmotor.js:55) | "150+ levererade projekt" (LpHemsidaContent.jsx:304, WebbutvecklingContent.jsx:111, app/om/OmContent.jsx:60) | "Hundratals sajter levererade." (app/om/OmContent.jsx:10) |
| 7 | Vad kostar en byråsajt | "80 000 till 200 000 kr" (LpHemsidaContent.jsx:328) | "30 000 till 100 000 kr" (app/hemsida-foretag/page.js:81, service-extra-content.json:57) | - |
| 8 | Vad kostar det hos Joel | "0 kr i startavgift och 1 190 kr/mån" (WebbutvecklingContent.jsx:30) | "Det beror på omfattningen ... Du får en tydlig offert" (service-extra-content.json:62), SAMMA sida | "Det här är hela prislistan" (app/priser/page.js:57) mot 89 000/149 000 kr och 2 495 kr/mån (lib/services-extra.js:27, :31) |
| 9 | Bindning | "12 månaders bindning, därefter månadsvis" (lib/local/data.js:32, BFaq.jsx:12) | "Ingen bindning, inga påminnelser." under förslagsformuläret (HeroKoll.jsx:291) | "12 månaders inledande avtal" (WebbutvecklingContent.jsx:221, TjansterContent.jsx:490) |
| 10 | Vem talar | "Jag heter Joel Stolt. Jag bygger själv" (BContent.jsx:370) | "så mäter vi sajten" (app/sajtkoll/page.js:192), "Vi bygger om din webbutik" (lib/services-extra.js:18), "Vi mätte" (HantverkssajterContent.jsx:34) | "Som webbyrå jobbar jag" (service-extra-content.json:53), "Digital byrå i Hässleholm" (components/Footer.jsx:124, app/layout.js:105) |
| 11 | Yrkestitel | "Hemsidor åt företag som lever på förfrågningar" (BContent.jsx:247) | "Digital konsult & AI-specialist" (app/om/OmContent.jsx:95, app/layout.js:110) | "webbyrå i Hässleholm & Skåne för hemsidor, SEO, Google Ads och AI" (Footer.jsx:251) |
| 12 | Mall eller ej | "Skräddarsydd design i stället för igenkännbar mall" som alltid ingår (app/hemsida-foretag/page.js:222) | Bredd: "Formgiven från vitt papper, ingen mall" (lib/pricing-packages.js:33), alltså är Bas en mall | - |
| 13 | Räcker fem sidor | Bas säljs som "Komplett hemsida som gör dig hittad i din ort" (lib/pricing-packages.js:12) | "sajter med färre än 50 sidor i praktiken osynliga i sök" (app/hemsida-foretag/page.js:198) | "En firma med åtta sidor kan bara hittas av den som redan vet vad den heter." (HantverkssajterContent.jsx:142) |
| 14 | Sajtkollens omfång | "14 kontroller" (app/sajtkoll/page.js:194) | "Tolv saker" (app/sajtkoll/page.js:456) | - |
| 15 | Lagring | "ingen lagring" (app/sajtkoll/page.js:251) | resultatet sparas i D1 (app/api/sajtkoll/route.js:627-645) | - |
| 16 | Egna produkter | "1 AI SaaS-produkt" (app/om/OmContent.jsx:61) | "Fem produkter jag byggt och driver själv" (app/om/OmContent.jsx:399) | - |
| 17 | Vem skriver texterna | "Texter skrivna för både kunder och sök" (app/hemsida-foretag/page.js:222), "med texter om ditt företag, inte lorem ipsum" (SaGarDetTill.jsx:27) | "beroende på ... hur snabbt jag får innehållet" (LpHemsidaContent.jsx:93) | - |
| 18 | Uppsägning | "avslutas till nästa månadsskifte" (BFaq.jsx:28, app/priser/page.js:21) | "månadsvis med en månads uppsägning" (LpHemsidaContent.jsx:89) | - |
| 19 | Flytt vid avslut | "hjälper jag till med flytten" (BFaq.jsx:24) | "får du sajten exporterad som färdiga filer utan extra kostnad" (LpHemsidaContent.jsx:85) | - |

Paketnamnen Bas/Bredd/Spets och talen 1 190/1 990/2 990 är däremot konsekventa på alla säljsidor jag läst. Den gamla managed-stegen 390/790/1 290 finns inte kvar i app, components eller lib (sökning gav noll träffar).

## C. Ordval

Grov räkning av ordstammar i sidornas källtext (kommentarer, importer, href och klassnamn borttagna; "sajt" inkluderar ordet sajtkoll och enstaka variabelnamn, så läs talen som storleksordning):

| Sida | hemsid- | webbplats | sajt | webbutveckl- | webbyrå | byrå | konsult |
|---|---|---|---|---|---|---|---|
| Startsidan | 8 | 1 | 32 | 0 | 1 | 3 | 0 |
| /lp/hemsida-foretag | 7 | 0 | 14 | 0 | 2 | 5 | 0 |
| /hemsida-foretag | 19 | 0 | 8 | 1 | 0 | 0 | 0 |
| /tjanster/webbutveckling | 3 | 3 | 12 | 4 | 0 | 0 | 0 |
| /tjanster | 1 | 1 | 5 | 0 | 0 | 0 | 1 |
| /priser | 2 | 0 | 11 | 0 | 0 | 0 | 0 |
| /sajtkoll | 2 | 0 | 19 | 0 | 0 | 0 | 0 |
| /kontakt | 2 | 2 | 0 | 0 | 0 | 1 | 0 |
| /om | 0 | 2 | 3 | 1 | 0 | 0 | 2 |
| Meny | 1 | 0 | 2 | 1 | 0 | 0 | 0 |
| Sidfot | 7 | 0 | 2 | 1 | 2 | 3 | 0 |

Vad det betyder:
1. Köparens ord är "hemsida" (det är det Ads-sökordet heter). Joels eget ord är "sajt". På startsidan står "sajt" ungefär tre gånger så ofta som "hemsida". I första skärmen: hemsid- 3 gånger, sajt 2 gånger, och knappen säger "Mät min sajt" (HeroKoll.jsx:193).
2. "Webbutveckling" är ett leverantörsord. Det är namnet på menyraden (Header.jsx:32), på tjänstesidan (WebbutvecklingContent.jsx:45), i brödsmulan och i URL:en som startsidans huvudrad länkar till (BContent.jsx:399). Startsidan själv använder ordet noll gånger. Den som klickar på "Ny hemsida, byggd för att hittas" landar på en sida med rubriken "Moderna webbplatser och e-handel" och etiketten "Webbutveckling".
3. "Webbplats" dyker upp där Joel skriver formellt: kontaktformulärets rullista "Ny webbplats" (KontaktContent.jsx:260), H1 på webbutveckling (:46), FAQ "Vad kostar en webbplats?" (:30), case-texterna (lib/case-data.js).
4. Ads-besökaren som sökt "hemsida företag" och landar på /lp/hemsida-foretag möter rätt ord direkt: "Hemsida till fast pris" och "Ny hemsida till ditt företag" (LpHemsidaContent.jsx:266, :269). Den som landar på /sajtkoll möter "Hur bra fungerar din hemsida?" (app/sajtkoll/page.js:189) men sedan bara "sajt" och inget erbjudande. Den som söker "webbyrå" möter ordet först i sektion 8 på LP:n: "Lokal webbyrå i Skåne" (LpHemsidaContent.jsx:584).
5. "Enterprise-kvalitet" finns på tre ställen: LP-heron (LpHemsidaContent.jsx:272), sidfoten (Footer.jsx:125) och JSON-LD-slogan (app/layout.js:136). Ordet hör hemma hos AcadeMedia, inte hos en målerifirma.
6. Övrig jargong på säljsidor: "canonical-fel" (BContent.jsx:45), "Core Web Vitals" (WebbutvecklingContent.jsx:15), "Next.js, React, Tailwind CSS, Framer Motion, Vercel" (WebbutvecklingContent.jsx:18-25), "scope" (KontaktContent.jsx:56, BFaq.jsx:12), "AI-läsbarhet" (BFaq.jsx:93, LpHemsidaContent.jsx:57), "hosting på snabb edge" (LpHemsidaContent.jsx:53).

## D. Friktion i vägen till kontakt

Sajten har två konkurrerande dörrar och de lovar olika saker:

| Dörr | Var | Steg | Fält | Löfte efteråt |
|---|---|---|---|---|
| "Mät min sajt" -> "Bygg mitt förslag" | bara startsidan (hero + final) | 1 adress, 2 vänta 10 s, 3 läsa resultat, 4 mejl, 5 skicka | URL, sedan e-post | "Om två arbetsdagar har du en länk." "Jag ringer inte, jag mejlar." (HeroKoll.jsx:297-300) |
| "Få ditt gratis designförslag" | bara LP:n | 1 formulär | namn, e-post, (telefon), (URL) | "jag hör av mig inom 24 timmar" + förslag inom två arbetsdagar (LpHemsidaContent.jsx:162-166) |
| "Boka genomgång" | menyn, sidfoten, /priser, /tjanster, /tjanster/webbutveckling, /hemsida-foretag, /om, /sajtkoll efter resultat | 1 klick till /boka, 2 välj flik, 3 formulär eller kalender, 4 vänta på svar, 5 möte 15-20 min | namn, e-post, (företag), meddelande | "Jag hör av mig inom 24 timmar." (BokaContent.jsx:368). Inget ord om förslag. |
| Kontaktformulär | /kontakt, /hantverkssajter | 1 formulär med 5 fält varav fritext krav, 2 svar inom 24 h, 3 samtal, 4 "rekommendation med scope och pris" | namn, e-post, (företag), tjänst, meddelande | (KontaktContent.jsx:45-56) |

Iakttagelser:
1. Sajtens starkaste erbjudande (gratis klickbart förslag utan möte) går bara att beställa på startsidan och LP:n. Alla andra sidor, inklusive /priser och /hemsida-foretag, skickar köparen till ett möte.
2. På startsidan måste köparen ha en befintlig webbadress för att komma in (A9 fynd 7). Ingen alternativ väg ("jag har ingen hemsida") finns i heron.
3. Förslagsformuläret på startsidan syns inte förrän mätningen är klar. Den som inte vill mäta, eller vars sajt inte svarar (felet "Vi fick inget svar från den adressen", app/api/sajtkoll/route.js:215), får aldrig se erbjudandet som formulär.
4. Telefon: synlig i menyraden på desktop (Header.jsx:417-437), i LP-toppen (LpHemsidaContent.jsx:252), i sidfot och CloseBlock. På mobil ligger numret inne i menyn (Header.jsx:635-651), och startsidans hero har varken nummer eller ansikte. Numret kommer först i gula finalen (BContent.jsx:448).
5. Ansikte: startsidan sektion 6 (BContent.jsx:354), LP sektion 5 (LpHemsidaContent.jsx:497), /boka och /kontakt i sidokolumnen. Saknas helt på /hemsida-foretag, /priser, /tjanster/webbutveckling och /sajtkoll (sökning efter JoelCard och CloseBlock i de filerna gav noll träffar). /tjanster har Joel-kortet i avslutet (components/CloseBlock.jsx:32).
6. Inget sidformulär utom LP:n frågar efter telefonnummer (hörnwidgeten "Bli uppringd" är undantaget, app/layout.js:174-175). Hantverkare ringer hellre än mejlar (ANTAGET, inte mätt här), och "Jag ringer inte, jag mejlar." gör mejl till enda kanal tillbaka.
7. Svarstid lovas konsekvent: "24 h vardagar" (LpHemsidaContent.jsx:231, BokaContent.jsx:368, KontaktContent.jsx:17, Footer.jsx:254). Det är bra och motsägs ingenstans.
8. Efter sajtkollen på /sajtkoll (dit Ads går): tre erbjudanden i rad, inget av dem är huvuderbjudandet (A9). Rapport-på-mejl ligger först och har förbockad månadsbevakning. Den som tar rapporten har fått det den kom för och behöver inte höra av sig mer. UPPMÄTT: flödet i koden. ANTAGET: att detta förklarar 16 knapptryck -> 1 lead. Underlaget är 16 händelser, det går inte att dra säkra slutsatser av.

## E. Frågor köparen har men inte får svar på

| Fråga | Läge | Var |
|---|---|---|
| Vad händer efter 12 månader? | BESVARAD: "löper vidare månadsvis till samma pris" | app/priser/page.js:39-40, BFaq.jsx:28 |
| Vem äger sajten och domänen? | BESVARAD på fyra ställen | BFaq.jsx:24, app/priser/page.js:24-25, LpHemsidaContent.jsx:85, SaGarDetTill.jsx:94 |
| Kan jag lämna? | BESVARAD efter 12 mån. OBESVARAD: vad händer om jag vill ur under de första 12? Måste jag betala resten? | sökning på "i förtid", "under bindningstiden" gav noll träffar |
| När skriver jag på? | OBESVARAD. Är det ja till förslaget (två sidor) eller lanseringen som startar 12 månader? Enda ledtråden: "Först då börjar månadspriset." | SaGarDetTill.jsx:32 |
| Vad kostar ändringar? | DELVIS: "ändringar ingår". OBESVARAT: var går gränsen mellan ändring och nytt arbete, vad kostar sida nummer sex i Bas, finns ett tak? | lib/pricing-packages.js:14, :20 |
| Hur lång tid tar det? | BESVARAD MEN I TRE VERSIONER (10 dagar, 1-2 veckor, 2-4 veckor) | se B3 |
| Vad behöver jag själv göra? | OBESVARAD. Ingen sida säger "du behöver bara X". Texter: se B17. Bilder nämns inte alls. | - |
| Rör du min mejl? | OBESVARAD. Bas säger "Domän och mejladress på den" (lib/pricing-packages.js:19) men inte vad som händer med mejl kunden redan har. | - |
| I vems namn står domänen om den ingår i paketet? | OBESVARAD | - |
| Varför en ensam konsult, och vad händer om du blir sjuk eller slutar? | Fördelen är väl besvarad ("Inga mellanhänder", BContent.jsx:276). Risken är OBESVARAD på alla säljsidor. | sökning på sjuk/semester gav noll träffar |
| Har du tid med mig? | Motverkas av "Fem produkter jag byggt och driver själv" och "AI-specialist" | app/om/OmContent.jsx:95, :399 |
| Priser med eller utan moms? Hur betalar jag? | OBESVARAD. Ordet moms finns inte på någon säljsida. | sökning gav noll träffar |
| Passar det min bransch? | DELVIS. Casen är bygg/flytt/entreprenad. Frisör, redovisning, restaurang, förening ser sig inte. Hässleholmscasen (förskola, kyrka) visas inte på startsidan. | BContent.jsx:42-45, lib/case-data.js:8, :41 |
| Varför är det så billigt, var är haken? | DELVIS: "Varför 0 kr i startavgift?" besvaras på /priser men inte på startsidan eller LP:n. | app/priser/page.js:31-32 |
| Vad händer med min gamla sajt och min Google-placering vid bytet? | OBESVARAD för hemsideköparen (finns bara på e-handelssidan). | lib/services-extra.js:37 |

## F. ERBJUDANDE-ANALYS.md (2026-08-23): åtgärdat respektive kvar

| Punkt i analysen | Läge i koden idag | Belägg |
|---|---|---|
| "8 byråtjänster i menyn" | KVAR, och fler: dropdownen har nu tio rader plus "Alla tjänster". Facebook-annonsering och AI-synlighet, som analysen kallade "förödande som position", ligger kvar. | components/Header.jsx:29-90 |
| Tjänstegrid på startsidan | DELVIS ÅTGÄRDAT: en huvudrad (hemsida) + sex piller + "Alla tjänster". | app/b/BContent.jsx:30-37, :398-424 |
| /tjanster som katalog | KVAR: åtta likvärdiga block, H1 "Webb, SEO, AI och drift." | app/tjanster/TjansterContent.jsx:27-204, :332 |
| "5 egna produkter på startsidan" | ÅTGÄRDAT på startsidan (kodkommentar "Egna produkter bor på /om, inte här"). KVAR på /om som egen sektion, Kvota i sidfoten och som statruta på /tjanster. | BContent.jsx:455, app/om/OmContent.jsx:398-407, Footer.jsx:263, TjansterContent.jsx:67-68 |
| "Tre prisskalor" (390/790/1 290 på managed) | ÅTGÄRDAT: stegen är borta, managed-sidan säger 1 190. En central paketfil finns. | lib/pricing-packages.js:1-5, app/tjanster/managed-hemsida/ManagedContent.jsx:37, :73 |
| Ny prisspricka som analysen inte såg | KVAR: e-handel 89 000/149 000 kr + drift 2 495 kr/mån "utan bindningstid", samtidigt som /priser säger att inga fler prisrader finns. Webbutvecklingssidan hårdkodar en kopia av paketen. | lib/services-extra.js:27-34, app/priser/page.js:57, WebbutvecklingContent.jsx:146-195 |
| "Trasiga räknare (0+ projekt)" | ÅTGÄRDAT på startsidan: gamla Hero.jsx importeras inte någonstans, och Kundmotorns tal ligger i SSR-HTML innan de räknas upp. | components/b/Kundmotor.jsx:21-52, sökning efter import av components/Hero gav noll träffar |
| "Niklassons-talet som bevis, inte 150+ projekt" | DELVIS: startsidan gör så. "150+" står kvar på LP:n, webbutveckling, /tjanster, /om och alla ortssidor. | se B6 |
| "Sajtkoll: 14 kontroller i hero, 12 i brödtext" | KVAR | app/sajtkoll/page.js:194, :456 |
| "Ett paket som default (Bredd)" | DELVIS: märkt "Här landar de flesta", men alla rubriker och title-taggar säljer "från 1 190". | lib/pricing-packages.js:29, BContent.jsx:255, app/hemsida-foretag/page.js:13 |
| "Startsida i tre block, inte nio" | EJ GJORT: tio sektioner (hero, manifest, kundmotor, case, citat, person, mekanism, tjänster, FAQ, final). | BContent.jsx:240-453 |
| "WordPress som egen tjänstesida, e-handel som nav-item: av sajten" | KVAR: båda i menyn, WordPress-frågan i startsidans FAQ. | Header.jsx:37-47, BFaq.jsx:35 |
| "H1 är tre substantiv" | ÅTGÄRDAT: H1 är nu erbjudandet. | BContent.jsx:252 |
| "Vem" (nischen: flytt, bygg, gräv, VVS, el) | DELVIS: "företag som lever på förfrågningar" och casen visar nischen, men ingen bransch nämns i första skärmen. | BContent.jsx:247 |
| Identiteten "Marketing / digital byrå / AI-specialist" | KVAR i sidfot, JSON-LD, OG-beskrivning och /om. | Footer.jsx:124, app/layout.js:58, :105, :110, app/om/OmContent.jsx:95 |
| ADS-planens punkt C4 "Långa tankstreck i titlar/copy" | KVAR i title-taggar för /tjanster, /boka, /om, /kontakt och i brödtext på webbutveckling och /tjanster. | app/tjanster/layout.js:11, app/boka/layout.js:11, app/om/layout.js:11, app/kontakt/layout.js:11 |

## G. Kort slutsats för den som ska skriva nytt budskap

1. Startsidans budskap är redan rätt tänkt (en sak, ett löfte, ett bevis, öppet pris). Problemet är att det bara gäller EN sida. Klickar köparen vidare, eller kommer in via Ads, Google eller sidfoten, möter hen den gamla byrån: "Webbutveckling", "Boka genomgång", "150+ projekt", "enterprise-kvalitet", Next.js-listor och AcadeMedia.
2. Mekanismen "förslag först, utan möte" berättas i fyra versioner (B1, B2). Den som jämför två sidor vet inte om det krävs ett möte, om hen får en skiss eller en klickbar sajt, eller om det tar tio dagar eller fyra veckor.
3. Knappen i heron säljer en mätning, inte en hemsida, och kräver att köparen redan har en webbadress. Den som saknar hemsida är utestängd av en validering (A9 fynd 7).
4. Ads-trafiken till /sajtkoll landar på den enda säljyta som inte innehåller erbjudandet, priset, ett case eller ett ansikte (A9).
5. Instegspaketet undermineras av sajtens egna argument: Bas är fem sidor, och två sidor säger att få sidor gör en firma osynlig (B13).
6. Riskfrågorna för en ensam leverantör och för ett 12-månadersavtal (sjukdom, förtida utträde, när avtalet börjar, moms, min mejl) är obesvarade (E).

ANTAGET (inte mätt i den här delen): hur mycket var och en av punkterna kostar i tappade leads. Trafiken är 158 svenska besökare på 30 dagar och 1 formulärlead, så ingen av punkterna går att bevisa med sajtens egna tal ännu.
