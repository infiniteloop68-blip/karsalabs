import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://karsasoft.com';
  const currentDate = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/ekosistem', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/solusi', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/layanan', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/mitra', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/tentang', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kontak', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/peta-situs', priority: 0.7, changeFrequency: 'weekly' as const },

    // Goletin Product & Segment Routes
    { path: '/goletin', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/goletin/ai', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/apa-itu-goletin', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/goletin/yaycount', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/ecl-pro', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/lease', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/indotax', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/jet-pro', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/sampling-pro', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/paket-dan-harga', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/bisnis', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/goletin/enterprise', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/goletin/individu', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/pendidikan', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/goletin/mitra', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/goletin/dukungan', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/dukungan/mandiri', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/dukungan/tagihan', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/dukungan/komunitas', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/goletin/dukungan/admin', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/dukungan/edukasi', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/dukungan/mitra', priority: 0.75, changeFrequency: 'monthly' as const },

    // New Dedicated Goletin Application & Enterprise Pages
    { path: '/goletin/office', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/browser', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/cloudsave', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/fixed-asset', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/cashflow', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/sovereign-cloud', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/sso', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/on-premise', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/sintesis-dokumen', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/revenue', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/benefits', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/counting-pro', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/icofr-pro', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/console', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/goletin/design-studio', priority: 0.85, changeFrequency: 'weekly' as const },

    // Goletin Sumber Daya & Engineering Routes
    { path: '/goletin/sumber-daya', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/goletin/sumber-daya/panduan-ai', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/kalkulator-lisensi', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/panduan-regulasi', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/dokumentasi-api', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/pelatihan-tim', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/roadmap-ai', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/studi-kasus', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/engineering-blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/goletin/sumber-daya/engineering-blog/wasm-ecl-engine', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/engineering-blog/zero-knowledge-cloudsave', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/engineering-blog/slm-accounting-finetuning', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/engineering-blog/sovereign-cloud-infrastructure', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/engineering-blog/sheets-virtual-canvas-60fps', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/goletin/sumber-daya/engineering-blog/jet-pro-fraud-detection-ml', priority: 0.75, changeFrequency: 'monthly' as const },

    // Legal & Governance Routes
    { path: '/privasi', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/ketentuan', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/merek-dagang', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
