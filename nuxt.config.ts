export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-swiper',
        'nuxt-vitest',
    ],
    css: ['~/assets/css/main.css'],
    colorMode: {
        preference: 'light',
        fallback: 'light',
        dataValue: 'theme',
        classSuffix: '',
    },
    vite: {
        assetsInclude: ['**/*.mov', '**/*.png', '**/*.jpg'],
    },
    app: {
        head: {
            title: 'Jules-Art',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Jules Art artist portfolio' },
                { property: 'og:title', content: 'Jules-Art' },
                { property: 'og:description', content: 'Jules Art artist portfolio' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
        },
    },
})
