'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Icon } from './Icons';
import { Language } from '@/i18n/types';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LanguageModal({ isOpen, onClose }: LanguageModalProps) {
  const { lang, setLang, t, options } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (code: Language) => {
    setLang(code);
    setTimeout(() => {
      onClose();
    }, 180);
  };

  return (
    <div
      className="lang-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lang-modal-title"
    >
      <div className="lang-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="lang-modal-header">
          <div className="lang-modal-title-group">
            <div className="lang-modal-icon-badge">
              <Icon name="globe" size={18} />
            </div>
            <div>
              <h3 id="lang-modal-title" className="lang-modal-title">
                {t.langModal.title}
              </h3>
              <p className="lang-modal-subtitle">{t.langModal.subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            className="lang-modal-close-btn"
            onClick={onClose}
            aria-label={t.langModal.close}
          >
            <Icon name="close" size={16} />
          </button>
        </div>

        {/* Options List */}
        <div className="lang-modal-list">
          {options.map((option) => {
            const isSelected = lang === option.code;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => handleSelect(option.code)}
                className={`lang-option-card ${isSelected ? 'active' : ''}`}
                aria-pressed={isSelected}
              >
                <div className="lang-option-left">
                  <div className="lang-option-flag-box">
                    <span className="lang-option-flag">{option.flag}</span>
                  </div>
                  <div className="lang-option-text">
                    <div className="lang-option-label-row">
                      <span className="lang-option-name">{option.label}</span>
                      <span className="lang-option-native">({option.nativeLabel})</span>
                    </div>
                    <p className="lang-option-desc">{option.description}</p>
                  </div>
                </div>

                <div className="lang-option-right">
                  {isSelected ? (
                    <span className="lang-active-badge">
                      <Icon name="check" size={12} />
                      <span>{t.langModal.currentActive}</span>
                    </span>
                  ) : (
                    <span className="lang-select-arrow">
                      <Icon name="arrow-right" size={14} />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="lang-modal-footer">
          <span className="lang-modal-footer-note">
            {lang === 'id'
              ? 'Preferensi bahasa disimpan otomatis untuk seluruh sesi Anda.'
              : 'Language preference is automatically saved for your session.'}
          </span>
          <button type="button" onClick={onClose} className="btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <span>{t.langModal.close}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
