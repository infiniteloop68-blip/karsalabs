import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Kemitraan Karsasoft — Reseller, Solution Partner & Konsultan ERP',
  description:
    'Bergabunglah dalam jaringan mitra resmi Karsasoft: bagi hasil hingga 35%, lisensi NFR internal cuma-cuma, pendampingan presales tenaga ahli, dan jangkauan nasional.',
  keywords: [
    'mitra Karsasoft',
    'reseller software akuntansi',
    'solution partner ERP',
    'program kemitraan IT',
    'konsultan akuntansi Indonesia',
    'keuntungan reseller software',
  ],
  alternates: {
    canonical: '/goletin/mitra',
  },
  openGraph: {
    title: 'Program Kemitraan Karsasoft — Reseller, Solution Partner & Konsultan ERP',
    description:
      'Bergabunglah sebagai mitra resmi Karsasoft dan nikmati margin bagi hasil hingga 35% serta lisensi NFR internal.',
    url: 'https://karsasoft.com/goletin/mitra',
    images: ['/og-image.jpg'],
  },
};

export default function MitraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
