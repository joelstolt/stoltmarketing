/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
      // Old blog/misc pages
      {
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
      {
        source: "/jobba-hos-oss/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
