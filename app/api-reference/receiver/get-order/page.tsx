import { Copy, ExternalLink, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react'

export default function GetOnRampOrderPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get On-ramp Order</h1>
          <p className="text-foreground-secondary">
            Retrieve the current status and details of an existing on-ramp order by its unique identifier.
          </p>
        </div>

        {/* API Details */}
        <div className="mb-8 p-6 border border-border rounded-lg bg-background-secondary">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Endpoint</h3>
              <div className="flex items-center space-x-2 p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">GET</span>
                <span className="text-blue-400">/receiver/orders/{'{orderId}'}</span>
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
            <li><a href="#path-parameters" className="text-blue-400 hover:underline">Path Parameters</a></li>
            <li><a href="#response-format" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#order-statuses" className="text-blue-400 hover:underline">Order Statuses</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
            <li><a href="#error-handling" className="text-blue-400 hover:underline">Error Handling</a></li>
          </ul>
        </div>

        {/* Path Parameters */}
        <section id="path-parameters" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Path Parameters</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead>
                <tr className="border-b border-border bg-background-secondary">
                  <th className="text-left p-4 font-medium">Parameter</th>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-mono text-sm">orderId</td>
                  <td className="p-4 text-sm">string</td>
                  <td className="p-4 text-sm text-foreground-secondary">
                    Unique identifier of the on-ramp order (UUID format)
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
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "amount": "260000.00",
    "currency": "TZS",
    "token": "USDT",
    "network": "base",
    "rate": "2600.00",
    "expectedTokens": "100.00",
    "actualTokens": "100.00",
    "paymentInstructions": {
      "institution": "VODACOM",
      "accountNumber": "255700123456",
      "accountName": "NEDApay Escrow",
      "reference": "NEDA-550e8400",
      "amount": "260000.00",
      "currency": "TZS"
    },
    "receiveAddress": "0x1234567890123456789012345678901234567890",
    "sender": {
      "institution": "VODACOM",
      "accountIdentifier": "255744123456",
      "accountName": "John Doe",
      "memo": "USDT purchase"
    },
    "fees": {
      "receiverFee": "1300.00",
      "networkFee": "2.50",
      "totalFees": "1302.50"
    },
    "reference": "onramp-123",
    "status": "completed",
    "statusHistory": [
      {
        "status": "pending_payment",
        "timestamp": "2024-01-15T10:00:00Z",
        "message": "Order created, waiting for payment"
      },
      {
        "status": "payment_received",
        "timestamp": "2024-01-15T10:15:00Z",
        "message": "Payment confirmed, processing tokens"
      },
      {
        "status": "completed",
        "timestamp": "2024-01-15T10:17:00Z",
        "message": "Tokens delivered successfully",
        "transactionHash": "0xabc123def456..."
      }
    ],
    "validUntil": "2024-01-15T10:30:00Z",
    "createdAt": "2024-01-15T10:00:00Z",
    "updatedAt": "2024-01-15T10:17:00Z",
    "completedAt": "2024-01-15T10:17:00Z"
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
                    <td className="p-4 font-mono text-sm">id</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Unique order identifier</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">amount</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Fiat amount to be paid</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">currency</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Fiat currency code</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">token</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Token to receive</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">network</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Blockchain network</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">rate</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Exchange rate used</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">expectedTokens</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Expected token amount</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">actualTokens</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Actual tokens delivered (if completed)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">paymentInstructions</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm text-foreground-secondary">Payment details for the user</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">receiveAddress</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Blockchain address for token delivery</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">sender</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm text-foreground-secondary">Sender information</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">fees</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm text-foreground-secondary">Fee breakdown</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">status</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Current order status</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">statusHistory</td>
                    <td className="p-4 text-sm">array</td>
                    <td className="p-4 text-sm text-foreground-secondary">Complete status change history</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">validUntil</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Order expiration timestamp</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">reference</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Your reference ID</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">createdAt</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Order creation timestamp</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">updatedAt</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Last update timestamp</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">completedAt</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">Completion timestamp (if applicable)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Order Statuses */}
        <section id="order-statuses" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Order Statuses</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg bg-background-secondary">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="font-medium text-yellow-400">pending_payment</span>
                </div>
                <p className="text-sm text-foreground-secondary">
                  Order created and waiting for fiat payment. Payment instructions are provided.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg bg-background-secondary">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="font-medium text-blue-400">payment_received</span>
                </div>
                <p className="text-sm text-foreground-secondary">
                  Payment confirmed and verified. Token minting and delivery in progress.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg bg-background-secondary">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="font-medium text-green-400">completed</span>
                </div>
                <p className="text-sm text-foreground-secondary">
                  Tokens successfully delivered to the specified address. Transaction hash available.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg bg-background-secondary">
                <div className="flex items-center mb-2">
                  <XCircle className="h-5 w-5 text-red-400 mr-2" />
                  <span className="font-medium text-red-400">expired</span>
                </div>
                <p className="text-sm text-foreground-secondary">
                  Order expired before payment was received. No tokens delivered.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg bg-background-secondary">
                <div className="flex items-center mb-2">
                  <XCircle className="h-5 w-5 text-red-400 mr-2" />
                  <span className="font-medium text-red-400">failed</span>
                </div>
                <p className="text-sm text-foreground-secondary">
                  Order failed due to payment issues or technical problems. May be refunded.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg bg-background-secondary">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-orange-400 mr-2" />
                  <span className="font-medium text-orange-400">refunding</span>
                </div>
                <p className="text-sm text-foreground-secondary">
                  Refund in progress for failed or cancelled order.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Get Order Status</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground-secondary">Request</span>
                  <button className="text-foreground-secondary hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-blue-400">{`curl -X GET https://api.nedapay.io/v1/receiver/orders/550e8400-e29b-41d4-a716-446655440000 \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json"`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">JavaScript/Node.js Example</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`const orderId = '550e8400-e29b-41d4-a716-446655440000';

const response = await fetch(\`https://api.nedapay.io/v1/receiver/orders/\${orderId}\`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer nedapay_live_1234567890abcdef',
    'Content-Type': 'application/json'
  }
});

const order = await response.json();
console.log('Order status:', order.data.status);

// Check if order is completed
if (order.data.status === 'completed') {
  console.log('Tokens delivered:', order.data.actualTokens);
  console.log('Transaction hash:', order.data.statusHistory.find(h => h.transactionHash)?.transactionHash);
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Python Example</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`import requests

order_id = "550e8400-e29b-41d4-a716-446655440000"
headers = {
    "Authorization": "Bearer nedapay_live_1234567890abcdef",
    "Content-Type": "application/json"
}

response = requests.get(
    f"https://api.nedapay.io/v1/receiver/orders/{order_id}",
    headers=headers
)

order = response.json()
print(f"Order status: {order['data']['status']}")

# Monitor order progress
if order['data']['status'] == 'pending_payment':
    print("Waiting for payment...")
    print(f"Payment instructions: {order['data']['paymentInstructions']}")
elif order['data']['status'] == 'completed':
    print(f"Success! Tokens delivered: {order['data']['actualTokens']}")`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Error Handling */}
        <section id="error-handling" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
          
          <div className="space-y-6">
            <div className="p-4 border border-red-500/20 rounded-lg bg-red-500/5">
              <h4 className="font-medium text-red-400 mb-2">404 Not Found - Order Not Found</h4>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <pre className="text-red-400">{`{
  "status": "error",
  "message": "Order not found",
  "code": "ORDER_NOT_FOUND",
  "details": "No order found with ID: 550e8400-e29b-41d4-a716-446655440000"
}`}</pre>
              </div>
            </div>

            <div className="p-4 border border-red-500/20 rounded-lg bg-red-500/5">
              <h4 className="font-medium text-red-400 mb-2">401 Unauthorized - Invalid API Key</h4>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <pre className="text-red-400">{`{
  "status": "error",
  "message": "Unauthorized access",
  "code": "INVALID_API_KEY",
  "details": "The provided API key is invalid or expired"
}`}</pre>
              </div>
            </div>

            <div className="p-4 border border-red-500/20 rounded-lg bg-red-500/5">
              <h4 className="font-medium text-red-400 mb-2">403 Forbidden - Access Denied</h4>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <pre className="text-red-400">{`{
  "status": "error",
  "message": "Access denied",
  "code": "ORDER_ACCESS_DENIED",
  "details": "You don't have permission to access this order"
}`}</pre>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Integration Tips</h3>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li>• Poll this endpoint periodically to track order progress</li>
              <li>• Use webhooks for real-time status updates instead of frequent polling</li>
              <li>• Store the order ID securely for future reference</li>
              <li>• Handle network timeouts gracefully with retry logic</li>
              <li>• Check the statusHistory array for detailed progress information</li>
              <li>• Monitor the validUntil timestamp to handle order expiration</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
