'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import { Icon } from './Icons';

export function EcosystemExplorer({ initialCategory = 'all' }: { initialCategory?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        (product.standards && product.standards.some((s) => s.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="ecosystem-explorer-section">
      <div className="explorer-controls-card">
        {/* Search input bar */}
        <div className="explorer-search-row">
          <div className="search-input-wrapper">
            <Icon name="search" size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Cari produk Goletin (cth: AI, Pajak, ERP, IFRS 9, Audit, Sheets)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Cari produk di ekosistem"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
                aria-label="Hapus pencarian"
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>
          <div className="explorer-count-badge">
            Menampilkan <strong>{filteredProducts.length}</strong> dari {PRODUCTS.length} produk
          </div>
        </div>

        {/* Category Pill Tabs (Microsoft style clean tab strip) */}
        <div className="category-tabs-container">
          <div className="category-tabs-scroll" role="tablist">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`category-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="explorer-empty-state">
          <div className="empty-state-icon">
            <Icon name="search" size={36} />
          </div>
          <h3>Tidak Ada Produk yang Cocok</h3>
          <p>Coba kata kunci pencarian lain atau pilih kategori &ldquo;Semua Produk&rdquo;.</p>
          <button
            type="button"
            className="empty-reset-btn"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="product-cards-grid">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="ms-product-card" data-featured={prod.featured || false}>
              <div className="card-top-row">
                <div className={`card-icon-box ${prod.logo ? 'has-logo' : ''}`} data-category={prod.category}>
                  {prod.logo ? (
                    <img
                      src={prod.logo}
                      alt={prod.name}
                      width={44}
                      height={44}
                      className="card-logo-img"
                    />
                  ) : (
                    <Icon name={prod.iconType} size={26} />
                  )}
                </div>
                <div className="card-badge-group">
                  {prod.badge && <span className="card-highlight-badge">{prod.badge}</span>}
                  <span className="card-category-tag">{prod.categoryLabel}</span>
                </div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{prod.name}</h3>
                <p className="card-tagline">{prod.tagline}</p>
                <p className="card-desc">{prod.description}</p>
              </div>

              <div className="card-footer-action">
                {prod.isLive ? (
                  <Link
                    href={prod.url}
                    className="card-launch-btn"
                  >
                    <span>Lihat Produk</span>
                    <Icon name="arrow-right" size={14} />
                  </Link>
                ) : (
                  <span className="card-coming-soon-btn">
                    <span>{prod.badge || 'Segera Rilis'}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
