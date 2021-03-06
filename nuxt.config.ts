import { defineNuxtConfig, NuxtConfig } from 'nuxt'

const config: NuxtConfig = {
  head: {
    title: 'Nuxt 3 Vitest',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  plugins: [],

  components: true,

  buildModules: [],

  modules: [],

  build: {},
}
export default defineNuxtConfig(config)
