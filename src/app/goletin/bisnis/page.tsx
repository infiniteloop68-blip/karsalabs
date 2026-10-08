import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Goletin untuk Bisnis — Solusi Produktivitas & ERP Enterprise',
  description:
    'Rangkaian aplikasi Goletin yang dirancang untuk kebutuhan bisnis: Office Suite, ERP Yaycount, IndoTax, engine kepatuhan IFRS/PSAK, dan AI untuk organisasi.',
  alternates: {
    canonical: '/goletin/bisnis',
  },
  openGraph: {
    title: 'Goletin untuk Bisnis — Solusi Produktivitas & ERP Enterprise',
    description:
      'Rangkaian aplikasi Goletin untuk kebutuhan bisnis: Office Suite, ERP, engine kepatuhan IFRS/PSAK, dan AI organisasi.',
    url: 'https://karsasoft.com/goletin/bisnis',
    images: ['/og-image.jpg'],
  },
};

export default function GoletinBisnisPage() {
  const businessProducts = [
    {
      icon: 'laptop',
      title: 'Goletin Office Desktop & Web',
      desc: 'Aplikasi Docs, Sheets, Slides, dan PDF Suite versi desktop offline dan web — untuk produktivitas tanpa batas koneksi internet.',
      link: '/goletin#pilar',
      logo: '/logos/docs.svg',
    },
    {
      icon: 'briefcase',
      title: 'Yaycount ERP',
      desc: 'Sistem akuntansi terintegrasi untuk yayasan dan organisasi nirlaba. Mematuhi standar ISAK 35 dengan laporan aktivitas otomatis.',
      link: 'https://yaycount.goletin.com',
      isExternal: true,
      logo: '/logos/yaycount.svg',
    },
    {
      icon: 'file-check',
      title: 'IndoTax Perpajakan',
      desc: 'Perhitungan PPh 21 TER, e-Faktur PPN 11%, SPT Masa, dan pembuatan bukti potong — terintegrasi dengan modul akuntansi.',
      link: 'https://indotax.goletin.com',
      isExternal: true,
      logo: '/logos/indotax.svg',
    },
    {
      icon: 'mail',
      title: 'Goletin Mail Bisnis',
      desc: 'Email bisnis profesional dengan domain perusahaan Anda. Kotak surat 50 GB, kalender terpadu, dan perlindungan spam enterprise.',
      link: '/goletin#pilar',
      logo: '/logos/mail.svg',
    },
    {
      icon: 'database',
      title: 'CloudSave Business',
      desc: 'Penyimpanan awan terenkripsi dengan 1 TB per pengguna, kontrol hak akses berbasis peran, dan pemulihan versi 30 hari.',
      link: '/goletin#pilar',
      logo: '/logos/cloudsave.svg',
    },
    {
      icon: 'ai',
      title: 'Goletin AI untuk Bisnis',
      desc: 'Asisten AI yang terintegrasi di setiap modul — analisis dokumen keuangan, ringkasan rapat, dan automasi alur kerja bisnis.',
      link: 'https://ai.goletin.com',
      isExternal: true,
      logo: '/logos/goletin-ai.svg',
    },
  ];

  const useCases = [
    {
      icon: 'briefcase',
      title: 'Otomatisasi Pelaporan Keuangan',
      desc: 'Yaycount ERP menghasilkan laporan aktivitas, neraca, dan arus kas sesuai ISAK 35 secara otomatis dari pencatatan harian.',
    },
    {
      icon: 'file-check',
      title: 'Kepatuhan Pajak Tepat Waktu',
      desc: 'IndoTax menghitung PPh 21 karyawan, menerbitkan bukti potong, dan menyiapkan SPT Masa untuk pelaporan bulanan tanpa kesalahan.',
    },
    {
      icon: 'users',
      title: 'Kolaborasi Tim Terdistribusi',
      desc: 'Tim finance, HR, dan operasional bekerja di dokumen yang sama secara real-time melalui Goletin Docs, Sheets, dan Slides.',
    },
    {
      icon: 'shield',
      title: 'Audit Trail & Kontrol Akses',
      desc: 'Setiap perubahan data tercatat dalam audit trail. Administrator dapat mengatur akses per modul, per divisi, per pengguna.',
    },
    {
      icon: 'ai',
      title: 'Analisis Data dengan AI',
      desc: 'Goletin AI membantu menganalisis trend pengeluaran, mendeteksi anomali jurnal, dan meringkas laporan keuangan bulanan.',
    },
    {
      icon: 'lock',
      title: 'Keamanan Data Perusahaan',
      desc: 'Enkripsi end-to-end, SSO/LDAP integration, MFA wajib, dan data tersimpan di data center Indonesia bersertifikasi.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated Business Illustration Banner */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-business-hero-banner">
            <div className="goletin-business-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Goletin untuk Bisnis</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Produktivitas, Keuangan, dan Kepatuhan dalam Satu Ekosistem
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Kelola seluruh operasional bisnis Anda — dari kolaborasi dokumen, pencatatan akuntansi, perpajakan, hingga kepatuhan regulasi keuangan — dengan rangkaian aplikasi Goletin yang terintegrasi.
                </p>
                <div className="hero-cta-group">
                  <Link
                    href="/goletin/paket-dan-harga"
                    className="btn-primary"
                  >
                    <span>Lihat Paket Bisnis</span>
                    <Icon name="arrow-right" size={15} />
                  </Link>
                  <Link
                    href="/kontak"
                    className="btn-secondary"
                  >
                    <span>Minta Demo Enterprise</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Server Berdaulat Indonesia</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kepatuhan Regulasi Nasional</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Dukungan Teknis Prioritas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid (Microsoft Fluent Elevation) */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">50+</div>
              <div className="goletin-stat-title">Format Kompatibel</div>
              <p className="goletin-stat-sub">Dukungan penuh file Office & PDF</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Standar Regulasi RI</div>
              <p className="goletin-stat-sub">ISAK 35, PPh 21 TER, & SAK EMKM</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">1 TB</div>
              <div className="goletin-stat-title">Cloud Per Pengguna</div>
              <p className="goletin-stat-sub">Enkripsi AES-256 di server lokal</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">99.9%</div>
              <div className="goletin-stat-title">SLA Ketersediaan</div>
              <p className="goletin-stat-sub">Dukungan teknis prioritas 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Included Products */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Yang Termasuk dalam Paket Bisnis</span>
            <h2 className="section-title">Aplikasi Goletin untuk Bisnis</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Setiap paket bisnis Goletin mencakup aplikasi produktivitas inti ditambah modul keuangan dan perpajakan yang dirancang khusus untuk kebutuhan organisasi Indonesia.
            </p>
          </div>

          <div className="segment-products-grid">
            {businessProducts.map((product, i) => (
              <div key={i} className="segment-product-tile">
                <div className="segment-tile-icon" style={{ background: 'transparent' }}>
                  {product.logo ? (
                    <img src={product.logo} alt={product.title} width={42} height={42} />
                  ) : (
                    <Icon name={product.icon} size={22} />
                  )}
                </div>
                <div className="segment-tile-title">{product.title}</div>
                <p className="segment-tile-desc">{product.desc}</p>
                {product.isExternal ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="segment-tile-link"
                  >
                    <span>Pelajari selengkapnya</span>
                    <Icon name="external-link" size={13} />
                  </a>
                ) : (
                  <Link href={product.link} className="segment-tile-link">
                    <span>Pelajari selengkapnya</span>
                    <Icon name="arrow-right" size={13} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Use Cases */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Skenario Penggunaan</span>
            <h2 className="section-title">Bagaimana Bisnis Menggunakan Goletin</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Dari startup hingga korporasi, Goletin mendukung alur kerja bisnis yang lengkap dalam satu platform.
            </p>
          </div>

          <div className="segment-use-cases">
            {useCases.map((uc, i) => (
              <div key={i} className="use-case-card">
                <div className="use-case-icon">
                  <Icon name={uc.icon} size={20} />
                </div>
                <div className="use-case-content">
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Perbandingan Paket</span>
            <h2 className="section-title">Pilih Paket Bisnis yang Tepat</h2>
            <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
              Transparan tanpa biaya tersembunyi. Tingkatkan atau sesuaikan jumlah lisensi kapan saja.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Fitur & Modul</th>
                  <th>Bisnis Basic</th>
                  <th>Bisnis Standar</th>
                  <th>Bisnis Premium</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Office Web (Docs, Sheets, Slides)</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Office Desktop (Offline)</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Email Bisnis (50 GB)</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>CloudSave (1 TB / pengguna)</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td>Tidak terbatas</td>
                </tr>
                <tr>
                  <td>Yaycount ERP (ISAK 35)</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>IndoTax Perpajakan (PPh 21 TER)</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Goletin AI Multimodal</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Engine Kepatuhan (IFRS/PSAK)</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>SSO & Integrasi Active Directory</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>SLA 99.99% & Dedicated Support</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Harga mulai dari</td>
                  <td><strong>Rp45.000</strong>/bln</td>
                  <td><strong>Rp145.000</strong>/bln</td>
                  <td><strong>Rp265.000</strong>/bln</td>
                  <td>Hubungi kami</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/goletin/paket-dan-harga" className="btn-primary">
              <span>Lihat Detail Lengkap Harga</span>
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Enterprise CTA Banner with Illustration */}
      <div className="section-padding">
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Lisensi Volume Perusahaan
              </span>
              <h2 className="goletin-bottom-cta-title">
                Butuh Solusi untuk Lebih dari 300 Pengguna?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Tim spesialis Karsasoft siap membantu Anda merancang skema lisensi kustom, integrasi Active Directory / SSO internal, dan pelatihan implementasi di seluruh divisi organisasi.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Hubungi Tim Penjualan</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Coba Goletin Gratis 1 Bulan</span>
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
