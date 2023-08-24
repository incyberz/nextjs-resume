/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
