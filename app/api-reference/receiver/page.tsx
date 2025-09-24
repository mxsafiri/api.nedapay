import Link from 'next/link'
import { Download, List, Eye } from 'lucide-react'

export default function ReceiverAPIPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Receiver APIs</h1>
          <p className="text-foreground-secondary text-lg">
            APIs for businesses and institutions receiving cross-border payments through NEDApay's 
            liquidity pool infrastructure in East African markets.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 p-6 bg-orange-500/10 border border-orange-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-orange-400">Overview</h2>
          <p className="text-orange-300 mb-4">
            Receiver APIs enable businesses, MNOs, and financial institutions to create payment orders 
            for receiving funds, track incoming payments, and manage their receiving operations within 
            the NEDApay ecosystem. These APIs are optimized for East African fiat settlements.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="space-y-1 text-orange-300">
                <li>• Incoming payment management</li>
                <li>• Real-time order tracking</li>
                <li>• Settlement notifications</li>
                <li>• Comprehensive order history</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Settlement Methods:</h4>
              <ul className="space-y-1 text-orange-300">
                <li>• Mobile Money (M-Pesa, Airtel, MTN)</li>
                <li>• Bank Transfers (CRDB, Equity, etc.)</li>
                <li>• Digital Wallet Integration</li>
                <li>• Cash Pickup Networks</li>
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
              href="/api-reference/receiver/create-order"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Download className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-mono">POST</span>
                    <h3 className="text-lg font-semibold">Create Receive Order</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Create a new order to receive cross-border payments in East African fiat currencies
                  </p>
                  <code className="text-sm text-blue-400">/receiver/orders</code>
                </div>
              </div>
            </Link>

            {/* List Orders */}
            <Link 
              href="/api-reference/receiver/list-orders"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <List className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">List Receive Orders</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Retrieve a paginated list of receive orders with filtering and sorting options
                  </p>
                  <code className="text-sm text-blue-400">/receiver/orders</code>
                </div>
              </div>
            </Link>

            {/* Get Order */}
            <Link 
              href="/api-reference/receiver/get-order"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Eye className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Receive Order</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Retrieve detailed information about a specific receive order by ID
                  </p>
                  <code className="text-sm text-blue-400">/receiver/orders/{`{id}`}</code>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Receiver Types */}
        <div className="mt-12 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Receiver Categories</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Businesses</h4>
              <ul className="space-y-1 text-foreground-secondary">
                <li>• E-commerce platforms</li>
                <li>• Service providers</li>
                <li>• Freelancers & contractors</li>
                <li>• Digital marketplaces</li>
              </ul>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium text-green-400 mb-2">Financial Institutions</h4>
              <ul className="space-y-1 text-foreground-secondary">
                <li>• Mobile money operators</li>
                <li>• Commercial banks</li>
                <li>• Microfinance institutions</li>
                <li>• Payment processors</li>
              </ul>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium text-purple-400 mb-2">Organizations</h4>
              <ul className="space-y-1 text-foreground-secondary">
                <li>• NGOs & charities</li>
                <li>• Educational institutions</li>
                <li>• Government agencies</li>
                <li>• International organizations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Settlement Networks */}
        <div className="mt-8 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Supported Settlement Networks</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium mb-3">Tanzania (TZS)</h4>
              <ul className="space-y-2 text-foreground-secondary">
                <li>• <strong>Vodacom M-Pesa:</strong> Mobile money transfers</li>
                <li>• <strong>CRDB Bank:</strong> Direct bank transfers</li>
                <li>• <strong>Equity Bank:</strong> Account deposits</li>
                <li>• <strong>NMB Bank:</strong> Institutional transfers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Kenya & Uganda</h4>
              <ul className="space-y-2 text-foreground-secondary">
                <li>• <strong>Safaricom M-Pesa (KES):</strong> Kenya mobile money</li>
                <li>• <strong>MTN Mobile Money (UGX):</strong> Uganda transfers</li>
                <li>• <strong>Airtel Money:</strong> Multi-country support</li>
                <li>• <strong>Bank Networks:</strong> Traditional banking rails</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-8 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Getting Started as a Receiver</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">1. Account Setup</h4>
              <p className="text-foreground-secondary">
                Complete receiver verification and configure your preferred settlement methods and currencies.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Create Receive Orders</h4>
              <p className="text-foreground-secondary">
                Use the <Link href="/api-reference/receiver/create-order" className="text-blue-400 hover:underline">Create Receive Order</Link> endpoint to set up payment expectations.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Monitor Incoming Payments</h4>
              <p className="text-foreground-secondary">
                Track payment status with <Link href="/api-reference/receiver/list-orders" className="text-blue-400 hover:underline">List Orders</Link> and implement webhook notifications.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">4. Settlement Integration</h4>
              <p className="text-foreground-secondary">
                Integrate with your preferred settlement network (M-Pesa, bank transfers, etc.) for automatic fund receipt.
              </p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium mb-3">Order Management</h4>
              <ul className="space-y-2 text-blue-300">
                <li>• Set clear expiration times for receive orders</li>
                <li>• Provide detailed payment instructions</li>
                <li>• Implement proper order status monitoring</li>
                <li>• Use webhooks for real-time notifications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Settlement Optimization</h4>
              <ul className="space-y-2 text-blue-300">
                <li>• Choose optimal settlement methods for your region</li>
                <li>• Monitor settlement times and success rates</li>
                <li>• Implement fallback settlement options</li>
                <li>• Keep settlement account information updated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
