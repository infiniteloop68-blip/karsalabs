import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Icon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Panduan Merek Dagang & Hak Kekayaan Intelektual',
  description:
    'Pedoman resmi penggunaan merek dagang, logo, dan hak kekayaan intelektual PT Karsa Solusi Teknologi dan ekosistem Goletin.',
  alternates: {
    canonical: '/merek-dagang',
  },
  openGraph: {
    title: 'Panduan Merek Dagang & Hak Kekayaan Intelektual | Karsasoft',
    description:
      'Pedoman resmi penggunaan merek dagang, logo, dan hak kekayaan intelektual PT Karsa Solusi Teknologi.',
    url: 'https://karsasoft.com/merek-dagang',
    images: ['/og-image.jpg'],
  },
};

export default function MerekDagangPage() {
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
            <span style={{ color: 'var(--ms-text-heading)', fontWeight: 600 }}>Merek Dagang</span>
          </nav>
          <h1 className="legal-hero-title">Panduan Merek Dagang & Hak Cipta Karsasoft</h1>
          <p className="legal-hero-subtitle">
            Merek dagang dan identitas visual Karsasoft dan Goletin merupakan aset intelektual berharga milik PT Karsa Solusi Teknologi. Panduan ini mengatur penggunaan nama, logo, warna identitas, dan ikon produk kami oleh pelanggan, mitra, dan media.
          </p>
          <div className="legal-meta-row">
            <span className="legal-meta-badge">
              <Icon name="check" size={14} />
              Terdaftar di Ditjen HKI Republik Indonesia
            </span>
            <span>Berlaku Efektif: 5 Oktober 2026</span>
            <span>&bull;</span>
            <span>Versi Dokumen: 2.1</span>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="container">
        <div className="legal-body-container">
          {/* Sticky Table of Contents */}
          <aside className="legal-sidebar" aria-label="Daftar Isi Panduan Merek">
            <h2 className="legal-sidebar-title">Daftar Isi</h2>
            <ul className="legal-toc-list">
              <li><a href="#daftar-merek">1. Daftar Merek Dagang Resmi</a></li>
              <li><a href="#prinsip-dasar">2. Prinsip Dasar Penggunaan</a></li>
              <li><a href="#identitas-visual">3. Standar Identitas Visual & Warna</a></li>
              <li><a href="#panduan-mitra">4. Panduan untuk Mitra & Reseller</a></li>
              <li><a href="#hal-yang-dilarang">5. Penggunaan yang Dilarang</a></li>
              <li><a href="#pelaporan-pelanggaran">6. Pelaporan Pelanggaran HKI</a></li>
            </ul>

            <div className="legal-sidebar-contact">
              <strong>Permintaan Aset Brand Resmi?</strong>
              <p style={{ margin: '6px 0 0 0' }}>
                Unduh brand kit resmi atau hubungi:
                <br />
                <a href="mailto:brand@karsasoft.com" style={{ color: '#008768', fontWeight: 600 }}>
                  brand@karsasoft.com
                </a>
              </p>
            </div>
          </aside>

          {/* Document Content */}
          <main className="legal-main-content">
            {/* Section 1 */}
            <section id="daftar-merek" className="legal-section">
              <h2 className="legal-section-h2">
                <span>1. Daftar Merek Dagang Resmi</span>
              </h2>
              <p className="legal-paragraph">
                Tanda pengenal, nama dagang, dan logo berikut adalah merek dagang terdaftar (registered trademarks) atau merek dagang yang dilindungi undang-undang milik PT Karsa Solusi Teknologi di Republik Indonesia:
              </p>
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Nama Merek</th>
                    <th>Status</th>
                    <th>Klasifikasi Barang / Jasa (NICE)</th>
                    <th>Deskripsi Produk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Karsasoft&reg;</strong></td>
                    <td>Terdaftar</td>
                    <td>Kelas 9, 35, 42</td>
                    <td>Identitas korporasi induk pengembang ekosistem perangkat lunak nasional.</td>
                  </tr>
                  <tr>
                    <td><strong>Goletin&reg;</strong></td>
                    <td>Terdaftar</td>
                    <td>Kelas 9, 38, 42</td>
                    <td>Ekosistem platform ruang kerja terintegrasi (AI, Cloud, Docs, Sheets, Slides, Mail).</td>
                  </tr>
                  <tr>
                    <td><strong>Goletin AI&trade;</strong></td>
                    <td>Merek Dagang</td>
                    <td>Kelas 9, 42</td>
                    <td>Mesin penalaran cerdas dan asisten AI multimodal enterprise.</td>
                  </tr>
                  <tr>
                    <td><strong>IndoTax&reg;</strong></td>
                    <td>Terdaftar</td>
                    <td>Kelas 9, 35, 42</td>
                    <td>Engine kalkulasi dan kepatuhan regulasi perpajakan nasional (PPh 21 TER, PPN).</td>
                  </tr>
                  <tr>
                    <td><strong>Yaycount&reg; ERP</strong></td>
                    <td>Terdaftar</td>
                    <td>Kelas 9, 36, 42</td>
                    <td>Sistem akuntansi dan ERP keuangan yayasan/nirlaba kepatuhan PSAK 45 / ISAK 35.</td>
                  </tr>
                  <tr>
                    <td><strong>ECL Pro&reg;</strong></td>
                    <td>Terdaftar</td>
                    <td>Kelas 9, 36, 42</td>
                    <td>Engine kalkulasi Expected Credit Loss dan permodelan risiko perbankan IFRS 9.</td>
                  </tr>
                  <tr>
                    <td><strong>Lease Engine&reg;</strong></td>
                    <td>Terdaftar</td>
                    <td>Kelas 9, 36, 42</td>
                    <td>Otomatisasi pencatatan liabilitas sewa dan aset hak guna PSAK 73 / IFRS 16.</td>
                  </tr>
                  <tr>
                    <td><strong>Sampling Pro&trade; &amp; JET Pro&trade;</strong></td>
                    <td>Merek Dagang</td>
                    <td>Kelas 9, 42</td>
                    <td>Software audit sampling statistik ISA 530 dan pengujian fraud jurnal Benford ISA 240.</td>
                  </tr>
                  <tr>
                    <td><strong>CloudSave&trade;</strong></td>
                    <td>Merek Dagang</td>
                    <td>Kelas 9, 42</td>
                    <td>Layanan penyimpanan awan terenkripsi aman untuk data bisnis berdaulat.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Section 2 */}
            <section id="prinsip-dasar" className="legal-section">
              <h2 className="legal-section-h2">
                <span>2. Prinsip Dasar Penggunaan Merek</span>
              </h2>
              <p className="legal-paragraph">
                Saat merujuk pada produk Karsasoft atau Goletin dalam artikel, publikasi berita, materi pelatihan, atau presentasi bisnis, Anda diwajibkan:
              </p>
              <ul className="legal-list">
                <li>Menggunakan nama merek secara tepat sebagai kata sifat yang menerangkan kata benda umum (contoh: <em>&ldquo;perangkat lunak Goletin&rdquo;</em>, <em>&ldquo;engine akuntansi Yaycount&rdquo;</em>, bukan <em>&ldquo;sebuah Yaycount&rdquo;</em>).</li>
                <li>Menyertakan simbol &reg; atau &trade; pada penyebutan pertama yang paling menonjol dalam dokumen atau materi promosi.</li>
                <li>Menyertakan pernyataan atribusi kepemilikan merek, seperti: <em>&ldquo;Goletin dan Karsasoft adalah merek dagang terdaftar milik PT Karsa Solusi Teknologi.&rdquo;</em></li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="identitas-visual" className="legal-section">
              <h2 className="legal-section-h2">
                <span>3. Standar Identitas Visual & Warna Brand</span>
              </h2>
              <p className="legal-paragraph">
                Identitas visual kami dibangun di atas palet warna presisi dan tipografi resmi:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', margin: '20px 0' }}>
                <div style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--ms-border)', backgroundColor: '#FFFFFF' }}>
                  <div style={{ width: '100%', height: '40px', backgroundColor: '#00EDC2', borderRadius: '4px', marginBottom: '10px' }} />
                  <strong>Karsa Mint</strong>
                  <div style={{ fontSize: '13px', color: '#64748B', fontFamily: 'monospace' }}>HEX: #00EDC2</div>
                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>Warna aksen primer ekosistem Goletin.</div>
                </div>
                <div style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--ms-border)', backgroundColor: '#FFFFFF' }}>
                  <div style={{ width: '100%', height: '40px', backgroundColor: '#0E1726', borderRadius: '4px', marginBottom: '10px' }} />
                  <strong>Enterprise Navy</strong>
                  <div style={{ fontSize: '13px', color: '#64748B', fontFamily: 'monospace' }}>HEX: #0E1726</div>
                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>Warna latar kepatuhan & teks utama.</div>
                </div>
                <div style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--ms-border)', backgroundColor: '#FFFFFF' }}>
                  <div style={{ width: '100%', height: '40px', backgroundColor: '#008768', borderRadius: '4px', marginBottom: '10px' }} />
                  <strong>Deep Emerald</strong>
                  <div style={{ fontSize: '13px', color: '#64748B', fontFamily: 'monospace' }}>HEX: #008768</div>
                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>Warna link & tombol interaktif sekunder.</div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="panduan-mitra" className="legal-section">
              <h2 className="legal-section-h2">
                <span>4. Panduan untuk Mitra Resmi &amp; Reseller</span>
              </h2>
              <p className="legal-paragraph">
                Mitra resmi yang telah menandatangani Perjanjian Kemitraan (Partner Agreement) Karsasoft berhak menggunakan badge kemitraan resmi (misalnya <em>&ldquo;Karsasoft Authorized Partner&rdquo;</em> atau <em>&ldquo;Goletin Certified Solution Provider&rdquo;</em>) dengan ketentuan:
              </p>
              <ul className="legal-list">
                <li>Badge kemitraan tidak boleh ditampilkan lebih besar atau lebih dominan daripada logo perusahaan mitra sendiri.</li>
                <li>Tidak memodifikasi, memisahkan teks dari lambang, atau mengubah rasio aspek logo Karsasoft.</li>
                <li>Menjaga jarak aman (clear space) minimal setara dengan tinggi huruf &lsquo;K&rsquo; pada logo Karsasoft di seluruh sisi logo.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="hal-yang-dilarang" className="legal-section">
              <h2 className="legal-section-h2">
                <span>5. Penggunaan yang Dilarang Keras</span>
              </h2>
              <p className="legal-paragraph">
                Tindakan-tindakan berikut merupakan pelanggaran terhadap hak kekayaan intelektual PT Karsa Solusi Teknologi:
              </p>
              <ul className="legal-list">
                <li>Mendaftarkan nama domain internet yang mengandung kata &ldquo;Karsasoft&rdquo;, &ldquo;Goletin&rdquo;, atau nama produk kami tanpa persetujuan tertulis resmi.</li>
                <li>Menggunakan logo Karsasoft atau Goletin sebagai foto profil akun media sosial pihak ketiga dengan cara yang menimbulkan kesan sebagai akun resmi Karsasoft.</li>
                <li>Menggabungkan merek Karsasoft dengan nama produk atau merek dagang pihak ketiga tanpa izin lisensi bersama (co-branding).</li>
                <li>Meniru tampilan tata letak (look and feel) visual website atau antarmuka perangkat lunak kami untuk keperluan komersial mandiri.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="pelaporan-pelanggaran" className="legal-section">
              <h2 className="legal-section-h2">
                <span>6. Pelaporan Pelanggaran Merek &amp; HKI</span>
              </h2>
              <p className="legal-paragraph">
                Jika Anda menemukan pihak yang menyalahgunakan merek, memalsukan lisensi, atau melanggar hak kekayaan intelektual PT Karsa Solusi Teknologi, mohon laporkan temuan tersebut kepada Divisi Hukum &amp; HKI kami:
              </p>
              <div className="legal-callout" style={{ borderLeftColor: '#00EDC2' }}>
                <div className="legal-callout-title">
                  <Icon name="mail" size={16} />
                  Kanal Resmi Pelaporan HKI
                </div>
                Email: <a href="mailto:legal@karsasoft.com" style={{ color: '#008768', fontWeight: 600 }}>legal@karsasoft.com</a>
                <br />
                Telepon: +62 21 5088 0123 (Ext. Legal &amp; IP Protection)
                <br />
                Alamat: PT Karsa Solusi Teknologi, Menara Karsa Lt. 18, Jakarta Selatan 12950, Indonesia.
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
