import type { NextConfig } from "next";

const isExport = process.env.OUTPUT_EXPORT === 'true' || process.env.CF_PAGES === '1';

const nextConfig: NextConfig = isExport
  ? {
      output: 'export',
      images: { unoptimized: true },
    }
  : {
      async redirects() {
        return [
      {
        source: '/produk',
        destination: '/goletin#katalog',
        permanent: true,
      },
      {
        source: '/produk/yaycount',
        destination: '/goletin/yaycount',
        permanent: true,
      },
      {
        source: '/produk/ecl-pro',
        destination: '/goletin/ecl-pro',
        permanent: true,
      },
      {
        source: '/produk/indotax',
        destination: '/goletin/indotax',
        permanent: true,
      },
      {
        source: '/produk/jet-pro',
        destination: '/goletin/jet-pro',
        permanent: true,
      },
      {
        source: '/produk/ai',
        destination: '/goletin/ai',
        permanent: true,
      },
      {
        source: '/produk/goletin-ai',
        destination: '/goletin/ai',
        permanent: true,
      },
      {
        source: '/produk/lease',
        destination: '/goletin/lease',
        permanent: true,
      },
      {
        source: '/produk/lease-engine',
        destination: '/goletin/lease',
        permanent: true,
      },
      {
        source: '/goletin/lease-engine',
        destination: '/goletin/lease',
        permanent: true,
      },
      {
        source: '/produk/sampling',
        destination: '/goletin/sampling-pro',
        permanent: true,
      },
      {
        source: '/produk/sampling-pro',
        destination: '/goletin/sampling-pro',
        permanent: true,
      },
      {
        source: '/mitra',
        destination: '/goletin/mitra',
        permanent: true,
      },
      {
        source: '/ekosistem',
        destination: '/goletin',
        permanent: true,
      },
      {
        source: '/layanan',
        destination: '/solusi',
        permanent: true,
      },
      {
        source: '/goletin/support',
        destination: '/goletin/dukungan',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/peta-situs',
        permanent: true,
      },
      {
        source: '/kebijakan-privasi',
        destination: '/privasi',
        permanent: true,
      },
      {
        source: '/goletin/paperless-audit',
        destination: '/goletin/icofr-pro',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
