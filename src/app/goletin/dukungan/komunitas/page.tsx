import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Komunitas Pengguna & Forum Tanya Jawab — Goletin Karsasoft',
  description:
    'Forum diskusi resmi komunitas pengguna Goletin se-Indonesia. Temukan solusi terverifikasi dari akuntan, konsultan pajak, auditor KAP, dan spesialis produk Karsasoft.',
  alternates: {
    canonical: '/goletin/dukungan/komunitas',
  },
  openGraph: {
    title: 'Komunitas Pengguna & Forum Tanya Jawab — Goletin Karsasoft',
    description:
      'Forum diskusi resmi komunitas pengguna Goletin se-Indonesia. Solusi terverifikasi dari akuntan dan auditor KAP.',
    url: 'https://karsasoft.com/goletin/dukungan/komunitas',
    images: ['/og-image.jpg'],
  },
};

export default function DukunganKomunitasPage() {
  const forumCategories = [
    { name: 'Semua Diskusi', count: '1,420', active: true },
    { name: 'YayCount ERP & Akuntansi', count: '512' },
    { name: 'IndoTax & e-Faktur Pajak', count: '384' },
    { name: 'Audit & CAATs (JET & Sampling)', count: '246' },
    { name: 'PSAK 116 & PSAK 109', count: '158' },
    { name: 'CloudSave & Infrastruktur', count: '120' },
  ];

  const trendingThreads = [
    {
      id: 1,
      title: 'Solusi rekonsiliasi PPh 21 TER bulanan dengan bukti potong A1 tahunan di IndoTax',
      category: 'IndoTax & Pajak',
      replies: 28,
      votes: 142,
      author: 'Hendri Kurniawan, BAP',
      authorRole: 'Konsultan Pajak Berlisensi',
      solved: true,
      timeAgo: '3 jam lalu',
      snippet:
        'Bagi rekan-rekan yang menemui selisih desimal pembulatan saat generate formulir 1721-A1 di akhir tahun buku, pastikan pengaturan tabel tarif TER di menu Preferensi Pajak sudah di-set ke mode Pembulatan Penuh ke Bawah sesuai PER-16/PJ/2024...',
    },
    {
      id: 2,
      title: 'Praktik terbaik sampling audit moneter (MUS) untuk populasi lebih dari 100.000 transaksi di Sampling Pro',
      category: 'Audit & CAATs',
      replies: 19,
      votes: 96,
      author: 'Dian Permatasari, CPA',
      authorRole: 'Senior Audit Manager KAP',
      solved: true,
      timeAgo: '5 jam lalu',
      snippet:
        'Saat menguji saldo piutang material dengan populasi 120k baris, gunakan modul Stratifikasi Interval Otomatis sebelum menarik sampel acak agar saldo bernilai di atas Tolerable Misstatement langsung terisolasi 100%...',
    },
    {
      id: 3,
      title: 'Migrasi Chart of Accounts (COA) dari sistem legacy ke YayCount Cloud tanpa jeda transaksi',
      category: 'YayCount ERP',
      replies: 34,
      votes: 210,
      author: 'Bambang Sutrisno',
      authorRole: 'Financial Controller',
      solved: true,
      timeAgo: '1 hari lalu',
      snippet:
        'Berikut langkah-langkah praktis mapping 4-level sub-akun dan impor saldo awal per cut-off 31 Desember menggunakan template CSV bawaan Karsasoft agar jurnal penyesuaian tidak duplikat...',
    },
    {
      id: 4,
      title: 'Automasi backup off-site harian dengan enkripsi AES-256 di CloudSave untuk audit ISO 27001',
      category: 'CloudSave & Keamanan',
      replies: 15,
      votes: 88,
      author: 'Rian Firdaus',
      authorRole: 'Lead Sysadmin Enterprise',
      solved: false,
      timeAgo: '2 hari lalu',
      snippet:
        'Apakah ada skrip PowerShell resmi atau webhook CLI untuk memicu snapshot cadangan basis data lokal langsung ke bucket CloudSave Tier-4 Jakarta setiap pukul 02:00 dini hari?',
    },
  ];

  const communityStats = [
    { value: '18.500+', label: 'Anggota Aktif' },
    { value: '4.200+', label: 'Solusi Terverifikasi' },
    { value: '12 Menit', label: 'Rata-rata Respon Pertama' },
    { value: '100%', label: 'Dukungan Spesialis Produk' },
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
                <Icon name="message-square" size={14} color="#0078D4" />
                FORUM KOMUNITAS RESMI • TANYA JAWAB PENGGUNA
              </span>

              <h1 className="support-hero-h1">Komunitas pengguna Goletin & tanya jawab</h1>

              <p className="support-hero-desc">
                Bergabung bersama praktisi akuntansi, auditor KAP, manajer pajak, dan administrator IT se-Indonesia untuk saling bertukar solusi, praktik terbaik, dan kode automasi.
              </p>

              <div className="support-search-container">
                <div className="support-search-input-wrap">
                  <Icon name="search" size={20} className="support-search-icon" />
                  <input
                    type="text"
                    placeholder="Cari pertanyaan, kode error, formula akuntansi, atau topik diskusi..."
                    className="support-search-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E1DFDD', padding: '24px 0' }}>
          <div className="support-content-width">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', textAlign: 'center' }}>
              {communityStats.map((st, idx) => (
                <div key={idx} style={{ padding: '8px' }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#0078D4', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    {st.value}
                  </div>
                  <div style={{ fontSize: '13px', color: '#605E5C', fontWeight: 500 }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Forum Main Content */}
        <section style={{ padding: '40px 0' }}>
          <div className="support-content-width">
            {/* Filter Pills & Ask Button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {forumCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: cat.active ? 600 : 500,
                      backgroundColor: cat.active ? '#0078D4' : '#F3F2F1',
                      color: cat.active ? '#FFFFFF' : '#323130',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span>{cat.name}</span>
                    <span style={{ fontSize: '11px', opacity: cat.active ? 0.9 : 0.7 }}>({cat.count})</span>
                  </button>
                ))}
              </div>

              <Link
                href="/kontak?kategori=komunitas_tanya"
                style={{
                  backgroundColor: '#107C41',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  padding: '9px 20px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                <Icon name="message-square" size={16} />
                <span>Ajukan Pertanyaan Baru</span>
              </Link>
            </div>

            {/* Thread List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {trendingThreads.map((thread) => (
                <div
                  key={thread.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E1DFDD',
                    borderRadius: '8px',
                    padding: '24px',
                    boxShadow: '0 1.6px 3.6px rgba(0, 0, 0, 0.04)',
                    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      {thread.solved ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#DFF6DD', color: '#107C41', fontSize: '11.5px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                          <Icon name="check-circle" size={13} color="#107C41" />
                          TERVERIFIKASI
                        </span>
                      ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#FFF4CE', color: '#797775', fontSize: '11.5px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                          DISKUSI TERBUKA
                        </span>
                      )}
                      <span style={{ fontSize: '12px', color: '#0078D4', fontWeight: 600, background: '#EFF6FC', padding: '2px 8px', borderRadius: '4px' }}>
                        {thread.category}
                      </span>
                      <span style={{ fontSize: '12px', color: '#706E6B' }}>• {thread.timeAgo}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px', color: '#605E5C' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Icon name="thumbs-up" size={13} color="#0078D4" />
                        <strong>{thread.votes}</strong> suara
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Icon name="message-square" size={13} color="#605E5C" />
                        <strong>{thread.replies}</strong> tanggapan
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '16.5px', fontWeight: 600, color: '#242424', marginBottom: '10px', lineHeight: 1.35 }}>
                    <Link href={`#thread-${thread.id}`} style={{ color: '#242424', textDecoration: 'none' }}>
                      {thread.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.6, marginBottom: '16px' }}>
                    {thread.snippet}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #F3F2F1', fontSize: '12.5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#0078D4', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700 }}>
                        {thread.author.charAt(0)}
                      </div>
                      <span style={{ fontWeight: 600, color: '#323130' }}>{thread.author}</span>
                      <span style={{ color: '#8A8886' }}>({thread.authorRole})</span>
                    </div>

                    <Link href={`#thread-${thread.id}`} style={{ color: '#0067B8', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <span>Lihat diskusi lengkap</span>
                      <Icon name="chevron-right" size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Guidelines & External Groups */}
        <section style={{ padding: '48px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E1DFDD' }}>
          <div className="support-content-width">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              <div style={{ background: '#F8F9FA', border: '1px solid #E1DFDD', borderRadius: '8px', padding: '28px' }}>
                <Icon name="shield" size={28} color="#0078D4" />
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#242424', margin: '12px 0 8px' }}>
                  Kode Etik & Pedoman Komunitas
                </h3>
                <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.6, marginBottom: '16px' }}>
                  Komunitas Goletin mengedepankan lingkungan diskusi yang profesional, saling menghargai, dan menjamin kerahasiaan data keuangan organisasi. Jangan membagikan data pribadi (NIK, password, token API) di forum publik.
                </p>
                <Link href="/privasi" style={{ fontSize: '13px', fontWeight: 600, color: '#0067B8', textDecoration: 'none' }}>
                  Baca panduan etika komunitas &rarr;
                </Link>
              </div>

              <div style={{ background: '#F8F9FA', border: '1px solid #E1DFDD', borderRadius: '8px', padding: '28px' }}>
                <Icon name="users" size={28} color="#107C41" />
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#242424', margin: '12px 0 8px' }}>
                  Grup Diskusi Spesialis Terverifikasi
                </h3>
                <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.6, marginBottom: '16px' }}>
                  Ikuti saluran siaran Telegram dan komunitas praktisi WhatsApp Karsasoft untuk update regulasi perpajakan terbaru, rilis patch perangkat lunak, dan undangan webinar bulanan.
                </p>
                <Link href="/kontak?kategori=komunitas_grup" style={{ fontSize: '13px', fontWeight: 600, color: '#107C41', textDecoration: 'none' }}>
                  Minta tautan undangan grup terverifikasi &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
