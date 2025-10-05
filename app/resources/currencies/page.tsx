import { Search, Globe, TrendingUp, AlertCircle } from 'lucide-react'

export default function CurrenciesPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Supported Currencies</h1>
          <p className="text-foreground-secondary">
            Fiat currencies available for partner delivery through NEDApay's global network of PSPs, Banks, and MNOs.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay enables partners to deliver converted stablecoin funds to customers in their local currencies 
            through established banking and mobile money networks. All currency conversions happen seamlessly 
            while customers receive familiar local currency deposits.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Globe className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-medium mb-2">25+ Countries</h3>
              <p className="text-sm text-foreground-secondary">
                Coverage across Africa, with expansion to other emerging markets
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <TrendingUp className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-medium mb-2">Real-Time Rates</h3>
              <p className="text-sm text-foreground-secondary">
                Live exchange rates updated every 30 seconds for optimal pricing
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <AlertCircle className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-medium mb-2">Rate Locking</h3>
              <p className="text-sm text-foreground-secondary">
                Lock rates for up to 15 minutes to guarantee customer pricing
              </p>
            </div>
          </div>
        </section>

        {/* Primary Markets */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Primary Markets</h2>
          <div className="space-y-6">
            
            {/* East Africa */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">East Africa</h3>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">High Volume</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Supported Currencies</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🇰🇪</span>
                        <div>
                          <div className="font-medium">Kenyan Shilling</div>
                          <div className="text-sm text-foreground-secondary">KES</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">M-Pesa, Banks</div>
                        <div className="text-xs text-foreground-secondary">2-5 min delivery</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🇹🇿</span>
                        <div>
                          <div className="font-medium">Tanzanian Shilling</div>
                          <div className="text-sm text-foreground-secondary">TZS</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">M-Pesa, Tigo Pesa</div>
                        <div className="text-xs text-foreground-secondary">2-5 min delivery</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🇺🇬</span>
                        <div>
                          <div className="font-medium">Ugandan Shilling</div>
                          <div className="text-sm text-foreground-secondary">UGX</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">MTN, Airtel Money</div>
                        <div className="text-xs text-foreground-secondary">2-5 min delivery</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Delivery Methods</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• <strong>Mobile Money:</strong> M-Pesa, Tigo Pesa, Airtel Money, MTN</li>
                    <li>• <strong>Bank Transfers:</strong> All major local banks</li>
                    <li>• <strong>Cash Pickup:</strong> Agent network locations</li>
                    <li>• <strong>Digital Wallets:</strong> Local fintech solutions</li>
                  </ul>
                  
                  <h4 className="font-medium mb-3 mt-6">Typical Rates</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>1 USDC →</span>
                      <span className="font-mono">~135 KES</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 USDC →</span>
                      <span className="font-mono">~2,300 TZS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 USDC →</span>
                      <span className="font-mono">~3,700 UGX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* West Africa */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">West Africa</h3>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Growing</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Supported Currencies</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🇳🇬</span>
                        <div>
                          <div className="font-medium">Nigerian Naira</div>
                          <div className="text-sm text-foreground-secondary">NGN</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">Banks, Fintech</div>
                        <div className="text-xs text-foreground-secondary">5-15 min delivery</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🇬🇭</span>
                        <div>
                          <div className="font-medium">Ghanaian Cedi</div>
                          <div className="text-sm text-foreground-secondary">GHS</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">MTN, Banks</div>
                        <div className="text-xs text-foreground-secondary">5-15 min delivery</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Special Features</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• <strong>cNGN Integration:</strong> Direct stablecoin-to-NGN via cNGN</li>
                    <li>• <strong>Bank Networks:</strong> All major Nigerian and Ghanaian banks</li>
                    <li>• <strong>Mobile Money:</strong> MTN Mobile Money integration</li>
                    <li>• <strong>Fintech Partners:</strong> Paystack, Flutterwave integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Southern Africa */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Southern Africa</h3>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Premium</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Supported Currencies</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🇿🇦</span>
                        <div>
                          <div className="font-medium">South African Rand</div>
                          <div className="text-sm text-foreground-secondary">ZAR</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">All Major Banks</div>
                        <div className="text-xs text-foreground-secondary">1-3 min delivery</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Premium Features</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• <strong>ZARP Integration:</strong> Direct stablecoin-to-ZAR via ZARP</li>
                    <li>• <strong>Real-Time Payments:</strong> Instant bank transfers</li>
                    <li>• <strong>Major Banks:</strong> ABSA, Standard Bank, FNB, Nedbank</li>
                    <li>• <strong>Corporate Services:</strong> Bulk payment processing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Currency Codes Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Currency Codes Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead className="bg-background-secondary">
                <tr>
                  <th className="text-left p-4 border-b border-border">Currency</th>
                  <th className="text-left p-4 border-b border-border">Code</th>
                  <th className="text-left p-4 border-b border-border">Symbol</th>
                  <th className="text-left p-4 border-b border-border">Decimals</th>
                  <th className="text-left p-4 border-b border-border">Min Amount</th>
                  <th className="text-left p-4 border-b border-border">Max Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4">Kenyan Shilling</td>
                  <td className="p-4 font-mono">KES</td>
                  <td className="p-4">KSh</td>
                  <td className="p-4">2</td>
                  <td className="p-4">100.00</td>
                  <td className="p-4">1,000,000.00</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Tanzanian Shilling</td>
                  <td className="p-4 font-mono">TZS</td>
                  <td className="p-4">TSh</td>
                  <td className="p-4">2</td>
                  <td className="p-4">1,000.00</td>
                  <td className="p-4">5,000,000.00</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Ugandan Shilling</td>
                  <td className="p-4 font-mono">UGX</td>
                  <td className="p-4">USh</td>
                  <td className="p-4">0</td>
                  <td className="p-4">1,000</td>
                  <td className="p-4">10,000,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Nigerian Naira</td>
                  <td className="p-4 font-mono">NGN</td>
                  <td className="p-4">₦</td>
                  <td className="p-4">2</td>
                  <td className="p-4">500.00</td>
                  <td className="p-4">2,000,000.00</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Ghanaian Cedi</td>
                  <td className="p-4 font-mono">GHS</td>
                  <td className="p-4">₵</td>
                  <td className="p-4">2</td>
                  <td className="p-4">10.00</td>
                  <td className="p-4">100,000.00</td>
                </tr>
                <tr>
                  <td className="p-4">South African Rand</td>
                  <td className="p-4 font-mono">ZAR</td>
                  <td className="p-4">R</td>
                  <td className="p-4">2</td>
                  <td className="p-4">50.00</td>
                  <td className="p-4">500,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rate API Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Rate API Examples</h2>
          <div className="space-y-6">
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Get Current Exchange Rate</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-green-400">{`curl -X GET "https://api.nedapay.io/v1/rates?from=USDC&to=KES&amount=100" \\
  -H "Authorization: Bearer your_partner_api_key"

# Response
{
  "rate": "135.45",
  "from_currency": "USDC",
  "to_currency": "KES", 
  "amount": "100",
  "total": "13545.00",
  "fee": "2.50",
  "net_amount": "13522.50",
  "expires_at": "2025-10-05T18:50:00Z",
  "rate_id": "rate_abc123"
}`}</pre>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Lock Exchange Rate</h3>
              <div className="p-4 bg-code-background border border-code-border rounded-lg font-mono text-sm">
                <pre className="text-blue-400">{`curl -X POST "https://api.nedapay.io/v1/rates/lock" \\
  -H "Authorization: Bearer your_partner_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from_currency": "USDC",
    "to_currency": "NGN",
    "amount": "500",
    "lock_duration": "900"
  }'

# Response
{
  "rate_id": "rate_locked_def456",
  "rate": "1650.75",
  "locked_until": "2025-10-05T19:05:00Z",
  "total": "825375.00"
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Expansion Roadmap */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Currency Expansion Roadmap</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-green-500 bg-green-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Q1 2025 - Live</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Active</span>
              </div>
              <p className="text-sm text-foreground-secondary">East Africa (KES, TZS, UGX), West Africa (NGN, GHS), Southern Africa (ZAR)</p>
            </div>
            
            <div className="p-4 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Q2 2025 - Planned</span>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Development</span>
              </div>
              <p className="text-sm text-foreground-secondary">Central Africa (XAF), Additional West African currencies (XOF, SLL)</p>
            </div>
            
            <div className="p-4 border-l-4 border-orange-500 bg-orange-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">H2 2025 - Research</span>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Planning</span>
              </div>
              <p className="text-sm text-foreground-secondary">North Africa (EGP, MAD), Additional Southern African currencies (BWP, ZMW)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
