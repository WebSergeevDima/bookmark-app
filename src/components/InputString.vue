<template>
  <input class="input" v-model="data">
</template>

<script setup lang="ts">
const data = defineModel<string>()
</script>

<style scoped>
.input {
  border: 0;
  border-bottom: 1px var(--color-fg) solid;
  color: var(--color-fg);
  min-width: 274px;
  font-size: 24px;
}

.input::placeholder {
  color: var(--color-inactive);
}
</style>
