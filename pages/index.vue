<template>
  <section style="padding:1rem">
    <h1>It works 🎉</h1>
    <p>If you can see this, your layout + routing are wired correctly.</p>
  </section>
</template>

<script setup>
useHead({
  title: 'Home',
  meta: [
    // The `key` ensures this replaces the default description
    { name: 'description', content: 'Home page showing an overview of my project.', key: 'description' }
  ],
  link: [
    { rel: 'canonical', href: 'https://mynuxtproject.netlify.app/' }
  ]
})

// Optional: set OG/Twitter too
useSeoMeta({
  ogTitle: 'Home · My Project',
  ogDescription: 'Home page showing an overview of my project.',
  ogUrl: 'https://mynuxtproject.netlify.app/',
  ogImage: 'https://mynuxtproject.netlify.app/og-default.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Home · My Project',
  twitterDescription: 'Home page showing an overview of my project.',
  twitterImage: 'https://mynuxtproject.netlify.app/og-default.jpg'
})
</script>

<style scoped lang="scss">
.page { padding: 1rem; }
</style>