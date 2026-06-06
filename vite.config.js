import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
 VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    id: '/',
    name: 'To-Do App',
    short_name: 'To-Do',
    description: 'App para gestionar tus listas',
    theme_color: '#1d4ed8',
    background_color: '#f3f4f6',
    display: 'standalone',
    start_url: '/',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-mobile.png',
        sizes: '390x844',
        type: 'image/png'
      },
      {
        src: '/screenshot-desktop.png',
        sizes: '1280x800',
        type: 'image/png',
        form_factor: 'wide'
      }
    ]
  }
})
  ],
})