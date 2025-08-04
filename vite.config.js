import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    hmr: {
      overlay: true
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          monaco: ['@monaco-editor/react', '@monaco-editor/loader'],
          charts: ['chart.js', 'react-chartjs-2'],
          ui: ['lucide-react', 'react-hot-toast']
        }
      }
    },
    // Increase chunk size warning limit to 1000 kB
    chunkSizeWarningLimit: 1000,
    // Use esbuild for faster builds (default)
    minify: 'esbuild'
  }
})
