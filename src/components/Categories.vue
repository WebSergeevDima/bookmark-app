<template>
  <ul class="list" v-if="storeCategory.categories">
    <li class="listItem" v-for="category of storeCategory.categories" :key="category.id">
      <a href="#" class="link">{{ category.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useCategoryStore } from '@/stores/category.store.ts'
import { onMounted } from 'vue'

const storeCategory = useCategoryStore()

onMounted(() => {
  storeCategory.fetchCategories()
})
</script>

<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.link {
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: var(--color-fg);
  text-decoration: none;
}

.link.active {
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
}
</style>
