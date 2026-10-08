export interface BlogSection {
  heading: string;
  paragraphs: string[];
  codeBlock?: {
    language: string;
    code: string;
    caption?: string;
  };
  callout?: {
    type: 'note' | 'tip' | 'warning';
    text: string;
  };
  bulletPoints?: string[];
}

export interface EngineeringArticle {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  badgeColor: string;
  summary: string;
  tags: string[];
  sections: BlogSection[];
  relatedSlugs: string[];
}

export const ENGINEERING_ARTICLES: EngineeringArticle[] = [
  {
    slug: 'wasm-ecl-engine',
    title: 'Arsitektur Komputasi CKPN Portofolio Sejuta Baris di Bawah 3 Detik Menggunakan WebAssembly & Go Worker Pool',
    category: 'ARSITEKTUR SISTEM & PERFORMA',
    author: 'Rian Hendrawan',
    authorRole: 'Lead Systems Architect, Karsasoft',
    date: 'Oktober 2026',
    readTime: '7 min baca',
    badgeColor: '#007D65',
    summary:
      'Mengapa pemrosesan spreadsheet konvensional gagal saat memproses matriks kredit skala perbankan, dan bagaimana kompilasi Go ke WebAssembly dengan shared memory buffer menembus batas komputasi browser modern tanpa mengorbankan keamanan memori.',
    tags: ['WebAssembly', 'Go Concurrency', 'IFRS 9 Math', 'Performance'],
    relatedSlugs: ['sheets-virtual-canvas-60fps', 'jet-pro-fraud-detection-ml', 'sovereign-cloud-infrastructure'],
    sections: [
      {
        heading: 'Latar Belakang: Problem Skalabilitas Kalkulasi IFRS 9',
        paragraphs: [
          'Dalam standar PSAK 71 / IFRS 9, setiap entitas perbankan dan multifinance diwajibkan menghitung cadangan kerugian penurunan nilai (CKPN) secara prospektif (forward-looking) untuk seluruh akun pinjaman aktif. Untuk portofolio kredit konsumtif atau paylater dengan 1.000.000 akun, perhitungan ini melibatkan evaluasi tiga skenario makroekonomi (Baseline, Optimis, Pesimis), penentuan staging 1-3 berdasarkan Significant Increase in Credit Risk (SICR), serta diskonto arus kas kontraktual masa depan.',
          'Ketika dilakukan di lembar kerja spreadsheet konvensional seperti Excel atau Google Sheets, pemrosesan dataset ini menyebabkan browser macet (unresponsive script), memory crash, atau membutuhkan waktu hingga 45 menit di server backend berbasis interpreted language.',
        ],
        callout: {
          type: 'warning',
          text: 'Evaluasi 1 juta baris akun dengan 12 periode amortisasi dan 3 skenario menghasilkan lebih dari 36 juta iterasi floating-point matriks per closing bulanan.',
        },
      },
      {
        heading: 'Arsitektur Komputasi: Menggabungkan Go Worker Pool & WebAssembly',
        paragraphs: [
          'Untuk memindahkan beban komputasi langsung ke client tanpa mengirim jutaan baris data sensitif nasabah ke cloud publik, kami merancang engine komputasi berbasis Go yang dikompilasi ke WebAssembly (Wasm).',
          'Dengan memanfaatkan Web Worker API dan SharedArrayBuffer, dataset kredit dipecah menjadi chunk berukuran 25.000 baris yang diproses secara paralel di seluruh thread CPU fisik perangkat pengguna.',
        ],
        codeBlock: {
          language: 'go',
          caption: 'Implementasi Worker Pool Konkuren di Go (Engine ECL Pro)',
          code: `package main

import (
	"sync"
	"syscall/js"
)

type CreditAccount struct {
	ID          string  \`json:"id"\`
	Balance     float64 \`json:"balance"\`
	DPD         int     \`json:"dpd"\`
	PD          float64 \`json:"pd"\`
	LGD         float64 \`json:"lgd"\`
	DiscountRate float64 \`json:"rate"\`
}

func CalculateECLChunk(accounts []CreditAccount, wg *sync.WaitGroup, out chan<- float64) {
	defer wg.Done()
	var totalECL float64
	for _, acc := range accounts {
		// Evaluasi Staging PSAK 71
		stage := 1
		if acc.DPD > 30 && acc.DPD <= 90 {
			stage = 2
		} else if acc.DPD > 90 {
			stage = 3
		}

		// Kalkulasi Prospektif Diskon
		ecl := acc.Balance * acc.PD * acc.LGD
		if stage > 1 {
			ecl = ecl * 1.35 // Lifetime adjustment factor
		}
		totalECL += ecl
	}
	out <- totalECL
}`,
        },
      },
      {
        heading: 'Hasil Benchmark & Reduksi Latensi',
        paragraphs: [
          'Pengujian benchmark dilakukan pada laptop spesifikasi standar kantor (Intel Core i5 gen-12, 16 GB RAM) menggunakan dataset sintetis 1.000.000 baris akun kredit aktif:',
        ],
        bulletPoints: [
          'V8 JavaScript Engine Murni: 14,2 detik (pemakaian memori 1,8 GB RAM)',
          'Server API Roundtrip (Upload + Compute + Download): 8,7 detik + beban bandwidth 120 MB',
          'Go WebAssembly dengan 8 Worker Threads: 2,41 detik (pemakaian memori hanya 310 MB RAM)',
        ],
      },
      {
        heading: 'Kesimpulan & Dampak Kedaulatan Data',
        paragraphs: [
          'Dengan arsitektur WebAssembly ini, bank dan lembaga keuangan dapat memproses jutaan data nasabah secara instan tanpa satu byte pun data pribadi meninggalkan perangkat browser pengguna. Ini memberikan efisiensi komputasi ekstrem sekaligus mematuhi prinsip kedaulatan data UU PDP secara sempurna.',
        ],
      },
    ],
  },
  {
    slug: 'zero-knowledge-cloudsave',
    title: 'Zero-Knowledge Encryption di CloudSave: Bagaimana Data Finansial Klien Tetap Terkunci Bahkan dari Operator Kami',
    category: 'KRIPTOGRAFI & KEAMANAN',
    author: 'Fajar Nugraha',
    authorRole: 'Cryptographic Security Engineer, Karsasoft',
    date: 'September 2026',
    readTime: '9 min baca',
    badgeColor: '#107C41',
    summary:
      'Bedah teknis skema derivasi kunci client-side menggunakan Argon2id dan AES-256-GCM. Kunci privat tidak pernah meninggalkan perangkat lokal klien, membentengi data rahasia dari penyitaan pihak ketiga maupun potensi ancaman orang dalam.',
    tags: ['Argon2id', 'AES-256-GCM', 'Zero-Trust', 'UU PDP'],
    relatedSlugs: ['sovereign-cloud-infrastructure', 'wasm-ecl-engine', 'slm-accounting-finetuning'],
    sections: [
      {
        heading: 'Filosofi Zero-Knowledge: Mengapa Enkripsi Server-Side Tidak Cukup',
        paragraphs: [
          'Banyak penyedia cloud komersial mengklaim layanan mereka terenkripsi "at-rest" dan "in-transit". Namun pada kenyataannya, kunci dekripsi disimpan di server penyedia cloud itu sendiri. Artinya, teknisi infrastruktur, regulator asing dengan surat panggilan (subpoena), atau penyusup yang berhasil menembus server dapat membaca seluruh isi dokumen keuangan Anda.',
          'Di Karsasoft CloudSave, kami menerapkan arsitektur Zero-Knowledge Cryptography mutlak: Karsasoft bertindak sebagai dumb-pipe penyimpanan blok byte terenkripsi. Kami tidak memiliki kunci, tidak bisa membaca dokumen Anda, dan tidak bisa menyerahkan data kepada siapa pun karena secara matematis mustahil.',
        ],
      },
      {
        heading: 'Alur Kriptografis: Derivasi Kunci Argon2id & AES-256-GCM',
        paragraphs: [
          'Sebelum berkas diunggah, proses enkripsi dieksekusi 100% di browser atau aplikasi desktop pengguna:',
        ],
        bulletPoints: [
          '1. Password Master pengguna diolah menggunakan Argon2id (Memory cost: 64MB, Iterations: 3, Parallelism: 4) dengan salt unik per organisasi untuk menghasilkan Master Encryption Key (MEK).',
          '2. Setiap berkas dienkripsi menggunakan Content Encryption Key (CEK) acak 256-bit dengan algoritma AES-GCM (Galois/Counter Mode).',
          '3. CEK dienkripsi menggunakan MEK, sehingga hanya pengguna pemilik password yang dapat membuka dekripsi berkas.',
        ],
        codeBlock: {
          language: 'typescript',
          caption: 'Enkripsi Client-Side Menggunakan Web Crypto API',
          code: `// Enkripsi file lokal sebelum streaming ke CloudSave Storage
async function encryptFileClientSide(
  fileBuffer: ArrayBuffer,
  masterKey: CryptoKey
): Promise<{ encryptedData: ArrayBuffer; iv: Uint8Array }> {
  const iv = crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV untuk AES-GCM

  const encryptedData = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
      tagLength: 128, // 128-bit authentication tag
    },
    masterKey,
    fileBuffer
  );

  return { encryptedData, iv };
}`,
        },
      },
      {
        heading: 'Mitigasi Risiko & Pemulihan Darurat (Key Escrow Organisasi)',
        paragraphs: [
          'Tantangan terbesar Zero-Knowledge adalah resiko kehilangan password: jika password master hilang, data hilang selamanya. Untuk organisasi korporat, kami menyediakan mekanisme Enterprise Shamir Secret Sharing (SSS) di mana master recovery key dipecah menjadi 5 bagian kunci yang dipegang oleh Direktur Utama, Komisaris, dan Legal. Minimal 3 dari 5 kunci harus digabungkan untuk memulihkan akses darurat.',
        ],
      },
    ],
  },
  {
    slug: 'slm-accounting-finetuning',
    title: 'Fine-Tuning Domain-Specific Small Language Model (SLM) untuk Terminologi Akuntansi PSAK dan Standar SPAP',
    category: 'KECERDASAN BUATAN & NLP',
    author: 'Dr. Dimas Pratama',
    authorRole: 'AI Research Scientist, Karsasoft',
    date: 'Agustus 2026',
    readTime: '8 min baca',
    badgeColor: '#5C2D91',
    summary:
      'Mengeliminasi halusinasi angka pada model generatif melalui penataan korpus 2,5 juta token standar akuntansi Indonesia, teknik LoRA adapter presisi tinggi, dan validasi constrained grammar decoding untuk entri debit-kredit seimbang.',
    tags: ['LLM Fine-Tuning', 'Constrained Decoding', 'PSAK Corpus', 'AI Ethics'],
    relatedSlugs: ['wasm-ecl-engine', 'jet-pro-fraud-detection-ml', 'sovereign-cloud-infrastructure'],
    sections: [
      {
        heading: 'Tantangan Model Bahasa Publik pada Sektor Akuntansi',
        paragraphs: [
          'Model LLM komersial umum (seperti model publik buatan barat) sering mengalami kegagalan fatal saat dihadapkan pada tugas akuntansi Indonesia: mereka mencampuradukkan format US GAAP dengan PSAK, salah menginterpretasikan istilah seperti "Aset Neto Tanpa Pembatasan" (ISAK 35), dan yang paling berbahaya: menghasilkan entri jurnal yang tidak seimbang antara Debit dan Kredit (halusinasi angka).',
        ],
        callout: {
          type: 'note',
          text: 'Dalam pembukuan double-entry, toleransi ketidakseimbangan adalah persis 0 Rupiah. Model bahasa umum tidak dirancang untuk mematuhi kaidah invarian matematika ketat semacam ini.',
        },
      },
      {
        heading: 'Metodologi Pelatihan: 2,5 Juta Token Korpus SAK & Regulasi Pajak',
        paragraphs: [
          'Tim riset Karsasoft menyusun dataset terkurasi berisi seluruh PSAK resmi IAI, interpretasi ISAK, modul PMK perpajakan DJP, dan lebih dari 500.000 pasangan transaksi jurnal terverifikasi. Kami melatih Small Language Model (SLM) berbobot 8B parameter menggunakan QLoRA (Quantized Low-Rank Adaptation) pada presisi float16.',
          'Untuk menjamin keseimbangan entri jurnal, kami mengimplementasikan teknik Constrained Grammar Decoding (menggunakan format BNF Grammars). Model secara sintaksis tidak diizinkan memancarkan token penutup entri jurnal sebelum jumlah sigma Debit sama persis dengan sigma Kredit.',
        ],
      },
      {
        heading: 'Hasil Evaluasi: Akurasi Penalaran Regulasi 99,4%',
        paragraphs: [
          'Pada pengujian benchmark internal dengan 1.200 pertanyaan studi kasus ujian profesi CA (Chartered Accountant) dan BAP (Brevet Pajak A/B):',
        ],
        bulletPoints: [
          'Model Umum Publik: Akurasi 71,2% (banyak halusinasi pasal perpajakan yang sudah dicabut)',
          'Goletin Financial SLM: Akurasi 99,4% dengan sitasi nomor paragraf PSAK dan pasal undang-undang yang 100% tepat',
          'Tingkat Keseimbangan Entri Jurnal: 100% selalu seimbang berkat Constrained Decoding',
        ],
      },
    ],
  },
  {
    slug: 'sovereign-cloud-infrastructure',
    title: 'Desain Arsitektur Sovereign Cloud: Memastikan Data Finansial 100% Berada di Wilayah Hukum Republik Indonesia',
    category: 'INFRASTRUKTUR CLOUD & REGULASI',
    author: 'Budi Santoso',
    authorRole: 'Principal Cloud Architect, Karsasoft',
    date: 'Juli 2026',
    readTime: '6 min baca',
    badgeColor: '#D83B01',
    summary:
      'Struktur redundansi active-active antar-data center Tier-4 di wilayah Jawa Barat, mitigasi risiko ekstrateritorialitas hukum luar negeri, dan kepatuhan penuh terhadap Peraturan Pemerintah No. 71/2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik.',
    tags: ['Sovereign Cloud', 'Tier-4 DC', 'PP 71/2019', 'Disaster Recovery'],
    relatedSlugs: ['zero-knowledge-cloudsave', 'wasm-ecl-engine', 'sheets-virtual-canvas-60fps'],
    sections: [
      {
        heading: 'Kedaulatan Digital & Risiko Ekstrateritorialitas CLOUD Act',
        paragraphs: [
          'Ketika perusahaan Indonesia menyimpan data akuntansi dan catatan transaksi di cloud publik multinasional, data tersebut tunduk pada hukum negara asal penyedia cloud (seperti US CLOUD Act). Pemerintah asing secara hukum dapat memaksa penyedia cloud menyerahkan data tanpa pemberitahuan kepada pemilik data di Indonesia.',
          'Untuk melindungi kerahasiaan nasional dan mematuhi amanat UU No. 27/2022 tentang Pelindungan Data Pribadi (UU PDP) serta PP No. 71/2019 (PSTE), seluruh infrastruktur Goletin dibangun di atas fondasi Sovereign Cloud murni.',
        ],
      },
      {
        heading: 'Topologi Dual-Site Tier-4 Active-Active',
        paragraphs: [
          'Infrastruktur kami bertempat di dua pusat data Tier-4 bersertifikasi Uptime Institute di Cikarang dan Sentul dengan interkoneksi serat optik jalur ganda (dual-homed dark fiber):',
        ],
        bulletPoints: [
          'RPO (Recovery Point Objective): 0 detik (sinkronisasi basis data synchronous multi-master Raft consensus)',
          'RTO (Recovery Time Objective): < 15 detik untuk failover otomatis seluruh kluster Kubernetes',
          'SLA Ketersediaan Layanan: 99,99% dengan isolasi daya listrik grid ganda dan genset N+2',
        ],
      },
      {
        heading: 'Sovereign Appliance: Opsi On-Premise Air-Gapped',
        paragraphs: [
          'Bagi institusi pertahanan, BUMN strategis, dan perbankan yang mewajibkan isolasi fisik tanpa koneksi internet sama sekali, kami menyediakan Goletin Sovereign Box—server rackmount siap pakai dengan seluruh software Goletin terinstalasi lokal.',
        ],
      },
    ],
  },
  {
    slug: 'sheets-virtual-canvas-60fps',
    title: 'Optimasi Canvas Pipeline untuk Merender 500.000 Sel Virtual pada 60 FPS di Goletin Sheets',
    category: 'FRONTEND ENGINEERING',
    author: 'Andi Wijaya',
    authorRole: 'Senior Frontend Engineer, Karsasoft',
    date: 'Juni 2026',
    readTime: '10 min baca',
    badgeColor: '#008272',
    summary:
      'Mengganti rendering ribuan elemen DOM tabel dengan sistem rendering 2D Canvas kustom berbasis spatial quadtree indexing dan memory object reuse untuk menghilangkan jeda garbage collection pada dataset akuntansi berukuran masif.',
    tags: ['Canvas 2D', 'Quadtree Indexing', 'Zero-GC Allocation', 'Web Performance'],
    relatedSlugs: ['wasm-ecl-engine', 'slm-accounting-finetuning', 'jet-pro-fraud-detection-ml'],
    sections: [
      {
        heading: 'Batas Kinerja DOM HTML pada Spreadsheet Finansial',
        paragraphs: [
          'Aplikasi spreadsheet web konvensional sering menggunakan elemen tabel HTML (<table>, <tr>, <td>) atau ratusan <div> untuk merepresentasikan grid. Pendekatan ini runtuh seketika saat lembar kerja memiliki lebih dari 10.000 sel: layout recalculation, style recalculation, dan paint time browser melonjak tajam hingga 350 milidetik per frame, mengakibatkan lagging parah saat scroll.',
        ],
      },
      {
        heading: 'Solusi Arsitektur: Infinite Canvas dengan Spatial Quadtree',
        paragraphs: [
          'Di Goletin Sheets, kami membuang DOM untuk viewport grid dan membangun rendering engine 2D HTML5 Canvas dari nol. Kami hanya merender sel yang benar-benar terlihat (visible viewport + 20% overscan buffer) menggunakan struktur data Spatial Quadtree.',
          'Setiap kali pengguna melakukan scrolling cepat (fast flick scroll), quadtree menanyakan sel mana saja yang masuk koordinat frustum kamera dalam kompleksitas O(log N).',
        ],
        codeBlock: {
          language: 'typescript',
          caption: 'Logika Viewport Culling pada Pipeline Canvas Goletin Sheets',
          code: `interface CellBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

function renderVisibleGrid(
  ctx: CanvasRenderingContext2D,
  scrollX: number,
  scrollY: number,
  viewportWidth: number,
  viewportHeight: number,
  gridIndex: QuadTree<CellData>
) {
  ctx.clearRect(0, 0, viewportWidth, viewportHeight);

  // Cari hanya sel yang beririsan dengan kamera viewport
  const visibleBounds: CellBounds = {
    x: scrollX,
    y: scrollY,
    width: viewportWidth,
    height: viewportHeight,
  };

  const visibleCells = gridIndex.query(visibleBounds);

  // Render teks & garis batas sel secara batch
  ctx.beginPath();
  for (let i = 0; i < visibleCells.length; i++) {
    const cell = visibleCells[i];
    const screenX = cell.x - scrollX;
    const screenY = cell.y - scrollY;

    // Gambar background & teks nilai sel
    ctx.fillText(cell.formattedValue, screenX + 4, screenY + 16);
    ctx.rect(screenX, screenY, cell.width, cell.height);
  }
  ctx.strokeStyle = '#DFE7E3';
  ctx.stroke();
}`,
        },
      },
      {
        heading: 'Teknik Zero-GC Allocation untuk Menjaga 60 FPS Konstan',
        paragraphs: [
          'Musuh utama kelancaran animasi pada JavaScript adalah Garbage Collection (GC) pauses. Untuk mencapai 60 FPS tanpa stutter (frame drop), kami menerapkan teknik Object Pooling ketat: tidak ada alokasi objek baru selama event loop animasi scroll berlangsung. Seluruh koordinat dan buffer warna digunakan kembali (reused in-place).',
        ],
      },
    ],
  },
  {
    slug: 'jet-pro-fraud-detection-ml',
    title: 'Deteksi Fraud Entri Jurnal ISA 240 Menggunakan Unsupervised Anomaly Detection & Graph Analysis',
    category: 'AUDIT FORENSIK & MACHINE LEARNING',
    author: 'Citra Lestari',
    authorRole: 'Forensic Technology Specialist, Karsasoft',
    date: 'Mei 2026',
    readTime: '8 min baca',
    badgeColor: '#D83B01',
    summary:
      'Bagaimana algoritma Isolation Forest dan analisis jaringan graf mendeteksi pola manipulasi jurnal tersembunyi seperti split transaction, pembulatan abnormal, dan entri di luar jam kerja sesuai standar audit internasional ISA 240.',
    tags: ['ISA 240', 'Machine Learning', 'Audit Forensik', 'Graph Analytics'],
    relatedSlugs: ['wasm-ecl-engine', 'slm-accounting-finetuning', 'zero-knowledge-cloudsave'],
    sections: [
      {
        heading: 'Standar ISA 240 & Keterbatasan Uji Sampling Manual',
        paragraphs: [
          'International Standard on Auditing (ISA) 240 mewajibkan auditor independen menguji entri jurnal yang dibuat di luar jalur wajar untuk mendeteksi potensi kecurangan pelaporan keuangan oleh manajemen. Secara tradisional, auditor hanya mengambil sampel acak 20-50 transaksi, yang memiliki probabilitas sangat kecil untuk menangkap jurnal kecurangan yang dirancang secara cermat.',
        ],
      },
      {
        heading: 'Kombinasi Isolation Forest & Bipartite Graph Analysis',
        paragraphs: [
          'Modul JET Pro (Journal Entry Testing) memanfaatkan model machine learning tanpa pengawasan (Unsupervised Isolation Forest) yang mengevaluasi multi-dimensi anomali:',
        ],
        bulletPoints: [
          'Temporal Anomaly: Jurnal yang diposting pada pukul 23:00–04:00 atau akhir pekan tanpa tiket persetujuan sistem.',
          'Benford Law Deviation: Deviasi statistik distribusi digit pertama nilai rupiah nominal transaksi.',
          'Split Transaction Clustering: Transaksi berulang bernilai Rp 49.500.000 yang dipecah tepat di bawah ambang batas otorisasi direksi Rp 50.000.000.',
        ],
      },
      {
        heading: 'Visualisasi Graf Aliran Dana untuk Kertas Kerja Auditor',
        paragraphs: [
          'Hasil pemindaian disajikan dalam bentuk graf bipartite interaktif yang menghubungkan pengguna pembuat jurnal, akun suspense, dan rekening tujuan. Kertas kerja lengkap siap diekspor dalam format standar audit KAP dengan referensi stempel waktu yang tidak dapat dimanipulasi.',
        ],
      },
    ],
  },
];
