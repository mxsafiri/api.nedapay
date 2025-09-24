import { ApiPlayground } from '@/components/api-playground'
import { CheckCircle, XCircle, AlertTriangle, User, Shield, Clock, Smartphone } from 'lucide-react'

export default function VerifyAccountPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Verify Account</h1>
          <p className="text-foreground-secondary">
            Validate recipient account details before processing payments to ensure successful fiat delivery and reduce failed transactions.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#request-body" className="text-blue-400 hover:underline">Request Body</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#validation-types" className="text-blue-400 hover:underline">Validation Types</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="POST"
            endpoint="/general/verify-account"
            title="Verify Account Details"
            description="Validate recipient account information before payment processing"
            requestBody={{
              "institution": "VODACOM",
              "accountIdentifier": "255744123456",
              "accountName": "John Doe",
              "currency": "TZS",
              "verificationType": "name_match",
              "metadata": {
                "transactionAmount": "100000.00",
                "purpose": "payment_validation"
              }
            }}
            responseExample={{
              "status": "success",
              "message": "Account verification completed",
              "data": {
                "verificationId": "verify_550e8400e29b41d4a716446655440000",
                "accountStatus": "valid",
                "verification": {
                  "accountExists": true,
                  "nameMatch": "exact",
                  "accountActive": true,
                  "canReceivePayments": true,
                  "dailyLimitCheck": "within_limits"
                },
                "accountDetails": {
                  "institution": "VODACOM",
                  "institutionName": "Vodacom M-Pesa Tanzania",
                  "accountIdentifier": "255744123456",
                  "accountType": "mobile_money",
                  "currency": "TZS",
                  "registeredName": "John Doe",
                  "nameMatchScore": 100,
                  "accountStatus": "active"
                },
                "limits": {
                  "maxSingleTransaction": "10000000.00",
                  "dailyLimit": "20000000.00",
                  "remainingDailyLimit": "18500000.00",
                  "monthlyLimit": "50000000.00"
                },
                "riskAssessment": {
                  "riskLevel": "low",
                  "riskScore": 15,
                  "factors": [
                    "account_age_good",
                    "transaction_history_positive",
                    "name_verification_passed"
                  ],
                  "recommendations": [
                    "proceed_with_payment"
                  ]
                },
                "metadata": {
                  "verificationTime": "1.2s",
                  "dataSource": "institution_api",
                  "confidence": 98.5,
                  "lastUpdated": "2024-01-15T10:00:00Z"
                },
                "validity": {
                  "validUntil": "2024-01-15T10:30:00Z",
                  "cacheExpiry": "2024-01-15T10:15:00Z"
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
              The account verification endpoint validates recipient details before payment processing to reduce 
              failed transactions and improve success rates. It checks account existence, name matching, 
              transaction limits, and provides risk assessment for informed decision-making.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Validation Capabilities
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Account existence verification</li>
                  <li>• Name matching and scoring</li>
                  <li>• Transaction limit checking</li>
                  <li>• Account status validation</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Risk Assessment
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• Automated risk scoring</li>
                  <li>• Account history analysis</li>
                  <li>• Fraud detection indicators</li>
                  <li>• Payment recommendations</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Success Rate Improvement:</strong> Using account verification before payment processing 
                can improve success rates by 15-25% and reduce customer support inquiries related to failed payments.
              </p>
            </div>
          </section>

          {/* Request Body */}
          <section id="request-body">
            <h2 className="text-2xl font-semibold mb-4">Request Body Parameters</h2>
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
                    <td className="p-4 font-mono text-sm">institution</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Institution code (VODACOM, CRDB, MPESA_KE, etc.)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">accountIdentifier</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Account number or mobile phone number
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">accountName</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Expected account holder name for verification
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">currency</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs">Required</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Currency code for the account (TZS, KES, UGX)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">verificationType</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Type of verification (basic, name_match, full) - default: name_match
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">metadata</td>
                    <td className="p-4 text-sm">object</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Additional context (transaction amount, purpose, etc.)
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
              Returns comprehensive verification results including account status, name matching scores, 
              transaction limits, and risk assessment with actionable recommendations.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Response Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Verification Results</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>accountExists</code> - Whether the account is found in institution records</li>
                  <li><code>nameMatch</code> - Name matching result (exact, partial, none)</li>
                  <li><code>accountActive</code> - Account status and ability to receive payments</li>
                  <li><code>nameMatchScore</code> - Numerical score (0-100) for name similarity</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Account Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>registeredName</code> - Official name on the account</li>
                  <li><code>accountType</code> - Type of account (mobile_money, bank, etc.)</li>
                  <li><code>limits</code> - Transaction and daily limits for the account</li>
                  <li><code>remainingDailyLimit</code> - Available daily transaction capacity</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Risk Assessment</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>riskLevel</code> - Overall risk assessment (low, medium, high)</li>
                  <li><code>riskScore</code> - Numerical risk score (0-100, lower is better)</li>
                  <li><code>factors</code> - Array of risk factors identified</li>
                  <li><code>recommendations</code> - Suggested actions based on assessment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Validation Types */}
          <section id="validation-types">
            <h2 className="text-2xl font-semibold mb-4">Verification Types & Results</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 border border-blue-500/20 bg-blue-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-blue-400 mb-3 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Basic Verification
                </h3>
                <ul className="text-sm text-blue-300 space-y-2">
                  <li>• Account existence check</li>
                  <li>• Account status validation</li>
                  <li>• Basic format verification</li>
                  <li>• <strong>Speed:</strong> ~0.5 seconds</li>
                  <li>• <strong>Cost:</strong> Low</li>
                </ul>
              </div>

              <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-green-400 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Name Match (Default)
                </h3>
                <ul className="text-sm text-green-300 space-y-2">
                  <li>• All basic checks plus:</li>
                  <li>• Name similarity scoring</li>
                  <li>• Fuzzy matching algorithms</li>
                  <li>• <strong>Speed:</strong> ~1.2 seconds</li>
                  <li>• <strong>Cost:</strong> Standard</li>
                </ul>
              </div>

              <div className="p-4 border border-purple-500/20 bg-purple-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-purple-400 mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Full Verification
                </h3>
                <ul className="text-sm text-purple-300 space-y-2">
                  <li>• All checks plus:</li>
                  <li>• Risk assessment</li>
                  <li>• Transaction history analysis</li>
                  <li>• <strong>Speed:</strong> ~2.5 seconds</li>
                  <li>• <strong>Cost:</strong> Premium</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Name Match Results
                </h4>
                <ul className="text-sm text-green-300 space-y-2">
                  <li>• <strong>exact (100):</strong> Perfect name match</li>
                  <li>• <strong>high (85-99):</strong> Very close match, likely same person</li>
                  <li>• <strong>partial (60-84):</strong> Possible match, review recommended</li>
                  <li>• <strong>low (30-59):</strong> Poor match, proceed with caution</li>
                  <li>• <strong>none (0-29):</strong> No meaningful match found</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                <h4 className="font-medium text-orange-400 mb-3 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Risk Levels
                </h4>
                <ul className="text-sm text-orange-300 space-y-2">
                  <li>• <strong>low (0-30):</strong> Proceed with confidence</li>
                  <li>• <strong>medium (31-60):</strong> Additional verification recommended</li>
                  <li>• <strong>high (61-100):</strong> Manual review required</li>
                  <li>• <strong>Factors:</strong> Account age, transaction history, name match</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Account Status Values</h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">valid</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span className="text-yellow-400">pending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-400" />
                  <span className="text-red-400">invalid</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-orange-400" />
                  <span className="text-orange-400">restricted</span>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* Mobile Money Verification */}
              <div>
                <h3 className="text-lg font-medium mb-3">Mobile Money Account Verification</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`POST /general/verify-account
Content-Type: application/json

{
  "institution": "VODACOM",
  "accountIdentifier": "255744123456",
  "accountName": "John Doe",
  "currency": "TZS",
  "verificationType": "name_match"
}`}
                </div>
              </div>

              {/* Bank Account Verification */}
              <div>
                <h3 className="text-lg font-medium mb-3">Bank Account with Full Verification</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`POST /general/verify-account
Content-Type: application/json

{
  "institution": "CRDB",
  "accountIdentifier": "0123456789012345",
  "accountName": "Jane Smith",
  "currency": "TZS",
  "verificationType": "full",
  "metadata": {
    "transactionAmount": "5000000.00",
    "purpose": "high_value_verification"
  }
}`}
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Successful Verification</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "verificationId": "verify_550e8400e29b41d4a716446655440000",
    "accountStatus": "valid",
    "verification": {
      "accountExists": true,
      "nameMatch": "exact",
      "accountActive": true,
      "canReceivePayments": true
    },
    "accountDetails": {
      "registeredName": "John Doe",
      "nameMatchScore": 100,
      "accountType": "mobile_money"
    },
    "riskAssessment": {
      "riskLevel": "low",
      "riskScore": 15,
      "recommendations": ["proceed_with_payment"]
    }
  }
}`}
                </div>
              </div>

              {/* Failed Verification */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Failed Verification</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "verificationId": "verify_550e8400e29b41d4a716446655440001",
    "accountStatus": "invalid",
    "verification": {
      "accountExists": false,
      "nameMatch": "none",
      "accountActive": false,
      "canReceivePayments": false
    },
    "riskAssessment": {
      "riskLevel": "high",
      "riskScore": 95,
      "recommendations": ["do_not_proceed", "verify_details"]
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Verification Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended Usage</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Always verify accounts before high-value transactions</li>
                  <li>• Use name_match verification as the standard</li>
                  <li>• Cache verification results for 15 minutes</li>
                  <li>• Handle partial name matches with user confirmation</li>
                  <li>• Implement retry logic for temporary failures</li>
                  <li>• Store verification IDs for audit trails</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Important Considerations</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Verification results expire after 30 minutes</li>
                  <li>• Some institutions may have limited verification capabilities</li>
                  <li>• High-risk accounts require manual review</li>
                  <li>• Name matching may vary by language and culture</li>
                  <li>• Always respect user privacy and data protection</li>
                  <li>• Rate limits apply: 100 verifications per minute</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
