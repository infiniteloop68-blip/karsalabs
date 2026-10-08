export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  iconType: string;
  popular?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Rancang Bangun Perangkat Lunak Skala Enterprise',
    description: 'Kami mengembangkan aplikasi web, mobile (iOS & Android), dan backend mikroservis yang dirancang khusus sesuai alur kerja unik bisnis Anda dengan arsitektur scalable dan performa tinggi.',
    features: [
      'Arsitektur Microservices & Modular',
      'Desain UI/UX Eksklusif & User-Centric',
      'Penyelarasan API Terbuka & Integrasi ERP/Core-Banking',
      'Pengujian Otomatis (Unit, Integration, E2E Test)'
    ],
    deliverables: ['Source Code Lengkap', 'Dokumentasi Arsitektur', 'Garansi & SLA 99.9%'],
    iconType: 'code',
    popular: true
  },
  {
    id: 'saas-ecosystem',
    title: 'Enterprise SaaS Architecture',
    tagline: 'Ekosistem Produk Digital Multi-Tenant & Scalable',
    description: 'Sebagaimana kami membangun ekosistem Goletin (18+ produk terintegrasi), kami membantu korporasi dan founder membangun platform SaaS multi-tenant dari nol hingga siap melayani jutaan pengguna.',
    features: [
      'Multi-Tenancy & Data Isolation Tingkat Tinggi',
      'Subscription & Billing Gateway Terintegrasi',
      'Single Sign-On (SSO) & RBAC Granular',
      'Auto-Scaling Cloud Infrastructure (AWS / GCP / Bare Metal)'
    ],
    deliverables: ['Cloud Infra as Code (Terraform)', 'CI/CD Pipeline', 'Admin & Billing Portal'],
    iconType: 'saas',
    popular: true
  },
  {
    id: 'government-solutions',
    title: 'Solusi Digital Pemerintah & Institusi',
    tagline: 'Sistem Informasi Publik Sesuai Regulasi SPBE',
    description: 'Pengalaman mendalam menghadirkan solusi teknologi untuk instansi pemerintah, BUMN, dan lembaga publik dengan kepatuhan regulasi keamanan data nasional, transparansi, dan auditabilitas tinggi.',
    features: [
      'Kepatuhan Arsitektur SPBE & Standar BSSN',
      'Integrasi Satu Data & Interoperabilitas API Antar Lembaga',
      'Audit Trail Anti-Fraud & Tanda Tangan Elektronik Tersertifikasi',
      'Dukungan Server On-Premise / Pusat Data Nasional (PDN)'
    ],
    deliverables: ['Sertifikasi Kelaikan Sistem', 'Laporan Audit Keamanan', 'Pelatihan ASN / Operator'],
    iconType: 'government'
  },
  {
    id: 'finance-compliance-tech',
    title: 'Financial & Compliance Tech',
    tagline: 'Automasi Akuntansi, Pajak & Audit Standar Internasional',
    description: 'Spesialisasi kami dalam algoritma regulasi keuangan: IFRS 9 (ECL), PSAK 73 (Lease), PSAK 72 (Revenue), IAS 19 (Benefits), serta audit sampling ISA 530 & journal testing ISA 240.',
    features: [
      'Engine Kalkulasi Aktuaria & CKPN Otomatis',
      'Otomatisasi Kepatuhan Pajak Indonesia (DJP Online)',
      'Pengujian Anomali & Fraud Menggunakan Hukum Benford',
      'Verifikasi Dokumen & Kertas Kerja Audit Standar IAI/IAPI'
    ],
    deliverables: ['Kertas Kerja Standar KAP', 'Mathematical Engine Documentation', 'Integrasi GL / Core Finance'],
    iconType: 'compliance'
  },
  {
    id: 'cloud-security',
    title: 'Cloud Infrastructure & Security',
    tagline: 'Pondasi Cloud Tangguh, Aman & Efisien',
    description: 'Audit keamanan sistem informasi, migrasi cloud tanpa downtime, optimasi biaya infrastruktur, dan penerapan standar zero-trust security untuk melindungi aset digital paling berharga.',
    features: [
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'Konfigurasi Kubernetes & Container Orchestration',
      'Disaster Recovery Plan (DRP) & RPO/RTO Minimal',
      'Pemantauan Sistem & Logging 24/7 (Datadog / Prometheus)'
    ],
    deliverables: ['Laporan Audit Keamanan', 'Disaster Recovery Playbook', 'Dashboard Monitoring 24/7'],
    iconType: 'security'
  },
  {
    id: 'dedicated-team',
    title: 'Dedicated Engineering Team',
    tagline: 'Tim Pengembang Senior Siap Akselerasi Roadmap Produk Anda',
    description: 'Perluas kapasitas tim Anda dengan insinyur perangkat lunak, arsitek sistem, dan product manager senior dari Karsasoft yang berdedikasi penuh untuk mencapai target rilis produk tepat waktu.',
    features: [
      'Full-Stack Developer, DevOps & QA Engineer Berpengalaman',
      'Agile/Scrum Framework dengan Laporan Sprint Transparan',
      'Time-Zone Aligned & Komunikasi Fleksibel',
      'Transfer Pengetahuan & Onboarding Cepat'
    ],
    deliverables: ['Dedicated Squad', 'Sprint Burndown Report', 'Seamless Knowledge Transfer'],
    iconType: 'team'
  }
];
