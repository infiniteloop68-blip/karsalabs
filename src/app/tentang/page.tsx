import React from 'react';
import type { Metadata } from 'next';
import { TentangClient } from '@/components/TentangClient';

export const metadata: Metadata = {
  title: 'Tentang Karsasoft — Kedaulatan Rekayasa Perangkat Lunak Indonesia',
  description:
    'Profil dan filosofi rekayasa PT Karsa Solusi Teknologi (Karsasoft). Perusahaan teknologi perangkat lunak mandiri pengembang Ekosistem Goletin berstandar PSAK, IFRS, dan kedaulatan data nasional.',
  alternates: {
    canonical: '/tentang',
  },
  openGraph: {
    title: 'Tentang Karsasoft — Kedaulatan Rekayasa Perangkat Lunak Indonesia',
    description:
      'Profil dan filosofi rekayasa PT Karsa Solusi Teknologi pengembang Ekosistem Goletin.',
    url: 'https://karsasoft.com/tentang',
    images: ['/og-image.jpg'],
  },
};

export default function TentangPage() {
  return <TentangClient />;
}
