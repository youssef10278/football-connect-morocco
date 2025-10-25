/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // Pour éviter les problèmes avec les images statiques
  },
  output: 'standalone', // Pour optimiser le déploiement Docker
  experimental: {
    outputFileTracingRoot: undefined,
  },
  // Optimisations pour le déploiement
  swcMinify: true,
  compress: true,
}

module.exports = nextConfig;