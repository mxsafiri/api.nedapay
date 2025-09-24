import { ApiPlayground } from '@/components/api-playground'
import { TrendingUp, DollarSign, Clock, BarChart3, AlertCircle, Zap } from 'lucide-react'

export default function GetTokenRatePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Token Rate</h1>
          <p className="text-foreground-secondary">
            Retrieve real-time exchange rates for token-to-fiat conversions with market data and liquidity-adjusted pricing.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#rate-calculation" className="text-blue-400 hover:underline">Rate Calculation</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/general/token-rate"
            title="Get Token Exchange Rate"
            description="Retrieve current exchange rates for token-to-fiat conversions"
            parameters={[
              {
                name: "from",
                type: "query",
                required: true,
                description: "Source token symbol (USDT, USDC)",
                example: "USDT"
              },
              {
                name: "to",
                type: "query",
                required: true,
                description: "Destination currency code (TZS, KES, UGX)",
                example: "TZS"
              },
              {
                name: "amount",
                type: "query",
                required: false,
                description: "Amount for volume-based pricing",
                example: "100"
              },
              {
                name: "network",
                type: "query",
                required: false,
                description: "Preferred blockchain network (base, ethereum)",
                example: "base"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Token rate retrieved successfully",
              "data": {
                "pair": "USDT/TZS",
                "rate": {
                  "base": "2600.00",
                  "effective": "2595.00",
                  "spread": "0.19",
                  "spreadPercentage": "0.19%"
                },
                "amount": {
                  "input": "100.00",
                  "output": "259500.00",
                  "fees": {
                    "networkFee": "0.50",
                    "serviceFee": "2.50",
                    "totalFees": "3.00"
                  },
                  "netAmount": "256500.00"
                },
                "market": {
                  "source": "aggregated",
                  "confidence": 98.5,
                  "liquidity": "high",
                  "volatility": "low",
                  "lastUpdate": "2024-01-15T10:00:00Z"
                },
                "network": {
                  "preferred": "base",
                  "chainId": 8453,
                  "gasPrice": "0.000000015",
                  "estimatedGas": "21000",
                  "networkCost": "0.000315"
                },
                "validity": {
                  "validUntil": "2024-01-15T10:05:00Z",
                  "refreshInterval": 30,
                  "rateId": "rate_550e8400e29b41d4a716446655440000"
                },
                "historical": {
                  "change24h": "+0.15%",
                  "high24h": "2610.00",
                  "low24h": "2585.00",
                  "volume24h": "1250000.00"
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
              The token rate endpoint provides real-time exchange rates for converting stablecoins to fiat currencies. 
              Rates are calculated using aggregated market data, liquidity pool conditions, and network costs to 
              provide accurate pricing for immediate transactions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Real-time Pricing
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Aggregated market data from multiple sources</li>
                  <li>• Liquidity-adjusted pricing</li>
                  <li>• Network cost integration</li>
                  <li>• Volume-based rate optimization</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Market Intelligence
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Confidence scoring for rate accuracy</li>
                  <li>• Liquidity and volatility indicators</li>
                  <li>• 24-hour historical data</li>
                  <li>• Rate validity and refresh intervals</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Rate Accuracy:</strong> Rates are updated every 30 seconds and include real-time 
                liquidity conditions. For high-value transactions, always get fresh rates immediately 
                before order creation to ensure optimal pricing.
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
                      Source token symbol (USDT, USDC)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">to</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Destination currency code (TZS, KES, UGX)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">amount</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Token amount for volume-based pricing
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">network</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Preferred blockchain network (base, ethereum)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">include_history</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include 24h historical data (default: true)
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
              The response provides comprehensive rate information including base rates, effective rates 
              after fees, market conditions, and validity periods for accurate transaction planning.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Rate Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>base</code> - Market rate without fees or adjustments</li>
                  <li><code>effective</code> - Final rate including spreads and adjustments</li>
                  <li><code>spread</code> - Difference between base and effective rates</li>
                  <li><code>spreadPercentage</code> - Spread as percentage of base rate</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Amount Calculation</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>input</code> - Source token amount</li>
                  <li><code>output</code> - Gross fiat amount before fees</li>
                  <li><code>fees</code> - Breakdown of network and service fees</li>
                  <li><code>netAmount</code> - Final amount recipient will receive</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Market & Validity Data</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>confidence</code> - Rate accuracy confidence score (0-100)</li>
                  <li><code>liquidity</code> - Market liquidity level (high, medium, low)</li>
                  <li><code>validUntil</code> - Rate expiration timestamp</li>
                  <li><code>rateId</code> - Unique identifier for rate tracking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rate Calculation */}
          <section id="rate-calculation">
            <h2 className="text-2xl font-semibold mb-4">Rate Calculation Methodology</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-3 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Base Rate Sources
                </h4>
                <ul className="text-sm text-blue-300 space-y-2">
                  <li>• <strong>Market Data:</strong> Aggregated from major exchanges</li>
                  <li>• <strong>Liquidity Pools:</strong> DEX and AMM pricing</li>
                  <li>• <strong>Forex Rates:</strong> Traditional FX market data</li>
                  <li>• <strong>Regional Data:</strong> Local market conditions</li>
                </ul>
              </div>

              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-3 flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  Rate Adjustments
                </h4>
                <ul className="text-sm text-green-300 space-y-2">
                  <li>• <strong>Liquidity Impact:</strong> Pool utilization effects</li>
                  <li>• <strong>Volume Discounts:</strong> Better rates for larger amounts</li>
                  <li>• <strong>Network Costs:</strong> Gas fees and transaction costs</li>
                  <li>• <strong>Market Volatility:</strong> Risk-adjusted pricing</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg mb-6">
              <h4 className="font-medium text-orange-400 mb-2">Rate Calculation Formula</h4>
              <div className="font-mono text-sm text-orange-300">
                <p>Effective Rate = Base Rate × (1 - Spread) × Liquidity Factor × Volume Discount</p>
                <p className="mt-2">Net Amount = (Input Amount × Effective Rate) - Total Fees</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium text-sm mb-2">Confidence Levels</h4>
                <ul className="text-xs text-foreground-secondary space-y-1">
                  <li>• <strong>95-100:</strong> Excellent data quality</li>
                  <li>• <strong>85-94:</strong> Good market conditions</li>
                  <li>• <strong>70-84:</strong> Moderate volatility</li>
                  <li>• <strong>&lt;70:</strong> High uncertainty</li>
                </ul>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium text-sm mb-2">Liquidity Levels</h4>
                <ul className="text-xs text-foreground-secondary space-y-1">
                  <li>• <strong>High:</strong> Optimal rates, fast execution</li>
                  <li>• <strong>Medium:</strong> Good rates, normal processing</li>
                  <li>• <strong>Low:</strong> Adjusted rates, potential delays</li>
                </ul>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium text-sm mb-2">Volatility Impact</h4>
                <ul className="text-xs text-foreground-secondary space-y-1">
                  <li>• <strong>Low:</strong> Stable rates, longer validity</li>
                  <li>• <strong>Medium:</strong> Standard adjustments</li>
                  <li>• <strong>High:</strong> Frequent updates, wider spreads</li>
                </ul>
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
                  GET /general/token-rate?from=USDT&to=TZS
                </div>
              </div>

              {/* Volume-based Pricing */}
              <div>
                <h3 className="text-lg font-medium mb-3">Volume-based Rate with Amount</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/token-rate?from=USDC&to=KES&amount=5000
                </div>
              </div>

              {/* Network-specific Rate */}
              <div>
                <h3 className="text-lg font-medium mb-3">Base Network Specific Rate</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/token-rate?from=USDT&to=UGX&network=base&include_history=true
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - USDT to TZS</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "pair": "USDT/TZS",
    "rate": {
      "base": "2600.00",
      "effective": "2595.00",
      "spread": "0.19",
      "spreadPercentage": "0.19%"
    },
    "amount": {
      "input": "100.00",
      "output": "259500.00",
      "fees": {
        "networkFee": "0.50",
        "serviceFee": "2.50",
        "totalFees": "3.00"
      },
      "netAmount": "256500.00"
    },
    "market": {
      "confidence": 98.5,
      "liquidity": "high",
      "volatility": "low"
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
            <h2 className="text-2xl font-semibold mb-4">Rate Usage Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended Usage</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Get fresh rates immediately before order creation</li>
                  <li>• Use amount parameter for accurate volume pricing</li>
                  <li>• Check confidence scores for rate reliability</li>
                  <li>• Monitor liquidity levels for optimal timing</li>
                  <li>• Store rate IDs for transaction tracking</li>
                  <li>• Respect rate validity periods</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Important Notes</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Rates expire after 5 minutes maximum</li>
                  <li>• High volatility reduces validity periods</li>
                  <li>• Large amounts may get different rates</li>
                  <li>• Network congestion affects final costs</li>
                  <li>• Always validate rate IDs when creating orders</li>
                  <li>• Rate updates every 30 seconds during market hours</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
