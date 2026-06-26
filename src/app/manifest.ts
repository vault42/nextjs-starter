import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js PWA Starter',
    short_name: 'PWA Starter',
    description: 'A Next.js 16 starter supporting Progressive Web App',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/vercel.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
