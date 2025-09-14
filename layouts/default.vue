<template>
  <div>
    <header class="site-header">
      <nav class="nav">
        <NuxtLink to="/" exact>Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/regions/africa">Africa</NuxtLink>
        <NuxtLink to="/regions/americas">Americas</NuxtLink>
      </nav>
    </header>

    <!-- Page content renders here -->
    <slot />

    <footer class="site-footer">
      <p>&copy; {{ new Date().getFullYear() }} My Project</p>
    </footer>
  </div>
</template>

<script setup>
// no script needed here
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  gap: 1rem;
  a {
    text-decoration: none;
    &.router-link-exact-active {
      font-weight: 700;
      text-decoration: underline;
    }
  }
}
.site-header, .site-footer { padding: 1rem; }
</style>
