import { Copy, TrendingUp, Clock, AlertCircle } from 'lucide-react'

export default function RatesPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Exchange Rates API</h1>
          <p className="text-foreground-secondary">
            Get real-time exchange rates for fiat currencies and stablecoins across the NEDApay network.
          </p>
        </div>

        {/* API Details */}
        <div className="mb-8 p-6 border border-border rounded-lg bg-background-secondary">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Endpoint</h3>
              <div className="flex items-center space-x-2 p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">GET</span>
                <span className="text-blue-400">/rates</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Authentication</h3>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <span className="text-foreground-secondary">Bearer </span>
                <span className="text-yellow-400">nedapay_live_***</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#query-parameters" className="text-blue-400 hover:underline">Query Parameters</a></li>
            <li><a href="#response-format" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#rate-types" className="text-blue-400 hover:underline">Rate Types</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
            <li><a href="#best-practices" className="text-blue-400 hover:underline">Best Practices</a></li>
          </ul>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-foreground-secondary mb-6">
            The rates endpoint provides real-time exchange rates for all supported currency pairs in the NEDApay network. 
            Rates are aggregated from multiple liquidity providers and updated continuously to ensure competitive pricing.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                <span className="font-medium text-green-400">Real-time</span>
              </div>
              <p className="text-sm text-green-300">
                Rates updated every 30 seconds from live market data
              </p>
            </div>
            
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-blue-400 mr-2" />
                <span className="font-medium text-blue-400">Rate Lock</span>
              </div>
              <p className="text-sm text-blue-300">
                Lock rates for up to 30 minutes when creating orders
              </p>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-5 w-5 text-orange-400 mr-2" />
                <span className="font-medium text-orange-400">Spread Included</span>
              </div>
              <p className="text-sm text-orange-300">
                All fees and spreads included in quoted rates
              </p>
            </div>
          </div>
        </section>

        {/* Query Parameters */}
        <section id="query-parameters" className="mb-12">
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
                  <td className="p-4 font-mono text-sm">from</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Source currency/token (e.g., USDT, TZS). If omitted, returns all available rates.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">to</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Target currency/token (e.g., TZS, USDC). If omitted with from, returns all rates for source currency.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">amount</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Amount to convert. Affects rate due to liquidity and slippage considerations.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">network</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Blockchain network for token rates (base, polygon, ethereum).
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">type</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Rate type: &quot;buy&quot; (fiat→token), &quot;sell&quot; (token→fiat), or &quot;mid&quot; (midpoint). Default: &quot;mid&quot;
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-sm">lock</td>
                  <td className="p-4 text-sm">boolean</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    If true, locks the rate for 30 minutes and returns a rate ID for order creation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Response Format */}
        <section id="response-format" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Single Rate Query</h3>
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-secondary">GET /rates?from=USDT&to=TZS&amount=100</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <pre className="text-green-400">{`{
  "status": "success",
  "data": {
    "from": "USDT",
    "to": "TZS",
    "rate": "2600.00",
    "inverseRate": "0.000384615",
    "amount": "100",
    "expectedOutput": "260000.00",
    "fees": {
      "networkFee": "2.50",
      "providerFee": "1300.00",
      "totalFees": "1302.50"
    },
    "effectiveRate": "2587.25",
    "spread": "0.5%",
    "liquidity": {
      "available": "50000.00",
      "providers": 3
    },
    "validUntil": "2024-01-15T10:30:00Z",
    "rateId": null,
    "lastUpdated": "2024-01-15T10:00:00Z"
  }
}`}</pre>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Rate Lock Response</h3>
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-secondary">GET /rates?from=TZS&to=USDT&amount=260000&lock=true</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <pre className="text-green-400">{`{
  "status": "success",
  "data": {
    "from": "TZS",
    "to": "USDT",
    "rate": "0.000384615",
    "inverseRate": "2600.00",
    "amount": "260000.00",
    "expectedOutput": "100.00",
    "fees": {
      "networkFee": "2.50",
      "providerFee": "0.50",
      "totalFees": "3.00"
    },
    "effectiveRate": "0.000373077",
    "spread": "0.5%",
    "liquidity": {
      "available": "10000.00",
      "providers": 2
    },
    "validUntil": "2024-01-15T10:30:00Z",
    "rateId": "rate_lock_abc123def456",
    "lockedUntil": "2024-01-15T10:30:00Z",
    "lastUpdated": "2024-01-15T10:00:00Z"
  }
}`}</pre>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Multiple Rates Response</h3>
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-secondary">GET /rates?from=USDT</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <pre className="text-green-400">{`{
  "status": "success",
  "data": {
    "base": "USDT",
    "rates": {
      "TZS": {
        "rate": "2600.00",
        "spread": "0.5%",
        "liquidity": "50000.00",
        "providers": 3
      },
      "KES": {
        "rate": "130.00",
        "spread": "0.8%",
        "liquidity": "25000.00",
        "providers": 2
      },
      "UGX": {
        "rate": "3700.00",
        "spread": "1.0%",
        "liquidity": "15000.00",
        "providers": 2
      }
    },
    "lastUpdated": "2024-01-15T10:00:00Z"
  }
}`}</pre>
            </div>
          </div>
        </section>

        {/* Rate Types */}
        <section id="rate-types" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Rate Types</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium text-blue-400 mb-3">Buy Rates</h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Rates for purchasing tokens with fiat currency (on-ramp operations).
              </p>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
                <div className="text-blue-400">type=buy</div>
                <div className="text-foreground-secondary mt-1">TZS → USDT</div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium text-green-400 mb-3">Sell Rates</h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Rates for selling tokens for fiat currency (off-ramp operations).
              </p>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
                <div className="text-green-400">type=sell</div>
                <div className="text-foreground-secondary mt-1">USDT → TZS</div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium text-orange-400 mb-3">Mid Rates</h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Midpoint rates for reference and general market information.
              </p>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
                <div className="text-orange-400">type=mid</div>
                <div className="text-foreground-secondary mt-1">Market midpoint</div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Get Current USDT to TZS Rate</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`curl -X GET "https://api.nedapay.io/v1/rates?from=USDT&to=TZS&amount=100" \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json"`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Lock Rate for Order Creation</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`curl -X GET "https://api.nedapay.io/v1/rates?from=TZS&to=USDT&amount=260000&lock=true&type=buy" \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json"`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Get All Available Rates</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`curl -X GET "https://api.nedapay.io/v1/rates" \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json"`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">JavaScript Example</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`// Get rate and lock it for order creation
const getRateAndLock = async (from, to, amount) => {
  const response = await fetch(\`https://api.nedapay.io/v1/rates?from=\${from}&to=\${to}&amount=\${amount}&lock=true\`, {
    headers: {
      'Authorization': 'Bearer nedapay_live_1234567890abcdef',
      'Content-Type': 'application/json'
    }
  });
  
  const rateData = await response.json();
  
  if (rateData.status === 'success') {
    console.log('Rate locked:', rateData.data.rate);
    console.log('Rate ID:', rateData.data.rateId);
    console.log('Valid until:', rateData.data.lockedUntil);
    
    // Use rateId when creating order
    return rateData.data.rateId;
  }
  
  throw new Error('Failed to lock rate');
};

// Usage
const rateId = await getRateAndLock('USDT', 'TZS', '100');`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-green-400">✅ Recommended</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Always get fresh rates before creating orders</li>
                <li>• Use rate locking for better user experience</li>
                <li>• Include amount parameter for accurate pricing</li>
                <li>• Cache rates for up to 30 seconds maximum</li>
                <li>• Handle rate expiration gracefully</li>
                <li>• Show users the effective rate including fees</li>
                <li>• Implement retry logic for rate API calls</li>
                <li>• Monitor rate changes for large amounts</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-red-400">❌ Avoid</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Don&apos;t use stale rates (older than 1 minute)</li>
                <li>• Don&apos;t ignore rate expiration times</li>
                <li>• Don&apos;t create orders without checking liquidity</li>
                <li>• Don&apos;t cache locked rates beyond expiry</li>
                <li>• Don&apos;t assume rates are always available</li>
                <li>• Don&apos;t ignore network-specific rates</li>
                <li>• Don&apos;t poll rates more than once per 30 seconds</li>
                <li>• Don&apos;t show rates without including fees</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 border border-blue-500/20 rounded-lg bg-blue-500/5">
            <h4 className="font-medium text-blue-400 mb-3">Rate Locking Workflow</h4>
            <ol className="space-y-2 text-sm text-foreground-secondary">
              <li>1. <strong>Get Rate</strong>: Call rates API with lock=true parameter</li>
              <li>2. <strong>Store Rate ID</strong>: Save the returned rateId for order creation</li>
              <li>3. <strong>Create Order</strong>: Use rateId in order creation within 30 minutes</li>
              <li>4. <strong>Handle Expiry</strong>: If rate expires, get a new rate and retry</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  )
}
