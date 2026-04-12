"use client";

import { ArrowRight, ArrowLeft, Clock, Calendar, Check, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui";

export default function Article() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">Start</a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">Blogg</a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">Google Business Profile</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Guide
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                Google Business Profile — Komplett guide för företagare 2026
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 17 maj 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 8 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              Ungefär 80% av alla lokala Google-sökningar slutar med ett besök eller ett köp. Om din Google Business Profile inte är optimerad tappar du dessa potentiella kunder. Det finns bara ett problem: de flesta företagare fyller i sitt GBP halvhjärtat och tror sedan att det är klart.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det är en stor missuppfattning. Din Google Business Profile är inte något du gör en gång och sedan glömmer. Det är något du måste bygga och underhålla aktivt. Jag ska visa dig exakt hur du gör det — från att göra krav på din listing till att ranka högre i Google Maps och få fler kunder direkt från Google.
            </p>

            {/* Varför det spelar roll */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Varför Google Business Profile spelar roll — sifforna talar för sig
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Låt mig vara helt ärlig: jag har aldrig träffat ett småföretag som inte mådde bättre av en ordentlig Google Business Profile. Det är inte en nice-to-have. Det är ett måste.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-6">
              <div className="flex gap-3">
                <AlertCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[15px] font-700 text-primary mb-2">Varför GBP är kritisk:</p>
                  <ul className="space-y-1 text-[14px] text-body">
                    <li>• 47% av alla Google-sökningar har en lokal avsikt</li>
                    <li>• En komplett och aktiv profil rankar 3–5x högre än en tom</li>
                    <li>• 76% av lokala sökningar på mobilen slutar med ett besök samma dag</li>
                    <li>• Recensioner i din GBP påverkar både ranking och klickfrekvens</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En väloptimerad Google Business Profile är dörren till människor som redan söker efter det du säljer. De är varma leads. Du behöver bara visa dem att du finns.
            </p>

            {/* Steg 1: Hävda din listing */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 1: Hävda eller skapa din Google Business Profile
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Första gången är det viktigaste. Du behöver antingen hävda en befintlig listing (som Google redan har skapat baserat på information från kartor, kataloger osv.) eller skapa en helt ny om du inte finns där än.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Gå till google.com/business och logga in med ditt Google-konto",
                "Sök efter ditt företag — det finns förmodligen redan en listing",
                "Klicka 'Hävda denna verksamhet' och följ stegen",
                "Verifiering görs vanligtvis via SMS eller postkort (kan ta upp till 3 veckor)",
                "En gång verifierad kan du redigera allt på profilen",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Om du redan hävdat din profil tidigare men tror den inte är helt aktuell: logga in och uppdatera den. Många gamla profiler innehåller felaktig telefonnummer eller fel öppettider — åtgärda det omedelbar.
            </p>

            {/* Steg 2: Fyll i allt */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 2: Fyll i alla fält — inget är osignifikant
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En ofullständig profil säger till både Google och potentiella kunder: "Vi bryr oss inte mycket." En komplett profil säger det motsatta. Här är vad som måste vara klart:
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[14px] font-700 text-heading mb-4">Obligatoriska fält:</p>
              <div className="space-y-2">
                {[
                  "Företagsnamn — exakt som du är registrerad",
                  "Adress — måste vara din fysiska adress (hemadress är OK för enskild näringsidkare)",
                  "Telefonnummer — ett nummer som folk kan ringa på under öppettider",
                  "Öppettider — fyll i korrekt, inklusive helger",
                  "Webplats — länken till din hemsida",
                  "Beskrivning — max 750 tecken. Inkludera: vad du erbjuder, service, område.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check size={13} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-[14px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Exempel på en svag beskrivning:
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-2">Dåligt exempel</p>
              <p className="text-[15px] text-heading">Elektrikern — Hässleholm</p>
              <p className="text-[13px] text-muted mt-1">Vi gör elektriska installationer och reparationer.</p>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här är den samma, men mycket bättre:
            </p>

            <div className="bg-surface border border-primary/15 rounded-xl p-5 mb-8">
              <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-2">Bra exempel</p>
              <p className="text-[15px] text-heading">Elektrikern Hässleholm — Installationer & reparationer</p>
              <p className="text-[13px] text-muted mt-1">Lokal elinstallatör med 15+ års erfarenhet i Hässleholm och omkringliggande område. Vi utför nya installationer, felsökning, reparationer och underhåll. Snabb respons, klartecken innan arbete påbörjas. Ring 070-XXXXX eller boka tid på webben.</p>
            </div>

            {/* Steg 3: Kategorier */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 3: Välj rätt kategori (och sekundära kategorier)
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google använder kategorier för att förstå vad du gör och visa dig i rätt sökresultat. Du kan ha en huvudkategori och upp till 9 extra. Många företagare väljer bara en — det är ett misstag.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { service: "VVS-företag", main: "Rörmokare", secondary: ["Buskehållsservice", "Renovering", "Vatteninstallation"] },
                { service: "Marknadsföring", main: "Marknadsföringsbyrå", secondary: ["SEO-specialist", "Webdesign-byrå", "Digital marknadsföring"] },
                { service: "Frisörsalong", main: "Frisörsalong", secondary: ["Damfrisör", "Herrfrisör", "Hårbehandling"] },
              ].map((item) => (
                <div key={item.service} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[14px] font-700 text-heading mb-2">{item.service}</p>
                  <p className="text-[13px] text-primary font-500 mb-1">Huvudkategori: <span className="text-heading">{item.main}</span></p>
                  <p className="text-[13px] text-muted">Sekundärt: {item.secondary.join(", ")}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Om du inte hittar en exakt kategori — välja den närmaste. Google är ofta flexibel här, men fel kategori är värre än för många kategorier.
            </p>

            {/* Steg 4: Bilder */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 4: Ladda upp bilder — många och bra
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Profiler med minst 10 bilder rankar högre och får 35% fler klick än de utan. Börja ladda upp. Du behöver:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Logobild — tydlig, på vit bakgrund, minst 400x400px",
                "Försidebild — representativ bild av ditt företag eller dina tjänster",
                "Inomhusfoto — kontor, verkstad, butik eller serviceyta",
                "Teamfoto — om möjligt med ansikten synliga",
                "Projekt/innan-efter — visar ditt arbete i praktiken",
                "Produkter eller tjänster — konkreta exempel på vad du gör",
                "Kundvyer — om du har en butik, ett väntrum eller liknande",
                "Utbildning/certifikat — visar din expertis",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Använd moderna foton — inte tio år gamla skumma mobil-bilder. Om du inte har bra bilder är det pengarna väl värt att anställa en fotograf för en dag. Dessa bilder är din försäljningsverktyg 24/7.
            </p>

            {/* Steg 5: Inlägg och uppdateringar */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 5: Publicera inlägg regelbundet — det visar att du är aktiv
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google gillar aktiva verksamheter. En profil som inte uppdaterats på sex månader signalerar att du är död eller inte bryr dig. Publicera därför inlägg minst 1–2 gånger per månad. Det tar 5 minuter.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Goda exempel på inlägg:
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Nya tjänster — \"Nu erbjuder vi även...\"",
                "Veckoerbjudanden — \"Denna vecka: 10% rabatt på...\"",
                "Evenemang — \"Vi är på marknaden lördag 25 maj!\"",
                "Tips & tricks — \"3 enkla sätt att spara pengar på el\"",
                "Team-uppdateringar — \"Välkommen nya teammedlemmen!\"",
                "Säsongsinformation — \"Öppet senare under sommaren\"",
              ].map((item) => (
                <div key={item} className="bg-surface border border-border rounded-lg p-4">
                  <span className="text-[14px] text-heading">{item}</span>
                </div>
              ))}
            </div>

            {/* Steg 6: Recensioner */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 6: Samla Google-recensioner — detta är guld
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Recensioner är den enskilt viktigaste rankingfaktorn för lokal SEO. En profil med 20 5-stjärniga recensioner rankar betydligt högre än en utan. Plus: folk läser recensioner innan de ringer. Du behöver ett system för detta.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här är processen:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Logga in i Google Business Profile och hitta 'Be om recensioner'",
                "Kopiera länken (eller QR-koden)",
                "Skicka den till nöjda kunder omedelbar efter avslutat jobb — per SMS eller e-post",
                "Gör detta till en rutin. Inte något du gör 'när du kommer ihåg'",
                "Svara på varje recensionen inom 24–48 timmar — både positiva och negativa",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det finns ingen genväg här. Du kan inte köpa recensioner. Du måste tjäna dem genom att leverera bra arbete och aktivt be om dem. En lokal företagare som samlar 5 nya recensioner per månad kommer inom ett år att ha en dominerad lokal närvaro.
            </p>

            {/* Steg 7: Attribut och öppettider */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 7: Fyll i attribut och säkerställ korrekt öppettider
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Attribut är verktyg som du kan säga till Google mer specifik information. Beroende på bransch finns olika attribut — använd alla som är relevanta för dig.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[14px] font-700 text-heading mb-4">Exempel på attribut per bransch:</p>
              <div className="space-y-3">
                {[
                  { branch: "Restaurang", attrs: "Serveringstid, Dine-in, Takeaway, Online-beställning, Vegetariska alternativ" },
                  { branch: "Handlare", attrs: "Betalningsmetoder, Parkeringsmöjligheter, Skönhet av butiken" },
                  { branch: "Tjänster (VVS, el)", attrs: "Buskehållsservice, Nödemergency-tjänst, Hembesök" },
                ].map((item) => (
                  <div key={item.branch}>
                    <p className="text-[13px] font-600 text-primary mb-1">{item.branch}</p>
                    <p className="text-[13px] text-muted">{item.attrs}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Och öppettider — för Guds skull, håll dem uppdaterade! Ingenting är mer irriterande än att planera ett besök bara för att découvrir att stället är stängt. Uppdatera omedelbar under semestrar, långa helger, eller när något förändras.
            </p>

            {/* Vanliga misstag */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Vanliga misstag (och hur du undviker dem)
            </h2>

            <div className="space-y-4 mb-8">
              {[
                { mistake: "Ofullständig eller föråldrad information", fix: "Uppdatera din profil månadsvis. Sätt en påminnelse." },
                { mistake: "Använder hemadress istället för verklig adress", fix: "Du kan dölja exakt adress men måste vara på en riktig plats." },
                { mistake: "Laddar bara 1-2 bilder", fix: "Målsättning: minst 15 bilder. Börja ladda upp denna vecka." },
                { mistake: "Aldrig svarar på recensioner", fix: "Svara på alla. Det tar 5 minuter per review." },
                { mistake: "Felaktig kategori", fix: "Undersök. Välja närliggande om du inte hittar exakt." },
              ].map((item) => (
                <div key={item.mistake} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[14px] font-700 text-red-500 mb-2">❌ {item.mistake}</p>
                  <p className="text-[14px] text-heading font-500">✓ {item.fix}</p>
                </div>
              ))}
            </div>

            {/* Mapa och Q&A */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Bonussteg: Använd Q&A och se till att kartan är korrekt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Under din profil finns en Q&A-sektion där kunder kan ställa frågor. Du kan (och bör) svara på dessa. Det ökar engagemanget och säger till Google att du är aktiv.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Vanliga frågor:
            </p>

            <div className="space-y-2 mb-8">
              {[
                '"Vilka betalningsmetoder accepterar ni?" — Svara med dina faktiska alternativ',
                '"Erbjuder ni leverans?" — Svara ja eller nej, och i så fall hur långt',
                '"Är ni öppna på helger?" — Referera till dina öppettider',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Och kartorna — säkerställ att din pin ligger på rätt plats. Om folk kör efter GPS:n och hamnar på fel adress är de inte glada. Rätta till detta omedelbar om det är fel.
            </p>

            {/* Sluta */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Sammanfattning — så bygger du en mäktig Google Business Profile
            </h2>

            <div className="bg-surface border border-border rounded-xl p-6 mb-8">
              <div className="space-y-3">
                {[
                  "Hävda eller skapa din profil — verifiering tar tid, börja idag",
                  "Fyll i alla obligatoriska fält — och gör beskrivningen övertygande",
                  "Välj rätt kategori (en huvudkategori + relevanta sekundära)",
                  "Ladda upp minst 10-15 högkvalitativa bilder",
                  "Publicera inlägg minst 1-2 gånger per månad",
                  "Samla Google-recensioner aktivt — be efter varje jobb",
                  "Svara på alla recensioner inom 24-48 timmar",
                  "Uppdatera öppettider, telefon och adress regelbundet",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary-light text-primary text-[12px] font-700 flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Din Google Business Profile är inte en engångsuppgift — det är något du bygger kontinuerlig. En välkörda profil kan ge dig 10–30 nya leads varje månad helt gratis. Det är verkligen värt tiden. Om du vill att någon annan hanterar detta — eller behöver en komplett <a href="/tjanster/seo" className="text-primary hover:underline font-600">lokal SEO-strategi</a> — kontakta mig. Vi kan också boka en tid för att granska din nuvarande profil och hitta de största förbättringarna.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "SEO för småföretag — 7 steg som faktiskt fungerar", href: "/blogg/seo-for-smaforetag" },
                { title: "Varför en snabb hemsida ger dig fler kunder", href: "/blogg/varfor-snabb-hemsida" },
                { title: "Content-strategi för småföretag — så skapar du innehåll som rankar", href: "/blogg/content-strategi-smaforetag" },
                { title: "SEO-tjänster — so kan jag hjälpa", href: "/tjanster/seo" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors">
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">{link.title} →</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-800 text-white font-heading tracking-tight mb-3">
                Vill du optimera din Google Business Profile?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Jag kan granska din nuvarande profil, identifiera luckor, och sätta upp ett system för att kontinuerlig samla recensioner. Boka en tid så visar jag var du kan få störst genomslag.
              </p>
              <a href="/boka" className="premium-btn">
                <span>Boka kostnadsfri genomgång</span>
                <ArrowRight size={16} className="opacity-80" />
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <a href="/blogg" className="inline-flex items-center gap-2 text-[14px] text-muted hover:text-heading transition-colors font-500">
                <ArrowLeft size={16} /> Alla artiklar
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
