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
 * Slide 2 Visual Stage: Goletin Enterprise Bento Showcase (Static, No Laptop)
 * Menggunakan logo-logo asli dari /logos (logo all apps):
 * yaycount, indotax, eclpro, jet-pro, icofr, lease, counting-pro, benefits, revenue, sampling
 */
function SlideVisualGoletinBusiness() {
  return (
    <div className="hero-biz-bento" aria-hidden="true">
      {/* Top Header Strip: Brand + Multi-Tenant Suite Pills */}
      <div className="hero-biz-bento-header">
        <div className="hero-biz-bento-title">
          <img src="/logo-karsasoft.svg" alt="Karsasoft" width={16} height={16} />
          <span>Goletin Enterprise Workspace</span>
        </div>
        <div className="hero-biz-pills-row">
          <span className="biz-header-pill">
            <img src="/logos/counting-pro.svg" alt="Counting Pro" width={15} height={15} />
            <span>Counting Pro</span>
          </span>
          <span className="biz-header-pill">
            <img src="/logos/benefits.svg" alt="Benefits" width={15} height={15} />
            <span>Benefits IAS 19</span>
          </span>
          <span className="biz-header-pill">
            <img src="/logos/revenue.svg" alt="Revenue" width={15} height={15} />
            <span>Revenue</span>
          </span>
          <span className="biz-header-pill">
            <img src="/logos/sampling.svg" alt="Sampling" width={15} height={15} />
            <span>Sampling Pro</span>
          </span>
        </div>
      </div>

      {/* Primary Flagships: Yaycount ERP + IndoTax */}
      <div className="hero-biz-duo-grid">
        <div className="hero-biz-card-lead">
          <div className="hero-biz-lead-top">
            <img src="/logos/yaycount.svg" alt="Yaycount ERP" width={38} height={38} />
            <div>
              <div className="hero-biz-lead-name">Yaycount ERP</div>
              <div className="hero-biz-lead-compliance">PSAK 45 / ISAK 35</div>
            </div>
          </div>
          <p className="hero-biz-lead-desc">
            Sistem akuntansi yayasan &amp; nirlaba dengan multi-fund reporting dan rekonsiliasi kas terpadu.
          </p>
        </div>

        <div className="hero-biz-card-lead">
          <div className="hero-biz-lead-top">
            <img src="/logos/indotax.svg" alt="IndoTax" width={38} height={38} />
            <div>
              <div className="hero-biz-lead-name">IndoTax</div>
              <div className="hero-biz-lead-compliance">Kepatuhan Pajak Nasional</div>
            </div>
          </div>
          <p className="hero-biz-lead-desc">
            Kalkulator PPh 21 TER 2024, rekonsiliasi e-Faktur PPN, dan pelaporan SPT Masa 100% akurat.
          </p>
        </div>
      </div>

      {/* Regulatory & Audit Engines: ECL Pro, JET Pro, ICOFR Pro, Lease Engine */}
      <div className="hero-biz-quad-grid">
        <div className="hero-biz-engine-card">
          <img src="/logos/eclpro.svg" alt="ECL Pro" width={32} height={32} />
          <div className="hero-biz-engine-title">ECL Pro</div>
          <div className="hero-biz-engine-standard">IFRS 9 CKPN</div>
        </div>

        <div className="hero-biz-engine-card">
          <img src="/logos/jet-pro.svg" alt="JET Pro" width={32} height={32} />
          <div className="hero-biz-engine-title">JET Pro</div>
          <div className="hero-biz-engine-standard">ISA 240 Fraud</div>
        </div>

        <div className="hero-biz-engine-card">
          <img src="/logos/icofr.svg" alt="ICOFR Pro" width={32} height={32} />
          <div className="hero-biz-engine-title">ICOFR Pro</div>
          <div className="hero-biz-engine-standard">SOX 404 KKP</div>
        </div>

        <div className="hero-biz-engine-card">
          <img src="/logos/lease.svg" alt="Lease Engine" width={32} height={32} />
          <div className="hero-biz-engine-title">Lease Engine</div>
          <div className="hero-biz-engine-standard">PSAK 73 IFRS 16</div>
        </div>
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
