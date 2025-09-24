import { Copy, Filter, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react'

export default function ListPaymentOrdersPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">List Payment Orders</h1>
          <p className="text-foreground-secondary">
            Retrieve a paginated list of all payment orders for your account with filtering and sorting options.
          </p>
        </div>

        {/* API Details */}
        <div className="mb-8 p-6 border border-border rounded-lg bg-background-secondary">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Endpoint</h3>
              <div className="flex items-center space-x-2 p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">GET</span>
                <span className="text-blue-400">/sender/orders</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Authentication</h3>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <span className="text-foreground-secondary">API-Key: </span>
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
            <li><a href="#filtering-sorting" className="text-blue-400 hover:underline">Filtering & Sorting</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
            <li><a href="#pagination" className="text-blue-400 hover:underline">Pagination</a></li>
          </ul>
        </div>

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
                  <td className="p-4 font-mono text-sm">limit</td>
                  <td className="p-4 text-sm">integer</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Number of orders to return (1-100, default: 20)
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">offset</td>
                  <td className="p-4 text-sm">integer</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Number of orders to skip (default: 0)
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">status</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Filter by status: pending, allocated, completed, failed, expired
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">currency</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Filter by destination currency (TZS, KES, UGX)
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">token</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Filter by source token (USDT, USDC)
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">created_after</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    ISO 8601 timestamp to filter orders created after this date
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-sm">created_before</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    ISO 8601 timestamp to filter orders created before this date
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Response Format */}
        <section id="response-format" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
          <p className="text-foreground-secondary mb-4">
            Returns a paginated list of payment orders with metadata for navigation.
          </p>
          
          <h3 className="text-lg font-medium mb-3">Success Response (200 OK)</h3>
          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-6">
{`{
  "status": "success",
  "message": "Orders retrieved successfully",
  "data": {
    "orders": [
      {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "amount": "100",
        "token": "USDT",
        "network": "base",
        "recipient": {
          "institution": "VODACOM",
          "accountIdentifier": "255744123456",
          "accountName": "John Doe",
          "currency": "TZS"
        },
        "status": "completed",
        "senderFee": "0.5",
        "transactionFee": "2.5",
        "reference": "payment-123",
        "createdAt": "2024-01-15T10:00:00Z",
        "updatedAt": "2024-01-15T10:05:00Z"
      }
    ],
    "pagination": {
      "total": 150,
      "limit": 20,
      "offset": 0,
      "hasMore": true
    }
  }
}`}
          </div>

          <h3 className="text-lg font-medium mb-3">Response Fields</h3>
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium mb-2">Order Array</h4>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li><code>orders</code> - Array of payment order objects</li>
                <li><code>id</code> - Unique order identifier</li>
                <li><code>status</code> - Current order status (pending, allocated, completed, failed, expired)</li>
                <li><code>recipient</code> - Destination details for fiat delivery</li>
              </ul>
            </div>
            
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium mb-2">Pagination Metadata</h4>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li><code>total</code> - Total number of orders matching filters</li>
                <li><code>limit</code> - Number of orders returned in this response</li>
                <li><code>offset</code> - Number of orders skipped</li>
                <li><code>hasMore</code> - Whether there are more orders to fetch</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Order Status Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <Clock className="h-5 w-5 text-yellow-400" />
                <div>
                  <span className="font-medium">pending</span>
                  <p className="text-xs text-foreground-secondary">Order created, awaiting liquidity allocation</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-400" />
                <div>
                  <span className="font-medium">allocated</span>
                  <p className="text-xs text-foreground-secondary">Liquidity reserved, processing fiat delivery</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <div>
                  <span className="font-medium">completed</span>
                  <p className="text-xs text-foreground-secondary">Fiat delivered successfully</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <XCircle className="h-5 w-5 text-red-400" />
                <div>
                  <span className="font-medium">failed</span>
                  <p className="text-xs text-foreground-secondary">Order failed, funds returned</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <Clock className="h-5 w-5 text-gray-400" />
                <div>
                  <span className="font-medium">expired</span>
                  <p className="text-xs text-foreground-secondary">Order expired without settlement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
          
          <div className="space-y-6">
            {/* Basic List */}
            <div>
              <h3 className="text-lg font-medium mb-3">Get Recent Orders</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                GET /sender/orders?limit=10
              </div>
            </div>

            {/* Filter by Status */}
            <div>
              <h3 className="text-lg font-medium mb-3">Filter by Status</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                GET /sender/orders?status=completed&limit=20
              </div>
            </div>

            {/* Filter by Currency and Date */}
            <div>
              <h3 className="text-lg font-medium mb-3">Filter by Currency and Date Range</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                GET /sender/orders?currency=TZS&created_after=2024-01-01T00:00:00Z&limit=50
              </div>
            </div>

            {/* Pagination */}
            <div>
              <h3 className="text-lg font-medium mb-3">Pagination Example</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                GET /sender/orders?limit=20&offset=40
              </div>
            </div>
          </div>
        </section>

        {/* Filtering & Sorting */}
        <section id="filtering-sorting" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Filtering & Sorting</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-blue-400">Available Filters</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• <strong>Status:</strong> pending, allocated, completed, failed, expired</li>
                <li>• <strong>Currency:</strong> TZS, KES, UGX (destination fiat)</li>
                <li>• <strong>Token:</strong> USDT, USDC (source stablecoin)</li>
                <li>• <strong>Date Range:</strong> created_after, created_before</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-green-400">Default Sorting</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Orders are sorted by <strong>creation date</strong> (newest first)</li>
                <li>• Consistent ordering for pagination</li>
                <li>• Use <code>offset</code> for reliable pagination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section id="pagination">
          <h2 className="text-2xl font-semibold mb-4">Pagination Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">✅ Recommended Approach</h4>
              <ul className="text-sm text-blue-300 space-y-1">
                <li>• Use <code>limit</code> and <code>offset</code> for consistent pagination</li>
                <li>• Check <code>hasMore</code> to determine if more pages exist</li>
                <li>• Keep <code>limit</code> between 10-50 for optimal performance</li>
                <li>• Use filters to reduce dataset size when possible</li>
              </ul>
            </div>
            
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <h4 className="font-medium text-yellow-400 mb-2">⚠️ Important Notes</h4>
              <ul className="text-sm text-yellow-300 space-y-1">
                <li>• Maximum <code>limit</code> is 100 orders per request</li>
                <li>• Large offsets (&gt;10,000) may have slower response times</li>
                <li>• Orders are cached for 30 seconds for performance</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
