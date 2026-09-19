# 04: Efterfrågan, vilka ord söker köparna och hur stor är volymen

Status: KLAR
Källa för sökordsdata: DataForSEO (Sverige, location_code 2752, language_code sv), hämtat 2026-09-19.
Metodnot: UPPMÄTT = siffra direkt från DataForSEO eller rank-snapshot.json. ANTAGET = min tolkning
eller ett räkneexempel. Små tal (under cirka 20 händelser) ska inte läsas som säkra trender.
CPC hämtas i USD från DataForSEO och är omräknad till kr med en ungefärlig kurs 10 kr/USD
(ANTAGET, ej en live-hämtad kurs). Omräkningen stämmer väl överens med de faktiska
Ads-CPC:er som mättes i ADS-OCH-OMBYGGNAD-PLAN.md (59-142 kr för hemsideord), vilket stärker
att 10 kr/USD är en rimlig approximation just nu.

---

## Rakt svar på huvudfrågan

**Köparna söker på "hemsida" och "webbyrå", inte på "webbutveckling".**

- "hemsida" (bar form): 3 600 sökningar/månad. "webbyrå": 1 900/månad. "webbutveckling": bara 720/månad.
- Googles egen avsiktsklassificering (DataForSEO Labs) sätter "webbutveckling" som **informational**
  intent och "webbyrå" som **commercial** intent. Det är inte en tolkning, det är hur Google själv
  taggar orden.
- SERP:en för "webbutveckling" bekräftar det: 6 av 9 organiska träffar på position 1 är
  UNIVERSITET och YRKESUTBILDNINGAR (Mittuniversitetet, Karlstads universitet, Yrgo, Malmö
  universitet, Hermods/Komvux, Stockholms universitet) plus Wikipedia. Bara **en** av träffarna
  är en byrå (webbutveckling.se, position 7).
- Av all volym i sökordsfamiljen kring "webbutveckling" (4 570 sökningar/månad fördelat på
  100 relaterade fraser) är **49 % jobb- och utbildningssökningar** (lön, utbildning, kurs,
  distans, gymnasiekurskoder "Webbutveckling 1/2"). För "webbutvecklare" är andelen **58 %**.
  UPPMÄTT, se Del 2 för hela listan.
- Konsekvens: sajtens H1-ord "webbutveckling" (syns i /tjanster/webbutveckling, blogginlägg,
  m.fl.) konkurrerar mot högskolor om ett ord där hälften av sökarna vill plugga eller jobba,
  inte köpa en hemsida. "Hemsida" och "webbyrå" är fem gånger större köpord som sajten
  knappt syns på (se Del 3).

---

## Del 1: Sökvolym, CPC, konkurrens (uppmätt)

Alla siffror Sverige, DataForSEO Keywords Data (Google Ads), hämtat 2026-09-19.
CPC omräknad USD → kr med ~10 kr/USD (se metodnot ovan). "-" = ingen data (inte samma som noll).

### Bredaste fröna, sorterat efter volym

| Sökord | Volym/mån | Konkurrens | CPC (kr, ca) |
|---|---:|---|---:|
| hemsida | 3 600 | MEDIUM | 128 |
| webbyrå | 1 900 | MEDIUM | 110 |
| skapa hemsida | 1 900 | HIGH | 199 |
| webbplats | 1 600 | LOW | 49 |
| webbdesign | 880 | MEDIUM | 50 |
| webbdesigner | 880 | MEDIUM | 50 |
| webbutveckling | 720 | LOW | 48 |
| webbsida | 720 | MEDIUM | 79 |
| hemsida wordpress | 720 | MEDIUM | 131 |
| webbutvecklare | 480 | MEDIUM | 112 |
| hemsida företag | 480 | HIGH | 116 |
| bygga hemsida | 480 | HIGH | 150 |
| hemsida till företaget | 480 | HIGH | 116 |
| webbyrå malmö | 480 | MEDIUM | 129 |
| göra hemsida | 320 | HIGH | 171 |
| ny hemsida | 260 | MEDIUM | 177 |
| skapa hemsida företag | 210 | HIGH | 223 |
| hemsida pris | 170 | MEDIUM | 80 |
| vad kostar en hemsida | 170 | HIGH | 35 |
| webbyrå helsingborg | 110 | MEDIUM | 110 |
| webbyrå lund | 110 | MEDIUM | 170 |
| hemsida småföretag | 90 | HIGH | 148 |
| wordpress support | 90 | MEDIUM | 67 |
| wordpress utvecklare | 70 | MEDIUM | 114 |
| webbyrå skåne | 50 | MEDIUM | 134 |
| uppdatera hemsida | 40 | MEDIUM | 78 |
| wordpress hjälp | 30 | HIGH | 76 |
| wordpress konsult | 30 | MEDIUM | 194 |
| anlita webbyrå | 10 | MEDIUM | - |
| bygga hemsida företag | 20 | MEDIUM | 104 |
| hyra hemsida | 20 | HIGH | 44 |
| frilans webbutvecklare | 20 | MEDIUM | 30 |
| webbyrå kristianstad | 20 | HIGH | 89 |
| webbyrå hässleholm | 20 | HIGH | - |
| göra hemsida pris | 10 | - | - |
| hemsida hantverkare | 10 | HIGH | 194 |
| billig hemsida företag | 10 | MEDIUM | 236 |
| anlita webbutvecklare | 10 | - | - |
| hemsida wix | 10 | LOW | 78 |
| webbutvecklare konsult | - | - | - |
| hemsida byggfirma | - | - | - |
| hemsida elektriker | - | - | - |
| hemsida abonnemang | - | - | - |
| göra om hemsida | - | - | - |
| redesign hemsida | - | - | - |
| hemsida som ger kunder | - | - | - |

De sista sju sökorden i uppdragslistan har ingen data i DataForSEO (inte samma som noll sökningar,
men Google Ads särredovisar dem inte, troligen för smala eller för nya fraser).
"webbyrå hässleholm" (20/mån) har volym men ingen CPC-data.

### KD (keyword difficulty, 0-100) för huvudorden

| Sökord | KD | Avsikt (Google Labs) |
|---|---:|---|
| webbutvecklare | 2 | informational |
| webbutveckling | 12 | informational |
| webbdesign | 19 | commercial |
| webbyrå | 27 | commercial |
| webbyrå helsingborg | 7 | commercial |
| webbyrå lund | - | navigational |
| hemsida | - | navigational |
| hemsida företag | - | navigational |
| skapa hemsida | - | navigational/transactional |
| vad kostar en hemsida | - | commercial |
| wordpress konsult | - | commercial |
| anlita webbutvecklare | - | commercial |

Notera avsiktsklassningen för "hemsida" och "hemsida företag": DataForSEO taggar dem
**navigational**, inte commercial. Det speglar sannolikt att en stor del av volymen går till
kända varumärken (Wix, Hemsida24, one.com) snarare än en ren "jag vill köpa en tjänst"-sökning.
Det gör inte orden mindre värdefulla som trafikkälla, men blandningen av avsikter i SERP:en
är bredare än för "webbyrå" (se Del 4).

---

## Del 2: Avsiktsgruppering

Byggt på en pool av 427 unika sökord: de 36 uppdragsorden plus `keyword_suggestions`
(relaterade fraser, upp till 100 per frö) för de fyra fröna webbyrå, webbdesign,
webbutveckling och webbutvecklare (webbutvecklare lades till utöver de tre största fröna
specifikt för att kunna svara på jobb/utbildningsfrågan i uppdraget). Volymsumman per grupp
är en indikation på relativ tyngd, inte en exakt marknadsstorlek. Sökorden överlappar och
listan täcker inte varenda synonym.

| Grupp | Antal sökord | Summa volym/mån | Andel av poolen |
|---|---:|---:|---:|
| Köpa nu (byrå, pris, anlita, konsult, hjälp, wordpress-tjänst) | 175 | 16 550 | 62 % |
| Jobb/utbildning (lön, jobb, utbildning, kurs, distans, högskola) | 114 | 6 130 | 23 % |
| Köpa nu, lokal (stad + webbyrå/webbdesign/webbutveckling) | 51 | 2 100 | 8 % |
| Övrigt/oklassat (t.ex. "webbutveckling företag", "grafisk design och webbutveckling") | 81 | 1 590 | 6 % |
| Jämföra (vad kostar, bäst, recension) | 4 | 290 | 1 % |
| Göra själv (gratis, mall, wix) | 2 | 20 | 0 % |
| **Totalt** | **427** | **26 680** | 100 % |

Tre saker att lägga märke till:

1. **"Göra själv" är nästan osynligt i just den här poolen** (bara 20 av 26 680, alltså 0,1 %).
   Det beror på att fröna är webbyrå/webbdesign/webbutveckling, orden som redan signalerar
   "jag vill anlita någon". DIY-sökningar ligger istället på breda ord som "skapa hemsida"
   (1 900/mån, HIGH konkurrens) och "hemsida" (3 600/mån), som domineras av Wix, Strato och
   one.com i Del 4:s SERP-analys. DIY-konkurrensen finns, men den syns på andra sökord än de
   Joel redan riktar in sig på.
2. **Lokala sökningar (stad + webbyrå) är ett rent köp-signal-kluster**, inte jobbsökningar
   eller DIY. Genomgången av alla 51 lokala varianter (webbyrå stockholm, webbyrå malmö,
   webbdesign göteborg osv.) visar praktiskt taget inga jobb/utbildnings- eller
   gratis-varianter blandade in. Det är ett rent "hitta en byrå i min stad"-kluster.
3. **Jobb/utbildning är den näst största gruppen (23 %)**, och den är nästan uteslutande knuten
   till just "webbutveckling"/"webbutvecklare" (se nedan), inte till "webbyrå" eller "hemsida".

### Jobb/utbildningsandel specifikt för webbutveckling och webbutvecklare

| Sökordsfamilj | Summa volym i 100 relaterade fraser | Varav jobb/utbildning | Andel |
|---|---:|---:|---:|
| webbutveckling | 4 570 | 2 260 | **49 %** |
| webbutvecklare | 4 770 | 2 770 | **58 %** |

De tyngsta enskilda jobb/utbildningsfraserna (UPPMÄTT):

| Fras | Volym/mån |
|---|---:|
| webbutveckling lön / webbutvecklare lön | 390 vardera |
| webbutveckling utbildning (+ variantstavningar) | 320 |
| webbutvecklare-utbildning / webbutvecklare utbildning / utbildning webbutvecklare | 320 vardera |
| webbutveckling jobb | 260 |
| jobb som webbutvecklare / webbutvecklare jobb / jobb webbutvecklare | 260 vardera |
| webbutveckling 1 (gymnasiekurskod) | 140 |
| webbutvecklare lediga jobb | 70 |

**Svar på uppdragsfrågan:** ja, ungefär hälften till knappt två tredjedelar av volymen kring
"webbutveckling"/"webbutvecklare" är folk som vill plugga eller jobba som utvecklare, inte
folk som vill köpa en hemsida. Det är alltså ett dåligt huvudord för sajtens budskap.

---

## Del 3: Var stoltmarketing.se rankar idag (uppmätt)

Källor: `rank-snapshot.json` (fetched_at 2026-09-14, 6 sökord) och DataForSEO Labs
`ranked_keywords` för domänen stoltmarketing.se (hämtat 2026-09-19, hela det svenska indexet).

**Sajten rankar totalt på 8 sökord i DataForSEO:s svenska index, inte 20.** Det finns inte
fler att lista. Alla 8, bästa position först:

| # | Sökord | Position | Volym/mån | Sida som rankar |
|---|---|---:|---:|---|
| 1 | google ads byrå | 18 | 590 | /blogg/google-ads-byra-eller-sjalv |
| 2 | seo analys | 22 | 480 | /blogg/seo-analys-sjalv |
| 3 | google ads kostnad | 25 | 110 | /blogg/vad-kostar-google-ads |
| 4 | teknisk seo | 29 | 170 | /blogg/teknisk-seo-guide |
| 5 | webbyrå lund | 42 | 110 | /lund |
| 6 | webbyrå helsingborg | 53 | 110 | /helsingborg/hemsida |
| 7 | seo-byrå jönköping | 67 | 110 | /tjanster/seo |
| 8 | seo byrå jönköping | 71 | 110 | /tjanster/seo |

Ingen av de här sidorna ligger på förstasidan (topp 10). Bästa läge är 18. Alla är antingen
blogginlägg eller ortssidor, ingen är en huvudsida eller en av de tre paketsidorna.

### Köporden sajten inte syns alls på

Genomgången bekräftar att stoltmarketing.se saknas helt (ingen ranking, position >100 eller
utanför index) på samtliga de viktigaste köporden:

- **webbyrå** (1 900/mån): syns inte
- **hemsida** (3 600/mån): syns inte
- **hemsida företag** (480/mån): syns inte
- **webbdesign** (880/mån): syns inte
- **webbutveckling** (720/mån): syns inte (trots att H1/tjänstenamn använder ordet)
- **vad kostar en hemsida** (170/mån): syns inte, trots att sidan `/vad-kostar-en-hemsida`
  byggdes 2026-08-07 enligt ADS-OCH-OMBYGGNAD-PLAN.md. Sidan finns men har inte tagit sig in
  i topp 100 än, 6 veckor efter lansering.
- **skapa hemsida**, **bygga hemsida**, **wordpress konsult**, **anlita webbutvecklare**: syns inte

Sajtens enda synlighet ligger på sekundära SEO/Ads-ord (google ads byrå, seo analys, teknisk
seo) och två ortssidor för Lund/Helsingborg, inte på ett enda av de ord en köpare faktiskt
skriver när de vill ha en hemsida.

---

## Del 4: SERP-vinnare för de 5 viktigaste köporden (uppmätt, live 2026-09-19)

Valda ord: webbyrå, webbutveckling, hemsida företag, webbdesign, vad kostar en hemsida.
Det är de fem mest centrala köp-/informationsorden i sökordslistan för just detta budskap.

| Sökord | Vinnande sidtyp (topp 10) | AI Overview | Lokalt kartpaket |
|---|---|---|---|
| webbyrå | Byråns egen hemsida/tjänstesida ("Webbyrå [stad]"), 9 av 10 är byråer, 1 är Wikipedia | Nej (men PAA-frågor har AI-expanderbara svar) | **Ja**, 3 lokala byråer överst (Stockholm-tunga) |
| webbutveckling | Universitet och yrkesutbildningar, 6 av 9, plus Wikipedia. Bara 1 av 9 är en byrå | **Ja**, box överst | Nej |
| hemsida företag | Blandat: dedikerade "hemsida-foretag"-landningssidor (byråer) och DIY-guider (One.com, Wix, Strato) ungefär hälften/hälften | Nej i boxform (PAA har AI-svar) | **Ja**, 3 lokala aktörer |
| webbdesign | Blandat: utbildningssajter (studentum.se, yhutbildningar.se, kurser.se) och byråer/bloggar, utbildning tar 3 av topp 10 | Nej i boxform (PAA har AI-svar) | **Ja**, 3 lokala byråer |
| vad kostar en hemsida | Renodlade prisguide-pelarsidor på egen URL (t.ex. /vad-kostar-en-hemsida/), 9 av 9 är prisguider, ingen ren byrå-hemsida | **Ja**, stor genererad prisbox med källor (byggd på just dessa 9 sidors siffror) | Nej |

Vad det betyder praktiskt:

- **"webbyrå" och lokala varianter (webbyrå + stad) vinns av lokalt kartpaket + en dedikerad
  byråsida**, inte av en generell startsida med nio tjänster. Det är exakt vad
  ERBJUDANDE-ANALYS.md redan flaggat: sajten behöver en tydlig, smal "det här är vi"-sida,
  inte en meny.
- **"webbutveckling" vinns av högskolor.** Att konkurrera om förstasidan här innebär att slå
  Mittuniversitetet och Karlstads universitet på deras eget planhalva. Osannolikt och fel
  målgrupp även om det lyckades.
- **"vad kostar en hemsida" har redan en AI Overview som citerar just de sajter som ligger på
  förstasidan** (Hjälp med hemsidan, Webbyrån Konsulterna, Bliss Visual m.fl.) och nämner
  spannet 15 000-80 000 kr för "webbyrå (skräddarsydd företagshemsida)". Stoltmarketings egen
  prissida på samma URL-mönster finns men syns varken i topp 10 eller i AI-boxens källor.
  Det är den tydligaste enskilda quick-win-kandidaten i den här listan, eftersom sidan redan
  är byggd och bara behöver komma in i indexet/rankingen.
- **Lokalt kartpaket dyker upp på 3 av 5 ord** (webbyrå, hemsida företag, webbdesign) och listar
  konsekvent byråer med Google-recensioner. Rank-snapshotens uppgift om 0 Google-recensioner
  (mål 15, uppmätt 2026-08-07) är därför inte bara ett "trovärdighet"-problem generellt. Det
  är en direkt spärr mot att synas i just det kartpaket som vinner tre av de fem viktigaste
  köporden.

---

## Del 5: Räkneexempel, vad krävs för 4 nya kunder/månad

**Detta är ett räkneexempel, ANTAGET, inte en mätning.** Konverteringsantagandena (2-4 % besökare
till lead, 1/3 lead till kund) kommer från uppdraget, inte från egen mätning av
stoltmarketing.se. Sajten har historiskt för få leads (Umami 30 dagar: 1 kontaktformulär,
16 sajtkoll-körningar) för att beräkna en egen, statistiskt säker konverteringsgrad. Ett tal
byggt på 1 händelse är inte en konverteringsgrad, det är en händelse.

Modell: 4 kunder/månad, var tredje lead blir kund → 12 leads/månad behövs.
Antal köpbesök (besökare med tydlig köpavsikt, t.ex. sökt på webbyrå/hemsida företag) som
krävs beror på var i intervallet 2-4 % konverteringen faktiskt hamnar:

| Scenario | Konvertering besök→lead | CPC (uppmätt, blandat ur "köpa nu"-klustret) | Köpbesök som krävs/mån | Ads-kostnad/mån | CAC/kund |
|---|---:|---:|---:|---:|---:|
| Optimistiskt | 4 % | 100 kr | 300 | 30 000 kr | 7 500 kr |
| Mitten | 3 % | 125 kr | 400 | 50 000 kr | 12 500 kr |
| Konservativt | 2 % | 150 kr | 600 | 90 000 kr | 22 500 kr |

CPC-intervallet 100-150 kr är byggt på de uppmätta CPC:erna för de mest köpstarka orden i
Del 1: webbyrå 110 kr, hemsida företag 116 kr, webbyrå malmö 129 kr, webbyrå lund 170 kr.
Det stämmer väl med de faktiska CPC:er ADS-OCH-OMBYGGNAD-PLAN.md redan mätte (hemsideord
59-142 kr), samma härledning, två oberoende tillfällen.

**Vad det betyder mot tidigare satta tak:** Aug-planen satte max CAC ~4 800 kr för Bas-paketet
(1 190 kr/mån, payback 4 månader) och ~9 900 kr för ett dyrare Tillväxt-paket. Även i det
**optimistiska** scenariot (7 500 kr CAC) ligger paid search över taket för Bas och nästan i
nivå med taket för ett dyrare paket. I mitten- och det konservativa scenariot är paid search
på breda köpord för dyrt för att ensamt bära 4 kunder/månad, oavsett paket.

**Jämfört med dagens faktiska trafik:** Umami visar ~400 besökare/30 dagar totalt, varav bara
158 från Sverige, och av sidvisningarna är det bara en delmängd som är tydligt köpavsikt-sidor
(/lp/hemsida-foretag 36, /priser 10, /kontakt 12, /boka 12, /tjanster/webbutveckling 7 ≈
77 sidvisningar/månad på sidor med köpsignal). Det är långt under de 300-600 köpbesök/månad
räkneexemplet kräver. Med dagens trafiknivå och blandning är målet om 4 kunder/månad inte
nåbart, varken organiskt eller (ensamt) via Ads på nuvarande volym.

**Slutsats av räkneexemplet:** 4 kunder/månad kräver antingen (a) betydligt billigare trafik
än vad generiska köpord kostar, vilket pekar mot organisk ranking på "webbyrå"/"hemsida"-
klustret snarare än betald trafik, (b) en högre konverteringsgrad än 2-4 % genom skarpare
målgruppsträff (se ERBJUDANDE-ANALYS.md om nischat budskap), eller (c) fler kanaler parallellt
(lokalt kartpaket, recensioner, referral) så att inte hela lasten vilar på ett enda dyrt
sökord. Ren Ads-skalning på "webbyrå"/"hemsida företag" blir snabbt olönsam mot dagens paketpriser.

---

## Källor och metodanmärkningar

- DataForSEO Keywords Data (Google Ads search_volume/live), Sverige, hämtat 2026-09-19 för
  36 uppdragsord + 10 jämförelseord.
- DataForSEO Labs `keyword_suggestions` för fröna webbyrå, webbdesign, webbutveckling,
  webbutvecklare (100 relaterade fraser vardera, totalt 427 unika efter dedup).
- DataForSEO Labs `ranked_keywords` för stoltmarketing.se (hela svenska indexet, 8 träffar).
- DataForSEO Labs `search_intent` för 8 stickprovsord.
- DataForSEO SERP `organic/live/advanced`, desktop, Sverige, för de 5 huvudorden (färsk SERP
  2026-09-19, inte cachad).
- `rank-snapshot.json` (fetched_at 2026-09-14) och Umami-siffrorna i uppdragets "KÄNT LÄGE"
  (huvudsessionens mätning 2026-09-19), återgivna men inte omätta här.
- ERBJUDANDE-ANALYS.md (2026-08-23) och ADS-OCH-OMBYGGNAD-PLAN.md (2026-08-07) lästa och
  korsrefererade där relevant (CPC-validering, tidigare byggda sidor).
- CPC USD→kr-omräkning (~10 kr/USD) är ett antagande, inte en live-hämtad växelkurs.
- Avsiktsgrupperingen i Del 2 är regelbaserad textklassificering (nyckelord i frasen), inte
  Googles egen klassning. Där Googles egen klassning finns (Del 1:s KD-tabell, Del 4) är den
  markerad separat.
