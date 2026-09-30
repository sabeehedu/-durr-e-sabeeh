export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Dur E Sabeeh Seed Corporation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Dur E Sabeeh Seed Corporation — certified wheat, rice and other crop seeds for Punjab farmers. Research-backed, tested, and verifiable seed.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },

  // Every route not explicitly listed here still works — this is only
  // used for generate/prerender hints on the dynamic verify route.
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  typescript: {
    strict: true
  }
})
