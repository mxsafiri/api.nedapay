import { Copy, ExternalLink, Shield, Zap, Globe } from 'lucide-react'

export default function StablecoinsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Supported Stablecoins</h1>
          <p className="text-foreground-secondary">
            Complete list of stablecoins supported by NEDApay&apos;s omni-channel infrastructure across multiple blockchain networks.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay supports a comprehensive range of stablecoins with Base as our primary network, complemented by Ethereum and Polygon. 
            Our multi-chain approach ensures optimal liquidity, cost efficiency, and accessibility for global 
            money movement through our secondary layer infrastructure.
          </p>
        </section>

        {/* Primary Stablecoins */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Primary Stablecoins</h2>
          <div className="space-y-6">
            
            {/* USDC */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4">
                    USDC
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">USD Coin</h3>
                    <p className="text-sm text-foreground-secondary">Circle&apos;s fully-backed USD stablecoin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Primary</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Multi-Chain</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <h4 className="font-medium mb-3">Network Support</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Ethereum</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0xa0b86a33e6...</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0x833589fcd6...</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Polygon</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0x2791Bca1f2...</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Features</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Fully collateralized</li>
                    <li>• Monthly attestations</li>
                    <li>• Regulatory compliant</li>
                    <li>• High liquidity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Use Cases</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Cross-border payments</li>
                    <li>• DeFi integrations</li>
                    <li>• Treasury management</li>
                    <li>• Remittances</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="flex items-center text-blue-400 hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Circle Website
                </a>
                <a href="#" className="flex items-center text-blue-400 hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Attestation Reports
                </a>
              </div>
            </div>

            {/* USDT */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-4">
                    USDT
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Tether USD</h3>
                    <p className="text-sm text-foreground-secondary">World&apos;s largest stablecoin by market cap</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Primary</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Multi-Chain</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <h4 className="font-medium mb-3">Network Support</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Ethereum</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0xdac17f958d...</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0xfde4c96c8593...</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Polygon</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0xc2132D05D3...</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Features</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Largest market cap</li>
                    <li>• High liquidity</li>
                    <li>• Wide adoption</li>
                    <li>• Multiple networks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Use Cases</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Trading pairs</li>
                    <li>• Cross-border transfers</li>
                    <li>• Store of value</li>
                    <li>• Payment settlements</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="flex items-center text-green-400 hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Tether Website
                </a>
                <a href="#" className="flex items-center text-green-400 hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Transparency Reports
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Stablecoins */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Regional Stablecoins</h2>
          <p className="text-foreground-secondary mb-6">
            NEDApay supports regional stablecoins pegged to East African currencies, enabling direct local currency exposure.
          </p>
          
          <div className="space-y-6">
            
            {/* TZS Stablecoin */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-4">
                    TZSC
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">TZS Stablecoin</h3>
                    <p className="text-sm text-foreground-secondary">🇹🇿 Tanzanian Shilling-pegged stablecoin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Regional</span>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Base Native</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <h4 className="font-medium mb-3">Network Support</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0x1234567890...</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Features</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• 1:1 TZS peg</li>
                    <li>• Bank reserves</li>
                    <li>• Local compliance</li>
                    <li>• Fast settlement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Use Cases</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Local payments</li>
                    <li>• Salary disbursements</li>
                    <li>• Merchant settlements</li>
                    <li>• Remittance receiving</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* KES Stablecoin */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold mr-4">
                    KESC
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">KES Stablecoin</h3>
                    <p className="text-sm text-foreground-secondary">🇰🇪 Kenyan Shilling-pegged stablecoin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Regional</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Coming Soon</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <h4 className="font-medium mb-3">Planned Networks</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0x2345678901...</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0x...</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Planned Features</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• 1:1 KES peg</li>
                    <li>• CBK compliance</li>
                    <li>• M-Pesa integration</li>
                    <li>• Multi-chain support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Target Use Cases</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Cross-border trade</li>
                    <li>• Mobile money bridge</li>
                    <li>• DeFi applications</li>
                    <li>• Regional payments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UGX Stablecoin */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-4">
                    UGXC
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">UGX Stablecoin</h3>
                    <p className="text-sm text-foreground-secondary">🇺🇬 Ugandan Shilling-pegged stablecoin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Regional</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Coming Soon</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <h4 className="font-medium mb-3">Planned Networks</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0x3456789012...</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Planned Features</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• 1:1 UGX peg</li>
                    <li>• BoU compliance</li>
                    <li>• MTN Money integration</li>
                    <li>• Banking partnerships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Target Use Cases</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Agricultural payments</li>
                    <li>• Microfinance</li>
                    <li>• Cross-border trade</li>
                    <li>• Digital banking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Network Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead className="bg-background-secondary">
                <tr>
                  <th className="text-left p-4 border-b border-border">Network</th>
                  <th className="text-left p-4 border-b border-border">Settlement Time</th>
                  <th className="text-left p-4 border-b border-border">Transaction Cost</th>
                  <th className="text-left p-4 border-b border-border">Supported Stablecoins</th>
                  <th className="text-left p-4 border-b border-border">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-green-500/5">
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold mr-3">
                        B
                      </div>
                      <span className="font-medium">Base</span>
                      <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Primary</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm">2-3 seconds</td>
                  <td className="p-4 text-sm">~$0.01</td>
                  <td className="p-4 text-sm">USDC, USDT, TZSC, KESC, UGXC</td>
                  <td className="p-4 text-sm">EVM compatibility, low fees, DeFi</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold mr-3">
                        P
                      </div>
                      <span className="font-medium">Polygon</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm">2-3 seconds</td>
                  <td className="p-4 text-sm">~$0.001</td>
                  <td className="p-4 text-sm">USDC, USDT</td>
                  <td className="p-4 text-sm">Ultra-low fees, high throughput</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold mr-3">
                        ETH
                      </div>
                      <span className="font-medium">Ethereum</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm">12-15 seconds</td>
                  <td className="p-4 text-sm">$2-20</td>
                  <td className="p-4 text-sm">USDC, USDT</td>
                  <td className="p-4 text-sm">Maximum liquidity, DeFi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Integration Examples</h2>
          <div className="space-y-6">
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Getting Stablecoin Rates</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground-secondary">GET /rates</span>
                  <button className="text-foreground-secondary hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-green-400">{`curl -X GET "https://api.nedapay.io/v1/rates?from=USDC&to=TZS&amount=100" \\
  -H "Authorization: Bearer your_api_key"

# Response
{
  "rate": "2340.50",
  "from_currency": "USDC",
  "to_currency": "TZS",
  "amount": "100",
  "total": "234050.00",
  "network": "base",
  "expires_at": "2024-01-15T10:35:00Z"
}`}</pre>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Multi-Network Rate Comparison</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground-secondary">GET /rates/compare</span>
                  <button className="text-foreground-secondary hover:text-foreground">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-blue-400">{`curl -X GET "https://api.nedapay.io/v1/rates/compare?from=USDC&to=TZS&amount=100" \\
  -H "Authorization: Bearer your_api_key"

# Response
{
  "rates": [
    {
      "network": "xrpl",
      "rate": "2341.20",
      "total": "234120.00",
      "fee": "0.50",
      "settlement_time": "5s"
    },
    {
      "network": "base",
      "rate": "2340.50",
      "total": "234050.00",
      "fee": "2.30",
      "settlement_time": "3s"
    }
  ]
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibent mb-6">Security & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-lg font-medium">Security Measures</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Multi-signature wallet management</li>
                <li>• Regular security audits</li>
                <li>• Cold storage for reserves</li>
                <li>• Real-time monitoring</li>
                <li>• Insurance coverage</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-lg font-medium">Compliance</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Regulatory compliance in all jurisdictions</li>
                <li>• Regular attestation reports</li>
                <li>• AML/KYC integration</li>
                <li>• Transparent reserve backing</li>
                <li>• Regulatory sandbox participation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibent mb-6">Stablecoin Roadmap</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-green-500 bg-green-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Q1 2024 - Completed</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
              </div>
              <p className="text-sm text-foreground-secondary">USDC and USDT support on Base, Polygon, and Ethereum</p>
            </div>
            
            <div className="p-4 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Q2 2024 - In Progress</span>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Active</span>
              </div>
              <p className="text-sm text-foreground-secondary">TZS Stablecoin launch on Base with banking partnerships</p>
            </div>
            
            <div className="p-4 border-l-4 border-orange-500 bg-orange-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Q3 2024 - Planned</span>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Upcoming</span>
              </div>
              <p className="text-sm text-foreground-secondary">KES Stablecoin with CBK approval and M-Pesa integration</p>
            </div>
            
            <div className="p-4 border-l-4 border-purple-500 bg-purple-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Q4 2024 - Planned</span>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Future</span>
              </div>
              <p className="text-sm text-foreground-secondary">UGX Stablecoin and expansion to additional East African currencies</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
