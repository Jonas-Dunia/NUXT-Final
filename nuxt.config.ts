// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      titleTemplate: '%s · My Project',
      title: 'Home',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Default/fallback SEO (page-level code will override description)
        { name: 'description', content: 'Default description for my Nuxt site.' },
        // Open Graph (fallbacks)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'My Project' },
        { property: 'og:title', content: 'My Project' },
        { property: 'og:description', content: 'Default description for my Nuxt site.' },
        { property: 'og:image', content: 'https://mynuxtproject.netlify.app/og-default.jpg' },
        { property: 'og:url', content: 'https://mynuxtproject.netlify.app/' },
        // Twitter (fallbacks)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'My Project' },
        { name: 'twitter:description', content: 'Default description for my Nuxt site.' },
        { name: 'twitter:image', content: 'https://mynuxtproject.netlify.app/og-default.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://mynuxtproject.netlify.app/' }
      ]
    }
  }
})
