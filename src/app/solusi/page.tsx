import React from 'react';
import type { Metadata } from 'next';
import { SolusiClient } from '@/components/SolusiClient';

export const metadata: Metadata = {
  title: 'Solusi Industri — Ekosistem Perangkat Lunak Goletin & Karsasoft',
  description:
    'Solusi perangkat lunak berdaulat buatan Indonesia untuk berbagai sektor: Perbankan & Lembaga Keuangan, Korporasi Modern, Yayasan & Pendidikan ISAK 35, Kantor Akuntan Publik, dan Instansi Pemerintah SPBE.',
  alternates: {
    canonical: '/solusi',
  },
  openGraph: {
    title: 'Solusi Industri — Ekosistem Perangkat Lunak Goletin & Karsasoft',
    description:
      'Solusi perangkat lunak berdaulat untuk Perbankan, Korporasi, Yayasan, KAP, dan Instansi Pemerintah.',
    url: 'https://karsasoft.com/solusi',
    images: ['/og-image.jpg'],
  },
};

export default function SolusiPage() {
  return <SolusiClient />;
}
