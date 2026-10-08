import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Pusat Sumber Daya Goletin — Panduan, Kalkulator, API & Riset | Karsasoft',
  description:
    'Pusat materi, kalkulator biaya lisensi TCO, panduan kepatuhan regulasi PSAK/IFRS, dokumentasi teknis API v2, roadmap AI, studi kasus industri, dan artikel engineering Karsasoft.',
  alternates: {
    canonical: '/goletin/sumber-daya',
  },
  openGraph: {
    title: 'Pusat Sumber Daya Goletin — Panduan, Kalkulator, API & Riset | Karsasoft',
    description:
      'Akses panduan teknis, kalkulator ROI lisensi, matriks regulasi PSAK/IFRS, dokumentasi API v2, dan riset rekayasa software Goletin.',
    url: 'https://karsasoft.com/goletin/sumber-daya',
    images: ['/og-image.jpg'],
  },
};

export default function SumberDayaHubPage() {
  const resourceCards = [
    {
      id: 'panduan-ai',
      title: 'Pelajari Penggunaan Goletin AI',
      category: 'KECERDASAN BUATAN',
      badgeColor: '#007D65',
      icon: 'ai',
      desc: 'Panduan prompt engineering finansial, panduan OCR cerdas faktur pajak, asisten rekonsiliasi bank otomatis, dan jaminan keamanan Zero-Retention.',
      href: '/goletin/sumber-daya/panduan-ai',
      actionLabel: 'Pelajari AI Goletin',
      highlights: ['Prompt Engineering Keuangan', 'OCR Faktur & Bukti Potong', 'Sovereign On-Premise LLM'],
    },
    {
      id: 'kalkulator-lisensi',
      title: 'Kalkulator Penghematan Biaya Lisensi',
      category: 'SIMULASI & TCO',
      badgeColor: '#107C41',
      icon: 'calculator',
      desc: 'Simulasikan penghematan belanja lisensi software kantor (Microsoft 365 / Google Workspace / SAP) beralih ke Goletin Suite dengan proyeksi 3 tahun.',
      href: '/goletin/sumber-daya/kalkulator-lisensi',
      actionLabel: 'Buka Kalkulator TCO',
      highlights: ['Simulasi Interaktif Real-time', 'Perbandingan Kursi Pengguna', 'Ekspor Ringkasan ROI'],
    },
    {
      id: 'panduan-regulasi',
      title: 'Panduan Kepatuhan Regulasi PSAK & IFRS',
      category: 'KEPATUHAN & STANDAR',
      badgeColor: '#D83B01',
      icon: 'compliance',
      desc: 'Matriks kepatuhan resmi terhadap PSAK 71 (IFRS 9), PSAK 73 (IFRS 16), ISAK 35, PMK 168 TER PPh 21, dan UU Perlindungan Data Pribadi (UU PDP).',
      href: '/goletin/sumber-daya/panduan-regulasi',
      actionLabel: 'Lihat Matriks Regulasi',
      highlights: ['Checklist Audit KAP', 'Metodologi Stage 1-3 ECL', 'Aturan Sewa ROU PSAK 73'],
    },
    {
      id: 'dokumentasi-api',
      title: 'Dokumentasi API & Integrasi Sistem',
      category: 'PENGEMBANG SISTEM',
      badgeColor: '#5C2D91',
      icon: 'code',
      desc: 'Spesifikasi REST API v2, Webhook real-time, SDK Node/Python/Go, dan konektor siap pakai untuk SAP S/4HANA, Oracle NetSuite, Accurate, dan Jurnal.',
      href: '/goletin/sumber-daya/dokumentasi-api',
      actionLabel: 'Jelajahi REST API Docs',
      highlights: ['Otentikasi OAuth2 & JWT', 'Koleksi cURL & TypeScript', 'Konektor ERP Enterprise'],
    },
    {
      id: 'pelatihan-tim',
      title: 'Pusat Edukasi & Pelatihan Tim',
      category: 'AKADEMI & SERTIFIKASI',
      badgeColor: '#008272',
      icon: 'book',
      desc: 'Silabus kurikulum onboarding staf akuntansi, sertifikasi profesional Goletin Certified Specialist, modul lab interaktif, serta jadwal webinar berkala.',
      href: '/goletin/sumber-daya/pelatihan-tim',
      actionLabel: 'Akses Pusat Edukasi',
      highlights: ['Jalur Sertifikasi Resmi', 'Modul Siap Pakai Akuntan', 'In-House Training Korporat'],
    },
    {
      id: 'roadmap-ai',
      title: 'Peta Strategi AI & Roadmap Rilis',
      category: 'TRANSPARANSI PRODUK',
      badgeColor: '#004E8C',
      icon: 'laptop',
      desc: 'Jadwal pembaruan fitur kuartalan 2026-2027, ekspansi engine kepatuhan otonom, status pipeline produk aktif, dan dewan voting fitur komunitas.',
      href: '/goletin/sumber-daya/roadmap-ai',
      actionLabel: 'Cek Roadmap Rilis',
      highlights: ['Timeline Rilis Q1–Q4', 'Status Pengembangan Langsung', 'Voting Permintaan Fitur'],
    },
    {
      id: 'studi-kasus',
      title: 'Studi Kasus & Riset Implementasi',
      category: 'BUKTI & METRIK',
      badgeColor: '#B146C2',
      icon: 'analytics',
      desc: 'Kisah nyata implementasi di BPR konsorsium, jaringan 85 yayasan sekolah nasional, KAP 10 mitra di Jakarta, dan perusahaan ritel berskala nasional.',
      href: '/goletin/sumber-daya/studi-kasus',
      actionLabel: 'Baca Kisah Sukses',
      highlights: ['Peningkatan Kecepatan 400%', 'Penghematan Biaya 68%', '100% Lolos Review Regulator'],
    },
    {
      id: 'engineering-blog',
      title: 'Goletin Engineering Blog',
      category: 'REKAYASA SISTEM',
      badgeColor: '#323130',
      icon: 'terminal',
      desc: 'Catatan teknis mendalam tentang arsitektur komputasi WASM + Go, enkripsi zero-knowledge pada CloudSave, fine-tuning LLM perbankan, dan sovereign cloud.',
      href: '/goletin/sumber-daya/engineering-blog',
      actionLabel: 'Baca Engineering Blog',
      highlights: ['Kriptografi End-to-End', 'Optimasi Engine Sejuta Baris', 'Arsitektur Kedaulatan Data'],
    },
  ];

  const featuredWhitepapers = [
    {
      title: 'Buku Putih Kedaulatan Data & Regulasi Finansial 2026',
      desc: 'Analisis risiko hukum menyimpan berkas akuntansi di cloud asing berdasarkan UU PDP & regulasi OJK.',
      format: 'PDF • 34 Halaman',
      downloadHref: '/kontak',
    },
    {
      title: 'Kertas Kerja Panduan Transisi PSAK 71 Portofolio Kredit UMKM',
      desc: 'Metodologi praktis pemodelan matriks provisi kredit macet dan perhitungan cadangan kerugian penurunan nilai.',
      format: 'XLSX + PDF Toolkit',
      downloadHref: '/goletin/sumber-daya/panduan-regulasi',
    },
    {
      title: 'Panduan Arsitektur Integrasi ERP SAP dengan Engine Pajak Karsasoft',
      desc: 'Spesifikasi teknis pipeline integrasi data faktur, penarikan e-SPT, dan rekonsiliasi PPh Pasal 21 TER.',
      format: 'Dokumentasi Teknis API',
      downloadHref: '/goletin/sumber-daya/dokumentasi-api',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="karsa-resource-container">
        {/* Hero Section */}
        <section className="karsa-resource-hero">
          <div className="container">
            <div className="karsa-resource-hero-inner">
              <span className="karsa-resource-eyebrow">
                <Icon name="book" size={14} color="#007D65" />
                PUSAT SUMBER DAYA & PENGETAHUAN GOLETIN
              </span>

              <h1 className="karsa-resource-headline">
                Pusat Sumber Daya, Panduan & Rekayasa Goletin
              </h1>

              <p className="karsa-resource-desc">
                Jelajahi panduan penggunaan AI finansial, kalkulator penghematan biaya lisensi (TCO), matriks kepatuhan PSAK/IFRS, dokumentasi teknis API v2, silabus pelatihan, roadmap produk, dan catatan riset rekayasa kami.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                <Link href="/goletin/sumber-daya/panduan-ai" className="karsa-resource-chip">
                  <Icon name="ai" size={14} color="#007D65" /> Panduan AI
                </Link>
                <Link href="/goletin/sumber-daya/kalkulator-lisensi" className="karsa-resource-chip">
                  <Icon name="calculator" size={14} color="#007D65" /> Kalkulator TCO
                </Link>
                <Link href="/goletin/sumber-daya/panduan-regulasi" className="karsa-resource-chip">
                  <Icon name="compliance" size={14} color="#007D65" /> Regulasi PSAK
                </Link>
                <Link href="/goletin/sumber-daya/dokumentasi-api" className="karsa-resource-chip">
                  <Icon name="code" size={14} color="#007D65" /> REST API
                </Link>
                <Link href="/goletin/sumber-daya/engineering-blog" className="karsa-resource-chip">
                  <Icon name="terminal" size={14} color="#007D65" /> Tech Blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Main Resource Grid */}
        <section className="section-padding">
          <div className="container">
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">KATALOG SUMBER DAYA</span>
              <h2 className="section-title" style={{ fontSize: '36px', lineHeight: '44px', marginBottom: '10px' }}>
                8 Pilar Sumber Daya Resmi Goletin
              </h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Dirancang khusus untuk membantu analis keuangan, auditor KAP, manajer IT, dan eksekutif perusahaan memaksimalkan efisiensi.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {resourceCards.map((res) => (
                <div key={res.id} className="karsa-resource-card">
                  <div style={{ padding: '24px 24px 18px', borderBottom: '1px solid var(--ms-border, #DFE7E3)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--ms-blue-light, #E6FCF7)',
                          color: 'var(--ms-blue-text, #007D65)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name={res.icon} size={22} color="#007D65" />
                      </div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.6px',
                          color: '#007D65',
                          backgroundColor: '#E6FCF7',
                          padding: '3px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        {res.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ms-text-heading, #0E1726)', lineHeight: 1.35, marginBottom: '8px' }}>
                      {res.title}
                    </h3>

                    <p style={{ fontSize: '14px', color: 'var(--ms-text-muted, #5E6D82)', lineHeight: 1.55, margin: 0 }}>
                      {res.desc}
                    </p>
                  </div>

                  <div style={{ padding: '16px 24px', flexGrow: 1, backgroundColor: 'var(--ms-bg-subtle, #F6FAF8)' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-text-heading, #0E1726)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                      Topik Utama:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {res.highlights.map((h, i) => (
                        <li key={i} style={{ fontSize: '13px', color: 'var(--ms-text-body, #1E293B)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Icon name="check" size={13} color="#007D65" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ padding: '16px 24px', borderTop: '1px solid var(--ms-border, #DFE7E3)', backgroundColor: '#FFFFFF' }}>
                    <Link href={res.href} className="karsa-resource-link">
                      <span>{res.actionLabel}</span>
                      <Icon name="arrow-right" size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Whitepapers & Toolkits */}
        <section className="section-padding section-bg-subtle">
          <div className="container">
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">MATERI EKSKLUSIF & DOKUMEN PRAKTIK</span>
              <h2 className="section-title" style={{ fontSize: '34px', lineHeight: '42px', marginBottom: '8px' }}>
                Dokumen Putih & Toolkit Profesional
              </h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Materi referensi berbobot tinggi yang dikompilasi oleh tim akuntan terdaftar, konsultan IFRS, dan tim rekayasa perangkat lunak Karsasoft.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {featuredWhitepapers.map((wp, i) => (
                <div
                  key={i}
                  className="karsa-resource-card"
                  style={{ padding: '28px', justifyContent: 'space-between' }}
                >
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#007D65',
                        backgroundColor: '#E6FCF7',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        marginBottom: '14px',
                      }}
                    >
                      {wp.format}
                    </span>
                    <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--ms-text-heading, #0E1726)', lineHeight: 1.35, marginBottom: '8px' }}>
                      {wp.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--ms-text-muted, #5E6D82)', lineHeight: 1.55, marginBottom: '20px' }}>
                      {wp.desc}
                    </p>
                  </div>

                  <Link href={wp.downloadHref} className="karsa-resource-link">
                    <span>Akses Dokumen</span>
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Assistance Callout */}
        <section className="section-padding">
          <div className="container">
            <div className="karsa-resource-banner-dark">
              <span className="karsa-resource-eyebrow" style={{ backgroundColor: 'rgba(0, 237, 194, 0.15)', borderColor: '#00EDC2', color: '#00EDC2' }}>
                <Icon name="laptop" size={14} color="#00EDC2" />
                KONSULTASI TEKNIS & ADVISORY REGULASI
              </span>

              <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#FFFFFF', maxWidth: '720px', margin: 0, lineHeight: 1.3 }}>
                Membutuhkan Pembahasan Kustom untuk Organisasi Anda?
              </h2>

              <p style={{ fontSize: '15.5px', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '640px', margin: 0, lineHeight: 1.6 }}>
                Tim konsultan akuntansi, auditor sistem informasi, dan insinyur Goletin siap memberikan sesi briefing teknis, demo langsung, atau kajian kelayakan PoC tanpa komitmen awal.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                <Link href="/kontak" className="btn-primary">
                  <span>Jadwalkan Konsultasi Teknis</span>
                  <Icon name="arrow-right" size={15} />
                </Link>

                <Link href="/goletin/paket-dan-harga" className="btn-secondary" style={{ borderColor: 'rgba(255, 255, 255, 0.4)', color: '#FFFFFF' }}>
                  <span>Lihat Paket & Harga Lisensi</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
