<template>
  <Button class="button">
    <slot/>
  </Button>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .button {
    background-color: var(--color-fg);
    font-size: 18px;
    color: white;
    border-radius: 100px;
    padding: 0 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 50px;
    border: 0;
  }
</style>
