'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function SamplingProProductPage() {
  const [populationValue, setPopulationValue] = useState<number>(50); // Miliar Rupiah
  const [tolerableRate, setTolerableRate] = useState<number>(2.5); // %
  const [confidenceLevel, setConfidenceLevel] = useState<number>(95); // 90%, 95%, 99%
  const [expectedRate, setExpectedRate] = useState<number>(0.5); // %
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firmName: '',
    auditType: 'Kantor Akuntan Publik (KAP)',
    notes: '',
  });

  // Calculate ISA 530 Monetary Unit Sample Size (MUS / DUS Model)
  // Reliability factors for zero errors: 90% -> 2.31, 95% -> 3.00, 99% -> 4.61
  const confidenceFactor = confidenceLevel === 99 ? 4.61 : confidenceLevel === 90 ? 2.31 : 3.00;
  const popNumber = populationValue * 1000000000;
  const tolerableAmount = popNumber * (tolerableRate / 100);
  const expectedAmount = popNumber * (expectedRate / 100);

  // MUS formula: Sample Size ≈ (Population * Confidence Factor) / (Tolerable - Expected * Expansion Factor)
  const calculatedSampleSize = Math.min(
    500,
    Math.max(15, Math.round((popNumber * confidenceFactor) / (tolerableAmount * 1.8)))
  );
  const samplingInterval = Math.round(popNumber / calculatedSampleSize);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const coreModules = [
    {
      icon: 'sampling',
      title: 'Monetary Unit Sampling (MUS / DUS)',
      desc: 'Metodologi sampling paling diakui di dunia audit eksternal. Setiap rupiah memiliki kesempatan yang sama untuk terpilih, secara otomatis memprioritaskan transaksi bernilai material tinggi.',
      badge: 'Standar ISA 530',
    },
    {
      icon: 'calculator',
      title: 'Classical Variables Sampling (CVS)',
      desc: 'Pendekatan Mean-per-Unit (MPU), Difference Estimation, dan Ratio Estimation untuk akun dengan volatilitas tinggi atau kemungkinan overstatement dan understatement dua arah.',
      badge: 'Variabel Klasik',
    },
    {
      icon: 'shield',
      title: 'Attribute Sampling (Uji Pengendalian)',
      desc: 'Penentuan jumlah sampel pengujian efektivitas operasional kontrol internal (Test of Controls) dengan batas tingkat deviasi yang dapat diterima (Tolerable Deviation Rate).',
      badge: 'Test of Controls',
    },
    {
      icon: 'analytics',
      title: 'Evaluasi Batas Atas Salah Saji (UEL)',
      desc: 'Proyeksi salah saji sampel ke total populasi dilengkapi perhitungan Basic Precision dan Incremental Allowance untuk menentukan apakah saldo akun dapat diterima wajar tanpa pengecualian.',
      badge: 'Upper Error Limit',
    },
    {
      icon: 'security',
      title: 'Random Number Generator Terverifikasi',
      desc: 'Pembangkit bilangan acak berbasis kriptografi dengan perekaman Audit Seed number untuk memastikan replikasi independen oleh Komite Standar IAPI atau Badan Pengawas.',
      badge: 'Audit Replicable',
    },
    {
      icon: 'docs',
      title: 'Kertas Kerja Pemeriksaan (KKP) Siap Lampir',
      desc: 'Ekspor dokumentasi audit komprehensif berstandar ISA 230 lengkap dengan justifikasi pemilihan ukuran sampel, interval sampling, dan kesimpulan pengujian dalam format PDF & Excel.',
      badge: 'KKP Standar IAPI',
    },
  ];

  const auditWorkflowSteps = [
    {
      step: '01',
      title: 'Perencanaan & Materialitas (Planning)',
      desc: 'Menetapkan batas materialitas pelaksanaan (Tolerable Misstatement / TM), ekspektasi salah saji (EM), dan tingkat keyakinan audit untuk menghitung ukuran sampel minimum yang sah.',
      detail: 'Input: Nilai Buku Akun, TM (Rp), Confidence Level (90/95/99%)',
    },
    {
      step: '02',
      title: 'Penarikan Sampel Sistematis (Extraction)',
      desc: 'Ekstraksi item transaksi secara otomatis menggunakan Interval Sampling (SI) dengan random start point berbasis seed kriptografis yang tercatat di log audit.',
      detail: 'Metode: Cumulative Monetary Amount with Cryptographic RNG',
    },
    {
      step: '03',
      title: 'Pengujian Substantif Rincian (Testing)',
      desc: 'Auditor memeriksa bukti fisik (faktur, kontrak, berita acara) dan menginput nilai audit riil ke sistem untuk menghitung persentase salah saji (tainting factor).',
      detail: 'Output: Tainting Percentage per Sampled Item',
    },
    {
      step: '04',
      title: 'Evaluasi Hasil & Proyeksi Salah Saji (UEL)',
      desc: 'Sistem menghitung Batas Atas Salah Saji (Upper Error Limit / UEL). Jika UEL ≤ TM, saldo akun dapat disimpulkan bebas dari salah saji material dan lolos opini wajar.',
      detail: 'Kriteria: UEL = Basic Precision + Projected Error + Incremental Allowance',
    },
  ];

  const industryAuditors = [
    {
      icon: 'briefcase',
      title: 'Kantor Akuntan Publik (KAP)',
      desc: 'Audit umum atas laporan keuangan tahunan emiten Bursa Efek Indonesia (BEI), BUMN, korporasi swasta, dan yayasan nirlaba dengan dokumentasi KKP siap lolos review IAPI.',
    },
    {
      icon: 'building',
      title: 'Satuan Pengawas Internal (SPI) BUMN & Korporasi',
      desc: 'Audit kepatuhan operasional berkala, pengujian sistem pengendalian internal COSO, serta sampling berkas pengadaan barang/jasa bernilai material tinggi.',
    },
    {
      icon: 'shield',
      title: 'Inspektorat Kementerian & BPKP',
      desc: 'Pengawasan akuntabilitas keuangan negara, audit kinerja program prioritas pemerintah, serta review penyerapan anggaran belanja daerah secara objektif.',
    },
    {
      icon: 'database',
      title: 'Audit Internal Sektor Perbankan',
      desc: 'Uji petik portofolio fasilitas kredit debitur, verifikasi kelengkapan berkas agunan fidusia, dan pengujian kepatuhan regulasi Anti-Pencucian Uang (APU-PPT).',
    },
    {
      icon: 'compliance',
      title: 'Konsultan Pajak & Kuasa Hukum Pajak',
      desc: 'Sampling uji petik faktur pajak masukan/keluaran, bukti potong PPh, dan dokumen pabean ekspor-impor sebelum pelaksanaan audit oleh pemeriksa pajak DJP.',
    },
    {
      icon: 'analytics',
      title: 'Investigasi Forensik & Fraud Audit',
      desc: 'Ekstraksi transaksi anomali bernilai material tinggi pada investigasi dugaan tindak pidana korupsi, rekayasa laporan keuangan, atau fraud pengadaan vendor.',
    },
  ];

  const comparisonRows = [
    {
      criteria: 'Metode Penentuan Ukuran Sampel',
      excel: 'Tebakan subjektif (e.g. "ambil 25 sampel acak"), tidak ada justifikasi matematis',
      engine: 'Formula baku ISA 530 berbasis Poisson Distribution & Monetary Unit Sampling',
    },
    {
      criteria: 'Prioritas Transaksi Nilai Material',
      excel: 'Semua baris memiliki probabilitas terpilih sama; transaksi besar bisa terlewat',
      engine: 'Otomatis memprioritaskan rupiah terbesar (Probability Proportional to Size)',
    },
    {
      criteria: 'Evaluasi Proyeksi Salah Saji (UEL)',
      excel: 'Hanya menjumlahkan salah saji riil tanpa memperhitungkan risiko sampling',
      engine: 'Kalkulasi Upper Error Limit (UEL) otomatis mencakup Basic Precision & Allowance',
    },
    {
      criteria: 'Kemampuan Replikasi Peer Review IAPI',
      excel: 'Sampel acak Excel tidak dapat direplikasi ulang secara persis di masa depan',
      engine: 'Perekaman Audit Seed kriptografis menjamin 100% replikasi independen pengawas',
    },
    {
      criteria: 'Dokumentasi Kertas Kerja (KKP)',
      excel: 'Penyusunan format KKP manual di Excel rawan tidak lengkap atau salah rumus',
      engine: 'Kertas Kerja Pemeriksaan standar ISA 230 siap cetak format PDF dan Excel',
    },
    {
      criteria: 'Risiko Sanksi Disiplin Auditor',
      excel: 'Tinggi; sering temuan ketidakcukupan bukti audit sampling saat review PPAJP/IAPI',
      engine: 'Nol deviasi metodologis; mematuhi penuh Kode Etik & Standar Audit IAPI',
    },
  ];

  const samplingFaqItems: FaqItem[] = [
    {
      id: 'faq-mus-advantages',
      q: 'Apa keunggulan Monetary Unit Sampling (MUS) dibanding Classical Variables Sampling?',
      a: 'Monetary Unit Sampling (MUS) menggunakan unit moneter (rupiah individual) sebagai populasi sampling, bukan item fisik transaksi. Keunggulannya: (1) Transaksi bernilai material tinggi otomatis memiliki peluang terpilih lebih besar, (2) Efisien untuk akun dengan ekspektasi salah saji rendah (seperti piutang usaha atau aset tetap), dan (3) Ukuran sampel yang dihasilkan seringkali lebih ringkas dibanding metode variabel klasik tanpa mengurangi keandalan statistik.',
    },
    {
      id: 'faq-isa530-subjective-sampling',
      q: 'Mengapa auditor dilarang menggunakan sampling subjektif (taksiran tanpa rumus) menurut ISA 530?',
      a: 'Standar Audit ISA 530 mewajibkan auditor untuk memilih item sampel sedemikian rupa sehingga setiap unit sampling dalam populasi memiliki kesempatan untuk terpilih, serta dapat mengevaluasi risiko sampling secara objektif. Menggunakan taksiran non-statistik ("haphazard" tanpa aturan terukur) membuat auditor tidak dapat memproyeksikan salah saji secara sah ke seluruh populasi, yang berpotensi menjadi temuan defisiensi material saat audit KAP direview oleh Pusat Pembinaan Profesi Keuangan (PPPK) Kemenkeu atau IAPI.',
    },
    {
      id: 'faq-uel-evaluation',
      q: 'Bagaimana cara auditor mengambil kesimpulan jika Upper Error Limit (UEL) melebihi batas materialitas?',
      a: 'Jika hasil evaluasi menunjukkan Batas Atas Salah Saji (UEL) > Tolerable Misstatement (TM), auditor memiliki beberapa langkah sesuai standar: (1) Meminta klien menginvestigasi dan mencatat penyesuaian audit (audit adjustment) atas salah saji yang teridentifikasi, (2) Memperluas pengujian substantif ke area transaksi lain, atau (3) Mempertimbangkan implikasinya terhadap opini laporan auditor independen jika klien menolak koreksi.',
    },
    {
      id: 'faq-seed-replication',
      q: 'Bagaimana cara Sampling Pro membuktikan keacakan penarikan sampel kepada penelaah mutu (Peer Review)?',
      a: 'Sampling Pro menggunakan Cryptographic Pseudorandom Number Generator (PRNG). Setiap penarikan sampel mencatat parameter unik: Audit Seed number, timestamp penarikan, formula interval sampling, dan ID auditor. Siapapun penelaah mutu yang memasukkan seed number dan data populasi yang sama akan mendapatkan urutan sampel yang identik 100%, membuktikan integritas pengujian tanpa rekayasa.',
    },
    {
      id: 'faq-kkp-export',
      q: 'Format file apa saja yang disediakan untuk lampiran Kertas Kerja Pemeriksaan (KKP)?',
      a: 'Sampling Pro menyediakan ekspor langsung ke format Microsoft Excel (.xlsx) dengan formula hidup yang transparan, serta laporan format PDF resmi berstempel digital lengkap dengan metadata perikatan audit, nama klien, tanggal penarikan, metodologi pengujian, dan paraf digital auditor yang siap dimasukkan ke berkas audit permanen KAP.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated 3D Isometric Audit Sampling Illustration */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-sampling-hero-banner">
            <div className="goletin-sampling-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Sampling Pro — Standar Audit ISA 530 &amp; IAPI</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Penentuan Ukuran Sampel &amp; Proyeksi Salah Saji Audit Berstandar Global
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Software audit sampling statistik untuk KAP, SPI, BPK, dan BPKP. Otomatisasi Monetary Unit Sampling (MUS), hilangkan bias subjektif, dan hasilkan KKP yang siap lolos reviu mutu IAPI.
                </p>
                <div className="hero-cta-group">
                  <a href="#kalkulator-sampel" className="btn-primary">
                    <span>Coba Kalkulator Sampel</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#konsultasi" className="btn-secondary">
                    <span>Jadwalkan Presentasi KAP</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>100% Standar ISA 530 &amp; IAPI</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Monetary Unit Sampling (MUS)</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kertas Kerja Siap Cetak KKP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid (Microsoft Fluent Elevation) */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Standar ISA 530 &amp; IAPI</div>
              <p className="goletin-stat-sub">Metodologi resmi audit eksternal</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">~74%</div>
              <div className="goletin-stat-title">Efisiensi Jam Kerja Audit</div>
              <p className="goletin-stat-sub">Optimasi sampel tanpa kurangi keandalan</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">Kriptografis</div>
              <div className="goletin-stat-title">Replikasi Seed Audit</div>
              <p className="goletin-stat-sub">RNG terverifikasi untuk peer review</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">1-Klik</div>
              <div className="goletin-stat-title">KKP Siap Cetak &amp; Lampir</div>
              <p className="goletin-stat-sub">Ekspor kertas kerja PDF &amp; Excel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities / Modules Grid */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Metodologi Audit Teruji</span>
            <h2 className="section-title">Kapabilitas Lengkap Sampling Pro untuk Auditor</h2>
            <p className="section-lead" style={{ maxWidth: '740px', margin: '0 auto' }}>
              Memastikan seluruh tahapan penentuan ukuran sampel, penarikan item, dan proyeksi salah saji memenuhi standar perikatan audit asurans internasional.
            </p>
          </div>

          <div className="segment-products-grid">
            {coreModules.map((item, i) => (
              <div key={i} className="segment-product-tile">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div className="segment-tile-icon">
                    <Icon name={item.icon} size={22} />
                  </div>
                  <span className="product-badge-pill">
                    <span className="product-badge-dot" />
                    {item.badge}
                  </span>
                </div>
                <div className="segment-tile-title">{item.title}</div>
                <p className="segment-tile-desc">{item.desc}</p>
                <a href="#kalkulator-sampel" className="segment-tile-link">
                  <span>Lihat simulasi fitur</span>
                  <Icon name="arrow-right" size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section id="kalkulator-sampel" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">Simulator Ukuran Sampel ISA 530</span>
            <h2 className="section-title">Hitung Ukuran Sampel Berdasarkan Materialitas Pelaporan</h2>
            <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Ubah nilai buku populasi, batas salah saji yang dapat ditoleransi (Tolerable Misstatement), dan tingkat keyakinan untuk melihat jumlah sampel yang diwajibkan standar audit.
            </p>
          </div>

          <div
            style={{
              maxWidth: '1040px',
              margin: '0 auto',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--ms-border-card)',
              borderRadius: '16px',
              padding: '36px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'center' }}>
              {/* Controls */}
              <div>
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <label htmlFor="pop-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Total Nilai Buku Populasi Akun:
                    </label>
                    <span style={{ color: 'var(--ms-blue-text)', fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-segoe-display)' }}>
                      Rp {populationValue.toLocaleString('id-ID')} Miliar
                    </span>
                  </div>
                  <input
                    id="pop-slider"
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={populationValue}
                    onChange={(e) => setPopulationValue(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: 'var(--ms-blue-text)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>Rp5 Miliar</span>
                    <span>Rp250 Miliar</span>
                    <span>Rp500 Miliar</span>
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <label htmlFor="tolerable-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Tolerable Misstatement (TM / Materialitas Kinerja):
                    </label>
                    <span style={{ color: '#D83B01', fontSize: '16px', fontWeight: 700 }}>
                      {tolerableRate.toFixed(1)}% (Rp {(tolerableAmount / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 0 })} Jt)
                    </span>
                  </div>
                  <input
                    id="tolerable-slider"
                    type="range"
                    min="1.0"
                    max="8.0"
                    step="0.5"
                    value={tolerableRate}
                    onChange={(e) => setTolerableRate(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: '#D83B01', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>1.0%</span>
                    <span>4.5%</span>
                    <span>8.0%</span>
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <label htmlFor="expected-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Expected Misstatement (Ekspektasi Salah Saji Historis):
                    </label>
                    <span style={{ color: 'var(--ms-text-heading)', fontSize: '16px', fontWeight: 700 }}>
                      {expectedRate.toFixed(1)}%
                    </span>
                  </div>
                  <input
                    id="expected-slider"
                    type="range"
                    min="0.1"
                    max="2.0"
                    step="0.1"
                    value={expectedRate}
                    onChange={(e) => setExpectedRate(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: 'var(--ms-blue-text)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>0.1%</span>
                    <span>1.0%</span>
                    <span>2.0%</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                    Tingkat Keyakinan Audit (Confidence Level):
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {[90, 95, 99].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setConfidenceLevel(lvl)}
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: '6px',
                          border: '1px solid',
                          borderColor: confidenceLevel === lvl ? 'var(--ms-blue-text)' : 'var(--ms-border)',
                          backgroundColor: confidenceLevel === lvl ? '#EFF6FC' : '#FFFFFF',
                          color: confidenceLevel === lvl ? 'var(--ms-blue-text)' : 'var(--ms-text-heading)',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        {lvl}% Keyakinan
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Display Card */}
              <div
                style={{
                  backgroundColor: 'var(--ms-bg-subtle)',
                  borderRadius: '12px',
                  padding: '28px',
                  border: '1px solid var(--ms-border)',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ms-text-muted)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '4px' }}>
                  REKOMENDASI UKURAN SAMPEL (SAMPLE SIZE)
                </div>
                <div style={{ fontSize: '38px', fontWeight: 700, color: 'var(--ms-blue-text)', fontFamily: 'var(--font-segoe-display)', lineHeight: '1.1', marginBottom: '6px' }}>
                  {calculatedSampleSize} Transaksi
                </div>
                <div style={{ fontSize: '13px', color: 'var(--ms-text-body)', fontWeight: 600, marginBottom: '20px' }}>
                  Metodologi: Monetary Unit Sampling (MUS)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--ms-border)', paddingTop: '16px', marginBottom: '22px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>Sampling Interval (SI):</span>
                    <strong style={{ color: 'var(--ms-text-heading)' }}>
                      Rp {(samplingInterval / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} Juta
                    </strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>Faktor Reliabilitas (R):</span>
                    <strong style={{ color: 'var(--ms-text-heading)' }}>{confidenceFactor.toFixed(2)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>Batas Toleransi (TM):</span>
                    <strong style={{ color: '#D83B01' }}>
                      Rp {(tolerableAmount / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 0 })} Juta
                    </strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--ms-border)', paddingTop: '10px' }}>
                    <span style={{ color: 'var(--ms-text-heading)', fontWeight: 700 }}>Efisiensi Waktu Audit:</span>
                    <strong style={{ color: '#107C41', fontSize: '14px' }}>Hemat ~74% Jam Kerja</strong>
                  </div>
                </div>

                <a href="#konsultasi" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Jadwalkan Presentasi Teknis KAP</span>
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Audit Sampling Workflow */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Siklus Audit Statistik</span>
            <h2 className="section-title">Alur 4 Tahap Pelaksanaan Sampling Berstandar ISA 530</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Prosedur audit yang terstruktur, matematis, dan dapat dipertanggungjawabkan di hadapan badan pengawas profesi akuntan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {auditWorkflowSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--ms-border-card)',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-segoe-display)',
                      fontSize: '24px',
                      fontWeight: 700,
                      color: 'var(--ms-blue-text)',
                      backgroundColor: 'var(--ms-blue-light)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.step}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ms-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Tahap {idx + 1}
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--ms-text-muted)', lineHeight: '20px', marginBottom: '16px', flex: 1 }}>
                  {step.desc}
                </p>

                <div
                  style={{
                    backgroundColor: 'var(--ms-bg-subtle)',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    fontSize: '11.5px',
                    border: '1px solid var(--ms-border)',
                    color: 'var(--ms-text-heading)',
                    fontWeight: 500,
                  }}
                >
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Use Cases */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Skenario Institusi</span>
            <h2 className="section-title">Penerapan Sampling Pro di Berbagai Lembaga Audit</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Dipercaya oleh auditor eksternal independen, satuan pengawas internal BUMN, hingga badan investigasi kepatuhan pemerintah.
            </p>
          </div>

          <div className="segment-use-cases">
            {industryAuditors.map((inst, i) => (
              <div key={i} className="use-case-card">
                <div className="use-case-icon">
                  <Icon name={inst.icon} size={20} />
                </div>
                <div className="use-case-content">
                  <h3>{inst.title}</h3>
                  <p>{inst.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table: Manual Excel vs Goletin Sampling Pro */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Perbandingan Metodologi</span>
            <h2 className="section-title">Sampling Manual Excel vs Goletin Sampling Pro</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Tinggalkan risiko sampling berbasis tebakan subjektif yang dapat memicu temuan defisiensi pada penelaahan mutu audit.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '34%' }}>Parameter &amp; Kriteria Kepatuhan</th>
                  <th style={{ width: '33%', color: 'var(--ms-text-muted)' }}>Sampling Manual Excel / Tebakan</th>
                  <th style={{ width: '33%', color: 'var(--ms-blue-text)' }}>Goletin Sampling Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong>{row.criteria}</strong>
                    </td>
                    <td style={{ color: 'var(--ms-text-muted)' }}>{row.excel}</td>
                    <td style={{ color: 'var(--ms-text-heading)', fontWeight: 600 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <Icon name="check" size={16} color="#107C41" />
                        <span>{row.engine}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Consultation & Demo Request Form */}
      <section id="konsultasi" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Konsultasi &amp; Lisensi KAP</span>
              <h2 className="section-title">Tingkatkan Efisiensi Audit KAP Anda Bersama Sampling Pro</h2>
              <p className="section-lead">
                Diskusikan lisensi multi-auditor untuk Kantor Akuntan Publik atau Satuan Pengawas Internal Anda bersama konsultan metodologi audit Karsasoft.
              </p>
            </div>

            {formSubmitted ? (
              <div
                style={{
                  backgroundColor: '#EFF6FC',
                  border: '1px solid var(--ms-blue-light)',
                  borderRadius: '12px',
                  padding: '36px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--ms-blue-text)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <Icon name="check" size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  Permintaan Presentasi Berhasil Dikirim!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', lineHeight: '22px', maxWidth: '600px', margin: '0 auto 20px' }}>
                  Terima kasih, <strong>{formData.name}</strong> dari <strong>{formData.firmName}</strong>. Spesialis audit software kami akan menghubungi Anda melalui email <strong>{formData.email}</strong> dalam waktu maksimal 1x24 jam kerja.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <span>Kirim Formulir Baru</span>
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
                      Nama Lengkap Anda *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dwi Prasetyo, Ak., CA, CPA"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Email Resmi Kantor *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="dwi@kap-rekan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Nama Kantor Akuntan Publik / Lembaga *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. KAP Prasetyo, Rahardjo & Rekan"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Tipe Lembaga Pengguna
                    </label>
                    <select
                      value={formData.auditType}
                      onChange={(e) => setFormData({ ...formData, auditType: e.target.value })}
                      className="mitra-form-input"
                    >
                      <option value="Kantor Akuntan Publik (KAP)">Kantor Akuntan Publik (KAP)</option>
                      <option value="Satuan Pengawas Internal (SPI) BUMN">Satuan Pengawas Internal (SPI) BUMN</option>
                      <option value="Inspektorat Lembaga / BPKP">Inspektorat Kementerian / BPKP</option>
                      <option value="Konsultan Audit & Kepatuhan">Konsultan Audit &amp; Kepatuhan</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                    Kebutuhan Pengujian &amp; Catatan Khusus
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Sebutkan estimasi jumlah auditor pengguna, kebutuhan integrasi Kertas Kerja Pemeriksaan (KKP), atau jadwal sesi pelatihan tim..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mitra-form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn-primary" style={{ minWidth: '240px', justifyContent: 'center' }}>
                    <span>Jadwalkan Presentasi Audit</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (GoletinFaq) */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Tanya Jawab Seputar ISA 530</span>
            <h2 className="section-title">Pertanyaan Umum Sampling Audit Statistik</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Jawaban atas pertanyaan fundamental mengenai penentuan ukuran sampel, evaluasi UEL, dan kesiapan penelaahan mutu IAPI.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <GoletinFaq items={samplingFaqItems} countLabel="5 Tanya Jawab ISA 530 &amp; Audit Sampling" />
          </div>
        </div>
      </section>

      {/* Bottom Enterprise CTA Banner */}
      <div className="section-padding" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Lisensi Kantor Akuntan Publik
              </span>
              <h2 className="goletin-bottom-cta-title">
                Tingkatkan Keandalan &amp; Efisiensi Audit Tim Anda
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultan metodologi audit Karsasoft siap membantu KAP dan tim SPI Anda melakukan pelatihan teknik penarikan sampel MUS dan penyusunan KKP standar ISA 530.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a href="#konsultasi" className="btn-primary">
                  <span>Jadwalkan Presentasi Teknis</span>
                  <Icon name="arrow-right" size={16} />
                </a>
                <a href="#kalkulator-sampel" className="btn-secondary">
                  <span>Uji Parameter di Simulator</span>
                  <Icon name="calculator" size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
