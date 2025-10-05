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
            NEDApay&apos;s infrastructure leverages stablecoins as the settlement layer for fast, cost-effective cross-border transactions. 
            Partners never need to handle stablecoins directly - we manage all blockchain operations while partners focus on 
            delivering familiar fiat currency services to their customers.
          </p>
          
          <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg mb-6">
            <p className="text-sm text-orange-400 font-medium mb-1">Partner Focus</p>
            <p className="text-sm text-foreground-secondary">
              This page covers technical stablecoin details. For fiat currency delivery options, 
              see <a href="/resources/currencies" className="text-blue-400 hover:underline">Supported Currencies</a>.
            </p>
          </div>
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
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Ethereum</span>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
                      </div>
                      <code className="text-xs bg-code-background px-2 py-1 rounded block break-all">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</code>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Base</span>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Primary</span>
                      </div>
                      <code className="text-xs bg-code-background px-2 py-1 rounded block break-all">0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913</code>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Polygon</span>
                        <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Live</span>
                      </div>
                      <code className="text-xs bg-code-background px-2 py-1 rounded block break-all">0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359</code>
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
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Ethereum</span>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
                      </div>
                      <code className="text-xs bg-code-background px-2 py-1 rounded block break-all">0xdAC17F958D2ee523a2206206994597C13D831ec7</code>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Polygon</span>
                        <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Live</span>
                      </div>
                      <code className="text-xs bg-code-background px-2 py-1 rounded block break-all">0xc2132D05D31c914a87C6611C10748AEb04B58e8F</code>
                    </div>
                    <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                      <p className="text-xs text-orange-400 font-medium mb-1">Base Network</p>
                      <p className="text-xs text-foreground-secondary">USDT is not currently available on Base network</p>
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
            Regional stablecoins provide direct local currency exposure, eliminating USD conversion steps. 
            These are particularly valuable for partners serving African markets with high USD volatility concerns.
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
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Base</span>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Native</span>
                      </div>
                      <div className="text-xs text-foreground-secondary">
                        Contract address available on Base network
                      </div>
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
                  <h4 className="font-medium mb-3">Technical Benefits</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• No USD conversion required</li>
                    <li>• Reduced currency volatility</li>
                    <li>• Direct NGN settlement</li>
                    <li>• Lower partner operational costs</li>
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
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Base</span>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Native</span>
                      </div>
                      <code className="text-xs bg-code-background px-2 py-1 rounded block break-all">0xb755506531786c8ac63b756bab1ac387bacb0c04</code>
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
                  <h4 className="font-medium mb-3">Technical Benefits</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Direct ZAR settlement</li>
                    <li>• Institutional-grade reserves</li>
                    <li>• Regulatory compliance built-in</li>
                    <li>• Enterprise treasury integration</li>
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
                  <td className="p-4 text-sm">USDC, CNGN, ZARP</td>
                  <td className="p-4 text-sm">Primary network, regional stablecoins</td>
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
                  <td className="p-4 text-sm">Lowest fees, high-volume transactions</td>
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
                  <td className="p-4 text-sm">Maximum liquidity, established network</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cross-Reference */}
        <section className="mb-12">
          <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Related Resources</h3>
            <p className="text-foreground-secondary mb-4">
              For complete information about partner integration, explore these related resources:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Fiat Currency Delivery</h4>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li>• <a href="/resources/currencies" className="text-blue-400 hover:underline">Supported Currencies</a> - Fiat delivery options</li>
                  <li>• <a href="/api-reference/rates" className="text-blue-400 hover:underline">Rate APIs</a> - Exchange rate integration</li>
                  <li>• <a href="/quickstart" className="text-blue-400 hover:underline">Partner Quickstart</a> - Integration guide</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Technical Integration</h4>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li>• <a href="/api-reference/introduction" className="text-blue-400 hover:underline">API Documentation</a> - Complete API reference</li>
                  <li>• <a href="/resources/errors" className="text-blue-400 hover:underline">Error Codes</a> - Troubleshooting guide</li>
                  <li>• <a href="/concepts/architecture" className="text-blue-400 hover:underline">Architecture</a> - System overview</li>
                </ul>
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
