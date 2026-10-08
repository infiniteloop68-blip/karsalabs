import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq } from '@/components/GoletinFaq';

export const metadata: Metadata = {
  title: 'Goletin untuk Individu — Produktivitas Personal, AI & Cloud Storage',
  description:
    'Gunakan Goletin untuk kebutuhan personal: pengolah dokumen, spreadsheet, presentasi, penyimpanan awan 1 TB, AI assistant, dan email — semua dalam satu akun gratis.',
  alternates: {
    canonical: '/goletin/individu',
  },
  openGraph: {
    title: 'Goletin untuk Individu — Produktivitas Personal, AI & Cloud Storage',
    description:
      'Goletin untuk kebutuhan personal: dokumen, spreadsheet, presentasi, cloud storage, AI assistant, dan email gratis.',
    url: 'https://karsasoft.com/goletin/individu',
    images: ['/og-image.jpg'],
  },
};

const personalFaqs = [
  {
    id: 'faq-free-forever',
    q: 'Apakah akun Goletin benar-benar gratis tanpa batas waktu?',
    a: 'Ya. Paket dasar Goletin dapat digunakan secara gratis selamanya oleh seluruh masyarakat Indonesia. Anda langsung mendapatkan akses ke Goletin Docs, Sheets, Slides, CloudSave 5 GB, Goletin Search, dan kuota harian Goletin AI tanpa perlu memasukkan kartu kredit.',
  },
  {
    id: 'faq-compatibility',
    q: 'Apakah file dokumen saya kompatibel dengan format Microsoft Office dan Google Docs?',
    a: 'Sangat kompatibel. Anda dapat membuka, menyunting, dan menyimpan file berformat .docx, .xlsx, .pptx, serta mengekspor langsung ke format PDF tanpa risiko kehilangan format tata letak dokumen asli.',
  },
  {
    id: 'faq-privacy',
    q: 'Bagaimana privasi data saya dilindungi dibandingkan layanan gratis lainnya?',
    a: 'Layanan gratis asing umumnya memonetisasi aktivitas pengguna melalui profiling data dan iklan bertarget. Goletin beroperasi di bawah payung hukum Indonesia (UU PDP No. 27/2022) — data Anda disimpan di Tier-4 Data Center Indonesia, dienkripsi penuh, tanpa pelacakan aktivitas browsing atau penjualan data ke pihak ketiga.',
  },
  {
    id: 'faq-upgrade',
    q: 'Kapan saya perlu beralih ke paket Personal Premium?',
    a: 'Anda dapat meng-upgrade kapan saja jika membutuhkan kapasitas penyimpanan CloudSave hingga 1 TB, akses aplikasi office desktop yang dapat digunakan offline tanpa koneksi internet, fitur PDF Suite lengkap (tanda tangan digital dan konversi format), serta akses tanpa batas ke Goletin AI seharga Rp29.000/bulan.',
  },
];

export default function GoletinIndividuPage() {
  const personalProducts = [
    {
      icon: 'file-text',
      title: 'Goletin Docs',
      desc: 'Buat, edit, dan kolaborasi dokumen secara real-time di browser maupun aplikasi desktop. Mendukung format .docx, .odt, dan PDF.',
      link: '/goletin#pilar',
      logo: '/logos/docs.svg',
    },
    {
      icon: 'table',
      title: 'Goletin Sheets',
      desc: 'Spreadsheet canggih dengan rumus lengkap, grafik interaktif, dan pivot table — cocok untuk anggaran pribadi hingga analisis data.',
      link: '/goletin#pilar',
      logo: '/logos/sheets.svg',
    },
    {
      icon: 'monitor',
      title: 'Goletin Slides',
      desc: 'Buat presentasi profesional dengan template modern, transisi halus, dan mode presenter — siap untuk rapat maupun kelas.',
      link: '/goletin#pilar',
      logo: '/logos/slides.svg',
    },
    {
      icon: 'database',
      title: 'CloudSave',
      desc: 'Simpan, sinkronkan, dan bagikan file hingga 1 TB di cloud terenkripsi. Akses dari laptop, tablet, atau smartphone kapan saja.',
      link: '/goletin#pilar',
      logo: '/logos/cloudsave.svg',
    },
    {
      icon: 'ai',
      title: 'Goletin AI',
      desc: 'Asisten kecerdasan buatan yang membantu menulis, meringkas, menerjemahkan, dan menganalisis — langsung di dalam aplikasi.',
      link: 'https://ai.goletin.com',
      isExternal: true,
      logo: '/logos/goletin-ai.svg',
    },
    {
      icon: 'search',
      title: 'Goletin Search',
      desc: 'Mesin pencarian privat tanpa iklan dan pelacakan. Hasil pencarian yang netral, relevan, dan menghormati privasi Anda.',
      link: 'https://goletin.com',
      isExternal: true,
      logo: '/logos/search.svg',
    },
  ];

  const personalUseCases = [
    {
      icon: 'file-text',
      title: 'Mahasiswa & Pelajar',
      desc: 'Tulis makalah di Docs, kelola data riset di Sheets, buat presentasi tugas akhir di Slides — semua gratis untuk pelajar.',
    },
    {
      icon: 'briefcase',
      title: 'Freelancer & Profesional',
      desc: 'Kelola proyek klien, buat invoice, dan simpan dokumen penting di CloudSave dengan akses dari mana saja.',
    },
    {
      icon: 'ai',
      title: 'Kreator Konten',
      desc: 'Gunakan Goletin AI untuk brainstorm ide, meringkas riset, dan menghasilkan draft tulisan awal dengan cepat.',
    },
    {
      icon: 'lock',
      title: 'Pengguna yang Peduli Privasi',
      desc: 'Beralih dari layanan asing ke ekosistem buatan Indonesia — tanpa profiling iklan, tanpa penjualan data ke pihak ketiga.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      {/* Hero Section with Dedicated Microsoft 365 Style Floating Apps Illustration */}
      <div className="section-padding">
        <div className="container">
          <div className="ms-hero-wrapper goletin-individu-hero-banner">
            <div className="goletin-individu-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Goletin untuk Individu</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Semua yang Anda Butuhkan untuk Produktivitas Harian
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Dokumen, spreadsheet, presentasi, penyimpanan cloud 1 TB, asisten AI cerdas, dan pencarian privat — semua tersedia dalam satu akun Goletin. Tanpa iklan, tanpa pelacakan data.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://goletin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Daftar Akun Gratis</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <Link
                    href="/goletin/paket-dan-harga"
                    className="btn-secondary"
                  >
                    <span>Lihat Paket Premium</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Gratis Tanpa Kartu Kredit</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Privasi Mutlak Tanpa Iklan</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Cloud Server di Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid (Microsoft Fluent Elevation) */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">Rp0</div>
              <div className="goletin-stat-title">Gratis Selamanya</div>
              <p className="goletin-stat-sub">Tanpa batas waktu & tanpa kartu kredit</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">1 TB</div>
              <div className="goletin-stat-title">Penyimpanan Cloud</div>
              <p className="goletin-stat-sub">Tersedia sinkronisasi multi-perangkat</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Privasi & Kedaulatan</div>
              <p className="goletin-stat-sub">Bebas pelacakan iklan komersial</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">AI Inti</div>
              <div className="goletin-stat-title">Asisten Cerdas Terbina</div>
              <p className="goletin-stat-sub">Bantu menulis, meringkas, & analisis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Aplikasi Anda</span>
            <h2 className="section-title">Aplikasi Gratis untuk Semua Orang</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Daftar satu akun Goletin untuk langsung mengakses semua aplikasi produktivitas berikut — tidak perlu kartu kredit, tidak ada batas waktu trial.
            </p>
          </div>

          <div className="segment-products-grid">
            {personalProducts.map((product, i) => (
              <div key={i} className="segment-product-tile">
                <div className="segment-tile-icon" style={{ background: 'transparent' }}>
                  {product.logo ? (
                    <img src={product.logo} alt={product.title} width={36} height={36} style={{ borderRadius: '8px' }} />
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
                    Buka aplikasi <Icon name="external-link" size={12} />
                  </a>
                ) : (
                  <Link href={product.link} className="segment-tile-link">
                    Pelajari selengkapnya <Icon name="arrow-right" size={12} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Premium Comparison */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Gratis vs Premium</span>
            <h2 className="section-title">Apa Perbedaan Paket Gratis & Premium?</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Akun gratis sudah sangat lengkap. Upgrade ke Premium untuk fitur eksklusif seperti desktop offline, 
              penyimpanan lebih besar, dan akses prioritas Goletin AI.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Fitur</th>
                  <th>Gratis</th>
                  <th>Personal Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Docs, Sheets, Slides (Web)</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Office Desktop (Offline)</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>CloudSave Storage</td>
                  <td>5 GB</td>
                  <td>1 TB</td>
                </tr>
                <tr>
                  <td>Goletin Search (Privat)</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Goletin AI</td>
                  <td>Terbatas (50 prompt/hari)</td>
                  <td>Tidak terbatas</td>
                </tr>
                <tr>
                  <td>PDF Suite (Convert, Sign, Annotate)</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Email (Goletin Mail)</td>
                  <td>15 GB</td>
                  <td>50 GB</td>
                </tr>
                <tr>
                  <td>Dukungan Prioritas</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Harga</td>
                  <td><strong>Rp0</strong></td>
                  <td><strong>Rp29.000</strong>/bulan</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://goletin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Mulai dengan Gratis</span>
              <Icon name="arrow-right" size={16} />
            </a>
            <Link href="/goletin/paket-dan-harga" className="btn-secondary">
              <span>Lihat Semua Paket</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Cocok untuk Siapa Saja</span>
            <h2 className="section-title">Siapa yang Menggunakan Goletin?</h2>
          </div>

          <div className="segment-use-cases">
            {personalUseCases.map((uc, i) => (
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

      {/* Privacy & Security Promise */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
        <div className="container">
          <div className="pillar-grid">
            <div className="pillar-text">
              <span className="section-eyebrow">Komitmen Privasi</span>
              <h2>Data Anda Milik Anda Sepenuhnya</h2>
              <p>
                Tidak seperti layanan asing yang membiayai operasional dari iklan berbasis profil pengguna,
                Goletin berkomitmen penuh terhadap privasi. Tidak ada iklan di dalam aplikasi, tidak ada penjualan data,
                dan tidak ada pelacakan aktivitas browsing.
              </p>
              <div className="pillar-features">
                <div className="pillar-feature-item">
                  <div className="pillar-feature-check">
                    <Icon name="check" size={12} />
                  </div>
                  <span>Enkripsi end-to-end untuk semua file di CloudSave</span>
                </div>
                <div className="pillar-feature-item">
                  <div className="pillar-feature-check">
                    <Icon name="check" size={12} />
                  </div>
                  <span>Data disimpan di data center Indonesia, tidak di luar negeri</span>
                </div>
                <div className="pillar-feature-item">
                  <div className="pillar-feature-check">
                    <Icon name="check" size={12} />
                  </div>
                  <span>Tidak ada profiling iklan atau penjualan data ke pihak ketiga</span>
                </div>
                <div className="pillar-feature-item">
                  <div className="pillar-feature-check">
                    <Icon name="check" size={12} />
                  </div>
                  <span>Kepatuhan Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022)</span>
                </div>
              </div>
            </div>
            <div className="pillar-visual">
              <div className="pillar-visual-inner">
                <div className="pillar-icon-box">
                  <Icon name="shield" size={28} />
                </div>
                <div className="pillar-mini-cards">
                  <div className="pillar-mini-card">
                    <div className="pillar-mini-card-icon"><Icon name="lock" size={20} /></div>
                    <div className="pillar-mini-card-name">Enkripsi E2E</div>
                  </div>
                  <div className="pillar-mini-card">
                    <div className="pillar-mini-card-icon"><Icon name="database" size={20} /></div>
                    <div className="pillar-mini-card-name">Data Center ID</div>
                  </div>
                  <div className="pillar-mini-card">
                    <div className="pillar-mini-card-icon"><Icon name="shield" size={20} /></div>
                    <div className="pillar-mini-card-name">UU PDP</div>
                  </div>
                  <div className="pillar-mini-card">
                    <div className="pillar-mini-card-icon"><Icon name="search" size={20} /></div>
                    <div className="pillar-mini-card-name">No Tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '24px' }}>
            <span className="section-eyebrow">Tanya Jawab</span>
            <h2 className="section-title">Pertanyaan Seputar Penggunaan Personal</h2>
          </div>
          <GoletinFaq
            items={personalFaqs}
            countLabel="4 Tanya Jawab Esensial Personal"
            footerText="Punya pertanyaan seputar sinkronisasi akun atau fitur aplikasi?"
            footerLinkHref="/kontak"
            footerLinkLabel="Hubungi pusat bantuan Karsasoft"
          />
        </div>
      </section>

      {/* Bottom CTA Banner with Fluid 3D Glass Ribbon Illustration */}
      <div className="section-padding">
        <div className="container">
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Mulai Sekarang
              </span>
              <h2 className="goletin-bottom-cta-title">
                Daftar Gratis dan Rasakan Kemudahan Bekerja
              </h2>
              <p className="goletin-bottom-cta-desc">
                Buat akun Goletin dalam 30 detik — langsung akses Docs, Sheets, Slides, CloudSave, AI, dan Search tanpa kartu kredit.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a
                  href="https://goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Daftar Akun Gratis</span>
                  <Icon name="arrow-right" size={15} />
                </a>
                <Link href="/goletin/paket-dan-harga" className="btn-secondary">
                  <span>Lihat Paket Premium</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
