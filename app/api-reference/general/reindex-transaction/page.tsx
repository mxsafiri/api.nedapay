import { ApiPlayground } from '@/components/api-playground'
import { RefreshCw, Search, Database, Clock, CheckCircle, AlertTriangle, Zap } from 'lucide-react'

export default function ReindexTransactionPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Reindex Transaction</h1>
          <p className="text-foreground-secondary">
            Force reindexing of blockchain transactions to update order status and resolve synchronization issues with NEDApay's monitoring systems.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#use-cases" className="text-blue-400 hover:underline">Use Cases</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/general/reindex-transaction"
            title="Reindex Transaction"
            description="Force reindexing of blockchain transactions for order status updates"
            parameters={[
              {
                name: "transaction_hash",
                type: "query",
                required: false,
                description: "Specific transaction hash to reindex",
                example: "0x1234567890abcdef1234567890abcdef12345678"
              },
              {
                name: "order_id",
                type: "query",
                required: false,
                description: "NEDApay order ID to reindex associated transactions",
                example: "550e8400-e29b-41d4-a716-446655440000"
              },
              {
                name: "network",
                type: "query",
                required: false,
                description: "Blockchain network to scan (base, ethereum)",
                example: "base"
              },
              {
                name: "block_range",
                type: "query",
                required: false,
                description: "Block range to scan (format: start-end)",
                example: "8945000-8945100"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Transaction reindexing initiated successfully",
              "data": {
                "reindexId": "reindex_550e8400e29b41d4a716446655440000",
                "status": "processing",
                "request": {
                  "transactionHash": "0x1234567890abcdef1234567890abcdef12345678",
                  "orderId": "550e8400-e29b-41d4-a716-446655440000",
                  "network": "base",
                  "requestedAt": "2024-01-15T10:00:00Z"
                },
                "progress": {
                  "stage": "blockchain_scan",
                  "percentage": 25,
                  "estimatedCompletion": "2024-01-15T10:02:00Z",
                  "blocksScanned": 25,
                  "totalBlocks": 100
                },
                "results": {
                  "transactionsFound": 1,
                  "ordersUpdated": 0,
                  "statusChanges": [],
                  "errors": []
                },
                "blockchain": {
                  "network": "base",
                  "chainId": 8453,
                  "currentBlock": 8945672,
                  "scanRange": {
                    "startBlock": 8945000,
                    "endBlock": 8945100
                  }
                },
                "monitoring": {
                  "statusUrl": "/general/reindex-transaction/550e8400e29b41d4a716446655440000",
                  "webhookUrl": "https://your-domain.com/webhooks/reindex-status",
                  "pollInterval": "5s"
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
              The reindex transaction endpoint forces NEDApay's blockchain monitoring systems to rescan 
              and reprocess transactions. This is useful for resolving synchronization issues, updating 
              stuck order statuses, and ensuring accurate transaction tracking across the platform.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Synchronization Recovery
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Resolve stuck order statuses</li>
                  <li>• Update missing transaction confirmations</li>
                  <li>• Sync blockchain state with NEDApay records</li>
                  <li>• Recover from network interruptions</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Database className="h-4 w-4 mr-2" />
                  Blockchain Monitoring
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Multi-network transaction scanning</li>
                  <li>• Real-time status updates</li>
                  <li>• Comprehensive error reporting</li>
                  <li>• Webhook notifications for completion</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>When to Use:</strong> Reindexing should be used when orders appear stuck, 
                transaction confirmations are missing, or when blockchain monitoring systems may 
                have missed events due to network issues or high congestion.
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
                    <td className="p-4 font-mono text-sm">transaction_hash</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Specific blockchain transaction hash to reindex
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">order_id</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      NEDApay order ID to reindex all associated transactions
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">network</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Blockchain network to scan (base, ethereum, polygon)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">block_range</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Block range to scan (format: start-end, max 1000 blocks)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">priority</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Processing priority (low, normal, high) - default: normal
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
              Returns reindexing job information including progress tracking, results summary, 
              and monitoring endpoints for real-time status updates.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Job Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>reindexId</code> - Unique identifier for the reindexing job</li>
                  <li><code>status</code> - Current job status (queued, processing, completed, failed)</li>
                  <li><code>stage</code> - Current processing stage</li>
                  <li><code>estimatedCompletion</code> - Expected completion time</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Progress Tracking</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>percentage</code> - Completion percentage (0-100)</li>
                  <li><code>blocksScanned</code> - Number of blocks processed</li>
                  <li><code>totalBlocks</code> - Total blocks in scan range</li>
                  <li><code>transactionsFound</code> - Relevant transactions discovered</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Results & Monitoring</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>ordersUpdated</code> - Number of orders with status changes</li>
                  <li><code>statusChanges</code> - Array of specific status updates</li>
                  <li><code>statusUrl</code> - Endpoint for polling job status</li>
                  <li><code>webhookUrl</code> - URL for completion notifications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section id="use-cases">
            <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border border-blue-500/20 bg-blue-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-blue-400 mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Stuck Order Recovery
                </h3>
                <ul className="text-sm text-blue-300 space-y-2">
                  <li>• <strong>Scenario:</strong> Order shows "processing" for hours</li>
                  <li>• <strong>Cause:</strong> Missed blockchain confirmation</li>
                  <li>• <strong>Solution:</strong> Reindex by order ID</li>
                  <li>• <strong>Expected Result:</strong> Status updates to "completed"</li>
                </ul>
              </div>

              <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-green-400 mb-3 flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Missing Transaction
                </h3>
                <ul className="text-sm text-green-300 space-y-2">
                  <li>• <strong>Scenario:</strong> Transaction exists on blockchain but not in NEDApay</li>
                  <li>• <strong>Cause:</strong> Network interruption during monitoring</li>
                  <li>• <strong>Solution:</strong> Reindex by transaction hash</li>
                  <li>• <strong>Expected Result:</strong> Transaction appears in system</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border border-purple-500/20 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-purple-400 mb-3 flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Network Congestion Recovery
                </h3>
                <ul className="text-sm text-purple-300 space-y-2">
                  <li>• <strong>Scenario:</strong> Multiple orders affected during high network load</li>
                  <li>• <strong>Cause:</strong> RPC timeouts and missed events</li>
                  <li>• <strong>Solution:</strong> Reindex block range</li>
                  <li>• <strong>Expected Result:</strong> Batch status synchronization</li>
                </ul>
              </div>

              <div className="p-4 border border-orange-500/20 bg-orange-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-orange-400 mb-3 flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Emergency Resync
                </h3>
                <ul className="text-sm text-orange-300 space-y-2">
                  <li>• <strong>Scenario:</strong> System maintenance or upgrade recovery</li>
                  <li>• <strong>Cause:</strong> Extended downtime or data inconsistency</li>
                  <li>• <strong>Solution:</strong> Comprehensive network reindex</li>
                  <li>• <strong>Expected Result:</strong> Full system synchronization</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Reindexing Stages</h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium">queued:</span>
                  <p className="text-blue-300">Job waiting in processing queue</p>
                </div>
                <div>
                  <span className="font-medium">blockchain_scan:</span>
                  <p className="text-blue-300">Scanning blockchain for transactions</p>
                </div>
                <div>
                  <span className="font-medium">data_processing:</span>
                  <p className="text-blue-300">Processing found transactions</p>
                </div>
                <div>
                  <span className="font-medium">status_update:</span>
                  <p className="text-blue-300">Updating order statuses</p>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* Reindex by Order ID */}
              <div>
                <h3 className="text-lg font-medium mb-3">Reindex Specific Order</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/reindex-transaction?order_id=550e8400-e29b-41d4-a716-446655440000
                </div>
              </div>

              {/* Reindex by Transaction Hash */}
              <div>
                <h3 className="text-lg font-medium mb-3">Reindex Specific Transaction</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/reindex-transaction?transaction_hash=0x1234567890abcdef1234567890abcdef12345678&network=base
                </div>
              </div>

              {/* Reindex Block Range */}
              <div>
                <h3 className="text-lg font-medium mb-3">Reindex Block Range (High Priority)</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/reindex-transaction?network=base&block_range=8945000-8945100&priority=high
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Processing Job</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "reindexId": "reindex_550e8400e29b41d4a716446655440000",
    "status": "processing",
    "progress": {
      "stage": "blockchain_scan",
      "percentage": 45,
      "estimatedCompletion": "2024-01-15T10:01:30Z",
      "blocksScanned": 45,
      "totalBlocks": 100
    },
    "results": {
      "transactionsFound": 3,
      "ordersUpdated": 1,
      "statusChanges": [
        {
          "orderId": "550e8400-e29b-41d4-a716-446655440000",
          "oldStatus": "processing",
          "newStatus": "completed",
          "updatedAt": "2024-01-15T10:01:15Z"
        }
      ]
    },
    "monitoring": {
      "statusUrl": "/general/reindex-transaction/reindex_550e8400e29b41d4a716446655440000",
      "pollInterval": "5s"
    }
  }
}`}
                </div>
              </div>

              {/* Completed Job Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Completed Job</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "reindexId": "reindex_550e8400e29b41d4a716446655440001",
    "status": "completed",
    "progress": {
      "stage": "completed",
      "percentage": 100,
      "completedAt": "2024-01-15T10:02:45Z"
    },
    "results": {
      "transactionsFound": 5,
      "ordersUpdated": 3,
      "statusChanges": [
        {
          "orderId": "550e8400-e29b-41d4-a716-446655440000",
          "oldStatus": "processing",
          "newStatus": "completed"
        }
      ],
      "errors": []
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Reindexing Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended Usage</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Use order_id for specific stuck orders</li>
                  <li>• Use transaction_hash for known missing transactions</li>
                  <li>• Limit block ranges to 1000 blocks maximum</li>
                  <li>• Poll status endpoint every 5-10 seconds</li>
                  <li>• Set up webhooks for completion notifications</li>
                  <li>• Use high priority only for urgent issues</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Important Limitations</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Rate limit: 10 reindex requests per hour per account</li>
                  <li>• Block range limit: maximum 1000 blocks per request</li>
                  <li>• Job timeout: 30 minutes maximum processing time</li>
                  <li>• Network-specific: each network requires separate requests</li>
                  <li>• Results cached for 24 hours after completion</li>
                  <li>• High priority jobs may be throttled during peak usage</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
