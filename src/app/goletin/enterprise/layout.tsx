import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goletin Enterprise — Sovereign Cloud, Audit Forensik & Engine IFRS',
  description:
    'Solusi enterprise berdaulat untuk BUMN & korporasi Indonesia: SLA 99.99%, SAML SSO, deployment air-gapped, engine IFRS 9/PSAK 73, audit forensik ISA 240, dan AI privat terisolasi.',
  keywords: [
    'Goletin Enterprise',
    'sovereign cloud Indonesia',
    'ERP enterprise BUMN',
    'IFRS 9 Indonesia',
    'audit forensik ISA 240',
    'on-premise air-gapped',
    'software enterprise Indonesia',
  ],
  alternates: {
    canonical: '/goletin/enterprise',
  },
  openGraph: {
    title: 'Goletin Enterprise — Sovereign Cloud, Audit Forensik & Engine IFRS',
    description:
      'Solusi enterprise berdaulat untuk BUMN & korporasi: SLA 99.99%, SAML SSO, air-gapped deployment, engine IFRS 9, dan AI privat.',
    url: 'https://karsasoft.com/goletin/enterprise',
    images: ['/og-image.jpg'],
  },
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
