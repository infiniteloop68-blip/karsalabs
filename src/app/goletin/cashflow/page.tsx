'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function CashflowAIEnginePage() {
  const cashflowPillars = [
    {
      icon: 'analytics',
      title: 'Prediksi Arus Kas Multi-Horizon (30 - 90 Hari)',
      desc: 'Model kecerdasan buatan terlatih memproyeksikan saldo kas harian, piutang yang akan cair, dan kewajiban jatuh tempo berdasarkan riwayat historis siklus penagihan pelanggan.',
      badge: 'Proyeksi AI 90 Hari',
    },
    {
      icon: 'calculator',
      title: 'Standar Pelaporan PSAK 2 (Langsung & Tidak Langsung)',
      desc: 'Menghasilkan format Laporan Arus Kas resmi sesuai PSAK 2 dengan pemisahan rigid atas Arus Kas Operasi, Investasi, dan Pendanaan secara otomatis dari buku besar.',
      badge: 'Standar PSAK 2',
    },
    {
      icon: 'security',
      title: 'Deteksi Dini Defisit Likuiditas (Shortfall Alert)',
      desc: 'Sistem memberi peringatan otomatis jika saldo kas diproyeksikan berada di bawah batas modal kerja minimum (buffer cash) dalam 14 hingga 30 hari ke depan.',
      badge: 'Early Warning Alert',
    },
    {
      icon: 'search',
      title: 'Uji Stres Skenario Likuiditas (Stress Testing)',
      desc: 'Simulasikan dampak keterlambatan pembayaran debitur utama, penurunan omzet 20%, atau lonjakan biaya tak terduga terhadap daya tahan likuiditas perusahaan.',
      badge: 'Scenario Modeling',
    },
    {
      icon: 'erp',
      title: 'Auto-Matching Rekonsiliasi Bank Multi-Rekening',
      desc: 'Hubungkan rekening koran bank korporasi untuk pencocokan otomatis transaksi masuk dan keluar dengan tingkat keberhasilan auto-reconciliation di atas 95%.',
      badge: 'Auto Bank Recon',
    },
    {
      icon: 'shield',
      title: 'Deteksi Transaksi Pengeluaran Anomali',
      desc: 'Algoritma machine learning mendeteksi pembayaran berulang yang mencurigakan, transfer di luar jam kerja, atau lonjakan nominal yang menyimpang dari tren historis.',
      badge: 'Fraud Anomaly Check',
    },
  ];

  const cashflowFaqItems: FaqItem[] = [
    {
      id: 'cashflow-accuracy',
      q: 'Bagaimana Cashflow AI Engine memprediksi tanggal pencairan piutang pelanggan?',
      a: 'Sistem mempelajari perilaku historis pembayaran masing-masing pelanggan (Days Sales Outstanding / DSO individual), bukan sekadar mengacu pada tanggal jatuh tempo faktur, sehingga menghasilkan proyeksi kas masuk yang jauh lebih realistis.',
    },
    {
      id: 'cashflow-bank-integration',
      q: 'Apakah sistem mendukung koneksi rekening bank korporasi di Indonesia?',
      a: 'Ya. Sistem mendukung impor rekening koran format MT940, CSV, dan Excel dari seluruh bank di Indonesia (BCA, Mandiri, BNI, BRI, CIMB Niaga, dll) serta opsi integrasi langsung Open API Banking.',
    },
    {
      id: 'cashflow-data-privacy',
      q: 'Apakah data saldo dan mutasi kas perusahaan aman dari kebocoran?',
      a: 'Sangat aman. Seluruh data transaksi kas diisolasi dalam tenant database terenkripsi AES-256 dan tidak pernah digunakan untuk melatih model AI publik manapun sesuai garansi Zero Data Training kami.',
    },
    {
      id: 'cashflow-erp-sync',
      q: 'Dapatkah Cashflow AI Engine terhubung ke sistem ERP selain Yaycount?',
      a: 'Tentu. Tersedia REST API terstandarisasi untuk mengimpor data invoice piutang, tagihan pemasok, dan jurnal kas dari SAP, Oracle NetSuite, atau database SQL internal perusahaan.',
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
                <span className="section-eyebrow">Intelijen Likuiditas & Kas Korporasi</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Cashflow AI: Prediksi Likuiditas & Otomatisasi Arus Kas
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Engine pemodelan arus kas berbasis AI yang mengubah data historis akuntansi menjadi proyeksi likuiditas harian presisi. Deteksi risiko shortfall lebih awal, jalankan stress-testing skenario, dan optimalkan modal kerja organisasi Anda.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Coba Cashflow AI Engine</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <Link href="/kontak" className="btn-secondary">
                    <span>Konsultasi Likuiditas</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Standar PSAK 2</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Proyeksi Kas 90 Hari</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Auto-Recon Bank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">94.8%</div>
              <div className="goletin-stat-title">Akurasi Prediksi Arus Kas</div>
              <p className="goletin-stat-sub">Model AI adaptif berdasarkan DSO riil pelanggan</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">90 Hari</div>
              <div className="goletin-stat-title">Horizon Proyeksi Kas Harian</div>
              <p className="goletin-stat-sub">Visibilitas saldo kas mendatang untuk direksi</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">PSAK 2</div>
              <div className="goletin-stat-title">Format Standar Akuntansi</div>
              <p className="goletin-stat-sub">Metode langsung & tidak langsung otomatis</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">&gt;95%</div>
              <div className="goletin-stat-title">Auto-Reconcile Matching</div>
              <p className="goletin-stat-sub">Pencocokan rekening koran bank otomatis</p>
            </div>
          </div>

          {/* 6 Key Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Fitur Unggulan Cashflow AI</span>
              <h2 className="section-title">Kelola Kesehatan Likuiditas dengan Presisi Data</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Dari rekonsiliasi mutasi rekening hingga mitigasi risiko gagal bayar pemasok, seluruh analisis kas dikendalikan dalam satu dashboard terpadu.
              </p>
            </div>

            <div className="standards-grid">
              {cashflowPillars.map((pillar, idx) => (
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
              <h2 className="section-title">Pertanyaan Seputar Cashflow AI Engine</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar akurasi model peramalan kas, integrasi perbankan, dan format laporan.
              </p>
            </div>
            <GoletinFaq items={cashflowFaqItems} countLabel="4 Tanya Jawab Cashflow AI" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Pengambilan Keputusan Finansial Cepat
              </span>
              <h2 className="goletin-bottom-cta-title">
                Hindari Krisis Likuiditas dengan Cashflow AI
              </h2>
              <p className="goletin-bottom-cta-desc">
                Hubungkan data keuangan perusahaan Anda dan dapatkan analisis proyeksi kas akurat dalam hitungan menit bersama konsultan finansial Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Likuiditas AI</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Coba Cashflow AI Engine</span>
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
