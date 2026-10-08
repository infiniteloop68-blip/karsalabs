import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq } from '@/components/GoletinFaq';

export const metadata: Metadata = {
  title: 'Goletin untuk Pendidikan — Solusi Digital Sekolah, Kampus & Yayasan',
  description:
    'Ekosistem perangkat lunak terpadu untuk sekolah, madrasah, dan universitas di Indonesia: Office kolaboratif gratis bagi pelajar, email institusi, serta ERP akuntansi yayasan ISAK 35.',
  alternates: {
    canonical: '/goletin/pendidikan',
  },
  openGraph: {
    title: 'Goletin untuk Pendidikan — Solusi Digital Sekolah, Kampus & Yayasan',
    description:
      'Ekosistem perangkat lunak terpadu untuk sekolah, madrasah, dan universitas di Indonesia.',
    url: 'https://karsasoft.com/goletin/pendidikan',
    images: ['/og-image.jpg'],
  },
};

const educationFaqItems = [
  {
    id: 'diskon-40',
    q: 'Bagaimana cara sekolah atau kampus mendapatkan diskon khusus pendidikan 40%?',
    a: 'Institusi cukup mengajukan verifikasi legalitas sekolah (NPSN / Izin Operasional Kemenag/Kemendikbud) melalui formulir kontak. Tim representatif Karsasoft akan memverifikasi dalam 1x24 jam dan mengaktifkan tarif khusus kemitraan pendidikan.',
  },
  {
    id: 'gratis-siswa',
    q: 'Apakah akun untuk siswa dan guru benar-benar gratis?',
    a: 'Ya, paket dasar Goletin (Docs, Sheets, Slides, dan CloudSave 5 GB) dapat digunakan secara cuma-cuma oleh pelajar dan guru dengan mendaftar di portal Goletin. Untuk institusi yang menginginkan email berdomain sekolah kustom (@sekolah.sch.id) serta konsol manajemen terpusat, tersedia paket institusi dengan biaya lisensi terjangkau.',
  },
  {
    id: 'yaycount-isak35',
    q: 'Mengapa Yaycount ERP sangat penting untuk yayasan pendidikan di Indonesia?',
    a: 'Sebagian besar yayasan pendidikan di Indonesia diwajibkan mematuhi standar akuntansi nirlaba (ISAK 35 / PSAK 45). Yaycount ERP secara spesifik mengakomodasi laporan posisi keuangan, laporan aktivitas terikat & tidak terikat, serta pelaporan dana BOS yang tidak dimiliki oleh software akuntansi komersial biasa.',
  },
  {
    id: 'keamanan-data',
    q: 'Di mana data tugas dan dokumen sekolah kami disimpan?',
    a: 'Seluruh data ekosistem Goletin di-hosting pada infrastruktur Sovereign Cloud di pusat data Tier-4 lokal di Jakarta dan Surabaya. Kami menjamin kepatuhan penuh terhadap UU No. 27/2022 tentang Pelindungan Data Pribadi (UU PDP). Data sekolah Anda tidak akan diprofiling untuk iklan pihak ketiga.',
  },
];

export default function GoletinPendidikanPage() {
  const educationProducts = [
    {
      icon: 'file-text',
      title: 'Goletin Office Kolaboratif',
      desc: 'Aplikasi Docs, Sheets, Slides, dan PDF Suite versi web & desktop. Siswa dan guru dapat mengerjakan tugas bersama secara real-time tanpa biaya lisensi mahal.',
      link: '/goletin#pilar',
      logo: '/logos/docs.svg',
      tag: 'Office & Tugas',
    },
    {
      icon: 'briefcase',
      title: 'Yaycount ERP Pendidikan',
      desc: 'Sistem akuntansi terintegrasi untuk yayasan sekolah, pesantren, dan perguruan tinggi. Otomatisasi pencatatan SPP, dana BOS/BOP, dan kepatuhan standar ISAK 35.',
      link: 'https://yaycount.goletin.com',
      isExternal: true,
      logo: '/logos/yaycount.svg',
      tag: 'Akuntansi & SPP',
    },
    {
      icon: 'mail',
      title: 'Goletin Mail Institusi',
      desc: 'Email resmi sekolah atau kampus dengan domain sendiri (@sekolah.sch.id atau @kampus.ac.id). Kotak surat aman, bebas spam, dan tanpa iklan komersial.',
      link: '/goletin#pilar',
      logo: '/logos/mail.svg',
      tag: 'Domain Resmi',
    },
    {
      icon: 'database',
      title: 'CloudSave Kampus & Sekolah',
      desc: 'Penyimpanan awan terenkripsi untuk modul ajar, video pembelajaran, silabus, dan arsip dokumen akreditasi sekolah di data center lokal Indonesia.',
      link: '/goletin#pilar',
      logo: '/logos/cloudsave.svg',
      tag: 'Penyimpanan Cloud',
    },
    {
      icon: 'ai',
      title: 'Goletin AI untuk Edukasi',
      desc: 'Asisten kecerdasan buatan etis untuk membantu riset akademis, analisis data tugas akhir, dan sintesis literatur ilmiah dalam Bahasa Indonesia.',
      link: 'https://ai.goletin.com',
      isExternal: true,
      logo: '/logos/goletin-ai.svg',
      tag: 'Riset & Penalaran',
    },
    {
      icon: 'file-check',
      title: 'IndoTax Pendidikan',
      desc: 'Manajemen pemotongan pajak honorarium guru/dosen tamu (PPh 21 TER) dan pelaporan SPT tahunan badan yayasan pendidikan secara otomatis.',
      link: 'https://indotax.goletin.com',
      isExternal: true,
      logo: '/logos/indotax.svg',
      tag: 'Kepatuhan Pajak',
    },
  ];

  const educationPersonas = [
    {
      icon: 'book-open',
      role: 'Untuk Siswa & Mahasiswa',
      desc: 'Akses penuh ke alat produktivitas penting untuk mendukung prestasi belajar tanpa membebani biaya orang tua.',
      benefits: [
        'Editor Docs, Sheets, dan Slides gratis dengan akun institusi',
        'Penyimpanan cloud CloudSave untuk tugas dan materi pelajaran',
        'Kolaborasi tugas kelompok secara real-time dari laptop atau smartphone',
        'Tanpa iklan pelacak dan perlindungan privasi data pribadi siswa',
      ],
    },
    {
      icon: 'users',
      role: 'Untuk Guru & Pendidik',
      desc: 'Permudah persiapan mengajar, distribusi tugas, dan evaluasi hasil belajar dalam satu ruang kerja digital.',
      benefits: [
        'Template silabus, modul ajar, dan slide presentasi interaktif',
        'Beri feedback dan koreksi dokumen siswa secara langsung',
        'Email resmi institusi untuk komunikasi terpercaya dengan wali murid',
        'Arsip materi digital yang aman dan dapat diakses setiap semester',
      ],
    },
    {
      icon: 'briefcase',
      role: 'Untuk Yayasan & Manajemen Sekolah',
      desc: 'Tata kelola keuangan, pelaporan dana bantuan pemerintah, dan manajemen aset sekolah yang akuntabel dan siap audit.',
      benefits: [
        'Yaycount ERP khusus yayasan pendidikan sesuai PSAK 45 / ISAK 35',
        'Pencatatan real-time penerimaan SPP, infak, dan iuran kegiatan',
        'Pengelolaan dan pelaporan pertanggungjawaban dana BOS/BOP',
        'Kontrol hak akses terpusat untuk kepala sekolah, bendahara, dan staf',
      ],
    },
  ];

  const plans = [
    {
      name: 'Goletin Siswa & Guru',
      badge: 'AKSES GRATIS',
      price: 'Rp0',
      period: 'selamanya untuk siswa & guru terverifikasi',
      desc: 'Ditujukan bagi siswa, mahasiswa, dan guru mandiri yang ingin menggunakan office suite modern.',
      features: [
        'Goletin Docs, Sheets, Slides versi web',
        'CloudSave penyimpanan personal 5 GB',
        'Goletin Search privat tanpa iklan',
        'Akses Goletin AI 30 interaksi/hari',
        'Kolaborasi real-time multi-pengguna',
      ],
      ctaText: 'Mulai Belajar Gratis',
      ctaHref: 'https://goletin.com',
      isExternal: true,
      isPopular: false,
    },
    {
      name: 'Institusi Sekolah & Madrasah',
      badge: 'DISKON YAYASAN 40%',
      price: 'Rp15.000',
      period: 'per akun staf / bulan (siswa gratis)',
      desc: 'Solusi lengkap sekolah dan madrasah dengan kontrol domain, email resmi, dan ruang kerja awan bersama.',
      features: [
        'Seluruh fitur paket Siswa & Guru',
        'Email resmi institusi (@sch.id / domain sekolah)',
        'CloudSave 50 GB per staf pengajar',
        'Portal administrasi & pengelolaan pengguna terpusat',
        'Aplikasi desktop offline untuk lab komputer sekolah',
        'Dukungan teknis prioritas dan sesi pelatihan guru',
      ],
      ctaText: 'Ajukan Diskon Sekolah',
      ctaHref: '/kontak?tipe=pendidikan',
      isExternal: false,
      isPopular: true,
    },
    {
      name: 'Kampus & Yayasan Terpadu',
      badge: 'SOLUSI TERINTEGRASI',
      price: 'Kustom',
      period: 'berdasarkan skala kampus & modul yayasan',
      desc: 'Paket menyeluruh untuk universitas, politeknik, dan yayasan besar dengan sistem akuntansi Yaycount ERP.',
      features: [
        'Seluruh fitur paket Institusi Sekolah',
        'Yaycount ERP Akuntansi Yayasan ISAK 35 lengkap',
        'Modul penerimaan SPP & pelaporan dana BOS/hibah',
        'IndoTax untuk kepatuhan pajak honor pengajar',
        'Integrasi SSO / Single Sign-On dengan SIAKAD kampus',
        'Dedicated server hosting di data center Tier-4 Indonesia',
        'SLA 99.99% dengan Account Manager khusus',
      ],
      ctaText: 'Konsultasi Tim Ahli',
      ctaHref: '/kontak?tipe=kampus-yayasan',
      isExternal: false,
      isPopular: false,
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated 3D Isometric Campus Illustration */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-pendidikan-hero-banner">
            <div className="goletin-pendidikan-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Program Pendidikan & Yayasan</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Berdayakan Siswa, Pendidik & Institusi
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Solusi ruang kerja digital terintegrasi untuk sekolah, madrasah, pesantren, dan universitas di Indonesia. Dilengkapi office kolaboratif gratis bagi pelajar, email resmi institusi, serta ERP Yaycount.
                </p>
                <div className="hero-cta-group">
                  <Link href="/kontak?tipe=pendidikan" className="btn-primary">
                    <span>Daftarkan Sekolah / Kampus</span>
                    <Icon name="arrow-right" size={15} />
                  </Link>
                  <a
                    href="https://goletin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <span>Coba Gratis untuk Siswa</span>
                    <Icon name="external-link" size={14} />
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Gratis Siswa &amp; Pengajar</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Standar Pelaporan ISAK 35</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Server Berdaulat Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid (Microsoft Fluent Elevation) */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Gratis Siswa & Guru</div>
              <p className="goletin-stat-sub">Docs, Sheets, Slides & Cloud 5 GB</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">ISAK 35</div>
              <div className="goletin-stat-title">Akuntansi Yayasan</div>
              <p className="goletin-stat-sub">Kepatuhan pelaporan dana BOS/BOP</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">40%</div>
              <div className="goletin-stat-title">Subsidi Kemitraan</div>
              <p className="goletin-stat-sub">Diskon khusus sekolah & madrasah</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">Tier-4</div>
              <div className="goletin-stat-title">Data Center Lokal</div>
              <p className="goletin-stat-sub">Kedaulatan data & kepatuhan UU PDP</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Personas Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Dirancang untuk Komunitas Pendidikan</span>
            <h2 className="section-title">Solusi Terpadu untuk Setiap Peran di Sekolah & Kampus</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Mulai dari ruang kelas, ruang dosen, hingga meja pengurus yayasan — Goletin menghubungkan seluruh proses akademik dan administratif.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {educationPersonas.map((persona, i) => (
              <div key={i} className="use-case-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div className="use-case-icon">
                    <Icon name={persona.icon} size={22} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ms-text-heading)', margin: 0 }}>
                    {persona.role}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', lineHeight: '22px', marginBottom: '18px' }}>
                  {persona.desc}
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--ms-border)' }}>
                  {persona.benefits.map((b, bi) => (
                    <div key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--ms-text-body)' }}>
                      <span style={{ marginTop: '2px', flexShrink: 0, display: 'inline-flex', color: 'var(--ms-blue-text)' }}>
                        <Icon name="check" size={15} />
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products for Education */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Aplikasi Pembelajaran & Tata Kelola</span>
            <h2 className="section-title">Ekosistem Aplikasi Goletin untuk Pendidikan</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Enam modul unggulan yang mendukung aktivitas belajar mengajar, penelitian ilmiah, dan akuntabilitas keuangan institusi.
            </p>
          </div>

          <div className="segment-products-grid">
            {educationProducts.map((product, i) => (
              <div key={i} className="segment-product-tile">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div className="segment-tile-icon" style={{ background: 'transparent', margin: 0 }}>
                    <img src={product.logo} alt={product.title} width={38} height={38} style={{ borderRadius: '8px' }} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ms-blue-text)', backgroundColor: 'var(--ms-blue-light)', padding: '3px 8px', borderRadius: '4px' }}>
                    {product.tag}
                  </span>
                </div>
                <div className="segment-tile-title">{product.title}</div>
                <p className="segment-tile-desc">{product.desc}</p>
                {product.isExternal ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="segment-tile-link"
                  >
                    Buka aplikasi <Icon name="external-link" size={12} />
                  </a>
                ) : (
                  <Link href={product.link} className="segment-tile-link">
                    Pelajari selengkapnya <Icon name="arrow-right" size={12} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Plans & Pricing Table */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Pilihan Paket & Investasi</span>
            <h2 className="section-title">Paket Fleksibel untuk Siswa, Sekolah, dan Universitas</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Mulai gratis untuk kebutuhan individu, atau pilih skema lisensi institusi dengan potongan harga khusus yayasan pendidikan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {plans.map((plan, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: plan.isPopular ? '2px solid var(--ms-blue-hover)' : '1px solid var(--ms-border-card)',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: plan.isPopular ? '0 12px 32px rgba(0, 125, 101, 0.12)' : 'var(--shadow-card)',
                }}
              >
                {plan.badge && (
                  <div
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: plan.isPopular ? '#FFFFFF' : 'var(--ms-blue-text)',
                      backgroundColor: plan.isPopular ? 'var(--ms-blue-text)' : 'var(--ms-blue-light)',
                      border: plan.isPopular ? 'none' : '1px solid var(--ms-border)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      marginBottom: '14px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {plan.badge}
                  </div>
                )}
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '18px', minHeight: '36px', marginBottom: '18px' }}>
                  {plan.desc}
                </p>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '32px', fontWeight: 700, color: 'var(--ms-text-heading)', fontFamily: 'var(--font-segoe-display)' }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--ms-text-muted)', display: 'block', marginTop: '4px' }}>
                    {plan.period}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flexGrow: 1 }}>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--ms-text-body)' }}>
                      <span style={{ marginTop: '2px', flexShrink: 0, display: 'inline-flex', color: 'var(--ms-blue-text)' }}>
                        <Icon name="check" size={14} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {plan.isExternal ? (
                  <a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={plan.isPopular ? 'btn-primary' : 'btn-secondary'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{plan.ctaText}</span>
                    <Icon name="external-link" size={13} />
                  </a>
                ) : (
                  <Link
                    href={plan.ctaHref}
                    className={plan.isPopular ? 'btn-primary' : 'btn-secondary'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{plan.ctaText}</span>
                    <Icon name="arrow-right" size={13} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--ms-text-muted)' }}>
            * Diskon kemitraan 40% berlaku untuk yayasan nirlaba, pondok pesantren, sekolah swasta, dan madrasah dengan menyertakan dokumen legalitas resmi.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '24px' }}>
            <span className="section-eyebrow">Tanya Jawab</span>
            <h2 className="section-title">Pertanyaan Umum Seputar Goletin untuk Pendidikan</h2>
          </div>

          <GoletinFaq
            items={educationFaqItems}
            countLabel="4 Tanya Jawab Program Pendidikan"
            footerText="Butuh panduan pengajuan lisensi atau MoU kemitraan sekolah?"
            footerLinkHref="/kontak?tipe=pendidikan"
            footerLinkLabel="Hubungi tim representatif pendidikan Karsasoft"
          />
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="section-padding">
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Transformasi Digital Sekolah & Kampus
              </span>
              <h2 className="goletin-bottom-cta-title">
                Mulai Transformasi Digital Sekolah & Yayasan Anda Hari Ini
              </h2>
              <p className="goletin-bottom-cta-desc">
                Dapatkan konsultasi gratis dengan spesialis solusi pendidikan Karsasoft untuk merancang implementasi ruang kerja digital dan sistem akuntansi yayasan yang sesuai dengan anggaran sekolah Anda.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak?tipe=pendidikan" className="btn-primary">
                  <span>Hubungi Tim Spesialis Pendidikan</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/goletin/paket-dan-harga" className="btn-secondary">
                  <span>Lihat Seluruh Paket & Harga</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
