/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export", // Add this line for static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static export if using external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

