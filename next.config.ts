import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "randomuser.me"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;
