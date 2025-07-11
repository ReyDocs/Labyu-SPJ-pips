import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change base to an empty string or './' for relative paths
  base: './', // This often works well with Netlify for SPAs
})