import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Studio — Alat Desain Grafis & Kolaborasi Visual Cloud | Karsasoft',
  description:
    'Kanvas grafis online berbasis vektor untuk materi promosi bisnis, diagram arsitektur sistem, infografis laporan tahunan, dan visual branding dengan rendering SVG cepat.',
  keywords: [
    'Design Studio',
    'desain grafis cloud',
    'vector canvas',
    'SVG editor online',
    'brand kit korporasi',
    'desain visual branding',
    'software desain Indonesia',
    'kolaborasi desain online',
  ],
  alternates: {
    canonical: '/goletin/design-studio',
  },
  openGraph: {
    title: 'Design Studio — Alat Desain Grafis & Kolaborasi Visual Cloud',
    description:
      'Ciptakan materi pemasaran, slide presentasi, dan diagram visual branding korporasi dengan kanvas vektor real-time terintegrasi Goletin.',
    url: 'https://karsasoft.com/goletin/design-studio',
    images: ['/images/goletin-ai-card.jpg'],
  },
};

export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
