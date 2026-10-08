import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { ENGINEERING_ARTICLES } from '@/data/engineeringArticles';
import { ArticleSidebarClient } from '@/components/ArticleSidebarClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ENGINEERING_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ENGINEERING_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan — Goletin Engineering Blog',
    };
  }

  return {
    title: `${article.title} — Goletin Engineering Blog | Karsasoft`,
    description: article.summary,
    alternates: {
      canonical: `/goletin/sumber-daya/engineering-blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://karsasoft.com/goletin/sumber-daya/engineering-blog/${article.slug}`,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function EngineeringArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = ENGINEERING_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ENGINEERING_ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Back Navigation Button */}
          <div style={{ marginBottom: '24px' }}>
            <Link
              href="/goletin/sumber-daya/engineering-blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#007D65',
                textDecoration: 'none',
              }}
            >
              <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}>
                <Icon name="arrow-right" size={14} />
              </span>
              <span>Kembali ke Engineering Blog</span>
            </Link>
          </div>

          {/* Wide 2-Column Article Layout */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            {/* Main Content Column (Wide & Spacious) */}
            <main
              style={{
                flex: '1 1 760px',
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
              }}
            >
              {/* Article Header Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--ms-border-card)',
                  borderRadius: '12px',
                  padding: '36px 40px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '16px',
                  }}
                >
                  <span className="standard-badge" style={{ margin: 0 }}>
                    {article.category}
                  </span>
                  <div style={{ fontSize: '13px', color: 'var(--ms-text-muted)' }}>
                    <span>{article.date}</span> • <span>{article.readTime}</span>
                  </div>
                </div>

                <h1
                  style={{
                    fontFamily: 'var(--font-segoe-display)',
                    fontSize: '34px',
                    lineHeight: '44px',
                    fontWeight: 700,
                    color: 'var(--ms-text-heading)',
                    marginBottom: '20px',
                  }}
                >
                  {article.title}
                </h1>

                {/* Author Info Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    paddingTop: '18px',
                    borderTop: '1px solid var(--ms-border)',
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#E6FCF7',
                      border: '1px solid #B8EFE2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#007D65',
                      fontWeight: 700,
                      fontSize: '17px',
                    }}
                  >
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                      {article.author}
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'var(--ms-text-muted)' }}>
                      {article.authorRole}
                    </div>
                  </div>
                </div>
              </div>

              {/* Executive Abstract Box */}
              <div
                style={{
                  backgroundColor: 'var(--ms-bg-subtle)',
                  border: '1px solid var(--ms-border)',
                  borderRadius: '10px',
                  padding: '24px 32px',
                }}
              >
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: '#007D65',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '8px',
                  }}
                >
                  RINGKASAN TEKNIS (EXECUTIVE ABSTRACT):
                </div>
                <p
                  style={{
                    fontSize: '15.5px',
                    lineHeight: 1.7,
                    color: 'var(--ms-text-body, #1E293B)',
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{article.summary}&rdquo;
                </p>
              </div>

              {/* Article Content Body Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--ms-border-card)',
                  borderRadius: '12px',
                  padding: '40px 44px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '40px',
                }}
              >
                {article.sections.map((sec, sIdx) => (
                  <section
                    key={sIdx}
                    id={`section-${sIdx}`}
                    style={{ scrollMarginTop: '100px' }}
                  >
                    <h2
                      style={{
                        fontFamily: 'var(--font-segoe-display)',
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'var(--ms-text-heading)',
                        marginBottom: '16px',
                        lineHeight: '32px',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '8px',
                      }}
                    >
                      <span style={{ color: '#007D65', fontSize: '18px' }}>
                        #{sIdx + 1}
                      </span>
                      <span>{sec.heading}</span>
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '16px' }}>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          style={{
                            fontSize: '15.5px',
                            lineHeight: 1.75,
                            color: 'var(--ms-text-body, #1E293B)',
                            margin: 0,
                          }}
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Callout if any */}
                    {sec.callout && (
                      <div
                        style={{
                          padding: '16px 22px',
                          backgroundColor: sec.callout.type === 'warning' ? '#FEF2F2' : '#E6FCF7',
                          border: sec.callout.type === 'warning' ? '1px solid #FECACA' : '1px solid #B8EFE2',
                          borderRadius: '8px',
                          fontSize: '14px',
                          color: sec.callout.type === 'warning' ? '#991B1B' : '#007D65',
                          lineHeight: 1.6,
                          margin: '20px 0',
                        }}
                      >
                        <strong>{sec.callout.type === 'warning' ? 'Catatan Kritis: ' : 'Insight Arsitektur: '}</strong>
                        {sec.callout.text}
                      </div>
                    )}

                    {/* Code Block if any */}
                    {sec.codeBlock && (
                      <div
                        style={{
                          backgroundColor: '#1E1E1E',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          margin: '22px 0',
                          border: '1px solid #333333',
                        }}
                      >
                        {sec.codeBlock.caption && (
                          <div
                            style={{
                              backgroundColor: '#252526',
                              padding: '10px 18px',
                              fontSize: '12px',
                              color: '#00EDC2',
                              fontFamily: 'monospace',
                              borderBottom: '1px solid #333333',
                            }}
                          >
                            {sec.codeBlock.caption}
                          </div>
                        )}
                        <pre
                          style={{
                            margin: 0,
                            padding: '22px',
                            color: '#D4D4D4',
                            fontSize: '13.5px',
                            lineHeight: 1.65,
                            fontFamily: "'Cascadia Code', Consolas, 'Courier New', monospace",
                            overflowX: 'auto',
                          }}
                        >
                          <code>{sec.codeBlock.code}</code>
                        </pre>
                      </div>
                    )}

                    {/* Bullet Points if any */}
                    {sec.bulletPoints && (
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: '16px 0 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}
                      >
                        {sec.bulletPoints.map((bp, bIdx) => (
                          <li
                            key={bIdx}
                            style={{
                              fontSize: '14.5px',
                              color: 'var(--ms-text-body, #1E293B)',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              lineHeight: 1.6,
                            }}
                          >
                            <span style={{ color: '#007D65', marginTop: '3px', flexShrink: 0, display: 'inline-flex' }}>
                              <Icon name="check" size={14} className="trust-icon-check" />
                            </span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                {/* Article Footer Tags */}
                <div
                  style={{
                    paddingTop: '24px',
                    borderTop: '1px solid var(--ms-border)',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <span style={{ fontSize: '13px', color: 'var(--ms-text-muted)', fontWeight: 600 }}>Topik Pembahasan:</span>
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '12px',
                        backgroundColor: 'var(--ms-bg-subtle)',
                        color: 'var(--ms-text-muted)',
                        border: '1px solid var(--ms-border)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontFamily: 'monospace',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </main>

            {/* Sidebar Column (Desktop Sticky 320px) */}
            <div style={{ flex: '0 0 320px', width: '320px' }}>
              <ArticleSidebarClient
                sections={article.sections}
                author={article.author}
                authorRole={article.authorRole}
                date={article.date}
                readTime={article.readTime}
                category={article.category}
                tags={article.tags}
                slug={article.slug}
              />
            </div>
          </div>

          {/* Related Articles Section (Full Width) */}
          {relatedArticles.length > 0 && (
            <div style={{ marginTop: '64px', marginBottom: '64px' }}>
              <div className="section-header-block centered" style={{ marginBottom: '32px' }}>
                <span className="section-eyebrow">Rekomendasi Riset</span>
                <h3 className="section-title" style={{ fontSize: '28px', lineHeight: '36px' }}>
                  Artikel Rekayasa Terkait Lainnya
                </h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                }}
              >
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/goletin/sumber-daya/engineering-blog/${rel.slug}`}
                    className="standard-card"
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <span className="standard-badge" style={{ margin: '0 0 12px 0', fontSize: '11px' }}>
                        {rel.category}
                      </span>
                      <h4
                        style={{
                          fontFamily: 'var(--font-segoe-display)',
                          fontSize: '17px',
                          fontWeight: 700,
                          color: 'var(--ms-text-heading)',
                          marginBottom: '10px',
                          lineHeight: 1.4,
                        }}
                      >
                        {rel.title}
                      </h4>
                      <p
                        style={{
                          fontSize: '13.5px',
                          color: 'var(--ms-text-muted)',
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        {rel.summary.slice(0, 140)}...
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: '20px',
                        paddingTop: '14px',
                        borderTop: '1px solid var(--ms-border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#007D65',
                      }}
                    >
                      <span>Baca Artikel Lengkap</span>
                      <Icon name="arrow-right" size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Enterprise CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kolaborasi Riset
              </span>
              <h2 className="goletin-bottom-cta-title">
                Tertarik Mendiskusikan Arsitektur Sistem dengan Tim Kami?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Tim software architect Karsasoft terbuka untuk diskusi teknis seputar WebAssembly, Sovereign Cloud, dan integrasi API enterprise.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Hubungi Tim Riset Karsasoft</span>
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
