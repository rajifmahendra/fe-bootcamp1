import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    // Expose environment variables to Vite build process
    'process.env': {
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
      // Optional, uncomment if you want to expose secret key or other environment variables
      // VITE_SECRET_KEY: JSON.stringify(process.env.VITE_SECRET_KEY),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:8000', // Default to localhost if not provided
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
