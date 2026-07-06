import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'Job Board',
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
                },
            ],
        },
    },
    vite: {
        plugins: [tailwindcss()],
        vue: {
            customElement: true,
        },
        vueJsx: {
            mergeProps: true,
        },
        optimizeDeps: {
            include: [
                '@tanstack/vue-query',
            ]
        },
    },
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true}
})
