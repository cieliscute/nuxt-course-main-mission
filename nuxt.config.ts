// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  devServer:{
    port:8080
  },
  css: [
    'assets/stylesheet/all.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ''
        },
      },
    },
  },
})
