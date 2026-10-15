import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goletin Console — Developer API Hub & Cloud Infrastructure | Karsasoft',
  description:
    'Dashboard terpusat bagi developer enterprise: manajemen API keys, webhook gateway, kuota token model AI, log latensi real-time, dan dokumentasi OpenAPI 3.0.',
  keywords: [
    'Goletin Console',
    'developer hub',
    'API gateway',
    'OpenAPI 3.0',
    'REST API',
    'GraphQL',
    'webhook gateway',
    'token quota management',
    'enterprise developer portal',
  ],
  alternates: {
    canonical: '/goletin/console',
  },
  openGraph: {
    title: 'Goletin Console — Developer API Hub & Cloud Infrastructure',
    description:
      'Kelola integrasi sistem enterprise, kuota token AI, dan webhook microservices ekosistem Goletin dalam satu platform terpadu.',
    url: 'https://karsasoft.com/goletin/console',
    images: ['/images/data-dashboard.jpg'],
  },
};

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
