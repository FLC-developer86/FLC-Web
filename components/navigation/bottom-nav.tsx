'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Radio, Heart, Users, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/live', label: 'Live', icon: Radio },
  { href: '/give', label: 'Give', icon: Heart },
  { href: '/connect', label: 'Connect', icon: Users },
  { href: '/about', label: 'More', icon: Menu },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient border on top */}
      <div className="h-[2px] bg-gradient-gold-horizontal" />
      
      {/* Navigation container */}
      <div className="bg-gradient-purple pb-safe">
        <div className="flex h-16 items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 px-3 py-2 transition-all duration-200',
                  isActive 
                    ? 'text-white' 
                    : 'text-white/60 hover:text-white/90'
                )}
              >
                <div className={cn(
                  'relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200',
                  isActive && 'bg-white/15'
                )}>
                  <Icon className={cn(
                    'h-5 w-5 transition-transform duration-200',
                    isActive && 'scale-110'
                  )} />
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-gradient-gold" 
                          style={{ background: 'linear-gradient(135deg, #c9a87a 0%, #6b4a2a 100%)' }} />
                  )}
                </div>
                <span className={cn(
                  'text-[10px] font-medium transition-all duration-200',
                  isActive ? 'text-white' : 'text-white/60'
                )}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
