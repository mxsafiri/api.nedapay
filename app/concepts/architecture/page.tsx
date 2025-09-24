'use client'

import { Layers, Network, Database, Shield, Zap, ArrowRight } from 'lucide-react'
import { ArchitectureDiagram } from '@/components/architecture-diagram'

export default function ArchitecturePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Protocol Architecture</h1>
          <p className="text-foreground-secondary">
            Deep dive into NEDApay's secondary layer architecture and omni-channel infrastructure design.
          </p>
        </div>

        {/* Architecture Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Architecture Overview</h2>
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            NEDApay operates as a <strong className="text-foreground">liquidity pool bridge</strong> that manages 
            USDT/USDC reserves on Base network. Partners request stablecoin transfers from our pool while handling 
            fiat operations through their existing channels. This creates a seamless crypto-fiat bridge without 
            complex token issuance or regulatory overhead.
          </p>

          <div className="p-6 bg-background-secondary border border-border rounded-lg mb-6">
            <h3 className="text-lg font-medium mb-4">Core Architecture Principles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-blue-400">Liquidity Pool Model</h4>
                <p className="text-sm text-foreground-secondary">
                  Pre-funded USDT/USDC pools on Base network enable instant transfers without minting/burning complexity.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-green-400">Partner Integration</h4>
                <p className="text-sm text-foreground-secondary">
                  Partners handle customer interaction and fiat operations while NEDApay manages blockchain transfers.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-orange-400">Settlement Efficiency</h4>
                <p className="text-sm text-foreground-secondary">
                  Daily settlement cycles and automated rebalancing optimize liquidity and reduce operational overhead.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-purple-400">Regulatory Simplicity</h4>
                <p className="text-sm text-foreground-secondary">
                  Liquidity provider model avoids token issuer regulations while maintaining full compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Animated Architecture Diagram */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-center">Orchestration Flow</h3>
            <ArchitectureDiagram />
            <p className="text-sm text-foreground-secondary text-center mt-4">
              Interactive diagram showing the flow from customer request to settlement and rebalancing
            </p>
          </div>
        </section>

        {/* Layer Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Layer Architecture</h2>
          <div className="space-y-4">
            
            {/* Application Layer */}
            <div className="p-4 border border-border rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/20">
              <div className="flex items-center mb-2">
                <Layers className="h-5 w-5 text-blue-400 mr-3" />
                <h3 className="font-medium">Application Layer</h3>
              </div>
              <p className="text-sm text-foreground-secondary">
                Fintech apps, remittance services, e-commerce platforms, and other applications consuming NEDApay APIs
              </p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-5 w-5 text-foreground-muted rotate-90" />
            </div>

            {/* NEDApay Secondary Layer */}
            <div className="p-6 border-2 border-green-500/30 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/10">
              <div className="flex items-center mb-4">
                <Network className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-lg font-medium">NEDApay Secondary Layer</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-background-secondary rounded border border-border">
                  <h4 className="font-medium text-sm mb-1">API Gateway</h4>
                  <p className="text-xs text-foreground-secondary">Unified REST API interface</p>
                </div>
                <div className="p-3 bg-background-secondary rounded border border-border">
                  <h4 className="font-medium text-sm mb-1">Aggregator Nodes</h4>
                  <p className="text-xs text-foreground-secondary">Intelligent routing & matching</p>
                </div>
                <div className="p-3 bg-background-secondary rounded border border-border">
                  <h4 className="font-medium text-sm mb-1">Settlement Engine</h4>
                  <p className="text-xs text-foreground-secondary">Cross-provider coordination</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-5 w-5 text-foreground-muted rotate-90" />
            </div>

            {/* Provider Layer */}
            <div className="p-4 border border-border rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20">
              <div className="flex items-center mb-2">
                <Database className="h-5 w-5 text-orange-400 mr-3" />
                <h3 className="font-medium">Provider Layer</h3>
              </div>
              <p className="text-sm text-foreground-secondary">
                PSPs (Stripe, PayPal), MMOs (M-Pesa, Tigo Pesa), MNOs (Safaricom, Airtel), Banks, Crypto Exchanges
              </p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-5 w-5 text-foreground-muted rotate-90" />
            </div>

            {/* Infrastructure Layer */}
            <div className="p-4 border border-border rounded-lg bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-500/20">
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 text-purple-400 mr-3" />
                <h3 className="font-medium">Infrastructure Layer</h3>
              </div>
              <p className="text-sm text-foreground-secondary">
                XRPL blockchain, traditional banking rails, mobile networks, card networks, internet infrastructure
              </p>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Core Components</h2>
          <div className="space-y-6">
            
            {/* Gateway Smart Contract */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Liquidity Pool Manager (Base Network)</h3>
                  <p className="text-sm text-foreground-secondary">Multi-sig wallet system for USDT/USDC pool management and partner transfers</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Functions:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• USDT/USDC transfer operations from pool</li>
                    <li>• Multi-currency support (USDT, USDC, DAI)</li>
                    <li>• Partner balance tracking and settlement</li>
                    <li>• Automated liquidity rebalancing</li>
                    <li>• Multi-sig security for large transfers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Ultra-low transaction fees (~$0.01)</li>
                    <li>• Instant transfer execution (2-3 seconds)</li>
                    <li>• No token issuance regulatory complexity</li>
                    <li>• Proven USDT/USDC token reliability</li>
                    <li>• Multi-sig treasury security</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aggregator Nodes */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Network className="h-8 w-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Aggregator Nodes</h3>
                  <p className="text-sm text-foreground-secondary">Intelligent routing and provider matching</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Core Functions:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Real-time order monitoring</li>
                    <li>• Provider registry and rating system</li>
                    <li>• Optimal provider matching algorithms</li>
                    <li>• Rate aggregation and optimization</li>
                    <li>• Compliance verification (KYC/AML)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Intelligence Features:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Machine learning for route optimization</li>
                    <li>• Real-time liquidity monitoring</li>
                    <li>• Predictive provider selection</li>
                    <li>• Dynamic fee optimization</li>
                    <li>• Failure recovery and redundancy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* API Gateway */}
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-orange-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">API Gateway</h3>
                  <p className="text-sm text-foreground-secondary">Unified interface for all NEDApay services</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">API Features:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• RESTful API design</li>
                    <li>• Real-time webhook notifications</li>
                    <li>• Multi-language SDKs</li>
                    <li>• Comprehensive error handling</li>
                    <li>• Rate limiting and throttling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Security & Reliability:</h4>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• API key authentication</li>
                    <li>• Request signing and validation</li>
                    <li>• DDoS protection</li>
                    <li>• 99.9% uptime SLA</li>
                    <li>• Automatic failover</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Flow */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Transaction Data Flow</h2>
          <div className="space-y-4">
            <div className="p-4 bg-background-secondary border border-border rounded-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium">1</div>
                <h4 className="font-medium">Order Initiation</h4>
              </div>
              <p className="text-sm text-foreground-secondary ml-12">
                Sender creates payment order via API → Gateway validates and creates smart contract order → Order broadcast to aggregator network
              </p>
            </div>
            
            <div className="p-4 bg-background-secondary border border-border rounded-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-medium">2</div>
                <h4 className="font-medium">Provider Matching</h4>
              </div>
              <p className="text-sm text-foreground-secondary ml-12">
                Aggregators analyze order requirements → Query provider registry for available liquidity → Apply matching algorithms → Select optimal provider(s)
              </p>
            </div>
            
            <div className="p-4 bg-background-secondary border border-border rounded-lg">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-medium">3</div>
                <h4 className="font-medium">Execution & Settlement</h4>
              </div>
              <p className="text-sm text-foreground-secondary ml-12">
                Provider executes local distribution → Settlement engine coordinates cross-provider payments → Smart contract finalizes settlement → All parties receive confirmation
              </p>
            </div>
          </div>
        </section>

        {/* Scalability & Performance */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Scalability & Performance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Horizontal Scaling</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Distributed aggregator node network</li>
                <li>• Load balancing across API gateways</li>
                <li>• Regional provider clustering</li>
                <li>• Microservices architecture</li>
              </ul>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background-secondary">
              <h3 className="text-lg font-medium mb-4">Performance Optimization</h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Sub-second order matching</li>
                <li>• Parallel provider queries</li>
                <li>• Intelligent caching strategies</li>
                <li>• Predictive liquidity positioning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Security Architecture</h2>
          <div className="p-6 bg-background-secondary border border-border rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-blue-400">Network Security</h4>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• End-to-end encryption</li>
                  <li>• TLS 1.3 for all communications</li>
                  <li>• DDoS protection</li>
                  <li>• Network segmentation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-green-400">Application Security</h4>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• API key authentication</li>
                  <li>• Request signing</li>
                  <li>• Rate limiting</li>
                  <li>• Input validation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-orange-400">Blockchain Security</h4>
                <ul className="space-y-1 text-sm text-foreground-secondary">
                  <li>• Smart contract audits</li>
                  <li>• Multi-signature wallets</li>
                  <li>• Immutable transaction logs</li>
                  <li>• Consensus mechanisms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
