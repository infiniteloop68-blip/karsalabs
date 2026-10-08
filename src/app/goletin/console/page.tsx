'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

type ApiEndpoint = 'ai' | 'ecl' | 'tax' | 'benford';
type CodeLang = 'curl' | 'ts' | 'python' | 'go';

export default function GoletinConsoleProductPage() {
  const [endpoint, setEndpoint] = useState<ApiEndpoint>('ai');
  const [lang, setLang] = useState<CodeLang>('ts');
  const [monthlyVolume, setMonthlyVolume] = useState<number>(250000); // 250k req
  const [rateLimit, setRateLimit] = useState<number>(300); // 300 req/sec
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Lead Architect / CTO',
    notes: '',
  });

  const endpointDetails: Record<
    ApiEndpoint,
    {
      title: string;
      path: string;
      method: string;
      desc: string;
      latencyMs: number;
      tokenCost: number;
      responseJson: string;
    }
  > = {
    ai: {
      title: 'Sintesis Dokumen AI & Ekstraksi Finansial',
      path: '/v1/ai/synthesize',
      method: 'POST',
      desc: 'Menganalisis berkas PDF laporan tahunan atau audit, mengekstrak tabel neraca dan rasio keuangan penting.',
      latencyMs: 145,
      tokenCost: 450,
      responseJson: `{
  "status": "success",
  "document_id": "doc_99a8f2",
  "data": {
    "total_revenue": 145000000000,
    "ebitda": 32400000000,
    "current_ratio": 2.14,
    "audit_opinion": "Unqualified / Wajar Tanpa Pengecualian"
  },
  "confidence_score": 0.985
}`,
    },
    ecl: {
      title: 'Kalkulasi CKPN PSAK 71 / IFRS 9',
      path: '/v1/financial/ecl',
      method: 'POST',
      desc: 'Menghitung Expected Credit Loss multi-stage (PD x LGD x EAD) untuk ribuan portofolio debitur perbankan.',
      latencyMs: 38,
      tokenCost: 80,
      responseJson: `{
  "status": "success",
  "calculation_id": "ecl_772b11",
  "total_exposure": 8500000000,
  "stage_1_allowance": 42500000,
  "stage_2_allowance": 127500000,
  "stage_3_allowance": 350000000,
  "total_ckpn": 520000000
}`,
    },
    tax: {
      title: 'Perhitungan PPh 21 Tarif Efektif Rata-rata (TER)',
      path: '/v1/tax/pph21-ter',
      method: 'POST',
      desc: 'Validasi penghitungan pajak penghasilan pasal 21 berdasarkan skema Kategori TER A/B/C PP 58/2023.',
      latencyMs: 24,
      tokenCost: 25,
      responseJson: `{
  "status": "success",
  "employee_id": "EMP-0412",
  "gross_salary": 14500000,
  "ptkp_status": "K/1",
  "ter_category": "A",
  "effective_rate": "6.0%",
  "monthly_tax_deduction": 870000
}`,
    },
    benford: {
      title: 'Audit Forensik Uji Hukum Benford ISA 240',
      path: '/v1/audit/benford-verify',
      method: 'POST',
      desc: 'Menguji distribusi digit pertama dan kedua populasi jurnal buku besar untuk mendeteksi anomali kecurangan.',
      latencyMs: 52,
      tokenCost: 110,
      responseJson: `{
  "status": "success",
  "sample_count": 15000,
  "chi_square": 14.82,
  "p_value": 0.062,
  "anomaly_detected": false,
  "verdict": "Conforms with Natural Distribution"
}`,
    },
  };

  const getCodeSnippet = (ep: ApiEndpoint, l: CodeLang): string => {
    const epObj = endpointDetails[ep];
    if (l === 'curl') {
      return `curl -X ${epObj.method} "https://api.goletin.com${epObj.path}" \\
  -H "Authorization: Bearer glt_live_9a87f21b..." \\
  -H "Content-Type: application/json" \\
  -d '{"client_id": "prod_corp_01", "scope": "default"}'`;
    }
    if (l === 'ts') {
      return `import { GoletinClient } from '@karsasoft/goletin-sdk';

const goletin = new GoletinClient({
  apiKey: process.env.GOLETIN_API_KEY,
  environment: 'production'
});

const response = await goletin.${ep === 'ai' ? 'ai.synthesize' : ep === 'ecl' ? 'financial.calculateECL' : ep === 'tax' ? 'tax.calculatePPh21' : 'audit.verifyBenford'}({
  referenceId: 'ref_2026_01',
  timestamp: Date.now()
});

console.log(response.data);`;
    }
    if (l === 'python') {
      return `from goletin import GoletinClient

client = GoletinClient(api_key="glt_live_9a87f21b...")

response = client.${ep === 'ai' ? 'ai.synthesize' : ep === 'ecl' ? 'financial.calculate_ecl' : ep === 'tax' ? 'tax.calculate_pph21' : 'audit.verify_benford'}(
    reference_id="ref_2026_01"
)

print(response.json())`;
    }
    return `package main

import (
    "fmt"
    "github.com/karsasoft/goletin-go-sdk"
)

func main() {
    client := goletin.NewClient("glt_live_9a87f21b...")
    resp, err := client.${ep === 'ai' ? 'SynthesizeDocument' : ep === 'ecl' ? 'CalculateECL' : ep === 'tax' ? 'CalculatePPh21' : 'VerifyBenford'}(...)
    if err != nil {
        panic(err)
    }
    fmt.Println(resp.Status)
}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const consolePillars = [
    {
      icon: 'terminal',
      title: 'Manajemen Kunci API & Lingkungan Granular',
      desc: 'Buat API keys terpisah untuk staging dan production dengan pembatasan hak akses berbasis IP Whitelisting, batasan domain CORS, serta tanggal kedaluwarsa otomatis.',
      badge: 'Granular Scopes',
    },
    {
      icon: 'saas',
      title: 'Webhook Gateway Berkecepatan Tinggi',
      desc: 'Terima notifikasi real-time saat laporan selesai diproses, transaksi kas dibukukan, atau pengujian jurnal selesai dengan sistem antrean retry otomatis berstandar Exponential Backoff.',
      badge: 'Event-Driven Webhooks',
    },
    {
      icon: 'analytics',
      title: 'Telemetri Real-Time & Pemantauan Latensi P99',
      desc: 'Pantau grafik pemanggilan endpoint, tingkat keberhasilan HTTP status code, rata-rata durasi respons, serta batas kuota token model AI secara transparan.',
      badge: 'P99 Latency Telemetry',
    },
    {
      icon: 'code',
      title: 'SDK Multi-Bahasa Siap Pakai',
      desc: 'Percepat integrasi sistem backend dengan SDK resmi yang terawat rapi untuk TypeScript/Node.js, Python, Go, Java, C# .NET, dan PHP dengan type definitions lengkap.',
      badge: 'Multi-Language SDKs',
    },
    {
      icon: 'security',
      title: 'Enkripsi mTLS & Kepatuhan Keamanan Perbankan',
      desc: 'Mendukung mutual TLS (mTLS) handshake, otentikasi OAuth 2.0 / JWT dengan rotasi kunci berkala, serta sertifikasi ISO 27001 dan audit kepatuhan SOC 2 Type II.',
      badge: 'mTLS & Zero Trust',
    },
    {
      icon: 'building',
      title: 'Opsi Deployment On-Premise Air-Gapped',
      desc: 'Jalankan gateway Goletin Console secara lokal di dalam intranet data center perusahaan Anda sendiri tanpa koneksi ke internet luar untuk kepatuhan kedaulatan data perbankan.',
      badge: 'Air-Gapped Gateway',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Kecepatan Implementasi',
      manual: 'Membangun konektor API sendiri dari nol memakan waktu 3–6 bulan tim engineering',
      console: 'Integrasi langsung dalam hitungan jam dengan SDK resmi dan dokumentasi OpenAPI 3.0',
    },
    {
      feature: 'Manajemen Kuota & Rate Limiting',
      manual: 'Rawan server backend down karena kebanjiran request tanpa sistem antrean token teratur',
      console: 'Proteksi Rate Limiting cerdas dan alokasi anggaran kuota token per tim/departemen',
    },
    {
      feature: 'Penyampaian Notifikasi Event',
      manual: 'Polling berulang yang membebani database operasional dan lambat mendeteksi status',
      console: 'Webhook asinkron real-time dengan jaminan pengiriman pesan (At-Least-Once Delivery)',
    },
    {
      feature: 'Jejak Audit Aktivitas Pengembang',
      manual: 'Log server terfragmentasi dan sulit ditelusuri saat terjadi insiden kebocoran kredensial',
      console: 'Audit trail terpusat mencatat setiap pembuatan, rotasi, dan pembatalan kunci API',
    },
    {
      feature: 'Dukungan Lingkungan Sandbox',
      manual: 'Risiko tinggi menguji kode langsung di database produksi yang rentan merusak data akuntansi',
      console: 'Sandbox staging mandiri dengan data tiruan representatif yang aman untuk pengujian',
    },
  ];

  const consoleFaqItems: FaqItem[] = [
    {
      id: 'console-pricing',
      q: 'Bagaimana model penetapan biaya (pricing model) untuk pemanggilan Goletin API?',
      a: 'Goletin Console menggunakan model pay-as-you-go berbasis volume panggilan API dan konsumsi token model AI. Tersedia paket Starter gratis bulanan untuk developer, serta paket Enterprise berskala besar dengan komitmen volume diskon dan SLA uptime 99.99%.',
    },
    {
      id: 'console-openapi',
      q: 'Apakah tersedia spesifikasi dokumentasi OpenAPI / Swagger yang dapat diimpor ke Postman?',
      a: 'Ya, seluruh endpoint Goletin Console mematuhi standar OpenAPI 3.0. Anda dapat langsung mengunduh berkas schema JSON/YAML atau mengekspor koleksi Postman resmi untuk pengujian cepat.',
    },
    {
      id: 'console-onprem',
      q: 'Apakah Goletin Console dapat diintegrasikan dengan core banking atau ERP lokal on-premise?',
      a: 'Sangat bisa. Gateway API dapat dipasang di server Kubernetes atau Docker on-premise perusahaan Anda, menjamin pemrosesan transaksi akuntansi dan perbankan tetap berada di dalam jaringan privat institusi Anda.',
    },
    {
      id: 'console-limits',
      q: 'Berapa batasan rate limit standar untuk akun developer enterprise?',
      a: 'Akun produksi enterprise standar memiliki batasan 500 requests per detik (RPS) dengan burst allowance hingga 1.000 RPS. Batasan ini dapat dinaikkan sesuai kebutuhan volume transaksi korporasi Anda.',
    },
    {
      id: 'console-support',
      q: 'Bagaimana dukungan teknis bagi tim pengembang yang sedang melakukan integrasi?',
      a: 'Pelanggan enterprise mendapatkan channel Slack/Teams dedicated bersama tim Solution Architect dan Core Engineering Karsasoft dengan waktu respons SLA di bawah 30 menit untuk isu kritis.',
    },
  ];

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* Hero Banner (Standardized 520px, Matching /goletin/ai) */}
          <div className="ms-hero-wrapper goletin-console-hero-banner">
            <div className="goletin-console-hero-mobile-art" aria-hidden="true" />
            <div className="ms-hero-container">
              <div className="ms-hero-card" style={{ maxWidth: '560px' }}>
                <span className="section-eyebrow">Pusat Kendali Pengembang Enterprise</span>
                <h1 className="hero-headline" style={{ fontSize: '38px', lineHeight: '46px' }}>
                  Goletin Console: Developer API Hub &amp; Cloud Platform
                </h1>
                <p className="hero-description" style={{ fontSize: '15px', lineHeight: '22px' }}>
                  Kelola integrasi microservices, generate API keys aman, pantau kuota token AI, dan konfigurasi webhook gateway berkecepatan tinggi dengan jaminan SLA 99.99%.
                </p>
                <div className="hero-cta-group">
                  <a
                    href="https://console.goletin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Buka Goletin Console Web</span>
                    <Icon name="external-link" size={15} />
                  </a>
                  <a href="#api-playground" className="btn-secondary">
                    <span>Coba API Playground</span>
                  </a>
                </div>
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>REST &amp; GraphQL Ready</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>OpenAPI 3.0 Standard</span>
                  </div>
                  <div className="trust-item">
                    <Icon name="check" size={14} className="trust-icon-check" />
                    <span>SLA 99.99% Enterprise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive API Sandbox & Playground */}
          <section id="api-playground" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Playground Pengembang Interaktif</span>
              <h2 className="section-title">Eksplorasi Endpoint API &amp; Simulasi Respons Sistem</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Pilih endpoint mikro-servis Goletin, amati cuplikan kode dalam bahasa pemrograman favorit Anda, dan lihat simulasi respons JSON berlatensi rendah secara langsung.
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
                {/* Left: Endpoint Chooser & Request Simulator */}
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ms-text-heading)', marginBottom: '20px' }}>
                    Katalog Endpoint Mikro-servis
                  </h3>

                  <div style={{ display: 'grid', gap: '10px', marginBottom: '24px' }}>
                    {(['ai', 'ecl', 'tax', 'benford'] as ApiEndpoint[]).map((epKey) => {
                      const item = endpointDetails[epKey];
                      const isSelected = endpoint === epKey;
                      return (
                        <div
                          key={epKey}
                          onClick={() => setEndpoint(epKey)}
                          style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: `1.5px solid ${isSelected ? 'var(--ms-blue-primary)' : 'var(--ms-border)'}`,
                            backgroundColor: isSelected ? 'rgba(0, 120, 212, 0.05)' : '#FFFFFF',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: 800,
                                padding: '2px 6px',
                                borderRadius: '4px',
                                backgroundColor: item.method === 'POST' ? '#107C41' : '#0078D4',
                                color: '#FFFFFF',
                              }}
                            >
                              {item.method}
                            </span>
                            <span style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'monospace', color: 'var(--ms-text-heading)' }}>
                              {item.path}
                            </span>
                          </div>
                          <div style={{ fontSize: '12px', color: 'var(--ms-text-muted)' }}>
                            {item.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Volume Slider */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Simulasi Volume Permintaan Bulanan
                      </label>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                        {monthlyVolume.toLocaleString('id-ID')} Panggilan / bln
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50000}
                      max={2000000}
                      step={50000}
                      value={monthlyVolume}
                      onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                    />
                  </div>

                  {/* Rate Limit Slider */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-body)' }}>
                        Ambang Batas Kuota Kecepatan (Rate Limit)
                      </label>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ms-blue-primary)' }}>
                        {rateLimit} RPS (Req / Sec)
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={1000}
                      step={50}
                      value={rateLimit}
                      onChange={(e) => setRateLimit(Number(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--ms-blue-primary)' }}
                    />
                  </div>
                </div>

                {/* Right: Code Snippets & Response Terminal */}
                <div
                  style={{
                    backgroundColor: '#0F172A',
                    borderRadius: '10px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                    border: '1px solid #1E293B',
                  }}
                >
                  <div>
                    {/* Language Selector Bar */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', borderBottom: '1px solid #334155', paddingBottom: '12px' }}>
                      {(['ts', 'curl', 'python', 'go'] as CodeLang[]).map((l) => (
                        <button
                          key={l}
                          type="button"
                          onClick={() => setLang(l)}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: lang === l ? '#38BDF8' : 'transparent',
                            color: lang === l ? '#0F172A' : '#94A3B8',
                            fontSize: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          {l === 'ts' && 'TypeScript'}
                          {l === 'curl' && 'cURL'}
                          {l === 'python' && 'Python'}
                          {l === 'go' && 'Go'}
                        </button>
                      ))}
                      <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#4ADE80', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        ● API Online (42ms)
                      </span>
                    </div>

                    {/* Code Snippet Box */}
                    <pre
                      style={{
                        backgroundColor: '#020617',
                        borderRadius: '6px',
                        padding: '14px',
                        color: '#E2E8F0',
                        fontSize: '11.5px',
                        fontFamily: 'Consolas, monospace',
                        lineHeight: '1.6',
                        overflowX: 'auto',
                        marginBottom: '16px',
                        border: '1px solid #1E293B',
                      }}
                    >
                      {getCodeSnippet(endpoint, lang)}
                    </pre>

                    {/* Simulated JSON Response */}
                    <div style={{ marginBottom: '8px', fontSize: '11.5px', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.5px' }}>
                      SIMULASI RESPONS HTTP 200 OK:
                    </div>
                    <pre
                      style={{
                        backgroundColor: '#020617',
                        borderRadius: '6px',
                        padding: '14px',
                        color: '#A5F3FC',
                        fontSize: '11px',
                        fontFamily: 'Consolas, monospace',
                        lineHeight: '1.5',
                        overflowX: 'auto',
                        border: '1px solid #1E293B',
                        margin: 0,
                      }}
                    >
                      {endpointDetails[endpoint].responseJson}
                    </pre>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <a
                      href="https://console.goletin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Buka Portal Pengembang Lengkap</span>
                      <Icon name="external-link" size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6 Core Pillars */}
          <section id="fitur-unggulan" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '40px' }}>
              <span className="section-eyebrow">Arsitektur Kelas Enterprise</span>
              <h2 className="section-title">Kapabilitas Lengkap Gateway Goletin Console</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Dirancang khusus bagi tim engineering korporasi, integrasi perbankan, dan pengembang SaaS yang membutuhkan keandalan infrastruktur tanpa kompromi.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {consolePillars.map((pillar, idx) => (
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
          <section id="komparasi-api" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Analisis Nilai Teknis</span>
              <h2 className="section-title">Integrasi Manual Tradisional vs Goletin Console</h2>
              <p className="section-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
                Percepat peluncuran produk dan hemat ratusan jam kerja engineering dengan gateway API terkelola penuh.
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
                      Aspek Arsitektur API
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-text-muted)', width: '38%' }}>
                      Integrasi Manual / Ad-Hoc
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: 700, color: 'var(--ms-blue-primary)', width: '38%' }}>
                      Goletin Console API Hub
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
                          <span>{row.manual}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px', color: 'var(--ms-text-body)', lineHeight: '19px', fontWeight: 500 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#107C41', flexShrink: 0, marginTop: '2px', display: 'inline-flex' }}>
                            <Icon name="check" size={15} color="#107C41" />
                          </span>
                          <span>{row.console}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Developer Access Request Form */}
          <section id="daftar-developer" style={{ marginBottom: '64px' }}>
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
                <span className="section-eyebrow">Daftar Kunci Akses Pengembang</span>
                <h2 className="section-title" style={{ fontSize: '24px', lineHeight: '32px' }}>
                  Mulai Integrasikan Goletin API ke Produk Anda
                </h2>
                <p className="section-lead" style={{ fontSize: '14px' }}>
                  Dapatkan kunci API sandbox pengujian dan panduan integrasi sistem bersama tim Solution Architect Karsasoft.
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
                    Kredensial Sandbox Telah Dibuat
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ms-text-body)' }}>
                    Terima kasih, <strong>{formData.name}</strong> dari <strong>{formData.company}</strong>. Kredensial sandbox staging dan panduan integrasi telah dikirimkan ke <strong>{formData.email}</strong>.
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
                        placeholder="Contoh: Pratama Wicaksana"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Email Kantor / Developer *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="pratama@startup.co.id"
                        className="mitra-form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Nama Perusahaan / Startup *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="PT Integrasi Teknologi Mandiri"
                        className="mitra-form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                        Peran Teknis
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="mitra-form-input"
                      >
                        <option value="Lead Architect / CTO">Lead Architect / CTO</option>
                        <option value="Backend Software Engineer">Backend Software Engineer</option>
                        <option value="DevOps & Cloud Engineer">DevOps &amp; Cloud Engineer</option>
                        <option value="Product Manager">Product Manager</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--ms-text-heading)', marginBottom: '6px' }}>
                      Rencana Kebutuhan Integrasi API
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Contoh: Ingin mengintegrasikan mesin ekstraksi dokumen AI dan perhitungan pajak PPh 21 TER ke dalam aplikasi HR SaaS internal kami."
                      className="mitra-form-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14.5px' }}
                  >
                    <span>Dapatkan Kredensial Sandbox API</span>
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
              <h2 className="section-title">Pertanyaan Seputar Goletin Console</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi seputar kuota panggilan API, kepatuhan mTLS, dan arsitektur microservices.
              </p>
            </div>
            <GoletinFaq items={consoleFaqItems} countLabel="5 Tanya Jawab Goletin Console" />
          </section>

          {/* Bottom CTA Banner */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Infrastruktur API Modern
              </span>
              <h2 className="goletin-bottom-cta-title">
                Bangun Produk Lebih Cepat dengan Goletin API Hub
              </h2>
              <p className="goletin-bottom-cta-desc">
                Konsultasikan kebutuhan arsitektur integrasi sistem enterprise bersama tim pengembang dan Solution Architect Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Konsultasi Arsitektur API</span>
                  <Icon name="chevron-right" size={16} />
                </Link>
                <a
                  href="https://console.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Buka Goletin Console Web</span>
                  <Icon name="external-link" size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
