'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icons';

export function LicenseCalculatorClient() {
  const [userCount, setUserCount] = useState<number>(50);
  const [competitorSuite, setCompetitorSuite] = useState<string>('m365-standard');
  const [goletinPlan, setGoletinPlan] = useState<string>('enterprise');
  const [contractPeriod, setContractPeriod] = useState<number>(1); // years (1 or 3)

  const competitorRates: Record<string, { name: string; pricePerMonth: number; note: string }> = {
    'm365-standard': {
      name: 'Microsoft 365 Business Standard',
      pricePerMonth: 195000,
      note: 'Lisensi Office desktop & cloud, belum termasuk modul ERP & pajak lokal.',
    },
    'm365-e3': {
      name: 'Microsoft 365 Enterprise E3',
      pricePerMonth: 485000,
      note: 'Paket enterprise global terikat kurs valuta asing USD.',
    },
    'gws-standard': {
      name: 'Google Workspace Business Standard',
      pricePerMonth: 180000,
      note: 'Hanya berbasis browser, belum mencakup ERP akuntansi terpadu.',
    },
    'erp-legacy': {
      name: 'Software ERP Asing / SAP / Oracle (Per Seat)',
      pricePerMonth: 1450000,
      note: 'Biaya lisensi per pengguna dengan biaya konsultan implementasi tinggi.',
    },
  };

  const goletinRates: Record<string, { name: string; pricePerMonth: number; note: string }> = {
    'bisnis': {
      name: 'Goletin Bisnis Suite',
      pricePerMonth: 65000,
      note: 'Docs, Sheets, Slides, CloudSave 1TB, dan IndoTax PPh 21 TER.',
    },
    'enterprise': {
      name: 'Goletin Enterprise Sovereign',
      pricePerMonth: 125000,
      note: 'Lengkap Office Suite, CloudSave 1TB, Yaycount ERP, Engine Pajak, & SLA 99,9%.',
    },
    'finansial-full': {
      name: 'Goletin Financial & Compliance Ultimate',
      pricePerMonth: 195000,
      note: 'Semua aplikasi Office + ERP + Engine PSAK 71, PSAK 73, JET Pro, & Sampling Pro.',
    },
  };

  const calculations = useMemo(() => {
    const compRate = competitorRates[competitorSuite]?.pricePerMonth || 195000;
    const golRate = goletinRates[goletinPlan]?.pricePerMonth || 125000;

    const annualCompCost = userCount * compRate * 12 * contractPeriod;
    const annualGolCost = userCount * golRate * 12 * contractPeriod;

    const totalSavings = Math.max(0, annualCompCost - annualGolCost);
    const savingsPercent = annualCompCost > 0 ? Math.round((totalSavings / annualCompCost) * 100) : 0;

    // Monthly savings per seat
    const monthlySeatSavings = Math.max(0, compRate - golRate);

    return {
      annualCompCost,
      annualGolCost,
      totalSavings,
      savingsPercent,
      monthlySeatSavings,
    };
  }, [userCount, competitorSuite, goletinPlan, contractPeriod]);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Interactive Controls & Live Results Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Input Form */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--ms-border-card, #DFE7E3)',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-segoe-display)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--ms-text-heading, #0E1726)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  backgroundColor: '#E6FCF7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name="calculator" size={18} color="#007D65" />
              </div>
              <span>Parameter Organisasi</span>
            </h2>

            {/* 1. User Count Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <label
                  style={{
                    fontFamily: 'var(--font-segoe-display)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--ms-text-heading, #0E1726)',
                  }}
                >
                  Jumlah Karyawan / Pengguna:
                </label>
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#007D65',
                    backgroundColor: '#E6FCF7',
                    padding: '3px 14px',
                    borderRadius: '100px',
                    border: '1px solid rgba(0, 237, 194, 0.5)',
                  }}
                >
                  {userCount} Kursi
                </span>
              </div>

              <input
                type="range"
                min={5}
                max={1000}
                step={5}
                value={userCount}
                onChange={(e) => setUserCount(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '6px',
                  accentColor: '#00EDC2',
                  cursor: 'pointer',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '11.5px',
                  color: 'var(--ms-text-muted, #5E6D82)',
                  marginTop: '6px',
                }}
              >
                <span>5 Pengguna</span>
                <span>250</span>
                <span>500</span>
                <span>1.000+ Kursi</span>
              </div>
            </div>

            {/* 2. Competitor Suite Selector */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-segoe-display)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--ms-text-heading, #0E1726)',
                  marginBottom: '8px',
                }}
              >
                Software yang Digunakan Saat Ini:
              </label>
              <select
                value={competitorSuite}
                onChange={(e) => setCompetitorSuite(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid var(--ms-border, #DFE7E3)',
                  fontSize: '14px',
                  color: 'var(--ms-text-heading, #0E1726)',
                  backgroundColor: '#FFFFFF',
                  outline: 'none',
                }}
              >
                {Object.entries(competitorRates).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.name} (~{formatRupiah(v.pricePerMonth)}/bln)
                  </option>
                ))}
              </select>
              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--ms-text-muted, #5E6D82)',
                  marginTop: '6px',
                  marginBottom: 0,
                  lineHeight: 1.4,
                }}
              >
                {competitorRates[competitorSuite]?.note}
              </p>
            </div>

            {/* 3. Goletin Plan Selector */}
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-segoe-display)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--ms-text-heading, #0E1726)',
                  marginBottom: '8px',
                }}
              >
                Pilihan Paket Goletin Suite:
              </label>
              <select
                value={goletinPlan}
                onChange={(e) => setGoletinPlan(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid #00EDC2',
                  fontSize: '14px',
                  color: 'var(--ms-text-heading, #0E1726)',
                  backgroundColor: '#FFFFFF',
                  outline: 'none',
                }}
              >
                {Object.entries(goletinRates).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.name} ({formatRupiah(v.pricePerMonth)}/bln)
                  </option>
                ))}
              </select>
              <p
                style={{
                  fontSize: '12px',
                  color: '#007D65',
                  marginTop: '6px',
                  marginBottom: 0,
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                ✓ {goletinRates[goletinPlan]?.note}
              </p>
            </div>

            {/* 4. Contract Period Selector */}
            <div style={{ marginBottom: '24px' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-segoe-display)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--ms-text-heading, #0E1726)',
                  marginBottom: '8px',
                }}
              >
                Durasi Perhitungan Komitmen:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setContractPeriod(1)}
                  style={{
                    flex: 1,
                    padding: '9px 12px',
                    borderRadius: '6px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: contractPeriod === 1 ? '2px solid #00EDC2' : '1px solid var(--ms-border, #DFE7E3)',
                    backgroundColor: contractPeriod === 1 ? '#E6FCF7' : '#FFFFFF',
                    color: contractPeriod === 1 ? '#007D65' : '#1E293B',
                    transition: 'all 0.15s ease',
                  }}
                >
                  1 Tahun
                </button>
                <button
                  type="button"
                  onClick={() => setContractPeriod(3)}
                  style={{
                    flex: 1,
                    padding: '9px 12px',
                    borderRadius: '6px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: contractPeriod === 3 ? '2px solid #00EDC2' : '1px solid var(--ms-border, #DFE7E3)',
                    backgroundColor: contractPeriod === 3 ? '#E6FCF7' : '#FFFFFF',
                    color: contractPeriod === 3 ? '#007D65' : '#1E293B',
                    transition: 'all 0.15s ease',
                  }}
                >
                  3 Tahun (Jangka Menengah)
                </button>
              </div>
            </div>
          </div>

          {/* Quick Info Box */}
          <div
            style={{
              padding: '14px 16px',
              backgroundColor: 'var(--ms-bg-subtle, #F6FAF8)',
              border: '1px solid var(--ms-border, #DFE7E3)',
              borderRadius: '8px',
              fontSize: '12.5px',
              color: 'var(--ms-text-muted, #5E6D82)',
              lineHeight: 1.5,
              marginTop: '12px',
            }}
          >
            <strong style={{ color: 'var(--ms-text-heading, #0E1726)' }}>Catatan Kedaulatan Fiskal:</strong> Seluruh harga Goletin dipatok dalam mata uang IDR tetap, terlindung dari risiko fluktuasi nilai tukar USD/EUR dan biaya inflasi tahunan prinsipal luar negeri.
          </div>
        </div>

        {/* Right Column: Live Savings Summary Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #00EDC2',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: '0 8px 30px rgba(0, 237, 194, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#007D65',
                  backgroundColor: '#E6FCF7',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  letterSpacing: '0.5px',
                }}
              >
                HASIL SIMULASI TOTAL COST OF OWNERSHIP (TCO)
              </span>
              <span style={{ fontSize: '12.5px', color: 'var(--ms-text-muted, #5E6D82)', fontWeight: 600 }}>
                {contractPeriod} Tahun Komitmen
              </span>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '13px', color: 'var(--ms-text-muted, #5E6D82)', marginBottom: '4px' }}>
                Estimasi Total Penghematan Anggaran:
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-segoe-display)',
                  fontSize: '38px',
                  fontWeight: 700,
                  color: 'var(--ms-text-heading, #0E1726)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.5px',
                }}
              >
                {formatRupiah(calculations.totalSavings)}
              </div>
              <div style={{ fontSize: '14px', color: '#007D65', fontWeight: 700, marginTop: '8px' }}>
                Hemat hingga {calculations.savingsPercent}% dari anggaran software tahunan Anda!
              </div>
            </div>

            {/* Comparison Rows */}
            <div
              style={{
                borderTop: '1px solid var(--ms-border, #DFE7E3)',
                borderBottom: '1px solid var(--ms-border, #DFE7E3)',
                padding: '16px 0',
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: 'var(--ms-text-muted, #5E6D82)' }}>
                  Biaya Sistem Saat Ini:
                </span>
                <strong style={{ fontSize: '14.5px', color: '#DC2626' }}>
                  {formatRupiah(calculations.annualCompCost)}
                </strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: 'var(--ms-text-muted, #5E6D82)' }}>
                  Biaya dengan Goletin:
                </span>
                <strong style={{ fontSize: '14.5px', color: 'var(--ms-text-heading, #0E1726)' }}>
                  {formatRupiah(calculations.annualGolCost)}
                </strong>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#E6FCF7',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  marginTop: '4px',
                }}
              >
                <span style={{ fontSize: '12.5px', color: '#007D65', fontWeight: 700 }}>
                  Penghematan per Kursi per Bulan:
                </span>
                <strong style={{ fontSize: '13.5px', color: '#007D65' }}>
                  {formatRupiah(calculations.monthlySeatSavings)} / kursi
                </strong>
              </div>
            </div>

            {/* Strategic Advantages Checklist */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--ms-text-heading, #0E1726)',
                  marginBottom: '10px',
                }}
              >
                Keuntungan Tambahan yang Didapatkan:
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '12.5px',
                  color: 'var(--ms-text-body, #1E293B)',
                }}
              >
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#007D65', display: 'inline-flex' }}>
                    <Icon name="check" size={14} className="trust-icon-check" />
                  </span>
                  <span>Data Center Tier-4 Indonesia — 100% Kepatuhan UU PDP No. 27/2022</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#007D65', display: 'inline-flex' }}>
                    <Icon name="check" size={14} className="trust-icon-check" />
                  </span>
                  <span>Faktur Pajak e-Faktur PPN resmi & bukti potong PPh 23 dari PT resmi</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#007D65', display: 'inline-flex' }}>
                    <Icon name="check" size={14} className="trust-icon-check" />
                  </span>
                  <span>Dukungan teknis bahasa Indonesia via WhatsApp resmi & SLA L2/L3</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              href={`/kontak?ref=tco-calculator&users=${userCount}&savings=${calculations.totalSavings}`}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Minta Proposal Resmi dengan Estimasi Ini</span>
              <Icon name="arrow-right" size={15} />
            </Link>

            <button
              type="button"
              onClick={handlePrint}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Icon name="docs" size={14} />
              <span>Cetak / Simpan PDF Estimasi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
