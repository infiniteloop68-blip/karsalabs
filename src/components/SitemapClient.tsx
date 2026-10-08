'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';

interface SitemapItem {
  title: string;
  href: string;
  desc: string;
  tag?: string;
  isExternal?: boolean;
}

interface SitemapCategory {
  id: string;
  title: string;
  icon: string;
  badge: string;
  desc: string;
  items: SitemapItem[];
}

const SITEMAP_DIRECTORY: SitemapCategory[] = [
  {
    id: 'beranda-utama',
    title: 'Beranda & Pusat Ekosistem',
    icon: 'grid',
    badge: 'Navigasi Inti',
    desc: 'Pintu gerbang utama menuju ekosistem perangkat lunak terintegrasi Karsasoft & Goletin.',
    items: [
      {
        title: 'Beranda Karsasoft',
        href: '/',
        desc: 'Halaman muka resmi PT Karsa Solusi Teknologi dan ikhtisar platform Goletin.',
        tag: 'Utama',
      },
      {
        title: 'Katalog Ekosistem Goletin',
        href: '/ekosistem',
        desc: 'Eksplorasi menyeluruh 18+ modul aplikasi produktivitas dan engine regulasi.',
        tag: 'Direktori',
      },
      {
        title: 'Apa itu Goletin?',
        href: '/goletin/apa-itu-goletin',
        desc: 'Panduan pengantar visi kedaulatan data, arsitektur mandiri, dan prinsip rekayasa.',
        tag: 'Edukasi',
      },
      {
        title: 'Portal Goletin Workspace',
        href: '/goletin',
        desc: 'Pusat ruang kerja digital untuk tim, korporasi, institusi nirlaba, dan individu.',
        tag: 'Portal',
      },
    ],
  },
  {
    id: 'produktivitas-office',
    title: 'Produktivitas, Dokumen & AI',
    icon: 'docs',
    badge: 'Ruang Kerja Digital',
    desc: 'Rangkaian office suite mandiri, penyimpanan cloud berdaulat, dan Private AI terisolasi.',
    items: [
      {
        title: 'Goletin AI Multimodal',
        href: '/goletin/ai',
        desc: 'Asisten AI cerdas on-soil untuk analisa data korporasi tanpa kebocoran yurisdiksi.',
        tag: 'Private AI',
      },
      {
        title: 'Goletin Office Suite',
        href: '/goletin/office',
        desc: 'Rangkaian lengkap Docs, Sheets, Slides & PDF kolaboratif dengan format kompatibel Microsoft Office.',
        tag: 'Office Suite',
      },
      {
        title: 'Goletin Docs',
        href: '/goletin/office',
        desc: 'Pengolah dokumen kata kolaboratif online dengan kompatibilitas format standar DOCX.',
        tag: 'Editor Dokumen',
      },
      {
        title: 'CloudSave Cloud Storage',
        href: '/goletin/cloudsave',
        desc: 'Penyimpanan awan terenkripsi penuh di Tier-4 Data Center Indonesia patuh UU PDP.',
        tag: 'Cloud Storage',
      },
      {
        title: 'Sintesis Dokumen Finansial',
        href: '/goletin/sintesis-dokumen',
        desc: 'Ekstraksi cerdas laporan audit, prospektus, dan kontrak keuangan dengan sitasi transparan.',
        tag: 'Analisis Finansial',
      },
      {
        title: 'Goletin Search Privat',
        href: 'https://goletin.com',
        desc: 'Mesin pencari independen tanpa pelacakan riwayat pribadi atau iklan bertarget.',
        tag: 'Zero-Track',
        isExternal: true,
      },
      {
        title: 'Goletin Mail',
        href: 'https://goletin.com',
        desc: 'Layanan surel bisnis resmi dengan enkripsi TLS 1.3 dan perlindungan spam.',
        tag: 'Email Korporasi',
        isExternal: true,
      },
      {
        title: 'Goletin Web Browser',
        href: '/goletin/browser',
        desc: 'Peramban web modern ultra-ringan dengan pemblokir pelacak bawaan, isolasi tab, dan AI sidebar.',
        tag: 'Privasi & Kecepatan',
      },
      {
        title: 'Design Studio Canvas',
        href: '/goletin/design-studio',
        desc: 'Kanvas grafis online berbasis vektor untuk materi promosi, diagram arsitektur, dan visual branding.',
        tag: 'Desain Vektor',
      },
    ],
  },
  {
    id: 'finansial-regulasi',
    title: 'Keuangan, Pajak & Kepatuhan PSAK/IFRS',
    icon: 'calculator',
    badge: 'Otomasi Kepatuhan',
    desc: 'Engine matematis presisi tinggi untuk perhitungan regulasi resmi IAI, OJK, dan DJP.',
    items: [
      {
        title: 'Yaycount ERP',
        href: '/goletin/yaycount',
        desc: 'ERP akuntansi nirlaba berstandar ISAK 35, yayasan, ponpes, RS & pelaporan dana BOS.',
        tag: 'ISAK 35',
      },
      {
        title: 'ECL Pro (Expected Credit Loss)',
        href: '/goletin/ecl-pro',
        desc: 'Pemodelan perhitungan CKPN multi-stage portofolio kredit PSAK 71 / IFRS 9 perbankan.',
        tag: 'PSAK 71 / IFRS 9',
      },
      {
        title: 'Lease Engine (Akuntansi Sewa)',
        href: '/goletin/lease',
        desc: 'Otomasi aset hak guna (ROU) dan liabilitas amortisasi PSAK 73 / IFRS 16.',
        tag: 'PSAK 73 / IFRS 16',
      },
      {
        title: 'IndoTax Perpajakan',
        href: '/goletin/indotax',
        desc: 'Kalkulasi tarif efektif rata-rata PPh 21 TER (PMK 168), PPN, dan ekspor e-SPT masa.',
        tag: 'PPh 21 TER',
      },
      {
        title: 'Fixed Asset Pro',
        href: '/goletin/fixed-asset',
        desc: 'Pengelolaan aset tetap, jadwal penyusutan ganda fiskal vs komersial PSAK 16 & barcode audit.',
        tag: 'PSAK 16',
      },
      {
        title: 'Cashflow AI Engine',
        href: '/goletin/cashflow',
        desc: 'Prediksi arus kas AI 90 hari, deteksi anomali likuiditas, dan rekonsiliasi bank otomatis.',
        tag: 'PSAK 2 & AI',
      },
      {
        title: 'Counting Pro UMKM',
        href: '/goletin/counting-pro',
        desc: 'Software pembukuan dan neraca sederhana berstandar SAK EMKM untuk pelaku bisnis.',
        tag: 'SAK EMKM',
      },
      {
        title: 'Revenue Pro (Pendapatan Kontrak)',
        href: '/goletin/revenue',
        desc: 'Otomatisasi pengakuan pendapatan berbasis kerangka 5-tahap PSAK 72 / IFRS 15.',
        tag: 'PSAK 72 / IFRS 15',
      },
      {
        title: 'Benefits Engine (Imbalan Kerja)',
        href: '/goletin/benefits',
        desc: 'Perhitungan aktuaria kewajiban imbalan kerja pascakerja standar PSAK 219 / IAS 19.',
        tag: 'PSAK 219 / IAS 19',
      },
    ],
  },
  {
    id: 'audit-forensik',
    title: 'Audit Forensik, Deteksi Fraud & Kontrol Internal',
    icon: 'shield',
    badge: 'Standar IAPI & ISA',
    desc: 'Solusi kertas kerja digital dan alat analitik statistik untuk auditor independen dan internal audit.',
    items: [
      {
        title: 'JET Pro (Journal Entry Testing)',
        href: '/goletin/jet-pro',
        desc: 'Pengujian entri jurnal akuntansi dan deteksi fraud berbasis Benford’s Law ISA 240.',
        tag: 'ISA 240',
      },
      {
        title: 'Sampling Pro (Audit Sampling)',
        href: '/goletin/sampling-pro',
        desc: 'Penentuan ukuran sampel statistik representatif & evaluasi batas deviasi ISA 530.',
        tag: 'ISA 530',
      },
      {
        title: 'Counting Pro',
        href: '/goletin/counting-pro',
        desc: 'Stock opname digital via pemindai barcode mobile, analisis selisih stok & audit ISA 501.',
        tag: 'SAK EMKM & ISA 501',
      },
      {
        title: 'ICOFR Pro (Pengendalian Internal SOX 404)',
        href: '/goletin/icofr-pro',
        desc: 'Matriks risiko (RCM), pengujian TOD & TOE, dan kertas kerja audit elektronik (E-WP) ISA 230.',
        tag: 'SOX 404 & ISA 230',
      },
    ],
  },
  {
    id: 'solusi-vertikal',
    title: 'Solusi Vertikal Sektor Industri',
    icon: 'building',
    badge: 'Blueprint Industri',
    desc: 'Spesifikasi arsitektur teknis yang disesuaikan dengan kerangka regulasi industri spesifik.',
    items: [
      {
        title: 'Solusi Industri Terpadu (Portal)',
        href: '/solusi',
        desc: 'Pusat blueprint rekayasa untuk industri kritis dan teregulasi ketat di Indonesia.',
        tag: 'Master Portal',
      },
      {
        title: 'Perbankan & Lembaga Keuangan',
        href: '/solusi',
        desc: 'Solusi kepatuhan OJK, CKPN IFRS 9, PSAK 73 sewa cabang, dan mitigasi risiko kredit.',
        tag: 'OJK & Perbankan',
      },
      {
        title: 'Yayasan & Institusi Pendidikan',
        href: '/goletin/pendidikan',
        desc: 'Program ruang kerja gratis & ERP akuntansi ISAK 35 untuk sekolah, ponpes, dan kampus.',
        tag: 'Pendidikan',
      },
      {
        title: 'Kantor Akuntan Publik (KAP)',
        href: '/solusi',
        desc: 'Rangkaian software analitik audit forensik ISA 240 dan sampling ISA 530 siap kertas kerja.',
        tag: 'KAP & Auditor',
      },
      {
        title: 'Korporasi & Bisnis Enterprise',
        href: '/goletin/enterprise',
        desc: 'Paket integrasi berskala besar, SLA 99.99%, dan opsi deployment Private On-Premise.',
        tag: 'Enterprise',
      },
      {
        title: 'Goletin Console (API & Developer Hub)',
        href: '/goletin/console',
        desc: 'Manajemen API keys, webhook gateway, dan integrasi microservices ekosistem Goletin.',
        tag: 'Developer Hub',
      },
      {
        title: 'Goletin Sovereign Cloud',
        href: '/goletin/sovereign-cloud',
        desc: 'Infrastruktur cloud berdaulat 100% data center Tier-4 di Indonesia patuh UU PDP.',
        tag: 'Sovereign Cloud',
      },
      {
        title: 'Integrasi SSO & SAML 2.0',
        href: '/goletin/sso',
        desc: 'Federasi identitas SAML 2.0, OIDC, siklus akun SCIM 2.0, dan integrasi Entra ID.',
        tag: 'Identity & Access',
      },
      {
        title: 'On-Premise Air-Gapped',
        href: '/goletin/on-premise',
        desc: 'Deployment server lokal fisik tertutup tanpa koneksi internet untuk pertahanan & bank.',
        tag: 'Air-Gapped',
      },
      {
        title: 'Bisnis Menengah & UKM',
        href: '/goletin/bisnis',
        desc: 'Produktivitas kerja terpadu, kompatibilitas office, dan kepatuhan pajak terjangkau.',
        tag: 'Bisnis & UKM',
      },
      {
        title: 'Individu, Profesional & Mahasiswa',
        href: '/goletin/individu',
        desc: 'Paket produktivitas gratis tanpa biaya langganan untuk kebutuhan harian.',
        tag: 'Individu',
      },
      {
        title: 'Instansi Pemerintah & SPBE',
        href: '/solusi',
        desc: 'Arsitektur kedaulatan data nasional selaras SPBE dan standar Satu Data Indonesia.',
        tag: 'SPBE / BSSN',
      },
    ],
  },
  {
    id: 'paket-kemitraan',
    title: 'Paket, Harga & Program Kemitraan',
    icon: 'users',
    badge: 'Komersial & Mitra',
    desc: 'Transparansi skema penetapan harga lisensi dan peluang kemitraan resmi Karsasoft.',
    items: [
      {
        title: 'Paket dan Harga Lisensi',
        href: '/goletin/paket-dan-harga',
        desc: 'Daftar perbandingan paket gratis, individu, bisnis, dan konsultasi lisensi enterprise.',
        tag: 'Daftar Harga',
      },
      {
        title: 'Program Kemitraan Karsasoft',
        href: '/mitra',
        desc: 'Peluang reseller, solution partner, konsultan akuntansi, dan margin komisi hingga 35%.',
        tag: 'Mitra Karsasoft',
      },
      {
        title: 'Program Mitra Ekosistem Goletin',
        href: '/goletin/mitra',
        desc: 'Program pendaftaran integrator sistem dan mitra pengembang aplikasi Goletin.',
        tag: 'Mitra Goletin',
      },
    ],
  },
  {
    id: 'layanan-dukungan',
    title: 'Layanan, Konsultasi & Dukungan Teknis',
    icon: 'laptop',
    badge: 'Layanan Klien',
    desc: 'Pusat bantuan teknis, implementasi sistem, dan formulir konsultasi resmi.',
    items: [
      {
        title: 'Layanan Profesional & Implementasi',
        href: '/layanan',
        desc: 'Jasa integrasi sistem, migrasi data, pelatihan pengguna, dan advisory kepatuhan.',
        tag: 'Implementasi',
      },
      {
        title: 'Pusat Dukungan Pengguna Goletin',
        href: '/goletin/dukungan',
        desc: 'Dokumentasi panduan, pemecahan masalah teknis, basis pengetahuan, & status sistem.',
        tag: 'Bantuan Teknis',
      },
      {
        title: 'Sumber Daya Mandiri',
        href: '/goletin/dukungan/mandiri',
        desc: 'Panduan mandiri langkah-demi-langkah, instalasi desktop, aktivasi, dan shortcut produktivitas.',
        tag: 'Panduan Mandiri',
      },
      {
        title: 'Dukungan Tagihan & Faktur Pajak',
        href: '/goletin/dukungan/tagihan',
        desc: 'Unduh e-Faktur PPN resmi DJP, bukti potong PPh 23, Virtual Account, dan prorate kursi lisensi.',
        tag: 'Tagihan & Pajak',
      },
      {
        title: 'Komunitas Pengguna & Q&A',
        href: '/goletin/dukungan/komunitas',
        desc: 'Forum tanya jawab resmi pengguna Goletin, akuntan, auditor KAP, dan solusi terverifikasi.',
        tag: 'Forum Q&A',
      },
      {
        title: 'Admin Mandiri & Penggelaran IT',
        href: '/goletin/dukungan/admin',
        desc: 'Dokumentasi penggelaran massal silent MSI/GPO, integrasi SSO SAML 2.0/Entra ID, dan SIEM audit log.',
        tag: 'Admin IT',
      },
      {
        title: 'Educator Center & Kampus',
        href: '/goletin/dukungan/edukasi',
        desc: 'Hibah lisensi lab komputer gratis, modul praktikum siap ajar, dan program sertifikasi mahasiswa.',
        tag: 'Akademik',
      },
      {
        title: 'Sumber Daya Mitra & KAP',
        href: '/goletin/dukungan/mitra',
        desc: 'Toolkit kertas kerja audit KAP standar IAPI, dokumentasi REST API, sandbox, dan tiket eskalasi L2/L3.',
        tag: 'Mitra & KAP',
      },
      {
        title: 'Portal Dukungan Pelanggan Resmi',
        href: '/goletin/dukungan',
        desc: 'Pusat tiket bantuan langsung dan eskalasi teknis bagi pengguna berlisensi.',
        tag: 'Pusat Bantuan',
      },
      {
        title: 'Kontak & Konsultasi Eksekutif',
        href: '/kontak',
        desc: 'Formulir penjadwalan demo live, uji coba sandbox PoC 14 hari, dan permintaan NDA.',
        tag: 'Hubungi Kami',
      },
    ],
  },
  {
    id: 'sumber-daya-rekayasa',
    title: 'Pusat Sumber Daya, Riset & Rekayasa',
    icon: 'book',
    badge: 'Pengetahuan & Tools',
    desc: 'Kalkulator TCO lisensi, panduan PSAK/IFRS, dokumentasi REST API, kurikulum pelatihan, roadmap produk, dan riset teknik.',
    items: [
      {
        title: 'Pusat Sumber Daya Goletin',
        href: '/goletin/sumber-daya',
        desc: 'Hub utama seluruh materi panduan, whitepaper kedaulatan data, dan toolkit profesional.',
        tag: 'Hub Utama',
      },
      {
        title: 'Pelajari Penggunaan Goletin AI',
        href: '/goletin/sumber-daya/panduan-ai',
        desc: 'Prompt engineering finansial, OCR multimodal faktur, dan keamanan model sovereign.',
        tag: 'Panduan AI',
      },
      {
        title: 'Kalkulator Penghematan Biaya Lisensi',
        href: '/goletin/sumber-daya/kalkulator-lisensi',
        desc: 'Simulasi interaktif TCO: bandingkan biaya Microsoft 365, Google Workspace, dan SAP vs Goletin.',
        tag: 'Kalkulator TCO',
      },
      {
        title: 'Panduan Kepatuhan Regulasi PSAK & IFRS',
        href: '/goletin/sumber-daya/panduan-regulasi',
        desc: 'Matriks kepatuhan PSAK 71 (IFRS 9), PSAK 73 (IFRS 16), ISAK 35, PMK 168, dan checklist audit KAP.',
        tag: 'Kepatuhan Regulasi',
      },
      {
        title: 'Dokumentasi API & Integrasi Sistem',
        href: '/goletin/sumber-daya/dokumentasi-api',
        desc: 'Spesifikasi REST API v2, Webhook real-time, SDK Node/Python, dan konektor ERP SAP/Oracle.',
        tag: 'Developer Hub',
      },
      {
        title: 'Pusat Edukasi & Pelatihan Tim',
        href: '/goletin/sumber-daya/pelatihan-tim',
        desc: 'Kurikulum bertingkat untuk staf akuntansi, sertifikasi resmi GCFP, dan jadwal workshop.',
        tag: 'Akademi',
      },
      {
        title: 'Peta Strategi AI & Roadmap Rilis',
        href: '/goletin/sumber-daya/roadmap-ai',
        desc: 'Jadwal rilis fitur Q1-Q4 2026-2027, appliance on-premise, dan board voting fitur komunitas.',
        tag: 'Roadmap Produk',
      },
      {
        title: 'Studi Kasus & Riset Implementasi',
        href: '/goletin/sumber-daya/studi-kasus',
        desc: 'Kisah sukses implementasi di perbankan BPR, 85 yayasan sekolah, KAP, dan korporasi ritel.',
        tag: 'Studi Kasus',
      },
      {
        title: 'Goletin Engineering Blog',
        href: '/goletin/sumber-daya/engineering-blog',
        desc: 'Artikel teknis arsitektur WebAssembly, enkripsi zero-knowledge CloudSave, dan fine-tuning SLM.',
        tag: 'Tech Blog',
      },
    ],
  },
  {
    id: 'perusahaan-legalitas',
    title: 'Perusahaan, Tata Kelola & Legalitas',
    icon: 'lock',
    badge: 'Kredibilitas Hukum',
    desc: 'Informasi legalitas entitas, manifesto rekayasa, dan kebijakan privasi kepatuhan.',
    items: [
      {
        title: 'Tentang PT Karsa Solusi Teknologi',
        href: '/tentang',
        desc: 'Profil perusahaan, filosofi rekayasa mandiri, dan komitmen kedaulatan software.',
        tag: 'Profil',
      },
      {
        title: 'Kebijakan Privasi Data',
        href: '/privasi',
        desc: 'Komitmen perlindungan data dan kepatuhan penuh terhadap UU PDP No. 27/2022.',
        tag: 'UU PDP',
      },
      {
        title: 'Ketentuan Penggunaan Layanan',
        href: '/ketentuan',
        desc: 'Perjanjian lisensi pengguna akhir, batasan hak, dan tanggung jawab hukum.',
        tag: 'Syarat Ketentuan',
      },
      {
        title: 'Kebijakan Merek Dagang',
        href: '/merek-dagang',
        desc: 'Panduan hak kekayaan intelektual (HAKI) merek Karsasoft dan ekosistem Goletin.',
        tag: 'HAKI / Merek',
      },
      {
        title: 'Peta Situs Resmi (Halaman Ini)',
        href: '/peta-situs',
        desc: 'Direktori navigasi terstruktur seluruh tautan dan konten situs karsasoft.com.',
        tag: 'Peta Situs',
      },
    ],
  },
];

export function SitemapClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter items based on search and category
  const filteredCategories = useMemo(() => {
    return SITEMAP_DIRECTORY.map((cat) => {
      // If a category tab is selected and doesn't match
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
        return null;
      }

      // If no search query, return full category
      if (!searchQuery.trim()) {
        return cat;
      }

      const q = searchQuery.toLowerCase();
      const filteredItems = cat.items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          (item.tag && item.tag.toLowerCase().includes(q))
      );

      if (filteredItems.length === 0 && !cat.title.toLowerCase().includes(q)) {
        return null;
      }

      return {
        ...cat,
        items: filteredItems.length > 0 ? filteredItems : cat.items,
      };
    }).filter(Boolean) as SitemapCategory[];
  }, [searchQuery, selectedCategory]);

  const totalIndexedLinks = useMemo(() => {
    return SITEMAP_DIRECTORY.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  const totalVisibleLinks = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <div className="section-padding" style={{ paddingTop: '24px' }}>
      <div className="container">
        {/* ====================================================================
            1. COMMAND CENTER EXECUTIVE HERO (Microsoft Fluent Peta Situs)
            ==================================================================== */}
        <section className="sitemap-hero-card">
          <div className="sitemap-hero-inner">
            <div className="sitemap-hero-badge">
              <Icon name="grid" size={13} />
              <span>DIREKTORI & NAVIGASI RESMI KARSASOFT</span>
            </div>
            <h1 className="sitemap-hero-title">
              Peta Situs Karsasoft & Ekosistem Goletin
            </h1>
            <p className="sitemap-hero-desc">
              Eksplorasi seluruh indeks halaman, modul perangkat lunak produktivitas, mesin regulasi finansial, alat audit forensik, solusi vertikal industri, serta dokumentasi korporasi dalam satu direktori terpadu.
            </p>

            {/* Quick Stats Grid */}
            <div className="sitemap-stats-row">
              <div className="sitemap-stat-pill">
                <strong>{totalIndexedLinks}</strong>
                <span>Halaman & Modul Terindeks</span>
              </div>
              <div className="sitemap-stat-pill">
                <strong>8</strong>
                <span>Kategori Direktori Utama</span>
              </div>
              <div className="sitemap-stat-pill">
                <strong>100%</strong>
                <span>Data On-Soil Indonesia</span>
              </div>
              <div className="sitemap-stat-pill">
                <strong>PSAK & IFRS</strong>
                <span>Standar Regulasi Siap Audit</span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            2. REAL-TIME SEARCH & CATEGORY FILTER BAR
            ==================================================================== */}
        <div className="sitemap-controls-card">
          <div className="sitemap-search-wrap">
            <div className="sitemap-search-icon">
              <Icon name="search" size={18} />
            </div>
            <input
              type="text"
              placeholder="Cari produk, regulasi (e.g. PSAK, ISAK, IFRS), solusi industri, atau dokumen hukum..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="sitemap-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="sitemap-clear-btn"
                aria-label="Bersihkan pencarian"
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Horizontal Scrollable) */}
          <div className="sitemap-category-pills">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`sitemap-cat-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            >
              Semua Direktori ({totalIndexedLinks})
            </button>
            {SITEMAP_DIRECTORY.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`sitemap-cat-pill ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.title} ({cat.items.length})
              </button>
            ))}
          </div>

          {/* Result counter indicator */}
          <div className="sitemap-result-info">
            <span>
              Menampilkan <strong>{totalVisibleLinks}</strong> tautan dari total{' '}
              <strong>{totalIndexedLinks}</strong> tautan direktori.
            </span>
            {searchQuery && (
              <span style={{ color: 'var(--ms-blue-text)' }}>
                Hasil pencarian untuk kata kunci &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>
        </div>

        {/* ====================================================================
            3. HIERARCHICAL SITEMAP CATEGORIES & CARDS GRID
            ==================================================================== */}
        {filteredCategories.length === 0 ? (
          <div className="sitemap-empty-state">
            <div className="sitemap-empty-icon">
              <Icon name="search" size={32} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
              Tidak Ada Halaman yang Cocok
            </h3>
            <p style={{ color: 'var(--ms-text-muted)', fontSize: '14px', marginBottom: '20px' }}>
              Tidak ditemukan halaman atau modul dengan kata kunci &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn-primary"
            >
              <span>Reset Pencarian</span>
            </button>
          </div>
        ) : (
          <div className="sitemap-directory-tree">
            {filteredCategories.map((category) => (
              <section key={category.id} className="sitemap-category-section">
                {/* Category Header */}
                <div className="sitemap-category-header">
                  <div className="sitemap-cat-header-left">
                    <div className="sitemap-cat-icon-box">
                      <Icon name={category.icon} size={22} />
                    </div>
                    <div>
                      <div className="sitemap-cat-badge">{category.badge}</div>
                      <h2 className="sitemap-cat-title">{category.title}</h2>
                    </div>
                  </div>
                  <p className="sitemap-cat-desc">{category.desc}</p>
                </div>

                {/* Sub-items Grid */}
                <div className="sitemap-items-grid">
                  {category.items.map((item, idx) => {
                    const isExt = item.isExternal;
                    return (
                      <div key={idx} className="sitemap-item-card">
                        <div className="sitemap-item-top">
                          {item.tag && <span className="sitemap-item-tag">{item.tag}</span>}
                          {isExt ? (
                            <span className="sitemap-item-ext-icon" title="Tautan Eksternal">
                              <Icon name="external-link" size={12} />
                            </span>
                          ) : (
                            <span className="sitemap-item-internal-dot" />
                          )}
                        </div>

                        {isExt ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sitemap-item-link"
                          >
                            <span>{item.title}</span>
                            <Icon name="external-link" size={13} />
                          </a>
                        ) : (
                          <Link href={item.href} className="sitemap-item-link">
                            <span>{item.title}</span>
                            <Icon name="arrow-right" size={13} />
                          </Link>
                        )}

                        <p className="sitemap-item-desc">{item.desc}</p>

                        <div className="sitemap-item-footer">
                          <code className="sitemap-item-path">
                            {item.href.replace('https://', '')}
                          </code>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ====================================================================
            4. EXECUTIVE ACTION FOOTNOTE (Locked Button System)
            ==================================================================== */}
        <section className="sitemap-cta-card">
          <div className="sitemap-cta-inner">
            <div>
              <span className="sitemap-cta-tag">KONSULTASI SOLUSI SPESIFIK</span>
              <h2 className="sitemap-cta-title">
                Tidak Menemukan Modul Regulasi yang Anda Cari?
              </h2>
              <p className="sitemap-cta-desc">
                Tim Solution Architect Karsasoft siap membantu penyusunan blueprint kustom, validasi formula matematis, serta studi kelayakan Proof-of-Concept (PoC) bagi organisasi Anda.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/kontak" className="btn-primary">
                <span>Jadwalkan Konsultasi Solusi</span>
                <Icon name="arrow-right" size={15} />
              </Link>
              <Link href="/solusi" className="btn-secondary">
                <span>Eksplorasi Blueprint Industri</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
