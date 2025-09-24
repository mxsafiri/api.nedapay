import { ApiPlayground } from '@/components/api-playground'
import { Globe, TrendingUp, DollarSign, MapPin, Clock, AlertTriangle } from 'lucide-react'

export default function ListSupportedCurrenciesPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">List Supported Currencies</h1>
          <p className="text-foreground-secondary">
            Get comprehensive information about all fiat currencies supported by NEDApay's liquidity pools for stablecoin-to-fiat conversion.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#currency-details" className="text-blue-400 hover:underline">Currency Details</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/general/currencies"
            title="List Supported Currencies"
            description="Retrieve all fiat currencies available for stablecoin conversion"
            parameters={[
              {
                name: "region",
                type: "query",
                required: false,
                description: "Filter by region (east_africa, all)",
                example: "east_africa"
              },
              {
                name: "status",
                type: "query",
                required: false,
                description: "Filter by operational status (active, maintenance)",
                example: "active"
              },
              {
                name: "include_rates",
                type: "query",
                required: false,
                description: "Include current exchange rates",
                example: "true"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Currencies retrieved successfully",
              "data": {
                "currencies": [
                  {
                    "currencyCode": "TZS",
                    "currencyName": "Tanzanian Shilling",
                    "country": "Tanzania",
                    "countryCode": "TZ",
                    "region": "East Africa",
                    "status": "active",
                    "symbol": "TSh",
                    "decimalPlaces": 2,
                    "limits": {
                      "minAmount": "1000.00",
                      "maxAmount": "100000000.00",
                      "dailyLimit": "500000000.00",
                      "monthlyLimit": "2000000000.00"
                    },
                    "liquidity": {
                      "poolSize": "2500000.00",
                      "utilization": 65.4,
                      "availableLiquidity": "865000.00",
                      "lastRefilled": "2024-01-15T08:30:00Z"
                    },
                    "institutions": {
                      "total": 12,
                      "active": 11,
                      "mobileMoneyOperators": 3,
                      "banks": 8,
                      "fintechs": 1
                    },
                    "rates": {
                      "usdtToFiat": "2600.00",
                      "usdcToFiat": "2600.50",
                      "lastUpdated": "2024-01-15T10:00:00Z",
                      "confidence": 98.5
                    },
                    "operationalHours": {
                      "timezone": "Africa/Dar_es_Salaam",
                      "schedule": "24/7",
                      "maintenanceWindow": "02:00-04:00 EAT"
                    },
                    "averageSettlementTime": "5-15 minutes",
                    "successRate": 98.7,
                    "lastUpdated": "2024-01-15T10:00:00Z"
                  },
                  {
                    "currencyCode": "KES",
                    "currencyName": "Kenyan Shilling",
                    "country": "Kenya",
                    "countryCode": "KE",
                    "region": "East Africa",
                    "status": "active",
                    "symbol": "KSh",
                    "decimalPlaces": 2,
                    "limits": {
                      "minAmount": "100.00",
                      "maxAmount": "10000000.00",
                      "dailyLimit": "50000000.00",
                      "monthlyLimit": "200000000.00"
                    },
                    "liquidity": {
                      "poolSize": "1800000.00",
                      "utilization": 72.1,
                      "availableLiquidity": "502200.00",
                      "lastRefilled": "2024-01-15T09:15:00Z"
                    },
                    "institutions": {
                      "total": 8,
                      "active": 8,
                      "mobileMoneyOperators": 2,
                      "banks": 5,
                      "fintechs": 1
                    },
                    "rates": {
                      "usdtToFiat": "145.20",
                      "usdcToFiat": "145.25",
                      "lastUpdated": "2024-01-15T10:00:00Z",
                      "confidence": 99.1
                    },
                    "operationalHours": {
                      "timezone": "Africa/Nairobi",
                      "schedule": "24/7",
                      "maintenanceWindow": "01:00-03:00 EAT"
                    },
                    "averageSettlementTime": "3-10 minutes",
                    "successRate": 99.2,
                    "lastUpdated": "2024-01-15T10:00:00Z"
                  }
                ],
                "summary": {
                  "totalCurrencies": 3,
                  "activeCurrencies": 3,
                  "totalLiquidityUSD": "6850000.00",
                  "averageUtilization": 68.7,
                  "totalInstitutions": 26
                }
              }
            }}
          />
        </div>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {/* Overview */}
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-foreground-secondary mb-4">
              This endpoint provides comprehensive information about all fiat currencies supported by NEDApay's 
              liquidity pool infrastructure. It includes operational limits, liquidity status, supported 
              institutions, and real-time exchange rates for stablecoin-to-fiat conversion.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  East African Focus
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Tanzanian Shilling (TZS)</li>
                  <li>• Kenyan Shilling (KES)</li>
                  <li>• Ugandan Shilling (UGX)</li>
                  <li>• Regional market expertise</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Liquidity Management
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Real-time pool monitoring</li>
                  <li>• Dynamic utilization tracking</li>
                  <li>• Automatic rebalancing</li>
                  <li>• Multi-million USD capacity</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h4 className="font-medium text-purple-400 mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Market Data
                </h4>
                <ul className="text-sm text-purple-300 space-y-1">
                  <li>• Live exchange rates</li>
                  <li>• Settlement performance metrics</li>
                  <li>• Institution availability</li>
                  <li>• Success rate tracking</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Liquidity Pool Model:</strong> NEDApay maintains dedicated liquidity pools for each 
                supported currency, ensuring fast settlement times and competitive exchange rates across 
                East African markets.
              </p>
            </div>
          </section>

          {/* Parameters */}
          <section id="parameters">
            <h2 className="text-2xl font-semibold mb-4">Query Parameters</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="border-b border-border bg-background-secondary">
                    <th className="text-left p-4 font-medium">Parameter</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Required</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">region</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by region (east_africa, all)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">status</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by operational status (active, maintenance)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">include_rates</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include current exchange rates (default: true)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Response Format */}
          <section id="response">
            <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
            <p className="text-foreground-secondary mb-4">
              Returns comprehensive currency information including operational limits, liquidity status, 
              supported institutions, and real-time market data for each supported fiat currency.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Currency Data Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Basic Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>currencyCode</code> - ISO 4217 currency code (TZS, KES, UGX)</li>
                  <li><code>currencyName</code> - Full currency name</li>
                  <li><code>country</code> - Primary country of use</li>
                  <li><code>symbol</code> - Currency symbol for display</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Liquidity & Limits</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>limits</code> - Transaction amount limits and daily/monthly caps</li>
                  <li><code>liquidity</code> - Pool size, utilization, and available capacity</li>
                  <li><code>institutions</code> - Count of integrated financial institutions</li>
                  <li><code>averageSettlementTime</code> - Typical processing timeframe</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Market Data</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>rates</code> - Current USDT/USDC to fiat exchange rates</li>
                  <li><code>successRate</code> - Settlement success percentage</li>
                  <li><code>operationalHours</code> - Service availability schedule</li>
                  <li><code>lastUpdated</code> - When data was last refreshed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Currency Details */}
          <section id="currency-details">
            <h2 className="text-2xl font-semibold mb-4">Supported Currencies</h2>
            
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                  Tanzanian Shilling (TZS)
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Market Position</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• Primary NEDApay market</li>
                      <li>• Largest liquidity pool</li>
                      <li>• 12 integrated institutions</li>
                      <li>• 24/7 operations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Key Institutions</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• Vodacom M-Pesa</li>
                      <li>• CRDB Bank</li>
                      <li>• Tigo Pesa</li>
                      <li>• Airtel Money</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Performance</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• 98.7% success rate</li>
                      <li>• 5-15 min settlement</li>
                      <li>• $2.5M+ liquidity pool</li>
                      <li>• 65% utilization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-400" />
                  Kenyan Shilling (KES)
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Market Position</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• Established market</li>
                      <li>• Strong M-Pesa integration</li>
                      <li>• 8 integrated institutions</li>
                      <li>• High-volume transactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Key Institutions</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• Safaricom M-Pesa</li>
                      <li>• Equity Bank</li>
                      <li>• KCB Bank</li>
                      <li>• Airtel Money</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Performance</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• 99.2% success rate</li>
                      <li>• 3-10 min settlement</li>
                      <li>• $1.8M+ liquidity pool</li>
                      <li>• 72% utilization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                  Ugandan Shilling (UGX)
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Market Position</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• Growing market</li>
                      <li>• Mobile money focus</li>
                      <li>• 6 integrated institutions</li>
                      <li>• Expanding coverage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Key Institutions</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• MTN Mobile Money</li>
                      <li>• Airtel Money</li>
                      <li>• Stanbic Bank</li>
                      <li>• Equity Bank</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Performance</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• 98.1% success rate</li>
                      <li>• 8-20 min settlement</li>
                      <li>• $1.2M+ liquidity pool</li>
                      <li>• 58% utilization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* All Currencies */}
              <div>
                <h3 className="text-lg font-medium mb-3">Get All Supported Currencies</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/currencies
                </div>
              </div>

              {/* East Africa Only */}
              <div>
                <h3 className="text-lg font-medium mb-3">East African Currencies Only</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/currencies?region=east_africa&status=active
                </div>
              </div>

              {/* With Rates */}
              <div>
                <h3 className="text-lg font-medium mb-3">Include Current Exchange Rates</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/currencies?include_rates=true
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - TZS Currency</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "currencies": [
      {
        "currencyCode": "TZS",
        "currencyName": "Tanzanian Shilling",
        "country": "Tanzania",
        "status": "active",
        "symbol": "TSh",
        "limits": {
          "minAmount": "1000.00",
          "maxAmount": "100000000.00",
          "dailyLimit": "500000000.00"
        },
        "liquidity": {
          "poolSize": "2500000.00",
          "utilization": 65.4,
          "availableLiquidity": "865000.00"
        },
        "rates": {
          "usdtToFiat": "2600.00",
          "usdcToFiat": "2600.50",
          "confidence": 98.5
        },
        "successRate": 98.7,
        "averageSettlementTime": "5-15 minutes"
      }
    ],
    "summary": {
      "totalCurrencies": 1,
      "activeCurrencies": 1
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Currency Integration Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended Usage</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Cache currency data for 30 minutes to reduce API calls</li>
                  <li>• Monitor liquidity utilization before large transactions</li>
                  <li>• Check currency status before processing payments</li>
                  <li>• Use exchange rates with confidence scores above 95%</li>
                  <li>• Respect operational hours and maintenance windows</li>
                  <li>• Implement fallback currencies for high availability</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Important Considerations</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Liquidity pools can reach capacity during peak periods</li>
                  <li>• Exchange rates update every 30 seconds during market hours</li>
                  <li>• Settlement times may increase during high utilization</li>
                  <li>• Currency limits are enforced at multiple levels</li>
                  <li>• Some currencies may have regional restrictions</li>
                  <li>• Maintenance windows can temporarily affect availability</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
