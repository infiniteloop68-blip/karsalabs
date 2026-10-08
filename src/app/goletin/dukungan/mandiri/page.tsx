import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Sumber Daya Mandiri — Pusat Bantuan & Tutorial Goletin',
  description:
    'Panduan mandiri langkah-demi-langkah, pemecahan masalah instalasi desktop, aktivasi lisensi pengguna, dan tutorial lengkap aplikasi Goletin Docs, Sheets, dan Slides.',
  alternates: {
    canonical: '/goletin/dukungan/mandiri',
  },
  openGraph: {
    title: 'Sumber Daya Mandiri — Pusat Bantuan & Tutorial Goletin',
    description:
      'Panduan mandiri langkah-demi-langkah, pemecahan masalah instalasi, dan tutorial lengkap aplikasi Goletin.',
    url: 'https://karsasoft.com/goletin/dukungan/mandiri',
    images: ['/og-image.jpg'],
  },
};

export default function MandiriSupportPage() {
  const quickCategories = [
    {
      icon: 'laptop',
      color: '#0078D4',
      title: 'Instalasi & Pengaturan Awal',
      desc: 'Panduan mengunduh aplikasi desktop Windows & Mac, instalasi tanpa hambatan, serta aktivasi lisensi personal.',
      items: [
        'Cara mengunduh penginstal Goletin Desktop resmi',
        'Langkah aktivasi lisensi menggunakan 25-digit key',
        'Menghubungkan akun kerja dengan aplikasi desktop',
        'Penyelesaian kendala saat instalasi gagal di Windows 10/11',
      ],
    },
    {
      icon: 'lock',
      color: '#107C41',
      title: 'Akun, Kata Sandi & Keamanan',
      desc: 'Pengelolaan profil pengguna, pemulihan akses akun, dan aktivasi autentikasi dua faktor (MFA).',
      items: [
        'Cara reset kata sandi jika lupa kredensial',
        'Mengaktifkan autentikasi dua faktor (2FA) dengan Authenticator',
        'Mengelola sesi login aktif di berbagai perangkat',
        'Memperbarui email dan informasi kontak profil',
      ],
    },
    {
      icon: 'docs',
      color: '#D83B01',
      title: 'Aplikasi Goletin Office (Docs, Sheets, Slides)',
      desc: 'Panduan fitur produktivitas, pembuatan template resmi, kolaborasi real-time, dan ekspor berkas.',
      items: [
        'Format berkas yang didukung (DOCX, XLSX, PPTX, PDF)',
        'Kolaborasi dokumen bersama tim secara bersamaan',
        'Penggunaan formula akuntansi dan pivot table di Sheets',
        'Mode presentasi proyektor dan catatan pembicara di Slides',
      ],
    },
    {
      icon: 'cloud',
      color: '#008272',
      title: 'Sinkronisasi CloudSave & Cadangan',
      desc: 'Pengaturan folder sinkronisasi otomatis, penyimpanan data berdaulat, dan pemulihan versi berkas.',
      items: [
        'Cara memilih folder komputer yang disinkronkan ke CloudSave',
        'Memulihkan versi berkas lampau (Version History 30 hari)',
        'Bekerja dalam mode luring (offline) tanpa koneksi internet',
        'Mengatasi konflik versi saat dua pengguna mengedit bersamaan',
      ],
    },
  ];

  const popularArticles = [
    {
      title: 'Langkah Cepat Memulai Goletin Desktop untuk Pengguna Baru',
      category: 'PEMULA',
      readTime: '3 min baca',
      desc: 'Pelajari dasar-dasar navigasi aplikasi, cara membuka berkas baru, dan sinkronisasi ke cloud dalam 5 menit pertama.',
    },
    {
      title: 'Mengatasi Kendala Sinkronisasi CloudSave yang Tertunda',
      category: 'PENYIMPANAN',
      readTime: '4 min baca',
      desc: 'Langkah mudah memeriksa status jaringan, membersihkan cache lokal, dan melanjutkan proses upload otomatis.',
    },
    {
      title: 'Panduan Mengatur Autentikasi Dua Langkah (2FA) di Ponsel',
      category: 'KEAMANAN',
      readTime: '3 min baca',
      desc: 'Lindungi akun kerja Anda dari akses tidak sah menggunakan aplikasi Microsoft Authenticator atau Google Authenticator.',
    },
    {
      title: 'Cara Mengimpor Template Laporan Keuangan ke Goletin Sheets',
      category: 'TUTORIAL',
      readTime: '5 min baca',
      desc: 'Gunakan template bagan akun dan neraca standar untuk mempercepat penyusunan laporan keuangan bulanan.',
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
                <Icon name="laptop" size={14} color="#0078D4" />
                PUSAT DUKUNGAN INDIVIDU • SUMBER DAYA MANDIRI
              </span>

              <h1 className="support-hero-h1">Sumber daya mandiri & panduan pengguna</h1>

              <p className="support-hero-desc">
                Temukan tutorial langkah-demi-langkah, solusi pemecahan masalah cepat, dan materi bantuan mandiri untuk memaksimalkan penggunaan aplikasi Goletin kapan pun Anda butuhkan.
              </p>

              <div className="support-search-container">
                <div className="support-search-input-wrap">
                  <Icon name="search" size={20} className="support-search-icon" />
                  <input
                    type="text"
                    placeholder="Cari panduan mandiri, cara instalasi, reset sandi, atau shortcut..."
                    className="support-search-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Quick Category Cards */}
        <section className="support-topic-hubs-section">
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">Kategori panduan mandiri</h2>
              <p className="support-section-subtitle">
                Pilih topik di bawah untuk melihat rincian artikel dan petunjuk operasional.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {quickCategories.map((cat, idx) => (
                <div key={idx} className="support-topic-hub-card">
                  <div className="support-topic-hub-header">
                    <div
                      className="support-topic-hub-icon-pill"
                      style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                    >
                      <Icon name={cat.icon} size={20} />
                    </div>
                    <h3 className="support-topic-hub-title">{cat.title}</h3>
                  </div>

                  <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                    <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, marginBottom: '16px' }}>
                      {cat.desc}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {cat.items.map((item, iIdx) => (
                        <li key={iIdx} style={{ fontSize: '13px', color: '#0067B8', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <Icon name="book" size={14} color="#0078D4" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="support-topic-hub-footer">
                    <Link href="/goletin/dukungan" className="support-topic-hub-footer-link">
                      <span>Lihat panduan lengkap</span>
                      <Icon name="chevron-right" size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Self-Help Articles */}
        <section style={{ padding: '40px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E1DFDD', borderBottom: '1px solid #E1DFDD' }}>
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">Artikel panduan populer</h2>
              <p className="support-section-subtitle">
                Artikel bantuan yang paling sering dibaca dan membantu pengguna menyelesaikan kendala secara mandiri.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {popularArticles.map((art, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E1DFDD',
                    borderRadius: '8px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 1.6px 3.6px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#0078D4', background: '#EFF6FC', padding: '2px 8px', borderRadius: '4px' }}>
                      {art.category}
                    </span>
                    <span style={{ fontSize: '12px', color: '#706E6B' }}>{art.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#242424', marginBottom: '8px', lineHeight: 1.35 }}>
                    {art.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#605E5C', lineHeight: 1.5, marginBottom: '16px', flexGrow: 1 }}>
                    {art.desc}
                  </p>
                  <Link href="/goletin/dukungan" style={{ fontSize: '13px', fontWeight: 600, color: '#0067B8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <span>Baca artikel panduan</span>
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Escalation CTA */}
        <section style={{ padding: '48px 0', textAlign: 'center' }}>
          <div className="support-content-width">
            <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFFFFF', border: '1px solid #E1DFDD', borderRadius: '8px', padding: '32px 24px' }}>
              <Icon name="headset" size={36} color="#0078D4" />
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#242424', margin: '14px 0 8px' }}>
                Belum menemukan jawaban atas kendala Anda?
              </h3>
              <p style={{ fontSize: '14px', color: '#605E5C', marginBottom: '20px', lineHeight: 1.5 }}>
                Staf spesialis teknis Karsasoft siap membantu Anda melalui tiket bantuan daring atau forum tanya jawab komunitas pengguna.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/kontak?bantuan=tiket" className="support-btn-channel-primary" style={{ width: 'auto', padding: '10px 24px' }}>
                  Buka Tiket Bantuan
                </Link>
                <Link href="/goletin/dukungan/komunitas" className="support-btn-channel-secondary" style={{ width: 'auto', padding: '9px 24px' }}>
                  Tanya Komunitas
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
