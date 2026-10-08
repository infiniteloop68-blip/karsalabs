import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paket & Harga Goletin — Lisensi Fleksibel Mulai Rp45.000/Bulan',
  description:
    'Bandingkan paket Goletin Bisnis Basic, Standar, Premium & Aplikasi Bisnis. Harga Rupiah tetap, akuntansi ISAK 35, pajak PPh 21 TER, engine kepatuhan IFRS, dan AI terintegrasi.',
  keywords: [
    'harga Goletin',
    'paket Goletin',
    'lisensi Goletin',
    'harga ERP Indonesia',
    'Goletin Bisnis Basic',
    'Goletin Bisnis Premium',
    'software akuntansi harga',
    'Yaycount harga',
    'IndoTax harga',
  ],
  openGraph: {
    title: 'Paket & Harga Goletin — Lisensi Fleksibel Mulai Rp45.000/Bulan',
    description:
      'Bandingkan paket Goletin Bisnis Basic, Standar, Premium & Aplikasi Bisnis. Harga Rupiah tetap tanpa biaya tersembunyi.',
    url: 'https://karsasoft.com/goletin/paket-dan-harga',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'Paket dan Harga Goletin',
      },
    ],
  },
  alternates: {
    canonical: '/goletin/paket-dan-harga',
  },
};

const pricingStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'Goletin Software Suite',
      description:
        'Suite produktivitas kantor terintegrasi, akuntansi nirlaba ISAK 35 Yaycount, kalkulator pajak IndoTax, dan AI privat untuk bisnis Indonesia.',
      image: 'https://karsasoft.com/og-image.jpg',
      brand: {
        '@type': 'Brand',
        name: 'Goletin',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'IDR',
        lowPrice: '45000',
        highPrice: '245000',
        offerCount: '4',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apakah harga paket sudah termasuk PPN 11% dan dapat diterbitkan faktur pajak resmi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Harga yang tercantum belum termasuk PPN 11%. Sebagai entitas resmi berbadan hukum di Indonesia, Karsasoft menerbitkan Faktur Pajak elektronik (e-Faktur) resmi dan kuitansi komersial untuk setiap transaksi organisasi atau korporasi Anda.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bisakah kami mencampur lisensi paket yang berbeda dalam satu organisasi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ya, tentu bisa. Anda dapat mengalokasikan lisensi secara fleksibel sesuai peran divisi kerja. Contohnya: divisi Finance dan Manajemen menggunakan Bisnis Standar atau Premium, sementara staf operasional lapangan menggunakan Bisnis Basic atau Aplikasi Bisnis.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bagaimana cara kerja uji coba gratis selama 1 bulan (30 hari)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anda dapat mendaftar uji coba gratis hingga 25 lisensi pengguna tanpa kewajiban kartu kredit. Seluruh data yang Anda buat selama masa uji coba akan tetap tersimpan dan dapat dilanjutkan tanpa jeda ketika Anda memutuskan untuk beralih ke langganan berbayar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apakah data internal perusahaan kami dijamin tersimpan di wilayah hukum Indonesia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ya, 100%. Seluruh infrastruktur Sovereign Cloud Goletin bertempat di Tier-4 Data Center yang berlokasi di Jakarta dan Cikarang, Indonesia. Arsitektur kami mematuhi UU PDP No. 27/2022, PP 71/2019 (PSTE), dan POJK No. 11/2022.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bagaimana proses migrasi data dari Microsoft 365 atau Google Workspace ke Goletin?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Goletin mendukung kompatibilitas penuh dengan format .docx, .xlsx, .pptx, dan .pdf. Tim onboarding Karsasoft menyediakan panduan dan perangkat migrasi otomatis untuk memindahkan dokumen, email, dan kontak.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: 'https://karsasoft.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Goletin',
          item: 'https://karsasoft.com/goletin',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Paket & Harga',
          item: 'https://karsasoft.com/goletin/paket-dan-harga',
        },
      ],
    },
  ],
};

export default function PaketDanHargaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingStructuredData) }}
      />
      {children}
    </>
  );
}
