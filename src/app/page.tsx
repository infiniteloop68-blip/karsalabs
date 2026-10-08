import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { HomeHeroSlider } from '@/components/HomeHeroSlider';

export default function Home() {
  return (
    <>
      {/* ====================================================================
          1. FULLSCREEN HERO CAROUSEL SLIDER (100% MICROSOFT 365 SPEC)
          ==================================================================== */}
      <HomeHeroSlider />


      {/* ====================================================================
          3. FEATURED 4-CARD GRID (ROW 1: CONSUMER & WORKSPACE INNOVATIONS)
          ==================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div className="ms-featured-grid">
            {/* Card 1: Goletin AI */}
            <div className="ms-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/goletin-ai-card.jpg"
                  alt="Goletin AI"
                  className="feature-card-image"
                />
              </div>
              <div className="feature-card-body">
                <div className="feature-card-title-row">
                  <div className="feature-card-logo-box">
                    <img
                      src="/logos/goletin-ai.svg"
                      alt="Goletin AI"
                      width={28}
                      height={28}
                      className="feature-card-app-logo"
                    />
                  </div>
                  <h3 className="feature-card-title">Goletin AI</h3>
                </div>
                <p className="feature-card-text">
                  Kelola tugas, penalaran logika mendalam, dan analisis data bisnis dengan asisten AI multimodal cerdas.
                </p>
                <a
                  href="https://ai.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-card-btn"
                >
                  Pelajari selengkapnya
                </a>
              </div>
            </div>

            {/* Card 2: CloudSave & Office */}
            <div className="ms-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/cloudsave-card.jpg"
                  alt="CloudSave & Office"
                  className="feature-card-image"
                />
              </div>
              <div className="feature-card-body">
                <div className="feature-card-title-row">
                  <div className="feature-card-logo-box">
                    <img
                      src="/logos/cloudsave.svg"
                      alt="CloudSave & Office"
                      width={28}
                      height={28}
                      className="feature-card-app-logo"
                    />
                  </div>
                  <h3 className="feature-card-title">CloudSave & Office</h3>
                </div>
                <p className="feature-card-text">
                  Simpan file serta dokumen ke CloudSave dan akses dari perangkat apa saja, di mana saja secara terenkripsi.
                </p>
                <a
                  href="https://goletin.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-card-btn"
                >
                  Pelajari selengkapnya
                </a>
              </div>
            </div>

            {/* Card 3: IndoTax */}
            <div className="ms-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/indotax-card.png"
                  alt="IndoTax"
                  className="feature-card-image"
                />
              </div>
              <div className="feature-card-body">
                <div className="feature-card-title-row">
                  <div className="feature-card-logo-box">
                    <img
                      src="/logos/indotax.svg"
                      alt="IndoTax"
                      width={28}
                      height={28}
                      className="feature-card-app-logo"
                    />
                  </div>
                  <h3 className="feature-card-title">IndoTax</h3>
                </div>
                <p className="feature-card-text">
                  Platform perhitungan dan kepatuhan pajak otomatis untuk PPh 21 tarif TER terbaru, PPN, dan ekspor formulir resmi DJP.
                </p>
                <a
                  href="https://indotax.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-card-btn"
                >
                  Dapatkan IndoTax
                </a>
              </div>
            </div>

            {/* Card 4: Goletin Search Privat */}
            <div className="ms-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/goletin-search-card.png"
                  alt="Goletin Search Privat"
                  className="feature-card-image"
                />
              </div>
              <div className="feature-card-body">
                <div className="feature-card-title-row">
                  <div className="feature-card-logo-box">
                    <img
                      src="/logos/search.svg"
                      alt="Goletin Search Privat"
                      width={28}
                      height={28}
                      className="feature-card-app-logo"
                    />
                  </div>
                  <h3 className="feature-card-title">Goletin Search Privat</h3>
                </div>
                <p className="feature-card-text">
                  Performa pencarian cepat dengan privasi sejati tanpa profiling data pribadi dan bebas pelacak pihak ketiga.
                </p>
                <a
                  href="https://goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-card-btn"
                >
                  Mulai mencari
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. LARGE BREAKOUT FEATURED BANNER (100% MICROSOFT BANNER-FEATURED)
          ==================================================================== */}
      <section className="container">
        <div className="ms-breakout-banner">
          <div className="ms-breakout-card">
            <span className="ms-breakout-eyebrow">Inovasi Perangkat Lunak Nasional</span>
            <h2 className="ms-breakout-title">
              Melangkah lebih jauh dengan Goletin AI
            </h2>
            <p className="ms-breakout-desc">
              Optimalkan alur kerja riset bisnis, sintesis dokumen keuangan, dan analisis data dengan model AI multimodal berkecepatan tinggi yang dirancang aman untuk enterprise.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="https://ai.goletin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Gunakan Goletin AI</span>
                <Icon name="arrow-right" size={16} />
              </a>
              <Link href="/kontak" className="ms-breakout-btn-secondary">
                <span>Pelajari Paket Enterprise</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. 'UNTUK BISNIS' SECTION (100% MICROSOFT SECOND 4-CARD GRID)
          ==================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-block">
            <h2 className="section-title">Untuk bisnis</h2>
            <p className="section-lead">
              Solusi perangkat lunak terakreditasi untuk otomasi keuangan, pelaporan regulasi IFRS/PSAK, dan pengujian audit enterprise.
            </p>
          </div>

          <div className="ms-featured-grid">
            {/* Card 1: Yaycount ERP */}
            <div className="ms-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/yaycount-erp-v2.jpg"
                  alt="Yaycount ERP"
                  className="feature-card-image"
                />
                <span className="feature-card-badge-overlay">Enterprise ERP</span>
              </div>
              <div className="feature-card-body">
                <div className="feature-card-title-row">
                  <div className="feature-card-logo-box">
                    <img
                      src="/logos/yaycount.svg"
                      alt="Yaycount ERP"
                      width={28}
                      height={28}
                      className="feature-card-app-logo"
                    />
                  </div>
                  <h3 className="feature-card-title">Yaycount ERP</h3>
                </div>
                <p className="feature-card-text">
                  ERP keuangan dan akuntansi terpadu nirlaba dan institusi dengan kepatuhan PSAK 45 / ISAK 35 dan manajemen donasi multi-unit.
                </p>
                <a
                  href="https://yaycount.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-card-btn"
                >
                  Pelajari Yaycount
                </a>
              </div>
            </div>

            {/* Card 2: ECL Pro */}
            <div className="ms-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/ecl-pro-v2.jpg"
                  alt="ECL Pro (IFRS 9)"
                  className="feature-card-image"
                />
                <span className="feature-card-badge-overlay">Standar IFRS 9</span>
              </div>
              <div className="feature-card-body">
                <div className="feature-card-title-row">
                  <div className="feature-card-logo-box">
                    <img
                      src="/logos/eclpro.svg"
                      alt="ECL Pro (IFRS 9)"
                      width={28}
                      height={28}
                      className="feature-card-app-logo"
                    />
                  </div>
                  <h3 className="feature-card-title">ECL Pro (IFRS 9)</h3>
                </div>
                <p className="feature-card-text">
                  Engine kalkulasi Expected Credit Loss (CKPN) otomatis dengan pemodelan Probability of Default (PD), LGD, dan EAD untuk perbankan.
                </p>
                <Link href="/goletin/ecl-pro" className="feature-card-btn">
                  Lihat Solusi Finansial
                </Link>
              </div>
            </div>

            {/* Card 3: Lease Engine */}
            <div className="ms-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/lease-engine-v2.jpg"
                  alt="Lease Engine (PSAK 73)"
                  className="feature-card-image"
                />
                <span className="feature-card-badge-overlay">Standar PSAK 73</span>
              </div>
              <div className="feature-card-body">
                <div className="feature-card-title-row">
                  <div className="feature-card-logo-box">
                    <img
                      src="/logos/lease.svg"
                      alt="Lease Engine (PSAK 73)"
                      width={28}
                      height={28}
                      className="feature-card-app-logo"
                    />
                  </div>
                  <h3 className="feature-card-title">Lease Engine (PSAK 73)</h3>
                </div>
                <p className="feature-card-text">
                  Otomatisasi pencatatan aset hak guna (ROU) dan liabilitas sewa korporasi sesuai standar IFRS 16 dan PSAK 73 tanpa spreadsheet manual.
                </p>
                <Link href="/goletin/lease" className="feature-card-btn">
                  Lihat Modul Sewa
                </Link>
              </div>
            </div>

            {/* Card 4: Sampling Pro & JET Pro */}
            <div className="ms-feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/audit-tools-card.jpg"
                  alt="Sampling Pro & JET Pro"
                  className="feature-card-image"
                />
                <span className="feature-card-badge-overlay">Audit & Forensik</span>
              </div>
              <div className="feature-card-body">
                <div className="feature-card-title-row">
                  <div className="feature-card-logo-box">
                    <img
                      src="/logos/sampling.svg"
                      alt="Sampling Pro & JET Pro"
                      width={28}
                      height={28}
                      className="feature-card-app-logo"
                    />
                  </div>
                  <h3 className="feature-card-title">Sampling Pro & JET Pro</h3>
                </div>
                <p className="feature-card-text">
                  Alat bantu auditor independen untuk penentuan sampel representatif ISA 530 dan deteksi fraud jurnal berbasis Hukum Benford ISA 240.
                </p>
                <Link href="/goletin/sampling-pro" className="feature-card-btn">
                  Lihat Modul Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
