'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@/components/Icons';

// Inquiry Types Definition
const INQUIRY_TYPES = [
  {
    id: 'enterprise',
    label: 'Enterprise & Korporasi',
    icon: 'building',
    desc: 'Otomasi IFRS/PSAK, kepatuhan audit forensik, & private deployment.',
  },
  {
    id: 'pendidikan',
    label: 'Yayasan & Pendidikan',
    icon: 'team',
    desc: 'Yaycount ERP standar ISAK 35, LPJ BOS, & lisensi institusi nirlaba.',
  },
  {
    id: 'kap',
    label: 'Kantor Akuntan Publik',
    icon: 'calculator',
    desc: 'Audit sampling ISA 530, Benford’s Law ISA 240, & kertas kerja.',
  },
  {
    id: 'kemitraan',
    label: 'Kemitraan & Reseller',
    icon: 'users',
    desc: 'Margin bagi hasil hingga 35%, lisensi NFR, & dukungan presales.',
  },
];

const PRODUCT_OPTIONS = [
  { id: 'goletin-ai-office', label: 'Goletin AI & Workspace (Docs, Sheets, CloudSave)' },
  { id: 'yaycount-erp', label: 'Yaycount ERP (Akuntansi Yayasan ISAK 35 & Dana BOS)' },
  { id: 'ecl-pro', label: 'ECL Pro (Perhitungan CKPN IFRS 9 / PSAK 71)' },
  { id: 'lease-engine', label: 'Lease Engine (Akuntansi Sewa PSAK 73 / IFRS 16)' },
  { id: 'indotax', label: 'IndoTax (Perhitungan PPh 21 TER, PPN, & e-SPT)' },
  { id: 'sampling-jet-audit', label: 'Sampling Pro (ISA 530) & JET Pro (ISA 240 Benford)' },
  { id: 'full-ecosystem', label: 'Paket Komprehensif Seluruh Ekosistem Goletin' },
];

const DEPLOYMENT_MODELS = [
  { id: 'cloud', label: 'Sovereign Cloud (Tier-4 RI)' },
  { id: 'vpc', label: 'Dedicated Private VPC' },
  { id: 'onprem', label: 'On-Premise / Air-Gapped' },
];

const FAQ_ITEMS = [
  {
    q: 'Apakah sesi demonstrasi dan pengujian sandbox dikenakan biaya?',
    a: 'Tidak ada biaya apapun. Seluruh sesi demonstrasi live bersama Solution Architect dan akses sandbox Proof-of-Concept (PoC) selama 14 hari diberikan secara cuma-cuma tanpa komitmen pengikatan awal.',
  },
  {
    q: 'Bagaimana perlindungan kerahasiaan sebelum kami membagikan sampel data?',
    a: 'PT Karsa Solusi Teknologi siap menandatangani perjanjian Non-Disclosure Agreement (NDA) formal bertanda tangan digital resmi sebelum Anda memperlihatkan format kertas kerja, skema sewa, atau portofolio transaksi internal.',
  },
  {
    q: 'Apakah Karsasoft melayani pengadaan melalui e-Katalog / LPSE pemerintah?',
    a: 'Ya. Rangkaian modul perangkat lunak Karsasoft dirancang memenuhi arsitektur SPBE, memiliki kedaulatan data 100% di Indonesia, dan dapat diproses melalui skema pengadaan resmi instansi publik.',
  },
  {
    q: 'Berapa lama estimasi proses implementasi dan onboarding?',
    a: 'Untuk deployment Sovereign Cloud, sistem aktif dalam hitungan jam. Untuk instalasi On-Premise atau Private VPC perbankan, implementasi rata-rata selesai dalam 1–2 minggu kerja termasuk verifikasi formula matematis dan pelatihan staf.',
  },
  {
    q: 'Apakah data kami dijamin tidak keluar dari wilayah hukum Indonesia?',
    a: 'Mutlak. Seluruh data center fisik, replikasi cadangan (backup), dan komputasi Private AI berada di fasilitas Tier-4 Indonesia (Jakarta & Cibitung), patuh 100% pada UU Perlindungan Data Pribadi (UU PDP No. 27/2022).',
  },
];

function KontakContent() {
  const searchParams = useSearchParams();
  const tipeParam = searchParams.get('tipe') || searchParams.get('kebutuhan') || '';

  const [activeType, setActiveType] = useState<string>('enterprise');
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['goletin-ai-office']);
  const [deploymentPreference, setDeploymentPreference] = useState<string>('cloud');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    userCount: '10-50 Pengguna',
    message: '',
    requireNda: true,
  });

  // Sync query params if present
  useEffect(() => {
    if (tipeParam) {
      if (tipeParam.includes('pendidikan') || tipeParam.includes('yayasan')) {
        setActiveType('pendidikan');
        setSelectedProducts(['yaycount-erp']);
      } else if (tipeParam.includes('mitra') || tipeParam.includes('reseller')) {
        setActiveType('kemitraan');
      } else if (tipeParam.includes('kap') || tipeParam.includes('audit')) {
        setActiveType('kap');
        setSelectedProducts(['sampling-jet-audit']);
      } else if (tipeParam.includes('enterprise')) {
        setActiveType('enterprise');
      }
    }
  }, [tipeParam]);

  const handleProductToggle = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.length > 1
          ? prev.filter((id) => id !== productId)
          : prev
        : [...prev, productId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="section-padding" style={{ paddingTop: '24px' }}>
      <div className="container">
        {/* ====================================================================
            1. COMMAND CENTER EXECUTIVE HERO (Dark Slate & Luminous Mint)
            ==================================================================== */}
        <section className="kontak-hero-card">
          <div className="kontak-hero-grid">
            <div>
              <div className="kontak-hero-badge">
                <Icon name="shield" size={13} />
                <span>KONSULTASI & KEMITRAAN RESMI KARSASOFT</span>
              </div>
              <h1 className="kontak-hero-title">
                Diskusikan Kebutuhan Solusi & Kepatuhan Regulasi Bersama Kami
              </h1>
              <p className="kontak-hero-desc">
                Dari demonstrasi langsung modul produk, evaluasi kesiapan standar PSAK/IFRS, implementasi ERP yayasan, hingga pengujian sandbox Proof-of-Concept (PoC) — tim Solution Architect Karsasoft siap membantu penyusunan blueprint sistem Anda.
              </p>
            </div>

            {/* Quick Guarantees Box */}
            <div className="kontak-guarantees-card">
              <div className="kontak-guarantee-header">
                <span className="kontak-guarantee-tag">STANDAR LAYANAN KARSASOFT</span>
                <span className="kontak-guarantee-status">SLA 1x24 Jam Kerja</span>
              </div>
              <div className="kontak-guarantee-list">
                <div className="kontak-guarantee-item">
                  <div className="kontak-guarantee-icon">
                    <Icon name="check" size={14} />
                  </div>
                  <div>
                    <strong>Perlindungan NDA Formal</strong>
                    <p>Penandatanganan kerahasiaan sebelum pengujian sampel data.</p>
                  </div>
                </div>
                <div className="kontak-guarantee-item">
                  <div className="kontak-guarantee-icon">
                    <Icon name="check" size={14} />
                  </div>
                  <div>
                    <strong>Sandbox PoC Gratis 14 Hari</strong>
                    <p>Uji coba fungsionalitas dan akurasi formula tanpa komitmen awal.</p>
                  </div>
                </div>
                <div className="kontak-guarantee-item">
                  <div className="kontak-guarantee-icon">
                    <Icon name="check" size={14} />
                  </div>
                  <div>
                    <strong>100% Kedaulatan Data RI</strong>
                    <p>Infrastruktur fisik di Tier-4 Data Center Indonesia (UU PDP).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            2. MAIN CONSULTATION HUB (Split Layout)
            ==================================================================== */}
        <div className="kontak-main-layout">
          {/* Left Column: Direct Official Contact Channels & Assurance */}
          <div className="kontak-left-column">
            {/* Direct Contacts Card */}
            <div className="kontak-channels-card">
              <div className="kontak-card-title-group">
                <span className="kontak-eyebrow">KANAL RESMI</span>
                <h2 className="kontak-card-heading">Kantor & Tim Eksekutif</h2>
                <p className="kontak-card-sub">
                  Hubungi divisi terkait untuk respon cepat sesuai kebutuhan institusi Anda.
                </p>
              </div>

              <div className="kontak-channels-list">
                <div className="kontak-channel-item">
                  <div className="kontak-channel-icon-box">
                    <Icon name="mail" size={20} />
                  </div>
                  <div className="kontak-channel-details">
                    <div className="kontak-channel-label">Konsultasi Enterprise & Lisensi</div>
                    <a href="mailto:contact@karsasoft.com" className="kontak-channel-link">
                      contact@karsasoft.com
                    </a>
                    <div className="kontak-channel-hint">Respon dalam 1x24 jam kerja resmi</div>
                  </div>
                </div>

                <div className="kontak-channel-item">
                  <div className="kontak-channel-icon-box">
                    <Icon name="laptop" size={20} />
                  </div>
                  <div className="kontak-channel-details">
                    <div className="kontak-channel-label">Dukungan Pengguna Ekosistem Goletin</div>
                    <a href="mailto:support@goletin.com" className="kontak-channel-link">
                      support@goletin.com
                    </a>
                    <div className="kontak-channel-hint">Pusat bantuan teknis & tiket sistem</div>
                  </div>
                </div>

                <div className="kontak-channel-item">
                  <div className="kontak-channel-icon-box">
                    <Icon name="building" size={20} />
                  </div>
                  <div className="kontak-channel-details">
                    <div className="kontak-channel-label">Entitas Hukum & Kantor Pusat</div>
                    <div className="kontak-channel-text">PT Karsa Solusi Teknologi</div>
                    <div className="kontak-channel-hint">Penyelenggara Sistem Elektronik (PSE) Terdaftar di Indonesia</div>
                  </div>
                </div>

                <div className="kontak-channel-item">
                  <div className="kontak-channel-icon-box">
                    <Icon name="lock" size={20} />
                  </div>
                  <div className="kontak-channel-details">
                    <div className="kontak-channel-label">Jam Operasional Konsultan</div>
                    <div className="kontak-channel-text">Senin – Jumat: 08:30 – 17:30 WIB</div>
                    <div className="kontak-channel-hint">Infrastruktur Cloud Goletin: 24/7 Monitoring Aktif</div>
                  </div>
                </div>
              </div>

              {/* Portal link */}
              <div className="kontak-portal-box">
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--ms-text-heading)' }}>
                    Portal Layanan Aplikasi
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--ms-text-muted)' }}>
                    Akses langsung rangkaian produk Goletin
                  </div>
                </div>
                <a
                  href="https://goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '12px' }}
                >
                  <span>Buka goletin.com</span>
                  <Icon name="external-link" size={13} />
                </a>
              </div>
            </div>

            {/* Quick Consultation Checklist */}
            <div className="kontak-security-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Icon name="shield" size={20} />
                <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0, color: 'var(--ms-text-heading)' }}>
                  Prosedur Konsultasi Karsasoft
                </h3>
              </div>
              <ul className="kontak-sec-steps">
                <li>
                  <span className="kontak-sec-step-num">1</span>
                  <span><strong>Pengajuan:</strong> Isi formulir dengan modul dan jumlah pengguna yang direncanakan.</span>
                </li>
                <li>
                  <span className="kontak-sec-step-num">2</span>
                  <span><strong>NDA & Pra-Penjadwalan:</strong> Kami menyiapkan NDA jika Anda perlu mengevaluasi data audit riil.</span>
                </li>
                <li>
                  <span className="kontak-sec-step-num">3</span>
                  <span><strong>Sesi Demo 45 Menit:</strong> Demonstrasi teknis langsung bersama Solution Architect Karsasoft.</span>
                </li>
                <li>
                  <span className="kontak-sec-step-num">4</span>
                  <span><strong>Aktivasi Sandbox PoC:</strong> Akses mandiri untuk tim akuntan atau auditor Anda selama 14 hari.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Demo Form */}
          <div className="kontak-right-column">
            <div className="kontak-form-card">
              {submitted ? (
                /* Success State */
                <div className="kontak-success-state">
                  <div className="kontak-success-icon-box">
                    <Icon name="check" size={32} />
                  </div>
                  <h2 className="kontak-success-title">
                    Permintaan Konsultasi Berhasil Terkirim!
                  </h2>
                  <p className="kontak-success-desc">
                    Terima kasih, <strong>{formData.name || 'Bapak/Ibu'}</strong>. Data permintaan Anda telah diterima oleh perwakilan Solution Architect PT Karsa Solusi Teknologi.
                  </p>

                  <div className="kontak-success-summary">
                    <div className="kontak-summary-row">
                      <span>Organisasi:</span>
                      <strong>{formData.company || 'Institusi Pemohon'}</strong>
                    </div>
                    <div className="kontak-summary-row">
                      <span>Kategori Kebutuhan:</span>
                      <strong>
                        {INQUIRY_TYPES.find((t) => t.id === activeType)?.label}
                      </strong>
                    </div>
                    <div className="kontak-summary-row">
                      <span>Model Deployment:</span>
                      <strong>
                        {DEPLOYMENT_MODELS.find((d) => d.id === deploymentPreference)?.label}
                      </strong>
                    </div>
                    <div className="kontak-summary-row">
                      <span>Status NDA:</span>
                      <strong style={{ color: '#007D65' }}>
                        {formData.requireNda ? 'Permintaan NDA Terlampir' : 'Standar Tanpa NDA'}
                      </strong>
                    </div>
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--ms-text-muted)', marginBottom: '24px' }}>
                    Salinan konfirmasi telah kami kirimkan ke <strong>{formData.email}</strong>. Perwakilan kami akan menghubungi Anda via email atau WhatsApp dalam 1x24 jam kerja.
                  </p>

                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => setSubmitted(false)}
                    >
                      <span>Kirim Permintaan Lain</span>
                      <Icon name="arrow-right" size={15} />
                    </button>
                    <Link href="/solusi" className="btn-secondary">
                      <span>Eksplorasi Solusi Industri</span>
                    </Link>
                  </div>
                </div>
              ) : (
                /* The Interactive Form */
                <form onSubmit={handleSubmit} className="kontak-form-body">
                  <div className="kontak-form-header">
                    <span className="kontak-form-badge">FORMULIR KONSULTASI RESMI</span>
                    <h2 className="kontak-form-title">Jadwalkan Konsultasi Solusi & Uji Coba PoC</h2>
                    <p className="kontak-form-subtitle">
                      Pilih kategori profil organisasi Anda untuk mendapatkan alur konsultasi yang paling tepat.
                    </p>
                  </div>

                  {/* 1. Inquiry Type Selector Tabs */}
                  <div className="kontak-type-grid">
                    {INQUIRY_TYPES.map((type) => {
                      const isSelected = activeType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setActiveType(type.id)}
                          className={`kontak-type-btn ${isSelected ? 'active' : ''}`}
                        >
                          <div className="kontak-type-btn-top">
                            <span className="kontak-type-btn-icon">
                              <Icon name={type.icon} size={18} />
                            </span>
                            <span className="kontak-type-btn-radio">
                              {isSelected ? <span className="kontak-radio-dot" /> : null}
                            </span>
                          </div>
                          <div className="kontak-type-btn-label">{type.label}</div>
                          <div className="kontak-type-btn-desc">{type.desc}</div>
                        </button>
                      );
                    })}
                  </div>

                  {/* 2. Contact Person Information */}
                  <div className="kontak-form-section-title">
                    <span>1. Informasi Pemohon & Organisasi</span>
                  </div>

                  <div className="kontak-inputs-grid">
                    <div>
                      <label className="kontak-input-label">
                        Nama Lengkap & Gelar *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso, S.E., Ak., CA"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="kontak-text-input"
                      />
                    </div>

                    <div>
                      <label className="kontak-input-label">
                        Email Resmi Institusi *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.co.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="kontak-text-input"
                      />
                    </div>

                    <div>
                      <label className="kontak-input-label">
                        Nama Perusahaan / Yayasan / Instansi *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="PT / Yayasan / Bank / BUMN / KAP"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="kontak-text-input"
                      />
                    </div>

                    <div>
                      <label className="kontak-input-label">
                        Nomor WhatsApp / Telepon Kantor *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="kontak-text-input"
                      />
                    </div>
                  </div>

                  {/* 3. Product Selection Chips */}
                  <div className="kontak-form-section-title" style={{ marginTop: '24px' }}>
                    <span>2. Modul Produk yang Diminati (Bisa pilih lebih dari satu)</span>
                  </div>

                  <div className="kontak-chips-container">
                    {PRODUCT_OPTIONS.map((prod) => {
                      const isChecked = selectedProducts.includes(prod.id);
                      return (
                        <button
                          key={prod.id}
                          type="button"
                          onClick={() => handleProductToggle(prod.id)}
                          className={`kontak-chip-btn ${isChecked ? 'active' : ''}`}
                        >
                          <span className={`kontak-chip-checkbox ${isChecked ? 'checked' : ''}`}>
                            {isChecked && <Icon name="check" size={11} />}
                          </span>
                          <span>{prod.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* 4. Deployment Model & User Scale */}
                  <div className="kontak-form-section-title" style={{ marginTop: '24px' }}>
                    <span>3. Preferensi Arsitektur & Skala Pengguna</span>
                  </div>

                  <div className="kontak-inputs-grid" style={{ marginBottom: '20px' }}>
                    <div>
                      <label className="kontak-input-label">
                        Pilihan Model Deployment
                      </label>
                      <select
                        value={deploymentPreference}
                        onChange={(e) => setDeploymentPreference(e.target.value)}
                        className="kontak-select-input"
                      >
                        {DEPLOYMENT_MODELS.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="kontak-input-label">
                        Perkiraan Jumlah Lisensi / Pengguna
                      </label>
                      <select
                        value={formData.userCount}
                        onChange={(e) => setFormData({ ...formData, userCount: e.target.value })}
                        className="kontak-select-input"
                      >
                        <option value="1-10 Pengguna">1 – 10 Pengguna (Tim Percontohan)</option>
                        <option value="10-50 Pengguna">10 – 50 Pengguna (Divisi Finansial / Internal)</option>
                        <option value="50-250 Pengguna">50 – 250 Pengguna (Organisasi Menengah)</option>
                        <option value="250+ Pengguna">250+ Pengguna (Konglomerasi / Enterprise Wide)</option>
                      </select>
                    </div>
                  </div>

                  {/* 5. Message & Requirement Note */}
                  <div style={{ marginBottom: '20px' }}>
                    <label className="kontak-input-label">
                      Catatan Kebutuhan Spesifik / Tantangan Regulasi Saat Ini
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Jelaskan kebutuhan Anda, seperti kepatuhan PSAK tertentu, pelaporan dana BOS, audit forensik Benford, atau jadwal demonstrasi live yang diharapkan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="kontak-textarea-input"
                    />
                  </div>

                  {/* NDA Checkbox Assurance */}
                  <div className="kontak-nda-checkbox-wrap">
                    <label className="kontak-nda-label">
                      <input
                        type="checkbox"
                        checked={formData.requireNda}
                        onChange={(e) => setFormData({ ...formData, requireNda: e.target.checked })}
                        className="kontak-checkbox"
                      />
                      <span>
                        <strong>Ajukan Perjanjian Kerahasiaan (NDA) Formal</strong> sebelum sesi demonstrasi mendalam dan pengujian kertas kerja.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button (Locked Button System) */}
                  <div style={{ marginTop: '24px' }}>
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px 24px', fontSize: '15px' }}>
                      <span>Kirim Permintaan Konsultasi & Jadwalkan PoC</span>
                      <Icon name="arrow-right" size={16} />
                    </button>
                    <p className="kontak-submit-disclaimer">
                      Dengan mengirimkan formulir ini, Anda menyetujui kebijakan privasi data Karsasoft. Data Anda tidak akan dibagikan kepada pihak ketiga.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ====================================================================
            3. FREQUENTLY ASKED QUESTIONS (Interactive Accordion)
            ==================================================================== */}
        <section style={{ marginTop: '72px', marginBottom: '64px' }}>
          <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Pertanyaan yang Sering Diajukan</span>
            <h2 className="section-title">Informasi Seputar Konsultasi & Pengadaan</h2>
            <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Transparansi proses pengujian solusi, kepastian hukum kerahasiaan, serta skema deployment untuk institusi Anda.
            </p>
          </div>

          <div className="kontak-faq-container">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`kontak-faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="kontak-faq-question-btn"
                  >
                    <span className="kontak-faq-q-text">{item.q}</span>
                    <span className={`kontak-faq-chevron ${isOpen ? 'rotated' : ''}`}>
                      <Icon name="chevron-down" size={16} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="kontak-faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ====================================================================
            4. QUICK JUMP TO OTHER PORTALS
            ==================================================================== */}
        <div className="kontak-quick-jumps">
          <div className="kontak-jump-card">
            <div className="kontak-jump-icon">
              <Icon name="laptop" size={20} />
            </div>
            <div>
              <div className="kontak-jump-title">Pusat Bantuan & Tiket Pengguna</div>
              <p className="kontak-jump-desc">Panduan teknis, dokumentasi API, dan status server cloud Goletin.</p>
              <Link href="/goletin/dukungan" className="kontak-jump-link">
                <span>Kunjungi Dukungan Teknis</span>
                <Icon name="arrow-right" size={13} />
              </Link>
            </div>
          </div>

          <div className="kontak-jump-card">
            <div className="kontak-jump-icon">
              <Icon name="building" size={20} />
            </div>
            <div>
              <div className="kontak-jump-title">Katalog Solusi Vertikal Industri</div>
              <p className="kontak-jump-desc">Blueprint arsitektur untuk perbankan, yayasan, kantor akuntan publik, dan SPBE.</p>
              <Link href="/solusi" className="kontak-jump-link">
                <span>Lihat Solusi Industri</span>
                <Icon name="arrow-right" size={13} />
              </Link>
            </div>
          </div>

          <div className="kontak-jump-card">
            <div className="kontak-jump-icon">
              <Icon name="users" size={20} />
            </div>
            <div>
              <div className="kontak-jump-title">Program Kemitraan & Reseller</div>
              <p className="kontak-jump-desc">Margin bagi hasil hingga 35%, lisensi NFR internal, dan dukungan presales.</p>
              <Link href="/goletin/mitra" className="kontak-jump-link">
                <span>Pelajari Program Mitra</span>
                <Icon name="arrow-right" size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KontakClient() {
  return (
    <Suspense fallback={<div className="section-padding"><div className="container" style={{ textAlign: 'center', padding: '64px 0' }}>Memuat formulir konsultasi Karsasoft...</div></div>}>
      <KontakContent />
    </Suspense>
  );
}
