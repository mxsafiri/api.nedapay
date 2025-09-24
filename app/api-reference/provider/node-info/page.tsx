import { ApiPlayground } from '@/components/api-playground'
import { Server, Wifi, Database, Shield, Zap, Clock, AlertTriangle, CheckCircle } from 'lucide-react'

export default function GetNodeInfoPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Node Info</h1>
          <p className="text-foreground-secondary">
            Retrieve detailed information about NEDApay network nodes, liquidity pool status, and infrastructure health for provider operations.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#node-status" className="text-blue-400 hover:underline">Node Status</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/provider/node-info"
            title="Get Node Information"
            description="Retrieve network infrastructure status and liquidity pool information"
            parameters={[
              {
                name: "include_pools",
                type: "query",
                required: false,
                description: "Include detailed liquidity pool information",
                example: "true"
              },
              {
                name: "include_health",
                type: "query",
                required: false,
                description: "Include network health metrics",
                example: "true"
              },
              {
                name: "region",
                type: "query",
                required: false,
                description: "Filter by geographic region (east-africa, global)",
                example: "east-africa"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Node information retrieved successfully",
              "data": {
                "network": {
                  "name": "NEDApay Network",
                  "version": "v2.1.4",
                  "chainId": 8453,
                  "networkName": "base-mainnet",
                  "blockHeight": 8945672,
                  "lastBlockTime": "2024-01-15T10:00:00Z"
                },
                "node": {
                  "id": "node_ea_001",
                  "region": "east-africa",
                  "status": "healthy",
                  "uptime": "99.98%",
                  "latency": "45ms",
                  "connections": 156,
                  "syncStatus": "synced",
                  "lastHealthCheck": "2024-01-15T09:59:30Z"
                },
                "liquidityPools": [
                  {
                    "poolId": "base-usdt-pool-001",
                    "token": "USDT",
                    "network": "base",
                    "totalLiquidity": "2450000.00",
                    "availableLiquidity": "1876500.00",
                    "lockedLiquidity": "573500.00",
                    "utilizationRate": 23.4,
                    "status": "active",
                    "minOrderSize": "1.00",
                    "maxOrderSize": "50000.00",
                    "contractAddress": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
                  },
                  {
                    "poolId": "base-usdc-pool-002", 
                    "token": "USDC",
                    "network": "base",
                    "totalLiquidity": "1890000.00",
                    "availableLiquidity": "1654300.00",
                    "lockedLiquidity": "235700.00",
                    "utilizationRate": 12.5,
                    "status": "active",
                    "minOrderSize": "1.00",
                    "maxOrderSize": "50000.00",
                    "contractAddress": "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
                  }
                ],
                "providers": {
                  "totalActive": 156,
                  "totalCapacity": "4340000.00",
                  "averageResponseTime": "2.3s",
                  "networkLoad": "moderate",
                  "regionDistribution": {
                    "tanzania": 45,
                    "kenya": 38,
                    "uganda": 29,
                    "other": 44
                  }
                },
                "health": {
                  "overall": "healthy",
                  "components": {
                    "blockchain": "healthy",
                    "liquidity": "healthy", 
                    "settlement": "healthy",
                    "api": "healthy"
                  },
                  "alerts": [],
                  "maintenance": {
                    "scheduled": false,
                    "nextWindow": "2024-01-20T02:00:00Z"
                  }
                },
                "fees": {
                  "networkFee": "0.50",
                  "baseFeeRate": "0.25%",
                  "congestionMultiplier": 1.0,
                  "estimatedGasPrice": "0.000000015"
                },
                "generatedAt": "2024-01-15T10:00:00Z",
                "cacheExpiry": "2024-01-15T10:01:00Z"
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
              The node info endpoint provides liquidity providers with real-time information about NEDApay's 
              network infrastructure, including Base network status, liquidity pool availability, provider 
              network health, and operational parameters essential for settlement planning.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Server className="h-4 w-4 mr-2" />
                  Network Infrastructure
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Base network connectivity and sync status</li>
                  <li>• Node health and performance metrics</li>
                  <li>• Network version and compatibility info</li>
                  <li>• Regional node distribution</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Database className="h-4 w-4 mr-2" />
                  Liquidity Pool Status
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• USDT/USDC pool availability and capacity</li>
                  <li>• Real-time utilization rates</li>
                  <li>• Order size limits and constraints</li>
                  <li>• Pool contract addresses and verification</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Operational Intelligence:</strong> Use this data to optimize settlement timing, 
                assess network capacity, plan for maintenance windows, and ensure optimal provider performance 
                during peak usage periods.
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
                    <td className="p-4 font-mono text-sm">include_pools</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include detailed liquidity pool information (default: true)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">include_health</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include network health metrics and alerts (default: true)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">region</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by geographic region (east-africa, global)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">include_fees</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include current fee structure and gas estimates (default: true)
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
              The response provides comprehensive network status information including blockchain connectivity, 
              liquidity pool states, provider network health, and operational parameters.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Network Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>chainId</code> - Base network chain identifier (8453)</li>
                  <li><code>blockHeight</code> - Current blockchain block number</li>
                  <li><code>syncStatus</code> - Node synchronization state</li>
                  <li><code>version</code> - NEDApay network protocol version</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Liquidity Pool Data</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>totalLiquidity</code> - Total stablecoin reserves in pool</li>
                  <li><code>availableLiquidity</code> - Currently available for new orders</li>
                  <li><code>utilizationRate</code> - Percentage of liquidity currently locked</li>
                  <li><code>contractAddress</code> - Base network smart contract address</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Health & Performance</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>uptime</code> - Node availability percentage</li>
                  <li><code>latency</code> - Average response time to Base network</li>
                  <li><code>networkLoad</code> - Current system load level</li>
                  <li><code>alerts</code> - Active system alerts and warnings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Node Status */}
          <section id="node-status">
            <h2 className="text-2xl font-semibold mb-4">Status Indicators & Health Metrics</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Node Status Values</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-green-500/20 bg-green-500/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <div>
                      <span className="font-medium text-green-400">healthy</span>
                      <p className="text-xs text-green-300">All systems operational</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-yellow-500/20 bg-yellow-500/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    <div>
                      <span className="font-medium text-yellow-400">degraded</span>
                      <p className="text-xs text-yellow-300">Reduced performance, still operational</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-red-500/20 bg-red-500/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <div>
                      <span className="font-medium text-red-400">unhealthy</span>
                      <p className="text-xs text-red-300">Service disruption, avoid new orders</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Pool Status Levels</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-green-500/20 bg-green-500/10 rounded-lg">
                    <Database className="h-5 w-5 text-green-400" />
                    <div>
                      <span className="font-medium text-green-400">active</span>
                      <p className="text-xs text-green-300">Full liquidity available</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-yellow-500/20 bg-yellow-500/10 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-400" />
                    <div>
                      <span className="font-medium text-yellow-400">limited</span>
                      <p className="text-xs text-yellow-300">Reduced capacity, large orders may queue</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-red-500/20 bg-red-500/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <div>
                      <span className="font-medium text-red-400">maintenance</span>
                      <p className="text-xs text-red-300">Pool temporarily unavailable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Utilization Rate Guidelines</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-green-400">Low (0-30%):</span>
                  <p className="text-blue-300">Optimal conditions, fast settlements</p>
                </div>
                <div>
                  <span className="font-medium text-yellow-400">Moderate (30-70%):</span>
                  <p className="text-blue-300">Normal operations, slight delays possible</p>
                </div>
                <div>
                  <span className="font-medium text-red-400">High (70%+):</span>
                  <p className="text-blue-300">Congested, consider delaying large orders</p>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* Basic Node Info */}
              <div>
                <h3 className="text-lg font-medium mb-3">Basic Network Status</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/node-info
                </div>
              </div>

              {/* Regional Focus */}
              <div>
                <h3 className="text-lg font-medium mb-3">East Africa Region Status</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/node-info?region=east-africa&include_health=true
                </div>
              </div>

              {/* Pool-focused Query */}
              <div>
                <h3 className="text-lg font-medium mb-3">Liquidity Pool Details Only</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /provider/node-info?include_pools=true&include_health=false
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Healthy Network</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "network": {
      "name": "NEDApay Network",
      "version": "v2.1.4",
      "chainId": 8453,
      "blockHeight": 8945672,
      "syncStatus": "synced"
    },
    "node": {
      "region": "east-africa",
      "status": "healthy",
      "uptime": "99.98%",
      "latency": "45ms"
    },
    "liquidityPools": [
      {
        "poolId": "base-usdt-pool-001",
        "token": "USDT",
        "totalLiquidity": "2450000.00",
        "availableLiquidity": "1876500.00",
        "utilizationRate": 23.4,
        "status": "active"
      }
    ],
    "health": {
      "overall": "healthy",
      "alerts": []
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
                <h3 className="text-lg font-medium text-green-400">✅ Operational Guidelines</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Check node info before processing large order batches</li>
                  <li>• Monitor utilization rates to optimize settlement timing</li>
                  <li>• Set up alerts for network health status changes</li>
                  <li>• Plan operations around scheduled maintenance windows</li>
                  <li>• Use regional data for geographic optimization</li>
                  <li>• Cache node info for 1 minute to reduce API calls</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Critical Warnings</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Avoid large orders when utilization &gt; 80%</li>
                  <li>• Don't ignore network health alerts</li>
                  <li>• Pause operations during maintenance windows</li>
                  <li>• Monitor Base network congestion during peak hours</li>
                  <li>• Validate pool contract addresses for security</li>
                  <li>• Node info updates every 30 seconds maximum</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
