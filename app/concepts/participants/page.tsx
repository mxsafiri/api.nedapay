import { Users, Building, Smartphone, CreditCard, Globe } from 'lucide-react'

export default function ParticipantsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Protocol Participants</h1>
          <p className="text-foreground-secondary">
            Understanding the key players in NEDApay's omni-channel ecosystem and their roles in global money movement.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay's secondary layer infrastructure connects multiple types of participants to create a seamless 
            omni-channel network for stablecoin-to-fiat and fiat-to-stablecoin conversion. Each participant plays 
            a crucial role in enabling instant global distribution.
          </p>
        </section>

        {/* Participant Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Participant Types</h2>
          <div className="space-y-8">
            
            {/* Senders */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Senders</h3>
                  <p className="text-sm text-foreground-secondary">Entities initiating payment orders</p>
                </div>
              </div>
              <p className="text-foreground-secondary mb-4">
                Senders are individuals, businesses, or applications that initiate payment orders through NEDApay's API. 
                They provide stablecoins or fiat currency to be converted and distributed through our global network.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Remittance companies</li>
                    <li>• E-commerce platforms</li>
                    <li>• Fintech applications</li>
                    <li>• Individual users</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Capabilities:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Create payment orders</li>
                    <li>• Track order status</li>
                    <li>• Access transaction history</li>
                    <li>• Manage API keys</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Service Providers (PSPs) */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <CreditCard className="h-8 w-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Payment Service Providers (PSPs)</h3>
                  <p className="text-sm text-foreground-secondary">Traditional payment infrastructure providers</p>
                </div>
              </div>
              <p className="text-foreground-secondary mb-4">
                PSPs are established financial service providers that offer payment processing, card networks, 
                and banking infrastructure. They serve as bridges between our secondary layer and traditional finance.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Stripe, PayPal, Square</li>
                    <li>• Visa, Mastercard networks</li>
                    <li>• Regional payment processors</li>
                    <li>• Banking-as-a-Service providers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Services:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Card payment processing</li>
                    <li>• Bank transfer facilitation</li>
                    <li>• Compliance and KYC</li>
                    <li>• Multi-currency support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Money/Network Operators */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Smartphone className="h-8 w-8 text-orange-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Mobile Money/Network Operators (MMO/MNO)</h3>
                  <p className="text-sm text-foreground-secondary">Mobile-first financial service providers</p>
                </div>
              </div>
              <p className="text-foreground-secondary mb-4">
                MMOs and MNOs provide mobile money services and telecommunications infrastructure, particularly 
                strong in emerging markets. They enable instant local distribution through mobile wallets and USSD.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• M-Pesa (Safaricom)</li>
                    <li>• Tigo Pesa (Tigo)</li>
                    <li>• Airtel Money (Airtel)</li>
                    <li>• MTN Mobile Money</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Services:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Mobile wallet services</li>
                    <li>• USSD-based transactions</li>
                    <li>• Agent network distribution</li>
                    <li>• Cross-border transfers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Traditional Banks */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Traditional Banks</h3>
                  <p className="text-sm text-foreground-secondary">Established banking institutions</p>
                </div>
              </div>
              <p className="text-foreground-secondary mb-4">
                Traditional banks provide core banking services, regulatory compliance, and established customer 
                relationships. They serve as trusted endpoints for fiat currency distribution and collection.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Commercial banks</li>
                    <li>• Digital banks</li>
                    <li>• Credit unions</li>
                    <li>• Development banks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Services:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Account management</li>
                    <li>• Wire transfers</li>
                    <li>• Regulatory compliance</li>
                    <li>• Customer verification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aggregator Nodes */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-cyan-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Aggregator Nodes</h3>
                  <p className="text-sm text-foreground-secondary">NEDApay's intelligent routing infrastructure</p>
                </div>
              </div>
              <p className="text-foreground-secondary mb-4">
                Aggregator nodes are the core intelligence of NEDApay's secondary layer, responsible for order 
                matching, provider selection, and ensuring optimal routing across the global network.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Functions:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Order monitoring and routing</li>
                    <li>• Provider registry management</li>
                    <li>• Rate optimization</li>
                    <li>• Compliance verification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-sm text-foreground-secondary">
                    <li>• Optimal provider matching</li>
                    <li>• Real-time rate discovery</li>
                    <li>• Automated settlement</li>
                    <li>• Network resilience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction Flow */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Participant Interaction Flow</h2>
          <div className="p-6 bg-background-secondary border border-border rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium">1</div>
                <span><strong>Sender</strong> initiates payment order via API</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-sm font-medium">2</div>
                <span><strong>Aggregator Node</strong> receives and validates order</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium">3</div>
                <span><strong>Aggregator</strong> matches with optimal PSP/MMO/Bank</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-medium">4</div>
                <span><strong>Provider</strong> executes local distribution</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-medium">5</div>
                <span><strong>Settlement</strong> completed across all parties</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Multi-Participant Network */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Benefits of Multi-Participant Network</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">For Senders</h3>
              <ul className="space-y-2 text-foreground-secondary">
                <li>• Access to global distribution network</li>
                <li>• Competitive rates through provider competition</li>
                <li>• Single API for multiple payment rails</li>
                <li>• Reduced integration complexity</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">For Providers</h3>
              <ul className="space-y-2 text-foreground-secondary">
                <li>• Access to global order flow</li>
                <li>• Revenue from transaction fees</li>
                <li>• Automated order matching</li>
                <li>• Reduced customer acquisition costs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
