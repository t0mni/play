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
    { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/thegoodmonolith' }, 
    { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/maria-2' }, 
    { rel: 'stylesheet', href: base + 'fonts.css' } 
  ],
  meta: [
    { name: 'theme-color', content: '#000000' } 
  ]  
})
const colorClasses = [
  'bg-black',
  'bg-blue-950',
  'bg-emerald-950',
  'bg-cyan-950',
  'bg-slate-900',
  'bg-stone-900',
  'bg-neutral-950'
]

const bgClass = ref('bg-black')

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * colorClasses.length)
  bgClass.value = colorClasses[randomIndex]
  document.body.classList.remove(...colorClasses)
  document.body.classList.add(bgClass.value)
})
</script>