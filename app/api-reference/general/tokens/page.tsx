import { ApiPlayground } from '@/components/api-playground'
import { Coins, Network, Shield, Zap, Database, CheckCircle, AlertTriangle } from 'lucide-react'

export default function ListSupportedTokensPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">List Supported Tokens</h1>
          <p className="text-foreground-secondary">
            Retrieve all stablecoins and tokens supported by NEDApay's liquidity pools across different blockchain networks.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#token-details" className="text-blue-400 hover:underline">Token Details</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/general/tokens"
            title="List Supported Tokens"
            description="Get all stablecoins and tokens available in NEDApay liquidity pools"
            parameters={[
              {
                name: "network",
                type: "query",
                required: false,
                description: "Filter by blockchain network (base, ethereum, polygon)",
                example: "base"
              },
              {
                name: "type",
                type: "query",
                required: false,
                description: "Filter by token type (stablecoin, utility, governance)",
                example: "stablecoin"
              },
              {
                name: "status",
                type: "query",
                required: false,
                description: "Filter by availability status (active, maintenance)",
                example: "active"
              },
              {
                name: "include_pools",
                type: "query",
                required: false,
                description: "Include liquidity pool information",
                example: "true"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Supported tokens retrieved successfully",
              "data": {
                "tokens": [
                  {
                    "symbol": "USDC",
                    "name": "USD Coin",
                    "type": "stablecoin",
                    "decimals": 6,
                    "networks": [
                      {
                        "network": "base",
                        "chainId": 8453,
                        "contractAddress": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
                        "status": "active",
                        "isNative": false,
                        "poolLiquidity": "2450000.00",
                        "availableLiquidity": "1876500.00",
                        "utilizationRate": 23.4
                      },
                      {
                        "network": "ethereum",
                        "chainId": 1,
                        "contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                        "status": "active",
                        "isNative": false,
                        "poolLiquidity": "890000.00",
                        "availableLiquidity": "734500.00",
                        "utilizationRate": 17.5
                      }
                    ],
                    "limits": {
                      "minAmount": "1.00",
                      "maxAmount": "100000.00",
                      "dailyLimit": "500000.00"
                    },
                    "fees": {
                      "transferFee": "0.50",
                      "networkFee": "variable",
                      "poolFee": "0.25%"
                    },
                    "features": {
                      "instantTransfer": true,
                      "crossChain": true,
                      "poolSupported": true,
                      "fiatConversion": true
                    },
                    "marketData": {
                      "price": "1.00",
                      "priceChange24h": "0.01%",
                      "volume24h": "1250000.00",
                      "marketCap": "98500000000.00"
                    },
                    "lastUpdated": "2024-01-15T10:00:00Z"
                  },
                  {
                    "symbol": "USDC",
                    "name": "USD Coin",
                    "type": "stablecoin",
                    "decimals": 6,
                    "networks": [
                      {
                        "network": "base",
                        "chainId": 8453,
                        "contractAddress": "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
                        "status": "active",
                        "isNative": false,
                        "poolLiquidity": "1890000.00",
                        "availableLiquidity": "1654300.00",
                        "utilizationRate": 12.5
                      },
                      {
                        "network": "ethereum",
                        "chainId": 1,
                        "contractAddress": "0xA0b86a33E6441b8e776f89d2A0879C0b8e6b0c6e",
                        "status": "active",
                        "isNative": false,
                        "poolLiquidity": "645000.00",
                        "availableLiquidity": "598700.00",
                        "utilizationRate": 7.2
                      }
                    ],
                    "limits": {
                      "minAmount": "1.00",
                      "maxAmount": "100000.00",
                      "dailyLimit": "500000.00"
                    },
                    "fees": {
                      "transferFee": "0.50",
                      "networkFee": "variable",
                      "poolFee": "0.25%"
                    },
                    "features": {
                      "instantTransfer": true,
                      "crossChain": true,
                      "poolSupported": true,
                      "fiatConversion": true
                    },
                    "marketData": {
                      "price": "1.00",
                      "priceChange24h": "-0.01%",
                      "volume24h": "890000.00",
                      "marketCap": "32100000000.00"
                    },
                    "lastUpdated": "2024-01-15T10:00:00Z"
                  }
                ],
                "summary": {
                  "totalTokens": 2,
                  "activeTokens": 2,
                  "totalNetworks": 2,
                  "totalLiquidity": "6875000.00",
                  "availableLiquidity": "5863500.00",
                  "averageUtilization": 15.2,
                  "lastUpdated": "2024-01-15T10:00:00Z"
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
              This endpoint provides comprehensive information about all tokens supported by NEDApay's 
              liquidity bridge infrastructure. It includes stablecoin details, network availability, 
              pool liquidity status, and operational parameters for each supported token.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Coins className="h-4 w-4 mr-2" />
                  Stablecoin Focus
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Primary: USDC native stablecoin</li>
                  <li>• Multi-network support (Base, Ethereum)</li>
                  <li>• USD-pegged for stable value transfers</li>
                  <li>• Optimized for fiat conversion operations</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Database className="h-4 w-4 mr-2" />
                  Liquidity Pool Integration
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Real-time pool liquidity monitoring</li>
                  <li>• Utilization rates and availability</li>
                  <li>• Cross-chain liquidity management</li>
                  <li>• Dynamic fee structures</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Integration Focus:</strong> NEDApay primarily supports USDC stablecoin 
                for reliable value transfer and fiat conversion. Base network is the primary infrastructure 
                with Ethereum as secondary support for broader compatibility.
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
                    <td className="p-4 font-mono text-sm">network</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by blockchain network (base, ethereum, polygon)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">type</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by token type (stablecoin, utility, governance)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">status</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by availability (active, maintenance, deprecated)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">include_pools</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include liquidity pool information (default: true)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">include_market_data</td>
                    <td className="p-4 text-sm">boolean</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Include market price and volume data (default: false)
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
              Returns detailed information about each supported token including network deployments, 
              liquidity pool status, operational limits, and current market conditions.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Token Object Fields</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Basic Token Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>symbol</code> - Token ticker symbol (USDC, USDbC)</li>
                  <li><code>name</code> - Full token name</li>
                  <li><code>type</code> - Token category (stablecoin, utility, governance)</li>
                  <li><code>decimals</code> - Number of decimal places for precision</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Network Deployments</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>network</code> - Blockchain network name and chain ID</li>
                  <li><code>contractAddress</code> - Token contract address on network</li>
                  <li><code>poolLiquidity</code> - Total liquidity available in pool</li>
                  <li><code>utilizationRate</code> - Percentage of liquidity currently locked</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Operational Parameters</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>limits</code> - Min/max amounts and daily transaction limits</li>
                  <li><code>fees</code> - Transfer, network, and pool fee structures</li>
                  <li><code>features</code> - Supported capabilities and integrations</li>
                  <li><code>marketData</code> - Current price, volume, and market metrics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Token Details */}
          <section id="token-details">
            <h2 className="text-2xl font-semibold mb-4">Supported Tokens</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-green-400 mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  USDC (USD Coin)
                </h3>
                <ul className="text-sm text-green-300 space-y-2">
                  <li>• <strong>Networks:</strong> Base (primary), Ethereum</li>
                  <li>• <strong>Pool Liquidity:</strong> $3.34M total</li>
                  <li>• <strong>Utilization:</strong> ~20% average</li>
                  <li>• <strong>Limits:</strong> $1 - $100K per transaction</li>
                  <li>• <strong>Features:</strong> Instant transfer, cross-chain</li>
                  <li>• <strong>Market Cap:</strong> $98.5B</li>
                </ul>
              </div>

              <div className="p-4 border border-blue-500/20 bg-blue-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-blue-400 mb-3 flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  USDC (USD Coin)
                </h3>
                <ul className="text-sm text-blue-300 space-y-2">
                  <li>• <strong>Networks:</strong> Base (primary), Ethereum</li>
                  <li>• <strong>Pool Liquidity:</strong> $2.54M total</li>
                  <li>• <strong>Utilization:</strong> ~10% average</li>
                  <li>• <strong>Limits:</strong> $1 - $100K per transaction</li>
                  <li>• <strong>Features:</strong> Instant transfer, cross-chain</li>
                  <li>• <strong>Market Cap:</strong> $32.1B</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mb-6">
              <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                <Network className="h-4 w-4 mr-2" />
                Network Priority & Support
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-green-400">Base Network (Primary):</span>
                  <ul className="text-blue-300 mt-1 space-y-1">
                    <li>• Lowest fees and fastest settlements</li>
                    <li>• Highest liquidity pools</li>
                    <li>• Optimized for NEDApay operations</li>
                  </ul>
                </div>
                <div>
                  <span className="font-medium text-yellow-400">Ethereum (Secondary):</span>
                  <ul className="text-blue-300 mt-1 space-y-1">
                    <li>• Broader ecosystem compatibility</li>
                    <li>• Higher network fees</li>
                    <li>• Backup liquidity sources</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 border border-border rounded-lg text-center">
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-medium text-sm">Active Status</h4>
                <p className="text-xs text-foreground-secondary">Full operations available</p>
              </div>
              <div className="p-3 border border-border rounded-lg text-center">
                <AlertTriangle className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <h4 className="font-medium text-sm">Maintenance</h4>
                <p className="text-xs text-foreground-secondary">Limited capacity or features</p>
              </div>
              <div className="p-3 border border-border rounded-lg text-center">
                <AlertTriangle className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <h4 className="font-medium text-sm">Deprecated</h4>
                <p className="text-xs text-foreground-secondary">Being phased out</p>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* All Tokens */}
              <div>
                <h3 className="text-lg font-medium mb-3">Get All Supported Tokens</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/tokens
                </div>
              </div>

              {/* Base Network Only */}
              <div>
                <h3 className="text-lg font-medium mb-3">Base Network Tokens Only</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/tokens?network=base&status=active
                </div>
              </div>

              {/* Stablecoins with Pool Data */}
              <div>
                <h3 className="text-lg font-medium mb-3">Stablecoins with Pool Information</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/tokens?type=stablecoin&include_pools=true
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - USDC Token</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "tokens": [
      {
        "symbol": "USDC",
        "name": "USD Coin",
        "type": "stablecoin",
        "decimals": 6,
        "networks": [
          {
            "network": "base",
            "chainId": 8453,
            "contractAddress": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            "status": "active",
            "poolLiquidity": "2450000.00",
            "availableLiquidity": "1876500.00",
            "utilizationRate": 23.4
          }
        ],
        "limits": {
          "minAmount": "1.00",
          "maxAmount": "100000.00"
        },
        "features": {
          "instantTransfer": true,
          "fiatConversion": true
        }
      }
    ]
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Integration Guidelines</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended Approach</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Cache token data for 15 minutes</li>
                  <li>• Prioritize Base network for lower fees</li>
                  <li>• Check pool liquidity before large transactions</li>
                  <li>• Validate contract addresses for security</li>
                  <li>• Monitor utilization rates for optimal timing</li>
                  <li>• Use proper decimal handling for each token</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Important Considerations</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Token data updates every 5 minutes</li>
                  <li>• Pool liquidity can change rapidly during high volume</li>
                  <li>• Network fees vary based on blockchain congestion</li>
                  <li>• Always verify contract addresses before transactions</li>
                  <li>• Maintenance status may affect processing times</li>
                  <li>• Cross-chain transfers have additional complexity</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
