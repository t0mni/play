<template>
  <svg
    class="fixed inset-0 w-full h-full pointer-events-none text-white/40 animate-slow-rotate"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMinYMin slice"
    aria-hidden="true"
  >
    <!-- Touches the viewBox edges -->
    <polygon
      points="0,0 100,50 0,100"
      fill="none"
      stroke="currentColor"
      stroke-opacity="0.25"
      stroke-width="2"
      vector-effect="non-scaling-stroke"
      stroke-linejoin="miter"
    />
  </svg>
</template>

<style scoped>
@keyframes slow-rotate {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-slow-rotate {
  animation: slow-rotate 120s linear infinite; /* full rotation every 2 mins */
  transform-origin: 50% 50%;
}
</style>