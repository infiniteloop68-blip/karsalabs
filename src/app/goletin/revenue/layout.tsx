import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revenue Pro — Pengakuan Pendapatan PSAK 72 & IFRS 15 Otomatis | Karsasoft',
  description:
    'Engine pengakuan pendapatan 5-tahap PSAK 72 & IFRS 15: alokasi Standalone Selling Price (SSP) bundling, pendapatan tangguhan, amortisasi otomatis, dan pengungkapan CALK audit.',
  keywords: [
    'Revenue Pro',
    'PSAK 72',
    'IFRS 15',
    'pengakuan pendapatan',
    'Standalone Selling Price',
    'Contract Asset',
    'Deferred Revenue',
    'software akuntansi PSAK 72',
  ],
  alternates: {
    canonical: '/goletin/revenue',
  },
  openGraph: {
    title: 'Revenue Pro — Pengakuan Pendapatan PSAK 72 & IFRS 15',
    description:
      'Otomatisasi 5-langkah pengakuan pendapatan kontrak pelanggan, alokasi SSP proporsional, dan rekonsiliasi aset/liabilitas kontrak.',
    url: 'https://karsasoft.com/goletin/revenue',
    images: ['/og-image.jpg'],
  },
};

export default function RevenueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
