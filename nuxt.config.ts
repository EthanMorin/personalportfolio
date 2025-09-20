// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: { preset: 'cloudflare_pages' }, // good practice on Pages
  content: {
    experimental: { sqliteConnector: 'native' }, // << key line
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/content'
  ]
})