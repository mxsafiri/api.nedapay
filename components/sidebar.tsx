"use client"

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'
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

function SidebarSection({ item, level = 0, pathname }: { item: SidebarItem; level?: number; pathname: string }) {
  // Determine if this section should be open based on current path
  const shouldBeOpen = useCallback(() => {
    if (!item.items) return false
    
    // Check if any child item matches the current path
    return item.items.some(child => pathname === child.href) || 
           // Check if the section itself matches the current path
           (item.href && pathname === item.href) ||
           // Check if current path starts with this section's base path
           (item.href && pathname.startsWith(item.href + '/'))
  }, [item.items, item.href, pathname])
  
  const [isOpen, setIsOpen] = useState(() => shouldBeOpen())
  const hasItems = item.items && item.items.length > 0
  
  // Update open state when pathname changes
  useEffect(() => {
    setIsOpen(shouldBeOpen())
  }, [shouldBeOpen])

  if (!hasItems && item.href) {
    return (
      <a
        href={item.href}
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
            <SidebarSection key={index} item={subItem} level={level + 1} pathname={pathname} />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  
  // Check if we're on an API reference page
  const isApiReference = pathname?.startsWith('/api-reference')
  
  // Use appropriate data based on current section
  const currentData = isApiReference ? apiReferenceData : guidesData
  
  return (
    <div className="fixed left-0 top-26 z-30 h-[calc(100vh-6.5rem)] w-64 border-r border-sidebar-border bg-sidebar-background">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-2">
            {currentData.map((item: SidebarItem, index: number) => (
              <SidebarSection key={index} item={item} pathname={pathname || ''} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
