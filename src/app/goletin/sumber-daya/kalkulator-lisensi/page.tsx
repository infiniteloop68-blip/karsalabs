import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { LicenseCalculatorClient } from '@/components/LicenseCalculatorClient';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export const metadata: Metadata = {
  title: 'Kalkulator Penghematan Biaya Lisensi (TCO) — Goletin Karsasoft',
  description:
    'Hitung penghematan anggaran belanja software kantor dan ERP perusahaan Anda hingga 70% dengan beralih ke Goletin Suite. Simulasi interaktif biaya lisensi Microsoft 365, Google Workspace, dan SAP.',
  alternates: {
    canonical: '/goletin/sumber-daya/kalkulator-lisensi',
  },
  openGraph: {
    title: 'Kalkulator Penghematan Biaya Lisensi (TCO) — Goletin Karsasoft',
    description:
      'Simulasi instan penghematan anggaran belanja software kantor per tahun. Bebaskan anggaran perusahaan dari biaya lisensi asing yang mahal.',
    url: 'https://karsasoft.com/goletin/sumber-daya/kalkulator-lisensi',
    images: ['/og-image.jpg'],
  },
};

const strategicAdvantages = [
  {
    icon: 'file-check',
    badge: 'Pajak Resmi DJP',
    title: 'Kedaulatan Fiskal & e-Faktur PPN',
    desc: 'Seluruh transaksi ditagihkan oleh PT Karsa Mulia Bersama dengan Faktur Pajak PPN (e-Faktur) resmi DJP dan pemotongan PPh 23 sah tanpa risiko withholding tax luar negeri.',
  },
  {
    icon: 'docs',
    badge: 'Two-Way Format',
    title: 'Kompatibilitas 100% Format Office',
    desc: 'Goletin Docs, Sheets, dan Slides mendukung kompatibilitas dua arah penuh dengan file .docx, .xlsx, .pptx, dan .pdf tanpa komplikasi konversi atau formula rusak.',
  },
  {
    icon: 'security',
    badge: 'Server Lokal Tier-4',
    title: 'Kedaulatan Data & UU PDP',
    desc: 'Data operasional dan finansial tersimpan aman di data center Tier-4 berdaulat Indonesia, menjamin 100% kepatuhan terhadap UU Pelindungan Data Pribadi (UU PDP No. 27/2022).',
  },
  {
    icon: 'shield',
    badge: 'SLA Dedicated',
    title: 'Dukungan Teknis Lokal & SLA',
    desc: 'Layanan customer support dan dedicated account manager berbahasa Indonesia via WhatsApp resmi korporat, telepon kantor, dan SLA respons cepat level L2/L3.',
  },
];

const kalkulatorFaqItems: FaqItem[] = [
  {
    id: 'faq-ppn-faktur',
    q: 'Apakah harga lisensi Goletin sudah termasuk PPN dan diterbitkan Faktur Pajak resmi?',
    a: 'Ya, seluruh transaksi pembelian lisensi Goletin ditagihkan resmi oleh entitas PT Karsa Mulia Bersama dengan Faktur Pajak PPN (e-Faktur) resmi DJP serta pemotongan PPh Pasal 23 yang sah sesuai hukum perpajakan Indonesia, tanpa kerumitan withholding tax lintas batas negara.',
  },
  {
    id: 'faq-file-compatibility',
    q: 'Bagaimana dengan format berkas Word, Excel, dan PowerPoint yang sudah ada di organisasi kami?',
    a: 'Goletin Docs, Sheets, dan Slides mendukung kompatibilitas dua arah 100% dengan format file industri standar seperti .docx, .xlsx, .pptx, dan .pdf tanpa perlu konversi manual atau risiko formatting/formula rusak.',
  },
  {
    id: 'faq-hidden-cost',
    q: 'Apakah ada biaya tersembunyi seperti biaya server, lisensi database, atau pembaruan tahunan?',
    a: 'Tidak ada sama sekali. Biaya langganan Goletin sudah mencakup kapasitas penyimpanan cloud 1 TB per pengguna, pembaruan keamanan berkala otomatis, modul perpajakan yang diperbarui saat aturan DJP berganti, serta dukungan teknis resmi tanpa biaya tersembunyi.',
  },
  {
    id: 'faq-migration-support',
    q: 'Bagaimana proses migrasi data dari Microsoft 365, Google Workspace, atau ERP lama?',
    a: 'Tim teknis Karsasoft menyediakan layanan asistensi migrasi data massal tanpa downtime, panduan pelatihan staf, dan pendampingan implementasi intensif selama 30 hari pertama masa transisi organisasi.',
  },
];

export default function KalkulatorLisensiPage() {
  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Interactive Calculator Section */}
          <section id="kalkulator-interaktif" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Simulasi Efisiensi & Total Cost of Ownership (TCO)</span>
              <h1 className="section-title">Kalkulator Penghematan Biaya Lisensi Software</h1>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Ketahui potensi penghematan anggaran belanja software kantor dan ERP organisasi Anda hingga 70% per tahun. Sesuaikan jumlah kursi karyawan, jenis software yang digunakan saat ini, dan paket Goletin untuk melihat estimasi penghematan secara real-time.
              </p>
            </div>

            <LicenseCalculatorClient />
          </section>

          {/* 4 Keunggulan Strategis Section */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Keunggulan Strategis</span>
              <h2 className="section-title">Mengapa Beralih ke Ekosistem Goletin Lebih Menguntungkan?</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Tidak hanya memangkas belanja software tahunan secara signifikan, Goletin memberikan kepastian hukum dan kepatuhan perpajakan nasional.
              </p>
            </div>

            <div className="standards-grid">
              {strategicAdvantages.map((adv, i) => (
                <div key={i} className="standard-card">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      marginBottom: '14px',
                    }}
                  >
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
                      <Icon name={adv.icon} size={20} />
                    </div>
                    <span className="standard-badge" style={{ margin: 0 }}>
                      {adv.badge}
                    </span>
                  </div>
                  <h3 className="standard-card-title">{adv.title}</h3>
                  <p className="standard-card-desc">{adv.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Informasi Lisensi & Perpajakan</span>
              <h2 className="section-title">Pertanyaan Umum Terkait Biaya Lisensi & Transisi</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Fakta penting seputar perbandingan harga, perpajakan, kompatibilitas, dan proses migrasi ke Goletin.
              </p>
            </div>
            <GoletinFaq items={kalkulatorFaqItems} countLabel="4 Tanya Jawab Lisensi & TCO" />
          </section>

          {/* Bottom Enterprise CTA Banner (Matching /goletin) */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Konsultasi Pengadaan Lisensi
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Mengoptimalkan Anggaran Software Organisasi Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Diskusikan simulasi TCO organisasi Anda bersama Enterprise Account Manager kami dan dapatkan penawaran khusus migrasi lisensi.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Estimasi TCO</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/goletin/bisnis" className="btn-secondary">
                  <span>Pelajari Paket Bisnis</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
