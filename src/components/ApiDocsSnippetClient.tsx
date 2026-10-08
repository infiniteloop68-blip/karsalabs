'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/Icons';

type LanguageTab = 'typescript' | 'curl' | 'python';

export function ApiDocsSnippetClient() {
  const [activeTab, setActiveTab] = useState<LanguageTab>('typescript');
  const [copied, setCopied] = useState(false);

  const snippets: Record<LanguageTab, string> = {
    typescript: `import axios from 'axios';

// Konfigurasi Klien API Resmi Goletin v2
const goletin = axios.create({
  baseURL: 'https://api.karsasoft.com/v2',
  headers: {
    'Authorization': \`Bearer \${process.env.GOLETIN_API_KEY}\`,
    'Content-Type': 'application/json',
    'X-Organization-ID': 'org_karsa_enterprise_01',
  },
});

// Contoh Kalkulasi Otomatis CKPN PSAK 71 / IFRS 9
async function hitungPortofolioECL() {
  try {
    const response = await goletin.post('/ecl/calculate', {
      portfolio_segment: 'KREDIT_KONSUMTIF_REGULER',
      reporting_date: '2026-03-31',
      macro_scenario: 'MODERATE_BASELINE',
      accounts: [
        {
          account_id: 'ACC-8839210',
          outstanding_balance: 150000000,
          dpd: 18, // Days Past Due
          rating_internal: 'A2',
          collateral_liquid_value: 120000000,
        },
      ],
    });

    console.log('Hasil Staging:', response.data.stage); // 1 (12M ECL)
    console.log('Nominal Cadangan CKPN:', response.data.allowance_amount); // IDR
  } catch (error) {
    console.error('API Error:', error.response?.data);
  }
}

hitungPortofolioECL();`,

    curl: `# Permintaan Kalkulasi Amortisasi Sewa PSAK 73 via cURL
curl -X POST https://api.karsasoft.com/v2/lease/amortization \\
  -H "Authorization: Bearer sec_live_karsa_992a01bf" \\
  -H "Content-Type: application/json" \\
  -H "X-Organization-ID: org_karsa_enterprise_01" \\
  -d '{
    "contract_number": "LEASE-JKT-2026-004",
    "commencement_date": "2026-01-01",
    "lease_term_months": 36,
    "payment_amount_per_period": 45000000,
    "payment_frequency": "MONTHLY",
    "incremental_borrowing_rate_annual": 0.0825,
    "initial_direct_costs": 5000000
  }'`,

    python: `import os
import requests

# Goletin Python SDK - Integrasi Engine Pajak PPh 21 TER
API_KEY = os.getenv("GOLETIN_API_KEY")
BASE_URL = "https://api.karsasoft.com/v2"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "X-Organization-ID": "org_karsa_enterprise_01"
}

payload = {
    "tax_period_month": 4,
    "tax_period_year": 2026,
    "employee": {
        "nik": "3271012903820001",
        "npwp": "08.123.456.7-012.000",
        "ptkp_status": "K/1", # Kategori TER A
        "gross_income_monthly": 14500000
    }
}

response = requests.post(f"{BASE_URL}/tax/pph21-ter", json=payload, headers=headers)
data = response.json()

print(f"Kategori TER: {data['ter_category']}") # Kategori A
print(f"Tarif Efektif: {data['effective_rate'] * 100}%") # 3.5%
print(f"Pajak Terutang: Rp {data['tax_withheld']:,}")`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #333333',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Tab Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#252526',
          padding: '10px 18px',
          borderBottom: '1px solid #333333',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          {(['typescript', 'curl', 'python'] as LanguageTab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? '#1E1E1E' : 'transparent',
                color: activeTab === tab ? '#00EDC2' : '#8B949E',
                border: activeTab === tab ? '1px solid #00EDC2' : '1px solid transparent',
                borderRadius: '6px',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'monospace',
                transition: 'all 0.15s ease',
              }}
            >
              {tab === 'typescript' ? 'TypeScript / Node' : tab === 'curl' ? 'cURL CLI' : 'Python 3'}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={copyCode}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: copied ? 'rgba(0, 237, 194, 0.15)' : 'transparent',
            border: copied ? '1px solid #00EDC2' : '1px solid #484F58',
            color: copied ? '#00EDC2' : '#C9D1D9',
            padding: '6px 14px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          {copied ? (
            <>
              <Icon name="check" size={13} className="trust-icon-check" />
              <span>Tersalin!</span>
            </>
          ) : (
            <span>Salin Kode</span>
          )}
        </button>
      </div>

      {/* Code Body */}
      <pre
        style={{
          margin: 0,
          padding: '24px',
          color: '#D4D4D4',
          fontSize: '13px',
          lineHeight: 1.6,
          fontFamily: "'Cascadia Code', Consolas, 'Courier New', monospace",
          overflowX: 'auto',
          backgroundColor: '#1E1E1E',
        }}
      >
        <code>{snippets[activeTab]}</code>
      </pre>
    </div>
  );
}
