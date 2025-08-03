<template>
  <div class="auth">
    <h1>Mock Marquee</h1>
    <form class="form" @submit="onSubmit">
      <InputString v-model="form.email" placeholder="Введите email" />
      <InputString v-model="form.password" placeholder="Введите пароль" />
      <ButtonText type="submit">Вход</ButtonText>
    </form>
  </div>
</template>

<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue'
import { useRouter } from 'vue-router'
import InputString from '@/components/InputString.vue'
import { ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth.store.ts'

const router = useRouter()
const storeAuth = useAuthStore()

const form = ref<{email?: string, password?: string}>({})

function redirectToMain() {
  router.push({
    name: 'main'
  })
}

function onSubmit(event: Event) {
  event.preventDefault()

  if(!form.value.email || !form.value.password) {
    return
  }

  storeAuth.login(form.value.email, form.value.password)
}

watch(() => storeAuth.getToken, () => {
    if(storeAuth.getToken) {
      router.push({
        name: 'main'
      })
    }
})
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

  .form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
</style>
