'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function IndoTaxProductPage() {
  const [grossSalary, setGrossSalary] = useState<number>(12500000);
  const [ptkpStatus, setPtkpStatus] = useState<string>('K1');
  const [taxMethod, setTaxMethod] = useState<'gross' | 'gross-up'>('gross');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employeeRange: '100 - 500 Karyawan',
    notes: '',
  });

  // TER Calculation logic (PP 58 / PMK 168 2023)
  // Kategori A: TK/0 (54M), TK/1 (58.5M), K/0 (58.5M)
  // Kategori B: TK/2, TK/3, K/1, K/2
  // Kategori C: K/3
  let terCategory = 'A';
  if (ptkpStatus === 'K3') {
    terCategory = 'C';
  } else if (['TK2', 'TK3', 'K1', 'K2'].includes(ptkpStatus)) {
    terCategory = 'B';
  } else {
    terCategory = 'A';
  }

  const getTerRate = (salary: number, category: string) => {
    if (category === 'A') {
      if (salary <= 5400000) return 0;
      if (salary <= 5650000) return 0.25;
      if (salary <= 5950000) return 0.5;
      if (salary <= 6300000) return 0.75;
      if (salary <= 6750000) return 1.0;
      if (salary <= 7500000) return 1.25;
      if (salary <= 8550000) return 1.5;
      if (salary <= 9650000) return 1.75;
      if (salary <= 10050000) return 2.0;
      if (salary <= 10350000) return 2.25;
      if (salary <= 10700000) return 2.5;
      if (salary <= 11050000) return 3.0;
      if (salary <= 11600000) return 3.5;
      if (salary <= 12500000) return 4.0;
      if (salary <= 13750000) return 5.0;
      if (salary <= 15100000) return 6.0;
      if (salary <= 16950000) return 7.0;
      if (salary <= 19750000) return 8.0;
      return 9.0;
    } else if (category === 'B') {
      if (salary <= 6200000) return 0;
      if (salary <= 6500000) return 0.25;
      if (salary <= 6850000) return 0.5;
      if (salary <= 7300000) return 0.75;
      if (salary <= 9200000) return 1.0;
      if (salary <= 10750000) return 1.5;
      if (salary <= 12500000) return 2.0;
      if (salary <= 14150000) return 3.0;
      if (salary <= 16450000) return 4.0;
      if (salary <= 18750000) return 5.0;
      if (salary <= 21850000) return 6.0;
      return 7.0;
    } else {
      // Category C
      if (salary <= 6600000) return 0;
      if (salary <= 6950000) return 0.25;
      if (salary <= 7350000) return 0.5;
      if (salary <= 7800000) return 0.75;
      if (salary <= 8850000) return 1.0;
      if (salary <= 9800000) return 1.25;
      if (salary <= 10950000) return 1.5;
      if (salary <= 12200000) return 1.75;
      if (salary <= 13400000) return 2.0;
      if (salary <= 14600000) return 2.5;
      if (salary <= 16500000) return 3.0;
      return 4.0;
    }
  };

  const terRate = getTerRate(grossSalary, terCategory);
  const pphMonthly = grossSalary * (terRate / 100);
  const takeHomePay = taxMethod === 'gross' ? grossSalary - pphMonthly : grossSalary;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const coreModules = [
    {
      icon: 'tax',
      title: 'Perhitungan PPh 21 Tarif TER Otomatis',
      desc: 'Penyesuaian otomatis Kategori TER A, B, atau C sesuai PP 58/2023 & PMK 168/2023. Perhitungan presisi masa Januari-November dan sinkronisasi penyesuaian tarif Pasal 17 pada masa Desember.',
      badge: 'TER PP 58/2023',
    },
    {
      icon: 'docs',
      title: 'Generator e-Bupot & 1721-A1 Massal',
      desc: 'Terbitkan ribuan bukti potong resmi format DJP lengkap dengan QR Code validasi dalam hitungan detik. Karyawan dapat mengunduh bukti potong masing-masing secara mandiri.',
      badge: 'Bupot Resmi DJP',
    },
    {
      icon: 'calculator',
      title: 'Manajemen e-Faktur PPN 11% & 12%',
      desc: 'Validasi otomatis NPWP dan NIK 16 digit rekanan bisnis. Rekonsiliasi Faktur Pajak Masukan dan Keluaran serta ekspor format siap unggah ke portal Core Tax DJP.',
      badge: 'Core Tax Ready',
    },
    {
      icon: 'compliance',
      title: 'PPh 23, PPh 4(2) & Jasa Tenaga Ahli',
      desc: 'Perhitungan pemotongan pajak atas imbalan jasa profesi, sewa gedung, dividen, dan royalti dengan pengenaan tarif ber-NPWP maupun non-NPWP secara otomatis.',
      badge: 'Multi Pajak',
    },
    {
      icon: 'security',
      title: 'Simulasi Skema Gross vs Gross-Up',
      desc: 'Bandingkan efisiensi beban pajak perusahaan antara metode pemotongan gaji kotor (Gross), tunjangan pajak bertingkat (Gross-Up), dan pajak ditanggung perusahaan (Net).',
      badge: 'Tax Planning',
    },
    {
      icon: 'saas',
      title: 'Integrasi Ekosistem Payroll & HRIS',
      desc: 'Terhubung langsung dengan modul akuntansi Goletin dan sistem payroll internal perusahaan melalui REST API terenkripsi tanpa perlu rekap ulang file Excel.',
      badge: 'API Payroll',
    },
  ];

  const taxCycleSteps = [
    {
      step: '01',
      title: 'Penggajian & Pemotongan TER (Jan - Nov)',
      desc: 'Sinkronisasi data kehadiran dan tunjangan; pemotongan PPh 21 otomatis menggunakan formula Tarif Efektif Rata-Rata (TER) Kategori A, B, atau C.',
      detail: 'Dasar Hukum: PP 58/2023 & PMK 168/2023',
    },
    {
      step: '02',
      title: 'Penerbitan Bukti Potong e-Bupot Unifikasi',
      desc: 'Penerbitan bukti potong resmi dengan nomor seri terstandar DJP untuk PPh Pasal 21, Pasal 23, dan Pasal 4 ayat (2) yang dapat diunduh mandiri oleh rekanan.',
      detail: 'Format: Formulir resmi DJP ber-QR Code',
    },
    {
      step: '03',
      title: 'Generate e-Billing & Penyetoran Masa',
      desc: 'Pembuatan kode billing elektronik otomatis untuk seluruh jenis setoran pajak masa dan integrasi status pembayaran bank persepsi secara real-time.',
      detail: 'Metode: Auto ID Billing Generation',
    },
    {
      step: '04',
      title: 'Pelaporan SPT Masa & True-Up Desember',
      desc: 'Pelaporan SPT Masa PPh & PPN ke DJP, serta rekonsiliasi akhir tahun (true-up Desember) menggunakan tarif progresif Pasal 17 ayat (1) huruf a UU HPP.',
      detail: 'Output: SPT Masa Siap Lapor & Bukti 1721-A1',
    },
  ];

  const industryScenarios = [
    {
      icon: 'building',
      title: 'Perusahaan Korporasi & Holding',
      desc: 'Pengelolaan payroll ribuan karyawan lintas entitas anak perusahaan dengan konsolidasi SPT PPh 21/26 terpusat dan kontrol hak akses divisional.',
    },
    {
      icon: 'briefcase',
      title: 'Konsultan Pajak & Kantor Jasa Akuntan (KJA)',
      desc: 'Manajemen multi-klien dalam satu dasbor dengan isolasi data terpisah, penerbitan e-Bupot massal, dan pelaporan SPT terjadwal tanpa risiko denda.',
    },
    {
      icon: 'shield',
      title: 'Perusahaan Manufaktur & Padat Karya',
      desc: 'Penanganan ribuan pekerja harian, mingguan, dan borongan dengan kalkulasi TER harian otomatis serta bukti potong massal terdistribusi.',
    },
    {
      icon: 'docs',
      title: 'Perusahaan Jasa & Agensi Kreatif',
      desc: 'Otomatisasi pemotongan PPh 21 tenaga ahli berkesinambungan dan bukan pegawai, serta pemotongan PPh 23 atas jasa vendor pihak ketiga.',
    },
    {
      icon: 'calculator',
      title: 'Distributor, Importir & Ritel Modern',
      desc: 'Penerbitan ratusan e-Faktur PPN keluaran harian, rekonsiliasi faktur pajak masukan otomatis, dan integrasi data penjualan kasir POS.',
    },
    {
      icon: 'saas',
      title: 'UMKM & Startup Digital',
      desc: 'Kepatuhan PPh Final 0.5% (PP 23/2018) atau tarif umum badan usaha secara mudah tanpa memerlukan staf akunting khusus berpajak mahal.',
    },
  ];

  const comparisonRows = [
    {
      criteria: 'Penentuan Kategori TER A, B, C',
      excel: 'Rumus nested IF panjang rawan salah pilih tabel lampiran PMK',
      engine: 'Otomatis 100% berdasarkan status PTKP karyawan',
    },
    {
      criteria: 'Penerbitan Bukti Potong 1721-A1',
      excel: 'Input manual satu per satu ke form DJP memakan waktu berhari-hari',
      engine: 'Penerbitan massal ribuan file PDF 1721-A1 ber-QR Code dalam 1-klik',
    },
    {
      criteria: 'Validasi NIK 16 Digit & NPWP Lawan Transaksi',
      excel: 'Tidak ada validasi format; sering reject saat upload ke DJP',
      engine: 'Validasi otomatis format NIK 16 digit & NPWP sebelum faktur dibuat',
    },
    {
      criteria: 'Rekonsiliasi PPh 21 Masa Desember',
      excel: 'Perhitungan ulang Pasal 17 manual rumit, sering selisih potong',
      engine: 'Rekonsiliasi otomatis selisih lebih/kurang bayar pada payroll Desember',
    },
    {
      criteria: 'Kesiapan Sistem Core Tax DJP',
      excel: 'Format spreadsheet lama rawan tidak kompatibel skema baru',
      engine: 'Arsitektur dan skema ekspor XML telah disesuaikan dengan Core Tax',
    },
    {
      criteria: 'Integrasi Modul Pembukuan & Payroll',
      excel: 'Input ganda antara rekap gaji dengan jurnal biaya operasional',
      engine: 'Terhubung langsung dengan General Ledger Yaycount & Goletin Office',
    },
  ];

  const indotaxFaqItems: FaqItem[] = [
    {
      id: 'faq-desember-trueup',
      q: 'Bagaimana mekanisme perhitungan PPh 21 skema TER pada masa pajak Desember?',
      a: 'Sesuai PP 58/2023 dan PMK 168/2023, tarif efektif rata-rata (TER) hanya digunakan untuk masa pajak Januari sampai dengan November. Pada masa pajak Desember, perusahaan wajib menghitung total PPh 21 setahun penuh menggunakan tarif progresif Pasal 17 ayat (1) huruf a UU PPh, kemudian dikurangi total pajak yang telah dipotong selama bulan Januari–November. IndoTax mengotomatisasi seluruh rekonsiliasi akhir tahun ini sehingga staf payroll tidak perlu menghitung manual.',
    },
    {
      id: 'faq-ter-categories',
      q: 'Apa perbedaan antara TER Kategori A, B, dan C?',
      a: 'Kategori TER ditentukan berdasarkan status Penghasilan Tidak Kena Pajak (PTKP): Kategori A untuk status TK/0, TK/1, dan K/0; Kategori B untuk status TK/2, TK/3, K/1, dan K/2; sedangkan Kategori C khusus untuk status K/3. Masing-masing kategori memiliki tabel rentang penghasilan bruto dan persentase tarif efektif yang berbeda (mulai dari 0% hingga 34%).',
    },
    {
      id: 'faq-coretax-readiness',
      q: 'Apakah IndoTax sudah siap dengan implementasi sistem baru DJP Core Tax?',
      a: 'Ya. IndoTax dirancang dengan skema data yang kompatibel dengan integrasi Core Tax Administration System (CTAS) Direktorat Jenderal Pajak, termasuk validasi NIK 16 digit sebagai NPWP, format e-Faktur terpadu, dan pembuatan Bukti Pemotongan Unifikasi.',
    },
    {
      id: 'faq-freelancer-tax',
      q: 'Bagaimana IndoTax menangani pemotongan pajak untuk tenaga ahli atau bukan pegawai?',
      a: 'IndoTax menyediakan modul khusus untuk Bukan Pegawai (tenaga ahli, konsultan, pembicara, freelancer). Sistem secara otomatis menghitung Dasar Pengenaan Pajak (DPP) sebesar 50% dari penghasilan bruto, lalu menerapkan tarif Pasal 17 secara kumulatif atau non-kumulatif sesuai status kesinambungan pemberian jasa.',
    },
    {
      id: 'faq-data-security-tax',
      q: 'Bagaimana keamanan data penggajian dan pajak karyawan di IndoTax?',
      a: 'Keamanan data merupakan prioritas utama Karsasoft. Seluruh data kompensasi dan informasi perpajakan disimpan di Sovereign Data Center Indonesia dengan enkripsi AES-256 saat istirahat (at rest) dan TLS 1.3 saat transmisi, didukung kontrol hak akses granular per divisi.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated IndoTax App Laptop Showcase */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-indotax-hero-banner">
            <div className="goletin-indotax-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">IndoTax — Platform Perpajakan Terintegrasi</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Otomatisasi Pajak PPh 21 TER, e-Faktur PPN, dan e-Bupot Unifikasi
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Solusi kepatuhan perpajakan modern untuk korporasi dan konsultan di Indonesia. Otomatisasi pemotongan PPh 21 TER, e-Bupot massal, rekonsiliasi e-Faktur, dan kesiapan Core Tax DJP.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://indotax.goletin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka IndoTax Web</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <a href="#kalkulator" className="btn-secondary">
                    <span>Coba Kalkulator PPh 21 TER</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>PP 58/2023 &amp; PMK 168/2023</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Format Resmi e-Bupot DJP</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Core Tax DJP Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid (Microsoft Fluent Elevation) */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Standar PP 58 &amp; PMK 168</div>
              <p className="goletin-stat-sub">Kepatuhan skema Tarif Efektif Rata-Rata</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">&lt; 1 Detik</div>
              <div className="goletin-stat-title">Hitung PPh 21 Otomatis</div>
              <p className="goletin-stat-sub">Kategori TER A, B, &amp; C instan per karyawan</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">e-Bupot</div>
              <div className="goletin-stat-title">Bukti Potong Unifikasi</div>
              <p className="goletin-stat-sub">Cetak ribuan bukti potong resmi format DJP</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">Core Tax</div>
              <div className="goletin-stat-title">Integrasi DJP Siap Pakai</div>
              <p className="goletin-stat-sub">Format XML &amp; API sinkronisasi sistem baru</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities / Modules Grid */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Kapabilitas Lengkap IndoTax</span>
            <h2 className="section-title">Solusi Menyeluruh untuk Kebutuhan Pajak Korporasi</h2>
            <p className="section-lead" style={{ maxWidth: '740px', margin: '0 auto' }}>
              Dari otomatisasi pemotongan bulanan staf, ekspor bukti potong massal, hingga rekonsiliasi PPN e-Faktur dan persiapan Core Tax.
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
                <a href="#kalkulator" className="segment-tile-link">
                  <span>Lihat simulasi fitur</span>
                  <Icon name="arrow-right" size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tax Calculator Section */}
      <section id="kalkulator" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">Simulator Pajak Interaktif</span>
            <h2 className="section-title">Kalkulator Pajak Karyawan PPh 21 TER (PP 58/2023)</h2>
            <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Masukkan komponen gaji, pilih status PTKP dan metode pemotongan untuk melihat perhitungan tarif efektif dan estimasi take home pay karyawan secara akurat.
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
              {/* Form Controls */}
              <div>
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <label htmlFor="salary-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Penghasilan Bruto Sebulan:
                    </label>
                    <span style={{ color: 'var(--ms-blue-text)', fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-segoe-display)' }}>
                      Rp {grossSalary.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <input
                    id="salary-slider"
                    type="range"
                    min="5000000"
                    max="50000000"
                    step="500000"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: 'var(--ms-blue-text)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>Rp5 Juta</span>
                    <span>Rp25 Juta</span>
                    <span>Rp50 Juta</span>
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <label htmlFor="ptkp-select" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '8px' }}>
                    Status PTKP Karyawan:
                  </label>
                  <select
                    id="ptkp-select"
                    value={ptkpStatus}
                    onChange={(e) => setPtkpStatus(e.target.value)}
                    className="mitra-form-input"
                  >
                    <option value="TK0">TK/0 — Tidak Kawin, 0 Tanggungan (TER A)</option>
                    <option value="TK1">TK/1 — Tidak Kawin, 1 Tanggungan (TER A)</option>
                    <option value="K0">K/0 — Kawin, 0 Tanggungan (TER A)</option>
                    <option value="TK2">TK/2 — Tidak Kawin, 2 Tanggungan (TER B)</option>
                    <option value="TK3">TK/3 — Tidak Kawin, 3 Tanggungan (TER B)</option>
                    <option value="K1">K/1 — Kawin, 1 Tanggungan (TER B)</option>
                    <option value="K2">K/2 — Kawin, 2 Tanggungan (TER B)</option>
                    <option value="K3">K/3 — Kawin, 3 Tanggungan (TER C)</option>
                  </select>
                </div>

                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                    Metode Perhitungan Pajak:
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={() => setTaxMethod('gross')}
                      style={{
                        flex: 1,
                        padding: '11px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: taxMethod === 'gross' ? 'var(--ms-blue-text)' : 'var(--ms-border)',
                        backgroundColor: taxMethod === 'gross' ? '#EFF6FC' : '#FFFFFF',
                        color: taxMethod === 'gross' ? 'var(--ms-blue-text)' : 'var(--ms-text-heading)',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      Metode Gross (Dipotong Gaji)
                    </button>
                    <button
                      type="button"
                      onClick={() => setTaxMethod('gross-up')}
                      style={{
                        flex: 1,
                        padding: '11px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: taxMethod === 'gross-up' ? 'var(--ms-blue-text)' : 'var(--ms-border)',
                        backgroundColor: taxMethod === 'gross-up' ? '#EFF6FC' : '#FFFFFF',
                        color: taxMethod === 'gross-up' ? 'var(--ms-blue-text)' : 'var(--ms-text-heading)',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      Metode Gross-Up (Tunjangan)
                    </button>
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
                  HASIL KALKULASI PAJAK BULANAN
                </div>
                <div style={{ fontSize: '34px', fontWeight: 700, color: '#D83B01', fontFamily: 'var(--font-segoe-display)', lineHeight: '1.1', marginBottom: '4px' }}>
                  Rp {Math.round(pphMonthly).toLocaleString('id-ID')}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--ms-text-body)', fontWeight: 600, marginBottom: '20px' }}>
                  TER Kategori {terCategory} • Tarif Efektif: <strong style={{ color: 'var(--ms-blue-text)' }}>{terRate}%</strong>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--ms-border)', paddingTop: '16px', marginBottom: '22px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>Gaji Pokok &amp; Tunjangan:</span>
                    <strong style={{ color: 'var(--ms-text-heading)' }}>Rp {grossSalary.toLocaleString('id-ID')}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>Potongan PPh 21 TER:</span>
                    <strong style={{ color: '#D83B01' }}>-Rp {Math.round(pphMonthly).toLocaleString('id-ID')}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--ms-border)', paddingTop: '10px' }}>
                    <span style={{ color: 'var(--ms-text-heading)', fontWeight: 700 }}>Estimasi Gaji Bersih (THP):</span>
                    <strong style={{ color: '#107C41', fontSize: '15px' }}>Rp {Math.round(takeHomePay).toLocaleString('id-ID')}</strong>
                  </div>
                </div>

                <a
                  href="https://indotax.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Proses Payroll Massal di IndoTax</span>
                  <Icon name="external-link" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Tax Filing Workflow */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Siklus Pajak Perusahaan</span>
            <h2 className="section-title">Alur 4 Tahap Kepatuhan Pajak Korporasi Terpadu</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Memastikan setiap tahapan penghitungan, pemotongan, penyetoran, dan pelaporan pajak terlaksana tepat waktu tanpa sanksi denda.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {taxCycleSteps.map((step, idx) => (
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

      {/* Sector Scenarios */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Skenario Bisnis</span>
            <h2 className="section-title">Penerapan IndoTax di Berbagai Skala Organisasi</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Dari kantor konsultan pajak hingga perusahaan manufaktur padat karya dengan ribuan karyawan operasional.
            </p>
          </div>

          <div className="segment-use-cases">
            {industryScenarios.map((inst, i) => (
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

      {/* Comparison Table: Manual Excel vs Goletin IndoTax */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Perbandingan Solusi</span>
            <h2 className="section-title">Spreadsheet Manual Excel vs Goletin IndoTax</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Tinggalkan rumus manual yang rentan salah hitung tarif dan berisiko memicu Surat Permintaan Penjelasan (SP2DK) dari kantor pajak.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '34%' }}>Parameter &amp; Kriteria Kepatuhan</th>
                  <th style={{ width: '33%', color: 'var(--ms-text-muted)' }}>Spreadsheet Manual Excel</th>
                  <th style={{ width: '33%', color: 'var(--ms-blue-text)' }}>Goletin IndoTax</th>
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

      {/* Consultation Form */}
      <section id="konsultasi" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Konsultasi Perpajakan</span>
              <h2 className="section-title">Otomatisasi Sistem Pajak Perusahaan Anda Hari Ini</h2>
              <p className="section-lead">
                Diskusikan integrasi IndoTax dengan sistem payroll dan pembukuan perusahaan Anda bersama tim konsultan pajak Karsasoft.
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
                  Pengajuan Demo Diterima!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', lineHeight: '22px', maxWidth: '600px', margin: '0 auto 20px' }}>
                  Terima kasih, <strong>{formData.name}</strong> dari <strong>{formData.company}</strong>. Konsultan spesialis pajak IndoTax akan menghubungi Anda melalui email <strong>{formData.email}</strong> dalam waktu maksimal 1x24 jam kerja.
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
                      placeholder="e.g. Maya Safitri, S.E., BKP"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Email Resmi Perusahaan *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@perusahaan.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Nama Perusahaan *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Mitra Logistik Indonesia"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Jumlah Karyawan / Wajib Pajak
                    </label>
                    <select
                      value={formData.employeeRange}
                      onChange={(e) => setFormData({ ...formData, employeeRange: e.target.value })}
                      className="mitra-form-input"
                    >
                      <option value="10 - 50 Karyawan">10 - 50 Karyawan</option>
                      <option value="50 - 200 Karyawan">50 - 200 Karyawan</option>
                      <option value="200 - 1.000 Karyawan">200 - 1.000 Karyawan</option>
                      <option value="> 1.000 Karyawan">&gt; 1.000 Karyawan (Enterprise Payroll)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                    Kebutuhan Khusus / Pertanyaan
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Sebutkan kebutuhan software payroll, integrasi e-Faktur, atau kendala pajak akhir tahun perusahaan Anda..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mitra-form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn-primary" style={{ minWidth: '240px', justifyContent: 'center' }}>
                    <span>Jadwalkan Konsultasi Pajak</span>
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
            <span className="section-eyebrow">Tanya Jawab Seputar IndoTax</span>
            <h2 className="section-title">Pertanyaan Umum Kepatuhan Pajak Indonesia</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Jawaban atas pertanyaan mendasar mengenai perhitungan PPh 21 skema TER, bukti potong, dan kesiapan Core Tax.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <GoletinFaq items={indotaxFaqItems} countLabel="5 Tanya Jawab IndoTax &amp; Perpajakan" />
          </div>
        </div>
      </section>

      {/* Bottom Enterprise CTA Banner */}
      <div className="section-padding" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kepatuhan Pajak Korporasi
              </span>
              <h2 className="goletin-bottom-cta-title">
                Kepatuhan Pajak Lebih Cepat, Akurat &amp; Bebas Sanksi
              </h2>
              <p className="goletin-bottom-cta-desc">
                Tinggalkan perhitungan rumus spreadsheet manual yang rumit. Percayakan kepatuhan PPh 21 dan PPN perusahaan Anda pada platform IndoTax yang selalu diperbarui mengikuti regulasi Kementerian Keuangan.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a
                  href="https://indotax.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Mulai Gunakan IndoTax</span>
                  <Icon name="external-link" size={15} />
                </a>
                <a href="#konsultasi" className="btn-secondary">
                  <span>Jadwalkan Konsultasi Pajak</span>
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
