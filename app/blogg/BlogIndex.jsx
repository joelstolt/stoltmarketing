"use client";

import { useState } from "react";

export default function BlogIndex({ posts }) {
  const [category, setCategory] = useState("Alla ämnen");
  const [search, setSearch] = useState("");
  const categories = ["Alla ämnen", ...new Set(posts.map((post) => post.category))];
  const query = search.trim().toLocaleLowerCase("sv-SE");
  const filtered = posts.filter((post) =>
    (category === "Alla ämnen" || post.category === category) &&
    (!query || `${post.title} ${post.excerpt}`.toLocaleLowerCase("sv-SE").includes(query))
  );

  return (
    <section aria-labelledby="blog-articles" className="px-5 sm:px-8 py-10 sm:py-14">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-5">
          <div>
            <h2 id="blog-articles" className="font-heading font-600 text-[24px] sm:text-[28px] text-heading">Alla artiklar</h2>
            <p className="text-[15px] text-body mt-2">Alla 32 artiklar genomgångna 4 oktober 2026.</p>
          </div>
          <div className="sm:w-80">
            <label htmlFor="blog-search" className="block text-[14px] font-600 text-heading mb-2">Sök bland artiklarna</label>
            <input id="blog-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Till exempel formulär eller moms" className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-heading text-[16px] placeholder:text-muted focus:border-primary" />
          </div>
        </div>
        <fieldset className="mb-6">
          <legend className="text-[14px] text-heading font-600 mb-3">Filtrera på ämne</legend>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2.5 text-[14px] font-600 cursor-pointer transition-colors ${category === item ? "bg-primary text-[#191405] border-primary" : "bg-surface text-heading border-border hover:border-primary"}`}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <p aria-live="polite" aria-atomic="true" className="text-[14px] text-muted mb-5">{filtered.length} av {posts.length} artiklar visas.</p>
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-border p-6">
            <p className="text-body mb-4">Inga artiklar matchar. Prova ett annat sökord eller visa alla ämnen.</p>
            <button type="button" className="text-primary font-600 cursor-pointer underline" onClick={() => { setCategory("Alla ämnen"); setSearch(""); }}>Återställ sökning och filter</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {filtered.map((post) => (
              <article key={post.slug} className="rounded-xl bg-surface border border-border p-5 sm:p-6">
                <p className="text-[14px] text-primary font-600 mb-3">{post.category}</p>
                <h3 className="font-heading text-[21px] font-600 leading-tight text-heading mb-3">
                  <a href={`/blogg/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</a>
                </h3>
                <p className="text-[15px] text-body leading-relaxed mb-4">{post.excerpt}</p>
                <p className="text-[13px] text-muted leading-relaxed">Joel Stolt · {post.readTime} läsning</p>
                <p className="text-[13px] text-muted mt-1">Genomgången <time dateTime={post.updatedDate}>{post.updatedDisplay}</time></p>
              </article>
            ))}
          </div>
        )}
        <aside className="border-t border-border mt-10 pt-7">
          <h2 className="font-heading font-600 text-[21px] text-heading mb-3">Jämför hjälp och priser</h2>
          <p className="text-[15px] text-body leading-relaxed max-w-2xl mb-4">Om du ska köpa hjälp finns erbjudandets omfattning och villkor på tjänste- och prissidorna. Bloggens räkneexempel är underlag för beslut, ingen garanti för utfallet.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[15px] text-primary font-600">
            <a className="underline hover:text-heading" href="/priser">Hemsidans paket</a>
            <a className="underline hover:text-heading" href="/forfragningar">Förfrågningsrutan</a>
            <a className="underline hover:text-heading" href="/tjanster/seo">SEO-arbetet</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
