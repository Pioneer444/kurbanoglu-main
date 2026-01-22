// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },

  // Enable inline SSR styles for proper CSS rendering
  features: {
    inlineStyles: true
  },

  // Vite configuration for better CSS handling and Cloudflare Tunnel support
  vite: {
    css: {
      devSourcemap: true
    },
    server: {
      // Allow Cloudflare Tunnel and other external hosts
      allowedHosts: ['all'],
      hmr: {
        // Use client host for HMR through tunnel
        clientPort: 443,
        protocol: 'wss'
      }
    }
  },

  // Modules
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint'
  ],

  // Color mode - default to light
  colorMode: {
    preference: 'light'
  },

  // Components configuration - disable path prefix for cleaner imports
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  // Global CSS
  css: ['~/assets/css/main.css'],

  // Nuxt UI configuration
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'gray'
    }
  },

  // Fonts configuration
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Poppins', provider: 'google' }
    ]
  },

  // Image configuration
  image: {
    domains: ['picsum.photos']
  },

  // Cloudflare Pages deployment configuration
  nitro: {
    preset: 'cloudflare-pages'
  },

  // Runtime configuration for WordPress GraphQL and other environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    wordpressGraphqlEndpoint: process.env.WORDPRESS_GRAPHQL_ENDPOINT || '',

    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://kurbanoglu.com.tr'
    }
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false // Set to true for CI/CD, disabled for faster dev
  },

  // App configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'tr'
      },
      title: 'Kurbanoğlu Mühendislik',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kurbanoğlu Mühendislik - Endüstriyel Elektrik Taahhüt ve Danışmanlık' }
      ],
      // Tailwind CSS CDN as fallback
      script: [
        { src: 'https://cdn.tailwindcss.com', tagPosition: 'head' }
      ]
    }
  },

  // Compatibility date
  compatibilityDate: '2026-01-01'
})
