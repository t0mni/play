<template>
    <button type="button" :aria-expanded="open ? 'true' : 'false'" :aria-label="open ? 'Close menu' : 'Open menu'"
        class="inline-flex items-center justify-center h-10 w-10 text-white z-50 cursor-alias" @click="$emit('update:open', !open)">

        <svg class="transition-transform duration-300 ease-in-out" :class="open ? 'rotate-0' : '-rotate-90'"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"
            stroke-linejoin="round" aria-hidden="true">
            <rect x="7" y="4" width="3" height="16" rx="1" />
            <rect x="14" y="4" width="3" height="16" rx="1" />
        </svg>

    </button>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>()
defineEmits<{ (e: 'update:open', v: boolean): void }>()
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
    svg {
        transition: none !important;
    }
}
</style>