import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' makes the build work on any GitHub Pages path
// (user site or project site) without editing. See README.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
