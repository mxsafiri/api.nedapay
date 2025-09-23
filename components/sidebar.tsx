"use client"

import { useState } from 'react'
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
    items: [
      { title: "Initiate Payment Order", href: "/api-reference/sender/create-order", method: "POST" },
      { title: "List Payment Orders", href: "/api-reference/sender/list-orders", method: "GET" },
      { title: "Get Payment Order by ID", href: "/api-reference/sender/get-order", method: "GET" },
      { title: "Get Lock Payment Order Status", href: "/api-reference/sender/get-lock-status", method: "GET" },
      { title: "Get Sender Stats", href: "/api-reference/sender/get-stats", method: "GET" },
    ]
  },
  {
    title: "Provider",
    items: [
      { title: "List Lock Payment Orders", href: "/api-reference/provider/list-orders", method: "GET" },
      { title: "Get Market Rate", href: "/api-reference/provider/market-rate", method: "GET" },
      { title: "Get Provider Stats", href: "/api-reference/provider/stats", method: "GET" },
      { title: "Get Node Info", href: "/api-reference/provider/node-info", method: "GET" },
    ]
  },
  {
    title: "General",
    items: [
      { title: "List Supported Currencies", href: "/api-reference/general/currencies", method: "GET" },
      { title: "List Supported Institutions", href: "/api-reference/general/institutions", method: "GET" },
      { title: "List Supported Tokens", href: "/api-reference/general/tokens", method: "GET" },
      { title: "Get Token Rate", href: "/api-reference/general/token-rate", method: "GET" },
      { title: "Get Aggregator Public Key", href: "/api-reference/general/public-key", method: "GET" },
      { title: "Verify Account", href: "/api-reference/general/verify-account", method: "POST" },
      { title: "Reindex Transaction", href: "/api-reference/general/reindex", method: "GET" },
    ]
  },
]

function SidebarSection({ item, level = 0 }: { item: SidebarItem; level?: number }) {
  const [isOpen, setIsOpen] = useState(true)
  const hasItems = item.items && item.items.length > 0

  if (!hasItems && item.href) {
    return (
      <a
        href={item.href}
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-background-secondary",
          level > 0 ? "ml-4 text-foreground-secondary" : "text-foreground-secondary"
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-background-secondary",
            level === 0 ? "text-foreground" : "text-foreground-secondary"
          )}
        >
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
          <span className="flex-1 text-left">{item.title}</span>
        </button>
      )}
      
      {isOpen && hasItems && (
        <div className={cn("space-y-1", level > 0 && "ml-4")}>
          {item.items?.map((subItem, index) => (
            <SidebarSection key={index} item={subItem} level={level + 1} />
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
              <SidebarSection key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
