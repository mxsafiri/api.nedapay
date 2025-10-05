import { AlertTriangle, Info, XCircle, CheckCircle, Search } from 'lucide-react'

export default function ErrorsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">API Error Codes</h1>
          <p className="text-foreground-secondary">
            Comprehensive guide to NEDApay API error codes, troubleshooting, and resolution steps for partners.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay uses conventional HTTP response codes to indicate the success or failure of API requests. 
            Codes in the 2xx range indicate success, codes in the 4xx range indicate client errors, 
            and codes in the 5xx range indicate server errors.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/10">
              <CheckCircle className="h-6 w-6 text-green-400 mb-2" />
              <h3 className="font-medium text-green-400">2xx Success</h3>
              <p className="text-sm text-foreground-secondary">Request successful</p>
            </div>
            <div className="p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/10">
              <Info className="h-6 w-6 text-yellow-400 mb-2" />
              <h3 className="font-medium text-yellow-400">4xx Client Error</h3>
              <p className="text-sm text-foreground-secondary">Invalid request</p>
            </div>
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/10">
              <XCircle className="h-6 w-6 text-red-400 mb-2" />
              <h3 className="font-medium text-red-400">5xx Server Error</h3>
              <p className="text-sm text-foreground-secondary">NEDApay error</p>
            </div>
            <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/10">
              <AlertTriangle className="h-6 w-6 text-blue-400 mb-2" />
              <h3 className="font-medium text-blue-400">Custom Codes</h3>
              <p className="text-sm text-foreground-secondary">Business logic errors</p>
            </div>
          </div>
        </section>

        {/* Error Response Format */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Error Response Format</h2>
          <div className="p-6 border border-border rounded-lg bg-background-secondary">
            <h3 className="text-lg font-medium mb-4">Standard Error Response</h3>
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
              <pre className="text-red-400">{`{
  "error": {
    "code": "INSUFFICIENT_BALANCE",
    "message": "Partner account has insufficient balance for this transaction",
    "details": {
      "required_amount": "100.00",
      "available_balance": "75.50",
      "currency": "USD"
    },
    "request_id": "req_abc123def456",
    "timestamp": "2025-10-05T18:35:00Z",
    "documentation_url": "https://docs.nedapay.io/errors#insufficient-balance"
  }
}`}</pre>
            </div>
          </div>
        </section>

        {/* Authentication Errors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Authentication Errors (401)</h2>
          <div className="space-y-4">
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-red-400">INVALID_API_KEY</h3>
                  <p className="text-sm text-foreground-secondary">The provided API key is invalid or expired</p>
                </div>
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">401</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Common Causes</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• API key not provided in Authorization header</li>
                    <li>• API key format incorrect (missing 'Bearer ' prefix)</li>
                    <li>• API key has been revoked or expired</li>
                    <li>• Using test key in production environment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Resolution</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Verify API key in partner dashboard</li>
                    <li>• Ensure correct Authorization header format</li>
                    <li>• Generate new API key if expired</li>
                    <li>• Check environment (test vs production)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-red-400">PARTNER_SUSPENDED</h3>
                  <p className="text-sm text-foreground-secondary">Partner account has been suspended</p>
                </div>
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">401</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Common Causes</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Compliance issues or KYC requirements</li>
                    <li>• Suspicious transaction patterns</li>
                    <li>• Outstanding payment obligations</li>
                    <li>• Terms of service violations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Resolution</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Contact partner support immediately</li>
                    <li>• Provide requested compliance documentation</li>
                    <li>• Resolve any outstanding issues</li>
                    <li>• Wait for account reactivation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Errors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Validation Errors (400)</h2>
          <div className="space-y-4">
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-yellow-400">INVALID_AMOUNT</h3>
                  <p className="text-sm text-foreground-secondary">Transaction amount is invalid or outside allowed limits</p>
                </div>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">400</span>
              </div>
              
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-4">
                <pre className="text-yellow-400">{`{
  "error": {
    "code": "INVALID_AMOUNT",
    "message": "Amount must be between 10.00 and 10000.00 USD",
    "details": {
      "provided_amount": "5.00",
      "min_amount": "10.00",
      "max_amount": "10000.00",
      "currency": "USD"
    }
  }
}`}</pre>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Common Causes</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Amount below minimum threshold</li>
                    <li>• Amount exceeds maximum limit</li>
                    <li>• Invalid decimal precision</li>
                    <li>• Negative or zero amounts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Resolution</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Check currency-specific limits</li>
                    <li>• Ensure proper decimal formatting</li>
                    <li>• Validate amount before API call</li>
                    <li>• Contact support for limit increases</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-yellow-400">INVALID_RECIPIENT</h3>
                  <p className="text-sm text-foreground-secondary">Recipient account details are invalid or cannot be verified</p>
                </div>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">400</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Common Causes</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Invalid account number format</li>
                    <li>• Account holder name mismatch</li>
                    <li>• Unsupported delivery method</li>
                    <li>• Account does not exist</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Resolution</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Verify account details with customer</li>
                    <li>• Use account verification API first</li>
                    <li>• Check supported delivery methods</li>
                    <li>• Ensure correct country/provider</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Logic Errors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Business Logic Errors (422)</h2>
          <div className="space-y-4">
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-orange-400">INSUFFICIENT_BALANCE</h3>
                  <p className="text-sm text-foreground-secondary">Partner account has insufficient balance for transaction</p>
                </div>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">422</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Common Causes</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Account balance below transaction amount</li>
                    <li>• Reserved funds not available</li>
                    <li>• Currency mismatch in balance</li>
                    <li>• Pending settlements reducing balance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Resolution</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Top up partner account balance</li>
                    <li>• Wait for pending settlements</li>
                    <li>• Check balance API before transactions</li>
                    <li>• Set up auto-funding if available</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-orange-400">RATE_EXPIRED</h3>
                  <p className="text-sm text-foreground-secondary">The locked exchange rate has expired</p>
                </div>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">422</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Common Causes</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Rate lock period exceeded (15 minutes)</li>
                    <li>• Market volatility causing rate refresh</li>
                    <li>• System maintenance affecting rates</li>
                    <li>• Using old rate_id in request</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Resolution</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Get fresh exchange rate</li>
                    <li>• Lock new rate if needed</li>
                    <li>• Reduce time between rate and order</li>
                    <li>• Implement rate refresh logic</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-orange-400">COMPLIANCE_CHECK_FAILED</h3>
                  <p className="text-sm text-foreground-secondary">Transaction failed compliance or AML screening</p>
                </div>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">422</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Common Causes</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Recipient on sanctions list</li>
                    <li>• High-risk country or region</li>
                    <li>• Insufficient customer KYC data</li>
                    <li>• Suspicious transaction pattern</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Resolution</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Provide additional KYC documentation</li>
                    <li>• Contact compliance team</li>
                    <li>• Verify recipient identity</li>
                    <li>• Review transaction purpose</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Server Errors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Server Errors (5xx)</h2>
          <div className="space-y-4">
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-red-400">INTERNAL_SERVER_ERROR</h3>
                  <p className="text-sm text-foreground-secondary">An unexpected error occurred on NEDApay's servers</p>
                </div>
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">500</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">What This Means</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Temporary system issue</li>
                    <li>• Database connectivity problem</li>
                    <li>• Third-party service unavailable</li>
                    <li>• Unexpected system behavior</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recommended Action</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Retry request after 30 seconds</li>
                    <li>• Implement exponential backoff</li>
                    <li>• Check system status page</li>
                    <li>• Contact support if persistent</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-red-400">SERVICE_UNAVAILABLE</h3>
                  <p className="text-sm text-foreground-secondary">NEDApay is temporarily unavailable due to maintenance</p>
                </div>
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">503</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">What This Means</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Scheduled maintenance window</li>
                    <li>• System upgrade in progress</li>
                    <li>• High traffic causing overload</li>
                    <li>• Emergency maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recommended Action</h4>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• Check maintenance schedule</li>
                    <li>• Retry after maintenance window</li>
                    <li>• Queue requests for later processing</li>
                    <li>• Monitor status page for updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limiting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Rate Limiting (429)</h2>
          <div className="p-6 border border-border rounded-lg bg-background-secondary">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-yellow-400">RATE_LIMIT_EXCEEDED</h3>
                <p className="text-sm text-foreground-secondary">Too many requests sent in a given time period</p>
              </div>
              <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">429</span>
            </div>
            
            <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-4">
              <pre className="text-yellow-400">{`{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Try again in 60 seconds.",
    "details": {
      "limit": "1000",
      "window": "3600",
      "retry_after": "60"
    }
  }
}`}</pre>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Rate Limits by Partner Tier</h4>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li>• <strong>Testing:</strong> 1,000 requests/hour</li>
                  <li>• <strong>Regional Partner:</strong> 10,000 requests/hour</li>
                  <li>• <strong>National Partner:</strong> 50,000 requests/hour</li>
                  <li>• <strong>Enterprise:</strong> Unlimited</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li>• Implement exponential backoff</li>
                  <li>• Cache responses when possible</li>
                  <li>• Use batch APIs for bulk operations</li>
                  <li>• Monitor rate limit headers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Error Handling Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Error Handling Best Practices</h2>
          <div className="space-y-6">
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Retry Logic Implementation</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`// Example retry logic in JavaScript
async function makeAPIRequest(url, options, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      
      if (response.ok) {
        return await response.json();
      }
      
      // Don't retry client errors (4xx)
      if (response.status >= 400 && response.status < 500) {
        throw new Error(\`Client error: \${response.status}\`);
      }
      
      // Retry server errors (5xx) and rate limits (429)
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      throw new Error(\`Server error: \${response.status}\`);
      
    } catch (error) {
      if (attempt === maxRetries) throw error;
    }
  }
}`}</pre>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Error Response Parsing</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`// Example error handling
try {
  const order = await createOrder(orderData);
  console.log('Order created:', order.id);
} catch (error) {
  const errorResponse = error.response?.data?.error;
  
  switch (errorResponse?.code) {
    case 'INSUFFICIENT_BALANCE':
      // Prompt partner to top up account
      showBalanceWarning(errorResponse.details);
      break;
      
    case 'INVALID_RECIPIENT':
      // Ask customer to verify account details
      showRecipientError(errorResponse.message);
      break;
      
    case 'RATE_EXPIRED':
      // Get fresh rate and retry
      const newRate = await getExchangeRate();
      return createOrder({...orderData, rate_id: newRate.id});
      
    default:
      // Log error and show generic message
      console.error('API Error:', errorResponse);
      showGenericError();
  }
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Support Information */}
        <section className="mb-12">
          <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Need Help?</h3>
            <p className="text-foreground-secondary mb-4">
              If you encounter errors not covered in this guide or need assistance with error resolution, 
              our partner support team is here to help.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Contact Support</h4>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li>• Email: info@nedapay.xyz</li>
                  <li>• Slack: #partner-support</li>
                  <li>• Phone: +1-555-NEDAPAY</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Include in Support Requests</h4>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li>• Request ID from error response</li>
                  <li>• Full error message and code</li>
                  <li>• Steps to reproduce the issue</li>
                  <li>• Partner ID and environment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
