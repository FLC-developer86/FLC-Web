import type { NextConfig } from 'next'

/**
 * Next.js configuration for GitHub Pages (static export)
 * 
 * To use this config for GitHub Pages deployment:
 * 1. Rename this file to next.config.ts
 * 2. Or copy the settings below to your next.config.ts
 * 
 * Note: Static export has limitations:
 * - No API routes
 * - No middleware
 * - No server-side rendering
 */

const nextConfig: NextConfig = {
  output: 'export',
  
  // Set basePath if deploying to a subdirectory (e.g., /FLC-Web)
  // basePath: '/FLC-Web',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for static hosting compatibility
  trailingSlash: true,
}

export default nextConfig



