import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    loader: "default",
    path: "/",
    formats: ["image/avif", "image/webp"], // keep AVIF + WebP
    minimumCacheTTL: 60, // cache for 1 minute (adjust as needed)
  },
};

export default nextConfig;
