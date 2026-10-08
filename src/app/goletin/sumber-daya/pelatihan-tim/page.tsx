import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export const metadata: Metadata = {
  title: 'Pusat Edukasi & Pelatihan Tim — Sertifikasi & Onboarding | Karsasoft',
  description:
    'Silabus pelatihan resmi Goletin untuk staf akuntan, auditor internal, dan manajer IT: onboarding aplikasi office, sertifikasi profesional akuntansi ISAK 35 & IFRS, dan jadwal workshop berkala.',
  alternates: {
    canonical: '/goletin/sumber-daya/pelatihan-tim',
  },
  openGraph: {
    title: 'Pusat Edukasi & Pelatihan Tim — Sertifikasi & Onboarding | Karsasoft',
    description:
      'Tingkatkan kapabilitas digital tim keuangan organisasi Anda dengan kurikulum bersertifikasi resmi dari praktisi akuntansi Karsasoft.',
    url: 'https://karsasoft.com/goletin/sumber-daya/pelatihan-tim',
    images: ['/og-image.jpg'],
  },
};

const trainingTracks = [
  {
    level: 'TINGKAT 1 • DASAR',
    title: 'Goletin Office & Productivity Mastery',
    target: 'Seluruh Karyawan, Administrasi Kantor, dan Sekretariat',
    duration: '4 Sesi (8 Jam Total) • Mandiri & Interaktif',
    modules: [
      'Navigasi antarmuka Docs, Sheets, Slides, dan manajemen versi berkas CloudSave.',
      'Kolaborasi dokumen bersama tim secara real-time dan pengaturan hak akses peran.',
      'Pemanfaatan Goletin AI untuk merangkum berkas rapat dan koreksi tata bahasa formal.',
      'Penyimpanan aman lokal dan sinkronisasi otomatis multi-perangkat desktop & mobile.',
    ],
  },
  {
    level: 'TINGKAT 2 • MENENGAH',
    title: 'Akuntansi Nonlaba & Yaycount ERP (ISAK 35)',
    target: 'Staf Pembukuan Yayasan, Pesantren, Sekolah, dan Lembaga Nirlaba',
    duration: '6 Sesi (12 Jam Total) • Hands-on Lab Kasus Nyata',
    modules: [
      'Konfigurasi Bagan Akun Standar (COA) sesuai pedoman ISAK 35.',
      'Pemisahan pencatatan dana BOS, infak, donasi terikat, dan dana abadi pendidikan.',
      'Otomasi siklus jurnal penyesuaian, penyusutan aset tetap, dan closing akhir bulan.',
      'Penyusunan 4 laporan keuangan pokok nirlaba yang siap diserahkan ke dewan pembina.',
    ],
  },
  {
    level: 'TINGKAT 3 • LANJUTAN',
    title: 'Pajak Korporasi & IndoTax Engine (PMK 168 / TER)',
    target: 'Finance & Tax Officer, Payroll Specialist, dan HR Administrator',
    duration: '5 Sesi (10 Jam Total) • Simulasi Aplikasi',
    modules: [
      'Penerapan perhitungan PPh 21 TER Kategori A, B, dan C secara massal.',
      'Rekonsiliasi Pajak Masa Desember menggunakan tarif Pasal 17 UU PPh.',
      'Penyusunan SPT Masa PPh 21/26 dan integrasi format impor e-Bupot DJP Online.',
      'Manajemen Faktur Pajak PPN e-Faktur dan rekonsiliasi pajak masukan vs keluaran.',
    ],
  },
  {
    level: 'TINGKAT 4 • EKSEKUTIF & AUDIT',
    title: 'IFRS Compliance & Audit Analytics (PSAK 71/73 & ISA 240)',
    target: 'Auditor KAP, Risk Management Officer, Controller & Direktur Keuangan',
    duration: '8 Sesi (16 Jam Total) • Sertifikasi Profesional GCFP',
    modules: [
      'Pemodelan Expected Credit Loss (ECL) tiga tahap portofolio kredit perbankan.',
      'Amortisasi liabilitas sewa dan depresiasi aset hak guna ROU PSAK 73.',
      'Pengujian substantif entri jurnal (ISA 240) dan Monetary Unit Sampling (ISA 530).',
      'Penyusunan audit trail digital berstandar akuntan publik independen.',
    ],
  },
];

const certifications = [
  {
    badge: 'Ujian Tingkat 3/4',
    icon: 'compliance',
    title: 'Goletin Certified Financial Professional (GCFP)',
    desc: 'Membuktikan kompetensi lanjutan dalam mengoperasikan modul akuntansi, kalkulasi PSAK 71/73, dan pelaporan keuangan IFRS terpadu.',
    prerequisite: 'Lulus Ujian Praktek Tingkat 3 atau 4',
  },
  {
    badge: 'Ujian Tingkat 2',
    icon: 'accounting',
    title: 'Goletin Certified Non-Profit Accountant (GCNPA)',
    desc: 'Standar keahlian spesifik dalam manajemen tata kelola akuntansi yayasan, pesantren, dan pelaporan dana pendidikan ISAK 35.',
    prerequisite: 'Lulus Ujian Praktek Tingkat 2',
  },
  {
    badge: 'Ujian Arsitektur IT',
    icon: 'security',
    title: 'Goletin Certified Systems Administrator (GCSA)',
    desc: 'Penguasaan arsitektur penggelaran IT, integrasi REST API, SSO SAML 2.0, manajemen kunci enkripsi, dan tata kelola kepatuhan data.',
    prerequisite: 'Lulus Penilaian Penggelaran IT & Keamanan',
  },
];

const trainingFaqItems: FaqItem[] = [
  {
    id: 'faq-inhouse-custom',
    q: 'Apakah materi in-house training dapat disesuaikan dengan bagan akun (COA) internal kami?',
    a: 'Ya, seluruh program in-house korporat dapat dikustomisasi secara khusus menggunakan struktur bagan akun, SOP pembukuan, dan contoh kasus dokumen riil yang berlaku di organisasi Anda.',
  },
  {
    id: 'faq-sandbox-access',
    q: 'Apakah peserta pelatihan mendapatkan akses ke lingkungan demo/sandbox?',
    a: 'Setiap peserta mendapatkan akun sandbox privat aktif selama 30 hari pasca-pelatihan untuk berlatih mandiri mengeksekusi jurnal, rekonsiliasi, dan formula spreadsheet tanpa risiko mengubah data produksi.',
  },
  {
    id: 'faq-cert-validity',
    q: 'Bagaimana cara memverifikasi keaslian sertifikat Goletin yang telah diterbitkan?',
    a: 'Setiap sertifikat digital dilengkapi QR code dan ID unik verifikasi daring di portal karsasoft.com/verifikasi untuk memvalidasi kredibilitas kompetensi peserta secara langsung.',
  },
  {
    id: 'faq-min-participants',
    q: 'Berapa kuota minimum peserta untuk mengadakan workshop on-premise di kantor kami?',
    a: 'Untuk program on-premise in-house di kantor Anda, kuota efektif disarankan antara 5 hingga 25 peserta per angkatan demi memastikan interaktivitas pendampingan intensif dari instruktur.',
  },
];

export default function PelatihanTimPage() {
  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Section 1: 4 Training Tracks */}
          <section id="jalur-pelatihan" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Akademi Pengembangan Talenta Digital Keuangan</span>
              <h1 className="section-title">Pusat Edukasi, Pelatihan & Sertifikasi Tim</h1>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Bekali tim akuntansi, perpajakan, audit, dan staf operasional Anda dengan kurikulum terstruktur, modul studi kasus nyata, dan sertifikasi profesional resmi Goletin.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
              }}
            >
              {trainingTracks.map((tr, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--ms-border-card)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-card)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Top Track Header */}
                  <div
                    style={{
                      padding: '24px 24px 18px',
                      borderBottom: '1px solid var(--ms-border)',
                      backgroundColor: 'var(--ms-bg-subtle)',
                    }}
                  >
                    <span
                      className="standard-badge"
                      style={{
                        margin: '0 0 10px 0',
                        fontSize: '11px',
                        padding: '3px 8px',
                        display: 'inline-block',
                      }}
                    >
                      {tr.level}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-segoe-display)',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'var(--ms-text-heading)',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      {tr.title}
                    </h3>
                    <div style={{ fontSize: '13px', color: 'var(--ms-text-muted)', marginBottom: '4px' }}>
                      <strong style={{ color: 'var(--ms-text-heading)' }}>Target Peserta:</strong> {tr.target}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#007D65', fontWeight: 600 }}>
                      <strong>Format:</strong> {tr.duration}
                    </div>
                  </div>

                  {/* Modules Body */}
                  <div style={{ padding: '20px 24px', flexGrow: 1, backgroundColor: '#FFFFFF' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--ms-text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '12px',
                      }}
                    >
                      Silabus Utama:
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
                      {tr.modules.map((m, mIdx) => (
                        <li
                          key={mIdx}
                          style={{
                            fontSize: '13px',
                            color: 'var(--ms-text-body, #1E293B)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ marginTop: '2px', flexShrink: 0, display: 'inline-flex', color: '#007D65' }}>
                            <Icon name="check" size={13} className="trust-icon-check" />
                          </span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Register Link */}
                  <div
                    style={{
                      padding: '16px 24px',
                      borderTop: '1px solid var(--ms-border)',
                      backgroundColor: 'var(--ms-bg-subtle)',
                    }}
                  >
                    <Link
                      href="/kontak?ref=daftar-pelatihan"
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
                      <span>Daftar Sesi Pelatihan Ini</span>
                      <Icon name="arrow-right" size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Certifications */}
          <section id="sertifikasi" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Standar Kompetensi Profesional</span>
              <h2 className="section-title">Program Sertifikasi Resmi Karsasoft</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Tingkatkan nilai portofolio dan kredibilitas staf akuntansi organisasi dengan sertifikat digital yang dapat diverifikasi secara daring.
              </p>
            </div>

            <div className="standards-grid">
              {certifications.map((c, i) => (
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
                      <Icon name={c.icon} size={20} />
                    </div>
                    <span className="standard-badge" style={{ margin: 0 }}>
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="standard-card-title">{c.title}</h3>
                  <p className="standard-card-desc" style={{ marginBottom: '14px' }}>
                    {c.desc}
                  </p>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#007D65',
                      fontWeight: 600,
                      backgroundColor: '#E6FCF7',
                      border: '1px solid #B8EFE2',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      display: 'inline-block',
                    }}
                  >
                    Syarat: {c.prerequisite}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: FAQ Accordion */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Tanya Jawab Pelatihan</span>
              <h2 className="section-title">Pertanyaan Seputar Workshop & Sertifikasi</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi penting mengenai skema in-house training, penyediaan lingkungan sandbox, sertifikat digital, dan pendampingan pasca-pelatihan.
              </p>
            </div>
            <GoletinFaq items={trainingFaqItems} countLabel="4 Tanya Jawab Pelatihan Tim" />
          </section>

          {/* Section 4: Bottom Enterprise CTA Banner (Matching /goletin) */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Konsultasi Pelatihan
              </span>
              <h2 className="goletin-bottom-cta-title">
                Ingin Menyelenggarakan Pelatihan In-House di Kantor Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Instruktur bersertifikasi Karsasoft siap hadir di lokasi kantor Anda untuk workshop intensif 2–3 hari lengkap dengan studi kasus data riil dan kurikulum kustom.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak?ref=inhouse-proposal" className="btn-primary">
                  <span>Minta Proposal In-House Training</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/goletin/bisnis" className="btn-secondary">
                  <span>Pelajari Solusi Bisnis</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
