import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';

export const metadata: Metadata = {
  title: 'Pusat Bantuan Admin Mandiri IT & Deployment — Goletin Karsasoft',
  description:
    'Dokumentasi resmi administrator IT untuk penggelaran armada desktop via GPO/Intune, integrasi SSO SAML 2.0/Entra ID, audit log kepatuhan ISO 27001, dan konfigurasi API gateway.',
  alternates: {
    canonical: '/goletin/dukungan/admin',
  },
  openGraph: {
    title: 'Pusat Bantuan Admin Mandiri IT & Deployment — Goletin Karsasoft',
    description:
      'Dokumentasi resmi administrator IT: deployment GPO/Intune, integrasi SSO SAML 2.0, dan konfigurasi API gateway.',
    url: 'https://karsasoft.com/goletin/dukungan/admin',
    images: ['/og-image.jpg'],
  },
};

export default function DukunganAdminPage() {
  const adminPillars = [
    {
      icon: 'terminal',
      color: '#0078D4',
      title: 'Penggelaran Armada Desktop (Deployment)',
      desc: 'Distribusi otomatis paket instalasi desktop ke ratusan workstation Windows & macOS tanpa intervensi pengguna.',
      items: [
        'Panduan paket instalasi senyap (Silent MSI /qn parameters)',
        'Distribusi aplikasi melalui Microsoft Intune & SCCM',
        'Impor file konfigurasi GPO ADMX untuk membatasi fitur',
        'Pengaturan saluran pembaruan (Current Channel vs Enterprise LTSR)',
      ],
    },
    {
      icon: 'key',
      color: '#107C41',
      title: 'Identitas, SSO & Manajemen Akses',
      desc: 'Autentikasi terpusat, sinkronisasi direktori pengguna instan, dan penegakan kebijakan keamanan berbasis identitas.',
      items: [
        'Konfigurasi SSO SAML 2.0 & OIDC (Microsoft Entra ID, Okta, Google)',
        'Sinkronisasi pengguna otomatis dengan protokol SCIM 2.0',
        'Penegakan Multi-Factor Authentication (MFA) & Conditional Access',
        'Matriks hak akses peran (RBAC) dan pemisahan tugas (SoD)',
      ],
    },
    {
      icon: 'shield',
      color: '#D83B01',
      title: 'Keamanan, Log Audit & Kepatuhan',
      desc: 'Pengawasan jejak audit menyeluruh untuk memenuhi regulasi UU PDP, ISO 27001, dan audit kepatuhan eksternal.',
      items: [
        'Ekspor streaming log audit ke SIEM (Splunk, Elastic, Syslog)',
        'Kedaulatan data residensi lokal Tier-4 Indonesia (PP 71/2019)',
        'Enkripsi data at-rest AES-256 dan in-transit TLS 1.3',
        'Prosedur tanggap insiden dan laporan berkala SOC 2 Type II',
      ],
    },
    {
      icon: 'code',
      color: '#8764B8',
      title: 'API Gateway, Webhook & Integrasi',
      desc: 'Konektivitas sistem perbankan, core banking, custom ERP internal, dan orkestrasi pemrosesan batch.',
      items: [
        'Manajemen API Key korporat & OAuth 2.0 Client Credentials',
        'Daftar webhook event (faktur terbit, jurnal posting, approval)',
        'IP Whitelisting dan batas pemanggilan data (Rate Limiting)',
        'Akses lingkungan uji coba terisolasi (Sandbox Staging)',
      ],
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="support-page-container">
        {/* Hero Section */}
        <section className="support-hero-section">
          <div className="support-content-width">
            <div className="support-hero-header">
              <span className="support-hero-badge">
                <Icon name="terminal" size={14} color="#0078D4" />
                PUSAT DUKUNGAN IT ENTERPRISE • ADMIN MANDIRI
              </span>

              <h1 className="support-hero-h1">Pusat bantuan admin IT & penggelaran sistem</h1>

              <p className="support-hero-desc">
                Dokumentasi arsitektur teknis, panduan penggelaran armada desktop massal via Intune/GPO, integrasi Single Sign-On SAML/Entra ID, dan tata kelola kepatuhan keamanan.
              </p>

              <div className="support-search-container">
                <div className="support-search-input-wrap">
                  <Icon name="search" size={20} className="support-search-icon" />
                  <input
                    type="text"
                    placeholder="Cari argumen MSI silent install, SAML metadata, IP whitelist, webhook, atau ADMX template..."
                    className="support-search-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section className="support-topic-hubs-section">
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">Pilar administrasi sistem</h2>
              <p className="support-section-subtitle">
                Akses referensi teknis komprehensif untuk mengelola ekosistem Goletin dalam infrastruktur perusahaan Anda.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {adminPillars.map((pillar, idx) => (
                <div key={idx} className="support-topic-hub-card">
                  <div className="support-topic-hub-header">
                    <div
                      className="support-topic-hub-icon-pill"
                      style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                    >
                      <Icon name={pillar.icon} size={20} />
                    </div>
                    <h3 className="support-topic-hub-title">{pillar.title}</h3>
                  </div>

                  <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                    <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, marginBottom: '16px' }}>
                      {pillar.desc}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {pillar.items.map((item, iIdx) => (
                        <li key={iIdx} style={{ fontSize: '13px', color: '#0067B8', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <Icon name="chevron-right" size={13} color="#0078D4" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="support-topic-hub-footer">
                    <Link href="/kontak?kategori=it_admin" className="support-topic-hub-footer-link">
                      <span>Dokumentasi teknis</span>
                      <Icon name="arrow-right" size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Snippet Box (Silent MSI Deployment) */}
        <section style={{ padding: '48px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E1DFDD', borderBottom: '1px solid #E1DFDD' }}>
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">Contoh sintaks instalasi massal (Silent MSI)</h2>
              <p className="support-section-subtitle">
                Gunakan baris perintah berikut untuk menyebarkan Goletin Desktop ke seluruh PC karyawan melalui Active Directory GPO atau Microsoft Intune script.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#1E1E1E',
                color: '#D4D4D4',
                borderRadius: '8px',
                padding: '24px',
                fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                fontSize: '13px',
                lineHeight: 1.6,
                overflowX: 'auto',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              <div style={{ color: '#6A9955', marginBottom: '12px' }}>
                # Instalasi senyap Goletin Desktop dengan parameter tenant korporat:
              </div>
              <div style={{ color: '#9CDCFE' }}>
                msiexec.exe /i &quot;GoletinDesktopSetup_v3.2.0.msi&quot; /qn ALLUSERS=1 \
                <br />
                &nbsp;&nbsp;TENANT_ID=&quot;corp-pt-sampoerna-xyz&quot; \
                <br />
                &nbsp;&nbsp;SSO_DOMAIN=&quot;sampoerna.co.id&quot; \
                <br />
                &nbsp;&nbsp;AUTO_UPDATE=1 \
                <br />
                &nbsp;&nbsp;LOGPATH=&quot;C:\Logs\goletin_install.log&quot;
              </div>

              <div style={{ borderTop: '1px solid #333333', marginTop: '16px', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#858585', fontSize: '12px' }}>
                  Exit code 0 menandakan instalasi sukses tanpa memerlukan restart sistem.
                </span>
                <span style={{ color: '#0078D4', fontWeight: 600, fontSize: '12px', cursor: 'pointer' }}>
                  Salin Perintah
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SLA & Escalation Info */}
        <section style={{ padding: '48px 0' }}>
          <div className="support-content-width">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid #E1DFDD', borderRadius: '8px', padding: '28px' }}>
                <Icon name="clock" size={28} color="#0078D4" />
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#242424', margin: '12px 0 8px' }}>
                  Tingkat Layanan (SLA) & Eskalasi P1
                </h3>
                <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.6, marginBottom: '16px' }}>
                  Pelanggan Enterprise didukung jaminan respons kritis (P1 Outage) maksimal <strong>15 menit</strong> 24/7/365 dengan dedicated Incident Commander dan pembaruan berkala setiap 30 menit hingga layanan pulih.
                </p>
                <div style={{ fontSize: '13px', color: '#0078D4', fontWeight: 600 }}>
                  Hotline Darurat IT: 0800-1-KARSA (Khusus Enterprise)
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid #E1DFDD', borderRadius: '8px', padding: '28px' }}>
                <Icon name="database" size={28} color="#107C41" />
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#242424', margin: '12px 0 8px' }}>
                  Sertifikasi & Kepatuhan Resmi
                </h3>
                <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.6, marginBottom: '16px' }}>
                  Seluruh arsitektur awan Karsasoft terdaftar resmi di PSE Kominfo RI, memenuhi standar ISO/IEC 27001:2022 untuk Manajemen Keamanan Informasi, serta audit independen SOC 2 Type II tahunan.
                </p>
                <Link href="/tentang" style={{ fontSize: '13px', color: '#107C41', fontWeight: 600, textDecoration: 'none' }}>
                  Pelajari komitmen kepatuhan & arsitektur &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
