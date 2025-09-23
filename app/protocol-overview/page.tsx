import { ArrowRight, Layers, Network, Shield, Zap } from 'lucide-react'

export default function ProtocolOverviewPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Protocol Overview</h1>
          <p className="text-foreground-secondary">
            Understanding NEDApay&apos;s omni-channel architecture and secondary layer infrastructure for global money movement.
          </p>
        </div>

        {/* Architecture Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Architecture Overview</h2>
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay operates as a secondary layer protocol that creates seamless bridges between stablecoins and traditional payment rails. 
            Our omni-channel approach enables instant conversion and distribution through a global network of Payment Service Providers (PSPs) 
            and Mobile Money/Mobile Network Operators (MMO/MNO).
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Layers className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-medium mb-2">Secondary Layer</h3>
              <p className="text-sm text-foreground-secondary">
                Unified routing infrastructure connecting digital and traditional finance
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Network className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-medium mb-2">Omni-Channel</h3>
              <p className="text-sm text-foreground-secondary">
                Single protocol accessing PSPs, MMOs, MNOs, and banking networks
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Shield className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-medium mb-2">Secure Protocol</h3>
              <p className="text-sm text-foreground-secondary">
                Blockchain-based security with embedded compliance
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Zap className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="font-medium mb-2">Instant Settlement</h3>
              <p className="text-sm text-foreground-secondary">
                Real-time conversion and distribution across global networks
              </p>
            </div>
          </div>
        </section>

        {/* Base Network */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Base as Primary Network</h2>
          <div className="p-6 border border-blue-500/20 rounded-lg bg-blue-500/5">
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              NEDApay leverages Base as our primary blockchain network, providing the optimal balance of cost efficiency, 
              speed, and EVM compatibility for our omni-channel payment infrastructure.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-blue-400">Why Base?</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Ultra-low transaction fees (~$0.01)</li>
                  <li>• Fast 2-3 second settlement times</li>
                  <li>• EVM compatibility for DeFi integration</li>
                  <li>• Built by Coinbase with institutional backing</li>
                  <li>• Growing ecosystem and liquidity</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-green-400">Benefits for NEDApay</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Cost-effective for high-volume transactions</li>
                  <li>• Seamless stablecoin operations</li>
                  <li>• Access to DeFi protocols for liquidity</li>
                  <li>• Developer-friendly environment</li>
                  <li>• Strong security and reliability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Core Components</h2>
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-3">Gateway Smart Contract</h3>
              <p className="text-foreground-secondary mb-4">
                Base-deployed smart contract handling order creation, validation, and settlement coordination across the network.
              </p>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Multi-currency support (TZS, KES, UGX stablecoins)</li>
                <li>• EVM compatibility for DeFi integration</li>
                <li>• Event emission for aggregator monitoring</li>
                <li>• Low-cost transactions on Base network</li>
              </ul>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-3">Aggregator Nodes</h3>
              <p className="text-foreground-secondary mb-4">
                Intelligent routing layer that monitors orders and optimally matches them with available providers.
              </p>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Order monitoring and routing</li>
                <li>• Provider registry and rating system</li>
                <li>• Optimal provider matching algorithms</li>
                <li>• Compliance verification (KYC/AML)</li>
              </ul>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-3">Provider Network</h3>
              <p className="text-foreground-secondary mb-4">
                Global network of PSPs, MMOs, MNOs, banks, and individual liquidity providers enabling local distribution.
              </p>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Mobile money operators (M-Pesa, Tigo Pesa, Airtel Money)</li>
                <li>• Banks and financial institutions</li>
                <li>• Crypto exchanges and OTC desks</li>
                <li>• Individual liquidity providers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transaction Flow */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Transaction Flow</h2>
          <div className="flex items-center justify-between p-6 bg-background-secondary rounded-lg border border-border">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium">1</div>
              <span className="font-medium">Stablecoin/Fiat Input</span>
            </div>
            <ArrowRight className="h-5 w-5 text-foreground-muted" />
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium">2</div>
              <span className="font-medium">Secondary Layer Routing</span>
            </div>
            <ArrowRight className="h-5 w-5 text-foreground-muted" />
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-medium">3</div>
              <span className="font-medium">Local Distribution</span>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="/quickstart"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                Get Started
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Follow our quickstart guide to create your first payment order
              </p>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
            </a>
            
            <a 
              href="/api-reference"
              className="group p-6 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                API Reference
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Explore detailed API documentation and endpoints
              </p>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
