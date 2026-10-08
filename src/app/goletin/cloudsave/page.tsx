'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function GoletinCloudSavePage() {
  const cloudSavePillars = [
    {
      icon: 'security',
      title: 'Enkripsi Menyeluruh (At-Rest & In-Transit)',
      desc: 'Setiap berkas dienkripsi menggunakan standar militer AES-256 pada media penyimpanan dan TLS 1.3 selama proses transmisi data, mencegah intersepsi pihak ketiga.',
      badge: 'Enkripsi AES-256',
    },
    {
      icon: 'cloud',
      title: 'Kedaulatan Data Penuh di Indonesia',
      desc: 'Pusat data Tier-4 berlokasi di Jakarta dan Jawa Barat, memastikan kepatuhan 100% terhadap mandat UU Perlindungan Data Pribadi (UU PDP No. 27/2022).',
      badge: 'Sovereign Storage',
    },
    {
      icon: 'analytics',
      title: 'Manajemen Hak Akses & Audit Log Ketat',
      desc: 'Atur perizinan baca, tulis, atau unduh hingga tingkat folder dan individu. Dilengkapi rekam jejak audit (audit trail) siapa yang mengakses dan menyunting berkas.',
      badge: 'Audit Trail Lengkap',
    },
    {
      icon: 'docs',
      title: 'Pemulihan Versi & Proteksi Ransomware',
      desc: 'Riwayat versi berkas otomatis memungkinkan Anda mengembalikan dokumen yang tidak sengaja tertimpa atau terhapus hingga 90 hari sebelumnya.',
      badge: 'Version History',
    },
    {
      icon: 'saas',
      title: 'Integrasi Langsung Goletin Office & AI',
      desc: 'Buka dan sunting spreadsheet Sheets atau dokumen Docs secara langsung dari CloudSave tanpa perlu mengunduh berkas ke perangkat lokal.',
      badge: 'Ekosistem Terpadu',
    },
    {
      icon: 'shield',
      title: 'Berbagi Tautan Terproteksi Sandi & Masa Berlaku',
      desc: 'Bagikan berkas besar kepada rekan bisnis eksternal dengan batas waktu unduh (expiry date), proteksi sandi, dan opsi menonaktifkan pengunduhan.',
      badge: 'Secure Link Sharing',
    },
  ];

  const cloudFaqItems: FaqItem[] = [
    {
      id: 'cloudsave-capacity',
      q: 'Berapa kapasitas penyimpanan yang diperoleh setiap pengguna CloudSave?',
      a: 'Paket individu mendapatkan 50 GB hingga 1 TB penyimpanan awan, sementara paket Bisnis dan Enterprise mendapatkan alokasi terpusat (pooled storage) mulai dari 1 TB per lisensi dengan opsi ekspansi tanpa batas.',
    },
    {
      id: 'cloudsave-security',
      q: 'Apakah tim Karsasoft dapat melihat isi file yang disimpan di CloudSave?',
      a: 'Tidak. Karsasoft menerapkan arsitektur isolasi multi-tenant yang ketat dan enkripsi at-rest berbasis kunci enkripsi unik organisasi. Kami tidak memiliki akses ke berkas rahasia Anda.',
    },
    {
      id: 'cloudsave-backup',
      q: 'Bagaimana prosedur cadangan (backup) dan pemulihan bencana (disaster recovery)?',
      a: 'CloudSave mereplikasi data di beberapa zona ketersediaan (multi-AZ) di dalam negeri dengan snapshot harian otomatis untuk menjamin ketahanan berkas 99.999999999% (11 nines durability).',
    },
    {
      id: 'cloudsave-sync',
      q: 'Apakah tersedia aplikasi sinkronisasi folder desktop otomatis?',
      a: 'Ya, Goletin CloudSave Client tersedia untuk Windows dan macOS, memungkinkan sinkronisasi folder otomatis di latar belakang seperti halnya Google Drive atau OneDrive.',
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
                <span className="section-eyebrow">Penyimpanan Awan Terenkripsi Nasional</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  CloudSave: Ruang Simpan Berkas Aman & Berdaulat
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Solusi penyimpanan cloud korporasi untuk kolaborasi berkas terpusat, sinkronisasi otomatis multi-perangkat, dan perlindungan data rahasia perusahaan dengan enkripsi AES-256 di data center lokal berstandar internasional.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Akses CloudSave Portal</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <Link href="/goletin/paket-dan-harga" className="btn-secondary">
                    <span>Lihat Kuota & Harga</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Enkripsi AES-256</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>100% Data Center RI</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Multi-Device Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* 6 Key Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Fitur & Keamanan CloudSave</span>
              <h2 className="section-title">Keamanan Tingkat Perbankan untuk Setiap Berkas Anda</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Arsitektur penyimpanan cloud yang dirancang memenuhi standar kepatuhan regulasi industri paling sensitif di Indonesia.
              </p>
            </div>

            <div className="standards-grid">
              {cloudSavePillars.map((pillar, idx) => (
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
              <h2 className="section-title">Pertanyaan Seputar CloudSave</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar kapasitas kuota, perlindungan data, dan migrasi penyimpanan berkas.
              </p>
            </div>
            <GoletinFaq items={cloudFaqItems} countLabel="4 Tanya Jawab CloudSave" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Infrastruktur Penyimpanan Nasional
              </span>
              <h2 className="goletin-bottom-cta-title">
                Amankan Seluruh Berkas Bisnis Anda Hari Ini
              </h2>
              <p className="goletin-bottom-cta-desc">
                Pindahkan arsip dan kolaborasi kerja tim ke CloudSave dengan dukungan migrasi mandiri tanpa henti operasional.
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
                  <span>Buka CloudSave</span>
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
