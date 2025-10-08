<template>
  <button
    :class="['lg-btn', `lg--${variant}`, `lg--${size}`, { 'lg--disabled': disabled }]"
    :disabled="disabled"
    :aria-disabled="disabled ? 'true' : 'false'"
    @pointerdown="onPointerDown"
    @pointerup="onPointerUp"
    @pointerleave="onPointerLeave"
    @click="$emit('click', $event)"
    ref="btn"
  >
    <!-- glass background + subtle noise/blur -->
    <span class="lg__glass" aria-hidden="true"></span>

    <!-- animated liquid blob (SVG) -->
    <svg
      class="lg__blob"
      viewBox="0 0 220 120"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 24 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>

      <g filter="url(#goo)">
        <circle class="blob b1" cx="40" cy="60" r="28" />
        <circle class="blob b2" cx="85" cy="40" r="20" />
        <circle class="blob b3" cx="150" cy="60" r="26" />
        <circle class="blob b4" cx="190" cy="35" r="14" />
      </g>
    </svg>

    <!-- content slot -->
    <span class="lg__content">
      <slot>Button</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeUnmount } from 'vue'

const props = defineProps({
  variant: { type: String as () => 'primary' | 'secondary' | 'accent', default: 'primary' },
  size: { type: String as () => 'md' | 'sm' | 'lg', default: 'md' },
  disabled: { type: Boolean, default: false },
})

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()

const btn = ref<HTMLElement | null>(null)

function onPointerDown(e: PointerEvent) {
  if (props.disabled) return
  btn.value?.classList.add('lg--pressed')
}

function onPointerUp() {
  btn.value?.classList.remove('lg--pressed')
}

function onPointerLeave() {
  btn.value?.classList.remove('lg--pressed')
}
</script>

<style scoped>
/* base reset */
.lg-btn {
  --glass-bg: rgba(255, 255, 255, 0.12);
  --glass-border: rgba(255, 255, 255, 0.18);
  --accent: rgba(83, 107, 128, 0.8);
  --accent-2: rgba(102, 127, 149, 0.65);

  display: inline-grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  padding: 14px 28px;
  cursor: pointer;
  appearance: none;
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px) saturate(1.05);
  -webkit-backdrop-filter: blur(8px) saturate(1.05);
  transition:
    transform 180ms cubic-bezier(0.2, 0.9, 0.3, 1),
    box-shadow 180ms ease,
    border-color 180ms ease;
  user-select: none;
  background: transparent;
  color: white;
  min-height: 44px;
  line-height: 1;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  will-change: transform;
}

/* sizes */
.lg--sm {
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
}
.lg--md {
  padding: 12px 26px;
  border-radius: 12px;
  font-size: 1rem;
}
.lg--lg {
  padding: 16px 36px;
  border-radius: 16px;
  font-size: 1.05rem;
}

/* variants */
.lg--primary {
  --glass-bg: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  --accent: rgba(83, 107, 128, 0.95);
  box-shadow: 0 6px 18px rgba(16, 24, 32, 0.25);
  color: #fff;
}

/* subtle secondary */
.lg--secondary {
  --glass-bg: linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.01));
  --accent: rgba(80, 80, 80, 0.9);
  color: #fff;
}

/* accent example */
.lg--accent {
  --glass-bg: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  --accent: rgba(124, 58, 237, 0.95);
}

/* glass layer (semi-transparent) */
.lg__glass {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: var(--glass-bg);
  border-radius: inherit;
  pointer-events: none;
}

/* blob SVG sits behind content but above glass, subtle opacity */
.lg__blob {
  position: absolute;
  right: -12%;
  top: -8%;
  width: 150%;
  height: 140%;
  z-index: 1;
  opacity: 0.12;
  transform-origin: center;
  pointer-events: none;
  filter: blur(6px);
}

/* blob circles styling + animation */
.blob {
  fill: var(--accent);
  transform-origin: center;
}

/* different animation timing for natural movement */
.b1 {
  animation: blobMove 6s ease-in-out infinite;
}
.b2 {
  animation: blobMove 7.2s ease-in-out infinite;
  transform-origin: 50% 50%;
}
.b3 {
  animation: blobMove 5.4s ease-in-out infinite;
}
.b4 {
  animation: blobMove 8s ease-in-out infinite;
}

@keyframes blobMove {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  25% {
    transform: translate3d(8px, -6px, 0) scale(1.06);
  }
  50% {
    transform: translate3d(0, 8px, 0) scale(1);
  }
  75% {
    transform: translate3d(-6px, -4px, 0) scale(0.96);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

/* content above everything */
.lg__content {
  position: relative;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  pointer-events: none; /* keep clicks to button */
}

/* pressed state */
.lg--pressed {
  transform: translateY(2px) scale(0.995);
  box-shadow: 0 3px 10px rgba(16, 24, 32, 0.18) inset;
}

/* disabled */
.lg--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* small focus ring for accessibility */
.lg-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(100, 140, 200, 0.18);
  border-color: rgba(100, 140, 200, 0.6);
}

/* browser fallbacks and performance tweaks */
@supports not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
  .lg__glass {
    background: rgba(255, 255, 255, 0.06);
  }
  .lg__blob {
    opacity: 0.06;
    filter: none;
  }
}

/* smaller screens adjustments */
@media (max-width: 420px) {
  .lg--md {
    padding: 10px 18px;
    font-size: 0.96rem;
  }
  .lg__blob {
    right: -18%;
    top: -12%;
    width: 180%;
    opacity: 0.1;
  }
}
</style>
