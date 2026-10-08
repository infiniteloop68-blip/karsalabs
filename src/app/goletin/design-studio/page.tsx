'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

type CanvasPreset = 'social' | 'slide' | 'diagram' | 'square';
type PaletteTheme = 'emerald' | 'azure' | 'obsidian';

export default function DesignStudioProductPage() {
  const [preset, setPreset] = useState<CanvasPreset>('slide');
  const [theme, setTheme] = useState<PaletteTheme>('azure');
  const [selectedFont, setSelectedFont] = useState<string>('Segoe UI Variable');
  const [exportFormat, setExportFormat] = useState<'svg' | 'png' | 'pdf'>('png');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '5 - 20 Anggota Tim',
    notes: '',
  });

  const presetConfig: Record<
    CanvasPreset,
    { title: string; ratio: string; width: number; height: number; desc: string }
  > = {
    slide: {
      title: 'Slide Presentasi Pitch Deck',
      ratio: '16:9',
      width: 1920,
      height: 1080,
      desc: 'Format presentasi rasio lebar standar eksekutif korporasi dan rapat dewan.',
    },
    social: {
      title: 'Banner Promosi LinkedIn & Web',
      ratio: '1.91:1',
      width: 1200,
      height: 628,
      desc: 'Optimasi resolusi banner artikel bisnis dan publikasi rilis media sosial.',
    },
    diagram: {
      title: 'Diagram Arsitektur Sistem & Alur',
      ratio: '16:9',
      width: 2560,
      height: 1440,
      desc: 'Kanvas luas untuk bagan alir cloud microservices dan diagram proses bisnis.',
    },
    square: {
      title: 'Visual Feed & Infografis Persegi',
      ratio: '1:1',
      width: 1080,
      height: 1080,
      desc: 'Komposisi persegi simetris untuk infografis edukasi dan materi promosi.',
    },
  };

  const paletteColors: Record<PaletteTheme, { primary: string; secondary: string; bg: string; name: string }> = {
    azure: {
      primary: '#0078D4',
      secondary: '#2B88D8',
      bg: '#F0F8FF',
      name: 'Azure Enterprise Blue',
    },
    emerald: {
      primary: '#00A88A',
      secondary: '#107C41',
      bg: '#F0FDF4',
      name: 'Emerald Sustainable',
    },
    obsidian: {
      primary: '#6366F1',
      secondary: '#4338CA',
      bg: '#0F172A',
      name: 'Obsidian Modern Tech',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const studioPillars = [
    {
      icon: 'palette',
      title: 'Mesin Grafis Vektor Ringan Berbasis GPU WebGL',
      desc: 'Manipulasi ribuan node kurva bezier dan bentuk geometris secara instan di peramban web tanpa lag dan tanpa menguras baterai laptop Anda.',
      badge: 'Hardware Accelerated',
    },
    {
      icon: 'saas',
      title: 'Brand Kit Korporasi Terpusat',
      desc: 'Kunci palet warna resmi hex code, font tipografi perusahaan, serta aset logo resmi agar seluruh anggota tim menghasilkan materi visual yang selalu konsisten.',
      badge: 'Single Source of Truth',
    },
    {
      icon: 'team',
      title: 'Kolaborasi Real-Time Multiplayer',
      desc: 'Bekerja bersama desainer, manajer pemasaran, dan copywriter di kanvas yang sama dengan kursor langsung, obrolan suara instan, dan komentar ulasan terindeks.',
      badge: 'Live Co-Creation',
    },
    {
      icon: 'ai',
      title: 'Generator Visual AI & Smart Auto-Layout',
      desc: 'Ubah teks instruksi menjadi aset ilustrasi vektor, buat variasi tata letak responsif otomatis, dan perbaiki komposisi kontras warna dalam satu klik.',
      badge: 'AI Smart Layout',
    },
    {
      icon: 'docs',
      title: 'Ekspor Multi-Format Resolusi Cetak (Print-Ready)',
      desc: 'Unduh hasil karya ke dalam format vektor SVG tajam tanpa batas pembesaran, berkas PDF/X standar percetakan komersial, atau WebP ultra-ringan untuk situs web.',
      badge: 'Vector & PDF/X Ready',
    },
    {
      icon: 'cloud',
      title: 'Terhubung Mulus ke Goletin CloudSave & Office',
      desc: 'Buka dan sematkan materi grafis langsung ke dalam slide presentasi Goletin Slides atau dokumen Goletin Docs tanpa perlu ekspor-impor manual.',
      badge: 'Ecosystem Native',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Kebutuhan Instalasi Aplikasi',
      traditional: 'Memerlukan download software raksasa 5–10 GB yang membebani kapasitas SSD',
      studio: '100% Berbasis web peramban, buka URL seketika dan langsung siap berkarya',
    },
    {
      feature: 'Penyelarasan Brand Kit Tim',
      traditional: 'File panduan merek manual PDF yang sering diabaikan dan membuat logo keliru warna',
      studio: 'Palet warna dan aset resmi terkunci otomatis di sisi sistem untuk seluruh desainer',
    },
    {
      feature: 'Kolaborasi Antar Anggota Tim',
      traditional: 'Mengirim file versi final berulang-ulang via email/chat (v1_final_revisi_fix.ai)',
      studio: 'Kolaborasi langsung di satu tautan kanvas cloud dengan riwayat versi lengkap',
    },
    {
      feature: 'Biaya Lisensi Berlangganan',
      traditional: 'Sangat mahal dengan sistem langganan individual ratusan dolar per pengguna per tahun',
      studio: 'Hemat dan terintegrasi dalam paket langganan ruang kerja Goletin tanpa biaya tersembunyi',
    },
    {
      feature: 'Kerapian Integrasi Dokumen',
      traditional: 'Harus diekspor terpisah sebelum disisipkan ke slide presentasi atau laporan kerja',
      studio: 'Tersinkronisasi otomatis dengan Goletin Slides, Docs, dan Cloud Storage secara langsung',
    },
  ];

  const studioFaqItems: FaqItem[] = [
    {
      id: 'studio-compatibility',
      q: 'Apakah Design Studio dapat mengimpor file dari format SVG atau Figma?',
      a: 'Ya. Design Studio mendukung impor langsung file vektor standar SVG, paket aset icon, serta format file gambar umum (PNG, JPG, WebP). Kami juga sedang mengembangkan konverter format berkas desain populer lainnya.',
    },
    {
      id: 'studio-fonts',
      q: 'Dapatkah perusahaan mengunggah font kustom berlisensi milik sendiri?',
      a: 'Tentu bisa. Administrator Brand Kit dapat mengunggah berkas font berlisensi korporasi (.woff2, .ttf, .otf) ke perpustakaan tim sehingga seluruh anggota organisasi dapat menggunakannya secara seragam.',
    },
    {
      id: 'studio-storage',
      q: 'Di mana seluruh berkas kanvas desain disimpan?',
      a: 'Seluruh proyek desain tersimpan secara aman dan terenkripsi pada infrastruktur Goletin CloudSave yang beroperasi di pusat data Tier-4 domestik Indonesia sesuai standar perlindungan data pribadi UU PDP.',
    },
    {
      id: 'studio-commercial',
      q: 'Siapa yang memegang hak cipta atas materi desain yang dihasilkan?',
      a: 'Hak cipta dan kepemilikan intelektual atas seluruh karya desain, aset visual, dan materi pemasaran yang dibuat sepenuhnya menjadi milik pengguna atau perusahaan Anda tanpa royalti tambahan ke pihak Karsasoft.',
    },
    {
      id: 'studio-offline',
      q: 'Apakah ada mode offline jika koneksi internet terputus di tengah pekerjaan?',
      a: 'Ya, kanvas dilengkapi teknologi Service Worker lokal. Jika jaringan terputus sementara, perubahan desain tetap tersimpan di memori peramban lokal dan akan disinkronkan kembali ke cloud begitu koneksi pulih.',
    },
  ];

  const activeColors = paletteColors[theme];
  const activePreset = presetConfig[preset];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner (Standardized 520px, Matching /goletin/ai) */}
          <div className="ms-hero-wrapper goletin-design-hero-banner">
            <div className="goletin-design-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Kanvas Grafis &amp; Kolaborasi Visual Cloud</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Design Studio: Kreasi Visual &amp; Brand Kit Korporasi
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Ciptakan materi pemasaran profesional, diagram arsitektur teknologi, dan infografis laporan tahunan dengan kanvas grafis vektor berkecepatan tinggi tanpa instalasi perangkat lunak berat.
                </p>
                <div className="hero-cta-group">
                  <a href="#daftar-akses-awal" className="btn-primary">
                    <span>Daftar Akses Awal (Beta)</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#studio-playground" className="btn-secondary">
                    <span>Coba Studio Playground</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Mesin Vektor SVG Ringan</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Brand Kit Korporasi Terpusat</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>Kolaborasi Multiplayer Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Studio Playground Section */}
          <section id="studio-playground" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Playground Kanvas Interaktif</span>
              <h2 className="section-title">Eksplorasi Kanvas Desain &amp; Penyelarasan Merek</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Pilih format kanvas kebutuhan kerja, sesuaikan tema palet warna merek, dan rasakan kemudahan penyelarasan elemen visual sebelum merilis materi komunikasi publik.
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
                {/* Left: Design Configurator Controls */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '20px' }}>
                    Konfigurasi Kanvas &amp; Brand Kit
                  </h3>

                  {/* Preset Selector */}
                  <div style={{ marginBottom: '22px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)', display: 'block', marginBottom: '8px' }}>
                      Format &amp; Rasio Kanvas
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                      {(['slide', 'social', 'diagram', 'square'] as CanvasPreset[]).map((pKey) => {
                        const isSelected = preset === pKey;
                        const pObj = presetConfig[pKey];
                        return (
                          <button
                            key={pKey}
                            type="button"
                            onClick={() => setPreset(pKey)}
                            style={{
                              padding: '10px 12px',
                              borderRadius: '8px',
                              border: `1.5px solid ${isSelected ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                              backgroundColor: isSelected ? 'rgba(0, 120, 212, 0.08)' : '#FFFFFF',
                              color: isSelected ? 'var(--ms-blue-primary)' : 'var(--ms-text-heading)',
                              fontSize: '12px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              textAlign: 'left',
                            }}
                          >
                            <div>{pObj.title}</div>
                            <span style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>
                              {pObj.width}x{pObj.height} ({pObj.ratio})
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Color Palette Swatches */}
                  <div style={{ marginBottom: '22px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)', display: 'block', marginBottom: '8px' }}>
                      Pilihan Palet Merek (Brand Swatches)
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                      {(['azure', 'emerald', 'obsidian'] as PaletteTheme[]).map((tKey) => {
                        const tObj = paletteColors[tKey];
                        const isSelected = theme === tKey;
                        return (
                          <div
                            key={tKey}
                            onClick={() => setTheme(tKey)}
                            style={{
                              padding: '10px',
                              borderRadius: '8px',
                              border: `1.5px solid ${isSelected ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                              backgroundColor: isSelected ? 'rgba(0, 120, 212, 0.05)' : '#FFFFFF',
                              cursor: 'pointer',
                              textAlign: 'center',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '6px' }}>
                              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: tObj.primary }} />
                              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: tObj.secondary }} />
                            </div>
                            <div style={{ fontSize: '11.5px', fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                              {tKey === 'azure' ? 'Azure Blue' : tKey === 'emerald' ? 'Emerald' : 'Obsidian'}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Typography Selector */}
                  <div style={{ marginBottom: '22px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)', display: 'block', marginBottom: '6px' }}>
                      Gaya Tipografi Korporasi
                    </label>
                    <select
                      value={selectedFont}
                      onChange={(e) => setSelectedFont(e.target.value)}
                      className="mitra-form-input"
                    >
                      <option value="Segoe UI Variable">Segoe UI Variable (Modern Clean)</option>
                      <option value="Aptos Geometric">Aptos Geometric (Contemporary)</option>
                      <option value="Playfair Editorial">Playfair Editorial (Elegan &amp; Formal)</option>
                    </select>
                  </div>

                  {/* Export Format Selector */}
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)', display: 'block', marginBottom: '6px' }}>
                      Pilihan Format Ekspor Siap Pakai
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {(['png', 'svg', 'pdf'] as const).map((fmt) => (
                        <button
                          key={fmt}
                          type="button"
                          onClick={() => setExportFormat(fmt)}
                          style={{
                            flex: 1,
                            padding: '8px',
                            borderRadius: '6px',
                            border: `1px solid ${exportFormat === fmt ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                            backgroundColor: exportFormat === fmt ? 'rgba(0, 120, 212, 0.08)' : '#FFFFFF',
                            color: exportFormat === fmt ? 'var(--ms-blue-primary)' : 'var(--ms-text-heading)',
                            fontSize: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                          }}
                        >
                          {fmt === 'png' ? 'PNG (Web)' : fmt === 'svg' ? 'SVG (Vektor)' : 'PDF (Cetak)'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Live Artboard Mockup Canvas */}
                <div
                  style={{
                    backgroundColor: 'var(--ms-bg-subtle)',
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid var(--ms-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ms-blue-primary)' }}>
                        Pratinjau Kanvas Desain
                      </span>
                      <span className="badge badge-blue">
                        {activePreset.width} × {activePreset.height} px
                      </span>
                    </div>

                    {/* Simulated Interactive Artboard Canvas */}
                    <div
                      style={{
                        backgroundColor: activeColors.bg,
                        borderRadius: '8px',
                        padding: '24px',
                        border: `2px solid ${activeColors.primary}`,
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                        minHeight: '220px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Decorative Vector Shapes */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-30px',
                          right: '-30px',
                          width: '120px',
                          height: '120px',
                          borderRadius: '50%',
                          backgroundColor: activeColors.primary,
                          opacity: 0.15,
                        }}
                      />

                      {/* Header inside canvas */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                          <div
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '6px',
                              backgroundColor: activeColors.primary,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#FFFFFF',
                            }}
                          >
                            <Icon name="palette" size={16} />
                          </div>
                          <span style={{ fontSize: '11px', fontWeight: 700, color: activeColors.primary, textTransform: 'uppercase' }}>
                            Karsasoft Brand Asset
                          </span>
                        </div>
                        <h4
                          style={{
                            fontSize: '18px',
                            fontWeight: 700,
                            color: theme === 'obsidian' ? '#F8FAFC' : 'var(--ms-text-heading)',
                            fontFamily: selectedFont,
                            marginBottom: '6px',
                          }}
                        >
                          {activePreset.title}
                        </h4>
                        <p style={{ fontSize: '12px', color: theme === 'obsidian' ? '#94A3B8' : 'var(--ms-text-body)', margin: 0 }}>
                          {activePreset.desc}
                        </p>
                      </div>

                      {/* Footer Badge inside canvas */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 600, color: activeColors.secondary }}>
                          ● {activeColors.name}
                        </span>
                        <span
                          style={{
                            fontSize: '10px',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            backgroundColor: activeColors.primary,
                            color: '#FFFFFF',
                            fontWeight: 700,
                          }}
                        >
                          Ready to Export .{exportFormat}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: 'var(--ms-text-muted)', marginTop: '12px' }}>
                      <span>DPI: 300 (Print-Ready)</span>
                      <span>Color Space: sRGB / Display P3</span>
                      <span>Status: Auto-Saved to CloudSave</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <a
                      href="#daftar-akses-awal"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Minta Akses Awal Design Studio</span>
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
              <span className="section-eyebrow">Keunggulan Perangkat Desain</span>
              <h2 className="section-title">Kapabilitas Lengkap Goletin Design Studio</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Bebaskan kreativitas tim Anda dengan alat desain berbasis web yang memadukan kecepatan vektor, standarisasi merek korporasi, dan integrasi penyimpanan cloud aman.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {studioPillars.map((pillar, idx) => (
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
          <section id="komparasi-desain" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Perbandingan Efisiensi</span>
              <h2 className="section-title">Software Desain Tradisional vs Goletin Design Studio</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Ketahui bagaimana kolaborasi desain berbasis web menyederhanakan siklus tinjauan materi pemasaran dan presentasi bisnis Anda.
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
                      Aspek Alur Kerja Desain
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-text-muted)', width: '38%' }}>
                      Software Desain Berat Konvensional
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-blue-primary)', width: '38%' }}>
                      Goletin Design Studio Cloud
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
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px', color: 'var(--ms-text-body)', lineHeight: '19px', fontWeight: 500 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#107C41', flexShrink: 0, marginTop: '2px', display: 'inline-flex' }}>
                            <Icon name="check" size={15} color="#107C41" />
                          </span>
                          <span>{row.studio}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Early Access Waitlist Form */}
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
                <span className="section-eyebrow">Program Pratinjau Awal (Beta Preview)</span>
                <h2 className="section-title" style={{ fontSize: '24px', lineHeight: '32px' }}>
                  Daftarkan Tim Anda untuk Akses Beta Design Studio
                </h2>
                <p className="section-lead" style={{ fontSize: '14px' }}>
                  Coba kanvas grafis cloud, atur Brand Kit korporasi, dan rasakan kemudahan kolaborasi desain sebelum peluncuran resmi.
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
                    Pendaftaran Akses Awal Diterima!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ms-text-body)' }}>
                    Terima kasih, <strong>{formData.name}</strong> dari <strong>{formData.company}</strong>. Undangan pembuatan workspace tim dan aktivasi akses beta akan dikirimkan ke email <strong>{formData.email}</strong>.
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
                        placeholder="Contoh: Danang Prasetyo"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Email Kantor / Profesional *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="danang@perusahaan.co.id"
                        className="mitra-form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama Perusahaan / Organisasi *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="PT Mahakarya Media Nusantara"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Ukuran Tim Desain / Pemasaran
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="mitra-form-input"
                      >
                        <option value="1 - 5 Anggota Tim">1 - 5 Anggota Tim</option>
                        <option value="5 - 20 Anggota Tim">5 - 20 Anggota Tim</option>
                        <option value="20 - 50 Anggota Tim">20 - 50 Anggota Tim</option>
                        <option value="> 50 Anggota Tim (Enterprise)">&gt; 50 Anggota Tim (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Kebutuhan Desain Utama Tim Anda
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Contoh: Butuh kanvas kolaboratif untuk pembuatan materi presentasi eksekutif dan diagram arsitektur cloud tim teknis."
                      className="mitra-form-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14.5px' }}
                  >
                    <span>Ajukan Akses Awal Design Studio</span>
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
              <h2 className="section-title">Pertanyaan Seputar Design Studio</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar kompatibilitas format, hak cipta aset komersial, dan kustomisasi Brand Kit tim.
              </p>
            </div>
            <GoletinFaq items={studioFaqItems} countLabel="5 Tanya Jawab Design Studio" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Ruang Kreativitas Tim Modern
              </span>
              <h2 className="goletin-bottom-cta-title">
                Ciptakan Karya Visual Profesional Bersama Tim Anda
              </h2>
              <p className="goletin-bottom-cta-desc">
                Gabung sekarang untuk mencoba kemudahan desain grafis dan diagram arsitektur berbasis cloud bersama Goletin Design Studio.
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
