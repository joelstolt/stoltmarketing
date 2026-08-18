"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal, Badge, PageHero } from "@/components/ui";

const allPosts = [
  /* ── Befintliga ── */
  // vad-kostar-en-hemsida är numera pillar-sidan /vad-kostar-en-hemsida (301 i middleware).
  {
    slug: "wordpress-vs-nextjs",
    title: "WordPress vs Next.js — vilket passar ditt företag?",
    excerpt:
      "Två helt olika sätt att bygga webb. Jag har levererat 150+ projekt i båda. Här är en ärlig jämförelse utan agenda.",
    date: "2026-03-15",
    readTime: "8 min",
    category: "Teknik",
  },
  {
    slug: "seo-for-smaforetag",
    title: "SEO för småföretag — 7 steg som faktiskt fungerar",
    excerpt:
      "Du behöver inte en byrå eller en stor budget för att synas på Google. Dessa 7 steg kan du göra själv, och de ger resultat.",
    date: "2026-03-15",
    readTime: "10 min",
    category: "SEO",
  },
  /* ── Nya, publiceras en per vecka ── */
  {
    slug: "lokal-seo-guide",
    title: "Lokal SEO — Så syns ditt företag i Google Maps och lokala sökningar",
    excerpt:
      "Komplett guide till lokal SEO. Google Business Profile, lokala sökord, recensioner och NAP-konsistens, steg för steg.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Guide",
  },
  {
    slug: "webbdesign-trender-2026",
    title: "Webbdesign-trender 2026 — Vad som faktiskt spelar roll",
    excerpt:
      "AI, bento grids, mikroanimationer och tillgänglighet. De trender som faktiskt gör din sajt bättre, och de du kan skippa.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Design",
  },
  {
    slug: "ai-for-foretag",
    title: "AI för företag 2026 — Praktiska användningsområden som ger resultat",
    excerpt:
      "Chatbots, automatisering, content och kundservice. Konkreta AI-användningsområden utan hype, och var du börjar.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "AI",
  },
  {
    slug: "google-ads-vs-seo",
    title: "Google Ads vs SEO — Vad ska du satsa på?",
    excerpt:
      "Betald vs organisk trafik. Kort- och långsiktig ROI, kostnadsjämförelse och när du bör kombinera båda.",
    date: "2026-04-19",
    readTime: "7 min",
    category: "Strategi",
  },
  {
    slug: "hemsida-som-saljer",
    title: "5 saker som skiljer en hemsida som säljer från en som bara finns",
    excerpt:
      "Värdeerbjudande, social proof, CTAs, hastighet och SEO. Konkreta skillnader mellan sajter som konverterar och de som inte gör det.",
    date: "2026-04-26",
    readTime: "8 min",
    category: "Konvertering",
  },
  {
    slug: "wordpress-eller-webbyra",
    title: "Bygga hemsida själv eller anlita en webbyrå? Ärlig jämförelse",
    excerpt:
      "DIY vs byrå, dolda kostnader, tidsåtgång och vad som faktiskt lönar sig beroende på ditt behov.",
    date: "2026-05-03",
    readTime: "9 min",
    category: "Guide",
  },
  {
    slug: "e-handel-guide",
    title: "Starta e-handel 2026 — Komplett guide för svenska företag",
    excerpt:
      "Plattformsjämförelse, betalning, frakt, juridik och kostnader. Allt du behöver veta för att starta din webbutik.",
    date: "2026-05-10",
    readTime: "10 min",
    category: "E-handel",
  },
  {
    slug: "google-business-profile-guide",
    title: "Google Business Profile — Komplett guide för företagare 2026",
    excerpt:
      "Steg-för-steg: skapa, optimera och ranka i Google Maps. Kategorier, bilder, recensioner och vanliga misstag.",
    date: "2026-05-17",
    readTime: "8 min",
    category: "Guide",
  },
  {
    slug: "varfor-snabb-hemsida",
    title: "Varför en snabb hemsida ger dig fler kunder (och bättre SEO)",
    excerpt:
      "Core Web Vitals, vad som gör sajter långsamma och praktiska fixes. Varje sekunds fördröjning kostar dig besökare.",
    date: "2026-05-24",
    readTime: "7 min",
    category: "Prestanda",
  },
  {
    slug: "content-strategi-smaforetag",
    title: "Content-strategi för småföretag — Så skapar du innehåll som rankar",
    excerpt:
      "Hitta ämnen, skapa en publiceringsplan och mät resultat. Praktisk guide till content marketing utan stor budget.",
    date: "2026-05-31",
    readTime: "10 min",
    category: "Marknadsföring",
  },

  /* Runda 2 (juli-aug 2026), publiceras med spridning via datumfiltret nedan */
  {
    slug: "valja-seo-byra",
    title: "Så väljer du rätt SEO-byrå: 6 tecken på att du blir lurad",
    excerpt:
      "SEO-branschen är full av tomma löften och luddiga rapporter. Så skiljer du en byrå som faktiskt levererar från en som bara fakturerar.",
    date: "2026-07-14",
    readTime: "9 min",
    category: "SEO",
  },
  {
    slug: "hemsida-inga-kunder",
    title: "Därför får din hemsida inga kunder: 7 orsaker (och hur du fixar dem)",
    excerpt:
      "Snygg sajt men tyst telefon? Problemet är nästan aldrig designen. Här är de 7 vanligaste orsakerna till att en hemsida inte drar in förfrågningar.",
    date: "2026-07-16",
    readTime: "9 min",
    category: "Konvertering",
  },
  {
    slug: "seo-tips-smaforetag",
    title: "17 SEO-tips för småföretag som faktiskt ger resultat 2026",
    excerpt:
      "Inga hacks, ingen teori. 17 konkreta SEO-tips du kan börja med idag för att synas mer på Google, sorterade från enklast till mest värdefulla.",
    date: "2026-07-18",
    readTime: "11 min",
    category: "SEO",
  },
  {
    slug: "vad-kostar-google-ads",
    title: "Vad kostar Google Ads i Sverige 2026? En ärlig prisguide",
    excerpt:
      "Klickpriser, månadsbudget och byråarvoden, uppdelat. Vad du realistiskt behöver lägga för att Google Ads ska löna sig för ett litet företag.",
    date: "2026-07-21",
    readTime: "9 min",
    category: "Annonsering",
  },
  {
    slug: "chatbot-for-foretag",
    title: "Chatbot för företag: så fångar din hemsida fler leads dygnet runt",
    excerpt:
      "En modern AI-chatbot svarar kunder direkt, kvalificerar dem och fångar leads även när du sover. Så funkar det, vad det kostar och när det lönar sig.",
    date: "2026-07-23",
    readTime: "8 min",
    category: "AI",
  },
  {
    slug: "seo-analys-sjalv",
    title: "SEO-analys: så gör du en själv på 30 minuter (gratis checklista)",
    excerpt:
      "Du behöver inga dyra verktyg för att förstå varför du inte rankar. Gör en enkel SEO-analys själv på en halvtimme med den här steg-för-steg-checklistan.",
    date: "2026-07-25",
    readTime: "10 min",
    category: "SEO",
  },
  {
    slug: "vad-kostar-webbutik",
    title: "Vad kostar en webbutik 2026? Komplett prisguide för e-handel",
    excerpt:
      "Plattform, bygge, betalning, frakt och drift. Vad en webbutik faktiskt kostar att starta och driva, från billigaste vägen till skräddarsytt.",
    date: "2026-07-28",
    readTime: "10 min",
    category: "E-handel",
  },
  {
    slug: "landningssida-som-konverterar",
    title: "Landningssida som konverterar: anatomin bakom en sida som säljer",
    excerpt:
      "En bra landningssida har ett jobb: få besökaren att ta nästa steg. Här är de sektioner, i rätt ordning, som gör en sida som faktiskt konverterar.",
    date: "2026-07-30",
    readTime: "9 min",
    category: "Konvertering",
  },
  {
    slug: "sokordsanalys-nyborjare",
    title: "Sökordsanalys för nybörjare: hitta orden dina kunder googlar",
    excerpt:
      "Rätt sökord är skillnaden mellan att synas för köpare och att skriva för ingen. Så gör du en sökordsanalys från grunden, även utan betalverktyg.",
    date: "2026-08-01",
    readTime: "10 min",
    category: "SEO",
  },
  {
    slug: "ai-verktyg-smaforetag",
    title: "12 AI-verktyg varje småföretagare borde testa 2026",
    excerpt:
      "Praktiska AI-verktyg som sparar tid på riktigt, för text, bild, kundservice, bokföring och marknadsföring. Flera gratis att komma igång med.",
    date: "2026-08-04",
    readTime: "9 min",
    category: "AI",
  },
  {
    slug: "betallosningar-webbutik",
    title: "Swish, Klarna eller kort? Guide till betallösningar i webbutiken",
    excerpt:
      "Rätt betalsätt kan lyfta din konvertering rejält, fel avgifter kan äta din marginal. Så väljer du betallösningar för din svenska webbutik.",
    date: "2026-08-06",
    readTime: "9 min",
    category: "E-handel",
  },
  {
    slug: "google-ads-byra-eller-sjalv",
    title: "Google Ads-byrå eller sköta det själv? Så avgör du",
    excerpt:
      "Google Ads ser enkelt ut tills du ser fakturan. Så avgör du om du ska köra själv, anlita en byrå, eller börja själv och lämna över senare.",
    date: "2026-08-08",
    readTime: "8 min",
    category: "Annonsering",
  },
  {
    slug: "teknisk-seo-guide",
    title: "Teknisk SEO: nybörjarguiden till en sajt Google älskar",
    excerpt:
      "Teknisk SEO låter skrämmande men handlar om enkla saker: att Google kan hitta, läsa och lita på din sajt. Här är grunderna utan jargong.",
    date: "2026-08-11",
    readTime: "10 min",
    category: "SEO",
  },
  {
    slug: "konverteringsoptimering-tips",
    title: "Konverteringsoptimering: 10 ändringar som ger fler förfrågningar",
    excerpt:
      "Samma trafik, fler kunder. 10 konkreta ändringar på sajten som ökar andelen besökare som faktiskt hör av sig, sorterade efter effekt.",
    date: "2026-08-13",
    readTime: "9 min",
    category: "Konvertering",
  },
  {
    slug: "marknadsforing-smaforetag",
    title: "Marknadsföring för småföretag: mest resultat för minsta budget",
    excerpt:
      "Du behöver inte göra allt. Så fördelar du en liten marknadsföringsbudget där den ger mest, och i vilken ordning du bör satsa.",
    date: "2026-08-15",
    readTime: "10 min",
    category: "Marknadsföring",
  },
  {
    slug: "checklista-ny-hemsida",
    title: "Lansera ny hemsida: 25-punkters checklista innan du går live",
    excerpt:
      "Innan du trycker på publicera: 25 saker att bocka av så att SEO, spårning, formulär och prestanda funkar från dag ett, inte tappas tyst.",
    date: "2026-08-18",
    readTime: "9 min",
    category: "Guide",
  },
  {
    slug: "automatisera-med-ai",
    title: "Automatisera det tråkiga: 8 AI-exempel som sparar tid för småföretag",
    excerpt:
      "Repetitivt arbete äter dina timmar. Här är 8 konkreta sätt att låta AI och automation ta hand om det tråkiga, med exempel från riktiga småföretag.",
    date: "2026-08-20",
    readTime: "9 min",
    category: "AI",
  },
  {
    slug: "valja-domannamn",
    title: "Välja domännamn till företaget: komplett guide (och vanliga misstag)",
    excerpt:
      "Ditt domännamn är en av få digitala beslut du sällan ändrar. Så väljer du rätt, .se eller .com, och undviker misstagen som kostar dig senare.",
    date: "2026-08-22",
    readTime: "8 min",
    category: "Guide",
  },
  {
    slug: "moms-regler-e-handel",
    title: "Moms och regler för e-handel: det här måste du ha koll på",
    excerpt:
      "Innan du säljer en enda produkt online: en begriplig genomgång av moms, ångerrätt, villkor och GDPR för svensk e-handel, utan juristsvenska.",
    date: "2026-08-25",
    readTime: "9 min",
    category: "E-handel",
  },
  {
    slug: "e-postmarknadsforing-smaforetag",
    title: "E-postmarknadsföring för småföretag: bygg en lista som säljer",
    excerpt:
      "E-post är fortfarande den kanal som ger mest tillbaka per krona. Så bygger du en e-postlista från noll och gör den till återkommande kunder.",
    date: "2026-08-27",
    readTime: "10 min",
    category: "Marknadsföring",
  },
];

/* Visa bara artiklar vars publiceringsdatum har passerat */
const today = new Date().toISOString().slice(0, 10);
const posts = allPosts
  .filter((p) => p.date <= today)
  .sort((a, b) => (a.date > b.date ? -1 : 1));

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BloggPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Start", href: "/" },
            { label: "Blogg" },
          ]}
          badge="Blogg"
          title="Guider, tips och insikter om webb, SEO och AI."
          subtitle="Praktiska artiklar för dig som vill förstå vad som faktiskt gör skillnad digitalt, utan buzzwords."
        />

        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <a
                    href={`/blogg/${post.slug}`}
                    className="group block bg-surface border border-border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(242,194,48,0.14)]"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase shrink-0">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[13px] text-muted whitespace-nowrap shrink-0">
                        <Calendar size={12} className="shrink-0" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5 text-[13px] text-muted whitespace-nowrap shrink-0">
                        <Clock size={12} className="shrink-0" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-[20px] sm:text-[24px] font-600 text-heading font-heading tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[15px] text-body leading-relaxed mb-4 max-w-[640px]">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-[14px] font-600 text-primary group-hover:gap-3 transition-all">
                      Läs artikel
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="font-heading font-600 text-[clamp(24px,3.5vw,36px)] leading-tight tracking-tight text-heading mb-4">
                Vill du ha hjälp med webb, SEO eller AI?
              </h2>
              <p className="text-[16px] text-body mb-8 max-w-[480px] mx-auto">
                Boka en kostnadsfri genomgång så tittar vi på ditt nuläge
                tillsammans.
              </p>
              <a href="/boka" className="premium-btn">
                <span>Boka kostnadsfri genomgång</span>
                <ArrowRight size={16} className="opacity-80" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
