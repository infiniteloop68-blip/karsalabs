import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IndoTax — Kalkulator PPh 21 TER, e-Faktur PPN & e-Bupot',
  description:
    'Perhitungan pajak otomatis: PPh 21 tarif efektif rata-rata (TER), e-Faktur PPN 11%, bukti potong unifikasi, dan rekonsiliasi SPT Masa terintegrasi sistem akuntansi perusahaan.',
  keywords: [
    'IndoTax',
    'PPh 21 TER',
    'kalkulator pajak PPh 21',
    'e-Faktur PPN',
    'software pajak Indonesia',
    'e-Bupot',
    'rekonsiliasi pajak otomatis',
  ],
  alternates: {
    canonical: '/goletin/indotax',
  },
  openGraph: {
    title: 'IndoTax — Kalkulator PPh 21 TER, e-Faktur PPN & e-Bupot',
    description:
      'Perhitungan pajak otomatis: PPh 21 tarif efektif rata-rata, e-Faktur PPN 11%, dan bukti potong terintegrasi ERP.',
    url: 'https://karsasoft.com/goletin/indotax',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'IndoTax Perpajakan Terintegrasi',
      },
    ],
  },
};

const indotaxStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'IndoTax',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Windows, macOS',
  description:
    'Aplikasi perpajakan Indonesia terintegrasi dengan modul perhitungan otomatis PPh 21 tarif efektif rata-rata (TER), pengelolaan e-Faktur PPN 11%, dan e-Bupot.',
  image: 'https://karsasoft.com/og-image.jpg',
  author: {
    '@type': 'Organization',
    name: 'PT Karsa Solusi Teknologi',
    url: 'https://karsasoft.com',
  },
  offers: {
    '@type': 'Offer',
    price: '145000',
    priceCurrency: 'IDR',
    description: 'Termasuk dalam paket Goletin Bisnis Standar & Premium.',
  },
};

export default function IndoTaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indotaxStructuredData) }}
      />
      {children}
    </>
  );
}
