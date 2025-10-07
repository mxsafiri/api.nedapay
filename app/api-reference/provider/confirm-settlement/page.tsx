import { ApiPlayground } from '@/components/api-playground'
import { CheckCircle, Zap, Clock, AlertTriangle, DollarSign } from 'lucide-react'

export default function ConfirmSettlementPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Confirm Settlement</h1>
          <p className="text-foreground-secondary">
            Confirm successful fiat delivery to recipient and trigger USDC payment to your Base network wallet.
          </p>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="POST"
            endpoint="/provider/settlements/[settlement_id]/confirm"
            title="Confirm Settlement"
            description="Confirm fiat delivery completion and receive USDC payment"
            requestBody={{
              "delivery_confirmation": {
                "delivered_at": "2024-01-15T10:02:30Z",
                "confirmation_code": "TXN789012345",
                "delivery_method": "mobile_money",
                "recipient_confirmation": "SMS confirmation received"
              },
              "provider_reference": "THUNES-TZ-001234",
              "notes": "Successfully delivered via Vodacom M-Pesa"
            }}
            responseExample={{
              "status": "success",
              "message": "Settlement confirmed and USDC payment initiated",
              "data": {
                "settlement_id": "sett_550e8400e29b41d4a716446655440000",
                "status": "completed",
                "usdc_payment": {
                  "amount": "97.50",
                  "transaction_hash": "0xabc123def456...",
                  "base_network_fee": "0.001",
                  "sent_to_wallet": "0x742d35Cc6634C0532925a3b8D0C9964E5Bfe1234",
                  "confirmed_at": "2024-01-15T10:02:45Z"
                },
                "settlement_summary": {
                  "original_usdc_amount": "100.00",
                  "settlement_fee": "2.50",
                  "final_usdc_received": "97.50",
                  "fiat_delivered": "260000.00 TZS",
                  "exchange_rate_used": "2600.00"
                },
                "delivery_confirmation": {
                  "delivered_at": "2024-01-15T10:02:30Z",
                  "confirmation_code": "TXN789012345",
                  "delivery_method": "mobile_money"
                },
                "completed_at": "2024-01-15T10:02:45Z"
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
              The Confirm Settlement endpoint is the final step in the settlement process. After successfully 
              delivering fiat to the recipient through your local payment networks, call this endpoint to 
              confirm delivery and trigger your USDC payment on Base network.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Settlement Completion
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Confirm fiat delivery to recipient</li>
                  <li>• Provide delivery proof and confirmation codes</li>
                  <li>• Trigger instant USDC payment</li>
                  <li>• Complete settlement cycle</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  USDC Payment
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Instant Base network transaction</li>
                  <li>• Settlement fee automatically deducted</li>
                  <li>• Transaction hash provided for tracking</li>
                  <li>• Funds available immediately</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Important:</strong> Only confirm settlement after successful fiat delivery. 
                False confirmations will result in tier downgrade and potential account suspension.
              </p>
            </div>
          </section>

          {/* Request Body */}
          <section id="request-body">
            <h2 className="text-2xl font-semibold mb-4">Request Body</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="border-b border-border bg-background-secondary">
                    <th className="text-left p-4 font-medium">Field</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Required</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">delivery_confirmation</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Proof of successful fiat delivery to recipient
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">provider_reference</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Your internal reference for this settlement
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">notes</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Additional notes about the settlement process
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-medium mb-3 mt-6">Delivery Confirmation Object</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="border-b border-border bg-background-secondary">
                    <th className="text-left p-4 font-medium">Field</th>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">delivered_at</td>
                    <td className="p-4 text-sm">string (ISO 8601)</td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Exact timestamp when fiat was delivered
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">confirmation_code</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Transaction ID or confirmation code from local network
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">delivery_method</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      How fiat was delivered (mobile_money, bank_transfer, cash)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">recipient_confirmation</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Evidence of recipient acknowledgment (optional)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Response Format */}
          <section id="response">
            <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
            
            <h3 className="text-lg font-medium mb-3">Success Response (200 OK)</h3>
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-6">
{`{
  "status": "success",
  "message": "Settlement confirmed and USDC payment initiated",
  "data": {
    "settlement_id": "sett_550e8400e29b41d4a716446655440000",
    "status": "completed",
    "usdc_payment": {
      "amount": "97.50",
      "transaction_hash": "0xabc123def456...",
      "base_network_fee": "0.001",
      "sent_to_wallet": "0x742d35Cc6634C0532925a3b8D0C9964E5Bfe1234",
      "confirmed_at": "2024-01-15T10:02:45Z"
    },
    "settlement_summary": {
      "original_usdc_amount": "100.00",
      "settlement_fee": "2.50",
      "final_usdc_received": "97.50",
      "fiat_delivered": "260000.00 TZS",
      "exchange_rate_used": "2600.00"
    }
  }
}`}
            </div>

            <h3 className="text-lg font-medium mb-3">USDC Payment Details</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <DollarSign className="h-5 w-5 text-green-400" />
                <div>
                  <span className="font-medium">Transaction Hash</span>
                  <p className="text-xs text-foreground-secondary">Base network transaction ID for your USDC payment</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                <Clock className="h-5 w-5 text-blue-400" />
                <div>
                  <span className="font-medium">Confirmation Time</span>
                  <p className="text-xs text-foreground-secondary">When USDC payment was confirmed on Base network</p>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Use Cases</h2>
            
            <div className="space-y-6">
              {/* M-Pesa Settlement */}
              <div>
                <h3 className="text-lg font-medium mb-3">M-Pesa Settlement Confirmation</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "delivery_confirmation": {
    "delivered_at": "2024-01-15T10:02:30Z",
    "confirmation_code": "QH12345678",
    "delivery_method": "mobile_money",
    "recipient_confirmation": "SMS: You have received 260,000 TZS from ABSA Bank"
  },
  "provider_reference": "THUNES-MPESA-001234",
  "notes": "Delivered via Vodacom M-Pesa Tanzania"
}`}
                </div>
              </div>

              {/* Bank Transfer Settlement */}
              <div>
                <h3 className="text-lg font-medium mb-3">Bank Transfer Settlement</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "delivery_confirmation": {
    "delivered_at": "2024-01-15T10:05:00Z",
    "confirmation_code": "BT789012345",
    "delivery_method": "bank_transfer",
    "recipient_confirmation": "Account credited successfully"
  },
  "provider_reference": "WISE-KE-567890",
  "notes": "Delivered to Equity Bank Kenya account"
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Error Handling */}
          <section id="errors">
            <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg">
                <h4 className="font-medium text-red-400 mb-2">404 Not Found</h4>
                <p className="text-sm text-red-300 mb-3">Settlement ID not found or not assigned to your provider</p>
                <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
{`{
  "status": "error",
  "message": "Settlement not found",
  "error": {
    "code": "SETTLEMENT_NOT_FOUND",
    "details": "Settlement ID does not exist or is not assigned to your provider"
  }
}`}
                </div>
              </div>

              <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg">
                <h4 className="font-medium text-red-400 mb-2">409 Conflict</h4>
                <p className="text-sm text-red-300 mb-3">Settlement already confirmed or expired</p>
                <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
{`{
  "status": "error",
  "message": "Settlement already processed",
  "error": {
    "code": "SETTLEMENT_ALREADY_CONFIRMED",
    "current_status": "completed",
    "confirmed_at": "2024-01-15T09:30:00Z"
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Only confirm after successful fiat delivery</li>
                  <li>• Include detailed delivery confirmation codes</li>
                  <li>• Store transaction hashes for reconciliation</li>
                  <li>• Confirm settlements as quickly as possible</li>
                  <li>• Include recipient confirmation when available</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Avoid</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Confirming without actual fiat delivery</li>
                  <li>• Using fake or invalid confirmation codes</li>
                  <li>• Delaying confirmation unnecessarily</li>
                  <li>• Confirming expired settlement orders</li>
                  <li>• Missing delivery timestamp accuracy</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
