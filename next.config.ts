import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Redesign: originele foto's als AVIF of WebP via next/image.
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
