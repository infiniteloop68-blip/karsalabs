'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function RevenueProProductPage() {
  // Simulator State: Bundling Contract Model
  const [contractTotal, setContractTotal] = useState<number>(300000000); // Rp300 Juta
  const [sspLicense, setSspLicense] = useState<number>(200000000); // Rp200 Juta
  const [sspService, setSspService] = useState<number>(100000000); // Rp100 Juta
  const [sspMaintenance, setSspMaintenance] = useState<number>(60000000); // Rp60 Juta
  const [serviceProgressPct, setServiceProgressPct] = useState<number>(60); // % progress milestone
  const [maintenanceMonthsElapsed, setMaintenanceMonthsElapsed] = useState<number>(4); // Bulan berjalan (dari 12)
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    industry: 'Teknologi & SaaS',
    notes: '',
  });

  // Calculate Proportional Transaction Price Allocation (PSAK 72 Step 4)
  const totalSsp = sspLicense + sspService + sspMaintenance;
  const discountTotal = Math.max(0, totalSsp - contractTotal);
  const discountPct = totalSsp > 0 ? ((discountTotal / totalSsp) * 100).toFixed(1) : '0';

  // Allocated Transaction Prices
  const allocLicense = totalSsp > 0 ? (sspLicense / totalSsp) * contractTotal : 0;
  const allocService = totalSsp > 0 ? (sspService / totalSsp) * contractTotal : 0;
  const allocMaintenance = totalSsp > 0 ? (sspMaintenance / totalSsp) * contractTotal : 0;

  // Recognized Revenue (PSAK 72 Step 5)
  // License: Point in time (100% recognized on delivery)
  const recognizedLicense = allocLicense;
  // Service: Over time based on input/output progress percentage
  const recognizedService = allocService * (serviceProgressPct / 100);
  const deferredService = allocService - recognizedService;
  // Maintenance: Over time straight-line (12 months)
  const recognizedMaintenance = allocMaintenance * (maintenanceMonthsElapsed / 12);
  const deferredMaintenance = allocMaintenance - recognizedMaintenance;

  const totalRecognizedRevenue = recognizedLicense + recognizedService + recognizedMaintenance;
  const totalDeferredRevenue = deferredService + deferredMaintenance; // Contract Liability

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const revenuePillars = [
    {
      icon: 'calculator',
      title: 'Kerangka Kerja 5-Langkah PSAK 72 & IFRS 15',
      desc: 'Otomatisasi pengakuan pendapatan terstruktur: (1) Identifikasi kontrak, (2) Identifikasi kewajiban pelaksanaan, (3) Penetapan harga, (4) Alokasi harga transaksi, dan (5) Pengakuan pendapatan.',
      badge: 'Standar PSAK 72',
    },
    {
      icon: 'analytics',
      title: 'Alokasi Berbasis Standalone Selling Price (SSP)',
      desc: 'Hitung alokasi proporsional harga transaksi gabungan (bundling software, lisensi, dan jasa pemeliharaan) berdasarkan harga jual berdiri sendiri yang dapat diobservasi.',
      badge: 'Alokasi SSP Proporsional',
    },
    {
      icon: 'saas',
      title: 'Pengakuan Seiring Waktu (Over Time) vs Titik Waktu (Point in Time)',
      desc: 'Terapkan metode input (biaya yang telah dikeluarkan) atau metode output (tahapan milestone deliverable) untuk proyek jangka panjang konstruksi, EPC, dan implementasi software.',
      badge: 'Over Time & Point in Time',
    },
    {
      icon: 'erp',
      title: 'Pencatatan Aset Kontrak & Pendapatan Tangguhan Otomatis',
      desc: 'Rekonsiliasi berkala antara piutang belum ditagih (Contract Asset / Unbilled Receivable) dan pendapatan diterima di muka (Contract Liability / Deferred Revenue).',
      badge: 'Contract Asset & Liability',
    },
    {
      icon: 'security',
      title: 'Manajemen Modifikasi Kontrak & Addendum',
      desc: 'Evaluasi apakah amandemen kontrak harus diperlakukan sebagai kontrak terpisah atau penyesuaian kumulatif (cumulative catch-up adjustment) sesuai ketentuan paragraf 20–21 PSAK 72.',
      badge: 'Contract Modification',
    },
    {
      icon: 'docs',
      title: 'Pengungkapan Catatan Kaki (CALK) Siap Audit',
      desc: 'Hasilkan tabel pengungkapan disagregasi pendapatan berdasarkan lini produk, wilayah geografis, dan waktu pengalihan barang/jasa yang siap dilampirkan pada laporan keuangan audit.',
      badge: 'Audit-Ready Disclosures',
    },
  ];

  const complianceComparison = [
    {
      feature: 'Alokasi Kontrak Bundling',
      manual: 'Mengakui seluruh nilai tagihan secara flat tanpa mempertimbangkan harga jual berdiri sendiri (SSP)',
      revenuePro: 'Alokasi proporsional otomatis berdasarkan Standalone Selling Price sesuai paragraf 74–90 PSAK 72',
    },
    {
      feature: 'Pengakuan Kontrak Multi-Tahun',
      manual: 'Pencatatan manual di spreadsheet yang sering terlewat dan rawan duplikasi antar periode pembukuan',
      revenuePro: 'Jadwal amortisasi bulanan otomatis dengan sinkronisasi ke buku besar ERP Yaycount / SAP',
    },
    {
      feature: 'Penanganan Addendum / Amandemen',
      manual: 'Perhitungan manual ad-hoc tanpa formula standar penyesuaian kumulatif (cumulative catch-up)',
      revenuePro: 'Evaluasi otomatis perlakuan modifikasi kontrak (prospektif vs retrospektif) dengan audit trail lengkap',
    },
    {
      feature: 'Pemisahan Aset & Liabilitas Kontrak',
      manual: 'Bercampur aduk dalam akun piutang usaha dan hutang lain-lain tanpa klasifikasi neraca yang tepat',
      revenuePro: 'Pemisahan baku antara Unbilled Contract Asset dan Deferred Revenue (Contract Liability)',
    },
    {
      feature: 'Tabel Pengungkapan CALK Audit',
      manual: 'Membutuhkan waktu 1–2 minggu merekap ulang seluruh faktur penjualan saat diaudit KAP eksternal',
      revenuePro: '1-Klik ekspor matriks disagregasi pendapatan dan saldo kontrak yang siap ditandatangani auditor',
    },
  ];

  const revenueFaqItems: FaqItem[] = [
    {
      id: 'revenue-industries',
      q: 'Industri apa saja yang paling membutuhkan Revenue Pro PSAK 72?',
      a: 'Sangat krusial untuk industri SaaS & Perangkat Lunak, Telekomunikasi, Pengembang Properti & Real Estat, Konstruksi & Rekayasa Teknik, serta perusahaan yang menjual paket bundling produk dan layanan purnajual bertahap.',
    },
    {
      id: 'revenue-audit',
      q: 'Bagaimana Revenue Pro membantu saat audit tahunan oleh KAP?',
      a: 'Setiap pengakuan pendapatan memiliki audit trail lengkap yang merujuk pada dokumen kontrak sumber, tanggal serah terima (BAST), metode estimasi SSP, dan formula amortisasi bulanan yang dapat diuji ulang secara transparan oleh auditor eksternal.',
    },
    {
      id: 'revenue-erp',
      q: 'Apakah Revenue Pro terhubung ke modul penagihan faktur dan piutang?',
      a: 'Ya, terhubung mulus dengan modul faktur penjualan Yaycount ERP dan dapat diintegrasikan dengan database ERP SAP, Oracle, atau Microsoft Dynamics via REST API aman.',
    },
    {
      id: 'revenue-changes',
      q: 'Bagaimana sistem menangani pembatalan atau perubahan ruang lingkup kontrak di tengah jalan?',
      a: 'Sistem secara otomatis menghitung penyesuaian retrospektif atau prospektif sesuai klasifikasi addendum PSAK 72 dan memposting jurnal koreksi selisih pendapatan seketika.',
    },
    {
      id: 'revenue-ssp',
      q: 'Bagaimana jika perusahaan belum memiliki data Standalone Selling Price yang pasti?',
      a: 'Revenue Pro menyediakan modul estimasi SSP berbasis tiga pendekatan resmi PSAK 72: Adjusted Market Assessment Approach, Expected Cost Plus a Margin Approach, dan Residual Approach.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner (Standardized 520px, Matching /goletin/ai) */}
          <div className="ms-hero-wrapper goletin-revenue-hero-banner">
            <div className="goletin-revenue-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Engine Kepatuhan Akuntansi Finansial PSAK 72</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Revenue Pro: Pengakuan Pendapatan PSAK 72 & IFRS 15
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Otomatisasi kalkulasi pengakuan pendapatan kontrak pelanggan dengan metodologi 5-langkah berstandar internasional. Kelola alokasi harga bundling, amortisasi pendapatan tangguhan, dan modifikasi kontrak tanpa kekeliruan spreadsheet.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka Revenue Pro Web</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <a href="#simulator-pendapatan" className="btn-secondary">
                    <span>Coba Simulator Pendapatan</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Standar PSAK 72 / IFRS 15</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>5-Step Revenue Framework</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Contract Asset & Liability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulator: 5-Step PSAK 72 Bundling Allocation */}
          <section id="simulator-pendapatan" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Simulator Interaktif PSAK 72</span>
              <h2 className="section-title">Kalkulasi Alokasi Harga Bundling (SSP) & Pendapatan Tangguhan</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Simulasikan alokasi harga transaksi proporsional berdasarkan Standalone Selling Price (SSP) serta pemisahan antara pendapatan yang diakui seketika vs diamortisasi seiring waktu.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--ms-border-card)',
                borderRadius: '12px',
                padding: '36px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
                {/* Inputs & Parameters */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '20px' }}>
                    Parameter Kontrak & Harga Jual Berdiri Sendiri (SSP)
                  </h3>

                  {/* Total Contract Price */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Total Nilai Kontrak Bundling (Harga Transaksi)
                      </label>
                      <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                        Rp{contractTotal.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50000000}
                      max={1000000000}
                      step={10000000}
                      value={contractTotal}
                      onChange={(e) => setContractTotal(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-text)' }}
                    />
                  </div>

                  {/* Component A: License */}
                  <div style={{ marginBottom: '18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        SSP Komponen 1: Lisensi Software (Point in Time)
                      </label>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                        Rp{sspLicense.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={20000000}
                      max={500000000}
                      step={10000000}
                      value={sspLicense}
                      onChange={(e) => setSspLicense(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-text)' }}
                    />
                  </div>

                  {/* Component B: Implementation Service */}
                  <div style={{ marginBottom: '18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        SSP Komponen 2: Jasa Kustomisasi (Over Time)
                      </label>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                        Rp{sspService.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={20000000}
                      max={300000000}
                      step={10000000}
                      value={sspService}
                      onChange={(e) => setSspService(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-text)' }}
                    />
                  </div>

                  {/* Component C: Maintenance SLA */}
                  <div style={{ marginBottom: '22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        SSP Komponen 3: Pemeliharaan SLA 12 Bulan (Straight-Line)
                      </label>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                        Rp{sspMaintenance.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10000000}
                      max={200000000}
                      step={5000000}
                      value={sspMaintenance}
                      onChange={(e) => setSspMaintenance(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-text)' }}
                    />
                  </div>

                  {/* Progress Controls */}
                  <div style={{ backgroundColor: 'var(--ms-bg-subtle)', padding: '14px', borderRadius: '6px' }}>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Progress Jasa Kustomisasi: {serviceProgressPct}%
                        </span>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                          Metode Input Milestone
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        step={5}
                        value={serviceProgressPct}
                        onChange={(e) => setServiceProgressPct(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--ms-blue-text)' }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Bulan Berjalan Pemeliharaan: {maintenanceMonthsElapsed} dari 12 Bulan
                        </span>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                          Amortisasi Garis Lurus
                        </span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={12}
                        step={1}
                        value={maintenanceMonthsElapsed}
                        onChange={(e) => setMaintenanceMonthsElapsed(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--ms-blue-text)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Real-Time Accounting Allocation Output */}
                <div
                  style={{
                    backgroundColor: '#FAFBFB',
                    border: '1px solid var(--ms-border)',
                    borderRadius: '8px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                        HASIL ALOKASI HARGA (PSAK 72 STEP 4 & 5)
                      </span>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '4px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#DCFCE7',
                          color: '#16A34A',
                        }}
                      >
                        DISKON BUNDLING {discountPct}%
                      </span>
                    </div>

                    {/* Breakdown Table */}
                    <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--ms-border)', borderRadius: '6px', overflow: 'hidden', marginBottom: '16px' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#F8FAF9', borderBottom: '1px solid var(--ms-border)', textAlign: 'left' }}>
                            <th style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>Komponen</th>
                            <th style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>Alokasi Harga</th>
                            <th style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>Diakui</th>
                            <th style={{ padding: '8px 12px', fontWeight: 700, color: '#D97706' }}>Tangguhan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderBottom: '1px solid var(--ms-border)' }}>
                            <td style={{ padding: '8px 12px', fontWeight: 600 }}>1. Lisensi</td>
                            <td style={{ padding: '8px 12px' }}>Rp{Math.round(allocLicense).toLocaleString('id-ID')}</td>
                            <td style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>Rp{Math.round(recognizedLicense).toLocaleString('id-ID')}</td>
                            <td style={{ padding: '8px 12px', color: '#94A3B8' }}>Rp0</td>
                          </tr>
                          <tr style={{ borderBottom: '1px solid var(--ms-border)' }}>
                            <td style={{ padding: '8px 12px', fontWeight: 600 }}>2. Jasa ({serviceProgressPct}%)</td>
                            <td style={{ padding: '8px 12px' }}>Rp{Math.round(allocService).toLocaleString('id-ID')}</td>
                            <td style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>Rp{Math.round(recognizedService).toLocaleString('id-ID')}</td>
                            <td style={{ padding: '8px 12px', color: '#D97706' }}>Rp{Math.round(deferredService).toLocaleString('id-ID')}</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '8px 12px', fontWeight: 600 }}>3. SLA ({maintenanceMonthsElapsed}/12 Bln)</td>
                            <td style={{ padding: '8px 12px' }}>Rp{Math.round(allocMaintenance).toLocaleString('id-ID')}</td>
                            <td style={{ padding: '8px 12px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>Rp{Math.round(recognizedMaintenance).toLocaleString('id-ID')}</td>
                            <td style={{ padding: '8px 12px', color: '#D97706' }}>Rp{Math.round(deferredMaintenance).toLocaleString('id-ID')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Summary Metric Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '12px 14px', borderRadius: '6px', border: '1px solid var(--ms-border)' }}>
                        <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)', marginBottom: '2px' }}>Pendapatan Diakui Periode Ini</div>
                        <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                          Rp{Math.round(totalRecognizedRevenue).toLocaleString('id-ID')}
                        </div>
                      </div>

                      <div style={{ backgroundColor: '#FFFFFF', padding: '12px 14px', borderRadius: '6px', border: '1px solid var(--ms-border)' }}>
                        <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)', marginBottom: '2px' }}>Liabilitas Kontrak (Deferred Revenue)</div>
                        <div style={{ fontSize: '18px', fontWeight: 700, color: '#D97706' }}>
                          Rp{Math.round(totalDeferredRevenue).toLocaleString('id-ID')}
                        </div>
                      </div>
                    </div>

                    {/* Auto-Journal Recommendation */}
                    <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--ms-border)', borderRadius: '6px', padding: '12px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Usulan Ayat Jurnal Akuntansi (Auto-Journal):
                      </div>
                      <div style={{ fontSize: '12px', fontFamily: 'monospace', lineHeight: '18px', color: '#334155' }}>
                        <div>(D) Kas / Piutang Usaha &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rp{contractTotal.toLocaleString('id-ID')}</div>
                        <div style={{ paddingLeft: '20px' }}>(K) Pendapatan Usaha (Diakui) &nbsp;&nbsp;&nbsp; Rp{Math.round(totalRecognizedRevenue).toLocaleString('id-ID')}</div>
                        <div style={{ paddingLeft: '20px' }}>(K) Pendapatan Diterima di Muka &nbsp; Rp{Math.round(totalDeferredRevenue).toLocaleString('id-ID')}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a
                      href="https://goletin.com/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <span>Posting ke Yaycount ERP</span>
                      <Icon name="external-link" size={14} />
                    </a>
                    <Link
                      href="/kontak"
                      className="btn-secondary"
                      style={{ justifyContent: 'center' }}
                    >
                      <span>Konsultasi IFRS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6 Key Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Modul Revenue Pro</span>
              <h2 className="section-title">Solusi Menyeluruh Pengakuan Pendapatan Kompleks</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Hapus risiko salah saji material pendapatan dan temuan audit dengan engine matematis yang telah teruji secara menyeluruh.
              </p>
            </div>

            <div className="standards-grid">
              {revenuePillars.map((pillar, idx) => (
                <div key={idx} className="standard-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--ms-blue-light)',
                        color: 'var(--ms-blue-text)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name={pillar.icon} size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--ms-blue-text)',
                        backgroundColor: 'var(--ms-blue-light)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '21px', color: 'var(--ms-text-body)', margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Comparison Table */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Perbandingan Pendekatan</span>
              <h2 className="section-title">Perbedaan Praktik Konvensional vs Standar PSAK 72</h2>
              <p className="section-lead" style={{ maxWidth: '760px', margin: '0 auto' }}>
                Tinjau bagaimana Revenue Pro melindungi laporan keuangan korporasi dari temuan koreksi audit material (*audit adjustment*) oleh KAP independen.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--ms-border-card)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '640px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#F8FAF9', borderBottom: '1px solid var(--ms-border)' }}>
                      <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                        Aspek Perlakuan Akuntansi
                      </th>
                      <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                        Praktik Spreadsheet Konvensional
                      </th>
                      <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                        Revenue Pro Otomatis
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {complianceComparison.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          borderBottom: idx === complianceComparison.length - 1 ? 'none' : '1px solid var(--ms-border)',
                          backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFBFB',
                        }}
                      >
                        <td style={{ padding: '16px 20px', fontSize: '13.5px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                          {row.feature}
                        </td>
                        <td style={{ padding: '16px 20px', fontSize: '13px', color: '#64748B', lineHeight: '19px' }}>
                          <span style={{ color: '#EF4444', marginRight: '6px' }}>✕</span>
                          {row.manual}
                        </td>
                        <td style={{ padding: '16px 20px', fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '19px' }}>
                          <span style={{ color: '#10B981', marginRight: '6px', fontWeight: 700 }}>✓</span>
                          {row.revenuePro}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Interactive Request Presentation Form */}
          <section style={{ marginBottom: '64px' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--ms-border-card)',
                borderRadius: '12px',
                padding: '40px',
                maxWidth: '720px',
                margin: '0 auto',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span className="section-eyebrow">Konsultasi Kepatuhan PSAK 72</span>
                <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--ms-text-heading)', marginTop: '8px', marginBottom: '10px' }}>
                  Konsultasikan Model Kontrak Pendapatan Perusahaan Anda
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', margin: 0 }}>
                  Tim spesialis akuntansi IFRS Karsasoft akan membantu Anda mengevaluasi klausul kontrak, memformulasikan estimasi SSP, dan mengintegrasikan engine ke sistem ERP Anda.
                </p>
              </div>

              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: '#DCFCE7',
                    border: '1px solid #86EFAC',
                    borderRadius: '8px',
                    padding: '32px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#16A34A',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Icon name="check" size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#166534', marginBottom: '8px' }}>
                    Permintaan Konsultasi Berhasil Terkirim
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#15803D', marginBottom: '16px' }}>
                    Terima kasih, {formData.name || 'Bapak/Ibu'}. Financial engineer kami akan menghubungi Anda melalui email{' '}
                    <strong>{formData.email || 'perusahaan'}</strong> dalam 1x24 jam kerja.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="btn-secondary"
                    style={{ fontSize: '13px', padding: '6px 16px' }}
                  >
                    Kirim Permintaan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Hendra Wijaya"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Email Perusahaan / Kantor *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hendra@korporasi.co.id"
                        className="mitra-form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama Perusahaan / Institusi *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="PT Telekomunikasi Nusantara"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Sektor Industri
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="mitra-form-input"
                      >
                        <option value="Teknologi & SaaS">Teknologi & SaaS</option>
                        <option value="Konstruksi & Rekayasa Teknik">Konstruksi & Rekayasa Teknik</option>
                        <option value="Telekomunikasi">Telekomunikasi</option>
                        <option value="Properti & Real Estat">Properti & Real Estat</option>
                        <option value="Kantor Akuntan Publik (KAP)">Kantor Akuntan Publik (KAP)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Deskripsi Kompleksitas Kontrak / Kebutuhan
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Contoh: Butuh otomatisasi alokasi kontrak bundling multi-komponen software lisensi + implementasi + support SLA untuk 500+ kontrak korporasi."
                      className="mitra-form-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14.5px' }}
                  >
                    <span>Ajukan Konsultasi Kepatuhan PSAK 72</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Section FAQ & Dukungan */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Pertanyaan Umum</span>
              <h2 className="section-title">Pertanyaan Seputar Revenue Pro</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar kerangka 5 tahap, kesiapan audit laporan keuangan, dan integrasi sistem.
              </p>
            </div>
            <GoletinFaq items={revenueFaqItems} countLabel="5 Tanya Jawab Revenue Pro" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kepatuhan Laporan Keuangan
              </span>
              <h2 className="goletin-bottom-cta-title">
                Sempurnakan Pengakuan Pendapatan Sesuai PSAK 72
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultasikan skema kontrak pendapatan dan integrasi engine akuntansi bersama tim spesialis IFRS Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Standar PSAK 72</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Buka Revenue Pro Web</span>
                  <Icon name="external-link" size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
