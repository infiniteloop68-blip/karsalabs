'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function GoletinAIProductPage() {
  const [activePrompt, setActivePrompt] = useState<'financial' | 'legal' | 'tax'>('financial');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: 'Analisis Dokumen Finansial & Audit',
    notes: '',
  });

  const promptDemos = {
    financial: {
      title: 'Analisis Laporan Keuangan Konsolidasi & Rasio Keuangan',
      userPrompt:
        'Analisis laporan posisi keuangan konsolidasian terlampir. Hitung Current Ratio, Debt-to-Equity Ratio, dan jelaskan risiko likuiditas utama sesuai standar PSAK.',
      aiResponse: `Berdasarkan analisis neraca konsolidasi PT Nusantara Mandiri Tbk per 31 Desember 2025:

1. Rasio Likuiditas (Current Ratio):
   • Aset Lancar: Rp452,8 Miliar | Liabilitas Jangka Pendek: Rp238,3 Miliar
   • Current Ratio = 1,90x (Kategori Sehat, di atas benchmark industri 1,5x).

2. Rasio Solvabilitas (Debt-to-Equity Ratio / DER):
   • Total Liabilitas: Rp580,2 Miliar | Total Ekuitas: Rp710,5 Miliar
   • DER = 0,82x (Struktur permodalan konservatif dengan ketergantungan utang terkelola baik).

3. Catatan Kepatuhan Regulasi & Risiko:
   • Terdapat kenaikan liabilitas sewa pembiayaan (PSAK 73) sebesar 18% akibat penambahan sewa armada logistik.
   • Rasio kecukupan modal kerja lancar tetap aman untuk menopang komitmen belanja modal (Capex) kuartal I 2026.`,
    },
    legal: {
      title: 'Uji Kepatuhan Klausul Kontrak Sewa (Standar PSAK 73)',
      userPrompt:
        'Periksa draf perjanjian sewa gedung kantor 5 tahun ini. Apakah memenuhi definisi sewa dan kriteria aset hak-guna (Right-of-Use Asset) berdasarkan PSAK 73?',
      aiResponse: `Hasil telaah kontraktual berdasarkan PSAK 73 (Sewa):

1. Identifikasi Aset Spesifik (Identified Asset):
   • Terpenuhi (Pasal 2.1): Ruang kantor lantai 12-14 Gedung Graha Palma seluas 2.400 m² teridentifikasi secara fisik dan pihak lessor tidak memiliki hak substitusi substantif.

2. Pengendalian Manfaat Ekonomis:
   • Terpenuhi (Pasal 4.3): Penyewa memiliki hak eksklusif untuk memperoleh substansial seluruh manfaat ekonomik dari penggunaan aset selama periode 5 tahun.

3. Rekomendasi Akuntansi Finansial:
   • Kontrak ini WAJIB diakui di neraca sebagai Aset Hak-Guna (RoU Asset) dan Liabilitas Sewa.
   • Nilai awal diukur sebesar nilai kini dari pembayaran sewa diskonto menggunakan Incremental Borrowing Rate (IBR) perusahaan sebesar 7,25% per tahun.`,
    },
    tax: {
      title: 'Penjelasan Regulasi Pemotongan Pajak PPh 21 TER',
      userPrompt:
        'Karyawan tetap status K/1 menerima gaji bruto Rp14.000.000 pada bulan Oktober 2025. Jelaskan skema tarif TER yang berlaku sesuai PP 58/2023.',
      aiResponse: `Berdasarkan PP No. 58/2023 dan PMK No. 168/2023:

1. Klasifikasi Kategori TER:
   • Status PTKP K/1 (Kawin, 1 Tanggungan) masuk ke dalam Kategori TER B.

2. Penentuan Tarif Efektif Bulanan (Masa Pajak Oktober):
   • Bruto: Rp14.000.000 berada pada rentang Rp12.500.001 s.d. Rp14.150.000.
   • Tarif Efektif yang berlaku adalah 3,00%.

3. Perhitungan PPh 21 Dipotong:
   • PPh 21 Masa Oktober = Rp14.000.000 × 3,00% = Rp420.000.
   • Take Home Pay Bersih Karyawan = Rp13.580.000.

Catatan Masa Desember:
Pada masa pajak Desember, pemotongan akan dihitung ulang menggunakan tarif umum Pasal 17 ayat (1) huruf a UU PPh disetahunkan dikurangi akumulasi potongan Januari-November.`,
    },
  };

  const currentDemo = promptDemos[activePrompt];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const corePillars = [
    {
      icon: 'shield',
      title: 'Jaminan Zero Training on Customer Data',
      desc: 'Perlindungan kontraktual hukum bahwa data rahasia perusahaan, dokumen keuangan, dan prompt kueri Anda tidak akan pernah digunakan untuk melatih model AI publik atau dibagikan ke pihak ketiga.',
      badge: 'Privasi Mutlak',
    },
    {
      icon: 'ai',
      title: 'Pemahaman Mendalam Regulasi Indonesia',
      desc: 'Dioptimalkan secara khusus memahami undang-undang nasional, peraturan OJK, Bank Indonesia, standar PSAK/IFRS, perpajakan DJP, dan terminologi akuntansi dalam Bahasa Indonesia & Inggris.',
      badge: 'Hukum & Finansial',
    },
    {
      icon: 'docs',
      title: 'Sintesis Dokumen Panjang & Kontrak Kompleks',
      desc: 'Mampu memproses ratusan halaman laporan keuangan audit, prospektus IPO, dan perjanjian hukum secara menyeluruh, mengekstraksi poin kunci dan anomali klausul dalam hitungan detik.',
      badge: 'Ekstraksi Cepat',
    },
    {
      icon: 'search',
      title: 'Enterprise Semantic Knowledge Base',
      desc: 'Hubungkan repositori dokumen internal, SOP perusahaan, dan regulasi kepatuhan ke dalam asisten cerdas terpadu yang dapat menjawab pertanyaan staf dengan sitasi sumber akurat.',
      badge: 'Pencarian Semantik',
    },
    {
      icon: 'security',
      title: 'Deployment Sovereign Cloud / On-Premise',
      desc: 'Pilihan deployment fleksibel di Virtual Private Cloud (VPC) terisolasi di Tier-4 Data Center Indonesia atau on-premise hardware korporasi tanpa ketergantungan koneksi asing.',
      badge: 'Sovereign Cloud',
    },
    {
      icon: 'saas',
      title: 'Integrasi Ekosistem Goletin Docs & Sheets',
      desc: 'Asisten AI tersemat langsung di lembar kerja Goletin Docs, Sheets, dan Slides untuk otomatisasi pembuatan formula, penulisan memo, dan ringkasan eksekutif instan.',
      badge: 'Terintegrasi Office',
    },
  ];

  const aiFaqItems: FaqItem[] = [
    {
      id: 'ai-training-privacy',
      q: 'Apakah dokumen atau prompt kueri kami digunakan untuk melatih model AI publik?',
      a: 'Sama sekali tidak. Karsasoft memberlakukan garansi Zero Data Training secara tertulis dalam Non-Disclosure Agreement (NDA) dan Enterprise Service Agreement. Data yang diunggah dan dihasilkan sepenuhnya milik organisasi Anda dan dienkripsi saat transit maupun at-rest.',
    },
    {
      id: 'ai-server-location',
      q: 'Di mana pusat data Goletin AI beroperasi dan apakah mematuhi UU PDP Indonesia?',
      a: 'Seluruh infrastruktur Goletin AI berada di dalam negeri pada data center Tier-4 bersertifikasi ISO 27001 dan SOC 2. Arsitektur ini sepenuhnya mematuhi UU Perlindungan Data Pribadi (UU PDP No. 27/2022) dan PP No. 71/2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik.',
    },
    {
      id: 'ai-regulations-accuracy',
      q: 'Bagaimana Goletin AI memastikan akurasi interpretasi standar PSAK, IFRS, dan perpajakan?',
      a: 'Goletin AI diperkuat retrieval-augmented context terhadap basis korpus regulasi resmi Dewan Standar Akuntansi Keuangan (DSAK IAI), Direktorat Jenderal Pajak (DJP), Otoritas Jasa Keuangan (OJK), dan Bank Indonesia. Setiap keluaran analitik menyertakan sitasi klausul pasal terkait.',
    },
    {
      id: 'ai-deployment-options',
      q: 'Apakah tersedia opsi implementasi Private Tenant (VPC) atau On-Premise tanpa koneksi internet?',
      a: 'Ya. Untuk institusi perbankan, BUMN, dan sektor bermuatan data rahasia tinggi, kami menyediakan deployment Private Tenant VPC terisolasi mTLS serta opsi on-premise hardware air-gapped dengan model yang berjalan sepenuhnya lokal.',
    },
    {
      id: 'ai-docs-integration',
      q: 'Bagaimana Goletin AI terintegrasi dengan modul Goletin Docs, Sheets, dan ERP Yaycount?',
      a: 'Pengguna dapat memanggil Goletin AI langsung dari toolbar Goletin Docs untuk menyusun laporan, memformulasikan kalkulasi otomatis di Sheets, serta menganalisis jurnal akuntansi anomali pada Yaycount ERP melalui satu kredensial SSO.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Goletin AI Hero Banner (Microsoft 365 Style, Matching /goletin) */}
          <div className="ms-hero-wrapper goletin-hero-banner">
            <div className="goletin-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Asisten Multimodal Finansial & Regulasi</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Goletin AI: Penalaran Cerdas untuk Finansial & Regulasi
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Solusi AI generatif pertama di Indonesia dengan jaminan kepatuhan privasi tanpa kompromi. Memahami konteks regulasi perbankan, kepatuhan IFRS/PSAK, hukum bisnis, dan perpajakan nasional dengan garansi tertulis: data internal perusahaan Anda tidak pernah digunakan melatih model publik.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://ai.goletin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Coba Goletin AI Sekarang</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <a href="#demo-ai" className="btn-secondary">
                    <span>Lihat Demo Interaktif</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Zero Training Guarantee</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>100% Server di Indonesia</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kepatuhan UU PDP No. 27/2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive AI Demo Section */}
          <section id="demo-ai" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Demo Penalaran Regulasi & Bisnis</span>
              <h2 className="section-title">Lihat Presisi Respons Goletin AI untuk Kebutuhan Korporasi</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Pilih salah satu use-case profesional di bawah ini untuk melihat contoh respons analitik yang dihasilkan oleh Goletin AI berdasarkan standar akuntansi dan hukum Indonesia.
              </p>
            </div>

            <div
              style={{
                maxWidth: '980px',
                margin: '0 auto',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--ms-border-card)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Case Selector Tabs */}
              <div
                style={{
                  display: 'flex',
                  borderBottom: '1px solid var(--ms-border)',
                  backgroundColor: 'var(--ms-bg-subtle)',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActivePrompt('financial')}
                  style={{
                    flex: '1 1 200px',
                    padding: '16px 20px',
                    border: 'none',
                    backgroundColor: activePrompt === 'financial' ? '#FFFFFF' : 'transparent',
                    fontWeight: activePrompt === 'financial' ? 700 : 500,
                    color: activePrompt === 'financial' ? 'var(--ms-blue-text)' : 'var(--ms-text-muted)',
                    borderBottom: activePrompt === 'financial' ? '3px solid var(--ms-blue-text)' : '3px solid transparent',
                    cursor: 'pointer',
                    fontSize: '13.5px',
                    fontFamily: 'var(--font-segoe-text)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  1. Analisis Keuangan (EBITDA & Likuiditas)
                </button>
                <button
                  type="button"
                  onClick={() => setActivePrompt('legal')}
                  style={{
                    flex: '1 1 200px',
                    padding: '16px 20px',
                    border: 'none',
                    backgroundColor: activePrompt === 'legal' ? '#FFFFFF' : 'transparent',
                    fontWeight: activePrompt === 'legal' ? 700 : 500,
                    color: activePrompt === 'legal' ? 'var(--ms-blue-text)' : 'var(--ms-text-muted)',
                    borderBottom: activePrompt === 'legal' ? '3px solid var(--ms-blue-text)' : '3px solid transparent',
                    cursor: 'pointer',
                    fontSize: '13.5px',
                    fontFamily: 'var(--font-segoe-text)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  2. Kepatuhan Kontrak Sewa (PSAK 73)
                </button>
                <button
                  type="button"
                  onClick={() => setActivePrompt('tax')}
                  style={{
                    flex: '1 1 200px',
                    padding: '16px 20px',
                    border: 'none',
                    backgroundColor: activePrompt === 'tax' ? '#FFFFFF' : 'transparent',
                    fontWeight: activePrompt === 'tax' ? 700 : 500,
                    color: activePrompt === 'tax' ? 'var(--ms-blue-text)' : 'var(--ms-text-muted)',
                    borderBottom: activePrompt === 'tax' ? '3px solid var(--ms-blue-text)' : '3px solid transparent',
                    cursor: 'pointer',
                    fontSize: '13.5px',
                    fontFamily: 'var(--font-segoe-text)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  3. Penalaran Pajak PPh 21 TER
                </button>
              </div>

              {/* Chat Simulation View */}
              <div style={{ padding: '32px', backgroundColor: '#FAFBFB' }}>
                {/* User Message */}
                <div style={{ display: 'flex', gap: '14px', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--ms-text-heading)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '13px',
                      flexShrink: 0,
                    }}
                  >
                    US
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--ms-border)',
                      borderRadius: '12px',
                      padding: '16px 20px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--ms-text-muted)',
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Pertanyaan Eksekutif Perusahaan
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        color: 'var(--ms-text-heading)',
                        lineHeight: '22px',
                      }}
                    >
                      {currentDemo.userPrompt}
                    </div>
                  </div>
                </div>

                {/* AI Response Message */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="/logos/goletin-ai.svg"
                      alt="Goletin AI"
                      width={36}
                      height={36}
                      style={{ borderRadius: '8px' }}
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #B8EFE2',
                      borderRadius: '12px',
                      padding: '20px 24px',
                      boxShadow: '0 4px 14px rgba(0, 125, 101, 0.08)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '12px',
                        borderBottom: '1px solid var(--ms-border)',
                        paddingBottom: '8px',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: 700,
                          color: 'var(--ms-blue-text)',
                        }}
                      >
                        Goletin Enterprise AI • Penalaran Finansial & Regulasi
                      </div>
                      <span className="standard-badge" style={{ margin: 0, fontSize: '11px', padding: '2px 8px' }}>
                        Zero Data Train Verified
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        color: 'var(--ms-text-body)',
                        lineHeight: '24px',
                        whiteSpace: 'pre-line',
                        fontFamily: 'var(--font-segoe-text)',
                      }}
                    >
                      {currentDemo.aiResponse}
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Action Bar */}
              <div
                style={{
                  padding: '16px 28px',
                  backgroundColor: '#FFFFFF',
                  borderTop: '1px solid var(--ms-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '12px', color: 'var(--ms-text-muted)' }}>
                  Didukung LLM Multimodal dengan integrasi konteks hukum & akuntansi Indonesia
                </span>
                <a
                  href="https://ai.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '13px' }}
                >
                  <span>Coba Interaksi Langsung</span>
                  <Icon name="external-link" size={13} />
                </a>
              </div>
            </div>
          </section>

          {/* 6 Core Pillars Grid (Matching standards-grid from /goletin) */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Keunggulan Enterprise</span>
              <h2 className="section-title">Mengapa Korporasi Memilih Goletin AI</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Keandalan pemrosesan bahasa alami dengan arsitektur privasi paling ketat untuk industri yang diatur regulator.
              </p>
            </div>

            <div className="standards-grid">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="standard-card">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      marginBottom: '14px',
                    }}
                  >
                    <div
                      className="pillar-icon-box"
                      style={{
                        width: '40px',
                        height: '40px',
                        margin: 0,
                        backgroundColor: '#F1F5F3',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name={pillar.icon} size={20} />
                    </div>
                    <span className="standard-badge" style={{ margin: 0 }}>
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="standard-card-title">{pillar.title}</h3>
                  <p className="standard-card-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Comparison Table (AI Publik vs Goletin AI Enterprise) */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Perbandingan Arsitektur</span>
              <h2 className="section-title">AI Konsumen Publik vs Goletin AI Enterprise</h2>
              <p className="section-lead" style={{ maxWidth: '750px', margin: '0 auto' }}>
                Pahami perbedaan mendasar antara model kecerdasan buatan publik dan arsitektur sovereign AI kami untuk menjamin kerahasiaan operasional perusahaan.
              </p>
            </div>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Kriteria Keamanan & Regulasi</th>
                    <th>Model AI Konsumen Publik</th>
                    <th>Goletin AI Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jaminan Pelatihan Data (Training Policy)</td>
                    <td className="dash-cell">Data prompt berisiko digunakan melatih model publik</td>
                    <td className="check-cell" style={{ fontWeight: 600, color: 'var(--ms-blue-text)' }}>
                      ✓ Zero Training Guarantee (Klausul Legal NDA)
                    </td>
                  </tr>
                  <tr>
                    <td>Lokasi Server & Kedaulatan Data</td>
                    <td className="dash-cell">Server luar negeri (Berisiko melanggar UU PDP)</td>
                    <td className="check-cell" style={{ fontWeight: 600, color: 'var(--ms-blue-text)' }}>
                      ✓ 100% Tier-4 Data Center di Indonesia
                    </td>
                  </tr>
                  <tr>
                    <td>Konteks Regulasi Nasional</td>
                    <td className="dash-cell">Generik, rawan halusinasi pasal dan tarif pajak</td>
                    <td className="check-cell" style={{ fontWeight: 600, color: 'var(--ms-blue-text)' }}>
                      ✓ Terlatih pada korpus PSAK, IFRS, OJK & PPh TER
                    </td>
                  </tr>
                  <tr>
                    <td>Integrasi Ruang Kerja & Spreadsheet</td>
                    <td className="dash-cell">Terpisah, perlu copy-paste manual tanpa audit log</td>
                    <td className="check-cell" style={{ fontWeight: 600, color: 'var(--ms-blue-text)' }}>
                      ✓ Terintegrasi Goletin Docs, Sheets, & ERP Yaycount
                    </td>
                  </tr>
                  <tr>
                    <td>Opsi Deployment Khusus</td>
                    <td className="dash-cell">Hanya multi-tenant cloud publik</td>
                    <td className="check-cell" style={{ fontWeight: 600, color: 'var(--ms-blue-text)' }}>
                      ✓ Tersedia Private Tenant VPC & On-Premise Air-Gapped
                    </td>
                  </tr>
                  <tr>
                    <td>Dukungan Teknis & SLA Institusi</td>
                    <td className="dash-cell">Community / ticket helpdesk standar</td>
                    <td className="check-cell" style={{ fontWeight: 600, color: 'var(--ms-blue-text)' }}>
                      ✓ Dedicated Solution Architect & SLA 99,9%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Enterprise AI Consultation Form */}
          <section id="konsultasi" style={{ marginBottom: '64px' }}>
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
              <div className="section-header-block centered" style={{ marginBottom: '32px' }}>
                <span className="section-eyebrow">Konsultasi Enterprise AI</span>
                <h2 className="section-title">Rancang Implementasi Private AI di Organisasi Anda</h2>
                <p className="section-lead">
                  Diskusikan integrasi model AI terdedikasi (VPC / On-Premise) bersama AI Solutions Architect Karsasoft.
                </p>
              </div>

              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: '#E6FCF7',
                    border: '1px solid #00EDC2',
                    borderRadius: '12px',
                    padding: '36px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--ms-blue)',
                      color: '#0E1726',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Icon name="check" size={24} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-segoe-display)',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--ms-text-heading)',
                      marginBottom: '8px',
                    }}
                  >
                    Pengajuan Konsultasi Diterima!
                  </h3>
                  <p
                    style={{
                      fontSize: '14.5px',
                      color: 'var(--ms-text-body)',
                      lineHeight: '22px',
                      maxWidth: '600px',
                      margin: '0 auto 20px',
                    }}
                  >
                    Terima kasih, <strong>{formData.name}</strong> dari <strong>{formData.company}</strong>. AI Architect kami akan menghubungi Anda via email di <strong>{formData.email}</strong> dalam waktu maksimal 1x24 jam kerja untuk menyusun konsep arsitektur Private AI perusahaan Anda.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="btn-secondary"
                    style={{ backgroundColor: '#FFFFFF' }}
                  >
                    <span>Kirim Pengajuan Baru</span>
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
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '20px',
                      marginBottom: '20px',
                    }}
                  >
                    <div>
                      <label
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--ms-text-heading)',
                          display: 'block',
                          marginBottom: '6px',
                        }}
                      >
                        Nama Lengkap Anda *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Raditya Wicaksana, M.Sc."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid var(--ms-border)',
                          fontSize: '14px',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--ms-text-heading)',
                          display: 'block',
                          marginBottom: '6px',
                        }}
                      >
                        Email Resmi Perusahaan *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="raditya@holding-perusahaan.co.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid var(--ms-border)',
                          fontSize: '14px',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '20px',
                      marginBottom: '20px',
                    }}
                  >
                    <div>
                      <label
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--ms-text-heading)',
                          display: 'block',
                          marginBottom: '6px',
                        }}
                      >
                        Nama Perusahaan *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. PT Telekomunikasi & Data Persero"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid var(--ms-border)',
                          fontSize: '14px',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--ms-text-heading)',
                          display: 'block',
                          marginBottom: '6px',
                        }}
                      >
                        Fokus Kebutuhan Use Case
                      </label>
                      <select
                        value={formData.useCase}
                        onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid var(--ms-border)',
                          fontSize: '14px',
                          backgroundColor: '#FFFFFF',
                          fontFamily: 'inherit',
                        }}
                      >
                        <option value="Analisis Dokumen Finansial & Audit">Analisis Dokumen Finansial & Audit</option>
                        <option value="Uji Kepatuhan Kontrak & Hukum (Legal)">Uji Kepatuhan Kontrak & Hukum (Legal)</option>
                        <option value="Enterprise Knowledge Search Internal">Enterprise Knowledge Search Internal (SOP)</option>
                        <option value="Private LLM On-Premise Air-Gapped">Private LLM On-Premise (Tanpa Internet)</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--ms-text-heading)',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      Deskripsi Kebutuhan Khusus / Persyaratan Regulasi
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan data internal apa yang ingin diintegrasikan, perkiraan volume dokumen, atau persyaratan keamanan data khusus perusahaan Anda..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        border: '1px solid var(--ms-border)',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ minWidth: '260px', justifyContent: 'center' }}
                    >
                      <span>Jadwalkan Konsultasi Private AI</span>
                      <Icon name="arrow-right" size={16} />
                    </button>
                    <p style={{ fontSize: '12.5px', color: 'var(--ms-text-muted)', marginTop: '10px' }}>
                      Kerahasiaan data perusahaan Anda dijamin melalui Non-Disclosure Agreement (NDA).
                    </p>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* Section FAQ & Dukungan (Matching /goletin) */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Pertanyaan Umum</span>
              <h2 className="section-title">Pertanyaan Seputar Goletin AI</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi penting seputar keamanan data, kedaulatan server, dan penerapan AI untuk organisasi.
              </p>
            </div>
            <GoletinFaq items={aiFaqItems} countLabel="5 Tanya Jawab Goletin AI" />
          </section>

          {/* Bottom Enterprise CTA Banner (Matching /goletin line 162) */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Penerapan Skala Organisasi
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Mengadopsi Private AI untuk Organisasi Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultasikan integrasi model terdedikasi (VPC / On-Premise), keamanan data perbankan, dan lisensi volume bersama tim AI Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi AI Enterprise</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://ai.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Buka Portal Goletin AI</span>
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
