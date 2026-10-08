'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'cloud-integration',
    q: 'Apakah Goletin dapat diintegrasikan dengan infrastruktur private cloud internal?',
    a: 'Ya. Seluruh modul Goletin mendukung arsitektur hybrid dan on-premises private cloud dengan kepatuhan kedaulatan data penuh di wilayah hukum Indonesia.',
  },
  {
    id: 'licensing-scheme',
    q: 'Bagaimana skema lisensi untuk penggunaan satu organisasi?',
    a: 'Kami menyediakan skema lisensi per-pengguna tahunan untuk UMKM serta Enterprise Agreement tak terbatas (unlimited seats) dengan SLA dukungan 24/7 untuk institusi skala besar.',
  },
  {
    id: 'security-encryption',
    q: 'Apakah data organisasi aman dan terenkripsi secara menyeluruh?',
    a: 'Setiap data disimpan dengan enkripsi AES-256 at-rest dan TLS 1.3 in-transit. Arsitektur data multi-tenant kami menjamin isolasi penuh antar organisasi mitra tanpa pencampuran basis data.',
  },
  {
    id: 'legacy-migration',
    q: 'Bagaimana proses migrasi dari solusi produktivitas atau sistem legacy sebelumnya?',
    a: 'Tim teknis Karsasoft menyediakan automated migration tools untuk memindahkan email, file CloudSave, kontak, serta struktur bagan akun (COA) akuntansi tanpa downtime operasional.',
  },
];

export interface GoletinFaqProps {
  items?: FaqItem[];
  countLabel?: string;
  footerText?: string;
  footerLinkHref?: string;
  footerLinkLabel?: string;
}

export function GoletinFaq({
  items = FAQ_DATA,
  countLabel,
  footerText = 'Masih memiliki pertanyaan teknis atau butuh penawaran lisensi khusus institusi? ',
  footerLinkHref = '/kontak',
  footerLinkLabel = 'Konsultasi dengan tim spesialis Karsasoft',
}: GoletinFaqProps = {}) {
  // First item expanded by default for immediate discoverability
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleAll = () => {
    if (openItems.length === items.length) {
      setOpenItems([]);
    } else {
      setOpenItems(items.map((_, idx) => idx));
    }
  };

  const allOpen = openItems.length === items.length;

  return (
    <div className="goletin-faq-wrapper">
      <div className="goletin-faq-top-bar">
        <span className="goletin-faq-count">
          {countLabel || `${items.length} Tanya Jawab Esensial`}
        </span>
        <button
          type="button"
          onClick={toggleAll}
          className="goletin-faq-toggle-all-btn"
          aria-label={allOpen ? 'Ciutkan semua pertanyaan' : 'Buka semua pertanyaan'}
        >
          {allOpen ? 'Ciutkan Semua' : 'Buka Semua'}
        </button>
      </div>

      <div className="goletin-faq-card-surface">
        {items.map((item, idx) => {
          const isOpen = openItems.includes(idx);
          return (
            <div
              key={item.id}
              className={`goletin-faq-item ${isOpen ? 'is-expanded' : ''}`}
            >
              <button
                type="button"
                className="goletin-faq-trigger"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-header-${item.id}`}
              >
                <span className="goletin-faq-q-text">{item.q}</span>
                <span
                  className={`goletin-faq-chevron-wrap ${isOpen ? 'is-open' : ''}`}
                  aria-hidden="true"
                >
                  <Icon name="chevron-down" size={16} />
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-header-${item.id}`}
                  className="goletin-faq-content"
                >
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="goletin-faq-footer-note">
        <p>
          {footerText}{' '}
          <Link href={footerLinkHref} className="goletin-faq-footer-link">
            <span>{footerLinkLabel}</span>
            <Icon name="chevron-right" size={14} />
          </Link>
        </p>
      </div>
    </div>
  );
}
