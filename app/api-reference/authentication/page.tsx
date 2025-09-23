import { Copy, Key, Shield, AlertTriangle, CheckCircle } from 'lucide-react'

export default function AuthenticationPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Authentication</h1>
          <p className="text-foreground-secondary">
            Secure API access using API keys and request signing for NEDApay&apos;s omni-channel infrastructure.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay uses API key authentication with optional request signing for enhanced security. 
            All API requests must include a valid API key in the Authorization header.
          </p>
        </section>

        {/* API Keys */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">API Keys</h2>
          
          <div className="p-6 border border-border rounded-lg bg-background-secondary mb-6">
            <div className="flex items-center mb-4">
              <Key className="h-6 w-6 text-blue-400 mr-3" />
              <h3 className="text-lg font-medium">Getting Your API Key</h3>
            </div>
            <ol className="space-y-2 text-sm text-foreground-secondary">
              <li>1. Sign up for a NEDApay developer account</li>
              <li>2. Complete KYC verification</li>
              <li>3. Navigate to the API Keys section in your dashboard</li>
              <li>4. Generate a new API key for your application</li>
              <li>5. Store the key securely (it won&apos;t be shown again)</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Production Keys</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Used for live transactions</li>
                <li>• Require full KYC verification</li>
                <li>• Rate limited based on your plan</li>
                <li>• Monitored for suspicious activity</li>
                <li>• Can be revoked immediately if compromised</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Sandbox Keys</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Used for testing and development</li>
                <li>• No real money transactions</li>
                <li>• Higher rate limits for testing</li>
                <li>• Mock provider responses</li>
                <li>• Available immediately after signup</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Basic Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Basic Authentication</h2>
          <p className="text-foreground-secondary mb-6">
            Include your API key in the Authorization header using the Bearer token format.
          </p>

          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground-secondary">Authorization Header</span>
              <button className="text-foreground-secondary hover:text-foreground">
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <code className="text-green-400">Authorization: Bearer nedapay_live_1234567890abcdef</code>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-secondary">cURL Example</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <pre className="text-green-400">{`curl -X GET "https://api.nedapay.io/v1/rates?from=USDT&to=TZS&amount=100" \\
  -H "Authorization: Bearer nedapay_live_1234567890abcdef" \\
  -H "Content-Type: application/json"`}</pre>
            </div>

            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-secondary">JavaScript Example</span>
                <button className="text-foreground-secondary hover:text-foreground">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <pre className="text-blue-400">{`const response = await fetch('https://api.nedapay.io/v1/rates', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer nedapay_live_1234567890abcdef',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();`}</pre>
            </div>
          </div>
        </section>

        {/* Request Signing */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Request Signing (Enhanced Security)</h2>
          <p className="text-foreground-secondary mb-6">
            For enhanced security, especially for high-value transactions, you can sign your requests using HMAC-SHA256.
          </p>

          <div className="p-6 border border-border rounded-lg bg-background-secondary mb-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-green-400 mr-3" />
              <h3 className="text-lg font-medium">When to Use Request Signing</h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li>• High-value transactions (&gt;$10,000)</li>
              <li>• Production environments with sensitive data</li>
              <li>• Compliance requirements mandate additional security</li>
              <li>• Integration with enterprise systems</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Signature Generation</h3>
              <div className="space-y-4">
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-foreground-secondary">Node.js Example</span>
                    <button className="text-foreground-secondary hover:text-foreground">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <pre className="text-green-400">{`const crypto = require('crypto');

function generateSignature(method, path, body, timestamp, apiSecret) {
  const payload = method + path + body + timestamp;
  return crypto
    .createHmac('sha256', apiSecret)
    .update(payload)
    .digest('hex');
}

// Usage
const method = 'POST';
const path = '/v1/orders';
const body = JSON.stringify(orderData);
const timestamp = Date.now().toString();
const signature = generateSignature(method, path, body, timestamp, apiSecret);`}</pre>
                </div>

                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-foreground-secondary">Required Headers</span>
                    <button className="text-foreground-secondary hover:text-foreground">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <pre className="text-blue-400">{`Authorization: Bearer nedapay_live_1234567890abcdef
X-NEDApay-Timestamp: 1642694400000
X-NEDApay-Signature: a1b2c3d4e5f6...
Content-Type: application/json`}</pre>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Signature Verification Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <span className="font-medium">Create Payload</span>
                    <p className="text-sm text-foreground-secondary">Concatenate: HTTP_METHOD + REQUEST_PATH + REQUEST_BODY + TIMESTAMP</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <span className="font-medium">Generate HMAC</span>
                    <p className="text-sm text-foreground-secondary">Use HMAC-SHA256 with your API secret to hash the payload</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <span className="font-medium">Include Headers</span>
                    <p className="text-sm text-foreground-secondary">Add X-NEDApay-Timestamp and X-NEDApay-Signature headers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Key Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">API Key Management</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Security Best Practices</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Never expose API keys in client-side code</li>
                <li>• Store keys in environment variables</li>
                <li>• Use different keys for different environments</li>
                <li>• Rotate keys regularly (every 90 days)</li>
                <li>• Monitor key usage for anomalies</li>
                <li>• Revoke compromised keys immediately</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Key Permissions</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• <strong>Read:</strong> View rates, orders, and account info</li>
                <li>• <strong>Write:</strong> Create orders and update settings</li>
                <li>• <strong>Admin:</strong> Manage webhooks and API keys</li>
                <li>• <strong>Scoped:</strong> Limit access to specific endpoints</li>
                <li>• <strong>Time-limited:</strong> Set expiration dates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rate Limiting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Rate Limiting</h2>
          <p className="text-foreground-secondary mb-6">
            API requests are rate limited to ensure fair usage and system stability.
          </p>

          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Rate Limits by Plan</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sandbox</span>
                  <span className="text-sm font-medium text-green-400">1000 requests/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Starter</span>
                  <span className="text-sm font-medium text-blue-400">5000 requests/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Professional</span>
                  <span className="text-sm font-medium text-orange-400">25000 requests/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Enterprise</span>
                  <span className="text-sm font-medium text-purple-400">Custom limits</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Rate Limit Headers</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999
X-RateLimit-Reset: 1642698000
X-RateLimit-Window: 3600`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Error Responses */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Authentication Errors</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
                <span className="font-medium">401 Unauthorized</span>
              </div>
              <p className="text-sm text-foreground-secondary mb-2">Invalid or missing API key</p>
              <div className="p-2 bg-code-background border border-code-border rounded font-mono text-xs">
                <pre className="text-red-400">{`{
  "error": "unauthorized",
  "message": "Invalid API key provided"
}`}</pre>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-orange-400 mr-2" />
                <span className="font-medium">403 Forbidden</span>
              </div>
              <p className="text-sm text-foreground-secondary mb-2">API key lacks required permissions</p>
              <div className="p-2 bg-code-background border border-code-border rounded font-mono text-xs">
                <pre className="text-orange-400">{`{
  "error": "forbidden",
  "message": "API key does not have permission for this endpoint"
}`}</pre>
              </div>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="font-medium">429 Too Many Requests</span>
              </div>
              <p className="text-sm text-foreground-secondary mb-2">Rate limit exceeded</p>
              <div className="p-2 bg-code-background border border-code-border rounded font-mono text-xs">
                <pre className="text-yellow-400">{`{
  "error": "rate_limit_exceeded",
  "message": "Too many requests. Try again in 3600 seconds"
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Testing Your Authentication</h2>
          <p className="text-foreground-secondary mb-6">
            Use this simple endpoint to verify your API key is working correctly.
          </p>

          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground-secondary">Test Authentication</span>
              <button className="text-foreground-secondary hover:text-foreground">
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <pre className="text-green-400">{`curl -X GET "https://api.nedapay.io/v1/auth/test" \\
  -H "Authorization: Bearer your_api_key_here"`}</pre>
          </div>

          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
            <div className="text-foreground-secondary mb-2">Success Response</div>
            <pre className="text-blue-400">{`{
  "authenticated": true,
  "key_id": "key_abc123",
  "permissions": ["read", "write"],
  "rate_limit": {
    "limit": 5000,
    "remaining": 4999,
    "reset": 1642698000
  }
}`}</pre>
          </div>
        </section>

        {/* SDK Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">SDK Authentication</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">JavaScript SDK</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`const NEDApay = require('nedapay');

const client = new NEDApay({
  apiKey: 'nedapay_live_1234567890abcdef',
  environment: 'production' // or 'sandbox'
});

// SDK handles authentication automatically
const rates = await client.rates.get({
  from: 'USDT',
  to: 'TZS',
  amount: 100
});`}</pre>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Python SDK</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`import nedapay

client = nedapay.Client(
    api_key='nedapay_live_1234567890abcdef',
    environment='production'
)

# SDK handles authentication automatically
rates = client.rates.get(
    from_currency='USDT',
    to_currency='TZS',
    amount=100
)`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
