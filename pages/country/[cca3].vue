<template>
  <section class="page">
    <p><NuxtLink to="/regions/africa">← Back to regions</NuxtLink></p>
    <h1>{{ country?.name?.common || 'Country' }}</h1>
    <img v-if="country?.flags?.svg" :src="country.flags.svg" :alt="`Flag of ${country.name.common}`" style="max-width:320px;" />

    <ul v-if="country">
      <li><strong>Official:</strong> {{ country.name.official }}</li>
      <li><strong>Capital:</strong> {{ (country.capital || []).join(', ') }}</li>
      <li><strong>Region:</strong> {{ country.region }} / {{ country.subregion }}</li>
      <li><strong>Population:</strong> {{ country.population?.toLocaleString() }}</li>
    </ul>
  </section>
</template>

<script setup>
import axios from 'axios'
const route = useRoute()

const { data } = await useAsyncData(
  () => `country-${route.params.cca3}`,
  async () => {
    const url = `https://restcountries.com/v3.1/alpha/${route.params.cca3}`
    const res = await axios.get(url)
    return Array.isArray(res.data) ? res.data[0] : res.data
  }
)

const country = computed(() => data.value || null)
</script>

<style lang="scss" scoped>
.page { padding: 1rem; }
</style>