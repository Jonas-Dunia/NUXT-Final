<template>
  <section class="page">
    <h1>Americas</h1>
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
import axios from 'axios'
import CountryCard from '@/components/CountryCard.vue'

const { data, pending, error } = await useAsyncData('americas', async () => {
  const fields = 'name,flags,capital,population,subregion,cca3'
  const url = `https://restcountries.com/v3.1/region/Americas?fields=${fields}`
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