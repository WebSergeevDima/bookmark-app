<script setup lang="ts">
import Profile from '@/components/Profile.vue'
import Categories from '@/components/Categories.vue'

</script>

<template>
 <div class="app">
   <nav class="nav">
     <Profile />
     <Categories />
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
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
</style>
