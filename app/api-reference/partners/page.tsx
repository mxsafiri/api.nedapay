import Link from 'next/link'
import { Building2, CreditCard, Globe, Shield } from 'lucide-react'

export default function PartnersAPIPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Partner APIs</h1>
          <p className="text-foreground-secondary text-lg">
            Fiat-only APIs for banks, PSPs, and MNOs to integrate global payment capabilities 
            through NEDApay's infrastructure without handling cryptocurrency.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">Partner Integration Model</h2>
          <p className="text-blue-300 mb-4">
            NEDApay serves as the middleware layer between traditional financial institutions and 
            global payment providers. Partners integrate through standard fiat APIs while NEDApay 
            handles all blockchain operations and stablecoin settlements behind the scenes.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Partner Benefits:</h4>
              <ul className="space-y-1 text-blue-300">
                <li>• No cryptocurrency handling required</li>
                <li>• Faster global settlements (2-3 seconds)</li>
                <li>• Lower cross-border fees</li>
                <li>• Standard fiat API integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Target Partners:</h4>
              <ul className="space-y-1 text-blue-300">
                <li>• Commercial Banks (ABSA, Standard Bank)</li>
                <li>• Payment Service Providers</li>
                <li>• Mobile Network Operators</li>
                <li>• Fintech Companies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Available Endpoints</h2>
          
          <div className="grid gap-4">
            {/* Create Payment */}
            <Link 
              href="/api-reference/partners/create-payment"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <CreditCard className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-mono">POST</span>
                    <h3 className="text-lg font-semibold">Create Payment</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Initiate cross-border payments through NEDApay's global provider network
                  </p>
                  <code className="text-sm text-green-400">/partners/payments</code>
                </div>
              </div>
            </Link>

            {/* Get Payment Status */}
            <Link 
              href="/api-reference/partners/payment-status"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Payment Status</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Track payment progress and delivery confirmation in real-time
                  </p>
                  <code className="text-sm text-blue-400">/partners/payments/{id}</code>
                </div>
              </div>
            </Link>

            {/* Get Exchange Rates */}
            <Link 
              href="/api-reference/partners/exchange-rates"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Building2 className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Get Exchange Rates</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Real-time exchange rates for supported currency corridors
                  </p>
                  <code className="text-sm text-blue-400">/partners/rates</code>
                </div>
              </div>
            </Link>

            {/* Account Balance */}
            <Link 
              href="/api-reference/partners/account-balance"
              className="block p-6 border border-border rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-mono">GET</span>
                    <h3 className="text-lg font-semibold">Account Balance</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Check sub-account balance and transaction limits
                  </p>
                  <code className="text-sm text-blue-400">/partners/account/balance</code>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Integration Flow */}
        <div className="mt-12 p-6 bg-background-secondary border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Integration Flow</h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">1</div>
              <div>
                <h4 className="font-medium mb-1">Partner Onboarding</h4>
                <p className="text-foreground-secondary">
                  Complete KYC/AML verification and establish sub-account with NEDApay
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">2</div>
              <div>
                <h4 className="font-medium mb-1">API Integration</h4>
                <p className="text-foreground-secondary">
                  Integrate fiat-only APIs into existing banking/payment systems
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">3</div>
              <div>
                <h4 className="font-medium mb-1">Payment Processing</h4>
                <p className="text-foreground-secondary">
                  Send payments through standard REST APIs - NEDApay handles blockchain operations
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">4</div>
              <div>
                <h4 className="font-medium mb-1">Settlement</h4>
                <p className="text-foreground-secondary">
                  Receive fiat settlement through sub-account - no cryptocurrency involved
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-green-400">Getting Started</h2>
          <p className="text-green-300 mb-4">
            Ready to integrate global payment capabilities into your platform? 
            Contact our partnership team to begin the onboarding process.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/guides/partner-onboarding" 
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Partner Onboarding Guide
            </Link>
            <Link 
              href="/api-reference/authentication" 
              className="px-4 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/10 transition-colors"
            >
              API Authentication
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
