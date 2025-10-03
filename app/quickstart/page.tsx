import { Copy, CheckCircle, ArrowRight, Zap } from 'lucide-react'
import { ApiPlayground } from '@/components/api-playground'

export default function QuickstartPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Partner Integration Quickstart</h1>
          <p className="text-foreground-secondary">
            Get your financial institution integrated with NEDApay's stablecoin infrastructure in minutes
          </p>
        </div>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>NEDApay partner account (apply at <a href="#" className="text-blue-400 hover:underline">partners.nedapay.io</a>)</span>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Partner API credentials from your dashboard</span>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Basic understanding of REST APIs</span>
            </div>
          </div>
        </section>

        {/* Create Your First Payment Order */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Create Your First Customer Order</h2>
          
          {/* Step 1: Get Exchange Rate */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium mr-3">1</span>
              Get Exchange Rate
            </h3>
            
            <p className="text-foreground-secondary mb-4">
              Before creating a customer order, get the current exchange rate for the stablecoin-to-fiat conversion your customer needs.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-3 bg-background-secondary rounded-lg border border-border">
                <div className="text-sm text-foreground-secondary">Method</div>
                <div className="font-mono text-sm">GET</div>
              </div>
              <div className="p-3 bg-background-secondary rounded-lg border border-border">
                <div className="text-sm text-foreground-secondary">Endpoint</div>
                <div className="font-mono text-sm">/v1/rates</div>
              </div>
              <div className="p-3 bg-background-secondary rounded-lg border border-border">
                <div className="text-sm text-foreground-secondary">From</div>
                <div className="font-mono text-sm">USDT</div>
              </div>
              <div className="p-3 bg-background-secondary rounded-lg border border-border">
                <div className="text-sm text-foreground-secondary">To</div>
                <div className="font-mono text-sm">TZS</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">cURL</span>
                <button className="p-1 hover:bg-background-tertiary rounded">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm overflow-x-auto">
{`curl -X GET "https://api.nedapay.io/v1/rates/USDT/100/TZS" \\
  -H "API-Key: YOUR_API_KEY"`}
              </div>

              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "message": "Rate fetched successfully",
  "data": "260000.00"
}`}
              </div>
            </div>
          </div>

          {/* Step 2: Create Payment Order */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium mr-3">2</span>
              Create Payment Order
            </h3>
            
            <p className="text-foreground-secondary mb-6">
              Create a payment order to send USDT and receive TZS in a Tanzanian mobile money account.
            </p>

            <ApiPlayground
              method="POST"
              endpoint="/sender/orders"
              title="Create Payment Order"
              description="Create a new payment order for USDT to TZS conversion"
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
                  "memo": "Payment for services"
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
                  "reference": "payment-123"
                }
              }}
            />
          </div>
        </section>

        {/* Check Order Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Check Order Status</h2>
          
          <p className="text-foreground-secondary mb-6">
            Monitor your payment order status using the order ID returned from the creation request.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">cURL</span>
              <button className="p-1 hover:bg-background-tertiary rounded">
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm overflow-x-auto">
{`curl -X GET "https://api.nedapay.io/v1/sender/orders/550e8400-e29b-41d4-a716-446655440000" \\
  -H "API-Key: YOUR_API_KEY"`}
            </div>
          </div>

          {/* Order Statuses */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Order Statuses</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div>
                  <span className="font-medium">pending</span>
                  <span className="text-foreground-secondary ml-2">Order created, waiting for provider assignment</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <div>
                  <span className="font-medium">processing</span>
                  <span className="text-foreground-secondary ml-2">Provider assigned, fulfillment in progress</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div>
                  <span className="font-medium">completed</span>
                  <span className="text-foreground-secondary ml-2">Payment completed successfully</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div>
                  <span className="font-medium">failed</span>
                  <span className="text-foreground-secondary ml-2">Payment failed or cancelled</span>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h4 className="font-medium text-blue-400 mb-2">Response Time</h4>
            <ul className="space-y-1 text-sm text-blue-300">
              <li>• Order Processing: &lt; 30 seconds (creation → validation)</li>
              <li>• Settlement: +15 seconds (onchain settlement)</li>
              <li>• Total Time: ~1-2 minutes</li>
              <li>• Auto-Refund: If not completed within 5 minutes</li>
            </ul>
          </div>
        </section>

        {/* Handle Webhooks */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Handle Webhooks (Optional)</h2>
          
          <p className="text-foreground-secondary mb-6">
            Set up webhooks to receive real-time notifications about order status changes.
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium mb-2">Setup Steps</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-foreground-secondary">
                <li>Log into your dashboard at <a href="#" className="text-blue-400 hover:underline">portal.nedapay.io</a></li>
                <li>Navigate to Settings → Webhooks</li>
                <li>Enter your webhook URL (e.g., https://your-domain.com/webhooks/nedapay)</li>
                <li>Save the configuration</li>
              </ol>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-3">Webhook Payload Example</h3>
          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "event": "order.completed",
  "timestamp": "2024-01-15T10:05:00Z",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "status": "completed",
    "amount": "100",
    "token": "USDT",
    "recipient": {
      "institution": "VODACOM",
      "accountIdentifier": "255744123456",
      "currency": "TZS"
    }
  }
}`}
          </div>
        </section>

        {/* Get Supported Currencies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Get Supported Currencies</h2>
          
          <p className="text-foreground-secondary mb-4">
            Retrieve the list of supported currencies and institutions for your integrations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Supported Currencies</h4>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`GET /v1/currencies

{
  "status": "success",
  "data": [
    {
      "code": "TZS",
      "name": "Tanzanian Shilling",
      "country": "Tanzania",
      "flag": "🇹🇿"
    },
    {
      "code": "KES", 
      "name": "Kenyan Shilling",
      "country": "Kenya",
      "flag": "🇰🇪"
    }
  ]
}`}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Supported Institutions</h4>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`GET /v1/institutions

{
  "status": "success", 
  "data": [
    {
      "code": "VODACOM",
      "name": "Vodacom M-Pesa",
      "type": "mobile_money",
      "country": "TZ"
    },
    {
      "code": "CRDB",
      "name": "CRDB Bank",
      "type": "bank", 
      "country": "TZ"
    }
  ]
}`}
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">JavaScript/Node.js</h4>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm overflow-x-auto">
{`const response = await fetch(
  'https://api.nedapay.io/v1/sender/orders',
  {
    method: 'POST',
    headers: {
      'API-Key': 'your-api-key',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount: '100',
      token: 'USDT',
      network: 'base',
      recipient: {
        institution: 'VODACOM',
        accountIdentifier: '255744123456',
        accountName: 'John Doe',
        currency: 'TZS'
      }
    })
  }
);

const order = await response.json();
console.log(order.data.id);`}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Python</h4>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm overflow-x-auto">
{`import requests

response = requests.post(
    'https://api.nedapay.io/v1/sender/orders',
    headers={
        'API-Key': 'your-api-key',
        'Content-Type': 'application/json'
    },
    json={
        'amount': '100',
        'token': 'USDT', 
        'network': 'base',
        'recipient': {
            'institution': 'VODACOM',
            'accountIdentifier': '255744123456',
            'accountName': 'John Doe',
            'currency': 'TZS'
        }
    }
)

order = response.json()
print(order['data']['id'])`}
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="/api-reference"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3">
                  <Zap className="h-4 w-4 text-blue-400" />
                </div>
                <h3 className="font-medium group-hover:text-blue-400 transition-colors">Explore the API</h3>
              </div>
              <p className="text-sm text-foreground-secondary">
                Dive deeper into all available endpoints and advanced features
              </p>
            </a>

            <a 
              href="/concepts/architecture"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mr-3">
                  <Zap className="h-4 w-4 text-green-400" />
                </div>
                <h3 className="font-medium group-hover:text-green-400 transition-colors">Learn About Architecture</h3>
              </div>
              <p className="text-sm text-foreground-secondary">
                Understand how NEDApay protocol works under the hood
              </p>
            </a>

            <a 
              href="/resources/supported-currencies"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mr-3">
                  <Zap className="h-4 w-4 text-orange-400" />
                </div>
                <h3 className="font-medium group-hover:text-orange-400 transition-colors">Check Supported Assets</h3>
              </div>
              <p className="text-sm text-foreground-secondary">
                View all supported currencies, tokens, and institutions
              </p>
            </a>
          </div>
        </section>

        {/* Get Support */}
        <section className="mb-12">
          <div className="p-6 bg-background-secondary border border-border rounded-lg">
            <h3 className="text-lg font-medium mb-3">Get Support</h3>
            <p className="text-foreground-secondary mb-4">
              Need help getting started? Our team is here to assist you.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="#" 
                className="px-4 py-2 border border-border hover:bg-background-tertiary rounded-lg text-sm font-medium transition-colors"
              >
                Join Community
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
