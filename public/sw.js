const CACHE_NAME = 'pwa-cache-v1'
const STATIC_ASSETS = [
  '/',
  '/fonts/Geist-Variable.woff2',
  '/fonts/GeistMono-Variable.woff2',
]

globalThis.addEventListener('install', (event) => {
  globalThis.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS)
    }),
  )
})

globalThis.addEventListener('activate', (event) => {
  event.waitUntil(globalThis.clients.claim())
})

globalThis.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return
  }

  const url = new URL(event.request.url)

  // Only handle http and https requests (skip chrome-extension://, ws://, etc.)
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return
  }

  // Avoid caching Next.js server actions, API routes, or dev server HMR requests
  if (
    url.pathname.startsWith('/api/')
    || url.pathname.startsWith('/_next/webpack-hmr')
    || event.request.headers.get('x-nextjs-data')
  ) {
    return
  }

  const acceptHeader = event.request.headers.get('accept') || ''
  const isHtml = acceptHeader.includes('text/html')

  if (isHtml) {
    // Network First for HTML to ensure language/theme state updates are visible on reload
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
          return response
        })
        .catch(() => {
          return caches.match(event.request)
        }),
    )
  }
  else {
    // Cache First for static assets
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }
        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
          return response
        })
      }),
    )
  }
})
