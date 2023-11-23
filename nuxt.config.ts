export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    css: ['~/assets/css/main.css'],
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
