<template>
  <svg
    class="fixed inset-0 w-full h-full pointer-events-none z-0 text-white/40"
    viewBox="-20 -20 140 140"
    preserveAspectRatio="xMinYMin slice"
    aria-hidden="true"
  >
    <defs>
      <clipPath id="triangle-clip" clipPathUnits="userSpaceOnUse">
        <path
          class="clip-spin"
          d="M -5 -5 L 105 50 L -5 105 Z"
          style="transform-origin:50% 50%; transform-box:view-box;"
        />
      </clipPath>
    </defs>

    <!-- Full viewport image, fades in after draw completes -->
    <image
      class="reveal"
      ref="imgEl"
      x="-20" y="-20"
      width="140" height="140"
      preserveAspectRatio="xMidYMid slice"
      clip-path="url(#triangle-clip)"
    />

    <!-- Spinning stroke on top -->
    <g class="spin" style="transform-origin:50% 50%; transform-box:view-box;">
      <path
        class="draw"
        d="M -5 -5 L 105 50 L -5 105 Z"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        vector-effect="non-scaling-stroke"
      />
    </g>
  </svg>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  selectedImage: {
    type: String,
    default: ''
  }
})

const imgEl = ref(null)

watch(() => props.selectedImage, (val) => {
  if (imgEl.value && val) {
    imgEl.value.setAttribute('href', val)
  }
}, { immediate: true })
</script>

<style scoped>
.draw {
  stroke-dasharray: 10000;
  stroke-dashoffset: 10000;
  animation: draw 8s cubic-bezier(.2,.8,.2,1) 1s forwards;
}

.spin {
  animation: slow-rotate 160s linear infinite;
  animation-delay: .7s;
  transform-origin: 50% 50%;
}

.clip-spin {
  animation: slow-rotate 120s linear infinite;
  animation-delay: .7s;
  transform-origin: 50% 50%;
}

.reveal {
  opacity: 0;
  animation: fade-in 2s ease-out 1.6s forwards;
  mix-blend-mode: multiply;
}

@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes slow-rotate { to { transform: rotate(360deg); } }
@keyframes fade-in { to { opacity: 0.2; } }

@media (prefers-reduced-motion: reduce) {
  .draw { animation: none; stroke-dashoffset: 0; }
  .spin { animation: none; }
  .clip-spin { animation: none; }
  .reveal { animation: none; opacity: 1; }
}
</style>