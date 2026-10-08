import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Sumber Daya & Dukungan Mitra KAP — Goletin Karsasoft',
  description:
    'Pusat sumber daya teknis resmi untuk Kantor Akuntan Publik (KAP), konsultan implementasi ERP, dan mitra integrator: toolkit kertas kerja audit, API sandbox, dan tiket eskalasi L2/L3 prioritas.',
  alternates: {
    canonical: '/goletin/dukungan/mitra',
  },
  openGraph: {
    title: 'Sumber Daya & Dukungan Mitra KAP — Goletin Karsasoft',
    description:
      'Pusat sumber daya teknis resmi untuk KAP, konsultan ERP, dan mitra integrator Goletin.',
    url: 'https://karsasoft.com/goletin/dukungan/mitra',
    images: ['/og-image.jpg'],
  },
};

export default function DukunganMitraPage() {
  const partnerHubs = [
    {
      icon: 'briefcase',
      color: '#0078D4',
      title: 'Toolkit Kertas Kerja Audit KAP (ISA/SPAP)',
      desc: 'Panduan operasional dan template Kertas Kerja Pemeriksaan (KKP) yang selaras dengan standar audit IAPI.',
      items: [
        'Panduan audit jurnal transaksi substansif (ISA 240) via JET Pro',
        'Metodologi penentuan sampel audit moneter (MUS) di Sampling Pro',
        'Format ekspor KKP terenkripsi untuk kertas kerja review partner',
        'Checklist verifikasi kepatuhan pengakuan sewa PSAK 116',
      ],
    },
    {
      icon: 'code',
      color: '#107C41',
      title: 'Dokumentasi API, Sandbox & SDK Integrasi',
      desc: 'Spesifikasi teknis arsitektur untuk tim konsultan implementasi yang mengintegrasikan Goletin dengan sistem inti klien.',
      items: [
        'Spesifikasi REST API v2 & OpenAPI/Swagger Docs',
        'Penyediaan akun sandbox multi-tenant untuk simulasi staging',
        'Webhooks orkestrasi posting jurnal dari sistem pihak ketiga',
        'Standar enkripsi dan keamanan data API gateway korporat',
      ],
    },
    {
      icon: 'file-text',
      color: '#D83B01',
      title: 'Partner Sales Kit & Panduan Demonstrasi',
      desc: 'Materi pemasaran, slide presentasi resmi, dan kalkulator estimasi ROI untuk memenangkan penawaran proyek.',
      items: [
        'Dek presentasi resmi Goletin Slides (.pptx) dengan brand bersama',
        'Kalkulator komparasi efisiensi biaya (Total Cost of Ownership)',
        'Skenario skrip demonstrasi produk interaktif (Live Demo Script)',
        'Studi kasus implementasi industri manufaktur, ritel, dan jasa',
      ],
    },
    {
      icon: 'award',
      color: '#8764B8',
      title: 'Sertifikasi Konsultan & Dukungan L2/L3',
      desc: 'Program sertifikasi konsultan implementasi resmi dan jalur cepat eskalasi masalah langsung ke tim R&D Karsasoft.',
      items: [
        'Ujian sertifikasi Goletin Certified Implementation Partner (GCIP)',
        'Akses antrean tiket bantuan darurat SLA respon 30 menit',
        'Sesi konsultasi arsitektur mingguan bersama Principal Engineer',
        'Laporan rekapitulasi komisi reseller & performa lisensi klien',
      ],
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="support-page-container">
        {/* Hero Section */}
        <section className="support-hero-section">
          <div className="support-content-width">
            <div className="support-hero-header">
              <span className="support-hero-badge">
                <Icon name="briefcase" size={14} color="#0078D4" />
                JARINGAN KEMITRAAN KARSASOFT • SUMBER DAYA MITRA
              </span>

              <h1 className="support-hero-h1">Pusat sumber daya & dukungan teknis mitra</h1>

              <p className="support-hero-desc">
                Portal terpadu bagi Kantor Akuntan Publik (KAP), konsultan pajak, dan system integrator untuk mengakses materi teknis, kertas kerja audit SPAP, dokumentasi API, dan eskalasi prioritas.
              </p>

              <div className="support-search-container">
                <div className="support-search-input-wrap">
                  <Icon name="search" size={20} className="support-search-icon" />
                  <input
                    type="text"
                    placeholder="Cari toolkit audit KAP, spesifikasi API REST, materi sales kit, atau sertifikasi GCIP..."
                    className="support-search-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Partner Hub Cards */}
        <section className="support-topic-hubs-section">
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">Kategori sumber daya mitra</h2>
              <p className="support-section-subtitle">
                Pilih modul di bawah ini untuk mengunduh toolkit atau mempelajari panduan teknis implementasi.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {partnerHubs.map((hub, idx) => (
                <div key={idx} className="support-topic-hub-card">
                  <div className="support-topic-hub-header">
                    <div
                      className="support-topic-hub-icon-pill"
                      style={{ backgroundColor: `${hub.color}15`, color: hub.color }}
                    >
                      <Icon name={hub.icon} size={20} />
                    </div>
                    <h3 className="support-topic-hub-title">{hub.title}</h3>
                  </div>

                  <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                    <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, marginBottom: '16px' }}>
                      {hub.desc}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {hub.items.map((item, iIdx) => (
                        <li key={iIdx} style={{ fontSize: '13px', color: '#0067B8', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <Icon name="check-circle" size={14} color="#107C41" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="support-topic-hub-footer">
                    <Link href="/goletin/mitra" className="support-topic-hub-footer-link">
                      <span>Buka portal mitra</span>
                      <Icon name="chevron-right" size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Tiers Overview */}
        <section style={{ padding: '48px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E1DFDD', borderBottom: '1px solid #E1DFDD' }}>
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">Tingkat kemitraan resmi</h2>
              <p className="support-section-subtitle">
                Fasilitas dukungan teknis dan manfaat bisnis yang disesuaikan dengan kapasitas firma Anda.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ border: '1px solid #E1DFDD', borderRadius: '8px', padding: '24px', background: '#F8F9FA' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#605E5C', textTransform: 'uppercase' }}>TIER 1</span>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#242424', margin: '6px 0 12px' }}>Registered Partner</h3>
                <p style={{ fontSize: '13px', color: '#605E5C', lineHeight: 1.5, marginBottom: '16px' }}>
                  Ideal untuk konsultan independen atau firma akuntansi rintisan yang ingin memperkenalkan Goletin ke klien mereka.
                </p>
                <div style={{ fontSize: '13px', color: '#242424', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div>✓ Akses Materi Sales Kit & Brosur</div>
                  <div>✓ Komisi referral lisensi 15%</div>
                  <div>✓ Jalur dukungan tiket standar (SLA 8 jam)</div>
                </div>
              </div>

              <div style={{ border: '2px solid #0078D4', borderRadius: '8px', padding: '24px', background: '#FFFFFF', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-11px', right: '16px', background: '#0078D4', color: '#FFFFFF', fontSize: '11px', fontWeight: 700, padding: '2px 10px', borderRadius: '12px' }}>
                  POPULER KAP
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#0078D4', textTransform: 'uppercase' }}>TIER 2</span>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#242424', margin: '6px 0 12px' }}>Certified KAP Partner</h3>
                <p style={{ fontSize: '13px', color: '#605E5C', lineHeight: 1.5, marginBottom: '16px' }}>
                  Dirancang khusus bagi Kantor Akuntan Publik yang menggunakan paket audit JET Pro & Sampling Pro untuk penugasan klien.
                </p>
                <div style={{ fontSize: '13px', color: '#242424', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div>✓ Semua fasilitas Registered Partner</div>
                  <div>✓ Lisensi internal NFR (Not For Resale) KAP</div>
                  <div>✓ Kertas kerja terverifikasi standar IAPI</div>
                  <div>✓ Jalur prioritas L2 (SLA respon 1 jam)</div>
                </div>
              </div>

              <div style={{ border: '1px solid #E1DFDD', borderRadius: '8px', padding: '24px', background: '#F8F9FA' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#107C41', textTransform: 'uppercase' }}>TIER 3</span>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#242424', margin: '6px 0 12px' }}>Enterprise Integrator</h3>
                <p style={{ fontSize: '13px', color: '#605E5C', lineHeight: 1.5, marginBottom: '16px' }}>
                  Kemitraan strategis untuk perusahaan konsultan IT & system integrator yang menangani implementasi ERP skala besar.
                </p>
                <div style={{ fontSize: '13px', color: '#242424', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div>✓ Kredensial API Gateway Enterprise & Sandbox tak terbatas</div>
                  <div>✓ Dedicated Solutions Architect Karsasoft</div>
                  <div>✓ Co-marketing dan peluang tender korporat bersama</div>
                  <div>✓ Jalur eskalasi L3 darurat 24/7 (SLA 30 menit)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Portal Callout */}
        <section style={{ padding: '48px 0' }}>
          <div className="support-content-width">
            <div
              style={{
                background: '#242424',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '40px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px',
              }}
            >
              <div style={{ maxWidth: '640px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#9CDCFE', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  PORTAL MITRA KARSASOFT
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '8px 0 10px', color: '#FFFFFF' }}>
                  Ingin mendaftarkan firma Anda sebagai mitra resmi?
                </h3>
                <p style={{ fontSize: '14px', color: '#CCCCCC', lineHeight: 1.6, margin: 0 }}>
                  Pelajari skema bagi hasil, persyaratan teknis, dan daftarkan KAP atau perusahaan konsultan Anda untuk mendapatkan akses instan ke seluruh toolkit mitra.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="/goletin/mitra"
                  style={{
                    backgroundColor: '#0078D4',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '14px',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span>Program Kemitraan</span>
                  <Icon name="arrow-right" size={14} />
                </Link>
                <Link
                  href="/kontak?kategori=mitra"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '14px',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    border: '1px solid #666666',
                  }}
                >
                  Hubungi Partner Manager
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
