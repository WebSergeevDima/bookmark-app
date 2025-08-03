import { defineStore } from 'pinia'
import type { Category } from '@/interfaces/category.ts'
import { ref } from 'vue'
import { API_ROUTES, http } from '@/api.ts'
import { v4 as uuidv4 } from 'uuid'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])

  async function fetchCategories() {
    const { data } = await http.get(API_ROUTES.categories)
    categories.value = data
  }

  async function createCategory() {
    const { data } = await http.post(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    })

    categories.value.push(data)
  }

  function getCategoryByAlias(alias: string | string[]): Category | undefined {
    console.log('alias:: ', alias)
    if (typeof alias == 'string') {
      return categories.value.find((item) => item.alias == alias)
    }
    return
  }

  return {
    categories,
    fetchCategories,
    createCategory,
    getCategoryByAlias,
  }
})
