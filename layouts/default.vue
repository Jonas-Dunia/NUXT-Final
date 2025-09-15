<template>
  <div>
    <header class="site-header" style="padding:1rem;border-bottom:1px solid #eee">
      <nav style="display:flex;gap:1rem">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/regions/africa">Africa</NuxtLink>
        <NuxtLink to="/regions/americas">Americas</NuxtLink>
      </nav>
    </header>

    <!-- THIS renders the page content -->
    <slot />

    <footer class="site-footer" style="padding:1rem;border-top:1px solid #eee">
      © My Project
    </footer>
  </div>
</template>
