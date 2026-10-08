'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function SintesisDokumenFinansialPage() {
  const synthesisPillars = [
    {
      icon: 'docs',
      title: 'Pemrosesan Dokumen Tebal (Hingga 500+ Halaman)',
      desc: 'Didukung jendela konteks token ekstra-lebar (128k+ tokens), mampu membaca prospektus penawaran umum (IPO), laporan keuangan tahunan auditan, dan perjanjian kredit sindikasi secara utuh.',
      badge: '128k Token Context',
    },
    {
      icon: 'analytics',
      title: 'Ekstraksi Tabel Finansial & Rasio Otomatis',
      desc: 'Mengenali format tabel neraca multi-kolom yang rumit, menghitung rasio likuiditas (Current Ratio), solvabilitas (DER), profitabilitas (EBITDA margin), dan tren pertumbuhan tahunan (YoY).',
      badge: 'Auto Table Extraction',
    },
    {
      icon: 'search',
      title: 'Telaah Catatan Kaki (CALK) & Risiko Kontinjensi',
      desc: 'Menemukan komitmen sewa tersembunyi (PSAK 73), sengketa hukum pajak yang tertulis di CALK, kewajiban imbalan kerja, dan restrukturisasi utang dalam hitungan detik.',
      badge: 'CALK Deep-Scan',
    },
    {
      icon: 'security',
      title: 'Jaminan Zero Training on Confidential Data',
      desc: 'Data laporan keuangan non-publik dan dokumen rahasia perusahaan Anda dilindungi NDA hukum; tidak pernah digunakan untuk melatih model publik atau disimpan pihak ketiga.',
      badge: 'Zero Data Training',
    },
    {
      icon: 'calculator',
      title: 'Uji Kepatuhan Kovenan Kredit Perbankan',
      desc: 'Mengevaluasi klausul rasio keuangan yang disyaratkan oleh sindikasi bank pemberi pinjaman (misal batas Debt-to-Equity < 2.0x) untuk mendeteksi potensi breach of covenant lebih dini.',
      badge: 'Covenant Compliance',
    },
    {
      icon: 'ai',
      title: 'Sitasi Halaman & Klausul Transparan (Audit Trail)',
      desc: 'Setiap ringkasan dan angka analitik yang dihasilkan dilengkapi nomor halaman dan kutipan langsung klausul dokumen sumber sehingga mudah diverifikasi silang oleh tim analis.',
      badge: 'Precise Page Citation',
    },
  ];

  const synthesisFaqItems: FaqItem[] = [
    {
      id: 'synthesis-formats',
      q: 'Format file apa saja yang dapat diunggah untuk sintesis dokumen?',
      a: 'Goletin AI mendukung dokumen berformat PDF (baik teks maupun pindaian hasil scan dengan teknologi OCR internal), Microsoft Word (.docx), spreadsheet Excel (.xlsx), dan berkas teks plain.',
    },
    {
      id: 'synthesis-languages',
      q: 'Apakah sistem memahami dokumen berbahasa Indonesia dan istilah akuntansi lokal?',
      a: 'Ya. Model dioptimalkan secara mendalam memahami terminologi standar akuntansi Indonesia (PSAK/SAK ETAP), perpajakan DJP (PPh/PPN), peraturan OJK, dan hukum bisnis dalam Bahasa Indonesia maupun Inggris.',
    },
    {
      id: 'synthesis-security',
      q: 'Bagaimana keamanan dokumen rahasia saat proses pemindaian AI berlangsung?',
      a: 'Proses enkripsi berlaku end-to-end dengan TLS 1.3 dan AES-256. Dokumen diproses dalam memori RAM terisolasi pada server domestik Tier-4 Indonesia dan dapat dihapus seketika setelah analisis selesai.',
    },
    {
      id: 'synthesis-export',
      q: 'Dapatkah hasil ringkasan diekspor langsung ke laporan Word atau Excel?',
      a: 'Tentu. Anda dapat mengekspor ringkasan eksekutif, tabel perbandingan rasio, dan matriks risiko langsung ke format Goletin Docs, Sheets, atau berkas unduhan Microsoft Office.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner */}
          <div className="ms-hero-wrapper goletin-hero-banner">
            <div className="goletin-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Analisis Dokumen Finansial Cerdas</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Sintesis Dokumen Finansial: Ekstraksi Cepat & Akurat
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Ubah ratusan halaman laporan keuangan audit, prospektus IPO, dan perjanjian hukum menjadi ringkasan eksekutif berbobot analitik tinggi dalam hitungan detik dengan sitasi klausul sumber yang transparan.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://ai.goletin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Coba Sintesis di Goletin AI</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <Link href="/goletin/ai" className="btn-secondary">
                    <span>Lihat Demo Interaktif</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>128k Token Context</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Zero Data Training</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Sitasi Halaman Akurat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">500+</div>
              <div className="goletin-stat-title">Halaman Diproses Sekaligus</div>
              <p className="goletin-stat-sub">Sintesis prospektus dan laporan audit tebal</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">&lt; 10 Detik</div>
              <div className="goletin-stat-title">Waktu Pembuatan Ringkasan</div>
              <p className="goletin-stat-sub">Ekstraksi poin kunci instan untuk analis investasi</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Transparansi Sitasi Sumber</div>
              <p className="goletin-stat-sub">Tautan langsung ke nomor halaman & ayat dokumen</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">0%</div>
              <div className="goletin-stat-title">Pelatihan Model Publik</div>
              <p className="goletin-stat-sub">Data rahasia tidak pernah bocor ke model umum</p>
            </div>
          </div>

          {/* 6 Key Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Kemampuan Ekstraksi Dokumen</span>
              <h2 className="section-title">Dari Dokumen Statis Menjadi Wawasan Strategis</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Bantu tim riset investasi, risk management, dan legal korporasi menuntaskan due diligence dengan kecepatan berlipat ganda.
              </p>
            </div>

            <div className="standards-grid">
              {synthesisPillars.map((pillar, idx) => (
                <div key={idx} className="standard-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '14px' }}>
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

          {/* FAQ */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Pertanyaan Umum</span>
              <h2 className="section-title">Pertanyaan Seputar Sintesis Dokumen Finansial</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar format berkas, akurasi penalaran, dan perlindungan kerahasiaan.
              </p>
            </div>
            <GoletinFaq items={synthesisFaqItems} countLabel="4 Tanya Jawab Sintesis Dokumen" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Due Diligence Finansial Cepat
              </span>
              <h2 className="goletin-bottom-cta-title">
                Percepat Analisis Dokumen Finansial Perusahaan Anda
              </h2>
              <p className="goletin-bottom-cta-desc">
                Uji langsung performa sintesis dokumen cerdas Goletin AI pada portal resmi atau konsultasikan deployment internal bersama tim Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a
                  href="https://ai.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Coba Goletin AI Sekarang</span>
                  <Icon name="external-link" size={15} />
                </a>
                <Link href="/kontak" className="btn-secondary">
                  <span>Konsultasi Enterprise AI</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
