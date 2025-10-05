'use client'

import { useState, useEffect } from 'react'
import { Globe, Zap, ArrowRight, Building2 } from 'lucide-react'

export function InteractiveBankDemo() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const phases = [
    { title: "Traditional Banking", description: "Multiple intermediaries create friction" },
    { title: "NEDApay Transformation", description: "Direct blockchain settlement" },
    { title: "Global Market Access", description: "Worldwide liquidity and capital flows" }
  ]

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % phases.length)
    }, 4000) // Change phase every 4 seconds

    return () => clearInterval(interval)
  }, [isAnimating, phases.length])

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">From Friction to Flow</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Watch how NEDApay transforms global money movement</p>
      </div>

      {/* Phase Indicator */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-all duration-500">
          {phases[currentPhase].title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{phases[currentPhase].description}</p>
      </div>

      {/* Animation Container */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative h-80 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          
          {/* Traditional Banking Flow */}
          <div className={`absolute inset-0 transition-all duration-1000 ${
            currentPhase === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center">
                  <Building2 className="h-10 w-10 text-blue-600 mb-2" />
                  <span className="text-xs text-gray-600 dark:text-gray-300">Your Bank</span>
                </div>
                
                {/* Money particle with slow movement */}
                <div className="relative">
                  <div className={`w-4 h-4 bg-blue-500 rounded-full transition-transform duration-[3000ms] ${
                    currentPhase === 0 ? 'translate-x-0' : 'translate-x-80'
                  }`}></div>
                </div>
                
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center relative">
                    <Building2 className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-xs text-gray-400 dark:text-gray-500">Bank {i}</span>
                    <div className={`absolute -bottom-6 w-6 h-2 bg-red-500 rounded transition-all duration-500 delay-${i * 200} ${
                      currentPhase === 0 ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                    <div className="text-xs text-red-600 font-medium mt-2">+$15</div>
                  </div>
                ))}
                
                <div className="flex flex-col items-center">
                  <Globe className="h-10 w-10 text-green-600 mb-2" />
                  <span className="text-xs text-gray-600 dark:text-gray-300">Recipient</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">$75</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Total Fees</div>
              </div>
            </div>
          </div>

          {/* NEDApay Flow */}
          <div className={`absolute inset-0 transition-all duration-1000 ${
            currentPhase === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center space-x-16">
                <div className="flex flex-col items-center">
                  <Building2 className="h-10 w-10 text-blue-600 mb-2" />
                  <span className="text-xs text-gray-600 dark:text-gray-300">Your Bank</span>
                </div>
                
                <div className="relative">
                  <div className={`w-4 h-4 bg-green-500 rounded-full transition-transform duration-1000 ${
                    currentPhase === 1 ? 'translate-x-0' : 'translate-x-64'
                  }`}></div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-500 ${
                    currentPhase === 1 ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    <Zap className="h-3 w-3 text-white" />
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-xs text-white font-bold">NEDApay</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Blockchain Layer</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <Globe className="h-10 w-10 text-green-600 mb-2" />
                  <span className="text-xs text-gray-600 dark:text-gray-300">Recipient</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$5</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Total Fees</div>
              </div>
            </div>
          </div>

          {/* Global Network */}
          <div className={`absolute inset-0 transition-all duration-1000 ${
            currentPhase === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                {/* Central Hub */}
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">NEDApay</span>
                </div>
                
                {/* Market Nodes */}
                {[
                  {x: -120, y: -80, label: 'US', color: 'bg-green-500'},
                  {x: 120, y: -80, label: 'EU', color: 'bg-yellow-500'}, 
                  {x: 140, y: 0, label: 'ASIA', color: 'bg-purple-500'},
                  {x: 120, y: 80, label: 'LATAM', color: 'bg-red-500'},
                  {x: -120, y: 80, label: 'AFRICA', color: 'bg-cyan-500'}
                ].map((market, i) => (
                  <div 
                    key={i} 
                    className={`absolute w-8 h-8 ${market.color} rounded-full flex items-center justify-center transition-all duration-1000 delay-${i * 200} ${
                      currentPhase === 2 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    style={{ 
                      left: `calc(50% + ${market.x}px)`, 
                      top: `calc(50% + ${market.y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <span className="text-xs text-white font-bold">{market.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600">Minutes</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Settlement Time</div>
        </div>
        <div className="text-center p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-green-600">90%</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Cost Reduction</div>
        </div>
        <div className="text-center p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-purple-600">Global</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Market Access</div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          Upgrade Your Infrastructure
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
