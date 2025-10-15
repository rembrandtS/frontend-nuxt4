// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
    ],
    pinia: {
        storesDirs: ['@/stores/**'],
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/global.scss" as *;'
                }
            }
        }
    }
})
