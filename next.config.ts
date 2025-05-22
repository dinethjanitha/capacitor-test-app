import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  images: {
    domains: [
      "http://localhost:3005",
      "img.daisyui.com",
      "streamback-production.up.railway.app",
      "st3.depositphotos.com",
      "localhost",
      "source.unsplash.com",
      "images.unsplash.com",
      "marketplace.canva.com",
      "example.com",
      "addstream-production.up.railway.app"
    ],
  },
};

export default nextConfig;
