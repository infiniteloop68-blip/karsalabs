import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lease Engine — Amortisasi Sewa PSAK 73 / IFRS 16 Otomatis',
  description:
    'Perhitungan otomatis Right-of-Use (ROU) Asset, liabilitas sewa, modifikasi kontrak, dan jadwal amortisasi ribuan kontrak sesuai standar akuntansi sewa PSAK 73 & IFRS 16.',
  keywords: [
    'Lease Engine',
    'PSAK 73',
    'IFRS 16',
    'akuntansi sewa',
    'ROU Asset kalkulator',
    'liabilitas sewa',
    'amortisasi sewa Indonesia',
  ],
  alternates: {
    canonical: '/goletin/lease',
  },
  openGraph: {
    title: 'Lease Engine — Amortisasi Sewa PSAK 73 / IFRS 16 Otomatis',
    description:
      'Engine kalkulasi Right-of-Use Asset dan liabilitas sewa multi-kontrak sesuai PSAK 73 & IFRS 16.',
    url: 'https://karsasoft.com/goletin/lease',
    images: ['/og-image.jpg'],
  },
};

export default function LeaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
