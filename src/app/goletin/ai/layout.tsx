import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goletin AI — Asisten Kecerdasan Buatan Multimodal Privat',
  description:
    'Analisis dokumen keuangan, sintesis laporan ratusan halaman, dan otomasi alur kerja dengan AI privat tanpa kebocoran data. Terintegrasi Docs, Sheets, dan Yaycount ERP.',
  keywords: [
    'Goletin AI',
    'AI Indonesia',
    'asisten AI privat',
    'AI dokumen keuangan',
    'kecerdasan buatan multimodal',
    'AI enterprise Indonesia',
  ],
  alternates: {
    canonical: '/goletin/ai',
  },
  openGraph: {
    title: 'Goletin AI — Asisten Kecerdasan Buatan Multimodal Privat',
    description:
      'Analisis dokumen keuangan, sintesis laporan, dan otomasi kerja dengan AI privat tanpa kebocoran data.',
    url: 'https://karsasoft.com/goletin/ai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'Goletin AI Asisten Privat',
      },
    ],
  },
};

const aiStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Goletin AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Windows, macOS',
  description:
    'Asisten kecerdasan buatan multimodal privat untuk sintesis dokumen keuangan, analisis data tabular, dan otomasi alur kerja korporat tanpa kebocoran data.',
  image: 'https://karsasoft.com/og-image.jpg',
  author: {
    '@type': 'Organization',
    name: 'PT Karsa Solusi Teknologi',
    url: 'https://karsasoft.com',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'IDR',
    description: 'Tersedia uji coba gratis dan terintegrasi paket Goletin Bisnis & Enterprise.',
  },
};

export default function GoletinAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiStructuredData) }}
      />
      {children}
    </>
  );
}
