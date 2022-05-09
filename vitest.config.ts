import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue',
      ],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
