import { ApiPlayground } from '@/components/api-playground'
import { BarChart3, TrendingUp, DollarSign, Clock, Award, Users, Zap, Target } from 'lucide-react'

export default function GetProviderStatsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Provider Stats</h1>
          <p className="text-foreground-secondary">
            Comprehensive analytics and performance metrics for liquidity providers including earnings, settlement performance, and tier progression.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#metrics" className="text-blue-400 hover:underline">Key Metrics</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/provider/stats"
            title="Get Provider Statistics"
            description="Retrieve comprehensive performance analytics and earnings data for your provider account"
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
                description: "Filter by settlement currency (TZS, KES, UGX)",
                example: "TZS"
              },
              {
                name: "include_breakdown",
                type: "query",
                required: false,
                description: "Include detailed breakdowns by currency and time",
                example: "true"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Provider statistics retrieved successfully",
              "data": {
                "period": "7d",
                "provider": {
                  "id": "provider_550e8400e29b41d4a716446655440000",
                  "tier": "premium",
                  "tierProgress": {
                    "current": "premium",
                    "nextTier": null,
                    "progressPercentage": 100,
                    "requirements": {
                      "settlementRate": 98.5,
                      "volumeThreshold": "50000",
                      "timeInTier": "90d"
                    }
                  }
                },
                "summary": {
                  "totalSettlements": 234,
                  "totalVolume": "67850.00",
                  "totalEarnings": "1356.75",
                  "successRate": 98.7,
                  "averageSettlementTime": "1m 45s",
                  "activeLocks": 12
                },
                "earnings": {
                  "totalFees": "1356.75",
                  "averageFeePerOrder": "5.80",
                  "feesByTier": {
                    "premium": "1356.75",
                    "standard": "0.00",
                    "basic": "0.00"
                  },
                  "projectedMonthly": "5827.50"
                },
                "performance": {
                  "settlementTimes": {
                    "average": 105,
                    "median": 98,
                    "fastest": 45,
                    "slowest": 287
                  },
                  "successRateByPeriod": {
                    "24h": 99.1,
                    "7d": 98.7,
                    "30d": 98.9
                  },
                  "volumeDistribution": {
                    "small": { "count": 156, "percentage": 66.7 },
                    "medium": { "count": 65, "percentage": 27.8 },
                    "large": { "count": 13, "percentage": 5.5 }
                  }
                },
                "currencyBreakdown": {
                  "TZS": {
                    "settlements": 134,
                    "volume": "34750000000.00",
                    "earnings": "695.50",
                    "successRate": 98.5
                  },
                  "KES": {
                    "settlements": 67,
                    "volume": "2890000.00",
                    "earnings": "402.25",
                    "successRate": 99.2
                  },
                  "UGX": {
                    "settlements": 33,
                    "volume": "125750000.00",
                    "earnings": "259.00",
                    "successRate": 98.8
                  }
                },
                "trends": {
                  "volumeGrowth": 15.3,
                  "earningsGrowth": 18.7,
                  "successRateChange": 0.3,
                  "settlementTimeImprovement": -12.5
                },
                "rankings": {
                  "volumeRank": 12,
                  "earningsRank": 8,
                  "successRateRank": 5,
                  "totalProviders": 156
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
              The provider statistics endpoint delivers comprehensive performance analytics for liquidity providers, 
              including earnings tracking, settlement performance metrics, tier progression status, and competitive 
              rankings within the NEDApay network.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Earnings Analytics
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Total fees and earnings tracking</li>
                  <li>• Currency-specific breakdowns</li>
                  <li>• Tier-based fee comparisons</li>
                  <li>• Monthly earning projections</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Performance Metrics
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Settlement success rates</li>
                  <li>• Average settlement times</li>
                  <li>• Volume distribution analysis</li>
                  <li>• Trend analysis and growth</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h4 className="font-medium text-purple-400 mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  Tier & Rankings
                </h4>
                <ul className="text-sm text-purple-300 space-y-1">
                  <li>• Current tier status and progress</li>
                  <li>• Tier upgrade requirements</li>
                  <li>• Network-wide ranking positions</li>
                  <li>• Competitive performance insights</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Business Intelligence:</strong> Use these metrics to optimize your settlement operations, 
                track tier progression, and identify opportunities for increased earnings and improved performance.
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
                      Filter by settlement currency (TZS, KES, UGX)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">include_breakdown</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include detailed currency and time breakdowns (default: true)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">include_rankings</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include network-wide ranking information (default: true)
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
              The response provides a comprehensive view of provider performance across multiple dimensions 
              including financial, operational, and competitive metrics.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Provider Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>tier</code> - Current provider tier (basic, standard, premium)</li>
                  <li><code>tierProgress</code> - Progress toward next tier and requirements</li>
                  <li><code>activeLocks</code> - Number of currently locked orders</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Financial Metrics</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>totalEarnings</code> - Total fees earned in the period</li>
                  <li><code>averageFeePerOrder</code> - Mean earnings per settlement</li>
                  <li><code>projectedMonthly</code> - Estimated monthly earnings based on current performance</li>
                  <li><code>feesByTier</code> - Earnings breakdown by tier level</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Performance Analytics</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>successRate</code> - Percentage of successful settlements</li>
                  <li><code>settlementTimes</code> - Average, median, fastest, and slowest completion times</li>
                  <li><code>volumeDistribution</code> - Breakdown by order size categories</li>
                  <li><code>trends</code> - Growth rates and performance changes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section id="metrics">
            <h2 className="text-2xl font-semibold mb-4">Key Performance Indicators</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Tier Requirements
                </h3>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Basic → Standard</h4>
                    <ul className="text-xs text-foreground-secondary space-y-1">
                      <li>• 95%+ success rate</li>
                      <li>• $10,000+ monthly volume</li>
                      <li>• 30 days in basic tier</li>
                    </ul>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Standard → Premium</h4>
                    <ul className="text-xs text-foreground-secondary space-y-1">
                      <li>• 98%+ success rate</li>
                      <li>• $50,000+ monthly volume</li>
                      <li>• 60 days in standard tier</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-blue-400 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Settlement Performance
                </h3>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Excellent (&lt; 2 min)</h4>
                    <p className="text-xs text-foreground-secondary">Tier bonus eligible, priority orders</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Good (2-5 min)</h4>
                    <p className="text-xs text-foreground-secondary">Standard performance, no penalties</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">Needs Improvement (&gt; 5 min)</h4>
                    <p className="text-xs text-foreground-secondary">May affect tier progression</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Volume Categories</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium">Small Orders:</span>
                  <p className="text-blue-300">$1 - $1,000 USDT</p>
                </div>
                <div>
                  <span className="font-medium">Medium Orders:</span>
                  <p className="text-blue-300">$1,000 - $10,000 USDT</p>
                </div>
                <div>
                  <span className="font-medium">Large Orders:</span>
                  <p className="text-blue-300">$10,000+ USDT</p>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* Basic Stats */}
              <div>
                <h3 className="text-lg font-medium mb-3">Get 7-Day Performance Summary</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/stats?period=7d
                </div>
              </div>

              {/* Currency-specific */}
              <div>
                <h3 className="text-lg font-medium mb-3">Tanzania Market Performance</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/stats?period=30d&currency=TZS&include_breakdown=true
                </div>
              </div>

              {/* Quarterly Review */}
              <div>
                <h3 className="text-lg font-medium mb-3">Quarterly Performance Review</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/stats?period=90d&include_rankings=true
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Premium Provider</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "period": "7d",
    "provider": {
      "tier": "premium",
      "tierProgress": {
        "current": "premium",
        "progressPercentage": 100
      }
    },
    "summary": {
      "totalSettlements": 234,
      "totalVolume": "67850.00",
      "totalEarnings": "1356.75",
      "successRate": 98.7,
      "averageSettlementTime": "1m 45s"
    },
    "earnings": {
      "totalFees": "1356.75",
      "averageFeePerOrder": "5.80",
      "projectedMonthly": "5827.50"
    },
    "rankings": {
      "volumeRank": 12,
      "earningsRank": 8,
      "successRateRank": 5,
      "totalProviders": 156
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Performance Optimization</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Success Strategies</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Monitor success rate daily to maintain tier status</li>
                  <li>• Focus on settlement speed for competitive advantage</li>
                  <li>• Track earnings trends to optimize operation hours</li>
                  <li>• Analyze currency breakdowns for market opportunities</li>
                  <li>• Use rankings to benchmark against other providers</li>
                  <li>• Plan tier upgrades based on requirement tracking</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Performance Risks</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Success rate below 95% may trigger tier demotion</li>
                  <li>• Slow settlement times reduce competitiveness</li>
                  <li>• Inconsistent performance affects long-term earnings</li>
                  <li>• Ignoring market trends limits growth opportunities</li>
                  <li>• Poor ranking positions reduce order allocation</li>
                  <li>• Statistics update every 15 minutes during active periods</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
