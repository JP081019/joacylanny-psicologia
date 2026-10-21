import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  distDir: process.env.NODE_ENV === "production" ? ".next-build" : ".next",
  images: { formats: ["image/avif", "image/webp"] },
};

export default config;
