import { defineStore } from 'pinia'
import type { Category } from '@/interfaces/category.ts'
import { ref } from 'vue'
import { API_ROUTES, client } from '@/api.ts'
import { v4 as uuidv4 } from 'uuid'
import type { PutCategoryParams } from '@/interfaces/bookmark.ts'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])

  async function fetchCategories() {
    const { data } = await client().get(API_ROUTES.categories)
    categories.value = data
  }

  async function createCategory() {
    const { data } = await client().post(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    })

    categories.value.push(data)
  }

  function getCategoryByAlias(alias: string | string[]): Category | undefined {
    if (typeof alias == 'string') {
      return categories.value.find((item) => item.alias == alias)
    }
    return
  }

  async function updateBookmarks(id: number, params: PutCategoryParams) {
    console.log('params: ', params)
    await client().put<Category>(API_ROUTES.categories + '/' + id, params)

    fetchCategories()
  }


  return {
    categories,
    fetchCategories,
    createCategory,
    getCategoryByAlias,
    updateBookmarks,
  }
})
