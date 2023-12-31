import vue from '@vitejs/plugin-vue'
import vuePugPlugin from 'vue-pug-plugin'

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          plugins: [vuePugPlugin]
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
