import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // <-- this is important for Vercel!
  plugins: [
    react(),
    tailwindcss(),
  ],
})
