'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function ArchitectureDiagram() {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4)
    }, 1000) // Change phase every second for a 4-second loop

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-blue-50/50 to-green-50/50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg border border-border overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Partners (Left Side) */}
      <div className="absolute left-8 top-16">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 bg-blue-500/20 border-2 border-blue-400 rounded-lg flex items-center justify-center">
            <div className="text-xs font-medium text-blue-600 dark:text-blue-400 text-center">
              PSPs<br />MNOs
            </div>
          </div>
          <div className="text-xs text-center text-foreground-secondary max-w-24">
            Customer<br />Interaction
          </div>
        </div>
      </div>

      {/* NEDApay Core (Center) */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className={`w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
            animationPhase === 1 || animationPhase === 3 ? 'scale-110 shadow-xl' : 'scale-100'
          }`}>
            <Image 
              src="/favicon.ico" 
              alt="NEDApay" 
              width={36} 
              height={36}
              className={`transition-all duration-500 ${
                animationPhase === 1 || animationPhase === 3 ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
          <div className="text-xs font-medium text-center">
            NEDApay<br />Core
          </div>
        </div>
      </div>

      {/* Base Network (Right Side) */}
      <div className="absolute right-8 top-16">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-20 h-20 bg-green-500/20 border-2 border-green-400 rounded-lg flex items-center justify-center">
            <div className="text-xs font-medium text-green-600 dark:text-green-400 text-center">
              Base<br />Network
            </div>
          </div>
          <div className="text-xs text-center text-foreground-secondary max-w-24">
            Liquidity<br />Pools
          </div>
        </div>
      </div>


      {/* Animated Arrows with moving animation */}
      
      {/* 1. Partners to NEDApay (Diagonal) */}
      <div className="absolute left-16 top-20">
        <svg width="140" height="80" className="overflow-visible">
          <defs>
            <marker id="arrowhead1" markerWidth="10" markerHeight="7" 
              refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
            </marker>
          </defs>
          {/* Static path - connects Partners edge to NEDApay center */}
          <path 
            d="M 12 16 Q 70 5 128 44" 
            stroke="#3B82F6" 
            strokeWidth="1" 
            fill="none"
            opacity="0.3"
          />
          {/* Animated arrow - only during phase 0 */}
          <path 
            d="M 12 16 Q 70 5 128 44" 
            stroke="#3B82F6" 
            strokeWidth="3" 
            fill="none"
            markerEnd="url(#arrowhead1)"
            strokeDasharray="20,100"
            className={`transition-all duration-1000 ${
              animationPhase === 0 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              strokeDashoffset: animationPhase === 0 ? '0' : '140',
              animation: animationPhase === 0 ? 'dash 1s linear infinite' : 'none'
            }}
          />
        </svg>
      </div>

      {/* 2. Base Network to NEDApay (Diagonal) */}
      <div className="absolute right-16 top-20">
        <svg width="140" height="80" className="overflow-visible">
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" 
              refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
            </marker>
          </defs>
          {/* Static path - connects Base Network edge to NEDApay center */}
          <path 
            d="M 128 16 Q 70 5 12 44" 
            stroke="#10B981" 
            strokeWidth="1" 
            fill="none"
            opacity="0.3"
          />
          {/* Animated arrow - only during phase 1 */}
          <path 
            d="M 128 16 Q 70 5 12 44" 
            stroke="#10B981" 
            strokeWidth="3" 
            fill="none"
            markerEnd="url(#arrowhead2)"
            strokeDasharray="20,100"
            className={`transition-all duration-1000 ${
              animationPhase === 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              strokeDashoffset: animationPhase === 1 ? '0' : '140',
              animation: animationPhase === 1 ? 'dash 1s linear infinite' : 'none'
            }}
          />
        </svg>
      </div>


      {/* 4. NEDApay back to Partners (Fiat Delivery) */}
      <div className="absolute left-16 top-20">
        <svg width="140" height="80" className="overflow-visible">
          <defs>
            <marker id="arrowhead4" markerWidth="10" markerHeight="7" 
              refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
            </marker>
          </defs>
          {/* Static path - NEDApay back to Partners */}
          <path 
            d="M 128 44 Q 70 75 12 16" 
            stroke="#10B981" 
            strokeWidth="1" 
            fill="none"
            opacity="0.3"
            strokeDasharray="4,4"
          />
          {/* Animated arrow - only during phase 3 */}
          <path 
            d="M 128 44 Q 70 75 12 16" 
            stroke="#10B981" 
            strokeWidth="3" 
            fill="none"
            markerEnd="url(#arrowhead4)"
            strokeDasharray="20,100"
            className={`transition-all duration-1000 ${
              animationPhase === 3 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              strokeDashoffset: animationPhase === 3 ? '0' : '140',
              animation: animationPhase === 3 ? 'dash 1s linear infinite' : 'none'
            }}
          />
        </svg>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes dash {
          0% { stroke-dashoffset: 140; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes dash-vertical {
          0% { stroke-dashoffset: 55; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes dash-return {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes travel-to-core {
          0% { 
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
          50% { 
            transform: translateX(60px) translateY(-8px) scale(0.8);
            opacity: 0.8;
          }
          100% { 
            transform: translateX(120px) translateY(20px) scale(0.6);
            opacity: 0.3;
          }
        }
        @keyframes travel-from-core {
          0% { 
            transform: translateX(120px) translateY(20px) scale(1);
            opacity: 1;
          }
          50% { 
            transform: translateX(60px) translateY(35px) scale(0.8);
            opacity: 0.8;
          }
          100% { 
            transform: translateX(0) translateY(0) scale(0.6);
            opacity: 0.3;
          }
        }
        .travel-to-core {
          animation: travel-to-core 2s ease-in-out infinite;
        }
        .travel-from-core {
          animation: travel-from-core 1s ease-in-out forwards;
        }
      `}</style>

      {/* Moving Fund Indicator with Animated Labels */}
      <div className={`absolute transition-all duration-1000 ease-in-out ${
        animationPhase === 0 ? 'left-16 top-24 opacity-100' : 
        animationPhase === 1 ? 'right-16 top-24 opacity-100' :
        animationPhase === 2 ? 'left-1/2 top-24 -translate-x-1/2 opacity-100' :
        'left-16 top-24 opacity-100'
      }`}>
        <div className="flex flex-col items-center space-y-2">
          <div className={`w-4 h-4 rounded-full animate-pulse shadow-lg border-2 transition-all duration-500 ${
            animationPhase === 0 ? 'bg-yellow-400 border-yellow-600 scale-110' :
            animationPhase === 1 ? 'bg-green-400 border-green-600 scale-110' :
            animationPhase === 2 ? 'bg-orange-400 border-orange-600 scale-110' :
            'bg-green-400 border-green-600 scale-110'
          }`}></div>
          
          {/* Animated Text Labels that follow the ball */}
          <div className={`text-xs font-medium px-3 py-1 rounded-full shadow-lg transition-all duration-500 ${
            animationPhase === 0 ? 'bg-blue-500 text-white opacity-100' :
            animationPhase === 1 ? 'bg-green-500 text-white opacity-100' :
            animationPhase === 2 ? 'bg-orange-500 text-white opacity-100' :
            'bg-green-600 text-white opacity-100'
          }`}>
            {animationPhase === 0 && "Fiat Request"}
            {animationPhase === 1 && "USDT/USDC from Pool"}
            {animationPhase === 2 && "NEDApay Processing"}
            {animationPhase === 3 && "Fiat Delivered"}
          </div>
        </div>
      </div>

      {/* Enhanced PSP Request Animation - Yellow Ball traveling to NEDApay Core */}
      {animationPhase === 0 && (
        <div className="absolute left-16 top-24">
          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg border-2 border-yellow-600 animate-pulse" 
               style={{
                 animation: 'travel-to-core 1s ease-in-out forwards',
                 transform: 'translateX(0) translateY(0)'
               }} />
        </div>
      )}

      {/* Fiat Request Animation - Phase 0 Only */}
      {animationPhase === 0 && (
        <>
          {/* Animated Request Bubbles */}
          <div className="absolute left-8 top-8">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>

          {/* Request Text Animation */}
          <div className="absolute left-12 top-6">
            <div className="bg-white dark:bg-gray-800 border border-blue-300 rounded-lg px-2 py-1 shadow-lg animate-pulse">
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                "Fiat Conversion Request"
              </div>
            </div>
          </div>

          {/* Animated Request Packet traveling from PSP to NEDApay */}
          <div className="absolute left-16 top-24">
            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg border-2 border-blue-300 animate-pulse travel-to-core" />
          </div>
        </>
      )}

      {/* Processing Animation - Phase 2 Only */}
      {animationPhase === 2 && (
        <div className="absolute left-1/2 top-12 -translate-x-1/2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}

      {/* Enhanced Fiat Delivery Animation - Green Ball traveling from NEDApay Core to PSP */}
      {animationPhase === 3 && (
        <>
          <div className="absolute left-1/2 top-24 -translate-x-1/2">
            <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg border-2 border-green-600 animate-pulse travel-from-core" />
          </div>
          
          <div className="absolute left-2 top-32">
            <div className="flex flex-col items-center space-y-1">
              <div className="text-lg animate-bounce text-green-600">
                ✅
              </div>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                Fiat Delivered
              </div>
            </div>
          </div>
        </>
      )}

      {/* Simplified Static Status Indicators */}
      <div className="absolute top-4 left-4">
        <div className={`text-xs px-2 py-1 rounded transition-all duration-500 ${
          animationPhase === 0 ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
        }`}>
          1. PSP Request
        </div>
      </div>

      <div className="absolute top-4 right-4">
        <div className={`text-xs px-2 py-1 rounded transition-all duration-500 ${
          animationPhase === 1 ? 'bg-green-500 text-white shadow-lg' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
        }`}>
          2. Blockchain Transfer
        </div>
      </div>

      <div className="absolute bottom-20 right-4">
        <div className={`text-xs px-2 py-1 rounded transition-all duration-500 ${
          animationPhase === 2 ? 'bg-orange-500 text-white shadow-lg' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
        }`}>
          3. NEDApay Processing
        </div>
      </div>

      <div className="absolute bottom-20 left-4">
        <div className={`text-xs px-2 py-1 rounded transition-all duration-500 ${
          animationPhase === 3 ? 'bg-green-600 text-white shadow-lg' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
        }`}>
          4. Fiat Delivered
        </div>
      </div>

      {/* Pulse Effect on Active Component */}
      <div className={`absolute transition-all duration-500 ${
        animationPhase === 0 ? 'left-8 top-16 opacity-20' :
        animationPhase === 1 ? 'left-1/2 top-20 -translate-x-1/2 opacity-20' :
        animationPhase === 2 ? 'left-1/2 top-20 -translate-x-1/2 opacity-20' :
        'left-1/2 bottom-8 -translate-x-1/2 opacity-20'
      }`}>
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full animate-ping"></div>
      </div>
    </div>
  )
}
