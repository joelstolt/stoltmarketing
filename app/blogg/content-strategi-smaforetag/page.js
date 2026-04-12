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
                <span className="text-heading font-500">Content-strategi</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Marknadsföring
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                Content-strategi för småföretag — Så skapar du innehåll som rankar
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 31 maj 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 10 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              De flesta småföretag har en hemsida. Men väldigt få har en faktisk content-strategi. Vad skiljer är att ett företag med en strategi får 3–5x mer trafik från Google än ett utan — och mycket billigare än annonsering.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det verkar komplicerat, men content-strategi för småföretag behöver inte vara någon 50-sidors marketing-plan. Det behöver bara vara systemet — en plan för vad du ska skriva, när, och varför. Jag ska visa dig exakt hur du bygger det.
            </p>

            {/* Varför content spelar roll */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Varför content-strategi spelar roll — det är gratis trafik på repeat
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Tänk på skillnaden mellan annonsering och content:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { channel: "Google Ads (SEM)", cost: "Du betalar varje gång någon klickar. Ingen kund = inget värde." },
                { channel: "Content & SEO", cost: "Du skriver en artikel en gång. Den rankar på Google i månader eller år. Gratis trafik långsiktigt." },
              ].map((item) => (
                <div key={item.channel} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[14px] font-700 text-heading mb-1">{item.channel}</p>
                  <p className="text-[13px] text-muted">{item.cost}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Nu förstår du varför varje företag som bygger långsiktigt investererar i content. Det är den långsammare vägen till många kunder, men också den billigaste i slutändan.
            </p>

            {/* Steg 1: Keyword research */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 1: Keyword research — hitta ord folk faktiskt söker på
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du kan inte skriva något på måfå och hoppas det rankar. Du behöver skriva om ord som folk faktiskt söker på. Keyword research låter avancerat, men det är egentligen enkelt.
            </p>

            <h3 className="text-[18px] font-700 text-heading mt-8 mb-4">Metod 1: Fråga dina kunder direkt</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det enklaste sättet. Ring eller mejla några kunderna och fråga: "Vilka frågor ställer folk ofta när de söker efter någon som du?" Noter svaren. Dessa är dina artiklar.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Vad kostar en elinstalation för ett hus?",
                "Hur länge tar ett tak att byta?",
                "Vilken målare är bäst för allergiker?",
                "Kan man göra renovering själv eller behöver man hjälp?",
              ].map((q) => (
                <div key={q} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body italic">"{q}"</span>
                </div>
              ))}
            </div>

            <h3 className="text-[18px] font-700 text-heading mt-8 mb-4">Metod 2: Google suggestions</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Börja skriva något i Google och titta på vad Google föreslår. Det är faktiska sökningar folk gör.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[14px] font-700 text-heading mb-3">Exempel: Du är målare</p>
              <div className="space-y-2 text-[13px] text-muted">
                <p>Skriv: "målning" i Google</p>
                <p>Google föreslår:</p>
                <p className="font-600 text-heading mt-2">• Målning av hus pris</p>
                <p>• Målning innan eller efter gips</p>
                <p>• Målning av aluminium</p>
                <p>• Målning trä utomhus</p>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Dessa är perfekta artiklar för dig att skriva. Google sade redan folk söker på dessa.
            </p>

            <h3 className="text-[18px] font-700 text-heading mt-8 mb-4">Metod 3: Gratis keyword-verktyg</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Visst kan du köpa Semrush eller Ahrefs, men gratis verktyg räcker ofta för småföretag:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { name: "Google Search Console", why: "Visar ord DU redan rankar på — börja där." },
                { name: "Google Ads Keyword Planner", why: "Kostnadsfritt från Google. Visar sökvolym för ord." },
                { name: "Ubersuggest", why: "Gratis version visar förslag och lite sökvolym." },
              ].map((item) => (
                <div key={item.name} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[14px] font-700 text-heading mb-1">{item.name}</p>
                  <p className="text-[13px] text-muted">{item.why}</p>
                </div>
              ))}
            </div>

            {/* Steg 2: Content-kalender */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 2: Gör en content-kalender — konsistens slår perfekt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det viktigaste är att du PUBLICERAR regelbundet. En artikel per månad konsekvent slår två stora artiklar och sedan inget på sex månader.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Gör en enkel plan:
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[14px] font-700 text-heading mb-4">Exempel-kalender för målare:</p>
              <div className="space-y-2 text-[13px] text-body">
                <p><span className="font-600 text-heading">Januari:</span> "Målning av hus innan gips — vad är rätt tidpunkt?"</p>
                <p><span className="font-600 text-heading">Februari:</span> "Målning av trä utomhus — tips för långvarigt resultat"</p>
                <p><span className="font-600 text-heading">Mars:</span> "Vad kostar målning av ett hus? Prisguide 2026"</p>
                <p><span className="font-600 text-heading">April:</span> "Målning eller tapetsering? Vilket passar ditt hem?"</p>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det behöver inte vara fyra artiklar per månad. En per månad räcker. Men det måste vara konsekvent.
            </p>

            {/* Steg 3: Content-typer */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 3: Välj rätt content-typer — vissa fungerar bättre än andra
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Inte allt innehål är lika effektivt för ranking. Vissa format rankar bättre än andra.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { type: "Guides & How-to", example: '\u201cSteg-för-steg-guide till målning av hus\u201d', rank: "\u2b50\u2b50\u2b50\u2b50\u2b50", why: 'Folk söker på \u201chur gör man\u201d och guides svarar direkt.' },
                { type: "Jämförelser", example: '\u201cMålning vs tapetsering \u2014 fördelar och nackdelar\u201d', rank: "\u2b50\u2b50\u2b50\u2b50\u2b50", why: "Folk jämför innan köp. Du visar båda sidor = trovärdigt." },
                { type: "FAQs", example: '\u201cVanliga frågor om målning \u2014 svar på det du undrar\u201d', rank: "\u2b50\u2b50\u2b50\u2b50", why: "Folk söker ofta på frågor. FAQs rankar väl." },
                { type: "Prisguider", example: '\u201cVad kostar målning? Prisguide för olika hus\u201d', rank: "\u2b50\u2b50\u2b50\u2b50\u2b50", why: 'Alla söker på \u201cvad kostar?\u201d Ge dem svaret.' },
                { type: "Blogginlägg (allmänt)", example: '\u201cMålning tips för hemmaögat\u201d', rank: "\u2b50\u2b50", why: "Rankar ofta sämre om det är vagt. Var specifik." },
              ].map((item) => (
                <div key={item.type} className="bg-surface border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="text-[14px] font-700 text-heading">{item.type}</p>
                      <p className="text-[12px] text-muted mt-1 italic">{item.example}</p>
                    </div>
                    <span className="text-[16px] flex-shrink-0">{item.rank}</span>
                  </div>
                  <p className="text-[13px] text-muted">Varför: {item.why}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Min rekommendation: börja med "Vad kostar"-guides och "Hur gör man"-guides. De rankar nästan alltid bra för lokala företag.
            </p>

            {/* Steg 4: Hur du skriver */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 4: Skriv artiklar som rankar — grundläggande SEO-regler
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du behöver inte vara författare. Du behöver bara skriva för människor — sedan optimerar du för Google. Här är det viktigaste:
            </p>

            <h3 className="text-[18px] font-700 text-heading mt-8 mb-4">1. H1-rubrik med ditt huvudsökord</h3>

            <div className="space-y-2 mb-6">
              {[
                "Bra: 'Målning av hus — Prisguide och tips för året 2026'",
                "Dåligt: 'Tips för målning'",
              ].map((ex, idx) => (
                <div key={ex} className="flex items-start gap-2.5">
                  <span className={`text-[13px] font-600 flex-shrink-0 ${idx === 0 ? 'text-primary' : 'text-red-500'}`}>
                    {idx === 0 ? '✓' : '✗'}
                  </span>
                  <span className="text-[14px] text-body">{ex}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[18px] font-700 text-heading mt-8 mb-4">2. Anvand H2- och H3-rubriker för struktur</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Dela upp artikeln. Det gör den läsbar för människor och lättare för Google att förstå.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "H2: 'Vad kostar målning av ett hus?'",
                "  H3: 'Priser för ett litet hus'",
                "  H3: 'Priser för ett stort hus'",
                "H2: 'Vad påverkar priset?'",
                "  H3: 'Material'",
                "  H3: 'Arbetskraft'",
              ].map((item) => (
                <div key={item} className="text-[13px] text-body font-mono">{item}</div>
              ))}
            </div>

            <h3 className="text-[18px] font-700 text-heading mt-8 mb-4">3. Längd spelar roll — men bara till en punkt</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google gillar innehål som svarar fullt på frågan. Men det behöver inte vara 5000 ord om frågan bara behöver 1500.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Guide eller jämförelse: 1500–2500 ord",
                "FAQ eller snabbtips: 800–1200 ord",
                "Pressmeddelande eller nyhet: 300–600 ord",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[18px] font-700 text-heading mt-8 mb-4">4. Länka till dina tjänstesidor</h3>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Om du skriver en guide om målning — länka till din "Målning"-tjänstesida. Google gillar detta. Besökare gillar det. Alla vinner.
            </p>

            <h3 className="text-[18px] font-700 text-heading mt-8 mb-4">5. Skriv för MÄNNISKOR först, Google andra</h3>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En artikel fylld med "målning målning målning målning" för att köra in sitt sökord 100 gånger är skriven för Google, inte människor. Skriv naturligt. Google hittar ditt ord ändå.
            </p>

            {/* Steg 5: Repurposing */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 5: Repurposing — få mer värde ur varje artikel
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En artikel kan bli många saker. Varför nöja dig med en artikelpublikation?
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Blogg-artikel → 3 LinkedIn-inlägg → 10 Instagram-stories → Email-sekvens",
                "Guide om priser → Infografik → YouTube-video → Podcast-avsnitt",
                "FAQ → Sociala medie-tips → E-bok → Webinar",
              ].map((item) => (
                <div key={item} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[14px] text-heading">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En artikel tar 4–6 timmar att skriva bra. Med repurposing får du 4 veckor av marknadsföring ur den.
            </p>

            {/* Steg 6: Mäta */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 6: Mäta resultat — track vad som fungerar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du behöver veta vad som fungerar. Utan mätningar kastar du tid på saker som inte rankar.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { metric: "Google Analytics", check: "Vilka artiklar får mest trafik?" },
                { metric: "Google Search Console", check: "Vilka ord rankar dina artiklar på?" },
                { metric: "Konvertering", check: "Vilka artiklar leder till kundkontakt?" },
              ].map((item) => (
                <div key={item.metric} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[14px] font-700 text-heading mb-1">{item.metric}</p>
                  <p className="text-[13px] text-muted">{item.check}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Om en artikel inte rankar efter 3 månader — uppdatera den. Lägg till mer innehål, fix titeln, använd bättre underrubriker.
            </p>

            {/* Distribution */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Bonus: Distribution — räcka ut med det du skriver
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En bra artikel är värdelös om ingen läser den. Distribuera:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Email-lista — skicka nya artiklar till dina subscribers",
                "LinkedIn — länka till artiklar för ett professionellt nätverk",
                "Instagram/Facebook — kort snippet + länk",
                "Kundsamtal — nämn relevanta artiklar när du pratar med folk",
                "Google My Business — länka till articles i dina inlägg",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Sammanfattning */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Sammanfattning — din content-strategi i 6 steg
            </h2>

            <div className="bg-surface border border-border rounded-xl p-6 mb-8">
              <div className="space-y-3">
                {[
                  "Keyword research — fråga dina kunder, använd Google suggestions",
                  "Content-kalender — planera: 1 artikel per månad minst",
                  "Välj rätt format — guides, jämförelser, prisguider rankar bäst",
                  "Skriv bra artiklar — H1/H2-struktur, 1500+ ord, länka internt",
                  "Repurposing — gör 4 sociala inlägg ur varje artikel",
                  "Mäta resultat — track trafik och ranking i Search Console",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary-light text-primary text-[12px] font-700 flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En bra content-strategi är inte rocketsciense. Det är planering, skrivande och konsistens. Om du gör detta i ett år kommer du ha en sajt som rankar på 50+ sökord och får 100+ besökare per månad helt gratis från Google. Det är värt det.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Behöver du hjälp? Jag kan granska din nuvarande strategi, identifiera vilka innehål som skulle rankas best, eller till och med skriva artiklarna åt dig. <a href="/tjanster/seo" className="text-primary hover:underline font-600">Läs mer om mina SEO-tjänster</a> eller <a href="/boka" className="text-primary hover:underline font-600">boka en tid för att prata strategi</a>.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "SEO för småföretag — 7 steg som faktiskt fungerar", href: "/blogg/seo-for-smaforetag" },
                { title: "Google Business Profile — Komplett guide för företagare", href: "/blogg/google-business-profile-guide" },
                { title: "Varför en snabb hemsida ger dig fler kunder", href: "/blogg/varfor-snabb-hemsida" },
                { title: "SEO-tjänster — så kan jag hjälpa", href: "/tjanster/seo" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors">
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">{link.title} →</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-800 text-white font-heading tracking-tight mb-3">
                Vill du bygga en content-strategi?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Jag kan hjälpa dig med keyword research, content-planering, och kan även skriva artiklarna. Boka en tid så pratar vi om vad som skulle fungera bäst för ditt företag.
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
