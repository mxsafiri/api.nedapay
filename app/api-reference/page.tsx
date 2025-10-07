import { ArrowRight, Code, Zap, Shield } from 'lucide-react'

export default function ApiReferencePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Introduction</h1>
          <p className="text-foreground-secondary">
            API Reference for NEDApay's liquidity pool bridge. Explore endpoints for stablecoin-to-fiat conversion, request/response formats, and integration details.
          </p>
        </div>

        {/* Welcome Section */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            Welcome to the NEDApay API Reference. Here you&apos;ll find detailed documentation for all available endpoints, including 
            request/response formats, authentication, and integration tips.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-400 text-sm">
                For a quick start, see the <a href="/quickstart" className="underline hover:no-underline">Quickstart</a> guide.
              </p>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-400 text-sm">
                For OpenAPI playground, see the interactive API explorer below (if available).
              </p>
            </div>
          </div>

          <p className="text-foreground-secondary mb-4">
            The NEDApay API provides a comprehensive interface for accessing our liquidity pool bridge on Base network. 
            This API enables PSPs/MNOs to request stablecoin transfers from our pools, manage payment orders, and access real-time settlement information.
          </p>
        </section>

        {/* Base URL */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
            https://api.nedapay.io/v1
          </div>
          <p className="text-foreground-secondary text-sm mt-2">
            <strong>Note:</strong> This API is currently in development. Only provider application endpoints are functional.
          </p>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
          
          <h3 className="text-lg font-medium mb-3">Getting Your API Key</h3>
          <p className="text-foreground-secondary mb-4">
            All API requests require authentication using an API key. You can obtain your API key by:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-foreground-secondary mb-6">
            <li>Signing up for a NEDApay account at <a href="https://portal.nedapay.xyz/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">portal.nedapay.xyz</a></li>
            <li>Navigating to the API Keys section in your dashboard</li>
            <li>Generating a new API key for your application</li>
          </ol>

          <div className="p-4 bg-background-secondary border border-border rounded-lg mb-6">
            <h4 className="font-medium mb-2">API Key Usage</h4>
            <p className="text-sm text-foreground-secondary mb-3">
              Include your API key in the request headers:
            </p>
            <div className="p-3 bg-code-background border border-code-border rounded font-mono text-sm">
              API-Key: your-api-key-here
            </div>
          </div>
        </section>

        {/* Implementation Status */}
        <section className="mb-12">
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-6">
            <h3 className="font-semibold text-yellow-400 mb-2">🚧 Development Status</h3>
            <p className="text-sm text-yellow-300">
              NEDApay API is currently in active development. Only provider application endpoints are functional. 
              Core payment processing APIs are being built based on our aggregator node architecture.
            </p>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">API Endpoints</h2>
          
          {/* Currently Available */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-400" />
              Currently Available
            </h3>
            <div className="space-y-3">
              <div className="group flex items-center justify-between p-4 border border-green-500/20 bg-green-500/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-post">POST</span>
                  <div>
                    <div className="font-medium text-green-400">
                      Submit Provider Application
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Apply to become a payment provider in the NEDApay network
                    </div>
                    <div className="text-xs text-green-400 mt-1">
                      /v1/providers/apply
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">LIVE</span>
              </div>
            </div>
          </div>

          {/* Coming Soon - Core Payment APIs */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2 text-blue-400" />
              Core Payment APIs (In Development)
            </h3>
            <div className="space-y-3">
              <div className="group flex items-center justify-between p-4 border border-border rounded-lg opacity-60">
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-post">POST</span>
                  <div>
                    <div className="font-medium">
                      Create Payment Order
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Initiate stablecoin-to-fiat conversion through aggregator network
                    </div>
                    <div className="text-xs text-blue-400 mt-1">
                      /v1/orders
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">PLANNED</span>
              </div>

              <div className="group flex items-center justify-between p-4 border border-border rounded-lg opacity-60">
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium">
                      Get Payment Rates
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Retrieve current exchange rates from provider network
                    </div>
                    <div className="text-xs text-blue-400 mt-1">
                      /v1/rates
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">PLANNED</span>
              </div>

              <div className="group flex items-center justify-between p-4 border border-border rounded-lg opacity-60">
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-post">POST</span>
                  <div>
                    <div className="font-medium">
                      Request Quote
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Get optimal route and pricing for payment order
                    </div>
                    <div className="text-xs text-blue-400 mt-1">
                      /v1/quotes
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">PLANNED</span>
              </div>
            </div>
          </div>

          {/* Aggregator Intelligence APIs */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-purple-400" />
              Aggregator Intelligence (Future)
            </h3>
            <div className="space-y-3">
              <div className="group flex items-center justify-between p-4 border border-border rounded-lg opacity-60">
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-post">POST</span>
                  <div>
                    <div className="font-medium">
                      Optimize Route
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Get ML-optimized payment routing through provider network
                    </div>
                    <div className="text-xs text-purple-400 mt-1">
                      /v1/routes/optimize
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">ROADMAP</span>
              </div>

              <div className="group flex items-center justify-between p-4 border border-border rounded-lg opacity-60">
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium">
                      Provider Network Status
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Real-time liquidity and performance metrics across providers
                    </div>
                    <div className="text-xs text-purple-400 mt-1">
                      /v1/network/status
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">ROADMAP</span>
              </div>
            </div>
          </div>

          {/* Provider Endpoints */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-green-400" />
              Provider Endpoints
            </h3>
            <div className="space-y-3">
              <a 
                href="/api-reference/provider/list-orders"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium group-hover:text-green-400 transition-colors">
                      List Lock Payment Orders
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Get available orders for fulfillment
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-green-400 transition-colors" />
              </a>

              <a 
                href="/api-reference/provider/market-rate"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium group-hover:text-green-400 transition-colors">
                      Get Market Rate
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Retrieve current market exchange rates
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-green-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* General Endpoints */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-orange-400" />
              General Endpoints
            </h3>
            <div className="space-y-3">
              <a 
                href="/api-reference/general/currencies"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium group-hover:text-orange-400 transition-colors">
                      List Supported Currencies
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Get all supported fiat currencies and tokens
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-orange-400 transition-colors" />
              </a>

              <a 
                href="/api-reference/general/institutions"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium group-hover:text-orange-400 transition-colors">
                      List Supported Institutions
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Get supported banks and mobile money providers
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-orange-400 transition-colors" />
              </a>
            </div>
          </div>
        </section>

        {/* Request Format */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibent mb-4">Request Format</h2>
          <p className="text-foreground-secondary mb-4">
            All API requests should be made over HTTPS. Request and response bodies are in JSON format.
          </p>
          
          <h3 className="text-lg font-medium mb-3">Example Request</h3>
          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
            <div className="text-green-400">POST</div>
            <div className="text-blue-400">https://api.nedapay.io/v1/sender/orders</div>
            <div className="text-yellow-400 mt-2">Headers:</div>
            <div className="text-foreground-secondary">API-Key: your-api-key</div>
            <div className="text-foreground-secondary">Content-Type: application/json</div>
          </div>
        </section>

        {/* Response Format */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
          <p className="text-foreground-secondary mb-4">
            All API responses follow a consistent format with status, message, and data fields.
          </p>
          
          <h3 className="text-lg font-medium mb-3">Success Response</h3>
          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-4">
{`{
  "status": "success",
  "message": "Operation completed successfully",
  "data": {
    // Response data here
  }
}`}
          </div>

          <h3 className="text-lg font-medium mb-3">Error Response</h3>
          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "error",
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": "Additional error information"
  }
}`}
          </div>
        </section>

        {/* Rate Limiting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Rate Limiting</h2>
          <p className="text-foreground-secondary mb-4">
            API requests are rate limited to ensure fair usage and system stability.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead>
                <tr className="border-b border-border bg-background-secondary">
                  <th className="text-left p-4 font-medium">Endpoint Type</th>
                  <th className="text-left p-4 font-medium">Rate Limit</th>
                  <th className="text-left p-4 font-medium">Window</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4">General endpoints</td>
                  <td className="p-4">100 requests</td>
                  <td className="p-4">per minute</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Payment creation</td>
                  <td className="p-4">10 requests</td>
                  <td className="p-4">per minute</td>
                </tr>
                <tr>
                  <td className="p-4">Provider endpoints</td>
                  <td className="p-4">200 requests</td>
                  <td className="p-4">per minute</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Implementation Roadmap</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border border-green-500/20 bg-green-500/5 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div>
                <div className="font-medium text-green-400">Phase 1: Provider Onboarding (Current)</div>
                <div className="text-sm text-foreground-secondary">Application submission and KYC process</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 border border-yellow-500/20 bg-yellow-500/5 rounded-lg">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div>
                <div className="font-medium text-yellow-400">Phase 2: Core Payment APIs (Q1 2024)</div>
                <div className="text-sm text-foreground-secondary">Order creation, rates, quotes, and basic settlement</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 border border-border rounded-lg opacity-60">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div>
                <div className="font-medium">Phase 3: Aggregator Intelligence (Q2 2024)</div>
                <div className="text-sm text-foreground-secondary">ML-powered routing, real-time optimization, advanced analytics</div>
              </div>
            </div>
          </div>
        </section>

        {/* Provider Network */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Provider Network</h2>
          <p className="text-foreground-secondary mb-6">
            NEDApay operates an open aggregator network where qualified payment providers can join to offer services:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium mb-2">Provider Types</h4>
              <p className="text-sm text-foreground-secondary mb-2">
                Mobile money operators, banks, PSPs, and fintech companies can apply to join
              </p>
              <span className="text-xs text-blue-400">KYC verification required</span>
            </div>
            
            <div className="p-4 border border-border rounded-lg">
              <h4 className="font-medium mb-2">Network Benefits</h4>
              <p className="text-sm text-foreground-secondary mb-2">
                Access to stablecoin liquidity pools and cross-border settlement infrastructure
              </p>
              <span className="text-xs text-blue-400">Revenue sharing model</span>
            </div>
          </div>
        </section>

        {/* Webhooks */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Webhooks (Future)</h2>
          <div className="p-4 bg-gray-500/10 border border-gray-500/20 rounded-lg mb-4">
            <p className="text-sm text-gray-400">
              Webhook functionality will be available with core payment APIs in Phase 2.
            </p>
          </div>
          <p className="text-foreground-secondary mb-4">
            NEDApay will send webhook notifications to your application when payment order statuses change.
          </p>
          
          <h3 className="text-lg font-medium mb-3">Example (Planned)</h3>
          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm opacity-60">
{`{
  "event": "order.completed",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "status": "completed",
    "timestamp": "2024-01-15T10:05:00Z"
  }
}`}
          </div>
        </section>
      </div>
    </div>
  )
}
