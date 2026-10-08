'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function LeaseEngineProductPage() {
  const [annualPayment, setAnnualPayment] = useState<number>(350000000); // Rp350 Juta per tahun
  const [leaseYears, setLeaseYears] = useState<number>(5);
  const [ibrRate, setIbrRate] = useState<number>(7.5); // 7.5% per tahun
  const [paymentTiming, setPaymentTiming] = useState<'advance' | 'arrears'>('advance');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    activeLeaseCount: '10 - 50 Kontrak Sewa',
    notes: '',
  });

  // Calculate PV of Lease Payments (Present Value Annuity for PSAK 73 / IFRS 16)
  const r = ibrRate / 100;
  let pv = 0;
  if (paymentTiming === 'advance') {
    // Payment at beginning of year
    for (let t = 0; t < leaseYears; t++) {
      pv += annualPayment / Math.pow(1 + r, t);
    }
  } else {
    // Payment at end of year
    for (let t = 1; t <= leaseYears; t++) {
      pv += annualPayment / Math.pow(1 + r, t);
    }
  }

  // Right-of-Use (RoU) Asset initial value = PV of lease liability (assuming 0 initial direct costs)
  const initialRouAsset = pv;
  const annualDepreciation = initialRouAsset / leaseYears;

  // Year 1 interest expense calculation
  const initialLiabilityAfterFirstPay =
    paymentTiming === 'advance' ? initialRouAsset - annualPayment : initialRouAsset;
  const year1Interest = initialLiabilityAfterFirstPay * r;
  const year1TotalExpense = annualDepreciation + year1Interest;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const coreModules = [
    {
      icon: 'calculator',
      title: 'Kalkulasi Nilai Kini (PV) & Liabilitas Otomatis',
      desc: 'Penghitungan otomatis Nilai Kini arus kas sewa masa depan berdasarkan Incremental Borrowing Rate (IBR) korporasi untuk skema pembayaran di awal (advance) maupun akhir periode (arrears).',
      badge: 'PSAK 73 / IFRS 16',
    },
    {
      icon: 'lease',
      title: 'Pemisahan RoU Asset & Amortisasi Bunga Efektif (EIR)',
      desc: 'Menyusun jadwal amortisasi liabilitas sewa suku bunga efektif dan depresiasi garis lurus Aset Hak-Guna (Right-of-Use Asset) per kontrak hingga jatuh tempo secara otomatis.',
      badge: 'Amortisasi Otomatis',
    },
    {
      icon: 'docs',
      title: 'Manajemen Modifikasi & Remeasurement Kontrak',
      desc: 'Otomatisasi rekalkulasi neraca saat terjadi perpanjangan masa sewa, perubahan tarif sewa berkala, atau terminasi dini dengan penyesuaian nilai tercatat aset seketika.',
      badge: 'Remeasurement',
    },
    {
      icon: 'compliance',
      title: 'Pengungkapan Catatan Laporan Keuangan (CALK)',
      desc: 'Menghasilkan tabel analisis jatuh tempo liabilitas (Maturity Analysis), beban bunga, beban depresiasi, dan arus kas keluar sesuai ketentuan baku IAI, OJK, dan auditor eksternal KAP.',
      badge: 'Pengungkapan CALK',
    },
    {
      icon: 'briefcase',
      title: 'Manajemen Portofolio Ribuan Kontrak Sewa',
      desc: 'Penyimpanan terpusat dokumen kontrak sewa properti kantor cabang, ruko gerai ritel, armada logistik, dan alat berat pertambangan dengan peringatan dini opsi perpanjangan.',
      badge: 'Multi-Aset & Cabang',
    },
    {
      icon: 'database',
      title: 'Jurnal Akuntansi Siap Posting ke ERP',
      desc: 'Sinkronisasi jurnal pengakuan awal, pembayaran angsuran, akrual beban bunga bulanan, dan beban depresiasi langsung ke SAP, Oracle ERP, Microsoft Dynamics, atau Yaycount ERP.',
      badge: 'ERP Connector',
    },
  ];

  const industryUseCases = [
    {
      icon: 'briefcase',
      title: 'Perbankan & Lembaga Finansial',
      desc: 'Pengelolaan PSAK 73 untuk ratusan Kantor Cabang Pembantu (KCP), galeri ATM, server colocation di data center, dan armada operasional perbankan dengan audit trail lengkap.',
    },
    {
      icon: 'building',
      title: 'Jaringan Ritel & F&B',
      desc: 'Otomatisasi sewa ratusan gerai mal dan ruko dengan sewa variabel (persentase omzet), klausul eskalasi tarif tahunan, dan opsi pembaharuan kontrak sewa berulang.',
    },
    {
      icon: 'sampling',
      title: 'Logistik, Transportasi & Manufaktur',
      desc: 'Pengakuan neraca atas kontrak sewa ratusan unit truk ekspedisi, fasilitas pergudangan transit, kontainer peti kemas, dan lini mesin perakitan pabrik.',
    },
    {
      icon: 'cloud',
      title: 'Telekomunikasi & Infrastruktur Menara',
      desc: 'Pengelolaan ribuan titik sewa lahan menara BTS, hak guna jalur kabel serat optik (fiber optic lease), dan fasilitas gardu transmisi daya listrik.',
    },
    {
      icon: 'shield',
      title: 'Pertambangan & Alat Berat',
      desc: 'Kalkulasi amortisasi sewa jangka panjang alat berat dump truck, excavator, tongkang batubara, serta fasilitas kamp akomodasi operasional tambang.',
    },
    {
      icon: 'ai',
      title: 'Konglomerasi Multi-Entitas Holding',
      desc: 'Konsolidasi portofolio sewa puluhan anak perusahaan lintas industri dalam satu dasbor eksekutif dengan mata uang ganda dan eliminasi sewa antar-kelompok usaha.',
    },
  ];

  const journalSteps = [
    {
      step: '01',
      title: 'Pengakuan Awal (Initial Recognition)',
      desc: 'Pengakuan aset hak-guna dan liabilitas sewa sebesar nilai kini seluruh arus kas sewa.',
      debit: 'Aset Hak-Guna (Right-of-Use Asset)',
      credit: 'Liabilitas Sewa (Lease Liability)',
    },
    {
      step: '02',
      title: 'Pembayaran Angsuran Sewa',
      desc: 'Pembayaran kas periodik yang mengurangi pokok liabilitas sewa dan/atau bunga.',
      debit: 'Liabilitas Sewa (Lease Liability)',
      credit: 'Kas & Setara Kas / Bank',
    },
    {
      step: '03',
      title: 'Akrual Beban Bunga Berjalan (EIR)',
      desc: 'Pengakuan beban bunga periodik berdasarkan tingkat suku bunga pinjaman tambahan (IBR).',
      debit: 'Beban Bunga Sewa (Interest Expense)',
      credit: 'Liabilitas Sewa (Lease Liability)',
    },
    {
      step: '04',
      title: 'Depresiasi Periodik Aset Hak-Guna',
      desc: 'Penyusutan garis lurus aset hak-guna selama masa sewa atau umur ekonomis aset.',
      debit: 'Beban Depresiasi Aset Hak-Guna',
      credit: 'Akumulasi Depresiasi RoU Asset',
    },
  ];

  const comparisonRows = [
    {
      criteria: 'Kalkulasi PV & Amortisasi Bunga Efektif',
      excel: 'Manual, rawan link rumus korup saat baris bertambah',
      engine: 'Otomatis seketika dengan presisi matematis desimal tinggi',
    },
    {
      criteria: 'Modifikasi Sewa & Rekalkulasi Neraca',
      excel: 'Membutuhkan hari kerja untuk merekonstruksi tabel Excel',
      engine: '1-Klik Remeasurement instan dengan penyesuaian neraca otomatis',
    },
    {
      criteria: 'Audit Trail & Riwayat Perubahan Kontrak',
      excel: 'Tidak ada jejak log; sangat rentan ditimpa tanpa sengaja',
      engine: 'Audit trail kriptografis mencatat siapa, kapan, dan apa yang berubah',
    },
    {
      criteria: 'Pengungkapan CALK (Maturity Analysis)',
      excel: 'Rekapitulasi manual berisiko tinggi selisih angka saat audit',
      engine: 'Tabel analisis jatuh tempo format OJK & IAI siap cetak sekali klik',
    },
    {
      criteria: 'Sinkronisasi Jurnal ke ERP / General Ledger',
      excel: 'Entri jurnal manual atau impor CSV yang rawan salah kode akun',
      engine: 'Konektor API & Batch Posting langsung ke SAP, Oracle, atau Yaycount',
    },
    {
      criteria: 'Verifikasi & Kesiapan Audit KAP Big 4',
      excel: 'Sering ditemukan deviasi dan koreksi audit atas salah diskonto',
      engine: 'Telah teruji dan lolos verifikasi standar audit KAP Big 4',
    },
  ];

  const leaseFaqItems: FaqItem[] = [
    {
      id: 'faq-psak73-neraca',
      q: 'Mengapa standar PSAK 73 / IFRS 16 mewajibkan pengakuan sewa operasional di neraca?',
      a: 'Sebelum PSAK 73 (pengganti PSAK 30), sewa operasional diperlakukan off-balance sheet hanya sebagai beban sewa periodik di laba rugi. Hal ini membuat liabilitas keuangan sewa yang substansial tidak tampak di laporan posisi keuangan. PSAK 73 mewajibkan lessee mengakui Aset Hak-Guna (Right-of-Use Asset) dan Liabilitas Sewa di neraca untuk memberikan transparansi utang komitmen sewa jangka panjang kepada pemegang saham, investor, dan kreditur.',
    },
    {
      id: 'faq-lease-modification',
      q: 'Bagaimana Lease Engine menangani modifikasi kontrak sewa (lease modification)?',
      a: 'Lease Engine dilengkapi fitur Remeasurement otomatis. Ketika klausul sewa berubah (seperti perpanjangan masa sewa, penyesuaian tarif tahunan, atau penghentian dini sebelum jatuh tempo), pengguna cukup memperbarui klausul di antarmuka sistem. Engine secara otomatis mendiskontokan sisa arus kas dengan suku bunga IBR terbaru, menghitung ulang liabilitas sewa, menyesuaikan nilai buku RoU Asset, serta menghasilkan jurnal penyesuaian akuntansi seketika.',
    },
    {
      id: 'faq-exemption-rules',
      q: 'Apakah sistem mendukung pengecualian untuk sewa jangka pendek dan aset bernilai rendah?',
      a: 'Ya, sepenuhnya didukung. PSAK 73 memberikan opsi pengecualian pengakuan untuk sewa jangka pendek (masa sewa 12 bulan atau kurang tanpa opsi beli) dan sewa aset bernilai rendah (low-value assets seperti laptop, dispenser, atau printer kantor). Lease Engine memungkinkan Anda menandai kontrak-kontrak tersebut untuk langsung diakui sebagai beban sewa garis lurus tanpa kapitalisasi neraca.',
    },
    {
      id: 'faq-ibr-discount-rate',
      q: 'Bagaimana cara menentukan tarif diskonto Incremental Borrowing Rate (IBR)?',
      a: 'Standar mewajibkan penggunaan suku bunga implisit dalam sewa jika dapat ditentukan, atau Incremental Borrowing Rate (IBR) lessee jika suku bunga implisit tidak tersedia. Lease Engine menyediakan modul kurva suku bunga acuan IBR korporasi berbasis tenor pinjaman dan peringkat kredit perusahaan Anda, sehingga tim accounting dapat menerapkan tingkat diskonto yang konsisten di seluruh kontrak sewa.',
    },
    {
      id: 'faq-erp-integration',
      q: 'Bagaimana cara Lease Engine mengintegrasikan jurnal ke sistem ERP eksisting kami?',
      a: 'Lease Engine menyediakan integrasi REST API dua arah serta template export file batch General Ledger (GL) yang telah dipetakan dengan Chart of Accounts (CoA) korporasi Anda. Sistem dapat secara otomatis menghasilkan entri jurnal bulanan untuk SAP ERP, Oracle Financials, Microsoft Dynamics 365, maupun Yaycount ERP.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated 3D Isometric Dashboard Banner */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-lease-hero-banner">
            <div className="goletin-lease-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Lease Engine PSAK 73 / IFRS 16</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Otomatisasi Akuntansi Sewa Korporasi & Pengakuan Right-of-Use Asset
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Tinggalkan spreadsheet manual yang rawan salah rumus. Lease Engine mengotomatisasi penghitungan Nilai Kini (PV), amortisasi RoU Asset, EIR, dan pelaporan CALK audit-ready ratusan kontrak sewa.
                </p>
                <div className="hero-cta-group">
                  <a href="#simulator-sewa" className="btn-primary">
                    <span>Coba Simulator Sewa</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#konsultasi" className="btn-secondary">
                    <span>Jadwalkan Konsultasi Teknis</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>100% Standar PSAK 73 & IFRS 16</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Amortisasi Bunga Efektif (EIR)</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Audit-Ready untuk KAP & OJK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Capabilities / Modules Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Kapabilitas Lease Engine</span>
            <h2 className="section-title">Fitur Unggulan Kepatuhan Sewa PSAK 73</h2>
            <p className="section-lead" style={{ maxWidth: '740px', margin: '0 auto' }}>
              Semua instrumen yang dibutuhkan divisi keuangan dan akuntansi korporasi untuk mengelola portofolio sewa dengan akurasi matematis tanpa kompromi.
            </p>
          </div>

          <div className="segment-products-grid">
            {coreModules.map((item, i) => (
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
                <a href="#simulator-sewa" className="segment-tile-link">
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
      <section id="simulator-sewa" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">Simulator Sewa Interaktif</span>
            <h2 className="section-title">Hitung Dampak Neraca & Laba Rugi Kontrak Sewa Anda</h2>
            <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Uji coba simulasi perhitungan PSAK 73 secara real-time. Masukkan pembayaran sewa tahunan, jangka waktu kontrak, dan suku bunga IBR untuk melihat nilai awal RoU Asset, Liabilitas, dan beban P&amp;L tahun pertama.
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
                    <label htmlFor="rent-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Pembayaran Sewa Tahunan:
                    </label>
                    <span style={{ color: 'var(--ms-blue-text)', fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-segoe-display)' }}>
                      Rp {(annualPayment / 1000000).toLocaleString('id-ID')} Juta / thn
                    </span>
                  </div>
                  <input
                    id="rent-slider"
                    type="range"
                    min="50000000"
                    max="2000000000"
                    step="25000000"
                    value={annualPayment}
                    onChange={(e) => setAnnualPayment(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: 'var(--ms-blue-text)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>Rp50 Juta</span>
                    <span>Rp1 Miliar</span>
                    <span>Rp2 Miliar</span>
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <label htmlFor="years-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Masa Sewa Kontrak:
                    </label>
                    <span style={{ color: 'var(--ms-text-heading)', fontSize: '16px', fontWeight: 700 }}>
                      {leaseYears} Tahun
                    </span>
                  </div>
                  <input
                    id="years-slider"
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={leaseYears}
                    onChange={(e) => setLeaseYears(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: 'var(--ms-blue-text)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>1 Tahun</span>
                    <span>10 Tahun</span>
                    <span>20 Tahun</span>
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <label htmlFor="ibr-slider" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Incremental Borrowing Rate (IBR):
                    </label>
                    <span style={{ color: 'var(--ms-text-heading)', fontSize: '16px', fontWeight: 700 }}>
                      {ibrRate.toFixed(1)}% / thn
                    </span>
                  </div>
                  <input
                    id="ibr-slider"
                    type="range"
                    min="4.0"
                    max="15.0"
                    step="0.5"
                    value={ibrRate}
                    onChange={(e) => setIbrRate(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', accentColor: 'var(--ms-blue-text)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                    <span>4.0%</span>
                    <span>9.5%</span>
                    <span>15.0%</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                    Skema Waktu Pembayaran Angsuran:
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={() => setPaymentTiming('advance')}
                      style={{
                        flex: 1,
                        padding: '11px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: paymentTiming === 'advance' ? 'var(--ms-blue-text)' : 'var(--ms-border)',
                        backgroundColor: paymentTiming === 'advance' ? '#EFF6FC' : '#FFFFFF',
                        color: paymentTiming === 'advance' ? 'var(--ms-blue-text)' : 'var(--ms-text-heading)',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      Di Awal Periode (Advance)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentTiming('arrears')}
                      style={{
                        flex: 1,
                        padding: '11px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: paymentTiming === 'arrears' ? 'var(--ms-blue-text)' : 'var(--ms-border)',
                        backgroundColor: paymentTiming === 'arrears' ? '#EFF6FC' : '#FFFFFF',
                        color: paymentTiming === 'arrears' ? 'var(--ms-blue-text)' : 'var(--ms-text-heading)',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      Di Akhir Periode (Arrears)
                    </button>
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
                  NILAI AWAL PENGAKUAN NERACA (DAY-1)
                </div>
                <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--ms-blue-text)', fontFamily: 'var(--font-segoe-display)', lineHeight: '1.1', marginBottom: '4px' }}>
                  Rp {(initialRouAsset / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 2 })} Juta
                </div>
                <div style={{ fontSize: '13px', color: 'var(--ms-text-body)', fontWeight: 600, marginBottom: '20px' }}>
                  Aset Hak-Guna (RoU) &amp; Liabilitas Sewa Awal
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--ms-border)', paddingTop: '16px', marginBottom: '22px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>Penyusutan Tahunan (RoU):</span>
                    <strong style={{ color: 'var(--ms-text-heading)' }}>
                      Rp {(annualDepreciation / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 2 })} Juta / thn
                    </strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--ms-text-muted)' }}>Beban Bunga Efektif Thn-1:</span>
                    <strong style={{ color: 'var(--ms-text-heading)' }}>
                      Rp {(year1Interest / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 2 })} Juta
                    </strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--ms-border)', paddingTop: '10px' }}>
                    <span style={{ color: 'var(--ms-text-heading)', fontWeight: 700 }}>Total Dampak Laba Rugi Thn-1:</span>
                    <strong style={{ color: '#D83B01', fontSize: '15px' }}>
                      Rp {(year1TotalExpense / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 2 })} Juta
                    </strong>
                  </div>
                </div>

                <a href="#konsultasi" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Jadwalkan Demo Portofolio Sewa</span>
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Accounting Journal Lifecycle */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Siklus Akuntansi Sewa</span>
            <h2 className="section-title">Alur 4 Tahap Jurnal Otomatis PSAK 73</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Lease Engine menghasilkan entri debit dan kredit siap posting untuk setiap fase transaksi kontrak sewa perusahaan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {journalSteps.map((step, idx) => (
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
                      color: 'var(--ms-blue-text)',
                      backgroundColor: 'var(--ms-blue-light)',
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
                <p style={{ fontSize: '13px', color: 'var(--ms-text-muted)', lineHeight: '20px', marginBottom: '16px', flex: 1 }}>
                  {step.desc}
                </p>

                <div
                  style={{
                    backgroundColor: 'var(--ms-bg-subtle)',
                    borderRadius: '8px',
                    padding: '12px',
                    fontSize: '12px',
                    border: '1px solid var(--ms-border)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
                    <strong style={{ color: '#107C41', minWidth: '24px' }}>Dr:</strong>
                    <span style={{ color: 'var(--ms-text-heading)' }}>{step.debit}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <strong style={{ color: '#D83B01', minWidth: '24px' }}>Cr:</strong>
                    <span style={{ color: 'var(--ms-text-heading)' }}>{step.credit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Skenario Penggunaan</span>
            <h2 className="section-title">Bagaimana Sektor Industri Menggunakan Lease Engine</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Dari jaringan gerai ritel nasional hingga perbankan devisa, Lease Engine beradaptasi dengan model kontrak sewa spesifik di berbagai industri.
            </p>
          </div>

          <div className="segment-use-cases">
            {industryUseCases.map((uc, i) => (
              <div key={i} className="use-case-card">
                <div className="use-case-icon">
                  <Icon name={uc.icon} size={20} />
                </div>
                <div className="use-case-content">
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table: Manual Excel vs Goletin Lease Engine */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Perbandingan Solusi</span>
            <h2 className="section-title">Spreadsheet Manual vs Goletin Lease Engine</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Mengapa korporasi dan KAP merekomendasikan engine terotomatisasi untuk meniadakan risiko salah saji material.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '34%' }}>Parameter &amp; Kriteria Kepatuhan</th>
                  <th style={{ width: '33%', color: 'var(--ms-text-muted)' }}>Spreadsheet Excel Manual</th>
                  <th style={{ width: '33%', color: 'var(--ms-blue-text)' }}>Goletin Lease Engine</th>
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

      {/* Consultation & Demo Request Form */}
      <section id="konsultasi" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Konsultasi &amp; Proof-of-Concept</span>
              <h2 className="section-title">Diskusikan Portofolio Sewa Bersama Tim Spesialis Karsasoft</h2>
              <p className="section-lead">
                Dapatkan evaluasi gratis atas portofolio kontrak sewa eksisting Anda dan simulasi integrasi ERP langsung bersama konsultan akuntansi keuangan kami.
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
                  Terima kasih, <strong>{formData.name}</strong> dari <strong>{formData.company}</strong>. Konsultan akuntansi finansial kami akan menghubungi Anda melalui email <strong>{formData.email}</strong> dalam waktu maksimal 1x24 jam kerja.
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
                      placeholder="e.g. Wahyu Hidayat, S.E., Ak., CA"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Email Kantor Resmi *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="wahyu@perusahaan.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Nama Perusahaan / Organisasi *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Ritel Niaga Nusantara Tbk"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Perkiraan Jumlah Kontrak Sewa Aktif
                    </label>
                    <select
                      value={formData.activeLeaseCount}
                      onChange={(e) => setFormData({ ...formData, activeLeaseCount: e.target.value })}
                      className="mitra-form-input"
                    >
                      <option value="1 - 10 Kontrak Sewa">1 - 10 Kontrak Sewa</option>
                      <option value="10 - 50 Kontrak Sewa">10 - 50 Kontrak Sewa</option>
                      <option value="50 - 200 Kontrak Sewa">50 - 200 Kontrak Sewa (Multi-Cabang)</option>
                      <option value="> 200 Kontrak Sewa">&gt; 200 Kontrak Sewa (Ritel / Logistik Besar)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                    Kebutuhan Integrasi ERP &amp; Catatan Khusus
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Sebutkan jenis aset sewa (gedung, kendaraan, alat berat), ERP yang digunakan (SAP, Oracle, Yaycount), atau kebutuhan modifikasi sewa..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mitra-form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn-primary" style={{ minWidth: '240px', justifyContent: 'center' }}>
                    <span>Jadwalkan Konsultasi PSAK 73</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
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
            <span className="section-eyebrow">Tanya Jawab Seputar PSAK 73</span>
            <h2 className="section-title">Pertanyaan Umum Kepatuhan Sewa</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Jawaban atas pertanyaan mendasar mengenai implementasi akuntansi sewa PSAK 73 / IFRS 16 dan arsitektur Lease Engine.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <GoletinFaq items={leaseFaqItems} countLabel="5 Tanya Jawab PSAK 73 & IFRS 16" />
          </div>
        </div>
      </section>

      {/* Bottom Enterprise CTA Banner */}
      <div className="section-padding" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kepatuhan Akuntansi Enterprise
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Mengotomatisasi Portofolio Sewa Korporasi Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultan spesialis keuangan Karsasoft siap membantu Anda melakukan evaluasi data sewa, simulasi dampak neraca, dan konfigurasi integrasi ke sistem ERP korporasi Anda.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a href="#konsultasi" className="btn-primary">
                  <span>Konsultasi Bersama Tim Ahli</span>
                  <Icon name="arrow-right" size={16} />
                </a>
                <a href="#simulator-sewa" className="btn-secondary">
                  <span>Ubah Parameter di Simulator</span>
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
