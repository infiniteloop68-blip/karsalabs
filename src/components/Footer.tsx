'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageModal } from './LanguageModal';
import { Icon } from './Icons';

export function Footer() {
  const { t, currentOption } = useLanguage();
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="footer-top-strip">
        <div className="footer-container">
          <div className="footer-brand-summary">
            <div className="footer-logo-row">
              <div className="footer-logo-symbol-wrap">
                <img
                  src="/logo-karsasoft.svg"
                  alt="Logo Karsasoft"
                  width={28}
                  height={28}
                  className="footer-logo-img"
                />
              </div>
              <span className="footer-logo-title">Karsasoft</span>
            </div>
            <p className="footer-tagline" style={{ marginBottom: 0 }}>
              {t.footer.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="footer-links-grid-wrap">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Column 1: Produk Unggulan */}
            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.col1Title}</h4>
              <ul className="footer-link-list">
                <li><Link href="/goletin/ai">Goletin AI Multimodal</Link></li>
                <li><a href="https://goletin.com" target="_blank" rel="noopener noreferrer">Goletin Search Privat</a></li>
                <li><Link href="/goletin/cloudsave">CloudSave Cloud Storage</Link></li>
                <li><Link href="/goletin/yaycount">Yaycount ERP (ISAK 35)</Link></li>
                <li><Link href="/goletin/indotax">IndoTax PPh 21 & PPN</Link></li>
              </ul>
            </div>

            {/* Column 2: Ruang Kerja & Office */}
            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.col2Title}</h4>
              <ul className="footer-link-list">
                <li><Link href="/goletin/office?app=docs">Goletin Docs</Link></li>
                <li><Link href="/goletin/office?app=sheets">Goletin Sheets</Link></li>
                <li><Link href="/goletin/office?app=slides">Goletin Slides</Link></li>
                <li><Link href="/goletin/design-studio">Design Studio</Link></li>
                <li><Link href="/goletin/browser">Goletin Browser</Link></li>
                <li><Link href="/goletin/console">Goletin Console</Link></li>
              </ul>
            </div>

            {/* Column 3: Keuangan & Akuntansi */}
            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.col3Title}</h4>
              <ul className="footer-link-list">
                <li><Link href="/goletin/yaycount">Yaycount (ISAK 35)</Link></li>
                <li><Link href="/goletin/counting-pro">Counting Pro (SAK EMKM)</Link></li>
                <li><Link href="/goletin/indotax">IndoTax PPh TER</Link></li>
                <li><Link href="/goletin/benefits">Benefits (IAS 19 / PSAK 219)</Link></li>
                <li><Link href="/goletin/revenue">Revenue Engine (PSAK 72)</Link></li>
              </ul>
            </div>

            {/* Column 4: Standar IFRS & Audit */}
            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.col4Title}</h4>
              <ul className="footer-link-list">
                <li><Link href="/goletin/ecl-pro">ECL Pro (IFRS 9 CKPN)</Link></li>
                <li><Link href="/goletin/lease">Lease Engine (PSAK 73)</Link></li>
                <li><Link href="/goletin/sampling-pro">Sampling Pro (ISA 530)</Link></li>
                <li><Link href="/goletin/jet-pro">JET Pro (ISA 240 Fraud)</Link></li>
                <li><Link href="/goletin/icofr-pro">ICOFR Pro (SOX 404)</Link></li>
              </ul>
            </div>

            {/* Column 5: Solusi Industri */}
            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.col5Title}</h4>
              <ul className="footer-link-list">
                <li><Link href="/solusi#korporasi">Korporasi & Bisnis</Link></li>
                <li><Link href="/solusi#perbankan-finansial">Perbankan & Lembaga Keuangan</Link></li>
                <li><Link href="/solusi#yayasan-nirlaba">Yayasan & Sekolah</Link></li>
                <li><Link href="/solusi#audit-kap">Kantor Akuntan Publik</Link></li>
                <li><Link href="/solusi#pemerintah-spbe">Sektor Publik & SPBE</Link></li>
              </ul>
            </div>

            {/* Column 6: Perusahaan & Goletin */}
            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.col6Title}</h4>
              <ul className="footer-link-list">
                <li><Link href="/tentang">{t.footer.aboutLink}</Link></li>
                <li><Link href="/goletin/apa-itu-goletin">{t.footer.whatIsGoletin}</Link></li>
                <li><Link href="/goletin/bisnis">{t.footer.businessLink}</Link></li>
                <li><Link href="/goletin/enterprise">{t.footer.enterpriseLink}</Link></li>
                <li><Link href="/goletin/individu">{t.footer.individualLink}</Link></li>
                <li><Link href="/goletin/pendidikan">{t.footer.educationLink}</Link></li>
                <li><Link href="/goletin/mitra">{t.footer.partnerProgram}</Link></li>
                <li><Link href="/kontak">{t.footer.contactSales}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (100% Microsoft UHF Bottom Row with Globe Language Switcher on Left) */}
      <div className="footer-bottom-bar">
        <div className="footer-container footer-bottom-container">
          {/* Left: Microsoft Globe Language & Market Selector */}
          <div className="footer-bottom-left">
            <button
              type="button"
              onClick={() => setIsLangModalOpen(true)}
              className="footer-lang-btn"
              aria-label={t.langModal.title}
            >
              <Icon name="globe" size={16} />
              <span>{currentOption.label}</span>
            </button>
          </div>

          {/* Right: Legal & Compliance Links */}
          <div className="footer-legal-links">
            <Link href="/privasi">{t.footer.legalPrivacy}</Link>
            <Link href="/ketentuan">{t.footer.legalTerms}</Link>
            <Link href="/merek-dagang">{t.footer.legalTrademarks}</Link>
            <Link href="/kontak">{t.footer.legalContact}</Link>
            <span suppressHydrationWarning>&copy; Karsasoft {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>

      {/* Microsoft Fluent Language Selector Dialog */}
      <LanguageModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
      />
    </footer>
  );
}
