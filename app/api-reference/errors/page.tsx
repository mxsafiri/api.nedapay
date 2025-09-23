import { AlertTriangle, XCircle, AlertCircle, Info } from 'lucide-react'

export default function ErrorsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Error Handling</h1>
          <p className="text-foreground-secondary">
            Understanding NEDApay API error responses and how to handle them in your integration.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay uses conventional HTTP response codes to indicate the success or failure of an API request. 
            In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that 
            failed given the information provided, and codes in the 5xx range indicate an error with NEDApay's servers.
          </p>
        </section>

        {/* HTTP Status Codes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">HTTP Status Codes</h2>
          <div className="space-y-4">
            
            {/* Success Codes */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4 text-green-400">Success Codes (2xx)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">200 OK</span>
                    <p className="text-sm text-foreground-secondary">Request succeeded</p>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Success</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">201 Created</span>
                    <p className="text-sm text-foreground-secondary">Resource created successfully</p>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Success</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">202 Accepted</span>
                    <p className="text-sm text-foreground-secondary">Request accepted for processing</p>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Success</span>
                </div>
              </div>
            </div>

            {/* Client Error Codes */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4 text-orange-400">Client Error Codes (4xx)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">400 Bad Request</span>
                    <p className="text-sm text-foreground-secondary">Invalid request parameters</p>
                  </div>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Client Error</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">401 Unauthorized</span>
                    <p className="text-sm text-foreground-secondary">Invalid or missing API key</p>
                  </div>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Client Error</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">403 Forbidden</span>
                    <p className="text-sm text-foreground-secondary">Insufficient permissions</p>
                  </div>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Client Error</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">404 Not Found</span>
                    <p className="text-sm text-foreground-secondary">Resource not found</p>
                  </div>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Client Error</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">422 Unprocessable Entity</span>
                    <p className="text-sm text-foreground-secondary">Valid request but cannot be processed</p>
                  </div>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Client Error</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">429 Too Many Requests</span>
                    <p className="text-sm text-foreground-secondary">Rate limit exceeded</p>
                  </div>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Client Error</span>
                </div>
              </div>
            </div>

            {/* Server Error Codes */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4 text-red-400">Server Error Codes (5xx)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">500 Internal Server Error</span>
                    <p className="text-sm text-foreground-secondary">Something went wrong on our end</p>
                  </div>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Server Error</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">502 Bad Gateway</span>
                    <p className="text-sm text-foreground-secondary">Invalid response from upstream server</p>
                  </div>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Server Error</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">503 Service Unavailable</span>
                    <p className="text-sm text-foreground-secondary">Service temporarily unavailable</p>
                  </div>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Server Error</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">504 Gateway Timeout</span>
                    <p className="text-sm text-foreground-secondary">Request timeout</p>
                  </div>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Server Error</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Error Response Format */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Error Response Format</h2>
          <p className="text-foreground-secondary mb-6">
            All error responses follow a consistent JSON format with detailed information to help you debug issues.
          </p>

          <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm mb-6">
            <div className="text-foreground-secondary mb-2">Standard Error Response</div>
            <pre className="text-red-400">{`{
  "error": "validation_failed",
  "message": "The request parameters are invalid",
  "details": {
    "field": "amount",
    "code": "invalid_format",
    "description": "Amount must be a positive number"
  },
  "request_id": "req_abc123def456",
  "timestamp": "2024-01-15T10:30:00Z"
}`}</pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Error Fields</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-sm">error</span>
                  <p className="text-xs text-foreground-secondary">Machine-readable error code</p>
                </div>
                <div>
                  <span className="font-medium text-sm">message</span>
                  <p className="text-xs text-foreground-secondary">Human-readable error description</p>
                </div>
                <div>
                  <span className="font-medium text-sm">details</span>
                  <p className="text-xs text-foreground-secondary">Additional context about the error</p>
                </div>
                <div>
                  <span className="font-medium text-sm">request_id</span>
                  <p className="text-xs text-foreground-secondary">Unique identifier for debugging</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Using Request IDs</h3>
              <p className="text-sm text-foreground-secondary mb-3">
                Include the request_id when contacting support for faster resolution.
              </p>
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-sm">
                <strong className="text-blue-400">Pro Tip:</strong> Log request IDs in your application for easier debugging.
              </div>
            </div>
          </div>
        </section>

        {/* Common Error Codes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Common Error Codes</h2>
          <div className="space-y-6">
            
            {/* Authentication Errors */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-400 mr-3" />
                <h3 className="text-lg font-medium">Authentication Errors</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">invalid_api_key</span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">401</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">The provided API key is invalid or has been revoked.</p>
                </div>
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">insufficient_permissions</span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">403</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">Your API key doesn't have permission to access this resource.</p>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">rate_limit_exceeded</span>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">429</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">You've exceeded your API rate limit. Wait before making more requests.</p>
                </div>
              </div>
            </div>

            {/* Validation Errors */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <XCircle className="h-6 w-6 text-red-400 mr-3" />
                <h3 className="text-lg font-medium">Validation Errors</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">validation_failed</span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">400</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">One or more request parameters are invalid.</p>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">missing_required_field</span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">400</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">A required field is missing from the request.</p>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">invalid_currency_pair</span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">400</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">The specified currency pair is not supported.</p>
                </div>
              </div>
            </div>

            {/* Business Logic Errors */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-lg font-medium">Business Logic Errors</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">insufficient_liquidity</span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">422</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">No providers available for this transaction amount.</p>
                </div>
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">rate_expired</span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">422</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">The exchange rate has expired. Get a new rate.</p>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">compliance_check_required</span>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">423</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">Additional verification required before processing.</p>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">order_not_found</span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">404</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">The specified order ID does not exist.</p>
                </div>
              </div>
            </div>

            {/* Provider Errors */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-medium">Provider Errors</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">provider_unavailable</span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">503</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">The selected provider is temporarily unavailable.</p>
                </div>
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">provider_rejected</span>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">422</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">The provider rejected the transaction.</p>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">provider_timeout</span>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">504</span>
                  </div>
                  <p className="text-sm text-foreground-secondary">Provider response timeout. Transaction may still be processing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Error Handling Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Error Handling Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Retry Logic</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Implement exponential backoff for 5xx errors</li>
                <li>• Don't retry 4xx errors (except 429)</li>
                <li>• Respect Retry-After header for 429 responses</li>
                <li>• Maximum 3 retry attempts recommended</li>
                <li>• Log all retry attempts for debugging</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Error Logging</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Always log the request_id for support</li>
                <li>• Include full error response in logs</li>
                <li>• Monitor error rates and patterns</li>
                <li>• Set up alerts for critical errors</li>
                <li>• Never log sensitive data in error messages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Error Handling Code */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Example Error Handling</h2>
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">JavaScript Example</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`async function createOrder(orderData) {
  try {
    const response = await fetch('https://api.nedapay.io/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });

    if (!response.ok) {
      const error = await response.json();
      
      switch (error.error) {
        case 'rate_expired':
          // Get new rate and retry
          return await retryWithNewRate(orderData);
        case 'insufficient_liquidity':
          // Try again later or notify user
          throw new Error('Service temporarily unavailable');
        case 'validation_failed':
          // Fix validation issues
          throw new Error(\`Invalid data: \${error.details.description}\`);
        default:
          // Log for debugging
          console.error('API Error:', error.request_id, error);
          throw new Error('Payment processing failed');
      }
    }

    return await response.json();
  } catch (error) {
    // Handle network errors
    console.error('Network error:', error);
    throw error;
  }
}`}</pre>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Python Example</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`import requests
import time
import logging

def create_order_with_retry(order_data, max_retries=3):
    for attempt in range(max_retries):
        try:
            response = requests.post(
                'https://api.nedapay.io/v1/orders',
                headers={
                    'Authorization': 'Bearer your_api_key',
                    'Content-Type': 'application/json'
                },
                json=order_data
            )
            
            if response.status_code == 200:
                return response.json()
            
            error_data = response.json()
            error_code = error_data.get('error')
            
            if response.status_code == 429:
                # Rate limited - wait and retry
                retry_after = int(response.headers.get('Retry-After', 60))
                time.sleep(retry_after)
                continue
            elif error_code == 'rate_expired':
                # Get new rate and retry
                order_data = get_new_rate_and_update(order_data)
                continue
            elif response.status_code >= 500:
                # Server error - retry with backoff
                time.sleep(2 ** attempt)
                continue
            else:
                # Client error - don't retry
                raise Exception(f"API Error: {error_data['message']}")
                
        except requests.RequestException as e:
            logging.error(f"Request failed: {e}")
            if attempt == max_retries - 1:
                raise
            time.sleep(2 ** attempt)
    
    raise Exception("Max retries exceeded")`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Help */}
        <section className="mb-12">
          <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Need Help with Errors?</h3>
            <p className="text-foreground-secondary mb-4">
              If you're experiencing persistent errors or need help debugging an issue, our support team is here to help.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="#" 
                className="px-4 py-2 border border-border hover:bg-background-secondary rounded-lg text-sm font-medium transition-colors"
              >
                View Status Page
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
