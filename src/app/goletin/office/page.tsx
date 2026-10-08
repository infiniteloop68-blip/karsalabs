'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function GoletinOfficePage() {
  const [activeTab, setActiveTab] = useState<'docs' | 'sheets' | 'slides' | 'pdf'>('docs');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const app = searchParams.get('app');
      if (app && ['docs', 'sheets', 'slides', 'pdf'].includes(app)) {
        setActiveTab(app as 'docs' | 'sheets' | 'slides' | 'pdf');
      }
    }
  }, []);

  const officeApps = {
    docs: {
      name: 'Goletin Docs',
      logo: '/logos/docs.svg',
      tagline: 'Pengolah Kata Kolaboratif & Penyusunan Dokumen Korporasi',
      desc: 'Buat memo dinas, laporan manajemen, dan proposal bisnis secara bersamaan dengan fitur co-authoring real-time, riwayat revisi bertingkat, serta dukungan format .docx murni.',
      features: [
        'Kolaborasi multi-pengguna langsung dengan penunjuk kursor real-time',
        'Kompatibilitas 100% dengan dokumen Microsoft Word (.docx, .doc, .rtf)',
        'Riwayat revisi tak terbatas dengan pemulihan versi satu klik',
        'Integrasi pintasan Goletin AI untuk perangkuman dan proofreading naskah',
      ],
      previewHeadline: 'Laporan Kinerja Triwulan IV 2025.docx',
    },
    sheets: {
      name: 'Goletin Sheets',
      logo: '/logos/sheets.svg',
      tagline: 'Spreadsheet Finansial, Analisis Data & Pemodelan Formula Rumit',
      desc: 'Olah jutaan baris data keuangan dengan lebih dari 400 fungsi formula akuntansi, visualisasi pivot table dinamis, dan integrasi data otomatis ke laporan Yaycount ERP.',
      features: [
        'Dukungan 400+ formula matematis, statistik, lookup, dan finansial',
        'Pivot table interaktif dengan visualisasi grafik batang, garis, dan donat',
        'Kompatibilitas penuh impor & ekspor format Microsoft Excel (.xlsx, .csv)',
        'Perlindungan lembar kerja berbasis hak akses per-sel dan proteksi sandi',
      ],
      previewHeadline: 'Model Proyeksi Anggaran & Capex 2026.xlsx',
    },
    slides: {
      name: 'Goletin Slides',
      logo: '/logos/slides.svg',
      tagline: 'Kanvas Presentasi Eksekutif Visual & Menawan',
      desc: 'Rancang presentasi strategi perusahaan, pitch deck investasi, dan modul pelatihan dengan tata letak profesional, tipografi tajam, dan mode presenter interaktif.',
      features: [
        'Puluhan template slide korporasi siap pakai dengan palet warna elegan',
        'Mode Presenter dengan catatan pembicara privat dan penunjuk waktu',
        'Animasi transisi halus dan pengaturan layer vektor resolusi tinggi',
        'Ekspor instan ke format PowerPoint (.pptx) dan dokumen cetak PDF',
      ],
      previewHeadline: 'Paparan RUPS Tahunan Korporasi 2026.pptx',
    },
    pdf: {
      name: 'Goletin PDF Suite',
      logo: '/logos/pdf.svg',
      tagline: 'Pembaca, Editor, Konverter & Tanda Tangan Digital Terverifikasi',
      desc: 'Kelola dokumen kontrak dan arsip hukum dengan fitur penggabungan berkas, kompresi ukuran tanpa degradasi teks, serta sertifikasi tanda tangan digital sah.',
      features: [
        'Pembubuhan tanda tangan elektronik sah dengan stempel waktu tersertifikasi',
        'Alat penggabung (merge), pemisah (split), dan pengompres ukuran PDF instan',
        'Konversi dua arah antara PDF ke Word, Excel, dan gambar beresolusi tinggi',
        'Enkripsi berkas dengan algoritma proteksi sandi 256-bit standar arsip perbankan',
      ],
      previewHeadline: 'Perjanjian Kerjasama Operasional_Signed.pdf',
    },
  };

  const currentApp = officeApps[activeTab];

  const officeFaqItems: FaqItem[] = [
    {
      id: 'office-compatibility',
      q: 'Apakah Goletin Office kompatibel dengan file Microsoft Office (.docx, .xlsx, .pptx)?',
      a: 'Ya, 100% kompatibel. Anda dapat membuka, menyunting, dan menyimpan file Microsoft Word, Excel, dan PowerPoint tanpa pergeseran tata letak font, formula, maupun formatting tabel.',
    },
    {
      id: 'office-offline',
      q: 'Dapatkah Goletin Office digunakan secara offline tanpa sambungan internet?',
      a: 'Tentu. Tersedia Goletin Office Desktop Client untuk Windows dan Linux yang memungkinkan Anda bekerja offline dengan sinkronisasi otomatis ke CloudSave saat kembali terhubung ke internet.',
    },
    {
      id: 'office-sovereignty',
      q: 'Di mana file kerja kami disimpan saat menggunakan Goletin Office?',
      a: 'Seluruh dokumen disimpan di pusat data lokal Tier-4 di Indonesia melalui enkripsi AES-256. Data perusahaan Anda tidak pernah diekspor ke cloud asing, menjamin kepatuhan penuh terhadap UU Perlindungan Data Pribadi (UU PDP).',
    },
    {
      id: 'office-licensing',
      q: 'Bagaimana perbandingan biaya lisensi Goletin Office dibandingkan Office 365 / Google Workspace?',
      a: 'Goletin Office menawarkan penghematan lisensi hingga 40-60% per pengguna per tahun dengan biaya transparan dalam Rupiah (bebas risiko fluktuasi kurs USD) serta skema Enterprise Agreement tak terbatas untuk instansi skala besar.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner (Microsoft 365 Style) */}
          <div className="ms-hero-wrapper goletin-hero-banner">
            <div className="goletin-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Suite Produktivitas Kantor Mandiri</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Goletin Office: Docs, Sheets, Slides & PDF Terpadu
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Solusi produktivitas kerja kolaboratif berstandar enterprise buatan Indonesia. Sunting dokumen, olah lembar kerja akuntansi, rancang presentasi eksekutif, dan tandatangani berkas PDF secara simultan dengan kedaulatan data penuh.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka Goletin Office Web</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <Link href="/goletin/paket-dan-harga" className="btn-secondary">
                    <span>Lihat Paket Lisensi</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kompatibel 100% Office</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kolaborasi Real-Time</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Data Center Lokal Tier-4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive App Showcase Tabs */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Aplikasi dalam Goletin Office</span>
              <h2 className="section-title">Empat Aplikasi Kerja dalam Satu Akun Terpadu</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Beralih antar dokumen, spreadsheet, presentasi, dan berkas PDF tanpa perlu berganti platform atau membayar lisensi terpisah.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--ms-border-card)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Tab Header */}
              <div
                style={{
                  display: 'flex',
                  borderBottom: '1px solid var(--ms-border)',
                  backgroundColor: 'var(--ms-bg-subtle)',
                  flexWrap: 'wrap',
                }}
              >
                {(['docs', 'sheets', 'slides', 'pdf'] as const).map((tabKey) => {
                  const item = officeApps[tabKey];
                  const isActive = activeTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      type="button"
                      onClick={() => setActiveTab(tabKey)}
                      style={{
                        flex: '1 1 200px',
                        padding: '16px 20px',
                        border: 'none',
                        backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? 'var(--ms-blue-text)' : 'var(--ms-text-muted)',
                        borderBottom: isActive ? '3px solid var(--ms-blue-text)' : '3px solid transparent',
                        cursor: 'pointer',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <img src={item.logo} alt={item.name} width={22} height={22} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Body */}
              <div style={{ padding: '36px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '36px',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <img src={currentApp.logo} alt={currentApp.name} width={40} height={40} />
                      <div>
                        <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--ms-text-heading)', margin: 0 }}>
                          {currentApp.name}
                        </h3>
                        <span style={{ fontSize: '13px', color: 'var(--ms-blue-text)', fontWeight: 600 }}>
                          {currentApp.tagline}
                        </span>
                      </div>
                    </div>
                    <p style={{ fontSize: '14.5px', color: 'var(--ms-text-body)', lineHeight: '24px', marginBottom: '20px' }}>
                      {currentApp.desc}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                      {currentApp.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--ms-text-body)' }}>
                          <span style={{ marginTop: '3px', flexShrink: 0, display: 'inline-flex' }}>
                            <Icon name="check" size={16} className="trust-icon-check" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="https://goletin.com/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Buka {currentApp.name}</span>
                      <Icon name="external-link" size={14} />
                    </a>
                  </div>

                  {/* App Workspace Simulation Card */}
                  <div
                    style={{
                      backgroundColor: '#FAFBFB',
                      border: '1px solid var(--ms-border)',
                      borderRadius: '8px',
                      padding: '24px',
                      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: '12px',
                        borderBottom: '1px solid var(--ms-border)',
                        marginBottom: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ms-text-muted)', marginLeft: '8px' }}>
                          {currentApp.previewHeadline}
                        </span>
                      </div>
                      <span className="standard-badge" style={{ margin: 0, fontSize: '11px' }}>
                        Tersimpan Otomatis
                      </span>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--ms-border)',
                        borderRadius: '6px',
                        padding: '20px',
                        minHeight: '220px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <img src={currentApp.logo} alt="Icon" width={48} height={48} style={{ marginBottom: '12px' }} />
                      <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Ruang Kerja Aktif {currentApp.name}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--ms-text-muted)', maxWidth: '340px', margin: '0 auto 16px' }}>
                        Dukungan kolaborasi real-time tanpa batas jumlah anggota tim pada lisensi organisasi.
                      </p>
                      <a
                        href="https://goletin.com/dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ fontSize: '12.5px', padding: '6px 14px' }}
                      >
                        <span>Uji Coba Editor Sekarang</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section FAQ & Dukungan */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Pertanyaan Umum</span>
              <h2 className="section-title">Pertanyaan Seputar Goletin Office</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Pelajari kemudahan integrasi, migrasi dari solusi office sebelumnya, dan lisensi perusahaan.
              </p>
            </div>
            <GoletinFaq items={officeFaqItems} countLabel="4 Tanya Jawab Goletin Office" />
          </section>

          {/* Bottom Enterprise CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Penerapan Skala Korporasi
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Beralih ke Goletin Office Suite?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Tingkatkan efisiensi belanja software organisasi Anda dengan alternatif suite produktivitas nasional berdaulat dan berkualitas tinggi.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Lisensi Organisasi</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Buka Portal Goletin Office</span>
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
