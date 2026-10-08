'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

// Enterprise FAQs
const enterpriseFaqs = [
  {
    q: 'Bagaimana kepatuhan Goletin Enterprise terhadap regulasi transfer data lintas batas dan UU PDP?',
    a: 'Goletin sepenuhnya mematuhi UU No. 27/2022 tentang Pelindungan Data Pribadi (UU PDP), PP No. 71/2019 (PSTE), dan POJK No. 11/POJK.03/2022. Seluruh infrastruktur Sovereign Cloud Goletin bertempat di data center Tier-4 di wilayah hukum Indonesia. Kami memberikan jaminan tanpa transfer data ke yurisdiksi asing, sehingga institusi perbankan, BUMN, dan layanan publik aman dari risiko kepatuhan hukum.',
  },
  {
    q: 'Bisakah Goletin Enterprise diintegrasikan dengan sistem IAM yang sudah kami gunakan seperti Azure AD atau Okta?',
    a: 'Ya. Goletin Enterprise mendukung protokol federasi identitas standar industri termasuk SAML 2.0, OpenID Connect (OIDC), SCIM untuk provisioning pengguna otomatis, serta sinkronisasi direktori Active Directory (AD) / LDAP. Pengguna Anda dapat masuk menggunakan kredensial perusahaan yang sudah ada tanpa perlu membuat kata sandi baru.',
  },
  {
    q: 'Apakah data internal korporasi kami aman saat menggunakan Goletin AI?',
    a: 'Sangat aman. Goletin AI Enterprise beroperasi di lingkungan komputasi terisolasi (Private Tenant VPC atau On-Premise). Kami menyertakan klausul kontraktual legal tertulis yang menjamin bahwa data, dokumen, dan kueri Anda tidak akan pernah digunakan untuk melatih model kecerdasan buatan publik atau diakses oleh pihak ketiga.',
  },
  {
    q: 'Bagaimana proses migrasi dari Microsoft 365 atau Google Workspace ke Goletin?',
    a: 'Tim Enterprise Onboarding Karsasoft menyediakan tools migrasi otomatis untuk memindahkan dokumen, spreadsheet, slide, dan kontak tanpa mengganggu operasional harian. Goletin mendukung kompatibilitas penuh dengan format .docx, .xlsx, .pptx, dan .pdf. Kami juga menyertakan program Change Management dan pelatihan staf untuk memastikan adopsi mulus.',
  },
  {
    q: 'Apakah tersedia opsi On-Premises tanpa koneksi internet (Air-Gapped)?',
    a: 'Ya. Melalui lisensi Enterprise Agreement (EA) Custom, kami menyediakan paket instalasi Air-Gapped menyeluruh yang dapat dijalankan di private server cluster korporasi Anda tanpa koneksi keluar sama sekali. Pembaruan keamanan dan model AI dapat dikirimkan secara berkala melalui media aman terverifikasi.',
  },
  {
    q: 'Mengapa biaya Goletin Enterprise jauh lebih efisien dibanding software impor dari AS?',
    a: 'Produk impor mengenakan tarif dalam mata uang Dolar AS (USD) yang terus meningkat akibat fluktuasi kurs, ditambah pembebanan pajak digital lintas batas. Goletin adalah software yang dikembangkan sepenuhnya di dalam negeri, dengan kontrak berbasis Rupiah (IDR) tetap, tanpa biaya tersembunyi, sehingga menghemat Total Cost of Ownership (TCO) hingga 45-60%.',
  },
];

export default function GoletinEnterprisePage() {
  const [employeeCount, setEmployeeCount] = useState<number>(500);
  const [deploymentTab, setDeploymentTab] = useState<'private-cloud' | 'hybrid' | 'on-premise'>('private-cloud');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    industry: 'Perbankan & Jasa Keuangan',
    userScale: '500 - 2.500 Karyawan',
    deploymentModel: 'Sovereign Cloud Private Tenant',
    needs: [] as string[],
    notes: '',
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleAllFaqs = () => {
    if (openFaqs.length === enterpriseFaqs.length) {
      setOpenFaqs([]);
    } else {
      setOpenFaqs(enterpriseFaqs.map((_, idx) => idx));
    }
  };

  const allFaqsOpen = openFaqs.length === enterpriseFaqs.length;

  // Calculate estimated savings based on employee count
  // Microsoft 365 E5 ~$57/user/mo ≈ Rp912.000/user/mo vs Goletin Enterprise E5 Rp285.000/user/mo (IDR fixed, no FX risk)
  const usdMonthlyPerUser = 912000;
  const goletinMonthlyPerUser = 285000;
  const annualUsdSuite = employeeCount * usdMonthlyPerUser * 12;
  const annualGoletinSuite = employeeCount * goletinMonthlyPerUser * 12;
  const annualSavings = annualUsdSuite - annualGoletinSuite;

  const handleCheckboxChange = (need: string) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(need);
      return {
        ...prev,
        needs: exists ? prev.needs.filter((n) => n !== need) : [...prev.needs, need],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // 4 Strategic Enterprise Pillars with Official SVG Logos
  const enterprisePillars = [
    {
      id: 'pilar-keamanan',
      category: 'KEDAULATAN & ZERO TRUST IDENTITY',
      title: 'Kedaulatan Data Penuh & Tata Kelola Keamanan Militer',
      desc: 'Dirancang memenuhi mandat UU PDP No. 27/2022 dan POJK 11/2022. Seluruh data korporasi tersimpan di Tier-4 Data Center Indonesia dengan enkripsi AES-256 pada status rest dan in-transit, tanpa transmisi lintas batas negara.',
      apps: [
        { name: 'Goletin Console', tag: 'Sentral Tata Kelola & IAM', logo: '/logos/console.svg' },
        { name: 'CloudSave Enterprise', tag: 'Penyimpanan WORM & DLP', logo: '/logos/cloudsave.svg' },
        { name: 'Goletin Browser', tag: 'Workspace Terisolasi Aman', logo: '/logos/browser.svg' },
      ],
      features: [
        'Integrasi SAML 2.0 / OIDC SSO dengan Microsoft Entra ID (Azure AD), Okta, dan Active Directory',
        'Granular Role-Based Access Control (RBAC) dengan pemisahan tugas (Separation of Duties / SoD)',
        'WORM Storage (Write Once, Read Many) tamper-proof untuk kepatuhan arsip hukum dan audit regulator',
        'Data Loss Prevention (DLP) otomatis memblokir kebocoran NIK, nomor rekening, dan data rahasia',
      ],
    },
    {
      id: 'pilar-finansial',
      category: 'ENGINE KEPATUHAN AKUNTANSI KOMPLEKS',
      title: 'Otomatisasi Standar Regulasi Finansial (IFRS / PSAK / Pajak)',
      desc: 'Solusi kepatuhan akuntansi terintegrasi yang menggantikan spreadsheet rawan manipulasi. Perhitungan penurunan nilai instrumen keuangan, amortisasi sewa, hingga pelaporan pajak nasional terhubung ke sistem ERP.',
      apps: [
        { name: 'ECL Pro', tag: 'IFRS 9 / PSAK 71 CKPN', logo: '/logos/eclpro.svg' },
        { name: 'Lease Engine', tag: 'PSAK 73 Right-of-Use', logo: '/logos/lease.svg' },
        { name: 'IndoTax Enterprise', tag: 'PPh 21 TER & e-Faktur Massal', logo: '/logos/indotax.svg' },
        { name: 'Revenue Engine', tag: 'PSAK 72 Kontrak Pelanggan', logo: '/logos/revenue.svg' },
      ],
      features: [
        'Pemodelan Expected Credit Loss (ECL) multi-skenario (Forward-Looking Probability of Default)',
        'Perhitungan otomatis Right-of-Use (RoU) Asset dan diskonto liabilitas sewa ribuan aset korporasi',
        'Kalkulasi PPh 21 TER massal puluhan ribu karyawan, terintegrasi skema pelaporan Core Tax DJP',
        'Penyesuaian imbalan pasca-kerja aktuaria IAS 19 / PSAK 219 terintegrasi modul Benefits',
      ],
    },
    {
      id: 'pilar-forensik',
      category: 'AUDIT FORENSIK DIGITAL & FRAUD DETECTION',
      title: 'Deteksi Kecurangan Berbasis AI & Standar Audit ISA',
      desc: 'Perlengkapan audit internal dan eksternal tingkat tinggi untuk komite audit korporasi, SPI BUMN, dan Kantor Akuntan Publik (KAP). Analisis anomali jurnal transaksi secara otomatis sebelum menjadi temuan hukum.',
      apps: [
        { name: 'JET Pro', tag: 'Hukum Benford ISA 240', logo: '/logos/jet-pro.svg' },
        { name: 'Sampling Pro', tag: 'Monetary Sampling ISA 530', logo: '/logos/sampling.svg' },
        { name: 'ICOFR Pro', tag: 'Internal Control SOX 404', logo: '/logos/icofr.svg' },
        { name: 'Counting Pro', tag: 'Stock Opname Terverifikasi', logo: '/logos/counting-pro.svg' },
      ],
      features: [
        'Journal Entry Testing (JET) mendeteksi manipulasi entri akhir pekan, backdating, dan anomali nominal',
        'Monetary Unit Sampling (MUS) dan Classical Variables Sampling bersertifikasi standar audit internasional',
        'Matriks risiko dan pengendalian internal (RCM) ICOFR siap uji kepatuhan regulator dan BPK/BPKP',
        'Audit trail kriptografis yang mencatat setiap read, update, dan delete dengan stempel waktu terpercaya',
      ],
    },
    {
      id: 'pilar-ai',
      category: 'PRIVATE ENTERPRISE AI ASSISTANT',
      title: 'Kecerdasan Buatan Terdedikasi dengan Jaminan Zero Data Training',
      desc: 'Maksimalkan produktivitas eksekutif dan staf tanpa risiko kebocoran rahasia dagang. Model AI beroperasi di dalam tenant privat korporasi, mematuhi parameter privasi tertinggi tanpa berbagi data ke luar.',
      apps: [
        { name: 'Goletin AI Multimodal', tag: 'Asisten Dokumen & Riset', logo: '/logos/goletin-ai.svg' },
        { name: 'Goletin Semantic Search', tag: 'Pencarian Pengetahuan Korporasi', logo: '/logos/search.svg' },
        { name: 'Goletin Docs Intelligence', tag: 'Sintesis Kontrak & Laporan', logo: '/logos/docs.svg' },
      ],
      features: [
        'Garansi Kontraktual: Data dan kueri korporasi Anda tidak pernah digunakan melatih model publik',
        'Sintesis ribuan halaman laporan keuangan konsolidasi dan riset pasar dalam hitungan detik',
        'Enterprise Knowledge Base: Pencarian dokumen legal, SOP, dan audit internal secara semantik',
        'Penerjemah regulasi finansial dwibahasa (Bahasa Indonesia & Inggris) berstandar terminologi IAI',
      ],
    },
  ];

  // 3 Enterprise Deployment Models
  const deploymentModels = [
    {
      id: 'private-cloud',
      name: 'Sovereign Cloud Private Tenant',
      badge: 'TERPOPULER UNTUK KORPORASI',
      desc: 'Tenant terisolasi penuh di Tier-4 Data Center Indonesia (Jakarta / Cikarang). Seluruh compute, database, dan storage dialokasikan secara eksklusif dengan Dedicated KMS encryption key yang dikuasai korporasi Anda.',
      specs: [
        '100% Data Center di wilayah kedaulatan Republik Indonesia',
        'Dedicated Virtual Private Cloud (VPC) & Dedicated IP',
        'Kunci enkripsi dikelola sendiri (Bring Your Own Key / BYOK)',
        'SLA Uptime 99.99% dengan garansi kompensasi finansial',
        'Sertifikasi ISO 27001, ISO 27701, SOC 2 Type II, dan PCI-DSS',
      ],
      idealFor: 'BUMN, Bank Umum, Asuransi, Rumah Sakit, dan Konglomerasi Nasional.',
    },
    {
      id: 'hybrid',
      name: 'Hybrid Enterprise Grid',
      badge: 'INTEGRASI INFRASTRUKTUR EXISTING',
      desc: 'Padukan pusat data internal (on-premises) dengan infrastruktur Goletin Sovereign Cloud melalui dedicated direct link (IPsec VPN / MPLS). Simpan ledger keuangan inti di on-premise, manfaatkan cloud untuk kolaborasi office dan AI.',
      specs: [
        'Koneksi privat latensi rendah via Direct Connect / Megaport Indonesia',
        'Sinkronisasi Active Directory lokal secara aman via Kerberos / LDAP',
        'Data caching lokal untuk kantor cabang dengan koneksi internet terbatas',
        'Opsi split-storage: data sensitif tetap on-premise, arsip di cloud',
        'Dukungan manajemen multi-site dan disaster recovery (DRC) antar pulau',
      ],
      idealFor: 'Perusahaan manufaktur, perkebunan, pertambangan, dan institusi dengan ratusan cabang.',
    },
    {
      id: 'on-premise',
      name: 'Air-Gapped / Full On-Premise',
      badge: 'KEAMANAN TINGKAT TERTINGGI',
      desc: 'Instalasi menyeluruh seluruh ekosistem Goletin di hardware server dan data center privat milik korporasi Anda. Beroperasi 100% mandiri tanpa memerlukan akses ke internet luar sama sekali (True Air-Gap).',
      specs: [
        'Nol transmisi data ke server luar — 100% offline & mandiri',
        'Penyebaran melalui containerized Kubernetes / OpenShift internal',
        'Pembaruan perangkat lunak offline melalui secure media terotentikasi',
        'Tersedia opsi Source Code Escrow di lembaga notaris terakreditasi',
        'Pendampingan On-site Dedicated Solution Architect & Security Engineer',
      ],
      idealFor: 'Institusi pertahanan, regulator keuangan pusat, intelijen, dan perbankan sistemik inti.',
    },
  ];

  // Enterprise Agreement Plans Comparison
  const enterprisePlans = [
    {
      name: 'Goletin Enterprise E3',
      tier: 'CORE SUITE',
      tagline: 'Standardisasi Produktivitas, ERP & Kolaborasi Seluruh Karyawan',
      price: 'Rp175.000',
      period: 'per pengguna / bulan (kontrak tahunan)',
      badge: 'STANDAR KORPORASI',
      isPopular: false,
      features: [
        'Suite Office Web, Mobile & Desktop (Docs, Sheets, Slides, PDF)',
        'CloudSave Enterprise 1 TB per akun dengan kontrol DLP dasar',
        'Goletin Mail Bisnis 50 GB dengan domain resmi perusahaan',
        'Yaycount Enterprise ERP (Akuntansi, Buku Besar, Kasir & Anggaran)',
        'Single Sign-On (SSO) SAML 2.0 & Sinkronisasi Active Directory',
        'Konsol Administrasi Terpusat dengan Audit Trail Standar',
        'Dukungan Teknis Bisnis 8x5 dengan respon maksimal 2 jam',
        'SLA Ketersediaan Layanan 99.9%',
      ],
      ctaText: 'Pilih Enterprise E3',
      ctaHref: '/kontak?paket=enterprise-e3',
    },
    {
      name: 'Goletin Enterprise E5',
      tier: 'ADVANCED SUITE',
      tagline: 'Keamanan Tingkat Lanjut, Audit Forensik & Engine Kepatuhan IFRS',
      price: 'Rp285.000',
      period: 'per pengguna / bulan (kontrak tahunan)',
      badge: 'PALING DIREKOMENDASIKAN',
      isPopular: true,
      features: [
        'Seluruh fitur yang tercakup pada Goletin Enterprise E3',
        'Penyimpanan CloudSave Unlimited per pengguna dengan WORM Storage',
        'Full Forensic Audit Suite: JET Pro (Benford ISA 240) & Sampling Pro (ISA 530)',
        'Financial Compliance Suite: ECL Pro (IFRS 9) & Lease Engine (PSAK 73)',
        'IndoTax Enterprise: PPh 21 TER massal & kalkulator pajak konsolidasi',
        'Goletin AI Enterprise Dedicated dengan isolasi data perusahaan',
        'Zero Trust Security Suite: Conditional Access & Granular Device Shield',
        'Dukungan Misi Kritis 24/7/365 dengan respon 15 menit (Sev A)',
        'Dedicated Technical Account Manager (TAM) & Solution Architect',
        'SLA Ketersediaan Layanan 99.99% dengan Garansi Finansial',
      ],
      ctaText: 'Pilih Enterprise E5',
      ctaHref: '/kontak?paket=enterprise-e5',
    },
    {
      name: 'Enterprise Agreement (EA) & Air-Gap',
      tier: 'CUSTOM SOVEREIGN',
      tagline: 'Solusi Kustom On-Premise, Integrasi Core Banking & SLA Khusus',
      price: 'Kustom Sesuai Skala',
      period: 'lisensi volume atau unlimited enterprise seat',
      badge: 'BUMN & PERBANKAN',
      isPopular: false,
      features: [
        'Seluruh kapabilitas Enterprise E5 dengan fleksibilitas deployment',
        'Opsi On-Premises Air-Gapped di Data Center internal korporasi',
        'Custom Connector API ke SAP S/4HANA, Oracle ERP, dan Core Banking',
        'Opsi Source Code Escrow dan Audit Kode Keamanan Independen',
        'Pelatihan on-site bersertifikasi dan pendampingan migrasi terpadu',
        'Penyusunan modul kustom sesuai kebijakan internal konglomerasi',
        'Penetapan harga tetap Rupiah multi-tahun tanpa dampak fluktuasi valas',
        'Priority Advisory langsung dari Tim Rekayasa Inti Karsasoft',
      ],
      ctaText: 'Hubungi Tim Enterprise EA',
      ctaHref: '/kontak?paket=enterprise-custom',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated 3D Isometric Enterprise Banner */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-enterprise-hero-banner">
            <div className="goletin-enterprise-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Kedaulatan & Kepatuhan Enterprise</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Ekosistem Berdaulat, Audit Forensik & Finansial
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Dirancang khusus untuk konglomerasi bisnis, perbankan, BUMN, dan regulator. Satu ekosistem terpadu yang memadukan ruang kerja, audit forensik digital, engine kepatuhan IFRS/PSAK, dan Private AI terisolasi.
                </p>
                <div className="hero-cta-group">
                  <a href="#konsultasi" className="btn-primary">
                    <span>Jadwalkan Konsultasi Arsitektur</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#arsitektur" className="btn-secondary">
                    <span>Lihat Model Deployment</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>SLA 99.99% Guaranteed</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kedaulatan Data UU PDP</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Opsi On-Premise Air-Gapped</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Strategic Pillars Section */}
          <section id="sovereign" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '48px' }}>
            <span className="section-eyebrow">EMPAT PILAR STRATEGIS</span>
            <h2 className="section-title">Kapabilitas Lengkap untuk Kebutuhan Korporasi Modern</h2>
            <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Mengintegrasikan seluruh siklus operasional: dari kolaborasi produktivitas harian, 
              otomatisasi kepatuhan finansial perbankan, hingga audit forensik internal berbasis standar global.
            </p>
          </div>

          <div className="enterprise-pillar-grid">
            {enterprisePillars.map((pillar) => (
              <div key={pillar.id} className="enterprise-pillar-box">
                <span className="enterprise-arch-badge">{pillar.category}</span>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '12px', lineHeight: '28px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', lineHeight: '22px', marginBottom: '20px' }}>
                  {pillar.desc}
                </p>

                {/* Mini App Showcase with Official SVG Logos */}
                <div style={{ marginBottom: '20px', padding: '14px', backgroundColor: 'var(--ms-bg-subtle)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ms-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                    Aplikasi Terintegrasi
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                    {pillar.apps.map((app, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', padding: '8px 10px', borderRadius: '6px', border: '1px solid var(--ms-border)' }}>
                        <img src={app.logo} alt={app.name} width={24} height={24} style={{ borderRadius: '4px', flexShrink: 0 }} />
                        <div style={{ overflow: 'hidden' }}>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ms-text-heading)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{app.name}</div>
                          <div style={{ fontSize: '10px', color: 'var(--ms-text-muted)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{app.tag}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature Bullet List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pillar.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '20px' }}>
                      <span style={{ display: 'inline-flex', marginTop: '2px', color: 'var(--ms-blue-text)', flexShrink: 0 }}>
                        <Icon name="check" size={14} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>

      {/* Deployment Models Section */}
      <section id="arsitektur" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
        <span id="deployment" />
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">ARSITEKTUR & PENYEBARAN</span>
            <h2 className="section-title">Pilihan Model Deployment Sesuai Kebijakan Keamanan Anda</h2>
            <p className="section-lead" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Fleksibilitas penuh untuk disesuaikan dengan arsitektur TI dan kepatuhan regulator korporasi Anda.
            </p>
          </div>

          {/* Interactive Deployment Selector */}
          <div className="enterprise-arch-grid">
            {deploymentModels.map((model) => (
              <div
                key={model.id}
                className="enterprise-arch-card"
                style={{
                  borderColor: deploymentTab === model.id ? 'var(--ms-blue-hover)' : 'var(--ms-border-card)',
                  backgroundColor: deploymentTab === model.id ? '#FFFFFF' : '#FAFAFA',
                  boxShadow: deploymentTab === model.id ? '0 8px 24px rgba(0, 125, 101, 0.12)' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => setDeploymentTab(model.id as any)}
              >
                <span className="enterprise-arch-badge">{model.badge}</span>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  {model.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '20px', marginBottom: '16px', flex: 1 }}>
                  {model.desc}
                </p>

                <div style={{ borderTop: '1px solid var(--ms-border)', paddingTop: '14px', marginBottom: '14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ms-text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Spesifikasi Utama:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {model.specs.map((spec, sIdx) => (
                      <li key={sIdx} style={{ fontSize: '12px', color: 'var(--ms-text-body)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '18px' }}>
                        <span style={{ color: 'var(--ms-blue-text)', flexShrink: 0 }}>✓</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ backgroundColor: 'var(--ms-bg-subtle)', padding: '10px 12px', borderRadius: '6px', fontSize: '11px', color: 'var(--ms-text-muted)' }}>
                  <strong style={{ color: 'var(--ms-text-heading)' }}>Sangat cocok untuk:</strong> {model.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive TCO & ROI Cost Calculator */}
      <section id="kalkulator-tco" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">KALKULATOR EFISIENSI TCO</span>
            <h2 className="section-title">Hitung Efisiensi Anggaran Lisensi Korporasi Anda</h2>
            <p className="section-lead" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Bandingkan biaya kepemilikan total (TCO) rangkaian software impor dalam denominasi valas (USD) 
              dengan ekosistem Goletin Enterprise berbasis mata uang Rupiah tetap.
            </p>
          </div>

          <div style={{ maxWidth: '960px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--ms-border-card)', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'center' }}>
              <div>
                <label htmlFor="user-range" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '8px' }}>
                  Jumlah Karyawan / Pengguna Lisensi: <span style={{ color: 'var(--ms-blue-text)', fontSize: '20px', fontWeight: 700 }}>{employeeCount.toLocaleString('id-ID')} Pengguna</span>
                </label>
                <input
                  id="user-range"
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  style={{ width: '100%', height: '8px', borderRadius: '4px', accentColor: 'var(--ms-blue-text)', cursor: 'pointer', marginBottom: '20px' }}
                />

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {[100, 250, 500, 1000, 2500, 5000].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setEmployeeCount(count)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: employeeCount === count ? 'var(--ms-blue-hover)' : 'var(--ms-border)',
                        backgroundColor: employeeCount === count ? 'var(--ms-blue-light)' : '#FFFFFF',
                        color: employeeCount === count ? 'var(--ms-blue-text)' : 'var(--ms-text-heading)',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {count} Users
                    </button>
                  ))}
                </div>

                <div style={{ fontSize: '13px', color: 'var(--ms-text-muted)', lineHeight: '20px' }}>
                  <p style={{ margin: '0 0 6px 0' }}>
                    * Estimasi suite asing dihitung berdasarkan rata-rata lisensi Microsoft 365 E5 ($57/user/bln) 
                    ditambah add-on audit forensik dan perpajakan terpisah.
                  </p>
                  <p style={{ margin: 0 }}>
                    * Goletin Enterprise E5 sudah mencakup seluruh paket: Office, ERP Akuntansi, Engine IFRS 9, 
                    Forensik JET Pro, dan Private AI terintegrasi.
                  </p>
                </div>
              </div>

              {/* Calculator Output Display Box */}
              <div style={{ backgroundColor: 'var(--ms-bg-subtle)', borderRadius: '12px', padding: '28px', border: '1px solid var(--ms-border)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  ESTIMASI PENGHEMATAN TAHUNAN
                </div>
                <div style={{ fontSize: '36px', fontWeight: 700, color: 'var(--ms-blue-text)', fontFamily: 'var(--font-segoe-display)', lineHeight: '1.1', marginBottom: '8px' }}>
                  Rp {(annualSavings / 1000000000).toFixed(2)} Miliar
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '16px' }}>
                  Efisiensi Anggaran ~68.7% per Tahun
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--ms-border)', paddingTop: '14px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>Suite Asing (USD Est):</span>
                    <span style={{ fontWeight: 600, color: 'var(--ms-text-heading)' }}>Rp {(annualUsdSuite / 1000000000).toFixed(2)} M / thn</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>Goletin Enterprise E5:</span>
                    <span style={{ fontWeight: 700, color: 'var(--ms-blue-text)' }}>Rp {(annualGoletinSuite / 1000000000).toFixed(2)} M / thn</span>
                  </div>
                </div>

                <a href="#konsultasi" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Dapatkan Proposal Resmi Korporasi</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Plans & Licensing Comparison */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '44px' }}>
            <span className="section-eyebrow">PAKET LISENSI ENTERPRISE</span>
            <h2 className="section-title">Pilihan Paket Sesuai Kebutuhan Regulasi & Skala Organisasi</h2>
            <p className="section-lead" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Transparan, berdenominasi Rupiah tetap, tanpa risiko fluktuasi valuta asing atau biaya tersembunyi.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {enterprisePlans.map((plan, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: plan.isPopular ? '2px solid var(--ms-blue-hover)' : '1px solid var(--ms-border-card)',
                  borderRadius: '12px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: plan.isPopular ? '0 12px 32px rgba(0, 125, 101, 0.12)' : 'none',
                }}
              >
                {plan.isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'var(--ms-blue-text)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 16px',
                      borderRadius: '4px',
                      letterSpacing: '0.6px',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 8px rgba(0, 125, 101, 0.25)',
                      zIndex: 2,
                      textTransform: 'uppercase',
                      lineHeight: '16px',
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ms-text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {plan.tier}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--ms-text-muted)', minHeight: '38px', marginBottom: '16px', lineHeight: '18px' }}>
                  {plan.tagline}
                </p>

                <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--ms-border)' }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--ms-text-heading)', fontFamily: 'var(--font-segoe-display)' }}>
                    {plan.price}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ms-text-muted)', marginTop: '2px' }}>
                    {plan.period}
                  </div>
                </div>

                <div style={{ flex: 1, marginBottom: '28px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-text-heading)', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Fitur & Kapabilitas:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ fontSize: '13px', color: 'var(--ms-text-body)', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: '19px' }}>
                        <span style={{ color: 'var(--ms-blue-text)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={plan.ctaHref}
                  className={plan.isPopular ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>{plan.ctaText}</span>
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* SLA Performance Grid */}
          <div id="security" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid var(--ms-border-card)', padding: '32px' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span className="section-eyebrow">MISI KRITIS & LAYANAN TERPERCAYA</span>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                Komitmen Service Level Agreement (SLA) Resmi Enterprise
              </h3>
            </div>

            <div className="enterprise-sla-grid">
              <div className="enterprise-sla-card">
                <div className="enterprise-sla-time">15 Mnt</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '4px' }}>Response Time Sev-A</div>
                <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>Insiden kritis langsung ditangani Senior Engineer 24/7</div>
              </div>
              <div className="enterprise-sla-card">
                <div className="enterprise-sla-time">99.99%</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '4px' }}>Uptime Finansial</div>
                <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>Didukung kompensasi kredit layanan dalam kontrak resmi</div>
              </div>
              <div className="enterprise-sla-card">
                <div className="enterprise-sla-time">1-on-1</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '4px' }}>Dedicated TAM</div>
                <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>Technical Account Manager khusus mendampingi tim TI Anda</div>
              </div>
              <div className="enterprise-sla-card">
                <div className="enterprise-sla-time">0 Hari</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '4px' }}>Zero Data Egress</div>
                <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>Jaminan kedaulatan tanpa kebocoran data ke luar negeri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Consultation & PoC Request Form */}
      <section id="konsultasi" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">JADWALKAN KONSULTASI & PROOF-OF-CONCEPT</span>
              <h2 className="section-title">Mulai Uji Coba Proof-of-Concept (PoC) di Korporasi Anda</h2>
              <p className="section-lead">
                Diskusikan arsitektur sistem, skema migrasi data, dan kebutuhan kepatuhan regulasi bersama 
                Enterprise Solution Architect kami. Gratis dan tanpa komitmen.
              </p>
            </div>

            {formSubmitted ? (
              <div
                style={{
                  backgroundColor: 'var(--ms-blue-light)',
                  border: '1px solid var(--ms-blue-hover)',
                  borderRadius: '12px',
                  padding: '36px',
                  textAlign: 'center',
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--ms-blue-hover)', color: '#0E1726', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon name="check" size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  Permintaan Konsultasi Telah Diterima!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', lineHeight: '22px', maxWidth: '600px', margin: '0 auto 20px' }}>
                  Terima kasih, <strong>{formData.fullName}</strong>. Enterprise Solution Architect Karsasoft akan menghubungi Anda via email di <strong>{formData.workEmail}</strong> dalam waktu maksimal 1x24 jam kerja untuk menjadwalkan sesi konsultasi dan penyusunan proposal PoC.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <span>Kirim Formulir Lainnya</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid var(--ms-border-card)',
                  padding: '36px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Raden Hendrawan, S.T., M.Kom."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--ms-border)', fontSize: '14px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Email Resmi Perusahaan *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hendrawan@perusahaan.co.id"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--ms-border)', fontSize: '14px' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Nama Instansi / Perusahaan *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Bank Nusantara Terpadu Tbk"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--ms-border)', fontSize: '14px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Sektor Industri
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--ms-border)', fontSize: '14px', backgroundColor: '#FFFFFF' }}
                    >
                      <option value="Perbankan & Jasa Keuangan">Perbankan & Jasa Keuangan (OJK / BI)</option>
                      <option value="Badan Usaha Milik Negara (BUMN)">Badan Usaha Milik Negara (BUMN)</option>
                      <option value="Pemerintahan & SPBE">Pemerintahan & Lembaga Negara (SPBE)</option>
                      <option value="Konglomerasi Manufaktur & Energi">Konglomerasi Manufaktur & Energi</option>
                      <option value="Kesehatan & Farmasi">Kesehatan & Farmasi</option>
                      <option value="Kantor Akuntan Publik (KAP)">Kantor Akuntan Publik (KAP)</option>
                      <option value="Lainnya">Sektor Lainnya</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Estimasi Skala Pengguna
                    </label>
                    <select
                      value={formData.userScale}
                      onChange={(e) => setFormData({ ...formData, userScale: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--ms-border)', fontSize: '14px', backgroundColor: '#FFFFFF' }}
                    >
                      <option value="100 - 500 Karyawan">100 - 500 Pengguna</option>
                      <option value="500 - 2.500 Karyawan">500 - 2.500 Pengguna</option>
                      <option value="2.500 - 10.000 Karyawan">2.500 - 10.000 Pengguna</option>
                      <option value="> 10.000 Karyawan">&gt; 10.000 Pengguna (Enterprise Scale)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Pilihan Model Deployment
                    </label>
                    <select
                      value={formData.deploymentModel}
                      onChange={(e) => setFormData({ ...formData, deploymentModel: e.target.value })}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--ms-border)', fontSize: '14px', backgroundColor: '#FFFFFF' }}
                    >
                      <option value="Sovereign Cloud Private Tenant">Sovereign Cloud Private Tenant (Tier-4 ID)</option>
                      <option value="Hybrid Enterprise Grid">Hybrid Grid (On-premise + Sovereign Cloud)</option>
                      <option value="Air-Gapped / Full On-Premise">Air-Gapped / Full On-Premise (Nol Koneksi Luar)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '8px' }}>
                    Kebutuhan Solusi Utama (Pilih yang relevan):
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                    {[
                      'Migrasi dari Microsoft 365 / Google',
                      'Kepatuhan IFRS 9 / PSAK 71 (ECL Pro)',
                      'Kepatuhan Sewa PSAK 73 (Lease Engine)',
                      'Audit Forensik JET Pro & Sampling ISA',
                      'Private Enterprise AI (Zero Data Train)',
                      'Integrasi ERP Core Banking / SAP',
                    ].map((item, idx) => (
                      <label
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '13px',
                          color: 'var(--ms-text-body)',
                          backgroundColor: 'var(--ms-bg-subtle)',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.needs.includes(item)}
                          onChange={() => handleCheckboxChange(item)}
                          style={{ accentColor: 'var(--ms-blue-text)' }}
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                    Catatan Kebutuhan Khusus / Persyaratan Regulasi
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Sebutkan kebutuhan integrasi, timeline implementasi, atau persyaratan sertifikasi khusus perusahaan Anda..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--ms-border)', fontSize: '14px', fontFamily: 'inherit' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn-primary" style={{ minWidth: '240px', justifyContent: 'center' }}>
                    <span>Kirim Pengajuan Konsultasi & PoC</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                  <p style={{ fontSize: '12px', color: 'var(--ms-text-muted)', marginTop: '8px' }}>
                    Kerahasiaan data Anda dilindungi Non-Disclosure Agreement (NDA) standar korporasi dan UU PDP.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Enterprise FAQs Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '24px' }}>
            <span className="section-eyebrow">TANYA JAWAB ENTERPRISE</span>
            <h2 className="section-title">Pertanyaan Umum Implementasi Goletin Enterprise</h2>
          </div>

          <div className="goletin-faq-wrapper">
            <div className="goletin-faq-top-bar">
              <span className="goletin-faq-count">{enterpriseFaqs.length} Tanya Jawab Kepatuhan & Arsitektur</span>
              <button
                type="button"
                onClick={toggleAllFaqs}
                className="goletin-faq-toggle-all-btn"
                aria-label={allFaqsOpen ? 'Ciutkan semua pertanyaan' : 'Buka semua pertanyaan'}
              >
                {allFaqsOpen ? 'Ciutkan Semua' : 'Buka Semua'}
              </button>
            </div>

            <div className="goletin-faq-card-surface">
              {enterpriseFaqs.map((faq, idx) => {
                const isOpen = openFaqs.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`goletin-faq-item ${isOpen ? 'is-expanded' : ''}`}
                  >
                    <button
                      type="button"
                      className="goletin-faq-trigger"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`enterprise-faq-${idx}`}
                      id={`enterprise-faq-header-${idx}`}
                    >
                      <span className="goletin-faq-q-text">{faq.q}</span>
                      <span
                        className={`goletin-faq-chevron-wrap ${isOpen ? 'is-open' : ''}`}
                        aria-hidden="true"
                      >
                        <Icon name="chevron-down" size={16} />
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`enterprise-faq-${idx}`}
                        role="region"
                        aria-labelledby={`enterprise-faq-header-${idx}`}
                        className="goletin-faq-content"
                      >
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="goletin-faq-footer-note">
              <p>
                Butuh kajian arsitektur khusus atau format Non-Disclosure Agreement (NDA) perusahaan?{' '}
                <a href="#konsultasi" className="goletin-faq-footer-link">
                  <span>Jadwalkan sesi bersama Enterprise Solution Architect</span>
                  <Icon name="chevron-right" size={14} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Final Action Banner with Fluid Illustration */}
      <div className="section-padding">
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kedaulatan & Efisiensi Korporasi
              </span>
              <h2 className="goletin-bottom-cta-title">
                Wujudkan Kedaulatan Digital & Efisiensi Anggaran Anda
              </h2>
              <p className="goletin-bottom-cta-desc">
                Diskusikan arsitektur sistem, skema migrasi terpadu, dan kepatuhan regulasi bersama Enterprise Solution Architect Karsasoft. Uji coba Proof-of-Concept gratis tanpa komitmen.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a href="#konsultasi" className="btn-primary">
                  <span>Jadwalkan Konsultasi Sekarang</span>
                  <Icon name="arrow-right" size={15} />
                </a>
                <Link href="/kontak" className="btn-secondary">
                  <span>Hubungi Penjualan Korporasi</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
