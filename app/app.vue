<template>
  <FullscreenPlayOutline :selected-image="selectedImage" />
  <div class="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black opacity-80 z-0"></div>
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
    { rel: 'stylesheet', href: base + 'fonts.css' },
    { rel: 'preload', as: 'font', href: base + 'fonts/AlphaLyrae-Medium.woff2', type: 'font/woff2', crossorigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap' }
  ],
  meta: [
    { name: 'theme-color', content: '#000000' }
  ]
})

const colorClasses = [
  'bg-black',
  'bg-indigo-950',
  'bg-emerald-950',
  'bg-cyan-950',
  'bg-zinc-900',
  'bg-stone-900',
  'bg-neutral-950'
]

const images = [
  'https://picsum.photos/seed/milkyway/1600/900',
  'https://picsum.photos/seed/fjord/1600/900',
  'https://picsum.photos/seed/ocean/1600/900',
  'https://picsum.photos/seed/desert/1600/900',
  'https://picsum.photos/seed/glacier/1600/900',
  'https://picsum.photos/seed/sky/1600/900',
  'https://picsum.photos/seed/aurora/1600/900',
  'https://picsum.photos/seed/fjord/1600/900',
]

const bgClass = ref('bg-black')
const selectedImage = useState('selectedImage', () => '')

onMounted(() => {
  bgClass.value = colorClasses[Math.floor(Math.random() * colorClasses.length)]
  document.body.classList.remove(...colorClasses)
  document.body.classList.add(bgClass.value)

  selectedImage.value = images[Math.floor(Math.random() * images.length)]
})
</script>