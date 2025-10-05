import { Calendar, Plus, Zap, Shield, Globe, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export default function ChangelogPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">API Changelog</h1>
          <p className="text-foreground-secondary">
            Track all updates, new features, and changes to NEDApay's partner API and infrastructure.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            Stay up-to-date with the latest improvements to NEDApay's B2B infrastructure. 
            We continuously enhance our platform based on partner feedback and market needs.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/10">
              <Plus className="h-6 w-6 text-green-400 mb-2" />
              <h3 className="font-medium text-green-400">New Features</h3>
              <p className="text-sm text-foreground-secondary">Latest capabilities</p>
            </div>
            <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/10">
              <Zap className="h-6 w-6 text-blue-400 mb-2" />
              <h3 className="font-medium text-blue-400">Improvements</h3>
              <p className="text-sm text-foreground-secondary">Performance & UX</p>
            </div>
            <div className="p-4 rounded-lg border border-orange-500/20 bg-orange-500/10">
              <AlertTriangle className="h-6 w-6 text-orange-400 mb-2" />
              <h3 className="font-medium text-orange-400">Breaking Changes</h3>
              <p className="text-sm text-foreground-secondary">Migration required</p>
            </div>
            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/10">
              <XCircle className="h-6 w-6 text-red-400 mb-2" />
              <h3 className="font-medium text-red-400">Bug Fixes</h3>
              <p className="text-sm text-foreground-secondary">Issue resolutions</p>
            </div>
          </div>
        </section>

        {/* Changelog Entries */}
        <section className="space-y-8">
          
          {/* Version 2.1.0 */}
          <div className="border border-border rounded-lg bg-background-secondary">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">Version 2.1.0</h2>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Latest</span>
              </div>
              <div className="flex items-center text-sm text-foreground-secondary">
                <Calendar className="h-4 w-4 mr-2" />
                <span>October 5, 2025</span>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* New Features */}
              <div>
                <div className="flex items-center mb-3">
                  <Plus className="h-5 w-5 text-green-400 mr-2" />
                  <h3 className="font-medium text-green-400">New Features</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• <strong>Regional Stablecoin Support:</strong> Added CNGN (Nigerian Naira) and ZARP (South African Rand) stablecoins on Base network</li>
                  <li>• <strong>Batch Payment API:</strong> Process up to 100 transactions in a single API call for high-volume partners</li>
                  <li>• <strong>Webhook Retry Logic:</strong> Automatic retry mechanism for failed webhook deliveries with exponential backoff</li>
                  <li>• <strong>Partner Analytics Dashboard:</strong> Real-time transaction metrics and revenue reporting in partner portal</li>
                </ul>
              </div>

              {/* Improvements */}
              <div>
                <div className="flex items-center mb-3">
                  <Zap className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="font-medium text-blue-400">Improvements</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• <strong>Rate Lock Duration:</strong> Extended rate lock period from 10 to 15 minutes for better partner experience</li>
                  <li>• <strong>API Response Times:</strong> Reduced average response time by 40% through infrastructure optimization</li>
                  <li>• <strong>Error Messages:</strong> Enhanced error responses with more detailed troubleshooting information</li>
                  <li>• <strong>Documentation:</strong> Updated API docs with real-world integration examples and best practices</li>
                </ul>
              </div>

              {/* Bug Fixes */}
              <div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-red-400 mr-2" />
                  <h3 className="font-medium text-red-400">Bug Fixes</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• Fixed issue where webhook signatures were incorrectly calculated for certain payload sizes</li>
                  <li>• Resolved race condition in rate locking that could cause duplicate rate IDs</li>
                  <li>• Fixed currency formatting issue for UGX (Ugandan Shilling) amounts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 2.0.0 */}
          <div className="border border-border rounded-lg bg-background-secondary">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">Version 2.0.0</h2>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Breaking Changes</span>
              </div>
              <div className="flex items-center text-sm text-foreground-secondary">
                <Calendar className="h-4 w-4 mr-2" />
                <span>September 15, 2025</span>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Breaking Changes */}
              <div>
                <div className="flex items-center mb-3">
                  <AlertTriangle className="h-5 w-5 text-orange-400 mr-2" />
                  <h3 className="font-medium text-orange-400">Breaking Changes</h3>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-4">
                  <p className="text-sm text-orange-400 font-medium mb-2">Migration Required by November 15, 2025</p>
                  <p className="text-sm text-foreground-secondary">All partners must update to the new API endpoints and authentication method.</p>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• <strong>API Endpoint Changes:</strong> All endpoints now use <code>/v2/</code> prefix instead of <code>/v1/</code></li>
                  <li>• <strong>Authentication:</strong> Migrated from API keys to OAuth 2.0 for enhanced security</li>
                  <li>• <strong>Order Creation:</strong> <code>partner_id</code> and <code>customer_id</code> are now required fields</li>
                  <li>• <strong>Webhook Format:</strong> Updated webhook payload structure with additional metadata</li>
                </ul>
              </div>

              {/* New Features */}
              <div>
                <div className="flex items-center mb-3">
                  <Plus className="h-5 w-5 text-green-400 mr-2" />
                  <h3 className="font-medium text-green-400">New Features</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• <strong>Multi-Chain Support:</strong> Added Polygon network support for USDC and USDT</li>
                  <li>• <strong>Partner Portal:</strong> Launched comprehensive partner dashboard with KYC management</li>
                  <li>• <strong>Compliance Engine:</strong> Integrated real-time AML/sanctions screening</li>
                  <li>• <strong>Settlement Automation:</strong> Automated daily settlement processing for partners</li>
                </ul>
              </div>

              {/* Migration Guide */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-medium text-blue-400 mb-2">Migration Guide</h4>
                <p className="text-sm text-foreground-secondary mb-2">
                  Detailed migration instructions and code examples are available in our 
                  <a href="/guides/v2-migration" className="text-blue-400 hover:underline ml-1">V2 Migration Guide</a>.
                </p>
                <p className="text-sm text-foreground-secondary">
                  Need help? Contact our partner success team at <code>migration@nedapay.io</code>
                </p>
              </div>
            </div>
          </div>

          {/* Version 1.8.2 */}
          <div className="border border-border rounded-lg bg-background-secondary">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">Version 1.8.2</h2>
                <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded">Legacy</span>
              </div>
              <div className="flex items-center text-sm text-foreground-secondary">
                <Calendar className="h-4 w-4 mr-2" />
                <span>August 20, 2025</span>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Improvements */}
              <div>
                <div className="flex items-center mb-3">
                  <Zap className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="font-medium text-blue-400">Improvements</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• Enhanced rate limiting with partner-tier specific limits</li>
                  <li>• Improved transaction status tracking with intermediate states</li>
                  <li>• Added support for custom reference fields in orders</li>
                </ul>
              </div>

              {/* Bug Fixes */}
              <div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-red-400 mr-2" />
                  <h3 className="font-medium text-red-400">Bug Fixes</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• Fixed timeout issues with large batch operations</li>
                  <li>• Resolved inconsistent decimal precision in exchange rates</li>
                  <li>• Fixed webhook delivery failures for certain partner configurations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 1.7.0 */}
          <div className="border border-border rounded-lg bg-background-secondary">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">Version 1.7.0</h2>
                <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded">Legacy</span>
              </div>
              <div className="flex items-center text-sm text-foreground-secondary">
                <Calendar className="h-4 w-4 mr-2" />
                <span>July 10, 2025</span>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* New Features */}
              <div>
                <div className="flex items-center mb-3">
                  <Plus className="h-5 w-5 text-green-400 mr-2" />
                  <h3 className="font-medium text-green-400">New Features</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• <strong>Base Network Integration:</strong> Primary support for Base blockchain with lower fees</li>
                  <li>• <strong>Account Verification API:</strong> Pre-validate recipient accounts before transactions</li>
                  <li>• <strong>Rate Comparison API:</strong> Compare rates across multiple networks and providers</li>
                  <li>• <strong>Transaction Search:</strong> Advanced filtering and search capabilities for order history</li>
                </ul>
              </div>

              {/* Improvements */}
              <div>
                <div className="flex items-center mb-3">
                  <Zap className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="font-medium text-blue-400">Improvements</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• Reduced blockchain settlement times from 15 seconds to 3 seconds on Base</li>
                  <li>• Enhanced security with additional API key validation</li>
                  <li>• Improved error handling with more specific error codes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 1.6.1 */}
          <div className="border border-border rounded-lg bg-background-secondary">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold">Version 1.6.1</h2>
                <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded">Legacy</span>
              </div>
              <div className="flex items-center text-sm text-foreground-secondary">
                <Calendar className="h-4 w-4 mr-2" />
                <span>June 5, 2025</span>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* New Features */}
              <div>
                <div className="flex items-center mb-3">
                  <Plus className="h-5 w-5 text-green-400 mr-2" />
                  <h3 className="font-medium text-green-400">New Features</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• <strong>Mobile Money Integration:</strong> Direct M-Pesa, Tigo Pesa, and Airtel Money support</li>
                  <li>• <strong>Webhook Notifications:</strong> Real-time transaction status updates</li>
                  <li>• <strong>Sandbox Environment:</strong> Full testing environment for partner integration</li>
                </ul>
              </div>

              {/* Bug Fixes */}
              <div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-red-400 mr-2" />
                  <h3 className="font-medium text-red-400">Bug Fixes</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary ml-7">
                  <li>• Fixed currency conversion precision issues</li>
                  <li>• Resolved API timeout problems during high traffic</li>
                  <li>• Fixed duplicate transaction prevention logic</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Upcoming Features</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Q4 2025 - In Development</span>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <ul className="text-sm text-foreground-secondary space-y-1">
                <li>• GraphQL API support for more flexible data queries</li>
                <li>• Advanced fraud detection and prevention system</li>
                <li>• White-label partner portal customization</li>
                <li>• Enhanced reporting with custom dashboard widgets</li>
              </ul>
            </div>
            
            <div className="p-4 border-l-4 border-purple-500 bg-purple-500/10 rounded-r-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Q1 2026 - Planned</span>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Roadmap</span>
              </div>
              <ul className="text-sm text-foreground-secondary space-y-1">
                <li>• AI-powered transaction routing optimization</li>
                <li>• Cross-chain atomic swaps for better liquidity</li>
                <li>• Advanced compliance automation tools</li>
                <li>• Mobile SDK for iOS and Android integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stay Updated */}
        <section className="mb-12">
          <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Stay Updated</h3>
            <p className="text-foreground-secondary mb-4">
              Get notified about new releases, breaking changes, and important updates to the NEDApay platform.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Notification Channels</h4>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li>• Email notifications for breaking changes</li>
                  <li>• Slack integration for real-time updates</li>
                  <li>• RSS feed for changelog entries</li>
                  <li>• Partner portal announcements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Resources</h4>
                <ul className="text-sm text-foreground-secondary space-y-1">
                  <li>• <a href="/guides/migration" className="text-blue-400 hover:underline">Migration guides</a></li>
                  <li>• <a href="/api-reference" className="text-blue-400 hover:underline">Updated API documentation</a></li>
                  <li>• <a href="/support" className="text-blue-400 hover:underline">Partner support portal</a></li>
                  <li>• <a href="/status" className="text-blue-400 hover:underline">System status page</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
