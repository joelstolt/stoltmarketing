export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/avtal/"],
      },
    ],
    sitemap: "https://stoltmarketing.se/sitemap.xml",
  };
}
