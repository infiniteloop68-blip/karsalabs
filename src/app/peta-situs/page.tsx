import React from 'react';
import type { Metadata } from 'next';
import { SitemapClient } from '@/components/SitemapClient';

export const metadata: Metadata = {
  title: 'Peta Situs Karsasoft & Ekosistem Goletin — Direktori Resmi',
  description:
    'Peta situs resmi PT Karsa Solusi Teknologi. Direktori lengkap seluruh produk perangkat lunak Goletin, modul kepatuhan PSAK/IFRS, audit forensik, solusi vertikal industri, dan informasi legal.',
  alternates: {
    canonical: '/peta-situs',
  },
  openGraph: {
    title: 'Peta Situs Karsasoft & Ekosistem Goletin — Direktori Resmi',
    description:
      'Peta situs resmi PT Karsa Solusi Teknologi. Direktori lengkap seluruh produk perangkat lunak Goletin.',
    url: 'https://karsasoft.com/peta-situs',
    images: ['/og-image.jpg'],
  },
};

export default function PetaSitusPage() {
  return <SitemapClient />;
}
