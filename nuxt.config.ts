// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    modules: [
      '@pinia/nuxt',
      'pinia-plugin-persistedstate/nuxt',
      '@nuxt/ui',
      '@nuxtjs/i18n',
    ],
    pinia: {
        storesDirs: ['@/stores/**'],
    },
    css: ['~/assets/css/main.css'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/global.scss" as *;'
                }
            }
        }
    },
    i18n: {
        defaultLocale: 'ko',
        locales: [
            { code: 'ko', name: '한국어', file: 'ko.json' },
            { code: 'en', name: 'English', file: 'en.json' },
        ]
    },
})