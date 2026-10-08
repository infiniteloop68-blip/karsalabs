import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';
import { ENGINEERING_ARTICLES } from '@/data/engineeringArticles';

export const metadata: Metadata = {
  title: 'Goletin Engineering Blog — Rekayasa Perangkat Lunak & Riset Sistem | Karsasoft',
  description:
    'Catatan teknis dari tim insinyur perangkat lunak Karsasoft: arsitektur WebAssembly komputasi finansial, kriptografi end-to-end CloudSave, fine-tuning SLM akuntansi, dan sovereign cloud design.',
  alternates: {
    canonical: '/goletin/sumber-daya/engineering-blog',
  },
  openGraph: {
    title: 'Goletin Engineering Blog — Rekayasa Perangkat Lunak & Riset Sistem | Karsasoft',
    description:
      'Artikel teknis mendalam tentang rekayasa performa tinggi, kriptografi zero-knowledge, dan AI finansial dari tim engineer Goletin Karsasoft.',
    url: 'https://karsasoft.com/goletin/sumber-daya/engineering-blog',
    images: ['/og-image.jpg'],
  },
};

const engineeringPillars = [
  {
    icon: 'code',
    badge: 'High Performance',
    title: 'Kompilasi WebAssembly Native',
    desc: 'Memindahkan beban kalkulasi matriks berat langsung ke thread CPU pengguna untuk latensi mendekati nol dan privasi komputasi maksimal.',
  },
  {
    icon: 'security',
    badge: 'Cryptographic Trust',
    title: 'Enkripsi Zero-Knowledge',
    desc: 'Kunci privat derivasi Argon2id tersimpan di perangkat lokal, memastikan data tidak dapat diakses bahkan oleh operator cloud Karsasoft.',
  },
  {
    icon: 'ai',
    badge: 'Deterministic AI',
    title: 'Constrained AI Decoding',
    desc: 'Menjamin output model generatif selalu mematuhi kaidah invarian matematika ketat dan standar akuntansi double-entry seimbang.',
  },
  {
    icon: 'database',
    badge: 'Data Sovereignty',
    title: 'Arsitektur Kedaulatan Penuh',
    desc: 'Menjamin seluruh basis data dan worker node berada di pusat data Tier-4 lokal di wilayah kedaulatan Republik Indonesia.',
  },
];

const blogFaqItems: FaqItem[] = [
  {
    id: 'faq-open-source',
    q: 'Apakah pustaka WebAssembly dan model SLM Goletin tersedia secara open-source?',
    a: 'Sebagian modul utilitas dasar dan spesifikasi benchmarking kami rilis di GitHub Karsasoft di bawah lisensi Apache-2.0. Engine kalkulasi inti korporat dan model fine-tuning berlisensi proprietary untuk klien berbayar.',
  },
  {
    id: 'faq-benchmark-reproducibility',
    q: 'Bagaimana cara mereproduksi tolok ukur (benchmark) yang tercantum dalam artikel blog?',
    a: 'Setiap artikel teknis kami menyertakan skrip pengujian sintetis dan konfigurasi hardware yang dapat dijalankan langsung di lingkungan Node.js atau Docker lokal Anda.',
  },
  {
    id: 'faq-guest-engineering',
    q: 'Apakah Karsasoft menerima tulisan riset atau studi kasus dari engineer eksternal?',
    a: 'Kami menyambut artikel kolaborasi dari akademisi, peneliti keamanan siber, dan praktisi IT industri perbankan yang telah menguji ekosistem Goletin. Hubungi tim riset kami melalui formulir kontak.',
  },
  {
    id: 'faq-engineering-careers',
    q: 'Apakah tim engineering Karsasoft membuka lowongan untuk pengembang sistem dan peneliti AI?',
    a: 'Ya, kami terus membuka kesempatan bagi Software Engineer, Cryptography Specialist, dan AI Research Scientist untuk bergabung dengan kantor riset kami di Bandung dan Jakarta.',
  },
];

export default function EngineeringBlogPage() {
  const featuredArticle = ENGINEERING_ARTICLES[0];
  const otherArticles = ENGINEERING_ARTICLES.slice(1);

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Featured Article Card */}
          {featuredArticle && (
            <section style={{ marginBottom: '56px' }}>
              <div className="section-header-block centered" style={{ marginBottom: '28px' }}>
                <span className="section-eyebrow">Catatan Rekayasa & Arsitektur Perangkat Lunak</span>
                <h1 className="section-title">Goletin Engineering Blog</h1>
                <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                  Wawasan mendalam dari para insinyur di balik ekosistem Goletin: eksplorasi WebAssembly performa tinggi, kriptografi zero-knowledge, fine-tuning model AI finansial, dan rancang bangun arsitektur sovereign cloud.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #00EDC2',
                  borderRadius: '12px',
                  padding: '36px',
                  boxShadow: '0 8px 30px rgba(0, 237, 194, 0.12)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '14px',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  <span className="standard-badge" style={{ margin: 0 }}>
                    {featuredArticle.category}
                  </span>
                  <div style={{ fontSize: '13px', color: 'var(--ms-text-muted)' }}>
                    <span>{featuredArticle.date}</span> • <span>{featuredArticle.readTime}</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-segoe-display)',
                    fontSize: '26px',
                    fontWeight: 700,
                    color: 'var(--ms-text-heading)',
                    marginBottom: '14px',
                    lineHeight: '34px',
                  }}
                >
                  <Link
                    href={`/goletin/sumber-daya/engineering-blog/${featuredArticle.slug}`}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {featuredArticle.title}
                  </Link>
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--ms-text-body, #1E293B)',
                    lineHeight: 1.65,
                    marginBottom: '24px',
                  }}
                >
                  {featuredArticle.summary}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px',
                    borderTop: '1px solid var(--ms-border)',
                    paddingTop: '20px',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {featuredArticle.tags.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '12px',
                          backgroundColor: '#F1F5F9',
                          color: '#475569',
                          padding: '3px 9px',
                          borderRadius: '4px',
                          fontFamily: 'monospace',
                        }}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--ms-text-muted)' }}>
                      Penulis: <strong style={{ color: 'var(--ms-text-heading)' }}>{featuredArticle.author}</strong>
                    </span>
                    <Link
                      href={`/goletin/sumber-daya/engineering-blog/${featuredArticle.slug}`}
                      className="btn-primary"
                      style={{ padding: '8px 16px', fontSize: '13px' }}
                    >
                      <span>Baca Artikel Lengkap</span>
                      <Icon name="arrow-right" size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section 1: All Articles List */}
          <section id="artikel-terbaru" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Publikasi Rekayasa Teknis</span>
              <h2 className="section-title">Semua Artikel & Analisis Sistem</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Pelajari dokumentasi teknis mendalam mengenai arsitektur, algoritma, dan rekayasa performa ekosistem Goletin.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {otherArticles.map((art) => (
                <article
                  key={art.slug}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--ms-border-card)',
                    borderRadius: '12px',
                    padding: '28px',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '12px',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <span className="standard-badge" style={{ margin: 0, fontSize: '11px' }}>
                      {art.category}
                    </span>
                    <div style={{ fontSize: '12.5px', color: 'var(--ms-text-muted)' }}>
                      <span>{art.date}</span> • <span>{art.readTime}</span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-segoe-display)',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--ms-text-heading)',
                      marginBottom: '10px',
                      lineHeight: '28px',
                    }}
                  >
                    <Link
                      href={`/goletin/sumber-daya/engineering-blog/${art.slug}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {art.title}
                    </Link>
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--ms-text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '18px',
                    }}
                  >
                    {art.summary}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '12px',
                      borderTop: '1px solid var(--ms-border)',
                      paddingTop: '14px',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {art.tags.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '11.5px',
                            backgroundColor: '#F1F5F9',
                            color: '#475569',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontFamily: 'monospace',
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span style={{ fontSize: '12.5px', color: 'var(--ms-text-muted)' }}>
                        Oleh: <strong style={{ color: 'var(--ms-text-heading)' }}>{art.author}</strong>
                      </span>
                      <Link
                        href={`/goletin/sumber-daya/engineering-blog/${art.slug}`}
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
                        <span>Baca Lengkap</span>
                        <Icon name="arrow-right" size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 2: Engineering Pillars */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Prinsip Arsitektur</span>
              <h2 className="section-title">Pilar Rekayasa Perangkat Lunak Karsasoft</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Fondasi teknologi yang membedakan ekosistem Goletin dari software bisnis dan produktivitas konvensional.
              </p>
            </div>

            <div className="standards-grid">
              {engineeringPillars.map((p, i) => (
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
              <span className="section-eyebrow">Tanya Jawab Teknis</span>
              <h2 className="section-title">Pertanyaan Seputar Riset Rekayasa Kami</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi penting mengenai kebijakan open source, reproduksi tolok ukur, publikasi kolaborasi, dan karir engineering.
              </p>
            </div>
            <GoletinFaq items={blogFaqItems} countLabel="4 Tanya Jawab Engineering" />
          </section>

          {/* Section 4: Bottom Enterprise CTA Banner (Matching /goletin) */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Karir & Kolaborasi
              </span>
              <h2 className="goletin-bottom-cta-title">
                Tertarik Berkolaborasi atau Bergabung dengan Tim Rekayasa Kami?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Kami selalu mencari talenta software engineer berbakat dalam bidang WebAssembly, sistem terdistribusi, AI terapan, dan keamanan kriptografi.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/tentang" className="btn-primary">
                  <span>Tentang Rekayasa Karsasoft</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <Link href="/kontak" className="btn-secondary">
                  <span>Hubungi Tim Riset</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
