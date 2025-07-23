<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store.ts'
import { onMounted } from 'vue'

const storeProfile = useProfileStore()


onMounted(() => {
  storeProfile.fetchProfile()
})
</script>

<template>
  <div class="profile" v-if="storeProfile.profile">
    <img src="/public/avatar.png" class="profileImage" alt="Изображение пользователя" />
    <div>Привет, <strong>{{ storeProfile.profile.name }}!</strong></div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  gap: 42px;
  font-size: 18px;
}

.profileImage {
  width: 80px;
  height: 80px;
  border-radius: 100%;
}
</style>
