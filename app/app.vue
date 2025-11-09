<template>
  <FullscreenPlayOutline />
  <div :class="[bgClass, 'min-h-screen text-white p-2.5 transition-colors duration-700']">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const base = useRuntimeConfig().app.baseURL || '/'
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.cdnfonts.com' },
    { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/thegoodmonolith' }, // CDN font
    { rel: 'stylesheet', href: base + 'fonts.css' } // if you also self-host Apple Garamond
  ]
})
const colorClasses = [
  'bg-black',
  'bg-blue-950',
  'bg-slate-900',
  'bg-neutral-950'
]

const bgClass = ref('bg-black')

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * colorClasses.length)
  bgClass.value = colorClasses[randomIndex]
})
</script>