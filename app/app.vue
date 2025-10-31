<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL || '/'
useHead({
  link: [{ rel: 'stylesheet', href: base + 'fonts.css' }]
})
</script>