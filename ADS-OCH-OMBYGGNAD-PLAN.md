# Ombyggnadsplan stoltmarketing.se + Google Ads-start

Datum: 2026-08-07. Status: GODKÄND OCH BYGGD 2026-08-07 (deployad, se avsnitt G). Ads-planen i avsnitt E är NÄSTA steg och väntar på kampanjstart.
Underlag: 48 live-SERP:ar, 66 vinnarsidor mätta i källkod, full audit av sajten.

## A. Vinnarspec per sidtyp (uppmätt median på topp-sidorna)

| Sidtyp | Ord | H2 | Frågerubriker | FAQ | Case | Pristabell |
|---|---|---|---|---|---|---|
| Tjänstesida "seo byrå" | 2 564 | 13 | 7 | 100 % | 83 % | 33 % |
| Pillar "sökmotoroptimering" | 4 134 | 16 | 8 | 83 % | 83 % | 66 % |
| Tjänstesida "google ads byrå" | 2 142 | 12 | 7 | 83 % | 66 % | 33 % |
| Tjänstesida "webbdesign" | 1 878 | 9 | 2 | 33 % | 83 % | 50 % |
| Landning "hemsida företag" | 1 720 | 16 | 3 | 83 % | 83 % | 16 % |
| Ortssida "seo malmö" | 1 282 | 10 | 8 | 83 % | 83 % | 16 % |
| Prissida "vad kostar en hemsida" | 3 764 | 14 | 14 | 66 % | 100 % | 83 % |
| Prissida "vad kostar seo" | 1 362 | 15 | 5 | 66 % | 83 % | 83 % |
| Prissida "vad kostar google ads" | 2 748 | 12 | 3 | 66 % | 50 % | 83 % |
| Tjänstesida "facebook annonsering" | 1 250 | 6 | 4 | 83 % | 66 % | 16 % |

Viktiga mönster:
- Vinnarna rankar UNDERSIDOR (/seo/, /sokmotoroptimering/, /google-ads/), inte startsidor.
- "sökmotoroptimering" vinns av 4 000-6 000-ords GUIDER (topdog 5 998 ord), separata från tjänstesidan.
- Prissidorna är stora pillar-sidor på egna root-URL:er (/vad-kostar-en-hemsida/), inte blogginlägg.
- Nästan ingen tjänstesida anger konkreta priser i löptext (median 0) - Joels öppna prismodell är en differentierare, inte ett brott mot mönstret.
- AI Overview finns nu även på "facebook annonsering" och "sociala medier byrå".

## B. Nya sökordsfynd (Meta + GEO)

| Sökord | Volym/mån | KD | CPC |
|---|---|---|---|
| marknadsföringsbyrå | 1 300 | 22 | 168 kr |
| facebook annonsering | 390 | 0 | 97 kr |
| ai seo | 390 | 53 | 155 kr |
| annonsera på facebook | 260 | 0 | 168 kr |
| sociala medier byrå | 210 | 0 | 302 kr |
| annonsera på instagram | 170 | 0 | 185 kr |
| answer engine optimization | 50 | - | 99 kr |
| llm seo | 30 | - | 131 kr |
| meta ads byrå | 0 | - | - |
| geo byrå | 0 | - | - |

Slutsats: sidan ska heta "Facebook-annonsering" (inte "Meta Ads") och GEO-sidan ska rikta
"ai seo"/"llm seo"/"answer engine optimization" (inte "geo byrå" som ingen söker på).

## C. Audit: fel på sajten idag

1. 4 av 7 tjänstesidor har "Hässleholm" i titeln (10 sök/mån): webbutveckling, google-ads,
   managed-hemsida, ai-automation. Bara /tjanster/seo är rätt riktad.
2. Innehållsdjup ~500-800 ord mot vinnarnas 1 900-4 100.
3. Innehållsbugg: SEO-sidans FAQ säger "Mitt fokus ligger på organisk SEO ... rekommendera
   specialister" om Google Ads - samtidigt säljs Google Ads på /tjanster/google-ads.
4. Långa tankstreck i titlar/copy bryter mot egna typografiregeln.
5. 2 case-sidor (edshare, linguista). Case korrelerar +0,64 med trafik, starkast av allt.
6. Prissidor saknas som pillar-sidor ("vad kostar en hemsida" finns bara som blogginlägg).
7. Facebook-annonsering-sida saknas helt (390+260+210 sök/mån, KD 0).
8. AI-synlighet/GEO-sida saknas (ai-automation är en annan tjänst).
9. Live-status OK: index,follow, sitemap 67 URL:er. PROJECTS.md:s noindex-flagga är fel.

## D. Ombyggnadsplan sida för sida

| # | Sida | Åtgärd | Mål-sökord (volym/KD) | Spec |
|---|---|---|---|---|
| 1 | /tjanster/seo | Skriv om + bygg ut | seo byrå (2 900/11) | 2 500 ord, 13 H2, FAQ 7, case-block, fixa Ads-motsägelsen |
| 2 | /sokmotoroptimering | NY pillar-guide | sökmotoroptimering (1 000/14) | 4 500 ord, 16 H2, länkar till /tjanster/seo |
| 3 | /tjanster/google-ads | Skriv om, bort med Hässleholm-titel | google ads byrå (590/12) | 2 200 ord, 12 H2, FAQ 7 |
| 4 | /tjanster/facebook-annonsering | NY | facebook annonsering (390/0), annonsera på facebook (260/0), sociala medier byrå (210/0) | 1 500 ord, FAQ, formulär |
| 5 | /tjanster/ai-synlighet | NY | ai seo (390/53), llm seo, AEO | 1 500 ord, Linguista-caset (AI-läsbarhet 50 till 100) som bevis |
| 6 | /tjanster/webbutveckling | Skriv om, ny titel | webbdesign (1 000/19) | 1 900 ord |
| 7 | /hemsida-foretag | NY landning (även Ads-landning) | hemsida företag (590/19) | 1 700 ord, 16 H2, pristabell |
| 8 | /vad-kostar-en-hemsida | NY pillar (301 från blogginlägget) | vad kostar en hemsida (170/0) | 3 800 ord, pristabell, exempel, 2026 |
| 9 | /vad-kostar-seo | NY pillar | vad kostar seo (70/0) | 1 400 ord, pristabell |
| 10 | /vad-kostar-google-ads | NY pillar | vad kostar google ads | 2 700 ord, våra uppmätta CPC:er som unikt innehåll |
| 11 | /projekt/* | +6 case-sidor | - | forskolanharpan, pingstkyrkan, kvota, ebbessonbygg, gardetshundtrim, cafenaomi |
| 12 | Sitewide | Titlar: tankstreck till pipe, sitemap +9 URL:er, nav/footer +2 tjänster +prissidor, startsidans tjänstegrid | - | - |

Rörs INTE: ortssidorna (20 st, ligger kvar som de är), bloggdripen (framtida datum),
/b, /insyn, /rapport, befintliga case.

Adresserad volym efter ombyggnad: ~7 600 sök/mån mot dagens ~30 på ortsorden.

## E. Google Ads-startplan

Budgetmatte (styr allt):
- Bas 1 190 kr/mån x 12 = 14 280 kr år 1. Max CAC 4 800 kr (payback 4 mån).
  Vid 4 % formulärkonvertering = max CPC ~192 kr.
- Tillväxt 2 490 kr/mån x 12 = 29 880 kr. Max CAC ~9 900 kr = max CPC ~396 kr.
- Därför: hemsideord (59-142 kr) köps mot Bas. "seo byrå" (283 kr) bara mot Tillväxt.
  "sökmotoroptimering" (502 kr) och "google ads byrå" (452 kr) KÖPS INTE i start.

Kampanjer (start, totalbudget ~5 000 kr/mån i 6 veckor):

1. HEMSIDA - 100 kr/dag, landning /hemsida-foretag
   Exact/phrase: hemsida företag, ny hemsida företag, bygga hemsida företag, webbdesign,
   hemsida pris, vad kostar en hemsida. CPC-tak 150 kr.
2. SEO TILLVÄXT - 60 kr/dag, landning /tjanster/seo
   Exact: seo byrå, seo byrå pris, seo malmö, seo helsingborg. CPC-tak 300 kr.
3. FACEBOOK-ANNONSERING - 40 kr/dag, landning /tjanster/facebook-annonsering
   Exact/phrase: facebook annonsering, annonsera på facebook, annonsera på instagram,
   sociala medier byrå. CPC-tak 200 kr.

Negativa sökord (kontonivå): gratis, jobb, lön, utbildning, kurs, praktik, mall, själv,
bygga själv, wordpress theme, vad är, exempel, cv.

Annonstext-vinklar (ur mätningen): pris i annonsen (0 kr start, 1 190 kr/mån) - bara 17 %
av organiska titlar och få annonsörer visar pris; "fast månadspris, inga startavgifter";
"svar samma dag".

Mätning innan start:
- Google Ads-konverteringstagg på formulärets tack-läge + Umami-goal "lead".
- gclid first-touch-mönstret återanvänds (finns dokumenterat sedan tidigare).
- GATE (Joels regel om mätpunkt i förväg): CPL under 500 kr efter första 6 veckorna,
  annars pausas kampanjen och budgeten omprövas. Förväntat: ~35-45 klick/vecka,
  1-2 leads/vecka vid 4 %.

Schema: vardagar 07-18. Geo: hela Sverige. OBS ads-revir: kolla mot WLM:s planerade
kampanjer innan start så varumärkena inte budar mot varandra.

## F. Kreditläget (fullcrawl av sitemap + interna länkar, inget ändrat)

HAR kredit (8): cafenaomi.se, gardetshundtrim.se, kvota.se ("Hemsida av Stolt Marketing"),
www.ebbessonbygg.se ("Skapad av Stolt Marketing"), www.forskolanharpan.se,
www.pingstkyrkanhassleholm.se (footer) samt www.linguista.se och www.edshare.se
(på /tillganglighetsredogorelse, ankare "Stolt Marketing"). Alla till stoltmarketing.se.

SAKNAR kredit (12 verifierade): omniwaygroup.se (60 sidor kollade), premiebygg.se (47),
niklassonsflytt.se (38), ngtab.se (35), alarmic.se (32), timeoutservice.se (28),
dinhemmafixare.se (26), surolle.se (20), arkipel.se (19), cbdliv.se (13),
ausensbygg.se (9), fourperformance.se (7). lillaraby.se sannolikt saknas
(bara 2 sidor nåbara via crawl, enkelsidig sajt).

OBS: alarmic/ausensbygg hade WLM-länkar enligt backlink-indexet men de syns inte längre
på sajterna - länkarna verkar ha försvunnit i någon uppdatering.

Beslut som behövs: vilka av de 12-13 ska ha kredit, och till VILKET varumärke per sajt.
Dubbelkredit (båda varumärkena) är möjligt - se chattsvaret 2026-08-07: rekommendationen
är ett varumärke per sajt med rolletikett, undersida funkar men footer hittas snabbare.


## G. Byggt och deployat 2026-08-07

Live pa www.stoltmarketing.se (verifierat med curl, alla index,follow, sitemap 77 URL:er):
- /sokmotoroptimering (pillar, 2 131 ord renderat)
- /hemsida-foretag (Ads-landning, pristabell med alla tre paketen)
- /vad-kostar-en-hemsida, /vad-kostar-seo, /vad-kostar-google-ads (prissidor, FAQ-schema,
  uppmatta CPC:er som unikt innehall pa Ads-sidan)
- /tjanster/facebook-annonsering + /tjanster/ai-synlighet (nya, ServicePage+ServiceExtra)
- /tjanster/seo omskriven (Ads-motsagelsen fixad, nollmatning-vinkel, 1 745 ord)
- 4 nya case: /projekt/forskolan-harpan, /projekt/pingstkyrkan, /projekt/ebbessonbygg,
  /projekt/gardetshundtrim (delad mall components/CasePage.jsx + lib/case-data.js)
- Alla Hassleholm-titlar utbytta, tankstreck -> pipe i titlar
- Header/Footer-nav +2 tjanster + 4 guider, sitemap +11
- /blogg/vad-kostar-en-hemsida 301 -> /vad-kostar-en-hemsida (middleware),
  bloggpost borttagen ur listning+sitemap, 8 interna lankar uppdaterade

Avvikelser fran plan D (medvetna):
- Kvota-caset stryks (egen produkt, inte kunduppdrag). Cafenaomi-caset avvaktar
  verifierbara fakta. 4 case byggda i stallet for 6.
- Startsidans tjanstegrid orord (beprovad startsida, nav+footer tacker lankningen).
- Ordantal under vinnarspec pa flera sidor (t.ex. pillar 2 131 mot spec 4 500,
  prissidor ~1 000 mot spec 1 400-3 800). Substans prioriterad framfor utfyllnad.
  Utbyggnad ar nasta identifierade hävstang om sidorna inte ror sig inom 60 dagar.

Matpunkt satt (nollmatning for 60-dagarsuppfoljning, 2026-08-07):
- Rankande sokord med trafikvarde: 0. Besok/man (uppskattat): 0.
- Refererande domaner: 31 (+10 pa vag fran kreditutrullningen).
- Sidor i sitemap: 77. Google-recensioner: 0 (Joels att fixa, mal 15).
Uppfoljning: kor om deep_dive.py + ranked keywords ~2026-10-07.
