'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function FixedAssetProPage() {
  const assetPillars = [
    {
      icon: 'calculator',
      title: 'Penyusutan Ganda (Fiskal vs Komersial)',
      desc: 'Hitung otomatis jadwal amortisasi komersial (PSAK 16) dan depresiasi fiskal menurut UU PPh Pasal 11 (Kelompok I s.d. IV dan Bangunan) dengan rekonsiliasi beda waktu otomatis.',
      badge: 'PSAK 16 & PPh Ps. 11',
    },
    {
      icon: 'search',
      title: 'Labeling Barcode & QR Code Mobile Audit',
      desc: 'Cetak stiker aset dengan kode unik QR/Barcode. Tim auditor lapangan dapat memindai via smartphone untuk memverifikasi lokasi fisik, kondisi unit, dan penanggung jawab.',
      badge: 'QR Code Tracking',
    },
    {
      icon: 'erp',
      title: 'Posting Jurnal Depresiasi Otomatis',
      desc: 'Sinkronisasi instan ke modul buku besar Yaycount ERP dan sistem akuntansi Goletin untuk menjurnal beban penyusutan dan akumulasi depresiasi bulanan secara otomatis.',
      badge: 'Auto Journal Posting',
    },
    {
      icon: 'security',
      title: 'Audit Trail Mutasi & Transfer Antar Cabang',
      desc: 'Pantau riwayat perpindahan aset antar departemen, mutasi ke kantor cabang, serta berita acara serah terima digital lengkap dengan tanda tangan elektronik penanggung jawab.',
      badge: 'Multi-Location Audit',
    },
    {
      icon: 'analytics',
      title: 'Manajemen Pemeliharaan & Asuransi Aset',
      desc: 'Catat riwayat perbaikan berkala, pengingat jatuh tempo polis asuransi aset, serta kapitalisasi biaya renovasi yang memperpanjang masa manfaat aset.',
      badge: 'Maintenance Log',
    },
    {
      icon: 'docs',
      title: 'Pelepasan Aset & Kalkulasi Laba/Rugi Penjualan',
      desc: 'Kelola proses disposal atau write-off aset rusak dengan penghitungan otomatis sisa nilai buku, nilai residu, serta laba/rugi pelepasan untuk pelaporan SPT Badan.',
      badge: 'Disposal & Write-Off',
    },
  ];

  const assetFaqItems: FaqItem[] = [
    {
      id: 'asset-depreciation-methods',
      q: 'Metode penyusutan apa saja yang didukung oleh Fixed Asset Pro?',
      a: 'Sistem mendukung metode Garis Lurus (Straight-Line), Saldo Menurun Ganda (Double Declining Balance), dan Jumlah Angka Tahun (Sum-of-the-Years-Digits) untuk komersial, serta tarif baku fiskal PMK untuk pelaporan pajak.',
    },
    {
      id: 'asset-scale',
      q: 'Berapa kapasitas volume aset yang dapat dikelola dalam satu database organisasi?',
      a: 'Fixed Asset Pro dirancang untuk menangani mulai dari puluhan inventaris kantor UKM hingga ratusan ribu aset tersebar pada holding korporasi multi-cabang.',
    },
    {
      id: 'asset-barcode-scanner',
      q: 'Apakah memerlukan alat pemindai barcode khusus untuk stock opname aset?',
      a: 'Tidak harus. Petugas dapat menggunakan kamera smartphone Android atau iOS via web app Goletin untuk memindai label QR code aset saat pelaksanaan stock opname fisik tahunan.',
    },
    {
      id: 'asset-integration-tax',
      q: 'Bagaimana integrasi Fixed Asset Pro dengan pelaporan SPT Tahunan PPh Badan?',
      a: 'Sistem menyediakan tabel lampiran 1A (Daftar Penyusutan dan Amortisasi Fiskal) yang diformat persis sesuai formulir SPT 1771 Lampiran Khusus 1A Direktorat Jenderal Pajak.',
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
                <span className="section-eyebrow">Manajemen Aset & Kepatuhan Fiskal</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Fixed Asset Pro: Pengelolaan Aset Tetap & Depresiasi PSAK 16
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Otomatisasi siklus hidup aset tetap perusahaan — dari pengadaan, penomoran kode batang QR, kalkulasi penyusutan ganda fiskal & komersial, hingga revaluasi dan pelepasan aset dengan audit trail transparan.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Coba Fixed Asset Pro</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <Link href="/kontak" className="btn-secondary">
                    <span>Minta Demo Sistem</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Standar PSAK 16</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>PPh Pasal 11 DJP</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>QR Code Stock Opname</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">2-in-1</div>
              <div className="goletin-stat-title">Depresiasi Komersial & Fiskal</div>
              <p className="goletin-stat-sub">Rekonsiliasi beda waktu otomatis untuk SPT</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Standar PSAK 16</div>
              <p className="goletin-stat-sub">Kepatuhan penyajian nilai buku di neraca audit</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">QR Scan</div>
              <div className="goletin-stat-title">Audit Lapangan Mobile</div>
              <p className="goletin-stat-sub">Verifikasi aset fisik via kamera ponsel</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">Multi-Unit</div>
              <div className="goletin-stat-title">Struktur Holding & Cabang</div>
              <p className="goletin-stat-sub">Pengelompokan per lokasi, divisi, dan PIC</p>
            </div>
          </div>

          {/* 6 Key Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Kapabilitas Fixed Asset Pro</span>
              <h2 className="section-title">Solusi Komprehensif Siklus Hidup Aset Tetap</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Singkirkan spreadsheet manual yang rentan salah rumus saat menghitung depresiasi aset korporasi bernilai miliaran rupiah.
              </p>
            </div>

            <div className="standards-grid">
              {assetPillars.map((pillar, idx) => (
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
              <h2 className="section-title">Pertanyaan Seputar Fixed Asset Pro</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar metode depresiasi, integrasi ERP, dan stock opname aset fisik.
              </p>
            </div>
            <GoletinFaq items={assetFaqItems} countLabel="4 Tanya Jawab Fixed Asset Pro" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Otomatisasi Pencatatan Aset
              </span>
              <h2 className="goletin-bottom-cta-title">
                Tertibkan Administrasi Aset Tetap Perusahaan Anda
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultasikan kebutuhan pencatatan inventaris, migrasi data aset, dan integrasi akuntansi bersama konsultan Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Implementasi Aset</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Coba Fixed Asset Pro</span>
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
