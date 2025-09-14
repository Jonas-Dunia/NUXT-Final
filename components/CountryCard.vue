<template>
  <article class="card">
    <img v-if="flag" :src="flag" :alt="`Flag of ${name}`" class="flag" />
    <h3 class="title">{{ name }}</h3>

    <ul class="facts">
      <li><strong>Capital:</strong> {{ capitalText }}</li>
      <li><strong>Population:</strong> {{ population.toLocaleString() }}</li>
      <li><strong>Subregion:</strong> {{ subregion || '—' }}</li>
    </ul>

    <div class="actions">
      <NuxtLink :to="`/country/${cca3}`">Open details page</NuxtLink>
      <button type="button" @click="expanded = !expanded" class="btn">Toggle more</button>
    </div>

    <Transition name="fade">
      <div v-if="expanded" class="more">
        <p>This is a simple UI interaction area you can style or extend.</p>
      </div>
    </Transition>
  </article>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  flag: { type: String, required: true },
  capital: { type: [Array, String], default: () => [] },
  population: { type: Number, required: true },
  subregion: { type: String, default: '' },
  cca3: {
    type: String,
    required: true,
    validator: v => typeof v === 'string' && v.length === 3
  }
})

const expanded = ref(false)
const capitalText = computed(() =>
  Array.isArray(props.capital) ? props.capital.join(', ') : (props.capital || '—')
)
</script>

<style lang="scss" scoped>
.card {
  padding: 1rem;
  border: 1px solid #ddd; border-radius: 8px;
  background: #fff;
}
.flag { width: 100%; height: 120px; object-fit: cover; border-radius: 6px; }
.title { margin: .5rem 0 0; font-size: 1.1rem; }
.facts { margin: .5rem 0; padding-left: 1rem; }
.actions { display: flex; gap: .75rem; align-items: center; }
.btn { padding: .4rem .75rem; border: 1px solid #333; border-radius: 4px; background: transparent; cursor: pointer; }
.fade-enter-active, .fade-leave-active { transition: opacity .2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.more { margin-top: .5rem; font-size: .9rem; color: #444; }
</style>