import { TopNav } from '@/components/navigation/top-nav'
import { BottomNav } from '@/components/navigation/bottom-nav'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top nav visible on md+ screens */}
      <TopNav />
      
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Bottom nav visible on mobile only */}
      <BottomNav />
    </div>
  )
}
