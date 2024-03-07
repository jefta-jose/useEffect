import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',   // backend server
        changeOrigin: true,  // for CORS
        rewrite: (path) => path.replace(/^\/api/, '')  // remove base path
      },
      '/chuck': {
        target: 'https://api.chucknorris.io',   // backend server
        changeOrigin: true,  // for CORS
        rewrite: (path) => path.replace(/^\/chuck/, '')  // remove base path
      }
    }
  },
  plugins: [react()],
})
