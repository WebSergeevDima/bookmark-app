<template>
  <div class="auth">
    <h1>Mock Marquee</h1>
    <ButtonText @click="redirectToMain">Вход</ButtonText>
  </div>
</template>

<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function redirectToMain() {
  router.push({
    name: 'main'
  })
}
</script>

<style scoped>
  .auth {
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
    font-size: 52px;
  }
</style>
