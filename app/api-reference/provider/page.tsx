import Link from 'next/link'
import { Coins, TrendingUp, Server, BarChart3 } from 'lucide-react'

export default function ProviderAPIPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Provider APIs</h1>
          <p className="text-foreground-secondary text-lg">
            APIs for liquidity providers to manage fiat settlement operations, monitor market rates, 
            and track earnings within NEDApay's liquidity pool ecosystem.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-green-400">Overview</h2>
          <p className="text-green-300 mb-4">
            Provider APIs enable liquidity providers to efficiently manage fiat settlement operations, 
            access real-time market data, and monitor their performance within the NEDApay network. 
            These APIs are designed for MNOs, banks, and fintechs providing liquidity services.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Core Capabilities:</h4>
              <ul className="space-y-1 text-green-300">
                <li>• Fiat settlement management</li>
                <li>• Real-time market rates</li>
                <li>• Performance analytics</li>
                <li>• Network infrastructure monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Settlement Networks:</h4>
              <ul className="space-y-1 text-green-300">
                <li>• Vodacom M-Pesa Tanzania</li>
                <li>• CRDB Bank Tanzania</li>
                <li>• Safaricom M-Pesa Kenya</li>
                <li>• MTN & Airtel Uganda</li>
              </ul>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Available Endpoints</h2>
          
          <div className="grid gap-4">
            {/* List Lock Orders */}
            <Link 
              href="/api-reference/provider/list-lock-orders"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Coins className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">List Lock Orders</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Retrieve payment orders with active liquidity locks requiring fiat settlement
                  </p>
                  <code className="text-sm text-blue-400">/provider/lock-orders</code>
                </div>
              </div>
            </Link>

            {/* Market Rate */}
            <Link 
              href="/api-reference/provider/market-rate"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Market Rate</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Access real-time exchange rates for token-to-fiat conversions with provider-specific pricing
                  </p>
                  <code className="text-sm text-blue-400">/provider/market-rate</code>
                </div>
              </div>
            </Link>

            {/* Provider Stats */}
            <Link 
              href="/api-reference/provider/stats"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Provider Statistics</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Comprehensive analytics on earnings, settlement performance, and tier progression
                  </p>
                  <code className="text-sm text-blue-400">/provider/stats</code>
                </div>
              </div>
            </Link>

            {/* Node Info */}
            <Link 
              href="/api-reference/provider/node-info"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Server className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Node Information</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Real-time information about NEDApay's network infrastructure and Base network status
                  </p>
                  <code className="text-sm text-blue-400">/provider/node-info</code>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Provider Tiers */}
        <div className="mt-12 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Provider Tier System</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Basic Tier</h4>
              <ul className="space-y-1 text-foreground-secondary">
                <li>• Standard settlement fees</li>
                <li>• Basic order priority</li>
                <li>• 95%+ success rate required</li>
                <li>• $10K+ monthly volume</li>
              </ul>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium text-green-400 mb-2">Standard Tier</h4>
              <ul className="space-y-1 text-foreground-secondary">
                <li>• Reduced settlement fees</li>
                <li>• Priority order allocation</li>
                <li>• 97%+ success rate required</li>
                <li>• $25K+ monthly volume</li>
              </ul>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium text-purple-400 mb-2">Premium Tier</h4>
              <ul className="space-y-1 text-foreground-secondary">
                <li>• Lowest settlement fees</li>
                <li>• Highest order priority</li>
                <li>• 98%+ success rate required</li>
                <li>• $50K+ monthly volume</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-8 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Getting Started as a Provider</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">1. Provider Onboarding</h4>
              <p className="text-foreground-secondary">
                Complete the provider verification process and integrate with your settlement infrastructure.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Monitor Lock Orders</h4>
              <p className="text-foreground-secondary">
                Use the <Link href="/api-reference/provider/list-lock-orders" className="text-blue-400 hover:underline">List Lock Orders</Link> endpoint to see pending settlements.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Track Performance</h4>
              <p className="text-foreground-secondary">
                Monitor your earnings and tier progression with the <Link href="/api-reference/provider/stats" className="text-blue-400 hover:underline">Provider Statistics</Link> endpoint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
