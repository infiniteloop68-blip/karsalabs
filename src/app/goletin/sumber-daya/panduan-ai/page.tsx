'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { GoletinFaq, FaqItem } from '@/components/GoletinFaq';

export default function PanduanAIPage() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const promptExamples = [
    {
      category: 'ANALISIS LAPORAN KEUANGAN',
      title: 'Analisis Posisi Keuangan & Rasio Likuiditas (PSAK 1)',
      badPrompt: 'Tolong analisis file neraca ini.',
      goodPrompt:
        'Bertindaklah sebagai Senior Financial Analyst bersertifikasi CA. Analisis laporan posisi keuangan terlampir untuk periode FY2025 vs FY2024. Hitung Current Ratio, Quick Ratio, Debt-to-Equity Ratio, dan Debt Service Coverage Ratio (DSCR). Soroti tiga akun dengan variansi di atas 15% dan berikan penjelasan potensi penyebab operasionalnya sesuai format ringkasan eksekutif.',
      benefit: 'Menghasilkan tabel analisis komparatif instan dengan penjelasan deviasi yang siap dipresentasikan ke direksi.',
    },
    {
      category: 'DETEKSI ANOMALI & FRAUD (ISA 240)',
      title: 'Pemeriksaan Entri Jurnal Tidak Wajar (Journal Entry Testing)',
      badPrompt: 'Cari jurnal yang aneh dari daftar mutasi ini.',
      goodPrompt:
        'Sebagai Forensic Audit Specialist, periksa baris jurnal terlampir berdasarkan prinsip ISA 240. Identifikasi: (1) Jurnal manual yang diposting pada akhir pekan atau di luar jam kerja 08:00–18:00, (2) Jurnal dengan pembulatan angka genap ratusan juta di akun suspense/beban lain-lain, (3) Transaksi split pembayaran di bawah threshold otorisasi Rp 50.000.000. Tampilkan dalam tabel temuan audit lengkap dengan referensi nomor bukti dan tingkat risiko (Tinggi/Sedang/Rendah).',
      benefit: 'Memangkas waktu uji substantif entri jurnal dari hitungan hari menjadi hitungan menit.',
    },
    {
      category: 'REKONSILIASI BANK & MUTASI',
      title: 'Pencocokan Rekening Koran Bank dengan Buku Besar Kas',
      badPrompt: 'Cocokkan mutasi bank BCA ini dengan buku besar.',
      goodPrompt:
        'Lakukan rekonsiliasi otomatis antara mutasi rekening koran Bank BCA (Kolom A–D) dengan Buku Besar Kas/Bank (Kolom E–H). Cocokkan berdasarkan tanggal toleransi ±2 hari kerja, nominal tepat, dan kata kunci referensi transfer. Buat dua daftar: (A) Transaksi kliring cocok 100%, dan (B) Outstanding reconciling items (biaya admin, pendapatan bunga, atau setoran dalam perjalanan) lengkap dengan draf jurnal penyesuaian akhir bulan.',
      benefit: 'Mengeliminasi kesalahan pencatatan manual dan mempercepat proses closing bulanan tim akuntansi.',
    },
    {
      category: 'PAJAK & FAKTUR (PMK 168 / TER)',
      title: 'Penghitungan Pemotongan PPh 21 Tarif Efektif Rata-Rata',
      badPrompt: 'Hitung pajak karyawan saya.',
      goodPrompt:
        'Hitung pemotongan PPh Pasal 21 Masa berdasarkan PMK No. 168/2023 untuk daftar 25 karyawan terlampir. Tentukan Kategori Tarif Efektif Rata-Rata (Kategori TER A, B, atau C) sesuai status PTKP masing-masing. Hitung pajak terutang perorangan, akumulasi total untuk e-Billing, dan siapkan format impor file CSV e-SPT Masa PPh 21 resmi DJP.',
      benefit: 'Akurasi pemotongan 100% patuh aturan DJP terbaru tanpa risiko denda kurang setor.',
    },
  ];

  const coreCapabilities = [
    {
      icon: 'ai',
      badge: 'Multimodal OCR',
      title: 'Multimodal OCR Dokumen Finansial',
      desc: 'Unggah berkas scan kwitansi, nota belanja, invoice vendor PDF, atau bukti potong 1721-A1. Goletin AI mengekstrak nomor dokumen, NPWP, DPP, PPN, dan langsung mengonversinya menjadi draf jurnal di Sheets atau Yaycount ERP.',
    },
    {
      icon: 'security',
      badge: 'Sovereign AI',
      title: 'Zero-Retention & Data Sovereignty',
      desc: 'Data keuangan dan dokumen rahasia perusahaan Anda tidak pernah disimpan di server pihak ketiga atau digunakan untuk melatih model publik. Seluruh proses inferensi berjalan di cloud berdaulat Indonesia atau on-premise lokal.',
    },
    {
      icon: 'sheets',
      badge: 'Spreadsheet Copilot',
      title: 'Copilot Formula & Skrip di Sheets',
      desc: 'Cukup ketik dalam bahasa Indonesia sehari-hari seperti: "Buat rumus peredaran bruto komparatif 12 bulan dengan grafik tren sparkline", dan Goletin AI langsung menyusun rumus array majemuk tanpa repot menghafal formula.',
    },
    {
      icon: 'shield',
      badge: 'Standar IAI & OJK',
      title: 'Pemahaman Standar PSAK & IFRS',
      desc: 'Dilatih secara khusus dengan korpus Standar Akuntansi Keuangan (SAK) Indonesia, IFRS, regulasi OJK, dan undang-undang perpajakan nasional. Memberikan referensi pasal dan standar resmi untuk setiap rekomendasi akuntansi.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Aktifkan Lisensi Goletin AI',
      desc: 'Buka panel samping aplikasi Docs atau Sheets, klik ikon AI untuk menghubungkan ke instance cloud privat organisasi Anda.',
    },
    {
      step: '02',
      title: 'Lampirkan Data Konteks',
      desc: 'Sertakan tabel spreadsheet, rentang sel, atau unggah berkas PDF/gambar faktur pajak yang ingin diproses secara langsung.',
    },
    {
      step: '03',
      title: 'Pilih Kerangka Regulasi',
      desc: 'Tentukan apakah output mengikuti kerangka PSAK 71, PSAK 73, SAK EMKM, atau aturan perpajakan DJP terkait.',
    },
    {
      step: '04',
      title: 'Verifikasi Draf Jurnal',
      desc: 'Review rekomendasi entri jurnal dan lembar kerja yang disusun oleh AI sebelum diposting ke Buku Besar perusahaan.',
    },
    {
      step: '05',
      title: 'Ekspor Audit Trail Resmi',
      desc: 'Unduh catatan riwayat inferensi lengkap dengan stempel waktu dan penjelasan metodologi sebagai kertas kerja audit KAP.',
    },
  ];

  const panduanFaqItems: FaqItem[] = [
    {
      id: 'faq-privacy-training',
      q: 'Apakah dokumen atau prompt keuangan kami aman dari pelatihan model publik?',
      a: 'Mutlak aman. Karsasoft menjamin kebijakan Zero Data Training secara kontraktual melalui NDA. Seluruh data yang Anda masukkan hanya diproses sementara dalam memori RAM terisolasi di data center Tier-4 Indonesia dan tidak pernah disimpan atau dibagikan ke pihak ketiga.',
    },
    {
      id: 'faq-ocr-accuracy',
      q: 'Seberapa akurat OCR Goletin AI dalam membaca struk dan faktur yang buram?',
      a: 'Model vision multimodal kami memiliki akurasi di atas 98,5% untuk karakter cetak faktur standar e-Faktur DJP dan kuitansi komersial, lengkap dengan auto-correction untuk NPWP dan kalkulasi DPP/PPN matematis.',
    },
    {
      id: 'faq-sheets-integration',
      q: 'Bagaimana cara memanggil Goletin AI langsung dari lembar kerja Goletin Sheets?',
      a: 'Pengguna cukup menggunakan menu samping Goletin AI atau formula kustom seperti =AI_FORMULA("hitung PPh 21 TER", A2:D2) untuk mengotomatiskan analisis tanpa meninggalkan spreadsheet.',
    },
    {
      id: 'faq-prompt-support',
      q: 'Apakah Karsasoft menyediakan pelatihan prompt engineering khusus bagi staf akuntansi?',
      a: 'Ya. Klien Enterprise mendapatkan sesi workshop onboarding khusus bersama AI Solutions Architect kami untuk memetakan template prompt yang disesuaikan dengan bagan akun (Chart of Accounts) dan SOP internal perusahaan.',
    },
  ];

  const handleCopyPrompt = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => {
      setCopiedIdx(null);
    }, 2500);
  };

  return (
    <>
      <GoletinSubNav />

      <div className="section-padding">
        <div className="container">
          {/* 4 Kapabilitas Utama Section */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Panduan Operasional & Best Practices AI</span>
              <h1 className="section-title">Panduan Penggunaan Goletin AI Finansial</h1>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Kuasai teknik prompt engineering untuk akuntansi, audit, dan analisis keuangan. Dirancang untuk memahami struktur akuntansi double-entry, kepatuhan perpajakan Indonesia, dan audit forensik dengan kedaulatan data penuh.
              </p>
            </div>

            <div className="standards-grid">
              {coreCapabilities.map((cap, i) => (
                <div key={i} className="standard-card">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      marginBottom: '14px',
                    }}
                  >
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
                      <Icon name={cap.icon} size={20} />
                    </div>
                    <span className="standard-badge" style={{ margin: 0 }}>
                      {cap.badge}
                    </span>
                  </div>
                  <h3 className="standard-card-title">{cap.title}</h3>
                  <p className="standard-card-desc">{cap.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Prompt Cheat Sheet Section */}
          <section id="prompt-cheatsheet" style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Formula Prompt Efektif</span>
              <h2 className="section-title">Contoh Prompt Engineering Finansial Siap Pakai</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Bandingkan hasil prompt umum dengan prompt yang diformulasikan secara presisi untuk kebutuhan pelaporan akuntansi dan audit.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {promptExamples.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--ms-border-card)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {/* Scenario Top Bar */}
                  <div
                    style={{
                      backgroundColor: 'var(--ms-bg-subtle)',
                      padding: '14px 24px',
                      borderBottom: '1px solid var(--ms-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="standard-badge" style={{ margin: 0, fontSize: '11.5px', padding: '2px 8px' }}>
                        SKENARIO {idx + 1}
                      </span>
                      <strong style={{ fontSize: '14px', color: 'var(--ms-text-heading)' }}>
                        {item.title}
                      </strong>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--ms-text-muted)', fontWeight: 600 }}>
                      {item.category}
                    </span>
                  </div>

                  {/* Comparison Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    }}
                  >
                    {/* Bad Prompt */}
                    <div
                      style={{
                        padding: '24px',
                        backgroundColor: '#FFFDFD',
                        borderRight: '1px solid var(--ms-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#DC2626',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            marginBottom: '10px',
                          }}
                        >
                          <Icon name="close" size={14} />
                          <span>Prompt Kurang Efektif (Terlalu Umum):</span>
                        </div>
                        <div
                          style={{
                            backgroundColor: '#FEF2F2',
                            border: '1px solid #FECACA',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            fontSize: '13.5px',
                            color: '#991B1B',
                            fontFamily: 'monospace',
                            lineHeight: 1.5,
                          }}
                        >
                          &ldquo;{item.badPrompt}&rdquo;
                        </div>
                      </div>
                      <p
                        style={{
                          fontSize: '12.5px',
                          color: 'var(--ms-text-muted)',
                          marginTop: '12px',
                          marginBottom: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        Output sering kali terlalu abstrak, tidak memuat standar PSAK, atau melewatkan detail kepatuhan penting.
                      </p>
                    </div>

                    {/* Good Prompt */}
                    <div
                      style={{
                        padding: '24px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '10px',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              color: 'var(--ms-blue-text)',
                              fontSize: '12.5px',
                              fontWeight: 700,
                            }}
                          >
                            <Icon name="check" size={14} className="trust-icon-check" />
                            <span>Prompt Presisi Rekomendasi (Terstruktur):</span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleCopyPrompt(item.goodPrompt, idx)}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              backgroundColor: copiedIdx === idx ? '#E6FCF7' : 'transparent',
                              border: copiedIdx === idx ? '1px solid #00EDC2' : '1px solid var(--ms-border)',
                              borderRadius: '4px',
                              padding: '3px 8px',
                              fontSize: '11.5px',
                              fontWeight: 600,
                              color: copiedIdx === idx ? '#007D65' : 'var(--ms-text-muted)',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                            }}
                            title="Salin prompt ke clipboard"
                          >
                            {copiedIdx === idx ? (
                              <>
                                <Icon name="check" size={12} className="trust-icon-check" />
                                <span>Tersalin!</span>
                              </>
                            ) : (
                              <span>Salin Prompt</span>
                            )}
                          </button>
                        </div>

                        <div
                          style={{
                            backgroundColor: '#E6FCF7',
                            border: '1px solid #B8EFE2',
                            padding: '14px 16px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            lineHeight: 1.6,
                            color: '#0E1726',
                            fontFamily: 'monospace',
                          }}
                        >
                          &ldquo;{item.goodPrompt}&rdquo;
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: '12.5px',
                          color: 'var(--ms-blue-text)',
                          marginTop: '12px',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '6px',
                        }}
                      >
                        <span style={{ display: 'inline-flex', marginTop: '2px', flexShrink: 0 }}>
                          <Icon name="check" size={13} className="trust-icon-check" />
                        </span>
                        <span>{item.benefit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5 Langkah Workflow Implementasi */}
          <section style={{ marginBottom: '64px' }}>
            <div className="section-header-block centered" style={{ marginBottom: '36px' }}>
              <span className="section-eyebrow">Workflow Implementasi</span>
              <h2 className="section-title">5 Langkah Memulai Workflow AI Finansial Anda</h2>
              <p className="section-lead" style={{ maxWidth: '780px', margin: '0 auto' }}>
                Ikuti alur kerja standar berikut untuk mengintegrasikan asisten AI ke dalam rutinitas kerja harian tim pembukuan dan audit.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
              }}
            >
              {workflowSteps.map((s, idx) => (
                <div key={idx} className="standard-card" style={{ padding: '24px 20px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-segoe-display)',
                      fontSize: '28px',
                      fontWeight: 700,
                      color: 'var(--ms-blue-text)',
                      marginBottom: '8px',
                      lineHeight: 1,
                    }}
                  >
                    {s.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-segoe-display)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--ms-text-heading)',
                      marginBottom: '8px',
                      lineHeight: '20px',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-segoe-text)',
                      fontSize: '13px',
                      color: 'var(--ms-text-muted)',
                      lineHeight: '19px',
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion */}
          <section id="faq" className="section-padding" style={{ borderTop: '1px solid var(--ms-border)' }}>
            <div className="section-header-block centered">
              <span className="section-eyebrow">Pertanyaan Umum</span>
              <h2 className="section-title">Pertanyaan Seputar Panduan Goletin AI</h2>
              <p className="section-lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Informasi penting seputar keamanan model, integrasi formula Sheets, dan pelatihan tim.
              </p>
            </div>
            <GoletinFaq items={panduanFaqItems} countLabel="4 Tanya Jawab Panduan AI" />
          </section>

          {/* Bottom Enterprise CTA Banner (Matching /goletin) */}
          <div className="goletin-bottom-cta">
            <div className="goletin-bottom-cta-inner">
              <span className="section-eyebrow" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Uji Coba & Evaluasi
              </span>
              <h2 className="goletin-bottom-cta-title">
                Ingin Uji Coba Goletin AI di Perusahaan Anda?
              </h2>
              <p className="goletin-bottom-cta-desc">
                Dapatkan sandbox PoC 14 hari dengan kuota pemrosesan dokumen akuntansi tanpa biaya bersama AI Solutions Architect Karsasoft.
              </p>
              <div className="goletin-bottom-cta-actions">
                <Link href="/kontak" className="btn-primary">
                  <span>Ajukan Sandbox PoC</span>
                  <Icon name="arrow-right" size={15} />
                </Link>
                <a
                  href="https://ai.goletin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Coba Goletin AI Sekarang</span>
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
