import { defineStore } from 'pinia'
import type { Bookmark } from '@/interfaces/bookmark.ts'
import { ref } from 'vue'
import { API_ROUTES, http } from '@/api.ts'

export const useBookmarkStore = defineStore('bookmark', () => {
  const bookmarks = ref<Bookmark[]>()

  async function fetchBookmarks(categoryId: number) {
    const { data } = await http.get(API_ROUTES.bookmarks(categoryId), {
      sort: 'date',
    })

    bookmarks.value = data
  }

  return {
    bookmarks,
    fetchBookmarks,
  }
})
