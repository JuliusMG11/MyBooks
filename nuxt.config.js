const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },
 
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070', height: '4px' },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'

  },

  /*
  ** Global CSS
  */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
      '~assets/styles/main.css',

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
    '~plugins/firebase.js',
    '~plugins/vuetify.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-1bfc5-default-rtdb.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    loaders: {
      sass: {
          prependData: "@import '~bulma/sass/utilities/_all.sass;",
        }
      },
    extend(config, ctx) {

    }
  },
  
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-1bfc5-default-rtdb.firebaseio.com'
 // router: {
   //linkActiveClass: 'active'
   // 
  },
  transition: {
      name: 'fade',
      mode: 'out-in'
   }

}
