'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function SsoIntegrationPage() {
  const ssoPillars = [
    {
      icon: 'security',
      title: 'Federasi Identitas SAML 2.0 & OpenID Connect (OIDC)',
      desc: 'Hubungkan penyedia identitas (IdP) perusahaan Anda dengan standar industri SAML 2.0 dan OIDC untuk mengizinkan staf masuk ke seluruh ekosistem Goletin menggunakan kredensial tunggal.',
      badge: 'SAML 2.0 & OIDC',
    },
    {
      icon: 'saas',
      title: 'Sinkronisasi Otomatis SCIM 2.0 (User Lifecycle)',
      desc: 'Otomatiskan provisi dan de-provisi akun pengguna secara real-time. Ketika staf baru bergabung atau resign dari HRIS, akses mereka ke seluruh aplikasi Goletin disinkronkan seketika.',
      badge: 'SCIM 2.0 Lifecycle',
    },
    {
      icon: 'shield',
      title: 'Dukungan Microsoft Entra ID, Okta & Google Workspace',
      desc: 'Kompatibilitas bawaan tanpa perantara tambahan dengan Microsoft Entra ID (Azure AD), Active Directory on-premise, Okta, Ping Identity, dan Google Workspace Enterprise.',
      badge: 'Multi-IdP Support',
    },
    {
      icon: 'analytics',
      title: 'Kebijakan Akses Bersyarat (Conditional Access)',
      desc: 'Terapkan aturan pembatasan login berdasarkan subnet IP kantor, kepatuhan perangkat (Device Trust), dan parameter lokasi geografis untuk mencegah akses tak sah dari luar negeri.',
      badge: 'Conditional Access',
    },
    {
      icon: 'calculator',
      title: 'Otentikasi Multi-Faktor Wajib (MFA / FIDO2)',
      desc: 'Perkuat keamanan gerbang masuk dengan kewajiban MFA berbasis aplikasi Authenticator (TOTP), SMS OTP, atau kunci keamanan fisik standar FIDO2 / WebAuthn.',
      badge: 'MFA & FIDO2',
    },
    {
      icon: 'docs',
      title: 'Audit Log Otentikasi & Integrasi SIEM Terpusat',
      desc: 'Streaming seluruh log keberhasilan dan kegagalan login, perubahan hak akses, serta peristiwa keamanan ke SIEM korporasi (Splunk, Microsoft Sentinel, Elastic) via Syslog / Webhook.',
      badge: 'SIEM Integration',
    },
  ];

  const ssoFaqItems: FaqItem[] = [
    {
      id: 'sso-compatibility',
      q: 'Apakah Goletin SSO mendukung Active Directory lokal (On-Premises LDAP)?',
      a: 'Ya. Melalui modul konektor Goletin Directory Sync atau federasi ADFS (Active Directory Federation Services), direktori pengguna internal perusahaan Anda dapat dihubungkan secara aman tanpa mengekspos kata sandi ke cloud.',
    },
    {
      id: 'sso-scim',
      q: 'Bagaimana cara kerja SCIM 2.0 saat karyawan keluar dari perusahaan?',
      a: 'Saat akun karyawan dinonaktifkan di sistem IdP Anda (misalnya di Microsoft Entra ID), sistem SCIM akan mengirimkan webhook seketika ke Goletin untuk mencabut seluruh sesi aktif dan mengarsipkan dokumen CloudSave secara otomatis.',
    },
    {
      id: 'sso-setup-time',
      q: 'Berapa lama waktu implementasi integrasi SSO untuk organisasi baru?',
      a: 'Konfigurasi SAML 2.0 dan metadata pertukaran sertifikat umumnya memakan waktu kurang dari 30 menit dengan panduan langsung dari tim dukungan teknis Karsasoft.',
    },
    {
      id: 'sso-tiers',
      q: 'Apakah fitur SSO tersedia pada semua paket langganan?',
      a: 'Fitur integrasi SAML 2.0 dan SCIM 2.0 tersedia pada paket Bisnis Premium dan Enterprise Agreement untuk menjamin tata kelola keamanan identitas korporasi yang terstandar.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner */}
          <div className="ms-hero-wrapper goletin-hero-banner">
            <div className="goletin-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Manajemen Identitas & Akses Enterprise</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Integrasi SSO & SAML 2.0: Satu Identitas untuk Seluruh Aplikasi
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Satukan manajemen akses seluruh staf organisasi Anda ke 18+ aplikasi Goletin menggunakan direktori perusahaan yang ada. Didukung protokol SAML 2.0, OpenID Connect, provisi otomatis SCIM 2.0, dan penegakan MFA wajib.
                </p>
                <div className="hero-cta-group">
                  <Link href="/kontak" className="btn-primary">
                    <span>Konsultasi Integrasi SSO</span>
                    <Icon name="arrow-right" size={15} />
                  </Link>
                  <Link href="/goletin/enterprise" className="btn-secondary">
                    <span>Kembali ke Enterprise</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>SAML 2.0 & OIDC</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>SCIM 2.0 Lifecycle</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>MFA & Entra ID Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">1 Akun</div>
              <div className="goletin-stat-title">Single Sign-On Terpadu</div>
              <p className="goletin-stat-sub">Akses seluruh rangkaian aplikasi tanpa login ulang</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">SAML 2.0</div>
              <div className="goletin-stat-title">Standar Protokol Keamanan</div>
              <p className="goletin-stat-sub">Pertukaran token terenkripsi sertifikat X.509</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">SCIM 2.0</div>
              <div className="goletin-stat-title">Provisi Otomatis Real-Time</div>
              <p className="goletin-stat-sub">Sinkronisasi karyawan masuk & keluar seketika</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">FIDO2</div>
              <div className="goletin-stat-title">Multi-Factor Authentication</div>
              <p className="goletin-stat-sub">Dukungan hardware security key dan TOTP</p>
            </div>
          </div>

          {/* 6 Key Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Kapabilitas Keamanan Identitas</span>
              <h2 className="section-title">Kontrol Penuh Hak Akses di Bawah Kendali IT Perusahaan</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Hapus risiko kata sandi lemah atau akun mantan karyawan yang tertinggal dengan integrasi direktori terpusat.
              </p>
            </div>

            <div className="standards-grid">
              {ssoPillars.map((pillar, idx) => (
                <div key={idx} className="standard-card">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '14px' }}>
                    <div
                      className="pillar-icon-box"
                      style={{
                        width: '40px',
                        height: '40px',
                        margin: 0,
                        backgroundColor: '#F1F5F3',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name={pillar.icon} size={20} />
                    </div>
                    <span className="standard-badge" style={{ margin: 0 }}>
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="standard-card-title">{pillar.title}</h3>
                  <p className="standard-card-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Pertanyaan Umum</span>
              <h2 className="section-title">Pertanyaan Seputar Integrasi SSO</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar kompatibilitas IdP, sertifikat enkripsi, dan integrasi Active Directory.
              </p>
            </div>
            <GoletinFaq items={ssoFaqItems} countLabel="4 Tanya Jawab Integrasi SSO" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Penerapan Identity Provider
              </span>
              <h2 className="goletin-bottom-cta-title">
                Siap Mengintegrasikan Direktori Organisasi Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Jadwalkan sesi onboarding teknis bersama tim Security Solutions Karsasoft untuk konfigurasi SAML 2.0 dan SCIM dalam hitungan menit.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Mulai Pengaturan SSO</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <Link href="/goletin/enterprise" className="btn-secondary">
                  <span>Lihat Paket Enterprise</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
