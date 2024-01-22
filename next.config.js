/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 100,
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    PRIVATE_KEY: "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",
    EMAIL: "aniketsuryavanshi093@gmail.com",
  },
};

module.exports = nextConfig;
