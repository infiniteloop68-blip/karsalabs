'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function BenefitsEngineProductPage() {
  // Simulator State: Projected Unit Credit (PUC) IAS 19 / PSAK 219 & PP 35/2021
  const [employeeCount, setEmployeeCount] = useState<number>(120);
  const [avgSalary, setAvgSalary] = useState<number>(9500000); // Rp9.5 Juta
  const [avgTenureYears, setAvgTenureYears] = useState<number>(7);
  const [remainingYears, setRemainingYears] = useState<number>(18);
  const [discountRate, setDiscountRate] = useState<number>(6.75); // % p.a. SUN 10-th
  const [salaryGrowthRate, setSalaryGrowthRate] = useState<number>(6.0); // % p.a.
  const [scheme, setScheme] = useState<'pp35' | 'pkb'>('pp35');

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    industry: 'Manufaktur & FMCG',
    employeeScale: '100 - 500 Karyawan',
    notes: '',
  });

  // Actuarial Valuation Formulas (Projected Unit Credit)
  const totalCareerYears = Math.max(1, avgTenureYears + remainingYears);
  const projectedFinalSalary = avgSalary * Math.pow(1 + salaryGrowthRate / 100, remainingYears);

  // Multiplier Pesangon & Penghargaan Masa Kerja (PP 35/2021 vs PKB 2x)
  const benefitMultiplier =
    scheme === 'pp35'
      ? Math.min(26, Math.max(2, totalCareerYears * 0.95 + 3.5))
      : Math.min(34, Math.max(4, totalCareerYears * 1.3 + 4.5));

  const totalRetirementBenefitPerPerson = projectedFinalSalary * benefitMultiplier;
  const pvFactor = Math.pow(1 + discountRate / 100, -remainingYears);
  const pvTotalBenefit = totalRetirementBenefitPerPerson * pvFactor;

  // Attribution to Past Service (Defined Benefit Obligation / DBO)
  const serviceFractionPast = Math.min(1, avgTenureYears / totalCareerYears);
  const dboPerPerson = pvTotalBenefit * serviceFractionPast;
  const totalDbo = dboPerPerson * employeeCount;

  // Annual Current Service Cost (Biaya Jasa Kini)
  const currentServiceCost = (pvTotalBenefit / totalCareerYears) * employeeCount;

  // Net Interest Cost (Beban Bunga Liabilitas)
  const netInterestCost = totalDbo * (discountRate / 100);

  // Total P&L Expense
  const totalPnLExpense = currentServiceCost + netInterestCost;

  // Estimated annual benefit payout (liquidity cash flow requirement ~2.5% retiring/turnover)
  const annualCashPayoutEst = employeeCount * 0.025 * avgSalary * (avgTenureYears * 1.5 + 2);

  const formatRupiah = (val: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(Math.round(val));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const benefitsPillars = [
    {
      icon: 'calculator',
      title: 'Pemodelan Projected Unit Credit (PUC) Teruji',
      desc: 'Metode aktuaria baku yang diwajibkan oleh PSAK 219 dan IAS 19. Mengaitkan setiap periode masa kerja dengan satu unit hak imbalan dan mengukurnya secara terpisah.',
      badge: 'Metode Standar PUC',
    },
    {
      icon: 'compliance',
      title: 'Dual Kepatuhan IAS 19 & UU Cipta Kerja PP 35/2021',
      desc: 'Secara fleksibel membedah formula perhitungan imbalan pascakerja berdasarkan regulasi PP 35/2021, Perjanjian Kerja Bersama (PKB), atau Peraturan Perusahaan (PP).',
      badge: 'PP 35/2021 & PKB Compliant',
    },
    {
      icon: 'analytics',
      title: 'Asumsi Aktuaria Finansial & Demografis Dinamis',
      desc: 'Memanfaatkan kurva imbal hasil Surat Utang Negara (SUN yield curve), tabel mortalitas Indonesia (TMI IV), tingkat pengunduran diri (turnover), dan ekspektasi kenaikan upah.',
      badge: 'SUN Yield & TMI IV Matrix',
    },
    {
      icon: 'accounting',
      title: 'Pemisahan P&L vs Pendapatan Komprehensif Lain (OCI)',
      desc: 'Memisahkan secara otomatis antara Biaya Jasa Kini & Beban Bunga (masuk ke Laba Rugi) dengan Pengukuran Kembali / Remeasurements selisih aktuaria (masuk ke OCI).',
      badge: 'P&L vs OCI Classification',
    },
    {
      icon: 'docs',
      title: 'Laporan Valuasi & Kertas Kerja CALK Siap Audit',
      desc: 'Ekspor laporan aktuaria formal, analisis sensitivitas tingkat diskonto (±100 bps), dan tabel pengungkapan Catatan Atas Laporan Keuangan (CALK) yang siap diserahkan ke KAP.',
      badge: 'Audit-Ready Actuarial Report',
    },
    {
      icon: 'erp',
      title: 'Sinkronisasi Data Payroll Yaycount ERP & Eksternal',
      desc: 'Tarik data demografis karyawan (usia, tanggal mulai bekerja, gaji pokok, tunjangan tetap) secara real-time dari Yaycount HR Payroll atau impor file CSV/Excel dengan validasi cerdas.',
      badge: 'Real-time Payroll Sync',
    },
  ];

  const complianceComparison = [
    {
      feature: 'Metodologi Aktuaria',
      manual: 'Formula pesangon flat tanpa pemodelan diskonto dan probabilitas demografis bertahan hidup',
      benefitsEngine: 'Projected Unit Credit (PUC) penuh dengan diskonto obligasi negara & tabel mortalitas TMI IV',
    },
    {
      feature: 'Perlakuan Regulasi PP 35/2021',
      manual: 'Kerap keliru membedakan kompensasi pensiun normal, efisiensi perusahaan, atau pengunduran diri sukarela',
      benefitsEngine: 'Mesin aturan hukum otomatis memetakan seluruh pasal pesangon PP 35/2021 dan batas masa kerja',
    },
    {
      feature: 'Pemisahan Rekening Neraca & OCI',
      manual: 'Seluruh selisih kewajiban dibebankan sekaligus ke akun laba rugi operasional, mendistorsi laba bersih',
      benefitsEngine: 'Memisahkan Biaya Jasa (P&L) dan Keuntungan/Kerugian Aktuaria (OCI) sesuai paragraf 57–130 PSAK 219',
    },
    {
      feature: 'Uji Sensitivitas untuk Audit KAP',
      manual: 'Penyusunan simulasi manual berhari-hari saat auditor meminta skenario diskonto ±1% dan kenaikan upah',
      benefitsEngine: 'Matriks sensitivitas instan (±50 bps, ±100 bps) langsung tercetak otomatis dalam format CALK',
    },
    {
      feature: 'Kecepatan Valuasi Akhir Tahun',
      manual: 'Membutuhkan waktu 3–6 minggu menunggu laporan aktuaria konsultan eksternal selesai disusun',
      benefitsEngine: 'Valuasi interim dan akhir tahun dapat dijalankan dalam hitungan menit untuk penutupan buku cepat',
    },
  ];

  const benefitsFaqItems: FaqItem[] = [
    {
      id: 'benefits-audit',
      q: 'Apakah hasil kalkulasi Benefits Engine dapat diterima oleh KAP dan auditor eksternal?',
      a: 'Ya. Metodologi yang digunakan adalah Projected Unit Credit (PUC) yang sepenuhnya patuh pada PSAK 219 dan IAS 19. Format laporan valuasi dilengkapi catatan asumsi aktuaria (discount rate SUN, TMI IV mortality, disability rate, turnover rate) serta tabel pengungkapan rekonsiliasi DBO yang sesuai standar pelaporan akuntansi formal.',
    },
    {
      id: 'benefits-pp35',
      q: 'Bagaimana penanganan perubahan regulasi UU Cipta Kerja (PP 35/2021) pada Benefits Engine?',
      a: 'Benefits Engine memiliki modul penyesuaian regulasi bawaan. Anda dapat memilih apakah dasar perhitungan menggunakan batas pesangon PP 35/2021 (faktor 1.75x untuk pensiun reguler), UU Ketenagakerjaan No. 13/2003 (skema 2x untuk perbandingan historis), atau klausul Perjanjian Kerja Bersama (PKB) yang lebih menguntungkan karyawan.',
    },
    {
      id: 'benefits-oci',
      q: 'Bagaimana sistem mencatat keuntungan atau kerugian aktuaria (actuarial gains and losses)?',
      a: 'Berdasarkan PSAK 219 revisi, koridor akrual lama telah dihapuskan. Keuntungan atau kerugian aktuaria yang timbul dari penyesuaian pengalaman (experience adjustments) atau perubahan asumsi keuangan langsung diakui pada Pendapatan Komprehensif Lain (OCI) dan tidak direklasifikasi ke Laba Rugi pada periode berikutnya.',
    },
    {
      id: 'benefits-dplk',
      q: 'Apakah kepemilikan program pensiun DPLK / DPPK perusahaan dapat diperhitungkan sebagai pengurang kewajiban?',
      a: 'Bisa. Jika perusahaan mengikutsertakan karyawan dalam program pensiun iuran pasti (DPLK), akumulasi iuran pemberi kerja dan hasil pengembangannya dapat diperhitungkan sebagai aset program (Plan Assets) yang mengurangi kewajiban imbalan pasti bruto menjadi liabilitas/aset neto di neraca.',
    },
    {
      id: 'benefits-update-frequency',
      q: 'Seberapa sering perusahaan perlu melakukan valuasi imbalan kerja?',
      a: 'PSAK 219 mengharuskan pengukuran kewajiban imbalan pasti dengan keteraturan yang memadai agar jumlah yang diakui tidak berbeda secara material. Dengan Benefits Engine, perusahaan dapat melakukan valuasi interim bulanan/triwulanan untuk akrual pembukuan internal dan valuasi formal komprehensif pada akhir tahun buku.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner (Standardized 520px, Matching /goletin/ai) */}
          <div className="ms-hero-wrapper goletin-benefits-hero-banner">
            <div className="goletin-benefits-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Engine Valuasi Aktuaria & Imbalan Kerja PSAK 219</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Benefits Engine: Valuasi Imbalan Kerja IAS 19 & PSAK 219
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Otomatisasi valuasi aktuaria kewajiban imbalan pascakerja, pesangon pensiun UU Cipta Kerja (PP 35/2021), serta perhitungan DBO dan PBO berbasis metode Projected Unit Credit (PUC). Hasilkan laporan valuasi dan jurnal OCI yang siap diaudit.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka Benefits Engine Web</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <a href="#simulator-aktuaria" className="btn-secondary">
                    <span>Coba Simulator Aktuaria</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Metode Projected Unit Credit (PUC)</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Dual Kepatuhan IAS 19 & PP 35/2021</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Audit-Ready Actuarial Report</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulator: Projected Unit Credit (PUC) IAS 19 / PSAK 219 */}
          <section id="simulator-aktuaria" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Simulator Interaktif Aktuaria</span>
              <h2 className="section-title">Kalkulasi Liabilitas DBO & Beban Imbalan Pascakerja</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Simulasikan estimasi kewajiban imbalan pasti (Defined Benefit Obligation), Biaya Jasa Kini (Current Service Cost), dan beban bunga periodik berdasarkan parameter demografis dan asumsi keuangan terkini.
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
                    Parameter Demografis & Asumsi Aktuaria
                  </h3>

                  {/* Employee Count */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Jumlah Karyawan Aktif
                      </label>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                        {employeeCount.toLocaleString('id-ID')} Orang
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={1000}
                      step={10}
                      value={employeeCount}
                      onChange={(e) => setEmployeeCount(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                      <span>10 Orang</span>
                      <span>500 Orang</span>
                      <span>1.000 Orang</span>
                    </div>
                  </div>

                  {/* Average Salary */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Rata-rata Upah Dasar (Gaji Pokok + Tunjangan Tetap)
                      </label>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                        {formatRupiah(avgSalary)} / bln
                      </span>
                    </div>
                    <input
                      type="range"
                      min={4000000}
                      max={30000000}
                      step={500000}
                      value={avgSalary}
                      onChange={(e) => setAvgSalary(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                      <span>Rp4 Jt (UMR)</span>
                      <span>Rp15 Jt</span>
                      <span>Rp30 Jt</span>
                    </div>
                  </div>

                  {/* Tenure & Remaining Years */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Masa Kerja Berjalan
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                          {avgTenureYears} Thn
                        </span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={25}
                        step={1}
                        value={avgTenureYears}
                        onChange={(e) => setAvgTenureYears(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                      />
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Sisa Masa s/d Pensiun
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                          {remainingYears} Thn
                        </span>
                      </div>
                      <input
                        type="range"
                        min={2}
                        max={30}
                        step={1}
                        value={remainingYears}
                        onChange={(e) => setRemainingYears(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                      />
                    </div>
                  </div>

                  {/* Discount Rate & Salary Growth */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Tingkat Diskonto (SUN)
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                          {discountRate.toFixed(2)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min={5.0}
                        max={9.0}
                        step={0.25}
                        value={discountRate}
                        onChange={(e) => setDiscountRate(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                      />
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Kenaikan Upah Tahunan
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                          {salaryGrowthRate.toFixed(2)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min={3.0}
                        max={10.0}
                        step={0.5}
                        value={salaryGrowthRate}
                        onChange={(e) => setSalaryGrowthRate(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                      />
                    </div>
                  </div>

                  {/* Scheme Selection */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)', display: 'block', marginBottom: '8px' }}>
                      Skema Regulasi & Perjanjian Kerja
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <button
                        type="button"
                        onClick={() => setScheme('pp35')}
                        style={{
                          padding: '10px',
                          borderRadius: '6px',
                          border: `1.5px solid ${scheme === 'pp35' ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                          backgroundColor: scheme === 'pp35' ? 'rgba(0, 120, 212, 0.08)' : '#FFFFFF',
                          color: scheme === 'pp35' ? 'var(--ms-blue-primary)' : 'var(--ms-text-body)',
                          fontSize: '12.5px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          textAlign: 'center',
                        }}
                      >
                        UU Cipta Kerja PP 35/2021
                      </button>
                      <button
                        type="button"
                        onClick={() => setScheme('pkb')}
                        style={{
                          padding: '10px',
                          borderRadius: '6px',
                          border: `1.5px solid ${scheme === 'pkb' ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                          backgroundColor: scheme === 'pkb' ? 'rgba(0, 120, 212, 0.08)' : '#FFFFFF',
                          color: scheme === 'pkb' ? 'var(--ms-blue-primary)' : 'var(--ms-text-body)',
                          fontSize: '12.5px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          textAlign: 'center',
                        }}
                      >
                        PKB / Skema 2x Upah
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calculation Outputs & Actuarial Summary */}
                <div
                  style={{
                    backgroundColor: 'var(--ms-bg-subtle)',
                    borderRadius: '8px',
                    padding: '24px',
                    border: '1px solid var(--ms-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ms-blue-primary)' }}>
                        Ringkasan Valuasi Aktuaria IAS 19
                      </span>
                      <span className="badge badge-blue">PUC Method</span>
                    </div>

                    {/* DBO Total Metric */}
                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--ms-border)',
                        borderRadius: '8px',
                        padding: '16px',
                        marginBottom: '16px',
                      }}
                    >
                      <span style={{ fontSize: '12.5px', color: 'var(--ms-text-muted)', display: 'block', marginBottom: '4px' }}>
                        Total Liabilitas Imbalan Pascakerja (DBO / PBO)
                      </span>
                      <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--ms-text-heading)' }}>
                        {formatRupiah(totalDbo)}
                      </div>
                      <span style={{ fontSize: '11.5px', color: 'var(--ms-text-body)', marginTop: '4px', display: 'block' }}>
                        Dicatat di Neraca sebagai Liabilitas Imbalan Pascakerja Jangka Panjang.
                      </span>
                    </div>

                    {/* Breakdown Metrics Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--ms-border)',
                          borderRadius: '8px',
                          padding: '12px',
                        }}
                      >
                        <span style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', display: 'block', marginBottom: '2px' }}>
                          Biaya Jasa Kini (CSC)
                        </span>
                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                          {formatRupiah(currentServiceCost)}
                        </div>
                        <span style={{ fontSize: '10.5px', color: 'var(--ms-text-muted)' }}>Beban Laba Rugi Thn Berjalan</span>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--ms-border)',
                          borderRadius: '8px',
                          padding: '12px',
                        }}
                      >
                        <span style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', display: 'block', marginBottom: '2px' }}>
                          Beban Bunga Neto
                        </span>
                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                          {formatRupiah(netInterestCost)}
                        </div>
                        <span style={{ fontSize: '10.5px', color: 'var(--ms-text-muted)' }}>Interest Cost ({discountRate}%)</span>
                      </div>
                    </div>

                    {/* Total P&L Impact */}
                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--ms-border)',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        marginBottom: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block' }}>
                          Total Beban Imbalan Kerja di Laba Rugi (P&L)
                        </span>
                        <span style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>CSC + Net Interest Expense</span>
                      </div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#D9534F' }}>
                        {formatRupiah(totalPnLExpense)}
                      </div>
                    </div>

                    {/* Actuarial Recommended Journal Entry */}
                    <div
                      style={{
                        backgroundColor: '#1E1E1E',
                        color: '#F8F9FA',
                        borderRadius: '6px',
                        padding: '12px',
                        fontFamily: 'Consolas, monospace',
                        fontSize: '11.5px',
                        lineHeight: '1.6',
                      }}
                    >
                      <div style={{ color: '#888', marginBottom: '4px' }}>// Usulan Jurnal Akuntansi PSAK 219</div>
                      <div>
                        <span style={{ color: '#9CDCFE' }}>Dr. Beban Imbalan Pascakerja (P&L)</span>
                        <span style={{ float: 'right', color: '#4EC9B0' }}>{formatRupiah(totalPnLExpense)}</span>
                      </div>
                      <div style={{ paddingLeft: '16px' }}>
                        <span style={{ color: '#CE9178' }}>Cr. Liabilitas Imbalan Pascakerja</span>
                        <span style={{ float: 'right', color: '#4EC9B0' }}>{formatRupiah(totalPnLExpense)}</span>
                      </div>
                      <div style={{ color: '#6A9955', marginTop: '6px', fontSize: '10.5px' }}>
                        * Keuntungan/kerugian aktuaria dicatat terpisah ke akun OCI
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <a
                      href="https://goletin.com/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Buka Modul Aktuaria Lengkap</span>
                      <Icon name="external-link" size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6 Core Pillars of Benefits Engine */}
          <section id="fitur-unggulan" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
              <span className="section-eyebrow">Pilar Solusi & Kemampuan Aktuaria</span>
              <h2 className="section-title">Fitur Komprehensif Valuasi Imbalan Kerja Karyawan</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Dirancang khusus bagi Departemen Keuangan, HR Kompensasi & Benefit, serta Aktuaris Korporasi untuk memastikan akurasi perhitungan tanpa ketergantungan lambat pada spreadsheet manual.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {benefitsPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--ms-border-card)',
                    borderRadius: '10px',
                    padding: '28px',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(0, 120, 212, 0.08)',
                          color: 'var(--ms-blue-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name={pillar.icon} size={22} />
                      </div>
                      <span className="badge badge-blue" style={{ fontSize: '11px' }}>
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '10px' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', lineHeight: '20px', color: 'var(--ms-text-body)' }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Comparison Table */}
          <section id="komparasi-standar" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Analisis Komparasi Kepatuhan</span>
              <h2 className="section-title">Perbandingan Spreadsheet Manual vs Benefits Engine</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Ketahui bagaimana otomatisasi aktuaria memitigasi risiko temuan auditor dan kesalahan pencatatan liabilitas jangka panjang bernilai miliaran rupiah.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid var(--ms-border-card)',
                boxShadow: 'var(--shadow-card)',
                overflowX: 'auto',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--ms-bg-subtle)', borderBottom: '1.5px solid var(--ms-border)' }}>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-text-heading)', width: '22%' }}>
                      Aspek Kepatuhan & Valuasi
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-text-muted)', width: '38%' }}>
                      Metode Manual / Spreadsheet Tradisional
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-blue-primary)', width: '40%' }}>
                      Benefits Engine (IAS 19 / PSAK 219)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {complianceComparison.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: idx === complianceComparison.length - 1 ? 'none' : '1px solid var(--ms-border)',
                        backgroundColor: idx % 2 === 0 ? '#FFFFFF' : 'rgba(248, 250, 249, 0.5)',
                      }}
                    >
                      <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '16px 20px', color: 'var(--ms-text-muted)', lineHeight: '19px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#D9534F', fontWeight: 700 }}>✕</span>
                          <span>{row.manual}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px', color: 'var(--ms-text-body)', lineHeight: '19px', fontWeight: 500 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#107C41', flexShrink: 0, marginTop: '2px', display: 'inline-flex' }}>
                            <Icon name="check" size={15} color="#107C41" />
                          </span>
                          <span>{row.benefitsEngine}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Consultation Request Form */}
          <section id="konsultasi-aktuaria" style={{ marginBottom: '64px' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid var(--ms-border-card)',
                boxShadow: 'var(--shadow-card)',
                padding: '36px',
                maxWidth: '780px',
                margin: '0 auto',
              }}
            >
              <div className="section-header-block centered" style={{ marginBottom: '28px' }}>
                <span className="section-eyebrow">Dukungan Aktuaris Berpengalaman</span>
                <h2 className="section-title" style={{ fontSize: '24px', lineHeight: '32px' }}>
                  Konsultasi Valuasi Aktuaria & Implementasi Sistem
                </h2>
                <p className="section-lead" style={{ fontSize: '14px' }}>
                  Diskusikan kompleksitas skema PKB, integrasi database payroll karyawan, atau tinjauan kesiapan audit laporan keuangan bersama tim aktuaria Karsasoft.
                </p>
              </div>

              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(16, 124, 65, 0.08)',
                    border: '1px solid rgba(16, 124, 65, 0.25)',
                    borderRadius: '8px',
                    padding: '24px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                    <Icon name="check" size={32} color="#107C41" />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#107C41', marginBottom: '8px' }}>
                    Permintaan Konsultasi Diterima
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ms-text-body)' }}>
                    Terima kasih, <strong>{formData.name}</strong>. Tim spesialis aktuaria kami akan menghubungi email <strong>{formData.email}</strong> dalam 1x24 jam kerja untuk penjadwalan demo dan evaluasi model.
                  </p>
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
                        placeholder="Contoh: Maya Kartika"
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
                        placeholder="maya@perusahaan.co.id"
                        className="mitra-form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama Perusahaan / Entitas *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="PT Manufaktur Maju Sejahtera"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Skala Jumlah Karyawan
                      </label>
                      <select
                        value={formData.employeeScale}
                        onChange={(e) => setFormData({ ...formData, employeeScale: e.target.value })}
                        className="mitra-form-input"
                      >
                        <option value="50 - 100 Karyawan">50 - 100 Karyawan</option>
                        <option value="100 - 500 Karyawan">100 - 500 Karyawan</option>
                        <option value="500 - 2.000 Karyawan">500 - 2.000 Karyawan</option>
                        <option value="> 2.000 Karyawan (Grup/Holding)">&gt; 2.000 Karyawan (Grup/Holding)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Deskripsi Kebutuhan / Skema Pensiun Perusahaan
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Contoh: Butuh otomatisasi valuasi aktuaria akhir tahun untuk 450 karyawan dengan skema kombinasi PP 35/2021 dan program iuran DPLK pemberi kerja."
                      className="mitra-form-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14.5px' }}
                  >
                    <span>Ajukan Konsultasi Aktuaria PSAK 219</span>
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
              <h2 className="section-title">Pertanyaan Seputar Benefits Engine</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar metodologi aktuaria, kesiapan audit laporan keuangan, dan integrasi data payroll.
              </p>
            </div>
            <GoletinFaq items={benefitsFaqItems} countLabel="5 Tanya Jawab Benefits Engine" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kepatuhan Liabilitas Ketenagakerjaan
              </span>
              <h2 className="goletin-bottom-cta-title">
                Kalkulasi Imbalan Kerja IAS 19 & PSAK 219 Lebih Presisi
              </h2>
              <p className="goletin-bottom-cta-desc">
                Hindari risiko salah saji material liabilitas pesangon pensiun dan percepat penyusunan laporan keuangan audit bersama Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Standar PSAK 219</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Buka Benefits Engine Web</span>
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
