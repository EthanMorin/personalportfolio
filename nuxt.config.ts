// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: 'https://ethanmorin.dev',
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: { preset: 'cloudflare_pages' },
  content: {
    experimental: { sqliteConnector: 'native' },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  supabase: {
    redirect: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/supabase'
  ]
})