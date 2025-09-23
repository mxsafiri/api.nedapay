import { ApiPlayground } from '@/components/api-playground'

export default function CreateOnRampOrderPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create On-ramp Order</h1>
          <p className="text-foreground-secondary">
            Create a new on-ramp order to receive stablecoins in exchange for fiat currency payments through local payment rails.
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
            endpoint="/receiver/orders"
            title="Create On-ramp Order"
            description="Create a new on-ramp order for fiat to stablecoin conversion"
            requestBody={{
              "amount": "260000.00",
              "currency": "TZS",
              "token": "USDT",
              "network": "base",
              "rate": "2600.00",
              "sender": {
                "institution": "VODACOM",
                "accountIdentifier": "255744123456",
                "accountName": "John Doe",
                "memo": "Payment for stablecoin purchase"
              },
              "receiveAddress": "0x1234567890123456789012345678901234567890",
              "reference": "onramp-123",
              "expiresIn": 1800
            }}
            responseExample={{
              "status": "success",
              "message": "On-ramp order created successfully",
              "data": {
                "id": "550e8400-e29b-41d4-a716-446655440000",
                "amount": "260000.00",
                "currency": "TZS",
                "token": "USDT",
                "network": "base",
                "rate": "2600.00",
                "expectedTokens": "100.00",
                "paymentInstructions": {
                  "institution": "VODACOM",
                  "accountNumber": "255700123456",
                  "accountName": "NEDApay Escrow",
                  "reference": "NEDA-550e8400",
                  "amount": "260000.00",
                  "currency": "TZS"
                },
                "receiveAddress": "0x1234567890123456789012345678901234567890",
                "validUntil": "2024-01-15T10:30:00Z",
                "receiverFee": "1300.00",
                "networkFee": "2.50",
                "reference": "onramp-123",
                "status": "pending_payment",
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
              The create on-ramp order endpoint allows users to initiate a fiat-to-stablecoin conversion. 
              Users send fiat currency through local payment rails (mobile money, bank transfer) and receive 
              stablecoins at their specified address. The order provides payment instructions and tracks the conversion process.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2">✅ Supported Features</h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Multi-currency fiat support (TZS, KES, UGX)</li>
                  <li>• Multi-chain token delivery</li>
                  <li>• Mobile money integration</li>
                  <li>• Bank transfer support</li>
                  <li>• Real-time rate locking</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2">⚡ Processing Flow</h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Order creation: Instant</li>
                  <li>• Payment window: 30 minutes</li>
                  <li>• Token delivery: 1-3 minutes after payment</li>
                  <li>• Confirmation: Real-time webhooks</li>
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
                      Amount of fiat currency to send (e.g., &quot;260000.00&quot; for 260,000 TZS)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">currency</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Fiat currency code (TZS, KES, UGX, RWF)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">token</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Token to receive (USDT, USDC, TZS, KES, UGX)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">network</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Blockchain network (base, polygon, ethereum)
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
                    <td className="p-4 font-mono text-sm">receiveAddress</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Blockchain address to receive tokens
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">sender</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Sender information for payment verification
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">reference</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Your internal reference ID for tracking
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">expiresIn</td>
                    <td className="p-4 text-sm">number</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Order expiration time in seconds (default: 1800)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sender Object Details */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Sender Object</h3>
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
                      <td className="p-4 text-sm text-foreground-secondary">Payment institution code</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-mono text-sm">accountIdentifier</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">
                        <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                      </td>
                      <td className="p-4 text-sm text-foreground-secondary">Phone number or account number</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-mono text-sm">accountName</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">
                        <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                      </td>
                      <td className="p-4 text-sm text-foreground-secondary">Account holder name</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">memo</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">
                        <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                      </td>
                      <td className="p-4 text-sm text-foreground-secondary">Payment memo or description</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Response Format */}
          <section id="response">
            <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Success Response (201 Created)</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`{
  "status": "success",
  "message": "On-ramp order created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "amount": "260000.00",
    "currency": "TZS",
    "token": "USDT",
    "network": "base",
    "rate": "2600.00",
    "expectedTokens": "100.00",
    "paymentInstructions": {
      "institution": "VODACOM",
      "accountNumber": "255700123456",
      "accountName": "NEDApay Escrow",
      "reference": "NEDA-550e8400",
      "amount": "260000.00",
      "currency": "TZS"
    },
    "receiveAddress": "0x1234567890123456789012345678901234567890",
    "validUntil": "2024-01-15T10:30:00Z",
    "receiverFee": "1300.00",
    "networkFee": "2.50",
    "reference": "onramp-123",
    "status": "pending_payment",
    "createdAt": "2024-01-15T10:00:00Z"
  }
}`}</pre>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Payment Instructions</h3>
              <p className="text-foreground-secondary mb-4">
                The response includes payment instructions that users must follow to complete the on-ramp process:
              </p>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• <strong>institution</strong>: The payment provider to use</li>
                <li>• <strong>accountNumber</strong>: NEDApay escrow account to send payment to</li>
                <li>• <strong>accountName</strong>: Account holder name for verification</li>
                <li>• <strong>reference</strong>: Unique reference code for payment tracking</li>
                <li>• <strong>amount</strong>: Exact amount to send (including any fees)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Order Status Flow</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-border rounded-lg bg-background-secondary">
                  <div className="text-yellow-400 font-medium mb-2">pending_payment</div>
                  <div className="text-sm text-foreground-secondary">Waiting for fiat payment</div>
                </div>
                <div className="p-4 border border-border rounded-lg bg-background-secondary">
                  <div className="text-blue-400 font-medium mb-2">payment_received</div>
                  <div className="text-sm text-foreground-secondary">Payment confirmed, processing tokens</div>
                </div>
                <div className="p-4 border border-border rounded-lg bg-background-secondary">
                  <div className="text-green-400 font-medium mb-2">completed</div>
                  <div className="text-sm text-foreground-secondary">Tokens delivered successfully</div>
                </div>
                <div className="p-4 border border-border rounded-lg bg-background-secondary">
                  <div className="text-red-400 font-medium mb-2">expired/failed</div>
                  <div className="text-sm text-foreground-secondary">Order expired or failed</div>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Examples</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Mobile Money On-ramp (Tanzania)</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  <pre className="text-blue-400">{`curl -X POST https://api.nedapay.io/v1/receiver/orders \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": "260000.00",
    "currency": "TZS",
    "token": "USDT",
    "network": "base",
    "receiveAddress": "0x1234567890123456789012345678901234567890",
    "sender": {
      "institution": "VODACOM",
      "accountIdentifier": "255744123456",
      "accountName": "John Doe",
      "memo": "USDT purchase"
    },
    "reference": "onramp-001",
    "expiresIn": 1800
  }'`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Bank Transfer On-ramp (Kenya)</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  <pre className="text-blue-400">{`curl -X POST https://api.nedapay.io/v1/receiver/orders \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": "13000.00",
    "currency": "KES",
    "token": "USDC",
    "network": "base",
    "receiveAddress": "0x9876543210987654321098765432109876543210",
    "sender": {
      "institution": "EQUITY_BANK",
      "accountIdentifier": "1234567890",
      "accountName": "Jane Smith",
      "memo": "USDC purchase via bank transfer"
    },
    "reference": "onramp-002"
  }'`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Error Handling */}
          <section id="error-handling">
            <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Common Error Responses</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border border-red-500/20 rounded-lg bg-red-500/5">
                    <h4 className="font-medium text-red-400 mb-2">400 Bad Request - Invalid Parameters</h4>
                    <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                      <pre className="text-red-400">{`{
  "status": "error",
  "message": "Invalid request parameters",
  "errors": [
    {
      "field": "amount",
      "message": "Amount must be a positive number"
    },
    {
      "field": "receiveAddress",
      "message": "Invalid blockchain address format"
    }
  ]
}`}</pre>
                    </div>
                  </div>

                  <div className="p-4 border border-red-500/20 rounded-lg bg-red-500/5">
                    <h4 className="font-medium text-red-400 mb-2">422 Unprocessable Entity - Business Logic Error</h4>
                    <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                      <pre className="text-red-400">{`{
  "status": "error",
  "message": "Order cannot be processed",
  "code": "INSUFFICIENT_LIQUIDITY",
  "details": "No providers available for TZS to USDT conversion at this time"
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Best Practices</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-green-400">✅ Do</h3>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Always get fresh rates before creating orders</li>
                      <li>• Validate receive addresses before submission</li>
                      <li>• Set reasonable expiration times (15-30 minutes)</li>
                      <li>• Use meaningful reference IDs for tracking</li>
                      <li>• Set up webhooks for real-time status updates</li>
                      <li>• Handle errors gracefully with retry logic</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-red-400">❌ Don&apos;t</h3>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Don&apos;t reuse old exchange rates</li>
                      <li>• Don&apos;t create orders without rate validation</li>
                      <li>• Don&apos;t ignore order expiration times</li>
                      <li>• Don&apos;t hardcode payment institution codes</li>
                      <li>• Don&apos;t skip sender information validation</li>
                      <li>• Don&apos;t assume immediate token delivery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
