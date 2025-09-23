"use client"

import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { Search, FileText, Code, Zap } from 'lucide-react'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const searchItems = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Welcome to NEDApay - East African payment protocol',
    href: '/',
    icon: FileText,
    category: 'Getting Started'
  },
  {
    id: 'quickstart',
    title: 'Quickstart',
    description: 'Get started with NEDApay in minutes',
    href: '/quickstart',
    icon: Zap,
    category: 'Getting Started'
  },
  {
    id: 'create-order',
    title: 'Create Payment Order',
    description: 'POST /v1/sender/orders',
    href: '/api-reference/sender/create-order',
    icon: Code,
    category: 'API Reference'
  },
  {
    id: 'list-orders',
    title: 'List Payment Orders',
    description: 'GET /v1/sender/orders',
    href: '/api-reference/sender/list-orders',
    icon: Code,
    category: 'API Reference'
  },
  {
    id: 'get-order',
    title: 'Get Payment Order',
    description: 'GET /v1/sender/orders/{id}',
    href: '/api-reference/sender/get-order',
    icon: Code,
    category: 'API Reference'
  },
  {
    id: 'authentication',
    title: 'Authentication',
    description: 'Learn how to authenticate with the API',
    href: '/api-reference/authentication',
    icon: FileText,
    category: 'API Reference'
  },
]

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform">
        <Command className="animate-fade-in">
          <Command.Input
            placeholder="Search documentation..."
            value={search}
            onValueChange={setSearch}
          />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            
            {['Getting Started', 'API Reference'].map((category) => (
              <Command.Group key={category} heading={category}>
                {searchItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Command.Item
                      key={item.id}
                      value={item.title}
                      onSelect={() => {
                        window.location.href = item.href
                        onOpenChange(false)
                      }}
                    >
                      <item.icon className="h-4 w-4" />
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-foreground-muted">
                          {item.description}
                        </span>
                      </div>
                    </Command.Item>
                  ))}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
