import { ArrowRight, Code, Zap, Shield, Globe } from 'lucide-react'

export default function ApiIntroductionPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Partner API Introduction</h1>
          <p className="text-foreground-secondary">
            Welcome to NEDApay's B2B infrastructure platform. Integrate stablecoin-to-fiat conversion capabilities into your existing payment services for your customers.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            The NEDApay Partner API enables PSPs, Banks, MNOs, and Fintech companies to offer stablecoin services to their customers 
            through their existing channels. Our infrastructure handles blockchain complexity while you focus on customer experience 
            through familiar interfaces like mobile money, banking apps, and payment platforms.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Zap className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-medium mb-2">Partner-First Design</h3>
              <p className="text-sm text-foreground-secondary">
                Built for PSPs, Banks, and MNOs to integrate stablecoin services seamlessly
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Globe className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-medium mb-2">White-Label Ready</h3>
              <p className="text-sm text-foreground-secondary">
                Offer stablecoin services under your brand through existing customer channels
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Shield className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-medium mb-2">Compliance Ready</h3>
              <p className="text-sm text-foreground-secondary">
                Built-in KYC/AML integration and regulatory compliance for financial institutions
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Code className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="font-medium mb-2">Revenue Sharing</h3>
              <p className="text-sm text-foreground-secondary">
                Earn from every transaction with transparent fee structures and partner incentives
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
          <h2 className="text-2xl font-semibold mb-6">Partner API Capabilities</h2>
          <div className="space-y-6">
            
            {/* Core Payment Operations */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Customer Transaction Management</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Customer Orders</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Create orders for your customers</li>
                    <li>• Track customer transaction status</li>
                    <li>• Retrieve customer order history</li>
                    <li>• Handle customer refunds/cancellations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Partner Dashboard</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Real-time transaction analytics</li>
                    <li>• Revenue and fee reporting</li>
                    <li>• Customer transaction insights</li>
                    <li>• Settlement reconciliation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Provider Network */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Partner Integration Types</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-blue-400">PSP Partners</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Offer stablecoin checkout</li>
                    <li>• Cross-border settlements</li>
                    <li>• Merchant stablecoin accounts</li>
                    <li>• Instant fiat conversion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-green-400">MNO Partners</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Mobile money ↔ stablecoin</li>
                    <li>• USSD stablecoin services</li>
                    <li>• Remittance receiving</li>
                    <li>• Agent network integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-orange-400">Bank Partners</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Stablecoin banking accounts</li>
                    <li>• International wire alternatives</li>
                    <li>• Corporate treasury services</li>
                    <li>• Retail stablecoin products</li>
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
                  <span className="text-sm">cNGN (Nigerian Naira)</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">CNGN</code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">ZARP (South African Rand)</span>
                  <code className="text-xs bg-code-background px-2 py-1 rounded">ZARP</code>
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
            Here's how a partner would create a stablecoin conversion order for their customer:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="text-foreground-secondary mb-2">1. Get Exchange Rate</div>
              <pre className="text-green-400">{`curl -X GET "https://api.nedapay.io/v1/rates?from=USDT&to=TZS&amount=100" \\
  -H "Authorization: Bearer your_api_key"`}</pre>
            </div>

            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <div className="text-foreground-secondary mb-2">2. Create Payment Order</div>
              <pre className="text-blue-400">{`curl -X POST "https://api.nedapay.io/v1/partner/orders" \\
  -H "Authorization: Bearer your_partner_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "partner_id": "VODACOM_TZ",
    "customer_id": "customer_12345",
    "rate_id": "rate_abc123",
    "amount": "100",
    "from_currency": "USDT",
    "to_currency": "TZS",
    "delivery_method": {
      "type": "mobile_money",
      "account": "+255712345678",
      "name": "John Doe"
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
          <h2 className="text-2xl font-semibold mb-6">Partner Rate Limits</h2>
          <div className="p-6 border border-border rounded-lg bg-background-secondary">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">1,000</div>
                <div className="text-sm text-foreground-secondary">Testing</div>
                <div className="text-xs text-foreground-secondary">requests/hour</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">10,000</div>
                <div className="text-sm text-foreground-secondary">Regional Partner</div>
                <div className="text-xs text-foreground-secondary">requests/hour</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">50,000</div>
                <div className="text-sm text-foreground-secondary">National Partner</div>
                <div className="text-xs text-foreground-secondary">requests/hour</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">Unlimited</div>
                <div className="text-sm text-foreground-secondary">Enterprise Partner</div>
                <div className="text-xs text-foreground-secondary">dedicated infrastructure</div>
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
              Our partner success team provides dedicated support for financial institutions integrating NEDApay infrastructure.
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
