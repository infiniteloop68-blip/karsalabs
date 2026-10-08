import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export const metadata: Metadata = {
  title: 'Peta Strategi AI & Roadmap Rilis 2026-2027 — Goletin Karsasoft',
  description:
    'Transparansi arah inovasi dan siklus pembaruan fitur ekosistem Goletin: engine rekonsiliasi AI, deteksi fraud ISA 240, sovereign appliance on-premise, dan timeline rilis kuartalan Q1-Q4.',
  alternates: {
    canonical: '/goletin/sumber-daya/roadmap-ai',
  },
  openGraph: {
    title: 'Peta Strategi AI & Roadmap Rilis 2026-2027 — Goletin Karsasoft',
    description:
      'Lihat peta jalan pengembangan teknologi software finansial dan kepatuhan regulasi Karsasoft untuk tahun 2026 hingga 2027.',
    url: 'https://karsasoft.com/goletin/sumber-daya/roadmap-ai',
    images: ['/og-image.jpg'],
  },
};

const quarters = [
  {
    quarter: 'Q1 2026',
    status: 'DIRILIS & LIVE',
    statusColor: '#107C41',
    bgColor: '#E8F5E9',
    features: [
      {
        title: 'Goletin AI Core Multimodal Finansial',
        desc: 'Pengenalan visual nota, faktur, dan e-Bupot serta konversi otomatis ke draft jurnal akuntansi.',
        tag: 'Kecerdasan Buatan',
      },
      {
        title: 'Engine PMK 168 / TER PPh 21 DJP',
        desc: 'Perhitungan tarif efektif rata-rata Kategori A, B, dan C terintegrasi di IndoTax dan Sheets.',
        tag: 'Perpajakan',
      },
      {
        title: 'CloudSave Desktop Client v2.4',
        desc: 'Klien desktop sinkronisasi berkas luring tanpa jeda untuk Windows 10/11 dan macOS Apple Silicon.',
        tag: 'Infrastruktur',
      },
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'DALAM PENGGELARAN',
    statusColor: '#007D65',
    bgColor: '#E6FCF7',
    features: [
      {
        title: 'Rekonsiliasi Bank AI Multi-Akun',
        desc: 'Pencocokan cerdas mutasi rekening koran BCA, Mandiri, BRI, dan BNI dengan toleransi tanggal dinamis.',
        tag: 'Otomasi Akuntansi',
      },
      {
        title: 'JET Pro ISA 240 Fraud Detection v2',
        desc: 'Algoritma machine learning pendeteksi anomali jurnal akhir pekan, rounding split, dan akun pasif.',
        tag: 'Audit Forensik',
      },
      {
        title: 'Goletin Sovereign Box (Appliance On-Premise)',
        desc: 'Server perangkat keras privat pra-konfigurasi untuk instansi pemerintah dan perbankan BUKU 4.',
        tag: 'Kedaulatan Data',
      },
    ],
  },
  {
    quarter: 'Q3 2026',
    status: 'SEDANG DIKEMBANGKAN',
    statusColor: '#D83B01',
    bgColor: '#FDF3E6',
    features: [
      {
        title: 'Konsolidasi Finansial Lintas Entitas (Multi-Company)',
        desc: 'Eliminasi transaksi antar-perusahaan (intercompany) otomatis untuk grup holding dan yayasan bercabang.',
        tag: 'Enterprise ERP',
      },
      {
        title: 'Generator Pelaporan Ganda SAK vs IFRS',
        desc: 'Penyusunan laporan komparatif SAK Indonesia dan IFRS global dari satu basis data transaksi tunggal.',
        tag: 'Standar Akuntansi',
      },
      {
        title: 'Node Akselerasi GPU On-Premise',
        desc: 'Dukungan inferensi lokal model LLM finansial menggunakan hardware GPU mandiri di data center klien.',
        tag: 'Private AI',
      },
    ],
  },
  {
    quarter: 'Q4 2026 — 2027',
    status: 'PERENCANAAN STRATEGIS',
    statusColor: '#5C2D91',
    bgColor: '#F3EBF9',
    features: [
      {
        title: 'Continuous Autonomous Audit Agent',
        desc: 'Agen AI pengawas audit yang memantau transaksi 24/7 dan memberikan peringatan dini deviasi kepatuhan.',
        tag: 'Inovasi Riset',
      },
      {
        title: 'Engine Pelaporan ESG & Taksonomi Hijau Indonesia',
        desc: 'Modul pelaporan emisi karbon dan kepatuhan taksonomi keuangan berkelanjutan OJK.',
        tag: 'Keberlanjutan',
      },
      {
        title: 'Audit Trail Terverifikasi Buku Besar Kriptografis',
        desc: 'Verifikasi integritas log transaksi akuntansi menggunakan pohon Merkle tanpa ketergantungan pihak ketiga.',
        tag: 'Integritas Data',
      },
    ],
  },
];

const innovationPillars = [
  {
    icon: 'security',
    badge: 'UU PDP Compliant',
    title: 'Kedaulatan Data Penuh',
    desc: 'Seluruh data diproses dan disimpan di pusat data Tier-4 dalam negeri, memenuhi regulasi UU PDP No. 27/2022 tanpa transfer data lintas batas negara.',
  },
  {
    icon: 'ai',
    badge: 'Zero Retention',
    title: 'Zero-Retention Model AI',
    desc: 'Dokumen keuangan rahasia perusahaan Anda tidak pernah disimpan permanen atau dijadikan data pelatihan model publik pihak ketiga.',
  },
  {
    icon: 'compliance',
    badge: 'Audit-Ready',
    title: 'Validasi Standar Terbuka',
    desc: 'Output kalkulasi akuntansi dan audit selalu menyediakan formulasi matematis terbuka dan kertas kerja yang dapat ditinjau oleh auditor independen.',
  },
  {
    icon: 'database',
    badge: 'On-Premise Ready',
    title: 'Performa & Appliance Lokal',
    desc: 'Arsitektur hybrid dan Goletin Sovereign Box memastikan latensi ultra-rendah dan keandalan tinggi tanpa ketergantungan koneksi jaringan internasional.',
  },
];

const roadmapFaqItems: FaqItem[] = [
  {
    id: 'faq-feature-timeline',
    q: 'Seberapa sering Goletin merilis pembaruan fitur ke lingkungan produksi?',
    a: 'Kami menerapkan siklus pembaruan minor setiap dua minggu untuk perbaikan stabilitas dan peningkatan performa, serta rilis kuartalan (quarterly major release) untuk fitur-fitur arsitektur utama.',
  },
  {
    id: 'faq-early-access',
    q: 'Bagaimana cara mendaftar program Early Access / Beta Tester untuk fitur baru?',
    a: 'Klien paket Enterprise dan Mitra Akuntan resmi Karsasoft dapat mengajukan keikutsertaan program Beta Tester melalui Technical Account Manager untuk mencoba fitur kuartal berikutnya di lingkungan sandbox.',
  },
  {
    id: 'faq-feature-request-sla',
    q: 'Apakah perusahaan dapat memesan fitur kustom yang belum ada di roadmap?',
    a: 'Bagi klien institusi dan perbankan, Karsasoft menyediakan opsi Custom Enterprise Roadmap di mana tim engineering kami mendedikasikan sprint khusus untuk integrasi kebutuhan spesifik sistem internal Anda.',
  },
  {
    id: 'faq-on-premise-update',
    q: 'Bagaimana mekanisme pembaruan software untuk instalasi Goletin on-premise?',
    a: 'Instalasi on-premise dan Goletin Sovereign Box menerima pembaruan versi melalui patch package terenkripsi offline atau private container registry lokal tanpa perlu membuka akses internet publik pada server produksi.',
  },
];

export default function RoadmapAIPage() {
  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Section 1: Timeline Roadmap */}
          <section id="timeline-roadmap" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Transparansi Produk & Siklus Inovasi Karsasoft</span>
              <h1 className="section-title">Peta Strategi AI & Roadmap Rilis 2026–2027</h1>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Lihat arah inovasi teknologi perangkat lunak akuntansi, mesin kepatuhan regulasi, dan kecerdasan buatan otonom kami yang dibangun untuk kedaulatan digital Indonesia.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {quarters.map((q, idx) => (
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
                  {/* Header of Quarter */}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-segoe-display)',
                          fontSize: '20px',
                          fontWeight: 700,
                          color: 'var(--ms-text-heading)',
                        }}
                      >
                        {q.quarter}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        letterSpacing: '0.4px',
                        color: q.statusColor,
                        backgroundColor: q.bgColor,
                        padding: '4px 12px',
                        borderRadius: '4px',
                        border: `1px solid ${q.statusColor}35`,
                      }}
                    >
                      ● {q.status}
                    </span>
                  </div>

                  {/* Features in this quarter */}
                  <div style={{ padding: '24px' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '20px',
                      }}
                    >
                      {q.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          style={{
                            padding: '20px',
                            border: '1px solid var(--ms-border)',
                            borderRadius: '8px',
                            backgroundColor: '#FFFFFF',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: q.statusColor,
                                textTransform: 'uppercase',
                                marginBottom: '8px',
                                letterSpacing: '0.4px',
                              }}
                            >
                              {feat.tag}
                            </div>
                            <h3
                              style={{
                                fontFamily: 'var(--font-segoe-display)',
                                fontSize: '15.5px',
                                fontWeight: 600,
                                color: 'var(--ms-text-heading)',
                                marginBottom: '8px',
                                lineHeight: 1.35,
                              }}
                            >
                              {feat.title}
                            </h3>
                            <p
                              style={{
                                fontSize: '13px',
                                color: 'var(--ms-text-muted)',
                                lineHeight: 1.55,
                                margin: 0,
                              }}
                            >
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Innovation Pillars */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Prinsip Rekayasa</span>
              <h2 className="section-title">Prinsip Utama Pengembangan Teknologi Goletin</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Setiap baris kode dan model kecerdasan buatan dirancang dengan fondasi kedaulatan, keamanan, dan kepatuhan hukum.
              </p>
            </div>

            <div className="standards-grid">
              {innovationPillars.map((p, i) => (
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
                      <Icon name={p.icon} size={20} />
                    </div>
                    <span className="standard-badge" style={{ margin: 0 }}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="standard-card-title">{p.title}</h3>
                  <p className="standard-card-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: FAQ Accordion */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Tanya Jawab Roadmap</span>
              <h2 className="section-title">Pertanyaan Seputar Roadmap & Pembaruan Fitur</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi penting mengenai siklus rilis produksi, akses program beta tester, roadmap kustom, dan mekanisme pembaruan on-premise.
              </p>
            </div>
            <GoletinFaq items={roadmapFaqItems} countLabel="4 Tanya Jawab Roadmap AI" />
          </section>

          {/* Section 4: Bottom Enterprise CTA Banner (Matching /goletin) */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kolaborasi & Umpan Balik
              </span>
              <h2 className="goletin-bottom-cta-title">
                Punya Kebutuhan Fitur Spesifik untuk Bisnis Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Kami memprioritaskan roadmap pengembangan berdasarkan umpan balik langsung dari akuntan, auditor, dan manajer IT pengguna Goletin di seluruh Indonesia.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak?ref=feature-request" className="btn-primary">
                  <span>Kirim Usulan Fitur Baru</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/goletin/bisnis" className="btn-secondary">
                  <span>Pelajari Solusi Enterprise</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
