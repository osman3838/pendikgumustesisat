import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.aymar.tech",
      },
      {
        protocol: "https",
        hostname: "app.aymar.tech",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.cloudfront.net",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/lp/tikaniklik-acma",
        destination: "/hizmetler/tikaniklik-acma",
        permanent: true,
      },
      {
        source: "/kartal-tuzla-tesisatci",
        destination: "/kartal-tesisatci",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
