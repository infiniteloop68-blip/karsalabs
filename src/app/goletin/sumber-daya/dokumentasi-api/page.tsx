import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { ApiDocsSnippetClient } from '@/components/ApiDocsSnippetClient';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export const metadata: Metadata = {
  title: 'Dokumentasi API & Integrasi Sistem — Developer Hub | Karsasoft',
  description:
    'Dokumentasi resmi REST API v2, Webhooks, dan SDK Goletin. Hubungkan software akuntansi, modul kepatuhan PSAK 71/73, dan pajak dengan ERP SAP, Oracle NetSuite, Accurate, dan sistem in-house.',
  alternates: {
    canonical: '/goletin/sumber-daya/dokumentasi-api',
  },
  openGraph: {
    title: 'Dokumentasi API & Integrasi Sistem — Developer Hub | Karsasoft',
    description:
      'Integrasikan engine keuangan berstandar PSAK & IFRS ke dalam infrastruktur korporasi Anda dengan REST API v2 berkecepatan tinggi.',
    url: 'https://karsasoft.com/goletin/sumber-daya/dokumentasi-api',
    images: ['/og-image.jpg'],
  },
};

const coreEndpoints = [
  {
    method: 'POST',
    path: '/v2/ecl/calculate',
    standard: 'PSAK 71 / IFRS 9',
    title: 'Kalkulasi CKPN Portofolio Kredit',
    desc: 'Menghitung staging akun, Probability of Default (PD), Loss Given Default (LGD), dan nominal provisi CKPN secara batch hingga 100.000 akun per permintaan.',
  },
  {
    method: 'POST',
    path: '/v2/lease/amortization',
    standard: 'PSAK 73 / IFRS 16',
    title: 'Jadwal Amortisasi Sewa & Hak Guna',
    desc: 'Menghitung nilai sekarang liabilitas sewa, tabel bunga amortisasi per bulan, depresiasi aset ROU, dan rekalkulasi otomatis saat ada modifikasi kontrak.',
  },
  {
    method: 'POST',
    path: '/v2/tax/pph21-ter',
    standard: 'PMK 168 / TER PPh 21',
    title: 'Penghitungan Tarif Efektif Rata-Rata',
    desc: 'Menerima data bruto bulanan dan status PTKP karyawan, mengembalikan persentase tarif efektif resmi DJP dan nominal pemotongan pajak terutang.',
  },
  {
    method: 'POST',
    path: '/v2/yaycount/journals',
    standard: 'ISAK 35 Nirlaba',
    title: 'Posting Entri Jurnal Umum Otomatis',
    desc: 'Menyuntikkan entri jurnal debit/kredit seimbang ke dalam Buku Besar Yaycount ERP secara real-time dengan validasi format akun dan nomor bukti.',
  },
  {
    method: 'GET',
    path: '/v2/audit/event-stream',
    standard: 'ISA 240 Fraud Detection',
    title: 'Penarikan SIEM Audit Trail & Anomali',
    desc: 'Mengambil riwayat log audit kepatuhan, mutasi pengguna, dan sinyal anomali fraud entri jurnal untuk diintegrasikan ke SOC atau SIEM perusahaan.',
  },
];

const connectors = [
  {
    name: 'SAP S/4HANA & ECC',
    type: 'RFC & OData Connector',
    icon: 'database',
    desc: 'Sinkronisasi master data vendor, akun pembukuan, dan aset sewa secara bi-directional dengan modul FI/CO SAP.',
  },
  {
    name: 'Oracle NetSuite',
    type: 'SuiteTalk REST Services',
    icon: 'cloud',
    desc: 'Integrasi otomatis modul pengakuan pendapatan PSAK 72, amortisasi sewa, dan penyisihan provisi piutang usaha.',
  },
  {
    name: 'Accurate Online',
    type: 'Official Open API',
    icon: 'accounting',
    desc: 'Penarikan data transaksi faktur penjualan dan perhitungan otomatis pemotongan PPh 21 TER masa serta SPT Masa.',
  },
  {
    name: 'Jurnal by Mekari',
    type: 'Webhook Event Sync',
    icon: 'link',
    desc: 'Ekspor jurnal penyesuaian akhir bulan dan posting mutasi kas langsung ke akun buku besar perusahaan.',
  },
];

const apiFaqItems: FaqItem[] = [
  {
    id: 'faq-rate-limit',
    q: 'Berapa batas laju pemanggilan (rate limit) untuk REST API Goletin?',
    a: 'Untuk tier Sandbox pengembang, batas laju default adalah 120 permintaan per menit (RPM). Untuk lisensi Enterprise berbayar, batas laju ditingkatkan hingga 5.000 RPM dengan dukungan pemrosesan batch asynchronous berkapasitas besar.',
  },
  {
    id: 'faq-webhook-retry',
    q: 'Bagaimana penanganan kegagalan pengiriman event pada Webhooks Goletin?',
    a: 'Webhook Goletin menggunakan mekanisme exponential backoff retry hingga 5 kali dalam rentang waktu 24 jam dengan verifikasi HMAC-SHA256 signature pada header X-Goletin-Signature untuk menjamin keaslian data.',
  },
  {
    id: 'faq-sdk-support',
    q: 'Bahasa pemrograman apa saja yang didukung oleh SDK resmi Goletin?',
    a: 'Kami menyediakan SDK resmi untuk TypeScript/Node.js dan Python 3. Untuk bahasa lain seperti Java, Go, C#, dan PHP, Anda dapat menggunakan spesifikasi OpenAPI / Swagger v3 kami untuk membuat klien secara otomatis.',
  },
  {
    id: 'faq-data-residency-api',
    q: 'Apakah pemanggilan API menjamin bahwa data finansial tidak keluar dari wilayah Indonesia?',
    a: 'Mutlak ya. Seluruh API gateway, worker node kalkulasi, dan basis data transaksi dihosting di pusat data Tier-4 lokal di Jakarta Raya, menjamin kepatuhan penuh terhadap UU PDP No. 27/2022 dan regulasi OJK.',
  },
];

export default function DokumentasiAPIPage() {
  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Section 1: Code Snippets */}
          <section id="code-snippets" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '32px' }}>
              <span className="section-eyebrow">Developer Hub & Arsitektur Integrasi Sistem</span>
              <h1 className="section-title">Dokumentasi REST API & Integrasi Goletin</h1>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Hubungkan core banking, ERP korporat, HRIS, dan workflow internal perusahaan dengan engine komputasi regulasi finansial Karsasoft via REST API v2 berkecepatan tinggi dan Webhook real-time.
              </p>
            </div>

            <ApiDocsSnippetClient />
          </section>

          {/* Section 2: Core Endpoints List */}
          <section id="endpoints" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Spesifikasi Endpoint</span>
              <h2 className="section-title">Daftar Endpoint REST API v2 Utama</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Seluruh endpoint merespons dalam format JSON standar ISO-8601 dengan validasi skema otomatis dan deskripsi status error terperinci.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {coreEndpoints.map((ep, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--ms-border-card)',
                    borderRadius: '12px',
                    padding: '24px 28px',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      flexWrap: 'wrap',
                      gap: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          backgroundColor: '#0E1726',
                          color: ep.method === 'POST' ? '#00EDC2' : '#38BDF8',
                          fontWeight: 700,
                          fontSize: '11px',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontFamily: 'monospace',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {ep.method}
                      </span>
                      <code
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#007D65',
                          backgroundColor: '#E6FCF7',
                          padding: '3px 10px',
                          borderRadius: '4px',
                          fontFamily: 'monospace',
                        }}
                      >
                        {ep.path}
                      </code>
                      <strong
                        style={{
                          fontSize: '15.5px',
                          color: 'var(--ms-text-heading)',
                          fontFamily: 'var(--font-segoe-display)',
                        }}
                      >
                        — {ep.title}
                      </strong>
                    </div>

                    <span className="standard-badge" style={{ margin: 0, fontSize: '11px', padding: '2px 8px' }}>
                      {ep.standard}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--ms-text-muted)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {ep.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Enterprise ERP Connectors */}
          <section id="connectors" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Konektor Enterprise</span>
              <h2 className="section-title">Konektor Siap Pakai untuk Ekosistem ERP</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Integrasi tanpa perlu membangun kode dari nol berkat konektor middleware bersertifikasi untuk platform bisnis terkemuka.
              </p>
            </div>

            <div className="standards-grid">
              {connectors.map((c, i) => (
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
                      {c.type}
                    </span>
                  </div>
                  <h3 className="standard-card-title">{c.name}</h3>
                  <p className="standard-card-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: FAQ Accordion */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Tanya Jawab Pengembang</span>
              <h2 className="section-title">Pertanyaan Seputar Integrasi API & Keamanan</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi penting seputar batas laju panggilan (rate limit), akses webhook, kompatibilitas SDK, dan kedaulatan data.
              </p>
            </div>
            <GoletinFaq items={apiFaqItems} countLabel="4 Tanya Jawab API & Integrasi" />
          </section>

          {/* Section 5: Bottom Enterprise CTA Banner (Matching /goletin) */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Akses Pengembang
              </span>
              <h2 className="goletin-bottom-cta-title">
                Butuh Akses Lingkungan Sandbox Pengembang?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Dapatkan kunci API pengujian dengan kuota hingga 50.000 panggilan per bulan bersama pendampingan teknis arsitek solusi Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak?ref=developer-sandbox" className="btn-primary">
                  <span>Minta Akses Kunci Sandbox</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/goletin/sumber-daya/engineering-blog" className="btn-secondary">
                  <span>Baca Engineering Blog</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
