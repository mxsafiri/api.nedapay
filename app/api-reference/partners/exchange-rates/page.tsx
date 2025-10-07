import { ApiPlayground } from '@/components/api-playground'
import { TrendingUp, Clock, DollarSign, Globe } from 'lucide-react'

export default function ExchangeRatesPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Exchange Rates</h1>
          <p className="text-foreground-secondary">
            Real-time exchange rates for supported currency corridors with partner-specific pricing and fees.
          </p>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/partners/rates"
            title="Get Exchange Rates"
            description="Retrieve current exchange rates for currency pairs"
            parameters={[
              {
                name: "source_currency",
                type: "query",
                required: false,
                description: "Source currency code (default: all supported)",
                example: "USD"
              },
              {
                name: "destination_currency",
                type: "query",
                required: false,
                description: "Destination currency code (default: all supported)",
                example: "TZS"
              },
              {
                name: "amount",
                type: "query",
                required: false,
                description: "Amount for volume-based pricing",
                example: "1000"
              }
            ]}
            responseExample={{
              "status": "success",
              "data": {
                "rates": [
                  {
                    "source_currency": "USD",
                    "destination_currency": "TZS",
                    "rate": "2600.00",
                    "inverse_rate": "0.000385",
                    "partner_rate": "2595.00",
                    "fees": {
                      "partner_fee_rate": "0.50",
                      "processing_fee": "2.50",
                      "minimum_fee": "1.00"
                    },
                    "limits": {
                      "minimum_amount": "10.00",
                      "maximum_amount": "50000.00",
                      "daily_limit": "100000.00"
                    },
                    "providers": ["thunes_global", "wise_platform"],
                    "estimated_delivery": "2-3 minutes",
                    "last_updated": "2024-01-15T10:00:00Z",
                    "valid_until": "2024-01-15T10:05:00Z"
                  },
                  {
                    "source_currency": "USD",
                    "destination_currency": "KES",
                    "rate": "130.00",
                    "inverse_rate": "0.007692",
                    "partner_rate": "129.50",
                    "fees": {
                      "partner_fee_rate": "0.50",
                      "processing_fee": "2.50",
                      "minimum_fee": "1.00"
                    },
                    "limits": {
                      "minimum_amount": "10.00",
                      "maximum_amount": "25000.00",
                      "daily_limit": "75000.00"
                    },
                    "providers": ["thunes_global"],
                    "estimated_delivery": "2-3 minutes",
                    "last_updated": "2024-01-15T10:00:00Z",
                    "valid_until": "2024-01-15T10:05:00Z"
                  }
                ],
                "timestamp": "2024-01-15T10:00:00Z",
                "cache_duration": "5 minutes"
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
              The Exchange Rates endpoint provides real-time currency exchange rates for all supported 
              corridors. Rates include partner-specific pricing, volume discounts, and fee structures 
              to help partners provide accurate quotes to their customers.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Real-Time Pricing
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Live market rates updated every 30 seconds</li>
                  <li>• Partner-specific pricing tiers</li>
                  <li>• Volume-based rate improvements</li>
                  <li>• Transparent fee structure</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Supported Corridors
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• USD → TZS, KES, UGX, NGN</li>
                  <li>• EUR → TZS, KES, UGX</li>
                  <li>• GBP → TZS, KES, NGN</li>
                  <li>• More corridors added regularly</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Rate Validity:</strong> Exchange rates are valid for 5 minutes from the timestamp. 
                For high-volume transactions, consider requesting fresh rates before payment creation.
              </p>
            </div>
          </section>

          {/* Rate Structure */}
          <section id="rate-structure">
            <h2 className="text-2xl font-semibold mb-4">Rate Structure</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Market Rate vs Partner Rate</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>rate</code> - Current market rate (mid-market)</li>
                  <li><code>partner_rate</code> - Rate offered to your customers (includes NEDApay margin)</li>
                  <li><code>inverse_rate</code> - Reverse conversion rate for reference</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Fee Structure</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>partner_fee_rate</code> - Your revenue share as percentage</li>
                  <li><code>processing_fee</code> - Fixed processing fee per transaction</li>
                  <li><code>minimum_fee</code> - Minimum fee charged regardless of amount</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Transaction Limits</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>minimum_amount</code> - Minimum transaction amount</li>
                  <li><code>maximum_amount</code> - Maximum single transaction</li>
                  <li><code>daily_limit</code> - Maximum daily volume per partner</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Query Parameters */}
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
                    <td className="p-4 font-mono text-sm">source_currency</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by source currency (USD, EUR, GBP)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">destination_currency</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by destination currency (TZS, KES, UGX, NGN)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">amount</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Amount for volume-based pricing (improves rates for large amounts)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* All Rates */}
              <div>
                <h3 className="text-lg font-medium mb-3">Get All Available Rates</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /partners/rates
                </div>
              </div>

              {/* Specific Corridor */}
              <div>
                <h3 className="text-lg font-medium mb-3">USD to Tanzania Rates</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /partners/rates?source_currency=USD&destination_currency=TZS
                </div>
              </div>

              {/* Volume Pricing */}
              <div>
                <h3 className="text-lg font-medium mb-3">Volume-Based Pricing</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /partners/rates?source_currency=USD&destination_currency=KES&amount=10000
                </div>
                <p className="text-sm text-foreground-secondary mt-2">
                  Large amounts may receive better rates and reduced fees
                </p>
              </div>
            </div>
          </section>

          {/* Rate Calculation */}
          <section id="calculation">
            <h2 className="text-2xl font-semibold mb-4">Rate Calculation Example</h2>
            
            <div className="p-4 bg-background-secondary border border-border rounded-lg">
              <h4 className="font-medium mb-3">Customer wants to send $1,000 USD → TZS</h4>
              
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span>Amount to send:</span>
                  <span>$1,000.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span>Partner rate:</span>
                  <span>2,595.00 TZS/USD</span>
                </div>
                <div className="flex justify-between">
                  <span>Gross amount:</span>
                  <span>2,595,000.00 TZS</span>
                </div>
                <div className="flex justify-between text-red-400">
                  <span>Processing fee:</span>
                  <span>-$2.50 USD</span>
                </div>
                <div className="flex justify-between text-red-400">
                  <span>Partner fee (0.5%):</span>
                  <span>-$5.00 USD</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between font-bold">
                  <span>Total deducted:</span>
                  <span>$1,007.50 USD</span>
                </div>
                <div className="flex justify-between font-bold text-green-400">
                  <span>Recipient receives:</span>
                  <span>2,595,000.00 TZS</span>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Cache rates for up to 5 minutes to reduce API calls</li>
                  <li>• Request fresh rates for transactions over $5,000</li>
                  <li>• Use amount parameter for accurate volume pricing</li>
                  <li>• Display both gross amount and fees to customers</li>
                  <li>• Monitor rate validity timestamps</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Avoid</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Using expired rates (older than 5 minutes)</li>
                  <li>• Making rate requests more than once per minute</li>
                  <li>• Hiding fees from customers</li>
                  <li>• Assuming rates are guaranteed without payment creation</li>
                  <li>• Not handling rate unavailability gracefully</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
