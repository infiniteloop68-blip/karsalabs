'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

type BusinessCycle = 'otc' | 'ptp' | 'payroll' | 'close';

export default function IcofrProProductPage() {
  // Simulator State: SOX 404 & COSO Risk & Control Matrix (RCM) Effectiveness
  const [cycle, setCycle] = useState<BusinessCycle>('otc');
  const [totalControls, setTotalControls] = useState<number>(24);
  const [keyControlsPct, setKeyControlsPct] = useState<number>(65);
  const [automatedPct, setAutomatedPct] = useState<number>(45);
  const [deviationsFound, setDeviationsFound] = useState<number>(1);
  const [financialImpactJuta, setFinancialImpactJuta] = useState<number>(150); // Rp150 Juta
  const [sampleTested, setSampleTested] = useState<number>(30);

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    userType: 'Satuan Pengawas Internal (SPI / Internal Audit)',
    entityScale: 'Korporasi Menengah (Omset Rp50M - Rp500M)',
    notes: '',
  });

  // Calculate Metrics
  const numKeyControls = Math.round((totalControls * keyControlsPct) / 100);
  const numManualControls = Math.round(totalControls * (1 - automatedPct / 100));
  const deviationRate = sampleTested > 0 ? (deviationsFound / sampleTested) * 100 : 0;

  // SOX 404 Classification: Deficiency vs Significant Deficiency vs Material Weakness
  let controlStatus: 'effective' | 'significant' | 'material' = 'effective';
  let statusBadge = 'Efektif (Low Risk)';
  let statusColor = '#107C41'; // Green
  let statusBg = 'rgba(16, 124, 65, 0.08)';
  let remediationRecommendation =
    'Pengendalian internal beroperasi secara efektif. Tidak ada indikasi defisiensi material yang mempengaruhi keandalan laporan keuangan.';

  if (deviationsFound > 2 || financialImpactJuta > 500) {
    controlStatus = 'material';
    statusBadge = 'Material Weakness (High Risk)';
    statusColor = '#D9534F'; // Red
    statusBg = 'rgba(217, 83, 79, 0.08)';
    remediationRecommendation =
      'PERINGATAN: Potensi salah saji material teridentifikasi. Segera terapkan kontrol kompensasi (compensating control) dan jalankan rencana remediasi sebelum opini auditor independen dirilis.';
  } else if (deviationsFound > 0 || financialImpactJuta > 100) {
    controlStatus = 'significant';
    statusBadge = 'Significant Deficiency (Medium Risk)';
    statusColor = '#D83B01'; // Orange
    statusBg = 'rgba(216, 59, 1, 0.08)';
    remediationRecommendation =
      'Defisiensi signifikan ditemukan pada pengujian efektivitas operasional. Diperlukan penguatan supervisi manajerial serta pengujian substantif tambahan (extended testing).';
  }

  const healthScore = Math.max(
    25,
    Math.min(
      100,
      Math.round(
        100 -
          deviationsFound * 18 -
          (financialImpactJuta > 300 ? 15 : financialImpactJuta > 100 ? 8 : 0) +
          (automatedPct > 50 ? 8 : 0)
      )
    )
  );

  const cycleDescriptions: Record<BusinessCycle, { name: string; focus: string }> = {
    otc: {
      name: 'Order to Cash (Pendapatan & Piutang)',
      focus: 'Validasi kredit pelanggan, otorisasi pengiriman, rekonsiliasi faktur vs BAST, dan pencatatan penerimaan kas.',
    },
    ptp: {
      name: 'Procure to Pay (Pengadaan & Pembayaran)',
      focus: 'Three-way matching (PO, GR, Invoice), otorisasi pembayaran vendor ganda, dan pemisahan tugas persetujuan.',
    },
    payroll: {
      name: 'Payroll & Remunerasi Karyawan',
      focus: 'Validasi daftar hadir, otorisasi lembur & bonus, verifikasi potongan pajak PPh 21, dan rekonsiliasi transfer bank.',
    },
    close: {
      name: 'Financial Close & Pelaporan Buku Besar',
      focus: 'Reviu jurnal penyesuaian non-rutin, rekonsiliasi sub-ledger ke GL, eliminasi intercompany, dan pengungkapan CALK.',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const icofrPillars = [
    {
      icon: 'shield',
      title: 'Matriks Risiko & Pengendalian (RCM) Standar COSO 2013',
      desc: 'Dokumentasikan tujuan pengendalian, asersi laporan keuangan (Keberadaan, Kelengkapan, Penilaian, Hak & Kewajiban, Penyajian), serta pemetaan kontrol preventif vs detektif.',
      badge: 'COSO 2013 Framework',
    },
    {
      icon: 'analytics',
      title: 'Pengujian Efektivitas Desain & Operasional (TOD & TOE)',
      desc: 'Uji apakah pengendalian dirancang dengan tepat untuk memitigasi risiko (TOD) dan jalankan walkthrough serta pengujian sampel untuk memastikan kontrol berjalan konsisten (TOE).',
      badge: 'TOD & TOE Walkthrough',
    },
    {
      icon: 'calculator',
      title: 'Klasifikasi Defisiensi Otomatis Sesuai Standar PCAOB',
      desc: 'Evaluasi tingkat keparahan defisiensi (Control Deficiency, Significant Deficiency, atau Material Weakness) berdasarkan probabilitas kejadian dan dampak kuantitatif terhadap laporan keuangan.',
      badge: 'SOX 404 Deficiency Logic',
    },
    {
      icon: 'docs',
      title: 'Kertas Kerja Audit Elektronik (E-WP ISA 230)',
      desc: 'Alur penelaahan 4-tingkat (Preparer, Reviewer, Manager, Partner) dengan jejak stempel waktu tak dapat dimanipulasi, komentar review real-time, dan manajemen lampiran bukti uji.',
      badge: '4-Level Sign-Off Workflow',
    },
    {
      icon: 'security',
      title: 'Penguncian Arsip Permanen (60-Day Archival Lock)',
      desc: 'Patuhi batas waktu perakitan berkas audit final sesuai ISA 230 dengan proteksi enkripsi SHA-256 (read-only) untuk menjamin integritas kertas kerja saat inspeksi regulator PPAKP/Kemenkeu.',
      badge: 'Immutable Hash Archival',
    },
    {
      icon: 'saas',
      title: 'Integrasi Uji Substantif JET Pro & Sampling Pro',
      desc: 'Hubungkan pengujian jurnal Benford ISA 240 dan sampel populasi statistik ISA 530 langsung ke lembar kerja pengendalian internal RCM terkait dalam satu platform terpadu.',
      badge: 'Ekosistem Audit Terpadu',
    },
  ];

  const complianceComparison = [
    {
      feature: 'Penyusunan Matriks Risiko (RCM)',
      manual: 'File spreadsheet terpisah-pisah per departemen, rawan versi ganda dan inkonsistensi asersi',
      icofrPro: 'Database RCM terpusat dengan standarisasi 5 komponen COSO dan pelacakan asersi multi-entitas',
    },
    {
      feature: 'Supervisi & Sign-Off Bertingkat',
      manual: 'Tanda tangan manual di kertas fisik atau approval via email yang sulit diverifikasi urutan waktunya',
      icofrPro: 'Hierarki sign-off digital 4 tingkat (Junior, Senior, Manager, Partner) dengan timestamp kriptografi',
    },
    {
      feature: 'Evaluasi Defisiensi Pengendalian',
      manual: 'Penilaian subjektif tanpa kerangka ambang batas materialitas kuantitatif yang terdokumentasi',
      icofrPro: 'Matriks evaluasi otomatis pembeda antara Deficiency, Significant Deficiency, dan Material Weakness',
    },
    {
      feature: 'Lampiran Bukti Uji (Audit Evidence)',
      manual: 'Tersimpan acak di folder lokal komputer staf, rawan hilang saat pergantian tim penugasan audit',
      icofrPro: 'Penyimpanan bukti uji terenkripsi yang langsung terindeks ke nomor langkah KKP terkait',
    },
    {
      feature: 'Kesiapan Reviu Mutu PPAKP & KAP',
      manual: 'Membutuhkan waktu 1–2 minggu mengumpulkan binder fisik saat ada inspeksi atau peer review',
      icofrPro: '1-Klik ekspor bundel KKP elektronik berformat PDF/A terindeks lengkap siap diserahkan ke pengawas',
    },
  ];

  const icofrFaqItems: FaqItem[] = [
    {
      id: 'icofr-tod-toe',
      q: 'Apa perbedaan antara Test of Design (TOD) dan Test of Operating Effectiveness (TOE)?',
      a: 'Test of Design (TOD) menguji apakah kebijakan atau prosedur pengendalian yang dirancang mampu mencegah atau mendeteksi salah saji material jika dijalankan dengan benar. Sementara Test of Operating Effectiveness (TOE) menguji apakah pengendalian tersebut benar-benar dijalankan secara konsisten oleh personel yang berwenang sepanjang periode pelaporan.',
    },
    {
      id: 'icofr-deficiency-types',
      q: 'Bagaimana ICOFR Pro membedakan antara Significant Deficiency dan Material Weakness?',
      a: 'Sistem menggunakan kerangka PCAOB Auditing Standard No. 5. Jika kekurangan pengendalian memiliki kemungkinan wajar (reasonable possibility) menyebabkan salah saji material yang tidak dapat dicegah atau dideteksi tepat waktu, sistem mengklasifikasikannya sebagai Material Weakness. Jika dampaknya di bawah materialitas namun cukup penting untuk diperhatikan pihak pengawas tata kelola (Komite Audit), diklasifikasikan sebagai Significant Deficiency.',
    },
    {
      id: 'icofr-isa230',
      q: 'Apakah KKP elektronik di ICOFR Pro telah memenuhi standar dokumentasi ISA 230 dan SPAP?',
      a: 'Ya. Sistem memenuhi seluruh ketentuan ISA 230: dokumentasi tepat waktu, kejelasan pihak yang menyiapkan dan menelaah (preparer & reviewer), tanggal penelaahan, serta penguncian permanen berkas audit maksimal 60 hari setelah rilis laporan.',
    },
    {
      id: 'icofr-internal-spi',
      q: 'Dapatkah ICOFR Pro digunakan oleh Satuan Pengawas Internal (SPI) BUMN atau perbankan?',
      a: 'Sangat cocok. Tersedia template RCM berbasis COSO Internal Control Integrated Framework dan standar BUMN/OJK untuk audit kepatuhan, pengujian pengendalian pelaporan keuangan, serta evaluasi tata kelola teknologi informasi (ITGC).',
    },
    {
      id: 'icofr-ipo-readiness',
      q: 'Bagaimana ICOFR Pro membantu perusahaan yang sedang mempersiapkan IPO di BEI?',
      a: 'Calon emiten diwajibkan memiliki sistem pengendalian internal yang andal. ICOFR Pro mempercepat penyusunan RCM, mendokumentasikan efektivitas kontrol tingkat entitas (ELC) dan tingkat aktivitas (ALC), serta menyediakan bukti siap uji bagi akuntan publik yang melakukan audit kepatuhan pengendalian internal.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner (Standardized 520px, Matching /goletin/ai) */}
          <div className="ms-hero-wrapper goletin-icofr-hero-banner">
            <div className="goletin-icofr-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Sistem Pengendalian Internal & Dokumentasi Audit</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  ICOFR Pro: Pengendalian Internal SOX 404 & KKP ISA 230
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Platform dokumentasi matriks risiko (RCM), pengujian efektivitas pengendalian TOD & TOE, serta kertas kerja audit elektronik (E-WP) berstandar COSO, SOX 404, dan ISA 230. Wujudkan kepatuhan tata kelola tanpa tumpukan binder kertas.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka ICOFR Pro Web</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <a href="#simulator-rcm" className="btn-secondary">
                    <span>Coba Simulator RCM</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Standar SOX 404 & COSO 2013</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kertas Kerja Elektronik ISA 230</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Reviu Mutu PPAKP & KAP Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulator: SOX 404 Risk & Control Matrix (RCM) Effectiveness */}
          <section id="simulator-rcm" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Simulator Interaktif SOX 404</span>
              <h2 className="section-title">Evaluasi Efektivitas Pengendalian & Klasifikasi Defisiensi</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Simulasikan penilaian matriks risiko dan hasil pengujian operasional (TOE) untuk menentukan status efektivitas pengendalian serta potensi temuan Material Weakness pada laporan keuangan.
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
                    Siklus Bisnis & Parameter Pengujian RCM
                  </h3>

                  {/* Business Cycle Tabs */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)', display: 'block', marginBottom: '8px' }}>
                      Pilih Siklus Bisnis / Proses Utama
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                      {(['otc', 'ptp', 'payroll', 'close'] as BusinessCycle[]).map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setCycle(c)}
                          style={{
                            padding: '10px 12px',
                            borderRadius: '6px',
                            border: `1.5px solid ${cycle === c ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                            backgroundColor: cycle === c ? 'rgba(0, 120, 212, 0.08)' : '#FFFFFF',
                            color: cycle === c ? 'var(--ms-blue-primary)' : 'var(--ms-text-body)',
                            fontSize: '12px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          {c === 'otc' && 'Order to Cash'}
                          {c === 'ptp' && 'Procure to Pay'}
                          {c === 'payroll' && 'Payroll Imbalan'}
                          {c === 'close' && 'Financial Close'}
                        </button>
                      ))}
                    </div>
                    <div
                      style={{
                        marginTop: '10px',
                        padding: '10px 12px',
                        backgroundColor: 'var(--ms-bg-subtle)',
                        borderRadius: '6px',
                        fontSize: '11.5px',
                        color: 'var(--ms-text-body)',
                        lineHeight: '16px',
                        border: '1px solid var(--ms-border)',
                      }}
                    >
                      <strong>Fokus Pengendalian:</strong> {cycleDescriptions[cycle].focus}
                    </div>
                  </div>

                  {/* Total Controls & Key Controls */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Total Kontrol RCM
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                          {totalControls} Kontrol
                        </span>
                      </div>
                      <input
                        type="range"
                        min={8}
                        max={60}
                        step={2}
                        value={totalControls}
                        onChange={(e) => setTotalControls(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                      />
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Kontrol Kunci (Key)
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                          {keyControlsPct}% ({numKeyControls})
                        </span>
                      </div>
                      <input
                        type="range"
                        min={30}
                        max={90}
                        step={5}
                        value={keyControlsPct}
                        onChange={(e) => setKeyControlsPct(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                      />
                    </div>
                  </div>

                  {/* Automated vs Manual Controls */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Otomatisasi Sistem (ITGC / App Controls)
                      </label>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                        {automatedPct}% Otomatis / {100 - automatedPct}% Manual
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={90}
                      step={5}
                      value={automatedPct}
                      onChange={(e) => setAutomatedPct(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                    />
                  </div>

                  {/* TOE Testing Sample & Deviations */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Sampel Diuji (TOE)
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                          {sampleTested} Sampel
                        </span>
                      </div>
                      <input
                        type="range"
                        min={15}
                        max={60}
                        step={5}
                        value={sampleTested}
                        onChange={(e) => setSampleTested(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                      />
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                          Deviasi / Pengecualian
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: deviationsFound > 0 ? '#D9534F' : '#107C41' }}>
                          {deviationsFound} Kasus
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={5}
                        step={1}
                        value={deviationsFound}
                        onChange={(e) => setDeviationsFound(Number(e.target.value))}
                        style={{ width: '100%', accentColor: deviationsFound > 0 ? '#D9534F' : 'var(--ms-blue-primary)' }}
                      />
                    </div>
                  </div>

                  {/* Financial Impact Exposure */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Estimasi Dampak Finansial Potensial
                      </label>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                        Rp{financialImpactJuta} Juta
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={1000}
                      step={25}
                      value={financialImpactJuta}
                      onChange={(e) => setFinancialImpactJuta(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                    />
                  </div>
                </div>

                {/* Calculation Outputs & SOX 404 Assessment */}
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
                        Hasil Evaluasi Pengendalian SOX 404
                      </span>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '12px',
                          backgroundColor: statusBg,
                          color: statusColor,
                          border: `1px solid ${statusColor}`,
                        }}
                      >
                        {statusBadge}
                      </span>
                    </div>

                    {/* Health Score Metric */}
                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--ms-border)',
                        borderRadius: '8px',
                        padding: '16px',
                        marginBottom: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '12.5px', color: 'var(--ms-text-muted)' }}>
                          Skor Efektivitas Tata Kelola (Control Score)
                        </span>
                        <span style={{ fontSize: '20px', fontWeight: 800, color: statusColor }}>
                          {healthScore}%
                        </span>
                      </div>
                      <div style={{ height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${healthScore}%`,
                            backgroundColor: statusColor,
                            transition: 'width 0.3s ease',
                          }}
                        />
                      </div>
                    </div>

                    {/* RCM Key Metrics Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--ms-border)',
                          borderRadius: '8px',
                          padding: '12px',
                        }}
                      >
                        <span style={{ fontSize: '11px', color: 'var(--ms-text-muted)', display: 'block', marginBottom: '2px' }}>
                          Tingkat Deviasi Sampel
                        </span>
                        <div style={{ fontSize: '16px', fontWeight: 700, color: deviationsFound > 0 ? statusColor : '#107C41' }}>
                          {deviationRate.toFixed(1)}%
                        </div>
                        <span style={{ fontSize: '10.5px', color: 'var(--ms-text-muted)' }}>
                          {deviationsFound} dari {sampleTested} sampel
                        </span>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--ms-border)',
                          borderRadius: '8px',
                          padding: '12px',
                        }}
                      >
                        <span style={{ fontSize: '11px', color: 'var(--ms-text-muted)', display: 'block', marginBottom: '2px' }}>
                          Kontrol Manual Berisiko
                        </span>
                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                          {numManualControls} Kontrol
                        </div>
                        <span style={{ fontSize: '10.5px', color: 'var(--ms-text-muted)' }}>
                          Perlu walkthrough intensif
                        </span>
                      </div>
                    </div>

                    {/* Recommendation Box */}
                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--ms-border)',
                        borderRadius: '8px',
                        padding: '14px',
                        marginBottom: '16px',
                      }}
                    >
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '4px' }}>
                        Rekomendasi Tindakan Remediasi Manajemen:
                      </span>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: 'var(--ms-text-body)', margin: 0 }}>
                        {remediationRecommendation}
                      </p>
                    </div>

                    {/* Sign-Off Workflow Stamp Box */}
                    <div
                      style={{
                        backgroundColor: '#1E1E1E',
                        color: '#F8F9FA',
                        borderRadius: '6px',
                        padding: '12px',
                        fontFamily: 'Consolas, monospace',
                        fontSize: '11px',
                        lineHeight: '1.6',
                      }}
                    >
                      <div style={{ color: '#888', marginBottom: '4px' }}>// Log Status E-WP ISA 230</div>
                      <div>
                        <span style={{ color: '#9CDCFE' }}>[PREPARER]</span> Auditor Senior — <span style={{ color: '#4EC9B0' }}>Signed (TOD Complete)</span>
                      </div>
                      <div>
                        <span style={{ color: '#9CDCFE' }}>[REVIEWER]</span> Manajer Audit — <span style={{ color: deviationsFound > 0 ? '#CE9178' : '#4EC9B0' }}>{deviationsFound > 0 ? 'Review Notes Added' : 'Approved'}</span>
                      </div>
                      <div>
                        <span style={{ color: '#9CDCFE' }}>[HASH LOCK]</span> SHA-256 — <span style={{ color: '#DCDCAA' }}>Valid & Immutable</span>
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
                      <span>Buka Modul RCM Lengkap</span>
                      <Icon name="external-link" size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6 Key Pillars Grid */}
          <section id="fitur-unggulan" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
              <span className="section-eyebrow">Kapabilitas ICOFR Pro & Paperless Audit</span>
              <h2 className="section-title">Solusi Dokumentasi Pengendalian & Audit Tanpa Kertas</h2>
              <p className="section-lead" style={{ maxWidth: '740px', margin: '0 auto' }}>
                Mengintegrasikan manajemen matriks risiko pengendalian (RCM) perusahaan dengan sistem kertas kerja audit elektronik (E-WP) berstandar internasional bagi KAP dan Satuan Pengawas Internal (SPI).
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {icofrPillars.map((pillar, idx) => (
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
              <span className="section-eyebrow">Analisis Komparasi Metodologi</span>
              <h2 className="section-title">Dokumentasi Manual Spreadsheet vs ICOFR Pro</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Bandingkan bagaimana digitalisasi kertas kerja menghemat ratusan jam kerja tim audit dan memitigasi risiko temuan saat reviu mutu formal.
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
                      Aspek Dokumentasi & Kontrol
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-text-muted)', width: '38%' }}>
                      Metode Tradisional / Spreadsheet Excel
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-blue-primary)', width: '40%' }}>
                      ICOFR Pro & Paperless Audit (SOX 404 / ISA 230)
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
                          <span>{row.icofrPro}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Consultation / Presentation Request Form */}
          <section id="konsultasi-icofr" style={{ marginBottom: '64px' }}>
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
                <span className="section-eyebrow">Dukungan Konsultan & Metodologi Audit</span>
                <h2 className="section-title" style={{ fontSize: '24px', lineHeight: '32px' }}>
                  Jadwalkan Presentasi & Konsultasi ICOFR Pro
                </h2>
                <p className="section-lead" style={{ fontSize: '14px' }}>
                  Pelajari bagaimana mengimplementasikan sistem kertas kerja digital dan manajemen RCM sesuai skala penugasan KAP atau kebutuhan tata kelola korporasi Anda.
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
                    Permintaan Presentasi Diterima
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ms-text-body)' }}>
                    Terima kasih, <strong>{formData.name}</strong>. Tim spesialis audit & kepatuhan Karsasoft akan menghubungi <strong>{formData.email}</strong> dalam 1x24 jam kerja untuk sesi presentasi dan demonstrasi alur kerja sistem.
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
                        placeholder="Contoh: Budi Santoso"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Email Kantor / Profesional *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="budi@kap-indonesia.com"
                        className="mitra-form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama KAP / Institusi / Perusahaan *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="KAP Budi, Rekan & Co."
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Tipe Organisasi Pengguna
                      </label>
                      <select
                        value={formData.userType}
                        onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                        className="mitra-form-input"
                      >
                        <option value="Kantor Akuntan Publik (KAP)">Kantor Akuntan Publik (KAP)</option>
                        <option value="Satuan Pengawas Internal (SPI / Internal Audit)">Satuan Pengawas Internal (SPI / Internal Audit)</option>
                        <option value="Tim Kepatuhan & Risk Management Korporasi">Tim Kepatuhan & Risk Management Korporasi</option>
                        <option value="BUMN / BUMD / Lembaga Pemerintah">BUMN / BUMD / Lembaga Pemerintah</option>
                        <option value="Konsultan Tata Kelola (GRC)">Konsultan Tata Kelola (GRC)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Catatan Kebutuhan Penugasan / Skala Audit
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Contoh: Membutuhkan standarisasi kertas kerja audit elektronik untuk 20 orang tim auditor dengan integrasi sampling data pengujian transaksi."
                      className="mitra-form-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14.5px' }}
                  >
                    <span>Ajukan Jadwal Presentasi Sistem</span>
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
              <h2 className="section-title">Pertanyaan Seputar ICOFR Pro & Paperless Audit</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar standar kepatuhan SOX 404, SPAP / ISA 230, keamanan arsip KKP, dan sertifikasi.
              </p>
            </div>
            <GoletinFaq items={icofrFaqItems} countLabel="5 Tanya Jawab ICOFR Pro" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Modernisasi Tata Kelola & Pemeriksaan
              </span>
              <h2 className="goletin-bottom-cta-title">
                Tingkatkan Standar Mutu Pengendalian & Audit Anda
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultasikan adopsi sistem kertas kerja elektronik dan otomasi manajemen RCM bersama konsultan metodologi audit Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Sistem Audit</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Buka ICOFR Pro Web</span>
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
