<template>
  <svg
    class="fixed inset-0 w-full h-full pointer-events-none z-0 text-white/40"
    viewBox="-20 -20 140 140"
    preserveAspectRatio="xMinYMin slice"
    aria-hidden="true"
  >
    <g
      class="intro-appear animate-slow-rotate"
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
  0%   { opacity: 0; transform: translateY(-5%) scale(0.96); }
  60%  { opacity: 1; transform: translateY(0) scale(1.02); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes slow-rotate {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* intro fade-in happens once */
.intro-appear {
  animation: intro 2s ease-out forwards;
  animation-delay: 0.5s; /* small pause before it starts */
}

/* rotation begins after intro completes */
.animate-slow-rotate {
  animation: slow-rotate 120s linear infinite;
  animation-delay: 6s; /* starts right after intro ends */
  transform-origin: 50% 50%;
}
</style>