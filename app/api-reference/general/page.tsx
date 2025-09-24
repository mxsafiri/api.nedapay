import Link from 'next/link'
import { Globe, Building2, Coins, TrendingUp, Key, Shield, RefreshCw } from 'lucide-react'

export default function GeneralAPIPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">General APIs</h1>
          <p className="text-foreground-secondary text-lg">
            Public and utility APIs providing essential information about NEDApay's supported currencies, 
            institutions, tokens, rates, and system utilities for all platform users.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 p-6 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-purple-400">Overview</h2>
          <p className="text-purple-300 mb-4">
            General APIs provide foundational information and utilities that support all NEDApay operations. 
            These endpoints offer market data, system configuration, verification services, and administrative 
            tools essential for both senders and providers.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Information Services:</h4>
              <ul className="space-y-1 text-purple-300">
                <li>• Market data and rates</li>
                <li>• Supported currencies & institutions</li>
                <li>• Token and network information</li>
                <li>• System configuration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Utility Services:</h4>
              <ul className="space-y-1 text-purple-300">
                <li>• Account verification</li>
                <li>• Transaction reindexing</li>
                <li>• Cryptographic keys</li>
                <li>• System monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Available Endpoints</h2>
          
          <div className="grid gap-4">
            {/* Currencies */}
            <Link 
              href="/api-reference/general/currencies"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">List Supported Currencies</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Get all fiat currencies supported by NEDApay with operational limits and status
                  </p>
                  <code className="text-sm text-blue-400">/general/currencies</code>
                </div>
              </div>
            </Link>

            {/* Institutions */}
            <Link 
              href="/api-reference/general/institutions"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">List Supported Institutions</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Get all financial institutions integrated with NEDApay for fiat settlement
                  </p>
                  <code className="text-sm text-blue-400">/general/institutions</code>
                </div>
              </div>
            </Link>

            {/* Tokens */}
            <Link 
              href="/api-reference/general/tokens"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Coins className="h-6 w-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">List Supported Tokens</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Get all stablecoins and tokens supported by NEDApay's liquidity pools
                  </p>
                  <code className="text-sm text-blue-400">/general/tokens</code>
                </div>
              </div>
            </Link>

            {/* Token Rate */}
            <Link 
              href="/api-reference/general/token-rate"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Token Rate</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Get real-time exchange rates for token-to-fiat conversions
                  </p>
                  <code className="text-sm text-blue-400">/general/token-rate</code>
                </div>
              </div>
            </Link>

            {/* Public Key */}
            <Link 
              href="/api-reference/general/public-key"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Key className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Public Key</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Retrieve NEDApay's public cryptographic keys for signature verification
                  </p>
                  <code className="text-sm text-blue-400">/general/public-key</code>
                </div>
              </div>
            </Link>

            {/* Verify Account */}
            <Link 
              href="/api-reference/general/verify-account"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-mono">POST</span>
                    <h3 className="text-lg font-semibold">Verify Account</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Validate recipient account details before processing payments
                  </p>
                  <code className="text-sm text-blue-400">/general/verify-account</code>
                </div>
              </div>
            </Link>

            {/* Reindex Transaction */}
            <Link 
              href="/api-reference/general/reindex-transaction"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Reindex Transaction</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Force reindexing of blockchain transactions to update order status
                  </p>
                  <code className="text-sm text-blue-400">/general/reindex-transaction</code>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-12 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium mb-3">Integration & Setup</h4>
              <ul className="space-y-2 text-foreground-secondary">
                <li>• Discover supported currencies and institutions</li>
                <li>• Get current token and network information</li>
                <li>• Retrieve public keys for webhook verification</li>
                <li>• Check real-time exchange rates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Operations & Maintenance</h4>
              <ul className="space-y-2 text-foreground-secondary">
                <li>• Verify recipient accounts before payments</li>
                <li>• Resolve stuck transactions with reindexing</li>
                <li>• Monitor system status and availability</li>
                <li>• Troubleshoot synchronization issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-8 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">1. Explore Market Data</h4>
              <p className="text-foreground-secondary">
                Start with <Link href="/api-reference/general/currencies" className="text-blue-400 hover:underline">Currencies</Link> and <Link href="/api-reference/general/institutions" className="text-blue-400 hover:underline">Institutions</Link> to understand available markets.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Check Token Support</h4>
              <p className="text-foreground-secondary">
                Use <Link href="/api-reference/general/tokens" className="text-blue-400 hover:underline">Tokens</Link> and <Link href="/api-reference/general/token-rate" className="text-blue-400 hover:underline">Token Rate</Link> to get current pricing and availability.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Implement Verification</h4>
              <p className="text-foreground-secondary">
                Use <Link href="/api-reference/general/verify-account" className="text-blue-400 hover:underline">Account Verification</Link> to improve payment success rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
