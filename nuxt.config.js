
export default {
  mode: 'universal',
  server: {
    port: 8000,
    host: '0.0.0.0' // default: localhost
  },
  head: {
    titleTemplate: 'Undead Lords - %s ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Undead Lords' },
      {
        property: 'og:description',
        content: 'Harvesting Souls Since 1994.'
      },
      {
        property: 'og:image',
        content: 'https://udl.gg/i/udl.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: { color: '#000' },
  css: [
    '@/assets/css/tailwind.css'
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  }
}
