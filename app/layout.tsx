import type { Metadata, Viewport } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import './globals.css'

// Modern sans-serif for body text
const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit',
  display: 'swap',
})

// Elegant serif for headings
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Faith Living Church | Welcome Home',
  description: 'Welcome to Faith Living Church - A community of faith, hope, and love. Join us for worship, connect with others, and grow in your faith journey.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Faith Living Church',
  },
  keywords: ['church', 'faith', 'worship', 'community', 'christian', 'livestream'],
  authors: [{ name: 'Faith Living Church' }],
}

export const viewport: Viewport = {
  themeColor: '#3b1e5c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
