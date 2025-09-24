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
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
          
          <h3 className="text-lg font-medium mb-3">Getting Your API Key</h3>
          <p className="text-foreground-secondary mb-4">
            All API requests require authentication using an API key. You can obtain your API key by:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-foreground-secondary mb-6">
            <li>Signing up for a NEDApay account at <a href="#" className="text-blue-400 hover:underline">portal.nedapay.io</a></li>
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

        {/* API Endpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">API Endpoints</h2>
          
          {/* Sender Endpoints */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2 text-blue-400" />
              Sender Endpoints
            </h3>
            <div className="space-y-3">
              <a 
                href="/api-reference/sender/create-order"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-post">POST</span>
                  <div>
                    <div className="font-medium group-hover:text-blue-400 transition-colors">
                      Initiate Payment Order
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Create a new payment order for processing
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
              </a>

              <a 
                href="/api-reference/sender/list-orders"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium group-hover:text-blue-400 transition-colors">
                      List Payment Orders
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Retrieve all payment orders for your account
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
              </a>

              <a 
                href="/api-reference/sender/get-order"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium group-hover:text-blue-400 transition-colors">
                      Get Payment Order by ID
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Retrieve detailed information about a specific order
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Receiver Endpoints */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <ArrowRight className="h-5 w-5 mr-2 text-purple-400" />
              Receiver Endpoints (On-ramp)
            </h3>
            <div className="space-y-3">
              <a 
                href="/api-reference/receiver/create-order"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-post">POST</span>
                  <div>
                    <div className="font-medium group-hover:text-purple-400 transition-colors">
                      Create On-ramp Order
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Create a new fiat-to-stablecoin conversion order
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-purple-400 transition-colors" />
              </a>

              <a 
                href="/api-reference/receiver/get-order"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium group-hover:text-purple-400 transition-colors">
                      Get On-ramp Order
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Retrieve status and details of an on-ramp order
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-purple-400 transition-colors" />
              </a>

              <a 
                href="/api-reference/receiver/list-orders"
                className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="method-badge method-get">GET</span>
                  <div>
                    <div className="font-medium group-hover:text-purple-400 transition-colors">
                      List On-ramp Orders
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Retrieve all on-ramp orders for your account
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-purple-400 transition-colors" />
              </a>
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

        {/* Webhooks */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Webhooks</h2>
          <p className="text-foreground-secondary mb-4">
            NEDApay can send webhook notifications to your application when payment order statuses change.
          </p>
          
          <h3 className="text-lg font-medium mb-3">Example</h3>
          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
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
