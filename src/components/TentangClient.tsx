'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';

// 1. Core Engineering Pillars Data
const ENGINEERING_PILLARS = [
  {
    id: 'kedaulatan',
    number: '01',
    title: 'Kedaulatan & Independensi Teknologi',
    tag: 'Tanpa Vendor Lock-in Asing',
    icon: 'shield',
    summary:
      'Indonesia berhak memiliki fondasi perangkat lunak mandiri. Karsasoft membangun 100% intellectual property secara in-house tanpa ketergantungan lisensi luar negeri yang rentan risiko nilai tukar dan kebijakan sepihak vendor asing.',
    details: [
      {
        label: 'Kepemilikan Penuh',
        desc: 'Seluruh arsitektur, engine perhitungan, dan baris kode dibangun serta dimiliki oleh PT Karsa Solusi Teknologi.',
      },
      {
        label: 'Bebas Risiko Embargo',
        desc: 'Tidak ada ketergantungan pada runtime cloud proprietary asing yang dapat diputus secara mendadak.',
      },
      {
        label: 'Efisiensi Anggaran Nasional',
        desc: 'Mengurangi pengeluaran devisa negara untuk biaya sewa lisensi tahunan perangkat lunak impor.',
      },
    ],
    metric: {
      value: '100%',
      label: 'Kode In-House & Berdaulat',
    },
  },
  {
    id: 'presisi',
    number: '02',
    title: 'Presisi Regulasi & Akurasi Deterministik',
    tag: 'Standar IAI, IAPI & OJK',
    icon: 'calculator',
    summary:
      'Software finansial dan audit tidak boleh memiliki margin toleransi kesalahan logika. Kami menguji setiap formula kalkulasi hingga 7 digit desimal dengan ribuan skenario pengujian otomatis terhadap aturan resmi regulator.',
    details: [
      {
        label: 'Verifikasi Kertas Kerja',
        desc: 'Formulasi matematis dirancang bersama praktisi audit bersertifikat CPA dan CA Indonesia.',
      },
      {
        label: 'Property-Based Testing',
        desc: 'Pengujian integritas otomatis dengan jutaan transaksi simulasi untuk mendeteksi pembulatan sen terkecil.',
      },
      {
        label: 'Sinkronisasi Regulasi Otomatis',
        desc: 'Pembaruan otomatis saat terdapat perubahan aturan PMK, PSAK baru, atau POJK perbankan.',
      },
    ],
    metric: {
      value: '7 Desimal',
      label: 'Presisi Komputasi Finansial',
    },
  },
  {
    id: 'privasi',
    number: '03',
    title: 'Privasi Mutlak & Kedaulatan Data',
    tag: 'Kepatuhan UU PDP No. 27/2022',
    icon: 'lock',
    summary:
      'Kami menerapkan filosofi Zero Commercial Tracking. Data klien dan institusi tidak pernah dipindai, tidak pernah dijual, dan tidak pernah digunakan untuk melatih kecerdasan buatan publik tanpa persetujuan eksplisit.',
    details: [
      {
        label: 'Pusat Data Tier-4 Indonesia',
        desc: 'Seluruh database dan server berlokasi fisik di wilayah kedaulatan hukum Republik Indonesia.',
      },
      {
        label: 'Enkripsi Menyeluruh (End-to-End)',
        desc: 'Enkripsi AES-256 pada media penyimpanan dan TLS 1.3 selama transmisi data jaringan.',
      },
      {
        label: 'Kesiapan Audit Investigasi',
        desc: 'Immutable audit trail yang merekam setiap modifikasi data secara kriptografis siap pembuktian.',
      },
    ],
    metric: {
      value: 'Tier-4',
      label: 'Fasilitas Data Center Nasional',
    },
  },
  {
    id: 'fluent',
    number: '04',
    title: 'Pengalaman Pengguna Fluent & Berkecepatan Tinggi',
    tag: 'Desain Cepat & Intuitif',
    icon: 'palette',
    summary:
      'Software kepatuhan dan audit tidak harus berpenampilan kuno dan rumit. Kami merancang antarmuka modern yang ringan, responsif secepat kilat, dan memudahkan staf maupun pimpinan mengeksekusi tugas tanpa pelatihan berbelit-belit.',
    details: [
      {
        label: 'Zero-Lag Interface',
        desc: 'Dibangun dengan teknologi web performa tinggi untuk memuat ribuan baris data seketika tanpa jeda.',
      },
      {
        label: 'Hirarki Visual Microsoft Fluent',
        desc: 'Tata letak yang terstruktur rapi, kontras tinggi, dan ramah aksesibilitas di berbagai perangkat.',
      },
      {
        label: 'Onboarding Instan',
        desc: 'Alur kerja alami yang membuat akuntan dan auditor langsung mahir dalam hitungan menit.',
      },
    ],
    metric: {
      value: '< 100ms',
      label: 'Rata-rata Respon Antarmuka',
    },
  },
];

// 2. Timeline Evolusi Karsasoft Data
const MILESTONES = [
  {
    year: '2021',
    phase: 'Fase Fondasi',
    title: 'Riset Matematika Finansial & Forensik Audit',
    desc: 'Memulai riset intensif pengembangan engine komputasi Expected Credit Loss (PSAK 71 / IFRS 9) dan algoritma Benford’s Law (ISA 240) untuk memecahkan beban audit kantor akuntan publik.',
    highlight: 'Kelahiran prototipe ECL Pro & Benford Inspector',
  },
  {
    year: '2022',
    phase: 'Fase Arsitektur',
    title: 'Kelahiran Ekosistem Perangkat Lunak Goletin',
    desc: 'Menggabungkan engine regulasi dengan productivity suite terpadu: Goletin Docs, Sheets, Slides, dan CloudSave. Menghadirkan alternatif software perkantoran mandiri pertama di Indonesia.',
    highlight: 'Integrasi platform produktivitas & cloud berdaulat',
  },
  {
    year: '2023',
    phase: 'Fase Spesialisasi Vertikal',
    title: 'Penetrasi Sektor Nirlaba & Sektor Publik',
    desc: 'Meluncurkan Yaycount ERP yang menjawab kebutuhan puluhan ribu yayasan sesuai standar ISAK 35 & pelaporan dana BOS, serta memperluas modul perpajakan IndoTax PPh 21 TER.',
    highlight: 'Adopsi masif di yayasan pendidikan & pesantren',
  },
  {
    year: '2024–Kini',
    phase: 'Fase Sovereign AI',
    title: 'Kecerdasan Buatan Terisolasi di Server Indonesia',
    desc: 'Menghadirkan Goletin AI on-premise dan private enterprise cloud. Menyediakan asistensi AI dokumen & analisa akuntansi tanpa mengirimkan data keluar dari perimeter keamanan Indonesia.',
    highlight: 'Infrastruktur Private AI siap audit & kepatuhan penuh SPBE',
  },
];

// 3. Standar Regulasi & Matriks Kepatuhan
const REGULATORY_STANDARDS = [
  {
    code: 'IFRS 9 / PSAK 71',
    category: 'Perbankan & Lembaga Keuangan',
    title: 'Expected Credit Loss (ECL)',
    desc: 'Pemodelan perhitungan CKPN multi-stage otomatis untuk portofolio kredit perbankan, BPR, dan multifinance.',
  },
  {
    code: 'PSAK 73 / IFRS 16',
    category: 'Korporasi & Aset',
    title: 'Akuntansi Sewa (Lease)',
    desc: 'Pengakuan aset hak guna (ROU), liabilitas sewa, dan penjadwalan amortisasi diskonto dengan akurasi tinggi.',
  },
  {
    code: 'ISAK 35 / PSAK 45',
    category: 'Yayasan & Pendidikan',
    title: 'Akuntansi Entitas Nirlaba',
    desc: 'Standar baku pembukuan yayasan, rumah sakit nirlaba, LPJ dana BOS, dan pelaporan transparansi publik.',
  },
  {
    code: 'ISA 240 & ISA 530',
    category: 'Kantor Akuntan Publik',
    title: 'Sampling Audit & Deteksi Fraud',
    desc: 'Pengujian entri jurnal akuntansi dengan Hukum Benford dan penentuan ukuran sampel representatif siap kertas kerja.',
  },
  {
    code: 'PMK 168 / UU HPP',
    category: 'Perpajakan Nasional',
    title: 'Pajak Penghasilan PPh 21 TER',
    desc: 'Kalkulasi tarif efektif rata-rata bulanan dan final Desember otomatis terintegrasi dengan payroll korporasi.',
  },
  {
    code: 'SPBE & BSSN',
    category: 'Sektor Publik & Pemerintahan',
    title: 'Kepatuhan SPBE & Keamanan Nasional',
    desc: 'Arsitektur sistem informasi pemerintahan berbasis keamanan terenkripsi dan interoperabilitas Satu Data Indonesia.',
  },
];

// 4. Verification Corporate Governance Facts
const GOVERNANCE_ITEMS = [
  {
    label: 'Nama Resmi Entitas',
    value: 'PT Karsa Solusi Teknologi',
    sub: 'Badan hukum Perseroan Terbatas resmi Republik Indonesia',
  },
  {
    label: 'Model Operasional',
    value: 'Independent Software Product Company',
    sub: 'Fokus 100% pada riset & pengembangan IP produk mandiri',
  },
  {
    label: 'Lokasi Fasilitas Server',
    value: 'Tier-4 Data Center, Jakarta & Cibitung',
    sub: 'Kedaulatan yurisdiksi hukum Indonesia (UU PDP No. 27/2022)',
  },
  {
    label: 'Kerahasiaan Klien',
    value: 'Non-Disclosure Agreement (NDA) Formal',
    sub: 'Perlindungan hukum dan hak audit independen bagi institusi enterprise',
  },
];

export function TentangClient() {
  const [activePillarId, setActivePillarId] = useState<string>('kedaulatan');
  const [activeStandardFilter, setActiveStandardFilter] = useState<string>('Semua');

  const activePillar =
    ENGINEERING_PILLARS.find((p) => p.id === activePillarId) || ENGINEERING_PILLARS[0];

  const standardCategories = ['Semua', 'Perbankan & Lembaga Keuangan', 'Yayasan & Pendidikan', 'Kantor Akuntan Publik', 'Perpajakan Nasional', 'Sektor Publik & Pemerintahan'];

  const filteredStandards =
    activeStandardFilter === 'Semua'
      ? REGULATORY_STANDARDS
      : REGULATORY_STANDARDS.filter((s) => s.category === activeStandardFilter);

  return (
    <div className="section-padding" style={{ paddingTop: '24px' }}>
      <div className="container">
        {/* ====================================================================
            1. COMMANDING EXECUTIVE HERO (Split Layout with Identity Snapshot)
            ==================================================================== */}
        <section className="tentang-hero-section">
          <div className="tentang-hero-grid">
            <div className="tentang-hero-text">
              <span className="tentang-hero-eyebrow">
                <Icon name="code" size={13} />
                <span>PROFIL & MANIFESTO REKAYASA KARSASOFT</span>
              </span>
              <h1 className="tentang-hero-headline">
                Membangun Kedaulatan Perangkat Lunak untuk Fondasi Ekonomi Digital Indonesia
              </h1>
              <p className="tentang-hero-lead">
                <strong>PT Karsa Solusi Teknologi (Karsasoft)</strong> adalah perusahaan riset dan rekayasa perangkat lunak independen di Indonesia. Berbeda dengan agensi atau software house pesanan, kami mendedikasikan 100% kapasitas rekayasa kami untuk merancang, memiliki, dan mengembangkan ekosistem produk digital mandiri: <strong>Ekosistem Goletin</strong>.
              </p>
              <div className="hero-cta-group">
                <Link href="/goletin" className="btn-primary">
                  <span>Jelajahi Portofolio Produk</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/kontak" className="btn-secondary">
                  <span>Hubungi Manajemen Karsasoft</span>
                </Link>
              </div>

              {/* Quick Trust Checks */}
              <div className="tentang-trust-checks">
                <div className="tentang-check-item">
                  <span className="tentang-check-icon">
                    <Icon name="check" size={14} />
                  </span>
                  <span>100% Kepemilikan Kode In-House</span>
                </div>
                <div className="tentang-check-item">
                  <span className="tentang-check-icon">
                    <Icon name="check" size={14} />
                  </span>
                  <span>Data On-Soil (Wilayah RI)</span>
                </div>
                <div className="tentang-check-item">
                  <span className="tentang-check-icon">
                    <Icon name="check" size={14} />
                  </span>
                  <span>Kepatuhan Standar OJK, IAI & IAPI</span>
                </div>
              </div>
            </div>

            {/* Right Side: Identity & Impact Snapshot Card */}
            <div className="tentang-hero-card">
              <div className="tentang-card-header">
                <div>
                  <div className="tentang-card-tag">STATUS KORPORASI</div>
                  <div className="tentang-card-title">Product Company Mandiri</div>
                </div>
                <span className="tentang-card-badge">Terdaftar di RI</span>
              </div>

              <div className="tentang-stats-list">
                <div className="tentang-stat-item">
                  <div className="tentang-stat-number">18+</div>
                  <div className="tentang-stat-label">
                    <strong>Aplikasi & Engine Terpadu</strong>
                    <span>Mencakup produktivitas office, ERP yayasan, dan audit forensik</span>
                  </div>
                </div>

                <div className="tentang-stat-item">
                  <div className="tentang-stat-number">100%</div>
                  <div className="tentang-stat-label">
                    <strong>Kedaulatan Data Nasional</strong>
                    <span>Server & database fisik di Tier-4 Data Center Indonesia</span>
                  </div>
                </div>

                <div className="tentang-stat-item">
                  <div className="tentang-stat-number">7+</div>
                  <div className="tentang-stat-label">
                    <strong>Standar Regulasi Formal</strong>
                    <span>Mematuhi IFRS 9, PSAK 73, ISAK 35, ISA 240, dan PMK 168</span>
                  </div>
                </div>

                <div className="tentang-stat-item">
                  <div className="tentang-stat-number">0%</div>
                  <div className="tentang-stat-label">
                    <strong>Vendor Lock-in Asing</strong>
                    <span>Bebas dari fluktuasi biaya sewa lisensi tahunan luar negeri</span>
                  </div>
                </div>
              </div>

              <div className="tentang-card-footer">
                <Icon name="shield" size={16} />
                <span>Dilindungi kerangka hukum UU PDP No. 27/2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            2. THE ENGINEERING MANIFESTO (Interactive 4 Pillars Explorer)
            ==================================================================== */}
        <section style={{ marginBottom: '72px' }}>
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Prinsip & Filosofi Rekayasa</span>
            <h2 className="section-title">Mengapa Kami Membangun Produk Sendiri?</h2>
            <p className="section-lead" style={{ maxWidth: '760px', margin: '0 auto' }}>
              Kami percaya bahwa ketergantungan abadi pada lisensi asing adalah risiko strategis bagi kedaulatan bangsa. Karsasoft dibangun atas empat pilar filosofi rekayasa yang mendasari setiap baris kode.
            </p>
          </div>

          <div className="tentang-pillars-container">
            {/* Left Column: Interactive Pillar Tabs */}
            <div className="tentang-pillar-tabs">
              {ENGINEERING_PILLARS.map((p) => {
                const isActive = p.id === activePillarId;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePillarId(p.id)}
                    className={`tentang-pillar-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <div className="tentang-pillar-tab-top">
                      <span className="tentang-pillar-num">{p.number}</span>
                      <span className="tentang-pillar-tag">{p.tag}</span>
                    </div>
                    <div className="tentang-pillar-tab-title">{p.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Pillar Showcase */}
            <div className="tentang-pillar-stage">
              <div className="tentang-stage-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="tentang-stage-icon-box">
                    <Icon name={activePillar.icon} size={22} />
                  </div>
                  <div>
                    <span className="tentang-stage-tag">{activePillar.tag}</span>
                    <h3 className="tentang-stage-title">{activePillar.title}</h3>
                  </div>
                </div>
                <div className="tentang-stage-metric-box">
                  <div className="tentang-stage-metric-val">{activePillar.metric.value}</div>
                  <div className="tentang-stage-metric-lbl">{activePillar.metric.label}</div>
                </div>
              </div>

              <p className="tentang-stage-summary">{activePillar.summary}</p>

              <div className="tentang-stage-details-grid">
                {activePillar.details.map((d, idx) => (
                  <div key={idx} className="tentang-stage-detail-card">
                    <div className="tentang-stage-detail-num">0{idx + 1}</div>
                    <div className="tentang-stage-detail-label">{d.label}</div>
                    <p className="tentang-stage-detail-desc">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. ENGINEERING EVOLUTION & MILESTONES (Engaging Visual Timeline)
            ==================================================================== */}
        <section style={{ marginBottom: '72px' }}>
          <div className="section-header-block centered" style={{ marginBottom: '48px' }}>
            <span className="section-eyebrow">Rekam Jejak & Roadmap</span>
            <h2 className="section-title">Evolusi Riset dan Rekayasa Ekosistem</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Dari algoritma matematis forensik yang presisi hingga ekosistem produktivitas komprehensif yang siap melayani jutaan pengguna.
            </p>
          </div>

          <div className="tentang-timeline-wrap">
            <div className="tentang-timeline-track">
              {MILESTONES.map((m, idx) => (
                <div key={idx} className="tentang-timeline-node">
                  <div className="tentang-timeline-marker">
                    <span className="tentang-timeline-dot" />
                    <span className="tentang-timeline-year">{m.year}</span>
                  </div>
                  <div className="tentang-timeline-card">
                    <div className="tentang-timeline-phase">{m.phase}</div>
                    <h3 className="tentang-timeline-title">{m.title}</h3>
                    <p className="tentang-timeline-desc">{m.desc}</p>
                    <div className="tentang-timeline-highlight">
                      <Icon name="check" size={13} />
                      <span>{m.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. REGULATORY STANDARDS MATRIX (With Category Filtering)
            ==================================================================== */}
        <section style={{ marginBottom: '72px' }}>
          <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">Kepatuhan Regulasi & Standar</span>
            <h2 className="section-title">Standar Tertinggi dalam Setiap Baris Kode</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Keunggulan ekosistem Goletin terletak pada ketelitian terhadap aturan akuntansi perbankan, perpajakan nasional, dan audit standar internasional.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="tentang-filter-pills">
            {standardCategories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStandardFilter(cat)}
                className={`tentang-filter-pill ${activeStandardFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="tentang-standards-grid">
            {filteredStandards.map((std, i) => (
              <div key={i} className="tentang-standard-card">
                <div className="tentang-standard-top">
                  <span className="tentang-standard-code">{std.code}</span>
                  <span className="tentang-standard-cat">{std.category}</span>
                </div>
                <h3 className="tentang-standard-title">{std.title}</h3>
                <p className="tentang-standard-desc">{std.desc}</p>
                <div className="tentang-standard-footer">
                  <span className="tentang-standard-badge">
                    <Icon name="check" size={12} />
                    <span>Tervalidasi & Siap Audit</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====================================================================
            5. CORPORATE GOVERNANCE & TRANSPARENCY CARD
            ==================================================================== */}
        <section style={{ marginBottom: '64px' }}>
          <div className="tentang-governance-box">
            <div className="tentang-gov-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon name="building" size={22} />
                <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: 'var(--ms-text-heading)' }}>
                  Tata Kelola Korporasi & Kepastian Hukum
                </h2>
              </div>
              <span className="tentang-gov-badge">Entitas Terdaftar</span>
            </div>

            <div className="tentang-gov-grid">
              {GOVERNANCE_ITEMS.map((item, idx) => (
                <div key={idx} className="tentang-gov-item">
                  <div className="tentang-gov-label">{item.label}</div>
                  <div className="tentang-gov-val">{item.value}</div>
                  <div className="tentang-gov-sub">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            6. EXECUTIVE CONSULTATION & PARTNERSHIP CTA (Locked Button Specs)
            ==================================================================== */}
        <section className="tentang-cta-banner">
          <div className="tentang-cta-inner">
            <div className="tentang-cta-left">
              <span className="tentang-cta-tag">KEMITRAAN & LISENSI ENTERPRISE</span>
              <h2 className="tentang-cta-title">
                Bangun Masa Depan Digital Institusi Anda Bersama Karsasoft
              </h2>
              <p className="tentang-cta-desc">
                Diskusikan arsitektur sistem, uji coba sandbox Proof-of-Concept (PoC), serta skema lisensi mandiri yang dirancang khusus untuk memenuhi standar audit dan tata kelola Anda.
              </p>
            </div>
            <div className="tentang-cta-right">
              <div className="hero-cta-group" style={{ marginBottom: 0, justifyContent: 'flex-end' }}>
                <Link href="/kontak" className="btn-primary">
                  <span>Hubungi Tim Karsasoft</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/solusi" className="btn-secondary">
                  <span>Lihat Solusi Industri</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
