import Link from 'next/link'
import { Send, List, Eye, Lock, BarChart3 } from 'lucide-react'

export default function SenderAPIPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Sender APIs</h1>
          <p className="text-foreground-secondary text-lg">
            APIs for Payment Service Providers (PSPs) and businesses to initiate cross-border payments 
            through NEDApay's liquidity pool infrastructure.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">Overview</h2>
          <p className="text-blue-300 mb-4">
            Sender APIs enable PSPs to create payment orders, track their status, monitor liquidity locks, 
            and access comprehensive analytics. These APIs are designed for businesses sending money from 
            stablecoins to East African fiat currencies.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="space-y-1 text-blue-300">
                <li>• Stablecoin to fiat conversion</li>
                <li>• Real-time order tracking</li>
                <li>• Liquidity pool monitoring</li>
                <li>• Comprehensive analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Supported Markets:</h4>
              <ul className="space-y-1 text-blue-300">
                <li>• Tanzania (TZS) - Vodacom M-Pesa, CRDB</li>
                <li>• Kenya (KES) - Safaricom M-Pesa</li>
                <li>• Uganda (UGX) - MTN, Airtel</li>
              </ul>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Available Endpoints</h2>
          
          <div className="grid gap-4">
            {/* Create Order */}
            <Link 
              href="/api-reference/sender/create-order"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Send className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-mono">POST</span>
                    <h3 className="text-lg font-semibold">Create Payment Order</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Initiate a new cross-border payment from stablecoins to East African fiat currencies
                  </p>
                  <code className="text-sm text-blue-400">/sender/orders</code>
                </div>
              </div>
            </Link>

            {/* List Orders */}
            <Link 
              href="/api-reference/sender/list-orders"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <List className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">List Payment Orders</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Retrieve a paginated list of payment orders with filtering and sorting options
                  </p>
                  <code className="text-sm text-blue-400">/sender/orders</code>
                </div>
              </div>
            </Link>

            {/* Get Order */}
            <Link 
              href="/api-reference/sender/get-order"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Eye className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Payment Order</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Retrieve detailed information about a specific payment order by ID
                  </p>
                  <code className="text-sm text-blue-400">/sender/orders/{`{id}`}</code>
                </div>
              </div>
            </Link>

            {/* Lock Status */}
            <Link 
              href="/api-reference/sender/lock-status"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Lock className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Lock Status</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Monitor real-time liquidity lock status and settlement progress for payment orders
                  </p>
                  <code className="text-sm text-blue-400">/sender/orders/{`{id}`}/lock-status</code>
                </div>
              </div>
            </Link>

            {/* Stats */}
            <Link 
              href="/api-reference/sender/stats"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Sender Statistics</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Access comprehensive analytics including volume metrics, success rates, and performance trends
                  </p>
                  <code className="text-sm text-blue-400">/sender/stats</code>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-12 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">1. Authentication</h4>
              <p className="text-foreground-secondary">
                All Sender API requests require authentication. See the <Link href="/api-reference/authentication" className="text-blue-400 hover:underline">Authentication</Link> section for details.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Create Your First Order</h4>
              <p className="text-foreground-secondary">
                Start with the <Link href="/api-reference/sender/create-order" className="text-blue-400 hover:underline">Create Payment Order</Link> endpoint to initiate your first cross-border payment.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Monitor Progress</h4>
              <p className="text-foreground-secondary">
                Use the <Link href="/api-reference/sender/lock-status" className="text-blue-400 hover:underline">Lock Status</Link> endpoint to track real-time settlement progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
