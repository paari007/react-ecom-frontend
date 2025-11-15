import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [['babel-plugin-react-compiler', { target: '19' }]],
    },
  })],
  server: {
    proxy: {
      '/api': {
        target: 'https://react-ecom-backend-a19y.onrender.com'
      },
      '/images': {
        target: 'https://react-ecom-backend-a19y.onrender.com'
      }
    }
  },
  build: {
    outDir: '../ecommerce-backend/dist'
  }
})
