'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function ECLProProductPage() {
  const [portfolioSize, setPortfolioSize] = useState<number>(250); // Miliar Rupiah
  const [stage2Pct, setStage2Pct] = useState<number>(12); // %
  const [stage3Pct, setStage3Pct] = useState<number>(3.5); // % (NPL)
  const [macroScenario, setMacroScenario] = useState<'baseline' | 'optimistic' | 'downturn'>('baseline');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    institutionType: 'Bank Umum / BPD',
    portfolioRange: 'Rp100 Miliar - Rp1 Triliun',
    notes: '',
  });

  // Calculate dynamic ECL CKPN (IFRS 9 / PSAK 71 Expected Credit Loss model)
  const stage1Pct = Math.max(0, 100 - stage2Pct - stage3Pct);
  const stage1Balance = portfolioSize * (stage1Pct / 100);
  const stage2Balance = portfolioSize * (stage2Pct / 100);
  const stage3Balance = portfolioSize * (stage3Pct / 100);

  // Forward-looking macroeconomic scenario multipliers
  const scenarioMultiplier = macroScenario === 'optimistic' ? 0.85 : macroScenario === 'downturn' ? 1.35 : 1.0;

  // Average benchmark loss rates (Stage 1 ~1.2%, Stage 2 ~8.5%, Stage 3 ~45%)
  const eclStage1 = stage1Balance * 0.012 * scenarioMultiplier;
  const eclStage2 = stage2Balance * 0.085 * scenarioMultiplier;
  const eclStage3 = stage3Balance * 0.45 * scenarioMultiplier;
  const totalECL = eclStage1 + eclStage2 + eclStage3;
  const coverageRatio = ((totalECL / portfolioSize) * 100).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const corePillars = [
    {
      icon: 'calculator',
      title: 'Pemodelan PD, LGD & EAD Otomatis',
      desc: 'Kalkulasi Probability of Default (PD) dengan Matriks Migrasi Markov Chain, Loss Given Default (LGD) berbasis nilai kini pemulihan agunan, serta kalkulasi Exposure at Default (EAD) dengan Credit Conversion Factor.',
      badge: 'Formula Kuantitatif',
    },
    {
      icon: 'analytics',
      title: 'Forward-Looking Macroeconomic Model',
      desc: 'Penyesuaian cadangan kerugian dengan proyeksi indikator ekonomi makro multi-skenario (Pertumbuhan PDB riil, inflasi IHK, nilai tukar USD/IDR, dan suku bunga acuan BI-Rate) sesuai mandat IFRS 9.',
      badge: 'Multi-Skenario Makro',
    },
    {
      icon: 'shield',
      title: 'Staging 3-Tahap Berbasis Aturan OJK',
      desc: 'Klasifikasi otomatis instrumen keuangan ke Stage 1 (12-month ECL), Stage 2 (Lifetime ECL - SICR), dan Stage 3 (Credit Impaired) dengan parameter DPD 30/90 hari, restrukturisasi, dan watchlist.',
      badge: 'POJK 11 & POJK 40',
    },
    {
      icon: 'compliance',
      title: 'Kertas Kerja & Audit Trail Regulator',
      desc: 'Menghasilkan kertas kerja perhitungan granular per debitur hingga agregasi portofolio. Siap diuji oleh pengawas OJK, Bank Indonesia, serta auditor independen (KAP Big 4).',
      badge: 'Audit-Ready KAP',
    },
    {
      icon: 'database',
      title: 'Integrasi Core Banking & Data Warehouses',
      desc: 'Konektor API langsung ke sistem Core Banking (Temenos, Silverlake, Mambu, atau in-house), data warehouse, dan spreadsheet tanpa perlu entri manual yang memakan waktu.',
      badge: 'API Connector',
    },
    {
      icon: 'cloud',
      title: 'Sovereign Cloud & Opsi On-Premises',
      desc: 'Data portofolio kredit debitur tersimpan di server lokal perbankan atau Tier-4 Sovereign Cloud Indonesia dengan enkripsi tingkat perbankan tanpa risiko kebocoran data nasabah.',
      badge: 'Kedaulatan Finansial',
    },
  ];

  const stagingStages = [
    {
      stage: 'Stage 1',
      badge: 'Performing',
      color: '#107C41',
      bgColor: '#F0FDF4',
      borderColor: '#BBF7D0',
      title: 'Kredit Lancar (12-Month ECL)',
      criteria: 'Kolektibilitas 1 (Lancar) • DPD ≤ 30 Hari • Tidak ada indikasi kenaikan risiko signifikan',
      calculation: 'Perhitungan kerugian ekspektasian dibatasi hanya untuk periode 12 bulan ke depan.',
      impact: 'Beban pembentukan CKPN minimal (~1.0% - 1.5% dari baki debet).',
    },
    {
      stage: 'Stage 2',
      badge: 'Underperforming (SICR)',
      color: '#D83B01',
      bgColor: '#FFF4CE',
      borderColor: '#FED966',
      title: 'Kenaikan Risiko Signifikan (Lifetime ECL)',
      criteria: 'Kolektibilitas 2 (DPK) • DPD 31–90 Hari • Restrukturisasi atau masuk daftar watchlist',
      calculation: 'Kewajiban pencadangan seumur hidup (Lifetime Expected Credit Loss) hingga jatuh tempo.',
      impact: 'Peningkatan cadangan CKPN substansial (~5% - 15% dari baki debet).',
    },
    {
      stage: 'Stage 3',
      badge: 'Impaired / Default',
      color: '#A80000',
      bgColor: '#FDE7E9',
      borderColor: '#F8B4B8',
      title: 'Kredit Bermasalah / Macet (Lifetime ECL)',
      criteria: 'Kolektibilitas 3, 4, 5 (NPL) • DPD > 90 Hari • Kepailitan atau gagal bayar',
      calculation: 'Cadangan penuh seumur hidup dengan memperhitungkan nilai pemulihan agunan terdiskon.',
      impact: 'Pencadangan agresif mendekati eksposur neto (~30% - 70% dari baki debet).',
    },
  ];

  const industryInstitutions = [
    {
      icon: 'building',
      title: 'Bank Umum & Bank Pembangunan Daerah (BPD)',
      desc: 'Manajemen CKPN portofolio korporasi, SME, dan konsumer skala puluhan triliun dengan matriks transisi rating internal dan regresi makro multivariat.',
    },
    {
      icon: 'briefcase',
      title: 'Bank Perekonomian Rakyat (BPR & BPRS)',
      desc: 'Implementasi praktis PSAK 71 berbasis Roll-Rate Matrix dan Vintage Analysis yang mudah dipahami tanpa perlu tim kuantitatif aktuaria internal yang mahal.',
    },
    {
      icon: 'saas',
      title: 'Perusahaan Pembiayaan (Multifinance)',
      desc: 'Kalkulasi CKPN jutaan kontrak pembiayaan kendaraan bermotor, alat berat, dan anjak piutang dengan sinkronisasi ke sistem kredit operasional.',
    },
    {
      icon: 'analytics',
      title: 'Fintech P2P Lending & Paylater',
      desc: 'Pemodelan risiko kredit mikro bervolume jutaan transaksi dengan pembaruan kalkulasi harian, segmentasi cohort, dan pemantauan DPD real-time.',
    },
    {
      icon: 'shield',
      title: 'Koperasi Simpan Pinjam (KSP) & LKM',
      desc: 'Penyajian cadangan kerugian pinjaman anggota yang transparan dan akuntabel sesuai standar akuntansi keuangan entitas privat (SAK EP).',
    },
    {
      icon: 'compliance',
      title: 'Kantor Akuntan Publik (KAP) & Auditor',
      desc: 'Instrumen model pembanding independen (challenger model) untuk menguji kewajaran pembentukan CKPN dan sensitivitas makro bank auditee.',
    },
  ];

  const comparisonRows = [
    {
      criteria: 'Kapasitas Volume Data Debitur',
      excel: 'Lambat dan rentan korup/crash pada data >100.000 baris pinjaman',
      engine: 'Mampu memproses jutaan fasilitas kredit dalam hitungan menit',
    },
    {
      criteria: 'Pementasan Staging 1-2-3 (SICR)',
      excel: 'Formula logika nested IF rumit, rawan salah tagging kriteria OJK',
      engine: 'Pementasan otomatis berbasis DPD, restrukturisasi, dan watchlist',
    },
    {
      criteria: 'Forward-Looking Macro Modeling',
      excel: 'Input manual tanpa validasi ekonometrika, rentan bias subjektif',
      engine: 'Regresi ekonometrika otomatis dengan multi-skenario pembobotan',
    },
    {
      criteria: 'Audit Trail & Kertas Kerja OJK',
      excel: 'Sulit melacak jejak perubahan sel, formula rawan tertimpa',
      engine: 'Audit trail kriptografis dengan kertas kerja per debitur standar OJK',
    },
    {
      criteria: 'Integrasi Core Banking',
      excel: 'Ekspor-impor CSV manual yang memakan waktu dan berisiko bocor',
      engine: 'Konektor API terenkripsi langsung ke Core Banking & Data Warehouse',
    },
    {
      criteria: 'Waktu Siklus Perhitungan Bulanan',
      excel: '3 – 7 hari kerja tim risiko untuk rekonsiliasi spreadsheet',
      engine: 'Selesai dalam < 10 menit dengan laporan siap posting ke GL',
    },
  ];

  const eclFaqItems: FaqItem[] = [
    {
      id: 'faq-ecl-vs-incurred',
      q: 'Apa perbedaan mendasar model Incurred Loss (PSAK 55) dengan Expected Credit Loss (PSAK 71)?',
      a: 'Pada PSAK 55 lama, cadangan kerugian baru dibentuk saat terjadi peristiwa kerugian nyata (incurred loss event, seperti tunggakan atau restrukturisasi). Sebaliknya, PSAK 71 (IFRS 9) mewajibkan pembentukan cadangan sejak hari pertama fasilitas kredit disalurkan (Day-1 Expected Credit Loss), dengan memperhitungkan proyeksi masa depan (forward-looking information) termasuk kondisi ekonomi makro.',
    },
    {
      id: 'faq-sicr-criteria',
      q: 'Bagaimana kriteria penentuan Significant Increase in Credit Risk (SICR) untuk masuk ke Stage 2?',
      a: 'SICR dievaluasi berdasarkan kriteria kuantitatif dan kualitatif: peningkatan DPD (misal menembus 30 hari), penurunan peringkat kredit internal di atas batas ambang (notch downgrade), status restrukturisasi kredit, atau masuknya debitur ke dalam daftar pemantauan khusus (watchlist). Debitur yang mengalami SICR wajib beralih dari cadangan 12-Month ECL ke Lifetime ECL.',
    },
    {
      id: 'faq-historical-data',
      q: 'Berapa tahun data historis yang dibutuhkan untuk mengoperasikan ECL Pro?',
      a: 'Idealnya sistem menggunakan data historis 3 hingga 5 tahun siklus kredit untuk membangun Matriks Transisi Markov Chain dan kurva LGD yang robust. Namun, untuk institusi seperti BPR atau Fintech yang baru beroperasi, ECL Pro menyediakan modul simplifikasi (Simplified Approach / Roll-Rate Model) yang dapat beroperasi dengan data historis minimal 12–24 bulan.',
    },
    {
      id: 'faq-on-premise',
      q: 'Apakah ECL Pro dapat diimplementasikan secara On-Premise di data center bank?',
      a: 'Ya. Karsasoft menyediakan opsi deployment On-Premise penuh dalam lingkungan air-gapped internal perbankan tanpa koneksi keluar, atau opsi Private Sovereign Cloud lokal Indonesia bersertifikasi ISO 27001 dan SOC 2 Tipe II untuk menjamin kepatuhan penuh terhadap regulasi kerahasiaan data nasabah OJK dan Bank Indonesia.',
    },
    {
      id: 'faq-ojk-audit-ready',
      q: 'Bagaimana kesiapan kertas kerja ECL Pro saat diperiksa oleh pengawas OJK dan KAP Big 4?',
      a: 'ECL Pro secara otomatis mengompilasi lembar kerja pengungkapan format standar OJK (Laporan Profil Risiko & Kualitas Aset), tabel rekonsiliasi mutasi cadangan Stage 1-2-3, serta detail parameter PD, LGD, dan EAD per segmen portofolio yang dapat langsung diunduh dalam format Excel terformula dan PDF resmi siap audit.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated High-Tech Risk Matrix Banner */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-ecl-hero-banner">
            <div className="goletin-ecl-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">ECL Pro — IFRS 9 / PSAK 71 Engine</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Otomatisasi Perhitungan CKPN &amp; Pemodelan Risiko Kredit Perbankan
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Platform aktuaria dan pemodelan risiko kredit perbankan terdepan di Indonesia. Otomatisasi pementasan Stage 1-2-3 (SICR), pemodelan PD forward-looking, LGD, dan EAD patuh regulasi OJK &amp; IFRS 9.
                </p>
                <div className="hero-cta-group">
                  <a href="#simulator" className="btn-primary">
                    <span>Coba Simulator CKPN</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#konsultasi" className="btn-secondary">
                    <span>Jadwalkan Konsultasi Teknis</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>100% Standar PSAK 71 &amp; IFRS 9</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kepatuhan POJK 11 &amp; POJK 40</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Audit-Ready KAP &amp; OJK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Capabilities / Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Arsitektur &amp; Kapabilitas</span>
            <h2 className="section-title">Solusi Komprehensif Pemodelan Risiko Kredit</h2>
            <p className="section-lead" style={{ maxWidth: '740px', margin: '0 auto' }}>
              Memenuhi seluruh kriteria metodologi perhitungan cadangan kerugian penurunan nilai (CKPN) sesuai Pedoman Akuntansi Perbankan Indonesia (PAPI) dan standar OJK.
            </p>
          </div>

          <div className="segment-products-grid">
            {corePillars.map((item, i) => (
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
                <a href="#simulator" className="segment-tile-link">
                  <span>Lihat simulasi fitur</span>
                  <Icon name="arrow-right" size={13} />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>

      {/* Interactive Simulator Section */}
      <section id="simulator" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">Simulator CKPN Interaktif</span>
            <h2 className="section-title">Simulasi Dampak Cadangan Kerugian (CKPN) Portofolio Anda</h2>
            <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Ubah baki debet pinjaman, porsi Stage 2 &amp; 3, serta skenario ekonomi makro untuk melihat estimasi pembentukan CKPN dan dampaknya pada rasio kecukupan modal.
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
                    <label htmlFor="portfolio-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Total Baki Debet Portofolio Kredit:
                    </label>
                    <span style={{ color: 'var(--ms-blue-text)', fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-segoe-display)' }}>
                      Rp {portfolioSize.toLocaleString('id-ID')} Miliar
                    </span>
                  </div>
                  <input
                    id="portfolio-slider"
                    type="range"
                    min="10"
                    max="2000"
                    step="10"
                    value={portfolioSize}
                    onChange={(e) => setPortfolioSize(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: 'var(--ms-blue-text)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>Rp10 Miliar</span>
                    <span>Rp1 Triliun</span>
                    <span>Rp2 Triliun</span>
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <label htmlFor="stage2-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Porsi Kredit Stage 2 (SICR):
                    </label>
                    <span style={{ color: '#D83B01', fontSize: '16px', fontWeight: 700 }}>
                      {stage2Pct}% (Rp {stage2Balance.toFixed(1)} M)
                    </span>
                  </div>
                  <input
                    id="stage2-slider"
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={stage2Pct}
                    onChange={(e) => setStage2Pct(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: '#D83B01', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>1%</span>
                    <span>15%</span>
                    <span>30%</span>
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <label htmlFor="stage3-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Porsi Kredit Stage 3 (NPL):
                    </label>
                    <span style={{ color: '#A80000', fontSize: '16px', fontWeight: 700 }}>
                      {stage3Pct.toFixed(1)}% (Rp {stage3Balance.toFixed(1)} M)
                    </span>
                  </div>
                  <input
                    id="stage3-slider"
                    type="range"
                    min="0.5"
                    max="15"
                    step="0.5"
                    value={stage3Pct}
                    onChange={(e) => setStage3Pct(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: '#A80000', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>0.5%</span>
                    <span>7.5%</span>
                    <span>15.0%</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                    Skenario Proyeksi Ekonomi Makro (Forward-Looking):
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[
                      { id: 'optimistic', label: 'Optimis (PDB +5.5%)' },
                      { id: 'baseline', label: 'Baseline (PDB +5.0%)' },
                      { id: 'downturn', label: 'Downturn (Stresstest)' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setMacroScenario(item.id as any)}
                        style={{
                          flex: 1,
                          padding: '10px 8px',
                          borderRadius: '6px',
                          border: '1px solid',
                          borderColor: macroScenario === item.id ? 'var(--ms-blue-text)' : 'var(--ms-border)',
                          backgroundColor: macroScenario === item.id ? '#EFF6FC' : '#FFFFFF',
                          color: macroScenario === item.id ? 'var(--ms-blue-text)' : 'var(--ms-text-heading)',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        {item.label}
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
                  TOTAL PEMBENTUKAN CKPN (ECL)
                </div>
                <div style={{ fontSize: '34px', fontWeight: 700, color: 'var(--ms-blue-text)', fontFamily: 'var(--font-segoe-display)', lineHeight: '1.1', marginBottom: '6px' }}>
                  Rp {totalECL.toFixed(2)} Miliar
                </div>
                <div style={{ fontSize: '13px', color: 'var(--ms-text-body)', fontWeight: 600, marginBottom: '20px' }}>
                  Coverage Ratio: <strong style={{ color: 'var(--ms-blue-text)' }}>{coverageRatio}%</strong> dari Total Portofolio
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--ms-border)', paddingTop: '16px', marginBottom: '22px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>CKPN Stage 1 (12-Mo):</span>
                    <strong style={{ color: '#107C41' }}>Rp {eclStage1.toFixed(2)} M</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>CKPN Stage 2 (Lifetime):</span>
                    <strong style={{ color: '#D83B01' }}>Rp {eclStage2.toFixed(2)} M</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>CKPN Stage 3 (Impaired):</span>
                    <strong style={{ color: '#A80000' }}>Rp {eclStage3.toFixed(2)} M</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--ms-border)', paddingTop: '10px' }}>
                    <span style={{ color: 'var(--ms-text-heading)', fontWeight: 700 }}>Portofolio Stage 1 (Performing):</span>
                    <strong style={{ color: 'var(--ms-text-heading)' }}>{stage1Pct.toFixed(1)}% (Rp {stage1Balance.toFixed(1)} M)</strong>
                  </div>
                </div>

                <a href="#konsultasi" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Konsultasi Pemodelan Portofolio</span>
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Stage Classification Overview */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Klasifikasi Kualitas Aset</span>
            <h2 className="section-title">Pementasan Risiko 3-Tahap Standar IFRS 9 / PSAK 71</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Pemisahan instrumen keuangan berdasarkan tingkat risiko kredit secara granular untuk mengoptimalkan efisiensi modal regulasi.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {stagingStages.map((stg, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--ms-border-card)',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-segoe-display)',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: stg.color,
                    }}
                  >
                    {stg.stage}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: stg.color,
                      backgroundColor: stg.bgColor,
                      border: `1px solid ${stg.borderColor}`,
                      padding: '4px 10px',
                      borderRadius: '12px',
                    }}
                  >
                    {stg.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '10px' }}>
                  {stg.title}
                </h3>
                <div style={{ marginBottom: '14px', fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '20px' }}>
                  <strong>Kriteria Pementasan:</strong>
                  <p style={{ margin: '4px 0 0 0', color: 'var(--ms-text-muted)' }}>{stg.criteria}</p>
                </div>
                <div style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '20px', flex: 1 }}>
                  <strong>Metode Cadangan:</strong>
                  <p style={{ margin: '4px 0 0 0', color: 'var(--ms-text-muted)' }}>{stg.calculation}</p>
                </div>
                <div
                  style={{
                    backgroundColor: 'var(--ms-bg-subtle)',
                    borderRadius: '8px',
                    padding: '12px',
                    fontSize: '12px',
                    border: '1px solid var(--ms-border)',
                    color: 'var(--ms-text-heading)',
                  }}
                >
                  <strong>Dampak Laba Rugi:</strong> {stg.impact}
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
            <h2 className="section-title">Penerapan ECL Pro di Berbagai Sektor Keuangan</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Solusi yang dirancang fleksibel untuk berbagai model bisnis jasa keuangan, mulai dari bank devisa hingga lembaga pembiayaan mikro.
            </p>
          </div>

          <div className="segment-use-cases">
            {industryInstitutions.map((inst, i) => (
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

      {/* Comparison Table: Manual Excel vs Goletin ECL Pro */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Perbandingan Metodologi</span>
            <h2 className="section-title">Spreadsheet Manual vs Goletin ECL Pro</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Tinggalkan risiko formula korup dan ketidakkonsistenan data portofolio dengan platform otomatisasi aktuaria teruji.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '34%' }}>Parameter &amp; Kriteria Kepatuhan</th>
                  <th style={{ width: '33%', color: 'var(--ms-text-muted)' }}>Spreadsheet Excel Manual</th>
                  <th style={{ width: '33%', color: 'var(--ms-blue-text)' }}>Goletin ECL Pro</th>
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

      {/* Consultation & Proof-of-Concept Form */}
      <section id="konsultasi" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Demo Teknis &amp; Proof-of-Concept</span>
              <h2 className="section-title">Uji Coba ECL Pro dengan Data Sampel Bank Anda</h2>
              <p className="section-lead">
                Jadwalkan sesi Proof-of-Concept (PoC) bersama Quantitative Analyst &amp; Financial Engineer kami untuk memvalidasi akurasi perhitungan cadangan kredit institusi Anda.
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
                  Permintaan Presentasi Teknis Diterima!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', lineHeight: '22px', maxWidth: '600px', margin: '0 auto 20px' }}>
                  Terima kasih, <strong>{formData.name}</strong> dari <strong>{formData.institution}</strong>. Financial Engineering Specialist kami akan menghubungi Anda melalui email <strong>{formData.email}</strong> dalam waktu maksimal 1x24 jam kerja untuk mendiskusikan parameter metodologi dan dokumen Non-Disclosure Agreement (NDA).
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
                      placeholder="e.g. Hendra Gunawan, S.E., FRM"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Email Resmi Perusahaan / Bank *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hendra@banknusantara.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Nama Lembaga Finansial *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT BPR Mandiri Sejahtera"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Kategori Lembaga
                    </label>
                    <select
                      value={formData.institutionType}
                      onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                      className="mitra-form-input"
                    >
                      <option value="Bank Umum / BPD">Bank Umum / BPD (KBMI 1-4)</option>
                      <option value="Bank Perekonomian Rakyat (BPR/BPRS)">Bank Perekonomian Rakyat (BPR/BPRS)</option>
                      <option value="Perusahaan Pembiayaan (Multifinance)">Perusahaan Pembiayaan (Multifinance)</option>
                      <option value="Fintech P2P Lending">Fintech P2P Lending</option>
                      <option value="Koperasi Simpan Pinjam / LKM">Koperasi Simpan Pinjam / LKM</option>
                      <option value="Kantor Akuntan Publik (KAP)">Kantor Akuntan Publik (KAP)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                    Kebutuhan Spesifik / Catatan Implementasi
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Sebutkan jenis portofolio (kredit modal kerja, KPR, konsumsi), model deployment yang diinginkan (Cloud/On-Premise), atau timeline kepatuhan..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mitra-form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn-primary" style={{ minWidth: '240px', justifyContent: 'center' }}>
                    <span>Jadwalkan Sesi PoC &amp; Demo Teknis</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                  <p style={{ fontSize: '12px', color: 'var(--ms-text-muted)', marginTop: '8px' }}>
                    Kerahasiaan data portofolio dilindungi Non-Disclosure Agreement (NDA) sebelum sesi teknis.
                  </p>
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
            <span className="section-eyebrow">Tanya Jawab Seputar PSAK 71</span>
            <h2 className="section-title">Pertanyaan Umum Kepatuhan IFRS 9</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Jawaban atas pertanyaan mendasar mengenai metodologi pementasan kredit, forward-looking makro, dan integrasi ECL Pro.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <GoletinFaq items={eclFaqItems} countLabel="5 Tanya Jawab PSAK 71 &amp; IFRS 9" />
          </div>
        </div>
      </section>

      {/* Bottom Enterprise CTA Banner */}
      <div className="section-padding" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kepatuhan Risiko Kredit Enterprise
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Mengotomatisasi Perhitungan CKPN Institusi Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultan aktuaria dan financial engineer Karsasoft siap membantu Anda melakukan evaluasi data kredit, pemodelan PD forward-looking, dan integrasi ke Core Banking Anda.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a href="#konsultasi" className="btn-primary">
                  <span>Konsultasi Bersama Tim Ahli</span>
                  <Icon name="arrow-right" size={16} />
                </a>
                <a href="#simulator" className="btn-secondary">
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
