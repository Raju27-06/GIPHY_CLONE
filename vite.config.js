import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 👈 Allows external access (like from Docker)
    port: 3000      // 👈 Makes sure Vite uses port 5173 (matches Docker mapping)
  }
})
