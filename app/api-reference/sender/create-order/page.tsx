import { ApiPlayground } from '@/components/api-playground'

export default function CreatePaymentOrderPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Payment Order</h1>
          <p className="text-foreground-secondary">
            Create a payment order to transfer stablecoins from NEDApay's liquidity pools to fiat currency in East African markets.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#request-body" className="text-blue-400 hover:underline">Request Body</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
            <li><a href="#error-handling" className="text-blue-400 hover:underline">Error Handling</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="POST"
            endpoint="/sender/orders"
            title="Create Payment Order"
            description="Create a payment order for stablecoin to fiat conversion via liquidity pools"
            requestBody={{
              "amount": "100",
              "token": "USDT",
              "network": "base",
              "rate": "260000.00",
              "recipient": {
                "institution": "VODACOM",
                "accountIdentifier": "255744123456",
                "accountName": "John Doe",
                "currency": "TZS",
                "memo": "Payment for services rendered"
              },
              "reference": "payment-123",
              "returnAddress": "0x1234567890123456789012345678901234567890"
            }}
            responseExample={{
              "status": "success",
              "message": "Payment order initiated successfully",
              "data": {
                "id": "550e8400-e29b-41d4-a716-446655440000",
                "amount": "100",
                "token": "USDT",
                "network": "base",
                "receiveAddress": "0x9876543210987654321098765432109876543210",
                "validUntil": "2024-01-15T10:30:00Z",
                "senderFee": "0.5",
                "transactionFee": "2.5",
                "reference": "payment-123",
                "status": "pending",
                "createdAt": "2024-01-15T10:00:00Z"
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
              The create payment order endpoint allows you to request stablecoin transfers from NEDApay's 
              liquidity pools on Base network to fiat currency in East African markets. Your customers 
              receive fiat through local PSPs/MNOs while you handle the stablecoin settlement.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2">✅ Supported Features</h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Base network liquidity pools (USDT/USDC)</li>
                  <li>• Real-time exchange rates</li>
                  <li>• Mobile money integration (M-Pesa, Mixx by Yas)</li>
                  <li>• Bank account transfers</li>
                  <li>• Automated settlement & rebalancing</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2">⚡ Processing Time</h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Order creation: Instant</li>
                  <li>• Liquidity allocation: &lt; 10 seconds</li>
                  <li>• Fiat delivery: 1-2 minutes</li>
                  <li>• Total time: ~2-3 minutes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Request Body */}
          <section id="request-body">
            <h2 className="text-2xl font-semibold mb-4">Request Body Parameters</h2>
            
            <div className="overflow-x-auto mb-6">
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
                    <td className="p-4 font-mono text-sm">amount</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Amount of tokens to send (e.g., &quot;100&quot; for 100 USDT)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">token</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Token symbol (USDT, USDC, TZS, KES, UGX)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">network</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Blockchain network (base is primary, ethereum/polygon supported)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">rate</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Expected exchange rate (get from /rates endpoint)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">recipient</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Recipient details (see recipient object below)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">reference</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Your internal reference for this payment
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">returnAddress</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Address to return funds if payment fails
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Recipient Object */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Recipient Object</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg">
                  <thead>
                    <tr className="border-b border-border bg-background-secondary">
                      <th className="text-left p-4 font-medium">Field</th>
                      <th className="text-left p-4 font-medium">Type</th>
                      <th className="text-left p-4 font-medium">Required</th>
                      <th className="text-left p-4 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-mono text-sm">institution</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">
                        <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                      </td>
                      <td className="p-4 text-sm text-foreground-secondary">
                        Bank or mobile money provider code (VODACOM, CRDB, etc.)
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-mono text-sm">accountIdentifier</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">
                        <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                      </td>
                      <td className="p-4 text-sm text-foreground-secondary">
                        Account number or mobile phone number
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-mono text-sm">accountName</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">
                        <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                      </td>
                      <td className="p-4 text-sm text-foreground-secondary">
                        Full name of the account holder
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-mono text-sm">currency</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">
                        <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                      </td>
                      <td className="p-4 text-sm text-foreground-secondary">
                        Destination currency code (TZS, KES, UGX)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">memo</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">
                        <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                      </td>
                      <td className="p-4 text-sm text-foreground-secondary">
                        Payment description or memo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Response Format */}
          <section id="response">
            <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
            <p className="text-foreground-secondary mb-4">
              Upon successful creation, the API returns a payment order object with liquidity pool allocation 
              details and settlement information for completing the stablecoin transfer.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Success Response (201 Created)</h3>
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-6">
{`{
  "status": "success",
  "message": "Payment order initiated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "amount": "100",
    "token": "USDT",
    "network": "base",
    "receiveAddress": "0x9876543210987654321098765432109876543210",
    "validUntil": "2024-01-15T10:30:00Z",
    "senderFee": "0.5",
    "transactionFee": "2.5",
    "reference": "payment-123",
    "status": "pending",
    "createdAt": "2024-01-15T10:00:00Z"
  }
}`}
            </div>

            <h3 className="text-lg font-medium mb-3">Response Fields</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Core Fields</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>id</code> - Unique order identifier (use this to track the order)</li>
                  <li><code>receiveAddress</code> - NEDApay pool address for stablecoin settlement</li>
                  <li><code>validUntil</code> - Order expiration time (typically 15 minutes)</li>
                  <li><code>status</code> - Current order status (pending, allocated, completed, failed)</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Fee Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>senderFee</code> - Fee charged to sender (in source token)</li>
                  <li><code>transactionFee</code> - Network transaction fee (in source token)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibent mb-4">Example Use Cases</h2>
            
            <div className="space-y-6">
              {/* Mobile Money Example */}
              <div>
                <h3 className="text-lg font-medium mb-3">Mobile Money Payment (M-Pesa)</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "amount": "50",
  "token": "USDT",
  "network": "base",
  "recipient": {
    "institution": "VODACOM",
    "accountIdentifier": "255744123456",
    "accountName": "Jane Doe",
    "currency": "TZS",
    "memo": "Freelance payment"
  },
  "reference": "freelance-001",
  "returnAddress": "0x742d35Cc6634C0532925a3b8D0C9964E5Bfe1234"
}`}
                </div>
              </div>

              {/* Bank Transfer Example */}
              <div>
                <h3 className="text-lg font-medium mb-3">Bank Transfer (Tanzania)</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "amount": "200",
  "token": "USDC",
  "network": "base",
  "recipient": {
    "institution": "CRDB",
    "accountIdentifier": "0123456789",
    "accountName": "John Smith",
    "currency": "TZS",
    "memo": "Invoice payment #INV-2024-001"
  },
  "reference": "invoice-payment-001",
  "returnAddress": "0x742d35Cc6634C0532925a3b8D0C9964E5Bfe5678"
}`}
                </div>
              </div>

              {/* Cross-border Example */}
              <div>
                <h3 className="text-lg font-medium mb-3">Cross-border Payment (Kenya)</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "amount": "75",
  "token": "USDT",
  "network": "base",
  "recipient": {
    "institution": "MPESA",
    "accountIdentifier": "254712345678",
    "accountName": "Mary Wanjiku",
    "currency": "KES",
    "memo": "Family support"
  },
  "reference": "family-support-001",
  "returnAddress": "0x742d35Cc6634C0532925a3b8D0C9964E5Bfe9999"
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Error Handling */}
          <section id="error-handling">
            <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg">
                <h4 className="font-medium text-red-400 mb-2">400 Bad Request</h4>
                <p className="text-sm text-red-300 mb-3">Invalid request parameters or missing required fields</p>
                <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
{`{
  "status": "error",
  "message": "Validation failed",
  "error": {
    "code": "VALIDATION_ERROR",
    "details": {
      "amount": "Amount must be a positive number",
      "recipient.accountIdentifier": "Invalid phone number format"
    }
  }
}`}
                </div>
              </div>

              <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg">
                <h4 className="font-medium text-red-400 mb-2">401 Unauthorized</h4>
                <p className="text-sm text-red-300 mb-3">Invalid or missing API key</p>
                <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
{`{
  "status": "error",
  "message": "Invalid API key",
  "error": {
    "code": "UNAUTHORIZED",
    "details": "Please check your API key and try again"
  }
}`}
                </div>
              </div>

              <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg">
                <h4 className="font-medium text-red-400 mb-2">422 Unprocessable Entity</h4>
                <p className="text-sm text-red-300 mb-3">Business logic validation failed</p>
                <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
{`{
  "status": "error",
  "message": "Insufficient liquidity",
  "error": {
    "code": "INSUFFICIENT_LIQUIDITY",
    "details": "Pool balance too low for requested amount. Available: 50 USDT"
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Do</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Always get fresh rates before creating orders</li>
                  <li>• Use meaningful reference IDs for tracking</li>
                  <li>• Validate recipient details before submission</li>
                  <li>• Set up webhooks for real-time status updates</li>
                  <li>• Handle errors gracefully with retry logic</li>
                  <li>• Store order IDs for future reference</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">❌ Don&apos;t</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Don&apos;t reuse old exchange rates</li>
                  <li>• Don&apos;t create orders without validating amounts</li>
                  <li>• Don&apos;t ignore order expiration times</li>
                  <li>• Don&apos;t send tokens before order confirmation</li>
                  <li>• Don&apos;t hardcode institution codes</li>
                  <li>• Don&apos;t skip error handling</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
