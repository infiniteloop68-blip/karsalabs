'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageContext';
import { Icon } from './Icons';
import { AppsDrawer } from './AppsDrawer';

export function Header() {
  const { t, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appsDrawerOpen, setAppsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'produk' | 'sumber-daya' | 'dukungan' | null>(null);
  const [activeSupportCategory, setActiveSupportCategory] = useState<string>('individu');
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  // Check if we are currently inside the Goletin product suite (just like /microsoft-365 on Microsoft)
  const isGoletinProductContext = pathname.startsWith('/goletin') || pathname.startsWith('/ekosistem');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDropdownEnter = (menu: 'produk' | 'sumber-daya' | 'dukungan') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleDropdownClick = (menu: 'produk' | 'sumber-daya' | 'dukungan') => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  type HeaderNavLink = {
    label: string;
    href: string;
  };

  const corporateNavLinks: HeaderNavLink[] = [
    { label: 'Goletin', href: '/goletin' },
    { label: t.nav.solutions, href: '/solusi' },
    { label: t.nav.about, href: '/tentang' },
    { label: t.nav.support, href: '/kontak' },
  ];

  type MegaMenuLink = {
    label: string;
    href: string;
    isExternal?: boolean;
    isHighlight?: boolean;
  };

  type MegaMenuColumn = {
    title: string;
    links: MegaMenuLink[];
  };

  // 100% Microsoft 365 Mega Menu Structure for Goletin
  const goletinMegaProducts: MegaMenuColumn[] = [
    {
      title: 'Untuk Individu & Rumah',
      links: [
        { label: 'Apa itu Goletin?', href: '/goletin/apa-itu-goletin' },
        { label: 'Goletin untuk Individu', href: '/goletin/individu' },
        { label: 'Jelajahi aplikasi Goletin', href: '/ekosistem' },
        { label: 'Goletin Office Suite', href: '/goletin/office' },
        { label: 'Goletin Cloud Storage', href: '/goletin/cloudsave' },
        { label: 'Goletin AI Assistant', href: '/goletin/ai' },
        { label: 'Goletin Web Browser', href: '/goletin/browser' },
        { label: 'Design Studio Canvas', href: '/goletin/design-studio' },
        { label: 'Harga untuk individu', href: '/goletin/paket-dan-harga' },
      ],
    },
    {
      title: 'Untuk Bisnis & UKM',
      links: [
        { label: 'Goletin untuk Bisnis', href: '/goletin/bisnis' },
        { label: 'Yaycount Enterprise ERP', href: '/goletin/yaycount' },
        { label: 'IndoTax Perpajakan', href: '/goletin/indotax' },
        { label: 'Fixed Asset Pro', href: '/goletin/fixed-asset' },
        { label: 'Cashflow AI Engine', href: '/goletin/cashflow' },
        { label: 'Harga paket bisnis', href: '/goletin/paket-dan-harga' },
      ],
    },
    {
      title: 'Untuk Enterprise & Korporasi',
      links: [
        { label: 'Goletin untuk Enterprise', href: '/goletin/enterprise', isHighlight: true },
        { label: 'Goletin Console API Hub', href: '/goletin/console' },
        { label: 'Goletin Sovereign Cloud', href: '/goletin/sovereign-cloud' },
        { label: 'Integrasi SSO & SAML 2.0', href: '/goletin/sso' },
        { label: 'On-Premise Air-Gapped', href: '/goletin/on-premise' },
        { label: 'Goletin untuk Pendidikan', href: '/goletin/pendidikan' },
        { label: 'Solusi Sektor Finansial & BUMN', href: '/solusi' },
      ],
    },
    {
      title: 'Goletin AI Suite',
      links: [
        { label: 'Perkenalkan Goletin AI', href: '/goletin/ai' },
        { label: 'Goletin Semantic Search', href: 'https://search.goletin.com', isExternal: true },
        { label: 'Sintesis Dokumen Finansial', href: '/goletin/sintesis-dokumen' },
        { label: 'Panduan Prompt AI Bisnis', href: '/goletin/sumber-daya/panduan-ai' },
        { label: 'Paket Model AI Enterprise', href: '/goletin/paket-dan-harga' },
      ],
    },
    {
      title: 'Kepatuhan Standar (PSAK/IFRS)',
      links: [
        { label: 'ECL Pro (Standar IFRS 9 / CKPN)', href: '/goletin/ecl-pro' },
        { label: 'Lease Engine (Standar PSAK 73)', href: '/goletin/lease' },
        { label: 'Revenue Pro (Standar PSAK 72)', href: '/goletin/revenue' },
        { label: 'Benefits Engine (Standar PSAK 219)', href: '/goletin/benefits' },
        { label: 'Akreditasi Standar Regulator', href: '/goletin/sumber-daya/panduan-regulasi' },
      ],
    },
    {
      title: 'Audit & Forensik Digital',
      links: [
        { label: 'JET Pro (Hukum Benford ISA 240)', href: '/goletin/jet-pro' },
        { label: 'Sampling Pro (Standar ISA 530)', href: '/goletin/sampling-pro' },
        { label: 'Counting Pro (Stock Opname ISA 501)', href: '/goletin/counting-pro' },
        { label: 'ICOFR Pro (SOX 404 & Audit ISA 230)', href: '/goletin/icofr-pro' },
        { label: 'Lihat semua 21 aplikasi →', href: '/ekosistem', isHighlight: true },
      ],
    },
  ];

  const goletinResourcesLinks = [
    { label: 'Pelajari Penggunaan Goletin AI', href: '/goletin/sumber-daya/panduan-ai' },
    { label: 'Kalkulator Penghematan Biaya Lisensi', href: '/goletin/sumber-daya/kalkulator-lisensi' },
    { label: 'Panduan Kepatuhan Regulasi PSAK & IFRS', href: '/goletin/sumber-daya/panduan-regulasi' },
    { label: 'Dokumentasi API & Integrasi Sistem', href: '/goletin/sumber-daya/dokumentasi-api' },
    { label: 'Pusat Edukasi & Pelatihan Tim', href: '/goletin/sumber-daya/pelatihan-tim' },
    { label: 'Peta Strategi AI & Roadmap Rilis', href: '/goletin/sumber-daya/roadmap-ai' },
    { label: 'Studi Kasus & Riset Implementasi', href: '/goletin/sumber-daya/studi-kasus' },
    { label: 'Goletin Engineering Blog', href: '/goletin/sumber-daya/engineering-blog' },
  ];

  type SupportSubItem = {
    label: string;
    href: string;
  };

  type SupportCategory = {
    id: string;
    title: string;
    hasSubmenu: boolean;
    href?: string;
    subItems?: SupportSubItem[];
  };

  const goletinSupportCategories: SupportCategory[] = [
    {
      id: 'individu',
      title: 'Untuk individu',
      hasSubmenu: true,
      subItems: [
        { label: 'Sumber daya mandiri', href: '/goletin/dukungan/mandiri' },
        { label: 'Dukungan tagihan', href: '/goletin/dukungan/tagihan' },
        { label: 'Komunitas', href: '/goletin/dukungan/komunitas' },
      ],
    },
    {
      id: 'bekerja',
      title: 'Untuk bekerja',
      hasSubmenu: true,
      subItems: [
        { label: 'Admin mandiri', href: '/goletin/dukungan/admin' },
        { label: 'Paket dukungan', href: '/goletin/paket-dan-harga' },
        { label: 'Kontak penjualan', href: '/kontak' },
      ],
    },
    {
      id: 'pendidikan',
      title: 'Untuk pendidikan',
      hasSubmenu: true,
      subItems: [
        { label: 'Educator Center', href: '/goletin/dukungan/edukasi' },
        { label: 'Komunitas', href: '/goletin/dukungan/komunitas' },
      ],
    },
    {
      id: 'mitra',
      title: 'Untuk mitra',
      hasSubmenu: true,
      subItems: [
        { label: 'Program Kemitraan & Reseller', href: '/goletin/mitra' },
        { label: 'Sumber daya mitra', href: '/goletin/dukungan/mitra' },
        { label: 'Pusat Komunitas Mitra', href: '/goletin/dukungan/komunitas' },
      ],
    },
    {
      id: 'semua',
      title: 'Lihat semua dukungan',
      hasSubmenu: false,
      href: '/goletin/dukungan',
    },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header ${isScrolled ? 'is-scrolled' : ''} ${activeDropdown ? 'has-open-dropdown' : ''}`}
      >
        <div className="header-container">
          {/* Left Section (Float Left: Logo + Navigation together) */}
          <div className="header-left-group">
            {/* Brand Logo Area */}
            <div className="header-brand-group">
              <Link
                href="/"
                className="header-logo"
                aria-label="Karsasoft Beranda"
                title="Karsasoft — Kembali ke Beranda Utama"
              >
                <div className="logo-symbol-wrap">
                  <img
                    src="/logo-karsasoft.svg"
                    alt="Logo Karsasoft"
                    width={28}
                    height={28}
                    className="logo-mark"
                  />
                </div>
                <span className="logo-text-title">Karsasoft</span>
              </Link>

              {/* When on Goletin: Show Vertical Divider "|" and Product Brand (Like Microsoft | Microsoft 365) */}
              {isGoletinProductContext && (
                <div className="header-product-badge-wrap">
                  <span className="header-vertical-divider" aria-hidden="true" />
                  <Link
                    href="/goletin"
                    className="header-product-brand-title"
                    title="Portal Ekosistem Goletin"
                  >
                    Goletin
                  </Link>
                </div>
              )}
            </div>

            {/* Desktop Navigation Links */}
            <nav
              className="desktop-nav"
              aria-label={isGoletinProductContext ? 'Navigasi Produk Goletin' : 'Navigasi Utama Karsasoft'}
            >
              {isGoletinProductContext ? (
                /* --- 100% Microsoft 365 Menu Structure for Goletin --- */
                <div className="uhf-contextual-menu-list">
                  {/* 1. Dropdown: Produk (6-column Mega Menu) */}
                  <div
                    className="uhf-dropdown-wrapper"
                    onMouseEnter={() => handleDropdownEnter('produk')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      className={`uhf-nav-button ${activeDropdown === 'produk' ? 'active' : ''}`}
                      onClick={() => toggleDropdownClick('produk')}
                      aria-expanded={activeDropdown === 'produk'}
                    >
                      <span>Produk</span>
                      <Icon
                        name="chevron-down"
                        size={12}
                        className={`uhf-chevron-icon ${activeDropdown === 'produk' ? 'rotated' : ''}`}
                      />
                    </button>

                    {/* Mega Menu Dropdown Panel */}
                    {activeDropdown === 'produk' && (
                      <div className="uhf-mega-dropdown" onMouseEnter={() => handleDropdownEnter('produk')}>
                        <div className="container">
                          <div className="uhf-mega-columns-grid">
                            {goletinMegaProducts.map((col, idx) => (
                              <div key={idx} className="uhf-mega-column">
                                <h4 className="uhf-column-heading">{col.title}</h4>
                                <ul className="uhf-column-list">
                                  {col.links.map((item, lIdx) => (
                                    <li key={lIdx}>
                                      {item.isExternal ? (
                                        <a
                                          href={item.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="uhf-column-link"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          {item.label}
                                        </a>
                                      ) : (
                                        <Link
                                          href={item.href}
                                          className={`uhf-column-link ${item.isHighlight ? 'highlight' : ''}`}
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          {item.label}
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. Direct Link: Paket dan harga */}
                  <Link
                    href="/goletin/paket-dan-harga"
                    className={`uhf-nav-link ${pathname === '/goletin/paket-dan-harga' ? 'active' : ''}`}
                  >
                    Paket dan harga
                  </Link>

                  {/* 3. Dropdown: Sumber daya */}
                  <div
                    className="uhf-dropdown-wrapper"
                    onMouseEnter={() => handleDropdownEnter('sumber-daya')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      className={`uhf-nav-button ${activeDropdown === 'sumber-daya' ? 'active' : ''} ${pathname.startsWith('/goletin/sumber-daya') ? 'active' : ''}`}
                      onClick={() => toggleDropdownClick('sumber-daya')}
                      aria-expanded={activeDropdown === 'sumber-daya'}
                    >
                      <span>Sumber daya</span>
                      <Icon
                        name="chevron-down"
                        size={12}
                        className={`uhf-chevron-icon ${activeDropdown === 'sumber-daya' ? 'rotated' : ''}`}
                      />
                    </button>

                    {activeDropdown === 'sumber-daya' && (
                      <div className="uhf-compact-dropdown" onMouseEnter={() => handleDropdownEnter('sumber-daya')}>
                        <ul className="uhf-compact-list">
                          {goletinResourcesLinks.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                href={item.href}
                                className="uhf-compact-link"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* 4. Dropdown: Dukungan */}
                  <div
                    className="uhf-dropdown-wrapper"
                    onMouseEnter={() => handleDropdownEnter('dukungan')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      className={`uhf-nav-button ${activeDropdown === 'dukungan' ? 'active' : ''} ${pathname.startsWith('/goletin/dukungan') ? 'active' : ''}`}
                      onClick={() => toggleDropdownClick('dukungan')}
                      aria-expanded={activeDropdown === 'dukungan'}
                    >
                      <span>Dukungan</span>
                      <Icon
                        name="chevron-down"
                        size={12}
                        className={`uhf-chevron-icon ${activeDropdown === 'dukungan' ? 'rotated' : ''}`}
                      />
                    </button>

                    {activeDropdown === 'dukungan' && (
                      <div
                        className="uhf-support-flyout-dropdown"
                        onMouseEnter={() => handleDropdownEnter('dukungan')}
                      >
                        {/* Left column: Categories (Untuk individu, Untuk bekerja, Untuk pendidikan, Untuk mitra, Lihat semua dukungan) */}
                        <div className="uhf-support-categories-col">
                          {goletinSupportCategories.map((cat) => {
                            const isCategoryActive = activeSupportCategory === cat.id;

                            if (!cat.hasSubmenu) {
                              return (
                                <Link
                                  key={cat.id}
                                  href={cat.href || '/kontak'}
                                  className="uhf-support-all-link"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {cat.title}
                                </Link>
                              );
                            }

                            return (
                              <button
                                key={cat.id}
                                type="button"
                                className={`uhf-support-cat-btn ${isCategoryActive ? 'active' : ''}`}
                                onMouseEnter={() => setActiveSupportCategory(cat.id)}
                                onClick={() => setActiveSupportCategory(cat.id)}
                              >
                                <span>{cat.title}</span>
                                <Icon name="chevron-right" size={10} className="uhf-support-chevron-right" />
                              </button>
                            );
                          })}
                        </div>

                        {/* Right column: Submenu items for the active category */}
                        <div className="uhf-support-subitems-col">
                          {goletinSupportCategories
                            .find((cat) => cat.id === activeSupportCategory)
                            ?.subItems?.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                className="uhf-support-subitem-link"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* --- Corporate Level Menu (Home, Solutions, About, Contact) --- */
                corporateNavLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  );
                })
              )}
            </nav>
          </div>

          {/* Right Utilities (9-Dots Apps Drawer + Contextual Action Button) */}
          <div className="header-actions">
            {/* 9-Dots Apps Drawer Button */}
            <button
              type="button"
              className="apps-launcher-btn"
              onClick={() => setAppsDrawerOpen(true)}
              title="Buka Seluruh Aplikasi Ekosistem Goletin"
              aria-label="Aplikasi Goletin"
            >
              <Icon name="grid" size={17} />
              <span className="apps-launcher-text">
                {isGoletinProductContext
                  ? (lang === 'id' ? 'Semua Goletin' : 'All Goletin')
                  : (lang === 'id' ? 'Semua Karsasoft' : 'All Karsasoft')}
              </span>
            </button>

            {/* Contextual CTA Button */}
            {isGoletinProductContext ? (
              <a
                href="https://goletin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="header-cta-btn"
                title="Buka Portal Goletin"
              >
                <span>{lang === 'id' ? 'Coba Goletin' : 'Try Goletin'}</span>
                <Icon name="external-link" size={13} />
              </a>
            ) : (
              <Link href="/kontak" className="header-cta-btn">
                <span>{lang === 'id' ? 'Minta Demo Lisensi' : 'Request Demo'}</span>
                <Icon name="arrow-right" size={13} />
              </Link>
            )}

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-panel">
            {isGoletinProductContext ? (
              <>
                <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--ms-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-segoe-display)', fontSize: '16px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                    Produk: Goletin
                  </span>
                  <Link
                    href="/"
                    style={{ fontSize: '13px', color: 'var(--ms-blue-text)', textDecoration: 'underline' }}
                  >
                    Ke Beranda Utama →
                  </Link>
                </div>

                <div className="mobile-nav-links">
                  {/* Mobile Accordion: Produk */}
                  <div className="mobile-nav-accordion">
                    <button
                      type="button"
                      className="mobile-accordion-header"
                      onClick={() => setMobileAccordion(mobileAccordion === 'produk' ? null : 'produk')}
                    >
                      <span>Produk</span>
                      <Icon
                        name="chevron-down"
                        size={14}
                        className={`uhf-chevron-icon ${mobileAccordion === 'produk' ? 'rotated' : ''}`}
                      />
                    </button>
                    {mobileAccordion === 'produk' && (
                      <div className="mobile-accordion-body">
                        {goletinMegaProducts.map((col, cIdx) => (
                          <div key={cIdx} className="mobile-accordion-subgroup">
                            <div className="mobile-accordion-subheading">{col.title}</div>
                            {col.links.map((link, lIdx) => (
                              <Link
                                key={lIdx}
                                href={link.href}
                                className="mobile-subnav-link"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Direct Link: Paket dan harga */}
                  <Link
                    href="/goletin/paket-dan-harga"
                    className={`mobile-nav-link ${pathname === '/goletin/paket-dan-harga' ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Paket dan harga
                  </Link>

                  {/* Mobile Accordion: Sumber daya */}
                  <div className="mobile-nav-accordion">
                    <button
                      type="button"
                      className="mobile-accordion-header"
                      onClick={() => setMobileAccordion(mobileAccordion === 'sumber-daya' ? null : 'sumber-daya')}
                    >
                      <span>Sumber daya</span>
                      <Icon
                        name="chevron-down"
                        size={14}
                        className={`uhf-chevron-icon ${mobileAccordion === 'sumber-daya' ? 'rotated' : ''}`}
                      />
                    </button>
                    {mobileAccordion === 'sumber-daya' && (
                      <div className="mobile-accordion-body">
                        {goletinResourcesLinks.map((link, idx) => (
                          <Link
                            key={idx}
                            href={link.href}
                            className="mobile-subnav-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Accordion: Dukungan */}
                  <div className="mobile-nav-accordion">
                    <button
                      type="button"
                      className="mobile-accordion-header"
                      onClick={() => setMobileAccordion(mobileAccordion === 'dukungan' ? null : 'dukungan')}
                    >
                      <span>Dukungan</span>
                      <Icon
                        name="chevron-down"
                        size={14}
                        className={`uhf-chevron-icon ${mobileAccordion === 'dukungan' ? 'rotated' : ''}`}
                      />
                    </button>
                    {mobileAccordion === 'dukungan' && (
                      <div className="mobile-accordion-body">
                        {goletinSupportCategories.map((cat, cIdx) => (
                          <div key={cIdx} className="mobile-support-group" style={{ marginBottom: '12px' }}>
                            <div className="mobile-accordion-subheading">{cat.title}</div>
                            {cat.subItems ? (
                              cat.subItems.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={sub.href}
                                  className="mobile-subnav-link"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              ))
                            ) : (
                              <Link
                                href={cat.href || '/kontak'}
                                className="mobile-subnav-link highlight"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {cat.title} →
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="mobile-nav-links">
                {corporateNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="mobile-nav-footer">
              <button
                type="button"
                className="mobile-apps-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAppsDrawerOpen(true);
                }}
              >
                <Icon name="grid" size={18} />
                <span>Buka Katalog 21 Aplikasi Goletin</span>
              </button>
              {isGoletinProductContext ? (
                <a
                  href="https://goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-cta-btn"
                >
                  Buka Goletin.com
                </a>
              ) : (
                <Link href="/kontak" className="mobile-cta-btn">
                  Minta Demo & Penjualan
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Global Apps Drawer Modal */}
      <AppsDrawer isOpen={appsDrawerOpen} onClose={() => setAppsDrawerOpen(false)} />
    </>
  );
}
