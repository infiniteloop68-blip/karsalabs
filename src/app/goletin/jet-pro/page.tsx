'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function JETProProductPage() {
  const [activeScenario, setActiveScenario] = useState<'normal' | 'fraud'>('normal');
  const [samplePopulation, setSamplePopulation] = useState<number>(250000); // 250k rows
  const [materialityThreshold, setMaterialityThreshold] = useState<number>(50); // Rp50 Juta
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'Auditor Internal / SPI',
    notes: '',
  });

  // Benford's Law natural distribution for first digits 1-9
  // Natural expected: [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6]
  const benfordExpected = [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6];

  // Normal compliant sample closely tracks Benford's curve
  const normalSample = [29.5, 18.1, 12.2, 10.1, 7.6, 6.9, 5.5, 5.3, 4.8];

  // Fraudulent sample exhibits anomalous spikes on digits 4, 7, and 8
  const fraudSample = [18.2, 11.4, 8.5, 24.8, 5.1, 4.9, 16.5, 6.2, 4.4];

  const currentSample = activeScenario === 'normal' ? normalSample : fraudSample;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const coreModules = [
    {
      icon: 'analytics',
      title: 'Uji Hukum Benford Multi-Digit (ISA 240)',
      desc: 'Analisis frekuensi matematis digit pertama (First Digit) dan dua digit pertama (First-Two Digits) untuk mengungkap anomali nominal yang tidak sesuai distribusi acak alamiah.',
      badge: 'Benford’s Law',
    },
    {
      icon: 'shield',
      title: 'Deteksi Jurnal di Luar Jam & Hari Kerja',
      desc: 'Penyaringan otomatis terhadap ayat jurnal yang diposting pada hari libur, akhir pekan (Sabtu/Minggu), atau dini hari yang kerap menjadi indikasi intervensi manajemen tanpa supervisi.',
      badge: 'Waktu Anomali',
    },
    {
      icon: 'calculator',
      title: 'Analisis Angka Bulat & Plafon Otorisasi',
      desc: 'Mendeteksi transaksi angka bulat (round sums) dan transaksi yang sengaja dipecah tepat di bawah plafon otorisasi persetujuan direksi (structuring/smurfing).',
      badge: 'Plafon Approval',
    },
    {
      icon: 'compliance',
      title: 'Matriks Pemisahan Tugas (Segregation of Duties)',
      desc: 'Mengidentifikasi benturan kepentingan akun pengguna yang melakukan input (maker) sekaligus menyetujui (approver) atau membatalkan ayat jurnal dalam siklus yang sama.',
      badge: 'SoD Conflict',
    },
    {
      icon: 'docs',
      title: 'Analisis Teks Keterangan Jurnal Mencurigakan',
      desc: 'Penyisiran cerdas terhadap jurnal dengan deskripsi kosong, penyesuaian fiktif ("koreksi", "reclass", "penyesuaian manual", "sementara"), atau kata kunci anomali lainnya.',
      badge: 'Text Mining',
    },
    {
      icon: 'security',
      title: 'Kertas Kerja Audit Siap Uji BPK & KAP',
      desc: 'Ekspor berkas hasil pengujian jurnal lengkap dengan formula audit, tingkat signifikansi p-value, dan bukti dukung digital yang memenuhi standar dokumentasi ISA 230.',
      badge: 'Audit Evidence',
    },
  ];

  const forensicWorkflowSteps = [
    {
      step: '01',
      title: 'Ingestion & Normalisasi Buku Besar (GL Ledger)',
      desc: 'Impor jutaan baris jurnal transaksi dari ERP (SAP, Oracle, Yaycount, SQL) dengan normalisasi format tanggal posting, user ID, kode akun, dan nilai debit/kredit.',
      detail: 'Format: Multi-ERP connector, Excel, CSV, Direct Database Read',
    },
    {
      step: '02',
      title: 'Pengujian Statistik Distribusi Benford',
      desc: 'Eksekusi pengujian Hukum Benford 1-digit dan 2-digit untuk seluruh populasi transaksi, menghitung nilai deviasi Chi-Square dan Z-Score secara instan.',
      detail: 'Metode: First Digit, First-Two Digits & Last-Two Digits Analysis',
    },
    {
      step: '03',
      title: 'Penyaringan Pola Heuristik & Anomali Kualitatif',
      desc: 'Sistem menyaring transaksi akhir pekan, entri jurnal tanpa dokumen pendukung, nomor akun jarang aktif, transaksi berulang, dan indikasi pemecahan plafon.',
      detail: 'Pola: Weekend entries, Round amounts, Threshold bypass (Structuring)',
    },
    {
      step: '04',
      title: 'Pemetaan Konflik SoD & Penerbitan KKP',
      desc: 'Pemeriksaan benturan maker-checker dan penyusunan Kertas Kerja Pemeriksaan (KKP) siap pakai lengkap dengan audit trail forensik berstandar ISA 240.',
      detail: 'Output: Berkas investigasi digital, lampiran KKP format PDF & Excel',
    },
  ];

  const industryAuditors = [
    {
      icon: 'building',
      title: 'Satuan Pengawas Internal (SPI) BUMN & Swasta',
      desc: 'Audit kepatuhan berkala, deteksi awal manipulasi laba operasional sebelum tutup buku tahunan, dan pengawasan integritas transaksi pengadaan barang/jasa bernilai material.',
    },
    {
      icon: 'briefcase',
      title: 'Kantor Akuntan Publik (KAP)',
      desc: 'Pemenuhan kewajiban prosedur pengujian jurnal sesuai ISA 240 Paragraf 32 pada perikatan audit umum laporan keuangan emiten bursa dan korporasi privat.',
    },
    {
      icon: 'shield',
      title: 'Komite Audit Dewan Komisaris',
      desc: 'Pengawasan independen terhadap keandalan sistem pelaporan keuangan direksi dan tindak lanjut investigatif atas laporan pengaduan whistleblowing internal.',
    },
    {
      icon: 'analytics',
      title: 'Auditor Forensik & Investigasi Korupsi',
      desc: 'Pembuktian rekayasa transaksi fiktif, kickback vendor, pencucian uang, dan pengalihan dana operasional tanpa otorisasi sah ke rekening pihak terafiliasi.',
    },
    {
      icon: 'database',
      title: 'Inspektorat Kementerian & BPKP',
      desc: 'Pengawasan akuntabilitas belanja APBN/APBD, audit dengan tujuan tertentu (ADTT), serta identifikasi penyimpangan realisasi anggaran instansi negara.',
    },
    {
      icon: 'compliance',
      title: 'Fraud Risk Management Perbankan',
      desc: 'Pemantauan aktivitas pemindahbukuan rekening titipan, mutasi jurnal memorial kas, dan deteksi unauthorized journal entries pada sistem Core Banking.',
    },
  ];

  const comparisonRows = [
    {
      criteria: 'Kecepatan Analisis Buku Besar',
      excel: 'Berhari-hari untuk filter manual; sering freeze pada data >100.000 baris',
      engine: 'Mampu menyaring jutaan ayat jurnal dalam waktu kurang dari 3 menit',
    },
    {
      criteria: 'Pengujian Distribusi Hukum Benford',
      excel: 'Rumus Excel rumit dan lambat; tidak menyediakan uji Chi-Square otomatis',
      engine: 'Uji Benford 1-digit dan 2-digit otomatis lengkap dengan visualisasi anomali',
    },
    {
      criteria: 'Deteksi Waktu Posting Tidak Wajar',
      excel: 'Sulit mengekstrak timestamp jam/menit dan mencocokkan kalender libur nasional',
      engine: 'Otomatis menandai posting akhir pekan, hari libur nasional, dan tengah malam',
    },
    {
      criteria: 'Deteksi Pemecahan Plafon (Structuring)',
      excel: 'Hampir mustahil dilacak manual jika terdistribusi di banyak tanggal dan vendor',
      engine: 'Algoritma mendeteksi pengelompokan transaksi tepat di bawah batas otorisasi',
    },
    {
      criteria: 'Matriks Pemisahan Tugas (SoD)',
      excel: 'Pencocokan manual ribuan user ID pembuat vs penyetujui sangat memakan waktu',
      engine: 'Pemetaan silang maker-checker seketika untuk menemukan benturan akun',
    },
    {
      criteria: 'Kepatuhan Standar Audit ISA 240',
      excel: 'Rentan terlewat dan menjadi temuan defisiensi saat review mutu IAPI',
      engine: 'Memenuhi 100% persyaratan uji jurnal wajib auditor eksternal ISA 240',
    },
  ];

  const jetFaqItems: FaqItem[] = [
    {
      id: 'faq-isa240-requirement',
      q: 'Mengapa pengujian ayat jurnal (Journal Entry Testing) diwajibkan dalam standar audit ISA 240?',
      a: 'Standar Audit ISA 240 ("Tanggung Jawab Auditor Terkait Kecurangan") menegaskan bahwa manajemen berada dalam posisi unik untuk melakukan kecurangan laporan keuangan dengan mengesampingkan pengendalian internal (management override of controls). Salah satu cara paling umum adalah memanipulasi ayat jurnal penyesuaian (adjusting journal entries). Oleh karena itu, ISA 240 mewajibkan auditor untuk menguji integritas ayat jurnal buku besar secara terinci.',
    },
    {
      id: 'faq-benford-principles',
      q: 'Bagaimana cara kerja Hukum Benford dalam mendeteksi kecurangan transaksi keuangan?',
      a: 'Hukum Benford adalah prinsip probabilitas matematika yang menyatakan bahwa dalam kumpulan data transaksi keuangan alami, angka 1 muncul sebagai digit pertama sebanyak 30.1%, angka 2 sebanyak 17.6%, dan angka 9 hanya 4.6%. Ketika manusia merekayasa angka (misalnya membuat faktur fiktif atau pengeluaran kas yang dimanipulasi), mereka cenderung memilih angka acak semu (seperti 4, 7, atau 8). JET Pro membandingkan data riil dengan kurva teoritis dan menandai deviasi statistik signifikan menggunakan Z-Score dan Chi-Square test.',
    },
    {
      id: 'faq-weekend-redflags',
      q: 'Mengapa posting jurnal di akhir pekan atau dini hari dianggap sebagai indikasi risiko tinggi (red flag)?',
      a: 'Dalam operasional bisnis normal, entri jurnal buku besar diposting pada jam kerja resmi di bawah supervisi berjenjang. Posting jurnal di hari Minggu atau tengah malam sering kali dilakukan untuk menghindari pengawasan langsung staf akuntansi lain, memasukkan penyesuaian fiktif menjelang batas waktu pelaporan (closing), atau melakukan pembalik jurnal (reversal) sebelum audit dimulai.',
    },
    {
      id: 'faq-data-security-onprem',
      q: 'Apakah JET Pro aman digunakan untuk memeriksa data buku besar perusahaan yang sangat rahasia?',
      a: 'Sangat aman. Karsasoft menyediakan opsi deployment On-Premises penuh yang beroperasi dalam jaringan internal air-gapped perusahaan Anda tanpa koneksi ke internet luar. Semua pemrosesan data buku besar berlangsung di server lokal bank atau korporasi Anda, menjamin kepatuhan penuh terhadap kerahasiaan data dan regulasi privasi.',
    },
    {
      id: 'faq-erp-compatibility',
      q: 'Format data buku besar apa saja yang dapat diuji oleh JET Pro?',
      a: 'JET Pro mendukung ekspor buku besar dari hampir seluruh sistem ERP modern, termasuk SAP ECC/S4HANA, Oracle ERP Cloud, Microsoft Dynamics, Yaycount ERP, Accurate, Zahir, hingga format universal seperti Microsoft Excel (.xlsx), CSV, text file, dan direct database connection (PostgreSQL, SQL Server, Oracle DB).',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner (Standardized 520px, Matching /goletin/ai) */}
          <div className="ms-hero-wrapper goletin-jet-hero-banner">
            <div className="goletin-jet-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">JET Pro — Audit Forensik &amp; Deteksi Fraud ISA 240</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Journal Entry Testing &amp; Deteksi Fraud Akuntansi Berbasis AI
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Perangkat lunak audit analitik digital mutakhir untuk SPI BUMN, Komite Audit, dan KAP. Memanfaatkan uji Hukum Benford, anomali waktu posting, dan mitigasi risiko manipulasi akuntansi.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka JET Pro Web</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <a href="#simulator-benford" className="btn-secondary">
                    <span>Coba Simulator Benford</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Standar ISA 240 &amp; ISA 230</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Uji Hukum Benford Otomatis</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Audit-Ready SPI &amp; KAP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benford Simulator Section */}
          <section id="simulator-benford" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Simulator Hukum Benford Interaktif</span>
              <h2 className="section-title">Visualisasi Distribusi Frekuensi Digit Alami vs Indikasi Fraud</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Hukum Benford menyatakan bahwa angka 1 secara alami muncul ~30.1% sebagai digit pertama, sedangkan angka 9 hanya ~4.6%. Manipulasi manual manusia menghasilkan lonjakan frekuensi yang dapat dideteksi secara presisi.
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
              {/* Simulator Parameters */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid var(--ms-border)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                      Ukuran Populasi Transaksi GL
                    </label>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                      {samplePopulation.toLocaleString('id-ID')} Baris Jurnal
                    </span>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={1000000}
                    step={50000}
                    value={samplePopulation}
                    onChange={(e) => setSamplePopulation(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>50.000</span>
                    <span>500.000</span>
                    <span>1.000.000 Baris</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                      Ambang Batas Pengujian (Materiality)
                    </label>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                      ≥ Rp{materialityThreshold} Juta
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={200}
                    step={10}
                    value={materialityThreshold}
                    onChange={(e) => setMaterialityThreshold(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>Rp10 Jt</span>
                    <span>Rp100 Jt</span>
                    <span>Rp200 Jt</span>
                  </div>
                </div>
              </div>

              {/* Scenario Buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '28px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setActiveScenario('normal')}
                  style={{
                    padding: '11px 22px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: activeScenario === 'normal' ? 'var(--ms-blue-primary)' : 'var(--ms-border)',
                    backgroundColor: activeScenario === 'normal' ? 'rgba(0, 120, 212, 0.08)' : '#FFFFFF',
                    color: activeScenario === 'normal' ? 'var(--ms-blue-primary)' : 'var(--ms-text-heading)',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  Skenario 1: Buku Besar Wajar (Mengikuti Benford)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScenario('fraud')}
                  style={{
                    padding: '11px 22px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: activeScenario === 'fraud' ? '#D83B01' : 'var(--ms-border)',
                    backgroundColor: activeScenario === 'fraud' ? '#FFF4CE' : '#FFFFFF',
                    color: activeScenario === 'fraud' ? '#D83B01' : 'var(--ms-text-heading)',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  Skenario 2: Indikasi Fraud Pengadaan (Lonjakan Digit 4 &amp; 7)
                </button>
              </div>

              {/* Bar Chart Visualization */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                    Perbandingan Distribusi Digit Pertama (1 - 9)
                  </div>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '12px', height: '12px', backgroundColor: '#CBD5E1', borderRadius: '2px' }} />
                      <span style={{ color: 'var(--ms-text-muted)' }}>Distribusi Alami Benford</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '12px', height: '12px', backgroundColor: activeScenario === 'normal' ? 'var(--ms-blue-primary)' : '#D83B01', borderRadius: '2px' }} />
                      <span style={{ fontWeight: 600, color: activeScenario === 'normal' ? 'var(--ms-blue-primary)' : '#D83B01' }}>
                        {activeScenario === 'normal' ? 'Sampel Buku Besar Wajar' : 'Sampel Terindikasi Manipulasi'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Grid of 9 Digits */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: '12px', alignItems: 'flex-end', height: '220px', padding: '16px 0 32px', borderBottom: '2px solid var(--ms-border)' }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit, idx) => {
                    const expected = benfordExpected[idx];
                    const actual = currentSample[idx];
                    const isAnomaly = activeScenario === 'fraud' && (digit === 4 || digit === 7);

                    return (
                      <div key={digit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', position: 'relative' }}>
                        {isAnomaly && (
                          <div style={{ position: 'absolute', top: '-18px', backgroundColor: '#D83B01', color: '#FFFFFF', fontSize: '10px', fontWeight: 700, padding: '2px 5px', borderRadius: '3px' }}>
                            ANOMALI!
                          </div>
                        )}

                        <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', width: '100%', justifyContent: 'center' }}>
                          {/* Expected Bar */}
                          <div
                            style={{
                              width: '40%',
                              height: `${(expected / 35) * 160}px`,
                              backgroundColor: '#E2E8F0',
                              borderRadius: '3px 3px 0 0',
                            }}
                            title={`Ekspektasi Benford: ${expected}%`}
                          />
                          {/* Actual Bar */}
                          <div
                            style={{
                              width: '40%',
                              height: `${(actual / 35) * 160}px`,
                              backgroundColor: isAnomaly ? '#D83B01' : 'var(--ms-blue-primary)',
                              borderRadius: '3px 3px 0 0',
                            }}
                            title={`Data Aktual: ${actual}%`}
                          />
                        </div>

                        <div style={{ marginTop: '8px', fontSize: '13px', fontWeight: 700, color: isAnomaly ? '#D83B01' : 'var(--ms-text-heading)' }}>
                          Digit {digit}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>
                          {actual}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Verdict Box */}
              <div
                style={{
                  padding: '20px 24px',
                  borderRadius: '10px',
                  backgroundColor: activeScenario === 'normal' ? 'rgba(16, 124, 65, 0.08)' : '#FFF4CE',
                  border: `1px solid ${activeScenario === 'normal' ? 'rgba(16, 124, 65, 0.25)' : '#FED966'}`,
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '18px' }}>{activeScenario === 'normal' ? '✅' : '🚨'}</span>
                  <strong style={{ fontSize: '15px', color: activeScenario === 'normal' ? '#107C41' : '#A80000' }}>
                    {activeScenario === 'normal'
                      ? 'Status Uji Benford: Normal (Chi-Square p-value = 0.42)'
                      : 'PERINGATAN AUDIT: Indikasi Deviasi Signifikan pada Digit 4 & 7 (Z-Score = 4.2)'}
                  </strong>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '20px', margin: 0 }}>
                  {activeScenario === 'normal'
                    ? 'Frekuensi kemunculan angka transaksi debitur konsisten dengan hukum distribusi alamiah. Tidak terdeteksi pola manipulasi manual terencana.'
                    : `Ditemukan konsentrasi transaksi janggal sebesar 24.8% pada angka berawalan digit 4 (nilai wajar hanya 9.7%). Sistem menandai ${Math.round((samplePopulation / 250000) * 142)} baris jurnal di atas ambang batas Rp${materialityThreshold} juta untuk pengujian substantif fisik segera.`}
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', justifyContent: 'center' }}
                >
                  <span>Buka Modul Audit Forensik JET Pro</span>
                  <Icon name="external-link" size={15} />
                </a>
              </div>
            </div>
          </section>

          {/* Core Capabilities / Modules Grid */}
          <section id="fitur-unggulan" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
              <span className="section-eyebrow">Metodologi Audit Teruji</span>
              <h2 className="section-title">Kapabilitas Lengkap JET Pro untuk Auditor Profesional</h2>
              <p className="section-lead" style={{ maxWidth: '740px', margin: '0 auto' }}>
                Memenuhi seluruh butir persyaratan pengujian ayat jurnal sesuai standar ISA 240 yang diwajibkan oleh regulator dan badan pembina profesi akuntan.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {coreModules.map((item, i) => (
                <div
                  key={i}
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
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
                        <Icon name={item.icon} size={22} />
                      </div>
                      <span className="badge badge-blue" style={{ fontSize: '11px' }}>
                        {item.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '10px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', lineHeight: '20px', color: 'var(--ms-text-body)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4-Step Forensic Journal Testing Workflow */}
          <section id="alur-forensik" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
              <span className="section-eyebrow">Alur Kerja Forensik</span>
              <h2 className="section-title">4 Tahap Pengujian Jurnal Berstandar ISA 240</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Metodologi analitik bertahap untuk menyaring jutaan transaksi buku besar hingga menemukan anomali paling berisiko.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {forensicWorkflowSteps.map((step, idx) => (
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
                        color: 'var(--ms-blue-primary)',
                        backgroundColor: 'rgba(0, 120, 212, 0.08)',
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
                  <p style={{ fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '20px', marginBottom: '16px', flex: 1 }}>
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
          </section>

          {/* Sector Use Cases */}
          <section id="sektor-pengguna" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
              <span className="section-eyebrow">Skenario Institusi</span>
              <h2 className="section-title">Penerapan JET Pro di Berbagai Sektor Organisasi</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Diandalkan oleh pengawas internal BUMN, auditor independen, dan penyelidik kepatuhan untuk mengungkap risiko manipulasi akun.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {industryAuditors.map((inst, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--ms-border-card)',
                    borderRadius: '10px',
                    padding: '24px',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(0, 120, 212, 0.08)',
                      color: 'var(--ms-blue-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon name={inst.icon} size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      {inst.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '19px', margin: 0 }}>
                      {inst.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table: Manual Excel vs Goletin JET Pro */}
          <section id="komparasi-audit" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Perbandingan Solusi</span>
              <h2 className="section-title">Audit Jurnal Manual Excel vs Goletin JET Pro</h2>
              <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Mengapa komite audit dan KAP beralih ke analitik otomatis untuk menutup celah penyembunyian kecurangan pembukuan.
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
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-text-heading)', width: '30%' }}>
                      Parameter &amp; Kriteria Kepatuhan
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-text-muted)', width: '35%' }}>
                      Pengujian Manual Excel
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-blue-primary)', width: '35%' }}>
                      Goletin JET Pro (Standar ISA 240)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: idx === comparisonRows.length - 1 ? 'none' : '1px solid var(--ms-border)',
                        backgroundColor: idx % 2 === 0 ? '#FFFFFF' : 'rgba(248, 250, 249, 0.5)',
                      }}
                    >
                      <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                        {row.criteria}
                      </td>
                      <td style={{ padding: '16px 20px', color: 'var(--ms-text-muted)', lineHeight: '19px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#D9534F', fontWeight: 700 }}>✕</span>
                          <span>{row.excel}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px', color: 'var(--ms-text-body)', lineHeight: '19px', fontWeight: 500 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#107C41', flexShrink: 0, marginTop: '2px', display: 'inline-flex' }}>
                            <Icon name="check" size={15} color="#107C41" />
                          </span>
                          <span>{row.engine}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Consultation & Demo Request Form */}
          <section id="konsultasi" style={{ marginBottom: '64px' }}>
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
                <span className="section-eyebrow">Demo Teknis &amp; Konsultasi SPI</span>
                <h2 className="section-title" style={{ fontSize: '24px', lineHeight: '32px' }}>
                  Perkuat Pengawasan Internal dengan Audit Forensik JET Pro
                </h2>
                <p className="section-lead" style={{ fontSize: '14px' }}>
                  Jadwalkan sesi demonstrasi bersama spesialis audit sistem informasi Karsasoft untuk tim SPI atau KAP Anda.
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
                    Permintaan Presentasi Teknis Diterima!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', lineHeight: '22px', maxWidth: '600px', margin: '0 auto 20px' }}>
                    Terima kasih, <strong>{formData.name}</strong> dari <strong>{formData.organization}</strong>. Audit Technology Specialist kami akan menghubungi Anda melalui email <strong>{formData.email}</strong> dalam waktu maksimal 1x24 jam kerja.
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
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama Lengkap Anda *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Bambang Trihatmodjo, CFE"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        placeholder="bambang@bumn-holding.co.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mitra-form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama Korporasi / Instansi / KAP *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: PT Pupuk Nusantara / KAP Rekan"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Peran / Jabatan
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="mitra-form-input"
                      >
                        <option value="Auditor Internal / SPI">Auditor Internal / SPI BUMN &amp; Swasta</option>
                        <option value="Partner / Auditor KAP">Partner / Auditor Kantor Akuntan Publik</option>
                        <option value="Komite Audit Komisaris">Komite Audit Dewan Komisaris</option>
                        <option value="Konsultan Forensik & Fraud">Konsultan Forensik Keuangan</option>
                        <option value="Inspektorat / BPK / BPKP">Inspektorat Lembaga / BPKP / BPK</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Kebutuhan Pengujian &amp; Pertanyaan Khusus
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Sebutkan format ERP yang digunakan saat ini (SAP, Oracle, Yaycount, in-house), volume baris jurnal per tahun, atau opsi deployment on-premise..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="mitra-form-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14.5px' }}
                  >
                    <span>Jadwalkan Presentasi Forensik</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Frequently Asked Questions (GoletinFaq) */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Tanya Jawab Seputar ISA 240</span>
              <h2 className="section-title">Pertanyaan Umum Deteksi Fraud &amp; Pengujian Jurnal</h2>
              <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Jawaban atas pertanyaan mendasar mengenai mandat pengujian ayat jurnal, analisis Hukum Benford, dan keamanan deployment.
              </p>
            </div>

            <GoletinFaq items={jetFaqItems} countLabel="5 Tanya Jawab ISA 240 &amp; Audit Forensik" />
          </section>

          {/* Bottom Enterprise CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Audit Forensik &amp; Integritas Finansial
              </span>
              <h2 className="goletin-bottom-cta-title">
                Lindungi Organisasi dari Risiko Manipulasi Jurnal Transaksi
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultan audit sistem informasi Karsasoft siap membantu tim SPI dan auditor KAP Anda melakukan demo teknis pengujian jurnal forensik dengan data sampel buku besar riil.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Jadwalkan Presentasi Forensik</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Buka JET Pro Web</span>
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
