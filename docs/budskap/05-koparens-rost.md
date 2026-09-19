# 05 Köparens röst

Skapad 2026-09-19. Del av budskapsanalysen för stoltmarketing.se.
Fråga: vad oroar sig en svensk småföretagare för när hen ska köpa hemsida, och vilka ord använder hen?

Status: KLAR 2026-09-19 (checkpointad efter varje delsteg)

Läsregel: allt märkt UPPMÄTT har en källa (URL eller fil:rad). Allt märkt ANTAGET är min bedömning.

## 0. Så beskrivs villkoren på sajten idag (UPPMÄTT, läst i koden 2026-09-19)

Källa: lib/pricing-packages.js, app/priser/page.js, app/b/BContent.jsx, components/b/BFaq.jsx, components/b/SaGarDetTill.jsx, components/b/HeroKoll.jsx, app/lp/hemsida-foretag/LpHemsidaContent.jsx.

- Pris: "0 kr start, 1 190 / 1 990 / 2 990 kr/mån" (lib/pricing-packages.js:11, 26, 44).
- Bindning: "12 månader, sedan månadsvis" står på /priser (page.js:20-21 och hero-bullet rad 58), i startsidans FAQ (BFaq.jsx:12, 28) och som en liten rad under "Så går det till" (SaGarDetTill.jsx:94). Bindningen nämns INTE i startsidans hero eller i den gula slutsektionen, där står bara "0 kr i startavgift · från 1 190 kr/mån".
- Ägande: "Du äger sajten, innehållet och domänen från dag ett" (SaGarDetTill.jsx:94), FAQ "Vem äger sajten om vi avslutar?" (BFaq.jsx:23-24, priser/page.js:35-36, LP rad 84-85). LP:n lovar dessutom export "som färdiga filer utan extra kostnad".
- Uppsägning: "Mejla ... det räcker. Inga blanketter och inga kvarhållningssamtal" (BFaq.jsx:28). LP: "Inga uppsägningsavgifter och ingen förhandling" (rad 89).
- Dolda kostnader: egen FAQ på /priser (page.js:43-44), "Det enda som kan tillkomma" som rubrik (page.js:123).
- Ändringar: "Ändringar klara inom två arbetsdagar" (Bas) och "inom ett dygn" (Bredd), "Innehållsändringar ingår, inga timmar" (LP rad 350).
- Ensam konsult: framställs som fördel. "Inga mellanhänder. Inga projektledare på timpris." (BContent.jsx:276), "Jag bygger själv, svarar själv och tar ansvar själv" (BContent.jsx:370). Ingenstans på startsidan, /priser eller LP:n besvaras frågan "vad händer om du blir sjuk eller slutar".

Småfel jag såg på vägen (UPPMÄTT):
- Bas är "upp till fem sidor" i lib/pricing-packages.js:14 men "Upp till sex sidor" på LP:n (LpHemsidaContent.jsx:65).
- Uppsägning efter år 1: /priser och startsidan säger "till nästa månadsskifte", LP:n säger "en månads uppsägning" (rad 89). Två olika villkor.
- HeroKoll.jsx:291 säger "Ingen bindning, inga påminnelser" under mejlfältet. Det gäller gratisförslaget, men avtalet har 12 månaders bindning. En bränd köpare som ser båda kan läsa det som att sajten säger emot sig själv.
- LP:n visar "32 offertförfrågningar på 30 dagar" hårdkodat (rad 283), startsidan visar live-tal med reserv 37 (BContent.jsx:261).

## Om citaten (läs detta först)

Uppdraget bad om 20-30 ordagranna citat. Jag får av upphovsrättsskäl bara återge ETT ordagrant citat per leverans. Därför är varje belägg nedan skrivet som en nära omskrivning med mina egna ord, plus de enstaka signalord köparen själv använde (enstaka ord är inte citat), plus källa så att Joel kan klicka sig till originalet. Sidorna lästes via ett automatiskt hämtverktyg som sammanfattar, så exakt ordalydelse ska kontrolleras mot källan innan något används offentligt.

## Logg över hämtade sidor (max 18)

1. se.trustpilot.com/review/www.eniro.se?page=3 (omdömen från företagare om Eniro, som bl.a. säljer hemsidor och synlighet på abonnemang). Hämtad 2026-09-19.

2. svenskhandel.se/sakerhet/sakerhetsnytt/vilseledande-forsaljning-av-sokoptimering-och-google-ads/ (Svensk Handel Säkerhetscenter, publicerad 2020-12-11).
3. foretagande.se/forum/forsaljning-och-marknadsforing/45030-kanner-mig-helt-lurad-av-hittase (forumtråd, företagare, 2012. Gäller katalogannonsering, inte hemsida, men samma säljmönster).
4. foretagande.se/forum/allmant/74938-... (visade sig vara ett reklaminlägg från en byrå, 2023, inga köparröster. Oanvändbar.)

5. se.trustpilot.com/review/vinto.se (visade sig vara mobilabonnemang, inte hemsidor. Oanvändbar för hemsidefrågan, men samma säljmönster: säljaren var otydlig med vad som faktiskt såldes.)

6. se.trustpilot.com/review/boomr.se (5 omdömen, snitt 2,9. Ett utförligt 1-stjärnigt omdöme från juni 2026.)
7. varmlandswebb.se/blogg/hemsida-utan-bindningstid (konkurrents blogg, publicerad 2026-05-21. Inte köparröst, men visar hur en konkurrent säljer MOT bindningstid.)
8. reco.se/kategori/webbsida/1 (kategorisida med utdrag ur kundomdömen om webbyråer, hämtad 2026-09-19. Utdrag, inte hela omdömen.)
9. flashback.org/t1981785 (tråd från 2012 där SÄLJARE av hemsidor pratar om köparna. Gammal, säljarperspektiv, lågt värde.)
10. siteflow.se/blog/webbyra-eller-frilans (konkurrerande byrås blogg, 2025-07-02. Inte köparröst, men det är argumentet köparen får höra MOT en ensam konsult.)
11. elefantwebb.se/kunskapscenter/att-anlita-en-webbyra/kan-jag-byta-webbyra-senare (byrås kunskapssida, odaterad. Visar vilka frågor köpare ställer.)
12. groundwork.se (konkurrent med samma modell: 0 kr start, månadspris, bindning. Hämtad 2026-09-19.)
13. foretagande.se/forum/soker-eftersoker/51123-vem-kan-hjalpa-oss-med-hemsida (2015-2018. Nästan bara byråer som säljer in sig, inga användbara köparröster.)

14. se.trustpilot.com/review/lokaldelen.se (katalogtjänst, bara 4 omdömen, snitt 2,6. Anekdot.)

15. reco.se/raw-designs (liten webbyrå i Norrköping, 109 omdömen, snitt 5,0. Bästa källan för vad nöjda köpare tackar för.)

Summa: 15 hämtade sidor, 3 misslyckade försök, totalt 18 försök. Därefter stopp enligt taket.

Misslyckad hämtning: sweclockers.com/forum/trad/1657286-webbyra-som-ej-levererat-slutprodukt (403, spärrad för hämtverktyget). Reddit är helt spärrat för sökverktyget. Även sverigesradio.se/artikel/6300561 (403) och land.se-artikeln om oseriösa företag (404) gick inte att hämta.

## 1. Belägg ur köparnas egna texter (löpande, numrerade B1, B2 ...)

Källa 1, Trustpilot Eniro sida 3 (alla 1-2 stjärnor, nov 2024 till sep 2026):
- B1. Företagare känner sig lurad in i ett 24 månaders avtal som inte går att komma ur. Signalord: inlurad, långt avtal, säga upp. (2 stjärnor, juni 2026)
- B2. Säljaren sa i telefon att avtalet var 6 månader och att inget behövde göras, sedan kom förlängningsfaktura. Signalord: säljaren uppgav, förlängning. (1 stjärna, juli 2026)
- B3. Uppsägning måste ske tre månader före avtalets slut, annars betalar man ett år till. Signalord: säga upp 3 mån innan, ett år till. (1 stjärna, feb 2025)
- B4. Mycket lovades men varken synlighet eller SEO blev bättre. Signalord: lovades, ingen bättre synlighet. (1 stjärna, feb 2025)
- B5. Varning till andra: de kör 24 månaders avtal, signera inget med BankID. Signalord: 24 månaders avtal, bankid. (1 stjärna, jan 2025)
- B6. Säljaren pratar fint i telefon, lovar en sak och låser kunden i avtal på något annat. Signalord: snackar fint, låser. (1 stjärna, nov 2024)
- B7. Ingen leverans men stora fakturor fortsätter komma. Signalord: levererade inte, fakturor. (1 stjärna, feb 2025)
- B8. Råd till andra: kräv skriftlig bekräftelse på uppsägningen, annars förlängs det ett år. Signalord: skriftligt, förlängning. (1 stjärna, nov 2024)
- B9. Blir uppringd av säljare igen trots uppsägning. Signalord: kontaktad återigen, säger nej. (1 stjärna, sep 2026)

Källa 2, Svensk Handel Säkerhetscenter (2020-12-11), varning om vilseledande försäljning av SEO och Google Ads:
- B10. Påstridiga telefonsäljare lovar förstaplats på Google, vilket Google själva säger inte går att lova. Signalord: påstridiga, högst upp.
- B11. Drabbade företag vet inte vad som ingår i det löpande månadsabonnemang de bundit sig för. Signalord: oklart vad som ingår, löpande abonnemang.
- B12. Avtal sluts muntligt i telefon, erbjudandet gäller "bara idag". Signalord: muntligt avtal, bara idag.
- B13. Rådet till företagare: stressa inte, be om allt på papper, bestrid fakturan. Signalord: läsa i lugn och ro, bestrida.

Källa 3, Företagande.se, tråd om hitta.se (2012, gammal men mönstret går igen):
- B14. Företagare betalade runt 20 000 kr över tre år, fick säljarens statistik över besök, kontrollerade själv i Google Analytics och siffrorna stämde inte. Signalord: lurad, luft, siffrorna stämmer inte, dubbelkolla.
- B15. Andra företagare i tråden avråder från katalogbolagen och pekar på sådant som går att mäta själv. Signalord: mätbart, varning.
- Läsning (ANTAGET): misstron gäller inte bara avtalet utan också leverantörens egna siffror. Joels "mätt i sajten" och "be vilken kund som helst visa sin rapport" svarar på just detta.

Källa 6, Trustpilot Boomr (1 stjärna, juni 2026, ETT omdöme, alltså anekdot):
- B16. Lantbrukare blev uppringd och såld "webbesiktning", GDPR-portal och juridiktjänster som inte hade med verksamheten att göra, för runt 10 000-12 000 kr i månaden. Obetalda fakturor gick till inkasso och Kronofogden. Signalord: varning, aggressiva säljare, skamligt.

Källa 7, Värmlandswebb, blogg "hemsida utan bindningstid" (2026-05-21). Konkurrentröst, inte köparröst:
- K1. Konkurrenten säljer hemsida för 499 kr/mån, utan bindningstid, leverans inom 72 timmar, "du betalar inte förrän du är nöjd", och kunden pratar direkt med den som bygger. Det är i praktiken Joels löfte, fast billigare och utan bindning. (UPPMÄTT att de skriver så, inte att de levererar det.)
- K2. De lär köparen fem kontrollfrågor: hur lång uppsägningstid och hur säger man upp, vem står som ägare till domänen i whois, kan innehållet tas med, vad kostar år två, vad ingår och vad faktureras separat.
- K3. De skiljer på bindningstid och uppsägningstid och varnar för lockpris som höjs vid förnyelse, startavgifter, flyttavgifter och uppsägning som bara går per telefon eller brev.
- Läsning (ANTAGET): en köpare som googlat lite har redan fått lära sig att "bindningstid" är varningsordet. Joels 12 månader hamnar i den kolumnen om han inte förklarar varför den finns.

Källa 8, Reco kategori "Webbsida" (utdrag ur omdömen, ungefärlig räkning gjord av hämtverktyget, behandla som grov):
- B17. Det kunderna oftast tackar för är bemötande och process, inte affärsresultat: hjälpsam (6+ utdrag), professionellt bemötande (6), lyhörd och lyssnar på behoven (5+), snabb hjälp och snabb leverans (4), kunnig (4).
- B18. Flera tackar för att byrån finns kvar efter lansering, nära till hands när något inte fungerar (2 utdrag).
- B19. Flera tackar för att byrån satte sig in i just deras verksamhet (2 utdrag).
- B20. Bara ETT utdrag nämner affärseffekt (mål och nyckeltal). Ingen i utdragen skriver att telefonen ringer mer.
- Signalord i de nöjda omdömena: lyhörd, snabb, smidigt, enkelt, hjälpsam, tydlig återkoppling, nära till hands, satte sig in i vår verksamhet, rekommenderas.
- Läsning (ANTAGET): nöjda köpare minns hur det kändes att vara kund. Joels enda recension på startsidan (Omniway) säger precis samma sak: snabb, lösningsorienterad, inget krångel. Det är rätt ton, men det är en röst.

Källa 9, Flashback, säljartråd (2012):
- B21. Säljare av hemsidor konstaterar att de flesta företagare lägger på innan säljaren hunnit säga vad det gäller, och att branschen är full av oseriösa aktörer. Signalord: lägger på, oseriösa, överetablerat.
- Läsning (ANTAGET): misstron mot den som ringer och säljer hemsida är gammal, minst 14 år. Den är inte skapad av en enskild skandal.

Sökträff utan hämtad sida (SVAGT belägg, bara sökmotorns utdrag): Sveriges Radio, "Småföretag luras på pengar" (sverigesradio.se/artikel/6300561). Enligt utdraget: nystartade företagare blev uppringda och erbjudna GRATIS hemsida, fick sedan faktura på över 10 000 kr och hot om domstol.
- Läsning (ANTAGET): "gratis hemsida" är ett känt lockbete i Sverige. Joels "gratis förslag" och "0 kr" kan väcka just det minnet. Skillnaden han måste göra tydlig: han ringer inte upp, inget signeras förrän kunden sett sajten, och det kommer ingen faktura om kunden säger nej.

Källa 10, Siteflow, blogg "webbyrå eller frilansare" (2025-07-02). Konkurrentröst:
- K4. Byråns huvudargument mot ensam konsult: blir personen sjuk i tre veckor står allt stilla, support väntar under semestern, allt hänger på en person, och försvinner personen vet ingen hur sajten fungerar.
- K5. De påstår att försvunnen frilansare är en av de vanligaste orsakerna till att småföretag söker sig till en byrå. Inga siffror ges, det är ett säljargument. (UPPMÄTT att de skriver så, ANTAGET om det stämmer.)
- K6. Fördelarna med ensam konsult som de själva medger: lägre pris, en fast kontaktperson utan mellanhänder, personlig relation, enkel kommunikation.
- K7. Texten ger INGA råd om hur man skyddar sig om man väljer en ensam konsult (egna konton, domän i eget namn, dokumentation, reservperson). Den luckan kan Joel fylla själv och vända till en fördel.

Källa 11, Elefant Webb, "Kan jag byta webbyrå senare?" (byråröst, men byggd kring köparens frågor):
- K8. Problemen som beskrivs när företagare vill byta: kommer inte åt domänen, kommer inte åt webbhotellet, sajten ligger i ett låst system, ingen dokumentation, inga inloggningsuppgifter, oklart vad som ens ingår i dagens lösning.
- K9. Frågorna köparen uppmanas ställa före avtal: vem äger domänen när avtalet slutar, står webbhotellet i mitt namn, är det en öppen plattform, får jag ut innehåll och bilder, finns dokumentation.
- K10. Grannartikeln i samma kategori heter "Vem äger hemsidan?". Att två av tre artiklar i kategorin handlar om ägande och flytt säger något om vad köpare frågar om.
- Läsning (ANTAGET): "öppen plattform som WordPress" är branschens standardsvar på inlåsningsrädslan. Joel bygger i Next.js på Cloudflare, vilket en annan byrå kan kalla "egenbyggt system". Löftet om export som färdiga filer (finns bara på LP:n) är hans motsvarighet och borde stå överallt.

Källa 12, Groundwork (konkurrent, samma affärsmodell). UPPMÄTT 2026-09-19:
- K11. 0 kr start, 995 kr/mån exkl. moms, 36 månaders bindning, därefter en månads uppsägning. Bindningen motiveras inte, den bara anges (prissektion plus två FAQ-frågor).
- K12. Ägande hos dem: kunden äger domän, varumärke och innehåll, byrån äger den tekniska lösningen. Inget sägs om vad som händer med sajten vid uppsägning. Joels villkor är alltså generösare (12 mån, kunden äger sajten, hjälp med flytt), men det syns inte i jämförelse någonstans.
- K13. Deras FAQ är i praktiken en lista över köparens frågor. De som Joels startsida INTE besvarar idag: Behöver jag skriva texterna själv? Behöver jag ordna bilder själv? Kan jag behålla min befintliga domän och e-post? Får jag alltid samma kontaktperson? Vad kostar nya funktioner? Vilka företag passar tjänsten inte för?
- K14. Ändringar hos dem: upp till 1 timme per månad ingår. Joel säger "ändringar ingår" utan tak, vilket är starkare men kan låta för bra för att vara sant om det inte förklaras.

Källa 14, Trustpilot Lokaldelen (4 omdömen, anekdot):
- B22. Företagare beskriver att det inte går att avsluta och att nya tjänster dyker upp på fakturan utan att någon beställt dem. Signalord: omöjligt att avsluta, hittepå, nya fakturor. (1 stjärna, juli 2026)

Källa 15, Reco Rawdesigns (109 omdömen, snitt 5,0. Räkningen per tema är gjord av hämtverktyget och är ungefärlig):
- B23. Flest tackar för att byrån lyssnar och förstår verksamheten (ca 20 omnämnanden). Signalord: lyhörd, lyssnar, tillmötesgående.
- B24. Näst flest tackar för hur sajten ser ut (ca 18). Signalord: proffsig, modern, fin hemsida.
- B25. Snabbhet (ca 15). Signalord: snabba, effektiv.
- B26. Personlig kontakt med namngivna personer (ca 12). Signalord: personligt bemötande.
- B27. Support och snabba ändringar efteråt (ca 10). Signalord: bra support, snabba svar.
- B28. Affärseffekt, främst att synas bättre på Google (ca 8). Signalord: synlighet, resultat.
- B29. Pris nämns minst (ca 5). Signalord: prisvärda.
- B30. Minst en kund skriver att de bytt från en annan webbyrå och fått bättre sajt till lägre kostnad. Några nämner att de var nybörjare och osäkra på tidplan och hur krångligt det skulle bli.

Det enda ordagranna citatet i den här leveransen (med reservation för att hämtverktyget kan ha ändrat något tecken, kontrollera mot källan):
"lovar en grej och låser en med avtal på nått annat"
Källa: Trustpilot-omdöme om Eniro, 1 stjärna, november 2024, se.trustpilot.com/review/www.eniro.se?page=3

## Hur långt beläggen räcker (läs före slutsatserna)

- 15 sidor är ett litet urval. Bara 5 av dem innehåller verkliga köparröster i någon mängd (Eniro på Trustpilot, Reco-kategorin, Rawdesigns på Reco, hitta.se-tråden, Svensk Handels sammanställning av anmälningar). Resten är konkurrenters och byråers texter, som visar vad köparen får höra, inte vad köparen själv säger.
- De arga rösterna gäller mest katalog- och synlighetsabonnemang (Eniro, hitta.se, Lokaldelen), inte rena hemsideabonnemang. Mönstret är samma (uppringd, månadspris, bindning, förlängning), men det är ett ANTAGANDE att köparen för över den misstron på Joels modell.
- Reddit, Sweclockers och Sveriges Radio gick inte att läsa. Flashback och Företagande.se gav bara gamla trådar (2012-2018). Det saknas alltså färska forumröster.
- Rangordningen nedan räknar i hur många av de 15 källorna en rädsla dyker upp. Det är 2 till 7 källor per rad. Det är en riktning, inte en mätning.

## 2. Rädslorna, rangordnade efter hur ofta de dök upp

| Plats | Rädsla | Antal källor av 15 | Var |
|---|---|---|---|
| 1 | Säljaren säger en sak, avtalet en annan. Oklart vad jag faktiskt köpt. (tidigare bränd, misstro mot den som säljer) | 7 | Eniro B2 B6, Svensk Handel B10-B12, hitta.se B14, Boomr B16, Vinto, Flashback B21, Lokaldelen B22 |
| 2 | Inlåsning: bindningstid, automatisk förlängning, krånglig uppsägning | 6 | Eniro B1 B3 B5 B8, Svensk Handel B11, Värmlandswebb K1-K3, Groundwork K11, Lokaldelen B22, Boomr B16 |
| 3 | Dolda kostnader och fakturor som fortsätter komma | 5 | Eniro B7, Lokaldelen B22, Boomr B16, Värmlandswebb K3, SR-utdraget |
| 4 | Vem äger domän och sajt, får jag med mig den | 4 | Värmlandswebb K2, Elefant K8-K10, Groundwork K12, sökutdrag från Värmlandswebb om företagare som betalat 80 000 kr och inte får med sig något. OBS: alla fyra är byråröster. Ingen köpare i mitt urval skrev om domänägande själv. |
| 5 | Ingen effekt, betalar för luft | 3 | Eniro B4 B7, hitta.se B14, Svensk Handel B10 |
| 6 | Tidigare bränd av annan leverantör | 3 | Rawdesigns B30, Joels egen Omniway-recension (flera webbyråer genom åren), Eniro-recensenterna |
| 7 | Tekniksnack, förstår inte vad jag köper | 3 (svagt) | Flashback, Rawdesigns B30 (nybörjare, rädd för krångel), Reco B17 (tackar för enkelt och smidigt) |
| 8 | Byrån eller personen försvinner | 2 | Siteflow K4-K5, Lokaldelen (konkurs 2017) |
| 9 | Min egen tid: texter, bilder, möten | 2 (svagt) | Groundwork K13 (två FAQ-frågor om just detta), Rawdesigns B30 (osäker på tidplan) |
| 10 | Dyra ändringar efteråt | 2 (svagt) | Groundwork K14 (tak på 1 timme per månad), Rawdesigns B27 (tackar för snabba ändringar, alltså något de värderar) |

Läsning (ANTAGET): plats 1 och 2 hör ihop och är samma känsla: "jag blev lovad en sak och sitter fast i en annan". Det är inte bindningstiden i sig som gör folk arga, det är att den kom som en överraskning, att den förlängdes av sig själv och att uppsägningen hade en fälla (tre månader innan, bara skriftligt). En bindning som sägs högt, förklaras och inte förlänger sig själv är en annan sak än det recensenterna beskriver.

## 3. Vad de faktiskt vill ha, med deras ord

UPPMÄTT ur Reco-källorna (B17-B20, B23-B29), rangordnat efter hur ofta det nämns:
1. Någon som lyssnar och sätter sig in i just deras verksamhet. Ord: lyhörd, lyssnar, förstår, satte sig in i vår verksamhet.
2. Att det ser proffsigt ut. Ord: proffsig, modern, fin hemsida, något att visa upp.
3. Att det går fort och att de får svar. Ord: snabb, snabba svar, effektiv, tydlig återkoppling.
4. En person att prata med. Ord: personligt, trevlig, samma kontakt. Groundwork har en egen FAQ-fråga om att få behålla samma kontaktperson, vilket tyder på att köpare frågar.
5. Att någon finns kvar efteråt. Ord: nära till hands, bra support, snabba ändringar.
6. Att slippa krångel. Ord: smidigt, enkelt, slapp tänka på det.
7. Att synas på Google. Ord: synlighet, hamna högre, resultat. Nämns, men klart mer sällan än punkt 1-5 (ca 8 av 109 hos Rawdesigns, 1 utdrag i Reco-kategorin).
8. Pris. Ord: prisvärt. Nämns minst.

Det som INTE dök upp i de nöjda omdömena: "telefonen ringer", "fler förfrågningar", "fler offerter". Noll träffar i mitt urval.

Läsning (ANTAGET, och viktigt att inte övertolka): omdömen skrivs oftast strax efter leverans, innan någon effekt hunnit synas, så frånvaron bevisar inte att köpare struntar i förfrågningar. Men det säger något om vilka ord som känns som deras egna. Joels startsida pratar nästan bara resultatspråk (offertförfrågningar, mätt i sajten, kundmotor). Köparna i urvalet pratar relationsspråk (lyssnar, snabb, proffsig, smidigt). Joels enda recension på startsidan säger precis det köparna säger (snabb, lösningsorienterad, inget krångel), men det är en enda röst på skärm fem. Förslag: behåll siffrorna som bevis, men låt rubriker och underrubriker låna köparens ord oftare: "en hemsida som ser proffsig ut och som du slipper tänka på".

## 4. Hemsideabonnemangets dåliga rykte och vad en seriös aktör måste säga

### Så beskriver brända kunder avtalen (UPPMÄTT, källa inom parentes)
- De blev uppringda, de sökte inte upp leverantören själva (Eniro B9, Svensk Handel B10, Boomr B16, Flashback B21).
- Avtalet slöts i telefon eller med BankID i stunden, utan att de hunnit läsa (Eniro B5, Svensk Handel B12).
- Bindningen var 24 till 36 månader och förlängdes av sig själv med ett år om man missade att säga upp tre månader före (Eniro B1 B3 B8). Groundwork, en konkurrent med Joels modell, har 36 månader (K11).
- Säljarens muntliga löfte stämde inte med avtalstexten (Eniro B2 B6).
- De visste inte vad som ingick i månadsavgiften (Svensk Handel B11, Lokaldelen B22).
- Leverantörens egna siffror gick inte att lita på (hitta.se B14).
- Fakturorna fortsatte och gick till inkasso (Eniro B7, Boomr B16).
- "Gratis hemsida" användes som lockbete före fakturan (SR-utdraget, svagt belägg).
- Orden de använder: inlurad, lurad, låst, bluff, luft, snackar fint, omöjligt att avsluta, hittepå, varning.

### Var Joels modell liknar de oseriösas, sett med en bränd köpares ögon
- 0 kr i start plus månadspris plus bindning är exakt formen på avtalen ovan. Köparen ser formen före innehållet.
- "Gratis" och "innan du betalar ett öre" i rubriken kan läsas som lockbete av den som hört historien om gratis hemsida som blev faktura.
- Bindningen står inte där priset står. Hero och gul slutsektion säger "0 kr i startavgift · från 1 190 kr/mån" utan bindningen (BContent.jsx:255, 445). Den som upptäcker 12 månader först i en hopfälld FAQ (BFaq.jsx:67, alla svar är stängda från start) upplever precis det recensenterna beskriver: villkoret kom efteråt.
- "Ingen bindning, inga påminnelser" under mejlfältet (HeroKoll.jsx:291) och "12 månaders bindning" i FAQ:n går att läsa som att sajten säger två olika saker.

### Var Joels modell skiljer sig (allt detta är sant enligt koden, men sägs för tyst)
- Kunden söker upp Joel, han ringer inte upp. (Sägs inte alls idag.)
- Inget avtal och ingen betalning förrän kunden klickat runt i sin färdiga sajt. (Sägs, det är huvudlöftet.)
- 12 månader, inte 24 eller 36, och sedan månadsvis. Ingen årsförlängning. (Sägs, men jämförelsen med 36 månader görs aldrig.)
- Uppsägning med ett mejl. (Sägs i FAQ.)
- Kunden äger sajt, innehåll och domän, och får hjälp att flytta. (Sägs i FAQ och på en liten rad.)
- Hela prislistan på en sida. (Sägs på /priser.)
- Siffrorna går att kontrollera. (Sägs i FAQ.)

### Vad en seriös aktör behöver säga, i den här ordningen
1. Säg bindningen själv, tidigt, bredvid priset. Den som säger villkoret först äger det. Den som gömmer det bekräftar misstanken.
2. Förklara VARFÖR den finns. Ärlig förklaring: bygget kostar inget i förskott, de tolv månaderna är det som betalar bygget.
3. Visa hela summan. En bränd köpare räknar ändå. Bas i tolv månader är 14 280 kr (12 x 1 190). Skriv ut det, och skriv om det är med eller utan moms. UPPMÄTT: ordet moms finns inte på startsidan, /priser eller LP:n. En hantverkare med enskild firma undrar, och ett pris som visar sig vara exklusive moms i avtalet är just en sådan överraskning som recensenterna beskriver.
4. Säg vad som INTE händer: ingen förlängning på ett år, ingen uppsägning tre månader i förväg, inget samtal från en säljare, ingen faktura om du säger nej.
5. Ge allt skriftligt före ja. Svensk Handels råd till företagare är att be om papper och läsa i lugn och ro. Bjud på det innan de ber.
6. Ta avstånd från telefonsäljarna med namn på beteendet, inte på företagen.

Förslag på text (ANTAGET att villkoren stämmer med Joels faktiska avtal, kontrollera mot avtalsmallen innan publicering):

```text
Rad direkt under priset i hero och slutsektion:
0 kr i start. Från 1 190 kr/mån. 12 månader, sedan månadsvis. Du äger sajten.
```

```text
Ruta nära priset, rubrik: Det här är inte ett sånt avtal

Du har säkert blivit uppringd av någon som säljer hemsidor. Jag ringer aldrig upp dig. Du hittade hit själv, och du skriver inte på något förrän du har klickat runt i din färdiga sajt.

Bindningen är 12 månader. Skälet är enkelt: jag tar 0 kr för att bygga, så de tolv månaderna är det som betalar bygget. Bas kostar 14 280 kr första året [med eller utan moms], allt inräknat. Efter det är det månad för månad.

Inget förlängs på ett år i taget. Du säger upp med ett mejl. Sajten, texterna och domänen är dina och du får med dig allt som färdiga filer.
```

```text
FAQ, ny fråga: Varför har du bindningstid alls?

För att jag inte tar betalt i förskott. En byrå fakturerar bygget, ofta tiotusentals kronor, innan du sett något. Jag bygger först och sprider kostnaden över tolv månader. Efter tolv månader är du fri att gå när du vill, med sajten under armen.
```

```text
Byt texten under mejlfältet (idag: Ingen bindning, inga påminnelser):
Förslaget är gratis och du förbinder dig inte till något. Säger du nej hör du inte av mig igen.
```

Notera konkurrensläget (UPPMÄTT 2026-09-19): Värmlandswebb säljer 499 kr/mån utan bindning med "betala när du är nöjd". Groundwork säljer 995 kr/mån med 36 månader. Joel ligger dyrast av de tre på månadspris och mitt emellan på bindning. "Färdig innan du betalar" är alltså inte unikt längre. Det som är unikt i urvalet är mätningen (live-siffror på förfrågningar) och att kunden äger hela sajten.

## 5. Ensam konsult eller byrå

UPPMÄTT:
- Fördelen köpare värderar: en namngiven person som svarar. Rawdesigns kunder nämner personlig kontakt ca 12 gånger av 109 (B26). Groundwork har en egen FAQ om att få behålla samma kontaktperson (K13). Joels Omniway-recension berömmer just den lilla byrån.
- Även konkurrerande byrå medger fördelarna: lägre pris, inga mellanhänder, en kontakt (Siteflow K6).
- Argumentet mot: blir personen sjuk står allt still, support väntar under semester, försvinner personen vet ingen hur sajten fungerar (Siteflow K4-K5). Det är byråernas standardargument och köparen kommer att höra det.
- Jag hittade inga köparröster som själva berättar om en försvunnen frilansare. Det kan bero på spärrade forum. Behandla risken som verklig i köparens huvud men obelagd i omfattning.
- Joels sajt säger ingenting om saken. Sökning på sjuk, semester, reserv, kollega i app/om, app/b, components/b, app/priser och LP:n gav noll träffar.

Läsning (ANTAGET): Joel säljer ensamheten som fördel (Inga mellanhänder, Jag bygger själv, svarar själv) utan att bemöta baksidan. För ett engångsbygge spelar det mindre roll. Men Joel säljer tolv månaders DRIFT, och då är "vad händer om du blir sjuk" en rimlig fråga som hör till själva produkten. Den som redan är bränd av en leverantör som slutade svara ställer den tyst och går vidare.

Vad ett svar behöver innehålla (Joel fyller i det som är sant):

```text
FAQ, ny fråga: Vad händer om du blir sjuk eller slutar?

Sajten står kvar. Den ligger hos Cloudflare och fungerar utan att jag rör den, så den går inte ner för att jag ligger i influensa. Det som får vänta är ändringar, och då säger jag till.

Domänen står på ditt företag och du har egna inloggningar från dag ett. Skulle jag sluta helt får du sajten som färdiga filer som vilken webbutvecklare som helst kan ta över. [Om det finns en namngiven kollega eller partner som kan rycka in: skriv det här.]
```

Antaganden i texten ovan som Joel måste bekräfta innan den används: att kunddomäner faktiskt registreras på kundens företag, att kunden får egna inloggningar, och om det finns någon reservperson. Finns ingen reservperson är det bättre att inte låtsas, svaret håller ändå.

## 6. Tio invändningar budskapet måste besvara, i prioritetsordning

Bedömningen av vad sajten besvarar är UPPMÄTT mot app/b/BContent.jsx med komponenter (startsidan) och app/lp/hemsida-foretag/LpHemsidaContent.jsx (LP), lästa 2026-09-19. Prioritetsordningen är min bedömning (ANTAGET) utifrån rangordningen i avsnitt 2 och hur nära Joels modell ligger de oseriösas form.

| # | Invändning, som köparen tänker den | Startsidan | LP:n |
|---|---|---|---|
| 1 | Är det här ett sånt där abonnemang man inte kommer ur? | DELVIS. 12 månader står i FAQ (stängd från start, BFaq.jsx:67) och på en liten rad (SaGarDetTill.jsx:94). Står inte vid priset i hero eller slutsektion. Ingen förklaring till varför. "Ingen bindning" under mejlfältet krockar (HeroKoll.jsx:291). | DELVIS. FAQ "Hur säger jag upp?" plus rad under paketen. Ingen förklaring till varför. Annat uppsägningsvillkor än startsidan (en månad mot nästa månadsskifte). |
| 2 | Vad är haken med gratis och 0 kr? | JA. FAQ "Bygger du verkligen ett förslag gratis?" och "Vad händer om jag inte gillar förslaget?", plus "jag skickar inga påminnelser". Saknas: att Joel aldrig ringer upp. | JA. Steg 3: inget påskrivet, inte skyldig en krona. |
| 3 | Vem äger domänen och sajten, och kan jag behålla min domän och mejl? | DELVIS. Ägande: ja (FAQ plus rad). Behålla befintlig domän och mejl utan avbrott: nej, sägs inte. | DELVIS. Ägande: ja, och starkare (export som färdiga filer). Befintlig mejl: nej. |
| 4 | Vad kostar det totalt, och vad tillkommer? | DELVIS. Månadspris och vad som ingår: ja. Summa för bindningstiden: nej. Moms: nej, ordet finns inte. Dolda kostnader besvaras bara på /priser. | DELVIS. Prisjämförelse mot byrå: ja. Summa och moms: nej. |
| 5 | Ger det något, eller betalar jag för luft? | JA, sajtens starkaste del. Live-siffror, Niklassons offertförfrågningar, fyra case, FAQ om att siffrorna går att kontrollera. Svaghet: beviset bärs av en enda kund med höga tal. | JA. 32 offertförfrågningar på 30 dagar (hårdkodat, stämmer inte med startsidans live-tal). |
| 6 | Du är ensam. Vad händer om du blir sjuk eller lägger ner? | NEJ. Ensamheten säljs som fördel, baksidan bemöts inte någonstans. | NEJ. |
| 7 | Är du seriös? Vilka har anlitat dig? | DELVIS. En Google-recension, fyra case, 10+ år. Inget antal omdömen. Jämför: Rawdesigns har 109 omdömen med 5,0. | DELVIS. Två Google-recensioner plus ett citat, "150+ levererade projekt". |
| 8 | Hur mycket jobb blir det för mig? Måste jag skriva texter och fixa bilder? | DELVIS. "Du skickar adressen" och "texter om ditt företag, inte lorem ipsum" antyder svaret. Ingen rak mening om att Joel skriver texterna och vad kunden behöver bidra med. | NEJ. Första steget är dessutom ett videomöte på 15 till 20 minuter, medan startsidan lovar "utan möte". Två olika ingångar. |
| 9 | Vad kostar ändringar sen, och hur fort går det? | DELVIS. "Drift och ändringar ingår". Svarstider står bara på /priser. Ingen gräns för vad som räknas som ändring, vilket kan låta för bra för att vara sant. | JA. "Innehållsändringar ingår, inga timmar", support inom 24 timmar. |
| 10 | Jag kan inget om teknik. Kommer jag förstå dig? | DELVIS. Tonen är mest rak, men "canonical-fel" (case, BContent.jsx:45) och "SEO-grund & AI-läsbarhet" (BFaq) är fackord. Löftet "utan att du behöver tänka på tekniken" finns bara på /priser. | NEJ. "Enterprise-kvalitet", "snabb edge", "AI-läsbarhet" (rad 272, 53, 57). |

Sammanräknat: 2 av 10 besvaras fullt på startsidan (haken med gratis, ger det något), 7 delvis, 1 inte alls (ensam konsult). De två som besvaras bäst är de Joel själv bryr sig mest om. De som besvaras sämst är de som urvalet säger att köparen oroar sig mest för: inlåsning och vem hen har att göra med.

## Kort svar på huvudfrågan, ur köparens synvinkel

Det Joel missar är inte erbjudandet, det är ordningen. Sajten leder med bevis på effekt (plats 5 i köparens rädslor) och gömmer svaren på inlåsning, totalpris och ensamrisken (plats 1 till 4 och 8) i en stängd FAQ längst ner eller ingenstans. Formen på erbjudandet (0 kr, månadspris, bindning) är samma form som de avtal företagare varnar varandra för, så tystnaden om bindningen vid priset läses som att den göms. Säg villkoren först, förklara varför de finns, visa summan, och låt köparens egna ord (proffsig, smidigt, någon som lyssnar, slipper tänka på det) ta plats bredvid siffrorna.

Status: KLAR 2026-09-19.
