import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Redesign: originele foto's als AVIF of WebP via next/image.
  images: {
    formats: ["image/avif", "image/webp"],
    // Minder breedtes = kortere srcset in elke <img> = kleinere HTML.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
  },
};

export default nextConfig;
