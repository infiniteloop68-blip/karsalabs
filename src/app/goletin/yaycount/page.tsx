'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function YaycountProductPage() {
  const [selectedUnit, setSelectedUnit] = useState<'konsolidasi' | 'sma' | 'smp' | 'pesantren' | 'lazis'>('konsolidasi');
  const [activeTab, setActiveTab] = useState<'aktivitas' | 'posisi' | 'spp'>('aktivitas');
  const [studentCount, setStudentCount] = useState<number>(1420);
  const [sppRate, setSppRate] = useState<number>(650000);
  const [collectionRate, setCollectionRate] = useState<number>(94);
  const [restrictedDonations, setRestrictedDonations] = useState<number>(180000000);
  const [bosFund, setBosFund] = useState<number>(150000000);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    foundationName: '',
    unitCount: '1 - 3 Unit Sekolah',
    notes: '',
  });

  // Preset data when changing units
  const handleUnitChange = (unit: 'konsolidasi' | 'sma' | 'smp' | 'pesantren' | 'lazis') => {
    setSelectedUnit(unit);
    if (unit === 'konsolidasi') {
      setStudentCount(1420);
      setSppRate(650000);
      setCollectionRate(94);
      setRestrictedDonations(180000000);
      setBosFund(150000000);
    } else if (unit === 'sma') {
      setStudentCount(540);
      setSppRate(750000);
      setCollectionRate(96);
      setRestrictedDonations(65000000);
      setBosFund(75000000);
    } else if (unit === 'smp') {
      setStudentCount(480);
      setSppRate(600000);
      setCollectionRate(92);
      setRestrictedDonations(45000000);
      setBosFund(55000000);
    } else if (unit === 'pesantren') {
      setStudentCount(400);
      setSppRate(850000);
      setCollectionRate(95);
      setRestrictedDonations(70000000);
      setBosFund(20000000);
    } else {
      // Lazis
      setStudentCount(0);
      setSppRate(0);
      setCollectionRate(100);
      setRestrictedDonations(350000000);
      setBosFund(0);
    }
  };

  // Calculations for live simulator
  const totalSppBilled = studentCount * sppRate;
  const totalSppCollected = Math.round(totalSppBilled * (collectionRate / 100));
  const otherUnrestrictedRevenue = selectedUnit === 'lazis' ? 45000000 : 35000000;
  const unrestrictedRevenue = totalSppCollected + otherUnrestrictedRevenue;
  const restrictedRevenue = restrictedDonations + bosFund;
  const totalRevenue = unrestrictedRevenue + restrictedRevenue;

  const operationalExpense = Math.round(unrestrictedRevenue * 0.74);
  const programExpense = Math.round(restrictedRevenue * 0.88);
  const totalExpenses = operationalExpense + programExpense;

  const surplusNetAssets = totalRevenue - totalExpenses;
  const changeUnrestricted = unrestrictedRevenue - operationalExpense;
  const changeRestricted = restrictedRevenue - programExpense;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const coreModules = [
    {
      icon: 'accounting',
      title: 'Akuntansi Nirlaba Standar ISAK 35',
      desc: 'Penyusunan otomatis Laporan Posisi Keuangan, Laporan Aktivitas, dan Laporan Arus Kas dengan pemisahan Aset Neto Tanpa Pembatasan dan Dengan Pembatasan (Terikat) sesuai mandat IAI.',
      badge: 'Mandat ISAK 35',
    },
    {
      icon: 'calculator',
      title: 'Billing SPP & Virtual Account Bank',
      desc: 'Penagihan SPP, uang gedung, syahriah, dan iuran kegiatan dengan integrasi Virtual Account otomatis (BCA, Mandiri, BRI, BNI, BSI) & QRIS. Rekonsiliasi kas real-time tanpa cek mutasi manual.',
      badge: 'Auto Reconcile',
    },
    {
      icon: 'docs',
      title: 'Pelaporan Dana BOS & BOP Terpadu',
      desc: 'Format pembukuan dan pertanggungjawaban (SPJ) dana BOS sesuai juknis resmi Kemendikbudristek & Kemenag RI. Ekspor data terstruktur siap disinkronkan ke aplikasi ARKAS.',
      badge: 'Juknis Kemdikbud',
    },
    {
      icon: 'building',
      title: 'Multi-Unit & Konsolidasi Yayasan',
      desc: 'Kelola puluhan unit (TK, SD, SMP, SMA, SMK, Pesantren, LAZIS, Poliklinik) dalam satu sistem terpadu. Laporan keuangan mandiri per unit dan konsolidasi otomatis tingkat induk.',
      badge: 'Multi-Tenant',
    },
    {
      icon: 'security',
      title: 'Manajemen Wakaf & Aset Donasi',
      desc: 'Pencatatan aset tanah wakaf, gedung hibah, dan inventaris sarana pendidikan dengan histori penyusutan serta pelacakan dokumen sertifikat legalitas kepemilikan yayasan.',
      badge: 'Aset Wakaf',
    },
    {
      icon: 'shield',
      title: 'Audit Trail & Kontrol Pengawas (SPI)',
      desc: 'Hak akses bertingkat untuk Pembina Yayasan, Bendahara Sekolah, dan SPI. Log transaksi anti-manipulasi untuk mempermudah audit akuntan publik independen (KAP).',
      badge: 'Siap Audit KAP',
    },
  ];

  const complianceWorkflow = [
    {
      step: '01',
      title: 'Penerimaan Donasi & Tagihan SPP',
      subtitle: 'Penerbitan VA & Tanda Terima QR',
      desc: 'Tagihan SPP bulanan atau konfirmasi donasi diterbitkan secara massal dengan nomor Virtual Account unik per siswa/donatur. Kuitansi resmi ber-QR Code dikirim via WhatsApp & email.',
      icon: 'calculator',
    },
    {
      step: '02',
      title: 'Jurnal Otomatis Berbasis Anggaran',
      subtitle: 'Pemisahan Kas Bebas vs Terikat',
      desc: 'Setiap pembayaran otomatis dijurnal ke pos akun pembatasan dana yang tepat tanpa risiko pencampuran kas operasional umum dengan dana donasi program terikat.',
      icon: 'accounting',
    },
    {
      step: '03',
      title: 'Penyusunan SPJ BOS & Laporan Unit',
      subtitle: 'Sinkronisasi Juknis Kementerian',
      desc: 'Pengeluaran unit dipetakan ke kode standar belanja barang/modal BOS. Berkas SPJ dan realisasi anggaran per mata anggaran siap dicetak kapan saja.',
      icon: 'docs',
    },
    {
      step: '04',
      title: 'Konsolidasi Induk & Audit Kepatuhan KAP',
      subtitle: 'Laporan ISAK 35 & CALK Siap Periksa',
      desc: 'Seluruh neraca dan aktivitas unit digabungkan ke laporan konsolidasi yayasan induk dalam 1-klik, lengkap dengan Catatan atas Laporan Keuangan (CALK) siap audit.',
      icon: 'shield',
    },
  ];

  const useCases = [
    {
      title: 'Yayasan Pendidikan Dasar & Menengah',
      desc: 'Mengelola tagihan SPP ribuan siswa dari jenjang TK, SD, SMP, hingga SMA/SMK dalam satu induk, mengotomatisasi SPJ dana BOS, dan menyelaraskan penggajian guru.',
      badge: 'Sekolah Terpadu',
    },
    {
      title: 'Pondok Pesantren & Lembaga Tahfidz',
      desc: 'Pembukuan syahriah bulanan, uang asrama/makan santri, pengelolaan dana wakaf jariyah pembangunan sarana, serta pembukuan unit usaha ekonomi pesantren.',
      badge: 'Pesantren Modern',
    },
    {
      title: 'Perguruan Tinggi Swasta & Akademi',
      desc: 'Tata kelola keuangan multi-fakultas dan program studi, pemantauan dana hibah riset kementerian (dana terikat), serta rekonsiliasi pembayaran UKT/SKS mahasiswa.',
      badge: 'Perguruan Tinggi',
    },
    {
      title: 'Lembaga Amil Zakat & Filantropi (LAZIS)',
      desc: 'Pemisahan penerimaan dan penyaluran dana 8 asnaf zakat, infaq terikat program, sedekah terikat waktu, serta pelaporan akuntabilitas ke Kemenag & BAZNAS.',
      badge: 'Organisasi Filantropi',
    },
    {
      title: 'Panti Asuhan & Balai Kesejahteraan Sosial',
      desc: 'Transparansi penuh pencatatan donasi natura (beras, sembako) maupun tunai, pemisahan kas operasional anak asuh, dan pelaporan bantuan sosial Dinas Sosial.',
      badge: 'Lembaga Sosial',
    },
    {
      title: 'Rumah Sakit & Balai Pengobatan Yayasan',
      desc: 'Pengelolaan pendapatan layanan medis, pemisahan dana subsidi silang pasien kurang mampu, dan pelaporan aset fasilitas kesehatan nirlaba.',
      badge: 'Fasilitas Kesehatan',
    },
  ];

  const comparisonRows = [
    {
      criteria: 'Format Standar Akuntansi Nirlaba',
      spreadsheet: 'Format komersial PT/CV (modal/ekuitas) yang dilarang bagi yayasan',
      yaycount: '100% Standar ISAK 35 (Laporan Aktivitas & Posisi Keuangan Aset Neto)',
    },
    {
      criteria: 'Pemisahan Dana Terikat & Tidak Terikat',
      spreadsheet: 'Kas sering bercampur di rekening bank; rawan temuan audit',
      yaycount: 'Pemisahan otomatis pos Aset Neto Tanpa Pembatasan vs Dengan Pembatasan',
    },
    {
      criteria: 'Penagihan SPP & Rekonsiliasi Kas',
      spreadsheet: 'Pengecekan mutasi manual satu per satu, staf TU lembur tiap tanggal 10',
      yaycount: 'Virtual Account 5 Bank & QRIS real-time; auto-reconcile dalam hitungan detik',
    },
    {
      criteria: 'Pelaporan Pertanggungjawaban BOS',
      spreadsheet: 'Input ganda antara rekap sekolah dan aplikasi kementerian',
      yaycount: 'Format kode rekening selaras juknis resmi Kemendikbud & siap ARKAS',
    },
    {
      criteria: 'Konsolidasi Multi-Unit Cabang Yayasan',
      spreadsheet: 'Menggabungkan puluhan sheet rawan rumus rusak & lambat',
      yaycount: 'Konsolidasi multi-tingkat (Induk - Cabang - Unit Sekolah) dalam 1-klik',
    },
    {
      criteria: 'Hak Akses Pengawas & Audit KAP',
      spreadsheet: 'File mudah diubah atau terhapus tanpa ada jejak riwayat',
      yaycount: 'Audit trail kriptografis tidak dapat dihapus + akun Read-Only auditor KAP',
    },
    {
      criteria: 'Kedaulatan Data & Keamanan Pribadi',
      spreadsheet: 'Disimpan di komputer lokal rawan hilang atau server asing',
      yaycount: 'Sovereign Cloud di Tier-4 Data Center Indonesia terlindung UU PDP',
    },
  ];

  const yaycountFaqItems: FaqItem[] = [
    {
      id: 'faq-isak35-diff',
      q: 'Apa perbedaan mendasar antara laporan keuangan ISAK 35 dengan akuntansi perusahaan biasa?',
      a: 'Perusahaan komersial (PT/CV) berorientasi pada laba dan kepemilikan modal saham (ekuitas). Sebaliknya, yayasan dan organisasi nirlaba dilarang membagikan sisa hasil usaha kepada pendiri atau pengurus. Standar ISAK 35 (menggantikan PSAK 45) mewajibkan penggantian istilah Neraca menjadi "Laporan Posisi Keuangan" dan Laba Rugi menjadi "Laporan Aktivitas", dengan pembagian modal menjadi "Aset Neto Tanpa Pembatasan" dan "Aset Neto Dengan Pembatasan" (misalnya donasi program beasiswa atau wakaf bersyarat). Yaycount ERP secara otomatis menghasilkan format laporan ini.',
    },
    {
      id: 'faq-va-spp',
      q: 'Bagaimana mekanisme pembayaran SPP melalui Virtual Account di Yaycount?',
      a: 'Setiap siswa secara otomatis memiliki nomor Virtual Account (VA) unik untuk bank mitra pilihan yayasan (BCA, Mandiri, BRI, BNI, BSI). Ketika wali murid melakukan transfer via mobile banking, ATM, atau QRIS, sistem Yaycount langsung memvalidasi pembayaran secara real-time, mengubah status tagihan menjadi lunas, dan mencatatkan jurnal penerimaan kas tanpa staf tata usaha harus mengecek mutasi rekening manual.',
    },
    {
      id: 'faq-dana-bos',
      q: 'Apakah Yaycount mendukung pertanggungjawaban Dana BOS dan sinkronisasi ARKAS?',
      a: 'Ya. Yaycount ERP menyediakan modul pembukuan BOS yang mengklasifikasikan pengeluaran berdasarkan kode rekening belanja barang/jasa dan belanja modal sesuai pedoman teknis Kemendikbudristek dan Kemenag RI, sehingga memudahkan sekolah menyusun SPJ, menghindari pengeluaran yang tidak sesuai petunjuk teknis, dan mempercepat rekonsiliasi data ke aplikasi ARKAS.',
    },
    {
      id: 'faq-kap-audit',
      q: 'Apakah Yaycount dapat diakses oleh Kantor Akuntan Publik (KAP) untuk audit tahunan?',
      a: 'Sangat bisa. Yaycount memiliki fitur Dedicated Auditor Portal dengan akses Read-Only khusus auditor independen. Auditor dapat langsung mengunduh buku besar, jurnal penyesuaian, bukti transaksi digital, serta Catatan atas Laporan Keuangan (CALK) tanpa mengganggu operasional harian bendahara sekolah.',
    },
    {
      id: 'faq-data-security-yayasan',
      q: 'Bagaimana keamanan data santri, donatur, dan keuangan yayasan kami?',
      a: 'Seluruh data yayasan disimpan di Sovereign Data Center Indonesia dengan enkripsi AES-256 saat istirahat (at rest) dan TLS 1.3 saat transmisi, sesuai ketentuan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP). Sistem menerapkan Role-Based Access Control (RBAC) ketat sehingga bendahara unit hanya dapat mengakses unitnya sendiri, sedangkan Pembina memiliki wewenang pengawasan menyeluruh.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated Yaycount 3D Isometric Showcase */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-yaycount-hero-banner">
            <div className="goletin-yaycount-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Yaycount ERP — Tata Kelola Keuangan Yayasan &amp; Nirlaba</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Akuntansi Yayasan &amp; Lembaga Nirlaba Sesuai Standar ISAK 35
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Solusi ERP akuntansi terpadu khusus yayasan pendidikan, pesantren, dan nirlaba. Hasilkan Laporan ISAK 35 otomatis, penagihan SPP Virtual Account, dan konsolidasi multi-unit berstandar KAP.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://yaycount.goletin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka Yaycount Web</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <a href="#simulator" className="btn-secondary">
                    <span>Coba Simulator ISAK 35</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>100% Standar ISAK 35</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Pemisahan Dana Terikat</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Virtual Account Bank Otomatis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Core Modules Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Kemampuan Inti Platform</span>
            <h2 className="section-title">Modul Lengkap Tata Kelola Keuangan Organisasi Nirlaba</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Dirancang khusus untuk menjawab tantangan regulasi akuntansi yayasan di Indonesia, menghilangkan entri ganda, dan memperkuat akuntabilitas publik.
            </p>
          </div>

          <div className="segment-products-grid">
            {coreModules.map((mod, idx) => (
              <div key={idx} className="segment-product-tile">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div className="segment-tile-icon-box" style={{ background: '#EBF3FC', color: 'var(--ms-blue)' }}>
                    <Icon name={mod.icon} size={22} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', background: '#F1F5F9', color: '#475569' }}>
                    {mod.badge}
                  </span>
                </div>
                <h3 className="segment-tile-name" style={{ fontSize: '18px', marginBottom: '8px' }}>
                  {mod.title}
                </h3>
                <p className="segment-tile-desc" style={{ fontSize: '13px', lineHeight: '20px' }}>
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Simulator: ISAK 35 & SPP Billing Engine */}
      <section id="simulator" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)', borderBottom: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '32px' }}>
            <span className="section-eyebrow">Simulasi Interaktif</span>
            <h2 className="section-title">Kalkulator Laporan Aktivitas ISAK 35 &amp; Billing SPP</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Uji langsung bagaimana mesin Yaycount ERP memisahkan pendapatan dana terikat, menghitung saldo aset neto, dan mengotomatisasi rekonsiliasi SPP per unit yayasan.
            </p>
          </div>

          {/* Unit Selector Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {[
              { id: 'konsolidasi', label: 'Konsolidasi Seluruh Yayasan' },
              { id: 'sma', label: 'SMA & SMK Islam Terpadu' },
              { id: 'smp', label: 'SMP Islam Terpadu' },
              { id: 'pesantren', label: 'Pondok Pesantren Modern' },
              { id: 'lazis', label: 'LAZIS & Filantropi' },
            ].map((unit) => (
              <button
                key={unit.id}
                onClick={() => handleUnitChange(unit.id as any)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: selectedUnit === unit.id ? '1px solid var(--ms-blue)' : '1px solid var(--ms-border)',
                  backgroundColor: selectedUnit === unit.id ? 'var(--ms-blue)' : '#FFFFFF',
                  color: selectedUnit === unit.id ? '#FFFFFF' : 'var(--ms-text-body)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {unit.label}
              </button>
            ))}
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid var(--ms-border)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              padding: '32px',
              maxWidth: '1040px',
              margin: '0 auto',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {/* Controls Column */}
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '16px' }}>
                  Parameter Operasional Unit
                </h3>

                {selectedUnit !== 'lazis' && (
                  <>
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                          Jumlah Siswa / Santri Aktif
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                          {studentCount.toLocaleString('id-ID')} Siswa
                        </span>
                      </div>
                      <input
                        type="range"
                        min="100"
                        max="3000"
                        step="20"
                        value={studentCount}
                        onChange={(e) => setStudentCount(Number(e.target.value))}
                        style={{ width: '100%', cursor: 'pointer' }}
                      />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                          Tarif SPP Bulanan per Siswa
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                          Rp{sppRate.toLocaleString('id-ID')}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="200000"
                        max="2500000"
                        step="25000"
                        value={sppRate}
                        onChange={(e) => setSppRate(Number(e.target.value))}
                        style={{ width: '100%', cursor: 'pointer' }}
                      />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                          Tingkat Pelunasan Tagihan SPP
                        </label>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                          {collectionRate}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="70"
                        max="100"
                        step="1"
                        value={collectionRate}
                        onChange={(e) => setCollectionRate(Number(e.target.value))}
                        style={{ width: '100%', cursor: 'pointer' }}
                      />
                    </div>
                  </>
                )}

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                      Donasi &amp; Infaq Program Terikat (Bulanan)
                    </label>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                      Rp{(restrictedDonations / 1000000).toFixed(0)} Juta
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000000"
                    max="500000000"
                    step="5000000"
                    value={restrictedDonations}
                    onChange={(e) => setRestrictedDonations(Number(e.target.value))}
                    style={{ width: '100%', cursor: 'pointer' }}
                  />
                </div>

                {selectedUnit !== 'lazis' && (
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                        Alokasi Penerimaan Dana BOS / BOP
                      </label>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                        Rp{(bosFund / 1000000).toFixed(0)} Juta
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="300000000"
                      step="5000000"
                      value={bosFund}
                      onChange={(e) => setBosFund(Number(e.target.value))}
                      style={{ width: '100%', cursor: 'pointer' }}
                    />
                  </div>
                )}

                <div style={{ backgroundColor: 'var(--ms-bg-subtle)', padding: '14px', borderRadius: '8px', borderLeft: '4px solid var(--ms-blue)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '4px' }}>
                    Kaidah Akuntansi ISAK 35 (Eks PSAK 45)
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ms-text-muted)', lineHeight: '18px' }}>
                    Donasi program khusus dan dana BOS diklasifikasikan sebagai <strong>Aset Neto Dengan Pembatasan</strong> dan tidak dapat dialihkan untuk membiayai belanja operasional umum tanpa persetujuan Pembina.
                  </div>
                </div>
              </div>

              {/* Live Statement Display Column */}
              <div>
                {/* View Mode Toggle */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', borderBottom: '1px solid var(--ms-border)', paddingBottom: '12px' }}>
                  <button
                    onClick={() => setActiveTab('aktivitas')}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      backgroundColor: activeTab === 'aktivitas' ? 'var(--ms-blue)' : 'transparent',
                      color: activeTab === 'aktivitas' ? '#FFFFFF' : 'var(--ms-text-body)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Laporan Aktivitas
                  </button>
                  <button
                    onClick={() => setActiveTab('posisi')}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      backgroundColor: activeTab === 'posisi' ? 'var(--ms-blue)' : 'transparent',
                      color: activeTab === 'posisi' ? '#FFFFFF' : 'var(--ms-text-body)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Posisi Keuangan (Neraca)
                  </button>
                  <button
                    onClick={() => setActiveTab('spp')}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      backgroundColor: activeTab === 'spp' ? 'var(--ms-blue)' : 'transparent',
                      color: activeTab === 'spp' ? '#FFFFFF' : 'var(--ms-text-body)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Rekonsiliasi SPP &amp; VA
                  </button>
                </div>

                {activeTab === 'aktivitas' && (
                  <div style={{ backgroundColor: 'var(--ms-bg-subtle)', padding: '16px', borderRadius: '8px', fontSize: '13px' }}>
                    <div style={{ fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '8px', borderBottom: '1px dashed var(--ms-border)', paddingBottom: '4px' }}>
                      1. PENDAPATAN &amp; PENERIMAAN
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Tanpa Pembatasan (SPP &amp; Usaha):</span>
                      <span style={{ fontWeight: 600 }}>Rp{unrestrictedRevenue.toLocaleString('id-ID')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Dengan Pembatasan (Donasi/BOS):</span>
                      <span style={{ fontWeight: 600 }}>Rp{restrictedRevenue.toLocaleString('id-ID')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontWeight: 700, color: 'var(--ms-blue-text)' }}>
                      <span>Total Penerimaan:</span>
                      <span>Rp{totalRevenue.toLocaleString('id-ID')}</span>
                    </div>

                    <div style={{ fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '8px', borderBottom: '1px dashed var(--ms-border)', paddingBottom: '4px' }}>
                      2. BEBAN &amp; PENGELUARAN
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Beban Operasional &amp; Gaji Guru:</span>
                      <span style={{ fontWeight: 600, color: '#DC2626' }}>(Rp{operationalExpense.toLocaleString('id-ID')})</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Beban Program Terikat &amp; BOS:</span>
                      <span style={{ fontWeight: 600, color: '#DC2626' }}>(Rp{programExpense.toLocaleString('id-ID')})</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontWeight: 700 }}>
                      <span>Total Beban Periode:</span>
                      <span style={{ color: '#DC2626' }}>(Rp{totalExpenses.toLocaleString('id-ID')})</span>
                    </div>

                    <div style={{ borderTop: '2px solid var(--ms-border)', paddingTop: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '14px', fontWeight: 800 }}>
                        <span>KENAIKAN ASET NETO (SURPLUS):</span>
                        <span style={{ color: surplusNetAssets >= 0 ? '#16A34A' : '#DC2626' }}>
                          Rp{surplusNetAssets.toLocaleString('id-ID')}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)' }}>
                        <span>Kenaikan Aset Neto Tanpa Pembatasan:</span>
                        <span>Rp{changeUnrestricted.toLocaleString('id-ID')}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)' }}>
                        <span>Kenaikan Aset Neto Dengan Pembatasan:</span>
                        <span>Rp{changeRestricted.toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'posisi' && (
                  <div style={{ backgroundColor: 'var(--ms-bg-subtle)', padding: '16px', borderRadius: '8px', fontSize: '13px' }}>
                    <div style={{ fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '8px', borderBottom: '1px dashed var(--ms-border)', paddingBottom: '4px' }}>
                      ASET (AKTIVA)
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Kas &amp; Setara Kas Bank:</span>
                      <span style={{ fontWeight: 600 }}>Rp{(totalRevenue * 1.8).toLocaleString('id-ID')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Piutang SPP Siswa:</span>
                      <span style={{ fontWeight: 600 }}>Rp{(totalSppBilled - totalSppCollected).toLocaleString('id-ID')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Tanah Wakaf &amp; Bangunan Gedung:</span>
                      <span style={{ fontWeight: 600 }}>Rp6.450.000.000</span>
                    </div>

                    <div style={{ fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '8px', borderBottom: '1px dashed var(--ms-border)', paddingBottom: '4px' }}>
                      LIABILITAS (KEWAJIBAN)
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Utang Operasional &amp; SPP Muka:</span>
                      <span style={{ fontWeight: 600 }}>Rp125.000.000</span>
                    </div>

                    <div style={{ fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '8px', borderBottom: '1px dashed var(--ms-border)', paddingBottom: '4px' }}>
                      ASET NETO (STANDAR ISAK 35)
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Tanpa Pembatasan:</span>
                      <span style={{ fontWeight: 600 }}>Rp4.820.000.000</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Dengan Pembatasan (Wakaf &amp; Donasi):</span>
                      <span style={{ fontWeight: 600 }}>Rp3.450.000.000</span>
                    </div>
                    <div style={{ borderTop: '2px solid var(--ms-border)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontWeight: 800 }}>
                      <span>TOTAL ASET NETO YAYASAN:</span>
                      <span style={{ color: 'var(--ms-blue-text)' }}>Rp8.270.000.000</span>
                    </div>
                  </div>
                )}

                {activeTab === 'spp' && (
                  <div style={{ backgroundColor: 'var(--ms-bg-subtle)', padding: '16px', borderRadius: '8px', fontSize: '13px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '14px' }}>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '6px', border: '1px solid var(--ms-border)' }}>
                        <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>Total Tagihan Terbit</div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                          Rp{totalSppBilled.toLocaleString('id-ID')}
                        </div>
                      </div>
                      <div style={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '6px', border: '1px solid var(--ms-border)' }}>
                        <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>Penerimaan via VA Bank</div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#16A34A' }}>
                          Rp{totalSppCollected.toLocaleString('id-ID')}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                        <span>Progress Pelunasan VA:</span>
                        <span style={{ fontWeight: 700 }}>{collectionRate}%</span>
                      </div>
                      <div style={{ height: '8px', width: '100%', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${collectionRate}%`, backgroundColor: 'var(--ms-blue)', transition: 'width 0.3s ease' }} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Sisa Piutang SPP Tertunggak:</span>
                      <span style={{ fontWeight: 700, color: '#DC2626' }}>
                        Rp{(totalSppBilled - totalSppCollected).toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <span style={{ color: 'var(--ms-text-muted)' }}>Status Pengingat Otomatis:</span>
                      <span style={{ fontWeight: 600, color: 'var(--ms-blue-text)' }}>
                        WhatsApp Gateway Siap Kirim
                      </span>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                      <a
                        href="https://yaycount.goletin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <span>Buka Modul Billing Yaycount</span>
                        <Icon name="external-link" size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Accounting & Audit Workflow Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Alur Kerja Sistem</span>
            <h2 className="section-title">Siklus Akuntansi &amp; Kepatuhan ISAK 35 Otomatis</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Dari penerbitan tagihan siswa hingga penyusunan laporan keuangan konsolidasi siap audit oleh Akuntan Publik (KAP).
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {complianceWorkflow.map((flow, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid var(--ms-border)',
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--ms-blue)' }}>
                    {flow.step}
                  </span>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#EBF3FC', color: 'var(--ms-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={flow.icon} size={18} />
                  </div>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '4px' }}>
                  {flow.title}
                </h3>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ms-blue-text)', marginBottom: '10px' }}>
                  {flow.subtitle}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--ms-text-body)', lineHeight: '20px', margin: 0 }}>
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Sector Business Use Cases */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)', borderBottom: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Implementasi Sektoral</span>
            <h2 className="section-title">Dipercaya Oleh Berbagai Jenis Organisasi Nirlaba</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Disesuaikan secara spesifik untuk karakter transaksi yayasan, sekolah, pondok pesantren, dan lembaga sosial di Indonesia.
            </p>
          </div>

          <div className="segment-use-cases">
            {useCases.map((uc, idx) => (
              <div key={idx} className="use-case-card">
                <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', background: '#E2E8F0', color: '#334155', display: 'inline-block', marginBottom: '10px' }}>
                  {uc.badge}
                </span>
                <h3 className="use-case-title" style={{ fontSize: '18px', marginBottom: '8px' }}>
                  {uc.title}
                </h3>
                <p className="use-case-desc" style={{ fontSize: '13px', lineHeight: '20px' }}>
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison Table */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Komparasi Solusi</span>
            <h2 className="section-title">Mengapa Yayasan Memilih Yaycount ERP?</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Bandingkan keterbatasan pembukuan spreadsheet manual atau software akuntansi bisnis biasa dengan kapabilitas terdedikasi Yaycount ERP.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '32%' }}>Kriteria Tata Kelola Keuangan</th>
                  <th style={{ width: '34%' }}>Spreadsheet / Software Bisnis Biasa</th>
                  <th style={{ width: '34%', backgroundColor: '#EFF6FF', color: 'var(--ms-blue)' }}>Goletin Yaycount ERP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600 }}>{row.criteria}</td>
                    <td style={{ color: '#64748B' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: '#DC2626', fontWeight: 700 }}>✕</span>
                        <span>{row.spreadsheet}</span>
                      </div>
                    </td>
                    <td style={{ backgroundColor: '#F8FAFC' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: '#16A34A', fontWeight: 700 }}>✓</span>
                        <span style={{ fontWeight: 600, color: 'var(--ms-text-heading)' }}>{row.yaycount}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Corporate Consultation & Demo Request Form */}
      <section id="konsultasi" className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '32px' }}>
            <span className="section-eyebrow">Konsultasi Tata Kelola</span>
            <h2 className="section-title">Jadwalkan Demo &amp; Diskusi Tim Ahli Yaycount</h2>
            <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
              Konsultasikan migrasi data saldo awal, integrasi Virtual Account sekolah, serta implementasi standar ISAK 35 bersama spesialis ERP Karsasoft.
            </p>
          </div>

          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid var(--ms-border)',
              padding: '36px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}
          >
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon name="check" size={28} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
                  Permintaan Jadwal Demo Diterima!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ms-text-muted)', lineHeight: '22px', maxWidth: '480px', margin: '0 auto 20px' }}>
                  Terima kasih <strong>{formData.name}</strong>. Tim spesialis ERP Yayasan Karsasoft akan menghubungi Anda via WhatsApp ({formData.phone}) dan email dalam 1x24 jam kerja untuk menjadwalkan sesi konsultasi online.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary"
                  style={{ display: 'inline-flex' }}
                >
                  <span>Kirim Formulir Lain</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: H. Ahmad Zaki, M.Pd"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Email Dinas / Lembaga *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="bendahara@yayasan-teladan.sch.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-3456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                      Nama Yayasan / Lembaga *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Yayasan Pendidikan Bina Insani"
                      value={formData.foundationName}
                      onChange={(e) => setFormData({ ...formData, foundationName: e.target.value })}
                      className="mitra-form-input"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                    Jumlah Unit Operasional yang Dikelola
                  </label>
                  <select
                    value={formData.unitCount}
                    onChange={(e) => setFormData({ ...formData, unitCount: e.target.value })}
                    className="mitra-form-input"
                  >
                    <option value="1 Unit (Sekolah / Panti)">1 Unit (Sekolah / Panti Tunggal)</option>
                    <option value="2 - 5 Unit">2 - 5 Unit Sekolah / Pesantren Terpadu</option>
                    <option value="6 - 15 Unit">6 - 15 Unit Cabang / Perguruan Tinggi</option>
                    <option value="> 15 Unit (> 5.000 Siswa)">Lebih dari 15 Unit (&gt; 5.000 Siswa/Santri)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', display: 'block', marginBottom: '6px' }}>
                    Kebutuhan Khusus / Kendala Pembukuan Saat Ini
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Sebutkan kendala Anda, misalnya: rekonsiliasi SPP lambat, kesulitan pemisahan dana BOS, persiapan audit akuntan publik KAP..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mitra-form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn-primary" style={{ minWidth: '240px', justifyContent: 'center' }}>
                    <span>Jadwalkan Konsultasi Demo</span>
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
            <span className="section-eyebrow">Tanya Jawab Seputar Yaycount</span>
            <h2 className="section-title">Pertanyaan Umum Akuntansi Yayasan &amp; Nirlaba</h2>
            <p className="section-lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Jawaban seputar kepatuhan standar pelaporan ISAK 35, sistem penagihan SPP perbankan, dan kesiapan audit yayasan.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <GoletinFaq items={yaycountFaqItems} countLabel="5 Tanya Jawab Yaycount &amp; Akuntansi ISAK 35" />
          </div>
        </div>
      </section>

      {/* Bottom Enterprise CTA Banner */}
      <div className="section-padding" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kepatuhan Akuntansi &amp; Tata Kelola Yayasan
              </span>
              <h2 className="goletin-bottom-cta-title">
                Wujudkan Akuntabilitas Keuangan Yayasan Sesuai Standar ISAK 35
              </h2>
              <p className="goletin-bottom-cta-desc">
                Tinggalkan pembukuan manual spreadsheet yang rawan salah. Tingkatkan kepercayaan donatur, permudah penagihan SPP, dan raih predikat Wajar Tanpa Pengecualian (WTP) dalam audit KAP bersama Yaycount ERP.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a
                  href="https://yaycount.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Mulai Gunakan Yaycount</span>
                  <Icon name="external-link" size={15} />
                </a>
                <a href="#konsultasi" className="btn-secondary">
                  <span>Jadwalkan Konsultasi Yayasan</span>
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
