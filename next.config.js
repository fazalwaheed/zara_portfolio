/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 👇 Disable ESLint during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;