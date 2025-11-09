<template>
  <svg
    class="fixed inset-0 w-full h-full pointer-events-none z-0 text-white/40"
    viewBox="-20 -20 140 140"
    preserveAspectRatio="xMinYMin slice"
    aria-hidden="true"
  >
    <g
      class="intro-appear animate-slow-rotate opacity-0"
      style="transform-origin:50% 50%; transform-box:view-box;"
    >
      <polygon
        points="-5,-5 105,50 -5,105"
        fill="none"
        stroke="currentColor"
        stroke-opacity="0.25"
        stroke-width="2"
        vector-effect="non-scaling-stroke"
        stroke-linejoin="miter"
      />
    </g>
  </svg>
</template>

<style scoped>
@keyframes intro {
  0%   { opacity: 0; transform: translateY(0) scale(1.01); }
  90%  { opacity: 1; transform: translateY(0) scale(0.99); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes slow-rotate {
  0%   { transform: rotate(-1deg); }
  1%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* run intro once, then start the slow rotation */
.intro-appear.animate-slow-rotate {
  animation:
    intro 1s ease-out 1s forwards,
    slow-rotate 120s linear 5s infinite;
    transform-origin: 50% 50%;
}
</style>