import { Copy, ExternalLink, Shield, Zap, Globe } from 'lucide-react'
import Image from 'next/image'

export default function StablecoinsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Partner Stablecoin Services</h1>
          <p className="text-foreground-secondary">
            Stablecoins available for your customers through NEDApay&apos;s partner infrastructure across multiple blockchain networks.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay&apos;s partner infrastructure supports major stablecoins with Base as our primary network, complemented by Ethereum and Polygon. 
            Partners can offer their customers stablecoin services through familiar channels like mobile money, banking apps, and payment platforms 
            while NEDApay handles all blockchain complexity.
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
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 border border-border">
                    <Image 
                      src="/usdc-logo.svg" 
                      alt="USDC" 
                      width={32} 
                      height={32}
                      className="rounded-full"
                    />
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
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Polygon</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359</code>
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
                    <li>• Partner customer remittances</li>
                    <li>• Cross-border merchant settlements</li>
                    <li>• Corporate treasury services</li>
                    <li>• International wire alternatives</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <a href="https://www.circle.com/usdc" className="flex items-center text-blue-400 hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Circle Website
                </a>
                <a href="https://www.centre.io/usdc-transparency" className="flex items-center text-blue-400 hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Attestation Reports
                </a>
              </div>
            </div>

            {/* USDT */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 border border-border">
                    <Image 
                      src="/usdt-coin.svg" 
                      alt="USDT" 
                      width={32} 
                      height={32}
                      className="rounded-full"
                    />
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
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0xdAC17F958D2ee523a2206206994597C13D831ec7</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0xfde4C96c8593536E31F229EA11f403C6431e46fc</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Polygon</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0xc2132D05D31c914a87C6611C10748AEb04B58e8F</code>
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
                    <li>• High-volume partner transactions</li>
                    <li>• Institutional settlements</li>
                    <li>• Liquidity management</li>
                    <li>• Multi-currency operations</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <a href="https://tether.to/" className="flex items-center text-green-400 hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Tether Website
                </a>
                <a href="https://tether.to/transparency/" className="flex items-center text-green-400 hover:underline">
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
            Partners can offer regional stablecoins to their customers, providing direct local currency exposure for African markets through existing customer channels.
          </p>
          
          <div className="space-y-6">
            
            {/* CNGN */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 border border-border">
                    <Image 
                      src="/cngn-icon.jpeg" 
                      alt="CNGN" 
                      width={32} 
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">cNGN</h3>
                    <p className="text-sm text-foreground-secondary">🇳🇬 Nigerian Naira-pegged stablecoin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Base Native</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <h4 className="font-medium mb-3">Network Support</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">Available on Base</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Features</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• 1:1 NGN peg</li>
                    <li>• SEC Nigeria compliant</li>
                    <li>• Consortium-backed</li>
                    <li>• Institutional reserves</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Use Cases</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Nigerian customer payments</li>
                    <li>• Diaspora remittances to Nigeria</li>
                    <li>• Bank-to-stablecoin services</li>
                    <li>• Mobile money integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ZARP */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 border border-border">
                    <Image 
                      src="/zarp-coin.png" 
                      alt="ZARP" 
                      width={32} 
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">ZARP Stablecoin</h3>
                    <p className="text-sm text-foreground-secondary">🇿🇦 South African Rand-pegged stablecoin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Base Native</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <h4 className="font-medium mb-3">Network Support</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Base</span>
                      <code className="text-xs bg-code-background px-2 py-1 rounded">0xb755506531786c8ac63b756bab1ac387bacb0c04</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Features</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• 1:1 ZAR peg</li>
                    <li>• Old Mutual treasury</li>
                    <li>• Fully audited reserves</li>
                    <li>• Regulatory compliant</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Use Cases</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• South African customer services</li>
                    <li>• Regional trade settlements</li>
                    <li>• Banking product integration</li>
                    <li>• Corporate treasury solutions</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <a href="https://www.zarpstablecoin.com" className="flex items-center text-orange-400 hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  ZARP Website
                </a>
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
                  <td className="p-4 text-sm">USDC, USDT, CNGN, ZARP</td>
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
                <pre className="text-green-400">{`curl -X GET "https://api.nedapay.io/v1/rates?from=USDC&to=NGN&amount=100" \\
  -H "Authorization: Bearer your_api_key"

# Response
{
  "rate": "1650.75",
  "from_currency": "USDC",
  "to_currency": "NGN",
  "amount": "100",
  "total": "165075.00",
  "network": "base",
  "expires_at": "2025-10-03T15:35:00Z"
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
                <pre className="text-blue-400">{`curl -X GET "https://api.nedapay.io/v1/rates/compare?from=USDC&to=ZAR&amount=100" \\
  -H "Authorization: Bearer your_api_key"

# Response
{
  "rates": [
    {
      "network": "base",
      "rate": "18.45",
      "total": "1845.00",
      "fee": "0.01",
      "settlement_time": "3s"
    },
    {
      "network": "polygon",
      "rate": "18.42",
      "total": "1842.00",
      "fee": "0.001",
      "settlement_time": "2s"
    }
  ]
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Security & Compliance</h2>
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
          <h2 className="text-2xl font-semibold mb-6">Stablecoin Roadmap</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-green-500 bg-green-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">2024 - Completed</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
              </div>
              <p className="text-sm text-foreground-secondary">USDC and USDT support on Base, Polygon, and Ethereum networks</p>
            </div>
            
            <div className="p-4 border-l-4 border-green-500 bg-green-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">2025 - Live</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Active</span>
              </div>
              <p className="text-sm text-foreground-secondary">CNGN and ZARP regional stablecoins integrated on Base network</p>
            </div>
            
            <div className="p-4 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Q2 2025 - Planned</span>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Upcoming</span>
              </div>
              <p className="text-sm text-foreground-secondary">Enhanced liquidity pools and cross-chain bridging capabilities</p>
            </div>
            
            <div className="p-4 border-l-4 border-orange-500 bg-orange-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">H2 2025 - Research</span>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Future</span>
              </div>
              <p className="text-sm text-foreground-secondary">Evaluation of additional African regional stablecoins based on market demand</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
