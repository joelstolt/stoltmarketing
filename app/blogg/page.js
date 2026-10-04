import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogIndex from "./BlogIndex";
import { getBlogPosts } from "@/lib/blog-data";

const startingPoints = [
  { title: "Hemsidan ger inga kontakter", href: "/blogg/hemsida-inga-kunder", text: "Avgränsa problemet med trafik, erbjudande och kontaktleverans." },
  { title: "Gör en första SEO-kontroll", href: "/blogg/seo-analys-sjalv", text: "En halvtimmes kontroll, verkligt analysutdrag och användbar checklista." },
  { title: "Räkna på Google Ads", href: "/blogg/vad-kostar-google-ads", text: "Håll mediebudget, arvode, omsättning och täckningsbidrag isär." },
  { title: "Prova AI i en enda uppgift", href: "/blogg/ai-for-foretag", text: "Välj ett avgränsat test och bedöm nyttan efter granskning." },
];

export default function BloggPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Start", item: "https://www.stoltmarketing.se" },
            { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
          ],
        }) }} />
        <section className="hero-dark px-5 sm:px-8 pt-28 sm:pt-32 pb-10 sm:pb-12">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Brödsmulor" className="text-[14px] text-muted mb-5">
              <a href="/" className="hover:text-heading">Start</a>
              <span aria-hidden="true" className="mx-2">/</span>
              <span aria-current="page">Blogg</span>
            </nav>
            <p className="text-primary font-600 mb-3">Skrivet av Joel Stolt</p>
            <h1 className="font-heading text-[clamp(30px,5vw,48px)] font-600 text-heading leading-tight max-w-3xl mb-5">
              Praktisk hjälp med hemsidan, sök och kundkontakten.
            </h1>
            <p className="text-[17px] text-body leading-relaxed max-w-2xl">
              Välj ett problem du vill lösa. Här finns arbetsguider, checklistor och köpunderlag med tydliga exempel och avgränsningar.
            </p>
          </div>
        </section>
        <section aria-labelledby="blog-start" className="px-5 sm:px-8 pt-10 sm:pt-12">
          <div className="max-w-5xl mx-auto">
            <h2 id="blog-start" className="font-heading text-[24px] sm:text-[28px] font-600 text-heading mb-5">Börja med det du behöver</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {startingPoints.map((item) => (
                <a key={item.href} href={item.href} className="group block rounded-xl bg-surface border border-border p-5 hover:border-primary/50 transition-colors">
                  <h3 className="font-heading font-600 text-[19px] text-heading group-hover:text-primary mb-2">{item.title}</h3>
                  <p className="text-[15px] text-body leading-relaxed">{item.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
        <BlogIndex posts={getBlogPosts()} />
      </main>
      <Footer />
    </>
  );
}
