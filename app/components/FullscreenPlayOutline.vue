<template>
  <svg
    class="fixed inset-0 w-full h-full pointer-events-none z-0 text-white/40"
    viewBox="-20 -20 140 140"
    preserveAspectRatio="xMinYMin slice"
    aria-hidden="true"
  >
    <g class="spin" style="transform-origin:50% 50%; transform-box:view-box;">
      <!-- Start drawing at TOP-LEFT corner (-5,-5), go to tip, then bottom-left, then close -->
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

<style scoped>

/* Single-head draw: hide whole path, slide one dash along until fully revealed */
.draw{
  stroke-dasharray: 10000; 
  stroke-dashoffset: 10000;  /* fully hidden initially */
  animation: draw 8s cubic-bezier(.2,.8,.2,1) 1s forwards; /* delay .4s */
}

/* After the draw completes (≈3.2s), begin slow rotation */
.spin{
  animation: slow-rotate 120s linear infinite;
  animation-delay: .7s;
  transform-origin: 50% 50%;
}

@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes slow-rotate { to { transform: rotate(360deg); } }

/* Respect reduced-motion */
@media (prefers-reduced-motion: reduce){
  .draw{ animation: none; stroke-dashoffset: 0; }
  .spin{ animation: none; }
}
</style>