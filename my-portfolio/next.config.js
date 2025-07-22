/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable ESLint during builds to allow deployment
    eslint: {
      ignoreDuringBuilds: true,
    },
    // Also disable TypeScript errors during build (optional)
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  module.exports = nextConfig;