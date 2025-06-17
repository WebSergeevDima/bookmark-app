<script setup lang="ts">
import Profile from '@/components/Profile.vue'
import { onMounted, ref } from 'vue'
import { API_ROUTES } from '@/api.ts'
import type { IProfile } from '@/interfaces/profile.ts'
const profile = ref<IProfile | undefined>();
async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile);
  const res = (await data.json()) as IProfile;
  profile.value = res;
}

onMounted(() => {
  fetchProfile()
})
</script>

<template>
 <div class="app">
   <nav class="nav">
     <Profile v-if="profile" :name="profile.name" />
   </nav>
   <main>Content</main>
 </div>
</template>

<style scoped>
  .app {
    display: flex;
    gap: 200px;
    min-height: calc(100vh - 140px);
    max-width: 1450px;
    margin: 140px auto 0 auto;
  }

  .nav {
    min-width: 200px;
  }
</style>
