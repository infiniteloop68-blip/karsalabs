import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dukungan Goletin — Pusat Bantuan, Panduan & Komunitas Pengguna',
  description:
    'Pusat bantuan resmi Goletin: panduan instalasi, aktivasi lisensi, dokumentasi kepatuhan ISAK 35 & PSAK 73, forum tanya jawab, dan kontak customer support teknis.',
  keywords: [
    'dukungan Goletin',
    'bantuan software akuntansi',
    'panduan instalasi Goletin',
    'pusat bantuan Karsasoft',
    'komunitas pengguna Goletin',
    'tutorial ISAK 35',
  ],
  alternates: {
    canonical: '/goletin/dukungan',
  },
  openGraph: {
    title: 'Dukungan Goletin — Pusat Bantuan, Panduan & Komunitas Pengguna',
    description:
      'Pusat bantuan, panduan modul, dan forum komunitas resmi ekosistem software Goletin.',
    url: 'https://karsasoft.com/goletin/dukungan',
    images: ['/og-image.jpg'],
  },
};

export default function DukunganLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
