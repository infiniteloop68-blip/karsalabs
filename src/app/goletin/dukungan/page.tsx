'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';
import { GoletinSubNav } from '@/components/GoletinSubNav';
import { useLanguage } from '@/i18n/LanguageContext';

interface GuideArticle {
  id: string;
  category: 'account' | 'install' | 'compliance';
  titleId: string;
  titleEn: string;
  readTime: string;
  badge: string;
  summaryId: string;
  summaryEn: string;
  stepsId: string[];
  stepsEn: string[];
}

interface QnAThread {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  timeAgo: string;
  votes: number;
  answers: number;
  isSolved: boolean;
  category: 'erp' | 'tax' | 'audit' | 'infra';
  tags: string[];
  snippet: string;
  solution?: string;
  solutionAuthor?: string;
}

export default function GoletinSupportPage() {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Q&A State
  const [qnaTab, setQnaTab] = useState<'all' | 'solved' | 'unsolved' | 'erp' | 'audit'>('all');
  const [userVotedIds, setUserVotedIds] = useState<Record<string, boolean>>({});

  // Guide Modal State
  const [activeGuide, setActiveGuide] = useState<GuideArticle | null>(null);

  // Ask Question Modal State
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [newQuestionCategory, setNewQuestionCategory] = useState<'erp' | 'tax' | 'audit' | 'infra'>('erp');
  const [newQuestionBody, setNewQuestionBody] = useState('');
  const [newQuestionSuccess, setNewQuestionSuccess] = useState(false);

  // Guide Articles Database
  const guideArticles: GuideArticle[] = useMemo(
    () => [
      // 1. Akun & Lisensi
      {
        id: 'license-activation',
        category: 'account',
        badge: isEn ? 'LICENSE' : 'LISENSI',
        titleId: 'Cara Aktivasi Lisensi Mandiri & Multi-Perangkat',
        titleEn: 'How to Activate Standalone & Multi-Device Licenses',
        readTime: '3 min',
        summaryId:
          'Panduan memasukkan kunci lisensi resmi, validasi token perusahaan, dan penetapan seat lisensi bagi anggota tim.',
        summaryEn:
          'Step-by-step guide to entering license keys, corporate token validation, and seat allocation for team members.',
        stepsId: [
          'Masuk ke portal Goletin Admin di https://goletin.com/dashboard menggunakan akun Administrator organisasi.',
          'Buka menu Pengaturan Organisasi > Manajemen Lisensi.',
          'Klik tombol "Aktivasi Kunci Baru", lalu masukkan 25-digit kode lisensi yang tertera pada faktur resmi pembelian Anda.',
          'Pilih anggota tim yang ingin diberikan hak akses modul (Docs, Sheets, Yaycount, IndoTax, dll).',
          'Pengguna akan menerima email konfirmasi otomatis dan aplikasi desktop mereka akan teraktivasi seketika.',
        ],
        stepsEn: [
          'Log in to Goletin Admin Portal at https://goletin.com/dashboard with your Organization Administrator account.',
          'Navigate to Organization Settings > License Management.',
          'Click "Activate New Key" and enter your 25-digit official license code provided in your invoice.',
          'Assign seats to team members for their authorized modules (Docs, Sheets, Yaycount, IndoTax, etc.).',
          'Users will receive an automated invitation and their desktop apps will activate instantly.',
        ],
      },
      {
        id: 'mfa-sso-setup',
        category: 'account',
        badge: isEn ? 'SECURITY' : 'KEAMANAN',
        titleId: 'Pengaturan Autentikasi Dua Faktor (MFA) & Integrasi SSO SAML 2.0',
        titleEn: 'Setting Up Multi-Factor Authentication (MFA) & SAML 2.0 SSO',
        readTime: '4 min',
        summaryId:
          'Proteksi akun dengan verifikasi dua langkah (TOTP) dan integrasi Single Sign-On korporat menggunakan Microsoft Entra ID atau Okta.',
        summaryEn:
          'Protect accounts with two-step verification (TOTP) and integrate corporate Single Sign-On using Microsoft Entra ID or Okta.',
        stepsId: [
          'Di profil akun Anda, pilih menu Keamanan & Kata Sandi.',
          'Klik "Aktifkan Autentikasi Dua Faktor (2FA)".',
          'Pindai QR code menggunakan aplikasi Microsoft Authenticator atau Google Authenticator pada ponsel Anda.',
          'Simpan 10 kode pemulihan darurat di tempat penyimpanan aman.',
          'Bagi pelanggan Enterprise yang memerlukan SAML 2.0 SSO, hubungi support kami untuk pertukaran metadata XML IdP/SP.',
        ],
        stepsEn: [
          'In your profile settings, select Security & Password.',
          'Click "Enable Multi-Factor Authentication (MFA)".',
          'Scan the QR code with Microsoft Authenticator or Google Authenticator on your mobile device.',
          'Save the 10 emergency recovery codes in a secure vault.',
          'Enterprise clients requiring SAML 2.0 SSO can submit their IdP/SP XML metadata via our enterprise console.',
        ],
      },
      {
        id: 'tax-invoice-download',
        category: 'account',
        badge: isEn ? 'BILLING' : 'TAGIHAN',
        titleId: 'Mengunduh Faktur Komersial & e-Faktur Pajak PPN 11% Resmi',
        titleEn: 'Downloading Official Invoices & e-Faktur Tax Receipts (PPN 11%)',
        readTime: '2 min',
        summaryId:
          'Tata cara mengunduh salinan kwitansi resmi, bukti potong PPh, dan dokumen e-Faktur dengan QR Code DJP terverifikasi.',
        summaryEn:
          'How to download official payment receipts, withholding tax slips, and QR-verified DJP tax invoices.',
        stepsId: [
          'Buka menu Tagihan & Langganan di konsol admin.',
          'Pilih periode pembayaran atau riwayat invoice yang diinginkan.',
          'Pastikan NPWP 16-digit (atau NIK) dan Nama Perusahaan sudah terverifikasi di profil perpajakan Anda.',
          'Klik "Unduh e-Faktur PDF" untuk dokumen bertanda tangan digital resmi dari Direktorat Jenderal Pajak (DJP).',
          'Bukti potong PPh Pasal 23 dapat diunggah melalui formulir pelaporan mandiri pada halaman yang sama.',
        ],
        stepsEn: [
          'Navigate to Billing & Subscriptions in the admin console.',
          'Select the desired billing period or invoice history item.',
          'Verify that your 16-digit NPWP (or tax ID) matches your verified tax entity profile.',
          'Click "Download e-Faktur PDF" for the officially stamped DJP digital invoice.',
          'Withholding tax slips (PPh 23) can be uploaded directly via the reconciliation tab.',
        ],
      },
      {
        id: 'admin-transfer',
        category: 'account',
        badge: isEn ? 'ADMIN' : 'ADMINISTRATOR',
        titleId: 'Prosedur Pergantian Super Administrator & Mutasi Tenant',
        titleEn: 'Procedures for Super Admin Transfer & Organization Ownership',
        readTime: '3 min',
        summaryId:
          'Prosedur resmi pemindahan wewenang admin utama demi menjaga kepatuhan tata kelola dan kedaulatan data organisasi.',
        summaryEn:
          'Standard operating procedure for delegating primary tenant ownership to ensure organizational governance.',
        stepsId: [
          'Siapkan surat permohonan resmi berkop instansi yang ditandatangani oleh Direktur / Pimpinan Yayasan.',
          'Buka Konsol Admin > Manajemen Pengguna, lalu undang email calon Super Administrator baru.',
          'Kirimkan tiket verifikasi pergantian admin melalui portal bantuan resmi Karsasoft.',
          'Tim kepatuhan kami akan melakukan verifikasi video call singkat atau validasi tanda tangan elektronik.',
          'Wewenang master tenant dialihkan dalam waktu maksimal 1x24 jam kerja.',
        ],
        stepsEn: [
          'Prepare an official letterhead transfer request signed by your authorized Director or Managing Partner.',
          'In Admin Console > User Management, invite the new primary administrator email.',
          'Submit an ownership reassignment ticket through Karsasoft Support.',
          'Our compliance desk will conduct a swift video identity verification or digital signature check.',
          'Master tenant privileges are transferred within 1 business day.',
        ],
      },

      // 2. Instalasi & Desktop
      {
        id: 'desktop-install',
        category: 'install',
        badge: isEn ? 'INSTALL' : 'INSTALASI',
        titleId: 'Unduh & Pasang Goletin Desktop untuk Windows 10/11 & macOS',
        titleEn: 'Download & Install Goletin Desktop for Windows 10/11 & macOS',
        readTime: '4 min',
        summaryId:
          'Panduan instalasi paket MSI enterprise, opsi silent installation via Group Policy, dan aplikasi native Apple Silicon.',
        summaryEn:
          'Installation instructions for enterprise MSI packages, GPO silent rollout, and Apple Silicon native packages.',
        stepsId: [
          'Unduh paket instalasi resmi dari portal Goletin sesuai arsitektur perangkat Anda (Windows 64-bit MSI atau macOS .dmg).',
          'Jalankan file penginstal dengan hak administrator (Run as Administrator).',
          'Untuk penyebaran korporat otomatis melalui Active Directory GPO atau Microsoft Intune, gunakan parameter: msiexec /i GoletinSetup.msi /qn.',
          'Buka aplikasi Goletin dan masuk menggunakan kredensial email kerja Anda.',
          'Aplikasi akan secara otomatis mengunduh konfigurasi cache lokal dan enkripsi CloudSave.',
        ],
        stepsEn: [
          'Download the official release package matching your OS architecture (Windows 64-bit MSI or macOS .dmg).',
          'Run the installer with local administrator privileges.',
          'For corporate fleet rollout via Active Directory GPO or Microsoft Intune, use: msiexec /i GoletinSetup.msi /qn.',
          'Launch Goletin Desktop and authenticate using your work credentials.',
          'The client will initialize local zero-knowledge cache and mount sovereign CloudSave.',
        ],
      },
      {
        id: 'system-requirements',
        category: 'install',
        badge: isEn ? 'SPECS' : 'SPESIFIKASI',
        titleId: 'Persyaratan Sistem Minimum & Panduan Mode Kerja Luring (Offline)',
        titleEn: 'System Requirements & Offline Work Mode Instructions',
        readTime: '3 min',
        summaryId:
          'Spesifikasi perangkat keras komputer yang direkomendasikan serta mekanisme sinkronisasi data saat tidak ada koneksi internet.',
        summaryEn:
          'Recommended hardware prerequisites and seamless local cache synchronization when disconnected from the internet.',
        stepsId: [
          'Sistem Operasi: Windows 10 (Build 19041+) / Windows 11, atau macOS Monterey (12.0) ke atas.',
          'Prosesor: Intel Core i3 / AMD Ryzen 3 generasi modern, atau Apple Silicon (M1/M2/M3/M4).',
          'RAM: Minimum 4 GB (disarankan 8 GB untuk pengguna modul audit forensik JET Pro & database besar).',
          'Penyimpanan: 2 GB ruang kosong SSD untuk instalasi aplikasi dan cache lokal.',
          'Mode Offline: Seluruh pekerjaan di Docs, Sheets, dan Yaycount disimpan di SQLite terenkripsi lokal dan otomatis disinkronkan saat terhubung kembali.',
        ],
        stepsEn: [
          'Operating System: Windows 10 (Build 19041+) / Windows 11, or macOS Monterey (12.0) and newer.',
          'Processor: Intel Core i3 / AMD Ryzen 3 or later, or Apple Silicon (M1/M2/M3/M4).',
          'RAM: Minimum 4 GB (8 GB recommended for JET Pro forensic audit and large datasets).',
          'Storage: 2 GB free SSD space for application binary and zero-knowledge local cache.',
          'Offline Mode: All edits in Docs, Sheets, and Yaycount save to local encrypted SQLite and synchronize upon reconnection.',
        ],
      },
      {
        id: 'cloudsave-backup',
        category: 'install',
        badge: isEn ? 'STORAGE' : 'PENYIMPANAN',
        titleId: 'Konfigurasi CloudSave & Perlindungan Terhadap Ransomware',
        titleEn: 'CloudSave Configuration & Anti-Ransomware Safeguards',
        readTime: '3 min',
        summaryId:
          'Pengaturan folder sinkronisasi otomatis, enkripsi end-to-end AES-256 di data center lokal Indonesia, dan rollback versi file.',
        summaryEn:
          'Automated sync folder configuration, AES-256 encryption in sovereign Indonesian data centers, and file version rollback.',
        stepsId: [
          'Buka preferensi Goletin Desktop > Tab CloudSave.',
          'Pilih folder kerja lokal yang ingin disinkronkan secara kontinu.',
          'Aktifkan opsi "Version History Protection" untuk mempertahankan riwayat revisi berkas hingga 30 hari (atau tak terbatas pada paket Enterprise).',
          'Jika terjadi serangan ransomware pada perangkat fisik Anda, gunakan fitur "Point-in-Time Rollback" di portal web untuk memulihkan seluruh folder ke kondisi sebelum terinfeksi.',
        ],
        stepsEn: [
          'Open Goletin Desktop Preferences > CloudSave Tab.',
          'Designate the local workspace directories for continuous synchronization.',
          'Enable "Version History Protection" to retain rolling snapshots for 30 days (or unlimited on Enterprise).',
          'In case of local ransomware compromise, activate "Point-in-Time Rollback" via web console to restore pre-incident snapshots.',
        ],
      },
      {
        id: 'auto-updates',
        category: 'install',
        badge: isEn ? 'UPDATES' : 'PEMBARUAN',
        titleId: 'Pembaruan Otomatis Modul Perpajakan & Patch Kepatuhan',
        titleEn: 'Automated Tax Formula Updates & Compliance Hotfixes',
        readTime: '2 min',
        summaryId:
          'Cara kerja pembaruan regulasi otomatis tanpa memerlukan instalasi ulang seluruh paket aplikasi.',
        summaryEn:
          'How automated regulatory rule packs update smoothly without requiring complete application reinstallation.',
        stepsId: [
          'Aplikasi Goletin dilengkapi dengan engine Background Delta Updater yang hemat kuota.',
          'Ketika Kementerian Keuangan / Ditjen Pajak menerbitkan aturan tarif baru (misalnya skema tarif PPh 21 TER atau penyesuaian PPN), tabel aturan diperbarui otomatis.',
          'Administrator dapat memilih saluran rilis: Stable (Rilis Resmi) atau Beta (Pratinjau Pengujian).',
          'Status pembaruan modul dapat diperiksa sewaktu-waktu melalui menu Bantuan > Tentang Goletin.',
        ],
        stepsEn: [
          'Goletin Desktop utilizes an intelligent Background Delta Updater.',
          'When statutory tax formulas are updated by the Ministry of Finance / DJP, engine tables update automatically.',
          'Administrators can toggle deployment channels: Stable (Official) or Early Adopter (Preview).',
          'Verify active regulatory engine versions anytime via Help > About Goletin.',
        ],
      },

      // 3. Kepatuhan & Standar Akuntansi
      {
        id: 'opening-balance-import',
        category: 'compliance',
        badge: isEn ? 'ERP' : 'AKUNTANSI',
        titleId: 'Template Impor Saldo Awal Buku Besar ke Yaycount ERP',
        titleEn: 'Opening Balance Import Templates for Yaycount ERP',
        readTime: '5 min',
        summaryId:
          'Panduan migrasi akun bagan akun (COA), neraca saldo awal, dan saldo subledger dari sistem akuntansi sebelumnya via Excel.',
        summaryEn:
          'Step-by-step migration guide for Chart of Accounts (COA), opening trial balances, and subsidiary ledgers via Excel.',
        stepsId: [
          'Buka Yaycount ERP > Buku Besar > Pengaturan Saldo Awal.',
          'Klik "Unduh Template Excel Resmi (.xlsx)" yang telah diformat sesuai standar ISAK 35 / PSAK.',
          'Isi kode akun, nama akun, saldo debit, dan saldo kredit dengan memastikan jumlah total seimbang (balance).',
          'Unggah kembali berkas Excel ke Yaycount; engine validasi kami akan mendeteksi inkonsistensi sebelum data disimpan permanen.',
          'Klik "Posting Saldo Awal" untuk menetapkan buku besar awal periode organisasi Anda.',
        ],
        stepsEn: [
          'Navigate to Yaycount ERP > General Ledger > Opening Balance Configuration.',
          'Download the pre-formatted Standard XLSX Template adhering to ISAK 35 / PSAK standards.',
          'Input account codes, descriptions, debits, and credits, ensuring absolute trial balance equilibrium.',
          'Upload the spreadsheet; our automated validation engine checks for anomalies prior to commit.',
          'Click "Post Opening Balances" to lock your opening ledger state.',
        ],
      },
      {
        id: 'indotax-reconciliation',
        category: 'compliance',
        badge: isEn ? 'TAX' : 'PERPAJAKAN',
        titleId: 'Rekonsiliasi Data e-Faktur DJP dengan Buku Besar Pajak',
        titleEn: 'Reconciling DJP e-Faktur Data with General Ledger Tax Accounts',
        readTime: '4 min',
        summaryId:
          'Mencocokkan nomor faktur masukan/keluaran secara otomatis dengan akun hutang/piutang PPN untuk mencegah selisih SPT Masa.',
        summaryEn:
          'Automated cross-matching of input/output tax invoices against VAT balance sheets to eliminate discrepancy errors.',
        stepsId: [
          'Di aplikasi IndoTax, hubungkan profil sertifikat elektronik e-Faktur Anda.',
          'Pilih menu Rekonsiliasi Masa Pajak > Tarik Data Faktur Masukan & Keluaran.',
          'Sistem akan mencocokkan Nomor Seri Faktur Pajak (NSFP) dengan jurnal akun Kas/Piutang di Yaycount.',
          'Faktur yang belum dicatat atau terdapat selisih pembulatan akan disorot dengan warna kuning untuk diverifikasi manual.',
          'Ekspor lembar rekonsiliasi berformat PDF untuk arsip pemeriksaan pajak berkala.',
        ],
        stepsEn: [
          'In IndoTax, connect your official digital e-Faktur certificate (.p12).',
          'Select Period Reconciliation > Pull Inbound & Outbound Invoices.',
          'The engine cross-checks NSFP tax numbers against ledger transactions in Yaycount.',
          'Unmatched records or rounding variance items are highlighted for audit review.',
          'Export audit-ready reconciliation workpapers in PDF format.',
        ],
      },
      {
        id: 'ecl-model-validation',
        category: 'compliance',
        badge: isEn ? 'IFRS 9' : 'PSAK 71',
        titleId: 'Validasi Matematis Model Penurunan Nilai CKPN (ECL Pro)',
        titleEn: 'Mathematical Validation for Expected Credit Loss Models (ECL Pro)',
        readTime: '6 min',
        summaryId:
          'Metodologi penyesuaian makroekonomi, matriks probabilitas gagal bayar (PD), dan loss given default (LGD) sesuai standar OJK.',
        summaryEn:
          'Methodology for macroeconomic overlay forecasting, PD matrices, and LGD parameters compliant with OJK guidelines.',
        stepsId: [
          'Buka modul ECL Pro > Konfigurasi Parameter Portofolio.',
          'Tentukan klasifikasi aset instrumen keuangan ke dalam Stage 1 (12-Bulan), Stage 2 (Lifetime SICR), atau Stage 3 (Impaired).',
          'Masukkan bobot skenario makroekonomi (Base, Optimistic, Downturn) dengan variabel PDB, inflasi, dan suku bunga BI-Rate.',
          'Jalankan simulasi komputasi Monte Carlo untuk menghitung nilai cadangan kerugian penurunan nilai (CKPN).',
          'Ekspor kertas kerja audit komprehensif berformat Excel dengan formula matematis transparan untuk Kantor Akuntan Publik (KAP).',
        ],
        stepsEn: [
          'Access ECL Pro > Portfolio Parameter Matrix.',
          'Segment credit exposures into Stage 1 (12-Month), Stage 2 (Lifetime SICR), or Stage 3 (Credit-Impaired).',
          'Configure macroeconomic forward-looking weightings (Baseline, Optimistic, Adverse) tied to GDP and BI-Rate indicators.',
          'Execute the computation engine to derive required Expected Credit Loss allowances.',
          'Generate fully formulated transparent Excel audit workpapers for independent auditor validation.',
        ],
      },
      {
        id: 'audit-workpapers-jet',
        category: 'compliance',
        badge: isEn ? 'AUDIT' : 'ISA 240',
        titleId: 'Kertas Kerja Audit Forensik & Sampling Statistik (JET & Sampling Pro)',
        titleEn: 'Forensic Journal Audit Workpapers & Statistical Sampling (JET & Sampling Pro)',
        readTime: '5 min',
        summaryId:
          'Pengujian anomali jurnal tidak wajar (weekend entries, round sums, post-closing entries) dan sampling statistik ISA 530.',
        summaryEn:
          'Testing for fraudulent journal entries (weekend postings, round numbers, post-closing adjustments) and ISA 530 sampling.',
        stepsId: [
          'Di aplikasi JET Pro, unggah buku jurnal umum transaksi satu tahun buku.',
          'Aktifkan 12 kriteria pengujian risiko kecurangan (fraud risk assessment) berbasis standar ISA 240.',
          'Gunakan Sampling Pro untuk menarik sampel statistik menggunakan metode Monetary Unit Sampling (MUS) atau Attribute Sampling.',
          'Sistem akan menghasilkan dokumentasi indeks audit (A.100, B.200) lengkap dengan ringkasan deviasi.',
          'Kertas kerja dapat ditandatangani digital oleh Manajer Audit dan Rekan Penanggung Jawab KAP.',
        ],
        stepsEn: [
          'In JET Pro, ingest the complete general ledger transaction journal for the fiscal year.',
          'Run automated screening across 12 fraud indicators aligned with ISA 240 standards.',
          'Transfer filtered populations into Sampling Pro for Monetary Unit Sampling (MUS) or Attribute Sampling extraction.',
          'The suite formats indexed audit working papers (A.100, B.200) documenting evaluated exceptions.',
          'Workpapers support digital cryptographic signatures from Audit Managers and Engagement Partners.',
        ],
      },
    ],
    [isEn]
  );

  // Official Goletin Applications Database
  const goletinApps = [
    {
      name: 'Goletin Docs',
      logo: '/logos/docs.svg',
      descId: 'Pengolah dokumen bisnis resmi & template laporan standar.',
      descEn: 'Official business document authoring & standardized reporting templates.',
      href: 'https://docs.goletin.com',
    },
    {
      name: 'Goletin Sheets',
      logo: '/logos/sheets.svg',
      descId: 'Spreadsheet pemodelan finansial, rumus akuntansi & analisis data.',
      descEn: 'Financial modeling spreadsheets, accounting formulas & data analysis.',
      href: 'https://sheets.goletin.com',
    },
    {
      name: 'Goletin Slides',
      logo: '/logos/slides.svg',
      descId: 'Presentasi visual eksekutif & dashboard dewan komisaris.',
      descEn: 'Executive presentation decks & board-level KPI dashboards.',
      href: 'https://slides.goletin.com',
    },
    {
      name: 'Yaycount ERP',
      logo: '/logos/yaycount.svg',
      descId: 'Buku besar komprehensif, standar ISAK 35 & manajemen aset.',
      descEn: 'Integrated ledger, ISAK 35 non-profit standards & asset inventory.',
      href: 'https://yaycount.goletin.com',
    },
    {
      name: 'IndoTax',
      logo: '/logos/indotax.svg',
      descId: 'Otomasi e-Faktur PPN 11%, Bukti Potong PPh & bridging DJP.',
      descEn: 'e-Faktur PPN 11% automation, withholding tax & DJP tax bridging.',
      href: 'https://indotax.goletin.com',
    },
    {
      name: 'Lease Pro',
      logo: '/logos/lease.svg',
      descId: 'Engine amortisasi sewa pembiayaan standar PSAK 73 / IFRS 16.',
      descEn: 'Lease liability & right-of-use asset amortization engine (IFRS 16).',
      href: 'https://lease.goletin.com',
    },
    {
      name: 'ECL Pro',
      logo: '/logos/eclpro.svg',
      descId: 'Kalkulasi matematis penurunan nilai CKPN PSAK 71 / IFRS 9.',
      descEn: 'Expected Credit Loss (ECL) forward-looking modeler (IFRS 9).',
      href: 'https://ecl.goletin.com',
    },
    {
      name: 'JET Pro',
      logo: '/logos/jet-pro.svg',
      descId: 'Pengujian jurnal entri forensik berbasis risiko standar ISA 240.',
      descEn: 'Forensic journal entry testing for fraud risks under ISA 240.',
      href: 'https://jet.goletin.com',
    },
    {
      name: 'Sampling Pro',
      logo: '/logos/sampling.svg',
      descId: 'Metodologi sampling audit statistik MUS & Atribut ISA 530.',
      descEn: 'Statistical audit sampling suite for MUS & Attribute tests (ISA 530).',
      href: 'https://sampling.goletin.com',
    },
    {
      name: 'CloudSave',
      logo: '/logos/cloudsave.svg',
      descId: 'Ruang kerja awan aman berdaulat di pusat data Tier-4 Indonesia.',
      descEn: 'Sovereign zero-knowledge cloud workspace in Tier-4 local data centers.',
      href: 'https://cloudsave.goletin.com',
    },
  ];

  // Q&A Community Threads Database (Microsoft Q&A format)
  const initialQnAThreads: QnAThread[] = useMemo(
    () => [
      {
        id: 'qna-1',
        title: isEn
          ? 'How to bulk import 50,000+ journal entries into Yaycount without connection timeouts?'
          : 'Bagaimana cara impor 50.000+ baris jurnal umum ke Yaycount tanpa jeda koneksi?',
        author: 'Fajar Nugraha (CPA)',
        authorRole: isEn ? 'Audit Senior Manager' : 'Manajer Senior Audit',
        timeAgo: isEn ? '2 hours ago' : '2 jam yang lalu',
        votes: 18,
        answers: 4,
        isSolved: true,
        category: 'erp',
        tags: ['Yaycount ERP', 'Batch Import', 'Performance', 'Excel'],
        snippet: isEn
          ? 'We are migrating a client general ledger with 65,000 rows. What is the recommended batching threshold to ensure complete ledger validation?'
          : 'Kami sedang memigrasikan buku besar klien dengan 65.000 baris transaksi. Bagaimana pengaturan threshold batching yang disarankan agar proses validasi tidak putus di tengah jalan?',
        solution: isEn
          ? 'Use the "Batch Chunking Mode" under Yaycount Advanced Settings. The engine will automatically process records in 5,000-row async queues while verifying trial balance balance in real-time.'
          : 'Gunakan fitur "Batch Chunking Mode" di menu Pengaturan Lanjutan Yaycount. Sistem akan otomatis membagi berkas menjadi antrian latar belakang 5.000 baris dengan validasi integritas debit-kredit secara real-time.',
        solutionAuthor: 'Karsasoft Core Engineering Team',
      },
      {
        id: 'qna-2',
        title: isEn
          ? 'Decentralized branch e-Faktur certificate configuration in IndoTax'
          : 'Konfigurasi sertifikat digital e-Faktur di IndoTax untuk kantor cabang terdesentralisasi',
        author: 'Dian Permatasari',
        authorRole: isEn ? 'Corporate Tax Specialist' : 'Spesialis Pajak Korporasi',
        timeAgo: isEn ? '1 day ago' : '1 hari yang lalu',
        votes: 27,
        answers: 6,
        isSolved: true,
        category: 'tax',
        tags: ['IndoTax', 'e-Faktur PPN', 'Multi-Cabang', 'DJP'],
        snippet: isEn
          ? 'Can sub-branches upload their individual NPWP digital certificates while maintaining consolidated headquarters reporting?'
          : 'Apakah setiap cabang dapat menggunakan sertifikat elektronik masing-masing untuk upload faktur keluaran namun pembukuan PPN tetap terkonsolidasi di kantor pusat?',
        solution: isEn
          ? 'Yes. Under Organization Settings > IndoTax Permissions, designate the root tenant as Parent and add Branch entities with their respective .p12 certificates. Headquarters retains unified reporting.'
          : 'Bisa. Pada menu Pengaturan Entitas > Hak Akses IndoTax, tentukan kantor pusat sebagai Induk dan tambahkan entitas Cabang dengan file .p12 masing-masing. Pelaporan SPT Masa tetap terkonsolidasi penuh.',
        solutionAuthor: 'Tim Teknis Pajak Karsasoft',
      },
      {
        id: 'qna-3',
        title: isEn
          ? 'Does Lease Pro engine support rent concession and contract term adjustments under PSAK 73?'
          : 'Apakah engine Lease Pro mendukung perhitungan konsesi sewa dan modifikasi masa kontrak PSAK 73?',
        author: 'Bambang Sudiro',
        authorRole: isEn ? 'Financial Controller' : 'Kontroler Keuangan',
        timeAgo: isEn ? '3 days ago' : '3 hari yang lalu',
        votes: 14,
        answers: 2,
        isSolved: true,
        category: 'audit',
        tags: ['Lease Pro', 'PSAK 73', 'IFRS 16', 'Amortisasi'],
        snippet: isEn
          ? 'How should we input a revised incremental borrowing rate (IBR) following lease duration extension without breaking past amortization history?'
          : 'Bagaimana cara memasukkan penyesuaian suku bunga diskonto (IBR) setelah adendum perpanjangan kontrak tanpa merusak catatan amortisasi periode lampau?',
        solution: isEn
          ? 'Navigate to Contract Actions > Lease Remeasurement. Input the new IBR and amendment effective date. The engine recalculates the Right-of-Use asset prospectively per PSAK 73 paragraph 45.'
          : 'Pilih Kontrak Terkait > Modifikasi Kontrak (Remeasurement). Masukkan tingkat diskonto IBR baru dan tanggal efektif adendum. Sistem akan menghitung penyesuaian nilai aset hak-guna secara prospektif sesuai PSAK 73 paragraf 45.',
        solutionAuthor: 'Konsultan Kepatuhan PSAK Karsasoft',
      },
      {
        id: 'qna-4',
        title: isEn
          ? 'Configuring CloudSave in high-security banking networks with strict firewalls'
          : 'Panduan sinkronisasi CloudSave di jaringan perbankan dengan firewall ketat',
        author: 'Rian Pratama',
        authorRole: isEn ? 'IT Infrastructure Architect' : 'Arsitek Infrastruktur IT',
        timeAgo: isEn ? '4 days ago' : '4 hari yang lalu',
        votes: 9,
        answers: 3,
        isSolved: false,
        category: 'infra',
        tags: ['CloudSave', 'Security', 'Enterprise', 'On-Premise'],
        snippet: isEn
          ? 'Our internal policy restricts outbound HTTPS connections outside authorized whitelisted IP ranges. Where can we obtain the static IP cluster for Karsasoft Tier-4 nodes?'
          : 'Kebijakan internal bank kami membatasi koneksi port keluar selain whitelist IP yang ditentukan OJK. Di mana kami dapat memperoleh daftar CIDR IP cluster data center Tier-4 Karsasoft?',
      },
    ],
    [isEn]
  );

  const [qnaThreads, setQnaThreads] = useState<QnAThread[]>(initialQnAThreads);

  // FAQ Accordion Database
  const faqs = useMemo(
    () => [
      {
        qId: 'Bagaimana cara mengajukan tiket gangguan teknis dan berapa waktu responsnya?',
        qEn: 'How do I submit an incident support ticket and what is the guaranteed response SLA?',
        aId: 'Anda dapat mengajukan tiket bantuan melalui portal helpdesk Karsasoft atau menu Pusat Bantuan di dalam aplikasi Goletin. Untuk pemegang paket Bisnis Standar, waktu respons rata-rata di bawah 2 jam selama jam kerja. Pemegang paket Bisnis Premium dan Enterprise mendapatkan prioritas respons darurat 24/7 di bawah 30 menit.',
        aEn: 'You can submit assistance tickets via the Karsasoft helpdesk portal or inside any Goletin application. Business Standard accounts enjoy sub-2-hour SLA during business hours. Business Premium and Enterprise subscribers receive 24/7 sub-30-minute critical incident response.',
      },
      {
        qId: 'Di mana saya dapat mengunduh dokumen kepatuhan SOC 2, ISO 27001, dan sertifikat data center?',
        qEn: 'Where can I download SOC 2, ISO 27001 certifications and sovereign data center audit reports?',
        aId: 'Dokumen kepatuhan keamanan informasi, sertifikasi ISO 27001:2022, serta surat kepatuhan Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022) dapat diunduh langsung oleh Administrator Organisasi melalui menu Keamanan & Kepatuhan di konsol admin Goletin atau diminta melalui tim account manager.',
        aEn: 'Information security audit certifications, ISO 27001:2022 accreditations, and official compliance declarations regarding Indonesian Personal Data Protection Act (UU PDP No. 27/2022) are downloadable by Organization Administrators in the Security & Compliance console.',
      },
      {
        qId: 'Apakah tersedia pendampingan migrasi data dari sistem akuntansi atau cloud storage sebelumnya?',
        qEn: 'Is guided onboarding and data migration assistance available from legacy ERP or cloud storage?',
        aId: 'Ya. Karsasoft menyediakan template migrasi otomatis berbasis Excel/CSV untuk memindahkan saldo buku besar, bagan akun (COA), daftar inventaris, dan database kontak. Tim spesialis onboarding kami juga dapat menjadwalkan sesi panduan teknis langsung untuk tim finance dan IT organisasi Anda.',
        aEn: 'Yes. Karsasoft provides structured XLSX/CSV ingestion templates to migrate general ledger balances, Chart of Accounts, inventory catalogs, and contact directories. Our solutions engineering team is available for hands-on technical onboarding sessions.',
      },
      {
        qId: 'Bagaimana cara memverifikasi bahwa korespondensi email berasal dari tim resmi Karsasoft?',
        qEn: 'How can our IT team verify that emails genuinely originate from official Karsasoft personnel?',
        aId: 'Seluruh korespondensi email resmi dari Karsasoft selalu dikirimkan menggunakan domain resmi berakhiran @karsasoft.com atau @goletin.com dengan tanda tangan digital SPF, DKIM, dan DMARC yang terverifikasi (p=reject). Kami tidak pernah meminta kata sandi akun atau kode OTP Anda.',
        aEn: 'All legitimate communications are transmitted exclusively from verified @karsasoft.com or @goletin.com domains with enforced SPF, DKIM 2048-bit, and strict DMARC enforcement (p=reject). Karsasoft representatives will never solicit passwords or OTP codes.',
      },
      {
        qId: 'Bagaimana prosedur penambahan kuota penyimpanan CloudSave atau pengguna tambahan di tengah periode lisensi?',
        qEn: 'What is the procedure for adding CloudSave storage quotas or team seats mid-billing cycle?',
        aId: 'Penambahan seat pengguna atau kapasitas penyimpanan CloudSave dapat dilakukan kapan saja secara instan melalui menu Langganan di konsol admin. Biaya akan dihitung secara prorata berdasarkan sisa hari masa aktif lisensi Anda.',
        aEn: 'Additional user seats or CloudSave terabytes can be provisioned instantaneously via Admin Console > Subscriptions. Costs are calculated on a prorated basis according to remaining billing cycle days.',
      },
    ],
    []
  );

  // Search filter handler
  const handleChipClick = (chipText: string) => {
    if (activeChip === chipText) {
      setActiveChip(null);
      setSearchQuery('');
    } else {
      setActiveChip(chipText);
      setSearchQuery(chipText);
    }
  };

  // Upvote Q&A Thread Handler
  const handleVote = (threadId: string) => {
    const hasVoted = userVotedIds[threadId];
    setUserVotedIds((prev) => ({ ...prev, [threadId]: !hasVoted }));
    setQnaThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, votes: hasVoted ? t.votes - 1 : t.votes + 1 } : t))
    );
  };

  // Filter Q&A by Tab and Search
  const filteredQnAThreads = useMemo(() => {
    return qnaThreads.filter((t) => {
      // Tab filter
      if (qnaTab === 'solved' && !t.isSolved) return false;
      if (qnaTab === 'unsolved' && t.isSolved) return false;
      if (qnaTab === 'erp' && t.category !== 'erp' && t.category !== 'tax') return false;
      if (qnaTab === 'audit' && t.category !== 'audit') return false;

      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = t.title.toLowerCase().includes(q);
        const matchSnippet = t.snippet.toLowerCase().includes(q);
        const matchTags = t.tags.some((tag) => tag.toLowerCase().includes(q));
        if (!matchTitle && !matchSnippet && !matchTags) return false;
      }

      return true;
    });
  }, [qnaThreads, qnaTab, searchQuery]);

  // Filter Guide Articles by Search
  const filteredGuides = useMemo(() => {
    if (!searchQuery.trim()) return guideArticles;
    const q = searchQuery.toLowerCase();
    return guideArticles.filter(
      (g) =>
        g.titleId.toLowerCase().includes(q) ||
        g.titleEn.toLowerCase().includes(q) ||
        g.summaryId.toLowerCase().includes(q) ||
        g.summaryEn.toLowerCase().includes(q) ||
        g.badge.toLowerCase().includes(q)
    );
  }, [guideArticles, searchQuery]);

  // Submit new Question Form Handler
  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionTitle.trim() || !newQuestionBody.trim()) return;

    const newThread: QnAThread = {
      id: `qna-${Date.now()}`,
      title: newQuestionTitle,
      author: isEn ? 'You (Verified User)' : 'Anda (Pengguna Terverifikasi)',
      authorRole: isEn ? 'Community Member' : 'Anggota Komunitas',
      timeAgo: isEn ? 'Just now' : 'Baru saja',
      votes: 1,
      answers: 0,
      isSolved: false,
      category: newQuestionCategory,
      tags: [
        newQuestionCategory === 'erp'
          ? 'Yaycount ERP'
          : newQuestionCategory === 'tax'
          ? 'IndoTax'
          : newQuestionCategory === 'audit'
          ? 'Audit Compliance'
          : 'Infrastructure',
        'Komunitas',
      ],
      snippet: newQuestionBody,
    };

    setQnaThreads([newThread, ...qnaThreads]);
    setUserVotedIds((prev) => ({ ...prev, [newThread.id]: true }));
    setNewQuestionSuccess(true);
    setTimeout(() => {
      setNewQuestionSuccess(false);
      setIsAskModalOpen(false);
      setNewQuestionTitle('');
      setNewQuestionBody('');
    }, 1200);
  };

  return (
    <>
      <GoletinSubNav />

      <div className="support-page-container">
        {/* Hero Header Section with Microsoft Search Experience */}
        <section className="support-hero-section">
          <div className="support-content-width">
            <div className="support-hero-header">
              <span className="support-hero-badge">
                <Icon name="shield" size={14} color="#0078D4" />
                {isEn
                  ? 'OFFICIAL SUPPORT • KARSASOFT & GOLETIN'
                  : 'PUSAT BANTUAN RESMI KARSASOFT & GOLETIN'}
              </span>

              <h1 className="support-hero-h1">
                {isEn
                  ? 'Goletin help & learning'
                  : 'Bantuan & pembelajaran Goletin'}
              </h1>

              <p className="support-hero-desc">
                {isEn
                  ? 'Find quick solutions, configuration manuals, regulatory compliance documentation, and community answers for the entire Goletin ecosystem.'
                  : 'Temukan solusi pemecahan masalah cepat, panduan konfigurasi mandiri, dokumentasi kepatuhan akuntansi & pajak, serta forum komunitas untuk seluruh ekosistem aplikasi Goletin.'}
              </p>

              {/* Microsoft Search Bar */}
              <div className="support-search-container">
                <div className="support-search-input-wrap">
                  <Icon name="search" size={20} className="support-search-icon" />
                  <input
                    type="text"
                    placeholder={
                      isEn
                        ? 'Search for help, tutorials, error codes, or accounting rules...'
                        : 'Cari topik bantuan, tutorial, kode error, atau panduan akuntansi & pajak...'
                    }
                    className="support-search-input"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (activeChip && e.target.value !== activeChip) {
                        setActiveChip(null);
                      }
                    }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="support-search-clear"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveChip(null);
                      }}
                      aria-label={isEn ? 'Clear search' : 'Bersihkan pencarian'}
                    >
                      <Icon name="close" size={16} />
                    </button>
                  )}
                </div>

                {/* Quick Search Tag Chips */}
                <div className="support-search-chips">
                  <span className="support-chips-label">
                    {isEn ? 'Popular searches:' : 'Pencarian populer:'}
                  </span>
                  {[
                    { label: 'Instalasi Desktop', query: 'Instalasi' },
                    { label: 'Aktivasi Lisensi', query: 'Lisensi' },
                    { label: 'e-Faktur PPN', query: 'e-Faktur' },
                    { label: 'IFRS 9 / ECL', query: 'ECL' },
                    { label: 'Yaycount ERP', query: 'Yaycount' },
                    { label: 'Reset Kata Sandi', query: 'Kata Sandi' },
                    { label: 'SSO SAML 2.0', query: 'SSO' },
                  ].map((chip, idx) => {
                    const isSelected = activeChip === chip.query;
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`support-chip-btn ${isSelected ? 'active' : ''}`}
                        onClick={() => handleChipClick(chip.query)}
                      >
                        {chip.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top 3 Feature Highlight Cards (Like Microsoft 365 Copilot & Hub Cards) */}
        <section className="support-hero-cards-section">
          <div className="support-content-width">
            <div className="support-hero-cards-grid">
              {/* Card 1: Goletin AI Assistant */}
              <Link href="/goletin/ai" className="support-hero-card">
                <div className="support-hero-card-banner banner-ai">
                  <span className="support-hero-card-badge">GOLETIN AI</span>
                  <div className="support-hero-card-icon-circle" style={{ background: 'transparent', border: 'none', backdropFilter: 'none' }}>
                    <img
                      src="/logos/goletin-ai.svg"
                      alt="Goletin AI"
                      width={42}
                      height={42}
                      style={{ objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }}
                    />
                  </div>
                </div>
                <div className="support-hero-card-body">
                  <h3 className="support-hero-card-title">
                    {isEn ? 'Start with Goletin AI Assistant' : 'Mulai perjalanan Anda dengan Goletin AI'}
                  </h3>
                  <p className="support-hero-card-desc">
                    {isEn
                      ? 'Automate accounting reconciliation, generate complex formulas, and extract document insights with our sovereign on-soil private AI.'
                      : 'Otomatisasi rekonsiliasi akuntansi, buat formula cerdas di Sheets, dan analisis risiko transaksi dengan asisten AI berdaulat.'}
                  </p>
                  <span className="support-hero-card-action">
                    {isEn ? 'Explore Goletin AI' : 'Pelajari Goletin AI'}
                    <Icon name="chevron-right" size={14} />
                  </span>
                </div>
              </Link>

              {/* Card 2: Subscription & Plans */}
              <Link href="/goletin/paket-dan-harga" className="support-hero-card">
                <div className="support-hero-card-banner banner-plans">
                  <span className="support-hero-card-badge">
                    {isEn ? 'SUBSCRIPTIONS' : 'LANGGANAN'}
                  </span>
                  <div className="support-hero-card-icon-circle">
                    <Icon name="laptop" size={24} color="#FFFFFF" />
                  </div>
                </div>
                <div className="support-hero-card-body">
                  <h3 className="support-hero-card-title">
                    {isEn
                      ? 'What your subscription includes'
                      : 'Ketahui apa yang tercakup dalam lisensi Anda'}
                  </h3>
                  <p className="support-hero-card-desc">
                    {isEn
                      ? 'Review module allocations, CloudSave capacity quotas, and priority response SLAs across Personal, Business, and Enterprise plans.'
                      : 'Periksa alokasi modul, kapasitas CloudSave, dan jaminan SLA dukungan teknis untuk paket Personal, Bisnis, atau Enterprise.'}
                  </p>
                  <span className="support-hero-card-action">
                    {isEn ? 'Compare Plans & Pricing' : 'Bandingkan Paket & Harga'}
                    <Icon name="chevron-right" size={14} />
                  </span>
                </div>
              </Link>

              {/* Card 3: Admin & Deployment */}
              <Link href="/goletin/enterprise" className="support-hero-card">
                <div className="support-hero-card-banner banner-admin">
                  <span className="support-hero-card-badge">ENTERPRISE ADMIN</span>
                  <div className="support-hero-card-icon-circle">
                    <Icon name="shield" size={24} color="#FFFFFF" />
                  </div>
                </div>
                <div className="support-hero-card-body">
                  <h3 className="support-hero-card-title">
                    {isEn
                      ? 'Install, manage & enterprise deploy'
                      : 'Penerapan mandiri & kendali admin IT'}
                  </h3>
                  <p className="support-hero-card-desc">
                    {isEn
                      ? 'Setup Single Sign-On (SSO), configure Active Directory GPO fleet rollout, manage 1,000+ seats, and inspect security audit logs.'
                      : 'Konfigurasi SSO SAML 2.0, penyebaran silent MSI via Active Directory, manajemen 1.000+ pengguna, dan tata kelola kedaulatan data.'}
                  </p>
                  <span className="support-hero-card-action">
                    {isEn ? 'Enterprise Documentation' : 'Dokumentasi Admin Enterprise'}
                    <Icon name="chevron-right" size={14} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Explore Your Goletin Apps Grid (Signature Microsoft 365 Apps Showcase) */}
        <section className="support-apps-section">
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">
                {isEn ? 'Explore your Goletin apps' : 'Jelajahi aplikasi Goletin Anda'}
              </h2>
              <p className="support-section-subtitle">
                {isEn
                  ? 'Find dedicated help, tutorials, and regulatory documentation for every application in your organization.'
                  : 'Temukan materi bantuan, tutorial, dan petunjuk operasional terperinci untuk setiap aplikasi di ekosistem Anda.'}
              </p>
            </div>

            <div className="support-apps-grid">
              {goletinApps.map((app, idx) => (
                <a
                  key={idx}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="support-app-card"
                >
                  <div className="support-app-icon-wrap">
                    <img
                      src={app.logo}
                      alt={app.name}
                      width={44}
                      height={44}
                      className="support-app-logo-img"
                    />
                  </div>
                  <h3 className="support-app-name">{app.name}</h3>
                  <p className="support-app-desc">{isEn ? app.descEn : app.descId}</p>
                  <span className="support-app-link">
                    {isEn ? 'Open App' : 'Buka Aplikasi'}
                    <Icon name="external-link" size={12} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Topic Category Hubs (Install, activate, and manage - Microsoft Support Signature Layout) */}
        <section className="support-topic-hubs-section">
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">
                {isEn ? 'Install, activate, and manage' : 'Instalasi, aktivasi, dan pengelolaan'}
              </h2>
              <p className="support-section-subtitle">
                {isEn
                  ? 'Curated step-by-step technical guides for administrators, accountants, and end users.'
                  : 'Kumpulan panduan praktis langkah-demi-langkah untuk administrator IT, tim finance, dan pengguna umum.'}
              </p>
            </div>

            <div className="support-topic-hubs-grid">
              {/* Hub 1: Akun, Langganan & Tagihan */}
              <div className="support-topic-hub-card">
                <div className="support-topic-hub-header">
                  <div
                    className="support-topic-hub-icon-pill"
                    style={{ backgroundColor: '#EFF6FC', color: '#0078D4' }}
                  >
                    <Icon name="laptop" size={20} />
                  </div>
                  <h3 className="support-topic-hub-title">
                    {isEn ? 'Account & Billing' : 'Akun, Lisensi & Tagihan'}
                  </h3>
                </div>

                <div className="support-topic-hub-list">
                  {filteredGuides
                    .filter((g) => g.category === 'account')
                    .map((guide) => (
                      <button
                        key={guide.id}
                        type="button"
                        className="support-topic-hub-item-btn"
                        onClick={() => setActiveGuide(guide)}
                      >
                        <div className="support-topic-hub-item-icon">
                          <Icon name="book" size={16} />
                        </div>
                        <div className="support-topic-hub-item-text">
                          <div className="support-topic-hub-item-title">
                            {isEn ? guide.titleEn : guide.titleId}
                          </div>
                          <div className="support-topic-hub-item-meta">
                            {guide.badge} • {guide.readTime} {isEn ? 'read' : 'baca'}
                          </div>
                        </div>
                      </button>
                    ))}
                </div>

                <div className="support-topic-hub-footer">
                  <Link href="/kontak?bantuan=tagihan" className="support-topic-hub-footer-link">
                    {isEn ? 'Manage billing & tax profile' : 'Kelola profil tagihan & e-Faktur'}
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              </div>

              {/* Hub 2: Instalasi & Konfigurasi Desktop */}
              <div className="support-topic-hub-card">
                <div className="support-topic-hub-header">
                  <div
                    className="support-topic-hub-icon-pill"
                    style={{ backgroundColor: '#F0FDF4', color: '#16A34A' }}
                  >
                    <Icon name="briefcase" size={20} />
                  </div>
                  <h3 className="support-topic-hub-title">
                    {isEn ? 'Install & Desktop Setup' : 'Instalasi & Pengaturan Desktop'}
                  </h3>
                </div>

                <div className="support-topic-hub-list">
                  {filteredGuides
                    .filter((g) => g.category === 'install')
                    .map((guide) => (
                      <button
                        key={guide.id}
                        type="button"
                        className="support-topic-hub-item-btn"
                        onClick={() => setActiveGuide(guide)}
                      >
                        <div className="support-topic-hub-item-icon">
                          <Icon name="book" size={16} />
                        </div>
                        <div className="support-topic-hub-item-text">
                          <div className="support-topic-hub-item-title">
                            {isEn ? guide.titleEn : guide.titleId}
                          </div>
                          <div className="support-topic-hub-item-meta">
                            {guide.badge} • {guide.readTime} {isEn ? 'read' : 'baca'}
                          </div>
                        </div>
                      </button>
                    ))}
                </div>

                <div className="support-topic-hub-footer">
                  <Link href="/goletin" className="support-topic-hub-footer-link">
                    {isEn ? 'Download latest Goletin Desktop' : 'Unduh penginstal Goletin terbaru'}
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              </div>

              {/* Hub 3: Kepatuhan Standar Akuntansi & Regulasi */}
              <div className="support-topic-hub-card">
                <div className="support-topic-hub-header">
                  <div
                    className="support-topic-hub-icon-pill"
                    style={{ backgroundColor: '#FAF5FF', color: '#9333EA' }}
                  >
                    <Icon name="shield" size={20} />
                  </div>
                  <h3 className="support-topic-hub-title">
                    {isEn ? 'Compliance & Standards' : 'Kepatuhan Akuntansi & Regulasi'}
                  </h3>
                </div>

                <div className="support-topic-hub-list">
                  {filteredGuides
                    .filter((g) => g.category === 'compliance')
                    .map((guide) => (
                      <button
                        key={guide.id}
                        type="button"
                        className="support-topic-hub-item-btn"
                        onClick={() => setActiveGuide(guide)}
                      >
                        <div className="support-topic-hub-item-icon">
                          <Icon name="book" size={16} />
                        </div>
                        <div className="support-topic-hub-item-text">
                          <div className="support-topic-hub-item-title">
                            {isEn ? guide.titleEn : guide.titleId}
                          </div>
                          <div className="support-topic-hub-item-meta">
                            {guide.badge} • {guide.readTime} {isEn ? 'read' : 'baca'}
                          </div>
                        </div>
                      </button>
                    ))}
                </div>

                <div className="support-topic-hub-footer">
                  <Link href="/solusi" className="support-topic-hub-footer-link">
                    {isEn ? 'Explore industry solutions' : 'Eksplorasi solusi vertikal industri'}
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Microsoft Q&A Community Forum Hub (learn.microsoft.com/answers format) */}
        <section className="support-qna-section" id="komunitas">
          <div className="support-content-width">
            <div className="support-qna-header-row">
              <div>
                <h2 className="support-section-title">
                  {isEn
                    ? 'Goletin Community & Technical Q&A'
                    : 'Forum Komunitas & Tanya Jawab Teknis (Q&A)'}
                </h2>
                <p className="support-section-subtitle">
                  {isEn
                    ? 'Get verified answers from Karsasoft software architects, certified accountants, and peer community practitioners.'
                    : 'Dapatkan jawaban terverifikasi dari arsitek software Karsasoft, akuntan bersertifikasi (CPA/CA), dan rekan praktisi pengguna.'}
                </p>
              </div>

              <button
                type="button"
                className="support-qna-ask-btn"
                onClick={() => setIsAskModalOpen(true)}
              >
                <Icon name="message-square" size={16} color="#FFFFFF" />
                <span>{isEn ? 'Ask a question' : 'Ajukan Pertanyaan'}</span>
              </button>
            </div>

            {/* Q&A Filter Tabs (Microsoft Q&A format) */}
            <div className="support-qna-tabs-bar">
              <button
                type="button"
                className={`support-qna-tab-btn ${qnaTab === 'all' ? 'active' : ''}`}
                onClick={() => setQnaTab('all')}
              >
                <span>{isEn ? 'All discussions' : 'Semua Diskusi'}</span>
                <span className="support-qna-tab-count">{qnaThreads.length}</span>
              </button>

              <button
                type="button"
                className={`support-qna-tab-btn ${qnaTab === 'solved' ? 'active' : ''}`}
                onClick={() => setQnaTab('solved')}
              >
                <Icon name="check-circle" size={14} color={qnaTab === 'solved' ? '#107C41' : '#605E5C'} />
                <span>{isEn ? 'Solved' : 'Jawaban Terverifikasi'}</span>
                <span className="support-qna-tab-count">
                  {qnaThreads.filter((t) => t.isSolved).length}
                </span>
              </button>

              <button
                type="button"
                className={`support-qna-tab-btn ${qnaTab === 'unsolved' ? 'active' : ''}`}
                onClick={() => setQnaTab('unsolved')}
              >
                <span>{isEn ? 'Unresolved' : 'Menunggu Jawaban'}</span>
                <span className="support-qna-tab-count">
                  {qnaThreads.filter((t) => !t.isSolved).length}
                </span>
              </button>

              <button
                type="button"
                className={`support-qna-tab-btn ${qnaTab === 'erp' ? 'active' : ''}`}
                onClick={() => setQnaTab('erp')}
              >
                <span>{isEn ? 'ERP & Tax' : 'ERP & Perpajakan'}</span>
                <span className="support-qna-tab-count">
                  {qnaThreads.filter((t) => t.category === 'erp' || t.category === 'tax').length}
                </span>
              </button>

              <button
                type="button"
                className={`support-qna-tab-btn ${qnaTab === 'audit' ? 'active' : ''}`}
                onClick={() => setQnaTab('audit')}
              >
                <span>{isEn ? 'Audit & Compliance' : 'Audit & Kepatuhan'}</span>
                <span className="support-qna-tab-count">
                  {qnaThreads.filter((t) => t.category === 'audit').length}
                </span>
              </button>
            </div>

            {/* Q&A Threads List */}
            <div className="support-qna-list">
              {filteredQnAThreads.map((thread) => {
                const hasVoted = userVotedIds[thread.id];

                return (
                  <div key={thread.id} className="support-qna-item">
                    {/* Stats Column: Votes & Answers */}
                    <div className="support-qna-stats-column">
                      <button
                        type="button"
                        className={`support-qna-vote-btn ${hasVoted ? 'voted' : ''}`}
                        onClick={() => handleVote(thread.id)}
                        title={isEn ? 'Vote up this question' : 'Beri dukungan untuk pertanyaan ini'}
                      >
                        <Icon name="thumbs-up" size={14} />
                        <span className="support-qna-vote-num">{thread.votes}</span>
                        <span className="support-qna-vote-label">{isEn ? 'votes' : 'suara'}</span>
                      </button>

                      <div
                        className={`support-qna-answers-badge ${thread.isSolved ? 'solved' : ''}`}
                        title={thread.isSolved ? 'Terdapat jawaban terverifikasi' : 'Jumlah tanggapan'}
                      >
                        {thread.isSolved && <Icon name="check" size={12} />}
                        <span className="support-qna-answers-num">{thread.answers}</span>
                        <span className="support-qna-answers-label">
                          {isEn ? 'answers' : 'jawaban'}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="support-qna-content-column">
                      <div className="support-qna-title-row">
                        <button
                          type="button"
                          className="support-qna-thread-title"
                          onClick={() => {
                            if (thread.solution) {
                              alert(`${thread.title}\n\nJawaban Terverifikasi (${thread.solutionAuthor}):\n${thread.solution}`);
                            }
                          }}
                        >
                          {thread.title}
                        </button>

                        {thread.isSolved && (
                          <span className="support-qna-verified-badge">
                            <Icon name="check" size={12} color="#107C41" />
                            {isEn ? 'Verified Solution' : 'Jawaban Terverifikasi'}
                          </span>
                        )}
                      </div>

                      <p className="support-qna-snippet">{thread.snippet}</p>

                      {thread.solution && (
                        <div
                          style={{
                            background: '#F0FDF4',
                            borderLeft: '3px solid #16A34A',
                            padding: '10px 14px',
                            borderRadius: '4px',
                            marginBottom: '12px',
                            fontSize: '13px',
                            color: '#166534',
                          }}
                        >
                          <strong>{thread.solutionAuthor}:</strong> {thread.solution}
                        </div>
                      )}

                      <div className="support-qna-footer-meta">
                        <div className="support-qna-tags-row">
                          {thread.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="support-qna-tag">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="support-qna-author-info">
                          <div className="support-qna-avatar">
                            {thread.author.charAt(0).toUpperCase()}
                          </div>
                          <span>
                            <strong>{thread.author}</strong> ({thread.authorRole}) • {thread.timeAgo}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {filteredQnAThreads.length === 0 && (
                <div style={{ textAlign: 'center', padding: '48px 20px', color: '#605E5C' }}>
                  <Icon name="search" size={32} color="#A19F9D" />
                  <p style={{ marginTop: '12px', fontSize: '15px' }}>
                    {isEn
                      ? 'No community questions found matching your filter.'
                      : 'Tidak ada diskusi komunitas yang cocok dengan filter pencarian Anda.'}
                  </p>
                  <button
                    type="button"
                    className="support-btn-cancel"
                    onClick={() => {
                      setQnaTab('all');
                      setSearchQuery('');
                    }}
                  >
                    {isEn ? 'Reset Filters' : 'Tampilkan Semua Pertanyaan'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Real-time System Status Health Banner (Microsoft 365 Admin Center Style) */}
        <section className="support-status-section">
          <div className="support-content-width">
            <div className="support-status-card">
              <div className="support-status-left">
                <div className="support-status-indicator">
                  <span className="support-status-pulse"></span>
                  <span className="support-status-dot"></span>
                </div>
                <div>
                  <h3 className="support-status-title">
                    {isEn
                      ? 'All Goletin Cloud Services Are Operating Normally'
                      : 'Seluruh Layanan Ekosistem Goletin Beroperasi Normal'}
                  </h3>
                  <p className="support-status-subtitle">
                    {isEn
                      ? 'Trailing 30-day uptime average: 99.992% across all Indonesian sovereign data centers.'
                      : 'Ketersediaan sistem rata-rata 30 hari terakhir: 99.992% di seluruh pusat data Indonesia.'}
                  </p>
                </div>
              </div>

              <div className="support-status-nodes-grid">
                <div className="support-status-node">
                  <span className="node-status-dot-green"></span>
                  <span>Jakarta DC (Tier-4)</span>
                </div>
                <div className="support-status-node">
                  <span className="node-status-dot-green"></span>
                  <span>Surabaya DC (Tier-4)</span>
                </div>
                <div className="support-status-node">
                  <span className="node-status-dot-green"></span>
                  <span>AI Inference Gateway</span>
                </div>
                <div className="support-status-node">
                  <span className="node-status-dot-green"></span>
                  <span>CloudSave Sync Engine</span>
                </div>
                <div className="support-status-node">
                  <span className="node-status-dot-green"></span>
                  <span>IndoTax Tax Bridge DJP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Support Hubs (Kategori Pusat Bantuan Khusus) */}
        <section className="support-topic-hubs-section" style={{ backgroundColor: '#FAF9F8', padding: '54px 0', borderTop: '1px solid #EDEBE9', borderBottom: '1px solid #EDEBE9' }}>
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">
                {isEn ? 'Explore specialized support centers' : 'Jelajahi pusat dukungan khusus'}
              </h2>
              <p className="support-section-subtitle">
                {isEn
                  ? 'Access dedicated resources tailored for self-service tutorials, billing & tax invoices, community Q&A, IT fleet rollout, educators, and CPA partners.'
                  : 'Akses materi panduan khusus untuk sumber daya mandiri, tagihan & faktur pajak, forum komunitas, administrasi IT, dunia pendidikan, dan mitra KAP.'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              {/* Hub 1: Mandiri */}
              <div className="support-topic-hub-card">
                <div className="support-topic-hub-header">
                  <div className="support-topic-hub-icon-pill" style={{ backgroundColor: '#0078D415', color: '#0078D4' }}>
                    <Icon name="laptop" size={20} />
                  </div>
                  <h3 className="support-topic-hub-title">{isEn ? 'Self-Service Resources' : 'Sumber Daya Mandiri'}</h3>
                </div>
                <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                  <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, margin: 0 }}>
                    {isEn
                      ? 'Step-by-step user tutorials, desktop installation troubleshooting, license activation keys, and Office productivity shortcuts.'
                      : 'Panduan mandiri langkah-demi-langkah, panduan instalasi desktop, aktivasi lisensi personal, dan pintasan aplikasi.'}
                  </p>
                </div>
                <div className="support-topic-hub-footer">
                  <Link href="/goletin/dukungan/mandiri" className="support-topic-hub-footer-link">
                    <span>{isEn ? 'Open self-service hub' : 'Buka panduan mandiri'}</span>
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              </div>

              {/* Hub 2: Tagihan */}
              <div className="support-topic-hub-card">
                <div className="support-topic-hub-header">
                  <div className="support-topic-hub-icon-pill" style={{ backgroundColor: '#107C4115', color: '#107C41' }}>
                    <Icon name="credit-card" size={20} />
                  </div>
                  <h3 className="support-topic-hub-title">{isEn ? 'Billing & Tax Invoices' : 'Dukungan Tagihan & Faktur'}</h3>
                </div>
                <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                  <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, margin: 0 }}>
                    {isEn
                      ? 'Official DJP e-Faktur downloads, PPh 23 withholding tax submission, Virtual Account banking, and prorated seat calculations.'
                      : 'Unduh e-Faktur PPN resmi DJP, pelaporan Bukti Potong PPh 23, pembayaran Virtual Account, dan perhitungan prorata lisensi.'}
                  </p>
                </div>
                <div className="support-topic-hub-footer">
                  <Link href="/goletin/dukungan/tagihan" className="support-topic-hub-footer-link">
                    <span>{isEn ? 'Open billing hub' : 'Buka info tagihan'}</span>
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              </div>

              {/* Hub 3: Komunitas */}
              <div className="support-topic-hub-card">
                <div className="support-topic-hub-header">
                  <div className="support-topic-hub-icon-pill" style={{ backgroundColor: '#00827215', color: '#008272' }}>
                    <Icon name="message-square" size={20} />
                  </div>
                  <h3 className="support-topic-hub-title">{isEn ? 'User Community & Q&A' : 'Komunitas Pengguna & Q&A'}</h3>
                </div>
                <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                  <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, margin: 0 }}>
                    {isEn
                      ? 'Ask questions and find verified solutions from certified tax consultants, CPA audit managers, and Karsasoft product engineers.'
                      : 'Tanya jawab dan temukan ribuan solusi terverifikasi dari akuntan, auditor KAP, konsultan pajak, dan spesialis produk.'}
                  </p>
                </div>
                <div className="support-topic-hub-footer">
                  <Link href="/goletin/dukungan/komunitas" className="support-topic-hub-footer-link">
                    <span>{isEn ? 'Visit community forum' : 'Kunjungi forum komunitas'}</span>
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              </div>

              {/* Hub 4: Admin */}
              <div className="support-topic-hub-card">
                <div className="support-topic-hub-header">
                  <div className="support-topic-hub-icon-pill" style={{ backgroundColor: '#004B8715', color: '#004B87' }}>
                    <Icon name="terminal" size={20} />
                  </div>
                  <h3 className="support-topic-hub-title">{isEn ? 'IT Admin Center' : 'Admin Mandiri IT & Deployment'}</h3>
                </div>
                <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                  <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, margin: 0 }}>
                    {isEn
                      ? 'Silent MSI fleet deployment parameters, Intune/GPO policies, SAML 2.0/Entra ID SSO integration, and SIEM audit logging.'
                      : 'Argumen silent MSI deployment, template ADMX GPO, integrasi Single Sign-On Entra ID/SAML, dan SIEM audit log.'}
                  </p>
                </div>
                <div className="support-topic-hub-footer">
                  <Link href="/goletin/dukungan/admin" className="support-topic-hub-footer-link">
                    <span>{isEn ? 'Open IT admin docs' : 'Buka panduan admin'}</span>
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              </div>

              {/* Hub 5: Edukasi */}
              <div className="support-topic-hub-card">
                <div className="support-topic-hub-header">
                  <div className="support-topic-hub-icon-pill" style={{ backgroundColor: '#D83B0115', color: '#D83B01' }}>
                    <Icon name="book" size={20} />
                  </div>
                  <h3 className="support-topic-hub-title">{isEn ? 'Goletin Educator Center' : 'Educator Center & Kampus'}</h3>
                </div>
                <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                  <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, margin: 0 }}>
                    {isEn
                      ? 'Free computer lab grants for universities, ready-to-teach CAATs audit curriculum, and professional student certifications.'
                      : 'Hibah lisensi lab komputer perguruan tinggi gratis, modul praktikum audit siap ajar, dan program sertifikasi mahasiswa.'}
                  </p>
                </div>
                <div className="support-topic-hub-footer">
                  <Link href="/goletin/dukungan/edukasi" className="support-topic-hub-footer-link">
                    <span>{isEn ? 'Explore educator center' : 'Lihat program kampus'}</span>
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              </div>

              {/* Hub 6: Mitra */}
              <div className="support-topic-hub-card">
                <div className="support-topic-hub-header">
                  <div className="support-topic-hub-icon-pill" style={{ backgroundColor: '#8764B815', color: '#8764B8' }}>
                    <Icon name="briefcase" size={20} />
                  </div>
                  <h3 className="support-topic-hub-title">{isEn ? 'Partner & KAP Resources' : 'Sumber Daya Mitra & KAP'}</h3>
                </div>
                <div style={{ padding: '16px 20px', flexGrow: 1 }}>
                  <p style={{ fontSize: '13.5px', color: '#605E5C', lineHeight: 1.5, margin: 0 }}>
                    {isEn
                      ? 'ISA/SPAP standardized audit workpapers, multi-tenant sandbox API credentials, sales kits, and priority L2/L3 queues.'
                      : 'Toolkit kertas kerja audit KAP standar IAPI, kredensial sandbox REST API, sales kit, dan jalur eskalasi L2/L3 prioritas.'}
                  </p>
                </div>
                <div className="support-topic-hub-footer">
                  <Link href="/goletin/dukungan/mitra" className="support-topic-hub-footer-link">
                    <span>{isEn ? 'Open partner toolkit' : 'Buka sumber daya mitra'}</span>
                    <Icon name="chevron-right" size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assisted Support Channels (Hubungi Kami) */}
        <section className="support-contact-section">
          <div className="support-content-width">
            <div className="support-section-header">
              <h2 className="support-section-title">
                {isEn ? 'Need assisted support?' : 'Perlu berbicara langsung dengan tim kami?'}
              </h2>
              <p className="support-section-subtitle">
                {isEn
                  ? 'Choose the communication channel best tailored to your organization’s urgency or subscription SLA.'
                  : 'Pilih saluran komunikasi resmi yang paling sesuai dengan tingkat urgensi masalah atau SLA paket organisasi Anda.'}
              </p>
            </div>

            <div className="support-contact-grid">
              {/* Channel 1: Helpdesk Ticket */}
              <div className="support-contact-box">
                <div className="support-contact-icon-circle">
                  <Icon name="mail" size={24} />
                </div>
                <h3 className="support-contact-box-title">
                  {isEn ? 'Open Technical Helpdesk Ticket' : 'Buka Tiket Bantuan Teknis'}
                </h3>
                <p className="support-contact-box-desc">
                  {isEn
                    ? 'Submit issue details along with screenshots and error traces for module engineers to review.'
                    : 'Kirimkan rincian kendala beserta tangkapan layar untuk ditinjau oleh staf teknis spesialis modul terkait.'}
                </p>
                <div className="support-contact-meta">
                  <span>{isEn ? 'Response time:' : 'Waktu respons:'}</span>
                  <strong>{isEn ? '< 2 Hours (Business Hours)' : '< 2 Jam (Jam Kerja)'}</strong>
                </div>
                <Link href="/kontak?bantuan=tiket" className="support-btn-channel-primary">
                  {isEn ? 'Submit Support Ticket' : 'Buka Tiket Masalah'}
                </Link>
              </div>

              {/* Channel 2: Emergency Corporate Hotline */}
              <div className="support-contact-box">
                <div
                  className="support-contact-icon-circle"
                  style={{ backgroundColor: '#F0FDF4', color: '#16A34A' }}
                >
                  <Icon name="headset" size={24} />
                </div>
                <h3 className="support-contact-box-title">
                  {isEn ? 'Emergency SLA Hotline' : 'Dukungan Darurat Bisnis & SLA'}
                </h3>
                <p className="support-contact-box-desc">
                  {isEn
                    ? 'Dedicated incident hotline for Business Premium and Enterprise subscribers requiring immediate resolution.'
                    : 'Saluran khusus pemegang lisensi Bisnis Premium & Enterprise untuk penanganan insiden sistem kritis.'}
                </p>
                <div className="support-contact-meta">
                  <span>{isEn ? 'Availability:' : 'Ketersediaan:'}</span>
                  <strong>{isEn ? '24 Hours / 7 Days Live' : '24 Jam / 7 Hari Penuh'}</strong>
                </div>
                <Link href="/kontak?bantuan=darurat" className="support-btn-channel-secondary">
                  {isEn ? 'Call Enterprise Hotline' : 'Hubungi Hotline Prioritas'}
                </Link>
              </div>

              {/* Channel 3: Consultation & Demo */}
              <div className="support-contact-box">
                <div
                  className="support-contact-icon-circle"
                  style={{ backgroundColor: '#FAF5FF', color: '#9333EA' }}
                >
                  <Icon name="briefcase" size={24} />
                </div>
                <h3 className="support-contact-box-title">
                  {isEn ? 'Solutions Architecture & Onboarding' : 'Konsultasi Solusi & Onboarding'}
                </h3>
                <p className="support-contact-box-desc">
                  {isEn
                    ? 'Consult with our engineering team for on-premise deployments, legacy ledger migration, and staff training.'
                    : 'Bicara dengan konsultan solusi untuk demonstrasi sistem, penawaran harga khusus organisasi, dan migrasi.'}
                </p>
                <div className="support-contact-meta">
                  <span>{isEn ? 'Schedule:' : 'Jadwal:'}</span>
                  <strong>{isEn ? 'Mon – Fri (08:30 – 17:30 WIB)' : 'Senin – Jumat (08:30 – 17:30)'}</strong>
                </div>
                <Link href="/kontak?bantuan=demo" className="support-btn-channel-secondary">
                  {isEn ? 'Schedule Consultation' : 'Jadwalkan Konsultasi'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Structured FAQ Accordion Section */}
        <section className="support-faq-section">
          <div className="support-content-width">
            <div className="support-section-header text-center">
              <h2 className="support-section-title">
                {isEn
                  ? 'Frequently asked questions'
                  : 'Pertanyaan yang sering diajukan seputar dukungan'}
              </h2>
              <p className="support-section-subtitle">
                {isEn
                  ? 'Official administrative procedures, SLA guarantees, and enterprise data sovereignty policies.'
                  : 'Informasi prosedur resmi, SLA penanganan insiden, dan tata kelola kedaulatan data di Karsasoft.'}
              </p>
            </div>

            <div className="support-faq-list">
              {faqs.map((faq, fIdx) => {
                const isOpen = activeFaq === fIdx;

                return (
                  <div key={fIdx} className="support-faq-item">
                    <button
                      type="button"
                      className="support-faq-question-btn"
                      onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                      aria-expanded={isOpen}
                    >
                      <span>{isEn ? faq.qEn : faq.qId}</span>
                      <Icon
                        name="chevron-down"
                        size={16}
                        className={`support-faq-chevron ${isOpen ? 'rotated' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="support-faq-answer">
                        <p>{isEn ? faq.aEn : faq.aId}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Disclaimers & Sovereign Data Commitment (UU PDP No. 27/2022) */}
        <section className="support-disclaimer-section">
          <div className="support-content-width">
            <div className="support-disclaimer-card">
              <h4>
                {isEn
                  ? 'Data Sovereignty & Legal Privacy Commitment'
                  : 'Komitmen Keamanan & Kedaulatan Data Indonesia'}
              </h4>
              <p>
                {isEn
                  ? 'All support ticket interactions, diagnostics data, and regulatory attachments are strictly processed within the jurisdiction of the Republic of Indonesia in compliance with Personal Data Protection Law No. 27 of 2022 (UU PDP). Karsasoft technicians will never solicit passwords or unrestricted data access without explicit written executive authorization.'
                  : 'Seluruh data interaksi dukungan, lampiran audit, dan tiket perbaikan diproses secara eksklusif di dalam wilayah hukum Republik Indonesia dengan kepatuhan penuh terhadap UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP). Tim dukungan Karsasoft tidak pernah meminta akses ke kredensial kata sandi atau data sensitif tanpa otorisasi tertulis resmi dari administrator organisasi.'}
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Guide Reader Modal */}
        {activeGuide && (
          <div className="support-modal-backdrop" onClick={() => setActiveGuide(null)}>
            <div
              className="support-modal-container"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="support-modal-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      background: '#EFF6FC',
                      color: '#0078D4',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {activeGuide.badge}
                  </span>
                  <h3 className="support-modal-title">
                    {isEn ? activeGuide.titleEn : activeGuide.titleId}
                  </h3>
                </div>
                <button
                  type="button"
                  className="support-modal-close-btn"
                  onClick={() => setActiveGuide(null)}
                  aria-label={isEn ? 'Close' : 'Tutup'}
                >
                  <Icon name="close" size={18} />
                </button>
              </div>

              <div className="support-modal-body">
                <p style={{ fontSize: '14px', color: '#605E5C', marginBottom: '20px', lineHeight: 1.6 }}>
                  {isEn ? activeGuide.summaryEn : activeGuide.summaryId}
                </p>

                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#242424',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon name="book" size={16} color="#0078D4" />
                  {isEn ? 'Step-by-step instructions:' : 'Langkah-langkah pelaksanaan:'}
                </h4>

                <ol style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {(isEn ? activeGuide.stepsEn : activeGuide.stepsId).map((step, sIdx) => (
                    <li key={sIdx} style={{ fontSize: '14px', color: '#242424', lineHeight: 1.55 }}>
                      {step}
                    </li>
                  ))}
                </ol>

                <div
                  style={{
                    marginTop: '24px',
                    background: '#FAFAFA',
                    border: '1px solid #EDEBE9',
                    borderRadius: '6px',
                    padding: '12px 16px',
                    fontSize: '13px',
                    color: '#605E5C',
                  }}
                >
                  {isEn
                    ? 'Need assistance implementing this? Contact your assigned technical onboarding specialist.'
                    : 'Memerlukan pendampingan teknis dalam implementasi langkah di atas? Hubungi tim helpdesk Karsasoft.'}
                </div>
              </div>

              <div className="support-modal-footer">
                <button
                  type="button"
                  className="support-btn-cancel"
                  onClick={() => setActiveGuide(null)}
                >
                  {isEn ? 'Close' : 'Tutup Panduan'}
                </button>
                <Link
                  href="/kontak?bantuan=spesialis"
                  className="support-btn-submit"
                  style={{ textDecoration: 'none' }}
                >
                  {isEn ? 'Contact Specialist' : 'Tanya Spesialis'}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Interactive "Ask a Question" Modal (Microsoft Q&A format) */}
        {isAskModalOpen && (
          <div className="support-modal-backdrop" onClick={() => setIsAskModalOpen(false)}>
            <div
              className="support-modal-container"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="support-modal-header">
                <h3 className="support-modal-title">
                  {isEn ? 'Ask the Community & Specialists' : 'Ajukan Pertanyaan ke Komunitas & Spesialis'}
                </h3>
                <button
                  type="button"
                  className="support-modal-close-btn"
                  onClick={() => setIsAskModalOpen(false)}
                  aria-label={isEn ? 'Close' : 'Tutup'}
                >
                  <Icon name="close" size={18} />
                </button>
              </div>

              <form onSubmit={handleAskSubmit}>
                <div className="support-modal-body">
                  {newQuestionSuccess ? (
                    <div
                      style={{
                        padding: '24px',
                        textAlign: 'center',
                        color: '#16A34A',
                        background: '#F0FDF4',
                        borderRadius: '6px',
                      }}
                    >
                      <Icon name="check-circle" size={36} color="#16A34A" />
                      <h4 style={{ margin: '12px 0 6px', fontSize: '16px' }}>
                        {isEn ? 'Question Posted Successfully!' : 'Pertanyaan Berhasil Diajukan!'}
                      </h4>
                      <p style={{ margin: 0, fontSize: '13px', color: '#166534' }}>
                        {isEn
                          ? 'Your question is now visible to community practitioners and Karsasoft specialists.'
                          : 'Pertanyaan Anda kini tampil di forum dan akan segera dijawab oleh spesialis.'}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="support-form-group">
                        <label className="support-form-label">
                          {isEn ? 'Question Title' : 'Judul Pertanyaan Singkat & Jelas'}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={
                            isEn
                              ? 'e.g. How to import general ledger journals with multiple branches in Yaycount?'
                              : 'mis. Bagaimana cara rekonsiliasi faktur pajak keluaran di IndoTax untuk multi-cabang?'
                          }
                          className="support-form-input"
                          value={newQuestionTitle}
                          onChange={(e) => setNewQuestionTitle(e.target.value)}
                        />
                      </div>

                      <div className="support-form-group">
                        <label className="support-form-label">
                          {isEn ? 'Related Product / Category' : 'Kategori Produk / Modul Terkait'}
                        </label>
                        <select
                          className="support-form-select"
                          value={newQuestionCategory}
                          onChange={(e) =>
                            setNewQuestionCategory(
                              e.target.value as 'erp' | 'tax' | 'audit' | 'infra'
                            )
                          }
                        >
                          <option value="erp">Yaycount ERP & Buku Besar (ISAK 35)</option>
                          <option value="tax">IndoTax & e-Faktur Pajak PPN</option>
                          <option value="audit">Audit Forensik (JET & Sampling Pro)</option>
                          <option value="infra">CloudSave & Keamanan Enterprise</option>
                        </select>
                      </div>

                      <div className="support-form-group">
                        <label className="support-form-label">
                          {isEn ? 'Question Details' : 'Rincian Pertanyaan & Konteks Masalah'}
                        </label>
                        <textarea
                          required
                          placeholder={
                            isEn
                              ? 'Describe what you are trying to do, error messages observed, and steps already attempted...'
                              : 'Jelaskan apa yang ingin Anda capai, pesan kesalahan yang muncul (jika ada), dan langkah yang sudah Anda coba...'
                          }
                          className="support-form-textarea"
                          value={newQuestionBody}
                          onChange={(e) => setNewQuestionBody(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>

                {!newQuestionSuccess && (
                  <div className="support-modal-footer">
                    <button
                      type="button"
                      className="support-btn-cancel"
                      onClick={() => setIsAskModalOpen(false)}
                    >
                      {isEn ? 'Cancel' : 'Batal'}
                    </button>
                    <button type="submit" className="support-btn-submit">
                      <Icon name="message-square" size={14} color="#FFFFFF" />
                      <span>{isEn ? 'Post Question' : 'Kirim Pertanyaan'}</span>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
