'use client';

import React, { useState, useEffect, useRef } from 'react';

export interface SlideData {
  id: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

/**
 * Slide 1 Visual Stage: Goletin AI Core & Productivity Suite Orbit
 * Menggunakan logo-logo asli dari /logos (logo all apps):
 * goletin-ai, docs, sheets, slides, cloudsave, mail, browser, console, search
 */
function SlideVisualGoletinAI() {
  return (
    <div className="hero-orbit-stage" aria-hidden="true">
      <div className="hero-orbit-glow" />
      <div className="hero-orbit-ring ring-outer" />
      <div className="hero-orbit-ring ring-inner" />

      {/* Centerpiece: Goletin AI Core Card */}
      <div className="hero-ai-core-card">
        <div className="hero-ai-logo-wrap">
          <img
            src="/logos/goletin-ai.svg"
            alt="Goletin AI"
            width={76}
            height={76}
            className="hero-ai-logo-img"
          />
        </div>
        <div className="hero-ai-badge">
          <span className="hero-ai-sparkle">✦</span>
          <span className="hero-ai-label">Goletin AI</span>
          <span className="hero-ai-tag">Multimodal</span>
        </div>
      </div>

      {/* Orbiting Satellite Apps with Authentic Logos */}
      <div className="hero-satellite-card sat-docs" title="Goletin Docs">
        <img src="/logos/docs.svg" alt="Docs" width={34} height={34} />
        <span className="hero-sat-name">Docs</span>
      </div>

      <div className="hero-satellite-card sat-sheets" title="Goletin Sheets">
        <img src="/logos/sheets.svg" alt="Sheets" width={34} height={34} />
        <span className="hero-sat-name">Sheets</span>
      </div>

      <div className="hero-satellite-card sat-slides" title="Goletin Slides">
        <img src="/logos/slides.svg" alt="Slides" width={34} height={34} />
        <span className="hero-sat-name">Slides</span>
      </div>

      <div className="hero-satellite-card sat-cloudsave" title="CloudSave">
        <img src="/logos/cloudsave.svg" alt="CloudSave" width={34} height={34} />
        <span className="hero-sat-name">CloudSave</span>
      </div>

      <div className="hero-satellite-card sat-mail" title="Goletin Mail">
        <img src="/logos/mail.svg" alt="Mail" width={34} height={34} />
        <span className="hero-sat-name">Mail</span>
      </div>

      <div className="hero-satellite-card sat-browser" title="Goletin Browser">
        <img src="/logos/browser.svg" alt="Browser" width={34} height={34} />
        <span className="hero-sat-name">Browser</span>
      </div>

      <div className="hero-satellite-card sat-console" title="Goletin Console API">
        <img src="/logos/console.svg" alt="Console" width={34} height={34} />
        <span className="hero-sat-name">Console</span>
      </div>

      <div className="hero-satellite-card sat-search" title="Goletin Search">
        <img src="/logos/search.svg" alt="Search" width={34} height={34} />
        <span className="hero-sat-name">Search</span>
      </div>
    </div>
  );
}

/**
 * Slide 2 Visual Stage: Goletin Business & Enterprise Suite Workspace
 * Menggunakan logo-logo asli dari /logos (logo all apps):
 * yaycount, indotax, eclpro, jet-pro, icofr, lease, counting-pro, benefits
 */
function SlideVisualGoletinBusiness() {
  return (
    <div className="hero-biz-stage" aria-hidden="true">
      <div className="hero-biz-glow" />

      {/* Laptop / Workspace Frame */}
      <div className="hero-laptop-wrap">
        <div className="hero-laptop-screen">
          {/* Header */}
          <div className="hero-laptop-navbar">
            <div className="hero-laptop-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="hero-laptop-brand">
              <img src="/logo-karsasoft.svg" alt="Karsasoft" width={14} height={14} />
              <span>Goletin Enterprise Workspace</span>
            </div>
            <div className="hero-laptop-status">
              <span className="status-live-dot" />
              <span>Multi-Tenant Online</span>
            </div>
          </div>

          {/* Screen Content: Yaycount ERP + IndoTax */}
          <div className="hero-laptop-content">
            <div className="hero-screen-card erp-card">
              <div className="hero-screen-card-header">
                <img src="/logos/yaycount.svg" alt="Yaycount ERP" width={28} height={28} />
                <div>
                  <div className="hero-screen-card-title">Yaycount ERP</div>
                  <div className="hero-screen-card-sub">PSAK 45 / ISAK 35</div>
                </div>
              </div>
              <div className="hero-screen-metric">
                <span className="metric-label">Kas & Bank Konsolidasi</span>
                <span className="metric-val">Rp 4.850.000.000</span>
              </div>
              <div className="hero-screen-bars">
                <div className="bar b1" style={{ width: '85%' }} />
                <div className="bar b2" style={{ width: '65%' }} />
              </div>
            </div>

            <div className="hero-screen-card tax-card">
              <div className="hero-screen-card-header">
                <img src="/logos/indotax.svg" alt="IndoTax" width={28} height={28} />
                <div>
                  <div className="hero-screen-card-title">IndoTax</div>
                  <div className="hero-screen-card-sub">PPh 21 TER & e-Faktur</div>
                </div>
              </div>
              <div className="hero-screen-metric">
                <span className="metric-label">Kepatuhan Pajak Karyawan</span>
                <span className="metric-badge">100% Sesuai Regulasi</span>
              </div>
              <div className="hero-screen-tags">
                <span className="tag-pill">Tarif TER 2024</span>
                <span className="tag-pill">SPT Masa Valid</span>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Deck Base */}
        <div className="hero-laptop-base" />
      </div>

      {/* Orbiting Satellite Enterprise Cards */}
      <div className="hero-biz-satellite sat-ecl" title="ECL Pro">
        <div className="hero-biz-sat-icon">
          <img src="/logos/eclpro.svg" alt="ECL Pro" width={30} height={30} />
        </div>
        <div className="hero-biz-sat-text">
          <strong>ECL Pro</strong>
          <span>IFRS 9 CKPN Engine</span>
        </div>
      </div>

      <div className="hero-biz-satellite sat-jet" title="JET Pro">
        <div className="hero-biz-sat-icon">
          <img src="/logos/jet-pro.svg" alt="JET Pro" width={30} height={30} />
        </div>
        <div className="hero-biz-sat-text">
          <strong>JET Pro</strong>
          <span>ISA 240 Fraud Detection</span>
        </div>
      </div>

      <div className="hero-biz-satellite sat-icofr" title="ICOFR Pro">
        <div className="hero-biz-sat-icon">
          <img src="/logos/icofr.svg" alt="ICOFR Pro" width={30} height={30} />
        </div>
        <div className="hero-biz-sat-text">
          <strong>ICOFR Pro</strong>
          <span>SOX 404 & KKP ISA 230</span>
        </div>
      </div>

      <div className="hero-biz-satellite sat-lease" title="Lease Engine">
        <div className="hero-biz-sat-icon">
          <img src="/logos/lease.svg" alt="Lease Engine" width={30} height={30} />
        </div>
        <div className="hero-biz-sat-text">
          <strong>Lease Engine</strong>
          <span>PSAK 73 / IFRS 16</span>
        </div>
      </div>

      <div className="hero-biz-satellite sat-counting" title="Counting Pro">
        <img src="/logos/counting-pro.svg" alt="Counting Pro" width={22} height={22} />
        <span>Counting Pro</span>
      </div>

      <div className="hero-biz-satellite sat-benefits" title="Benefits Engine">
        <img src="/logos/benefits.svg" alt="Benefits" width={22} height={22} />
        <span>Benefits (IAS 19)</span>
      </div>
    </div>
  );
}

export function HomeHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const slides: SlideData[] = [
    {
      id: 'slide-goletin-ai',
      titleLine1: 'Melangkah lebih jauh dengan',
      titleLine2: 'Goletin AI',
      description:
        'Dengan Goletin, dapatkan aplikasi produktivitas dengan Goletin AI, fitur AI canggih, dan penyimpanan cloud ekstra, semua dalam satu paket.',
      ctaText: 'Coba gratis',
      ctaHref: 'https://goletin.com',
    },
    {
      id: 'slide-goletin-business',
      titleLine1: 'Dirancang untuk masa depan',
      titleLine2: 'bisnis Indonesia',
      description:
        'Tingkatkan produktivitas tim Anda dengan rangkaian aplikasi kolaboratif Docs, Sheets, Slides, kepatuhan pajak IndoTax, dan ERP yayasan Yaycount.',
      ctaText: 'Coba gratis',
      ctaHref: 'https://goletin.com',
    },
  ];

  // Auto advance slides every 7 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 50) {
      goToNext();
    } else if (distance < -50) {
      goToPrev();
    }
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  const current = slides[currentSlide];

  return (
    <div
      className="msft-hero-carousel-wrap"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Carousel Banner Goletin"
    >
      {/* Active Slide Stage */}
      <div
        className="msft-hero-slide-stage"
        role="region"
        aria-label={current.titleLine2}
      >
        <div className="msft-hero-stage-container">
          {/* Left Side: Dynamic Visual Stage Featuring Real App Logos */}
          <div className="msft-hero-visual-stage">
            {currentSlide === 0 ? (
              <SlideVisualGoletinAI />
            ) : (
              <SlideVisualGoletinBusiness />
            )}
          </div>

          {/* Right Side: Headline, Description & CTA */}
          <div className="msft-hero-content-block">
            <h1 className="msft-hero-headline">
              {current.titleLine1}
              <br />
              {current.titleLine2}
            </h1>

            <p className="msft-hero-paragraph">
              {current.description}
            </p>

            <div className="msft-hero-action-row">
              <a
                href={current.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="msft-hero-cta-button"
              >
                {current.ctaText}
              </a>
            </div>
          </div>
        </div>

        {/* Microsoft Signature 3-Zone Controls Bar:
            Far Left (<), Center (Indicators + Pause), Far Right (>) */}
        <div className="msft-hero-controls-bar">
          {/* Far Left: Previous Arrow Button */}
          <button
            type="button"
            className="msft-hero-arrow-btn"
            onClick={goToPrev}
            aria-label="Slide sebelumnya"
            title="Slide sebelumnya"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Center: Slide Indicators + Play/Pause Toggle */}
          <div className="msft-hero-center-controls">
            <div className="msft-hero-indicators">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`msft-hero-indicator-item ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Buka slide ${idx + 1}`}
                  aria-current={idx === currentSlide ? 'true' : 'false'}
                />
              ))}
            </div>

            <button
              type="button"
              className="msft-hero-pause-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Jeda tayangan slide' : 'Putar tayangan slide'}
              title={isPlaying ? 'Jeda tayangan slide' : 'Putar tayangan slide'}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>
          </div>

          {/* Far Right: Next Arrow Button */}
          <button
            type="button"
            className="msft-hero-arrow-btn"
            onClick={goToNext}
            aria-label="Slide berikutnya"
            title="Slide berikutnya"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
