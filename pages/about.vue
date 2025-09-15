<script setup>
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'About page with details about the site.', key: 'description' }
  ],
  link: [
    { rel: 'canonical', href: 'https://mynuxtproject.netlify.app/about' }
  ]
})

useSeoMeta({
  ogTitle: 'About · My Project',
  ogDescription: 'About page with details about the site.',
  ogUrl: 'https://mynuxtproject.netlify.app/about'
})
</script>