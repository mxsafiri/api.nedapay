import { Copy, Code, CheckCircle, ArrowRight, Zap, Key } from 'lucide-react'
import { ApiPlayground } from '@/components/api-playground'

export default function SenderIntegrationPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Sender API Integration</h1>
          <p className="text-foreground-secondary">
            Complete guide for integrating NEDApay&apos;s omni-channel payment infrastructure into your application.
          </p>
        </div>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>NEDApay developer account</span>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>API key from your dashboard</span>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Understanding of REST APIs and webhooks</span>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>HTTPS endpoint for webhook notifications</span>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Authentication</h2>
          <p className="text-foreground-secondary mb-6">
            NEDApay uses API key authentication. Include your API key in the Authorization header of all requests.
          </p>
          
          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground-secondary">Authorization Header</span>
              <button className="text-foreground-secondary hover:text-foreground">
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <code className="text-green-400">Authorization: Bearer your_api_key_here</code>
          </div>

          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex items-center mb-2">
              <Key className="h-5 w-5 text-blue-400 mr-2" />
              <span className="font-medium text-blue-400">Security Best Practices</span>
            </div>
            <ul className="text-sm text-foreground-secondary space-y-1">
              <li>• Never expose API keys in client-side code</li>
              <li>• Use environment variables for key storage</li>
              <li>• Rotate keys regularly</li>
              <li>• Use separate keys for development and production</li>
            </ul>
          </div>
        </section>

        {/* Base URL */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-code-background border border-code-border rounded-lg">
              <div className="text-sm text-foreground-secondary mb-2">Production</div>
              <code className="text-green-400 font-mono">https://api.nedapay.io/v1</code>
            </div>
            <div className="p-4 bg-code-background border border-code-border rounded-lg">
              <div className="text-sm text-foreground-secondary mb-2">Sandbox</div>
              <code className="text-orange-400 font-mono">https://sandbox-api.nedapay.io/v1</code>
            </div>
          </div>
        </section>

        {/* Core Integration Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Integration Steps</h2>
          
          {/* Step 1: Get Exchange Rate */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium mr-3">1</span>
              Get Exchange Rate
            </h3>
            
            <p className="text-foreground-secondary mb-4">
              Before creating a payment order, get the current exchange rate for your desired currency pair.
            </p>

            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-secondary">GET /rates</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <pre className="text-green-400">{`curl -X GET "https://api.nedapay.io/v1/rates?from=USDT&to=TZS&amount=100" \\
  -H "Authorization: Bearer your_api_key"`}</pre>
            </div>

            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="text-foreground-secondary mb-2">Response</div>
              <pre className="text-blue-400">{`{
  "rate": "2340.50",
  "from_currency": "USDT",
  "to_currency": "TZS",
  "amount": "100",
  "total": "234050.00",
  "expires_at": "2024-01-15T10:35:00Z",
  "rate_id": "rate_abc123"
}`}</pre>
            </div>
          </div>

          {/* Step 2: Create Payment Order */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium mr-3">2</span>
              Create Payment Order
            </h3>
            
            <p className="text-foreground-secondary mb-4">
              Create a payment order using the rate ID from step 1. This locks in the exchange rate for a limited time.
            </p>

            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-secondary">POST /orders</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <pre className="text-green-400">{`curl -X POST "https://api.nedapay.io/v1/orders" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "rate_id": "rate_abc123",
    "amount": "100",
    "from_currency": "USDT",
    "to_currency": "TZS",
    "recipient": {
      "name": "John Doe",
      "phone": "+255712345678",
      "method": "mobile_money",
      "provider": "mpesa"
    },
    "reference": "order_ref_123",
    "webhook_url": "https://yourapp.com/webhooks/nedapay"
  }'`}</pre>
            </div>

            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="text-foreground-secondary mb-2">Response</div>
              <pre className="text-blue-400">{`{
  "order_id": "order_def456",
  "status": "pending",
  "amount": "100",
  "from_currency": "USDT",
  "to_currency": "TZS",
  "total": "234050.00",
  "recipient": {
    "name": "John Doe",
    "phone": "+255712345678",
    "method": "mobile_money",
    "provider": "mpesa"
  },
  "created_at": "2024-01-15T10:30:00Z",
  "expires_at": "2024-01-15T10:35:00Z"
}`}</pre>
            </div>
          </div>

          {/* Step 3: Monitor Order Status */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-medium mr-3">3</span>
              Monitor Order Status
            </h3>
            
            <p className="text-foreground-secondary mb-4">
              Track your order status through webhooks (recommended) or polling the API.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Webhook Notifications (Recommended)</h4>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  <pre className="text-green-400">{`{
  "event": "order.completed",
  "order_id": "order_def456",
  "status": "completed",
  "completed_at": "2024-01-15T10:32:15Z"
}`}</pre>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">API Polling</h4>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  <pre className="text-orange-400">{`GET /orders/order_def456

{
  "order_id": "order_def456",
  "status": "completed",
  "completed_at": "2024-01-15T10:32:15Z"
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webhook Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Webhook Configuration</h2>
          <p className="text-foreground-secondary mb-6">
            Webhooks provide real-time notifications about order status changes. Configure your endpoint to receive these notifications.
          </p>

          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Webhook Events</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm font-mono">order.created</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-sm font-mono">order.processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-sm font-mono">order.executing</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-sm font-mono">order.completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span className="text-sm font-mono">order.failed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span className="text-sm font-mono">order.expired</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Webhook Security</h3>
              <p className="text-foreground-secondary mb-4">
                Verify webhook authenticity using the signature header.
              </p>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`// Node.js example
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return signature === \`sha256=\${expectedSignature}\`;
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Error Handling */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Error Handling</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <h4 className="font-medium mb-2">Rate Expired (400)</h4>
              <p className="text-sm text-foreground-secondary">
                The rate ID has expired. Get a new rate and retry the order creation.
              </p>
            </div>
            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <h4 className="font-medium mb-2">Insufficient Liquidity (422)</h4>
              <p className="text-sm text-foreground-secondary">
                No providers available for this currency pair. Try again later or contact support.
              </p>
            </div>
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <h4 className="font-medium mb-2">Compliance Check Required (423)</h4>
              <p className="text-sm text-foreground-secondary">
                Additional verification needed. Customer will be contacted for KYC documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive API Playground */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Try It Out</h2>
          <p className="text-foreground-secondary mb-6">
            Test the API endpoints directly from this page using our interactive playground.
          </p>
          <ApiPlayground 
            method="POST"
            endpoint="/v1/orders"
            title="Create Payment Order"
          />
        </section>

        {/* SDKs and Libraries */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">SDKs and Libraries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <Code className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h4 className="font-medium mb-1">JavaScript</h4>
              <p className="text-xs text-foreground-secondary">npm install nedapay</p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <Code className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h4 className="font-medium mb-1">Python</h4>
              <p className="text-xs text-foreground-secondary">pip install nedapay</p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <Code className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <h4 className="font-medium mb-1">Go</h4>
              <p className="text-xs text-foreground-secondary">go get nedapay</p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <Code className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h4 className="font-medium mb-1">PHP</h4>
              <p className="text-xs text-foreground-secondary">composer install nedapay</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="/api-reference"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                API Reference
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Explore detailed API documentation and all available endpoints
              </p>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
            </a>
            
            <a 
              href="/guides/provider-setup"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                Provider Setup
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Learn how to become a liquidity provider in the NEDApay network
              </p>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
