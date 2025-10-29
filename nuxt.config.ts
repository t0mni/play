// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: { port: 4000, host: '0.0.0.0' },
  css: ['@/assets/tailwind.css'],
  // This base makes links/assets work under /play/ on GitHub Pages
  app: { baseURL: '/play/' },
  nitro: { preset: 'github_pages' },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts'
  ]
})