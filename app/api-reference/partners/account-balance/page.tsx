import { ApiPlayground } from '@/components/api-playground'
import { Wallet, TrendingUp, AlertTriangle, Shield } from 'lucide-react'

export default function AccountBalancePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Account Balance</h1>
          <p className="text-foreground-secondary">
            Check sub-account balance, transaction limits, and account status for payment processing.
          </p>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/partners/account/balance"
            title="Get Account Balance"
            description="Retrieve current account balance and limits"
            responseExample={{
              "status": "success",
              "data": {
                "account_id": "acc_absa_main_001",
                "partner_name": "ABSA Bank Tanzania",
                "balances": [
                  {
                    "currency": "USD",
                    "available_balance": "45750.00",
                    "pending_balance": "2250.00",
                    "total_balance": "48000.00",
                    "reserved_balance": "1500.00"
                  },
                  {
                    "currency": "EUR",
                    "available_balance": "12300.00",
                    "pending_balance": "700.00",
                    "total_balance": "13000.00",
                    "reserved_balance": "0.00"
                  }
                ],
                "limits": {
                  "daily_send_limit": "100000.00",
                  "daily_sent_today": "15750.00",
                  "daily_remaining": "84250.00",
                  "monthly_limit": "2500000.00",
                  "monthly_sent": "456750.00",
                  "single_transaction_limit": "50000.00"
                },
                "account_status": "active",
                "last_transaction": "2024-01-15T09:45:00Z",
                "next_settlement": "2024-01-16T10:00:00Z",
                "risk_level": "low",
                "updated_at": "2024-01-15T10:00:00Z"
              }
            }}
          />
        </div>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {/* Overview */}
          <section id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-foreground-secondary mb-4">
              The Account Balance endpoint provides comprehensive information about your sub-account 
              with NEDApay, including available balances, pending transactions, limits, and account status. 
              This information is essential for payment processing and account management.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Wallet className="h-4 w-4 mr-2" />
                  Balance Information
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Multi-currency balance tracking</li>
                  <li>• Available vs pending funds</li>
                  <li>• Reserved balance for processing</li>
                  <li>• Real-time balance updates</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Limits & Compliance
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Daily and monthly transaction limits</li>
                  <li>• Single transaction maximums</li>
                  <li>• Risk level monitoring</li>
                  <li>• Compliance status tracking</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Settlement Schedule:</strong> Sub-account balances are settled daily at 10:00 UTC. 
                Ensure sufficient balance for next-day operations or configure auto-funding.
              </p>
            </div>
          </section>

          {/* Balance Types */}
          <section id="balance-types">
            <h2 className="text-2xl font-semibold mb-4">Balance Types</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2">Available Balance</h4>
                <p className="text-sm text-green-300">
                  Funds immediately available for new payment transactions. This excludes pending and reserved amounts.
                </p>
              </div>
              
              <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-lg">
                <h4 className="font-medium text-yellow-400 mb-2">Pending Balance</h4>
                <p className="text-sm text-yellow-300">
                  Funds from recent deposits or refunds that are being processed and will become available soon.
                </p>
              </div>

              <div className="p-4 border border-blue-500/20 bg-blue-500/10 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2">Reserved Balance</h4>
                <p className="text-sm text-blue-300">
                  Funds temporarily held for ongoing payment processing or compliance requirements.
                </p>
              </div>

              <div className="p-4 border border-purple-500/20 bg-purple-500/10 rounded-lg">
                <h4 className="font-medium text-purple-400 mb-2">Total Balance</h4>
                <p className="text-sm text-purple-300">
                  Sum of available, pending, and reserved balances. Represents total funds in your account.
                </p>
              </div>
            </div>
          </section>

          {/* Response Fields */}
          <section id="response-fields">
            <h2 className="text-2xl font-semibold mb-4">Response Fields</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Account Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>account_id</code> - Unique sub-account identifier</li>
                  <li><code>partner_name</code> - Your organization name</li>
                  <li><code>account_status</code> - Account status (active, suspended, restricted)</li>
                  <li><code>risk_level</code> - Current risk assessment (low, medium, high)</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Balance Array</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>currency</code> - Currency code (USD, EUR, GBP)</li>
                  <li><code>available_balance</code> - Immediately usable funds</li>
                  <li><code>pending_balance</code> - Funds being processed</li>
                  <li><code>reserved_balance</code> - Temporarily held funds</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Transaction Limits</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>daily_send_limit</code> - Maximum daily sending amount</li>
                  <li><code>daily_sent_today</code> - Amount already sent today</li>
                  <li><code>monthly_limit</code> - Maximum monthly volume</li>
                  <li><code>single_transaction_limit</code> - Maximum per transaction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Account Status */}
          <section id="account-status">
            <h2 className="text-2xl font-semibold mb-4">Account Status Values</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2">Active</h4>
                <p className="text-sm text-green-300">
                  Account fully operational. All payment functions available.
                </p>
              </div>
              
              <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-lg">
                <h4 className="font-medium text-yellow-400 mb-2">Restricted</h4>
                <p className="text-sm text-yellow-300">
                  Limited functionality. Some corridors or amounts may be blocked.
                </p>
              </div>

              <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg">
                <h4 className="font-medium text-red-400 mb-2">Suspended</h4>
                <p className="text-sm text-red-300">
                  Account temporarily disabled. Contact support for resolution.
                </p>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Responses</h2>
            
            <div className="space-y-6">
              {/* Low Balance Warning */}
              <div>
                <h3 className="text-lg font-medium mb-3">Low Balance Account</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "account_id": "acc_partner_xyz_001",
    "balances": [
      {
        "currency": "USD",
        "available_balance": "150.00",
        "pending_balance": "0.00",
        "total_balance": "150.00",
        "reserved_balance": "0.00"
      }
    ],
    "limits": {
      "daily_send_limit": "10000.00",
      "daily_sent_today": "8500.00",
      "daily_remaining": "1500.00"
    },
    "account_status": "active",
    "warnings": [
      {
        "type": "low_balance",
        "message": "Balance below recommended minimum of $500",
        "severity": "medium"
      },
      {
        "type": "approaching_limit",
        "message": "85% of daily limit used",
        "severity": "high"
      }
    ]
  }
}`}
                </div>
              </div>

              {/* Restricted Account */}
              <div>
                <h3 className="text-lg font-medium mb-3">Restricted Account</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "account_id": "acc_partner_abc_001",
    "account_status": "restricted",
    "restrictions": [
      {
        "type": "corridor_blocked",
        "description": "USD to NGN corridor temporarily unavailable",
        "expires_at": "2024-01-20T10:00:00Z"
      }
    ],
    "balances": [
      {
        "currency": "USD",
        "available_balance": "25000.00",
        "total_balance": "25000.00"
      }
    ],
    "risk_level": "medium",
    "compliance_review_date": "2024-01-18T10:00:00Z"
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Balance Management */}
          <section id="balance-management">
            <h2 className="text-2xl font-semibold mb-4">Balance Management</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-3">Funding Your Account</h4>
                <ul className="text-sm text-blue-300 space-y-2">
                  <li>• Wire transfers to designated bank account</li>
                  <li>• Automated funding based on balance thresholds</li>
                  <li>• Same-day processing for urgent top-ups</li>
                  <li>• Multi-currency funding support</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-3">Balance Monitoring</h4>
                <ul className="text-sm text-green-300 space-y-2">
                  <li>• Real-time balance alerts via webhook</li>
                  <li>• Daily balance reports via email</li>
                  <li>• Low balance warnings before depletion</li>
                  <li>• Limit utilization notifications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Check balance before processing large payments</li>
                  <li>• Set up low balance alerts at 20% of daily volume</li>
                  <li>• Monitor daily limit utilization throughout the day</li>
                  <li>• Maintain buffer for unexpected payment volumes</li>
                  <li>• Configure automated funding for consistent operations</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Avoid</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Running account balance to zero</li>
                  <li>• Ignoring account status changes</li>
                  <li>• Not monitoring reserved balance increases</li>
                  <li>• Attempting payments when limits are exceeded</li>
                  <li>• Overlooking compliance review requirements</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
