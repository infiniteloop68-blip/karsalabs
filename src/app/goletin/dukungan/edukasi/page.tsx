import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Goletin Educator Center & Program Kampus — Goletin Karsasoft',
  description:
    'Pusat dukungan akademik untuk dosen dan mahasiswa akuntansi: lisensi laboratorium gratis, modul kurikulum praktikum audit & perpajakan siap ajar, serta sertifikasi keahlian profesional.',
  alternates: {
    canonical: '/goletin/dukungan/edukasi',
  },
  openGraph: {
    title: 'Goletin Educator Center & Program Kampus — Goletin Karsasoft',
    description:
      'Pusat dukungan akademik: lisensi laboratorium gratis, modul kurikulum praktikum, dan sertifikasi keahlian profesional.',
    url: 'https://karsasoft.com/goletin/dukungan/edukasi',
    images: ['/og-image.jpg'],
  },
};

export default function DukunganEdukasiPage() {
  const eduPrograms = [
    {
      icon: 'monitor',
      color: '#0078D4',
      title: 'Hibah Lisensi Laboratorium Kampus',
      desc: 'Dukungan lisensi gratis hingga 200 workstation laboratorium komputer untuk perkuliahan praktikum akuntansi dan auditing.',
      items: [
        'Akses penuh ke YayCount Cloud, IndoTax, JET Pro & Sampling Pro',
        'Dasbor instruktur dosen untuk mengawasi tugas & lembar kerja mahasiswa',
        'Pembaruan otomatis sesuai regulasi perpajakan & standar PSAK terkini',
        'Dukungan asistensi teknis saat instalasi lab komputer kampus',
      ],
    },
    {
      icon: 'book-open',
      color: '#107C41',
      title: 'Kurikulum & Modul Praktikum Siap Ajar',
      desc: 'Materi silabus perkuliahan lengkap dengan dataset transaksi studi kasus riil yang siap digunakan dalam satu semester.',
      items: [
        'Modul Praktikum Akuntansi Keuangan Menengah berbasis YayCount',
        'Studi Kasus Audit Berbantuan Komputer (CAATs) dengan JET & Sampling Pro',
        'Simulasi Penghitungan PPh 21 TER & e-Faktur Pajak Masa di IndoTax',
        'Kunci jawaban dosen dan rubrik penilaian objektif terstandar',
      ],
    },
    {
      icon: 'award',
      color: '#D83B01',
      title: 'Sertifikasi Keahlian Mahasiswa (GCAS/GCAA)',
      desc: 'Uji kompetensi resmi untuk meningkatkan daya saing lulusan sarjana dan vokasi akuntansi di industri profesional.',
      items: [
        'Goletin Certified Accounting Specialist (GCAS) untuk siklus akuntansi',
        'Goletin Certified Audit Analyst (GCAA) untuk teknik audit berbantuan komputer',
        'Lencana digital (digital badge) terverifikasi untuk profil LinkedIn',
        'Ujian daring berbasis Computer-Based Test (CBT) dengan sertifikat resmi',
      ],
    },
    {
      icon: 'users',
      color: '#8764B8',
      title: 'Dosen Tamu, Riset & Magang Mahasiswa',
      desc: 'Kolaborasi sinergis antara perguruan tinggi dengan praktisi industri teknologi finansial Karsasoft.',
      items: [
        'Program kuliah tamu praktisi industri & workshop audit digital',
        'Penyediaan data sintetik anonim untuk penelitian skripsi dan tesis',
        'Peluang magang bersertifikat bagi mahasiswa di tim R&D Karsasoft',
        'Forum temu dosen akuntansi dan pelatihan Training of Trainers (ToT)',
      ],
    },
  ];

  const campusStats = [
    { value: '45+', label: 'Perguruan Tinggi Mitra' },
    { value: '8.200+', label: 'Mahasiswa Bersertifikat' },
    { value: '120+', label: 'Dosen Terlatih ToT' },
    { value: '100% Gratis', label: 'Biaya Lisensi Lab Kampus' },
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
                <Icon name="book" size={14} color="#0078D4" />
                PUSAT DUKUNGAN AKADEMIK • GOLETIN EDUCATOR CENTER
              </span>

              <h1 className="support-hero-h1">Goletin Educator Center & kemitraan kampus</h1>

              <p className="support-hero-desc">
                Memberdayakan civitas akademika perguruan tinggi dan sekolah vokasi dengan perangkat lunak akuntansi mutakhir, modul praktikum siap pakai, dan sertifikasi keahlian industri.
              </p>

              <div className="support-search-container">
                <div className="support-search-input-wrap">
                  <Icon name="search" size={20} className="support-search-icon" />
                  <input
                    type="text"
                    placeholder="Cari silabus praktikum, modul lab audit, panduan hibah kampus, atau jadwal sertifikasi..."
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
              {campusStats.map((st, idx) => (
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

        {/* 4 Academic Programs */}
        <section className="support-topic-hubs-section">
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">Program unggulan akademik</h2>
              <p className="support-section-subtitle">
                Solusi komprehensif untuk menjembatani kurikulum perkuliahan dengan standar kompetensi industri akuntansi modern.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {eduPrograms.map((prog, idx) => (
                <div key={idx} className="support-topic-hub-card">
                  <div className="support-topic-hub-header">
                    <div
                      className="support-topic-hub-icon-pill"
                      style={{ backgroundColor: `${prog.color}15`, color: prog.color }}
                    >
                      <Icon name={prog.icon} size={20} />
                    </div>
                    <h3 className="support-topic-hub-title">{prog.title}</h3>
                  </div>

                  <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                    <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, marginBottom: '16px' }}>
                      {prog.desc}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {prog.items.map((item, iIdx) => (
                        <li key={iIdx} style={{ fontSize: '13px', color: '#0067B8', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <Icon name="check-circle" size={14} color="#107C41" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="support-topic-hub-footer">
                    <Link href="/kontak?kategori=pendidikan" className="support-topic-hub-footer-link">
                      <span>Pelajari program</span>
                      <Icon name="chevron-right" size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Banner */}
        <section style={{ padding: '48px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E1DFDD' }}>
          <div className="support-content-width">
            <div
              style={{
                backgroundColor: '#F3F2F1',
                borderRadius: '12px',
                padding: '40px 32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '24px',
                border: '1px solid #E1DFDD',
              }}
            >
              <div style={{ maxWidth: '640px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#107C41', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  PENDAFTARAN HIBAH PENDIDIKAN DIBUKA
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#242424', margin: '8px 0 10px' }}>
                  Apakah Anda dosen atau perwakilan program studi akuntansi?
                </h3>
                <p style={{ fontSize: '14px', color: '#605E5C', lineHeight: 1.6, margin: 0 }}>
                  Daftarkan laboratorium kampus Anda untuk menerima lisensi nirlaba resmi Karsasoft serta paket buku modul praktikum cetak & digital bagi mahasiswa Anda.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="/kontak?kategori=kampus_grant"
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
                  <span>Ajukan Lisensi Hibah Lab</span>
                  <Icon name="arrow-right" size={14} />
                </Link>
                <Link
                  href="/goletin/dukungan/komunitas"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#323130',
                    fontWeight: 600,
                    fontSize: '14px',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    border: '1px solid #8A8886',
                  }}
                >
                  Forum Pendidik
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
