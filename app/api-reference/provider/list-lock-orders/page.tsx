import { ApiPlayground } from '@/components/api-playground'
import { Lock, Clock, CheckCircle, AlertTriangle, Filter, TrendingUp } from 'lucide-react'

export default function ListLockPaymentOrdersPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">List Lock Payment Orders</h1>
          <p className="text-foreground-secondary">
            Retrieve all payment orders with active or recent liquidity locks that require provider attention for fiat settlement.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Query Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#lock-states" className="text-blue-400 hover:underline">Lock States</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/provider/lock-orders"
            title="List Lock Payment Orders"
            description="Retrieve payment orders requiring fiat settlement by liquidity providers"
            parameters={[
              {
                name: "status",
                type: "query",
                required: false,
                description: "Filter by lock status (locked, processing, expiring)",
                example: "locked"
              },
              {
                name: "currency",
                type: "query",
                required: false,
                description: "Filter by destination currency (TZS, KES, UGX)",
                example: "TZS"
              },
              {
                name: "limit",
                type: "query",
                required: false,
                description: "Number of orders to return (1-100, default: 20)",
                example: "50"
              },
              {
                name: "priority",
                type: "query",
                required: false,
                description: "Filter by urgency (high, normal, low)",
                example: "high"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Lock orders retrieved successfully",
              "data": {
                "orders": [
                  {
                    "orderId": "550e8400-e29b-41d4-a716-446655440000",
                    "lockStatus": "locked",
                    "priority": "high",
                    "liquidityLock": {
                      "poolId": "base-usdt-pool-001",
                      "token": "USDT",
                      "lockedAmount": "100.00",
                      "lockExpiry": "2024-01-15T10:15:00Z",
                      "timeRemaining": "12m 30s"
                    },
                    "settlement": {
                      "currency": "TZS",
                      "fiatAmount": "260000.00",
                      "recipient": {
                        "institution": "VODACOM",
                        "accountIdentifier": "255744123456",
                        "accountName": "John Doe"
                      },
                      "memo": "Payment for services"
                    },
                    "fees": {
                      "providerFee": "2.50",
                      "networkFee": "0.50"
                    },
                    "createdAt": "2024-01-15T10:00:00Z",
                    "assignedAt": "2024-01-15T10:00:15Z"
                  }
                ],
                "summary": {
                  "totalOrders": 45,
                  "totalLiquidity": "12750.00",
                  "averageTimeRemaining": "8m 45s",
                  "urgentOrders": 3
                },
                "pagination": {
                  "limit": 20,
                  "offset": 0,
                  "hasMore": true
                }
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
              This endpoint provides liquidity providers with a real-time view of payment orders that have 
              allocated liquidity and require fiat settlement. It's the primary interface for providers to 
              monitor their settlement queue and prioritize urgent orders.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Lock className="h-4 w-4 mr-2" />
                  Liquidity Management
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Active liquidity locks from Base pools</li>
                  <li>• Lock expiry monitoring and alerts</li>
                  <li>• Priority-based order queuing</li>
                  <li>• Automatic lock renewal for processing orders</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Settlement Operations
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Fiat delivery requirements and details</li>
                  <li>• Recipient information and validation</li>
                  <li>• Fee structure and provider earnings</li>
                  <li>• Settlement status tracking</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Provider Role:</strong> As a liquidity provider, you earn fees by completing fiat settlements 
                for locked stablecoin orders. This endpoint helps you manage your settlement queue efficiently 
                and maximize earnings while maintaining high service levels.
              </p>
            </div>
          </section>

          {/* Parameters */}
          <section id="parameters">
            <h2 className="text-2xl font-semibold mb-4">Query Parameters</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="border-b border-border bg-background-secondary">
                    <th className="text-left p-4 font-medium">Parameter</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Required</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">status</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by lock status: locked, processing, expiring
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">currency</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by destination currency (TZS, KES, UGX)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">priority</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by urgency: high (&lt; 5min), normal (5-10min), low (&gt; 10min)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">limit</td>
                    <td className="p-4 text-sm">integer</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Number of orders to return (1-100, default: 20)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">offset</td>
                    <td className="p-4 text-sm">integer</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Number of orders to skip for pagination (default: 0)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Response Format */}
          <section id="response">
            <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
            <p className="text-foreground-secondary mb-4">
              Returns a prioritized list of payment orders with active liquidity locks, including all 
              information needed for fiat settlement operations.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Order Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>orderId</code> - Unique payment order identifier</li>
                  <li><code>lockStatus</code> - Current liquidity lock state</li>
                  <li><code>priority</code> - Urgency level based on time remaining</li>
                  <li><code>assignedAt</code> - When order was assigned to provider</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Liquidity Lock Details</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>poolId</code> - Source liquidity pool identifier</li>
                  <li><code>lockedAmount</code> - Stablecoin amount reserved</li>
                  <li><code>lockExpiry</code> - When lock will automatically expire</li>
                  <li><code>timeRemaining</code> - Human-readable time until expiry</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Settlement Requirements</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>fiatAmount</code> - Exact amount to deliver in local currency</li>
                  <li><code>recipient</code> - Complete destination details for fiat transfer</li>
                  <li><code>providerFee</code> - Earnings for completing this settlement</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lock States */}
          <section id="lock-states">
            <h2 className="text-2xl font-semibold mb-4">Lock States & Priority Levels</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Lock Status Values</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <Lock className="h-5 w-5 text-blue-400" />
                    <div>
                      <span className="font-medium">locked</span>
                      <p className="text-xs text-foreground-secondary">Liquidity reserved, ready for settlement</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <Clock className="h-5 w-5 text-orange-400" />
                    <div>
                      <span className="font-medium">processing</span>
                      <p className="text-xs text-foreground-secondary">Settlement in progress by provider</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <div>
                      <span className="font-medium">expiring</span>
                      <p className="text-xs text-foreground-secondary">Lock expires in &lt; 5 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Priority Levels</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-red-500/20 bg-red-500/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <div>
                      <span className="font-medium text-red-400">high</span>
                      <p className="text-xs text-red-300">&lt; 5 minutes remaining</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-yellow-500/20 bg-yellow-500/10 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-400" />
                    <div>
                      <span className="font-medium text-yellow-400">normal</span>
                      <p className="text-xs text-yellow-300">5-10 minutes remaining</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-green-500/20 bg-green-500/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <div>
                      <span className="font-medium text-green-400">low</span>
                      <p className="text-xs text-green-300">&gt; 10 minutes remaining</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* Urgent Orders */}
              <div>
                <h3 className="text-lg font-medium mb-3">Get Urgent Orders (High Priority)</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/lock-orders?priority=high&limit=10
                </div>
              </div>

              {/* Currency Specific */}
              <div>
                <h3 className="text-lg font-medium mb-3">Tanzania Orders Only</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/lock-orders?currency=TZS&status=locked
                </div>
              </div>

              {/* Processing Queue */}
              <div>
                <h3 className="text-lg font-medium mb-3">Current Processing Queue</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/lock-orders?status=processing&limit=50
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Urgent Order</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "orders": [
      {
        "orderId": "550e8400-e29b-41d4-a716-446655440000",
        "lockStatus": "locked",
        "priority": "high",
        "liquidityLock": {
          "poolId": "base-usdt-pool-001",
          "token": "USDT",
          "lockedAmount": "100.00",
          "lockExpiry": "2024-01-15T10:15:00Z",
          "timeRemaining": "3m 45s"
        },
        "settlement": {
          "currency": "TZS",
          "fiatAmount": "260000.00",
          "recipient": {
            "institution": "VODACOM",
            "accountIdentifier": "255744123456",
            "accountName": "John Doe"
          }
        },
        "fees": {
          "providerFee": "2.50",
          "networkFee": "0.50"
        }
      }
    ],
    "summary": {
      "totalOrders": 1,
      "urgentOrders": 1
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Provider Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended Workflow</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Poll every 30 seconds for new high-priority orders</li>
                  <li>• Process urgent orders (&lt; 5min) immediately</li>
                  <li>• Batch process normal priority orders for efficiency</li>
                  <li>• Set up alerts for expiring locks</li>
                  <li>• Maintain 95%+ settlement success rate</li>
                  <li>• Update order status promptly after settlement</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Critical Warnings</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Never let high-priority orders expire</li>
                  <li>• Validate recipient details before settlement</li>
                  <li>• Don't process orders without confirming lock status</li>
                  <li>• Monitor network connectivity for real-time updates</li>
                  <li>• Ensure sufficient fiat liquidity before accepting orders</li>
                  <li>• Report settlement failures immediately</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
