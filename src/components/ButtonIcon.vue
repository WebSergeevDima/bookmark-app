<template>
  <button class="button" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot />
  </button>
</template>

<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>()
</script>

<style scoped>
.button {
  background-color: var(--color-fg);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
}

.button:hover {
  background-color: var(--color-fg-hover);
}
</style>
