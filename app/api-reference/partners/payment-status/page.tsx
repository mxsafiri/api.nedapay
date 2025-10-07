import { ApiPlayground } from '@/components/api-playground'
import { Clock, CheckCircle, AlertTriangle, Eye, RefreshCw } from 'lucide-react'

export default function PaymentStatusPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Get Payment Status</h1>
          <p className="text-foreground-secondary">
            Track payment progress and delivery confirmation in real-time for payments initiated through NEDApay.
          </p>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/partners/payments/{payment_id}"
            title="Get Payment Status"
            description="Retrieve real-time status and delivery information for a payment"
            parameters={[
              {
                name: "payment_id",
                type: "path",
                required: true,
                description: "Unique payment identifier returned from create payment",
                example: "pay_550e8400e29b41d4a716446655440000"
              }
            ]}
            responseExample={{
              "status": "success",
              "data": {
                "payment_id": "pay_550e8400e29b41d4a716446655440000",
                "status": "completed",
                "amount": "1000.00",
                "source_currency": "USD",
                "destination_currency": "TZS",
                "destination_amount": "2600000.00",
                "exchange_rate": "2600.00",
                "fees": {
                  "partner_fee": "5.00",
                  "processing_fee": "2.50",
                  "total_deducted": "1007.50"
                },
                "provider": "thunes_global",
                "recipient": {
                  "name": "John Doe",
                  "institution": "VODACOM_MPESA",
                  "masked_account": "***123456"
                },
                "timeline": [
                  {
                    "status": "initiated",
                    "timestamp": "2024-01-15T10:00:00Z",
                    "message": "Payment request received"
                  },
                  {
                    "status": "processing",
                    "timestamp": "2024-01-15T10:00:15Z",
                    "message": "Routed to provider: Thunes Global"
                  },
                  {
                    "status": "completed",
                    "timestamp": "2024-01-15T10:02:30Z",
                    "message": "Successfully delivered to recipient"
                  }
                ],
                "delivery_confirmation": {
                  "delivered_at": "2024-01-15T10:02:30Z",
                  "confirmation_code": "TXN789012345",
                  "delivery_method": "Mobile Money"
                },
                "created_at": "2024-01-15T10:00:00Z",
                "updated_at": "2024-01-15T10:02:30Z"
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
              The Payment Status endpoint provides real-time tracking information for payments processed 
              through NEDApay. Partners can monitor payment progress, receive delivery confirmations, 
              and access detailed timeline information for customer service and reconciliation purposes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  Real-Time Tracking
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Live payment status updates</li>
                  <li>• Detailed timeline of events</li>
                  <li>• Provider routing information</li>
                  <li>• Delivery confirmations</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Partner Benefits
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Customer service support</li>
                  <li>• Automated reconciliation</li>
                  <li>• Compliance reporting</li>
                  <li>• Issue resolution tracking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Status Values */}
          <section id="status-values">
            <h2 className="text-2xl font-semibold mb-4">Payment Status Values</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Active States</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-blue-500/20 bg-blue-500/10 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <div>
                      <span className="font-medium text-blue-400">initiated</span>
                      <p className="text-xs text-blue-300">Payment request received and validated</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-yellow-500/20 bg-yellow-500/10 rounded-lg">
                    <RefreshCw className="h-5 w-5 text-yellow-400" />
                    <div>
                      <span className="font-medium text-yellow-400">processing</span>
                      <p className="text-xs text-yellow-300">Being routed to settlement provider</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Final States</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-green-500/20 bg-green-500/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <div>
                      <span className="font-medium text-green-400">completed</span>
                      <p className="text-xs text-green-300">Successfully delivered to recipient</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-red-500/20 bg-red-500/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <div>
                      <span className="font-medium text-red-400">failed</span>
                      <p className="text-xs text-red-300">Payment could not be completed</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border border-orange-500/20 bg-orange-500/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-orange-400" />
                    <div>
                      <span className="font-medium text-orange-400">expired</span>
                      <p className="text-xs text-orange-300">Payment window expired without completion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Response Fields */}
          <section id="response-fields">
            <h2 className="text-2xl font-semibold mb-4">Response Fields</h2>
            
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Payment Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>payment_id</code> - Unique payment identifier</li>
                  <li><code>status</code> - Current payment status</li>
                  <li><code>amount</code> - Original payment amount</li>
                  <li><code>exchange_rate</code> - Applied exchange rate</li>
                  <li><code>provider</code> - Settlement provider used</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Timeline Array</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>status</code> - Status at this point in time</li>
                  <li><code>timestamp</code> - When this status occurred</li>
                  <li><code>message</code> - Human-readable description</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Delivery Confirmation</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>delivered_at</code> - Exact delivery timestamp</li>
                  <li><code>confirmation_code</code> - Provider's confirmation reference</li>
                  <li><code>delivery_method</code> - How payment was delivered</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Responses</h2>
            
            <div className="space-y-6">
              {/* Processing Payment */}
              <div>
                <h3 className="text-lg font-medium mb-3">Payment in Progress</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "payment_id": "pay_550e8400e29b41d4a716446655440000",
    "status": "processing",
    "amount": "500.00",
    "source_currency": "USD",
    "destination_currency": "KES",
    "destination_amount": "65000.00",
    "exchange_rate": "130.00",
    "provider": "thunes_global",
    "timeline": [
      {
        "status": "initiated",
        "timestamp": "2024-01-15T14:30:00Z",
        "message": "Payment request received"
      },
      {
        "status": "processing",
        "timestamp": "2024-01-15T14:30:15Z",
        "message": "Routed to provider: Thunes Global"
      }
    ],
    "estimated_completion": "2024-01-15T14:32:00Z",
    "created_at": "2024-01-15T14:30:00Z"
  }
}`}
                </div>
              </div>

              {/* Failed Payment */}
              <div>
                <h3 className="text-lg font-medium mb-3">Failed Payment</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "payment_id": "pay_abc123def456ghi789jkl012mno345",
    "status": "failed",
    "amount": "750.00",
    "source_currency": "USD",
    "destination_currency": "TZS",
    "failure_reason": {
      "code": "RECIPIENT_ACCOUNT_INVALID",
      "message": "Recipient mobile number not registered with M-Pesa",
      "provider_message": "Invalid MSISDN"
    },
    "timeline": [
      {
        "status": "initiated",
        "timestamp": "2024-01-15T16:00:00Z",
        "message": "Payment request received"
      },
      {
        "status": "processing",
        "timestamp": "2024-01-15T16:00:15Z",
        "message": "Routed to provider: Thunes Global"
      },
      {
        "status": "failed",
        "timestamp": "2024-01-15T16:01:30Z",
        "message": "Provider rejected: Invalid recipient account"
      }
    ],
    "refund_status": "processing",
    "created_at": "2024-01-15T16:00:00Z"
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Webhooks */}
          <section id="webhooks">
            <h2 className="text-2xl font-semibold mb-4">Real-Time Updates</h2>
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Webhook Notifications</h4>
              <p className="text-sm text-blue-300 mb-3">
                Instead of polling this endpoint, partners can configure webhook URLs to receive 
                real-time status updates automatically.
              </p>
              <div className="text-sm text-blue-300">
                <strong>Webhook Events:</strong> payment.initiated, payment.processing, payment.completed, payment.failed
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
                  <li>• Use webhooks for real-time updates instead of polling</li>
                  <li>• Store payment_id for future reference and reconciliation</li>
                  <li>• Check status before retrying failed payments</li>
                  <li>• Use timeline data for customer service inquiries</li>
                  <li>• Monitor delivery confirmations for compliance</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Avoid</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Polling this endpoint more than once per minute</li>
                  <li>• Assuming failed payments are permanent without checking reason</li>
                  <li>• Ignoring timeline information for troubleshooting</li>
                  <li>• Not handling network timeouts gracefully</li>
                  <li>• Missing webhook configuration for critical updates</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
