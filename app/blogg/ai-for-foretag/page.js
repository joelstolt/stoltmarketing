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
                <span className="text-heading font-500">AI för företag</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                AI
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                AI för företag 2026 — Praktiska användningsområden som ger resultat
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 12 april 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 9 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              AI är inte längre science fiction. Det är ett verktyg som redan sitter på ditt skrivbord — i Google Workspace, i dina e-postprogram, i hur du marknadsför ditt företag. Frågan är inte längre om du ska använda AI. Frågan är: vad ska du använda det till, och var börjar du?
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Hypen runt AI gör det lätt att tro att det är komplicerat eller att det bara handlar om att ersätta människor med robotar. Sanningen är enklare: AI är bra på uppgifter som är repetitiva, tidskrävande och inte kräver ditt bästa omdöme. Använd det rätt, och du får tillbaka timmar varje vecka. Använd det fel, och du slösar tid på att retta till dålig output. Den här guiden handlar om hur du använder det rätt.
            </p>

            {/* Chatbots */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              1. Chatbots och kundservice 24/7
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En AI-driven chatbot kan svara på vanliga frågor från dina kunder när du inte jobbar. Det innebär att en potentiell kund inte behöver vänta på ditt svar för att få ett svar på &ldquo;Vad kostar det?&rdquo; eller &ldquo;Vilka är era öppettider?&rdquo;.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[16px] font-600 text-heading mb-3">Vad kan chatbots göra för dig?</p>
              <div className="space-y-2">
                {[
                  "Svara på FAQ — priser, öppettider, produkter, befintliga tjänster",
                  "Boka möten — integrera med din kalender, se lediga tider",
                  "Samla kontaktuppgifter — få namn, e-post och telefon innan du säljer",
                  "Kvalificera leads — ställ automatiska frågor för att filtrera rätt kunder",
                  "Hantera flera språk — samma chatbot, flera marknader",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Vi har sett småföretag öka sin lead-insamling med 40% bara genom att ha en chatbot som svarar när de själva är lediga. Och för större företag sparer en chatbot timmar av kundservicearbete varje vecka. Den tangerar aldrig en äkta kundrelation — men den gör väntande kunder nöjdare.
            </p>

            {/* Content och marknadsföring */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              2. Content och marknadsföring — Från idé till publicering
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              AI är oerhört snabbt på att skriva första utkast. Inte perfekt. Inte ditt slutgiltiga ord. Men en grund du kan bygga på.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Bloggartiklar",
                  text: "AI kan skriva en första draft på 2000 ord på 5 minuter. Du gör den bra på 30 minuter. Utan AI tar det 2 timmar från tomt papper till publicering."
                },
                {
                  title: "Rubrikförslag",
                  text: "Testsätt 10 olika rubriker för samma innehål. Se vilken som får högre klickfrekvens. AI genererar alternativen på sekunder."
                },
                {
                  title: "Bildgenerering",
                  text: "Behöver du en illustration eller en banner? AI kan skapa det åt dig för en bråkdel av priset för att hyra en designer."
                },
                {
                  title: "E-postsamlingar",
                  text: "Skapa en säljsekvens eller en nyhetsbrev utan att sätta dig och skriva från noll varje gång. AI genererar utgångspunkten, du personaliserar den."
                },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[15px] font-600 text-heading mb-1.5">{item.title}</p>
                  <p className="text-[15px] text-body">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Nyckeln är att AI skapar, du kvalitetssäkrar. En AI-genererad artikel som du läser igenom, redigerar och sedan publicerar är 10 gånger bättre än ingen artikel alls. Den är också snabbare än att du skulle skriva allt själv.
            </p>

            {/* Tips Box */}
            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[15px] font-600 text-heading mb-2">Viktigt: Slå inte på autopilot</p>
                  <p className="text-[15px] text-body">
                    Aldrig publicera AI-innehål utan att läsa det själv först. En AI kan skriva grammatiskt korrekt men innehålla faktafel eller svaga argument. Din röst och ditt omdöme är det som gör innehållet värt att läsa.
                  </p>
                </div>
              </div>
            </div>

            {/* Automatisering */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              3. Automatisering av repetitiva processer
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Varje timme du spenderar på en återkommande, mekanisk uppgift är en timme du inte spenderar på det som faktiskt kräver ditt kunnande. Det är här AI och automatisering gör den största skillnaden.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { task: "Fakturering", benefit: "AI läser in fakturor, extraherar datum och belopp, uppdaterar din bokföring automatiskt." },
                { task: "E-postsortering", benefit: "E-post kategorieras automatiskt. Försäljningsmail till en mapp, kundsupport till en annan." },
                { task: "CRM-uppdateringar", benefit: "Ny order → CRM uppdateras själv. Ny lead → notis skickas till rätt säljare automatiskt." },
                { task: "Rapportgenerering", benefit: "Dina försäljnings- och marknadsföringsdata omvandlas till schyssta grafer varje vecka utan handarbete." },
                { task: "Datarengöring", benefit: "Dubbletter i Excel eller din database tas bort. Felformaterad data fixas. Ingen manuell Excel-fest." },
              ].map((item) => (
                <div key={item.task} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-light text-primary text-[11px] font-700 flex-shrink-0 mt-0.5">✓</div>
                  <div className="flex-1">
                    <p className="text-[15px] font-600 text-heading">{item.task}</p>
                    <p className="text-[14px] text-body mt-0.5">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Att sätta upp automation tar 1–2 timmar en gång. Sedan sparar det dig 3–5 timmar varje vecka för alltid. Det är en av de bästa investeringarna du kan göra.
            </p>

            {/* AI i webbutveckling */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              4. AI i webbutveckling — Snabbare och bättre design
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Om du har en webbplats — eller planerar att bygga en — kan AI påskynda utvecklingen och göra den billigare.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[16px] font-600 text-heading mb-3">Vad AI gör i webbutveckling:</p>
              <div className="space-y-2">
                {[
                  "Kodgenerering — skapa komponenter och funktioner snabbare än att skriva allt från noll",
                  "Design-förslag — få layout- och färgidéer baserat på vad som fungerar för din bransch",
                  "A/B-testning — AI kan förutse vilka CTA-knapptext och rubriker som fungerar innan du testar",
                  "Personalisering — visa olika innehål för olika användare — nya besökare vs. återkommande kunder",
                  "Prestanda-optimering — hitta döda slutar på din sajt där folk hoppar av",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En developer som använder AI kan bygga samma sak två gånger snabbare. Det gör webbutveckling mer tillgängligt för småföretag.
            </p>

            {/* Vad AI inte kan ersätta */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              5. Vad AI INTE kan ersätta
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här är gränsen. Det här är där DU kommer in.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { what: "Din affärsstrategi", why: "AI kan inte veta vilka kunderna är eller vad som skiljer dig från konkurrenter. Det måste du veta." },
                { what: "Kreativt tänkande", why: "AI mixar befintligt material. Det kan inte hitta på något helt nytt eller överraskande." },
                { what: "Kundrelationer", why: "En kund vill tala med en människa som förstår deras problem och bryr sig om en lösning för just dem." },
                { what: "Din varumärkesröst", why: "AI kan skriva snyggt och grammatiskt — men det kan inte fånga det sätt som gör ditt företag unikt." },
                { what: "Moraliska val", why: "Om AI säger något som inte känns rätt — gör det inte bara för att det var enkelt." },
              ].map((item) => (
                <div key={item.what} className="bg-surface border border-border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <X size={16} className="text-red-500/70 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-[15px] font-600 text-heading">{item.what}</p>
                      <p className="text-[14px] text-body mt-1">{item.why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              AI är en assistent som gör dig snabbare. Det är inte en ersättare för ditt tänkande.
            </p>

            {/* Var börjar du? */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              6. Var börjar du? 3 konkreta steg
            </h2>

            <div className="space-y-5 mb-8">
              {[
                {
                  step: "Steg 1: Identifiera repetitiva uppgifter",
                  desc: "Spåra din vecka. Vilka uppgifter gör du flera gånger? Vilka tar tid men kräver inte ditt bästa omdöme? Det är dina startpunkter. Vanliga kandidater: e-postsortering, fakturering, rapporter, kundmail-svar.",
                },
                {
                  step: "Steg 2: Testa med ett litet projekt",
                  desc: "Börja inte stort. Pröva AI på en bloggpost, en kundmail eller en liten automation. Se vad som fungerar och vad som inte gör det. Läs igenom allt. Anpassa. Publicera bara när du är nöjd.",
                },
                {
                  step: "Steg 3: Mät resultat",
                  desc: "Hur lång tid tog den här uppgiften innan? Hur lång tid tar den med AI? Sparade du minst 20 minuter? Då är det värt att göra igen nästa gång. Om det tog samma tid eller längre — försök något annat.",
                },
              ].map((item, i) => (
                <div key={item.step} className="bg-surface border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-light text-primary font-800 text-[16px] font-heading flex-shrink-0">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-[16px] font-600 text-heading mb-2">{item.step}</p>
                      <p className="text-[15px] text-body">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Vanliga misstag */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              7. Vanliga misstag — undvik dessa
            </h2>

            <div className="space-y-3 mb-8">
              {[
                {
                  mistake: "För mycket på en gång",
                  problem: "Du bestämmer att AI ska hantera chatbot, content, fakturering och A/B-testning samtidigt. Då blir ingenting bra och du blir stressad. Börja med en sak.",
                },
                {
                  mistake: "Inget mänskligt filter",
                  problem: "Du låter AI publicera direkt utan att läsa det. Resultatet: felaktig information, konstiga formuleringar, saker som inte passar ditt varumärke.",
                },
                {
                  mistake: "Vänta på 'perfekt' AI",
                  problem: "AI är redan tillräckligt bra för de flesta uppgifter. Men du väntar på att det ska bli bättre. Medan du väntar förlorar du tid varje dag.",
                },
                {
                  mistake: "Glömmer att träna AI på dina data",
                  problem: "AI är mest användbar när den vet om dina produkter, priser och processer. Spendera 30 minuter på att lära den vad som är viktigt för dig.",
                },
              ].map((item) => (
                <div key={item.mistake} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[15px] font-600 text-heading mb-1.5">{item.mistake}</p>
                  <p className="text-[15px] text-body text-muted">{item.problem}</p>
                </div>
              ))}
            </div>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-8">
              {[
                { title: "AI-automation för företag — så sätter du upp det rätt", href: "/tjanster/ai-automation" },
                { title: "Vad kostar en hemsida 2026? Komplett prisguide", href: "/blogg/vad-kostar-en-hemsida" },
                { title: "SEO för småföretag — 7 steg som faktiskt fungerar", href: "/blogg/seo-for-smaforetag" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors">
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">{link.title} →</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-800 text-white font-heading tracking-tight mb-3">
                Vill du implementera AI i ditt företag?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Jag hjälper företag som du att sätta upp AI-automation, chatbots och automatisering av kundservice och interna processer. Vi börjar med en genomgång av där du kan spara mest tid — utan att skapa extra arbete för dig.
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
