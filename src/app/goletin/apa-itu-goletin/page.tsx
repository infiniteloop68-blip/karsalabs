import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Apa itu Goletin? — Ekosistem Perangkat Lunak Mandiri Karsasoft',
  description:
    'Pelajari bagaimana Goletin menyatukan 18+ aplikasi produktivitas, keuangan, AI, dan kepatuhan regulasi dalam satu ekosistem terintegrasi buatan Indonesia.',
  alternates: {
    canonical: '/goletin/apa-itu-goletin',
  },
  openGraph: {
    title: 'Apa itu Goletin? — Ekosistem Perangkat Lunak Mandiri Karsasoft',
    description:
      'Pelajari bagaimana Goletin menyatukan 18+ aplikasi produktivitas, keuangan, AI, dan kepatuhan regulasi.',
    url: 'https://karsasoft.com/goletin/apa-itu-goletin',
    images: ['/og-image.jpg'],
  },
};

export default function ApaItuGoletinPage() {
  const pillars = [
    {
      id: 'ai-search',
      title: 'Kecerdasan Buatan & Pencarian Privat',
      description:
        'Goletin AI adalah asisten kecerdasan buatan multimodal yang mampu menganalisis teks, gambar, dan dokumen keuangan. Goletin Search adalah mesin pencarian privat tanpa pelacakan iklan — memberikan hasil yang netral dan relevan.',
      features: [
        'Analisis dan sintesis dokumen finansial otomatis',
        'Mesin pencarian privat tanpa tracking atau profiling',
        'Prompt engineering untuk kepatuhan regulasi keuangan',
        'Dukungan multi-bahasa termasuk Bahasa Indonesia',
      ],
      icon: 'ai',
      miniCards: [
        { name: 'Goletin AI', role: 'AI Multimodal', logo: '/logos/goletin-ai.svg' },
        { name: 'Goletin Search', role: 'Pencarian Privat', logo: '/logos/search.svg' },
        { name: 'Goletin Browser', role: 'Browser Mandiri', logo: '/logos/browser.svg' },
        { name: 'Goletin Console', role: 'Terminal Analisis', logo: '/logos/console.svg' },
      ],
    },
    {
      id: 'office-cloud',
      title: 'Ruang Kerja Awan & Produktivitas',
      description:
        'Suite aplikasi produktivitas modern berbasis cloud: pengolah kata, spreadsheet, presentasi, email bisnis, dan penyimpanan terenkripsi. Semua terintegrasi dalam satu portal dengan Single Sign-On.',
      features: [
        'Goletin Docs, Sheets, dan Slides untuk kolaborasi real-time',
        'CloudSave dengan penyimpanan terenkripsi di data center lokal',
        'Goletin Mail untuk email bisnis kustom domain perusahaan',
        'Goletin PDF Suite untuk konversi dan anotasi dokumen',
      ],
      icon: 'laptop',
      miniCards: [
        { name: 'Docs', role: 'Dokumen Cloud', logo: '/logos/docs.svg' },
        { name: 'Sheets', role: 'Spreadsheet Kolaboratif', logo: '/logos/sheets.svg' },
        { name: 'Slides', role: 'Presentasi Interaktif', logo: '/logos/slides.svg' },
        { name: 'CloudSave', role: 'Penyimpanan Enkripsi', logo: '/logos/cloudsave.svg' },
      ],
    },
    {
      id: 'erp-finance',
      title: 'ERP Akuntansi & Perpajakan',
      description:
        'Yaycount adalah ERP akuntansi lengkap untuk yayasan dan organisasi nirlaba sesuai ISAK 35. IndoTax adalah kalkulator perpajakan yang mengakomodasi tarif PPh 21 TER, PPN, dan e-SPT secara otomatis.',
      features: [
        'Yaycount ERP: pencatatan buku besar, laporan aktivitas ISAK 35',
        'IndoTax: perhitungan PPh 21 TER, e-Faktur PPN, dan e-SPT otomatis',
        'Counting Pro: akuntansi SAK EMKM untuk UMKM dan bisnis kecil',
        'Fixed Asset Pro: manajemen aset tetap dan penyusutan otomatis',
      ],
      icon: 'briefcase',
      miniCards: [
        { name: 'Yaycount', role: 'ERP Yayasan ISAK 35', logo: '/logos/yaycount.svg' },
        { name: 'IndoTax', role: 'Kalkulator Pajak TER', logo: '/logos/indotax.svg' },
        { name: 'Counting Pro', role: 'Akuntansi UMKM', logo: '/logos/counting-pro.svg' },
        { name: 'Benefits', role: 'Kompensasi Karyawan', logo: '/logos/benefits.svg' },
      ],
    },
    {
      id: 'compliance',
      title: 'Kepatuhan Regulasi & Audit',
      description:
        'Engine kalkulasi presisi untuk standar regulasi internasional: IFRS 9 (CKPN kredit macet), PSAK 73 (sewa aset), PSAK 72 (pendapatan kontrak), hingga ISA 530 (sampling audit) dan ISA 240 (deteksi fraud).',
      features: [
        'ECL Pro: pemodelan Expected Credit Loss multi-stage (IFRS 9)',
        'Lease Engine: amortisasi sewa dan ROU Asset (PSAK 73 / IFRS 16)',
        'Revenue Pro: pengakuan pendapatan 5-tahap (PSAK 72 / IFRS 15)',
        'Sampling Pro & JET Pro: pengujian jurnal dan Hukum Benford (ISA 530/240)',
      ],
      icon: 'shield',
      miniCards: [
        { name: 'ECL Pro', role: 'CKPN IFRS 9 / PSAK 71', logo: '/logos/eclpro.svg' },
        { name: 'Lease Engine', role: 'PSAK 73 / IFRS 16', logo: '/logos/lease.svg' },
        { name: 'Revenue Pro', role: 'PSAK 72 / IFRS 15', logo: '/logos/revenue.svg' },
        { name: 'JET Pro', role: 'Audit ISA 240 & 530', logo: '/logos/jet-pro.svg' },
      ],
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Microsoft 365 Style Hero Banner with Illustration Background */}
          <div className="ms-hero-wrapper goletin-hero-banner">
            <div className="goletin-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Mengenal Goletin</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Apa itu Goletin?
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Ekosistem perangkat lunak mandiri buatan Karsasoft yang menyatukan <strong>18+ aplikasi</strong> dalam satu platform terintegrasi — mulai dari AI generatif multimodal, suite produktivitas kantor, ERP akuntansi, hingga engine kalkulasi kepatuhan standar keuangan internasional IFRS dan PSAK.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka Portal Goletin</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <Link
                    href="/goletin/paket-dan-harga"
                    className="btn-secondary"
                  >
                    <span>Lihat Paket & Harga</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>18+ Aplikasi Terintegrasi</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>100% Server di Indonesia</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kepatuhan Regulasi Nasional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid (Microsoft Fluent Elevation) */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">18+</div>
              <div className="goletin-stat-title">Aplikasi Terintegrasi</div>
              <p className="goletin-stat-sub">Produktivitas, AI, ERP, & Kepatuhan</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">4</div>
              <div className="goletin-stat-title">Pilar Utama</div>
              <p className="goletin-stat-sub">AI, Cloud, Finansial, & Regulasi</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">SSO</div>
              <div className="goletin-stat-title">Single Sign-On</div>
              <p className="goletin-stat-sub">Satu akun untuk seluruh modul kerja</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Kedaulatan Lokal</div>
              <p className="goletin-stat-sub">Data center & kepatuhan hukum RI</p>
            </div>
          </div>
        </div>
      </div>

      {/* How Goletin Works */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Satu Ekosistem, Empat Pilar</span>
            <h2 className="section-title">Bagaimana Goletin Bekerja</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Goletin dirancang sebagai ekosistem modular — Anda dapat menggunakan satu aplikasi secara mandiri, 
              atau mengintegrasikan seluruhnya dalam satu alur kerja organisasi yang terhubung.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '24px' }}>
            {[
              { step: '01', title: 'Satu Akun', desc: 'Masuk ke portal Goletin.com dengan satu akun untuk mengakses seluruh ekosistem aplikasi.', icon: 'lock' },
              { step: '02', title: 'Pilih Modul', desc: 'Aktifkan modul yang sesuai kebutuhan: Office, ERP, Pajak, AI, atau engine kepatuhan regulasi.', icon: 'grid' },
              { step: '03', title: 'Terintegrasi', desc: 'Setiap aplikasi saling terhubung — data mengalir otomatis antar modul tanpa ekspor-impor manual.', icon: 'link' },
              { step: '04', title: 'Skalabel', desc: 'Mulai dari 1 pengguna individu hingga ribuan pengguna enterprise dengan infrastruktur yang sama.', icon: 'users' },
            ].map((item) => (
              <div key={item.step} className="segment-product-tile" style={{ textAlign: 'center' }}>
                <div className="segment-tile-icon" style={{ margin: '0 auto 16px' }}>
                  <Icon name={item.icon} size={22} />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-blue-text)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  LANGKAH {item.step}
                </div>
                <div className="segment-tile-title">{item.title}</div>
                <p className="segment-tile-desc" style={{ marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar Sections */}
      {pillars.map((pillar, index) => (
        <section key={pillar.id} id={pillar.id} className="pillar-section" style={{ borderTop: '1px solid var(--ms-border)' }}>
          <div className="container">
            <div className={`pillar-grid ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="pillar-text">
                <span className="section-eyebrow">Pilar {index + 1} dari 4</span>
                <h2>{pillar.title}</h2>
                <p>{pillar.description}</p>
                <div className="pillar-features">
                  {pillar.features.map((feat, fi) => (
                    <div key={fi} className="pillar-feature-item">
                      <div className="pillar-feature-check">
                        <Icon name="check" size={12} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pillar-visual">
                <div className="pillar-mini-cards">
                  {pillar.miniCards.map((mc, mi) => (
                    <div key={mi} className="pillar-mini-card">
                      <div className="pillar-mini-card-icon">
                        <img src={mc.logo} alt={mc.name} width={40} height={40} />
                      </div>
                      <div className="pillar-mini-card-name">{mc.name}</div>
                      <span className="pillar-mini-card-badge">{mc.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Goletin? Differentiator Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Mengapa Memilih Goletin?</span>
            <h2 className="section-title">Keunggulan Ekosistem Goletin</h2>
          </div>
          <div className="segment-use-cases">
            {[
              { icon: 'shield', title: 'Kedaulatan Data Penuh', desc: 'Seluruh data diproses dan disimpan di data center Indonesia. Tidak ada pelacakan komersial, tidak ada jual beli data pengguna.' },
              { icon: 'compliance', title: 'Kepatuhan Regulasi Tertinggi', desc: 'Setiap modul keuangan dan audit diuji ketat mematuhi standar resmi IAI, IAPI, OJK, dan Dirjen Pajak.' },
              { icon: 'calculator', title: 'Biaya Lisensi Terjangkau', desc: 'Harga yang disesuaikan untuk pasar Indonesia — tanpa markup kurs dolar, tanpa biaya tersembunyi per-modul tambahan.' },
              { icon: 'grid', title: 'Satu Portal, Semua Aplikasi', desc: 'Login sekali untuk mengakses 18+ aplikasi. Tidak perlu membeli lisensi terpisah dari vendor yang berbeda-beda.' },
              { icon: 'ai', title: 'AI Multimodal Terintegrasi', desc: 'Goletin AI bukan produk terpisah — ia terintegrasi langsung di dalam setiap modul untuk membantu analisis dan automasi.' },
              { icon: 'team', title: 'Dukungan Lokal Berbahasa Indonesia', desc: 'Tim dukungan teknis dan onboarding langsung dari Indonesia dengan pemahaman regulasi dan konteks bisnis lokal.' },
            ].map((item, i) => (
              <div key={i} className="use-case-card">
                <div className="use-case-icon">
                  <Icon name={item.icon} size={20} />
                </div>
                <div className="use-case-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Enterprise CTA Banner with Illustration */}
      <div className="section-padding">
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Mulai Sekarang
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Mencoba Ekosistem Goletin?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Daftar akun gratis atau hubungi tim penjualan Karsasoft untuk mendapatkan demonstrasi langsung dan skema lisensi enterprise.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a
                  href="https://goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Coba Goletin Gratis</span>
                  <Icon name="external-link" size={15} />
                </a>
                <Link href="/kontak" className="btn-secondary">
                  <span>Hubungi Tim Penjualan</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
