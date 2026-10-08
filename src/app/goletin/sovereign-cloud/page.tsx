'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function SovereignCloudPage() {
  const sovereignPillars = [
    {
      icon: 'security',
      title: 'Dedicated Virtual Private Cloud (VPC) Tenant',
      desc: 'Setiap institusi enterprise beroperasi dalam VPC terisolasi penuh dengan subnet privat, firewall tingkat lanjut, dan pembatasan IP tanpa risiko pencampuran data tenant lain.',
      badge: 'Isolasi Penuh VPC',
    },
    {
      icon: 'cloud',
      title: '100% Pusat Data Tier-4 di Indonesia',
      desc: 'Seluruh server komputasi, basis data, dan arsip cadangan berada di fasilitas Tier-4 bersertifikasi di wilayah hukum Republik Indonesia sesuai UU PDP No. 27/2022.',
      badge: 'Data Center Tier-4',
    },
    {
      icon: 'shield',
      title: 'Manajemen Kunci Kriptografi Mandiri (BYOK / HSM)',
      desc: 'Organisasi memegang kendali penuh atas kunci enkripsi berkas melalui Hardware Security Module (HSM). Karsasoft sekalipun tidak dapat mendekripsi data Anda.',
      badge: 'Hardware HSM',
    },
    {
      icon: 'analytics',
      title: 'Konektivitas Privat IPsec VPN & MPLS Dedicated',
      desc: 'Hubungkan jaringan intranet kantor pusat dan kantor cabang langsung ke Goletin Sovereign Cloud tanpa melalui lalu lintas internet publik untuk menjamin keamanan tertinggi.',
      badge: 'Direct Link MPLS',
    },
    {
      icon: 'docs',
      title: 'Kepatuhan SPBE, OJK, Bank Indonesia & BSSN',
      desc: 'Memenuhi standar regulasi perbankan, Peraturan Pemerintah No. 71/2019, standar Sistem Pemerintahan Berbasis Elektronik (SPBE), serta pedoman keamanan siber BSSN.',
      badge: 'Standar SPBE & OJK',
    },
    {
      icon: 'saas',
      title: 'Disaster Recovery Center (DRC) Lintas Wilayah Domestik',
      desc: 'Replikasi failover otomatis antara pusat data Jakarta dan Jawa Barat menjamin kelangsungan operasional kritis (RPO < 5 menit, RTO < 30 menit) saat bencana alam.',
      badge: 'Multi-Region DRC',
    },
  ];

  const sovereignFaqItems: FaqItem[] = [
    {
      id: 'sovereign-location',
      q: 'Di mana lokasi fisik fasilitas data center Goletin Sovereign Cloud?',
      a: 'Infrastruktur beroperasi di pusat data Tier-4 carrier-neutral di kawasan Jabodetabek dan Jawa Barat dengan redundansi pasokan daya 2N+1 dan sertifikasi fisik tingkat militer.',
    },
    {
      id: 'sovereign-audit',
      q: 'Apakah instansi kami berhak melakukan audit keamanan independen?',
      a: 'Ya. Klien Enterprise Agreement memiliki hak audit berkala dan uji penetrasi (Penetration Test) terjadwal bersama tim auditor internal instansi atau pihak ketiga bersertifikasi.',
    },
    {
      id: 'sovereign-spbe',
      q: 'Apakah Goletin Sovereign Cloud dapat digunakan oleh Kementerian, BUMN, dan Lembaga Negara?',
      a: 'Tentu. Infrastruktur kami dirancang khusus memenuhi kriteria kedaulatan data pemerintah sesuai PP 71/2019, Perpres SPBE No. 95/2018, dan panduan keamanan data strategis BSSN.',
    },
    {
      id: 'sovereign-migration',
      q: 'Bagaimana proses migrasi data dari penyedia cloud publik asing (AWS / Azure / GCP)?',
      a: 'Tim Cloud Solutions Architect Karsasoft menyediakan pipeline migrasi terenkripsi end-to-end tanpa downtime untuk memindahkan basis data, file storage, dan konfigurasi direktori pengguna.',
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
                <span className="section-eyebrow">Infrastruktur Berdaulat Enterprise</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Goletin Sovereign Cloud: Kedaulatan Data & Keamanan Nasional
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Infrastruktur komputasi awan privat mandiri yang dibangun khusus untuk institusi perbankan, BUMN, dan korporasi teratur. 100% beroperasi di pusat data Tier-4 Indonesia dengan perlindungan enkripsi kunci mandiri (HSM) dan kepatuhan UU PDP.
                </p>
                <div className="hero-cta-group">
                  <Link href="/kontak" className="btn-primary">
                    <span>Konsultasi Sovereign Cloud</span>
                    <Icon name="arrow-right" size={15} />
                  </Link>
                  <Link href="/goletin/enterprise" className="btn-secondary">
                    <span>Eksplorasi Paket Enterprise</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Tier-4 Data Center</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>UU PDP No. 27/2022</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Hardware HSM Enkripsi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">100%</div>
              <div className="goletin-stat-title">Kedaulatan Yurisdiksi RI</div>
              <p className="goletin-stat-sub">Bebas dari risiko intervensi hukum asing (Cloud Act)</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">Tier-4</div>
              <div className="goletin-stat-title">Fasilitas Data Center</div>
              <p className="goletin-stat-sub">Ketersediaan daya 2N+1 dan redundansi pendingin</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">&lt; 5 Menit</div>
              <div className="goletin-stat-title">Recovery Point Objective (RPO)</div>
              <p className="goletin-stat-sub">Replikasi sinkron lintas DRC domestik</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">99.99%</div>
              <div className="goletin-stat-title">Komitmen Uptime SLA</div>
              <p className="goletin-stat-sub">Dukungan teknis 24/7 Response Team Indonesia</p>
            </div>
          </div>

          {/* 6 Key Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Arsitektur Sovereign Cloud</span>
              <h2 className="section-title">Pilar Keamanan dan Kepatuhan Tingkat Tinggi</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Mekanisme pertahanan berlapis dirancang untuk menjamin kerahasiaan, integritas, dan ketersediaan data strategis organisasi Anda.
              </p>
            </div>

            <div className="standards-grid">
              {sovereignPillars.map((pillar, idx) => (
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
              <h2 className="section-title">Pertanyaan Seputar Sovereign Cloud</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar sertifikasi kepatuhan, hak audit independen, dan arsitektur data.
              </p>
            </div>
            <GoletinFaq items={sovereignFaqItems} countLabel="4 Tanya Jawab Sovereign Cloud" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kedaulatan Digital Korporasi
              </span>
              <h2 className="goletin-bottom-cta-title">
                Amankan Aset Informasi Strategis Bangsa
              </h2>
              <p className="goletin-bottom-cta-desc">
                Diskusikan penyusunan arsitektur Virtual Private Cloud terdedikasi bersama Chief Security Officer dan Solutions Architect Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Arsitektur VPC</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <Link href="/goletin/enterprise" className="btn-secondary">
                  <span>Lihat Solusi Enterprise</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
