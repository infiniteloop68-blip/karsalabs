import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goletin Browser — Peramban Web Cepat, Privat & AI Terintegrasi | Karsasoft',
  description:
    'Goletin Browser: peramban web modern ultra-ringan dengan pemblokir pelacak bawaan, isolasi tab mandiri, DNS over HTTPS, dan panel samping Goletin AI terintegrasi.',
  keywords: [
    'Goletin Browser',
    'peramban web',
    'browser privasi',
    'adblock bawaan',
    'DNS over HTTPS',
    'zero tracking browser',
    'browser enterprise',
    'browser AI terintegrasi',
  ],
  alternates: {
    canonical: '/goletin/browser',
  },
  openGraph: {
    title: 'Goletin Browser — Peramban Web Cepat, Privat & AI Terintegrasi',
    description:
      'Jelajahi internet dengan kecepatan tinggi tanpa pelacak iklan invasif, isolasi memori cerdas, dan asisten Goletin AI di panel samping.',
    url: 'https://karsasoft.com/goletin/browser',
    images: ['/images/cand-dashboard.jpg'],
  },
};

export default function BrowserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
