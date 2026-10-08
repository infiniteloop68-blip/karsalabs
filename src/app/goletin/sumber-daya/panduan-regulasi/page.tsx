import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export const metadata: Metadata = {
  title: 'Panduan Kepatuhan Regulasi PSAK & IFRS — Standar Akuntansi & Audit | Karsasoft',
  description:
    'Panduan resmi kepatuhan standar akuntansi keuangan Indonesia: PSAK 71 (IFRS 9), PSAK 73 (IFRS 16), ISAK 35 nonlaba, PMK 168 TER PPh 21, dan audit readiness checklist untuk KAP.',
  alternates: {
    canonical: '/goletin/sumber-daya/panduan-regulasi',
  },
  openGraph: {
    title: 'Panduan Kepatuhan Regulasi PSAK & IFRS — Standar Akuntansi & Audit | Karsasoft',
    description:
      'Matriks komprehensif implementasi PSAK 71, PSAK 73, ISAK 35, dan regulasi pajak DJP dengan engine kalkulasi otomatis Goletin.',
    url: 'https://karsasoft.com/goletin/sumber-daya/panduan-regulasi',
    images: ['/og-image.jpg'],
  },
};

const standardMatrices = [
  {
    code: 'PSAK 71 / IFRS 9',
    name: 'Instrumen Keuangan: Kerugian Kredit Ekspektasian (ECL)',
    regulator: 'Dewan Standar Akuntansi Keuangan (DSAK IAI) & OJK',
    scope: 'Perbankan, BPR, Multifinance, Fintech P2P, dan Piutang Usaha Korporasi',
    keyRequirements: [
      'Klasifikasi aset keuangan berdasarkan Business Model & SPPI Test (Amortised Cost, FVOCI, FVTPL).',
      'Model Penurunan Nilai Prospektif (Forward-Looking): Perhitungan cadangan kerugian penurunan nilai (CKPN) menggunakan variabel makroekonomi.',
      'Pementasan Portofolio (Staging): Stage 1 (12-month ECL), Stage 2 (Lifetime ECL - SICR), Stage 3 (Credit Impaired).',
      'Parameter matematis presisi: Probability of Default (PD), Loss Given Default (LGD), dan Exposure at Default (EAD).',
    ],
    goletinEngine: 'ECL Pro — Engine Kalkulasi CKPN IFRS 9',
    engineHref: '/goletin/ecl-pro',
  },
  {
    code: 'PSAK 73 / IFRS 16',
    name: 'Akuntansi Sewa (Leases)',
    regulator: 'DSAK IAI & Standar Akuntansi Internasional',
    scope: 'Penyewa (Lessee) yang memiliki kontrak sewa gedung, armada, mesin, dan infrastruktur kantor',
    keyRequirements: [
      'Pengakuan Seluruh Sewa di Neraca: Tidak ada lagi klasifikasi operating lease di luar neraca (off-balance sheet) bagi lessee.',
      'Aset Hak Guna (Right-of-Use Asset / ROU): Amortisasi aset hak guna selama masa manfaat sewa menggunakan metode garis lurus.',
      'Liabilitas Sewa (Lease Liability): Pengukuran nilai kini pembayaran sewa menggunakan Incremental Borrowing Rate (IBR).',
      'Penanganan Modifikasi Kontrak: Rekalkulasi otomatis liabilitas dan penyesuaian aset saat terjadi perpanjangan atau terminasi dini.',
    ],
    goletinEngine: 'Lease Engine — Amortisasi Sewa PSAK 73 Otomatis',
    engineHref: '/goletin/lease',
  },
  {
    code: 'ISAK 35',
    name: 'Penyajian Laporan Keuangan Entitas Berorientasi Nonlaba',
    regulator: 'Dewan Standar Akuntansi Keuangan (DSAK IAI)',
    scope: 'Yayasan Pendidikan, Lembaga Filantropi, Organisasi Keagamaan, LSM, dan Rumah Sakit Nirlaba',
    keyRequirements: [
      'Klasifikasi Penghasilan Bersih: Pemisahan tegas antara Aset Neto Tanpa Pembatasan vs Aset Neto Dengan Pembatasan Sumber Daya.',
      'Laporan Posisi Keuangan, Penghasilan Komprehensif, Perubahan Aset Neto, dan Arus Kas format khusus nirlaba.',
      'Pelaporan Dana Bantuan Operasional Sekolah (BOS) dan SPP terpisah, akurat, dan terverifikasi.',
      'Akuntabilitas Publik: Kertas kerja siap audit KAP dan Badan Pengawas Keuangan untuk menjaga transparansi donatur.',
    ],
    goletinEngine: 'Yaycount ERP — Solusi ERP Khusus Entitas ISAK 35',
    engineHref: '/goletin/yaycount',
  },
  {
    code: 'PMK 168 / TER PPh 21',
    name: 'Tarif Efektif Rata-Rata Pemotongan Pajak Penghasilan Pasal 21',
    regulator: 'Kementerian Keuangan RI & Direktorat Jenderal Pajak (DJP)',
    scope: 'Seluruh Pemberi Kerja di Indonesia (Korporasi, Lembaga, Yayasan, KAP)',
    keyRequirements: [
      'Penerapan Tarif Efektif Bulanan: Kategori A, B, dan C berdasarkan status Penghasilan Tidak Kena Pajak (PTKP) untuk Masa Jan–Nov.',
      'Penghitungan Masa Pajak Terakhir (Desember): Rekonsiliasi penghitungan menggunakan Pasal 17 ayat (1) huruf a UU PPh.',
      'Integrasi Bukti Potong Resmi: Ekspor format data e-Bupot 21/26 resmi yang dapat langsung diimpor ke sistem DJP Online.',
    ],
    goletinEngine: 'IndoTax — Engine Pajak PPh 21 TER & PPN',
    engineHref: '/goletin/indotax',
  },
];

const auditChecklist = [
  {
    phaseNum: '01',
    stage: 'Fase 1: Persiapan Awal',
    timeline: 'T-60 Hari',
    items: [
      'Pastikan seluruh mutasi bank telah direkonsiliasi 100% hingga batas penutupan periode buku.',
      'Lakukan pengujian entri jurnal manual (ISA 240) untuk mendeteksi jurnal suspense atau entri di luar jam kerja.',
      'Periksa kelengkapan fisik dokumen kontrak sewa dan jadwal amortisasi ROU PSAK 73.',
    ],
  },
  {
    phaseNum: '02',
    stage: 'Fase 2: Validasi Cadangan & Provisi',
    timeline: 'T-30 Hari',
    items: [
      'Jalankan model ECL Pro untuk menghitung CKPN akhir tahun dengan input parameter makroekonomi terkini.',
      'Susun matriks penuaan piutang (aging schedule) dan pastikan kriteria staging 1, 2, dan 3 terdokumentasi.',
      'Lakukan stock opname inventaris menggunakan modul inventory terintegrasi.',
    ],
  },
  {
    phaseNum: '03',
    stage: 'Fase 3: Kertas Kerja & Audit Lapangan',
    timeline: 'T-0 Hari',
    items: [
      'Ekspor kertas kerja audit berformat baku yang siap diserahkan kepada tim auditor independen KAP.',
      'Sediakan jejak audit (audit log) sistem yang menunjukkan riwayat perubahan saldo dan otorisasi pengguna.',
      'Lakukan rekonsiliasi fiskal antara laporan laba rugi komersial dengan Surat Pemberitahuan (SPT) Tahunan.',
    ],
  },
];

const regulasiFaqItems: FaqItem[] = [
  {
    id: 'faq-kap-acceptance',
    q: 'Apakah kertas kerja dari Goletin dapat diterima langsung oleh auditor KAP Big Four & non-Big Four?',
    a: 'Ya. Formula dan output kalkulasi Goletin (ECL Pro, Lease Engine, JET Pro, dan Sampling Pro) dirancang mengacu pada metodologi audit baku ISA dan PSAK. Laporan dilengkapi metodologi matematis terbuka, parameter transparan, dan audit trail lengkap yang memudahkan KAP melakukan review substantif.',
  },
  {
    id: 'faq-pmk-168-update',
    q: 'Bagaimana penyesuaian tarif PPh 21 TER jika terjadi perubahan regulasi perpajakan dari DJP?',
    a: 'Setiap perubahan aturan perpajakan nasional diperbarui otomatis melalui cloud repository IndoTax tanpa biaya tambahan. Anda tidak perlu repot mengubah rumus formula Excel atau memodifikasi database lokal secara manual.',
  },
  {
    id: 'faq-ecl-macro-data',
    q: 'Dari mana sumber data makroekonomi untuk perhitungan forward-looking ECL PSAK 71?',
    a: 'ECL Pro mendukung input multi-skenario (Baseline, Optimis, Pesimis) dengan integrasi data historis makroekonomi Bank Indonesia (BI), BPS, atau parameter kustom yang ditentukan oleh komite manajemen risiko perusahaan Anda.',
  },
  {
    id: 'faq-lease-modification',
    q: 'Bagaimana Lease Engine menangani modifikasi kontrak sewa di tengah periode berjalan?',
    a: 'Saat terjadi perpanjangan sewa, perubahan tarif sewa, atau penghentian dini kontrak (early termination), Lease Engine secara otomatis merekalibrasi nilai liabilitas sewa dan menyesuaikan nilai tercatat aset hak guna (ROU) sesuai pedoman PSAK 73 paragraf 44–46.',
  },
];

export default function PanduanRegulasiPage() {
  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Section 1: Matriks Standar Akuntansi */}
          <section id="matriks-regulasi" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Standar Akuntansi Keuangan (SAK) & Regulasi Nasional</span>
              <h1 className="section-title">Panduan Kepatuhan Regulasi PSAK & IFRS</h1>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Matriks komprehensif implementasi PSAK 71, PSAK 73, ISAK 35, dan regulasi PMK 168 DJP. Dilengkapi checklist kesiapan audit KAP dan otomasi matematis dengan engine Goletin yang teruji audit.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {standardMatrices.map((mat, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--ms-border-card)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {/* Top Bar */}
                  <div
                    style={{
                      padding: '16px 24px',
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
                      <span className="standard-badge" style={{ margin: 0, fontSize: '11.5px', padding: '3px 10px' }}>
                        {mat.code}
                      </span>
                      <strong style={{ fontSize: '16px', color: 'var(--ms-text-heading)', fontFamily: 'var(--font-segoe-display)' }}>
                        {mat.name}
                      </strong>
                    </div>

                    <div style={{ fontSize: '12.5px', color: 'var(--ms-text-muted)' }}>
                      <strong>Regulator:</strong> {mat.regulator}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '24px' }}>
                    <div style={{ marginBottom: '18px', fontSize: '13.5px', color: 'var(--ms-text-muted)' }}>
                      <strong style={{ color: 'var(--ms-text-heading)' }}>Ruang Lingkup Entitas: </strong>
                      <span>{mat.scope}</span>
                    </div>

                    <div style={{ marginBottom: '22px' }}>
                      <div
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 700,
                          color: 'var(--ms-text-heading)',
                          marginBottom: '10px',
                        }}
                      >
                        Ketentuan Pokok Standar:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {mat.keyRequirements.map((req, rIdx) => (
                          <li
                            key={rIdx}
                            style={{
                              fontSize: '13.5px',
                              color: 'var(--ms-text-body, #1E293B)',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              lineHeight: 1.5,
                            }}
                          >
                            <span style={{ marginTop: '2px', flexShrink: 0, display: 'inline-flex', color: '#007D65' }}>
                              <Icon name="check" size={14} className="trust-icon-check" />
                            </span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Integrated Engine Banner */}
                    <div
                      style={{
                        padding: '14px 18px',
                        backgroundColor: '#E6FCF7',
                        border: '1px solid #B8EFE2',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '12px',
                      }}
                    >
                      <div style={{ fontSize: '13.5px', color: 'var(--ms-text-heading)' }}>
                        <span style={{ color: '#007D65', fontWeight: 600 }}>Solusi Otomasi Goletin: </span>
                        <strong>{mat.goletinEngine}</strong>
                      </div>
                      <Link
                        href={mat.engineHref}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#007D65',
                          textDecoration: 'none',
                        }}
                      >
                        <span>Buka Halaman Modul</span>
                        <Icon name="arrow-right" size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Audit Readiness Checklist */}
          <section id="audit-checklist" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Audit Readiness Toolkit</span>
              <h2 className="section-title">Checklist Kesiapan Audit Kantor Akuntan Publik (KAP)</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Gunakan panduan tahapan berikut untuk memastikan seluruh kertas kerja, saldo akun, dan pengujian substantif lengkap sebelum auditor independen datang.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {auditChecklist.map((ch, idx) => (
                <div
                  key={idx}
                  className="standard-card"
                  style={{
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '14px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-segoe-display)',
                          fontSize: '28px',
                          fontWeight: 700,
                          color: '#007D65',
                          lineHeight: 1,
                        }}
                      >
                        {ch.phaseNum}
                      </span>
                      <span className="standard-badge" style={{ margin: 0 }}>
                        {ch.timeline}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-segoe-display)',
                        fontSize: '16.5px',
                        fontWeight: 600,
                        color: 'var(--ms-text-heading)',
                        marginBottom: '16px',
                        lineHeight: '22px',
                      }}
                    >
                      {ch.stage}
                    </h3>

                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}
                    >
                      {ch.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          style={{
                            fontSize: '13px',
                            color: 'var(--ms-text-body, #1E293B)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            lineHeight: 1.55,
                          }}
                        >
                          <span style={{ color: '#007D65', marginTop: '2px', flexShrink: 0, display: 'inline-flex' }}>
                            <Icon name="check" size={13} className="trust-icon-check" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '14px',
                      borderTop: '1px solid var(--ms-border)',
                      fontSize: '12px',
                      color: 'var(--ms-text-muted)',
                    }}
                  >
                    Siap diekspor ke format Excel & PDF kertas kerja auditor.
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: FAQ Accordion */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Tanya Jawab Regulasi</span>
              <h2 className="section-title">Pertanyaan Seputar Kepatuhan & Audit Akuntansi</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi penting mengenai validasi kertas kerja KAP, pembaharuan aturan DJP, data makroekonomi, dan modifikasi sewa.
              </p>
            </div>
            <GoletinFaq items={regulasiFaqItems} countLabel="4 Tanya Jawab Regulasi & Audit" />
          </section>

          {/* Section 4: Bottom Enterprise CTA Banner (Matching /goletin) */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Konsultasi Standar Keuangan
              </span>
              <h2 className="goletin-bottom-cta-title">
                Perlu Asistensi Penerapan Standar Baru di Organisasi Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultan kepatuhan dan solutions architect Karsasoft siap memberikan tinjauan pemetaan bagan akun (COA) serta asistensi implementasi software.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Regulasi Akuntansi</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/goletin/sumber-daya/dokumentasi-api" className="btn-secondary">
                  <span>Lihat Dokumentasi API</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
