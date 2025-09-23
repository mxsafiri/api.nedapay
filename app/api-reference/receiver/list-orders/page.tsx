import { Copy, Filter, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react'

export default function ListOnRampOrdersPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">List On-ramp Orders</h1>
          <p className="text-foreground-secondary">
            Retrieve a paginated list of all on-ramp orders for your account with filtering and sorting options.
          </p>
        </div>

        {/* API Details */}
        <div className="mb-8 p-6 border border-border rounded-lg bg-background-secondary">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Endpoint</h3>
              <div className="flex items-center space-x-2 p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">GET</span>
                <span className="text-blue-400">/receiver/orders</span>
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
                    Number of orders to return (1-100). Default: 20
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">offset</td>
                  <td className="p-4 text-sm">integer</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Number of orders to skip for pagination. Default: 0
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">status</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Filter by order status: pending_payment, payment_received, completed, expired, failed
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">currency</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Filter by fiat currency: TZS, KES, UGX, etc.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">token</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Filter by token: USDT, USDC, TZSC, etc.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">network</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Filter by blockchain network: base, polygon, ethereum
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">from_date</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Filter orders created after this date (ISO 8601 format)
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-sm">to_date</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Filter orders created before this date (ISO 8601 format)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-sm">sort</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                  </td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Sort order: created_at_desc (default), created_at_asc, amount_desc, amount_asc
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
            <h3 className="text-lg font-medium mb-4">Success Response (200 OK)</h3>
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-secondary">Response Body</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <pre className="text-green-400">{`{
  "status": "success",
  "data": {
    "orders": [
      {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "amount": "260000.00",
        "currency": "TZS",
        "token": "USDT",
        "network": "base",
        "rate": "2600.00",
        "expectedTokens": "100.00",
        "actualTokens": "100.00",
        "receiveAddress": "0x1234567890123456789012345678901234567890",
        "status": "completed",
        "reference": "onramp-123",
        "createdAt": "2024-01-15T10:00:00Z",
        "updatedAt": "2024-01-15T10:17:00Z",
        "completedAt": "2024-01-15T10:17:00Z"
      },
      {
        "id": "660f9511-f3ac-52e5-b827-557766551111",
        "amount": "130000.00",
        "currency": "KES",
        "token": "USDC",
        "network": "base",
        "rate": "130.00",
        "expectedTokens": "1000.00",
        "actualTokens": null,
        "receiveAddress": "0x9876543210987654321098765432109876543210",
        "status": "pending_payment",
        "reference": "onramp-456",
        "createdAt": "2024-01-15T11:00:00Z",
        "updatedAt": "2024-01-15T11:00:00Z",
        "completedAt": null
      }
    ],
    "pagination": {
      "total": 156,
      "limit": 20,
      "offset": 0,
      "hasMore": true
    },
    "filters": {
      "status": null,
      "currency": null,
      "token": null,
      "network": null,
      "from_date": null,
      "to_date": null
    }
  }
}`}</pre>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Response Fields</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="border-b border-border bg-background-secondary">
                    <th className="text-left p-4 font-medium">Field</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">orders</td>
                    <td className="p-4 text-sm">array</td>
                    <td className="p-4 text-sm text-foreground-secondary">Array of order objects</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">pagination.total</td>
                    <td className="p-4 text-sm">integer</td>
                    <td className="p-4 text-sm text-foreground-secondary">Total number of orders matching filters</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">pagination.limit</td>
                    <td className="p-4 text-sm">integer</td>
                    <td className="p-4 text-sm text-foreground-secondary">Number of orders returned in this response</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">pagination.offset</td>
                    <td className="p-4 text-sm">integer</td>
                    <td className="p-4 text-sm text-foreground-secondary">Number of orders skipped</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">pagination.hasMore</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm text-foreground-secondary">Whether more orders are available</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">filters</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm text-foreground-secondary">Applied filters for this request</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Filtering & Sorting */}
        <section id="filtering-sorting" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Filtering & Sorting</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-medium">Status Filters</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-code-background border border-code-border rounded">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-sm">pending_payment</span>
                  </div>
                  <span className="text-xs text-foreground-secondary">Awaiting payment</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-code-background border border-code-border rounded">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">payment_received</span>
                  </div>
                  <span className="text-xs text-foreground-secondary">Processing tokens</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-code-background border border-code-border rounded">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-sm">completed</span>
                  </div>
                  <span className="text-xs text-foreground-secondary">Tokens delivered</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-code-background border border-code-border rounded">
                  <div className="flex items-center">
                    <XCircle className="h-4 w-4 text-red-400 mr-2" />
                    <span className="text-sm">expired/failed</span>
                  </div>
                  <span className="text-xs text-foreground-secondary">Order unsuccessful</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Sort Options</h3>
              <div className="space-y-3">
                <div className="p-3 bg-code-background border border-code-border rounded">
                  <div className="font-mono text-sm text-blue-400">created_at_desc</div>
                  <div className="text-xs text-foreground-secondary mt-1">Newest orders first (default)</div>
                </div>
                <div className="p-3 bg-code-background border border-code-border rounded">
                  <div className="font-mono text-sm text-blue-400">created_at_asc</div>
                  <div className="text-xs text-foreground-secondary mt-1">Oldest orders first</div>
                </div>
                <div className="p-3 bg-code-background border border-code-border rounded">
                  <div className="font-mono text-sm text-blue-400">amount_desc</div>
                  <div className="text-xs text-foreground-secondary mt-1">Highest amounts first</div>
                </div>
                <div className="p-3 bg-code-background border border-code-border rounded">
                  <div className="font-mono text-sm text-blue-400">amount_asc</div>
                  <div className="text-xs text-foreground-secondary mt-1">Lowest amounts first</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Get All Orders (Default)</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground-secondary">Request</span>
                  <button className="text-foreground-secondary hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-blue-400">{`curl -X GET https://api.nedapay.io/v1/receiver/orders \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json"`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Filter by Status and Currency</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`curl -X GET "https://api.nedapay.io/v1/receiver/orders?status=completed&currency=TZS&limit=50" \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json"`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Date Range Filter</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`curl -X GET "https://api.nedapay.io/v1/receiver/orders?from_date=2024-01-01T00:00:00Z&to_date=2024-01-31T23:59:59Z" \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json"`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">JavaScript Example</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`const getOrders = async (filters = {}) => {
  const params = new URLSearchParams();
  
  // Add filters
  if (filters.status) params.append('status', filters.status);
  if (filters.currency) params.append('currency', filters.currency);
  if (filters.limit) params.append('limit', filters.limit.toString());
  if (filters.offset) params.append('offset', filters.offset.toString());
  
  const response = await fetch(\`https://api.nedapay.io/v1/receiver/orders?\${params}\`, {
    headers: {
      'Authorization': 'Bearer nedapay_live_1234567890abcdef',
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  
  if (data.status === 'success') {
    console.log(\`Found \${data.data.pagination.total} orders\`);
    return data.data.orders;
  }
  
  throw new Error('Failed to fetch orders');
};

// Usage examples
const allOrders = await getOrders();
const completedOrders = await getOrders({ status: 'completed', limit: 100 });
const recentOrders = await getOrders({ limit: 10, sort: 'created_at_desc' });`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section id="pagination" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pagination</h2>
          
          <div className="p-6 border border-blue-500/20 rounded-lg bg-blue-500/5">
            <h3 className="text-lg font-medium mb-4 text-blue-400">Pagination Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Implementation</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Use <code className="bg-code-background px-1 rounded">limit</code> and <code className="bg-code-background px-1 rounded">offset</code> for pagination</li>
                  <li>• Maximum limit is 100 orders per request</li>
                  <li>• Check <code className="bg-code-background px-1 rounded">hasMore</code> to determine if more pages exist</li>
                  <li>• Use <code className="bg-code-background px-1 rounded">total</code> for displaying page counts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Performance Tips</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Start with smaller page sizes (20-50 orders)</li>
                  <li>• Use filters to reduce total result set</li>
                  <li>• Cache results when appropriate</li>
                  <li>• Implement infinite scroll for better UX</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-code-background border border-code-border rounded">
              <h4 className="font-medium mb-2">Pagination Example</h4>
              <pre className="text-sm text-green-400">{`// Get first page
const page1 = await getOrders({ limit: 20, offset: 0 });

// Get second page  
const page2 = await getOrders({ limit: 20, offset: 20 });

// Calculate total pages
const totalPages = Math.ceil(page1.pagination.total / 20);`}</pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
