export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/avtal/"],
      },
    ],
    sitemap: "https://www.stoltmarketing.se/sitemap.xml",
  };
}
