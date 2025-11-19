import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const target = 'http://localhost:3000';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      // forward /api -> backend
      '/api': {
        target,
        changeOrigin: true,     // sets host header to target
        secure: false,          // allow self-signed HTTPS in dev
        ws: true,               // enable websockets if needed
        // optional: strip the /api prefix before hitting backend
        // rewrite: (path) => path.replace(/^\/api/, ''),
        // optional: rewrite cookies in case backend sets domain
        // cookieDomainRewrite: 'localhost',
      },
    },
  },
})
