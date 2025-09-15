<template>
  <section class="page">
    <h1>Africa</h1>
    <p v-if="pending">Loading…</p>
    <div v-else class="grid">
      <CountryCard
        v-for="c in countries"
        :key="c.cca3"
        :name="c.name.common"
        :flag="c.flags?.svg || c.flags?.png"
        :capital="c.capital"
        :population="c.population"
        :subregion="c.subregion"
        :cca3="c.cca3"
      />
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Africa',
  meta: [
    { name: 'description', content: 'Countries in Africa with flags, population and more.', key: 'description' }
  ],
  link: [
    { rel: 'canonical', href: 'https://mynuxtproject.netlify.app/regions/africa' }
  ]
})

useSeoMeta({
  ogTitle: 'Africa · My Project',
  ogDescription: 'Countries in Africa with flags, population and more.',
  ogUrl: 'https://mynuxtproject.netlify.app/regions/africa'
})

import axios from 'axios'
import CountryCard from '@/components/CountryCard.vue'

const { data, pending, error } = await useAsyncData('africa', async () => {
  const fields = 'name,flags,capital,population,subregion,cca3'
  const url = `https://restcountries.com/v3.1/region/Africa?fields=${fields}`
  const res = await axios.get(url)
  return res.data
})

const countries = computed(() => data.value || [])
</script>

<style lang="scss" scoped>
.page { padding: 1rem; }
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
}
</style>