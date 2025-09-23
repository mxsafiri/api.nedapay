import { ArrowRight, Code, Zap, Shield, Globe } from 'lucide-react'

export default function ApiIntroductionPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">API Introduction</h1>
          <p className="text-foreground-secondary">
            Welcome to NEDApay's omni-channel payment infrastructure. Build global money movement solutions with our unified API.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            The NEDApay API provides a comprehensive interface for integrating with our secondary layer infrastructure. 
            Access stablecoin-to-fiat and fiat-to-stablecoin conversion through our global network of PSPs, MMOs, MNOs, 
            and traditional financial institutions via a single, unified API.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Zap className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-medium mb-2">Fast Integration</h3>
              <p className="text-sm text-foreground-secondary">
                Get started in minutes with our RESTful API and comprehensive SDKs
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Globe className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-medium mb-2">Global Reach</h3>
              <p className="text-sm text-foreground-secondary">
                Access worldwide payment rails through a single integration
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Shield className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-medium mb-2">Enterprise Security</h3>
              <p className="text-sm text-foreground-secondary">
                Bank-grade security with blockchain settlement and compliance
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Code className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="font-medium mb-2">Developer Friendly</h3>
              <p className="text-sm text-foreground-secondary">
                Intuitive APIs, detailed docs, and multi-language SDKs
              </p>
            </div>
          </div>
        </section>

        {/* Base URL */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Base URLs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-3">Production</h3>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <code className="text-green-400">https://api.nedapay.io/v1</code>
              </div>
              <p className="text-sm text-foreground-secondary mt-3">
                Use this for live transactions with real money
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-3">Sandbox</h3>
              <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
                <code className="text-orange-400">https://sandbox-api.nedapay.io/v1</code>
              </div>
              <p className="text-sm text-foreground-secondary mt-3">
                Use this for testing and development
              </p>
            </div>
          </div>
        </section>

        {/* API Capabilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibent mb-6">API Capabilities</h2>
          <div className="space-y-6">
            
            {/* Core Payment Operations */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Core Payment Operations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Order Management</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Create payment orders</li>
                    <li>• Track order status</li>
                    <li>• Retrieve order history</li>
                    <li>• Cancel pending orders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Rate & Pricing</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Get real-time exchange rates</li>
                    <li>• Lock rates for transactions</li>
                    <li>• Compare provider rates</li>
                    <li>• Historical rate data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Provider Network */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Provider Network Access</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-blue-400">PSPs</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Card payments</li>
                    <li>• Bank transfers</li>
                    <li>• Digital wallets</li>
                    <li>• ACH/SEPA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-green-400">MMO/MNO</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• M-Pesa</li>
                    <li>• Tigo Pesa</li>
                    <li>• Airtel Money</li>
                    <li>• MTN Mobile Money</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-orange-400">Banks</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Wire transfers</li>
                    <li>• Real-time payments</li>
                    <li>• Branch pickup</li>
                    <li>• Account deposits</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Multi-Chain Support */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Multi-Chain Infrastructure</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-blue-400">XRPL (Primary)</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• 3-5 second settlement</li>
                    <li>• Native multi-currency</li>
                    <li>• Low transaction costs</li>
                    <li>• Built-in DEX</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-green-400">Base Network</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• EVM compatibility</li>
                    <li>• Low gas fees</li>
                    <li>• Ethereum ecosystem</li>
                    <li>• Coinbase integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-orange-400">Ethereum</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Maximum liquidity</li>
                    <li>• DeFi protocols</li>
                    <li>• USDC/USDT native</li>
                    <li>• Institutional adoption</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Currencies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Supported Currencies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Fiat Currencies</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">🇹🇿 Tanzanian Shilling</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">TZS</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">🇰🇪 Kenyan Shilling</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">KES</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">🇺🇬 Ugandan Shilling</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">UGX</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">🇷🇼 Rwandan Franc</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">RWF</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">🇺🇸 US Dollar</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">USD</code>
                </div>
              </div>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Stablecoins</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">USD Coin</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">USDC</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tether USD</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">USDT</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">TZS Stablecoin</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">TZSC</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">KES Stablecoin</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">KESC</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">UGX Stablecoin</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">UGXC</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Design Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">API Design Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">RESTful Design</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Standard HTTP methods (GET, POST, PUT, DELETE)</li>
                <li>• Intuitive resource-based URLs</li>
                <li>• Consistent response formats</li>
                <li>• Proper HTTP status codes</li>
                <li>• Stateless operations</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Developer Experience</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• JSON request and response bodies</li>
                <li>• Comprehensive error messages</li>
                <li>• Pagination for list endpoints</li>
                <li>• Filtering and sorting options</li>
                <li>• Webhook notifications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Start Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Quick Start Example</h2>
          <p className="text-foreground-secondary mb-6">
            Here's a simple example of creating a payment order using our API:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="text-foreground-secondary mb-2">1. Get Exchange Rate</div>
              <pre className="text-green-400">{`curl -X GET "https://api.nedapay.io/v1/rates?from=USDT&to=TZS&amount=100" \\
  -H "Authorization: Bearer your_api_key"`}</pre>
            </div>

            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="text-foreground-secondary mb-2">2. Create Payment Order</div>
              <pre className="text-blue-400">{`curl -X POST "https://api.nedapay.io/v1/orders" \\
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
    }
  }'`}</pre>
            </div>

            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="text-foreground-secondary mb-2">3. Response</div>
              <pre className="text-purple-400">{`{
  "order_id": "order_def456",
  "status": "pending",
  "amount": "100",
  "from_currency": "USDT",
  "to_currency": "TZS",
  "total": "234050.00",
  "created_at": "2024-01-15T10:30:00Z"
}`}</pre>
            </div>
          </div>
        </section>

        {/* SDKs and Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">SDKs and Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <Code className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h4 className="font-medium mb-1">JavaScript</h4>
              <p className="text-xs text-foreground-secondary mb-2">npm install nedapay</p>
              <a href="#" className="text-xs text-blue-400 hover:underline">View Docs</a>
            </div>
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <Code className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h4 className="font-medium mb-1">Python</h4>
              <p className="text-xs text-foreground-secondary mb-2">pip install nedapay</p>
              <a href="#" className="text-xs text-green-400 hover:underline">View Docs</a>
            </div>
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <Code className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <h4 className="font-medium mb-1">Go</h4>
              <p className="text-xs text-foreground-secondary mb-2">go get nedapay</p>
              <a href="#" className="text-xs text-orange-400 hover:underline">View Docs</a>
            </div>
            <div className="p-4 border border-border rounded-lg bg-background-secondary text-center">
              <Code className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h4 className="font-medium mb-1">PHP</h4>
              <p className="text-xs text-foreground-secondary mb-2">composer install nedapay</p>
              <a href="#" className="text-xs text-purple-400 hover:underline">View Docs</a>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibent mb-6">Rate Limits</h2>
          <div className="p-6 border border-border rounded-lg bg-background-secondary">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">1,000</div>
                <div className="text-sm text-foreground-secondary">Sandbox</div>
                <div className="text-xs text-foreground-secondary">requests/hour</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">5,000</div>
                <div className="text-sm text-foreground-secondary">Starter</div>
                <div className="text-xs text-foreground-secondary">requests/hour</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">25,000</div>
                <div className="text-sm text-foreground-secondary">Professional</div>
                <div className="text-xs text-foreground-secondary">requests/hour</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">Custom</div>
                <div className="text-sm text-foreground-secondary">Enterprise</div>
                <div className="text-xs text-foreground-secondary">contact us</div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="/api-reference/authentication"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                Authentication
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Learn how to authenticate your API requests securely
              </p>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
            </a>
            
            <a 
              href="/quickstart"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                Quickstart Guide
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Get up and running with your first payment order
              </p>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </section>

        {/* Support */}
        <section className="mb-12">
          <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Need Help?</h3>
            <p className="text-foreground-secondary mb-4">
              Our developer support team is here to help you integrate NEDApay into your application.
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
                className="px-4 py-2 border border-border hover:bg-background-secondary rounded-lg text-sm font-medium transition-colors"
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
