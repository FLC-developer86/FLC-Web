'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Radio, Heart, Users, Menu, X, Church, BookOpen, ImageIcon, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const mainNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/live', label: 'Watch Live', icon: Radio },
  { href: '/media', label: 'Sermons', icon: BookOpen },
  { href: '/give', label: 'Give', icon: Heart },
  { href: '/connect', label: 'Connect', icon: Users },
  { href: '/about', label: 'About', icon: Info },
]

export function TopNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 hidden md:block">
      {/* Main Navigation Bar */}
      <nav className="bg-gradient-purple shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo / Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20">
                <Church className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">Faith Living</span>
                <span className="text-xs text-white/70 leading-tight">Church</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'nav-link text-white/80 hover:text-white',
                      isActive && 'text-white active'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/live">
                <Button className="btn-gold rounded-full px-6">
                  <Radio className="mr-2 h-4 w-4" />
                  Watch Live
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button (for tablets) */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gradient-purple border-l-0 p-0">
                <div className="flex flex-col h-full">
                  {/* Sheet Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                        <Church className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg font-bold text-white">Faith Living Church</span>
                    </div>
                  </div>

                  {/* Sheet Navigation */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-2">
                      {mainNavItems.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              'flex items-center gap-3 rounded-lg px-4 py-3 text-white/80 transition-all hover:bg-white/10 hover:text-white',
                              isActive && 'bg-white/10 text-white'
                            )}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </nav>

                  {/* Sheet Footer */}
                  <div className="p-6 border-t border-white/10">
                    <Link href="/live" onClick={() => setIsOpen(false)}>
                      <Button className="w-full btn-gold rounded-full">
                        <Radio className="mr-2 h-4 w-4" />
                        Watch Live
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

