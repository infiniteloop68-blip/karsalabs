import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Icon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Ketentuan Penggunaan & Lisensi Perangkat Lunak',
  description:
    'Syarat dan ketentuan resmi penggunaan ekosistem aplikasi Goletin dan layanan perangkat lunak PT Karsa Solusi Teknologi.',
  alternates: {
    canonical: '/ketentuan',
  },
  openGraph: {
    title: 'Ketentuan Penggunaan & Lisensi Perangkat Lunak | Karsasoft',
    description:
      'Syarat dan ketentuan resmi penggunaan ekosistem aplikasi Goletin dan layanan PT Karsa Solusi Teknologi.',
    url: 'https://karsasoft.com/ketentuan',
    images: ['/og-image.jpg'],
  },
};

export default function KetentuanPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="legal-hero">
        <div className="container">
          <nav className="legal-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <span>Legal</span>
            <span>/</span>
            <span style={{ color: 'var(--ms-text-heading)', fontWeight: 600 }}>Ketentuan Penggunaan</span>
          </nav>
          <h1 className="legal-hero-title">Ketentuan Penggunaan Karsasoft</h1>
          <p className="legal-hero-subtitle">
            Harap baca ketentuan ini dengan saksama sebelum mengakses atau menggunakan aplikasi ekosistem Goletin dan perangkat lunak PT Karsa Solusi Teknologi. Dengan mendaftar, mengakses, atau memesan lisensi, Anda menyetujui untuk terikat oleh ketentuan di bawah ini.
          </p>
          <div className="legal-meta-row">
            <span className="legal-meta-badge">
              <Icon name="check" size={14} />
              Perjanjian Lisensi Resmi (EULA)
            </span>
            <span>Berlaku Efektif: 5 Oktober 2026</span>
            <span>&bull;</span>
            <span>Versi Dokumen: 4.0</span>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="container">
        <div className="legal-body-container">
          {/* Sticky Table of Contents */}
          <aside className="legal-sidebar" aria-label="Daftar Isi Ketentuan">
            <h2 className="legal-sidebar-title">Daftar Isi</h2>
            <ul className="legal-toc-list">
              <li><a href="#ruang-lingkup">1. Ruang Lingkup & Penerimaan</a></li>
              <li><a href="#pemberian-lisensi">2. Hak Lisensi Penggunaan</a></li>
              <li><a href="#kewajiban-akun">3. Keamanan & Akun Pengguna</a></li>
              <li><a href="#penggunaan-dilarang">4. Larangan Penggunaan (AUP)</a></li>
              <li><a href="#sla-uptime">5. Garansi SLA & Ketersediaan (99.9%)</a></li>
              <li><a href="#pembayaran-faktur">6. Penagihan & Perpanjangan Lisensi</a></li>
              <li><a href="#hak-kekayaan-intelektual">7. Hak Kekayaan Intelektual</a></li>
              <li><a href="#batasan-tanggung-jawab">8. Batasan Tanggung Jawab</a></li>
              <li><a href="#hukum-sengketa">9. Hukum yang Berlaku & Arbitrase</a></li>
            </ul>

            <div className="legal-sidebar-contact">
              <strong>Pertanyaan Kontrak Korporasi?</strong>
              <p style={{ margin: '6px 0 0 0' }}>
                Hubungi Divisi Kontrak & Lisensi:
                <br />
                <a href="mailto:legal@karsasoft.com" style={{ color: '#008768', fontWeight: 600 }}>
                  legal@karsasoft.com
                </a>
              </p>
            </div>
          </aside>

          {/* Document Content */}
          <main className="legal-main-content">
            {/* Section 1 */}
            <section id="ruang-lingkup" className="legal-section">
              <h2 className="legal-section-h2">
                <span>1. Ruang Lingkup & Penerimaan Ketentuan</span>
              </h2>
              <p className="legal-paragraph">
                Perjanjian ini dibuat antara PT Karsa Solusi Teknologi (&ldquo;Karsasoft&rdquo;) dan pihak perorangan atau badan hukum (&ldquo;Pelanggan&rdquo; atau &ldquo;Pengguna&rdquo;) yang mengakses atau berlangganan ekosistem aplikasi Goletin. Layanan mencakup aplikasi berbasis web (SaaS), software kalkulasi regulasi keuangan lokal (IndoTax, Yaycount, ECL Pro, Lease Engine, Sampling Pro, JET Pro), ruang kerja kolaboratif awan (CloudSave, Docs, Sheets, Slides), dan API Goletin AI.
              </p>
              <div className="legal-callout">
                <div className="legal-callout-title">
                  <Icon name="info" size={16} />
                  Klausul Perwakilan Institusi
                </div>
                Jika Anda mendaftarkan akun atas nama perseroan terbatas, yayasan nirlaba, Kantor Akuntan Publik (KAP), atau instansi pemerintah, Anda menyatakan dan menjamin bahwa Anda memiliki kewenangan hukum yang sah untuk mengikat institusi tersebut dalam perjanjian ini.
              </div>
            </section>

            {/* Section 2 */}
            <section id="pemberian-lisensi" className="legal-section">
              <h2 className="legal-section-h2">
                <span>2. Hak Lisensi Penggunaan</span>
              </h2>
              <p className="legal-paragraph">
                Karsasoft memberikan kepada Pelanggan lisensi non-eksklusif, tidak dapat dialihkan (non-transferable), dan dapat dibatalkan (revocable) untuk mengakses dan mengoperasikan perangkat lunak sesuai dengan paket langganan yang dipilih:
              </p>
              <ul className="legal-list">
                <li><strong>Lisensi Named-User:</strong> Lisensi pengguna perseorangan yang terikat pada kredensial satu individu sah.</li>
                <li><strong>Lisensi Multi-Unit / Yayasan:</strong> Lisensi Yaycount ERP untuk entitas sosial nirlaba yang mencakup konsolidasi multi-cabang/unit donasi.</li>
                <li><strong>Lisensi Enterprise On-Premise / Private Cloud:</strong> Lisensi khusus untuk instalasi mandiri engine ECL Pro (IFRS 9) atau Lease Engine (PSAK 73) di infrastruktur privat perbankan dengan sertifikat SLA berdedikasi.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="kewajiban-akun" className="legal-section">
              <h2 className="legal-section-h2">
                <span>3. Keamanan & Akun Pengguna</span>
              </h2>
              <p className="legal-paragraph">
                Pengguna bertanggung jawab penuh atas kerahasiaan kredensial akun, kata sandi, dan kunci keamanan Multi-Factor Authentication (MFA). Karsasoft tidak bertanggung jawab atas kerugian yang timbul akibat kelalaian Pengguna dalam menjaga kerahasiaan kredensial aksesnya. Segala aktivitas yang terjadi di bawah akun Pengguna dianggap sebagai tindakan sah dari Pengguna.
              </p>
            </section>

            {/* Section 4 */}
            <section id="penggunaan-dilarang" className="legal-section">
              <h2 className="legal-section-h2">
                <span>4. Larangan Penggunaan (Acceptable Use Policy)</span>
              </h2>
              <p className="legal-paragraph">
                Dalam menggunakan ekosistem Goletin dan layanan Karsasoft, Pengguna dilarang keras untuk:
              </p>
              <ul className="legal-list">
                <li>Melakukan rekayasa balik (reverse engineering), dekompilasi, atau upaya ekstraksi kode sumber dari aplikasi Goletin.</li>
                <li>Menyewakan kembali, menjual sub-lisensi (sub-licensing), atau mendistribusikan aplikasi kepada pihak ketiga tanpa izin kemitraan tertulis.</li>
                <li>Menembus, menguji kerentanan, atau merusak sistem keamanan server Karsasoft tanpa otorisasi tertulis dari Tim Keamanan Siber Karsasoft.</li>
                <li>Mengunggah data yang mengandung perangkat perusak (malware), virus, atau instruksi berbahaya ke sistem CloudSave.</li>
                <li>Memanfaatkan Goletin AI untuk pembuatan konten yang melanggar hukum Negara Kesatuan Republik Indonesia atau norma kesusilaan publik.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="sla-uptime" className="legal-section">
              <h2 className="legal-section-h2">
                <span>5. Garansi Service Level Agreement (SLA 99.9%)</span>
              </h2>
              <p className="legal-paragraph">
                Untuk pelanggan paket Bisnis dan Enterprise, Karsasoft menjamin tingkat ketersediaan layanan tahunan sebesar <strong>99.9% (Tiga Sembilan)</strong>:
              </p>
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Tingkat Ketersediaan Bulanan</th>
                    <th>Kompensasi Service Credit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>99.0% &ndash; 99.89%</td>
                    <td>10% Kredit Tagihan Siklus Berikutnya</td>
                  </tr>
                  <tr>
                    <td>95.0% &ndash; 98.99%</td>
                    <td>25% Kredit Tagihan Siklus Berikutnya</td>
                  </tr>
                  <tr>
                    <td>Di bawah 95.0%</td>
                    <td>50% Kredit Tagihan Siklus Berikutnya</td>
                  </tr>
                </tbody>
              </table>
              <p className="legal-paragraph" style={{ fontSize: '13px', color: '#64748B' }}>
                *Catatan: Jendela pemeliharaan rutin terencana (scheduled maintenance) yang diumumkan minimal 48 jam sebelumnya dikecualikan dari perhitungan downtime.
              </p>
            </section>

            {/* Section 6 */}
            <section id="pembayaran-faktur" className="legal-section">
              <h2 className="legal-section-h2">
                <span>6. Penagihan, Pembayaran, & Faktur Pajak</span>
              </h2>
              <p className="legal-paragraph">
                Seluruh biaya langganan ditagihkan dalam mata uang Rupiah (IDR). Karsasoft menerbitkan Faktur Pajak resmi elektronik (e-Faktur PPN) untuk seluruh transaksi entitas bisnis dan institusi ber-NPWP. Layanan akan diperpanjang secara otomatis pada akhir periode kecuali Pelanggan membatalkan langganan minimal 7 (tujuh) hari kalender sebelum tanggal perpanjangan.
              </p>
            </section>

            {/* Section 7 */}
            <section id="hak-kekayaan-intelektual" className="legal-section">
              <h2 className="legal-section-h2">
                <span>7. Hak Kekayaan Intelektual & Kepemilikan Data</span>
              </h2>
              <p className="legal-paragraph">
                Seluruh hak cipta, paten algoritma, merek dagang, desain antarmuka, dan kode sumber perangkat lunak adalah hak milik eksklusif PT Karsa Solusi Teknologi.
              </p>
              <div className="legal-callout">
                <div className="legal-callout-title">
                  <Icon name="check" size={16} />
                  Kepemilikan Data Milik Pelanggan 100%
                </div>
                Pelanggan adalah pemilik mutlak dari seluruh data finansial, data transaksi akuntansi, dokumen kantor, dan berkas yang dimasukkan ke dalam sistem. Karsasoft tidak memiliki hak kepemilikan apa pun atas konten dan data Pelanggan.
              </div>
            </section>

            {/* Section 8 */}
            <section id="batasan-tanggung-jawab" className="legal-section">
              <h2 className="legal-section-h2">
                <span>8. Batasan Tanggung Jawab</span>
              </h2>
              <p className="legal-paragraph">
                Perangkat lunak kalkulasi regulasi kami (IndoTax, ECL Pro, Lease Engine, Sampling Pro, JET Pro) dirancang sebagai alat bantu pengolahan data profesional. Pengguna tetap bertanggung jawab penuh atas verifikasi substantif dan interpretasi akuntansi akhir sebelum menyampaikan laporan resmi ke otoritas perpajakan (DJP) atau auditor eksternal. Total tanggung jawab finansial Karsasoft atas segala klaim ganti rugi dibatasi maksimum sebesar nilai biaya lisensi yang dibayarkan oleh Pelanggan dalam periode 12 (dua belas) bulan terakhir.
              </p>
            </section>

            {/* Section 9 */}
            <section id="hukum-sengketa" className="legal-section">
              <h2 className="legal-section-h2">
                <span>9. Hukum yang Berlaku & Penyelesaian Sengketa</span>
              </h2>
              <p className="legal-paragraph">
                Perjanjian ini diatur dan ditafsirkan sepenuhnya berdasarkan hukum yang berlaku di Negara Kesatuan Republik Indonesia. Setiap sengketa atau perselisihan yang timbul akan diupayakan diselesaikan melalui musyawarah mufakat dalam waktu 30 (tiga puluh) hari kalender. Jika tidak tercapai mufakat, perselisihan akan diselesaikan melalui Badan Arbitrase Nasional Indonesia (BANI) di Jakarta atau yurisdiksi eksklusif Pengadilan Negeri Jakarta Selatan.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
