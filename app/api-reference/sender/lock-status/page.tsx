import { ApiPlayground } from '@/components/api-playground'
import { Lock, Clock, CheckCircle, AlertTriangle, Zap } from 'lucide-react'

export default function GetLockPaymentOrderStatusPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Lock Payment Order Status</h1>
          <p className="text-foreground-secondary">
            Check real-time liquidity lock status and settlement progress for a specific payment order.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#lock-states" className="text-blue-400 hover:underline">Lock States</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/sender/orders/{id}/lock-status"
            title="Get Lock Payment Order Status"
            description="Retrieve detailed liquidity lock status and settlement progress"
            parameters={[
              {
                name: "id",
                type: "path",
                required: true,
                description: "Unique identifier for the payment order",
                example: "550e8400-e29b-41d4-a716-446655440000"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Lock status retrieved successfully",
              "data": {
                "orderId": "550e8400-e29b-41d4-a716-446655440000",
                "lockStatus": "locked",
                "liquidityPool": {
                  "poolId": "base-usdt-pool-001",
                  "network": "base",
                  "token": "USDT",
                  "lockedAmount": "100",
                  "lockExpiry": "2024-01-15T10:15:00Z"
                },
                "settlement": {
                  "status": "processing",
                  "fiatAmount": "260000.00",
                  "currency": "TZS",
                  "estimatedCompletion": "2024-01-15T10:12:00Z",
                  "providerReference": "VDC-TZ-240115-001"
                },
                "timeline": [
                  {
                    "event": "order_created",
                    "timestamp": "2024-01-15T10:00:00Z",
                    "description": "Payment order created"
                  },
                  {
                    "event": "liquidity_locked",
                    "timestamp": "2024-01-15T10:00:15Z",
                    "description": "100 USDT locked from Base pool"
                  },
                  {
                    "event": "settlement_initiated",
                    "timestamp": "2024-01-15T10:00:30Z",
                    "description": "Fiat settlement initiated with Vodacom"
                  }
                ],
                "createdAt": "2024-01-15T10:00:00Z",
                "updatedAt": "2024-01-15T10:00:30Z"
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
              This endpoint provides real-time visibility into the liquidity lock status and settlement 
              progress for payment orders. It's essential for monitoring the flow from liquidity allocation 
              through fiat delivery in NEDApay's pool-based architecture.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Lock className="h-4 w-4 mr-2" />
                  Liquidity Lock Tracking
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Real-time lock status monitoring</li>
                  <li>• Pool allocation details</li>
                  <li>• Lock expiry timestamps</li>
                  <li>• Automatic lock renewal</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  Settlement Progress
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Fiat delivery status</li>
                  <li>• Provider integration tracking</li>
                  <li>• Estimated completion times</li>
                  <li>• Settlement confirmations</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Use Case:</strong> This endpoint is ideal for building real-time dashboards, 
                providing customer support with detailed status information, and implementing automated 
                retry logic based on lock states.
              </p>
            </div>
          </section>

          {/* Parameters */}
          <section id="parameters">
            <h2 className="text-2xl font-semibold mb-4">Path Parameters</h2>
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
                    <td className="p-4 font-mono text-sm">id</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      The unique identifier (UUID) of the payment order to check lock status for
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
              The response provides comprehensive lock status information including liquidity pool details, 
              settlement progress, and a complete timeline of events.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Fields</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Lock Status</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>lockStatus</code> - Current liquidity lock state (pending, locked, released, expired)</li>
                  <li><code>liquidityPool</code> - Details about the allocated pool and locked amount</li>
                  <li><code>lockExpiry</code> - When the liquidity lock will automatically expire</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Settlement Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>settlement.status</code> - Fiat delivery progress (pending, processing, completed, failed)</li>
                  <li><code>estimatedCompletion</code> - Expected fiat delivery time</li>
                  <li><code>providerReference</code> - Partner system reference for tracking</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Event Timeline</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>timeline</code> - Chronological list of order events</li>
                  <li><code>event</code> - Event type (order_created, liquidity_locked, settlement_initiated, etc.)</li>
                  <li><code>timestamp</code> - When each event occurred</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lock States */}
          <section id="lock-states">
            <h2 className="text-2xl font-semibold mb-4">Lock States & Settlement Status</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Liquidity Lock States</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-400" />
                    <div>
                      <span className="font-medium">pending</span>
                      <p className="text-xs text-foreground-secondary">Searching for available liquidity</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <Lock className="h-5 w-5 text-blue-400" />
                    <div>
                      <span className="font-medium">locked</span>
                      <p className="text-xs text-foreground-secondary">Liquidity reserved from pool</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <div>
                      <span className="font-medium">released</span>
                      <p className="text-xs text-foreground-secondary">Liquidity transferred, settlement complete</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <div>
                      <span className="font-medium">expired</span>
                      <p className="text-xs text-foreground-secondary">Lock expired, liquidity returned to pool</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Settlement Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="font-medium">pending</span>
                      <p className="text-xs text-foreground-secondary">Awaiting fiat delivery initiation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <Zap className="h-5 w-5 text-orange-400" />
                    <div>
                      <span className="font-medium">processing</span>
                      <p className="text-xs text-foreground-secondary">Fiat delivery in progress</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <div>
                      <span className="font-medium">completed</span>
                      <p className="text-xs text-foreground-secondary">Fiat successfully delivered</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <div>
                      <span className="font-medium">failed</span>
                      <p className="text-xs text-foreground-secondary">Settlement failed, funds returned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Responses</h2>
            
            <div className="space-y-6">
              {/* Active Lock */}
              <div>
                <h3 className="text-lg font-medium mb-3">Active Lock - Processing Settlement</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "orderId": "550e8400-e29b-41d4-a716-446655440000",
    "lockStatus": "locked",
    "liquidityPool": {
      "poolId": "base-usdt-pool-001",
      "network": "base",
      "token": "USDT",
      "lockedAmount": "100",
      "lockExpiry": "2024-01-15T10:15:00Z"
    },
    "settlement": {
      "status": "processing",
      "fiatAmount": "260000.00",
      "currency": "TZS",
      "estimatedCompletion": "2024-01-15T10:12:00Z",
      "providerReference": "VDC-TZ-240115-001"
    }
  }
}`}
                </div>
              </div>

              {/* Completed Settlement */}
              <div>
                <h3 className="text-lg font-medium mb-3">Completed Settlement - Lock Released</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "orderId": "550e8400-e29b-41d4-a716-446655440001",
    "lockStatus": "released",
    "liquidityPool": {
      "poolId": "base-usdt-pool-001",
      "network": "base",
      "token": "USDT",
      "lockedAmount": "50",
      "lockExpiry": null
    },
    "settlement": {
      "status": "completed",
      "fiatAmount": "130000.00",
      "currency": "TZS",
      "completedAt": "2024-01-15T09:45:30Z",
      "providerReference": "VDC-TZ-240115-002"
    }
  }
}`}
                </div>
              </div>

              {/* Failed Settlement */}
              <div>
                <h3 className="text-lg font-medium mb-3">Failed Settlement - Lock Expired</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "orderId": "550e8400-e29b-41d4-a716-446655440002",
    "lockStatus": "expired",
    "liquidityPool": {
      "poolId": "base-usdt-pool-001",
      "network": "base",
      "token": "USDT",
      "lockedAmount": "75",
      "lockExpiry": "2024-01-15T09:15:00Z"
    },
    "settlement": {
      "status": "failed",
      "fiatAmount": "195000.00",
      "currency": "TZS",
      "failureReason": "Recipient account validation failed",
      "failedAt": "2024-01-15T09:10:00Z"
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Monitoring Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Poll this endpoint every 10-30 seconds for active orders</li>
                  <li>• Set up alerts for lock expiry warnings (5 minutes before)</li>
                  <li>• Monitor settlement status for customer notifications</li>
                  <li>• Use timeline events for detailed audit trails</li>
                  <li>• Implement retry logic for failed settlements</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">❌ Avoid</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Don't poll completed orders unnecessarily</li>
                  <li>• Don't ignore lock expiry timestamps</li>
                  <li>• Don't assume settlement will complete before lock expiry</li>
                  <li>• Don't poll more frequently than every 5 seconds</li>
                  <li>• Don't skip error handling for network issues</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
