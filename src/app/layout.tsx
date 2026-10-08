import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#007D65",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://karsasoft.com"),
  title: {
    default: "Karsasoft — Perusahaan Teknologi & Ekosistem Perangkat Lunak Goletin",
    template: "%s | Karsasoft",
  },
  description:
    "PT Karsa Solusi Teknologi (Karsasoft) adalah perusahaan teknologi pengembang ekosistem perangkat lunak mandiri Goletin. Menghadirkan rangkaian produk AI, produktivitas kantor, ERP akuntansi, dan engine kepatuhan IFRS/PSAK.",
  keywords: [
    "Karsasoft",
    "Goletin",
    "Goletin AI",
    "ekosistem Goletin",
    "software company Indonesia",
    "Yaycount ERP",
    "IndoTax",
    "ECL Pro IFRS 9",
    "Lease Engine PSAK 73",
    "Sampling Pro ISA 530",
    "perangkat lunak berdaulat",
    "cloud enterprise Indonesia",
  ],
  authors: [{ name: "PT Karsa Solusi Teknologi" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "./",
    languages: {
      "id-ID": "https://karsasoft.com",
      "x-default": "https://karsasoft.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Karsasoft",
    title: "Karsasoft — Perusahaan Teknologi & Ekosistem Perangkat Lunak Goletin",
    description:
      "Memberdayakan bisnis dan institusi dengan ekosistem perangkat lunak mandiri Goletin: AI, produktivitas kantor, ERP akuntansi, dan engine kepatuhan standar internasional.",
    url: "https://karsasoft.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Karsasoft & Goletin Software Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karsasoft — Ekosistem Perangkat Lunak Goletin",
    description:
      "Memberdayakan bisnis dan institusi dengan ekosistem perangkat lunak mandiri Goletin: AI, produktivitas kantor, ERP akuntansi, dan engine kepatuhan standar internasional.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const rootStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://karsasoft.com/#organization",
      name: "PT Karsa Solusi Teknologi",
      alternateName: ["Karsasoft", "Ekosistem Goletin"],
      url: "https://karsasoft.com",
      logo: {
        "@type": "ImageObject",
        url: "https://karsasoft.com/logo-karsasoft.svg",
      },
      description:
        "Perusahaan teknologi pengembang ekosistem perangkat lunak mandiri Goletin: AI, produktivitas kantor, ERP akuntansi, dan engine kepatuhan standar internasional.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://karsasoft.com/#website",
      url: "https://karsasoft.com",
      name: "Karsasoft",
      publisher: {
        "@id": "https://karsasoft.com/#organization",
      },
      inLanguage: "id-ID",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://c.s-microsoft.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://c.s-microsoft.com" />
      </head>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootStructuredData) }}
        />
        <LanguageProvider>
          <Header />
          <main className="main-content-flow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
