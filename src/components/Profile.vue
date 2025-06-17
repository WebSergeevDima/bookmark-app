<script setup lang="ts">
type ProfilePropsType = {
  name: string
}

const { name } = defineProps<ProfilePropsType>()
</script>

<template>
  <div class="profile">
    <img src="/public/avatar.png" class="profileImage" alt="Изображение пользователя" />
    <div>Привет, <strong>{{ name }}!</strong></div>
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
