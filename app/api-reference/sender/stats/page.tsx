import { ApiPlayground } from '@/components/api-playground'
import { BarChart3, TrendingUp, DollarSign, Clock, Zap, Users } from 'lucide-react'

export default function GetSenderStatsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Sender Stats</h1>
          <p className="text-foreground-secondary">
            Retrieve comprehensive statistics and analytics for your payment orders, liquidity usage, and settlement performance.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Query Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#metrics" className="text-blue-400 hover:underline">Available Metrics</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/sender/stats"
            title="Get Sender Statistics"
            description="Retrieve comprehensive analytics and performance metrics for your account"
            parameters={[
              {
                name: "period",
                type: "query",
                required: false,
                description: "Time period for statistics (24h, 7d, 30d, 90d)",
                example: "7d"
              },
              {
                name: "currency",
                type: "query", 
                required: false,
                description: "Filter by destination currency (TZS, KES, UGX)",
                example: "TZS"
              },
              {
                name: "token",
                type: "query",
                required: false,
                description: "Filter by source token (USDT, USDC)",
                example: "USDT"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Statistics retrieved successfully",
              "data": {
                "period": "7d",
                "summary": {
                  "totalOrders": 156,
                  "totalVolume": "45250.00",
                  "totalFees": "226.25",
                  "successRate": 98.7,
                  "averageSettlementTime": "2m 34s"
                },
                "volumeByToken": {
                  "USDT": {
                    "volume": "32180.00",
                    "orders": 112,
                    "percentage": 71.2
                  },
                  "USDC": {
                    "volume": "13070.00", 
                    "orders": 44,
                    "percentage": 28.8
                  }
                },
                "volumeByCurrency": {
                  "TZS": {
                    "volume": "11765000000.00",
                    "orders": 89,
                    "percentage": 57.1
                  },
                  "KES": {
                    "volume": "5890000.00",
                    "orders": 45,
                    "percentage": 28.8
                  },
                  "UGX": {
                    "volume": "168750000.00",
                    "orders": 22,
                    "percentage": 14.1
                  }
                },
                "ordersByStatus": {
                  "completed": 154,
                  "pending": 1,
                  "failed": 1,
                  "expired": 0
                },
                "liquidityUsage": {
                  "peakUsage": "8750.00",
                  "averageUsage": "2890.50",
                  "utilizationRate": 34.7,
                  "poolsAccessed": ["base-usdt-pool-001", "base-usdc-pool-002"]
                },
                "performance": {
                  "averageSettlementTime": 154,
                  "fastestSettlement": 87,
                  "slowestSettlement": 298,
                  "settlementTimeDistribution": {
                    "under_2min": 45.5,
                    "2_to_5min": 48.7,
                    "over_5min": 5.8
                  }
                },
                "trends": {
                  "volumeGrowth": 12.3,
                  "orderGrowth": 8.7,
                  "successRateChange": 0.2
                },
                "generatedAt": "2024-01-15T10:00:00Z"
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
              The sender statistics endpoint provides comprehensive analytics for your NEDApay account, 
              including volume metrics, liquidity usage patterns, settlement performance, and trend analysis. 
              This data is essential for optimizing your integration and monitoring business performance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Volume Analytics
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Total transaction volume</li>
                  <li>• Breakdown by token/currency</li>
                  <li>• Order count and averages</li>
                  <li>• Fee analysis</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  Performance Metrics
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Settlement time analysis</li>
                  <li>• Success rate tracking</li>
                  <li>• Liquidity utilization</li>
                  <li>• Pool access patterns</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h4 className="font-medium text-purple-400 mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trend Analysis
                </h4>
                <ul className="text-sm text-purple-300 space-y-1">
                  <li>• Growth rate calculations</li>
                  <li>• Period-over-period comparison</li>
                  <li>• Performance trends</li>
                  <li>• Usage pattern insights</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Use Cases:</strong> Business intelligence dashboards, performance monitoring, 
                capacity planning, fee optimization, and integration health checks.
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
                    <td className="p-4 font-mono text-sm">period</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Time period: 24h, 7d, 30d, 90d (default: 7d)
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
                    <td className="p-4 font-mono text-sm">token</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by source token (USDT, USDC)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">include_trends</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include trend analysis and growth rates (default: true)
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
              The response provides a comprehensive breakdown of your account activity and performance 
              metrics across the specified time period.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Summary Metrics</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>totalOrders</code> - Total number of payment orders</li>
                  <li><code>totalVolume</code> - Total stablecoin volume processed</li>
                  <li><code>totalFees</code> - Total fees paid</li>
                  <li><code>successRate</code> - Percentage of successful orders</li>
                  <li><code>averageSettlementTime</code> - Mean time to complete settlements</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Volume Breakdowns</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>volumeByToken</code> - USDT vs USDC usage statistics</li>
                  <li><code>volumeByCurrency</code> - TZS, KES, UGX destination analysis</li>
                  <li><code>ordersByStatus</code> - Status distribution (completed, pending, failed)</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Liquidity & Performance</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>liquidityUsage</code> - Pool utilization metrics and patterns</li>
                  <li><code>performance</code> - Settlement time analysis and distribution</li>
                  <li><code>trends</code> - Growth rates and period-over-period changes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Available Metrics */}
          <section id="metrics">
            <h2 className="text-2xl font-semibold mb-4">Key Metrics Explained</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-blue-400 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Volume Metrics
                </h3>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Total Volume</h4>
                    <p className="text-xs text-foreground-secondary">Sum of all stablecoin amounts processed</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Volume by Token</h4>
                    <p className="text-xs text-foreground-secondary">USDT vs USDC usage breakdown with percentages</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Volume by Currency</h4>
                    <p className="text-xs text-foreground-secondary">Fiat destination analysis (TZS, KES, UGX)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Performance Metrics
                </h3>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Success Rate</h4>
                    <p className="text-xs text-foreground-secondary">Percentage of orders completed successfully</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Settlement Time</h4>
                    <p className="text-xs text-foreground-secondary">Average, fastest, and slowest completion times</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Liquidity Utilization</h4>
                    <p className="text-xs text-foreground-secondary">Peak usage and pool access patterns</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Settlement Time Distribution</h4>
              <p className="text-sm text-blue-300 mb-2">Orders are categorized by completion speed:</p>
              <ul className="text-sm text-blue-300 space-y-1">
                <li>• <strong>Under 2 minutes:</strong> Optimal performance range</li>
                <li>• <strong>2-5 minutes:</strong> Normal processing time</li>
                <li>• <strong>Over 5 minutes:</strong> May indicate network congestion or provider delays</li>
              </ul>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* Basic Stats */}
              <div>
                <h3 className="text-lg font-medium mb-3">Get 7-Day Statistics</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /sender/stats?period=7d
                </div>
              </div>

              {/* Filtered by Currency */}
              <div>
                <h3 className="text-lg font-medium mb-3">Tanzania-specific Statistics</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /sender/stats?period=30d&currency=TZS
                </div>
              </div>

              {/* USDT Performance */}
              <div>
                <h3 className="text-lg font-medium mb-3">USDT Performance Analysis</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /sender/stats?period=90d&token=USDT&include_trends=true
                </div>
              </div>

              {/* Response Example */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Key Metrics</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "period": "7d",
    "summary": {
      "totalOrders": 156,
      "totalVolume": "45250.00",
      "successRate": 98.7,
      "averageSettlementTime": "2m 34s"
    },
    "liquidityUsage": {
      "peakUsage": "8750.00",
      "utilizationRate": 34.7,
      "poolsAccessed": ["base-usdt-pool-001"]
    },
    "performance": {
      "settlementTimeDistribution": {
        "under_2min": 45.5,
        "2_to_5min": 48.7,
        "over_5min": 5.8
      }
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Analytics Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended Usage</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Monitor success rates daily for early issue detection</li>
                  <li>• Track liquidity utilization to optimize order timing</li>
                  <li>• Use settlement time trends for capacity planning</li>
                  <li>• Analyze currency breakdowns for market insights</li>
                  <li>• Set up alerts for success rate drops below 95%</li>
                  <li>• Review 30d trends monthly for business planning</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Important Notes</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Statistics are updated every 15 minutes</li>
                  <li>• Large time periods (90d) may have slower response times</li>
                  <li>• Trend calculations require at least 48 hours of data</li>
                  <li>• Currency filters only apply to destination currencies</li>
                  <li>• Liquidity metrics reflect Base network pools only</li>
                  <li>• Rate limit: 10 requests per minute for this endpoint</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
