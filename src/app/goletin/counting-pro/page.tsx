'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function CountingProProductPage() {
  // Simulator State
  const [bookQty, setBookQty] = useState<number>(2500);
  const [physicalQty, setPhysicalQty] = useState<number>(2420);
  const [costPerUnit, setCostPerUnit] = useState<number>(150000); // Rp
  const [valuationMethod, setValuationMethod] = useState<'fifo' | 'average'>('fifo');
  const [nrvPerUnit, setNrvPerUnit] = useState<number>(140000); // Rp
  const [blindCountMode, setBlindCountMode] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    warehouseCount: '1 - 3 Gudang',
    notes: '',
  });

  // Calculations
  const varianceQty = physicalQty - bookQty; // Negative = shortage, Positive = surplus
  const variancePct = ((varianceQty / bookQty) * 100).toFixed(2);
  const totalBookValue = bookQty * costPerUnit;
  const totalPhysicalValue = physicalQty * costPerUnit;
  const varianceMonetary = varianceQty * costPerUnit;
  const isImpaired = nrvPerUnit < costPerUnit;
  const impairmentPerUnit = isImpaired ? costPerUnit - nrvPerUnit : 0;
  const totalImpairmentLoss = isImpaired ? physicalQty * impairmentPerUnit : 0;
  const netEndingInventory = totalPhysicalValue - totalImpairmentLoss;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const corePillars = [
    {
      icon: 'sampling',
      title: 'Stock Opname Mobile via Barcode, QR & RFID',
      desc: 'Petugas lapangan dan tim auditor dapat memindai SKU, batch number, serial item, dan lokasi rak gudang secara simultan lewat smartphone atau industrial scanner nirkabel.',
      badge: 'Mobile Stock Opname',
    },
    {
      icon: 'calculator',
      title: 'Kalkulasi Varians Fisik vs Buku Real-Time',
      desc: 'Deteksi otomatis selisih lebih (surplus) atau selisih kurang (shortage) seketika per bin location gudang, lengkap dengan analisis dampak deviasi terhadap nilai neraca.',
      badge: 'Variance Analysis',
    },
    {
      icon: 'analytics',
      title: 'Penilaian Persediaan Sesuai PSAK 14 & SAK EMKM',
      desc: 'Mendukung metode First-In First-Out (FIFO) dan Biaya Rata-Rata Tertimbang (Weighted Average) dengan pembaruan otomatis harga pokok penjualan (HPP) per batch mutasi.',
      badge: 'Standar PSAK 14',
    },
    {
      icon: 'security',
      title: 'Uji Penurunan Nilai Realisasi Bersih (NRV Test)',
      desc: 'Evaluasi barang usang (obsolete), slow-moving, atau rusak untuk memastikan nilai persediaan dicatat pada nilai yang lebih rendah antara biaya perolehan dan nilai realisasi neto.',
      badge: 'NRV Impairment Test',
    },
    {
      icon: 'docs',
      title: 'Kertas Kerja Audit Persediaan Standar ISA 501',
      desc: 'Hasilkan Berita Acara Pemeriksaan Fisik Persediaan dan KKP audit otomatis yang memenuhi seluruh parameter prosedur observasi fisik auditor independen sesuai ISA 501.',
      badge: 'Standar Audit ISA 501',
    },
    {
      icon: 'erp',
      title: 'Sinkronisasi Multi-Gudang & Posting Yaycount ERP',
      desc: 'Kelola ratusan gudang terdistribusi, transit cabang, dan konsinyasi dengan integrasi instan ayat jurnal penyesuaian stok langsung ke buku besar Yaycount ERP.',
      badge: 'Multi-Warehouse Sync',
    },
  ];

  const complianceComparison = [
    {
      feature: 'Metode Pengumpulan Data Lapangan',
      manual: 'Kertas tally sheet manual, rentan salah tulis dan butuh re-input ke spreadsheet',
      countingPro: 'Pemindaian barcode/QR digital via mobile app dengan validasi SKU seketika',
    },
    {
      feature: 'Pencegahan Manipulasi (Blind Count)',
      manual: 'Petugas melihat saldo buku sehingga rawan mencocok-cocokkan angka tanpa cek fisik',
      countingPro: 'Mode Blind Count menyembunyikan kuantitas buku demi objektivitas penghitungan murni',
    },
    {
      feature: 'Kecepatan Rekonsiliasi Varians',
      manual: '3 - 7 hari kerja setelah opname selesai untuk menyandingkan data spreadsheet',
      countingPro: 'Real-time (< 1 detik); varians dan persentase deviasi langsung terpetakan',
    },
    {
      feature: 'Uji Penurunan Nilai (PSAK 14 / NRV)',
      manual: 'Kalkulasi manual ad-hoc terpisah yang sering terlewat saat penutupan buku tahunan',
      countingPro: 'Uji Net Realizable Value terintegrasi dengan jurnal amortisasi impairment otomatis',
    },
    {
      feature: 'Dokumentasi KKP Auditor (ISA 501)',
      manual: 'Penyusunan berkas BA manual berceceran tanpa jejak foto fisik bukti item',
      countingPro: 'Berita Acara digital ber-timestamp, geotag koordinat gudang & lampiran foto kondisi fisik',
    },
  ];

  const countingFaqItems: FaqItem[] = [
    {
      id: 'cp-offline',
      q: 'Apakah pemindaian stock opname dapat berjalan jika gudang tidak memiliki koneksi internet?',
      a: 'Ya, 100% mendukung mode offline lokal. Data pemindaian barcode disimpan aman di memori terenkripsi perangkat smartphone/scanner dan disinkronkan otomatis saat petugas kembali tersambung ke jaringan Wi-Fi gudang.',
    },
    {
      id: 'cp-blind-count',
      q: 'Bagaimana cara kerja fitur Blind Count untuk menjamin independensi auditor?',
      a: 'Saat mode Blind Count diaktifkan oleh manajer atau auditor eksternal, kuantitas saldo buku sengaja disembunyikan dari layar aplikasi pemindai. Petugas lapangan diwajibkan menghitung dan memindai fisik barang secara riil tanpa asumsi data buku.',
    },
    {
      id: 'cp-approval-workflow',
      q: 'Bagaimana prosedur persetujuan jika ditemukan selisih barang yang material?',
      a: 'Counting Pro menyediakan alur persetujuan bertingkat (approval workflow). Jurnal penyesuaian selisih stok hanya dapat diposting ke buku besar setelah mendapatkan otorisasi bertingkat dari Kepala Gudang, Controller, dan Direktur Keuangan.',
    },
    {
      id: 'cp-hardware',
      q: 'Perangkat keras pemindai apa saja yang kompatibel dengan Counting Pro?',
      a: 'Sistem mendukung kamera smartphone biasa (Android & iOS), pemindai barcode ring/gun Bluetooth nirkabel, hingga mobile computer industri bersertifikasi rugged (seperti Zebra TC-series, Honeywell ScanPal, dan Datalogic).',
    },
    {
      id: 'cp-sak-emkm',
      q: 'Apakah Counting Pro juga mencakup modul pembukuan umum untuk UMKM sesuai SAK EMKM?',
      a: 'Ya. Selain manajemen persediaan dan stock opname, Counting Pro dilengkapi buku besar, pencatatan transaksi kas & bank, neraca saldo, serta laporan laba rugi sederhana yang dirancang khusus mematuhi Standar Akuntansi Keuangan Entitas Mikro, Kecil, dan Menengah (SAK EMKM).',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner (Standardized 520px, Matching /goletin/ai) */}
          <div className="ms-hero-wrapper goletin-counting-hero-banner">
            <div className="goletin-counting-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Sistem Pembukuan, Persediaan & Stock Opname SAK EMKM</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Counting Pro: Stock Opname Digital & Akurasi Persediaan
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Modernisasi audit fisik persediaan gudang dengan sistem pemindaian barcode digital. Rekonsiliasi selisih stok secara real-time, evaluasi penurunan nilai PSAK 14, dan terbitkan Kertas Kerja Pemeriksaan sesuai standar ISA 501.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka Counting Pro Web</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <a href="#simulator-opname" className="btn-secondary">
                    <span>Coba Simulator Opname</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Standar Audit ISA 501</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kepatuhan PSAK 14 & SAK EMKM</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Blind Stock Count Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Stock Opname & Valuation Simulator */}
          <section id="simulator-opname" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Simulator Interaktif Stock Opname</span>
              <h2 className="section-title">Kalkulasi Varians Fisik vs Buku & Uji Penurunan Nilai PSAK 14</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Simulasikan penghitungan stock opname gudang, identifikasi selisih kuantitas dan nilai moneter, serta tinjau usulan ayat jurnal penyesuaian akuntansi otomatis.
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
                {/* Control Inputs */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '20px' }}>
                    Parameter Pengujian Stock Opname
                  </h3>

                  {/* Book Qty */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Kuantitas Saldo Buku (Book Balance)
                      </label>
                      <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                        {bookQty.toLocaleString('id-ID')} unit
                      </span>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={10000}
                      step={50}
                      value={bookQty}
                      onChange={(e) => setBookQty(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-text)' }}
                    />
                  </div>

                  {/* Physical Count */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Hasil Penghitungan Fisik (Scan Barcode)
                      </label>
                      <span style={{ fontSize: '13.5px', fontWeight: 700, color: varianceQty < 0 ? '#DC2626' : varianceQty > 0 ? '#2563EB' : '#16A34A' }}>
                        {physicalQty.toLocaleString('id-ID')} unit
                      </span>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={10000}
                      step={50}
                      value={physicalQty}
                      onChange={(e) => setPhysicalQty(Number(e.target.value))}
                      style={{ width: '100%', accentColor: varianceQty < 0 ? '#DC2626' : 'var(--ms-blue-text)' }}
                    />
                  </div>

                  {/* Cost Per Unit */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Harga Perolehan Rata-Rata per Unit
                      </label>
                      <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                        Rp{costPerUnit.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={1000000}
                      step={10000}
                      value={costPerUnit}
                      onChange={(e) => setCostPerUnit(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-text)' }}
                    />
                  </div>

                  {/* NRV per Unit */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Nilai Realisasi Bersih (NRV per Unit)
                      </label>
                      <span style={{ fontSize: '13.5px', fontWeight: 700, color: isImpaired ? '#DC2626' : '#16A34A' }}>
                        Rp{nrvPerUnit.toLocaleString('id-ID')} {isImpaired && '(Impaired)'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={1000000}
                      step={10000}
                      value={nrvPerUnit}
                      onChange={(e) => setNrvPerUnit(Number(e.target.value))}
                      style={{ width: '100%', accentColor: isImpaired ? '#DC2626' : 'var(--ms-blue-text)' }}
                    />
                  </div>

                  {/* Valuation & Blind Count Toggles */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-text-muted)', display: 'block', marginBottom: '6px' }}>
                        METODE PENILAIAN
                      </label>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button
                          type="button"
                          onClick={() => setValuationMethod('fifo')}
                          style={{
                            flex: 1,
                            padding: '8px 12px',
                            borderRadius: '6px',
                            fontSize: '12.5px',
                            fontWeight: 600,
                            border: valuationMethod === 'fifo' ? '1px solid var(--ms-blue-text)' : '1px solid var(--ms-border)',
                            backgroundColor: valuationMethod === 'fifo' ? 'var(--ms-blue-light)' : '#FFFFFF',
                            color: valuationMethod === 'fifo' ? 'var(--ms-blue-text)' : 'var(--ms-text-body)',
                            cursor: 'pointer',
                          }}
                        >
                          FIFO
                        </button>
                        <button
                          type="button"
                          onClick={() => setValuationMethod('average')}
                          style={{
                            flex: 1,
                            padding: '8px 12px',
                            borderRadius: '6px',
                            fontSize: '12.5px',
                            fontWeight: 600,
                            border: valuationMethod === 'average' ? '1px solid var(--ms-blue-text)' : '1px solid var(--ms-border)',
                            backgroundColor: valuationMethod === 'average' ? 'var(--ms-blue-light)' : '#FFFFFF',
                            color: valuationMethod === 'average' ? 'var(--ms-blue-text)' : 'var(--ms-text-body)',
                            cursor: 'pointer',
                          }}
                        >
                          Rata-Rata
                        </button>
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-text-muted)', display: 'block', marginBottom: '6px' }}>
                        MODE AUDIT INDEPENDEN
                      </label>
                      <button
                        type="button"
                        onClick={() => setBlindCountMode(!blindCountMode)}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          fontSize: '12.5px',
                          fontWeight: 600,
                          border: blindCountMode ? '1px solid #16A34A' : '1px solid var(--ms-border)',
                          backgroundColor: blindCountMode ? '#DCFCE7' : '#FFFFFF',
                          color: blindCountMode ? '#16A34A' : 'var(--ms-text-muted)',
                          cursor: 'pointer',
                        }}
                      >
                        {blindCountMode ? '✓ Blind Count Aktif' : 'Standar Terbuka'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Real-Time Audit Dashboard Output */}
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
                        HASIL ANALISIS REKONSILIASI
                      </span>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '4px 8px',
                          borderRadius: '4px',
                          backgroundColor: varianceQty === 0 ? '#DCFCE7' : varianceQty < 0 ? '#FEE2E2' : '#DBEAFE',
                          color: varianceQty === 0 ? '#16A34A' : varianceQty < 0 ? '#DC2626' : '#2563EB',
                        }}
                      >
                        {varianceQty === 0 ? 'MATCH 100%' : varianceQty < 0 ? `SHORTAGE (${variancePct}%)` : `SURPLUS (+${variancePct}%)`}
                      </span>
                    </div>

                    {/* Metric Cards Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '14px', borderRadius: '6px', border: '1px solid var(--ms-border)' }}>
                        <div style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', marginBottom: '4px' }}>Selisih Unit Fisik</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: varianceQty < 0 ? '#DC2626' : varianceQty > 0 ? '#2563EB' : '#16A34A' }}>
                          {varianceQty > 0 ? `+${varianceQty}` : varianceQty} unit
                        </div>
                      </div>

                      <div style={{ backgroundColor: '#FFFFFF', padding: '14px', borderRadius: '6px', border: '1px solid var(--ms-border)' }}>
                        <div style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', marginBottom: '4px' }}>Dampak Finansial Varians</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: varianceMonetary < 0 ? '#DC2626' : varianceMonetary > 0 ? '#2563EB' : '#16A34A' }}>
                          Rp{Math.abs(varianceMonetary).toLocaleString('id-ID')}
                        </div>
                      </div>

                      <div style={{ backgroundColor: '#FFFFFF', padding: '14px', borderRadius: '6px', border: '1px solid var(--ms-border)' }}>
                        <div style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', marginBottom: '4px' }}>Cadangan Impairment (PSAK 14)</div>
                        <div style={{ fontSize: '18px', fontWeight: 700, color: totalImpairmentLoss > 0 ? '#DC2626' : '#16A34A' }}>
                          Rp{totalImpairmentLoss.toLocaleString('id-ID')}
                        </div>
                      </div>

                      <div style={{ backgroundColor: '#FFFFFF', padding: '14px', borderRadius: '6px', border: '1px solid var(--ms-border)' }}>
                        <div style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', marginBottom: '4px' }}>Nilai Akhir Persediaan</div>
                        <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                          Rp{netEndingInventory.toLocaleString('id-ID')}
                        </div>
                      </div>
                    </div>

                    {/* Automatic Journal Entry Recommendation */}
                    <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--ms-border)', borderRadius: '6px', padding: '14px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                        Usulan Ayat Jurnal Penyesuaian (Auto-Journal):
                      </div>
                      <div style={{ fontSize: '12.5px', fontFamily: 'monospace', lineHeight: '20px', color: '#334155' }}>
                        {varianceQty < 0 ? (
                          <>
                            <div>(D) Beban Selisih Stock Opname &nbsp;&nbsp;&nbsp;&nbsp; Rp{Math.abs(varianceMonetary).toLocaleString('id-ID')}</div>
                            <div style={{ paddingLeft: '24px' }}>
                              (K) Persediaan Barang Dagang &nbsp;&nbsp;&nbsp;&nbsp; Rp{Math.abs(varianceMonetary).toLocaleString('id-ID')}
                            </div>
                          </>
                        ) : varianceQty > 0 ? (
                          <>
                            <div>(D) Persediaan Barang Dagang &nbsp;&nbsp;&nbsp;&nbsp; Rp{varianceMonetary.toLocaleString('id-ID')}</div>
                            <div style={{ paddingLeft: '24px' }}>
                              (K) Pendapatan Selisih Stock Opname &nbsp;&nbsp;&nbsp;&nbsp; Rp{varianceMonetary.toLocaleString('id-ID')}
                            </div>
                          </>
                        ) : (
                          <div style={{ color: '#16A34A' }}>✓ Tidak diperlukan ayat jurnal penyesuaian (Fisik = Buku).</div>
                        )}
                        {totalImpairmentLoss > 0 && (
                          <div style={{ marginTop: '6px', borderTop: '1px dashed #E2E8F0', paddingTop: '6px' }}>
                            <div>(D) Beban Penurunan Nilai Persediaan &nbsp;&nbsp; Rp{totalImpairmentLoss.toLocaleString('id-ID')}</div>
                            <div style={{ paddingLeft: '24px' }}>
                              (K) Cadangan Penurunan Nilai (NRV) &nbsp;&nbsp;&nbsp;&nbsp; Rp{totalImpairmentLoss.toLocaleString('id-ID')}
                            </div>
                          </div>
                        )}
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
                      <span>Konsultasi KAP</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6 Core Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Kemampuan Unggulan Counting Pro</span>
              <h2 className="section-title">Akurasi Saldo Persediaan Tanpa Deviasi Material</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Tingkatkan kepercayaan auditor eksternal, perbankan, dan dewan direksi terhadap integritas saldo persediaan di neraca keuangan perusahaan.
              </p>
            </div>

            <div className="standards-grid">
              {corePillars.map((pillar, idx) => (
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
              <span className="section-eyebrow">Perbandingan Solusi</span>
              <h2 className="section-title">Mengapa Stock Opname Konvensional Perlu Diganti?</h2>
              <p className="section-lead" style={{ maxWidth: '760px', margin: '0 auto' }}>
                Bandingkan kerentanan pencatatan opname manual di kertas/spreadsheet dengan otomatisasi digital berstandar audit ISA 501.
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
                        Parameter Audit / Pengujian
                      </th>
                      <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                        Metode Manual & Spreadsheet
                      </th>
                      <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                        Counting Pro Otomatis
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
                          {row.countingPro}
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
                <span className="section-eyebrow">Demo Operasional Lapangan</span>
                <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--ms-text-heading)', marginTop: '8px', marginBottom: '10px' }}>
                  Jadwalkan Demo Stock Opname untuk Tim Gudang Anda
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-body)', margin: 0 }}>
                  Tim konsultan Karsasoft akan mendemonstrasikan pengujian pemindaian barcode mobile langsung di lokasi gudang atau melalui sesi live Zoom interaktif.
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
                    Permintaan Demo Berhasil Dikirim
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#15803D', marginBottom: '16px' }}>
                    Terima kasih, {formData.name || 'Bapak/Ibu'}. Solution engineer kami akan menghubungi Anda melalui email{' '}
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
                        placeholder="Contoh: Budi Santoso"
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
                        placeholder="budi@perusahaan.co.id"
                        className="mitra-form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama Perusahaan / KAP *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="PT Logistik Jaya / KAP Santoso"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Jumlah Lokasi Gudang
                      </label>
                      <select
                        value={formData.warehouseCount}
                        onChange={(e) => setFormData({ ...formData, warehouseCount: e.target.value })}
                        className="mitra-form-input"
                      >
                        <option value="1 - 3 Gudang">1 - 3 Gudang</option>
                        <option value="4 - 10 Gudang">4 - 10 Gudang</option>
                        <option value="Lebih dari 10 Gudang (Multi-Cabang)">&gt; 10 Gudang (Multi-Cabang)</option>
                        <option value="Auditor Independen (KAP)">Auditor Independen (KAP)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Kebutuhan Spesifik / Jenis Komoditas Barang
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Contoh: Butuh integrasi barcode scanner Zebra untuk gudang farmasi dengan kontrol expired date dan lot number."
                      className="mitra-form-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14.5px' }}
                  >
                    <span>Ajukan Jadwal Demo Lapangan</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Section FAQ & Dukungan */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Tanya Jawab</span>
              <h2 className="section-title">Pertanyaan Seputar Counting Pro</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar integrasi perangkat barcode, keandalan mode offline di dalam gudang, dan standar akuntansi persediaan.
              </p>
            </div>
            <GoletinFaq items={countingFaqItems} countLabel="5 Tanya Jawab Counting Pro" />
          </section>

          {/* Bottom Enterprise CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Akurasi Persediaan Andal
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Menghilangkan Selisih Stok dan Kerugian Material?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultasikan penerapan Counting Pro untuk gudang manufaktur, retail, logistik, atau kebutuhan perikatan audit KAP bersama tim teknis Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Teknis Gudang</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Buka Counting Pro Web</span>
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
