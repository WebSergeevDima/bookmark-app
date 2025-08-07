import { defineStore } from 'pinia'
import type { Bookmark, PutCategoryParams } from '@/interfaces/bookmark.ts'
import { ref } from 'vue'
import { API_ROUTES, client } from '@/api.ts'

export const useBookmarkStore = defineStore('bookmark', () => {
  const bookmarks = ref<Bookmark[]>()

  async function fetchBookmarks(categoryId: number) {
    const { data } = await client().get(API_ROUTES.bookmarks(categoryId), {
      sort: 'date',
    })

    bookmarks.value = data
  }
  return {
    bookmarks,
    fetchBookmarks,
  }
})
