"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal, Badge, PageHero } from "@/components/ui";

const posts = [
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
];

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
