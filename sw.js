importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js')

if (workbox) {
  workbox.precaching.precacheAndRoute([
    '/',
    { url: 'views/home.html'},
    { url: 'views/profile.html'},
    { url: '/style.css' },
    { url: '/script.js' },
    { url: '/background-profile.jpeg' },
    { url: '/background-profile-mobile.jpeg' },
    { url: '/favicon.ico' }
  ])

  workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'pages'
    })
  )
  
  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources'
    })
  )

  workbox.routing.registerRoute(
    /^https:\/\/iam-akbarsahata-id\.firebaseio\.com/,
    new workbox.strategies.NetworkFirst()
  )

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-stylesheets',
    })
  )

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  )
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}