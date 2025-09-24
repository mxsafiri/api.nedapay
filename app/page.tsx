'use client'

import { ArrowRight, Zap, Shield, Globe, Code, Play } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const animatedTexts = [
  "Pay anywhere, settle everywhere.",
  "Stablecoins to fiat, instantly.",
  "One API, global reach.",
  "Secondary layer for money movement."
]

export default function HomePage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Landing Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background-secondary">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Logo/Favicon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center shadow-2xl">
              <Image 
                src="/favicon.ico" 
                alt="NEDApay" 
                width={40} 
                height={40}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Animated Value Proposition */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
              NEDApay
            </h1>
            <div className="h-16 flex items-center justify-center">
              <p className={`text-2xl md:text-3xl font-medium text-foreground-secondary transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {animatedTexts[currentTextIndex]}
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            The omni-channel protocol creating a <span className="text-blue-400 font-semibold">secondary layer</span> for 
            global money movement through <span className="text-green-400 font-semibold">stablecoins</span> and 
            <span className="text-orange-400 font-semibold"> local payment rails</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="/quickstart"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/api-reference"
              className="px-8 py-4 border-2 border-border hover:border-blue-400 text-foreground hover:text-blue-400 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View API Docs
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3s</div>
              <div className="text-sm text-foreground-secondary">Settlement Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-sm text-foreground-secondary">Payment Rails</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">6</div>
              <div className="text-sm text-foreground-secondary">Currencies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-foreground-secondary">Uptime</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground-muted rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground-muted rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">

        {/* Welcome Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Welcome to NEDApay</h2>
          <p className="text-foreground-secondary mb-6 leading-relaxed">
            We provide <strong className="text-foreground">blockchain infrastructure</strong> that enables Payment Service Providers (PSPs), 
            Mobile Network Operators (MNOs), and Banks to offer <strong className="text-foreground">stablecoin services</strong> through 
            their existing customer channels. Your customers use familiar interfaces while you leverage our Base network bridge for 
            <strong className="text-foreground"> instant stablecoin-to-fiat conversion</strong>.
          </p>
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-400">
              <strong>Partner-First Approach:</strong> Keep your existing payment infrastructure, customer relationships, and compliance frameworks. 
              We handle the blockchain complexity so you can focus on serving your customers.
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The Solution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Zap className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="font-medium mb-2">Secondary Layer</h3>
              <p className="text-sm text-foreground-secondary">
                Unified routing layer connecting stablecoins to global payment rails
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Shield className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="font-medium mb-2">Omni-Channel</h3>
              <p className="text-sm text-foreground-secondary">
                Single protocol accessing PSPs, MMOs, MNOs, and traditional banking
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Globe className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-medium mb-2">Global Distribution</h3>
              <p className="text-sm text-foreground-secondary">
                Instant stablecoin-to-fiat conversion across worldwide networks
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-background-secondary">
              <Code className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="font-medium mb-2">Unified API</h3>
              <p className="text-sm text-foreground-secondary">
                Single integration point for accessing global money movement infrastructure
              </p>
            </div>
          </div>
        </section>

        {/* Base Network */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Built on Base Network</h2>
          <div className="p-8 rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Why Base?</h3>
                <p className="text-foreground-secondary mb-6 leading-relaxed">
                  NEDApay leverages Base as our primary blockchain network, providing the optimal balance of 
                  cost efficiency, speed, and EVM compatibility for seamless stablecoin operations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-background-secondary/50">
                    <div className="text-2xl font-bold text-green-400 mb-1">~$0.01</div>
                    <div className="text-xs text-foreground-secondary">Transaction Fee</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background-secondary/50">
                    <div className="text-2xl font-bold text-blue-400 mb-1">2-3s</div>
                    <div className="text-xs text-foreground-secondary">Settlement Time</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-4 text-green-400">Network Benefits</h4>
                <ul className="space-y-3 text-sm text-foreground-secondary">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Ultra-low transaction fees for high-volume operations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    EVM compatibility for seamless DeFi integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Institutional-grade security and reliability
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Growing ecosystem with abundant liquidity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="/quickstart"
              className="group p-6 rounded-lg border border-border bg-background-secondary hover:bg-background-tertiary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-blue-400 transition-colors">
                For Developers
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Learn how to create payment orders and integrate with the NEDApay API
              </p>
              <div className="flex items-center text-blue-400 text-sm font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </a>
            <a 
              href="/guides/provider-setup"
              className="group p-6 rounded-lg border border-border bg-background-secondary hover:bg-background-tertiary transition-colors"
            >
              <h3 className="font-medium mb-2 group-hover:text-green-400 transition-colors">
                For Providers
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Set up a provider node to supply liquidity and earn fees
              </p>
              <div className="flex items-center text-green-400 text-sm font-medium">
                Setup Guide <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </a>
          </div>
        </section>
        </div>
      </div>
    </div>
  )
}
