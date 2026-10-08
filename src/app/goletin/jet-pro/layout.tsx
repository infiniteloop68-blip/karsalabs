import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JET Pro — Pengujian Jurnal & Deteksi Fraud ISA 240',
  description:
    'Journal Entry Testing (JET) berbasis AI: analisis anomali jurnal transaksi dengan Hukum Benford, deteksi backdating, entri akhir pekan, dan pola anomali audit forensik sesuai ISA 240.',
  keywords: [
    'JET Pro',
    'Journal Entry Testing',
    'ISA 240',
    'audit forensik',
    'Hukum Benford',
    'deteksi fraud akuntansi',
    'software auditor Indonesia',
  ],
  alternates: {
    canonical: '/goletin/jet-pro',
  },
  openGraph: {
    title: 'JET Pro — Pengujian Jurnal & Deteksi Fraud ISA 240',
    description:
      'Pengujian entri jurnal komprehensif berstandar ISA 240 dengan deteksi anomali Hukum Benford.',
    url: 'https://karsasoft.com/goletin/jet-pro',
    images: ['/og-image.jpg'],
  },
};

export default function JETProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
