import { ArrowRight, BookOpen, Code, Zap } from 'lucide-react'

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Guides</h1>
          <p className="text-foreground-secondary">
            Step-by-step guides to help you integrate NEDApay's omni-channel infrastructure and connect to our global payment rails through PSPs and MMO/MNO networks.
          </p>
        </div>

        {/* Guide Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 border border-border rounded-lg bg-background-secondary">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-xl font-semibold">Integration Guides</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              Learn how to integrate NEDApay's secondary layer APIs for stablecoin-to-fiat conversion and global distribution.
            </p>
            <div className="space-y-3">
              <a 
                href="/guides/sender-integration"
                className="group flex items-center justify-between p-3 border border-border rounded-lg hover:bg-background-tertiary transition-colors"
              >
                <div>
                  <div className="font-medium group-hover:text-blue-400 transition-colors">
                    Sender API Integration
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    Complete guide for payment senders
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
              </a>
              
              <a 
                href="/guides/smart-contracts"
                className="group flex items-center justify-between p-3 border border-border rounded-lg hover:bg-background-tertiary transition-colors"
              >
                <div>
                  <div className="font-medium group-hover:text-blue-400 transition-colors">
                    Smart Contract Interaction
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    Direct blockchain integration
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg bg-background-secondary">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-green-400 mr-3" />
              <h2 className="text-xl font-semibold">Provider Setup</h2>
            </div>
            <p className="text-foreground-secondary mb-4">
              Set up your own provider node to supply liquidity and earn fees from the NEDApay network.
            </p>
            <div className="space-y-3">
              <a 
                href="/guides/provider-setup"
                className="group flex items-center justify-between p-3 border border-border rounded-lg hover:bg-background-tertiary transition-colors"
              >
                <div>
                  <div className="font-medium group-hover:text-green-400 transition-colors">
                    Provider Setup Guide
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    Complete provider onboarding
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-green-400 transition-colors" />
              </a>
              
              <a 
                href="/guides/testing"
                className="group flex items-center justify-between p-3 border border-border rounded-lg hover:bg-background-tertiary transition-colors"
              >
                <div>
                  <div className="font-medium group-hover:text-green-400 transition-colors">
                    Testing & Development
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    Sandbox and testing tools
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-green-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Popular Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Popular Guides</h2>
          <div className="space-y-4">
            <a 
              href="/quickstart"
              className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                <div>
                  <div className="font-medium group-hover:text-blue-400 transition-colors">
                    Quickstart Guide
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    Get started with NEDApay in minutes
                  </div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-blue-400 transition-colors" />
            </a>

            <a 
              href="/concepts/architecture"
              className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-orange-400 mr-3" />
                <div>
                  <div className="font-medium group-hover:text-orange-400 transition-colors">
                    Protocol Architecture
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    Understanding NEDApay's core components
                  </div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-orange-400 transition-colors" />
            </a>

            <a 
              href="/concepts/lifecycle"
              className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-green-400 mr-3" />
                <div>
                  <div className="font-medium group-hover:text-green-400 transition-colors">
                    Transaction Lifecycle
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    How payments flow through the network
                  </div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-green-400 transition-colors" />
            </a>
          </div>
        </section>

        {/* Getting Help */}
        <section className="mb-12">
          <div className="p-6 bg-background-secondary border border-border rounded-lg">
            <h3 className="text-lg font-medium mb-3">Need Help?</h3>
            <p className="text-foreground-secondary mb-4">
              Can't find what you're looking for? Our team is here to help you get started.
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
                className="px-4 py-2 border border-border hover:bg-background-tertiary rounded-lg text-sm font-medium transition-colors"
              >
                Join Community
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
