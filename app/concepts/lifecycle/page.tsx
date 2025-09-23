import { ArrowRight, Clock, CheckCircle, AlertCircle, XCircle, Zap } from 'lucide-react'

export default function LifecyclePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Transaction Lifecycle</h1>
          <p className="text-foreground-secondary">
            Understanding how payments flow through NEDApay's omni-channel infrastructure from initiation to settlement.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay's transaction lifecycle encompasses the complete journey of a payment order through our secondary layer 
            infrastructure. From initial API call to final settlement, each step is optimized for speed, security, and reliability 
            across our global network of PSPs, MMOs, MNOs, and traditional financial institutions.
          </p>
        </section>

        {/* Lifecycle Stages */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Transaction Stages</h2>
          <div className="space-y-6">
            
            {/* Stage 1: Order Creation */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium mr-4">1</div>
                <div>
                  <h3 className="text-xl font-semibold">Order Creation</h3>
                  <p className="text-sm text-foreground-secondary">Sender initiates payment order via API</p>
                </div>
              </div>
              <div className="ml-14 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Process Steps:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• API request validation</li>
                      <li>• Authentication and authorization</li>
                      <li>• Order parameter verification</li>
                      <li>• Initial compliance screening</li>
                      <li>• Order ID generation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Validations:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Currency pair support</li>
                      <li>• Amount limits and thresholds</li>
                      <li>• Recipient details format</li>
                      <li>• Sender KYC status</li>
                      <li>• Rate lock duration</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-sm text-blue-400">
                    <strong>Status:</strong> PENDING → Order created and awaiting aggregator processing
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 2: Aggregator Processing */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium mr-4">2</div>
                <div>
                  <h3 className="text-xl font-semibold">Aggregator Processing</h3>
                  <p className="text-sm text-foreground-secondary">Intelligent routing and provider matching</p>
                </div>
              </div>
              <div className="ml-14 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Matching Algorithm:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Provider availability check</li>
                      <li>• Liquidity assessment</li>
                      <li>• Rate comparison and optimization</li>
                      <li>• Geographic routing preferences</li>
                      <li>• Provider reliability scoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Selection Criteria:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Best available rate</li>
                      <li>• Fastest settlement time</li>
                      <li>• Provider success rate</li>
                      <li>• Compliance requirements</li>
                      <li>• Network redundancy</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-sm text-green-400">
                    <strong>Status:</strong> PROCESSING → Optimal provider selected and order routed
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3: Provider Execution */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-sm font-medium mr-4">3</div>
                <div>
                  <h3 className="text-xl font-semibold">Provider Execution</h3>
                  <p className="text-sm text-foreground-secondary">Local distribution through PSP/MMO/MNO networks</p>
                </div>
              </div>
              <div className="ml-14 space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-background border border-border rounded">
                    <h4 className="font-medium mb-2 text-blue-400">PSP Execution</h4>
                    <ul className="space-y-1 text-sm text-foreground-secondary">
                      <li>• Card network processing</li>
                      <li>• Bank transfer initiation</li>
                      <li>• Payment gateway routing</li>
                      <li>• Settlement confirmation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background border border-border rounded">
                    <h4 className="font-medium mb-2 text-green-400">MMO/MNO Execution</h4>
                    <ul className="space-y-1 text-sm text-foreground-secondary">
                      <li>• Mobile wallet credit</li>
                      <li>• USSD transaction</li>
                      <li>• Agent network payout</li>
                      <li>• SMS confirmation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-background border border-border rounded">
                    <h4 className="font-medium mb-2 text-orange-400">Bank Execution</h4>
                    <ul className="space-y-1 text-sm text-foreground-secondary">
                      <li>• Account credit</li>
                      <li>• Wire transfer</li>
                      <li>• Real-time payment</li>
                      <li>• Branch pickup</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <p className="text-sm text-orange-400">
                    <strong>Status:</strong> EXECUTING → Provider processing local distribution
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 4: Settlement & Confirmation */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-sm font-medium mr-4">4</div>
                <div>
                  <h3 className="text-xl font-semibold">Settlement & Confirmation</h3>
                  <p className="text-sm text-foreground-secondary">Cross-provider settlement and final confirmation</p>
                </div>
              </div>
              <div className="ml-14 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Settlement Process:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Provider confirmation receipt</li>
                      <li>• Cross-provider reconciliation</li>
                      <li>• Blockchain settlement recording</li>
                      <li>• Final status update</li>
                      <li>• Webhook notification dispatch</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Confirmations:</h4>
                    <ul className="space-y-2 text-sm text-foreground-secondary">
                      <li>• Sender notification</li>
                      <li>• Recipient confirmation</li>
                      <li>• Transaction receipt</li>
                      <li>• Audit trail completion</li>
                      <li>• Compliance reporting</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <p className="text-sm text-purple-400">
                    <strong>Status:</strong> COMPLETED → Transaction successfully settled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status Flow Diagram */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Status Flow</h2>
          <div className="p-6 bg-background-secondary border border-border rounded-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">PENDING</span>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground-muted" />
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">PROCESSING</span>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground-muted" />
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-orange-400" />
                <span className="text-sm font-medium">EXECUTING</span>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground-muted" />
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium">COMPLETED</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-medium mb-3">Alternative Outcomes:</h4>
              <div className="flex items-center justify-start space-x-8">
                <div className="flex items-center space-x-2">
                  <XCircle className="h-5 w-5 text-red-400" />
                  <span className="text-sm font-medium">FAILED</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium">EXPIRED</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-5 w-5 text-gray-400" />
                  <span className="text-sm font-medium">CANCELLED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timing & Performance */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Timing & Performance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Typical Processing Times</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Order Creation</span>
                  <span className="text-sm font-medium text-blue-400">&lt; 1 second</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Aggregator Processing</span>
                  <span className="text-sm font-medium text-green-400">1-3 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Provider Execution</span>
                  <span className="text-sm font-medium text-orange-400">5-30 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Settlement</span>
                  <span className="text-sm font-medium text-purple-400">10-60 seconds</span>
                </div>
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Total Time</span>
                    <span className="text-sm font-bold text-foreground">&lt; 2 minutes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Performance Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Success Rate</span>
                  <span className="text-sm font-medium text-green-400">99.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Average Settlement</span>
                  <span className="text-sm font-medium text-blue-400">45 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">API Response Time</span>
                  <span className="text-sm font-medium text-orange-400">&lt; 200ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Uptime SLA</span>
                  <span className="text-sm font-medium text-purple-400">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Error Handling & Recovery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Error Handling & Recovery</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <XCircle className="h-5 w-5 text-red-400 mr-3" />
                <h4 className="font-medium">Provider Failure</h4>
              </div>
              <p className="text-sm text-foreground-secondary">
                Automatic failover to backup provider → Order re-routing → Customer notification → Refund processing if needed
              </p>
            </div>
            
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-5 w-5 text-yellow-400 mr-3" />
                <h4 className="font-medium">Timeout/Expiry</h4>
              </div>
              <p className="text-sm text-foreground-secondary">
                Rate lock expiration → Order cancellation → Automatic refund → New rate quote available
              </p>
            </div>
            
            <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-5 w-5 text-orange-400 mr-3" />
                <h4 className="font-medium">Compliance Issues</h4>
              </div>
              <p className="text-sm text-foreground-secondary">
                Additional verification required → Order hold → Customer contact → Resolution or cancellation
              </p>
            </div>
          </div>
        </section>

        {/* Monitoring & Tracking */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Monitoring & Tracking</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Real-time Tracking</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Order status updates via API</li>
                <li>• Webhook notifications</li>
                <li>• Dashboard monitoring</li>
                <li>• SMS/email alerts</li>
                <li>• Mobile app notifications</li>
              </ul>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Analytics & Reporting</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Transaction success rates</li>
                <li>• Processing time analytics</li>
                <li>• Provider performance metrics</li>
                <li>• Cost optimization insights</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
