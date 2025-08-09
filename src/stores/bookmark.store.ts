import { defineStore } from 'pinia'
import type { Bookmark } from '@/interfaces/bookmark.ts'
import { ref } from 'vue'
import { API_ROUTES, client } from '@/api.ts'

export const useBookmarkStore = defineStore('bookmark', () => {
  const bookmarks = ref<Bookmark[]>()
  const activeSort = ref<'date' | 'title'>('date')

  async function fetchBookmarks(categoryId: number, sort: string) {
    const { data } = await client().get(API_ROUTES.bookmarks.get(categoryId), {
      sort: 'date',
    })

    bookmarks.value = data
  }

  async function deleteBookmarks(id: number, categoryId: number) {
    await client().delete(API_ROUTES.bookmarks.delete(id))
    fetchBookmarks(categoryId)
  }

  return {
    bookmarks,
    fetchBookmarks,
    deleteBookmarks,
    activeSort
  }
})
