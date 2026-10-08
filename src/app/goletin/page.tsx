import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EcosystemExplorer } from '@/components/EcosystemExplorer';
import { GoletinFaq } from '@/components/GoletinFaq';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Goletin — Ekosistem Perangkat Lunak Produktivitas, Keuangan & Kepatuhan',
  description:
    'Rangkaian 18+ aplikasi perangkat lunak mandiri buatan Karsasoft: Goletin AI, CloudSave, Docs, Sheets, Slides, Yaycount ERP, IndoTax, dan engine kalkulasi kepatuhan IFRS 9 / PSAK 73.',
  alternates: {
    canonical: '/goletin',
  },
  openGraph: {
    title: 'Goletin — Ekosistem Perangkat Lunak Produktivitas, Keuangan & Kepatuhan',
    description:
      'Rangkaian 18+ aplikasi perangkat lunak mandiri buatan Karsasoft untuk produktivitas, keuangan, dan kepatuhan regulasi.',
    url: 'https://karsasoft.com/goletin',
    images: ['/og-image.jpg'],
  },
};

export default function GoletinProductPage() {
  return (
    <>
      <GoletinSubNav />
      <div className="section-padding">
        <div className="container">
          {/* Goletin Product Hero Banner (Microsoft 365 Style) */}
          <div className="ms-hero-wrapper goletin-hero-banner">
            <div className="goletin-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Produk Resmi Karsasoft</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Goletin: Ekosistem Software Mandiri & Terintegrasi
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Satu akun untuk mengakses seluruh rangkaian aplikasi kerja modern: kecerdasan buatan multimodal, ruang kerja awan kolaboratif, ERP yayasan, hingga engine kalkulasi regulasi keuangan dan audit berstandar internasional.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka Portal Goletin.com</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <Link href="/kontak" className="btn-secondary">
                    <span>Konsultasi Lisensi Organisasi</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>18+ Aplikasi Terkoneksi</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Standar IFRS & PSAK</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kedaulatan Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Goletin Suite */}
          <div id="pilar" className="goletin-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <img src="/logos/goletin-ai.svg" alt="Search & AI" width={48} height={48} />
              </div>
              <h3 className="pillar-title">Search & AI</h3>
              <p className="pillar-desc">Asisten penalaran logika dan mesin pencari privat tanpa pelacakan data pribadi.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <img src="/logos/docs.svg" alt="Office & Produktivitas" width={48} height={48} />
              </div>
              <h3 className="pillar-title">Office & Produktivitas</h3>
              <p className="pillar-desc">Editor dokumen, spreadsheet finansial, presentasi, dan pengelolaan PDF kolaboratif.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <img src="/logos/yaycount.svg" alt="ERP & Pajak Indonesia" width={48} height={48} />
              </div>
              <h3 className="pillar-title">ERP & Pajak Indonesia</h3>
              <p className="pillar-desc">Yaycount ERP untuk nirlaba/sekolah dan IndoTax untuk kepatuhan tarif PPh 21 TER & PPN.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <img src="/logos/eclpro.svg" alt="Kepatuhan IFRS & Audit" width={48} height={48} />
              </div>
              <h3 className="pillar-title">Kepatuhan IFRS & Audit</h3>
              <p className="pillar-desc">Kalkulasi matematis IFRS 9 (ECL), PSAK 73 sewa, audit sampling ISA 530, dan deteksi fraud ISA 240.</p>
            </div>
          </div>

          {/* Catalog Header & Interactive Explorer */}
          <div id="katalog" className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">Daftar Lengkap Aplikasi</span>
            <h2 className="section-title">Katalog 21 Aplikasi dalam Ekosistem Goletin</h2>
            <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Temukan modul yang sesuai dengan kebutuhan divisi Anda. Setiap produk dirancang untuk saling melengkapi dalam satu ekosistem yang terintegrasi.
            </p>
          </div>

          <EcosystemExplorer initialCategory="all" />

          {/* Section Kepatuhan IFRS & PSAK */}
          <section id="kepatuhan" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)', marginTop: '56px' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Sertifikasi & Kepatuhan Regulasi</span>
              <h2 className="section-title">Dibangun Sesuai Standar Akuntansi & Audit</h2>
              <p className="section-lead" style={{ maxWidth: '750px', margin: '0 auto' }}>
                Engine matematis Goletin diverifikasi secara ketat untuk memenuhi kepatuhan regulasi OJK, Bank Indonesia, IAPI, dan standar pelaporan IFRS global.
              </p>
            </div>
            <div className="standards-grid" style={{ marginTop: '36px' }}>
              <div className="standard-card">
                <span className="standard-badge">IFRS 9 / PSAK 71</span>
                <h3 className="standard-card-title">ECL Pro CKPN</h3>
                <p className="standard-card-desc">Pemodelan risiko kredit masa depan (forward-looking) dengan estimasi PD, LGD, dan EAD bertingkat.</p>
              </div>
              <div className="standard-card">
                <span className="standard-badge">IFRS 16 / PSAK 73</span>
                <h3 className="standard-card-title">Lease Engine</h3>
                <p className="standard-card-desc">Pencatatan aset hak guna (ROU Asset) dan liabilitas sewa korporasi dengan amortisasi otomatis.</p>
              </div>
              <div className="standard-card">
                <span className="standard-badge">ISA 240 & 530</span>
                <h3 className="standard-card-title">Audit Forensic Suite</h3>
                <p className="standard-card-desc">Uji anomali transaksi berbasis Hukum Benford serta penentuan ukuran sampel audit representatif.</p>
              </div>
            </div>
          </section>

          {/* Section FAQ & Dukungan */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Pertanyaan Umum</span>
              <h2 className="section-title">Pertanyaan Seputar Ekosistem Goletin</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi penting seputar penerapan sistem, keamanan data, dan skema kemitraan lisensi organisasi.
              </p>
            </div>
            <GoletinFaq />
          </section>

          {/* Bottom Enterprise CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Penerapan Skala Organisasi
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Mengadopsi Ekosistem Goletin untuk Organisasi Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultasikan kebutuhan infrastruktur, lisensi volume perusahaan, dan integrasi sistem kerja dengan tim spesialis Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Lisensi Organisasi</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Buka Portal Goletin.com</span>
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
