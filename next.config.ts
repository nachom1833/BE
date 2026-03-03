import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SITE_URL: process.env.SITE_URL || "https://yourdomain.com",
  },
};

export default nextConfig;
