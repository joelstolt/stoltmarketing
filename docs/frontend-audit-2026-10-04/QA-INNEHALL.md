# Slutgranskning av innehåll, 4 oktober 2026

Read-only granskning av lib/editorial-pages.js, lib/pricing-packages.js, app/hemsida-foretag/page.js, app/priser/page.js och layout, app/b/BContent.jsx, components/b/Kundmotor.jsx och app/integritet/IntegritetContent.jsx. Ingen produktkod ändrad, inget bygge, deploy eller utskick. Nedanstående är konkreta kvarvarande avvikelser i den lästa arbetskopian.

## 1. P1: Telefon- och SMS-mottagare saknas i integritetsinformationen

Plats: app/integritet/IntegritetContent.jsx:11, leverantörslistan. Listan räknar upp Cloudflare, Resend, Kvota, Anthropic, Umami/Vercel och Google men inte 46elks, trots att samma sida säger att widgeten tar emot telefonnummer och önskemål om uppringning.

Kodbevis: /Users/joelstolt/Desktop/Dev/products/svarslagret/api/src/lib/elks.ts:9 och :43 skickar mottagarnummer och SMS-innehåll till api.46elks.com. callback.ts:6 och notify.ts:5 använder dessa funktioner för uppringning respektive notiser. Kvotas DPA-utkast nämner också 46elks som belagt i denna Worker. Rätta mottagarlistan och beskriv vilken funktion som skickar telefonnummer/SMS-innehåll dit. Jag har inte verifierat aktuell kundkonfiguration eller 46elks avtalsvillkor och gör inget påstående om deras land, rättsliga grund eller lagringstid.

## 2. P2: Kostnadsfri WordPress-migrering saknar samma omfattningsvillkor som LP

Plats: lib/pricing-packages.js:86 och app/hemsida-foretag/page.js:66. De lovar kostnadsfri flytt/modernisering när drift tecknas. Den senare FAQ-texten publiceras också som FAQ-schema.

Skillnad: app/lp/wordpress/LpWordpressContent.jsx säger att migrering kan ingå efter genomgång av omfattningen och att sidor/funktioner bekräftas före start. websiteTerms.scope undantar samtidigt integrationer och större ombyggnad. En WordPress-sajt med köpflöde och egna plugins kan därför läsa det generella FAQ-löftet som att hela moderniseringen ingår. Lägg samma skriftliga omfattningsvillkor på central prisrad och FAQ. Hitta inte på ett nytt tak eller ett nytt migreringspris.

## 3. P2: Bas erbjuds för valfri befintlig sajt utan femsidorsgränsen

Plats: app/priser/page.js:139. Texten säger att drift, säkerhet och ändringar ingår i Bas 1 190 kr/mån för en befintlig sajt oavsett vem som byggt den, utan att avgränsa sidantal/funktioner.

Skillnad: lib/pricing-packages.js:14 säger högst fem sidor. LP WordPress säger också högst fem sidor och drift enligt omfattningen. Ange att övertagandet först avgränsas och att Bas gäller högst fem sidor/överenskommen funktion. Nu kan exempelvis en befintlig större webbutik uppfatta Bas som full drift för hela sajten.

## 4. P2: Avslut lovar hela sajten utan överlämningsbegränsningen

Plats: app/priser/page.js:24 och lib/pricing-packages.js:108, :112. Rubriken säger Du äger allt och FAQ säger att sajten är din och att du behåller den. FAQ publiceras också i app/priser/layout.js.

Skillnad: app/hemsida-foretag/page.js:62 avgränsar till domän och innehåll och hänvisar till avtalet. Båda LP:erna förklarar att filexport behöver kompletteras med drift för CMS, formulär och e-post. Lägg samma förklaring i prisvillkor/FAQ. Ägande av all kod och kostnadsfri fortsatt drift av externa funktioner kan inte styrkas av de lästa filerna. Kontrollera avtalet innan all kod uttryckligen utlovas; jag har inte hittat ett signerat kundavtal som avgör saken.

## 5. P2: Service-schema beskriver ett bredare erbjudande än Bas-priset

Plats: app/hemsida-foretag/page.js:95, :104. Service och Offer beskriver hemsida med design, bygge, drift och löpande ändringar för 1 190 kr per månad. De saknar frånpris, Bas/högst fem sidor, exklusive moms och tolv månaders bindning.

Synlig text anger samtliga avgränsningar i hero/paket/FAQ. Rätta Service/Offer så att även strukturerad data beskriver samma avgränsade Bas-erbjudande, exempelvis med namngivet paket och samma villkor i description/priceSpecification. Priser-layoutens Offer-description har redan moms och avtalsperiod och dess FAQ läser samma data som den synliga FAQ:n.

## 6. P2: Casekortens siffror saknar sin egen period och kan skilja sig från caset

Plats: app/b/BContent.jsx:85 och :321. Taggen läser km från /api/kundmotor och visar antal formulärevents/telefonklick utan datum. Case-sidorna visar ett fast historiskt utdrag hämtat 5 september 2026.

Kundmotor-sektionen ovanför förklarar korrekt period och snapshot, men kortet bär inte den informationen och ett klick kan leda till andra antal i caset. Visa kortets hämtningstid/period eller märk det tydligt som aktuell statistik och låt läsaren se att caset använder en äldre period. Ändra inte de historiska casevärdena för att få dem att matcha en ny mätning.

## 7. P2: Odokumenterat projekttal ligger kvar på startsidan och i AI-kontext

Plats: app/b/BContent.jsx:385 visar 150+ byggda sajter. app/api/chat/route.js:74 skriver dessutom 150+ sajter och ett tjugotal WordPress-sajter i systemkontexten. Om-sidan och LP:erna har tagit bort de projekttal som saknade verifierbar sammanställning.

Jag har inte hittat ett underlag som fastställer dessa två antal i den lästa koden/dokumentationen. Det betyder inte att de är falska, men de är fortfarande odokumenterade faktapåståenden. Ta bort dem tills en daterad lista eller annan sammanställning finns. Slå inte ihop kunduppdrag, egna produkter och demo-sajter för att få fram ett nytt tal.

## 8. P3: Förbjudet typografiskt citattecken finns kvar i synlig startsidetext

Plats: app/b/BContent.jsx:337 renderar ett stort typografiskt ” ovanför recensionen. Joel har uttryckligen förbjudit typografiska citattecken på sajten. Ta bort dekorationen; recensionens befintliga ord behöver inte ändras.

## Kontrollerade dataflöden och verkliga begränsningar

- Formulär till Cloudflare-kö, Kvota och Resend stöds av app/api/contact/route.js och lib/kvota-outbox.js. Själva kontaktmejlet är separat från köad Google Ads-klickattribution.
- Köretentionen stöds av DELETE i deliverKvotaForms: poster äldre än 30 dagar rensas när Kvota-status är received och mailstatus sent/failed/uncertain. Pending förfrågningar omfattas inte av den rensningen. Ordet normalt i integritetstexten behövs; lova inte automatisk radering av alla ärenden efter exakt 30 dagar.
- Klick-id hålls i modulminne enligt lib/klickid.js och kan skickas till servern; inga klick-id-cookies skrivs där. Servern skickar id separat till api.dash.stoltmarketing.se för senare Google Ads-import.
- Widgetens öppet-läge, utkast och fortsatt dialog stöds av svarslagret/api/widget/index.ts. data-load=click och data-open-policy=manual är satta i ContactWidget. Skript/launcher hämtas vid sidladdning, config/panel vid aktiv öppning. Integritetstextens kontaktfunktioner efter öppning är korrekt, men säg inte att inget externt skript hämtas före klick.
- Anthropic-anrop stöds både i sajtens /api/chat och widgetens anthropic.ts, det senare via AI Gateway. Google-kalendern renderas som iframe efter valt bokningsspår. Umami från Vercel stöds av root-layoutens skript.
- Separat Kvota-DPA finns som utkast i products/kvota-demo/docs/personuppgiftsbitradesavtal-utkast.md, men undertecknat/godkänt avtal för just Stolt Marketings leverantörskedja, aktuella överföringsskydd och faktisk produktionskonfiguration kan inte fastställas från denna read-only granskning. Ingen rättslig certifiering eller exakta leverantörsfrister bör läggas till på den grunden.
- Inget konkret sakfel hittat i den lästa lib/editorial-pages.js: kalkylbeloppen, femsidorsgräns, förslagets två sidor, moms/bindning, konverteringsdefinitioner och korrelation/orsak stämmer med centrala priser och korrigerade case. Inga nya siffror eller avtalsvillkor föreslås.
