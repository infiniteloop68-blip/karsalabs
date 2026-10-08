import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export const metadata: Metadata = {
  title: 'Studi Kasus & Riset Implementasi — Kisah Sukses Klien | Karsasoft',
  description:
    'Pelajari bagaimana BPR perbankan, 85 yayasan pendidikan, KAP ternama, dan korporasi ritel nasional meningkatkan efisiensi hingga 400% dan menghemat milyaran Rupiah dengan Goletin.',
  alternates: {
    canonical: '/goletin/sumber-daya/studi-kasus',
  },
  openGraph: {
    title: 'Studi Kasus & Riset Implementasi — Kisah Sukses Klien | Karsasoft',
    description:
      'Kisah nyata transformasi digital akuntansi, otomasi PSAK 71/73, dan penghematan biaya lisensi di industri perbankan, pendidikan, dan korporasi Indonesia.',
    url: 'https://karsasoft.com/goletin/sumber-daya/studi-kasus',
    images: ['/og-image.jpg'],
  },
};

const caseStudies = [
  {
    sector: 'PERBANKAN & LEMBAGA KEUANGAN',
    client: 'Konsorsium 12 Bank Perekonomian Rakyat (BPR)',
    region: 'Jawa Tengah & D.I. Yogyakarta',
    productUsed: 'ECL Pro (Expected Credit Loss PSAK 71 / IFRS 9)',
    challenge:
      'Sebelumnya, tim analis kredit membutuhkan waktu 5–7 hari kerja setiap akhir bulan untuk merekap data mutasi pinjaman di lembar kerja manual guna menghitung provisi CKPN. Proses ini rentan salah input rumus dan memicu surat pembinaan dari pengawas OJK.',
    solution:
      'Konsorsium mengimplementasikan engine ECL Pro yang diintegrasikan langsung dengan database Core Banking via batch API v2. Model pementasan Stage 1, 2, dan 3 berjalan otomatis dengan matriks probabilitas gagal bayar (PD) dan LGD terkini.',
    results: [
      'Waktu kalkulasi cadangan provisi dipangkas dari 6 hari menjadi hanya 15 menit per penutupan buku bulanan.',
      '100% lolos pemeriksaan audit berkala pengawas OJK dan akuntan publik independen tanpa koreksi material.',
      'Menghemat pengeluaran jasa konsultan aktuaria eksternal hingga Rp 480 Juta per tahun.',
    ],
  },
  {
    sector: 'YAYASAN & LEMBAGA PENDIDIKAN',
    client: 'Jaringan Yayasan Pendidikan Nasional (85 Unit Sekolah & Pesantren)',
    region: 'Nasional (Jawa, Sumatera & Sulawesi)',
    productUsed: 'Yaycount ERP (ISAK 35) & CloudSave Enterprise',
    challenge:
      'Pengelolaan keuangan 85 unit sekolah dan madrasah tersebar di berkas Excel terpisah tanpa standardisasi bagan akun. Dewan pembina kesulitan memonitor transparansi realisasi dana BOS dan sumbangan SPP dari wali murid.',
    solution:
      'Standardisasi sistem pembukuan terpusat menggunakan Yaycount ERP berbasis web berstandar ISAK 35. Seluruh bendahara unit diberikan pelatihan bersertifikat dan penyimpanan awan berdaulat CloudSave 1 TB.',
    results: [
      'Laporan posisi keuangan konsolidasi seluruh cabang selesai tepat waktu H+3 setiap akhir bulan.',
      'Penghematan belanja lisensi software asing mencapai Rp 1,4 Miliar per tahun berkat beralih ke paket edukasi Goletin.',
      'Akuntabilitas dana bantuan pemerintah terverifikasi transparan dan bebas dari risiko temuan inspektorat.',
    ],
  },
  {
    sector: 'KANTOR AKUNTAN PUBLIK & AUDITOR',
    client: 'Kantor Akuntan Publik (KAP) 10 Rekan & 65 Auditor',
    region: 'Jakarta Selatan & Surabaya',
    productUsed: 'Sampling Pro (ISA 530) & JET Pro (ISA 240 Fraud Detection)',
    challenge:
      'Uji substantif entri jurnal pada klien korporasi dengan ratusan ribu baris transaksi memakan ribuan jam kerja tim auditor junior, memperlambat penyelesaian laporan audit independen tahunan.',
    solution:
      'Menerapkan Sampling Pro untuk penentuan ukuran sampel Monetary Unit Sampling (MUS) yang presisi dan JET Pro untuk pemindaian instan anomali jurnal tidak wajar (weekend entries, rounding, dan split threshold).',
    results: [
      'Kecepatan pengujian audit entri jurnal meningkat 400%, menghemat rata-rata 35 jam kerja per penugasan audit.',
      'Tingkat kepatuhan kertas kerja audit 100% selaras dengan standar mutu IAPI dan SPAP.',
      'KAP berhasil menambah kapasitas penanganan audit klien baru hingga 30% tanpa perlu menambah jumlah staf.',
    ],
  },
  {
    sector: 'KORPORASI RITEL & LOGISTIK',
    client: 'Perusahaan Ritel & Jaringan Distribusi Nasional (450+ Gerai)',
    region: 'Operasional 450+ Titik Gerai & Gudang Se-Indonesia',
    productUsed: 'Lease Engine (Amortisasi Sewa PSAK 73 / IFRS 16)',
    challenge:
      'Mengelola 450+ kontrak sewa toko, gerai ruko, dan armada transportasi dengan jadwal jatuh tempo, eskalasi biaya sewa, dan tingkat bunga pinjaman inkremental (IBR) yang berbeda-beda.',
    solution:
      'Sentralisasi seluruh kontrak sewa di modul Lease Engine. Sistem secara otomatis menghitung nilai sekarang (PV) liabilitas sewa, membuat jadwal depresiasi aset hak guna (ROU), dan mencatat rekonsiliasi saat terjadi modifikasi masa sewa.',
    results: [
      'Eliminasi 100% selisih perhitungan jurnal amortisasi sewa di neraca akhir tahun.',
      'Mengurangi ketergantungan pada jasa konsultan IFRS asing yang memungut biaya lisensi tahunan bernilai USD.',
      'Dashboard eksekutif memberikan visibilitas real-time terhadap total komitmen liabilitas masa depan perusahaan.',
    ],
  },
];

const implementationFactors = [
  {
    icon: 'accounting',
    badge: 'Fase 1',
    title: 'Pemetaan Bagan Akun (COA Mapping)',
    desc: 'Rekonsiliasi struktur akun eksisting dengan pedoman PSAK/ISAK tanpa mengganggu kelangsungan operasional berjalan.',
  },
  {
    icon: 'database',
    badge: 'Fase 2',
    title: 'Migrasi Data Massal Zero-Downtime',
    desc: 'Ekstraksi, pembersihan, dan validasi data historis dari Excel, SAP, atau sistem lama secara terverifikasi.',
  },
  {
    icon: 'book',
    badge: 'Fase 3',
    title: 'Workshop & Sertifikasi Tim',
    desc: 'Pelatihan tatap muka intensif untuk memastikan seluruh staf menguasai fitur dan alur kerja baru dengan lancar.',
  },
  {
    icon: 'compliance',
    badge: 'Fase 4',
    title: 'Supervisi Kesiapan Audit KAP',
    desc: 'Pengujian kertas kerja bersama auditor independen untuk memastikan keselarasan penuh terhadap standar pelaporan baku.',
  },
];

const studiKasusFaqItems: FaqItem[] = [
  {
    id: 'faq-deployment-time',
    q: 'Berapa lama rata-rata durasi implementasi modul Goletin di organisasi kami?',
    a: 'Untuk modul tunggal seperti ECL Pro, Lease Engine, atau IndoTax, waktu go-live rata-rata adalah 1–2 minggu. Untuk implementasi ERP skala besar seperti Yaycount ERP di puluhan unit sekolah, durasi rata-rata berkisar 3–6 minggu termasuk pelatihan staf.',
  },
  {
    id: 'faq-data-security-migration',
    q: 'Bagaimana Karsasoft menjamin keamanan data selama proses migrasi berlangsung?',
    a: 'Seluruh proses migrasi dilindungi Non-Disclosure Agreement (NDA) berkekuatan hukum, protokol transfer terenkripsi TLS 1.3, dan pemusnahan berkas staging sementara pasca-verifikasi keberhasilan integrasi.',
  },
  {
    id: 'faq-poc-validation',
    q: 'Apakah organisasi kami dapat melakukan Proof of Concept (PoC) dengan sampel data nyata?',
    a: 'Ya. Kami menyediakan program Sandbox PoC 14 hari di mana tim Anda dapat menguji akurasi model kalkulasi menggunakan sampel 100–500 transaksi riil perusahaan Anda secara cuma-cuma.',
  },
  {
    id: 'faq-post-golive-support',
    q: 'Apakah ada pendampingan khusus saat periode penutupan buku (closing) pertama pasca go-live?',
    a: 'Setiap klien Enterprise mendapatkan pendampingan teknis intensif dari Dedicated Solutions Architect selama penutupan buku akhir bulan pertama untuk menjamin laporan tersaji akurat 100%.',
  },
];

export default function StudiKasusPage() {
  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Section 1: 4 Case Studies */}
          <section id="kisah-sukses" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Bukti Hasil Implementasi & Riset Lapangan</span>
              <h1 className="section-title">Studi Kasus & Riset Implementasi Goletin</h1>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Pelajari bagaimana organisasi dari sektor perbankan BPR, pendidikan nirlaba, kantor akuntan publik, dan jaringan ritel nasional mencapai efisiensi finansial hingga 4x lipat serta kepatuhan regulasi total.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {caseStudies.map((cs, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--ms-border-card)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {/* Top Bar of Case Study */}
                  <div
                    style={{
                      padding: '18px 24px',
                      backgroundColor: 'var(--ms-bg-subtle)',
                      borderBottom: '1px solid var(--ms-border)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <span className="standard-badge" style={{ margin: 0, fontSize: '11px', padding: '3px 8px' }}>
                        {cs.sector}
                      </span>
                      <strong
                        style={{
                          fontFamily: 'var(--font-segoe-display)',
                          fontSize: '17px',
                          color: 'var(--ms-text-heading)',
                        }}
                      >
                        {cs.client}
                      </strong>
                    </div>

                    <div style={{ fontSize: '12.5px', color: 'var(--ms-text-muted)' }}>
                      <strong>Wilayah:</strong> {cs.region}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '24px' }}>
                    <div
                      style={{
                        fontSize: '13.5px',
                        color: '#007D65',
                        fontWeight: 600,
                        marginBottom: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span style={{ color: 'var(--ms-text-muted)' }}>Solusi Digunakan:</span>
                      <strong>{cs.productUsed}</strong>
                    </div>

                    {/* Challenge vs Solution Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '18px',
                        marginBottom: '20px',
                      }}
                    >
                      <div
                        style={{
                          padding: '18px',
                          backgroundColor: '#FFFDFD',
                          border: '1px solid #FECACA',
                          borderRadius: '8px',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 700,
                            color: '#B91C1C',
                            marginBottom: '6px',
                            letterSpacing: '0.4px',
                          }}
                        >
                          TANTANGAN ORGANISASI:
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--ms-text-body, #1E293B)', lineHeight: 1.55, margin: 0 }}>
                          {cs.challenge}
                        </p>
                      </div>

                      <div
                        style={{
                          padding: '18px',
                          backgroundColor: '#E6FCF7',
                          border: '1px solid #B8EFE2',
                          borderRadius: '8px',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 700,
                            color: '#007D65',
                            marginBottom: '6px',
                            letterSpacing: '0.4px',
                          }}
                        >
                          SOLUSI & IMPLEMENTASI:
                        </div>
                        <p style={{ fontSize: '13px', color: '#0E1726', lineHeight: 1.55, margin: 0 }}>
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results Box */}
                    <div
                      style={{
                        backgroundColor: 'var(--ms-bg-subtle)',
                        padding: '18px 20px',
                        borderRadius: '8px',
                        border: '1px solid var(--ms-border)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: 700,
                          color: 'var(--ms-text-heading)',
                          marginBottom: '10px',
                          letterSpacing: '0.3px',
                        }}
                      >
                        HASIL TERUKUR YANG DICAPAI:
                      </div>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        {cs.results.map((res, rIdx) => (
                          <li
                            key={rIdx}
                            style={{
                              fontSize: '13px',
                              color: 'var(--ms-text-body, #1E293B)',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              lineHeight: 1.5,
                            }}
                          >
                            <span style={{ color: '#007D65', marginTop: '2px', flexShrink: 0, display: 'inline-flex' }}>
                              <Icon name="check" size={13} className="trust-icon-check" />
                            </span>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Implementation Methodology */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Metodologi Implementasi</span>
              <h2 className="section-title">Faktor Penentu Keberhasilan Penerapan Sistem</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Setiap penugasan didukung metodologi implementasi teruji untuk menjamin transisi mulus dan adopsi maksimal.
              </p>
            </div>

            <div className="standards-grid">
              {implementationFactors.map((factor, i) => (
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
                      <Icon name={factor.icon} size={20} />
                    </div>
                    <span className="standard-badge" style={{ margin: 0 }}>
                      {factor.badge}
                    </span>
                  </div>
                  <h3 className="standard-card-title">{factor.title}</h3>
                  <p className="standard-card-desc">{factor.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: FAQ Accordion */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Tanya Jawab Implementasi</span>
              <h2 className="section-title">Pertanyaan Seputar Proses Implementasi & PoC</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi penting mengenai durasi implementasi, keamanan migrasi data, sandbox PoC, dan pendampingan pasca go-live.
              </p>
            </div>
            <GoletinFaq items={studiKasusFaqItems} countLabel="4 Tanya Jawab Studi Kasus & PoC" />
          </section>

          {/* Section 4: Bottom Enterprise CTA Banner (Matching /goletin) */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Konsultasi Sektor Industri
              </span>
              <h2 className="goletin-bottom-cta-title">
                Ingin Mengetahui Bagaimana Goletin Bekerja di Industri Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultasikan alur kerja akuntansi dan kebutuhan sistem organisasi Anda bersama tim spesialis industri kami untuk estimasi dampak efisiensi.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Jadwalkan Konsultasi Gratis</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/goletin/sumber-daya/kalkulator-lisensi" className="btn-secondary">
                  <span>Hitung Potensi Penghematan</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
