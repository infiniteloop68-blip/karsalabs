'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function GoletinBrowserProductPage() {
  // Simulator State: Privacy & Performance Shield
  const [shieldActive, setShieldActive] = useState<boolean>(true);
  const [dohActive, setDohActive] = useState<boolean>(true);
  const [tabSleeperActive, setTabSleeperActive] = useState<boolean>(true);
  const [aiSidebarActive, setAiSidebarActive] = useState<boolean>(true);
  const [openTabsCount, setOpenTabsCount] = useState<number>(12);

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    os: 'Windows 11 / 10 (64-bit)',
    usageType: 'Penggunaan Kerja Kantor / Korporasi',
    notes: '',
  });

  // Calculate Metrics based on toggles
  const speedLoadSeconds = shieldActive ? 0.68 : 2.45;
  const ramUsageMb = tabSleeperActive
    ? Math.round(openTabsCount * 28 + 140)
    : Math.round(openTabsCount * 95 + 280);
  const normalRamUsageMb = Math.round(openTabsCount * 110 + 320);
  const ramSavedPct = Math.round(((normalRamUsageMb - ramUsageMb) / normalRamUsageMb) * 100);
  const trackersBlocked = shieldActive ? Math.round(openTabsCount * 3.4) : 0;
  const dataBandwidthSaved = shieldActive ? '58%' : '0%';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const browserPillars = [
    {
      icon: 'shield',
      title: 'Zero Tracking & Anti-Fingerprinting Bawaan',
      desc: 'Blokir skrip pelacak lintas situs, kuki pihak ketiga, dan teknik fingerprinting kanvas secara otomatis tanpa membutuhkan instalasi ekstensi tambahan.',
      badge: 'Zero Telemetry',
    },
    {
      icon: 'saas',
      title: 'Arsitektur Ringan & Konsumsi RAM Hemat 60%',
      desc: 'Fitur Smart Tab Sleeper secara cerdas membekukan tab yang sedang tidak aktif di latar belakang, membebaskan memori RAM laptop untuk aplikasi kerja berat lainnya.',
      badge: 'Smart Tab Sleeper',
    },
    {
      icon: 'ai',
      title: 'Panel Samping Goletin AI Terintegrasi',
      desc: 'Dapatkan ringkasan instan artikel web panjang, terjemahan multi-bahasa kontekstual, pembanding data tabel, dan bantuan penulisan draf tanpa berpindah tab.',
      badge: 'Built-in Copilot',
    },
    {
      icon: 'security',
      title: 'DNS over HTTPS & Enkripsi Trafik Otomatis',
      desc: 'Melindungi permintaan DNS Anda dari penyadapan ISP lokal, manipulasi DNS poisoning, dan memastikan koneksi selalu menggunakan standar HTTPS ketat.',
      badge: 'DNS over HTTPS',
    },
    {
      icon: 'team',
      title: 'Multi-Profil Terisolasi untuk Ruang Kerja',
      desc: 'Pisahkan sepenuhnya riwayat penelusuran, kuki sesi, dan kata sandi antara Profil Pekerjaan Kantor, Profil Pribadi, dan Profil Transaksi Perbankan Aman.',
      badge: 'Workspace Isolation',
    },
    {
      icon: 'browser',
      title: 'Dukungan Ekstensi Chrome Web Store',
      desc: 'Didukung mesin Chromium yang dioptimalkan, Anda dapat langsung memasang ribuan ekstensi produktivitas favorit dari toko ekstensi resmi tanpa kendala.',
      badge: 'Chrome Extensions Ready',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Pemblokir Iklan & Pelacak',
      conventional: 'Harus pasang ekstensi pihak ketiga yang rawan kebocoran data dan memakan RAM',
      goletinBrowser: 'Terintegrasi di level mesin peramban (Native C++ Engine), memblokir sebelum konten dimuat',
    },
    {
      feature: 'Konsumsi RAM Saat Multi-Tab',
      conventional: 'Sering menghabiskan 2–4 GB RAM untuk belasan tab, membuat laptop panas & lambat',
      goletinBrowser: 'Hemat memori hingga 60% dengan pembekuan tab otomatis saat tidak digunakan',
    },
    {
      feature: 'Asisten AI Samping',
      conventional: 'Perlu membuka tab terpisah ChatGPT/Claude berbayar secara manual',
      goletinBrowser: 'Sidebar Goletin AI langsung mengenali konteks halaman aktif secara instan',
    },
    {
      feature: 'Privasi & Telemetri Pengguna',
      conventional: 'Mengirimkan data perilaku pencarian dan riwayat jelajah untuk profil iklan',
      goletinBrowser: 'Privasi mutlak tanpa telemetri data penjelajahan ke server iklan manapun',
    },
    {
      feature: 'Kecepatan Buka Halaman Web',
      conventional: 'Lambat karena harus memuat puluhan skrip analitik pelacak tersembunyi',
      goletinBrowser: 'Hingga 3.5x lebih cepat karena skrip pelacak diblokir di tingkat jaringan',
    },
  ];

  const browserFaqItems: FaqItem[] = [
    {
      id: 'browser-engine',
      q: 'Mesin rendering apa yang menjadi basis Goletin Browser?',
      a: 'Goletin Browser dibangun di atas mesin Chromium open-source yang telah dimodifikasi secara mendalam untuk menyingkirkan seluruh modul telemetri Google, menambahkan lapisan isolasi memori cerdas, serta mengintegrasikan pemblokir pelacak bawaan di tingkat native code.',
    },
    {
      id: 'browser-extensions',
      q: 'Apakah saya bisa menggunakan ekstensi dari Chrome Web Store?',
      a: 'Tentu saja. Goletin Browser memiliki kompatibilitas 100% dengan ekosistem ekstensi Chrome Web Store. Anda dapat menginstal pengelola kata sandi, alat pengembang, dan ekstensi produktivitas favorit langsung dalam satu klik.',
    },
    {
      id: 'browser-privacy',
      q: 'Bagaimana Goletin Browser melindungi data riwayat dan kata sandi saya?',
      a: 'Semua data riwayat penelusuran, kuki, dan kata sandi tersimpan secara lokal di perangkat Anda menggunakan enkripsi AES-256. Jika Anda memilih sinkronisasi cloud antar perangkat via Goletin CloudSave, data dienkripsi dengan standar end-to-end encryption (Zero-Knowledge).',
    },
    {
      id: 'browser-platforms',
      q: 'Sistem operasi apa saja yang didukung oleh Goletin Browser?',
      a: 'Goletin Browser dirilis untuk platform Windows 11/10 (64-bit dan ARM64), macOS (Apple Silicon M1/M2/M3 dan Intel), serta distribusi Linux utama (Ubuntu, Fedora, Debian). Versi mobile untuk Android dan iOS sedang dalam tahap pengembangan.',
    },
    {
      id: 'browser-cost',
      q: 'Apakah Goletin Browser berbayar atau gratis digunakan?',
      a: 'Goletin Browser gratis sepenuhnya untuk pengguna individu tanpa iklan sama sekali. Untuk korporasi dan institusi perbankan yang membutuhkan manajemen kebijakan terpusat (Enterprise Group Policy), integrasi SSO, dan audit log kepatuhan, tersedia opsi paket Goletin Enterprise.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner (Standardized 520px, Matching /goletin/ai) */}
          <div className="ms-hero-wrapper goletin-browser-hero-banner">
            <div className="goletin-browser-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Peramban Web Modern Generasi Baru</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Goletin Browser: Cepat, Privat &amp; AI Terintegrasi
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Nikmati penjelajahan web berkecepatan tinggi tanpa pelacak iklan invasif. Dilengkapi isolasi tab hemat memori, enkripsi DNS over HTTPS, dan panel samping Goletin AI untuk produktivitas maksimal.
                </p>
                <div className="hero-cta-group">
                  <a href="#daftar-akses-awal" className="btn-primary">
                    <span>Daftar Akses Awal (Beta)</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#simulator-performa" className="btn-secondary">
                    <span>Coba Simulator Performa</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Pemblokir Pelacak Bawaan</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>DNS over HTTPS &amp; Zero Track</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Sidebar Goletin AI Cerdas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulator: Privacy & Performance Shield */}
          <section id="simulator-performa" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Simulator Efisiensi &amp; Perisai Privasi</span>
              <h2 className="section-title">Bandingkan Performa Penjelajahan Bersama Goletin Browser</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Uji langsung dampak pemblokiran pelacak di tingkat mesin dan teknologi isolasi memori cerdas terhadap konsumsi RAM laptop dan kecepatan muat halaman web Anda.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--ms-border-card)',
                borderRadius: '12px',
                padding: '36px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
                {/* Control Switches & Toggles */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '20px' }}>
                    Konfigurasi Fitur Peramban
                  </h3>

                  {/* Tabs Open Slider */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Simulasi Jumlah Tab Terbuka
                      </label>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                        {openTabsCount} Tab Aktif
                      </span>
                    </div>
                    <input
                      type="range"
                      min={4}
                      max={35}
                      step={1}
                      value={openTabsCount}
                      onChange={(e) => setOpenTabsCount(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ms-text-muted)', marginTop: '4px' }}>
                      <span>4 Tab</span>
                      <span>15 Tab</span>
                      <span>35 Tab</span>
                    </div>
                  </div>

                  {/* Feature Toggles List */}
                  <div style={{ display: 'grid', gap: '14px' }}>
                    {/* Native Shield */}
                    <div
                      onClick={() => setShieldActive(!shieldActive)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: `1.5px solid ${shieldActive ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                        backgroundColor: shieldActive ? 'rgba(0, 120, 212, 0.05)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                          Perisai Pemblokir Pelacak &amp; Iklan Native
                        </div>
                        <div style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)' }}>
                          Cegah skrip pengintai dan unduhan iklan berlebih
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '12px',
                          backgroundColor: shieldActive ? '#107C41' : '#CBD5E1',
                          color: '#FFFFFF',
                        }}
                      >
                        {shieldActive ? 'AKTIF' : 'NONAKTIF'}
                      </span>
                    </div>

                    {/* Tab Sleeper */}
                    <div
                      onClick={() => setTabSleeperActive(!tabSleeperActive)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: `1.5px solid ${tabSleeperActive ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                        backgroundColor: tabSleeperActive ? 'rgba(0, 120, 212, 0.05)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                          Smart Tab Sleeper (Hemat Memori RAM)
                        </div>
                        <div style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)' }}>
                          Bekukan tab pasif di latar belakang secara otomatis
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '12px',
                          backgroundColor: tabSleeperActive ? '#107C41' : '#CBD5E1',
                          color: '#FFFFFF',
                        }}
                      >
                        {tabSleeperActive ? 'AKTIF' : 'NONAKTIF'}
                      </span>
                    </div>

                    {/* DNS over HTTPS */}
                    <div
                      onClick={() => setDohActive(!dohActive)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: `1.5px solid ${dohActive ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                        backgroundColor: dohActive ? 'rgba(0, 120, 212, 0.05)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                          DNS over HTTPS (Enkripsi Resolusi Domain)
                        </div>
                        <div style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)' }}>
                          Amankan nama situs yang Anda tuju dari intipan pihak ketiga
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '12px',
                          backgroundColor: dohActive ? '#107C41' : '#CBD5E1',
                          color: '#FFFFFF',
                        }}
                      >
                        {dohActive ? 'AKTIF' : 'NONAKTIF'}
                      </span>
                    </div>

                    {/* AI Sidebar */}
                    <div
                      onClick={() => setAiSidebarActive(!aiSidebarActive)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: `1.5px solid ${aiSidebarActive ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                        backgroundColor: aiSidebarActive ? 'rgba(0, 120, 212, 0.05)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                          Panel Samping Asisten Goletin AI
                        </div>
                        <div style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)' }}>
                          Ringkas artikel dan analisis tabel web langsung
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '12px',
                          backgroundColor: aiSidebarActive ? '#107C41' : '#CBD5E1',
                          color: '#FFFFFF',
                        }}
                      >
                        {aiSidebarActive ? 'AKTIF' : 'NONAKTIF'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Performance Comparison Dashboard */}
                <div
                  style={{
                    backgroundColor: 'var(--ms-bg-subtle)',
                    borderRadius: '8px',
                    padding: '24px',
                    border: '1px solid var(--ms-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ms-blue-primary)' }}>
                        Performa Real-Time Penjelajahan
                      </span>
                      <span className="badge badge-blue">Rust &amp; Chromium</span>
                    </div>

                    {/* Big Metric: Speed & RAM */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--ms-border)',
                          borderRadius: '8px',
                          padding: '14px',
                        }}
                      >
                        <span style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', display: 'block', marginBottom: '4px' }}>
                          Kecepatan Rata-rata Muat
                        </span>
                        <div style={{ fontSize: '22px', fontWeight: 800, color: '#107C41' }}>
                          {speedLoadSeconds} Detik
                        </div>
                        <span style={{ fontSize: '10.5px', color: 'var(--ms-text-muted)' }}>
                          {shieldActive ? '3.6x Lebih Gesit' : 'Waktu standar'}
                        </span>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--ms-border)',
                          borderRadius: '8px',
                          padding: '14px',
                        }}
                      >
                        <span style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', display: 'block', marginBottom: '4px' }}>
                          Konsumsi Memori RAM
                        </span>
                        <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ms-blue-primary)' }}>
                          {ramUsageMb} MB
                        </div>
                        <span style={{ fontSize: '10.5px', color: '#107C41', fontWeight: 600 }}>
                          Hemat ~{ramSavedPct}% vs Chrome ({normalRamUsageMb} MB)
                        </span>
                      </div>
                    </div>

                    {/* Trackers & Bandwidth */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--ms-border)',
                          borderRadius: '8px',
                          padding: '14px',
                        }}
                      >
                        <span style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', display: 'block', marginBottom: '4px' }}>
                          Pelacak &amp; Iklan Dicegah
                        </span>
                        <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                          {trackersBlocked} Ancaman
                        </div>
                        <span style={{ fontSize: '10.5px', color: 'var(--ms-text-muted)' }}>
                          Data fingerprinting nol
                        </span>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid var(--ms-border)',
                          borderRadius: '8px',
                          padding: '14px',
                        }}
                      >
                        <span style={{ fontSize: '11.5px', color: 'var(--ms-text-muted)', display: 'block', marginBottom: '4px' }}>
                          Penghematan Kuota Data
                        </span>
                        <div style={{ fontSize: '18px', fontWeight: 700, color: '#107C41' }}>
                          {dataBandwidthSaved}
                        </div>
                        <span style={{ fontSize: '10.5px', color: 'var(--ms-text-muted)' }}>
                          Bebas video auto-play
                        </span>
                      </div>
                    </div>

                    {/* Mock Browser Tab Bar Preview */}
                    <div
                      style={{
                        backgroundColor: '#1E293B',
                        borderRadius: '8px',
                        padding: '12px',
                        color: '#F8FAFC',
                        fontFamily: 'monospace',
                        fontSize: '11.5px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', borderBottom: '1px solid #334155', paddingBottom: '6px' }}>
                        <span style={{ color: '#38BDF8' }}>🌐 [TAB 1]</span>
                        <span>karsasoft.com/goletin</span>
                        <span style={{ marginLeft: 'auto', color: '#4ADE80', fontSize: '10px' }}>
                          {shieldActive ? '🛡️ SHIELD ON' : '⚠️ SHIELD OFF'}
                        </span>
                      </div>
                      <div style={{ color: '#94A3B8', fontSize: '10.5px' }}>
                        <div>DNS Status: {dohActive ? '🔒 DoH Cloudflare Encrypted' : 'Standar'}</div>
                        <div>AI Assistant: {aiSidebarActive ? '✨ Ready in Sidebar' : 'Disabled'}</div>
                        <div>Status Memori: {openTabsCount} tab ({ramSavedPct}% efisiensi)</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <a
                      href="#daftar-akses-awal"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Bergabung dalam Program Beta</span>
                      <Icon name="arrow-right" size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6 Core Pillars */}
          <section id="fitur-unggulan" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
              <span className="section-eyebrow">Keunggulan Peramban</span>
              <h2 className="section-title">Enam Alasan Beralih ke Goletin Browser</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Perpaduan sempurna antara performa mesin modern, perlindungan privasi tanpa kompromi, dan produktivitas terpadu bersama ekosistem Goletin.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {browserPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--ms-border-card)',
                    borderRadius: '10px',
                    padding: '28px',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(0, 120, 212, 0.08)',
                          color: 'var(--ms-blue-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon name={pillar.icon} size={22} />
                      </div>
                      <span className="badge badge-blue" style={{ fontSize: '11px' }}>
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '10px' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', lineHeight: '20px', color: 'var(--ms-text-body)' }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section id="komparasi-browser" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Perbandingan Arsitektur</span>
              <h2 className="section-title">Peramban Konvensional vs Goletin Browser</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Ketahui bagaimana Goletin Browser membebaskan workstation Anda dari beban pelacak iklan dan konsumsi RAM yang berlebihan.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid var(--ms-border-card)',
                boxShadow: 'var(--shadow-card)',
                overflowX: 'auto',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--ms-bg-subtle)', borderBottom: '1.5px solid var(--ms-border)' }}>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-text-heading)', width: '24%' }}>
                      Aspek Fitur &amp; Performa
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-text-muted)', width: '38%' }}>
                      Browser Konvensional (Chrome / Edge Biasa)
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-blue-primary)', width: '38%' }}>
                      Goletin Web Browser
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: idx === comparisonRows.length - 1 ? 'none' : '1px solid var(--ms-border)',
                        backgroundColor: idx % 2 === 0 ? '#FFFFFF' : 'rgba(248, 250, 249, 0.5)',
                      }}
                    >
                      <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '16px 20px', color: 'var(--ms-text-muted)', lineHeight: '19px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#D9534F', fontWeight: 700 }}>✕</span>
                          <span>{row.conventional}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px', color: 'var(--ms-text-body)', lineHeight: '19px', fontWeight: 500 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#107C41', flexShrink: 0, marginTop: '2px', display: 'inline-flex' }}>
                            <Icon name="check" size={15} color="#107C41" />
                          </span>
                          <span>{row.goletinBrowser}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Early Access / Beta Waitlist Form */}
          <section id="daftar-akses-awal" style={{ marginBottom: '64px' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid var(--ms-border-card)',
                boxShadow: 'var(--shadow-card)',
                padding: '36px',
                maxWidth: '780px',
                margin: '0 auto',
              }}
            >
              <div className="section-header-block centered" style={{ marginBottom: '28px' }}>
                <span className="section-eyebrow">Program Akses Awal (Beta Preview)</span>
                <h2 className="section-title" style={{ fontSize: '24px', lineHeight: '32px' }}>
                  Daftarkan Diri Anda untuk Mencoba Goletin Browser
                </h2>
                <p className="section-lead" style={{ fontSize: '14px' }}>
                  Dapatkan tautan unduhan instalasi awal (Preview Release) untuk Windows, macOS, atau Linux sebelum peluncuran resmi.
                </p>
              </div>

              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(16, 124, 65, 0.08)',
                    border: '1px solid rgba(16, 124, 65, 0.25)',
                    borderRadius: '8px',
                    padding: '24px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                    <Icon name="check" size={32} color="#107C41" />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#107C41', marginBottom: '8px' }}>
                    Pendaftaran Berhasil!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ms-text-body)' }}>
                    Terima kasih, <strong>{formData.name}</strong>. Undangan unduhan installer Goletin Browser Beta untuk <strong>{formData.os}</strong> akan dikirimkan langsung ke email <strong>{formData.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Raden Surya"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="surya@perusahaan.co.id"
                        className="mitra-form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Sistem Operasi Perangkat
                      </label>
                      <select
                        value={formData.os}
                        onChange={(e) => setFormData({ ...formData, os: e.target.value })}
                        className="mitra-form-input"
                      >
                        <option value="Windows 11 / 10 (64-bit)">Windows 11 / 10 (64-bit)</option>
                        <option value="macOS (Apple Silicon M1/M2/M3)">macOS (Apple Silicon M1/M2/M3)</option>
                        <option value="macOS (Intel Processor)">macOS (Intel Processor)</option>
                        <option value="Linux (Ubuntu / Debian / Fedora)">Linux (Ubuntu / Debian / Fedora)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Tipe Penggunaan Utama
                      </label>
                      <select
                        value={formData.usageType}
                        onChange={(e) => setFormData({ ...formData, usageType: e.target.value })}
                        className="mitra-form-input"
                      >
                        <option value="Penggunaan Kerja Kantor / Korporasi">Penggunaan Kerja Kantor / Korporasi</option>
                        <option value="Penggunaan Pribadi & Produktivitas">Penggunaan Pribadi &amp; Produktivitas</option>
                        <option value="Pengembang Perangkat Lunak (Developer)">Pengembang Perangkat Lunak (Developer)</option>
                        <option value="Pendidikan / Mahasiswa">Pendidikan / Mahasiswa</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Fitur yang Paling Anda Nantikan (Opsional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Contoh: Butuh browser kerja ringan tanpa bloatware pelacak iklan dengan AI sidebar yang terintegrasi ke dokumen kerja."
                      className="mitra-form-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14.5px' }}
                  >
                    <span>Dapatkan Undangan Akses Awal Goletin Browser</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Section FAQ & Dukungan */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Pertanyaan Umum</span>
              <h2 className="section-title">Pertanyaan Seputar Goletin Browser</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar kompatibilitas ekstensi, perlindungan privasi data pribadi, dan tanggal rilis.
              </p>
            </div>
            <GoletinFaq items={browserFaqItems} countLabel="5 Tanya Jawab Goletin Browser" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Era Baru Penjelajahan Web
              </span>
              <h2 className="goletin-bottom-cta-title">
                Jelajahi Internet Lebih Cepat, Ringan &amp; Aman
              </h2>
              <p className="goletin-bottom-cta-desc">
                Bergabunglah dengan ribuan profesional dan organisasi yang telah mendaftar dalam program rilis awal Goletin Browser.
              </p>
              <div className="goletin-bottom-cta-actions">
                <a href="#daftar-akses-awal" className="btn-primary">
                  <span>Daftar Akses Awal Sekarang</span>
                  <Icon name="chevron-right" size={16} />
                </a>
                <Link href="/goletin" className="btn-secondary">
                  <span>Jelajahi Ekosistem Goletin</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
