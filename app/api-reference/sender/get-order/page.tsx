import { ApiPlayground } from '@/components/api-playground'

export default function GetPaymentOrderPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get payment order by ID</h1>
          <p className="text-foreground-secondary">
            Retrieve detailed information about a specific payment order including liquidity allocation status and settlement details.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/sender/orders/{id}"
            title="Get payment order by ID"
            description="Retrieve a specific payment order by its unique identifier"
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
              "message": "Operation successful",
              "data": {
                "id": "550e8400-e29b-41d4-a716-446655440000",
                "amount": "125",
                "amountFiat": 125,
                "amountReturned": 125,
                "token": "USDT",
                "senderFee": 125,
                "transactionFee": 125,
                "rate": 125,
                "network": "base",
                "gatewayId": "550e8400-e29b-41d4-a716-446655440000",
                "recipient": {
                  "institution": "VODACOM",
                  "accountIdentifier": "255744123456",
                  "accountName": "John Doe",
                  "memo": "Payment for services",
                  "providerId": "550e8400-e29b-41d4-a716-446655440000",
                  "metadata": {},
                  "currency": "TZS"
                },
                "fromAddress": "0x1234567890123456789012345678901234567890",
                "returnAddress": "0x1234567890123456789012345678901234567890",
                "receiveAddress": "0x9876543210987654321098765432109876543210",
                "reference": "payment-123",
                "status": "completed",
                "createdAt": "2024-01-15T10:00:00Z",
                "updatedAt": "2024-01-15T10:05:00Z"
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
              This endpoint allows you to retrieve detailed information about a specific payment order 
              using its unique identifier. The response includes liquidity allocation details, recipient information, 
              current status, and settlement metadata from NEDApay's pool operations.
            </p>
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-400 text-sm">
                <strong>Note:</strong> You can only retrieve payment orders that belong to your account. 
                Attempting to access orders from other accounts will result in a 404 error.
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
                      The unique identifier (UUID) of the payment order to retrieve
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
              The response contains the complete payment order object with all associated metadata.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Fields</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Order Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>id</code> - Unique order identifier</li>
                  <li><code>amount</code> - Payment amount in source currency</li>
                  <li><code>token</code> - Source token/currency (e.g., USDT, TZS)</li>
                  <li><code>network</code> - Blockchain network used</li>
                  <li><code>status</code> - Current order status</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Recipient Details</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>institution</code> - Recipient bank or mobile money provider</li>
                  <li><code>accountIdentifier</code> - Account number or phone number</li>
                  <li><code>accountName</code> - Recipient's full name</li>
                  <li><code>currency</code> - Destination currency</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Status Codes */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Response Codes</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-sm font-medium">200</span>
                <span className="text-sm">Order retrieved successfully</span>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-sm font-medium">404</span>
                <span className="text-sm">Order not found or access denied</span>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-sm font-medium">401</span>
                <span className="text-sm">Invalid or missing API key</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
