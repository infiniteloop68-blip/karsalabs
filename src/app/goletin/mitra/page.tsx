import MitraPage from '@/app/mitra/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Mitra Goletin — Reseller, Solution Partner & Konsultan ERP',
  description:
    'Bergabunglah sebagai mitra resmi Goletin & Karsasoft: margin hingga 35%, lisensi NFR internal, dukungan presales, dan akses ekosistem software berdaulat Indonesia.',
  alternates: {
    canonical: '/goletin/mitra',
  },
  openGraph: {
    title: 'Program Mitra Goletin — Reseller, Solution Partner & Konsultan ERP',
    description:
      'Bergabunglah sebagai mitra resmi Goletin & Karsasoft: margin hingga 35% dan akses ekosistem software berdaulat Indonesia.',
    url: 'https://karsasoft.com/goletin/mitra',
    images: ['/og-image.jpg'],
  },
};

export default MitraPage;
