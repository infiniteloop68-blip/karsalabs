'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

type BillingCycle = 'yearly' | 'monthly';

export default function GoletinPricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('yearly');
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Goletin Bisnis Basic',
      tier: 'ESENSIAL CLOUD',
      badge: 'TERHEMAT',
      isPopular: false,
      tagline: 'Solusi cloud esensial, email bisnis kustom, dan kolaborasi online dokumen untuk tim yang dinamis.',
      priceYearly: 'Rp45.000',
      priceMonthly: 'Rp55.000',
      periodText: 'per pengguna / bulan',
      billingCommitment: billingCycle === 'yearly' ? '(langganan tahunan, bayar bulanan)' : '(ditagih bulanan)',
      appsIncluded: [
        { name: 'Docs Web', logo: '/logos/docs.svg' },
        { name: 'Sheets Web', logo: '/logos/sheets.svg' },
        { name: 'Slides Web', logo: '/logos/slides.svg' },
        { name: 'CloudSave', logo: '/logos/cloudsave.svg' },
        { name: 'Mail', logo: '/logos/mail.svg' },
      ],
      features: [
        'Aplikasi Docs, Sheets, dan Slides versi Web & Mobile',
        'Email bisnis kustom (anda@perusahaan.com) kotak surat 50 GB',
        'Penyimpanan awan CloudSave 1 TB per pengguna di data center RI',
        'Rapat online dan komunikasi tim aman hingga 300 peserta',
        'Penyaringan spam dan perlindungan keamanan ISO 27001',
        'Kepatuhan penuh terhadap UU PDP No. 27/2022',
      ],
      ctaText: 'Pilih Bisnis Basic',
      ctaHref: '/kontak?paket=basic',
      trialHref: 'https://goletin.com',
    },
    {
      id: 'standar',
      name: 'Goletin Bisnis Standar',
      tier: 'SUITE BISNIS LENGKAP',
      badge: 'POPULER UKM',
      isPopular: false,
      tagline: 'Produktivitas kantor lengkap dengan aplikasi desktop offline, ERP akuntansi Yaycount, dan pajak IndoTax.',
      priceYearly: 'Rp145.000',
      priceMonthly: 'Rp175.000',
      periodText: 'per pengguna / bulan',
      billingCommitment: billingCycle === 'yearly' ? '(langganan tahunan, bayar bulanan)' : '(ditagih bulanan)',
      appsIncluded: [
        { name: 'Docs', logo: '/logos/docs.svg' },
        { name: 'Sheets', logo: '/logos/sheets.svg' },
        { name: 'Slides', logo: '/logos/slides.svg' },
        { name: 'Yaycount', logo: '/logos/yaycount.svg' },
        { name: 'IndoTax', logo: '/logos/indotax.svg' },
        { name: 'CloudSave', logo: '/logos/cloudsave.svg' },
        { name: 'Mail', logo: '/logos/mail.svg' },
      ],
      features: [
        'Seluruh fitur pada paket Bisnis Basic',
        'Aplikasi Desktop Offline Docs, Sheets, Slides, & PDF untuk Windows/Mac',
        'Instalasi lisensi hingga 5 PC/Mac + 5 perangkat seluler per akun',
        'Yaycount ERP: Buku besar, kasir, anggaran, & laporan ISAK 35',
        'IndoTax: Perhitungan otomatis PPh 21 TER, e-Faktur PPN, dan e-Bupot',
        'Dukungan teknis respons cepat 8x5 via telepon, WhatsApp, dan tiket',
      ],
      ctaText: 'Pilih Bisnis Standar',
      ctaHref: '/kontak?paket=standar',
      trialHref: 'https://goletin.com',
    },
    {
      id: 'premium',
      name: 'Goletin Bisnis Premium',
      tier: 'PRODUKTIVITAS & KEPATUHAN',
      badge: 'PALING DIREKOMENDASIKAN',
      isPopular: true,
      tagline: 'Suite terlengkap dengan kecerdasan buatan multimodal, engine kepatuhan PSAK/IFRS, dan keamanan terdepan.',
      priceYearly: 'Rp265.000',
      priceMonthly: 'Rp315.000',
      periodText: 'per pengguna / bulan',
      billingCommitment: billingCycle === 'yearly' ? '(langganan tahunan, bayar bulanan)' : '(ditagih bulanan)',
      appsIncluded: [
        { name: 'Docs', logo: '/logos/docs.svg' },
        { name: 'Sheets', logo: '/logos/sheets.svg' },
        { name: 'Slides', logo: '/logos/slides.svg' },
        { name: 'Yaycount', logo: '/logos/yaycount.svg' },
        { name: 'IndoTax', logo: '/logos/indotax.svg' },
        { name: 'Goletin AI', logo: '/logos/goletin-ai.svg' },
        { name: 'ECL Pro', logo: '/logos/eclpro.svg' },
        { name: 'Lease', logo: '/logos/lease.svg' },
      ],
      features: [
        'Seluruh fitur pada paket Bisnis Standar',
        'Goletin AI Multimodal: Analisis dokumen keuangan dan otomatisasi kerja',
        'Engine Kepatuhan Finansial: ECL Pro (IFRS 9) & Lease Engine (PSAK 73)',
        'Zero Trust Security Suite: Conditional Access & Granular Device Shield',
        'Pencegahan kebocoran data sensitif (Data Loss Prevention / DLP)',
        'SLA Ketersediaan Layanan 99.9% dengan dukungan teknis prioritas 24/7',
      ],
      ctaText: 'Pilih Bisnis Premium',
      ctaHref: '/kontak?paket=premium',
      trialHref: 'https://goletin.com',
    },
    {
      id: 'apps',
      name: 'Goletin Aplikasi Bisnis',
      tier: 'OFFICE STANDALONE',
      badge: 'DESKTOP ONLY',
      isPopular: false,
      tagline: 'Fokus pada aplikasi perkantoran desktop dan penyimpanan cloud tanpa modul email dan ERP.',
      priceYearly: 'Rp95.000',
      priceMonthly: 'Rp115.000',
      periodText: 'per pengguna / bulan',
      billingCommitment: billingCycle === 'yearly' ? '(langganan tahunan, bayar bulanan)' : '(ditagih bulanan)',
      appsIncluded: [
        { name: 'Docs', logo: '/logos/docs.svg' },
        { name: 'Sheets', logo: '/logos/sheets.svg' },
        { name: 'Slides', logo: '/logos/slides.svg' },
        { name: 'PDF Suite', logo: '/logos/pdf.svg' },
        { name: 'CloudSave', logo: '/logos/cloudsave.svg' },
      ],
      features: [
        'Aplikasi Office Desktop Offline Docs, Sheets, Slides, & PDF Suite',
        'Akses editor versi web dan sinkronisasi kolaborasi real-time',
        'Instalasi lisensi hingga 5 perangkat desktop PC/Mac per pengguna',
        'Penyimpanan awan CloudSave 1 TB per pengguna di data center RI',
        'Kompatibilitas 100% format file Microsoft Office (.docx, .xlsx, .pptx)',
        'Dukungan teknis standar dan pembaruan perangkat lunak berkelanjutan',
      ],
      ctaText: 'Pilih Aplikasi Bisnis',
      ctaHref: '/kontak?paket=aplikasi-bisnis',
      trialHref: 'https://goletin.com',
    },
  ];

  const businessProducts = [
    {
      logo: '/logos/docs.svg',
      title: 'Goletin Office Desktop & Web',
      desc: 'Docs, Sheets, Slides, dan PDF Suite versi desktop offline dan web dengan format kompatibilitas 100% Microsoft Office.',
      link: '/goletin#pilar',
    },
    {
      logo: '/logos/yaycount.svg',
      title: 'Yaycount ERP (ISAK 35)',
      desc: 'Sistem akuntansi nirlaba dan korporasi terintegrasi: buku besar, pembukuan kasir, pelaporan aktivitas, dan anggaran.',
      link: 'https://yaycount.goletin.com',
      isExternal: true,
    },
    {
      logo: '/logos/indotax.svg',
      title: 'IndoTax Perpajakan',
      desc: 'Penghitungan PPh 21 tarif efektif rata-rata (TER), e-Faktur PPN 11%, dan bukti potong pajak terintegrasi sistem akuntansi.',
      link: 'https://indotax.goletin.com',
      isExternal: true,
    },
    {
      logo: '/logos/cloudsave.svg',
      title: 'CloudSave & Mail Bisnis',
      desc: 'Penyimpanan awan terenkripsi 1 TB per akun dan email bisnis domain kustom 50 GB di Tier-4 Data Center Indonesia.',
      link: '/goletin#pilar',
    },
    {
      logo: '/logos/goletin-ai.svg',
      title: 'Goletin AI Multimodal',
      desc: 'Asisten cerdas privat untuk sintesis laporan keuangan, analisis kontrak kerja, dan otomasi alur kerja tanpa kebocoran data.',
      link: 'https://ai.goletin.com',
      isExternal: true,
    },
    {
      logo: '/logos/eclpro.svg',
      title: 'Engine Kepatuhan & Audit',
      desc: 'Kalkulasi CKPN IFRS 9 (ECL Pro), liabilitas sewa PSAK 73 (Lease Engine), dan pengujian jurnal forensik ISA 240 (JET Pro).',
      link: '/goletin/enterprise',
    },
  ];

  const pricingFaqs = [
    {
      q: 'Apakah harga paket sudah termasuk PPN 11% dan dapat diterbitkan faktur pajak resmi?',
      a: 'Harga yang tercantum belum termasuk PPN 11%. Sebagai entitas resmi berbadan hukum di Indonesia, Karsasoft menerbitkan Faktur Pajak elektronik (e-Faktur) resmi dan kuitansi komersial untuk setiap transaksi organisasi atau korporasi Anda.',
    },
    {
      q: 'Bisakah kami mencampur lisensi paket yang berbeda dalam satu organisasi?',
      a: 'Ya, tentu bisa. Anda dapat mengalokasikan lisensi secara fleksibel sesuai peran divisi kerja. Contohnya: divisi Finance dan Manajemen menggunakan Bisnis Standar atau Premium, sementara staf operasional lapangan menggunakan Bisnis Basic atau Aplikasi Bisnis.',
    },
    {
      q: 'Bagaimana cara kerja uji coba gratis selama 1 bulan (30 hari)?',
      a: 'Anda dapat mendaftar uji coba gratis hingga 25 lisensi pengguna tanpa kewajiban kartu kredit. Seluruh data yang Anda buat selama masa uji coba akan tetap tersimpan dan dapat dilanjutkan tanpa jeda ketika Anda memutuskan untuk beralih ke langganan berbayar.',
    },
    {
      q: 'Apakah data internal perusahaan kami dijamin tersimpan di wilayah hukum Indonesia?',
      a: 'Ya, 100%. Seluruh infrastruktur Sovereign Cloud Goletin bertempat di Tier-4 Data Center yang berlokasi di Jakarta dan Cikarang, Indonesia. Arsitektur kami mematuhi UU PDP No. 27/2022, PP 71/2019 (PSTE), dan POJK No. 11/2022 dengan jaminan tanpa transmisi data lintas batas negara.',
    },
    {
      q: 'Bagaimana proses migrasi data dari Microsoft 365 atau Google Workspace ke Goletin?',
      a: 'Goletin mendukung kompatibilitas penuh dengan format .docx, .xlsx, .pptx, dan .pdf. Tim onboarding Karsasoft menyediakan panduan dan perangkat migrasi otomatis untuk memindahkan dokumen, email, dan kontak tanpa mengganggu operasional harian tim Anda.',
    },
    {
      q: 'Apa perbedaan antara penagihan tahunan (yearly) dan bulanan (monthly)?',
      a: 'Komitmen tahunan memberikan penghematan biaya lisensi hingga 20% dibandingkan penagihan bulanan. Pada penagihan tahunan, pembayaran dapat ditagih secara tahunan di muka atau bulanan dengan komitmen masa kontrak 12 bulan.',
    },
    {
      q: 'Apakah tersedia diskon volume atau skema lisensi kustom untuk lebih dari 300 pengguna?',
      a: 'Ya. Untuk organisasi atau korporasi dengan kebutuhan lebih dari 300 pengguna, kami menyediakan kontrak Enterprise Agreement (EA) dengan harga volume kustom, integrasi Active Directory / SSO internal, serta opsi instalasi On-Premise Air-Gapped. Silakan kunjungi halaman Goletin Enterprise atau hubungi tim penjualan kami.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleAllFaqs = () => {
    if (openFaqs.length === pricingFaqs.length) {
      setOpenFaqs([]);
    } else {
      setOpenFaqs(pricingFaqs.map((_, idx) => idx));
    }
  };

  const allFaqsOpen = openFaqs.length === pricingFaqs.length;

  return (
    <>
      <GoletinSubNav />

      {/* Pricing Cards Section with Billing Cycle Toggle (Directly Top) */}
      <section id="tabel-paket" className="section-padding">
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
            <span className="section-eyebrow">Paket & Harga Resmi Goletin</span>
            <h1 className="section-title" style={{ fontSize: '36px', lineHeight: '44px' }}>
              Pilihan Lisensi Fleksibel & Transparan untuk Setiap Skala Bisnis
            </h1>
            <p className="section-lead" style={{ maxWidth: '740px', margin: '0 auto' }}>
              Satukan produktivitas kantor modern, akuntansi nirlaba ISAK 35, kepatuhan pajak nasional, engine audit IFRS, serta AI lokal dalam mata uang Rupiah tetap tanpa biaya tersembunyi.
            </p>
          </div>

          {/* Microsoft 365 Fluent Segmented Billing Switch */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#F3F4F6',
                borderRadius: '8px',
                padding: '4px',
                border: '1px solid var(--ms-border)',
              }}
            >
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                style={{
                  padding: '9px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: billingCycle === 'yearly' ? '#FFFFFF' : 'transparent',
                  color: billingCycle === 'yearly' ? 'var(--ms-text-heading)' : 'var(--ms-text-muted)',
                  boxShadow: billingCycle === 'yearly' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                }}
              >
                Bayar Tahunan{' '}
                <span
                  style={{
                    color: 'var(--ms-blue-text)',
                    fontSize: '12px',
                    fontWeight: 700,
                    marginLeft: '6px',
                  }}
                >
                  Hemat s.d. 20%
                </span>
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                style={{
                  padding: '9px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: billingCycle === 'monthly' ? '#FFFFFF' : 'transparent',
                  color: billingCycle === 'monthly' ? 'var(--ms-text-heading)' : 'var(--ms-text-muted)',
                  boxShadow: billingCycle === 'monthly' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                }}
              >
                Bayar Bulanan
              </button>
            </div>
          </div>

          {/* 4 Pricing Cards Grid (Exact Microsoft Fluent Card Standard as in Enterprise) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '24px',
              marginBottom: '36px',
            }}
          >
            {pricingPlans.map((plan) => {
              const currentPrice = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

              return (
                <div
                  key={plan.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: plan.isPopular ? '2px solid var(--ms-blue-hover)' : '1px solid var(--ms-border-card)',
                    borderRadius: '12px',
                    padding: '36px 26px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: plan.isPopular ? '0 12px 32px rgba(0, 125, 101, 0.12)' : 'var(--shadow-card)',
                  }}
                >
                  {plan.isPopular && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-13px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'var(--ms-blue-text)',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 16px',
                        borderRadius: '4px',
                        letterSpacing: '0.6px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px rgba(0, 125, 101, 0.25)',
                        zIndex: 2,
                        textTransform: 'uppercase',
                        lineHeight: '16px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--ms-text-muted)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    {plan.tier}
                  </div>

                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      color: 'var(--ms-text-heading)',
                      marginBottom: '6px',
                    }}
                  >
                    {plan.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--ms-text-muted)',
                      minHeight: '40px',
                      marginBottom: '16px',
                      lineHeight: '19px',
                    }}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div
                    style={{
                      marginBottom: '20px',
                      paddingBottom: '16px',
                      borderBottom: '1px solid var(--ms-border)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '30px',
                        fontWeight: 700,
                        color: 'var(--ms-text-heading)',
                        fontFamily: 'var(--font-segoe-display)',
                      }}
                    >
                      {currentPrice}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--ms-text-muted)', marginTop: '2px' }}>
                      {plan.periodText}{' '}
                      <span style={{ fontSize: '11px', color: '#888' }}>{plan.billingCommitment}</span>
                    </div>
                  </div>

                  {/* Included Apps Tray */}
                  <div style={{ marginBottom: '22px' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--ms-text-muted)',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                      }}
                    >
                      Aplikasi Termasuk:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {plan.appsIncluded.map((app, aIdx) => (
                        <div
                          key={aIdx}
                          title={app.name}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            backgroundColor: 'var(--ms-bg-subtle)',
                            border: '1px solid var(--ms-border)',
                            padding: '4px',
                          }}
                        >
                          <img
                            src={app.logo}
                            alt={app.name}
                            width={22}
                            height={22}
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div style={{ flex: 1, marginBottom: '24px' }}>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--ms-text-heading)',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      Fitur & Kapabilitas:
                    </div>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      {plan.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          style={{
                            fontSize: '13px',
                            color: 'var(--ms-text-body)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            lineHeight: '18px',
                          }}
                        >
                          <span
                            style={{
                              color: 'var(--ms-blue-text)',
                              fontWeight: 700,
                              flexShrink: 0,
                              marginTop: '1px',
                            }}
                          >
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Actions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Link
                      href={plan.ctaHref}
                      className={plan.isPopular ? 'btn-primary' : 'btn-secondary'}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>{plan.ctaText}</span>
                      <Icon name="arrow-right" size={14} />
                    </Link>
                    <a
                      href={plan.trialHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        fontSize: '12px',
                        color: 'var(--ms-blue-text)',
                        textDecoration: 'none',
                        padding: '4px 0',
                        fontWeight: 500,
                      }}
                    >
                      Coba gratis 1 bulan →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Anchor to Matrix */}
          <div style={{ textAlign: 'center', marginTop: '12px' }}>
            <a
              href="#perbandingan"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                color: 'var(--ms-blue-text)',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <span>Lihat tabel perbandingan fitur mendalam antar paket di bawah</span>
              <Icon name="chevron-down" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Included Products Section (Consistent with Goletin Bisnis) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">EKOSISTEM PERANGKAT LUNAK</span>
            <h2 className="section-title">Aplikasi yang Termasuk dalam Paket Goletin</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Setiap paket bisnis Goletin mencakup aplikasi produktivitas inti ditambah modul keuangan dan perpajakan yang dirancang khusus untuk kebutuhan organisasi Indonesia.
            </p>
          </div>

          <div className="segment-products-grid">
            {businessProducts.map((product, i) => (
              <div key={i} className="segment-product-tile">
                <div className="segment-tile-icon" style={{ background: 'transparent' }}>
                  <img src={product.logo} alt={product.title} width={42} height={42} />
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

      {/* Detailed Feature Comparison Table (Exact Match with Goletin Bisnis Table System) */}
      <section id="perbandingan" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">TABEL PERBANDINGAN FITUR MENYELURUH</span>
            <h2 className="section-title">Detail Matriks Kemampuan Antar Paket</h2>
            <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
              Bandingkan fitur secara rinci untuk memastikan kepatuhan akuntansi, kolaborasi tim, dan keamanan data organisasi Anda terpenuhi.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '32%' }}>Fitur & Modul</th>
                  <th style={{ width: '17%', textAlign: 'center' }}>Bisnis Basic</th>
                  <th style={{ width: '17%', textAlign: 'center' }}>Bisnis Standar</th>
                  <th style={{ width: '17%', textAlign: 'center', backgroundColor: '#EBF3F0' }}>Bisnis Premium</th>
                  <th style={{ width: '17%', textAlign: 'center' }}>Aplikasi Bisnis</th>
                </tr>
              </thead>
              <tbody>
                {/* Kategori 1: Produktivitas Dokumen */}
                <tr style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
                  <td colSpan={5} style={{ fontWeight: 700, color: 'var(--ms-blue-text)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    1. Aplikasi Office & Produktivitas
                  </td>
                </tr>
                <tr>
                  <td>Office Web (Docs, Sheets, Slides)</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Office Desktop Offline (Windows & Mac)</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Goletin PDF Suite & Konversi Dokumen</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>
                <tr>
                  <td>Instalasi Perangkat per Akun Pengguna</td>
                  <td style={{ textAlign: 'center' }}>Web / Ponsel</td>
                  <td style={{ textAlign: 'center' }}>5 PC/Mac + 5 Ponsel</td>
                  <td style={{ textAlign: 'center' }}>5 PC/Mac + 5 Ponsel</td>
                  <td style={{ textAlign: 'center' }}>5 PC/Mac</td>
                </tr>
                <tr>
                  <td>Kolaborasi Dokumen Real-time & Komentar</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>

                {/* Kategori 2: Komunikasi & Cloud Storage */}
                <tr style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
                  <td colSpan={5} style={{ fontWeight: 700, color: 'var(--ms-blue-text)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    2. Email Bisnis & Penyimpanan Awan
                  </td>
                </tr>
                <tr>
                  <td>Email Bisnis Domain Perusahaan</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>
                <tr>
                  <td>Kapasitas Kotak Surat (Mailbox)</td>
                  <td style={{ textAlign: 'center' }}>50 GB</td>
                  <td style={{ textAlign: 'center' }}>50 GB</td>
                  <td style={{ textAlign: 'center' }}>50 GB (Arsip 100 GB)</td>
                  <td className="dash-cell">—</td>
                </tr>
                <tr>
                  <td>Penyimpanan Awan CloudSave per Akun</td>
                  <td style={{ textAlign: 'center' }}>1 TB</td>
                  <td style={{ textAlign: 'center' }}>1 TB</td>
                  <td style={{ textAlign: 'center' }}>1 TB (Dapat Diperluas)</td>
                  <td style={{ textAlign: 'center' }}>1 TB</td>
                </tr>
                <tr>
                  <td>Pusat Data Lokal Indonesia (Data Sovereignty)</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                </tr>

                {/* Kategori 3: Keuangan & Perpajakan */}
                <tr style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
                  <td colSpan={5} style={{ fontWeight: 700, color: 'var(--ms-blue-text)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    3. Akuntansi ERP & Perpajakan Terpadu
                  </td>
                </tr>
                <tr>
                  <td>Yaycount ERP (Buku Besar & Pembukuan Kasir)</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>
                <tr>
                  <td>Laporan Keuangan Standar Nirlaba ISAK 35</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>
                <tr>
                  <td>IndoTax: PPh 21 Skema TER & Bukti Potong</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>
                <tr>
                  <td>e-Faktur PPN 11% & e-SPT Terintegrasi</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>

                {/* Kategori 4: Kepatuhan Lanjut & AI */}
                <tr style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
                  <td colSpan={5} style={{ fontWeight: 700, color: 'var(--ms-blue-text)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    4. Kecerdasan Buatan & Engine Kepatuhan
                  </td>
                </tr>
                <tr>
                  <td>Goletin AI Multimodal (Asisten Kerja Pintar)</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>
                <tr>
                  <td>ECL Pro: Kalkulasi CKPN IFRS 9 / PSAK 71</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>
                <tr>
                  <td>Lease Engine: Amortisasi Sewa PSAK 73</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>
                <tr>
                  <td>Audit Forensik JET Pro (Hukum Benford ISA 240)</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>

                {/* Kategori 5: Keamanan, SLA & Tata Kelola */}
                <tr style={{ backgroundColor: 'var(--ms-bg-subtle)' }}>
                  <td colSpan={5} style={{ fontWeight: 700, color: 'var(--ms-blue-text)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    5. Keamanan, Tata Kelola & Layanan Dukungan
                  </td>
                </tr>
                <tr>
                  <td>Single Sign-On (SSO) SAML 2.0 / Active Directory</td>
                  <td className="dash-cell">—</td>
                  <td className="dash-cell">—</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td className="dash-cell">—</td>
                </tr>
                <tr>
                  <td>Audit Trail Kriptografis & Kontrol RBAC</td>
                  <td style={{ textAlign: 'center' }}>Dasar</td>
                  <td style={{ textAlign: 'center' }}>Standar</td>
                  <td className="check-cell"><Icon name="check" size={18} /></td>
                  <td style={{ textAlign: 'center' }}>Dasar</td>
                </tr>
                <tr>
                  <td>Komitmen SLA Ketersediaan Layanan</td>
                  <td style={{ textAlign: 'center' }}>99.9%</td>
                  <td style={{ textAlign: 'center' }}>99.9%</td>
                  <td style={{ textAlign: 'center' }}>99.99%</td>
                  <td style={{ textAlign: 'center' }}>99.9%</td>
                </tr>
                <tr>
                  <td>Dukungan Teknis Lokal</td>
                  <td style={{ textAlign: 'center' }}>Tiket / Web</td>
                  <td style={{ textAlign: 'center' }}>8x5 Respon 2 Jam</td>
                  <td style={{ textAlign: 'center' }}>24/7 Prioritas</td>
                  <td style={{ textAlign: 'center' }}>Tiket / Web</td>
                </tr>

                {/* Baris Harga & Aksi */}
                <tr style={{ backgroundColor: '#FAF9F5' }}>
                  <td style={{ fontWeight: 700, fontSize: '15px' }}>Harga per pengguna / bulan</td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--ms-text-heading)' }}>
                      {billingCycle === 'yearly' ? 'Rp45.000' : 'Rp55.000'}
                    </div>
                    <Link
                      href="/kontak?paket=basic"
                      className="btn-secondary"
                      style={{ marginTop: '8px', padding: '6px 12px', fontSize: '12px' }}
                    >
                      Pilih Basic
                    </Link>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--ms-text-heading)' }}>
                      {billingCycle === 'yearly' ? 'Rp145.000' : 'Rp175.000'}
                    </div>
                    <Link
                      href="/kontak?paket=standar"
                      className="btn-secondary"
                      style={{ marginTop: '8px', padding: '6px 12px', fontSize: '12px' }}
                    >
                      Pilih Standar
                    </Link>
                  </td>
                  <td style={{ textAlign: 'center', backgroundColor: '#EBF3F0' }}>
                    <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--ms-text-heading)' }}>
                      {billingCycle === 'yearly' ? 'Rp265.000' : 'Rp315.000'}
                    </div>
                    <Link
                      href="/kontak?paket=premium"
                      className="btn-primary"
                      style={{ marginTop: '8px', padding: '6px 12px', fontSize: '12px' }}
                    >
                      Pilih Premium
                    </Link>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--ms-text-heading)' }}>
                      {billingCycle === 'yearly' ? 'Rp95.000' : 'Rp115.000'}
                    </div>
                    <Link
                      href="/kontak?paket=aplikasi-bisnis"
                      className="btn-secondary"
                      style={{ marginTop: '8px', padding: '6px 12px', fontSize: '12px' }}
                    >
                      Pilih Aplikasi
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons & Specialized Editions Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ms-bg-subtle)', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">ADD-ON & EDISI KHUSUS</span>
            <h2 className="section-title">Perluas Kapabilitas Sesuai Kebutuhan Organisasi</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Tambahkan kapabilitas kecerdasan buatan cerdas atau manfaatkan skema kemitraan khusus untuk yayasan dan korporasi skala besar.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '24px' }}>
            {/* Add-on 1: Goletin Copilot AI */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid var(--ms-border-card)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/logos/goletin-ai.svg" alt="Goletin AI" width={44} height={44} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ms-text-muted)', textTransform: 'uppercase' }}>
                    ADD-ON CERDAS
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ms-text-heading)', margin: 0 }}>
                    Goletin Copilot AI
                  </h3>
                </div>
              </div>

              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '4px' }}>
                Rp150.000
              </div>
              <div style={{ fontSize: '12px', color: 'var(--ms-text-muted)', marginBottom: '16px' }}>
                per pengguna / bulan (dapat ditambahkan ke paket apa saja)
              </div>

              <p style={{ fontSize: '13px', color: 'var(--ms-text-muted)', lineHeight: '19px', marginBottom: '20px', flex: 1 }}>
                Integrasikan kecerdasan buatan generatif ke Docs, Sheets, Slides, dan Yaycount ERP. Ringkas dokumen ratusan halaman dan analisis anomali jurnal instan dengan jaminan privasi data di Indonesia.
              </p>

              <Link href="/kontak?addon=goletin-ai" className="btn-secondary" style={{ justifyContent: 'center' }}>
                <span>Tambah Copilot AI</span>
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>

            {/* Add-on 2: Yaycount Non-profit (ISAK 35) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid var(--ms-border-card)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/logos/yaycount.svg" alt="Yaycount Non-profit" width={44} height={44} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ms-text-muted)', textTransform: 'uppercase' }}>
                    PROGRAM NIRLABA
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ms-text-heading)', margin: 0 }}>
                    Lisensi Khusus Yayasan & Sosial
                  </h3>
                </div>
              </div>

              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ms-blue-text)', marginBottom: '4px' }}>
                Diskon s.d. 60%
              </div>
              <div style={{ fontSize: '12px', color: 'var(--ms-text-muted)', marginBottom: '16px' }}>
                khusus yayasan, panti asuhan, lembaga keagamaan & sekolah
              </div>

              <p style={{ fontSize: '13px', color: 'var(--ms-text-muted)', lineHeight: '19px', marginBottom: '20px', flex: 1 }}>
                Komitmen kepedulian Karsasoft untuk ekosistem nirlaba Indonesia. Dapatkan akses penuh ke Yaycount ERP berstandar ISAK 35, IndoTax, dan Office Suite dengan subsidi lisensi resmi.
              </p>

              <Link href="/kontak?program=nirlaba" className="btn-secondary" style={{ justifyContent: 'center' }}>
                <span>Ajukan Subsidi Nirlaba</span>
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>

            {/* Add-on 3: Enterprise Agreement (> 300 Seats) */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid var(--ms-border-card)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/logos/console.svg" alt="Enterprise Agreement" width={44} height={44} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ms-text-muted)', textTransform: 'uppercase' }}>
                    KORPORASI & BUMN
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ms-text-heading)', margin: 0 }}>
                    Goletin Enterprise (&gt; 300 Seats)
                  </h3>
                </div>
              </div>

              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '4px' }}>
                Kontrak Kustom
              </div>
              <div style={{ fontSize: '12px', color: 'var(--ms-text-muted)', marginBottom: '16px' }}>
                Sovereign Private Cloud atau On-Premises Air-Gapped
              </div>

              <p style={{ fontSize: '13px', color: 'var(--ms-text-muted)', lineHeight: '19px', marginBottom: '20px', flex: 1 }}>
                Skema lisensi enterprise volume dengan SLA 99.99%, Dedicated Technical Account Manager (TAM), integrasi SAP/Core Banking, dan kepatuhan penuh perbankan POJK 11/2022.
              </p>

              <Link href="/goletin/enterprise" className="btn-primary" style={{ justifyContent: 'center' }}>
                <span>Jelajahi Solusi Enterprise</span>
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs Section (Identical Structure to Goletin Enterprise FAQs) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div className="section-header-block centered" style={{ marginBottom: '24px' }}>
            <span className="section-eyebrow">TANYA JAWAB PAKET & HARGA</span>
            <h2 className="section-title">Pertanyaan Umum Seputar Lisensi Goletin</h2>
          </div>

          <div className="goletin-faq-wrapper">
            <div className="goletin-faq-top-bar">
              <span className="goletin-faq-count">{pricingFaqs.length} Tanya Jawab Lisensi, Faktur & Implementasi</span>
              <button
                type="button"
                onClick={toggleAllFaqs}
                className="goletin-faq-toggle-all-btn"
                aria-label={allFaqsOpen ? 'Ciutkan semua pertanyaan' : 'Buka semua pertanyaan'}
              >
                {allFaqsOpen ? 'Ciutkan Semua' : 'Buka Semua'}
              </button>
            </div>

            <div className="goletin-faq-card-surface">
              {pricingFaqs.map((faq, idx) => {
                const isOpen = openFaqs.includes(idx);
                return (
                  <div
                    key={idx}
                    className={`goletin-faq-item ${isOpen ? 'is-expanded' : ''}`}
                  >
                    <button
                      type="button"
                      className="goletin-faq-trigger"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`pricing-faq-${idx}`}
                      id={`pricing-faq-header-${idx}`}
                    >
                      <span className="goletin-faq-q-text">{faq.q}</span>
                      <span
                        className={`goletin-faq-chevron-wrap ${isOpen ? 'is-open' : ''}`}
                        aria-hidden="true"
                      >
                        <Icon name="chevron-down" size={16} />
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`pricing-faq-${idx}`}
                        role="region"
                        aria-labelledby={`pricing-faq-header-${idx}`}
                        className="goletin-faq-content"
                      >
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="goletin-faq-footer-note">
              <p>
                Punya pertanyaan lain mengenai pengadaan lisensi atau faktur pajak perusahaan?{' '}
                <Link href="/kontak" className="goletin-faq-footer-link">
                  <span>Hubungi Tim Konsultan Penjualan Karsasoft</span>
                  <Icon name="chevron-right" size={14} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbered Footnotes (Microsoft Standard Specification) */}
      <div style={{ backgroundColor: 'var(--ms-bg-subtle)', padding: '32px 0', borderTop: '1px solid var(--ms-border)' }}>
        <div className="container">
          <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)', lineHeight: '18px', maxWidth: '960px' }}>
            <p style={{ margin: '0 0 6px 0' }}>
              <strong>[1] Komitmen Penagihan:</strong> Harga langganan tahunan dihitung berdasarkan komitmen minimum masa pakai 12 bulan. Pembatalan sebelum masa kontrak berakhir dapat dikenakan biaya administrasi penutupan layanan.
            </p>
            <p style={{ margin: '0 0 6px 0' }}>
              <strong>[2] Penyimpanan CloudSave:</strong> Alokasi penyimpanan awan 1 TB per akun pengguna dialokasikan pada sovereign cloud cluster bersertifikasi ISO 27001 di Indonesia. Kapasitas tambahan dapat dipesan secara terpisah.
            </p>
            <p style={{ margin: '0 0 6px 0' }}>
              <strong>[3] Kepatuhan Pajak & Faktur:</strong> Faktur Pajak elektronik (e-Faktur) diterbitkan sesuai dengan data NPWP/NITKU perusahaan yang didaftarkan pada saat konfirmasi pemesanan.
            </p>
            <p style={{ margin: '0' }}>
              <strong>[4] Ketersediaan Aplikasi Desktop:</strong> Aplikasi desktop Goletin Office kompatibel dengan sistem operasi Windows 10/11 (64-bit) dan macOS 12 Monterey atau versi yang lebih baru.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Enterprise CTA Banner (Exact Match with Goletin Bisnis & Enterprise) */}
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
