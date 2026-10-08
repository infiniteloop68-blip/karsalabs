import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sampling Pro — Monetary Unit Sampling Audit ISA 530',
  description:
    'Software sampling audit berstandar ISA 530: Monetary Unit Sampling (MUS), Classical Variables Sampling, dan stratifikasi populasi otomatis untuk KAP, BPK, BPKP, dan auditor internal.',
  keywords: [
    'Sampling Pro',
    'Monetary Unit Sampling',
    'ISA 530',
    'sampling audit',
    'KAP software audit',
    'Classical Variables Sampling',
    'auditor Indonesia',
  ],
  alternates: {
    canonical: '/goletin/sampling-pro',
  },
  openGraph: {
    title: 'Sampling Pro — Monetary Unit Sampling Audit ISA 530',
    description:
      'Alat sampling audit berstandar ISA 530 untuk KAP dan auditor internal dengan estimasi presisi tinggi.',
    url: 'https://karsasoft.com/goletin/sampling-pro',
    images: ['/og-image.jpg'],
  },
};

export default function SamplingProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
