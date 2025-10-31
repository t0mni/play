<template>
    <div class="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div class="mx-auto px-0">
            <div class="grid grid-cols-12 gap-x-1 h-full">
                <div v-for="n in 12" :key="n" class="h-full" :class="`bg-neutral-${(n * 100) % 900}`">
          <span class=" block text-[10px] leading-8 text-center opacity-60">{{ n }}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="p-0 grid grid-cols-12 gap-x-4 gap-y-10">
        <!-- Header spans all 12 columns -->
        <header class="col-span-12 mb-8">
            <h1 class="text-9xl">Play.</h1>
            <p class="text-sm opacity-70">
                Front-end dev · Design systems · Generative art
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
        <footer class="fixed inset-x-0 bottom-2 col-span-12 pt-4 text-sm opacity-20">
            ©{{ year }} Tom Nichols
        </footer>
    </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>