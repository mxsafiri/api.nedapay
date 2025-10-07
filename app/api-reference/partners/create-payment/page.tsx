import { ApiPlayground } from '@/components/api-playground'
import { CreditCard, Clock, CheckCircle, AlertTriangle, Globe, Shield } from 'lucide-react'

export default function CreatePaymentPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Payment</h1>
          <p className="text-foreground-secondary">
            Initiate cross-border payments through NEDApay's global provider network using standard fiat APIs.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Request Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
            <li><a href="#errors" className="text-blue-400 hover:underline">Error Handling</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="POST"
            endpoint="/partners/payments"
            title="Create Payment"
            description="Create a cross-border payment through NEDApay's provider network"
            requestBody={{
              "amount": "1000.00",
              "source_currency": "USD",
              "destination_currency": "TZS",
              "recipient": {
                "name": "John Doe",
                "phone": "+255744123456",
                "institution": "VODACOM_MPESA",
                "account_identifier": "255744123456"
              },
              "sender": {
                "name": "ABSA Bank",
                "reference": "TXN-2024-001234"
              },
              "purpose": "Family support",
              "partner_reference": "ABSA-PAY-001234"
            }}
            responseExample={{
              "status": "success",
              "message": "Payment initiated successfully",
              "data": {
                "payment_id": "pay_550e8400e29b41d4a716446655440000",
                "status": "processing",
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
                "estimated_delivery": "2-3 minutes",
                "provider": "thunes_global",
                "created_at": "2024-01-15T10:00:00Z",
                "expires_at": "2024-01-15T10:15:00Z"
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
              The Create Payment endpoint allows partner institutions to initiate cross-border payments 
              through NEDApay's global provider network. Partners send standard fiat payment requests, 
              and NEDApay handles all blockchain operations and stablecoin settlements behind the scenes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Partner Benefits
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• No cryptocurrency handling required</li>
                  <li>• 2-3 minute settlement times</li>
                  <li>• Competitive exchange rates</li>
                  <li>• Standard REST API integration</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Behind the Scenes
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• NEDApay routing engine selects optimal provider</li>
                  <li>• Stablecoin payment to global provider (Thunes)</li>
                  <li>• Provider delivers fiat to recipient</li>
                  <li>• Partner settled in fiat through sub-account</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Partner Integration:</strong> This API is designed for banks, PSPs, and MNOs 
                who want to offer global payment services to their customers without dealing with 
                cryptocurrency infrastructure.
              </p>
            </div>
          </section>

          {/* Parameters */}
          <section id="parameters">
            <h2 className="text-2xl font-semibold mb-4">Request Parameters</h2>
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
                    <td className="p-4 font-mono text-sm">amount</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Amount to send in source currency (e.g., "1000.00")
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">source_currency</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Source currency code (USD, EUR, GBP)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">destination_currency</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Destination currency code (TZS, KES, UGX, NGN)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">recipient</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Recipient details including name, phone, institution
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">sender</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Sender information and internal reference
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">purpose</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Payment purpose for compliance (e.g., "Family support")
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">partner_reference</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Partner's internal reference for tracking
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
              Returns payment details including routing information, fees, and estimated delivery time.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Success Response (201 Created)</h3>
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-6">
{`{
  "status": "success",
  "message": "Payment initiated successfully",
  "data": {
    "payment_id": "pay_550e8400e29b41d4a716446655440000",
    "status": "processing",
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
    "estimated_delivery": "2-3 minutes",
    "provider": "thunes_global",
    "recipient": {
      "name": "John Doe",
      "institution": "VODACOM_MPESA",
      "masked_account": "***123456"
    },
    "created_at": "2024-01-15T10:00:00Z",
    "expires_at": "2024-01-15T10:15:00Z"
  }
}`}
            </div>

            <h3 className="text-lg font-medium mb-3">Payment Status Values</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <div>
                    <span className="font-medium">processing</span>
                    <p className="text-xs text-foreground-secondary">Payment being routed to provider</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <div>
                    <span className="font-medium">completed</span>
                    <p className="text-xs text-foreground-secondary">Successfully delivered to recipient</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <div>
                    <span className="font-medium">failed</span>
                    <p className="text-xs text-foreground-secondary">Payment could not be completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-orange-400" />
                  <div>
                    <span className="font-medium">expired</span>
                    <p className="text-xs text-foreground-secondary">Payment window expired</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Use Cases</h2>
            
            <div className="space-y-6">
              {/* Bank Transfer Example */}
              <div>
                <h3 className="text-lg font-medium mb-3">Bank Customer Remittance</h3>
                <p className="text-sm text-foreground-secondary mb-3">
                  ABSA customer sending money to family in Tanzania
                </p>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "amount": "500.00",
  "source_currency": "USD",
  "destination_currency": "TZS",
  "recipient": {
    "name": "Mary Mwalimu",
    "phone": "+255744987654",
    "institution": "VODACOM_MPESA",
    "account_identifier": "255744987654"
  },
  "sender": {
    "name": "ABSA Bank - John Smith",
    "reference": "ABSA-REM-789012"
  },
  "purpose": "Family support",
  "partner_reference": "ABSA-TXN-2024-001234"
}`}
                </div>
              </div>

              {/* Business Payment Example */}
              <div>
                <h3 className="text-lg font-medium mb-3">Business Payment to Supplier</h3>
                <p className="text-sm text-foreground-secondary mb-3">
                  Corporate payment through PSP to Kenyan supplier
                </p>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "amount": "2500.00",
  "source_currency": "USD",
  "destination_currency": "KES",
  "recipient": {
    "name": "Nairobi Supplies Ltd",
    "phone": "+254712345678",
    "institution": "EQUITY_BANK",
    "account_identifier": "1234567890"
  },
  "sender": {
    "name": "Global Corp via FlutterWave",
    "reference": "CORP-PAY-456789"
  },
  "purpose": "Trade payment",
  "partner_reference": "FLW-B2B-2024-005678"
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
                <h4 className="font-medium text-red-400 mb-2">400 Bad Request</h4>
                <p className="text-sm text-red-300 mb-3">Invalid request parameters</p>
                <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
{`{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    {
      "field": "amount",
      "message": "Amount must be greater than 0"
    }
  ]
}`}
                </div>
              </div>

              <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg">
                <h4 className="font-medium text-red-400 mb-2">402 Payment Required</h4>
                <p className="text-sm text-red-300 mb-3">Insufficient balance in sub-account</p>
                <div className="p-3 bg-code-background border border-code-border rounded font-mono text-xs">
{`{
  "status": "error",
  "message": "Insufficient balance",
  "error": {
    "code": "INSUFFICIENT_BALANCE",
    "available_balance": "750.00",
    "required_amount": "1007.50"
  }
}`}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
