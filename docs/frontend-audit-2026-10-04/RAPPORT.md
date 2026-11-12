# Frontend, UX/UI, text och SEO: Stolt Marketing

Granskad 4 oktober 2026. Live: https://www.stoltmarketing.se

## Bedömning

Behåll den visuella identiteten. Mörk botten, rapsgult, Fraunces och din personliga avsändare ger sajten karaktär. Den största förbättringen är att göra erbjudandet konsekvent och lätt att förstå, få bort störningar i kontaktflödet och höja textens faktakvalitet.

Startsidan säljer nu förfrågningsrutan för 495 kr/mån. Stora delar av resten av sajten säljer fortfarande den tidigare hemsidemodellen. Det skapar motsägelser i villkor, pris, bevis och nästa steg. Bloggen varierar dessutom kraftigt i kvalitet: flera nyare guider är användbara, medan andra innehåller tydliga språkfel, felaktiga fakta och obelagda resultatlöften.

Min rekommendation är därför: rätta förtroende- och kontaktproblemen först, förenkla sidmallarna sedan och förbättra befintliga söksidor innan fler produceras.

## Omfattning och bevis

- 100 publika URL:er hämtade: alla 97 i sitemap, två annonslandningssidor och `/serviceavtal`.
- Sidtexterna har lästs, inklusive 32 bloggartiklar, tre guider, 25 ortssidor och tio projektdetaljsidor. Identiska delar av återkommande mallar har lästs gemensamt.
- Metadata, rubriker, canonical, schema, sitemap och interna sid-/ankarlänkar kontrollerade maskinellt.
- Koden för gemensamma komponenter och relevanta erbjudanden/formulär kontrollerad.
- Visuella och interaktiva stickprov på startsidan, priser, kontakt, bokning och en artikel, inklusive mobilbredd 390 px. Detta är inte ett manuellt test av varje sida på varje skärm eller en full WCAG-revision.
- Inga formulär, kundmeddelanden eller bokningar skickade. Leveransen genom Resend är därför inte verifierad i denna granskning.
- Privata rapporter och kundspecifika länkar ingår inte. Varje externt statistiskt påstående har inte fått en egen källrevision; de tydligaste och viktigaste sakfelen har kontrollerats.
- PageSpeed API svarade 429. Aktuella Lighthouse-poäng och verkliga Core Web Vitals saknas. Serverns svarstid från crawl är inte ett substitut för dessa.

Full sidlista: `SIDOR.md`. Förslag att klistra in: `TEXTFORSLAG.md`. Underlaget ligger i `crawl.json`, `checks.json`, `pages/` och `dataforseo-rankings.json`.

## 1. Det som bör rättas först

| Prioritet | Fynd och bevis | Konsekvens | Konkret åtgärd |
|---|---|---|---|
| P1 | Startsidan visar "12 månader, sedan månadsvis" direkt efter provperioden för rutan. `components/b/SaGarDetTill.jsx:94`. `/forfragningar` säger ingen bindning. | Besökaren kan inte avgöra vilka villkor som gäller. | Låt rutans process endast innehålla rutans villkor. Lägg hemsidans 12 månader vid hemsideerbjudandet. |
| P1 | Fyra "Få gratis förslag" på `/hemsida-foretag` länkar till `/#koll-url-hero`, som saknas. `app/hemsida-foretag/page.js:180` och `:253`. Nuvarande fält har id `koll-url-hemsida`. | Besökaren hamnar på startsidan utan rätt målpunkt. | Använd befintlig giltig målpunkt eller, helst, ett formulär direkt på sidan. Testa alla fyra knappar efter ändring. |
| P1 | Kontaktwidgeten öppnade sig automatiskt vid första besöket och tog över mobilskärmen. Senare täckte pratbubblan delar av kontakt-/bokningsinnehållet. | Besökaren störs innan erbjudandet hunnit läsas och konkurrerande kontaktvägar visas ovanpå varandra. | Öppna först på aktivt klick. Ingen påminnelsebubbla över kontakt eller bokning. Anpassa widgetens yta till sajtens visuella stil. |
| P1 | Prisguiden lovar 10 till 20 sidor för 1 190 kr/mån, men Bas har högst fem. `app/vad-kostar-en-hemsida/page.js:173` mot `lib/pricing-packages.js`. | Offertförväntan blir fel redan före kontakt. | Använd Bredd 1 990 kr i just det exemplet, eller ändra omfattningen till högst fem sidor. |
| P1 | `/blogg/valja-seo-byra` kallar under 3 000 kr/mån "Sällan seriöst" och avslutar med att du arbetar utan bindning. Ditt Spets kostar 2 990 kr med 12 månader. | Din egen kunskapsbank argumenterar mot ditt erbjudande. | Bedöm innehåll, leverans och transparens i stället för att döma ut en prisnivå. Beskriv rätt villkor för länkat erbjudande. |
| P1 | `/malmo` säger både "Malmö-baserad" och att du sitter i Hässleholm. `app/malmo/MalmoContent.jsx:74` och `:168`. | Felaktig lokal avsändare. | Skriv att du hjälper företag i Malmö och utgår från Hässleholm. |
| P1 | `/blogg/e-handel-guide` anger momsgränsen till cirka 40 000 kr per månad. `app/blogg/e-handel-guide/page.js:171`. | Läsaren får ett konkret felaktigt skatteråd. | Ersätt med aktuell information om årsomsättningsgräns och villkor, med källa. Se faktakontroller nedan. |
| P1 | `/blogg/moms-regler-e-handel` anger 12 procent på livsmedel. | Uppgiften är föråldrad den 4 oktober 2026. | Uppdatera mot Skatteverket, skilj livsmedel från restaurangtjänster och datera faktakontrollen. |
| P1 | Kontakt- och bokningsformulärens synliga etiketter är inte kopplade till fälten. DOM-kontrollen gav tomma `id`, noll associerade labels och inget `aria-label`. | Sämre stöd för skärmläsare och klick på etiketter. | Ge fälten stabila id, `htmlFor`, rätt autocomplete och tydliga felmeddelanden. `app/kontakt/KontaktContent.jsx:196`, `app/boka/BokaContent.jsx:428`. |
| P1 | Integritetssidan beskriver Vercel och eventuell Google Analytics, medan koden använder Cloudflare, Umami och fler tjänster för kontakt/AI. | Beskrivningen stämmer inte tillräckligt väl med den aktuella tjänsten. | Inventera verkliga dataflöden och uppdatera ansvar, ändamål, lagring, mottagare och kontaktvägar. Detta fynd är en innehållsmismatch, inte en full juridisk bedömning. |

P1 betyder hög prioritet i nästa ändringsrunda, inte att hela sajten ligger nere.

## 2. Erbjudande och kundresa

### Två tydliga ingångar

Behåll förfrågningsrutan som startsidans huvudspår om den nuvarande produktinriktningen gäller. Det är ett antagande baserat på den livepublicerade startsidan. Ge samtidigt besökare som söker en hemsida ett synligt vägval direkt i navigeringen.

Föreslagen huvudmeny: Förfrågningar, Hemsidor, Priser, Kundprojekt, Om Joel och Kontakt. Låt sajtkollen vara en tydlig sekundär hjälpväg. På tjänstesidor ska huvudknappen motsvara sidans erbjudande. En köpare av hemsida kan få designförslag; en läsare av en guide kan testa eller använda en checklista.

Det generiska "Boka kostnadsfri genomgång" används nästan överallt. Det gör att sajten lovar många olika saker men skickar läsaren till samma mellanlandning. På `/boka` är meddelandefliken dessutom förvald. Låt bokningsknappar öppna kalenderfliken direkt och låt "Skriv till Joel" gå till meddelandet. Kalenderfliken kunde öppnas; ingen bokning genomfördes.

### Separera villkor och bevis

| Produkt | Pris som framgår nu | Villkor att visa tillsammans | Vad som måste förtydligas |
|---|---|---|---|
| Förfrågningsrutan | 495 kr/mån exkl. moms | 30 dagar gratis, ingen bindning | Vad som ingår per månad, hur avslut går till och om start efter provperiod kräver aktivt ja. Skriv inget nytt avtalsvillkor utan att kontrollera det. |
| Hemsida Bas | 1 190 kr/mån, 0 kr start | 12 månader, sedan månadsvis | Högst fem sidor; skillnad mellan svarstid och tid till genomförd ändring. |
| Hemsida Bredd | 1 990 kr/mån, 0 kr start | Samma hemsidevillkor | Omfattning, rimliga avgränsningar för obegränsat antal sidor och månadsrapportens innehåll. |
| Hemsida Spets | 2 990 kr/mån, 0 kr start | Samma hemsidevillkor | Google Ads-arbete ingår, mediebudget separat. Meta anges som inkluderat på annan sida men saknas i central prislista. Bestäm ett gemensamt innehåll. |
| Mindre webbshop | Hemsidans paket + 800 kr/mån | Hemsidans villkor | Produkter, betal-/fraktavgifter, integrationer och innehållsarbete. |
| Större e-handelsbygge | 89 000 / 149 000 kr, drift 2 495 kr/mån | Eget upplägg | Förklara varför detta är en annan omfattning än webbshopstillägget. |

"Hela sajten färdig innan du bestämmer dig" är ett annat löfte än "startsida och en tjänstesida som gratis förslag". Välj det senare om det är det faktiska arbetssättet och använd samma formulering på pris-, hemside-, landnings- och chatsidor.

Visa alltid moms, bindning och separat annonsbudget nära priset. Uttrycket "det enda som kan tillkomma" bör ersättas av konkreta avgränsningar. Bas över den första avtalstiden är 14 280 kr, Bredd 23 880 kr och Spets 35 880 kr exkl. moms, före eventuella tillägg. En liten totalrad gör jämförelsen ärligare.

Startsidan visar webbplatsresultat från kundsajter. Det är värdefulla bevis för hemsidearbetet, men de ska inte framstå som uppmätt effekt av den nya förfrågningsrutan. Produktens pilotläge beskrivs mer försiktigt på `/forfragningar`; behåll den precisionen. Visa rutan med ett verkligt, anonymiserat exempel: förfrågan, SMS, svarsförslag och Joels/kundens godkännande. Påhittade exempel ska märkas som exempel.

## 3. Grafisk riktning och UI

### Behåll

- Färgpaletten och kontrasten mellan mörk botten och gula huvudknappar.
- Fraunces i rubriker och Archivo i tydliga UI-element. Identiteten behöver inte ersättas av ett generiskt byråutseende.
- Riktiga porträtt, kundnamn och projekt. De bygger mer förtroende än ytterligare effekter eller generiska illustrationer.
- Synliga priser, konkret leveransprocess och direktkontakt med den som bygger.

### Ändra

1. **Minska sidtopparna på nyttosidor.** Priser, kontakt, guider och integritet ska låta användaren nå sitt mål tidigt. En stor gemensam hero med tre fördelar och bokningsknapp passar inte alla dessa uppgifter. På mobil tar den ofta större delen av första skärmen.
2. **Markera rätt fras.** `PageHero` markerar automatiskt sista ordet. Det kan bli "månaden", "webben" eller ett ensamt årtal. Ange själv den meningsbärande frasen per sida och undvik en färgad, lös sista rad.
3. **Låt innehållet synas direkt.** `Reveal` börjar på opacity 0 och lägger även sidtoppar i en animation. Undvik detta ovanför vikningen. Huvudrubrik, ingress och CTA ska synas från första renderingen; bevara diskreta effekter längre ned och respektera reducerad rörelse även i Framer Motion.
4. **Gör artikeltexten lättare att läsa.** Stickprovet har 768 px textbredd med 16 px brödtext på stor skärm. Prova omkring 65 till 75 tecken per rad, 17 till 18 px text och tydlig styckerytm. Det är ett designförslag, inte en universell WCAG-regel. Testa mot den faktiska Fraunces-renderingen.
5. **Städa märkningar.** Små versaler med stor bokstavsspärr fungerar som dekoration men är svagare som viktig navigation eller information. Öka navigeringens läsbarhet och minska antalet olika etikettstilar.
6. **Rätta verkliga kontrastfel.** Priskortens "Här landar de flesta" har ljus text på gul botten. Uppmätta färger #F2ECDD och #F2C230 ger cirka 1,42:1. Använd mörk text; normal liten text behöver 4,5:1 enligt [WCAG AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Den mörka/gula paletten i sig är inte problemet.
7. **Visa produkten och leveransen.** Lägg en funktionell förfrågningsdemo nära erbjudandet. I projekten: större skärmbilder, avgränsat före/efter och ett tydligt resultat. Färre långa teknikstycken.
8. **Förenkla sidfoten.** Behåll huvudtjänster, kontakt och viktiga kunskapssidor. Samla ortslänkar på en begriplig regionsida eller under tydliga grupper. Dagens långa korsprodukt av orter och tjänster blir en textvägg på mobil. Detta är främst en UX-förbättring, ingen påstådd automatisk SEO-bestraffning.
9. **Ta bort dekorativa textpilar och typografiska långstreck.** De finns fortfarande i sidtexter och relaterade länkar. Följ din skrivregel: tydlig länktext; SVG endast när ikonen hjälper funktionen.

### Rekommenderad startsidesordning

1. Vad rutan gör, vem den hjälper och pris/provperiod.
2. En tydlig huvudknapp och ett diskret vägval till hemsidor.
3. Visuellt exempel på hur en förfrågan når mobilen och blir ett svarsförslag.
4. Vad som ingår respektive inte ingår.
5. Tre steg till start, med rätt villkor.
6. Joel som ansvarig, relevanta omdömen och tydligt märkta kundresultat.
7. Kort FAQ endast om rutan.
8. Separat block för hemsidor och avslutande CTA.

## 4. Kontakt, mobil och tillgänglighet

- **En kontaktwidget.** `app/layout.js` laddar både `ChatWidget` och extern widget. Den äldre panelen finns kvar i tillgänglighetsträdet när den döljs med opacity och pointer-events. Jag såg inte två synliga paneler samtidigt. Problemet är två implementationer och dolda kontroller som fortfarande exponeras. Dölj stängd panel semantiskt och välj en gemensam kontaktlösning.
- **Mobilmeny:** Escape stängde inte menyn i testet. Koden låser sidscroll men saknar motsvarande hantering av Escape och fokus. Lägg till stängning, fokusåterställning och en genomtänkt tabb-/bakgrundshantering. Markera aktuell sida med `aria-current`.
- **Formulär:** namn och e-post ligger sida vid sida även vid 390 px. Varje fält var ungefär 140 px brett. Stapla dem på mobil. Ange `autocomplete="name"`, `email` och `organization` där det passar.
- **Fokus:** global `:focus-visible` finns, vilket är bra. Kontrollera inline `outline: none` på fält så att regeln inte upphävs. Säkerställ synligt fokus i formulär och widget.
- **Landmärken:** startsidan och `/serviceavtal` saknar `<main>` i hämtad HTML. Lägg till ett huvudlandmärke och en användbar hoppa-till-innehållet-länk.
- **Touch och överlägg:** verifiera att meny, widget och eventuella fasta kontaktknappar inte täcker andra kontroller vid 320, 390 och 768 px, vid zoom eller med tangentbordet öppet.
- **Efter inskick:** kontrollera validering, vänteläge, fel, återförsök och bekräftelse. Gör därefter ett godkänt testutskick och kontrollera mottagningen i Resend-loggen. Ett API-svar `{ok:true}` räcker inte som leveransbevis.

Etikettkopplingen stöds av [W3C:s vägledning](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html). Automatisk poängsättning ersätter inte dessa manuella kontroller.

## 5. SEO: vad som fungerar och vad som ger mest nu

### Grund som redan fungerar

Alla 97 sitemap-adresser svarade 200, har unik title och metabeskrivning samt canonical till den egna adressen. Inga saknade interna sidmål hittades i de 100 hämtade sidorna. Fyra ankarlänkar är däremot trasiga, enligt ovan. Bilderna hade alt-attribut, men varje alt-texts kvalitet är inte manuellt godkänd av det testet.

De två annonslandningssidorna och serviceavtalet är noindex. Det är rimligt om de är avsedda för annonser/direktdelning. De två LP-sidorna saknar canonical; det är inte ett prioriterat problem när noindex är avsiktligt.

### Teknisk städning

| Fynd | Åtgärd | Prioritet |
|---|---|---|
| 99 undersidor ärver startsidans Twitter-titel och beskrivning. | Generera sidunika delningsdata från samma innehåll som title/description. Det gäller delningskort, inte ett påvisat rankingsproblem. | P2 |
| 22 sidor har två FAQPage-objekt. | Låt en källa generera sidans synliga FAQ och schema. Kontrollera även dubbla brödsmulor. | P2 |
| 65 sitemap-poster har gemensam lastmod 5 juni trots senare innehåll. | Använd verklig senaste innehållsändring per sida eller utelämna lastmod där datum inte kan underhållas. Sätt inte dagens datum vid varje deploy. | P2 |
| Global kundwidget, flera animationslösningar och klientkomponenter. | Mät deras faktiska kostnad i en ny mobilprofil; prioritera hero/LCP och interaktion före kosmetisk bundleoptimering. | P2, mät först |

Google rekommenderar betydelsefulla uppdateringsdatum i [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). Titel- och beskrivningslängder har inte behandlats som hårda 60-/160-teckensregler; läsbarhet och sökintention är viktigare än ett mekaniskt teckengränsvärde. Se [titlar](https://developers.google.com/search/docs/appearance/title-link) och [utdrag](https://developers.google.com/search/docs/appearance/snippet).

### Befintlig efterfrågan

DataForSEO hämtades den 4 oktober, men dess observationer är från augusti/september. Det är en databasbild, inte en färsk rankmätning och inte samma sak som Search Console. Tabellen visar organisk position, inte absolut placering bland samtliga SERP-element.

| Sökord | Uppskattad svensk volym/mån | Organisk position | Observerad sida | Rekommendation |
|---|---:|---:|---|---|
| google ads byrå | 480 | 16 | `/blogg/google-ads-byra-eller-sjalv` | Förbättra byråjämförelsen och dess redan befintliga länk till tjänsten. Visa konkret månadsleverans och total kostnad. |
| seo analys | 480 | 19 | `/blogg/seo-analys-sjalv` | Lägg till ett verkligt analysutdrag, användbar checklista och tydlig skillnad mellan egen snabbkontroll, sajtkoll och betald audit. |
| google ads kostnad | 110 | 21 | `/blogg/vad-kostar-google-ads` | Förbättra kalkylen med marginal, arvode och känslighet. Visa källor till prisintervallen. |
| webbyrå lund | 110 | 33 | `/lund` | Rätta och konkretisera lokalt innehåll. Behåll URL innan query-/URL-data motiverar annat. |
| webbyrå helsingborg | 110 | 37 | `/helsingborg/hemsida` | Utgå från den sida som redan syns, inte en blind sammanslagning med ortshubben. |

Databasen gav även den ovidkommande frasen "tar normal swish" och svaga träffar för SEO i Jönköping/Halmstad. Dessa är inte skäl att bredda innehållsproduktionen. Nio databasposter betyder inte att Google bara känner till nio sökord.

### Ortssidor och innehållsstruktur

De 25 ortssidorna har ofta liknande mall, generella regionala stycken, hemsidepaket oavsett tjänst och två FAQ-avsnitt. Ge varje sida ett eget kundproblem, korrekt erbjudande och lokalt bevis. Finns inget unikt lokalt underlag, säg var du arbetar och hur samarbetet går till. Hitta inte på lokal etablering eller specialkunskap för att fylla text.

På flera SEO-sidor blir kundens sökord fel: en hantverkare ska hittas på exempelvis "rörmokare Hässleholm", inte på "webbyrå Hässleholm". Det senare är ditt sökord. Den sammanblandningen gör texten mindre trovärdig för köparen.

Pröva följande ämnesroller innan sammanslagningar:

- `/hemsida-foretag`: köpa en företagssajt till månadspris.
- `/tjanster/webbutveckling`: mer avancerade webbprojekt, integrationer och val av teknik.
- `/priser`: jämföra dina faktiska erbjudanden.
- `/vad-kostar-en-hemsida`: förstå marknaden och jämföra totalkostnad.
- `/sokmotoroptimering`: grundguide.
- `/tjanster/seo`: köpa SEO och förstå leveransen.
- En ortshubb: lokalt samarbete. En lokal tjänstesida: just tjänsten på den orten.

Det finns ämnesöverlapp mellan bland annat de tre SEO-tipsartiklarna, flera AI-guider och tre texter om konvertering. Överlapp är inte bevis för skadlig kannibalisering. Kontrollera query/URL i Search Console innan redirect, sammanslagning eller avpublicering. Under tiden kan syfte, internlänkar och innehåll förbättras.

## 6. Text: redaktionella problem som återkommer

### Ett språk och en avsändare

Välj "jag" för Joels leverans och "du" för företagaren. Nu växlar sajten mellan jag, vi, du och ni. Använd kundens ord först: förfrågan, svar, bokning, hemsida, ändring. Förklara SEO en gång. Undvik "enterprise", "edge", "pipeline", "stack", "scope", "ROAS" och ramverksnamn i den tidiga säljtexten om de inte behövs för beslutet.

Minska återkommande "faktiskt", "på riktigt", "tyst dödar", "alla andra" och negativa byråjämförelser. Visa vad Joel gör och hur köparen märker resultatet. Nästan varje artikel börjar med tio år och 150+ projekt; lägg en konsekvent författarruta och låt artikeln börja med svaret.

Skriv om, inte bara korrekturläs, de svagaste artiklarna: `ai-for-foretag`, `content-strategi-smaforetag`, `e-handel-guide`, `lokal-seo-guide`, `varfor-snabb-hemsida`, `webbdesign-trender-2026` och `wordpress-eller-webbyra`. Exempel som finns live: "invest ererar", "retta", "sparer", "övertyg kraft", "försäljningsmaskinen som är bruten", "Nästa.js" och det ryska "Включи". Även synliga `&ldquo;`-rester förekommer i textextraktionen och bör kontrolleras i komponenternas strängar.

### Lova leveransen, beskriv utfallet med rätt säkerhet

- "Laddar under en sekund utan undantag" håller inte utan definierad enhet, nätverk, mått och mätmetod.
- "Resultat första veckan" kan betyda annonsvisningar, förfrågningar eller lönsamhet. Ange vad du faktiskt kan planera.
- Intäkt är inte vinst. 48 000 kr i omsättning efter 6 000 kr annonser bevisar inte lönsamhet utan marginal och övriga kostnader.
- Tre uppdrag per år kan inte användas för att påstå att en sajt betalar sig "på vecka två" utan uppgifter om när affärerna inträffar.
- Sju procents relativt konverteringstapp på 50 leads är 3,5 leads, inte 35. Artikeln `hemsida-som-saljer` räknar fel.
- En teknisk poäng 50 av 100 betyder inte att halva innehållet är oläsbart för AI. Förklara verktyg, test och vad som faktiskt kontrollerades.
- Stort sidantal och mer trafik kan samvariera utan att sidantalet orsakar skillnaden. Sajter med under 50 sidor är inte generellt osynliga på Google. Det budskapet motarbetar dessutom ditt femsidorspaket.

### Källor och faktakontroller

1. **Momsgränsen:** Skatteverket beskriver undantag från momsplikt för årsomsättning högst 120 000 kr, under särskilda villkor, inte 40 000 kr per månad. [Skatteverket](https://www.skatteverket.se/foretag/moms/momsregistrering/momsregistreringnararsomsattningenarhogst120000kronor.4.3152d9ac158968eb8fd1efe.html).
2. **Livsmedelsmoms:** från 1 april 2026 är den normalt 6 procent, medan restaurangtjänster fortsatt kan ha 12 procent. [Skatteverkets information](https://www.skatteverket.se/omoss/pressochmedia/nyheter/2026/nyheter/livsmedelsmomsensankstill6procent.5.70685bee19c85dd5dd0a3f.html).
3. **Betalavgifter:** e-handelsguidens generella Stripe-pris stämmer inte med dagens svenska standardpris för standardkort från EES, 1,5 procent + 1,80 kr. Avgiften varierar med korttyp och tjänst. Länka och datera i stället för att ange ett enda universellt pris. [Stripe](https://stripe.com/se/pricing).
4. **Recensioner:** guiden hänvisar fel till marknadsföringslagen 12 c § som ett generellt förbud mot belöningar. Paragrafen handlar om information om hur recensionernas ursprung säkerställs. Googles egna regler förbjuder incitament och selektivt efterfrågade positiva omdömen. Skilj lagen från plattformsvillkoren, och låt inte rådet "fråga om kunden är nöjd, om ja be om recension" motsäga guidens egen varning för selektion. [Lagtext](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/kommittedirektiv/marknadsforingslag-2008486_gwb1486/), [Googles policy](https://support.google.com/contributionpolicy/answer/7400114).
5. **Tillgänglighet:** alla kommersiella hemsidor omfattas inte automatiskt av samma EAA-krav. Omfattning och undantag måste framgå. En Lighthouse-poäng är heller inget intyg om lagefterlevnad. [PTS:s frågor och svar](https://pts.se/digital-inkludering/lagen-om-vissa-produkters-och-tjansters-tillganglighet/vanliga-fragor-och-svar-om-tillganglighetslagen/).
6. **Lighthouse:** dess kategorier omfattar prestanda, tillgänglighet, best practices och SEO. AI-läsbarhet ska redovisas som ett separat test, med namngiven metod. [Chrome-dokumentation](https://developer.chrome.com/docs/lighthouse/overview).
7. **Core Web Vitals:** uppdatera FID-avsnitten till INP och rätt tröskel, 200 ms för bra INP. Definiera även fältdata och 75:e percentilen. [Web.dev](https://web.dev/articles/defining-core-web-vitals-thresholds).
8. **FAQ-resultat:** Google anger att FAQ rich results slutade visas den 7 maj 2026. Artiklar som lovar extra FAQ-utrymme i Google är därför föråldrade. Behåll användbara frågor för läsaren. [Googles ändringslogg](https://developers.google.com/search/updates).
9. **AI-sök:** god SEO hjälper, men kravet "du måste ligga i topp tio" är inte en generell regel för AI-citeringar. Google beskriver flera relaterade sökningar och källor, utan särskild AI-märkning som krav. Begränsa egna korrelationsresultat till urvalet och den testade produkten. [Google om AI-funktioner](https://developers.google.com/search/docs/appearance/ai-features).
10. **Lokal ranking:** recensioner är en del av bilden tillsammans med relevans och avstånd. Egna medianer som 8 eller 107 recensioner är inte bevisade inträdeskrav eller en nivå där fortsatt arbete saknar effekt. [Google om lokal ranking](https://support.google.com/business/answer/7091/improve-your-local-ranking-on-google?hl=en-GB).
11. **Mobila testverktyg:** Mobile-Friendly Test som rekommenderas i en SEO-artikel är nedlagt sedan december 2023. Byt rådet till aktuella verktyg och faktisk mobilkontroll. [Googles besked](https://developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool).

### Kundcase och studien

För varje resultat: skriv mått, källa, exakt period, mätt metod och eventuell jämförelse. "Samtal" ska inte användas när mätningen bara visar klick på ett telefonnummer. Ett formulärinskick är inte automatiskt en ny kund eller en affär orsakad av ombyggnaden.

På Niklassons förekommer olika antal och perioder på startsida, projektindex, case och LP. Olika värden kan vara korrekta om perioderna skiljer sig. Problemet är att statiska historiska värden samtidigt beskrivs som "senaste 30 dagarna". Visa fasta datum på historiska case och samma uppdaterade källa där löpande siffror används.

Studien `/hantverkssajter` är potentiellt en stark egen tillgång. Behåll datan, men skilj upptäckta tekniska egenskaper från affärsslutsatser. Ingen chatt bevisar inte att företaget bara svarar under kontorstid. Inget upptäckt analysverktyg bevisar inte att företaget saknar uppföljning. Ett läsbart sitemap-urval är inte automatiskt hela sajtens faktiska sidantal. Publicera urval, datum, mätfel, definitioner och datatäckning innan den används som stöd för svepande SEO-löften.

## 7. Arbetsordning och godkännandekriterier

### Runda A: återställ förtroendet och kontaktvägen

Rätta villkor, paketmotsägelser, Malmö-adress, skatteråd, missvisande mått och trasiga CTA-ankare. Gör widgeten manuell, koppla formuläretiketterna och rätta kontrastmärket. Synka samma uppgifter i synlig copy, schema, metadata och chatkonfiguration.

Klart när samma produkt alltid har samma pris, omfattning och villkor; varje huvudknapp når sitt mål; mobilbesökaren kan läsa och ta kontakt utan att ett överlägg täcker sidan.

### Runda B: sidmallar och grafisk tydlighet

Separera produkt-/hemsidevägar, förenkla huvudmeny och sidfot, bygg kompakta nyttosidtoppar och gör projekten mer visuella. Rätta fokus, tangentbord och reducerad rörelse i gemensamma komponenter. Gör artikelmall med kort svar, innehållsförteckning där det behövs, författare, uppdateringsdatum och källor.

Klart när mobil och desktop har tydlig hierarki och uppgiften på varje sidtyp är enkel att genomföra. Testa minst startsida, priser, lokal tjänst, projekt, artikel, kontakt och bokning i respektive mall.

### Runda C: varje sida får ett tydligt jobb

Arbeta igenom `SIDOR.md`. Börja med de svagaste faktatexterna och sidorna som redan har relevant synlighet. Uppdatera ortssidorna med korrekt och verkligt underlag. Förbättra internlänkar mellan guide, tjänst, case och pris. Välj sammanslagningar först efter data.

Klart när artiklarna svarar på sin fråga, har korrekta exempel och inte motsäger erbjudandet; lokalsidorna tillför verklig relevans; kundcase redovisar mätning rättvist.

### Verifiera efter implementation

- Produktionsbygge, preview-deploy och visuell kontroll. Ingen dev-server behövs som leverans.
- Ny crawl: 200-svar, canonical, noindex, metadata, ankar- och internlänkar samt schema mot synligt innehåll.
- Kontaktflödets lyckade och misslyckade lägen samt godkänt testutskick verifierat i Resend-loggen.
- Mobil och tangentbord: meny, formulär, widget, fokus och zoom.
- Ny PageSpeed/Lighthouse-profil och, om tillgängligt, CrUX/Search Console. Mät faktiska tredjepartsskript; koden hoppar i dag över Umami när `navigator.webdriver` är true, så en syntetisk profil kan skilja sig från en riktig användares sida.
- Följ kvalificerade förfrågningar, kontaktkonvertering och organisk query/URL över jämförbara perioder. Undvik att tillskriva all förändring en enda ändring när trafikmix eller säsong också ändrats.

## Leveransstatus

Granskning och lokala rapportfiler skapade. Sajten, produktions-URL:en och applikationskoden är oförändrade. Ingen build, deploy, commit eller push utförd. Nästa arbete är genomförandet av de prioriterade ändringarna; rapporten innebär inte att bristerna redan är fixade.
