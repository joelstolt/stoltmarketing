import articles from "./blog-articles.json";

const siteUrl = "https://www.stoltmarketing.se";

function blockText(block) {
  const texts = [block.title, block.text].filter(Boolean);
  if (block.items) {
    texts.push(...block.items.map((item) => typeof item === "string"
      ? item
      : [item.title, item.label, item.text].filter(Boolean).join(" ")));
  }
  for (const side of [block.left, block.right].filter(Boolean)) {
    texts.push(side.title, ...side.items);
  }
  return texts.join(" ");
}

export function blogReadTime(article) {
  const text = article.blocks.map(blockText).join(" ");
  const words = text.trim().split(/\s+/u).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min`;
}

export function formatBlogDate(date) {
  return new Intl.DateTimeFormat("sv-SE", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export function getBlogArticle(slug) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) throw new Error(`Unknown blog article: ${slug}`);
  return {
    ...article,
    publishedDate: article.publishedDate,
    dateDisplay: formatBlogDate(article.publishedDate),
    readTime: blogReadTime(article),
  };
}

// Send only card data to the index's interactive filter, not all article blocks.
export function getBlogPosts() {
  return articles.map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.description,
    category: article.category,
    publishedDate: article.publishedDate,
    updatedDate: article.updatedDate,
    updatedDisplay: formatBlogDate(article.updatedDate),
    readTime: blogReadTime(article),
  })).sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}

export function getBlogMetadata(slug) {
  const article = getBlogArticle(slug);
  const url = `${siteUrl}/blogg/${slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: ["Joel Stolt"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export function getBlogSchema(slug) {
  const article = getBlogArticle(slug);
  const url = `${siteUrl}/blogg/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        image: [`${siteUrl}/og-image.png`],
        mainEntityOfPage: url,
        inLanguage: "sv-SE",
        headline: article.h1,
        description: article.description,
        author: { "@type": "Person", name: "Joel Stolt" },
        publisher: { "@type": "Organization", name: "Stolt Marketing", url: siteUrl },
        datePublished: article.publishedDate,
        dateModified: article.updatedDate,
        articleSection: article.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blogg", item: `${siteUrl}/blogg` },
          { "@type": "ListItem", position: 3, name: article.breadcrumbName, item: url },
        ],
      },
    ],
  };
}
