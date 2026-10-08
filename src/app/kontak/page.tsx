import React from 'react';
import type { Metadata } from 'next';
import { KontakClient } from '@/components/KontakClient';

export const metadata: Metadata = {
  title: 'Kontak & Konsultasi Eksekutif — PT Karsa Solusi Teknologi',
  description:
    'Jadwalkan konsultasi arsitektur perangkat lunak, uji coba Proof-of-Concept (PoC), dan skema lisensi enterprise ekosistem Goletin bersama tim Solution Architect Karsasoft.',
  alternates: {
    canonical: '/kontak',
  },
  openGraph: {
    title: 'Kontak & Konsultasi Eksekutif — PT Karsa Solusi Teknologi',
    description:
      'Jadwalkan konsultasi arsitektur perangkat lunak dan uji coba PoC ekosistem Goletin bersama tim Solution Architect Karsasoft.',
    url: 'https://karsasoft.com/kontak',
    images: ['/og-image.jpg'],
  },
};

const contactStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontak PT Karsa Solusi Teknologi',
  description: 'Saluran resmi komunikasi korporat dan konsultasi teknis ekosistem perangkat lunak Goletin.',
  url: 'https://karsasoft.com/kontak',
  mainEntity: {
    '@type': 'Organization',
    name: 'PT Karsa Solusi Teknologi',
    url: 'https://karsasoft.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales & Support',
      availableLanguage: ['Indonesian', 'English'],
    },
  },
};

export default function KontakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />
      <KontakClient />
    </>
  );
}
