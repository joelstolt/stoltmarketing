# Säkerhetsgenomgång: stoltmarketing (2026-09-06)
Sajttyp: dynamisk (OpenNext) · Cloudflare Workers · endpoints: ja (8) · DB/auth: D1 (sajtvakten), ingen inloggning

## Verdikt: PASS ✅ (efter åtgärderna nedan; verifierat mot www.stoltmarketing.se med curl)

## Åtgärdat automatiskt
- [x] **Rate limits som faktiskt håller.** Chat, sajtkoll och rapport hade limiter-kod i en `Map` som aldrig slog till: 14 anrop mot prod-chatten gav 400 varje gång, aldrig 429. Både minnet och Cloudflares Rate Limiting-binding räknar per edge-server, och varje ny anslutning hamnar på en ny server. Nu: `lib/rate-limit.js` med binding som första lager och en global räknare i D1 (`rate_limits`, fixed window per minut) som andra. Kontakt 5/min, chat 12/min, sajtkoll 5/min, rapport 3/min, insyn-PDF 10/min per IP. Verifierat i prod: chat `400 x12, 429 x2`, kontakt `400 x5, 429 x2`. Daglig städning i cronen.
- [x] **Säkerhetsheaders på alla svar.** X-Frame-Options SAMEORIGIN, nosniff, Referrer-Policy, HSTS (utan includeSubDomains tills subdomänerna är kollade), Permissions-Policy. Satt i `worker-with-headers.mjs` (SSR/API) och `public/_headers` (statiska filer, som serveras före workern). Live-curl på `/` bekräftar alla fem.
- [x] **Chunk-cachen.** `_headers`-regeln `/*` adderade `no-cache` ovanpå `immutable` på hashade chunkar (`no-cache, public, max-age=31536000, immutable`). Detachad med `! Cache-Control`. Live: `public, max-age=31536000, immutable`.
- [x] **/api/contact**: fältkap (namn 200, mejl 254, meddelande 5 000, chatthistorik 20 000 tecken) och e-postformat, 400 vid brott. Origin-allowlist, honeypot och tidsheuristik fanns redan.
- [x] **/api/insyn/[slug]/report**: läckte `Error: <internt meddelande>` till klienten. Nu generiskt svar, loggas server-side.
- [x] **Next 15.5.19 → 15.5.25**: stänger GHSA-advisory "Denial of Service in App Router" (high) och cache confusion (moderate). Bygge och alla endpoints verifierade efteråt.
- [x] **Preview-workern var indexerbar** (stoltmarketing-preview.joel-d77.workers.dev svarade utan x-robots-tag). `PREVIEW_NOINDEX=1` satt i `wrangler.preview.jsonc`. Live: `noindex, nofollow`. Prod har ingen sådan header.
- [x] D1-tabellen `rate_limits` skapad (prod-databasen, delas av preview).

## Kräver åtgärd (🔴 blockerande / 🟠 bör / 🟡 trevligt)
- [ ] 🟠 **Nycklar bakade i Worker-bundlen.** `.env.local` innehåller ANTHROPIC_API_KEY och RESEND_API_KEY; OpenNext bakar in dem i `.open-next/cloudflare/next-env.mjs` vid bygget, fast samma nycklar redan finns som Cloudflare-secrets. Inte publikt (klientbundlen `.next/static` är ren, `.open-next` är gitignorerad) men bundlen ligger i varje deploy. Åtgärd: ta bort hemliga rader ur `.env.local` (behåll NEXT_PUBLIC_*), lägg dem i `.dev.vars` för lokal dev, sätt secrets på preview-workern (den har inga idag och lever på inbakningen), verifiera chat + kontakt på preview. Gjordes inte automatiskt: fel antagande om laddordning dödar chat och formulär i prod.
- [ ] 🟠 **GDPR-notis saknas under formulären** på /kontakt, /boka och /sajtkoll (LP-sidorna har länk till /integritet). En rad "Genom att skicka godkänner du vår integritetspolicy" med länk. Copy, därför inte satt blint.
- [ ] 🟠 **Anthropic Console: spend-tak + alert** kan inte verifieras härifrån. Kolla Settings → Limits.
- [ ] 🟡 **WAF Rate Limiting Rule** på `/api/chat` som lager tre (dashboard, gratisplanen ger en regel med 10 s-period).
- [ ] 🟡 **CSP** sätts inte blint (Next inline-scripts). Börja med `Content-Security-Policy-Report-Only`.
- [ ] 🟡 **Formulärklienterna visar inget fel** vid 4xx/5xx på /kontakt, /boka och LP-sidorna (bara `if (res.ok)`). HeroKoll och /tillganglighet gör det rätt. Vid 429 ser besökaren ingenting hända.
- [ ] 🟡 **pnpm audit** kvar: postcss, nanoid, sharp (high) via `next` självt, byggtidsberoenden som inte körs i workern. Försvinner med nästa Next-release.
- [ ] 🟡 **Bilder i public/ får `no-cache`** från `_headers`-regeln `/*` (perf, inte säkerhet). Hittat i förbifarten.
- [ ] 🟡 HSTS `includeSubDomains` när api.dash och umami-subdomänerna är bekräftade HTTPS.

## Hoppade (ej relevant)
- Filuppladdning: sajten tar inte emot filer.
- Turnstile: kakfri sajt med origin-allowlist + honeypot + tidsheuristik + rate limit; inte nödvändigt nu.
- Auth-failure-tester: ingen inloggning. D1 används med `prepare().bind()` överallt (8 anrop, ingen strängbyggd SQL).
- XSS: 100+ `dangerouslySetInnerHTML` är alla JSON-LD eller inline-script ur egna konstanter, ingen användardata. `esc()` i kontaktmejlet.
- Secrets i git-historik (134 commits): inga träffar. `.env.local` gitignorerad, `.env.local.example` bara platshållare.

## Verifieringslogg
```
www.stoltmarketing.se/  → x-frame-options, nosniff, referrer-policy, HSTS, permissions-policy
chunk                    → cache-control: public, max-age=31536000, immutable
/api/chat x14 ({})       → 400 400 400 400 400 400 400 400 400 400 400 400 429 429
/api/contact x7 ({})     → 400 400 400 400 400 429 429
/api/sajtkoll ngtab.se   → {"score":86,...}  (happy path genom D1-limitern)
kundmotor 200 · calendar-url 200 · insyn okänd slug 404 · /kontakt 200
preview                  → x-robots-tag: noindex, nofollow
```
