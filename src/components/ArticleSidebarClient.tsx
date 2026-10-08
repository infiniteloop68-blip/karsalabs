'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';

interface ArticleSidebarClientProps {
  sections: { heading: string }[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
}

export function ArticleSidebarClient({
  sections,
  author,
  authorRole,
  date,
  readTime,
  category,
  tags,
  slug,
}: ArticleSidebarClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <aside
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'sticky',
        top: '90px',
      }}
    >
      {/* 1. Table of Contents */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--ms-border-card)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#007D65',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Icon name="docs" size={15} color="#007D65" />
          <span>DAFTAR ISI ARTIKEL</span>
        </div>

        <nav>
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
            {sections.map((sec, idx) => (
              <li key={idx}>
                <a
                  href={`#section-${idx}`}
                  style={{
                    fontSize: '13px',
                    color: 'var(--ms-text-body, #334155)',
                    textDecoration: 'none',
                    lineHeight: 1.45,
                    display: 'block',
                    padding: '4px 0',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#007D65')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ms-text-body, #334155)')}
                >
                  <span style={{ color: '#007D65', fontWeight: 700, marginRight: '6px' }}>
                    0{idx + 1}.
                  </span>
                  <span>{sec.heading}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 2. Author Bio Card */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--ms-border-card)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--ms-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '14px',
          }}
        >
          PENULIS TEKNIS
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#E6FCF7',
              border: '1px solid #B8EFE2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#007D65',
              fontWeight: 700,
              fontSize: '18px',
              flexShrink: 0,
            }}
          >
            {author.charAt(0)}
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
              {author}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ms-text-muted)' }}>
              {authorRole}
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: '12px',
            color: 'var(--ms-text-muted)',
            borderTop: '1px solid var(--ms-border)',
            paddingTop: '12px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>Dipublikasi: <strong>{date}</strong></span>
          <span>Baca: <strong>{readTime}</strong></span>
        </div>
      </div>

      {/* 3. Share & Copy Link Action */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--ms-border-card)',
          borderRadius: '12px',
          padding: '20px 24px',
          boxShadow: 'var(--shadow-card)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
          Bagikan Artikel Ini
        </div>

        <button
          type="button"
          onClick={handleCopy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            backgroundColor: copied ? '#E6FCF7' : '#FFFFFF',
            border: copied ? '1px solid #00EDC2' : '1px solid var(--ms-border)',
            color: copied ? '#007D65' : 'var(--ms-text-heading)',
            borderRadius: '6px',
            padding: '9px 14px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            width: '100%',
          }}
        >
          {copied ? (
            <>
              <Icon name="check" size={14} className="trust-icon-check" />
              <span>Tautan Berhasil Disalin!</span>
            </>
          ) : (
            <>
              <Icon name="link" size={14} />
              <span>Salin Tautan Artikel</span>
            </>
          )}
        </button>
      </div>

      {/* 4. Consultation CTA Box */}
      <div
        style={{
          backgroundColor: '#E6FCF7',
          border: '1px solid #B8EFE2',
          borderRadius: '12px',
          padding: '24px',
        }}
      >
        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '8px' }}>
          Butuh Solusi Serupa?
        </div>
        <p style={{ fontSize: '12.5px', color: '#0E1726', lineHeight: 1.55, margin: '0 0 16px 0' }}>
          Diskusikan implementasi arsitektur sistem dengan software architect Karsasoft untuk organisasi Anda.
        </p>
        <Link
          href="/kontak"
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '9px 14px' }}
        >
          <span>Konsultasi Arsitektur</span>
          <Icon name="arrow-right" size={14} />
        </Link>
      </div>
    </aside>
  );
}
