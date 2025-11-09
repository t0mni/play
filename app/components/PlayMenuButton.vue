<template>
  <button
    type="button"
    :aria-expanded="open ? 'true' : 'false'"
    :aria-label="open ? 'Close menu' : 'Open menu'"
    class="inline-flex items-center gap-2 select-none z-50 cursor-pointer"
    @click="$emit('update:open', !open)"
  >
    <!-- Triangle ▶ -->
    <svg
      :class="[
        'h-6 w-6 transition-transform duration-200',
        open ? 'rotate-90' : 'rotate-0' // ▶ (right) → ▼ (down)
      ]"
      viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
    >
      <!-- equilateral-ish triangle pointing right -->
      <polygon points="8,5 19,12 8,19" />
    </svg>

  </button>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>()
defineEmits<{ (e: 'update:open', v: boolean): void }>()
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  svg { transition: none !important; }
}
</style>