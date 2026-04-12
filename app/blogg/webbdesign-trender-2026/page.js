"use client";

import { ArrowRight, ArrowLeft, Clock, Calendar, Check, X, AlertCircle } from "lucide-react";
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
                <span className="text-heading font-500">Webbdesign-trender 2026</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Design
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                Webbdesign-trender 2026 — Vad som faktiskt spelar roll
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 12 april 2026</span>
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
              Varje år flodar det nya design-trender över nätet. Glasmorfi här, neumorphism där, grymt färgstarka gradienter överallt. Men sen — två år senare — är det bara minder från det förgångna.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det jag märkt efter att ha levererat 150+ webbprojekt är att trenderna som håller i sig, de som faktiskt gör en skillnad, har något gemensamt: de gör sajten bättre för användaren. Inte snyggare. Bättre. Snabbare, tillgängligare, tydligare.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Här är de trenderna 2026 som faktiskt spelar roll — och några du bör undvika helt.
            </p>

            {/* AI och personalisering */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              AI-genererade element och personalisering
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              AI är inte längre Science Fiction. Det är här — och det förändrar hur vi bygger sajter. Inte för att ha AI bara för AI:s skull, utan för att det gör sajten smartare.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { title: "AI-driven content personalisering", desc: "Visa olika produktrekommendationer eller inlämningsformulär baserat på vem som besöker. En e-handel kan visa helt olika startsida för ny besökare vs. återkommande kund." },
                { title: "Dynamiska hero-sektioner", desc: "Byt rubrik, bild eller styling baserat på tid på dagen, väder eller användarens tidigare besök. Subtilt, men det märks." },
                { title: "AI-powered chatbots", desc: "Chat-support som faktiskt förstår frågor och kan svara — inte bara 'try rebooting'. Sparar både din tid och kundens frustration." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-600 text-heading mb-2">{item.title}</p>
                  <p className="text-[14px] text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Poängen: AI ska inte ersätta design, det ska förbättra den. En sajt som lär sig vad en besökare vill se är alltid bättre än en som gör samma sak för alla.
            </p>

            {/* Bento grids */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Bento grids och asymmetrisk layout
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Apple gjorde det. Stripe gjorde det. Nu gör alla det. Och det finns en anledning — det ser ut som det är från 2026, inte 2016.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En bento grid är en asymmetrisk layout där olika element har olika storlekar — lite som ett bento-låda med olikformade fack. Det ser modernt ut, ja, men det funkar också bra:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Det drar blicken på rätt sätt — stora element för det viktiga, mindre för context",
                "Det är mobilanpassat från grund — fungerar lika bra på telefon som desktop",
                "Det är scannbar — ögat vet var det ska titta härnäst",
                "Det sparar utrymme utan att kännas trångt",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              CSS Grid gör det enkelt att bygga. Börja med det och falla tillbaka till gamla Flexbox-kolumner bara för de mer komplexa layouterna.
            </p>

            {/* Mikroanimationer */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Mikroanimationer och scroll-driven effekter
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ett knapptryck som visar en liten animerad checkmark. Text som glider in när du scrollar förbi. En knapp som växer lite när du hovrar. Dessa små detaljer är det som gör en sajt kännas levande.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Men här är nyckelorden: små och subtila. Framer Motion och GSAP är fantastiska verktyg för detta, men många gör samma misstag:
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex gap-3">
                <AlertCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[15px] font-600 text-heading mb-2">Animera med mening</p>
                  <p className="text-[14px] text-body">Varje animation ska ha ett syfte — visa att något hänt, guida uppmärksamheten eller göra övergångar tydligare. Animera inte bara för att det är möjligt. En sajt som animerar allt är långsammare och mer tröttsam att använda.</p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Och här kommer prestanda in. Du kan bygga den snyggaste animationen i världen, men om den kostar 200ms att rendera är den fel. Se nästa trend.
            </p>

            {/* Dark mode */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Dark mode som standard
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det var en tid när dark mode var en extra feature. Nu är det expectation. 50%+ av webben är på dark mode någon gång per dag — ofta på nätterna.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det är inte bara snyggt. Det har verkliga fördelar:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Energi — OLED-skärmar använder betydligt mindre ström med dark backgrounds",
                "Ögonhälsa — mindre blåljus på kvällen = bättre sömnkvalitet",
                "Tillgänglighet — kontrast är ofta bättre med dark mode för människor med ljuskänslighet",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              I Next.js är det enkelt med Tailwind — använd dark: prefix och låt CSS Variabler hantera färgerna. Din sajt bör redan ha dark mode 2026.
            </p>

            {/* Prestanda slår estetik */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Prestanda slår estetik
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här är den största trenden 2026 — och den enda som inte är visuell. Google ranking, användarupplevelse och omvandlingar beror alla på prestanda. En 2MB stor banner-bild som tar 3 sekunder att ladda är inte vacker. Det är dåligt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Core Web Vitals är fortfarande rankingfaktorer. Det betyder:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { name: "LCP (Largest Contentful Paint)", val: "< 2.5 sekunder" },
                { name: "FID/INP (Input latency)", val: "< 100ms" },
                { name: "CLS (Layout shift)", val: "< 0.1" },
              ].map((metric) => (
                <div key={metric.name} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[15px] font-600 text-heading">{metric.name}</p>
                  <p className="text-[14px] text-muted">{metric.val}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Nästa.js på statiska sidor (SSG) slår WordPress med 10 tyngda plugins vart gång. En WordPress-sajt med ett modernt tema är ofta mellan 3-5MB på första laddningen. En Next.js-sajt kan vara under 200KB. Det är inte nästan att välja — det är det rätta valet för 2026.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Bilder är det största ämnet här. WebP-format, responsive images med srcset, och lazy loading för bilder under the fold. Nästa.js Image-komponent gör det åt dig automatiskt.
            </p>

            {/* Tillgänglighet */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Tillgänglighet (WCAG) — inte längre frivilligt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det här är viktigt. Från 2025 är EU:s Accessibility Act (EAA) i kraft. Det betyder att säljbara sajter och appar måste följa WCAG 2.1 AA-standarden. Det är inte längre &ldquo;nice to have&rdquo; — det är lag.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det handlar inte bara om screenreader-användare. Det handlar om:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Färgblindhet — inte bara röd/grön utan fler nyanser",
                "Svag syn — text måste vara minst 16px och kontrast minst 4.5:1",
                "Motoriska problem — allt måste kunna nås från tangentbordet",
                "Kognitiva funktionshinder — enkel språk, tydlig navigation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Om du bygger en ny sajt 2026 utan att tänka på tillgänglighet riskerar du juridiska problem. Inte för att jag är deppig — för att det är realiteten nu.
            </p>

            {/* Vad du bör undvika */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad du bör undvika 2026
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Trenderna är inte bara vad du ska göra — de är också vad du ska sluta göra:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { title: "Överdriven animation", desc: "En 5-sekunders intro-animation innan man kan komma till innehållet. Döda den." },
                { title: "Stockfoton överallt", desc: "En smiling stock-bild av &ldquo;diverse team i kontoret&rdquo; gör sajten billig och otrovärd. Använd verkliga bilder av dina kunder och ditt arbete." },
                { title: "Cookie-cutter templates", desc: "Squarespace-sajter ser ut som Squarespace-sajter. Wix-sajter ser ut som Wix-sajter. Det är inte ett problem om du är på budget — men det märks." },
                { title: "Flash och gamla plugins", desc: "Flash är dött. Java applets är döda. Gamla jQuery-plugins som behöver jQuery 1.0? Döda. Använd moderna Web APIs." },
                { title: "Autospielande video/ljud", desc: "Ingenting irriterar användare mer än en sajt som spelar musik när man klickar in. Det är 2026 — det ska aldrig hända." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-600 text-heading mb-2 flex items-center gap-2">
                    <X size={16} className="text-red-500" />
                    {item.title}
                  </p>
                  <p className="text-[14px] text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Sammanfattning */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Sammanfattning — fokus på det som spelar roll
            </h2>

            <div className="bg-surface border border-border rounded-xl p-6 mb-8">
              <div className="space-y-3">
                {[
                  "AI och personalisering gör sajten smartare — inte bara flashigare",
                  "Bento grids och asymmetriska layouter ser modernt ut och funkar bra",
                  "Småa animationer är okay — överdriven animation är aldrig det",
                  "Dark mode är en expectation, inte en feature",
                  "Prestanda slår estetik varje gång — en snabb sajt vinner över en fin sajt",
                  "WCAG AA-tillgänglighet är nu lag i EU — det spelar ingen roll vad du tycker",
                  "Fokus på verkligt innehål, verkliga bilder och verklig värde för användaren",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary-light text-primary text-[12px] font-700 flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En sajt från 2026 är inte nödvändigtvis flashig eller trendy. Det är en sajt som löser ett problem, laddar snabbt, ser bra ut på alla enheter och är tillgänglig för alla. Trenderna jag nämnt här — de är bara verktyg för att få dit.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Behöver du <a href="/tjanster/webbutveckling" className="text-primary hover:underline font-600">hjälp att bygga eller uppdatera en sajt</a> som följer dessa trender? Jag gör det till mitt dagliga arbete — från Next.js-arkitektur till WCAG-audit. Hör av dig och vi ses så kan vi gå igenom vad som är viktigt för just din sajt.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Vad kostar en hemsida 2026? Komplett prisguide", href: "/blogg/vad-kostar-en-hemsida" },
                { title: "WordPress vs Next.js — vilket passar ditt företag?", href: "/blogg/wordpress-vs-nextjs" },
                { title: "Lokal SEO-guide för företag i Hässleholm", href: "/blogg/lokal-seo-guide" },
                { title: "Webbutveckling — tjänster & priser", href: "/tjanster/webbutveckling" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors">
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">{link.title} →</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-800 text-white font-heading tracking-tight mb-3">
                Vill du uppdatera din sajt till 2026-standard?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Jag hjälper företag att bygga snabba, moderna och tillgängliga sajter. Oavsett om du behöver en helt ny sajt eller uppdatering av en befintlig — boka en kostnadsfri genomgång så diskuterar vi vad som är viktigt för dig.
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
