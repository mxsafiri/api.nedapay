import { Copy, Code, CheckCircle, ArrowRight, Zap, DollarSign, Shield, Users } from 'lucide-react'

export default function ProviderSetupPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Provider Setup Guide</h1>
          <p className="text-foreground-secondary">
            Join NEDApay's global network as a liquidity provider and earn fees from facilitating cross-border payments.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Becoming a Provider</h2>
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            As a NEDApay provider, you supply liquidity to our omni-channel network and earn fees by facilitating 
            stablecoin-to-fiat and fiat-to-stablecoin conversions. Providers can be PSPs, MMOs, MNOs, banks, 
            exchanges, or individual liquidity suppliers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <DollarSign className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-medium mb-2">Earn Fees</h3>
              <p className="text-sm text-foreground-secondary">
                0.1-0.5% per transaction processed through your infrastructure
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Users className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-medium mb-2">Global Reach</h3>
              <p className="text-sm text-foreground-secondary">
                Access to worldwide order flow and customer base
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Zap className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-medium mb-2">Automated</h3>
              <p className="text-sm text-foreground-secondary">
                Intelligent order matching and automated settlement
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Shield className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="font-medium mb-2">Secure</h3>
              <p className="text-sm text-foreground-secondary">
                Blockchain-based settlement with built-in compliance
              </p>
            </div>
          </div>
        </section>

        {/* Provider Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Provider Types</h2>
          <div className="space-y-6">
            
            {/* PSP Provider */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Payment Service Provider (PSP)</h3>
                  <p className="text-sm text-foreground-secondary">Traditional payment infrastructure providers</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Valid PSP license in operating jurisdiction</li>
                    <li>• API integration capabilities</li>
                    <li>• Compliance with local regulations</li>
                    <li>• Minimum liquidity reserves</li>
                    <li>• 99.5% uptime SLA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Services Provided:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Card payment processing</li>
                    <li>• Bank transfer facilitation</li>
                    <li>• Multi-currency support</li>
                    <li>• KYC/AML verification</li>
                    <li>• Settlement services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MMO/MNO Provider */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Mobile Money/Network Operator</h3>
                  <p className="text-sm text-foreground-secondary">Mobile-first financial service providers</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Mobile money operator license</li>
                    <li>• USSD/API integration capability</li>
                    <li>• Agent network infrastructure</li>
                    <li>• Regulatory compliance framework</li>
                    <li>• Float management systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Services Provided:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Mobile wallet services</li>
                    <li>• USSD-based transactions</li>
                    <li>• Agent network distribution</li>
                    <li>• SMS notifications</li>
                    <li>• Cross-border transfers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Individual Provider */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <DollarSign className="h-8 w-8 text-orange-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Individual Liquidity Provider</h3>
                  <p className="text-sm text-foreground-secondary">Independent providers with local market access</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Minimum $10,000 liquidity</li>
                    <li>• Local bank account access</li>
                    <li>• KYC verification completed</li>
                    <li>• Technical integration capability</li>
                    <li>• Compliance with local laws</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Services Provided:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Local currency exchange</li>
                    <li>• Bank transfer execution</li>
                    <li>• Cash pickup services</li>
                    <li>• Regional market expertise</li>
                    <li>• Flexible settlement options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Onboarding Process</h2>
          <div className="space-y-6">
            
            {/* Step 1 */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium mr-4">1</div>
                <div>
                  <h3 className="text-xl font-semibold">Application & KYC</h3>
                  <p className="text-sm text-foreground-secondary">Submit application and complete verification</p>
                </div>
              </div>
              <div className="ml-14 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Required Documents:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Business registration certificate</li>
                      <li>• Financial service license</li>
                      <li>• Audited financial statements</li>
                      <li>• Compliance certifications</li>
                      <li>• Technical architecture documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Verification Process:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Document authenticity check</li>
                      <li>• Regulatory status verification</li>
                      <li>• Financial stability assessment</li>
                      <li>• Technical capability review</li>
                      <li>• Compliance framework audit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium mr-4">2</div>
                <div>
                  <h3 className="text-xl font-semibold">Technical Integration</h3>
                  <p className="text-sm text-foreground-secondary">API integration and testing</p>
                </div>
              </div>
              <div className="ml-14 space-y-4">
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-foreground-secondary">Provider API Endpoint</span>
                    <button className="text-foreground-secondary hover:text-foreground">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <pre className="text-green-400">{`// Provider webhook endpoint
POST /webhooks/nedapay/orders

{
  "order_id": "order_abc123",
  "amount": "234050.00",
  "from_currency": "USDT",
  "to_currency": "TZS",
  "recipient": {
    "name": "John Doe",
    "phone": "+255712345678",
    "method": "mobile_money"
  },
  "expires_at": "2024-01-15T10:35:00Z"
}`}</pre>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-sm font-medium mr-4">3</div>
                <div>
                  <h3 className="text-xl font-semibold">Testing & Certification</h3>
                  <p className="text-sm text-foreground-secondary">Sandbox testing and performance validation</p>
                </div>
              </div>
              <div className="ml-14 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Testing Requirements:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Successful order processing</li>
                      <li>• Error handling validation</li>
                      <li>• Performance benchmarking</li>
                      <li>• Security penetration testing</li>
                      <li>• Compliance verification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Performance Metrics:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• 99.5% uptime requirement</li>
                      <li>• &lt;30 second response time</li>
                      <li>• 95% success rate minimum</li>
                      <li>• 24/7 monitoring capability</li>
                      <li>• Disaster recovery plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-sm font-medium mr-4">4</div>
                <div>
                  <h3 className="text-xl font-semibold">Go Live</h3>
                  <p className="text-sm text-foreground-secondary">Production deployment and monitoring</p>
                </div>
              </div>
              <div className="ml-14 space-y-4">
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <p className="text-sm text-purple-400">
                    <strong>Congratulations!</strong> You're now part of NEDApay's global provider network. 
                    Start receiving orders and earning fees immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Provider API Integration</h2>
          <p className="text-foreground-secondary mb-6">
            Implement these endpoints to receive and process orders from NEDApay's aggregator network.
          </p>

          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Order Processing Endpoint</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground-secondary">POST /process-order</span>
                  <button className="text-foreground-secondary hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-green-400">{`// Expected response format
{
  "accepted": true,
  "estimated_completion": "2024-01-15T10:32:00Z",
  "provider_reference": "prov_ref_123",
  "fee": "1170.25", // Your fee in target currency
  "exchange_rate": "2340.50"
}

// Or if rejected
{
  "accepted": false,
  "reason": "insufficient_liquidity",
  "retry_after": 300 // seconds
}`}</pre>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Status Update Endpoint</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground-secondary">POST /update-status</span>
                  <button className="text-foreground-secondary hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-blue-400">{`// Send status updates to NEDApay
{
  "order_id": "order_abc123",
  "provider_reference": "prov_ref_123",
  "status": "completed", // processing, completed, failed
  "transaction_id": "txn_xyz789",
  "completed_at": "2024-01-15T10:32:15Z",
  "recipient_confirmation": "+255712345678"
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Fee Structure & Earnings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Fee Tiers</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Volume: $0 - $100K</span>
                  <span className="text-sm font-medium text-green-400">0.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Volume: $100K - $1M</span>
                  <span className="text-sm font-medium text-green-400">0.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Volume: $1M - $10M</span>
                  <span className="text-sm font-medium text-green-400">0.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Volume: $10M+</span>
                  <span className="text-sm font-medium text-green-400">0.1%</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Payment Schedule</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• <strong>Settlement:</strong> Real-time via smart contract</li>
                <li>• <strong>Fee Payment:</strong> Instant upon order completion</li>
                <li>• <strong>Currency:</strong> Stablecoins or local currency</li>
                <li>• <strong>Minimum Payout:</strong> $100 equivalent</li>
                <li>• <strong>Reporting:</strong> Real-time dashboard access</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Monitoring & Analytics */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Monitoring & Analytics</h2>
          <div className="p-6 border border-border rounded-lg bg-background-secondary">
            <h3 className="text-lg font-medium mb-4">Provider Dashboard Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-blue-400">Performance Metrics</h4>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• Success rate tracking</li>
                  <li>• Average processing time</li>
                  <li>• Uptime monitoring</li>
                  <li>• Error rate analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-green-400">Financial Analytics</h4>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• Revenue tracking</li>
                  <li>• Volume analytics</li>
                  <li>• Fee optimization</li>
                  <li>• Profit margins</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-orange-400">Operational Tools</h4>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• Liquidity management</li>
                  <li>• Alert configuration</li>
                  <li>• Maintenance scheduling</li>
                  <li>• Support ticketing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support & Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Support & Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Technical Support</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• 24/7 technical support</li>
                <li>• Dedicated integration engineer</li>
                <li>• API documentation and SDKs</li>
                <li>• Testing environment access</li>
                <li>• Regular performance reviews</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Business Development</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Market expansion opportunities</li>
                <li>• Partnership development</li>
                <li>• Regulatory guidance</li>
                <li>• Marketing co-op programs</li>
                <li>• Industry networking events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="mb-12">
          <div className="p-8 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Join NEDApay?</h2>
            <p className="text-foreground-secondary mb-6">
              Start earning fees by providing liquidity to our global omni-channel network
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Apply Now
              </a>
              <a 
                href="#" 
                className="px-6 py-3 border border-border hover:bg-background-secondary rounded-lg font-medium transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
