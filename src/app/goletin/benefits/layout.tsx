import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benefits Engine — Kalkulasi Imbalan Kerja Karyawan IAS 19 & PSAK 219 | Karsasoft',
  description:
    'Penghitungan aktuaria imbalan pascakerja, pesangon pensiun UU Cipta Kerja (PP 35/2021), valuasi DBO & PBO metode Projected Unit Credit (PUC), dan jurnal OCI siap audit.',
  keywords: [
    'Benefits Engine',
    'IAS 19',
    'PSAK 219',
    'imbalan kerja',
    'Projected Unit Credit',
    'Defined Benefit Obligation',
    'DBO',
    'PBO',
    'pesangon pensiun',
    'UU Cipta Kerja PP 35/2021',
    'laporan aktuaria',
    'software aktuaria Indonesia',
  ],
  alternates: {
    canonical: '/goletin/benefits',
  },
  openGraph: {
    title: 'Benefits Engine — Kalkulasi Imbalan Kerja IAS 19 & PSAK 219',
    description:
      'Penghitungan aktuaria imbalan kerja pascakerja otomatis dengan metode PUC, kepatuhan PP 35/2021, dan pengungkapan CALK siap audit.',
    url: 'https://karsasoft.com/goletin/benefits',
    images: ['/og-image.jpg'],
  },
};

export default function BenefitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
