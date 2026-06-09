import { headers } from "next/headers";

export default async function robots() {
  const host = (await headers()).get("host") || "";

  // Preview-deployar (workers.dev m.m.) ska aldrig indexeras
  if (!host.endsWith("stoltmarketing.se")) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

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
