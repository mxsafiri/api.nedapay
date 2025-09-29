"use client"

import { Search, Github, Menu } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { CommandPalette } from './command-palette'
import { ThemeSwitch } from './theme-switch'
import { MobileMenu } from './mobile-menu'

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isApiReference = pathname?.startsWith('/api-reference')
  const isGuides = pathname?.startsWith('/guides')

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 z-50 w-full bg-background border-b border-border">
        <div className="flex h-14 items-center px-4 sm:px-6">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="mr-3 p-2 hover:bg-background-secondary rounded-lg transition-colors lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2 min-w-0 flex-shrink">
            <img 
              src="/favicon.ico" 
              alt="NEDApay Logo" 
              className="h-8 w-8 rounded-lg flex-shrink-0"
            />
            <span className="text-lg font-semibold truncate">nedapay</span>
            <span className="hidden sm:inline-flex rounded-full bg-blue-500/10 px-2 py-1 text-xs text-blue-400 border border-blue-500/20 flex-shrink-0">
              BETA
            </span>
          </div>

          {/* Search and Actions */}
          <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4 ml-2 sm:ml-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 rounded-lg border border-border bg-background-secondary px-2 sm:px-3 py-2 text-sm text-foreground-secondary hover:bg-background-tertiary transition-colors"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-xs text-foreground-muted">
                ⌘K
              </kbd>
            </button>

            {/* External Links */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a
                href="#"
                className="hidden md:block text-sm text-foreground-secondary hover:text-foreground transition-colors"
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
                className="hidden md:block text-sm text-foreground-secondary hover:text-foreground transition-colors"
              >
                Community
              </a>
              
              {/* Theme Switch */}
              <div className="border-l border-border pl-2 sm:pl-4">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sub Header - Navigation */}
      <div className="fixed top-14 z-40 w-full bg-background border-b border-border">
        <div className="flex h-12 items-center px-4 sm:px-6 overflow-x-auto">
          <nav className="flex items-center space-x-6 sm:space-x-8 whitespace-nowrap">
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
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
