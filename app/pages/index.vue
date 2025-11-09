<template>
    <div class="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div class="mx-auto px-0">
            <div class="grid grid-cols-12 gap-x-1 h-full">
                <div v-for="(n, i) in 12" :key="n" class="h-full" :class="`bg-neutral-${(n * 100) % 900}`"
                    :style="{ '--i': i }"">
                    <span class=" block text-xs text-center font-monolith cell">{{ n }}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="p-0 grid grid-cols-12 gap-x-4 gap-y-10">
        <div class="fixed top-4 right-12 z-50">
            <PlayMenuButton v-model:open="isOpen" />
        </div>
        <!-- Header spans all 12 columns -->
        <header class="col-span-12 mb-8 fade-in-delayed">
            <h1 :style="{
                fontFamily: font.family,
                fontWeight: font.weight,
                fontStyle: font.style
            }" class="transition-all duration-300 text-9xl tracking-normal -mt-4 text-shadow-lg fade-in-delayed">
                Play<span class="-ml-4">.</span>
            </h1>
            <p class="text-sm opacity-50 font-monolith uppercase tracking-wide -mt-3">
                Front-end dev · Design systems · Generative art
                <br />
                <span class="blink">—</span>
            </p>
        </header>

        <!-- Main area: two-column concept (content + side) -->
        <main class="col-span-12 md:col-span-8 space-y-12">
            <!-- <section>
        <h2 class="text-xl font-semibold mb-2">Selected Work</h2>
        <ul class="list-disc pl-5 space-y-1">
          <li><a class="underline" href="#">Project One</a> — short description.</li>
          <li><a class="underline" href="#">Project Two</a> — short description.</li>
          <li><a class="underline" href="#">Project Three</a> — short description.</li>
        </ul>
      </section> -->

            <!-- <section>
        <h2 class="text-xl font-semibold mb-2">About</h2>
        <p>20+ years building fast, accessible, clean web UI. Manchester, UK.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-2">Contact</h2>
        <p>
          <a class="underline" href="mailto:you@example.com">you@example.com</a>
        </p>
      </section> -->
        </main>

        <!-- Sidebar placeholder (spans 4 columns on medium+) -->
        <!-- <aside class="hidden md:block md:col-span-4 border-l pl-6">
      <h3 class="text-lg font-semibold mb-4">Experiments</h3>
      <ul class="space-y-2 text-sm opacity-80">
        <li><a href="#" class="underline">Ticker Wars</a></li>
        <li><a href="#" class="underline">List of Ghosts</a></li>
        <li><a href="#" class="underline">BeeGen</a></li>
      </ul>
    </aside> -->

        <!-- Footer spans all 12 columns -->
        <footer class="fixed inset-x-0 bottom-2 col-span-12 p-2.5 text-xs opacity-20 font-monolith">
            —
            <br />
            ©{{ year }} Tom Nichols
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isOpen = ref(false)

const year = new Date().getFullYear()

const fonts = [
    { family: '"TheGoodMonolith", sans-serif', weight: 400, style: 'normal' },
    { family: '"Apple Garamond", serif', weight: 400, style: 'italic' },
    { family: '"Helvetica", sans-serif', weight: 700, style: 'normal' },
    { family: '"TheGoodMonolith", sans-serif', weight: 400, style: 'normal' },
    { family: '"Helvetica", sans-serif', weight: 100, style: 'italic' },
    { family: '"Apple Garamond", serif', weight: 300, style: 'normal' }
]
const font = ref(fonts[0])

onMounted(() => {
    let i = 0
    let delay = 100          // start very fast (100ms between swaps)
    const totalCycles = 20  // total font changes before stopping
    const slowFactor = 1.1 // smaller = slower slowdown (gentler taper)

    function cycle() {
        font.value = fonts[i % fonts.length]
        i++

        if (i < totalCycles) {
            setTimeout(cycle, delay)
            delay *= slowFactor
        } else {
            // 🎯 pick a random font when done
            const random = Math.floor(Math.random() * fonts.length)
            font.value = fonts[random]
        }
    }

    // start after 1s
    setTimeout(cycle, 1100)
})
</script>
