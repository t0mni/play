<template>
  <div class="mx-auto max-w-3xl p-6">
    <header class="mb-8">
      <h1 class="text-3xl font-bold">Tom Nichols</h1>
      <p class="text-sm opacity-70">Front-end dev · Design systems · Generative art</p>
    </header>

    <main class="space-y-10">
      <section>
        <h2 class="text-xl font-semibold mb-2">Selected Work</h2>
        <ul class="list-disc pl-5 space-y-1">
          <li><a class="underline" href="#">Project One</a> — short description.</li>
          <li><a class="underline" href="#">Project Two</a> — short description.</li>
          <li><a class="underline" href="#">Project Three</a> — short description.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-2">About</h2>
        <p>20+ years building fast, accessible, clean web UI. Manchester, UK.</p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-2">Contact</h2>
        <p><a class="underline" href="mailto:you@example.com">you@example.com</a></p>
      </section>
    </main>

    <footer class="mt-12 border-t pt-4 text-sm opacity-70">
      © {{ year }} Tom Nichols
    </footer>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>