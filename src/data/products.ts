export interface Product {
  id: string;
  name: string;
  category: 'platform' | 'office' | 'ai' | 'finance' | 'audit' | 'upcoming';
  categoryLabel: string;
  tagline: string;
  description: string;
  standards?: string[];
  url: string;
  externalUrl?: string;
  detailUrl?: string;
  isLive: boolean;
  featured?: boolean;
  iconType: string;
  logo: string;
  badge?: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'platform', label: 'Platform & Cloud' },
  { id: 'office', label: 'Office & Produktivitas' },
  { id: 'ai', label: 'Search & AI' },
  { id: 'finance', label: 'Keuangan & Akuntansi' },
  { id: 'audit', label: 'Audit & Kepatuhan' },
  { id: 'upcoming', label: 'Segera Hadir' },
] as const;

export const PRODUCTS: Product[] = [
  // Platform & Cloud
  {
    id: 'cloudsave',
    name: 'CloudSave',
    category: 'platform',
    categoryLabel: 'Platform & Cloud',
    tagline: 'Penyimpanan Cloud Terenkripsi & Manajemen Berkas',
    description: 'Solusi penyimpanan awan aman untuk kolaborasi tim, sinkronisasi file otomatis, dan proteksi berkas bisnis dengan enkripsi mutakhir.',
    standards: ['AES-256', 'Zero-Knowledge', 'Multi-Region Backup'],
    url: '/goletin/cloudsave',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/cloudsave',
    isLive: true,
    featured: true,
    iconType: 'cloud',
    logo: '/logos/cloudsave.svg',
    badge: 'Populer'
  },
  {
    id: 'goletin-mail',
    name: 'Goletin Mail',
    category: 'platform',
    categoryLabel: 'Platform & Cloud',
    tagline: 'Email Bisnis Privat & Bebas Pelacak',
    description: 'Layanan surel korporat yang memprioritaskan privasi tinggi, anti-spam cerdas, dan integrasi mulus dengan ekosistem kerja Goletin.',
    standards: ['TLS 1.3', 'Anti-Spam Filter', 'Custom Domain'],
    url: '/goletin/office',
    externalUrl: 'https://goletin.com/',
    detailUrl: '/goletin/office',
    isLive: true,
    iconType: 'mail',
    logo: '/logos/mail.svg'
  },

  // Office & Productivity
  {
    id: 'goletin-docs',
    name: 'Goletin Docs',
    category: 'office',
    categoryLabel: 'Office & Produktivitas',
    tagline: 'Editor Dokumen Kolaboratif Real-Time',
    description: 'Buat dan edit dokumen kerja bersama tim secara bersamaan dengan riwayat revisi mendalam, ekspor multi-format, dan fitur komentar interaktif.',
    standards: ['Real-Time Sync', 'Docx/PDF Export', 'Version History'],
    url: '/goletin/office?app=docs',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/office',
    isLive: true,
    featured: true,
    iconType: 'docs',
    logo: '/logos/docs.svg',
    badge: 'Produktivitas'
  },
  {
    id: 'goletin-sheets',
    name: 'Goletin Sheets',
    category: 'office',
    categoryLabel: 'Office & Produktivitas',
    tagline: 'Spreadsheet Analisis Data & Finansial',
    description: 'Lembar kerja komprehensif untuk pengolahan formula kompleks, pivot table, visualisasi grafik interaktif, dan pemodelan anggaran bisnis.',
    standards: ['400+ Formula', 'Live Pivot', 'XLSX Support'],
    url: '/goletin/office?app=sheets',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/office',
    isLive: true,
    iconType: 'sheets',
    logo: '/logos/sheets.svg'
  },
  {
    id: 'goletin-slides',
    name: 'Goletin Slides',
    category: 'office',
    categoryLabel: 'Office & Produktivitas',
    tagline: 'Pembuat Presentasi Bisnis Visual & Menawan',
    description: 'Rancang presentasi profesional dengan tema modern, animasi halus, kolaborasi multi-pengguna, dan mode presentasi proyektor tanpa hambatan.',
    standards: ['Presenter Mode', 'Vector Graphics', 'PPTX Support'],
    url: '/goletin/office?app=slides',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/office',
    isLive: true,
    iconType: 'slides',
    logo: '/logos/slides.svg'
  },
  {
    id: 'goletin-pdf',
    name: 'Goletin PDF',
    category: 'office',
    categoryLabel: 'Office & Produktivitas',
    tagline: 'Solusi Lengkap Baca, Tanda Tangan & Konversi PDF',
    description: 'Editor dan pembaca PDF profesional untuk tanda tangan digital terverifikasi, penggabungan berkas, kompresi ukuran, dan konversi format.',
    standards: ['Digital Signature', 'PDF/A Archive', 'OCR Ready'],
    url: '/goletin/office?app=pdf',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/office',
    isLive: true,
    iconType: 'pdf',
    logo: '/logos/pdf.svg'
  },

  // Search & AI
  {
    id: 'goletin-search',
    name: 'Goletin Search',
    category: 'ai',
    categoryLabel: 'Search & AI',
    tagline: 'Mesin Pencari Privat Tanpa Pelacakan Data',
    description: 'Akses informasi global tanpa algoritma profiling, tanpa penjualan data pribadi ke pihak ketiga, dan hasil pencarian murni yang objektif.',
    standards: ['No Trackers', 'Private Search', 'Fast Indexing'],
    url: '/goletin/ai',
    externalUrl: 'https://goletin.com/',
    detailUrl: '/goletin/ai',
    isLive: true,
    iconType: 'search',
    logo: '/logos/search.svg',
    badge: 'Privasi Terjaga'
  },
  {
    id: 'goletin-ai',
    name: 'Goletin AI',
    category: 'ai',
    categoryLabel: 'Search & AI',
    tagline: 'Asisten AI Multimodal untuk Analisis & Keputusan',
    description: 'Platform AI generasi terbaru untuk percakapan cerdas, analisis dokumen dan data, pembuatan kode aplikasi, penalaran kompleks, dan studio gambar kreatif.',
    standards: ['Multimodal LLM', 'Code Synthesis', 'Data Reasoning'],
    url: '/goletin/ai',
    externalUrl: 'https://ai.goletin.com/',
    detailUrl: '/goletin/ai',
    isLive: true,
    featured: true,
    iconType: 'ai',
    logo: '/logos/goletin-ai.svg',
    badge: 'Unggulan AI'
  },

  // Finance & Accounting
  {
    id: 'yaycount',
    name: 'Yaycount ERP',
    category: 'finance',
    categoryLabel: 'Keuangan & Akuntansi',
    tagline: 'ERP Keuangan & Akuntansi Terpadu Nirlaba & Yayasan',
    description: 'Sistem ERP komprehensif yang dirancang khusus untuk yayasan, institusi pendidikan, dan organisasi sosial dengan kepatuhan PSAK 45 / ISAK 35.',
    standards: ['ISAK 35 / PSAK 45', 'Multi-Unit Accounting', 'Donation Ledger'],
    url: '/goletin/yaycount',
    externalUrl: 'https://yaycount.goletin.com/',
    detailUrl: '/goletin/yaycount',
    isLive: true,
    featured: true,
    iconType: 'erp',
    logo: '/logos/yaycount.svg',
    badge: 'Enterprise ERP'
  },
  {
    id: 'counting-pro',
    name: 'Counting Pro',
    category: 'finance',
    categoryLabel: 'Keuangan & Akuntansi',
    tagline: 'Sistem Pembukuan, Persediaan & Stock Opname SAK EMKM',
    description: 'Solusi akuntansi modern untuk pencatatan transaksi kas, rekonsiliasi persediaan gudang otomatis, neraca saldo real-time, dan laporan laba rugi.',
    standards: ['SAK EMKM / ETAP', 'Auto Stock Opname', 'Audit Trail'],
    url: '/goletin/counting-pro',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/counting-pro',
    isLive: true,
    iconType: 'accounting',
    logo: '/logos/counting-pro.svg',
    badge: 'SAK EMKM & ISA 501'
  },
  {
    id: 'ecl-pro',
    name: 'ECL Pro',
    category: 'finance',
    categoryLabel: 'Keuangan & Akuntansi',
    tagline: 'Expected Credit Loss Engine Standar IFRS 9 & PSAK 109',
    description: 'Kalkulator aktuaria dan cadangan kerugian penurunan nilai (CKPN) otomatis dengan pemodelan Probability of Default (PD), LGD, dan EAD.',
    standards: ['IFRS 9', 'PSAK 109', 'OJK Compliance'],
    url: '/goletin/ecl-pro',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/ecl-pro',
    isLive: true,
    iconType: 'calculator',
    logo: '/logos/eclpro.svg',
    badge: 'Standar IFRS 9'
  },
  {
    id: 'lease-engine',
    name: 'Lease Engine',
    category: 'finance',
    categoryLabel: 'Keuangan & Akuntansi',
    tagline: 'Otomatisasi Akuntansi Sewa Standar PSAK 73 & IFRS 16',
    description: 'Manajemen kontrak sewa korporasi, pencatatan Right-of-Use (ROU) Asset, liabilitas sewa, dan penyusutan amortisasi sesuai regulasi akuntansi.',
    standards: ['PSAK 73', 'IFRS 16', 'Contract Schedules'],
    url: '/goletin/lease',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/lease',
    isLive: true,
    iconType: 'lease',
    logo: '/logos/lease.svg'
  },
  {
    id: 'revenue-engine',
    name: 'Revenue Engine',
    category: 'finance',
    categoryLabel: 'Keuangan & Akuntansi',
    tagline: 'Pengakuan Pendapatan 5-Langkah PSAK 72 & IFRS 15',
    description: 'Engine otomatis untuk identifikasi kontrak pelanggan, alokasi harga transaksi, dan pengakuan pendapatan berkala sesuai tahapan kewajiban pelaksanaan.',
    standards: ['PSAK 72', 'IFRS 15', '5-Step Revenue Framework'],
    url: '/goletin/revenue',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/revenue',
    isLive: true,
    iconType: 'revenue',
    logo: '/logos/revenue.svg'
  },
  {
    id: 'benefits',
    name: 'Benefits Engine',
    category: 'finance',
    categoryLabel: 'Keuangan & Akuntansi',
    tagline: 'Kalkulasi Imbalan Kerja Karyawan IAS 19 & PSAK 219',
    description: 'Penghitungan aktuaria imbalan pascakerja, pesangon pensiun, dan liabilitas kontinjensi ketenagakerjaan berbasis regulasi nasional dan global.',
    standards: ['IAS 19', 'PSAK 219', 'UU Cipta Kerja Actuarial'],
    url: '/goletin/benefits',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/benefits',
    isLive: true,
    iconType: 'benefits',
    logo: '/logos/benefits.svg'
  },
  {
    id: 'indotax',
    name: 'IndoTax',
    category: 'finance',
    categoryLabel: 'Keuangan & Akuntansi',
    tagline: 'Platform Perhitungan & Kepatuhan Pajak Indonesia',
    description: 'Perhitungan otomatis PPh 21 tarif TER terbaru, PPh 23, PPh Final, rekonsiliasi PPN, dan ekspor data siap lapor ke DJP Online.',
    standards: ['Tarif TER PP 58/2023', 'e-Bupot Ready', 'SPT Generator'],
    url: '/goletin/indotax',
    externalUrl: 'https://indotax.goletin.com/',
    detailUrl: '/goletin/indotax',
    isLive: true,
    iconType: 'tax',
    logo: '/logos/indotax.svg',
    badge: 'Kepatuhan Pajak'
  },

  // Audit & Compliance
  {
    id: 'sampling-pro',
    name: 'Sampling Pro',
    category: 'audit',
    categoryLabel: 'Audit & Kepatuhan',
    tagline: 'Audit Sampling Statistik & Non-Statistik Standar ISA 530',
    description: 'Alat bantu auditor untuk penentuan ukuran sampel representatif, monetary unit sampling (MUS), sampling atribut, dan evaluasi deviasi temuan.',
    standards: ['ISA 530', 'Monetary Unit Sampling', 'Audit Evidence'],
    url: '/goletin/sampling-pro',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/sampling-pro',
    isLive: true,
    iconType: 'sampling',
    logo: '/logos/sampling.svg'
  },
  {
    id: 'icofr-pro',
    name: 'ICOFR Pro',
    category: 'audit',
    categoryLabel: 'Audit & Kepatuhan',
    tagline: 'Internal Control Financial Reporting Standar SOX 404 & COSO',
    description: 'Dokumentasi matriks risiko dan pengendalian (RCM), pengujian efektivitas desain dan operasional pengendalian internal atas pelaporan keuangan.',
    standards: ['SOX 404', 'COSO Framework', 'Risk & Control Matrix'],
    url: '/goletin/icofr-pro',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/icofr-pro',
    isLive: true,
    iconType: 'shield',
    logo: '/logos/icofr.svg',
    badge: 'Standar SOX 404'
  },
  {
    id: 'jet-pro',
    name: 'JET Pro',
    category: 'audit',
    categoryLabel: 'Audit & Kepatuhan',
    tagline: 'Journal Entry Testing & Deteksi Fraud Standar ISA 240',
    description: 'Analisis anomali ayat jurnal akuntansi menggunakan Hukum Benford (Benford’s Law), pola posting tidak wajar di luar jam kerja, dan deteksi kecurangan.',
    standards: ['ISA 240', 'Benford\'s Law Test', 'Anomaly Analytics'],
    url: '/goletin/jet-pro',
    externalUrl: 'https://goletin.com/dashboard',
    detailUrl: '/goletin/jet-pro',
    isLive: true,
    iconType: 'analytics',
    logo: '/logos/jet-pro.svg',
    badge: 'Fraud Analytics'
  },

  // Upcoming
  {
    id: 'goletin-browser',
    name: 'Goletin Browser',
    category: 'upcoming',
    categoryLabel: 'Segera Hadir',
    tagline: 'Peramban Web Modern Berfokus pada Privasi & Efisiensi',
    description: 'Browser ultra-ringan dengan pemblokir pelacak bawaan, isolasi tab mandiri, dan perlindungan privasi maksimal.',
    standards: ['Adblock Bawaan', 'DNS over HTTPS', 'Zero Tracking'],
    url: '/goletin/browser',
    externalUrl: 'https://goletin.com/browser',
    detailUrl: '/goletin/browser',
    isLive: true,
    iconType: 'browser',
    logo: '/logos/browser.svg',
    badge: 'Akses Awal'
  },
  {
    id: 'goletin-console',
    name: 'Goletin Console',
    category: 'upcoming',
    categoryLabel: 'Segera Hadir',
    tagline: 'Developer API Hub & Manajemen Infrastruktur Cloud',
    description: 'Dashboard terpusat bagi developer enterprise untuk mengelola API keys, webhook, kuota penggunaan, dan integrasi sistem.',
    standards: ['REST / GraphQL', 'OpenAPI 3.0', 'Webhook Gateway'],
    url: '/goletin/console',
    externalUrl: 'https://console.goletin.com',
    detailUrl: '/goletin/console',
    isLive: true,
    iconType: 'terminal',
    logo: '/logos/console.svg',
    badge: 'Akses Awal'
  },
  {
    id: 'design-studio',
    name: 'Design Studio',
    category: 'upcoming',
    categoryLabel: 'Segera Hadir',
    tagline: 'Alat Desain Grafis & Kolaborasi Visual Cloud',
    description: 'Kanvas grafis online untuk pembuatan materi pemasaran, diagram arsitektur sistem, dan visual branding perusahaan.',
    standards: ['Vector Canvas', 'SVG Engine', 'Brand Assets Kit'],
    url: '/goletin/design-studio',
    externalUrl: 'https://design.goletin.com',
    detailUrl: '/goletin/design-studio',
    isLive: true,
    iconType: 'palette',
    logo: '/logos/slides.svg',
    badge: 'Akses Awal'
  }
];
