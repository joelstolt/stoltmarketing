import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Gör Cloudflare-bindings/env tillgängliga under `next dev`.
// Får inte köras i Vercels byggmiljö — workerd-binären startar inte där.
if (!process.env.VERCEL) {
  initOpenNextCloudflareForDev();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Splittest-varianten /b är nu startsidan
      { source: "/b", destination: "/", permanent: true },
      /* Dubblett borttagen 2026-08-23. Två sidor täckte exakt samma ämne med
         nästan samma titel ("Vad kostar Google Ads 2026?"), och Google fick
         välja. Uppmätt i GSC över 90 dagar:

           /blogg/vad-kostar-google-ads   position 19,6   1 095 visningar
           /vad-kostar-google-ads         position 70-77     82 visningar

         Riktningen är vald efter datan, inte efter vilken URL som är snyggast:
         att peka den starka till den svaga hade kastat bort position 19,6. */
      {
        source: "/vad-kostar-google-ads",
        destination: "/blogg/vad-kostar-google-ads",
        permanent: true,
      },
      // Döda URL:er som cirkulerar externt (konsultanalys 2026-08-23):
      // inga interna länkar, men de ska landa rätt i stället för 404.
      {
        source: "/om-mig",
        destination: "/om",
        permanent: true,
      },
      {
        source: "/tjanster/tillganglighet",
        destination: "/tillganglighet",
        permanent: true,
      },
      // Old service pages
      {
        source: "/hemsida-fastpris",
        destination: "/tjanster/webbutveckling",
        permanent: true,
      },
      {
        source: "/fast-manadspris",
        destination: "/tjanster/managed-hemsida",
        permanent: true,
      },
      {
        source: "/serviceavtal-hemsidor",
        destination: "/tjanster/managed-hemsida",
        permanent: true,
      },
      {
        source: "/seo",
        destination: "/tjanster/seo",
        permanent: true,
      },
      // Old reference/portfolio pages
      {
        source: "/referenser",
        destination: "/projekt",
        permanent: true,
      },
      {
        source: "/referenskund",
        destination: "/projekt",
        permanent: true,
      },
      // Old contact/lead pages
      {
        source: "/gratis-seo-analys",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/offertforfragan",
        destination: "/kontakt",
        permanent: true,
      },
      // Old misc pages
      {
        source: "/jobba-hos-oss",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/:slug",
        destination: "/om",
        permanent: true,
      },
      {
        source: "/stolt-marketing-inleder-samarbete-med-sitenest",
        destination: "/",
        permanent: true,
      },
      // Catch WordPress trailing slashes
      {
        source: "/hemsida-fastpris/",
        destination: "/tjanster/webbutveckling",
        permanent: true,
      },
      {
        source: "/fast-manadspris/",
        destination: "/tjanster/managed-hemsida",
        permanent: true,
      },
      {
        source: "/serviceavtal-hemsidor/",
        destination: "/tjanster/managed-hemsida",
        permanent: true,
      },
      {
        source: "/seo/",
        destination: "/tjanster/seo",
        permanent: true,
      },
      {
        source: "/referenser/",
        destination: "/projekt",
        permanent: true,
      },
      {
        source: "/referenskund/",
        destination: "/projekt",
        permanent: true,
      },
      {
        source: "/gratis-seo-analys/",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/offertforfragan/",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/jobba-hos-oss/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
