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
                <span className="text-heading font-500">Hemsidans hastighet</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Prestanda
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                Varför en snabb hemsida ger dig fler kunder (och bättre SEO)
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 24 maj 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 7 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              Här är något som ingen pratar om: en hemsida som laddar långsamt är en försäljningsmaskinen som är bruten. Varje extra sekund det tar för sidan att ladda är pengar ur fickan.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det låter dramatiskt, men siffrorna säger det själva. En delay på bara ett sekund kan resultera i 7% färre konverteringar. Två sekunder? Då är vi uppe på 16%. Och det är bara början. Google har också gjort hemsidans hastighet till en faktisk rankingfaktor — så en långsam sajt får inte bara färre besökare; den hamnar långt ned i sökresultaten.
            </p>

            {/* Varför hastighet spelar roll */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Varför hemsidans hastighet spelar roll — både för människor och för Google
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Låt mig bryta ned det. Det finns två huvudanledningar till att du bör bry dig om att din hemsida är snabb:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { title: "Användarbeteende", desc: "Folk är otåliga. En långsam sida = en frustrerad besökare. 40% av folk lämnar en webbplats om den tar mer än 3 sekunder att ladda. Du förlorar potentiella kunder innan de ens vet vad du erbjuder." },
                { title: "Google rankar snabbare sidor högre", desc: "Google använder något som heter 'Core Web Vitals' för att mäta hemsidans användarupplevelse. Det inkluderar laddtid, interaktivitet och visuell stabilitet. Snabbare sajter rankar bättre i Google." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[15px] font-600 text-heading mb-2">{item.title}</p>
                  <p className="text-[14px] text-body">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Siffror */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Siffror som bör skrämma dig — men inte måste
            </h2>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex gap-3">
                <AlertCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[15px] font-700 text-primary mb-3">Konverteringspåverkan av laddtid:</p>
                  <ul className="space-y-2 text-[14px] text-body">
                    <li>• 1 sekund delay = 7% färre konverteringar</li>
                    <li>• 2 sekunders delay = 16% färre konverteringar</li>
                    <li>• 3 sekunders delay = 26% färre konverteringar</li>
                    <li>• Amazon rapporterar att varje 100ms fördröjning = 1% försäljningsminskning</li>
                    <li>• 53% av mobila besökare lämnar sidor som tar mer än 3 sekunder</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Om du får 1000 besökare per månad och din sida laddar på 3 sekunder istället för 1 sekund, förlorar du cirka 260 potentiella kunder per månad. Det är Real pengar.
            </p>

            {/* Core Web Vitals */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Core Web Vitals förklarade enkelt — vad mäter Google egentligen?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google mäter inte bara "hur snabbt laddar din hemsida". Det skulle vara för enkelt. Istället använder de något som heter Core Web Vitals — tre specifika mätvärden som tillsammans säger något om användarupplevelsen:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { metric: "LCP — Largest Contentful Paint", meaning: "Hur snabbt syns det största innehållet på sidan?", target: "Under 2,5 sekunder för bäst resultat", common: "Ofta långsam på grund av stora bilder eller WordPress-teman" },
                { metric: "FID — First Input Delay", meaning: "Hur snabbt svarar sidan när du klickar på något?", target: "Under 100ms", common: "Ofta långsam på grund av tungt JavaScript eller plugins" },
                { metric: "CLS — Cumulative Layout Shift", meaning: "Skiftar innehållet omkring när sidan laddar? (irriterande!)", target: "Under 0,1", common: "Ofta orsakad av annonser eller bilder utan definierad storlek" },
              ].map((item) => (
                <div key={item.metric} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[15px] font-700 text-primary mb-2">{item.metric}</p>
                  <p className="text-[14px] text-heading font-500 mb-1">Vad det betyder: {item.meaning}</p>
                  <p className="text-[13px] text-muted mb-1">Målsättning: {item.target}</p>
                  <p className="text-[13px] text-body italic">Varför det ofta är långsamt: {item.common}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Du behöver inte memorera dessa. Du behöver bara veta att om din hemsida inte uppfyller dessa standarder förlorar du ranking på Google OCH förlorar du besökare. Google visar det även i search results nu — en grön bock för snabba sidor, en gul varning för långsamma.
            </p>

            {/* Vad gör de flesta långsamt? */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad gör de flesta svenska hemsidor långsamma? (Spoiler: WordPress)
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Jag har granskat hundratals hemsidor. De långsamma tenderar att ha samma problem:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { problem: "Tungt WordPress-tema", why: "Många gratis (och dyra) WordPress-teman laddar 50+ JavaScript-filer och använder säljä inte den tionde delen." },
                { problem: "Ooptimerade bilder", why: "En 5MB JPG från mobilen istället för en komprimerad 200KB version. Folk övertar ibland 50 bilder på en sida!" },
                { problem: "För många plugins", why: "15 plugins för 15 saker. Var plugin adderar tid. WordPress med 15 plugins lådar ofta på 4+ sekunder." },
                { problem: "Inga caching-lösningar", why: "Sidan bygger om sig själv varje gång någon besöker. Är ineffektivt och långsamt." },
                { problem: "Annonser och tredjepartsskript", why: "Google Analytics, Facebook Pixel, LinkedIn, chat-widgets — allt detta laddar från externa servrar och saktar ned sidan." },
              ].map((item) => (
                <div key={item.problem} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[14px] font-700 text-heading mb-1">{item.problem}</p>
                  <p className="text-[13px] text-muted">{item.why}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det roliga är: många av dessa problem är enkla att lösa. Du behöver inte bygga om hemsidan från grunden.
            </p>

            {/* Lösningar */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Praktiska lösningar — gör din hemsida snabbare idag
            </h2>

            <h3 className="text-[18px] font-700 text-heading mt-10 mb-4">1. Byt till ett snabbare tema eller platform</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Om du är på WordPress och ditt tema är från 2015 — det är dags att uppdatera. Moderna WordPress-teman (eller helt andra lösningar) är mycket snabbare. Ännu bättre: migrera från WordPress till Next.js eller en statisk site builder. Det kan låta tekniskt, men det är inte det.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Next.js / React: Extremt snabbt, modärn, men kräver utvecklare",
                "Statisk site generator (Hugo, Astro): Väldigt snabbt, perfekt för marknadsföringswebbplatser",
                "Modernt WordPress-tema: Bättre än gamla teman, men aldrig lika snabbt som Next.js eller statiska lösningar",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[18px] font-700 text-heading mt-10 mb-4">2. Optimera dina bilder</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Detta är ofta det snabbaste sättet att få en resultat. Stora, höga upplösningsbilder är hemsidans största tjuv vad gäller hastighet.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Använd ett verktyg som TinyPNG eller ImageOptim för att komprimera före uppladdning",
                "Ladda upp rätt storlek — en featured image på 1200px bred behöver inte vara 3000x3000px",
                "Använd moderna format (WebP istället för PNG/JPG) — kan spara 25-30% filstorlek",
                "Lazy load bilder som ligger längre ned på sidan — de behöver inte ladda direkt",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[18px] font-700 text-heading mt-10 mb-4">3. Rensa bort onödiga plugins</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Gå igenom dina WordPress-plugins. Behöver du VERKLIGEN alla 15? Ofta har du en plugin för något du bara gör en gång per år. Deaktivera och radera de som inte är kritikal.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Behållet bara plugins som är helt nödvändiga",
                "Håll de återstående uppdaterade — gamla versioner är ofta långsammare",
                "Ersätt flera plugins med en — t.ex. en SEO-plugin istället för tre separata",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[18px] font-700 text-heading mt-10 mb-4">4. Slå på caching</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Caching innebär att sidan sparas så den inte behöver byggas om från grunden varje gång. Det är kanske den enkla win du kan få.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Om du är på WordPress: installera WP Super Cache, W3 Total Cache, eller Litespeed Cache",
                "Aktivera cache-gränssnittet i ditt webbhotell (många webbhotell erbjuder detta)",
                "Använd ett CDN (Content Delivery Network) som Cloudflare för att servera statiska filer från servrar närmare dina besökare",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Mäta */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Hur du mäter din hemsidas hastighet — gratis verktyg
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du kan inte förbättra vad du inte mäter. Här är de bästa gratis verktygen:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { name: "Google PageSpeed Insights", url: "pagespeed.web.dev", what: "Googles eget verktyg. Mäter Core Web Vitals och ger konkreta förbättringsförslag. Kolla både desktop och mobil." },
                { name: "GTmetrix", url: "gtmetrix.com", what: "Visar detaljerad analys, filmade waterfall-diagram, och rankade förbättringar. Mycket user-friendly." },
                { name: "WebPageTest", url: "webpagetest.org", what: "Mycket teknisk men kraftfull. Du kan testa från olika platser i världen. Bra för att förstå vad som är långsamt." },
              ].map((item) => (
                <div key={item.name} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[14px] font-700 text-heading mb-1">{item.name}</p>
                  <p className="text-[13px] text-primary font-500 mb-1">{item.url}</p>
                  <p className="text-[13px] text-muted">{item.what}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Min rekommendation: börja med PageSpeed Insights. Om din sida får under 50 på mobilt behöver du åtgärder nu.
            </p>

            {/* Mobile-first */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Mobile-first — det är på mobilen folk är långsam
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Många företagare fokuserar på desktopversion. Fel. 70% av webbtrafiken kommer från mobil, och mobila nätverk är långsammare än stationär internet.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              När du testar din hemsida — testa ALLTID på mobil först. Det är där du förlorar folk. Om din hemsida laddar på 2 sekunder på desktop men 6 sekunder på mobil så har du ett problem.
            </p>

            {/* Sammanfattning */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Sammanfattning — gör din hemsida snabbare, få fler kunder
            </h2>

            <div className="bg-surface border border-border rounded-xl p-6 mb-8">
              <div className="space-y-3">
                {[
                  "Testa din hemsida idag med PageSpeed Insights — se var du står",
                  "Optimera dina bilder — ofta den snabbaste win",
                  "Rensa bort onödiga plugins och scripts",
                  "Slå på caching för att spara tid",
                  "Överväg ett tema- eller plattformsbyte om din sida är för långsam",
                  "Fokusera på mobil-prestanda — det är där folk är",
                  "Återtest varje månad — track förändringarna",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary-light text-primary text-[12px] font-700 flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En snabb hemsida är investeringen i din försäljning. Det är inte en teknisk detalj — det är direkta pengar. Om du får 1000 besökare per månad och din sida är långsam jämfört med din konkurrents snabba sida förlorar du försäljning varje dag.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Inte säker på var du ska börja? Jag kan granska din hemsida, testa den, och ge dig en konkret action plan. Vi kan också diskutera ett helt plattformbyte om din nuvarande WordPress-sida är för långsam. <a href="/tjanster/webbutveckling" className="text-primary hover:underline font-600">Läs mer om mina webbutvecklings-tjänster</a> eller <a href="/boka" className="text-primary hover:underline font-600">boka en tid för att prata om det</a>.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "WordPress vs Next.js — vilket passar ditt företag?", href: "/blogg/wordpress-vs-nextjs" },
                { title: "Vad kostar en hemsida 2026? Komplett prisguide", href: "/blogg/vad-kostar-en-hemsida" },
                { title: "Google Business Profile — Komplett guide för företagare", href: "/blogg/google-business-profile-guide" },
                { title: "Webbutveckling & design — så kan jag hjälpa", href: "/tjanster/webbutveckling" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors">
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">{link.title} →</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-800 text-white font-heading tracking-tight mb-3">
                Vill du göra din hemsida snabbare?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Jag kan granska din nuvarande hemsida, identifiera flaskhalsar, och sätta upp en plan för att öka prestandan. Boka en kostnadsfri genomgång så visar jag var du kan få störst genomslag.
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
