/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/v2',
  assetPrefix: '/v2',
  // Prefiks dla zwykłych linków do plików z public/ (np. druki do pobrania)
  env: { NEXT_PUBLIC_BASE_PATH: '/v2' },
  images: { unoptimized: true },
}
module.exports = nextConfig
