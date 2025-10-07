import Link from 'next/link'
import { Coins, TrendingUp, Server, BarChart3, Zap, Globe } from 'lucide-react'

export default function ProviderAPIPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Provider APIs</h1>
          <p className="text-foreground-secondary text-lg">
            APIs for global settlement providers to receive stablecoin payments from NEDApay 
            and deliver fiat to end recipients through their local networks.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-green-400">Settlement Provider Model</h2>
          <p className="text-green-300 mb-4">
            Provider APIs enable global settlement companies like Thunes, Wise, and Remitly to integrate 
            with NEDApay's routing engine. Providers receive USDC payments on Base network and deliver 
            fiat to recipients through their established local payment networks.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Provider Benefits:</h4>
              <ul className="space-y-1 text-green-300">
                <li>• Instant USDC settlement on Base network</li>
                <li>• Access to NEDApay's partner network</li>
                <li>• Automated order routing and matching</li>
                <li>• Performance-based tier system</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Target Providers:</h4>
              <ul className="space-y-1 text-green-300">
                <li>• Global remittance companies (Thunes, Wise)</li>
                <li>• Regional payment processors</li>
                <li>• Cross-border payment platforms</li>
                <li>• Licensed money transmitters</li>
              </ul>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Available Endpoints</h2>
          
          <div className="grid gap-4">
            {/* List Settlement Orders */}
            <Link 
              href="/api-reference/provider/settlement-orders"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Coins className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">List Settlement Orders</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Retrieve pending settlement orders requiring fiat delivery to recipients
                  </p>
                  <code className="text-sm text-blue-400">/provider/settlement-orders</code>
                </div>
              </div>
            </Link>

            {/* Confirm Settlement */}
            <Link 
              href="/api-reference/provider/confirm-settlement"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-mono">POST</span>
                    <h3 className="text-lg font-semibold">Confirm Settlement</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Confirm successful fiat delivery to recipient and trigger USDC payment
                  </p>
                  <code className="text-sm text-green-400">/provider/settlements/[id]/confirm</code>
                </div>
              </div>
            </Link>

            {/* Provider Rates */}
            <Link 
              href="/api-reference/provider/rates"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-mono">POST</span>
                    <h3 className="text-lg font-semibold">Submit Provider Rates</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Submit competitive rates for currency corridors you can service
                  </p>
                  <code className="text-sm text-green-400">/provider/rates</code>
                </div>
              </div>
            </Link>

            {/* Provider Performance */}
            <Link 
              href="/api-reference/provider/performance"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Performance Metrics</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Track settlement success rates, earnings, and tier progression
                  </p>
                  <code className="text-sm text-blue-400">/provider/performance</code>
                </div>
              </div>
            </Link>

            {/* USDC Wallet */}
            <Link 
              href="/api-reference/provider/usdc-wallet"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">USDC Wallet Status</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Monitor USDC wallet balance and Base network transaction history
                  </p>
                  <code className="text-sm text-blue-400">/provider/usdc-wallet</code>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Provider Tier System */}
        <div className="mt-12 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Provider Tier System</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Bronze Tier</h4>
              <ul className="space-y-1 text-foreground-secondary">
                <li>• 2.5% USDC settlement fee</li>
                <li>• Standard order priority</li>
                <li>• 95%+ success rate required</li>
                <li>• $25K+ monthly volume</li>
              </ul>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium text-green-400 mb-2">Silver Tier</h4>
              <ul className="space-y-1 text-foreground-secondary">
                <li>• 2.0% USDC settlement fee</li>
                <li>• Priority order allocation</li>
                <li>• 97%+ success rate required</li>
                <li>• $100K+ monthly volume</li>
              </ul>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium text-purple-400 mb-2">Gold Tier</h4>
              <ul className="space-y-1 text-foreground-secondary">
                <li>• 1.5% USDC settlement fee</li>
                <li>• Highest order priority</li>
                <li>• 98%+ success rate required</li>
                <li>• $500K+ monthly volume</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Settlement Flow */}
        <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">How Settlement Works</h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">1</div>
              <div>
                <h4 className="font-medium mb-1">Receive Settlement Order</h4>
                <p className="text-blue-300">
                  NEDApay routes payment to your API with recipient details and fiat amount to deliver
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">2</div>
              <div>
                <h4 className="font-medium mb-1">Deliver Fiat to Recipient</h4>
                <p className="text-blue-300">
                  Use your local payment networks (M-Pesa, banks, etc.) to deliver fiat to end recipient
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">3</div>
              <div>
                <h4 className="font-medium mb-1">Confirm Settlement</h4>
                <p className="text-blue-300">
                  Call confirmation API with delivery proof - NEDApay sends USDC to your Base wallet
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">4</div>
              <div>
                <h4 className="font-medium mb-1">Receive USDC Payment</h4>
                <p className="text-blue-300">
                  Instant USDC settlement on Base network - convert to fiat or hold as treasury
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-green-400">Getting Started as a Provider</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">1. Provider Onboarding</h4>
              <p className="text-green-300">
                Complete KYC/AML verification and demonstrate local payment network capabilities
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. USDC Wallet Setup</h4>
              <p className="text-green-300">
                Configure Base network wallet for receiving USDC settlements from NEDApay
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. API Integration</h4>
              <p className="text-green-300">
                Integrate settlement APIs and submit competitive rates for your corridors
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">4. Start Receiving Orders</h4>
              <p className="text-green-300">
                Begin receiving settlement orders based on your rates and performance tier
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
