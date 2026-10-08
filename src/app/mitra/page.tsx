'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq } from '@/components/GoletinFaq';

const mitraFaqItems = [
  {
    id: 'syarat-mitra',
    q: 'Apa saja syarat untuk mendaftar sebagai mitra resmi Karsasoft?',
    a: 'Mitra dapat berupa badan usaha (PT, CV, Kantor Akuntan Publik, Konsultan Pajak) maupun agensi penyedia solusi IT. Anda cukup mengisi formulir pendaftaran kemitraan dengan menyertakan kontak penanggung jawab dan gambaran segmen klien Anda.',
  },
  {
    id: 'biaya-gabung',
    q: 'Berapa biaya untuk bergabung dalam program mitra Karsasoft?',
    a: 'Pendaftaran program mitra Karsasoft adalah 100% GRATIS tanpa biaya registrasi ataupun iuran tahunan. Kami fokus membangun hubungan simbiosis mutualisme untuk memperluas jangkauan perangkat lunak berdaulat Indonesia.',
  },
  {
    id: 'komisi-pembayaran',
    q: 'Kapan komisi bagi hasil dibayarkan kepada mitra?',
    a: 'Bagi hasil dan komisi penjualan lisensi diproses dan ditransfer ke rekening resmi mitra setiap tanggal 10 pada bulan berikutnya setelah transaksi klien terkonfirmasi lunas.',
  },
  {
    id: 'bantuan-presales',
    q: 'Apakah Karsasoft membantu presentasi teknis saat mitra menghadapi klien besar?',
    a: 'Ya! Untuk peluang proyek strategis (seperti pengadaan di BUMN, bank, kementerian, atau yayasan besar), tim Solution Architect Karsasoft akan bergabung mendampingi Anda dalam sesi rapat teknis dan pembuktian konsep (PoC).',
  },
];

export default function MitraPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    track: 'reseller',
    region: '',
    clientCount: '1-10',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const partnerTracks = [
    {
      icon: 'briefcase',
      title: 'Reseller & Solution Provider',
      desc: 'Pasarkan dan distribusikan lisensi Goletin Bisnis, Enterprise, dan Pendidikan ke ribuan pelaku usaha di wilayah operasional Anda.',
      benefits: [
        'Margin keuntungan langsung hingga 30% per transaksi',
        'Pendapatan berulang (recurring revenue) dari perpanjangan tahunan',
        'Materi promosi, presentasi pitch deck, dan brosur siap pakai',
        'Proteksi pendaftaran prospek klien (Deal Registration)',
      ],
      badge: 'POPULER UNTUK IT VENDOR',
    },
    {
      icon: 'file-check',
      title: 'Konsultan Akuntansi & KAP',
      desc: 'Bantu klien yayasan dan perusahaan mengadopsi Yaycount ERP (ISAK 35), IndoTax, dan engine kalkulasi IFRS 9 / PSAK 73.',
      benefits: [
        'Dukungan implementasi teknis langsung dari developer inti Karsasoft',
        'Lisensi internal gratis (NFR) untuk tim akuntan & auditor Anda',
        'Pendapatan jasa konsultasi & implementasi 100% milik mitra',
        'Sertifikasi resmi Karsasoft Certified Financial Implementer',
      ],
      badge: 'UNTUK AUDITOR & KONSULTAN',
    },
    {
      icon: 'laptop',
      title: 'ISV & Mitra Teknologi',
      desc: 'Integrasikan aplikasi buatan Anda ke Sovereign Cloud Goletin melalui API, Single Sign-On (SSO), dan portal pengembang Goletin Console.',
      benefits: [
        'Akses API developer prioritas dan sandbox pengujian cuma-cuma',
        'Listing aplikasi di direktori resmi Ekosistem Goletin',
        'Co-selling bersama tim enterprise sales Karsasoft',
        'Dukungan arsitektur hybrid on-premise & cloud lokal Tier-4',
      ],
      badge: 'PENGEMBANG PERANGKAT LUNAK',
    },
    {
      icon: 'book-open',
      title: 'Mitra Edukasi & Pelatihan',
      desc: 'Buka program kursus, lokakarya, dan sertifikasi keahlian software akuntansi ISAK 35, perpajakan digital, dan AI bisnis Goletin.',
      benefits: [
        'Kurikulum resmi, silabus pelatihan, dan studi kasus riil',
        'Hak penerbitan sertifikat resmi kompetensi pengguna Goletin',
        'Akun edukasi gratis untuk ruang lab dan peserta pelatihan',
        'Bagi hasil ujian sertifikasi kompetensi keahlian digital',
      ],
      badge: 'LEMBAGA KURSUS & KAMPUS',
    },
  ];

  const partnerBenefits = [
    {
      icon: 'shield',
      title: 'Margin Menarik & Recurring Revenue',
      desc: 'Nikmati skema bagi hasil hingga 35% dengan pendapatan berulang otomatis dari perpanjangan tahunan klien aktif Anda.',
    },
    {
      icon: 'monitor',
      title: 'Lisensi Not-for-Resale (NFR) Gratis',
      desc: 'Dapatkan lisensi Goletin internal gratis untuk operasional kantor mitra serta fasilitas demo langsung saat bertemu prospek.',
    },
    {
      icon: 'lock',
      title: 'Proteksi Kesepakatan (Deal Protection)',
      desc: 'Kunci prospek Anda melalui sistem Deal Registration agar tidak dimasuki oleh mitra lain atau tim direct sales kami.',
    },
    {
      icon: 'users',
      title: 'Didampingi Presales Specialist',
      desc: 'Tim Solution Architect Karsasoft siap mendampingi Anda dalam sesi demo teknis, tender pemerintah (SPBE), maupun penawaran korporat besar.',
    },
    {
      icon: 'check',
      title: 'Pelatihan & Sertifikasi Resmi',
      desc: 'Pelatihan produk intensif untuk tim sales dan engineer mitra hingga meraih predikat Karsasoft Certified Specialist.',
    },
    {
      icon: 'grid',
      title: 'Listing di Direktori Mitra Resmi',
      desc: 'Profil dan kontak perusahaan Anda akan dipublikasikan di situs resmi Karsasoft untuk mendapatkan referral klien terdekat.',
    },
  ];

  const partnerTiers = [
    {
      name: 'Registered Partner',
      badge: 'TINGKAT AWAL',
      desc: 'Cocok untuk agensi, konsultan independen, atau vendor IT yang baru memulai kemitraan dengan Karsasoft.',
      margin: 'Hingga 15%',
      target: 'Tanpa target penjualan minimum',
      features: [
        'Akses Portal Mitra & sales kit digital',
        'Diskon pembelian lisensi 15%',
        'Sistem pendaftaran prospek (Deal Registration)',
        'Dukungan tiket bantuan teknis standar',
      ],
      isPopular: false,
    },
    {
      name: 'Silver Partner',
      badge: 'TERPOPULER',
      desc: 'Untuk mitra aktif dengan basis klien reguler yang membutuhkan pendampingan teknis dan lisensi internal.',
      margin: 'Hingga 25%',
      target: 'Minimal 5 klien aktif per tahun',
      features: [
        'Semua fasilitas Registered Partner',
        'Margin bagi hasil hingga 25%',
        '10 Akun Lisensi NFR gratis untuk kantor mitra',
        'Dukungan presales langsung dari Solution Architect',
        'Badge resmi Silver Solution Partner',
        'Sesi pelatihan produk berkala',
      ],
      isPopular: true,
    },
    {
      name: 'Gold Partner',
      badge: 'ENTERPRISE & STRATEGIS',
      desc: 'Mitra korporasi, KAP besar, dan distributor sistem IT dengan jangkauan skala nasional atau tender institusi.',
      margin: 'Hingga 35%',
      target: 'Minimal 20 klien aktif per tahun',
      features: [
        'Semua fasilitas Silver Partner',
        'Margin bagi hasil tertinggi hingga 35%',
        'Dedicated Partner Account Manager 24/7',
        'Dukungan kustomisasi fitur untuk proyek tender',
        'Dana pendampingan pemasaran (Co-Op Marketing Fund)',
        'Prioritas rujukan prospek (Lead Referral) resmi',
      ],
      isPopular: false,
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated 3D Isometric Ecosystem Collaboration Illustration */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-mitra-hero-banner">
            <div className="goletin-mitra-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Jaringan Mitra Resmi Karsasoft</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Tumbuh Bersama Ekosistem Software Berdaulat Indonesia
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Buka peluang pendapatan berulang baru sebagai Mitra Solusi, Reseller, atau Konsultan Goletin. Nikmati margin bagi hasil hingga 35%, lisensi NFR, dan pendampingan presales tenaga ahli.
                </p>
                <div className="hero-cta-group">
                  <a href="#daftar-mitra" className="btn-primary">
                    <span>Daftar Menjadi Mitra</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#tingkatan" className="btn-secondary">
                    <span>Lihat Jenjang Kemitraan</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Margin Bagi Hasil s.d. 35%</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Lisensi NFR Internal Gratis</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Pendampingan Presales Ahli</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid (Microsoft Fluent Elevation) */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">35%</div>
              <div className="goletin-stat-title">Margin & Bagi Hasil</div>
              <p className="goletin-stat-sub">Skema komisi langsung per transaksi</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Recurring Revenue</div>
              <p className="goletin-stat-sub">Pendapatan perpanjangan lisensi tahunan</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">NFR</div>
              <div className="goletin-stat-title">Lisensi Internal Gratis</div>
              <p className="goletin-stat-sub">Untuk tim konsultan & lab uji coba</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">Tier-4</div>
              <div className="goletin-stat-title">Data Center Lokal</div>
              <p className="goletin-stat-sub">Sovereign cloud & kepatuhan UU PDP</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Partner Tracks */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Jalur Kolaborasi</span>
            <h2 className="section-title">Pilih Jalur Kemitraan yang Sesuai dengan Keahlian Anda</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Kami menyediakan 4 model kemitraan terstruktur dengan program insentif, materi pelatihan, dan dukungan yang disesuaikan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {partnerTracks.map((track, i) => (
              <div key={i} className="use-case-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div className="use-case-icon">
                    <Icon name={track.icon} size={22} />
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ms-blue-text)', backgroundColor: 'var(--ms-blue-light)', padding: '3px 8px', borderRadius: '4px' }}>
                    {track.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  {track.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', lineHeight: '22px', marginBottom: '18px' }}>
                  {track.desc}
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--ms-border)' }}>
                  {track.benefits.map((b, bi) => (
                    <div key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--ms-text-body)' }}>
                      <span style={{ display: 'inline-flex', marginTop: '2px', flexShrink: 0, color: 'var(--ms-blue-text)' }}>
                        <Icon name="check" size={14} />
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

      {/* Partner Benefits Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Nilai Tambah Kemitraan</span>
            <h2 className="section-title">Mengapa Bermitra dengan Karsasoft?</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Kami tidak sekadar memberikan lisensi untuk dijual — kami membekali Anda dengan seluruh instrumen pendukung kesuksesan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {partnerBenefits.map((benefit, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid var(--ms-border-card)',
                  padding: '28px 24px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--ms-blue-light)',
                    color: 'var(--ms-blue-text)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <Icon name={benefit.icon} size={22} />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '20px', margin: 0 }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section id="tingkatan" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Tingkatan Kemitraan</span>
            <h2 className="section-title">Skema Jenjang Mitra Karsasoft</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Tingkatkan jenjang kemitraan Anda seiring bertambahnya volume klien untuk membuka margin lebih tinggi dan hak istimewa eksklusif.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {partnerTiers.map((tier, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: tier.isPopular ? '2px solid var(--ms-blue-hover)' : '1px solid var(--ms-border-card)',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: tier.isPopular ? '0 12px 32px rgba(0, 125, 101, 0.12)' : 'var(--shadow-card)',
                }}
              >
                {tier.badge && (
                  <div
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: tier.isPopular ? '#FFFFFF' : 'var(--ms-blue-text)',
                      backgroundColor: tier.isPopular ? 'var(--ms-blue-text)' : 'var(--ms-blue-light)',
                      border: tier.isPopular ? 'none' : '1px solid var(--ms-border)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      marginBottom: '14px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {tier.badge}
                  </div>
                )}
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  {tier.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '18px', minHeight: '36px', marginBottom: '16px' }}>
                  {tier.desc}
                </p>

                <div style={{ padding: '16px', backgroundColor: 'var(--ms-bg-subtle)', borderRadius: '8px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--ms-text-muted)' }}>Bagi Hasil Mitra:</div>
                  <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--ms-blue-text)', fontFamily: 'var(--font-segoe-display)' }}>
                    {tier.margin}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ms-text-body)', marginTop: '4px' }}>
                    {tier.target}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flexGrow: 1 }}>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--ms-text-body)' }}>
                      <span style={{ display: 'inline-flex', marginTop: '2px', flexShrink: 0, color: 'var(--ms-blue-text)' }}>
                        <Icon name="check" size={14} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#daftar-mitra"
                  className={tier.isPopular ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Daftar Jenjang Ini</span>
                  <Icon name="arrow-right" size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Registration Form */}
      <section id="daftar-mitra" className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid var(--ms-border-card)', padding: '40px 32px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="section-eyebrow">Formulir Kemitraan</span>
              <h2 style={{ fontSize: '28px', fontWeight: 600, color: 'var(--ms-text-heading)', margin: '8px 0' }}>
                Daftar Menjadi Mitra Resmi Karsasoft
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', maxWidth: '600px', margin: '0 auto' }}>
                Lengkapi formulir permohonan kemitraan di bawah ini. Tim Partnership Karsasoft akan menghubungi Anda dalam 1x24 jam kerja.
              </p>
            </div>

            {submitted ? (
              <div style={{ padding: '32px', textAlign: 'center', backgroundColor: 'var(--ms-blue-light)', borderRadius: '12px', border: '1px solid var(--ms-blue-hover)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--ms-blue-text)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon name="check" size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  Permohonan Kemitraan Berhasil Dikirim!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', lineHeight: '22px', maxWidth: '520px', margin: '0 auto 20px' }}>
                  Terima kasih, <strong>{formData.name}</strong>. Tim Partnership Karsasoft telah menerima data Anda dan akan segera menghubungi nomor WhatsApp <strong>{formData.phone}</strong> untuk proses verifikasi dan jadwal onboarding.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                  style={{ margin: '0 auto' }}
                >
                  Kirim Permohonan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Nama Lengkap PIC *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Email Perusahaan / Bisnis *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="budi@perusahaanmitra.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-XXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Nama Perusahaan / Kantor / Agensi *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="PT Solusi Teknologi Nusantara"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Jalur Kemitraan yang Diminati *
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="mitra-form-input"
                    >
                      <option value="reseller">Reseller & Solution Provider (Penjualan Lisensi)</option>
                      <option value="accounting">Konsultan Akuntansi, Pajak & KAP (Implementasi ERP)</option>
                      <option value="isv">ISV & Mitra Teknologi (Integrasi API & Software)</option>
                      <option value="education">Mitra Edukasi, Pelatihan & Sertifikasi</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Wilayah Operasional Utama *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: DKI Jakarta, Jawa Barat, Surabaya"
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                    Catatan Tambahan atau Portofolio Klien
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ceritakan singkat tentang jenis klien Anda saat ini atau target implementasi yang ingin dituju..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mitra-form-input"
                  />
                </div>

                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                  <button type="submit" className="btn-primary" style={{ minWidth: '220px', justifyContent: 'center' }}>
                    <span>Kirim Pengajuan Kemitraan</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                  <p style={{ fontSize: '12px', color: 'var(--ms-text-muted)', marginTop: '8px' }}>
                    Pendaftaran gratis. Data Anda aman dan dilindungi sesuai UU Perlindungan Data Pribadi (UU PDP).
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '24px' }}>
            <span className="section-eyebrow">Tanya Jawab</span>
            <h2 className="section-title">Pertanyaan Umum Program Kemitraan</h2>
          </div>

          <GoletinFaq
            items={mitraFaqItems}
            countLabel="4 Tanya Jawab Program Kemitraan"
            footerText="Punya pertanyaan spesifik terkait skema kontrak atau MoU kemitraan?"
            footerLinkHref="/kontak?tipe=mitra"
            footerLinkLabel="Hubungi tim kemitraan Karsasoft"
          />
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="section-padding">
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kemitraan Strategis & Pertumbuhan Bersama
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Menjadi Bagian dari Ekosistem Software Terbesar di Indonesia?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Hubungi tim partnership kami secara langsung via email di <strong>partner@karsasoft.com</strong> atau ajukan formulir kemitraan sekarang untuk menerima sales kit dan jadwal webinar onboarding mitra.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a href="#daftar-mitra" className="btn-primary">
                  <span>Daftar Menjadi Mitra Sekarang</span>
                  <Icon name="arrow-right" size={15} />
                </a>
                <Link href="/kontak?tipe=mitra" className="btn-secondary">
                  <span>Hubungi Tim Kemitraan</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
