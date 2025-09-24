import { ApiPlayground } from '@/components/api-playground'
import { Building2, Smartphone, CreditCard, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function ListSupportedInstitutionsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">List Supported Institutions</h1>
          <p className="text-foreground-secondary">
            Get comprehensive information about all financial institutions integrated with NEDApay for fiat settlement across East Africa.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 p-4 bg-background-secondary rounded-lg border border-border">
          <h3 className="font-medium mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="text-blue-400 hover:underline">Overview</a></li>
            <li><a href="#parameters" className="text-blue-400 hover:underline">Parameters</a></li>
            <li><a href="#response" className="text-blue-400 hover:underline">Response Format</a></li>
            <li><a href="#institution-types" className="text-blue-400 hover:underline">Institution Types</a></li>
            <li><a href="#examples" className="text-blue-400 hover:underline">Examples</a></li>
          </ul>
        </div>

        {/* API Playground */}
        <div className="mb-12">
          <ApiPlayground
            method="GET"
            endpoint="/general/institutions"
            title="List Supported Institutions"
            description="Retrieve all financial institutions available for fiat settlement"
            parameters={[
              {
                name: "country",
                type: "query",
                required: false,
                description: "Filter by country code (TZ, KE, UG)",
                example: "TZ"
              },
              {
                name: "currency",
                type: "query",
                required: false,
                description: "Filter by supported currency (TZS, KES, UGX)",
                example: "TZS"
              },
              {
                name: "type",
                type: "query",
                required: false,
                description: "Filter by institution type (mobile_money, bank, fintech)",
                example: "mobile_money"
              },
              {
                name: "status",
                type: "query",
                required: false,
                description: "Filter by operational status (active, maintenance)",
                example: "active"
              }
            ]}
            responseExample={{
              "status": "success",
              "message": "Institutions retrieved successfully",
              "data": {
                "institutions": [
                  {
                    "institutionCode": "VODACOM",
                    "institutionName": "Vodacom M-Pesa Tanzania",
                    "type": "mobile_money",
                    "country": "TZ",
                    "currency": "TZS",
                    "status": "active",
                    "capabilities": {
                      "sendMoney": true,
                      "receiveMoney": true,
                      "accountValidation": true,
                      "realTimeSettlement": true
                    },
                    "limits": {
                      "minAmount": "1000.00",
                      "maxAmount": "10000000.00",
                      "dailyLimit": "20000000.00",
                      "monthlyLimit": "50000000.00"
                    },
                    "accountFormat": {
                      "type": "phone_number",
                      "pattern": "^255[67][0-9]{8}$",
                      "example": "255744123456",
                      "description": "Tanzanian mobile number starting with 255"
                    },
                    "operationalHours": {
                      "timezone": "Africa/Dar_es_Salaam",
                      "schedule": "24/7",
                      "maintenanceWindow": "02:00-04:00 EAT"
                    },
                    "fees": {
                      "settlementFee": "0.5%",
                      "minimumFee": "500.00",
                      "maximumFee": "5000.00"
                    },
                    "processingTime": {
                      "average": "2-5 minutes",
                      "maximum": "15 minutes"
                    },
                    "lastUpdated": "2024-01-15T10:00:00Z"
                  },
                  {
                    "institutionCode": "CRDB",
                    "institutionName": "CRDB Bank Tanzania",
                    "type": "bank",
                    "country": "TZ",
                    "currency": "TZS",
                    "status": "active",
                    "capabilities": {
                      "sendMoney": true,
                      "receiveMoney": true,
                      "accountValidation": true,
                      "realTimeSettlement": false
                    },
                    "limits": {
                      "minAmount": "10000.00",
                      "maxAmount": "100000000.00",
                      "dailyLimit": "500000000.00",
                      "monthlyLimit": "2000000000.00"
                    },
                    "accountFormat": {
                      "type": "account_number",
                      "pattern": "^[0-9]{13,16}$",
                      "example": "0123456789012345",
                      "description": "13-16 digit CRDB account number"
                    },
                    "operationalHours": {
                      "timezone": "Africa/Dar_es_Salaam",
                      "schedule": "06:00-22:00 EAT",
                      "maintenanceWindow": "22:00-06:00 EAT"
                    },
                    "fees": {
                      "settlementFee": "0.3%",
                      "minimumFee": "1000.00",
                      "maximumFee": "10000.00"
                    },
                    "processingTime": {
                      "average": "5-15 minutes",
                      "maximum": "1 hour"
                    },
                    "lastUpdated": "2024-01-15T10:00:00Z"
                  }
                ],
                "summary": {
                  "totalInstitutions": 26,
                  "byCountry": {
                    "TZ": 12,
                    "KE": 8,
                    "UG": 6
                  },
                  "byType": {
                    "mobile_money": 15,
                    "bank": 9,
                    "fintech": 2
                  },
                  "activeInstitutions": 24,
                  "maintenanceInstitutions": 2
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
              This endpoint provides comprehensive information about all financial institutions integrated 
              with NEDApay for fiat settlement operations. It includes mobile money operators, commercial 
              banks, and fintech companies across Tanzania, Kenya, and Uganda.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-medium text-blue-400 mb-2 flex items-center">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile Money
                </h4>
                <ul className="text-sm text-blue-300 space-y-1">
                  <li>• Vodacom M-Pesa (Tanzania)</li>
                  <li>• Safaricom M-Pesa (Kenya)</li>
                  <li>• MTN Mobile Money (Uganda)</li>
                  <li>• Airtel Money (Multi-country)</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-green-400 mb-2 flex items-center">
                  <Building2 className="h-4 w-4 mr-2" />
                  Commercial Banks
                </h4>
                <ul className="text-sm text-green-300 space-y-1">
                  <li>• CRDB Bank (Tanzania)</li>
                  <li>• Equity Bank (Multi-country)</li>
                  <li>• Standard Chartered</li>
                  <li>• Stanbic Bank</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h4 className="font-medium text-purple-400 mb-2 flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Fintech Partners
                </h4>
                <ul className="text-sm text-purple-300 space-y-1">
                  <li>• Digital payment processors</li>
                  <li>• Wallet providers</li>
                  <li>• Remittance services</li>
                  <li>• Cash pickup networks</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm">
                <strong>Integration Status:</strong> All institutions undergo rigorous testing and compliance 
                verification before integration. Real-time status monitoring ensures high availability and 
                reliable settlement operations.
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
                    <td className="p-4 font-mono text-sm">country</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by country code (TZ, KE, UG)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">currency</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by supported currency (TZS, KES, UGX)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-mono text-sm">type</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by institution type (mobile_money, bank, fintech)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm">status</td>
                    <td className="p-4 text-sm">string</td>
                    <td className="p-4 text-sm">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded text-xs">Optional</span>
                    </td>
                    <td className="p-4 text-sm text-foreground-secondary">
                      Filter by operational status (active, maintenance)
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
              Returns detailed information about each institution including capabilities, limits, 
              account formats, operational parameters, and current status.
            </p>
            
            <h3 className="text-lg font-medium mb-3">Institution Data Structure</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Basic Information</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>institutionCode</code> - Unique identifier for API requests</li>
                  <li><code>institutionName</code> - Full display name</li>
                  <li><code>type</code> - Institution category (mobile_money, bank, fintech)</li>
                  <li><code>country</code> - ISO country code (TZ, KE, UG)</li>
                </ul>
              </div>
              
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Operational Parameters</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>limits</code> - Transaction amount limits and daily/monthly caps</li>
                  <li><code>accountFormat</code> - Required format for account identifiers</li>
                  <li><code>operationalHours</code> - Service availability and maintenance windows</li>
                  <li><code>processingTime</code> - Expected settlement timeframes</li>
                </ul>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Capabilities & Fees</h4>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li><code>capabilities</code> - Supported operations (send, receive, validation)</li>
                  <li><code>fees</code> - Settlement fees and fee structure</li>
                  <li><code>status</code> - Current operational status</li>
                  <li><code>lastUpdated</code> - When information was last verified</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Institution Types */}
          <section id="institution-types">
            <h2 className="text-2xl font-semibold mb-4">Institution Categories</h2>
            
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Smartphone className="h-5 w-5 mr-2 text-blue-400" />
                  Mobile Money Operators
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Tanzania (TZS)</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• <strong>Vodacom M-Pesa:</strong> Leading mobile money service</li>
                      <li>• <strong>Tigo Pesa:</strong> Alternative mobile wallet</li>
                      <li>• <strong>Airtel Money:</strong> Regional mobile money</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Kenya & Uganda</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• <strong>Safaricom M-Pesa (KES):</strong> Kenya's primary mobile money</li>
                      <li>• <strong>MTN Mobile Money (UGX):</strong> Uganda's leading service</li>
                      <li>• <strong>Airtel Money:</strong> Multi-country coverage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-green-400" />
                  Commercial Banks
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Regional Banks</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• <strong>CRDB Bank:</strong> Tanzania's largest bank</li>
                      <li>• <strong>Equity Bank:</strong> Multi-country presence</li>
                      <li>• <strong>KCB Bank:</strong> East African network</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">International Banks</h4>
                    <ul className="space-y-1 text-foreground-secondary">
                      <li>• <strong>Standard Chartered:</strong> Global banking</li>
                      <li>• <strong>Stanbic Bank:</strong> Regional coverage</li>
                      <li>• <strong>Barclays/Absa:</strong> Established network</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Institution Status Indicators</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">active</span>
                  <span className="text-foreground-secondary">- Fully operational</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span className="text-yellow-400">maintenance</span>
                  <span className="text-foreground-secondary">- Temporary downtime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400">regional</span>
                  <span className="text-foreground-secondary">- Limited coverage</span>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold mb-4">Example Requests</h2>
            
            <div className="space-y-6">
              {/* All Institutions */}
              <div>
                <h3 className="text-lg font-medium mb-3">Get All Institutions</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/institutions
                </div>
              </div>

              {/* Tanzania Only */}
              <div>
                <h3 className="text-lg font-medium mb-3">Tanzania Institutions Only</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/institutions?country=TZ&currency=TZS
                </div>
              </div>

              {/* Mobile Money Only */}
              <div>
                <h3 className="text-lg font-medium mb-3">Mobile Money Operators</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                  GET /general/institutions?type=mobile_money&status=active
                </div>
              </div>

              {/* Sample Response */}
              <div>
                <h3 className="text-lg font-medium mb-3">Sample Response - Tanzania Mobile Money</h3>
                <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
{`{
  "status": "success",
  "data": {
    "institutions": [
      {
        "institutionCode": "VODACOM",
        "institutionName": "Vodacom M-Pesa Tanzania",
        "type": "mobile_money",
        "country": "TZ",
        "currency": "TZS",
        "status": "active",
        "limits": {
          "minAmount": "1000.00",
          "maxAmount": "10000000.00",
          "dailyLimit": "20000000.00"
        },
        "accountFormat": {
          "type": "phone_number",
          "pattern": "^255[67][0-9]{8}$",
          "example": "255744123456"
        },
        "processingTime": {
          "average": "2-5 minutes",
          "maximum": "15 minutes"
        }
      }
    ],
    "summary": {
      "totalInstitutions": 1,
      "activeInstitutions": 1
    }
  }
}`}
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Integration Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">✅ Recommended Usage</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Cache institution data for 1 hour to reduce API calls</li>
                  <li>• Check institution status before processing payments</li>
                  <li>• Validate account formats using provided patterns</li>
                  <li>• Respect operational hours and maintenance windows</li>
                  <li>• Monitor institution limits for transaction planning</li>
                  <li>• Use country/currency filters for targeted queries</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-400">⚠️ Important Considerations</h3>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Institution availability can change during maintenance</li>
                  <li>• Account format validation is critical for success</li>
                  <li>• Processing times may vary during peak hours</li>
                  <li>• Limits are enforced at both institution and NEDApay levels</li>
                  <li>• Some institutions may have regional restrictions</li>
                  <li>• Fee structures may change with institution updates</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
