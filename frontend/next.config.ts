import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ['williamfrank.duckdns.org', 'localhost', 'williamfrank.vercel.app'],
    unoptimized: true,
  },
};

export default nextConfig;
