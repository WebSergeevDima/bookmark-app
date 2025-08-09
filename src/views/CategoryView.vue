<template>
  <div class="wrapper">
    <Header v-if="category" :category="category" />

    <BookmarkSort :option="storeBookmark.activeSort" @sort="sortBookmarks" />

    <div class="category-list">
      <BookmarkCard
        v-for="item in storeBookmark.bookmarks"
        :category_id="category.id"
        :key="item.id"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/category.store.js'
import { onMounted, ref, watch } from 'vue'
import { Category } from '@/interfaces/category.ts'
import { useBookmarkStore } from '@/stores/bookmark.store.ts'
import Header from '@/components/Header.vue'
import BookmarkCard from '@/components/BookmarkCard.vue'
import BookmarkSort from '@/components/BookmarkSort.vue'

const storeCategory = useCategoryStore()
const storeBookmark = useBookmarkStore()
const route = useRoute()
const category = ref<Category>()

function sortBookmarks(sort: string) {
  storeBookmark.activeSort = sort

  if(category.value) {
    storeBookmark.fetchBookmarks(category.value.id, storeBookmark.activeSort)
  }
}

watch(
  () => ({
    alias: route.params.alias,
    categories: storeCategory.categories,
  }),
  (data) => {
    category.value = storeCategory.getCategoryByAlias(data.alias)
    if(category.value) {
      storeBookmark.fetchBookmarks(category.value.id, storeBookmark.activeSort)
    }
  },
)

onMounted(() => {
  category.value = storeCategory.getCategoryByAlias(route.params.alias)
  if(category.value) {
    storeBookmark.fetchBookmarks(category.value.id, storeBookmark.activeSort)
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
}

.category-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 30px;
}
</style>
