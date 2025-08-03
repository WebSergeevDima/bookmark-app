<template>
  <div>Category {{ category?.name }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/category.store.js'
import { onMounted, ref, watch } from 'vue'
import { Category } from '@/interfaces/category.ts'
import { useBookmarkStore } from '@/stores/bookmark.store.ts'

const storeCategory = useCategoryStore()
const storeBookmark = useBookmarkStore()
const route = useRoute()
const category = ref<Category>()

watch(
  () => ({
    alias: route.params.alias,
    categories: storeCategory.categories,
  }),
  (data) => {
    category.value = storeCategory.getCategoryByAlias(data.alias)
    if(category.value) {
      storeBookmark.fetchBookmarks(category.value.id)
    }
  },
)

onMounted(() => {
  category.value = storeCategory.getCategoryByAlias(route.params.alias)
  if(category.value) {
    storeBookmark.fetchBookmarks(category.value.id)
  }
})
</script>

<style scoped></style>
