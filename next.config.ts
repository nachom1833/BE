import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SITE_URL: process.env.SITE_URL || "https://be-studio-site.vercel.app",
  },
};

export default nextConfig;
