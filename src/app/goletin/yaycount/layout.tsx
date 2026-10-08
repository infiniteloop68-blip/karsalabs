import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yaycount ERP — Akuntansi Yayasan & Nirlaba Standar ISAK 35',
  description:
    'ERP akuntansi terintegrasi untuk yayasan, sekolah, panti asuhan, dan organisasi nirlaba Indonesia. Laporan aktivitas, neraca, arus kas, dan anggaran sesuai ISAK 35 otomatis.',
  keywords: [
    'Yaycount',
    'ERP yayasan',
    'akuntansi ISAK 35',
    'software yayasan Indonesia',
    'laporan aktivitas yayasan',
    'ERP nirlaba',
    'pembukuan yayasan',
  ],
  alternates: {
    canonical: '/goletin/yaycount',
  },
  openGraph: {
    title: 'Yaycount ERP — Akuntansi Yayasan & Nirlaba Standar ISAK 35',
    description:
      'ERP akuntansi terintegrasi untuk yayasan, sekolah, dan organisasi nirlaba. Laporan keuangan sesuai ISAK 35.',
    url: 'https://karsasoft.com/goletin/yaycount',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'Yaycount ERP Akuntansi ISAK 35',
      },
    ],
  },
};

const yaycountStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Yaycount ERP',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Windows, macOS',
  description:
    'Sistem ERP akuntansi khusus organisasi nirlaba, yayasan, dan institusi pendidikan di Indonesia dengan kepatuhan penuh standar pelaporan ISAK 35.',
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
    description: 'Mulai dari paket Bisnis Standar Rp145.000/pengguna/bulan.',
  },
};

export default function YaycountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(yaycountStructuredData) }}
      />
      {children}
    </>
  );
}
