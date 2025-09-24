import { ApiPlayground } from '@/components/api-playground'
import { TrendingUp, DollarSign, Clock, AlertCircle, BarChart3, Zap } from 'lucide-react'

export default function GetMarketRatePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Market Rate</h1>
          <p className="text-foreground-secondary">
            Retrieve real-time exchange rates for stablecoin-to-fiat conversions with provider-specific pricing and market conditions.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#rate-types" className="text-blue-400 hover:underline">Rate Types</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/provider/market-rate"
            title="Get Market Exchange Rate"
            description="Retrieve current exchange rates for liquidity provider operations"
            parameters={[
              {
                name: "from",
                type: "query",
                required: true,
                description: "Source token (USDT, USDC)",
                example: "USDT"
              },
              {
                name: "to",
                type: "query",
                required: true,
                description: "Destination currency (TZS, KES, UGX)",
                example: "TZS"
              },
              {
                name: "amount",
                type: "query",
                required: false,
                description: "Amount for volume-based pricing (optional)",
                example: "100"
              },
              {
                name: "provider_tier",
                type: "query",
                required: false,
                description: "Provider tier for rate calculation (premium, standard, basic)",
                example: "premium"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Market rate retrieved successfully",
              "data": {
                "pair": "USDT/TZS",
                "rates": {
                  "base": "2600.00",
                  "provider": "2595.00",
                  "spread": "0.19",
                  "effectiveRate": "2595.00"
                },
                "volume": {
                  "requestedAmount": "100",
                  "fiatEquivalent": "259500.00",
                  "fees": {
                    "providerFee": "2.50",
                    "networkFee": "0.50",
                    "totalFees": "3.00"
                  }
                },
                "market": {
                  "liquidity": "high",
                  "volatility": "low",
                  "confidence": 98.5,
                  "lastUpdate": "2024-01-15T10:00:00Z"
                },
                "provider": {
                  "tier": "premium",
                  "rateBonus": "0.05",
                  "volumeDiscount": "0.10",
                  "settlementCapacity": "available"
                },
                "validity": {
                  "validUntil": "2024-01-15T10:05:00Z",
                  "refreshInterval": 30,
                  "rateId": "rate_550e8400e29b41d4a716446655440000"
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
              The market rate endpoint provides liquidity providers with real-time exchange rates that include 
              provider-specific pricing, volume discounts, and market conditions. This enables competitive 
              pricing while maintaining profitability for settlement operations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Dynamic Pricing
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Real-time market rate updates</li>
                  <li>• Provider tier-based rate bonuses</li>
                  <li>• Volume-based pricing discounts</li>
                  <li>• Competitive spread optimization</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Market Intelligence
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Liquidity availability indicators</li>
                  <li>• Market volatility assessments</li>
                  <li>• Rate confidence scoring</li>
                  <li>• Settlement capacity monitoring</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Provider Benefits:</strong> Higher-tier providers receive better rates, volume discounts, 
                and priority access to high-value orders. Maintain high settlement success rates to improve your tier status.
              </p>
            </div>
          </section>

          {/* Parameters */}
          <section id="parameters">
            <h2 className="text-2xl font-semibold mb-4">Request Parameters</h2>
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
                    <td className="p-4 font-mono text-sm">from</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Source stablecoin (USDT, USDC)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">to</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Destination fiat currency (TZS, KES, UGX)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">amount</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Stablecoin amount for volume-based pricing
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">provider_tier</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Override tier for rate calculation (premium, standard, basic)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">include_history</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include 24h rate history for trend analysis (default: false)
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
              The response provides comprehensive rate information including base rates, provider-specific 
              adjustments, market conditions, and validity periods.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Rate Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>base</code> - Market base rate without provider adjustments</li>
                  <li><code>provider</code> - Rate including provider tier bonuses and discounts</li>
                  <li><code>spread</code> - Percentage spread applied to base rate</li>
                  <li><code>effectiveRate</code> - Final rate for settlement calculations</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Volume & Fees</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>fiatEquivalent</code> - Calculated fiat amount at effective rate</li>
                  <li><code>providerFee</code> - Earnings for completing settlement</li>
                  <li><code>networkFee</code> - Blockchain transaction costs</li>
                  <li><code>totalFees</code> - Combined fee structure</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Market & Provider Data</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>liquidity</code> - Market liquidity level (high, medium, low)</li>
                  <li><code>confidence</code> - Rate accuracy confidence score (0-100)</li>
                  <li><code>tier</code> - Your current provider tier status</li>
                  <li><code>validUntil</code> - Rate expiration timestamp</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rate Types */}
          <section id="rate-types">
            <h2 className="text-2xl font-semibold mb-4">Provider Tiers & Rate Adjustments</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-yellow-400 mb-3 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Basic Tier
                </h3>
                <ul className="text-sm text-yellow-300 space-y-2">
                  <li>• Base market rates</li>
                  <li>• Standard settlement priority</li>
                  <li>• 2.5% provider fee</li>
                  <li>• No volume discounts</li>
                </ul>
              </div>

              <div className="p-4 border border-blue-500/20 bg-blue-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-blue-400 mb-3 flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Standard Tier
                </h3>
                <ul className="text-sm text-blue-300 space-y-2">
                  <li>• +0.05% rate bonus</li>
                  <li>• Higher settlement priority</li>
                  <li>• 2.0% provider fee</li>
                  <li>• Volume discounts available</li>
                </ul>
              </div>

              <div className="p-4 border border-purple-500/20 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-purple-400 mb-3 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Premium Tier
                </h3>
                <ul className="text-sm text-purple-300 space-y-2">
                  <li>• +0.10% rate bonus</li>
                  <li>• Highest settlement priority</li>
                  <li>• 1.5% provider fee</li>
                  <li>• Maximum volume discounts</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Volume Discount Tiers</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium">$1K - $10K:</span>
                  <p className="text-blue-300">No discount</p>
                </div>
                <div>
                  <span className="font-medium">$10K - $50K:</span>
                  <p className="text-blue-300">0.05% bonus</p>
                </div>
                <div>
                  <span className="font-medium">$50K+:</span>
                  <p className="text-blue-300">0.10% bonus</p>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* Basic Rate Query */}
              <div>
                <h3 className="text-lg font-medium mb-3">Basic Rate Query</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/market-rate?from=USDT&to=TZS
                </div>
              </div>

              {/* Volume-based Pricing */}
              <div>
                <h3 className="text-lg font-medium mb-3">Volume-based Pricing</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/market-rate?from=USDC&to=KES&amount=25000
                </div>
              </div>

              {/* Premium Tier Rate */}
              <div>
                <h3 className="text-lg font-medium mb-3">Premium Tier Rate with History</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/market-rate?from=USDT&to=UGX&provider_tier=premium&include_history=true
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Premium Provider</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "pair": "USDT/TZS",
    "rates": {
      "base": "2600.00",
      "provider": "2602.60",
      "spread": "0.19",
      "effectiveRate": "2602.60"
    },
    "volume": {
      "requestedAmount": "100",
      "fiatEquivalent": "260260.00"
    },
    "market": {
      "liquidity": "high",
      "volatility": "low",
      "confidence": 98.5
    },
    "provider": {
      "tier": "premium",
      "rateBonus": "0.10",
      "settlementCapacity": "available"
    },
    "validity": {
      "validUntil": "2024-01-15T10:05:00Z",
      "rateId": "rate_550e8400e29b41d4a716446655440000"
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Rate Management Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Optimization Tips</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Refresh rates every 30 seconds for active trading</li>
                  <li>• Use volume-based pricing for large orders</li>
                  <li>• Monitor market volatility indicators</li>
                  <li>• Cache rates locally but respect validity periods</li>
                  <li>• Track your tier progression for better rates</li>
                  <li>• Consider market liquidity when accepting orders</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Important Notes</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Rates expire after 5 minutes maximum</li>
                  <li>• High volatility may reduce rate validity periods</li>
                  <li>• Provider tier affects both rates and priority</li>
                  <li>• Settlement capacity impacts rate availability</li>
                  <li>• Rate confidence below 90% indicates market stress</li>
                  <li>• Always validate rate ID when creating orders</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
