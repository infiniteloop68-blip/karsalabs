'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';

interface SectorDetail {
  id: string;
  name: string;
  badge: string;
  icon: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  pipeline: { step: string; name: string }[];
  products: { name: string; href: string; isExternal?: boolean }[];
  metrics: { value: string; label: string }[];
}

const SECTORS_DATA: SectorDetail[] = [
  {
    id: 'perbankan-finansial',
    name: 'Perbankan & Lembaga Keuangan',
    badge: 'IFRS 9, PSAK 73 & OJK',
    icon: 'calculator',
    tagline: 'Engine Perhitungan Regulasi Finansial Tanpa Risiko Human Error Spreadsheet',
    description:
      'Bank umum, BPR, multifinance, dan lembaga asuransi diwajibkan memenuhi standar perhitungan cadangan risiko kredit dan akuntansi sewa yang ketat. Karsasoft menghadirkan engine aktuaria tervalidasi yang siap diaudit oleh regulator OJK dan kantor akuntan publik tier-1.',
    challenges: [
      'Formula spreadsheet rumit rawan error dan tidak memiliki audit trail',
      'Kalkulasi multi-stage CKPN (Stage 1, 2, 3) memakan waktu berhari-hari saat penutupan buku',
      'Risiko temuan audit OJK akibat ketidakakuratan model Probabilitas Gagal Bayar (PD/LGD/EAD)',
    ],
    solutions: [
      'Engine otomatisasi CKPN multi-stage dengan model PD, LGD, dan EAD terkalibrasi',
      'Kertas kerja audit (Audit Working Paper) transparan per baris pinjaman',
      'Dukungan integrasi database Core Banking melalui batch processing SFTP & API',
    ],
    pipeline: [
      { step: '01', name: 'Ekstraksi Portofolio Kredit Core Banking' },
      { step: '02', name: 'Kalkulasi Stage & ECL (Engine IFRS 9)' },
      { step: '03', name: 'Jurnal Otomatis & Kertas Kerja OJK' },
    ],
    products: [
      { name: 'ECL Pro (IFRS 9 / PSAK 71)', href: '/goletin/ecl-pro' },
      { name: 'Lease Engine (PSAK 73)', href: '/goletin/lease' },
      { name: 'Revenue Engine (PSAK 72)', href: '/goletin#pilar' },
      { name: 'Benefits Engine (IAS 19)', href: '/goletin#pilar' },
    ],
    metrics: [
      { value: '99.9%', label: 'Akurasi Matematis Aktuaria' },
      { value: '10x', label: 'Lebih Cepat dari Spreadsheet' },
      { value: '100%', label: 'Kertas Kerja Standar OJK' },
    ],
  },
  {
    id: 'korporasi',
    name: 'Korporasi & Bisnis Modern',
    badge: 'PRODUKTIVITAS & PAJAK TERPADU',
    icon: 'building',
    tagline: 'Ruang Kerja Digital Kolaboratif, Cloud Storage & Otomasi Perpajakan Perusahaan',
    description:
      'Solusi terpadu untuk korporasi lintas industri yang membutuhkan platform produktivitas kantor berdaulat, penyimpanan awan terenkripsi, serta integrasi pemotongan pajak penghasilan karyawan (PPh 21 TER) dalam satu pintu terpusat.',
    challenges: [
      'Ketergantungan biaya lisensi software luar negeri yang membebani anggaran korporasi',
      'Berkas digital tersebar tanpa kontrol keamanan dan hak akses granular',
      'Penyesuaian manual terhadap aturan tarif efektif rata-rata (TER) PPh 21 terbaru',
    ],
    solutions: [
      'Office suite lengkap (Docs, Sheets, Slides) berbasis web & desktop offline',
      'Penyimpanan CloudSave terenkripsi AES-256 dengan kontrol manajemen pengguna terpusat',
      'Kalkulator pajak IndoTax otomatis terintegrasi dengan laporan penggajian (payroll)',
    ],
    pipeline: [
      { step: '01', name: 'Ruang Kolaborasi Dokumen & Cloud' },
      { step: '02', name: 'Kalkulasi Otomatis PPh 21 TER & PPN' },
      { step: '03', name: 'Penyimpanan Arsip Aman Tier-4' },
    ],
    products: [
      { name: 'Goletin AI Multimodal', href: '/goletin/ai' },
      { name: 'CloudSave Enterprise', href: '/goletin#pilar' },
      { name: 'IndoTax Perpajakan', href: '/goletin/indotax' },
      { name: 'Goletin Mail Bisnis', href: '/goletin#pilar' },
    ],
    metrics: [
      { value: '45%', label: 'Efisiensi Biaya Lisensi IT' },
      { value: 'AES-256', label: 'Enkripsi Berkas Dokumen' },
      { value: 'TER 2024', label: 'Kepatuhan Pajak DJP' },
    ],
  },
  {
    id: 'yayasan-nirlaba',
    name: 'Yayasan & Institusi Pendidikan',
    badge: 'STANDAR ISAK 35 & DANA BOS',
    icon: 'erp',
    tagline: 'ERP Keuangan Khusus Nirlaba, Pesantren, Sekolah & Perguruan Tinggi',
    description:
      'Yayasan pendidikan dan sosial memiliki karakteristik akuntansi nirlaba yang unik. Karsasoft menyediakan Yaycount ERP yang secara spesifik dirancang untuk standar ISAK 35 / PSAK 45, otomatisasi pencatatan SPP, serta pelaporan pertanggungjawaban dana bantuan pemerintah.',
    challenges: [
      'Software akuntansi komersial umum tidak mendukung konsep Aset Neto Terikat & Tidak Terikat',
      'Pencatatan iuran SPP dan infak di banyak unit sekolah masih dilakukan secara manual',
      'Kesulitan menyusun Laporan Pertanggungjawaban (LPJ) dana BOS/BOP yang rawan audit',
    ],
    solutions: [
      'Bagan Akun Standar (COA) khusus nirlaba yang secara otomatis memetakan pembatasan sumber dana',
      'Pencatatan real-time penerimaan SPP dan tagihan siswa per kelas / program studi',
      'Modul pelaporan dana BOS/BOP siap cetak sesuai format kementerian pendidikan/agama',
    ],
    pipeline: [
      { step: '01', name: 'Pencatatan Kas & Penerimaan SPP' },
      { step: '02', name: 'Klasifikasi Aset Neto Terikat ISAK 35' },
      { step: '03', name: 'Laporan Posisi Keuangan & LPJ BOS' },
    ],
    products: [
      { name: 'Yaycount ERP Yayasan', href: '/goletin/yaycount' },
      { name: 'Goletin Docs Edukasi', href: '/goletin/pendidikan' },
      { name: 'CloudSave Lab & Sekolah', href: '/goletin#pilar' },
      { name: 'IndoTax Honor Pengajar', href: '/goletin/indotax' },
    ],
    metrics: [
      { value: 'ISAK 35', label: 'Standar Akuntansi Nirlaba' },
      { value: 'Multi-Unit', label: 'Konsolidasi Seluruh Cabang' },
      { value: '100% Siap', label: 'Audit BPK & Akuntan Publik' },
    ],
  },
  {
    id: 'audit-kap',
    name: 'Kantor Akuntan Publik & Auditor',
    badge: 'STANDAR ISA 240, 530 & BENFORD',
    icon: 'shield',
    tagline: 'Software Pengujian Audit Berstandar ISA & Deteksi Anomali Jurnal',
    description:
      'Solusi khusus auditor independen dan tim internal audit korporasi untuk menjalankan pengujian substantif, pengambilan sampel statistik representatif (ISA 530), serta forensik jurnal anomali menggunakan kaidah Benford’s Law (ISA 240).',
    challenges: [
      'Penentuan sampel audit manual yang bias dan rentan dipertanyakan saat peer-review',
      'Volume jutaan transaksi jurnal yang mustahil diuji satu per satu untuk mendeteksi kecurangan',
      'Kertas kerja audit tersebar dalam file lokal yang tidak memiliki standar enkripsi forensik',
    ],
    solutions: [
      'Sampling Pro untuk kalkulasi Monetary Unit Sampling (MUS) dan Stratified Random Sampling',
      'JET Pro untuk analisis pola frekuensi digit pertama (Hukum Benford) dan duplikasi transaksi',
      'Kertas kerja audit terenkripsi dengan digital signature dan rekam jejak pengujian utuh',
    ],
    pipeline: [
      { step: '01', name: 'Import General Ledger & Jurnal Klien' },
      { step: '02', name: 'Eksekusi Benford Law & Stratifikasi' },
      { step: '03', name: 'Penerbitan Kertas Kerja ISA Standar' },
    ],
    products: [
      { name: 'Sampling Pro (ISA 530)', href: '/goletin/sampling-pro' },
      { name: 'JET Pro (ISA 240 Fraud)', href: '/goletin/jet-pro' },
      { name: 'Goletin PDF Suite', href: '/goletin#pilar' },
      { name: 'ICOFR Pro (SOX 404)', href: '/goletin#pilar' },
    ],
    metrics: [
      { value: 'ISA 530', label: 'Kepatuhan Metodologi Audit' },
      { value: 'ISA 240', label: 'Deteksi Kecurangan Finansial' },
      { value: 'Juta Baris', label: 'Pemrosesan Cepat Big Data GL' },
    ],
  },
  {
    id: 'pemerintah-spbe',
    name: 'Instansi Pemerintah & Sektor Publik',
    badge: 'KEDAULATAN DIGITAL & SPBE',
    icon: 'government',
    tagline: 'Aplikasi Perkantoran Berdaulat Tanpa Pelacakan Asing Sesuai SPBE',
    description:
      'Mendukung kemandirian teknologi nasional melalui perangkat lunak mandiri yang bebas dari pelacakan pihak ketiga asing, mematuhi standar SPBE (Sistem Pemerintahan Berbasis Elektronik), dan siap diinstalasi di Pusat Data Nasional (PDN) atau on-premise kementerian.',
    challenges: [
      'Risiko kebocoran data kedinasan pada server cloud publik yang berlokasi di luar yurisdiksi Indonesia',
      'Ketidaksesuaian software asing dengan kerangka interoperabilitas Satu Data Indonesia',
      'Ketergantungan vendor asing yang bertentangan dengan prinsip kedaulatan data nasional',
    ],
    solutions: [
      'Goletin Search privat tanpa algoritma pelacak dan tanpa komersialisasi pencarian dinas',
      'Email resmi dan office kolaboratif yang di-hosting di data center lokal berstandar Tier-4',
      'Opsi implementasi on-premise mandiri yang terisolasi total dari jaringan internet publik',
    ],
    pipeline: [
      { step: '01', name: 'Deploy di Pusat Data Nasional / Lokal' },
      { step: '02', name: 'Integrasi SSO & Dokumen Kedinasan' },
      { step: '03', name: 'Operasional Aman Kedaulatan Data' },
    ],
    products: [
      { name: 'Goletin Search Privat', href: 'https://search.goletin.com', isExternal: true },
      { name: 'Goletin Mail Kedinasan', href: '/goletin#pilar' },
      { name: 'CloudSave On-Premise', href: '/goletin/enterprise' },
      { name: 'Goletin PDF Suite', href: '/goletin#pilar' },
    ],
    metrics: [
      { value: '100% RI', label: 'Infrastruktur Data Center Lokal' },
      { value: 'SPBE', label: 'Kepatuhan Arsitektur SPBE' },
      { value: 'UU PDP', label: 'Perlindungan Kerahasiaan Data' },
    ],
  },
  {
    id: 'startup-smb',
    name: 'UMKM & Bisnis Berkembang',
    badge: 'EFISIENSI BIAYA & SIAP PAKAI',
    icon: 'saas',
    tagline: 'Perangkat Lunak Esensial untuk Efisiensi Operasional Tanpa Beban Biaya Mahal',
    description:
      'Paket aplikasi lengkap untuk pelaku usaha yang ingin naik kelas: pembukuan kas otomatis, pembuatan invoice resmi, pelaporan pajak bulanan, serta komunikasi bisnis profesional dengan domain perusahaan sendiri.',
    challenges: [
      'Keterbatasan anggaran untuk membeli software enterprise bernilai puluhan juta rupiah',
      'Pencatatan keuangan masih di buku tulis atau spreadsheet yang rawan hilang',
      'Kebingungan saat menghitung kewajiban pajak bulanan dan tahunan badan',
    ],
    solutions: [
      'Aplikasi pembukuan intuitif yang secara otomatis menghasilkan laporan laba rugi instan',
      'Email bisnis berdomain resmi (@namabisnis.com) untuk meningkatkan kredibilitas klien',
      'Kalkulator pajak IndoTax yang memandu langkah demi langkah perhitungan PPh',
    ],
    pipeline: [
      { step: '01', name: 'Catat Penjualan & Invoice Digital' },
      { step: '02', name: 'Laba Rugi & Neraca Otomatis' },
      { step: '03', name: 'Panduan Hitung Pajak Usaha' },
    ],
    products: [
      { name: 'IndoTax UMKM', href: '/goletin/indotax' },
      { name: 'Goletin Mail Bisnis', href: '/goletin#pilar' },
      { name: 'Goletin Docs & Sheets', href: '/goletin#pilar' },
      { name: 'CloudSave Personal', href: '/goletin/individu' },
    ],
    metrics: [
      { value: 'Instan', label: 'Langsung Aktif Tanpa Setup Rumit' },
      { value: '0 Rp', label: 'Uji Coba Bebas Risiko' },
      { value: 'Mobile', label: 'Dapat Diakses dari Smartphone' },
    ],
  },
];

const COMPLIANCE_MATRIX = [
  {
    standard: 'PSAK 71 / IFRS 9',
    scope: 'Perbankan, Multifinance, Asuransi',
    risk: 'Spreadsheet rawan error, model PD/LGD tidak tervalidasi, risiko sanksi OJK.',
    solution: 'ECL Pro: Kalkulasi multi-stage otomatis, transisi SICR, kertas kerja audit siap OJK.',
    readiness: 'Auditor & OJK Ready',
  },
  {
    standard: 'PSAK 73',
    scope: 'Korporasi, Retail, Perhotelan, Logistik',
    risk: 'Human error modifikasi kontrak sewa, selisih amortisasi ROU Asset & liabilitas sewa.',
    solution: 'Lease Engine: Penjadwalan amortisasi otomatis, penyesuaian diskonto, jurnal otomatis.',
    readiness: 'Big Four Validated',
  },
  {
    standard: 'ISAK 35 / PSAK 45',
    scope: 'Yayasan Pendidikan, Madrasah, Rumah Sakit Nirlaba',
    risk: 'Software komersial mencampur aduk donasi terikat, LPJ dana BOS/BOP ditolak.',
    solution: 'Yaycount ERP: COA standar nirlaba, pemisahan aset neto terikat, laporan LPJ instan.',
    readiness: 'Kemenag & Kemendikbud Compliant',
  },
  {
    standard: 'ISA 240 & ISA 530',
    scope: 'Kantor Akuntan Publik, Internal Audit Korporasi',
    risk: 'Sampling audit manual bias, gagal mendeteksi entri jurnal anomali atau fraud.',
    solution: 'Sampling Pro & JET Pro: Uji Hukum Benford otomatis, monetary unit sampling standar.',
    readiness: 'IAPI & IFAC Compliant',
  },
  {
    standard: 'UU No. 27/2022 (UU PDP)',
    scope: 'Seluruh Institusi & Pengelola Data Pribadi',
    risk: 'Sanksi pidana dan denda hingga Rp50 Miliar akibat transfer data ke cloud asing.',
    solution: 'Hosting 100% Sovereign Cloud Tier-4 di Jakarta & Surabaya, opsi On-Premise Air-Gapped.',
    readiness: 'Legal Compliance 100%',
  },
  {
    standard: 'Perpres 95/2018 (SPBE)',
    scope: 'Kementerian, Lembaga Negara, Pemda',
    risk: 'Ketergantungan vendor asing dan celah kebocoran data intelijen kedinasan.',
    solution: 'Perangkat lunak mandiri tanpa tracking, siap deploy di Pusat Data Nasional (PDN).',
    readiness: 'SPBE & BSSN Aligned',
  },
];

const TOPOLOGIES = [
  {
    id: 'sovereign',
    title: 'Sovereign Cloud (Data Center Lokal Tier-4)',
    badge: 'KORPORASI & ENTERPRISE',
    description:
      'Solusi komputasi awan berdaulat yang ditempatkan secara eksklusif di pusat data Tier-4 lokal di Jakarta dan Surabaya. Menjamin seluruh data Anda berada dalam yurisdiksi Republik Indonesia dengan latensi sangat rendah.',
    specs: [
      { label: 'SLA Ketersediaan', val: '99.99% Uptime Terjamin' },
      { label: 'Lokasi Data Center', val: 'Jakarta & Surabaya (Multi-Region)' },
      { label: 'Standar Enkripsi', val: 'AES-256 (At-Rest) & TLS 1.3 (In-Transit)' },
      { label: 'Kepatuhan Hukum', val: 'UU No. 27/2022 tentang Perlindungan Data Pribadi' },
    ],
    benefits: [
      'Pencadangan lintas wilayah otomatis tanpa biaya egress tambahan',
      'Akses sangat cepat melalui interkoneksi langsung ke Indonesia Internet Exchange (IIX)',
      'Dukungan tim engineer lokal bersertifikasi 24/7',
    ],
  },
  {
    id: 'hybrid',
    title: 'Dedicated Hybrid & Virtual Private Cloud',
    badge: 'BANK & MULTIFINANCE',
    description:
      'Arsitektur komputasi terisolasi dengan koneksi aman melalui VPN IPsec Site-to-Site, IP whitelisting terdedikasi, serta integrasi langsung ke sistem identitas internal perusahaan (Active Directory / LDAP / SSO).',
    specs: [
      { label: 'Konektivitas', val: 'VPN Site-to-Site IPsec / Direct Fiber' },
      { label: 'Autentikasi', val: 'Single Sign-On SAML 2.0 & Active Directory' },
      { label: 'Isolasi Komputasi', val: 'Dedicated Tenant & Private Virtual Subnet' },
      { label: 'Audit Trail', val: 'Sentralisasi SIEM & Log Akses Real-Time' },
    ],
    benefits: [
      'Database nasabah tetap berada di server internal bank dengan engine kalkulasi terhubung aman',
      'Manajemen hak akses terpusat sesuai matriks otorisasi perusahaan',
      'Pengujian berkala bersama tim keamanan siber institusi',
    ],
  },
  {
    id: 'airgapped',
    title: 'On-Premise Air-Gapped (Isolated Server)',
    badge: 'BANK DEVISA & INSTANSI RAHASIA',
    description:
      'Instalasi perangkat lunak mandiri pada server fisik (bare-metal) atau klaster virtual internal institusi tanpa koneksi ke internet publik sama sekali. Menghilangkan 100% risiko serangan siber berbasis jaringan eksternal.',
    specs: [
      { label: 'Koneksi Internet', val: '0% (Zero Ingress & Zero Egress)' },
      { label: 'Model Deployment', val: 'Bare-Metal Server / VMware / Proxmox' },
      { label: 'Lisensi Perangkat', val: 'Aktivasi Offline berbasis Hardware Key / File' },
      { label: 'Kedaulatan Sistem', val: '100% Kendali di Tangan Tim IT Institusi' },
    ],
    benefits: [
      'Sangat ideal untuk perbankan devisa, sistem intelijen, dan lembaga pertahanan',
      'Pembaruan berkala dapat dilakukan secara offline melalui media terenkripsi',
      'Tidak ada data yang pernah meninggalkan perimeter gedung kantor Anda',
    ],
  },
];

export function SolusiClient() {
  const [selectedSectorId, setSelectedSectorId] = useState<string>('perbankan-finansial');
  const [activeTopologyId, setActiveTopologyId] = useState<string>('sovereign');

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash.replace('#', '');
        if (hash && SECTORS_DATA.some((s) => s.id === hash)) {
          setSelectedSectorId(hash);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const activeSector =
    SECTORS_DATA.find((s) => s.id === selectedSectorId) || SECTORS_DATA[0];

  const activeTopology =
    TOPOLOGIES.find((t) => t.id === activeTopologyId) || TOPOLOGIES[0];

  return (
    <div className="section-padding" style={{ paddingTop: '24px' }}>
      <div className="container">
        {/* 1. Command Center Executive Hero (Format Baru - Dark Slate / Luminous Teal) */}
        <div className="solusi-command-hero">
          <div className="solusi-hero-grid-split">
            <div>
              <h1 className="solusi-hero-headline">
                Solusi Rekayasa Perangkat Lunak untuk Industri Kritis & Teregulasi
              </h1>
              <p className="solusi-hero-desc">
                Mengintegrasikan otomasi kepatuhan finansial PSAK & IFRS, akuntansi nirlaba berstandar ISAK 35, tata kelola SPBE, dan kedaulatan data nasional dalam satu arsitektur terpadu siap audit.
              </p>
              <div className="hero-cta-group">
                <Link href="/kontak?tipe=enterprise" className="btn-primary">
                  <span>Konsultasi Solusi Enterprise</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <a href="#katalog-industri" className="btn-secondary">
                  <span>Eksplorasi Sektor Industri</span>
                </a>
              </div>
            </div>

            {/* Live Cockpit Card: Status Kepatuhan Lintas Sektor */}
            <div className="solusi-hero-cockpit">
              <div className="solusi-cockpit-header">
                <div className="solusi-cockpit-title">
                  <Icon name="shield" size={16} />
                  <span>Matriks Kepatuhan Standar</span>
                </div>
                <span style={{ fontSize: '11px', color: '#00EDC2', fontWeight: 600 }}>
                  Aktif & Siap Audit
                </span>
              </div>

              <div className="solusi-cockpit-row">
                <span className="solusi-cockpit-sector">Perbankan & Finansial</span>
                <span className="solusi-cockpit-tag">OJK / IFRS 9 / PSAK 71 & 73</span>
              </div>
              <div className="solusi-cockpit-row">
                <span className="solusi-cockpit-sector">Yayasan & Pendidikan</span>
                <span className="solusi-cockpit-tag">ISAK 35 / PSAK 45 / LPJ BOS</span>
              </div>
              <div className="solusi-cockpit-row">
                <span className="solusi-cockpit-sector">Kantor Akuntan Publik</span>
                <span className="solusi-cockpit-tag">ISA 240 / 530 Benford Law</span>
              </div>
              <div className="solusi-cockpit-row">
                <span className="solusi-cockpit-sector">Instansi Pemerintah</span>
                <span className="solusi-cockpit-tag">SPBE / UU PDP / Tier-4 Data Center</span>
              </div>
              <div className="solusi-cockpit-row">
                <span className="solusi-cockpit-sector">Korporasi & Bisnis</span>
                <span className="solusi-cockpit-tag">PPh 21 TER / Cloud Sovereign</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Interactive Master-Detail Stage (Navigator Industri) */}
        <section id="katalog-industri" style={{ marginBottom: '64px' }}>
          {/* Deep-linking sector anchors */}
          <span id="perbankan-finansial" />
          <span id="korporasi" />
          <span id="yayasan-nirlaba" />
          <span id="audit-kap" />
          <span id="pemerintah-spbe" />
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Studio Solusi Vertikal</span>
            <h2 className="section-title">Pilih Sektor Industri untuk Melihat Blueprint Lengkap</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Klik pada salah satu sektor di sebelah kiri untuk melihat tantangan regulasi, alur kerja sistem, modul produk terkait, serta dampak kinerja terukur.
            </p>
          </div>

          <div className="solusi-master-detail-wrap">
            {/* Left Column: Vertical Industry Selector Rail */}
            <div className="solusi-sidebar-nav">
              {SECTORS_DATA.map((sector) => {
                const isActive = sector.id === selectedSectorId;
                return (
                  <button
                    key={sector.id}
                    id={sector.id}
                    type="button"
                    onClick={() => setSelectedSectorId(sector.id)}
                    className={`solusi-nav-item ${isActive ? 'active' : ''}`}
                  >
                    <div className="solusi-nav-item-icon">
                      <Icon name={sector.icon} size={20} />
                    </div>
                    <div className="solusi-nav-item-text">
                      <div className="solusi-nav-item-title">{sector.name}</div>
                      <div className="solusi-nav-item-badge">{sector.badge}</div>
                    </div>
                    {isActive && (
                      <span style={{ color: 'var(--ms-blue-text)', display: 'inline-flex' }}>
                        <Icon name="arrow-right" size={16} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Deep-Dive Studio for Selected Sector */}
            <div className="solusi-detail-stage">
              <div className="solusi-detail-header">
                <span className="solusi-detail-eyebrow">{activeSector.badge}</span>
                <h3 className="solusi-detail-title">{activeSector.name}</h3>
                <div className="solusi-detail-tagline">{activeSector.tagline}</div>
                <p className="solusi-detail-desc">{activeSector.description}</p>
              </div>

              {/* Tantangan vs Solusi Comparison Grid */}
              <div className="solusi-comparison-grid">
                <div className="solusi-comparison-box solusi-challenge-box">
                  <div className="solusi-box-title">
                    <Icon name="shield" size={15} />
                    <span>Tantangan Praktik Konvensional</span>
                  </div>
                  <ul className="solusi-box-list">
                    {activeSector.challenges.map((c, idx) => (
                      <li key={idx}>• {c}</li>
                    ))}
                  </ul>
                </div>

                <div className="solusi-comparison-box solusi-solution-box">
                  <div className="solusi-box-title">
                    <Icon name="check" size={15} />
                    <span>Keunggulan Rekayasa Karsasoft</span>
                  </div>
                  <ul className="solusi-box-list">
                    {activeSector.solutions.map((s, idx) => (
                      <li key={idx}>
                        <span style={{ color: 'var(--ms-blue-text)', marginTop: '3px', flexShrink: 0, display: 'inline-flex' }}>
                          <Icon name="check" size={13} />
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3-Step Workflow Pipeline */}
              <div className="solusi-pipeline-container">
                <div className="solusi-pipeline-title">Alur Kerja Sistem Terintegrasi</div>
                <div className="solusi-pipeline-steps">
                  <div className="solusi-pipeline-step">
                    <div className="solusi-step-num">{activeSector.pipeline[0].step}</div>
                    <div className="solusi-step-name">{activeSector.pipeline[0].name}</div>
                  </div>
                  <div className="solusi-pipeline-arrow">
                    <Icon name="arrow-right" size={18} />
                  </div>
                  <div className="solusi-pipeline-step">
                    <div className="solusi-step-num">{activeSector.pipeline[1].step}</div>
                    <div className="solusi-step-name">{activeSector.pipeline[1].name}</div>
                  </div>
                  <div className="solusi-pipeline-arrow">
                    <Icon name="arrow-right" size={18} />
                  </div>
                  <div className="solusi-pipeline-step">
                    <div className="solusi-step-num">{activeSector.pipeline[2].step}</div>
                    <div className="solusi-step-name">{activeSector.pipeline[2].name}</div>
                  </div>
                </div>
              </div>

              {/* Rangkaian Produk Terkait */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ms-text-muted)', marginBottom: '12px', letterSpacing: '0.5px' }}>
                  Modul Produk Terintegrasi untuk Sektor Ini:
                </div>
                <div className="solusi-products-row">
                  {activeSector.products.map((p, idx) =>
                    p.isExternal ? (
                      <a
                        key={idx}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="solusi-stage-product-tile"
                      >
                        <span>{p.name}</span>
                        <Icon name="external-link" size={12} />
                      </a>
                    ) : (
                      <Link key={idx} href={p.href} className="solusi-stage-product-tile">
                        <span>{p.name}</span>
                        <Icon name="arrow-right" size={12} />
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Impact Metrics Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--ms-border)',
                  marginBottom: '28px',
                }}
              >
                {activeSector.metrics.map((m, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ms-blue-text)', fontFamily: 'var(--font-segoe-display)' }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '2px' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Callout */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link
                  href={`/kontak?sektor=${activeSector.id}`}
                  className="btn-primary"
                  style={{ minWidth: '220px', justifyContent: 'center' }}
                >
                  <span>Jadwalkan Konsultasi Solusi Ini</span>
                  <Icon name="arrow-right" size={14} />
                </Link>
                <Link
                  href="/goletin"
                  className="btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  <span>Lihat Seluruh Katalog Aplikasi</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Regulatory Compliance Matrix Table (Format Baru - High Authority) */}
        <section style={{ marginBottom: '64px' }}>
          <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">Validasi Standar & Kepatuhan</span>
            <h2 className="section-title">Matriks Kepatuhan Regulasi Nasional & Internasional</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Membandingkan keunggulan engine perangkat lunak Karsasoft terhadap risiko praktik spreadsheet konvensional dalam proses audit resmi.
            </p>
          </div>

          <div className="solusi-matrix-container">
            <table className="solusi-matrix-table">
              <thead>
                <tr>
                  <th style={{ width: '18%' }}>Standar Regulasi</th>
                  <th style={{ width: '20%' }}>Ruang Lingkup Sektor</th>
                  <th style={{ width: '28%' }}>Risiko Pendekatan Konvensional</th>
                  <th style={{ width: '24%' }}>Solusi Engine Karsasoft</th>
                  <th style={{ width: '10%' }}>Status Kesiapan</th>
                </tr>
              </thead>
              <tbody>
                {COMPLIANCE_MATRIX.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <span className="solusi-matrix-reg-badge">{item.standard}</span>
                    </td>
                    <td style={{ fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      {item.scope}
                    </td>
                    <td style={{ color: '#842029', fontSize: '12px' }}>
                      {item.risk}
                    </td>
                    <td style={{ color: '#0E1726', fontSize: '12px' }}>
                      {item.solution}
                    </td>
                    <td>
                      <span className="solusi-readiness-pill">
                        <Icon name="check" size={11} />
                        <span>{item.readiness}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Interactive Architecture & Security Topology Explorer */}
        <section style={{ marginBottom: '64px' }}>
          <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">Topologi & Arsitektur Jaringan</span>
            <h2 className="section-title">Pilihan Model Penerapan Sesuai Kebijakan Keamanan</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Pilih model topologi di bawah ini untuk melihat spesifikasi arsitektur teknis dan kontrol keamanan data.
            </p>
          </div>

          <div className="solusi-topology-card">
            {/* Topology Switcher Tabs */}
            <div className="solusi-topology-tabs">
              {TOPOLOGIES.map((topo) => (
                <button
                  key={topo.id}
                  type="button"
                  onClick={() => setActiveTopologyId(topo.id)}
                  className={`solusi-topology-tab-btn ${
                    activeTopologyId === topo.id ? 'active' : ''
                  }`}
                >
                  {topo.title}
                </button>
              ))}
            </div>

            {/* Topology Detailed Spec Content */}
            <div className="solusi-topology-content">
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ms-blue-text)', backgroundColor: 'var(--ms-blue-light)', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '12px' }}>
                  {activeTopology.badge}
                </span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '12px' }}>
                  {activeTopology.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '23px', color: 'var(--ms-text-body)', marginBottom: '24px' }}>
                  {activeTopology.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ms-text-muted)' }}>
                    Keunggulan Arsitektur:
                  </div>
                  {activeTopology.benefits.map((b, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--ms-text-body)' }}>
                      <span style={{ display: 'inline-flex', marginTop: '2px', flexShrink: 0, color: 'var(--ms-blue-text)' }}>
                        <Icon name="check" size={14} />
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Spec Box */}
              <div style={{ background: 'var(--ms-bg-subtle)', borderRadius: '12px', border: '1px solid var(--ms-border)', padding: '28px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ms-text-heading)', marginBottom: '18px', borderBottom: '1px solid var(--ms-border)', paddingBottom: '10px' }}>
                  Spesifikasi Teknis & Kepatuhan
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {activeTopology.specs.map((spec, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>{spec.label}:</span>
                      <span style={{ fontWeight: 600, color: 'var(--ms-text-heading)', textAlign: 'right' }}>
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Executive Consultation Banner (Format Baru - Split Executive Advisory) */}
        <div className="solusi-executive-consult-card">
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#00EDC2', letterSpacing: '0.6px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '10px' }}>
              Konsultasi Solusi & Uji Konsep (PoC)
            </span>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px', lineHeight: '38px', fontFamily: 'var(--font-segoe-display)' }}>
              Diskusikan Kebutuhan Spesifik Bersama Solution Architect Karsasoft
            </h2>
            <p style={{ fontSize: '14px', lineHeight: '23px', color: '#CBD5E1', marginBottom: '24px', maxWidth: '580px' }}>
              Setiap institusi memiliki lanskap regulasi dan infrastruktur yang unik. Tim spesialis kami siap membantu penyusunan blueprint implementasi, simulasi validasi matematis, serta penyusunan perjanjian non-disclosure (NDA) formal.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#00EDC2', display: 'inline-flex', flexShrink: 0 }}>
                  <Icon name="check" size={14} />
                </span>
                <span>Perlindungan kerahasiaan data dengan Non-Disclosure Agreement (NDA) resmi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#00EDC2', display: 'inline-flex', flexShrink: 0 }}>
                  <Icon name="check" size={14} />
                </span>
                <span>Sesi demonstrasi live dan validasi kertas kerja bersama tim akuntan / auditor Anda</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#00EDC2', display: 'inline-flex', flexShrink: 0 }}>
                  <Icon name="check" size={14} />
                </span>
                <span>Lingkungan sandbox pengujian Proof-of-Concept (PoC) gratis selama 14 hari</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '28px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
              Jadwalkan Sesi Konsultasi
            </h3>
            <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '20px' }}>
              Respon cepat dalam 1x24 jam kerja dari perwakilan Solution Architect Karsasoft.
            </p>
            <Link
              href="/kontak?tipe=enterprise"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginBottom: '14px' }}
            >
              <span>Ajukan Konsultasi Solusi</span>
              <Icon name="arrow-right" size={15} />
            </Link>
            <div style={{ fontSize: '12px', color: '#94A3B8' }}>
              Atau hubungi via email:{' '}
              <a href="mailto:contact@karsasoft.com" style={{ color: '#00EDC2', textDecoration: 'underline' }}>
                contact@karsasoft.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
