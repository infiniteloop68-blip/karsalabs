import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pusat Sumber Daya Goletin — Panduan, Kalkulator, API & Riset | Karsasoft',
  description:
    'Pusat sumber daya resmi ekosistem Goletin Karsasoft: panduan implementasi AI finansial, kalkulator penghematan lisensi TCO, matriks regulasi PSAK & IFRS, dokumentasi REST API, silabus pelatihan, roadmap rilis, studi kasus industri, dan engineering blog.',
  keywords: [
    'sumber daya Goletin',
    'kalkulator lisensi office',
    'panduan PSAK 71 IFRS 9',
    'panduan PSAK 73',
    'dokumentasi API Goletin',
    'pelatihan akuntansi Goletin',
    'roadmap AI Karsasoft',
    'studi kasus software akuntansi',
    'engineering blog Goletin',
    'kedaulatan data finansial',
  ],
  alternates: {
    canonical: '/goletin/sumber-daya',
  },
  openGraph: {
    title: 'Pusat Sumber Daya Goletin — Panduan, Kalkulator, API & Riset | Karsasoft',
    description:
      'Akses panduan teknis, kalkulator ROI lisensi, matriks regulasi PSAK/IFRS, dokumentasi API v2, dan riset rekayasa software Goletin.',
    url: 'https://karsasoft.com/goletin/sumber-daya',
    images: ['/og-image.jpg'],
  },
};

export default function SumberDayaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
