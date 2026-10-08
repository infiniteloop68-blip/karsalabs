import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karsasoft — Ekosistem Perangkat Lunak Goletin',
    short_name: 'Karsasoft',
    description:
      'Perusahaan teknologi pengembang ekosistem perangkat lunak mandiri Goletin: AI, produktivitas kantor, ERP akuntansi, dan engine kepatuhan standar internasional.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#007D65',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
