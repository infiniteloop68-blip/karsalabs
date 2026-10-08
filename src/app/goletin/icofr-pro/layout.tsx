import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ICOFR Pro — Pengendalian Internal Pelaporan Keuangan SOX 404 & COSO | Karsasoft',
  description:
    'Sistem manajemen pengendalian internal atas pelaporan keuangan (ICOFR / SOX 404): Risk & Control Matrix (RCM), pengujian efektivitas pengendalian TOD & TOE, evaluasi defisiensi material weakness, dan KKP elektronik ISA 230.',
  keywords: [
    'ICOFR Pro',
    'SOX 404',
    'COSO Framework',
    'Internal Control Financial Reporting',
    'Risk and Control Matrix',
    'RCM',
    'Test of Design',
    'Test of Operating Effectiveness',
    'Material Weakness',
    'Significant Deficiency',
    'Kertas Kerja Audit Elektronik',
    'ISA 230',
    'Paperless Audit',
  ],
  alternates: {
    canonical: '/goletin/icofr-pro',
  },
  openGraph: {
    title: 'ICOFR Pro — Pengendalian Internal SOX 404 & Kertas Kerja Audit ISA 230',
    description:
      'Platform dokumentasi RCM, pengujian efektivitas kontrol internal pelaporan keuangan, dan kertas kerja audit elektronik siap reviu mutu IAPI / KAP.',
    url: 'https://karsasoft.com/goletin/icofr-pro',
    images: ['/og-image.jpg'],
  },
};

export default function IcofrProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
