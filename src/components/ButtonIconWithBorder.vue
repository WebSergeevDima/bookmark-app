<template>
  <button class="button" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot />
  </button>
</template>

<script setup lang="ts">
const { size = 48 } = defineProps<{ size?: number }>()
</script>

<style scoped>
.button {
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 48px;
  height: 48px;
  flex-direction: column;
  border: 3px solid var(--color-bg);
  background: transparent;
}

.button:hover {
  background-color: var(--color-fg-hover);
}
</style>
