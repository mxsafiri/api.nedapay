"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X, Menu, ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarItem {
  title: string
  href?: string
  items?: SidebarItem[]
  badge?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

const guidesData: SidebarItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Quickstart", href: "/quickstart" },
      { title: "Protocol Overview", href: "/protocol-overview" },
    ]
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Protocol Participants", href: "/concepts/participants" },
      { title: "Protocol Architecture", href: "/concepts/architecture" },
      { title: "Compliance & Security", href: "/concepts/compliance" },
      { title: "Transaction Lifecycle", href: "/concepts/lifecycle" },
    ]
  },
  {
    title: "Implementation Guides",
    items: [
      { title: "Sender API Integration", href: "/guides/sender-integration" },
      { title: "Smart Contract Interaction", href: "/guides/smart-contracts" },
      { title: "Provider Setup Guide", href: "/guides/provider-setup" },
    ]
  },
  {
    title: "Resources",
    items: [
      { title: "Supported Stablecoins", href: "/resources/stablecoins" },
      { title: "Supported Currencies", href: "/resources/currencies" },
      { title: "Error Codes", href: "/resources/errors" },
      { title: "Changelog", href: "/resources/changelog" },
    ]
  },
]

const apiReferenceData: SidebarItem[] = [
  {
    title: "API Reference",
    items: [
      { title: "Overview", href: "/api-reference" },
      { title: "Introduction", href: "/api-reference/introduction" },
      { title: "Authentication", href: "/api-reference/authentication" },
      { title: "Errors", href: "/api-reference/errors" },
    ]
  },
  {
    title: "Sender",
    href: "/api-reference/sender",
    items: [
      { title: "Initiate Payment Order", href: "/api-reference/sender/create-order", method: "POST" },
      { title: "List Payment Orders", href: "/api-reference/sender/list-orders", method: "GET" },
      { title: "Get Payment Order by ID", href: "/api-reference/sender/get-order", method: "GET" },
      { title: "Get Lock Payment Order Status", href: "/api-reference/sender/lock-status", method: "GET" },
      { title: "Get Sender Stats", href: "/api-reference/sender/stats", method: "GET" },
    ]
  },
  {
    title: "Provider",
    href: "/api-reference/provider",
    items: [
      { title: "List Lock Payment Orders", href: "/api-reference/provider/list-lock-orders", method: "GET" },
      { title: "Get Market Rate", href: "/api-reference/provider/market-rate", method: "GET" },
      { title: "Get Provider Stats", href: "/api-reference/provider/stats", method: "GET" },
      { title: "Get Node Info", href: "/api-reference/provider/node-info", method: "GET" },
    ]
  },
  {
    title: "Receiver",
    href: "/api-reference/receiver",
    items: [
      { title: "Create Receive Order", href: "/api-reference/receiver/create-order", method: "POST" },
      { title: "List Receive Orders", href: "/api-reference/receiver/list-orders", method: "GET" },
      { title: "Get Receive Order", href: "/api-reference/receiver/get-order", method: "GET" },
    ]
  },
  {
    title: "General",
    href: "/api-reference/general",
    items: [
      { title: "List Supported Currencies", href: "/api-reference/general/currencies", method: "GET" },
      { title: "List Supported Institutions", href: "/api-reference/general/institutions", method: "GET" },
      { title: "List Supported Tokens", href: "/api-reference/general/tokens", method: "GET" },
      { title: "Get Token Rate", href: "/api-reference/general/token-rate", method: "GET" },
      { title: "Get Aggregator Public Key", href: "/api-reference/general/public-key", method: "GET" },
      { title: "Verify Account", href: "/api-reference/general/verify-account", method: "POST" },
      { title: "Reindex Transaction", href: "/api-reference/general/reindex-transaction", method: "GET" },
    ]
  },
  {
    title: "Utilities",
    items: [
      { title: "Exchange Rates", href: "/api-reference/rates", method: "GET" },
    ]
  },
]

function MobileMenuSection({ item, level = 0, pathname, onItemClick }: { 
  item: SidebarItem; 
  level?: number; 
  pathname: string;
  onItemClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(() => {
    if (!item.items) return false
    return item.items.some(child => pathname === child.href) || 
           (item.href && pathname === item.href) ||
           (item.href && pathname.startsWith(item.href + '/'))
  })
  
  const hasItems = item.items && item.items.length > 0

  useEffect(() => {
    if (!item.items) return
    const shouldBeOpen = item.items.some(child => pathname === child.href) || 
                        (item.href && pathname === item.href) ||
                        (item.href && pathname.startsWith(item.href + '/'))
    setIsOpen(shouldBeOpen)
  }, [pathname, item.items, item.href])

  if (!hasItems && item.href) {
    return (
      <a
        href={item.href}
        onClick={onItemClick}
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-background-secondary",
          level > 0 ? "ml-4 text-foreground-secondary" : "text-foreground-secondary",
          pathname === item.href && "bg-blue-500/10 text-blue-400"
        )}
      >
        {item.method && (
          <span className={cn("method-badge", {
            "method-get": item.method === "GET",
            "method-post": item.method === "POST",
            "method-put": item.method === "PUT",
            "method-delete": item.method === "DELETE",
          })}>
            {item.method}
          </span>
        )}
        <span className="flex-1">{item.title}</span>
        {item.badge && (
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400">
            {item.badge}
          </span>
        )}
      </a>
    )
  }

  return (
    <div>
      {hasItems && (
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-background-secondary"
          >
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {item.href ? (
            <a
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-background-secondary",
                level === 0 ? "text-foreground" : "text-foreground-secondary",
                pathname === item.href && "bg-blue-500/10 text-blue-400"
              )}
            >
              {item.title}
            </a>
          ) : (
            <span className={cn(
              "flex-1 px-3 py-2 text-sm font-medium",
              level === 0 ? "text-foreground" : "text-foreground-secondary"
            )}>
              {item.title}
            </span>
          )}
        </div>
      )}
      
      {isOpen && hasItems && (
        <div className={cn("space-y-1", level > 0 && "ml-4")}>
          {item.items?.map((subItem, index) => (
            <MobileMenuSection 
              key={index} 
              item={subItem} 
              level={level + 1} 
              pathname={pathname} 
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const isApiReference = pathname?.startsWith('/api-reference')
  const currentData = isApiReference ? apiReferenceData : guidesData

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-sidebar-background border-r border-sidebar-border z-50 lg:hidden">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <div className="flex items-center space-x-2">
              <img 
                src="/favicon.ico" 
                alt="NEDApay Logo" 
                className="h-6 w-6 rounded"
              />
              <span className="font-semibold">Navigation</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-background-secondary rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {currentData.map((item: SidebarItem, index: number) => (
                <MobileMenuSection 
                  key={index} 
                  item={item} 
                  pathname={pathname || ''} 
                  onItemClick={onClose}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
