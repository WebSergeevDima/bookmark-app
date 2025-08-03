<template>
  <div class="not-found">
    <h1>4 0 4</h1>
    <ButtonText @click="redirectToMain">На главную</ButtonText>
  </div>
</template>

<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function redirectToMain() {
  router.push('/')
}
</script>

<style scoped>
  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 50px;
    flex-direction: column;
  }

  h1 {
    color: var(--color-fg);
    font-weight: 700;
    font-size: 128px;
  }
</style>
