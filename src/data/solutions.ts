export interface IndustrySolution {
  id: string;
  title: string;
  tagline: string;
  description: string;
  includedProducts: string[];
  keyBenefits: string[];
  iconType: string;
}

export const SOLUTIONS: IndustrySolution[] = [
  {
    id: 'korporasi',
    title: 'Solusi Korporasi & Bisnis Modern',
    tagline: 'Otomatisasi Produktivitas Kantor, Berkas Cloud & Pajak Terpadu',
    description: 'Tingkatkan efisiensi kerja tim lintas departemen dengan rangkaian aplikasi kolaborasi mandiri dari Goletin, mulai dari ruang kerja awan hingga kalkulasi pajak otomatis.',
    includedProducts: ['Goletin AI', 'CloudSave', 'Goletin Docs & Sheets', 'IndoTax', 'Goletin Mail'],
    keyBenefits: [
      'Penyimpanan berkas cloud terenkripsi tanpa risiko kebocoran data',
      'Asisten AI multimodal untuk riset, analisis laporan dan pembuatan konten',
      'Perhitungan PPh 21 tarif TER dan rekonsiliasi PPN terintegrasi',
      'Kolaborasi dokumen bersama secara real-time tanpa vendor lock-in asing'
    ],
    iconType: 'building'
  },
  {
    id: 'perbankan-finansial',
    title: 'Solusi Perbankan & Lembaga Keuangan',
    tagline: 'Engine Perhitungan Regulasi Finansial IFRS 9 & PSAK',
    description: 'Solusi perangkat lunak terakreditasi untuk otomasi perhitungan pencadangan risiko kredit, akuntansi sewa, dan pengakuan pendapatan sesuai standar OJK dan internasional.',
    includedProducts: ['ECL Pro (IFRS 9 / PSAK 109)', 'Lease Engine (PSAK 73)', 'Revenue Engine (PSAK 72)', 'Benefits (IAS 19)'],
    keyBenefits: [
      'Kalkulasi multi-stage Expected Credit Loss (CKPN) otomatis dengan model PD, LGD, EAD',
      'Pencatatan ROU Asset dan liabilitas sewa PSAK 73 tanpa human error spreadsheet',
      'Engine aktuaria imbalan kerja karyawan berbasis regulasi ketenagakerjaan terbaru',
      'Kertas kerja matematis transparan dan siap diaudit oleh KAP terkemuka'
    ],
    iconType: 'calculator'
  },
  {
    id: 'yayasan-nirlaba',
    title: 'Solusi Yayasan & Institusi Pendidikan',
    tagline: 'ERP Keuangan & Akuntansi Khusus Standar ISAK 35 / PSAK 45',
    description: 'Platform tata kelola keuangan nirlaba terlengkap di Indonesia untuk mengelola donasi, kas unit, aset yayasan, dan pelaporan akuntabilitas publik.',
    includedProducts: ['Yaycount ERP', 'Counting Pro', 'CloudSave', 'Goletin Docs'],
    keyBenefits: [
      'Bagan akun standar (COA) otomatis sesuai PSAK 45 dan interpretasi ISAK 35',
      'Pencatatan multi-unit sekolah, panti, cabang, dan program sosial terpusat',
      'Laporan penerimaan dan alokasi dana donatur real-time transparan',
      'Dukungan multi-user dengan hak akses bertingkat dan jejak audit lengkap'
    ],
    iconType: 'erp'
  },
  {
    id: 'audit-kap',
    title: 'Solusi Kantor Akuntan Publik & Auditor',
    tagline: 'Alat Kerja Audit Berstandar ISA & Deteksi Anomali Fraud',
    description: 'Rangkaian software pendukung auditor independen dan internal auditor untuk pengujian kepatuhan, sampling statistik, serta forensik entri jurnal.',
    includedProducts: ['Sampling Pro (ISA 530)', 'JET Pro (ISA 240)', 'ICOFR Pro (SOX 404 / COSO)', 'Goletin PDF'],
    keyBenefits: [
      'Penentuan ukuran sampel audit representatif dengan metode statistik & MUS ISA 530',
      'Deteksi anomali kecurangan jurnal dengan Hukum Benford (Benford’s Law)',
      'Dokumentasi Risk and Control Matrix (RCM) standar SOX 404 / COSO Framework',
      'Digital signature dan enkripsi kertas kerja audit berstandar hukum'
    ],
    iconType: 'shield'
  },
  {
    id: 'pemerintah-spbe',
    title: 'Solusi Instansi Pemerintah & Sektor Publik',
    tagline: 'Ekosistem Perangkat Lunak Berdaulat & Mandiri Sesuai SPBE',
    description: 'Mendukung kedaulatan digital nasional dengan perangkat lunak mandiri yang bebas dari pelacakan asing dan patuh terhadap standar keamanan BSSN.',
    includedProducts: ['Goletin Search Privat', 'Goletin Mail', 'CloudSave On-Premise', 'Goletin PDF'],
    keyBenefits: [
      'Pencarian dan surat elektronik tanpa profiling algoritma iklan komersial',
      'Kemampuan instalasi on-premise atau pada Pusat Data Nasional (PDN)',
      'Tanda tangan elektronik tersertifikasi untuk dokumen kedinasan resmi',
      'Interoperabilitas API untuk integrasi sistem Satu Data Indonesia'
    ],
    iconType: 'government'
  },
  {
    id: 'startup-smb',
    title: 'Solusi UMKM & Bisnis Berkembang',
    tagline: 'Perangkat Lunak Esensial untuk Efisiensi Tanpa Beban Biaya Mahal',
    description: 'Paket aplikasi lengkap untuk pembukuan, pelaporan pajak, dan komunikasi bisnis profesional yang langsung siap digunakan.',
    includedProducts: ['Counting Pro', 'IndoTax', 'Goletin Mail', 'Goletin Docs'],
    keyBenefits: [
      'Pencatatan kas dan laporan laba rugi instan tanpa keahlian akuntansi rumit',
      'Hitung dan buat SPT pajak PPh 21 & PPN langsung siap lapor DJP',
      'Alamat email domain perusahaan resmi meningkatkan kredibilitas bisnis',
      'Tanpa biaya instalasi awal, dapat diakses dari browser maupun perangkat mobile'
    ],
    iconType: 'saas'
  }
];
