import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Counting Pro — Sistem Pembukuan, Persediaan & Stock Opname SAK EMKM | Karsasoft',
  description:
    'Modernisasi stock opname fisik gudang & akuntansi SAK EMKM: pemindaian barcode mobile, rekonsiliasi varians persediaan real-time, penilaian FIFO/Average PSAK 14, dan KKP audit ISA 501.',
  keywords: [
    'Counting Pro',
    'stock opname mobile',
    'SAK EMKM',
    'PSAK 14 persediaan',
    'audit stok ISA 501',
    'rekonsiliasi persediaan',
    'FIFO average',
    'software gudang dan akuntansi',
  ],
  alternates: {
    canonical: '/goletin/counting-pro',
  },
  openGraph: {
    title: 'Counting Pro — Pembukuan, Persediaan & Stock Opname SAK EMKM',
    description:
      'Audit fisik persediaan gudang tanpa deviasi material: barcode scan, auto variance reconciliation, PSAK 14, dan KKP ISA 501.',
    url: 'https://karsasoft.com/goletin/counting-pro',
    images: ['/og-image.jpg'],
  },
};

export default function CountingProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
