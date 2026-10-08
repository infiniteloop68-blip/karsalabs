'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { Icon } from './Icons';

interface AppsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function getBadgeVariant(badge: string): 'teal' | 'blue' | 'orange' | 'green' | 'gray' {
  const b = badge.toLowerCase();
  if (b.includes('populer') || b.includes('unggulan')) return 'teal';
  if (b.includes('ifrs') || b.includes('sox') || b.includes('enterprise')) return 'blue';
  if (b.includes('pajak') || b.includes('fraud')) return 'orange';
  if (b.includes('privasi') || b.includes('produktivitas')) return 'green';
  return 'gray';
}

export function AppsDrawer({ isOpen, onClose }: AppsDrawerProps) {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      // Calculate scrollbar width to prevent layout jump on Windows/desktop browsers
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        const siteHeader = document.querySelector('.site-header') as HTMLElement | null;
        if (siteHeader) {
          siteHeader.style.paddingRight = `${scrollbarWidth}px`;
        }
      }
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Focus search input safely without triggering browser scroll jump
      const timer = setTimeout(() => {
        searchInputRef.current?.focus({ preventScroll: true });
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        const siteHeader = document.querySelector('.site-header') as HTMLElement | null;
        if (siteHeader) {
          siteHeader.style.paddingRight = '';
        }
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const siteHeader = document.querySelector('.site-header') as HTMLElement | null;
      if (siteHeader) {
        siteHeader.style.paddingRight = '';
      }
      setSearchQuery('');
      setSelectedCategory('all');
    }
  }, [isOpen, onClose]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PRODUCTS.length };
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        (p.badge && p.badge.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="apps-drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="apps-drawer-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="apps-drawer-header">
          <div className="apps-drawer-title-group">
            <span className="apps-drawer-badge">{t.appsDrawer.badge}</span>
            <div className="apps-drawer-title-row">
              <h3 className="apps-drawer-title">{t.appsDrawer.title}</h3>
              <span className="apps-drawer-count-pill">{PRODUCTS.length} {t.appsDrawer.countSuffix}</span>
            </div>
          </div>
          <button className="apps-drawer-close" onClick={onClose} aria-label="Tutup jendela">
            <Icon name="close" size={18} />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="apps-drawer-search-wrap">
          <div className="apps-drawer-search-box">
            <Icon name="search" size={16} className="apps-drawer-search-icon" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={t.appsDrawer.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="apps-drawer-search-input"
              aria-label="Cari aplikasi"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="apps-drawer-search-clear"
                aria-label="Hapus pencarian"
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="apps-drawer-chips-row">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`apps-drawer-chip ${isActive ? 'active' : ''}`}
                >
                  <span>{cat.label}</span>
                  <span className="apps-drawer-chip-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid Content */}
        <div className="apps-drawer-content">
          {filteredProducts.length > 0 ? (
            <div className="apps-drawer-grid">
              {filteredProducts.map((prod) => (
                <Link
                  key={prod.id}
                  href={prod.url}
                  onClick={onClose}
                  className="apps-drawer-item"
                  title={`${prod.name} — ${prod.tagline}`}
                >
                  <div
                    className={`apps-drawer-icon-wrap ${prod.logo ? 'has-logo' : ''}`}
                    data-category={prod.category}
                  >
                    {prod.logo ? (
                      <img
                        src={prod.logo}
                        alt={prod.name}
                        width={36}
                        height={36}
                        className="apps-drawer-logo-img"
                      />
                    ) : (
                      <Icon name={prod.iconType} size={22} />
                    )}
                  </div>
                  <div className="apps-drawer-item-info">
                    <div className="apps-drawer-item-title-row">
                      <span className="apps-drawer-item-name">{prod.name}</span>
                      {prod.badge && (
                        <span className={`apps-drawer-pill apps-drawer-pill-${getBadgeVariant(prod.badge)}`}>
                          {prod.badge}
                        </span>
                      )}
                    </div>
                    <div className="apps-drawer-item-cat">{prod.categoryLabel}</div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="apps-drawer-empty">
              <div className="apps-drawer-empty-icon">
                <Icon name="search" size={24} />
              </div>
              <div className="apps-drawer-empty-title">Aplikasi Tidak Ditemukan</div>
              <div className="apps-drawer-empty-desc">
                Tidak ada aplikasi yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;.
              </div>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="apps-drawer-empty-btn"
              >
                Tampilkan Semua Aplikasi
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="apps-drawer-footer">
          <Link
            href="/peta-situs"
            onClick={onClose}
            className="btn-secondary"
            style={{
              padding: '8px 24px',
              fontSize: '13.5px',
              fontWeight: 600,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <Icon name="grid" size={15} />
            <span>{t.appsDrawer.viewSitemap}</span>
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
