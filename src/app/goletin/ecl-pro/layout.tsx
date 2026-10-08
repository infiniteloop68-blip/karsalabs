import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ECL Pro — Kalkulasi CKPN IFRS 9 / PSAK 71 Otomatis',
  description:
    'Pemodelan Expected Credit Loss multi-skenario untuk perbankan, BPR, dan multifinance. Forward-looking PD, LGD, EAD, dan pementasan Stage 1, 2, 3 sesuai standar IFRS 9 / PSAK 71.',
  keywords: [
    'ECL Pro',
    'CKPN IFRS 9',
    'PSAK 71',
    'Expected Credit Loss',
    'kalkulator CKPN bank',
    'software perbankan Indonesia',
    'risiko kredit IFRS 9',
  ],
  alternates: {
    canonical: '/goletin/ecl-pro',
  },
  openGraph: {
    title: 'ECL Pro — Kalkulasi CKPN IFRS 9 / PSAK 71 Otomatis',
    description:
      'Pemodelan Expected Credit Loss multi-skenario untuk institusi keuangan Indonesia berstandar IFRS 9 / PSAK 71.',
    url: 'https://karsasoft.com/goletin/ecl-pro',
    images: ['/og-image.jpg'],
  },
};

export default function ECLProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
