'use client';

import React, { useState, useEffect, useRef } from 'react';

export interface SlideData {
  id: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
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
      image: '/images/goletin-msft-hero-slide.jpg',
      imageAlt: 'Ekosistem Aplikasi Goletin dengan Goletin AI di Pusatnya',
      ctaText: 'Coba gratis',
      ctaHref: 'https://goletin.com',
    },
    {
      id: 'slide-goletin-business',
      titleLine1: 'Dirancang untuk masa depan',
      titleLine2: 'bisnis Indonesia',
      description:
        'Tingkatkan produktivitas tim Anda dengan rangkaian aplikasi kolaboratif Docs, Sheets, Slides, kepatuhan pajak IndoTax, dan ERP yayasan Yaycount.',
      image: '/images/goletin-business-hero-slide.jpg',
      imageAlt: 'Goletin untuk Bisnis dan Produktivitas Kerja Modern',
      ctaText: 'Coba gratis',
      ctaHref: 'https://goletin.com',
    },
  ];

  // Auto advance slides every 6 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
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
      {/* Active Slide Canvas */}
      <div
        className="msft-hero-slide-stage"
        style={{ backgroundImage: `url(${current.image})` }}
        role="region"
        aria-label={current.titleLine2}
      >
        <div className="msft-hero-stage-container">
          {/* Content Overlay strictly on the Right Side (Matching 100% Microsoft) */}
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
