'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function OnPremiseAirGappedPage() {
  const onPremisePillars = [
    {
      icon: 'security',
      title: 'Isolasi Jaringan Penuh Tanpa Akses Internet (True Air-Gapped)',
      desc: 'Seluruh sistem Goletin — dari pengolah dokumen, model AI lokal, hingga ERP akuntansi — berjalan 100% mandiri di dalam jaringan lokal (LAN) internal tanpa perlu koneksi ke internet publik.',
      badge: 'Zero Internet Dependency',
    },
    {
      icon: 'cloud',
      title: 'Dukungan Hypervisor & Bare-Metal Server Fleksibel',
      desc: 'Kompatibel dengan platform virtualisasi enterprise terkemuka seperti VMware ESXi, Nutanix AHV, Proxmox VE, Red Hat OpenShift, maupun server bare-metal berspesifikasi khusus.',
      badge: 'VMware & Bare-Metal',
    },
    {
      icon: 'shield',
      title: 'Pembaruan Offline Tersertifikasi Kriptografi (Offline Media)',
      desc: 'Pembaruan keamanan, fitur baru, dan patch sistem disalurkan secara berkala melalui media offline terenkripsi dengan verifikasi hash SHA-256 dan tanda tangan digital resmi tim teknis Karsasoft.',
      badge: 'Signed Offline Patch',
    },
    {
      icon: 'analytics',
      title: 'Kepatuhan Regulasi Pertahanan, Intelijen & BSSN',
      desc: 'Memenuhi persyaratan klasifikasi data sangat rahasia untuk instalasi di lingkungan Kementerian Pertahanan, institusi intelijen, lembaga sandi negara (BSSN), dan perbankan sentral.',
      badge: 'Defense-Grade Security',
    },
    {
      icon: 'erp',
      title: 'Kedaulatan Fisik & Kepemilikan Aset 100%',
      desc: 'Basis data, kunci enkripsi, dan berkas arsip tersimpan seutuhnya pada media penyimpanan fisik milik organisasi Anda di dalam ruangan server gedung sendiri.',
      badge: 'Hardware Sovereignty',
    },
    {
      icon: 'docs',
      title: 'Dukungan On-Site Engineer Bersertifikasi',
      desc: 'Didampingi oleh teknisi sistem dan security architect Karsasoft yang telah melalui uji kelayakan keamanan (security clearance) untuk instalasi, pemeliharaan, dan pelatihan staf internal.',
      badge: 'Dedicated On-Site SLA',
    },
  ];

  const onPremiseFaqItems: FaqItem[] = [
    {
      id: 'onprem-specs',
      q: 'Berapa spesifikasi server minimum untuk menjalankan Goletin On-Premise?',
      a: 'Untuk skala kantor 50–200 staf, diperlukan server dengan 16–32 vCPU, RAM 64 GB, dan penyimpanan NVMe SSD 2 TB berkonfigurasi RAID 1/10. Spesifikasi dapat ditingkatkan (scale-out) seiring bertambahnya volume data dan modul yang diaktifkan.',
    },
    {
      id: 'onprem-ai-offline',
      q: 'Apakah modul Goletin AI dapat beroperasi secara offline tanpa koneksi cloud asing?',
      a: 'Ya. Kami menyediakan opsi paket Goletin AI On-Premise yang menjalankan model bahasa besar (LLM) secara lokal pada server berakselerator GPU enterprise (NVIDIA A100/H100/L40S) tanpa mengirimkan satu pun prompt kueri ke luar gedung Anda.',
    },
    {
      id: 'onprem-licensing',
      q: 'Bagaimana model lisensi untuk deployment on-premise air-gapped?',
      a: 'Tersedia skema lisensi Perpetual (beli putus dengan annual maintenance agreement) serta opsi sewa tahunan Enterprise Agreement dengan aktivasi lisensi berbasis cryptographic license file offline.',
    },
    {
      id: 'onprem-installation-time',
      q: 'Berapa lama waktu implementasi dan uji coba deployment on-premise?',
      a: 'Proses deployment umumnya diselesaikan dalam 3 hingga 5 hari kerja di lokasi (on-site), mencakup instalasi sistem operasi, konfigurasi database, penyiapan replikasi cadangan, dan pelatihan administrator IT lokal.',
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
                <span className="section-eyebrow">Deployment Tertutup & Air-Gapped</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  On-Premise Air-Gapped: Penerapan Server Lokal Tertutup
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Instal seluruh ekosistem Goletin pada server fisik internal organisasi Anda tanpa membutuhkan sambungan internet sama sekali. Solusi komputasi privat terlindungi untuk sektor pertahanan, intelijen, dan perbankan dengan kerahasiaan data tertinggi.
                </p>
                <div className="hero-cta-group">
                  <Link href="/kontak" className="btn-primary">
                    <span>Konsultasi On-Premise</span>
                    <Icon name="arrow-right" size={15} />
                  </Link>
                  <Link href="/goletin/enterprise" className="btn-secondary">
                    <span>Kembali ke Enterprise</span>
                  </Link>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>100% Offline Air-Gapped</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Bare-Metal & VMware Ready</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kepatuhan Standar BSSN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Metric Stats Grid */}
          <div className="goletin-stats-grid">
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">0 Byte</div>
              <div className="goletin-stat-title">Lalu Lintas Keluar Internet</div>
              <p className="goletin-stat-sub">Operasional 100% mandiri dalam jaringan lokal</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">Perpetual</div>
              <div className="goletin-stat-title">Pilihan Lisensi Fleksibel</div>
              <p className="goletin-stat-sub">Aktivasi berbasis file lisensi kriptografi offline</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">On-Site</div>
              <div className="goletin-stat-title">Dukungan Tim Teknisi Langsung</div>
              <p className="goletin-stat-sub">Pendampingan instalasi dan pemeliharaan di lokasi</p>
            </div>
            <div className="goletin-stat-card">
              <div className="goletin-stat-num">SHA-256</div>
              <div className="goletin-stat-title">Integritas Patch Terverifikasi</div>
              <p className="goletin-stat-sub">Pembaruan sistem melalui media offline tersertifikasi</p>
            </div>
          </div>

          {/* 6 Key Pillars Grid */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Keunggulan Arsitektur Air-Gapped</span>
              <h2 className="section-title">Pertahanan Tertinggi untuk Aset Data Kritis</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Kendali penuh berada pada infrastruktur fisik ruang server milik instansi Anda tanpa ketergantungan pada pihak luar.
              </p>
            </div>

            <div className="standards-grid">
              {onPremisePillars.map((pillar, idx) => (
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
              <h2 className="section-title">Pertanyaan Seputar On-Premise Air-Gapped</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar spesifikasi perangkat keras, lisensi offline, dan dukungan teknis on-site.
              </p>
            </div>
            <GoletinFaq items={onPremiseFaqItems} countLabel="4 Tanya Jawab On-Premise" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Kemandirian Teknologi Mutlak
              </span>
              <h2 className="goletin-bottom-cta-title">
                Bangun Ruang Kerja Berdaulat di Server Internal Anda
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultasikan kebutuhan infrastruktur server, arsitektur jaringan lokal, dan jadwal implementasi on-site bersama tim spesialis Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Jadwalkan Diskusi On-Premise</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <Link href="/goletin/enterprise" className="btn-secondary">
                  <span>Lihat Opsi Enterprise</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
