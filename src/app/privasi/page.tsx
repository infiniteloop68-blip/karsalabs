import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Icon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Pernyataan Privasi & Pelindungan Data Pribadi',
  description:
    'Komitmen PT Karsa Solusi Teknologi dalam menjaga privasi data pengguna dan kepatuhan penuh terhadap UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).',
  alternates: {
    canonical: '/privasi',
  },
  openGraph: {
    title: 'Pernyataan Privasi & Pelindungan Data Pribadi | Karsasoft',
    description:
      'Komitmen PT Karsa Solusi Teknologi dalam menjaga privasi data pengguna sesuai UU PDP.',
    url: 'https://karsasoft.com/privasi',
    images: ['/og-image.jpg'],
  },
};

export default function PrivasiPage() {
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
            <span style={{ color: 'var(--ms-text-heading)', fontWeight: 600 }}>Pernyataan Privasi</span>
          </nav>
          <h1 className="legal-hero-title">Pernyataan Privasi Karsasoft</h1>
          <p className="legal-hero-subtitle">
            Privasi Anda adalah prioritas utama kami. Dokumen ini menjelaskan bagaimana PT Karsa Solusi Teknologi mengumpulkan, mengelola, mengamankan, dan melindungi data pribadi Anda di seluruh ekosistem Goletin dan layanan Karsasoft sesuai hukum yang berlaku di Republik Indonesia.
          </p>
          <div className="legal-meta-row">
            <span className="legal-meta-badge">
              <Icon name="shield" size={14} />
              Kepatuhan UU PDP No. 27 Tahun 2022
            </span>
            <span>Berlaku Efektif: 5 Oktober 2026</span>
            <span>&bull;</span>
            <span>Versi Dokumen: 3.2</span>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="container">
        <div className="legal-body-container">
          {/* Sticky Table of Contents */}
          <aside className="legal-sidebar" aria-label="Daftar Isi Kebijakan">
            <h2 className="legal-sidebar-title">Daftar Isi</h2>
            <ul className="legal-toc-list">
              <li><a href="#ikhtisar">1. Komitmen Privasi</a></li>
              <li><a href="#data-yang-dikumpulkan">2. Data yang Kami Kumpulkan</a></li>
              <li><a href="#penggunaan-data">3. Dasar Hukum Pemrosesan Data</a></li>
              <li><a href="#goletin-ai-privasi">4. Privasi pada Goletin AI</a></li>
              <li><a href="#kedaulatan-penyimpanan">5. Kedaulatan & Enkripsi Data</a></li>
              <li><a href="#hak-subjek-data">6. Hak Subjek Data Pengguna</a></li>
              <li><a href="#retensi-penghapusan">7. Retensi & Penghapusan Data</a></li>
              <li><a href="#kontak-dpo">8. Petugas Pelindungan Data (DPO)</a></li>
            </ul>

            <div className="legal-sidebar-contact">
              <strong>Butuh bantuan privasi?</strong>
              <p style={{ margin: '6px 0 0 0' }}>
                Hubungi Petugas Pelindungan Data kami di:
                <br />
                <a href="mailto:privacy@karsasoft.com" style={{ color: '#008768', fontWeight: 600 }}>
                  dpo@karsasoft.com
                </a>
              </p>
            </div>
          </aside>

          {/* Document Content */}
          <main className="legal-main-content">
            {/* Section 1 */}
            <section id="ikhtisar" className="legal-section">
              <h2 className="legal-section-h2">
                <span>1. Komitmen Privasi Karsasoft</span>
              </h2>
              <p className="legal-paragraph">
                PT Karsa Solusi Teknologi (&ldquo;Karsasoft&rdquo;, &ldquo;kami&rdquo;, atau &ldquo;perusahaan&rdquo;) berkomitmen penuh untuk menjunjung tinggi transparansi, keamanan, dan kedaulatan data pengguna. Seluruh produk di bawah ekosistem Goletin (termasuk Goletin AI, CloudSave, Goletin Docs/Sheets/Slides, IndoTax, Yaycount, ECL Pro, Lease Engine, Sampling Pro, dan JET Pro) dirancang dengan prinsip <em>Privacy by Design</em> dan <em>Privacy by Default</em>.
              </p>
              <div className="legal-callout">
                <div className="legal-callout-title">
                  <Icon name="shield" size={16} />
                  Kedaulatan Data di Wilayah Indonesia
                </div>
                Seluruh data pengguna enterprise, instansi nirlaba, dan individu disimpan dan diproses pada pusat data (data center) berstandar Tier-IV dan Tier-III yang berlokasi secara fisik di wilayah kedaulatan hukum Republik Indonesia, tunduk pada ketentuan PP No. 71/2019 dan UU No. 27/2022.
              </div>
            </section>

            {/* Section 2 */}
            <section id="data-yang-dikumpulkan" className="legal-section">
              <h2 className="legal-section-h2">
                <span>2. Data yang Kami Kumpulkan</span>
              </h2>
              <p className="legal-paragraph">
                Kami hanya mengumpulkan data pribadi yang relevan, proporsional, dan benar-benar diperlukan untuk menyediakan fungsionalitas layanan perangkat lunak:
              </p>
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Kategori Data</th>
                    <th>Contoh Data</th>
                    <th>Tujuan Pemrosesan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Data Identitas Akun</strong></td>
                    <td>Nama lengkap, alamat email korporasi, nomor telepon, nama institusi/yayasan.</td>
                    <td>Autentikasi akun tunggal Goletin, manajemen lisensi, dan keamanan akses (2FA/SSO).</td>
                  </tr>
                  <tr>
                    <td><strong>Data Finansial & Operasional</strong></td>
                    <td>Nomor Pokok Wajib Pajak (NPWP), laporan transaksi yayasan, parameter kontrak sewa PSAK 73, portofolio pinjaman IFRS 9.</td>
                    <td>Kalkulasi otomatis formulir pajak DJP, komputasi CKPN, dan pelaporan keuangan ISAK 35.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Ruang Kerja Cloud</strong></td>
                    <td>Dokumen teks (.gdoc), lembar kerja spreadsheet (.gsheet), presentasi (.gslide), dan file CloudSave.</td>
                    <td>Penyimpanan file terenkripsi dan kolaborasi dokumen tim secara real-time.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Teknis & Telemetri</strong></td>
                    <td>Alamat IP, tipe peramban, log audit aktivitas sistem, cap waktu (timestamp).</td>
                    <td>Pencegahan fraud, investigasi insiden siber, dan audit trail kepatuhan ISO 27001.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Section 3 */}
            <section id="penggunaan-data" className="legal-section">
              <h2 className="legal-section-h2">
                <span>3. Dasar Hukum Pemrosesan Data</span>
              </h2>
              <p className="legal-paragraph">
                Sesuai dengan Pasal 20 UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, kami memproses data Anda hanya berdasarkan:
              </p>
              <ul className="legal-list">
                <li><strong>Persetujuan Eksplisit (Consent):</strong> Persetujuan sah yang Anda berikan saat membuat akun atau mengaktifkan modul layanan tertentu.</li>
                <li><strong>Kewajiban Perjanjian (Contractual Obligation):</strong> Pemenuhan hak dan kewajiban berdasarkan Perjanjian Lisensi Pengguna Akhir (EULA) atau Service Level Agreement (SLA) Enterprise.</li>
                <li><strong>Kewajiban Hukum (Legal Obligation):</strong> Kepatuhan terhadap regulasi perpajakan Direktorat Jenderal Pajak (DJP), Otoritas Jasa Keuangan (OJK), dan Bank Indonesia (BI).</li>
                <li><strong>Kepentingan Sah (Legitimate Interest):</strong> Peningkatan integritas sistem, deteksi ancaman keamanan siber, dan audit mutu perangkat lunak.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="goletin-ai-privasi" className="legal-section">
              <h2 className="legal-section-h2">
                <span>4. Komitmen Khusus Privasi pada Goletin AI</span>
              </h2>
              <p className="legal-paragraph">
                Goletin AI dirancang khusus untuk memenuhi standar kerahasiaan institusional tertinggi. Kami memberlakukan klausul ketat terkait kecerdasan buatan:
              </p>
              <div className="legal-callout">
                <div className="legal-callout-title">
                  <Icon name="check" size={16} />
                  Data Anda TIDAK Digunakan untuk Melatih Model Publik
                </div>
                Dokumen, query prompt, angka laporan keuangan, dan data sensitif yang Anda proses melalui Goletin AI <strong>tidak pernah</strong> digunakan untuk pelatihan (training) model dasar kecerdasan buatan publik atau dibagikan ke pihak ketiga mana pun.
              </div>
              <ul className="legal-list">
                <li><strong>Isolasi Ruang Penyewa (Tenant Isolation):</strong> Setiap permintaan AI diproses dalam sesi terenkripsi dengan memori sementara (ephemeral memory) yang terhapus setelah transaksi inferensi tuntas.</li>
                <li><strong>Data Anonymization:</strong> Fitur penyamaran otomatis untuk nama perorangan, NIK, dan data keuangan sebelum diproses oleh engine penalaran lokal.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="kedaulatan-penyimpanan" className="legal-section">
              <h2 className="legal-section-h2">
                <span>5. Kedaulatan & Enkripsi Data</span>
              </h2>
              <p className="legal-paragraph">
                Keamanan infrastruktur Karsasoft dibangun dengan standar industri perbankan:
              </p>
              <ul className="legal-list">
                <li><strong>Enkripsi Transit:</strong> Seluruh komunikasi antara browser/aplikasi Anda dan server Karsasoft dilindungi dengan TLS 1.3 menggunakan enkripsi 256-bit AES cipher suite.</li>
                <li><strong>Enkripsi Istirahat (At-Rest):</strong> Database dan ruang file CloudSave dienkripsi dengan standar AES-256 dengan manajemen kunci enkripsi terpisah (Hardware Security Module / HSM).</li>
                <li><strong>Zero-Profiling Search:</strong> Mesin pencarian Goletin Search Privat tidak pernah menyimpan rekam jejak kueri, profil penelusuran, atau pengenal pelacak iklan (tracker-free).</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="hak-subjek-data" className="legal-section">
              <h2 className="legal-section-h2">
                <span>6. Hak Subjek Data Pengguna</span>
              </h2>
              <p className="legal-paragraph">
                Sebagai subjek data yang dilindungi UU PDP, Anda memiliki hak penuh untuk:
              </p>
              <ul className="legal-list">
                <li><strong>Hak Mengakses Data:</strong> Meminta salinan data pribadi yang kami simpan tentang Anda melalui portal pengaturan akun.</li>
                <li><strong>Hak Memperbaiki (Rektifikasi):</strong> Memperbarui atau membetulkan data pribadi yang tidak akurat atau tidak lengkap.</li>
                <li><strong>Hak Menghapus (Right to Erasure):</strong> Meminta penghapusan permanen atas data pribadi Anda jika akun ditutup dan tidak bertentangan dengan kewajiban retensi pajak/hukum.</li>
                <li><strong>Hak Portabilitas Data:</strong> Mengunduh data dokumen dan transaksi Anda dalam format terbuka (.xlsx, .json, .csv, .pdf) tanpa penguncian vendor (no vendor lock-in).</li>
                <li><strong>Hak Menarik Persetujuan:</strong> Menarik persetujuan pemrosesan data tertentu kapan saja melalui dasbor privasi.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="retensi-penghapusan" className="legal-section">
              <h2 className="legal-section-h2">
                <span>7. Retensi & Penghapusan Data</span>
              </h2>
              <p className="legal-paragraph">
                Kami menyimpan data pribadi Anda selama akun Anda berstatus aktif atau selama diperlukan untuk menyediakan layanan. Untuk catatan transaksi perpajakan (IndoTax) dan pembukuan yayasan (Yaycount), data disimpan selama 10 (sepuluh) tahun sesuai amanat Undang-Undang Ketentuan Umum dan Tata Cara Perpajakan (UU KUP) Republik Indonesia, setelah itu data dimusnahkan secara aman dan tersertifikasi.
              </p>
            </section>

            {/* Section 8 */}
            <section id="kontak-dpo" className="legal-section">
              <h2 className="legal-section-h2">
                <span>8. Petugas Pelindungan Data (Data Protection Officer)</span>
              </h2>
              <p className="legal-paragraph">
                Jika Anda memiliki pertanyaan, keberatan, atau ingin menggunakan hak-hak subjek data Anda, silakan hubungi tim Pelindungan Data Pribadi kami:
              </p>
              <div className="legal-callout" style={{ borderLeftColor: '#0067B8' }}>
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--ms-text-heading)' }}>
                  PT Karsa Solusi Teknologi &mdash; Divisi Kepatuhan & Keamanan Siber
                </p>
                <p style={{ margin: '6px 0 0 0', color: '#475569' }}>
                  Email: <a href="mailto:dpo@karsasoft.com" style={{ color: '#008768', fontWeight: 600 }}>dpo@karsasoft.com</a>
                  <br />
                  Departemen Legal: <a href="mailto:legal@karsasoft.com" style={{ color: '#008768', fontWeight: 600 }}>legal@karsasoft.com</a>
                  <br />
                  Alamat Kantor: Menara Karsa, Lantai 18, Kawasan Bisnis Terpadu, Jakarta Selatan 12950, Indonesia.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
