/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // Pour éviter les problèmes avec les images statiques
  },
  // Optimisations pour le déploiement
  swcMinify: true,
  compress: true,
  // Configuration pour Railway
  env: {
    CUSTOM_KEY: 'my-value',
  },
}

module.exports = nextConfig;