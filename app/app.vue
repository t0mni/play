<template>
  <div class="min-h-screen text-white/95">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL || '/'
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.cdnfonts.com' },
    { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/thegoodmonolith' }, // CDN font
    { rel: 'stylesheet', href: base + 'fonts.css' } // if you also self-host Apple Garamond
  ]
})
</script>