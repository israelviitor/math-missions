import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  server: {
    allowedHosts: ['.vercel.run'],
  },
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        termos: fileURLToPath(new URL('./termos.html', import.meta.url)),
        privacidade: fileURLToPath(new URL('./privacidade.html', import.meta.url)),
      },
    },
  },
})
