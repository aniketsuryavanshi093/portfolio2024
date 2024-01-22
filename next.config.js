/** @type {import('next').NextConfig} */
const nextConfig = {
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
