import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Dukungan Tagihan & Faktur Pajak — Goletin Karsasoft',
  description:
    'Pusat bantuan penagihan, unduh e-Faktur PPN resmi DJP, pelaporan bukti potong PPh 23, metode pembayaran korporat, dan manajemen siklus langganan Goletin.',
  alternates: {
    canonical: '/goletin/dukungan/tagihan',
  },
  openGraph: {
    title: 'Dukungan Tagihan & Faktur Pajak — Goletin Karsasoft',
    description:
      'Pusat bantuan penagihan, e-Faktur PPN, bukti potong PPh 23, dan manajemen siklus langganan Goletin.',
    url: 'https://karsasoft.com/goletin/dukungan/tagihan',
    images: ['/og-image.jpg'],
  },
};

export default function DukunganTagihanPage() {
  const billingTopics = [
    {
      icon: 'file-text',
      color: '#0078D4',
      title: 'e-Faktur Pajak & Bukti Potong PPh 23',
      desc: 'Penerbitan faktur pajak resmi terintegrasi DJP, pelaporan withholding tax, dan validasi NPWP 16-digit.',
      items: [
        'Cara mengunduh e-Faktur PDF & XML resmi DJP',
        'Alur penyerahan Bukti Potong PPh 23 (2%) untuk pemotongan invoice',
        'Memperbarui data NPWP/NITKU dan alamat penagihan entitas',
        'Ketentuan batas waktu penerbitan e-Faktur akhir bulan',
      ],
    },
    {
      icon: 'credit-card',
      color: '#107C41',
      title: 'Metode Pembayaran & Perbankan',
      desc: 'Informasi rekening Virtual Account, transfer korporat, kartu kredit bisnis, dan termin pembayaran invoice.',
      items: [
        'Daftar Virtual Account bank nasional (BCA, Mandiri, BNI, BRI)',
        'Konfirmasi transfer manual dan pengiriman bukti bayar',
        'Pengajuan termin pembayaran korporat (Term of Payment 30 Hari)',
        'Mekanisme perpanjangan otomatis lewat kartu kredit perusahaan',
      ],
    },
    {
      icon: 'users',
      color: '#8764B8',
      title: 'Kelola Lisensi, Seats & Prorate',
      desc: 'Panduan menambah atau mengurangi kursi pengguna dan simulasi perhitungan prorata biaya di tengah masa langganan.',
      items: [
        'Cara menambah kursi (seats) Goletin di tengah periode aktif',
        'Rumus perhitungan tagihan prorata hari tersisa (Prorate calculation)',
        'Mengalihkan lisensi karyawan yang mutasi atau resign',
        'Konversi paket dari edisi Personal ke Business Enterprise',
      ],
    },
    {
      icon: 'refresh-cw',
      color: '#D83B01',
      title: 'Perpanjangan, Upgrade & Pembatalan',
      desc: 'Pengaturan siklus penagihan tahunan vs bulanan, notifikasi jatuh tempo, dan opsi penyesuaian paket.',
      items: [
        'Hemat hingga 20% dengan beralih ke komitmen tahunan',
        'Jadwal notifikasi pengingat sebelum tanggal jatuh tempo',
        'Masa tenggang (grace period) saat tagihan tertunda',
        'Kebijakan pembatalan langganan dan retensi cadangan data',
      ],
    },
  ];

  const billingFaqs = [
    {
      q: 'Bagaimana cara meminta e-Faktur PPN atas pembelian langganan Goletin?',
      a: 'e-Faktur PPN (tarif berlaku sesuai regulasi DJP) diterbitkan otomatis oleh sistem Karsasoft paling lambat 3 hari kerja setelah pembayaran terverifikasi. Anda dapat mengunduhnya langsung di Billing Portal menu "Faktur & Dokumen Pajak" atau menerima lampiran PDF & XML melalui email finance terdaftar.',
    },
    {
      q: 'Perusahaan kami memotong PPh Pasal 23 sebesar 2%, bagaimana mekanismenya?',
      a: 'Bagi entitas pemungut PPh 23, Anda dapat membayarkan nilai invoice dikurangi potongan PPh 23 (98% dari DPP + PPN 11%). Bukti Potong PPh 23 (Bupot Elektronik) wajib diunggah ke Portal Penagihan kami dalam waktu maksimal 30 hari kalender sejak tanggal pelunasan.',
    },
    {
      q: 'Bagaimana perhitungan biaya jika kami menambah user lisensi di pertengahan bulan?',
      a: 'Penambahan user baru menggunakan sistem prorate harian. Anda hanya dikenakan biaya untuk sisa hari yang belum berjalan hingga tanggal siklus perpanjangan berikutnya, sehingga Anda tidak membayar penuh untuk hari yang sudah lewat.',
    },
    {
      q: 'Apakah tersedia opsi pembayaran Term of Payment (TOP) 30 atau 60 hari?',
      a: 'Ya, opsi Term of Payment (TOP 14 / TOP 30 / TOP 60) tersedia secara resmi untuk pelanggan paket Bisnis Enterprise dengan minimum komitmen tahunan tertentu melalui penandatanganan Perjanjian Layanan Induk (MSA).',
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
                <Icon name="credit-card" size={14} color="#0078D4" />
                PUSAT DUKUNGAN • TAGIHAN & LANGGANAN
              </span>

              <h1 className="support-hero-h1">Dukungan tagihan, faktur pajak & langganan</h1>

              <p className="support-hero-desc">
                Kelola faktur resmi, unduh e-Faktur PPN DJP, pelajari prosedur bukti potong PPh 23, serta pembaruan metode pembayaran dan perhitungan prorata lisensi Goletin Anda.
              </p>

              <div className="support-search-container">
                <div className="support-search-input-wrap">
                  <Icon name="search" size={20} className="support-search-icon" />
                  <input
                    type="text"
                    placeholder="Cari info e-Faktur, PPh 23, nomor rekening VA, prorate seats, atau siklus tagihan..."
                    className="support-search-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Topic Hubs */}
        <section className="support-topic-hubs-section">
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">Topik bantuan penagihan</h2>
              <p className="support-section-subtitle">
                Pilih topik di bawah ini untuk panduan detail mengenai kepatuhan pajak, perbankan, dan lisensi.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {billingTopics.map((topic, idx) => (
                <div key={idx} className="support-topic-hub-card">
                  <div className="support-topic-hub-header">
                    <div
                      className="support-topic-hub-icon-pill"
                      style={{ backgroundColor: `${topic.color}15`, color: topic.color }}
                    >
                      <Icon name={topic.icon} size={20} />
                    </div>
                    <h3 className="support-topic-hub-title">{topic.title}</h3>
                  </div>

                  <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                    <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, marginBottom: '16px' }}>
                      {topic.desc}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {topic.items.map((item, iIdx) => (
                        <li key={iIdx} style={{ fontSize: '13px', color: '#0067B8', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <Icon name="check-circle" size={14} color="#107C41" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="support-topic-hub-footer">
                    <Link href="/kontak?kategori=tagihan" className="support-topic-hub-footer-link">
                      <span>Bantuan penagihan</span>
                      <Icon name="chevron-right" size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Penagihan & Pajak */}
        <section style={{ padding: '48px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E1DFDD', borderBottom: '1px solid #E1DFDD' }}>
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">Pertanyaan umum seputar tagihan & perpajakan</h2>
              <p className="support-section-subtitle">
                Jawaban ringkas dan akurat mengenai tata cara administrasi keuangan dan perpajakan di Karsasoft.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '20px' }}>
              {billingFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#F8F9FA',
                    border: '1px solid #E1DFDD',
                    borderRadius: '8px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ background: '#EFF6FC', color: '#0078D4', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700, fontSize: '13px' }}>
                      Q
                    </div>
                    <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#242424', margin: 0, lineHeight: 1.4 }}>
                      {faq.q}
                    </h3>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.6, margin: '4px 0 0 40px' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Self-Service Portal Banner */}
        <section style={{ padding: '54px 0' }}>
          <div className="support-content-width">
            <div
              style={{
                background: 'linear-gradient(135deg, #004B87 0%, #0078D4 100%)',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '40px 36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px',
                boxShadow: '0 4px 16px rgba(0, 120, 212, 0.2)',
              }}
            >
              <div style={{ maxWidth: '620px' }}>
                <span style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700, opacity: 0.85, display: 'block', marginBottom: '8px' }}>
                  PORTAL PENAGIHAN MANDIRI KORPORAT
                </span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 10px', color: '#FFFFFF', lineHeight: 1.3 }}>
                  Butuh salinan invoice resmi atau rekonsiliasi pembayaran cepat?
                </h3>
                <p style={{ fontSize: '14px', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
                  Akses portal finansial untuk mengunduh proforma invoice, e-Faktur QR DJP, serta memperbarui kartu kredit bisnis Anda tanpa perlu antre di customer service.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="/kontak?bantuan=billing"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#004B87',
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
                  <span>Hubungi Tim Billing</span>
                  <Icon name="arrow-right" size={14} />
                </Link>
                <Link
                  href="/goletin/paket-dan-harga"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '14px',
                    padding: '12px 22px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                  }}
                >
                  Lihat Paket & Harga
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
