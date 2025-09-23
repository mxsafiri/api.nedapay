"use client"

import { Search, Github } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { CommandPalette } from './command-palette'
import { ThemeSwitch } from './theme-switch'

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  const isApiReference = pathname?.startsWith('/api-reference')
  const isGuides = pathname?.startsWith('/guides')

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 z-50 w-full bg-background border-b border-border">
        <div className="flex h-14 items-center px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/favicon.ico" 
              alt="NEDApay Logo" 
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-lg font-semibold">nedapay</span>
            <span className="rounded-full bg-blue-500/10 px-2 py-1 text-xs text-blue-400 border border-blue-500/20">
              BETA
            </span>
          </div>

          {/* Search and Actions */}
          <div className="flex flex-1 items-center justify-end space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 rounded-lg border border-border bg-background-secondary px-3 py-2 text-sm text-foreground-secondary hover:bg-background-tertiary transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>Search...</span>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-xs text-foreground-muted">
                ⌘K
              </kbd>
            </button>

            {/* External Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
              >
                Support
              </a>
              <a
                href="https://github.com/nedapay"
                className="text-foreground-secondary hover:text-foreground transition-colors"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
              >
                Community
              </a>
              
              {/* Theme Switch */}
              <div className="border-l border-border pl-4">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sub Header - Navigation */}
      <div className="fixed top-14 z-40 w-full bg-background border-b border-border">
        <div className="flex h-12 items-center px-6">
          <nav className="flex items-center space-x-8">
            <a 
              href="/guides" 
              className={`text-sm font-medium transition-colors relative pb-3 ${
                isGuides 
                  ? 'text-foreground border-b-2 border-blue-500' 
                  : 'text-foreground-secondary hover:text-foreground'
              }`}
            >
              Guides
            </a>
            <a 
              href="/api-reference" 
              className={`text-sm font-medium transition-colors relative pb-3 ${
                isApiReference 
                  ? 'text-foreground border-b-2 border-blue-500' 
                  : 'text-foreground-secondary hover:text-foreground'
              }`}
            >
              API Reference
            </a>
          </nav>
        </div>
      </div>

      <CommandPalette open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  )
}
