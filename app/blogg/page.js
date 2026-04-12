"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal, Badge, PageHero } from "@/components/ui";

const allPosts = [
  /* ── Befintliga ── */
  {
    slug: "vad-kostar-en-hemsida",
    title: "Vad kostar en hemsida 2026? Komplett prisguide för företag",
    excerpt:
      "Från gratis-verktyg till skräddarsydda lösningar. Vad du faktiskt betalar för, vad som är värt pengarna, och var du bör vara skeptisk.",
    date: "2026-03-15",
    readTime: "9 min",
    category: "Guide",
  },
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
      "Du behöver inte en byrå eller en stor budget för att synas på Google. Dessa 7 steg kan du göra själv — och de ger resultat.",
    date: "2026-03-15",
    readTime: "10 min",
    category: "SEO",
  },
  /* ── Nya — publiceras en per vecka ── */
  {
    slug: "lokal-seo-guide",
    title: "Lokal SEO — Så syns ditt företag i Google Maps och lokala sökningar",
    excerpt:
      "Komplett guide till lokal SEO. Google Business Profile, lokala sökord, recensioner och NAP-konsistens — steg för steg.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Guide",
  },
  {
    slug: "webbdesign-trender-2026",
    title: "Webbdesign-trender 2026 — Vad som faktiskt spelar roll",
    excerpt:
      "AI, bento grids, mikroanimationer och tillgänglighet. De trender som faktiskt gör din sajt bättre — och de du kan skippa.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Design",
  },
  {
    slug: "ai-for-foretag",
    title: "AI för företag 2026 — Praktiska användningsområden som ger resultat",
    excerpt:
      "Chatbots, automatisering, content och kundservice. Konkreta AI-användningsområden utan hype — och var du börjar.",
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
      "DIY vs byrå — dolda kostnader, tidsåtgång och vad som faktiskt lönar sig beroende på ditt behov.",
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
          subtitle="Praktiska artiklar för dig som vill förstå vad som faktiskt gör skillnad digitalt — utan buzzwords."
        />

        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <a
                    href={`/blogg/${post.slug}`}
                    className="group block bg-surface border border-border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(29,78,216,0.06)]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[13px] text-muted">
                        <Calendar size={12} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5 text-[13px] text-muted">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-[20px] sm:text-[24px] font-800 text-heading font-heading tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors">
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
              <h2 className="font-heading font-800 text-[clamp(24px,3.5vw,36px)] leading-tight tracking-tight text-heading mb-4">
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
